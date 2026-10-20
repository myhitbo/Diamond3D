// Mesures de performance du configurateur (serveur de production local requis sur :3100).
// Usage : node scripts/perf/measure.mjs [sortie.json]
//
// Limite importante : le rendu WebGL est logiciel (SwiftShader, sans GPU). Les images par
// seconde mesurées ici sont donc un plancher très pessimiste, pas une mesure d'appareil réel.
// Les temps de chargement et les volumes transférés, eux, sont représentatifs.
import { chromium, devices } from '@playwright/test';
import { writeFileSync } from 'node:fs';

const BASE = process.env.BASE_URL ?? 'http://localhost:3100';
const RUNS = Number(process.env.RUNS ?? 3);
const out = process.argv[2];

const SCENARIOS = [
  { name: 'ordinateur', context: { viewport: { width: 1440, height: 900 } }, cpu: 1, network: null, quality: 'high' },
  {
    name: 'mobile (CPU ×4, 4G lente)',
    context: { ...devices['Pixel 7'] },
    cpu: 4,
    // Profil « Slow 4G » de Lighthouse : 150 ms de latence, 1,6 Mbit/s descendant.
    network: { latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8 },
    quality: 'high',
  },
  {
    name: 'mobile, qualité réduite',
    context: { ...devices['Pixel 7'] },
    cpu: 4,
    network: { latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8 },
    quality: 'low',
  },
];

const median = (xs) => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)];

async function runOnce(browser, sc) {
  const ctx = await browser.newContext(sc.context);
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await cdp.send('Network.enable');
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  if (sc.network) await cdp.send('Network.emulateNetworkConditions', { offline: false, ...sc.network });
  if (sc.cpu > 1) await cdp.send('Emulation.setCPUThrottlingRate', { rate: sc.cpu });

  const types = {};
  const urls = new Map();
  cdp.on('Network.responseReceived', (e) => urls.set(e.requestId, { url: e.response.url, mime: e.response.mimeType }));
  cdp.on('Network.loadingFinished', (e) => {
    const r = urls.get(e.requestId);
    if (!r) return;
    const t = r.url.endsWith('.glb') ? 'modèle 3D' : r.mime.includes('javascript') ? 'JavaScript' : r.mime.includes('css') ? 'CSS' : r.mime.includes('font') || r.url.endsWith('.woff2') ? 'polices' : r.mime.includes('html') ? 'HTML' : 'autres';
    types[t] = (types[t] ?? 0) + e.encodedDataLength;
  });

  const q = sc.quality === 'low' ? '&quality=low' : '';
  await page.goto(`${BASE}/fr/configurateur/ring-001?debug=1${q}`, { waitUntil: 'commit' });
  await page.waitForFunction(() => window.__jr?.ready === true, null, { timeout: 180_000 });
  const timing = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const fcp = performance.getEntriesByName('first-contentful-paint')[0];
    const glb = performance.getEntriesByType('resource').find((r) => r.name.endsWith('.glb'));
    return {
      ttfbMs: Math.round(nav.responseStart),
      fcpMs: fcp ? Math.round(fcp.startTime) : null,
      domContentLoadedMs: Math.round(nav.domContentLoadedEventEnd),
      glbStartMs: glb ? Math.round(glb.startTime) : null,
      glbDurationMs: glb ? Math.round(glb.duration) : null,
      model3dReadyMs: Math.round(performance.now()),
      viewerMountToFirstFrameMs: window.__jr.firstFrameMs,
      info: window.__jr.info(),
    };
  });

  // Rotation continue pendant 3 s : on compte les rendus effectivement produits.
  const interaction = await page.evaluate(
    () =>
      new Promise((resolve) => {
        const start = performance.now();
        const r0 = window.__jr.renders;
        const gaps = [];
        let last = start;
        const step = (t) => {
          gaps.push(t - last);
          last = t;
          window.__jr.orbit(2);
          if (t - start < 3000) requestAnimationFrame(step);
          else {
            const s = [...gaps].sort((a, b) => a - b);
            resolve({
              fps: Math.round(((window.__jr.renders - r0) / ((t - start) / 1000)) * 10) / 10,
              p95FrameMs: Math.round(s[Math.floor(s.length * 0.95)]),
            });
          }
        };
        requestAnimationFrame(step);
      }),
  );
  await ctx.close();
  return { timing, interaction, bytes: types };
}

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
const results = [];
for (const sc of SCENARIOS) {
  const runs = [];
  for (let i = 0; i < RUNS; i++) runs.push(await runOnce(browser, sc));
  const pick = (f) => median(runs.map(f));
  const r = {
    scenario: sc.name,
    runs: RUNS,
    ttfbMs: pick((x) => x.timing.ttfbMs),
    fcpMs: pick((x) => x.timing.fcpMs),
    glbDurationMs: pick((x) => x.timing.glbDurationMs),
    model3dReadyMs: pick((x) => x.timing.model3dReadyMs),
    viewerMountToFirstFrameMs: pick((x) => x.timing.viewerMountToFirstFrameMs),
    drawCalls: runs[0].timing.info.calls,
    triangles: runs[0].timing.info.triangles,
    pixelRatio: runs[0].timing.info.dpr,
    fpsSoftwareGL: pick((x) => x.interaction.fps),
    p95FrameMsSoftwareGL: pick((x) => x.interaction.p95FrameMs),
    transferredKB: Object.fromEntries(Object.entries(runs[0].bytes).map(([k, v]) => [k, Math.round(v / 1024)])),
  };
  results.push(r);
  console.log(JSON.stringify(r));
}
await browser.close();
const report = { date: new Date().toISOString(), renderer: 'SwiftShader (logiciel, sans GPU)', results };
if (out) writeFileSync(out, JSON.stringify(report, null, 2) + '\n');
