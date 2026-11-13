import { expect, test, type Page } from '@playwright/test';

const URL = '/fr/configurateur/ring-001?debug=1';

async function ready(page: Page) {
  await page.waitForFunction(() => window.__jr?.ready === true, null, { timeout: 60_000 });
}

function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  return errors;
}

test('charge le modèle et affiche les deux bagues sans erreur', async ({ page }) => {
  const errors = collectErrors(page);
  await page.goto(URL);
  await ready(page);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Ensemble marquise');
  expect(await page.evaluate(() => window.__jr!.visibleNodes())).toHaveLength(8);
  await expect(page.getByRole('status')).toHaveCount(0); // indicateur de chargement retiré
  expect(errors).toEqual([]);
});

test('le changement de métal modifie le matériau, pas la géométrie', async ({ page }) => {
  await page.goto(URL);
  await ready(page);
  const nodesBefore = await page.evaluate(() => window.__jr!.visibleNodes());
  expect(await page.evaluate(() => window.__jr!.metalColor())).toBe('#f0cc86');
  await page.getByRole('radio', { name: 'Or rose', exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.__jr!.metalColor())).toBe('#eebba0');
  await expect(page.getByRole('radio', { name: 'Or rose', exact: true })).toHaveAttribute('aria-checked', 'true');
  // Passage en 14 carats : même couleur choisie, autre titre.
  await page.getByRole('radiogroup', { name: 'Titre de l’or' }).getByRole('radio', { name: '14 carats' }).click();
  await expect.poll(() => page.evaluate(() => window.__jr!.metalColor())).toBe('#eab39a');
  await expect(page.getByText('Or rose 14 carats').first()).toBeVisible();
  expect(await page.evaluate(() => window.__jr!.visibleNodes())).toEqual(nodesBefore);
  // Le platine n'a pas de titre d'or.
  await page.getByRole('radio', { name: 'Platine', exact: true }).click();
  await expect(page.getByRole('radiogroup', { name: 'Titre de l’or' })).toHaveCount(0);
});

test('poids à ± 5 %, délai de fabrication et libellé « synthétique »', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByText(/≈ \d+,\d g \(± 5 %\)/)).toBeVisible();
  await expect(page.getByText('14 jours ouvrés', { exact: true })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Synthétique' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Laboratoire' })).toHaveCount(0);
});

test('la composition change réellement les pièces 3D affichées', async ({ page }) => {
  await page.goto(URL);
  await ready(page);
  await page.getByRole('radio', { name: 'Alliance' }).click();
  await expect.poll(() => page.evaluate(() => window.__jr!.visibleNodes())).toEqual(['B__gem_side', 'B__metal_settings_side', 'B__metal_shank']);
  await expect(page.getByText('Pierre centrale', { exact: true })).toHaveCount(0);
  await page.getByRole('radio', { name: 'Solitaire' }).click();
  await expect.poll(() => page.evaluate(() => window.__jr!.visibleNodes().every((n) => n.startsWith('A__')))).toBe(true);
  await expect(page.getByText('Pierre centrale', { exact: true })).toBeVisible();
});

test('affiche « sur devis » et aucun montant', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByText('Sur devis', { exact: true })).toBeVisible();
  await expect(page.locator('body')).not.toContainText(/[€$₪]|\bEUR\b|\bILS\b|\bUSD\b/);
  await expect(page.getByRole('button', { name: 'Demander un devis' })).toBeEnabled();
});

test('les formes non modélisées sont proposées « sur demande » et pré-remplissent le devis', async ({ page }) => {
  await page.goto(URL);
  const stoneGroup = page.getByRole('radiogroup', { name: 'Pierre centrale' });
  await expect(stoneGroup.getByRole('radio')).toHaveCount(1);
  const others = page.getByRole('group', { name: 'Autres formes' });
  await expect(others.getByRole('button')).toHaveCount(5);
  await others.getByRole('button', { name: /Ovale/ }).click();
  await expect(page.getByRole('heading', { name: 'Demande de devis' })).toBeVisible();
  await expect(page.getByLabel('Message')).toHaveValue('Je souhaite ce bijou avec une pierre centrale de forme : Ovale.');
  // Une autre forme remplace la proposition tant que la personne n'a rien écrit elle-même…
  await others.getByRole('button', { name: /Poire/ }).click();
  await expect(page.getByLabel('Message')).toHaveValue('Je souhaite ce bijou avec une pierre centrale de forme : Poire.');
  // … mais n'écrase jamais son propre texte.
  await page.getByLabel('Message').fill('Mon texte');
  await others.getByRole('button', { name: /Ronde/ }).click();
  await expect(page.getByLabel('Message')).toHaveValue('Mon texte');
  // La 3D ne change pas : la pierre affichée reste la marquise.
  await expect(stoneGroup.getByRole('radio', { name: /Marquise/ })).toHaveAttribute('aria-checked', 'true');
});

test('en-tête mobile : aucun lien sur deux lignes', async ({ page }) => {
  for (const locale of ['fr', 'en', 'he']) {
    await page.goto(`/${locale}/configurateur/ring-001`);
    const link = page.locator('.site-nav a').first();
    const box = (await link.boundingBox())!;
    expect(box.height, locale).toBeLessThan(30);
    const header = (await page.locator('.site-header').boundingBox())!;
    expect(header.height, locale).toBeLessThan(80);
    await expect(link).toHaveAccessibleName(/Questions fréquentes|FAQ|שאלות נפוצות/);
  }
});

test('le poids de la pierre centrale est affiché, autres tailles sur demande', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByTestId('center-carat')).toHaveText(/≈ 0,25 ct \(poids usuel pour ces dimensions, à confirmer par l’atelier\)/);
  await expect(page.getByText(/Autre taille de pierre : sur demande/)).toBeVisible();
  // La composition « Alliance » n'a pas de pierre centrale : rien à afficher.
  await page.getByRole('radio', { name: 'Alliance' }).click();
  await expect(page.getByTestId('center-carat')).toHaveCount(0);
});

test('réinitialiser revient à la configuration initiale', async ({ page }) => {
  await page.goto(URL);
  await ready(page);
  await page.getByRole('radio', { name: 'Platine', exact: true }).click();
  await page.getByRole('radio', { name: 'Solitaire' }).click();
  await page.getByRole('button', { name: 'Réinitialiser' }).click();
  await expect.poll(() => page.evaluate(() => window.__jr!.metalColor())).toBe('#f0cc86');
  expect(await page.evaluate(() => window.__jr!.visibleNodes())).toHaveLength(8);
});

test('les vues prédéfinies déplacent la caméra', async ({ page }) => {
  await page.goto(URL);
  await ready(page);
  const shot = async () => (await page.locator('canvas').screenshot()).toString('base64');
  const before = await shot();
  await page.getByRole('button', { name: 'Dessus' }).click();
  await expect(page.getByRole('button', { name: 'Dessus' })).toHaveAttribute('aria-pressed', 'true');
  await page.waitForTimeout(1500);
  expect(await shot()).not.toBe(before);
});

test('version anglaise', async ({ page }) => {
  await page.goto('/en/configurateur/ring-001');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Marquise set');
  await expect(page.getByText('On request', { exact: true })).toBeVisible();
});

test('erreur de chargement : message et bouton « Réessayer »', async ({ page }) => {
  await page.route('**/models/ring-001/ring-001.glb', (r) => r.fulfill({ status: 500, body: 'erreur' }));
  await page.goto(URL);
  const alert = page.getByRole('alert').filter({ hasText: 'Le modèle 3D n’a pas pu être chargé.' });
  await expect(alert).toBeVisible();
  await page.unroute('**/models/ring-001/ring-001.glb');
  await page.getByRole('button', { name: 'Réessayer' }).click();
  await ready(page);
  await expect(alert).toHaveCount(0);
});

test('pas de défilement horizontal', async ({ page }) => {
  await page.goto(URL);
  await ready(page);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

test('page 404 pour un modèle inconnu', async ({ page }) => {
  const res = await page.goto('/fr/configurateur/inexistant');
  expect(res?.status()).toBe(404);
});
