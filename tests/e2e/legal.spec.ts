import { expect, test } from '@playwright/test';
// Import relatif : `site.ts` n'importe rien du projet (il est aussi lu par `next.config.ts`).
import { TRANSLATED_REDIRECTS_PERMANENT } from '../../src/config/site';

// Déclaration d'accessibilité et politique de confidentialité : trois langues, adresses traduites, pied de page, lien d'évitement,
// et ce que la politique affirme du site (aucun cookie, aucun stockage, aucune requête vers un autre domaine).

const PAGES = [
  { url: '/fr/accessibilite', lang: 'fr', dir: 'ltr', h1: 'Déclaration d’accessibilité', todo: '[à compléter :', alt: { en: '/en/accessibility', he: '/he/accessibility' } },
  { url: '/en/accessibility', lang: 'en', dir: 'ltr', h1: 'Accessibility statement', todo: '[to be completed:', alt: { fr: '/fr/accessibilite', he: '/he/accessibility' } },
  { url: '/he/accessibility', lang: 'he', dir: 'rtl', h1: 'הצהרת נגישות', todo: '[להשלמה:', alt: { fr: '/fr/accessibilite', en: '/en/accessibility' } },
  { url: '/fr/confidentialite', lang: 'fr', dir: 'ltr', h1: 'Politique de confidentialité', todo: '[à compléter :', alt: { en: '/en/privacy', he: '/he/privacy' } },
  { url: '/en/privacy', lang: 'en', dir: 'ltr', h1: 'Privacy policy', todo: '[to be completed:', alt: { fr: '/fr/confidentialite', he: '/he/privacy' } },
  { url: '/he/privacy', lang: 'he', dir: 'rtl', h1: 'מדיניות פרטיות', todo: '[להשלמה:', alt: { fr: '/fr/confidentialite', en: '/en/privacy' } },
];

const FOOTER = {
  fr: { accessibility: ['Déclaration d’accessibilité', '/fr/accessibilite'], privacy: ['Politique de confidentialité', '/fr/confidentialite'] },
  en: { accessibility: ['Accessibility statement', '/en/accessibility'], privacy: ['Privacy policy', '/en/privacy'] },
  he: { accessibility: ['הצהרת נגישות', '/he/accessibility'], privacy: ['מדיניות פרטיות', '/he/privacy'] },
} as const;

test('pages légales en français, anglais et hébreu : 200, titre, langue, badge, marques « à compléter », pied de page', async ({ page }) => {
  for (const c of PAGES) {
    const res = await page.goto(c.url);
    expect(res!.status(), c.url).toBe(200);
    await expect(page).toHaveURL(new RegExp(`${c.url}$`));
    await expect(page.locator('html')).toHaveAttribute('lang', c.lang);
    await expect(page.locator('html')).toHaveAttribute('dir', c.dir);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(c.h1);
    await expect(page).toHaveTitle(`${c.h1} · JR Diamond`);
    await expect(page.locator('main p').filter({ hasText: /Brouillon|Draft|טיוטה/ }).first()).toBeVisible();
    // Informations de l'entreprise pas encore fournies : marquées, visibles, dans la langue de la page.
    const todo = page.locator('main mark');
    expect(await todo.count(), c.url).toBeGreaterThan(2);
    await expect(todo.first()).toContainText(c.todo);
    await expect(todo.first()).toBeVisible();
    // Adresse canonique et versions des autres langues, adresses traduites comprises.
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`${c.url}$`));
    for (const [l, href] of Object.entries(c.alt)) await expect(page.locator(`link[rel="alternate"][hreflang="${l}"]`)).toHaveAttribute('href', new RegExp(`${href}$`));
    // Pied de page : les deux pages, même libellé partout.
    const footer = page.getByRole('contentinfo');
    for (const [label, href] of Object.values(FOOTER[c.lang as keyof typeof FOOTER])) await expect(footer.getByRole('link', { name: label, exact: true })).toHaveAttribute('href', href);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth), c.url).toBeLessThanOrEqual(0);
  }
});

test('adresses françaises sous /en et /he : redirection vers l’adresse traduite, temporaire avant le lancement', async ({ request }) => {
  const cases = [
    ['/en/accessibilite', '/en/accessibility'],
    ['/he/accessibilite', '/he/accessibility'],
    ['/en/confidentialite', '/en/privacy'],
    ['/he/confidentialite', '/he/privacy'],
  ];
  for (const [from, to] of cases) {
    const res = await request.get(from, { maxRedirects: 0 });
    expect(res.status(), from).toBe(TRANSLATED_REDIRECTS_PERMANENT ? 308 : 307);
    expect(res.headers()['location'], from).toBe(to);
  }
  expect((await request.get('/en/confidentialite?ref=1', { maxRedirects: 0 })).headers()['location']).toBe('/en/privacy?ref=1');
  expect((await request.get('/fr/accessibilite', { maxRedirects: 0 })).status()).toBe(200);
  expect((await request.get('/fr/confidentialite', { maxRedirects: 0 })).status()).toBe(200);
  // Pas d'adresse anglaise en français.
  expect((await request.get('/fr/privacy')).status()).toBe(404);
});

test('sélecteur de langue et pied de page : vers l’adresse traduite de la même page', async ({ page }) => {
  await page.goto('/fr/confidentialite');
  const lang = page.getByRole('navigation', { name: 'Langue / Language' });
  await lang.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/privacy$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Privacy policy');
  await lang.getByRole('link', { name: 'עב', exact: true }).click();
  await expect(page).toHaveURL(/\/he\/privacy$/);
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await lang.getByRole('link', { name: 'FR', exact: true }).click();
  await expect(page).toHaveURL(/\/fr\/confidentialite$/);

  await page.goto('/he/faq');
  await page.getByRole('contentinfo').getByRole('link', { name: 'הצהרת נגישות' }).click();
  await expect(page).toHaveURL(/\/he\/accessibility$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('הצהרת נגישות');
});

test('lien d’évitement : premier élément au clavier, vers le contenu puis vers la déclaration', async ({ page }) => {
  await page.goto('/en/faq');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toBeFocused();
  expect((await skip.boundingBox())!.width).toBeGreaterThan(40);
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/en\/faq#contenu$/);
  await expect(page.locator('main#contenu')).toHaveCount(1);

  await page.goto('/fr/transformation');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  const statement = page.getByRole('banner').getByRole('link', { name: 'Déclaration d’accessibilité' });
  await expect(statement).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/fr\/accessibilite$/);
  // Hors focus, les liens d'évitement ne prennent pas de place à l'écran.
  expect((await page.getByRole('link', { name: 'Aller au contenu' }).boundingBox())!.width).toBeLessThanOrEqual(1);
});

test('déclaration : état de conformité daté ; formulaires : lien vers la politique', async ({ page }) => {
  await page.goto('/fr/accessibilite');
  const status = page.locator('section#etat');
  await expect(status.getByRole('heading', { level: 2 })).toHaveText('État de conformité');
  await expect(status).toContainText('Dernière vérification');
  await expect(status).toContainText('16 novembre 2026');
  // Vérification du 15/11, refaite le 16/11 : contrôles automatiques (axe-core et contrôles complémentaires), pas de lecteur d'écran.
  await expect(status).toContainText('Partielle au niveau AA');
  await expect(status).toContainText('axe-core 4.14.0');
  await expect(status.getByRole('heading', { level: 3, name: 'Lecteurs d’écran testés' })).toBeVisible();
  await expect(status).toContainText('Aucun pour l’instant.');
  await expect(status.getByRole('heading', { level: 3, name: 'Limites connues' })).toBeVisible();
  await expect(status).toContainText('pas encore été essayé avec un lecteur d’écran');
  await expect(page.getByRole('link', { name: /IS 5568/ })).toHaveAttribute('href', /^https:\/\/www\.gov\.il\//);

  await page.goto('/fr/transformation');
  const link = page.getByRole('link', { name: 'politique de confidentialité (nouvel onglet)' });
  await expect(link).toHaveAttribute('href', '/fr/confidentialite');
  await expect(link).toHaveAttribute('target', '_blank');

  await page.goto('/en/configurator/ring-001');
  await page.getByRole('button', { name: 'Request a quote' }).click();
  await expect(page.getByRole('link', { name: 'privacy policy (opens in a new tab)' })).toHaveAttribute('href', '/en/privacy');
});

test('ce que dit la politique : aucun cookie, aucun stockage, aucune requête vers un autre domaine', async ({ page, baseURL }) => {
  const foreign: string[] = [];
  page.on('request', (r) => {
    const url = r.url();
    if (!url.startsWith(baseURL!) && !/^(data|blob):/.test(url)) foreign.push(url);
  });
  await page.goto('/fr');
  await page.goto('/fr/configurateur/ring-001?debug=1');
  await page.waitForFunction(() => window.__jr?.ready === true, null, { timeout: 60_000 });
  await page.goto('/he/faq');
  // Envoi d'une demande (envoi simulé pendant les tests).
  await page.goto('/fr/transformation');
  await page.getByLabel('Nom *').fill('Jeanne Martin');
  await page.getByLabel('E-mail *').fill('jeanne@example.com');
  await page.getByLabel('Le bijou que vous avez *').fill('Bague en or jaune avec un diamant');
  await page.getByRole('checkbox', { name: /uniquement pour répondre/ }).check();
  const res = page.waitForResponse((r) => r.url().endsWith('/api/transformation'));
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  expect((await res).status()).toBe(200);
  await page.waitForLoadState('networkidle');

  expect(foreign).toEqual([]);
  expect(await page.context().cookies()).toEqual([]);
  expect(await page.evaluate(() => localStorage.length + sessionStorage.length)).toBe(0);
});
