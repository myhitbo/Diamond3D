import { expect, test } from '@playwright/test';

// Pages de texte : accueil, transformation, guides, adresses traduites, pied de page. Aucune 3D : valable sur tous les navigateurs.

test('accueil : « / » mène à /fr, appel vers le configurateur, retour par le mot-symbole', async ({ page, request }) => {
  const res = await request.get('/', { maxRedirects: 0 });
  expect(res.status()).toBe(307);
  expect(res.headers()['location']).toBe('/fr');

  await page.goto('/');
  await expect(page).toHaveURL(/\/fr$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await expect(page).toHaveTitle('JR Diamond · Joaillerie à la Bourse du diamant de Ramat Gan');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Votre bague, vue en 3D, fabriquée à Ramat Gan');
  await expect(page.getByText('Brouillon · page en attente de relecture par l’atelier')).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/fr$/);
  await expect(page.locator('link[rel="alternate"][hreflang="he"]')).toHaveAttribute('href', /\/he$/);
  // Le rendu 3D réel, présenté comme tel.
  const render = page.getByRole('img', { name: /Ensemble marquise en or jaune/ });
  await expect(render).toBeVisible();
  expect(await render.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  await expect(page.getByText(/un rendu 3D, pas une photo/)).toBeVisible();
  // Liens du corps de page : transformation, guides, FAQ.
  const main = page.getByRole('main');
  await expect(main.getByRole('link', { name: /Transformer un bijou de famille/ })).toHaveAttribute('href', '/fr/transformation');
  await expect(main.getByRole('link', { name: /^Guides/ })).toHaveAttribute('href', '/fr/guides');
  await expect(main.getByRole('link', { name: /^Questions fréquentes/ })).toHaveAttribute('href', '/fr/faq');
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);

  await main.getByRole('link', { name: 'Configurer une bague' }).click();
  await expect(page).toHaveURL(/\/fr\/configurateur\/ring-001$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Ensemble marquise');
  await page.getByRole('link', { name: 'JR Diamond' }).click();
  await expect(page).toHaveURL(/\/fr$/);
});

test('accueil en anglais et en hébreu : traduit, sens droite-à-gauche, pas de guides en hébreu', async ({ page }) => {
  await page.goto('/en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Your ring, seen in 3D, made in Ramat Gan');
  await expect(page.getByRole('main').getByRole('link', { name: 'Configure a ring' })).toHaveAttribute('href', '/en/configurator/ring-001');
  await expect(page.getByRole('main').getByRole('link', { name: /^Guides/ })).toHaveAttribute('href', '/en/guides');

  await page.getByRole('navigation', { name: 'Langue / Language' }).getByRole('link', { name: 'עב', exact: true }).click();
  await expect(page).toHaveURL(/\/he$/);
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('html')).toHaveAttribute('lang', 'he');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('הטבעת שלכם, בתלת־ממד, מיוצרת ברמת גן');
  await expect(page.getByText('טיוטה · העמוד ממתין לאישור הסדנה')).toBeVisible();
  await expect(page.getByRole('main').getByRole('link', { name: 'עיצוב טבעת' })).toHaveAttribute('href', '/he/configurator/ring-001');
  await expect(page.getByRole('main').getByRole('link', { name: /חיים חדשים לתכשיט משפחתי/ })).toHaveAttribute('href', '/he/transformation');
  await expect(page.locator('a[href*="/guides"]')).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);

  // Le mot-symbole mène à l'accueil de la langue courante.
  await page.goto('/he/faq');
  await page.getByRole('link', { name: 'JR Diamond' }).click();
  await expect(page).toHaveURL(/\/he$/);
});

test('adresses traduites : /en/configurator sert la page, l’ancienne adresse y redirige', async ({ page, request }) => {
  const res = await request.get('/en/configurateur/ring-001', { maxRedirects: 0 });
  expect(res.status()).toBe(307);
  expect(res.headers()['location']).toBe('/en/configurator/ring-001');
  expect((await request.get('/he/configurateur/ring-001?debug=1', { maxRedirects: 0 })).headers()['location']).toBe('/he/configurator/ring-001?debug=1');
  expect((await request.get('/fr/configurateur/ring-001', { maxRedirects: 0 })).status()).toBe(200);

  await page.goto('/en/configurator/ring-001');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('link[rel="alternate"][hreflang="fr"]')).toHaveAttribute('href', /\/fr\/configurateur\/ring-001$/);
  await expect(page.locator('link[rel="alternate"][hreflang="he"]')).toHaveAttribute('href', /\/he\/configurator\/ring-001$/);
  // Le changement de langue garde la page et traduit l'adresse.
  await page.getByRole('link', { name: 'FR', exact: true }).click();
  await expect(page).toHaveURL(/\/fr\/configurateur\/ring-001$/);
});

test('transformation : la demande part avec la description et une photo', async ({ page }) => {
  await page.goto('/fr/transformation');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Transformer un bijou de famille');
  await expect(page.getByRole('listitem').filter({ hasText: 'Vous envoyez des photos' })).toBeVisible();
  await page.getByLabel('Nom *').fill('Jeanne Martin');
  await page.getByLabel('E-mail *').fill('jeanne@example.com');
  await page.getByLabel('Le bijou que vous avez *').fill('Bague en or jaune avec un diamant');
  await page.getByLabel('Photos du bijou').setInputFiles({ name: 'bague.png', mimeType: 'image/png', buffer: Buffer.alloc(2048, 1) });
  await page.getByRole('checkbox', { name: /uniquement pour répondre/ }).check();
  const res = page.waitForResponse((r) => r.url().endsWith('/api/transformation'));
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  expect((await res).status()).toBe(200);
  await expect(page.getByRole('status').filter({ hasText: 'L’atelier a bien reçu vos photos' })).toBeFocused();
});

test('transformation : description obligatoire, erreur serveur lisible', async ({ page }) => {
  await page.goto('/fr/transformation');
  await page.getByLabel('Nom *').fill('Jeanne Martin');
  await page.getByLabel('E-mail *').fill('jeanne@example.com');
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  await expect(page.getByLabel('Le bijou que vous avez *')).toBeFocused();

  await page.route('**/api/transformation', (r) => r.fulfill({ status: 503, json: { ok: false, error: { code: 'unavailable' } } }));
  await page.getByLabel('Le bijou que vous avez *').fill('Une chaîne en or cassée');
  await page.getByRole('checkbox', { name: /uniquement pour répondre/ }).check();
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  await expect(page.locator('form [role=alert]')).toContainText('momentanément indisponible');
  await expect(page.getByLabel('Le bijou que vous avez *')).toHaveValue('Une chaîne en or cassée');
});

test('transformation en hébreu et en anglais : traduite, sans défilement horizontal', async ({ page }) => {
  await page.goto('/he/transformation');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('חיים חדשים לתכשיט משפחתי');
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/transformation$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Give a family piece a new life');
});

test('guides : liste, article sourcé, données structurées, français et anglais', async ({ page, request }) => {
  await page.goto('/fr/guides');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Guides');
  await page.getByRole('link', { name: /Diamant synthétique ou naturel/ }).click();
  await expect(page).toHaveURL(/\/fr\/guides\/diamant-synthetique-ou-naturel$/);
  await expect(page.getByRole('heading', { level: 2, name: 'Pourquoi nous disons « synthétique »' })).toBeVisible();
  await expect(page.getByRole('link', { name: /DGCCRF/ })).toHaveAttribute('href', /economie\.gouv\.fr/);
  const data = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent())!);
  expect(data['@type']).toBe('Article');
  expect(data.citation.length).toBeGreaterThan(3);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  // Français et anglais seulement ; le lien EN mène au même guide, dont l'adresse est traduite.
  const lang = page.getByRole('navigation', { name: 'Langue / Language' });
  await expect(lang.getByRole('link')).toHaveText(['FR', 'EN']);
  await lang.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/guides\/lab-grown-or-natural-diamond$/);
  await expect(page.getByRole('heading', { level: 2, name: 'What we call it' })).toBeVisible();
  expect(JSON.parse((await page.locator('script[type="application/ld+json"]').textContent())!).inLanguage).toBe('en');

  for (const slug of ['formes-de-diamant', 'alliance-de-kiddouchin', 'les-4-c-du-diamant', 'or-14-ou-18-carats'])
    expect((await request.get(`/fr/guides/${slug}`)).status()).toBe(200);
  for (const slug of ['diamond-shapes', 'kiddushin-wedding-ring', 'the-4cs-of-diamonds', '14k-or-18k-gold'])
    expect((await request.get(`/en/guides/${slug}`)).status()).toBe(200);
  expect((await request.get('/he/guides')).status()).toBe(404);
  expect((await request.get('/he/guides/taille-de-doigt')).status()).toBe(404);
  expect((await request.get('/en/guides/formes-de-diamant')).status()).toBe(404);
  expect((await request.get('/fr/guides/inconnu')).status()).toBe(404);
});

test('guide de la taille de doigt : tableau de correspondance lisible sur mobile', async ({ page }) => {
  await page.goto('/fr/guides');
  await expect(page.getByRole('link', { name: /Les 4 C du diamant/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Or 14 ou 18 carats/ })).toBeVisible();
  await page.getByRole('link', { name: /Taille de doigt/ }).click();
  await expect(page).toHaveURL(/\/fr\/guides\/taille-de-doigt$/);
  const table = page.getByRole('table', { name: /Tailles françaises/ });
  await expect(table.getByRole('columnheader')).toHaveText(['France (tour, mm)', 'Diamètre (mm)', 'Israël', 'États-Unis (env.)']);
  await expect(table.locator('tbody tr')).toHaveCount(21);
  await expect(table.getByRole('row', { name: /^52 / }).getByRole('cell')).toHaveText(['16,6', '12', '6']);
  await expect(page.getByRole('link', { name: /ISO 8653/ })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
});

test('guide de la taille de doigt en anglais : tableau avec un point décimal', async ({ page }) => {
  await page.goto('/en/guides');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Guides');
  await expect(page.getByRole('link', { name: /The 4Cs of diamonds/ })).toBeVisible();
  await page.getByRole('link', { name: /Ring size/ }).click();
  await expect(page).toHaveURL(/\/en\/guides\/ring-size$/);
  await expect(page.getByText('Draft · guide awaiting review by the workshop')).toBeVisible();
  const table = page.getByRole('table', { name: /French sizes/ });
  await expect(table.getByRole('columnheader')).toHaveText(['France (circumference, mm)', 'Diameter (mm)', 'Israel', 'US (approx.)']);
  await expect(table.getByRole('row', { name: /^52 / }).getByRole('cell')).toHaveText(['16.6', '12', '6']);
  await expect(page.getByText(/Facts checked on 14 November 2026/)).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Langue / Language' }).getByRole('link', { name: 'FR', exact: true })).toHaveAttribute(
    'href',
    '/fr/guides/taille-de-doigt',
  );
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
});

test('configurateur : liens vers les guides en français et en anglais, absents en hébreu', async ({ page }) => {
  await page.goto('/fr/configurateur/ring-001');
  await expect(page.getByRole('link', { name: 'Guide : trouver sa taille de doigt' })).toHaveAttribute('href', '/fr/guides/taille-de-doigt');
  await expect(page.getByRole('link', { name: 'Guide : or 14 ou 18 carats' })).toHaveAttribute('href', '/fr/guides/or-14-ou-18-carats');
  await page.goto('/en/configurator/ring-001');
  await expect(page.getByRole('link', { name: 'Guide: finding your ring size' })).toHaveAttribute('href', '/en/guides/ring-size');
  await expect(page.getByRole('link', { name: 'Guide: 14 or 18 karat gold' })).toHaveAttribute('href', '/en/guides/14k-or-18k-gold');
  await page.goto('/he/configurator/ring-001');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('main a[href*="/guides/"]')).toHaveCount(0);
});

test('pied de page : liens du site, guides en français et en anglais', async ({ page }) => {
  await page.goto('/fr/faq');
  const footer = page.getByRole('contentinfo').getByRole('navigation', { name: 'Pied de page' });
  await expect(footer.getByRole('link')).toHaveText(['Configurateur', 'Bijou de famille', 'Guides', 'FAQ']);
  await footer.getByRole('link', { name: 'Bijou de famille' }).click();
  await expect(page).toHaveURL(/\/fr\/transformation$/);
  await page.goto('/en/faq');
  await expect(page.getByRole('contentinfo').getByRole('link')).toHaveText(['Configurator', 'Family jewellery', 'Guides', 'FAQ']);
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Configurator' })).toHaveAttribute('href', '/en/configurator/ring-001');
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Guides' })).toHaveAttribute('href', '/en/guides');
  await page.goto('/he/faq');
  await expect(page.getByRole('contentinfo').getByRole('link')).toHaveCount(3);
  await expect(page.locator('footer a[href*="/guides"]')).toHaveCount(0);
});
