// Mesures de performance du configurateur (serveur de production local requis sur :3100).
// Usage : CHROMIUM_PATH=… scripts/perf/serve-and-run.sh scripts/perf/measure.mjs [sortie.json]
// Variables : RUNS (passes réussies par scénario, 3 par défaut), BASE_URL, CHROMIUM_PATH.
//
// Limite importante : le rendu WebGL est logiciel (SwiftShader, sans GPU). Les images par
// seconde mesurées ici sont donc un plancher très pessimiste, pas une mesure d'appareil réel.
// Les temps de chargement et les volumes transférés, eux, sont représentatifs.
//
// Durée : 1 min 25 s le 15/11/2026 pour RUNS=3 (9 passes), mais jusqu'à 4 min par passe si le modèle tarde : plus que le
// délai par défaut d'une commande de premier plan (2 min). Lancer en arrière-plan avec un journal (`… > journal.txt 2>&1 &`)
// et ne rien faire tourner d'autre sur la machine pendant la mesure. La progression s'affiche passe par passe sur la sortie
// d'erreur, et le fichier de sortie est réécrit après chaque passe : une interruption garde ce qui est déjà mesuré.
// Une passe qui échoue ou dépasse RUN_TIMEOUT_MS est notée dans `failures` et refaite (au plus 2 essais de plus).
// Résultats et lecture : docs/PROTOTYPE_REPORT.md (C), fichiers bruts dans docs/perf/.
import { chromium, devices } from '@playwright/test';
import { writeFileSync } from 'node:fs';

const BASE = process.env.BASE_URL ?? 'http://localhost:3100';
const RUNS = Number(process.env.RUNS ?? 3);
const MAX_ATTEMPTS = RUNS + 2;
/** Attente du modèle (180 s) + rotation (3 s) + marge. */
const RUN_TIMEOUT_MS = 240_000;
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

/** Médiane (valeur centrale haute pour un nombre pair), valeurs absentes ignorées. */
const median = (xs) => {
  const v = xs.filter((x) => typeof x === 'number' && Number.isFinite(x)).sort((a, b) => a - b);
  return v.length ? v[Math.floor(v.length / 2)] : null;
};
const t0 = Date.now();
const log = (msg) => {
  const s = Math.round((Date.now() - t0) / 1000);
  console.error(`[${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}] ${msg}`);
};

async function measure(ctx, sc) {
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
      // Réponse du serveur local. Sous émulation réseau, Chromium retarde la livraison de la réponse, pas cet horodatage :
      // la latence émulée n'y figure pas (elle figure dans fcpMs, domContentLoadedMs et les temps suivants).
      ttfbMs: Math.round(nav.responseStart),
      fcpMs: fcp ? Math.round(fcp.startTime) : null,
      domContentLoadedMs: Math.round(nav.domContentLoadedEventEnd),
      glbStartMs: glb ? Math.round(glb.startTime) : null,
      glbDurationMs: glb ? Math.round(glb.duration) : null,
      // Instant où le test voit la sonde prête : inclut le délai de scrutation de waitForFunction (≈ 1 s sur mobile ralenti).
      model3dReadyMs: Math.round(performance.now()),
      // Instant exact où la première image 3D a été marquée (même origine de temps que la navigation).
      firstFrameAtMs: Math.round(window.__jr.startAt + window.__jr.firstFrameMs),
      viewerMountToFirstFrameMs: window.__jr.firstFrameMs,
      qualityAtReady: window.__jr.quality ?? null,
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
              // Le PerformanceMonitor peut basculer en rendu simplifié sous 24 images/s, y compris pendant la rotation.
              qualityAfter: window.__jr.quality ?? null,
              // Dernier rendu de la rotation. À l'instant « prêt », le dernier rendu n'est pas toujours celui de la scène
              // complète (vu une fois, processeur chargé par ailleurs : 5 appels de dessin au lieu de 9).
              info: window.__jr.info(),
            });
          }
        };
        requestAnimationFrame(step);
      }),
  );
  return { timing, interaction, bytes: types };
}

/** Une passe dans un contexte neuf, bornée dans le temps : le contexte est fermé quoi qu'il arrive. */
async function runOnce(browser, sc) {
  const ctx = await browser.newContext(sc.context);
  const work = measure(ctx, sc);
  work.catch(() => undefined);
  let timer;
  try {
    return await Promise.race([
      work,
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(`passe non terminée après ${RUN_TIMEOUT_MS / 1000} s`)), RUN_TIMEOUT_MS);
      }),
    ]);
  } finally {
    clearTimeout(timer);
    await ctx.close().catch(() => undefined);
  }
}

const launch = () =>
  chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || undefined,
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
  });

const summarize = (sc, runs, failures) => {
  const pick = (f) => median(runs.map(f));
  const first = runs[0];
  return {
    scenario: sc.name,
    runs: runs.length,
    ttfbMs: pick((x) => x.timing.ttfbMs),
    fcpMs: pick((x) => x.timing.fcpMs),
    domContentLoadedMs: pick((x) => x.timing.domContentLoadedMs),
    glbDurationMs: pick((x) => x.timing.glbDurationMs),
    model3dReadyMs: pick((x) => x.timing.model3dReadyMs),
    firstFrameAtMs: pick((x) => x.timing.firstFrameAtMs),
    viewerMountToFirstFrameMs: pick((x) => x.timing.viewerMountToFirstFrameMs),
    drawCalls: first?.timing.info.calls ?? null,
    triangles: first?.timing.info.triangles ?? null,
    pixelRatio: first?.timing.info.dpr ?? null,
    drawCallsAfterRotation: pick((x) => x.interaction.info.calls),
    trianglesAfterRotation: pick((x) => x.interaction.info.triangles),
    fpsSoftwareGL: pick((x) => x.interaction.fps),
    p95FrameMsSoftwareGL: pick((x) => x.interaction.p95FrameMs),
    qualityAtReady: runs.map((x) => x.timing.qualityAtReady),
    qualityAfterRotation: runs.map((x) => x.interaction.qualityAfter),
    transferredKB: first ? Object.fromEntries(Object.entries(first.bytes).map(([k, v]) => [k, Math.round(v / 1024)])) : {},
    transferredTotalKB: first ? Math.round(Object.values(first.bytes).reduce((a, b) => a + b, 0) / 1024) : null,
    failures,
  };
};

let browser = await launch();
const results = [];
const raw = [];
const report = () => ({
  date: new Date().toISOString(),
  renderer: 'SwiftShader (logiciel, sans GPU)',
  durationS: Math.round((Date.now() - t0) / 1000),
  results,
  raw,
});
const save = () => {
  if (out) writeFileSync(out, JSON.stringify(report(), null, 2) + '\n');
};

let incomplete = false;
for (const sc of SCENARIOS) {
  const runs = [];
  const failures = [];
  const entry = { scenario: sc.name, runs, failures };
  raw.push(entry);
  for (let attempt = 1; runs.length < RUNS && attempt <= MAX_ATTEMPTS; attempt++) {
    const started = Date.now();
    try {
      if (!browser.isConnected()) browser = await launch();
      const r = await runOnce(browser, sc);
      runs.push(r);
      log(
        `${sc.name}, passe ${runs.length}/${RUNS} : 3D prête à ${(r.timing.firstFrameAtMs / 1000).toFixed(1)} s, ` +
          `${r.interaction.fps} im/s, qualité ${r.timing.qualityAtReady} → ${r.interaction.qualityAfter} (${Math.round((Date.now() - started) / 1000)} s)`,
      );
    } catch (e) {
      failures.push({ attempt, error: String(e?.message ?? e).split('\n')[0] });
      log(`${sc.name}, essai ${attempt} en échec : ${failures.at(-1).error}`);
    }
    save();
  }
  if (runs.length < RUNS) incomplete = true;
  const r = summarize(sc, runs, failures);
  results.push(r);
  save();
  console.log(JSON.stringify(r));
}
await browser.close().catch(() => undefined);
save();
log(`terminé${incomplete ? ' avec des scénarios incomplets' : ''}${out ? ` ; résultats dans ${out}` : ''}`);
if (incomplete) process.exitCode = 1;
