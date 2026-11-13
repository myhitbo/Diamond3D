import { expect, test } from '@playwright/test';

// WebGL coupé dans la page elle-même (getContext renvoie null pour webgl et webgl2) :
// marche dans tous les navigateurs, contrairement aux options de lancement propres à Chromium.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, type: string, ...rest: unknown[]) {
      if (type === 'webgl' || type === 'webgl2' || type === 'experimental-webgl') return null;
      return (original as (...a: unknown[]) => unknown).call(this, type, ...rest);
    } as typeof original;
  });
});

test('sans WebGL : message explicite, options toujours lisibles', async ({ page }) => {
  await page.goto('/fr/configurateur/ring-001');
  await expect(page.getByText('WebGL indisponible', { exact: false })).toBeVisible();
  await expect(page.getByText('Sur devis')).toBeVisible();
});
