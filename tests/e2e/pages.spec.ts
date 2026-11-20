import { expect, test } from '@playwright/test';
// Import relatif : `site.ts` n'importe rien du projet (il est aussi lu par `next.config.ts`).
import { SITE_INDEXABLE, TRANSLATED_REDIRECTS_PERMANENT } from '../../src/config/site';

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
  await expect(page.getByText(/une image 3D photoréaliste, pas une photo/)).toBeVisible();
  // Liens du corps de page : transformation, guides, FAQ.
  const main = page.getByRole('main');
  await expect(main.getByRole('link', { name: /Transformer un bijou de famille/ })).toHaveAttribute('href', '/fr/transformation');
  await expect(main.getByRole('link', { name: /^Guides/ })).toHaveAttribute('href', '/fr/guides');
  await expect(main.getByRole('link', { name: /^Questions fréquentes/ })).toHaveAttribute('href', '/fr/faq');
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);

  // Deux appels vers le configurateur : premier écran et bas de page.
  const ctas = main.getByRole('link', { name: 'Configurer une bague' });
  await expect(ctas).toHaveCount(2);
  for (const href of await ctas.evaluateAll((els) => els.map((e) => e.getAttribute('href')))) expect(href).toBe('/fr/configurateur/ring-001');
  // Galerie des quatre métaux : rendus 3D de l'ensemble, nommés par leur métal.
  await expect(main.getByRole('img', { name: /^Ensemble marquise, / })).toHaveCount(4);
  await ctas.first().click();
  await expect(page).toHaveURL(/\/fr\/configurateur\/ring-001$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Ensemble marquise');
  await page.getByRole('link', { name: 'JR Diamond' }).click();
  await expect(page).toHaveURL(/\/fr$/);
});

test('accueil en anglais et en hébreu : traduit, sens droite-à-gauche, pas de guides en hébreu', async ({ page }) => {
  await page.goto('/en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Your ring, seen in 3D, made in Ramat Gan');
  await expect(page.getByRole('main').getByRole('link', { name: 'Configure a ring' }).first()).toHaveAttribute('href', '/en/configurator/ring-001');
  await expect(page.getByRole('main').getByRole('link', { name: /^Guides/ })).toHaveAttribute('href', '/en/guides');

  await page.getByRole('navigation', { name: 'Langue / Language' }).getByRole('link', { name: 'עב', exact: true }).click();
  await expect(page).toHaveURL(/\/he$/);
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('html')).toHaveAttribute('lang', 'he');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('הטבעת שלכם, בתלת־ממד, מיוצרת ברמת גן');
  await expect(page.getByText('טיוטה · העמוד ממתין לאישור הסדנה · תרגום ממתין להגהה')).toBeVisible();
  await expect(page.getByRole('main').getByRole('link', { name: 'עיצוב טבעת' }).first()).toHaveAttribute('href', '/he/configurator/ring-001');
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
  // Temporaire avant le lancement, permanente ensuite : suit l'interrupteur (`src/config/site.ts`).
  expect(res.status()).toBe(TRANSLATED_REDIRECTS_PERMANENT ? 308 : 307);
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
  await expect(footer.getByRole('link')).toHaveText(['Configurateur', 'Bijou de famille', 'Guides', 'FAQ', 'Déclaration d’accessibilité', 'Politique de confidentialité']);
  await footer.getByRole('link', { name: 'Bijou de famille' }).click();
  await expect(page).toHaveURL(/\/fr\/transformation$/);
  await page.goto('/en/faq');
  await expect(page.getByRole('contentinfo').getByRole('link')).toHaveText(['Configurator', 'Family jewellery', 'Guides', 'FAQ', 'Accessibility statement', 'Privacy policy']);
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Configurator' })).toHaveAttribute('href', '/en/configurator/ring-001');
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Guides' })).toHaveAttribute('href', '/en/guides');
  await page.goto('/he/faq');
  // Hébreu : pas de guides ; déclaration d'accessibilité et politique de confidentialité comme ailleurs (voir legal.spec.ts).
  await expect(page.getByRole('contentinfo').getByRole('link')).toHaveCount(5);
  await expect(page.locator('footer a[href*="/guides"]')).toHaveCount(0);
});

test('404 traduite : français hors langue et sous /fr, anglais, hébreu de droite à gauche ; statut 404', async ({ page }) => {
  const cases = [
    { url: '/nimporte-quoi', lang: 'fr', dir: 'ltr', h1: 'Page introuvable', nav: 'Pages du site', links: ['/fr', '/fr/configurateur/ring-001', '/fr/faq'] },
    { url: '/fr/configurateur/inconnu', lang: 'fr', dir: 'ltr', h1: 'Page introuvable', nav: 'Pages du site', links: ['/fr', '/fr/configurateur/ring-001', '/fr/faq'] },
    { url: '/en/nothing-here', lang: 'en', dir: 'ltr', h1: 'Page not found', nav: 'Site pages', links: ['/en', '/en/configurator/ring-001', '/en/faq'] },
    { url: '/he/guides', lang: 'he', dir: 'rtl', h1: 'הדף לא נמצא', nav: 'דפי האתר', links: ['/he', '/he/configurator/ring-001', '/he/faq'] },
  ];
  for (const c of cases) {
    const res = await page.goto(c.url);
    expect(res!.status(), c.url).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(c.h1);
    await expect(page.locator('html')).toHaveAttribute('lang', c.lang);
    await expect(page.locator('html')).toHaveAttribute('dir', c.dir);
    await expect(page).toHaveTitle(`${c.h1} · JR Diamond`);
    await expect(page.getByRole('navigation', { name: c.nav }).getByRole('link')).toHaveCount(3);
    for (const [i, href] of c.links.entries()) await expect(page.getByRole('navigation', { name: c.nav }).getByRole('link').nth(i)).toHaveAttribute('href', href);
    // En-tête (sélecteur de langue vers les accueils) et pied de page du site.
    await expect(page.getByRole('navigation', { name: 'Langue / Language' }).getByRole('link', { name: 'EN', exact: true })).toHaveAttribute('href', '/en');
    // Ces liens mènent aux accueils, pas à la page affichée : la langue courante est signalée sans « page actuelle ».
    await expect(page.getByRole('navigation', { name: 'Langue / Language' }).locator('a[aria-current="page"]')).toHaveCount(0);
    await expect(page.getByRole('navigation', { name: 'Langue / Language' }).locator('a[aria-current="true"]')).toHaveAttribute('hreflang', c.lang);
    await expect(page.getByRole('contentinfo')).toBeVisible();
    expect(await page.locator('meta[name="robots"]').evaluateAll((m) => m.map((x) => x.getAttribute('content')).join(' '))).toMatch(/noindex/);
  }
  // Hébreu : traduction automatique, signalée comme les autres pages.
  await expect(page.getByText('טיוטה · תרגום ממתין להגהה')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  await page.getByRole('navigation', { name: 'דפי האתר' }).getByRole('link', { name: 'שאלות נפוצות' }).click();
  await expect(page).toHaveURL(/\/he\/faq$/);
});

test('robots.txt et plan du site selon l’interrupteur de lancement : exploration permise ; plan annoncé et rempli seulement une fois le site indexable', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  const text = await robots.text();
  expect(text).toMatch(/^User-Agent: \*$/m);
  expect(text).toMatch(/^Allow: \/$/m);
  expect(text).toMatch(/^Disallow: \/api\/$/m);
  // Un « Disallow: / » empêcherait les robots de lire la balise noindex des pages.
  expect(text).not.toMatch(/^Disallow: \/$/m);
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  if (SITE_INDEXABLE) {
    expect(text).toMatch(/^Sitemap: https?:\/\/[^\s]+\/sitemap\.xml$/m);
    expect(xml).toMatch(/<url>/);
  } else {
    expect(text).not.toMatch(/Sitemap:/i);
    expect(xml).not.toMatch(/<url>/);
  }
});

test('aperçu de lien partagé : balises Open Graph dans le HTML du serveur, image servie', async ({ page, request }) => {
  // Ce que lit WhatsApp : le <head> du HTML envoyé, sans JavaScript.
  const html = await (await request.get('/fr')).text();
  const head = html.slice(0, html.indexOf('</head>'));
  for (const p of ['og:title', 'og:description', 'og:url', 'og:image', 'og:site_name', 'og:locale']) expect(head, p).toContain(`property="${p}"`);
  expect(head).toMatch(/<meta property="og:image" content="https:\/\/[^"]+\/images\/apercu-partage\.jpg"/);
  // Accueil : la marque est dans l'onglet et dans og:site_name, pas répétée dans le titre de l'aperçu.
  expect(head).toContain('<title>JR Diamond · Joaillerie à la Bourse du diamant de Ramat Gan</title>');
  expect(head).toContain('<meta property="og:title" content="Joaillerie à la Bourse du diamant de Ramat Gan"/>');
  expect(head).toContain('<meta property="og:site_name" content="JR Diamond"/>');

  await page.goto('/he/faq');
  const og = (p: string) => page.locator(`meta[property="${p}"]`);
  await expect(og('og:title')).toHaveAttribute('content', 'שאלות נפוצות');
  await expect(og('og:url')).toHaveAttribute('content', /^https:\/\/.+\/he\/faq$/);
  await expect(og('og:locale')).toHaveAttribute('content', 'he_IL');
  await expect(og('og:locale:alternate')).toHaveCount(2);
  await expect(og('og:image:width')).toHaveAttribute('content', '1200');
  await expect(og('og:image:height')).toHaveAttribute('content', '630');
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
  const image = await og('og:image').getAttribute('content');
  const res = await request.get(new URL(image!).pathname);
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toBe('image/jpeg');
  expect((await res.body()).length).toBeLessThan(600 * 1024);
});
