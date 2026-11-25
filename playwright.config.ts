import { defineConfig, devices } from '@playwright/test';

// Rendu WebGL logiciel (SwiftShader) : fonctionne sans GPU, mais les mesures de performance
// obtenues ainsi sont pessimistes et ne remplacent pas un test sur appareil réel.
const launchOptions = {
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
};

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 90_000,
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: { baseURL: 'http://localhost:3100' },
  webServer: {
    command: 'node node_modules/next/dist/bin/next start -p 3100',
    url: 'http://localhost:3100/fr/configurateur/ring-001',
    reuseExistingServer: true,
    // Devis : envoi simulé (aucun e-mail réel pendant les tests).
    env: { NEXT_TELEMETRY_DISABLED: '1', QUOTE_DRY_RUN: '1' },
  },
  // Par défaut : Chromium ordinateur et mobile (rapide). WebKit (moteur de Safari) et Firefox :
  // `npm run test:e2e:browsers`, et WebKit en intégration continue. Leur WebGL est aussi logiciel ici :
  // ils vérifient le comportement, pas la fluidité (voir docs/DEVICE_TESTS.md).
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 }, launchOptions } },
    { name: 'mobile', use: { ...devices['Pixel 7'], launchOptions } },
    { name: 'iphone', use: { ...devices['iPhone 15'] } },
    { name: 'ipad', use: { ...devices['iPad Pro 11'] } },
    // Firefox sans écran n'a pas de WebGL dans cet environnement (aucun pilote graphique) : le site y affiche
    // « WebGL indisponible », comme prévu. On n'y joue donc que les parcours sans 3D (FAQ, devis, repli sans WebGL, versions de l'accueil avec leur image de repli), et
    // l'accessibilité : axe-core et clavier sur toutes les pages, configurateur dans son état sans WebGL ; les contrôles
    // propres à la 3D y sont ignorés (`needsWebGL` dans accessibility.spec.ts).
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], viewport: { width: 1440, height: 900 } },
      testMatch: ['faq.spec.ts', 'quote.spec.ts', 'no-webgl.spec.ts', 'pages.spec.ts', 'accessibility.spec.ts', 'versions.spec.ts'],
    },
  ],
});
