import { expect, test } from '@playwright/test';

// Page cachée de mesure sur appareil réel (docs/DEVICE_TESTS.md). Ici en rendu logiciel :
// on vérifie que le rapport est complet et cohérent, pas les valeurs de performance.

test('produit un rapport de diagnostic complet après la rotation', async ({ page }) => {
  await page.goto('/fr/diagnostic?secondes=2');
  await page.waitForFunction(() => window.__jr?.ready === true, null, { timeout: 60_000 });
  const report = page.getByTestId('diagnostic-report');
  await expect(report).toBeVisible({ timeout: 30_000 });
  const data = JSON.parse((await report.textContent()) ?? '{}');

  expect(data.page).toBe('/fr/diagnostic');
  expect(data.gpu.webgl).toBe(true);
  expect(typeof data.gpu.renderer).toBe('string');
  expect(data.device.screen.dpr).toBeGreaterThan(0);
  expect(data.model.firstFrameMs).toBeGreaterThan(0);
  expect(data.model.render.triangles).toBeGreaterThan(0);
  expect(data.rotation.seconds).toBe(2);
  expect(data.rotation.frames).toBeGreaterThan(0);
  expect(data.rotation.fps).toBeGreaterThan(0);
  expect(['high', 'low']).toContain(data.rotation.qualityAfter);

  await expect(page.getByRole('button', { name: 'Copier le rapport' })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});

test('page de diagnostic en hébreu : rapport lisible de gauche à droite', async ({ page }) => {
  await page.goto('/he/diagnostic?secondes=1');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { name: 'אבחון המכשיר' })).toBeVisible();
  const report = page.getByTestId('diagnostic-report');
  await expect(report).toBeVisible({ timeout: 60_000 });
  await expect(report).toHaveAttribute('dir', 'ltr');
});
