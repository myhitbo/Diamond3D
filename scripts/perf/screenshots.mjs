// Captures d'écran ordinateur et mobile (vue 3/4 puis vue de dessus). Usage : scripts/perf/serve-and-run.sh scripts/perf/screenshots.mjs <dossier>
import { chromium, devices } from '@playwright/test';
const out = process.argv[2];
const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
for (const [name, ctxOpts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['mobile', { ...devices['iPhone 13'] }]]) {
  const ctx = await b.newContext(ctxOpts);
  const p = await ctx.newPage();
  const logs = [];
  p.on('console', (m) => logs.push(`${m.type()}: ${m.text()}`));
  p.on('pageerror', (e) => logs.push(`pageerror: ${e.message}`));
  await p.goto('http://localhost:3100/fr/configurateur/ring-001?debug=1');
  await p.waitForFunction(() => window.__jr?.ready, null, { timeout: 120000 });
  await p.waitForTimeout(800);
  console.log(name, JSON.stringify(await p.evaluate(() => ({ ff: window.__jr.firstFrameMs, info: window.__jr.info(), nodes: window.__jr.visibleNodes(), color: window.__jr.metalColor() }))));
  await p.screenshot({ path: `${out}/${name}.png`, fullPage: false });
  await p.getByRole('button', { name: 'Dessus' }).click();
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `${out}/${name}-top.png`, fullPage: false });
  console.log(logs.filter((l) => !l.includes('Download the React DevTools')).join('\n'));
  await ctx.close();
}
await b.close();
