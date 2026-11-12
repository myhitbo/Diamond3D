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
  use: { baseURL: 'http://localhost:3100', launchOptions },
  webServer: {
    command: 'node node_modules/next/dist/bin/next start -p 3100',
    url: 'http://localhost:3100/fr/configurateur/ring-001',
    reuseExistingServer: true,
    // Devis : envoi simulé (aucun e-mail réel pendant les tests).
    env: { NEXT_TELEMETRY_DISABLED: '1', QUOTE_DRY_RUN: '1' },
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
});
