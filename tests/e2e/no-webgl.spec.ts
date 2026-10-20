import { expect, test } from '@playwright/test';

test.use({ launchOptions: { executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--disable-webgl', '--disable-3d-apis'] } });

test('sans WebGL : message explicite, options toujours lisibles', async ({ page }) => {
  await page.goto('/fr/configurateur/ring-001');
  await expect(page.getByText('WebGL indisponible', { exact: false })).toBeVisible();
  await expect(page.getByText('Sur devis')).toBeVisible();
});
