import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { GUIDE_LOCALES, GUIDES, guidePath } from '@/content/guides';

/**
 * Accessibilité : axe-core sur toutes les pages publiques dans les trois langues, puis les contrôles qu'axe ne fait pas
 * (parcours complet au clavier, annonce des erreurs et du succès des formulaires, largeur de 320 px et zoom à 200 %,
 * réduction des animations, équivalent textuel de la 3D, taille des cibles, sens droite-à-gauche).
 *
 * Règles : WCAG 2.0, 2.1 et 2.2 aux niveaux A et AA. La norme israélienne IS 5568 (2023) reprend WCAG 2.0 AA ; nous visons
 * WCAG 2.1 AA (déclaration d'accessibilité). Le test échoue à la moindre violation : aucune règle n'est désactivée, aucun
 * élément n'est exclu. Une exclusion future devra être justifiée ici, au cas par cas.
 *
 * Résultats reportés dans la déclaration (`src/content/legal/accessibility-status.ts`) : à refaire après chaque changement
 * d'interface, avec la date et la version d'axe-core.
 */

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

/**
 * Bonnes pratiques d'axe (hors WCAG) retenues en plus : titres et repères de page. La norme israélienne fait du critère 2.4.10
 * (titres de sections, niveau AAA dans WCAG) une exigence de niveau AA : un `h1` par page, des niveaux qui ne sautent pas,
 * aucun titre vide, et tout le contenu rangé dans un repère (en-tête, contenu principal, pied de page).
 */
const AXE_HEADING_AND_LANDMARK_RULES = [
  'empty-heading',
  'heading-order',
  'page-has-heading-one',
  'landmark-one-main',
  'landmark-unique',
  'landmark-no-duplicate-banner',
  'landmark-no-duplicate-contentinfo',
  'landmark-no-duplicate-main',
  'landmark-banner-is-top-level',
  'landmark-contentinfo-is-top-level',
  'landmark-main-is-top-level',
  'landmark-complementary-is-top-level',
  'region',
];

/** Violations axe, lisibles dans le rapport d'échec : règle, gravité, aide, éléments en cause. */
async function axeViolations(page: Page) {
  const wcag = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
  const headings = await new AxeBuilder({ page }).withRules(AXE_HEADING_AND_LANDMARK_RULES).analyze();
  return [...wcag.violations, ...headings.violations].map((v) => `${v.id} (${v.impact}) : ${v.help} → ${v.nodes.map((n) => n.target.join(' ')).join(' ; ')}`);
}

async function expectNoViolations(page: Page, label: string) {
  expect(await axeViolations(page), label).toEqual([]);
}

/** Déplie les `<details>` (réponses de la FAQ, données techniques) : axe ne contrôle pas le contenu masqué. */
const openAllDetails = (page: Page) => page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));

type Locale = 'fr' | 'en' | 'he';

/**
 * Chaque guide, dans chaque langue où il existe (français et anglais), lu dans `src/content/guides` : un guide ajouté entre
 * de lui-même dans tous les contrôles. Un même guide garde son `id` d'une langue à l'autre, son adresse est traduite.
 */
const GUIDE_PAGES = GUIDES.fr.map((g) => ({
  name: `guide ${g.id}`,
  urls: Object.fromEntries(GUIDE_LOCALES.map((l) => [l, guidePath(l, GUIDES[l].find((x) => x.id === g.id)!.slug)])) as Partial<Record<Locale, string>>,
}));

/** Pages sans 3D, par langue (les guides n'existent qu'en français et en anglais). */
const PAGES: { name: string; urls: Partial<Record<Locale, string>>; status?: number }[] = [
  { name: 'accueil', urls: { fr: '/fr', en: '/en', he: '/he' } },
  { name: 'transformation', urls: { fr: '/fr/transformation', en: '/en/transformation', he: '/he/transformation' } },
  { name: 'FAQ', urls: { fr: '/fr/faq', en: '/en/faq', he: '/he/faq' } },
  { name: 'guides', urls: { fr: '/fr/guides', en: '/en/guides' } },
  ...GUIDE_PAGES,
  { name: 'déclaration d’accessibilité', urls: { fr: '/fr/accessibilite', en: '/en/accessibility', he: '/he/accessibility' } },
  { name: 'confidentialité', urls: { fr: '/fr/confidentialite', en: '/en/privacy', he: '/he/privacy' } },
  { name: '404', urls: { fr: '/fr/page-inexistante', en: '/en/page-inexistante', he: '/he/page-inexistante' }, status: 404 },
];

const CONFIGURATOR: Record<Locale, string> = { fr: '/fr/configurateur/ring-001', en: '/en/configurator/ring-001', he: '/he/configurator/ring-001' };

const UI = {
  fr: { quote: 'Demander un devis', send: 'Envoyer la demande', canvas: 'Aperçu 3D du bijou', composition: 'Composition', metal: 'Métal' },
  en: { quote: 'Request a quote', send: 'Send request', canvas: '3D preview of the piece', composition: 'Composition', metal: 'Metal' },
  he: { quote: 'בקשת הצעת מחיר', send: 'שליחת הבקשה', canvas: 'תצוגה תלת־ממדית של התכשיט', composition: 'הרכב', metal: 'מתכת' },
} as const;

const ALL_PAGES = PAGES.flatMap((p) => (Object.entries(p.urls) as [Locale, string][]).map(([locale, url]) => ({ ...p, locale, url })));

/**
 * Le configurateur prêt : 3D affichée (sonde `?debug=1`), ou, sans WebGL (Firefox sans écran de cet environnement), le message
 * « WebGL indisponible ». Les contrôles propres à la 3D sont alors ignorés : voir `needsWebGL`.
 */
async function openConfigurator(page: Page, locale: Locale) {
  await page.goto(`${CONFIGURATOR[locale]}?debug=1`);
  await page.waitForFunction(() => window.__jr?.ready === true || document.body.textContent?.includes('WebGL'), null, { timeout: 60_000 });
}

const needsWebGL = (browserName: string) => test.skip(browserName === 'firefox', 'Firefox sans écran n’a pas de WebGL ici : la 3D ne s’affiche pas.');

/**
 * Parcours complet à la touche Tab : Chromium et Firefox. WebKit (Safari) ne s'arrête par défaut que sur les champs de
 * formulaire (réglage « Tab pour chaque élément » désactivé), et l'iPhone simulé ne fait pas défiler le champ qui reçoit le
 * focus (sur un vrai iPhone, c'est l'ouverture du clavier qui le fait) : le parcours n'y aurait pas de sens.
 */
const fullTabOrder = (browserName: string) => test.skip(browserName === 'webkit', 'WebKit : Tab ne parcourt que les champs de formulaire.');

// ---------- 1. axe-core ----------

test.describe('axe-core, WCAG 2.0 à 2.2, niveaux A et AA', () => {
  for (const p of ALL_PAGES) {
    test(`${p.name} (${p.locale})`, async ({ page }) => {
      const res = await page.goto(p.url);
      expect(res?.status()).toBe(p.status ?? 200);
      await expect(page.locator('html')).toHaveAttribute('lang', p.locale);
      await openAllDetails(page);
      await expectNoViolations(page, p.url);
    });
  }

  for (const locale of ['fr', 'en', 'he'] as const) {
    test(`transformation, erreurs de validation affichées (${locale})`, async ({ page }) => {
      await page.goto(PAGES[1].urls[locale]!);
      await page.getByRole('button', { name: UI[locale].send }).click();
      await expect(page.locator('form [role=alert]')).toBeVisible();
      await expectNoViolations(page, `${locale} transformation, erreurs`);
    });

    test(`configurateur : 3D chargée, devis ouvert, erreurs de validation (${locale})`, async ({ page }) => {
      await openConfigurator(page, locale);
      await openAllDetails(page);
      await expectNoViolations(page, `${locale} configurateur`);
      await page.getByRole('button', { name: UI[locale].quote, exact: true }).click();
      await expect(page.locator('#quote-form form')).toBeVisible();
      await expectNoViolations(page, `${locale} configurateur, devis ouvert`);
      await page.getByRole('button', { name: UI[locale].send }).click();
      await expect(page.locator('form [role=alert]')).toBeVisible();
      await expectNoViolations(page, `${locale} configurateur, devis avec erreurs`);
    });
  }
});

// ---------- 2. Clavier ----------

type Stop = { key: string; label: string; visible: boolean; inViewport: boolean; indicator: boolean; obscured: string | null };

/**
 * Parcourt la page à la touche Tab, du début du document à la fin, et décrit chaque arrêt : visible, dans la fenêtre, avec un
 * indicateur de focus (contour ou ombre), et non masqué par un autre élément (WCAG 2.4.11 : la scène 3D reste collée en haut
 * de l'écran sur mobile). Renvoie aussi les éléments qu'on devrait pouvoir atteindre et qui ne l'ont pas été.
 */
async function tabThrough(page: Page, max = 250) {
  const stops: Stop[] = [];
  // Départ au tout début du document (le focus peut être ailleurs, par exemple dans le formulaire qui vient de s'ouvrir) : un
  // repère hors du parcours (`tabindex="-1"`) placé en tête reçoit le focus, la touche Tab suivante va au premier élément.
  await page.evaluate(() => {
    document.querySelectorAll<HTMLElement>('[data-tab-stop]').forEach((el) => delete el.dataset.tabStop);
    const start = document.createElement('span');
    start.tabIndex = -1;
    document.body.prepend(start);
    start.focus();
  });
  for (let i = 0; i < max; i++) {
    await page.keyboard.press('Tab');
    const stop = await page.evaluate((index) => {
      const el = document.activeElement as HTMLElement | null;
      if (!el || el === document.body || el === document.documentElement) return null;
      el.dataset.tabStop ??= String(index);
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const indicator = (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 1) || cs.boxShadow !== 'none';
      const x = Math.min(Math.max(r.left + r.width / 2, 0), innerWidth - 1);
      const y = Math.min(Math.max(r.top + r.height / 2, 0), innerHeight - 1);
      const hit = document.elementFromPoint(x, y);
      const obscured = !hit || hit === el || el.contains(hit) || hit.contains(el) || el.closest('label')?.contains(hit) ? null : hit.outerHTML.slice(0, 80);
      const label = `${el.tagName.toLowerCase()}${el.getAttribute('role') ? `[role=${el.getAttribute('role')}]` : ''} « ${(el.getAttribute('aria-label') || el.textContent || (el as HTMLInputElement).name || '').trim().slice(0, 40)} »`;
      return {
        key: el.dataset.tabStop,
        label,
        visible: r.width > 0 && r.height > 0,
        inViewport: r.bottom > 0 && r.right > 0 && r.top < innerHeight && r.left < innerWidth,
        indicator,
        obscured,
      };
    }, i);
    // Fin du document : le focus en sort (Chromium), reste sur le dernier élément (Firefox) ou revient au premier.
    if (!stop || (stops.length && (stop.key === stops[0].key || stop.key === stops[stops.length - 1].key))) break;
    stops.push(stop);
  }
  // Éléments atteignables d'après le DOM : contrôles et liens visibles, hors `tabindex="-1"` (boutons radio non choisis, champ piège).
  const expected = await page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLElement>('a[href], button, input, textarea, select, summary, [tabindex]'))
      .filter((el) => el.tabIndex >= 0 && !(el as HTMLButtonElement).disabled && el.checkVisibility({ visibilityProperty: true }))
      .filter((el) => !el.closest('[aria-hidden="true"], [inert]'))
      .map((el) => ({ key: el.dataset.tabStop ?? null, html: el.outerHTML.slice(0, 100) })),
  );
  return { stops, unreached: expected.filter((e) => e.key === null).map((e) => e.html) };
}

function expectGoodStops(stops: Stop[], label: string) {
  expect(stops.length, label).toBeGreaterThan(3);
  expect(stops.filter((s) => !s.visible || !s.inViewport).map((s) => s.label), `${label} : arrêts invisibles ou hors écran`).toEqual([]);
  expect(stops.filter((s) => !s.indicator).map((s) => s.label), `${label} : arrêts sans indicateur de focus`).toEqual([]);
  expect(stops.filter((s) => s.obscured).map((s) => `${s.label} sous ${s.obscured}`), `${label} : arrêts masqués`).toEqual([]);
}

test.describe('clavier', () => {
  for (const p of ALL_PAGES.filter((x) => x.locale === 'fr' || x.name === 'accueil')) {
    test(`parcours complet à la touche Tab : ${p.name} (${p.locale})`, async ({ page, browserName }) => {
      fullTabOrder(browserName);
      await page.goto(p.url);
      const { stops, unreached } = await tabThrough(page);
      // Le premier arrêt est le lien d'évitement « Aller au contenu ».
      expect(stops[0].label).toMatch(/Aller au contenu|Skip to content|דילוג לתוכן/);
      expectGoodStops(stops, p.url);
      expect(unreached, `${p.url} : éléments jamais atteints`).toEqual([]);
    });
  }

  for (const locale of ['fr', 'he'] as const) {
    test(`parcours complet à la touche Tab : configurateur et devis (${locale})`, async ({ page, browserName }) => {
      fullTabOrder(browserName);
      await openConfigurator(page, locale);
      const first = await tabThrough(page);
      expectGoodStops(first.stops, `${locale} configurateur`);
      expect(first.unreached, 'éléments jamais atteints').toEqual([]);
      // Formulaire de devis ouvert : il entre dans le parcours, champ par champ.
      await page.getByRole('button', { name: UI[locale].quote, exact: true }).click();
      await expect(page.locator('#quote-form form')).toBeVisible();
      const withForm = await tabThrough(page);
      expectGoodStops(withForm.stops, `${locale} configurateur, devis ouvert`);
      expect(withForm.unreached, 'éléments jamais atteints, devis ouvert').toEqual([]);
      expect(withForm.stops.length).toBeGreaterThan(first.stops.length + 8);
    });
  }

  test('vue 3D au clavier : flèches, + et −, 0 ; Tab en sort (pas de piège)', async ({ page, browserName }) => {
    needsWebGL(browserName);
    await openConfigurator(page, 'fr');
    const canvas = page.getByRole('img', { name: UI.fr.canvas });
    const angles = () => page.evaluate(() => window.__jr!.cameraAngles());
    const start = await angles();
    const distance = await page.evaluate(() => window.__jr!.cameraDistance());
    await canvas.focus();
    const scrolled = await page.evaluate(() => scrollY);
    await page.keyboard.press('ArrowLeft');
    await expect.poll(async () => (await angles()).azimuth).toBeGreaterThan(start.azimuth + 0.2);
    await page.keyboard.press('ArrowUp');
    await expect.poll(async () => (await angles()).polar).not.toBeCloseTo(start.polar, 2);
    await page.keyboard.press('+');
    await expect.poll(() => page.evaluate(() => window.__jr!.cameraDistance())).toBeLessThan(distance * 0.95);
    await page.keyboard.press('0');
    await expect.poll(async () => (await angles()).azimuth, { timeout: 5000 }).toBeCloseTo(start.azimuth, 2);
    // Les flèches ne font pas défiler la page tant que la vue a le focus.
    expect(await page.evaluate(() => scrollY)).toBe(scrolled);
    // Tab et Maj + Tab quittent la vue.
    await page.keyboard.press('Tab');
    await expect(page.getByRole('group', { name: 'Angles de vue' }).getByRole('button').first()).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(canvas).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(canvas).not.toBeFocused();
  });

  test('groupes de choix : un arrêt par groupe, les flèches choisissent ; en hébreu, la flèche gauche va au suivant', async ({ page }) => {
    await page.goto(CONFIGURATOR.fr);
    const group = page.getByRole('radiogroup', { name: UI.fr.composition });
    await expect(group.getByRole('radio', { checked: true })).toHaveAttribute('tabindex', '0');
    await expect(group.locator('[role=radio][tabindex="-1"]')).toHaveCount(2);
    await group.getByRole('radio', { name: 'Ensemble' }).focus();
    await page.keyboard.press('ArrowRight');
    await expect(group.getByRole('radio', { name: 'Solitaire' })).toBeFocused();
    await expect(group.getByRole('radio', { name: 'Solitaire' })).toHaveAttribute('aria-checked', 'true');
    await page.keyboard.press('End');
    await expect(group.getByRole('radio', { name: 'Alliance' })).toHaveAttribute('aria-checked', 'true');
    await page.keyboard.press('ArrowDown');
    await expect(group.getByRole('radio', { name: 'Ensemble' })).toHaveAttribute('aria-checked', 'true');
    // Pastilles de métal : même comportement, et le nom du métal choisi est écrit en toutes lettres à côté du titre.
    const metal = page.getByRole('radiogroup', { name: UI.fr.metal });
    await metal.getByRole('radio', { checked: true }).focus();
    await page.keyboard.press('ArrowRight');
    await expect(metal.getByRole('radio', { name: 'Or blanc' })).toHaveAttribute('aria-checked', 'true');
    await expect(page.getByRole('heading', { name: 'Métal Or blanc 18 carats' })).toBeVisible();

    await page.goto(CONFIGURATOR.he);
    const he = page.getByRole('radiogroup', { name: UI.he.composition });
    await he.getByRole('radio', { checked: true }).focus();
    await page.keyboard.press('ArrowLeft');
    await expect(he.getByRole('radio', { name: 'סוליטר' })).toHaveAttribute('aria-checked', 'true');
    await page.keyboard.press('ArrowRight');
    await expect(he.getByRole('radio', { name: 'סט' })).toHaveAttribute('aria-checked', 'true');
  });

  test('demande de devis entièrement au clavier, du bouton à la confirmation', async ({ page }) => {
    await page.goto(CONFIGURATOR.fr);
    await page.getByRole('button', { name: UI.fr.quote, exact: true }).focus();
    await page.keyboard.press('Enter');
    await expect(page.getByLabel('Nom *')).toBeFocused();
    await page.keyboard.type('Jeanne Martin');
    await page.keyboard.press('Tab');
    await page.keyboard.type('jeanne@example.com');
    // Téléphone, taille, message, photos, puis la case d'accord.
    for (let i = 0; i < 5; i++) await page.keyboard.press('Tab');
    await expect(page.getByRole('checkbox', { name: /uniquement pour répondre/ })).toBeFocused();
    await page.keyboard.press('Space');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: UI.fr.send })).toBeFocused();
    const res = page.waitForResponse((r) => r.url().endsWith('/api/devis'));
    await page.keyboard.press('Enter');
    expect((await res).status()).toBe(200);
    await expect(page.getByRole('status').filter({ hasText: 'L’atelier a bien reçu' })).toBeFocused();
  });
});

// ---------- 3. Annonce des erreurs et du succès ----------

test.describe('formulaires : erreurs et succès annoncés', () => {
  test('transformation : résumé role=alert, erreurs liées aux champs, focus sur le premier, succès role=status', async ({ page }) => {
    await page.goto('/fr/transformation');
    await expect(page.getByText('Les champs marqués d’un astérisque (*) sont obligatoires.')).toBeVisible();
    await page.getByRole('button', { name: 'Envoyer la demande' }).click();
    const alert = page.locator('form [role=alert]');
    await expect(alert).toContainText('Le formulaire contient 4 erreurs');
    await expect(alert).toContainText('Décrivez le bijou que vous avez');
    await expect(page.getByLabel('Nom *')).toBeFocused();
    for (const [label, description] of [
      ['Nom *', 'Indiquez votre nom (2 caractères au moins).'],
      ['E-mail *', 'Indiquez votre adresse e-mail.'],
      ['Le bijou que vous avez *', 'Décrivez le bijou que vous avez (5 caractères au moins).'],
    ] as const) {
      await expect(page.getByLabel(label)).toHaveAttribute('aria-invalid', 'true');
      await expect(page.getByLabel(label)).toHaveAccessibleDescription(description);
    }
    // Aide des photos reliée au champ, sans erreur.
    await expect(page.getByLabel('Photos du bijou')).toHaveAccessibleDescription(/3 photos au plus/);
    await page.getByLabel('Nom *').fill('Jeanne Martin');
    await page.getByLabel('E-mail *').fill('jeanne@example.com');
    await page.getByLabel('Le bijou que vous avez *').fill('Bague en or jaune');
    await page.getByRole('checkbox', { name: /uniquement pour répondre/ }).check();
    await expect(page.locator('[aria-invalid=true]')).toHaveCount(0);
    await page.getByRole('button', { name: 'Envoyer la demande' }).click();
    await expect(page.getByRole('status').filter({ hasText: 'L’atelier a bien reçu vos photos' })).toBeFocused();
  });

  test('erreurs dans les trois langues (devis)', async ({ page }) => {
    for (const [locale, summary, name] of [
      ['en', 'There are 3 problems in the form:', 'Enter your name (at least 2 characters).'],
      ['he', 'בטופס יש 3 שגיאות:', 'נא למלא את שמכם (2 תווים לפחות).'],
    ] as const) {
      await page.goto(CONFIGURATOR[locale]);
      await page.getByRole('button', { name: UI[locale].quote, exact: true }).click();
      await page.getByRole('button', { name: UI[locale].send }).click();
      await expect(page.locator('form [role=alert]')).toContainText(summary);
      await expect(page.locator('form [aria-invalid=true]').first()).toHaveAccessibleDescription(name);
    }
  });
});

// ---------- 4. Largeur de 320 px, zoom à 200 % ----------

const noHorizontalScroll = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

test.describe('affichage agrandi', () => {
  // 320 px de large : écran étroit, ou ordinateur de 1280 px zoomé à 400 % (WCAG 1.4.10). Mobile seulement (balise viewport).
  test('320 px de large : aucun défilement horizontal, toutes pages et langues', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Largeur de téléphone : projet mobile');
    await page.setViewportSize({ width: 320, height: 640 });
    for (const p of ALL_PAGES) {
      await page.goto(p.url);
      expect.soft(await noHorizontalScroll(page), p.url).toBeLessThanOrEqual(0);
    }
    for (const locale of ['fr', 'en', 'he'] as const) {
      await openConfigurator(page, locale);
      await page.getByRole('button', { name: UI[locale].quote, exact: true }).click();
      await page.getByRole('button', { name: UI[locale].send }).click();
      expect.soft(await noHorizontalScroll(page), `${locale} configurateur, devis avec erreurs`).toBeLessThanOrEqual(0);
    }
  });

  // Zoom à 200 % d'une fenêtre de 1440 × 900 : la page dispose de 720 × 450 px CSS (WCAG 1.4.4).
  test('zoom à 200 % : aucun défilement horizontal, toutes pages et langues', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Zoom du navigateur : projet ordinateur');
    await page.setViewportSize({ width: 720, height: 450 });
    for (const p of ALL_PAGES) {
      await page.goto(p.url);
      expect.soft(await noHorizontalScroll(page), p.url).toBeLessThanOrEqual(0);
    }
    for (const locale of ['fr', 'en', 'he'] as const) {
      await openConfigurator(page, locale);
      await page.getByRole('button', { name: UI[locale].quote, exact: true }).click();
      expect.soft(await noHorizontalScroll(page), `${locale} configurateur, devis ouvert`).toBeLessThanOrEqual(0);
    }
  });
});

// ---------- 5. Réduction des animations ----------

test.describe('réduction des animations demandée par le système', () => {
  test.use({ reducedMotion: 'reduce' });

  test('pas de rotation automatique, vues instantanées, aucune transition, défilement sans animation', async ({ page, browserName }) => {
    needsWebGL(browserName);
    await page.addInitScript(() => {
      const calls: unknown[] = [];
      (window as unknown as { __scrolls: unknown[] }).__scrolls = calls;
      const original = Element.prototype.scrollIntoView;
      Element.prototype.scrollIntoView = function (arg?: boolean | ScrollIntoViewOptions) {
        calls.push(arg);
        return original.call(this, arg);
      };
    });
    await openConfigurator(page, 'fr');
    // Rien ne tourne tout seul. (Le nombre de rendus peut bouger : sur un appareil lent, le passage au rendu simplifié redessine
    // la scène une fois, sans mouvement.)
    const before = await page.evaluate(() => window.__jr!.cameraAngles());
    await page.waitForTimeout(1200);
    expect(await page.evaluate(() => window.__jr!.cameraAngles())).toEqual(before);
    // Changement de vue : la caméra est à destination dès l'image suivante (sans réduction : environ une seconde de transition).
    await page.getByRole('button', { name: 'Dessus' }).click();
    await page.waitForTimeout(150);
    expect((await page.evaluate(() => window.__jr!.cameraAngles())).polar).toBeLessThan(0.1);
    // Transitions de l'interface coupées.
    expect(await page.getByRole('radio', { name: 'Solitaire' }).evaluate((el) => getComputedStyle(el).transitionDuration)).toBe('0s');
    // Ouverture du devis : défilement immédiat, pas « smooth ».
    await page.getByRole('button', { name: UI.fr.quote, exact: true }).click();
    const scrolls = await page.evaluate(() => (window as unknown as { __scrolls: { behavior?: string }[] }).__scrolls);
    expect(scrolls.length).toBeGreaterThan(0);
    expect(scrolls.every((s) => s.behavior !== 'smooth')).toBe(true);
  });
});

// ---------- 6. Équivalent textuel de la 3D ----------

test('vue 3D : nom, description de la bague et des choix, mise à jour annoncée', async ({ page, browserName }) => {
  needsWebGL(browserName);
  await openConfigurator(page, 'fr');
  const canvas = page.getByRole('img', { name: UI.fr.canvas });
  await expect(canvas).toHaveAttribute('tabindex', '0');
  await expect(canvas).toHaveAccessibleDescription(/^Ensemble marquise\. Composition : Ensemble\. .*Métal : Or jaune 18 carats\. Pierres : .*Marquise.*Origine du diamant : Naturel\. Quand l’aperçu a le focus : flèches pour tourner/);
  await expect(page.locator('#viewer-description')).toHaveAttribute('aria-live', 'polite');
  await page.getByRole('radio', { name: 'Or rose', exact: true }).click();
  await page.getByRole('radio', { name: 'Alliance' }).click();
  await page.getByRole('radio', { name: 'Synthétique' }).click();
  await expect(canvas).toHaveAccessibleDescription(/Composition : Alliance\. L’alliance dégradée seule\. Métal : Or rose 18 carats\. .*Origine du diamant : Synthétique\./);
  await expect(page.locator('#viewer-description')).not.toContainText('Marquise');

  await openConfigurator(page, 'he');
  await expect(page.getByRole('img', { name: UI.he.canvas })).toHaveAccessibleDescription(/^סט מרקיזה\. הרכב: סט\./);
});

// ---------- 7. Taille des cibles ----------

test('cibles tactiles d’au moins 24 × 24 px (hors liens dans le texte), toutes pages et langues', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Cibles tactiles : projet mobile');
  const small = async () =>
    page.evaluate(() =>
      Array.from(document.querySelectorAll<HTMLElement>('a[href], button, input, textarea, select, summary, [role=radio], [tabindex="0"]'))
        .filter((el) => el.checkVisibility({ visibilityProperty: true }) && !el.closest('[aria-hidden="true"]'))
        // Lien dans une phrase ou une ligne de texte (« Sources : … · … ») : exception de WCAG 2.5.8 (« inline »).
        .filter((el) => {
          if (el.tagName !== 'A') return true;
          const block = el.parentElement?.closest('p, li, dd, dt, td, th, figcaption');
          return !block || (block.textContent ?? '').trim().length <= (el.textContent ?? '').trim().length + 2;
        })
        // Liens d'évitement : hors de l'écran tant qu'ils n'ont pas le focus.
        .filter((el) => !el.closest('.skip-links'))
        .map((el) => {
          // Case à cocher : l'étiquette qui l'englobe fait partie de la cible.
          const target = el instanceof HTMLInputElement && el.type === 'checkbox' && el.closest('label') ? el.closest('label')! : el;
          const r = target.getBoundingClientRect();
          return { html: el.outerHTML.slice(0, 90), w: Math.round(r.width), h: Math.round(r.height) };
        })
        .filter((t) => t.w < 24 || t.h < 24)
        .map((t) => `${t.w}×${t.h} ${t.html}`),
    );
  for (const p of ALL_PAGES) {
    await page.goto(p.url);
    await openAllDetails(page);
    expect.soft(await small(), p.url).toEqual([]);
  }
  for (const locale of ['fr', 'he'] as const) {
    await openConfigurator(page, locale);
    await page.getByRole('button', { name: UI[locale].quote, exact: true }).click();
    await openAllDetails(page);
    expect.soft(await small(), `${locale} configurateur`).toEqual([]);
  }
});

// ---------- 8. Droite-à-gauche ----------

test('hébreu : document en droite-à-gauche, lien d’évitement à droite, alerte bordée à droite', async ({ page }) => {
  for (const p of ALL_PAGES.filter((x) => x.locale === 'he')) {
    await page.goto(p.url);
    await expect(page.locator('html'), p.url).toHaveAttribute('dir', 'rtl');
    expect(await page.locator('main').evaluate((m) => getComputedStyle(m).direction), p.url).toBe('rtl');
  }
  await page.goto('/he/transformation');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'דילוג לתוכן' });
  await expect(skip).toBeFocused();
  const box = (await skip.boundingBox())!;
  const width = page.viewportSize()!.width;
  expect(box.x + box.width).toBeGreaterThan(width - 40);
  await page.getByRole('button', { name: UI.he.send }).click();
  const alert = page.locator('form [role=alert]');
  await expect(alert).toBeVisible();
  expect(await alert.evaluate((el) => [getComputedStyle(el).borderRightWidth, getComputedStyle(el).borderLeftWidth])).toEqual(['2px', '0px']);
});
