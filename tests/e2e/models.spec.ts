import { expect, test, type Page } from '@playwright/test';

// Modèles ajoutés au catalogue le 26/11/2026 : solitaire marquise pavé (ring-002) et solitaire cœur pavé (ring-003).
// Une seule composition chacun, taille mesurée sur l'anneau.
const SOLITAIRE = '/fr/configurateur/ring-002';
const HEART = '/fr/configurateur/ring-003';

async function ready(page: Page) {
  await page.waitForFunction(() => window.__jr?.ready === true, null, { timeout: 60_000 });
}

test('solitaire marquise : cinq pièces 3D, 36 pierres, pas de choix de composition', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  await page.goto(`${SOLITAIRE}?debug=1`);
  await ready(page);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Solitaire marquise pavé');
  expect(await page.evaluate(() => window.__jr!.visibleNodes())).toEqual([
    'A__gem_center',
    'A__gem_side',
    'A__metal_head_center',
    'A__metal_settings_side',
    'A__metal_shank',
  ]);
  // Une seule composition : le choix n'est pas proposé, le métal reste le premier groupe de choix.
  await expect(page.getByRole('radiogroup', { name: 'Composition' })).toHaveCount(0);
  await expect(page.getByRole('radiogroup', { name: 'Métal' })).toBeVisible();
  const summary = page.locator('[aria-labelledby="summary-title"]');
  await expect(summary).toContainText('1 × Marquise 16,5 × 8,5 mm');
  await expect(summary).toContainText('35 × Ronde 1,1 – 1,9 mm');
  await expect(summary).toContainText('Sur devis');
  await expect(summary).toContainText('(± 5 %)');
  // Le fichier n'a pas de courbe de taille : la taille est mesurée sur l'anneau.
  await expect(page.getByText('Modélisé en France 54 ½, diamètre intérieur 17,31 mm.')).toBeVisible();
  expect(errors).toEqual([]);
});

test('solitaire marquise : le métal change le matériau, l’adresse suit le choix', async ({ page }) => {
  await page.goto(`${SOLITAIRE}?debug=1`);
  await ready(page);
  const before = await page.evaluate(() => window.__jr!.metalColor());
  await page.getByRole('radio', { name: /Or rose/ }).click();
  await expect.poll(() => page.evaluate(() => window.__jr!.metalColor())).not.toBe(before);
  await expect(page).toHaveURL(/metal=rose-gold-14k/);
  expect(await page.evaluate(() => window.__jr!.visibleNodes())).toHaveLength(5);
});

test('choix du modèle : chaque bague mène à l’autre, la page courante est signalée', async ({ page }) => {
  await page.goto('/fr/configurateur/ring-001');
  const models = page.getByRole('navigation', { name: 'Modèles' });
  await expect(models.getByRole('link')).toHaveCount(3);
  await expect(models.getByRole('link', { name: 'Solitaire cœur pavé' })).toHaveAttribute('href', '/fr/configurateur/ring-003');
  await expect(models.getByRole('link', { name: 'Ensemble marquise' })).toHaveAttribute('aria-current', 'page');
  await models.getByRole('link', { name: 'Solitaire marquise pavé' }).click();
  await expect(page).toHaveURL(/\/fr\/configurateur\/ring-002$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Solitaire marquise pavé');
  const back = page.getByRole('navigation', { name: 'Modèles' });
  await expect(back.getByRole('link', { name: 'Solitaire marquise pavé' })).toHaveAttribute('aria-current', 'page');
  await expect(back.getByRole('link', { name: 'Ensemble marquise' })).toHaveAttribute('href', '/fr/configurateur/ring-001');
});

test('solitaire marquise en anglais et en hébreu : adresses traduites, sens d’écriture', async ({ page }) => {
  await page.goto('/en/configurator/ring-002');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Pavé marquise solitaire');
  await expect(page.getByRole('navigation', { name: 'Models' }).getByRole('link', { name: 'Marquise set' })).toHaveAttribute('href', '/en/configurator/ring-001');
  await page.goto('/he/configurator/ring-002');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('סוליטר מרקיזה בשיבוץ פאווה');
  await expect(page.getByRole('navigation', { name: 'דגמים' }).getByRole('link')).toHaveCount(3);
});

test('solitaire marquise : la demande de devis part avec ce modèle et sa configuration', async ({ page }) => {
  await page.goto(SOLITAIRE);
  await page.getByRole('radio', { name: /Platine/ }).click();
  await page.getByRole('button', { name: 'Demander un devis' }).click();
  await page.getByLabel('Nom *').fill('Jeanne Martin');
  await page.getByLabel('E-mail *').fill('jeanne@example.com');
  await page.getByRole('checkbox', { name: /uniquement pour répondre/ }).check();
  await page.evaluate(() => {
    const native = window.fetch;
    window.fetch = (input, init) => {
      if (init?.body instanceof FormData) {
        (window as unknown as { __sent: unknown }).__sent = { modelId: init.body.get('modelId'), config: init.body.get('config') };
      }
      return native(input, init);
    };
  });
  const res = page.waitForResponse((r) => r.url().endsWith('/api/devis'));
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  expect((await res).status()).toBe(200);
  const sent = (await page.evaluate(() => (window as unknown as { __sent: unknown }).__sent)) as { modelId: string; config: string };
  expect(sent.modelId).toBe('ring-002');
  expect(JSON.parse(sent.config)).toMatchObject({ composition: 'solitaire', metal: 'platinum-950' });
  await expect(page.getByRole('heading', { name: 'Demande envoyée' })).toBeVisible();
});

test('solitaire cœur : cinq pièces 3D, 39 pierres, forme cœur nommée', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  await page.goto(`${HEART}?debug=1`);
  await ready(page);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Solitaire cœur pavé');
  expect(await page.evaluate(() => window.__jr!.visibleNodes())).toEqual([
    'A__gem_center',
    'A__gem_side',
    'A__metal_head_center',
    'A__metal_settings_side',
    'A__metal_shank',
  ]);
  await expect(page.getByRole('radiogroup', { name: 'Composition' })).toHaveCount(0);
  await expect(page.getByRole('radio', { name: /Cœur 7,3 × 7,3 mm/ })).toHaveAttribute('aria-checked', 'true');
  const summary = page.locator('[aria-labelledby="summary-title"]');
  await expect(summary).toContainText('1 × Cœur 7,3 × 7,3 mm');
  await expect(summary).toContainText('38 × Ronde 0,8 – 0,85 – 0,9 – 1 – 1,3 – 1,4 – 1,6 – 1,7 – 1,8 mm');
  await expect(summary).toContainText('Sur devis');
  // Le fichier n'a pas de courbe de taille : la taille est mesurée sur l'anneau.
  await expect(page.getByText('Modélisé en France 54, diamètre intérieur 17,20 mm.')).toBeVisible();
  expect(errors).toEqual([]);
});

test('solitaire cœur en anglais et en hébreu ; il mène aux deux autres modèles', async ({ page }) => {
  await page.goto('/en/configurator/ring-003');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Pavé heart solitaire');
  await expect(page.getByRole('radio', { name: /Heart 7\.3 × 7\.3 mm/ })).toBeVisible();
  const models = page.getByRole('navigation', { name: 'Models' });
  await expect(models.getByRole('link', { name: 'Pavé heart solitaire' })).toHaveAttribute('aria-current', 'page');
  await expect(models.getByRole('link', { name: 'Pavé marquise solitaire' })).toHaveAttribute('href', '/en/configurator/ring-002');
  await page.goto('/he/configurator/ring-003');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('סוליטר לב בשיבוץ פאווה');
});

test('solitaire cœur : la demande de devis part avec ce modèle', async ({ page }) => {
  await page.goto(HEART);
  await page.getByRole('button', { name: 'Demander un devis' }).click();
  await page.getByLabel('Nom *').fill('Jeanne Martin');
  await page.getByLabel('E-mail *').fill('jeanne@example.com');
  await page.getByRole('checkbox', { name: /uniquement pour répondre/ }).check();
  await page.evaluate(() => {
    const native = window.fetch;
    window.fetch = (input, init) => {
      if (init?.body instanceof FormData) (window as unknown as { __sent: unknown }).__sent = { modelId: init.body.get('modelId') };
      return native(input, init);
    };
  });
  const res = page.waitForResponse((r) => r.url().endsWith('/api/devis'));
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  expect((await res).status()).toBe(200);
  expect(((await page.evaluate(() => (window as unknown as { __sent: unknown }).__sent)) as { modelId: string }).modelId).toBe('ring-003');
});
