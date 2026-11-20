import { expect, test } from '@playwright/test';

// Trois versions de l'accueil à comparer (`/fr/versions`) : la bague en 3D suit le défilement. Sans WebGL (Firefox sans écran de
// cet environnement), un rendu fixe la remplace : les textes et les commandes sont testés dans tous les navigateurs.

test('index des versions : trois versions, non indexées, sélecteur', async ({ page }) => {
  await page.goto('/fr/versions');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Trois versions de l’accueil');
  expect(await page.locator('meta[name="robots"]').evaluateAll((m) => m.map((x) => x.getAttribute('content')).join(' '))).toMatch(/noindex/);
  const main = page.getByRole('main');
  for (const id of ['a', 'b', 'c']) await expect(main.locator(`a[href="/fr/versions/${id}"]`)).toHaveCount(1);
  const switcher = page.getByRole('navigation', { name: 'Versions de l’accueil' });
  await expect(switcher.getByRole('link')).toHaveCount(4);
  await switcher.getByRole('link', { name: 'B', exact: true }).click();
  await expect(page).toHaveURL(/\/fr\/versions\/b$/);
  await expect(page.getByRole('navigation', { name: 'Versions de l’accueil' }).locator('a[aria-current="page"]')).toHaveText('B');
});

test('scène 3D : affichée quand WebGL existe, sinon un rendu fixe la remplace', async ({ page, browserName }) => {
  for (const id of ['a', 'b', 'c']) {
    await page.goto(`/fr/versions/${id}`);
    if (browserName === 'firefox') {
      // Pas de WebGL ici : l'image de repli, avec son texte alternatif.
      await expect(page.getByRole('img', { name: /Ensemble marquise en or jaune/ })).toBeVisible();
    } else {
      await expect(page.locator('[data-stage-ready="true"]')).toBeVisible({ timeout: 60_000 });
      // La scène est décorative : cachée aux lecteurs d'écran, et elle ne prend pas les clics.
      await expect(page.locator('[data-stage-ready]')).toHaveAttribute('aria-hidden', 'true');
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth), id).toBeLessThanOrEqual(0);
    expect(await page.locator('meta[name="robots"]').evaluateAll((m) => m.map((x) => x.getAttribute('content')).join(' '))).toMatch(/noindex/);
  }
});

test('version A : le curseur et les flèches changent de métal, le configurateur s’ouvre dans ce métal', async ({ page }) => {
  await page.goto('/fr/versions/a');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Votre bague, vue en 3D, fabriquée à Ramat Gan');
  const name = page.locator('p[aria-live="polite"]').first();
  await expect(name).toHaveText('Or jaune');
  await expect(page.getByRole('button', { name: 'Métal précédent' })).toBeDisabled();
  await page.getByRole('button', { name: 'Métal suivant' }).click();
  await expect(name).toHaveText('Or blanc');
  // Curseur au clavier : flèche droite, métal suivant ; le nom du métal est sa valeur annoncée.
  const slider = page.getByRole('slider', { name: 'Métal' });
  await slider.focus();
  await page.keyboard.press('ArrowRight');
  await expect(name).toHaveText('Or rose');
  await expect(slider).toHaveAttribute('aria-valuetext', 'Or rose');
  const cta = page.getByRole('main').getByRole('link', { name: 'Configurer une bague' }).first();
  await expect(cta).toHaveAttribute('href', '/fr/configurateur/ring-001?metal=rose-gold-18k');
  // Les quatre étapes de la méthode et les quatre métaux de la rangée.
  await expect(page.getByRole('navigation', { name: 'Comment nous travaillons' }).getByRole('link')).toHaveCount(4);
  await page.getByRole('button', { name: 'Platine', exact: true }).click();
  await expect(name).toHaveText('Platine');
  await expect(page.getByRole('button', { name: 'Platine', exact: true })).toHaveAttribute('aria-pressed', 'true');
});

test('version A : le lien ouvre le configurateur dans le métal choisi', async ({ page }) => {
  await page.goto('/fr/versions/a');
  await page.getByRole('button', { name: 'Métal suivant' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Configurer une bague' }).first().click();
  await expect(page).toHaveURL(/\/fr\/configurateur\/ring-001\?metal=white-gold-18k$/);
  await expect(page.getByRole('radio', { name: 'Or blanc' })).toHaveAttribute('aria-checked', 'true');
});

test('version B : la constellation a une étoile par pierre du modèle (17)', async ({ page }) => {
  await page.goto('/fr/versions/b');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Votre bague, vue en 3D, fabriquée à Ramat Gan');
  // 1 marquise et 6 diamants ronds sur le solitaire, 10 sur l'alliance : positions lues dans le fichier de géométrie.
  await expect(page.locator('main svg circle')).toHaveCount(17);
  await expect(page.locator('main svg').first()).toHaveAttribute('aria-hidden', 'true');
  await expect(page.getByRole('navigation', { name: 'Comment nous travaillons' }).getByRole('link')).toHaveCount(4);
  await page.getByRole('button', { name: 'Or rose', exact: true }).click();
  await expect(page.getByRole('main').getByRole('link', { name: 'Configurer une bague' }).first()).toHaveAttribute('href', '/fr/configurateur/ring-001?metal=rose-gold-18k');
});

test('version C : métal et composition choisis dans la page, repris par le configurateur', async ({ page }) => {
  await page.goto('/fr/versions/c');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Votre bague, vue en 3D, fabriquée à Ramat Gan');
  const metals = page.getByRole('group', { name: 'Métal' });
  const compositions = page.getByRole('group', { name: 'Composition' });
  await expect(metals.getByRole('radio')).toHaveCount(4);
  await expect(compositions.getByRole('radio')).toHaveCount(3);
  await expect(metals.getByRole('radio', { name: 'Or jaune' })).toBeChecked();
  // Au clavier : une flèche passe au choix suivant du groupe.
  await metals.getByRole('radio', { name: 'Or jaune' }).focus();
  await page.keyboard.press('ArrowRight');
  await expect(metals.getByRole('radio', { name: 'Or blanc' })).toBeChecked();
  await compositions.getByRole('radio', { name: 'Solitaire' }).check({ force: true });
  await expect(page.getByText('La bague marquise seule.')).toBeVisible();
  for (const href of await page.getByRole('main').getByRole('link', { name: 'Configurer une bague' }).evaluateAll((els) => els.map((e) => e.getAttribute('href'))))
    expect(href).toBe('/fr/configurateur/ring-001?composition=solitaire&metal=white-gold-18k');
  await page.goto('/fr/configurateur/ring-001?composition=solitaire&metal=white-gold-18k');
  await expect(page.getByRole('radio', { name: 'Solitaire' })).toHaveAttribute('aria-checked', 'true');
});

test('version C : chaque étape nomme le métal montré ; les points de navigation portent le nom des sections', async ({ page }) => {
  await page.goto('/fr/versions/c');
  // Le titre d'une étape : le libellé court, puis la phrase.
  await expect(page.getByRole('heading', { level: 3 }).first()).toHaveText('Fichier de fabrication: Le modèle 3D vient du fichier de fabrication');
  for (const metal of ['Or blanc', 'Or rose', 'Platine', 'Or jaune']) await expect(page.getByText(`Métal · ${metal}`, { exact: true })).toHaveCount(1);
  // La dernière étape porte le métal choisi dans la page.
  await page.getByRole('group', { name: 'Métal' }).getByRole('radio', { name: 'Platine' }).check({ force: true });
  await expect(page.getByText('Métal · Platine', { exact: true })).toHaveCount(2);
  // Points de navigation (écran large) : cinq liens nommés, le nom s'affiche au focus et se referme avec Échap.
  const dots = page.getByRole('navigation', { name: 'Sections de la page' });
  if (await dots.isVisible()) {
    await expect(dots.getByRole('link')).toHaveCount(5);
    const link = dots.getByRole('link', { name: 'Métaux et pierres' });
    await link.focus();
    await expect(dots).not.toHaveAttribute('data-quiet', '');
    await page.keyboard.press('Escape');
    await expect(dots).toHaveAttribute('data-quiet', '');
  }
});

test('versions A et B : les quatre métaux restent nommés et choisis au clavier', async ({ page }) => {
  for (const id of ['a', 'b']) {
    await page.goto(`/fr/versions/${id}`);
    for (const metal of ['Or jaune', 'Or blanc', 'Or rose', 'Platine']) await expect(page.getByRole('button', { name: metal, exact: true })).toHaveCount(1);
    const platinum = page.getByRole('button', { name: 'Platine', exact: true });
    await platinum.focus();
    await page.keyboard.press('Enter');
    await expect(platinum).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('main').getByRole('link', { name: 'Configurer une bague' }).first()).toHaveAttribute('href', '/fr/configurateur/ring-001?metal=platinum-950');
  }
});

test('versions en hébreu : sens droite-à-gauche, sans les guides', async ({ page }) => {
  for (const id of ['a', 'b', 'c']) {
    await page.goto(`/he/versions/${id}`);
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('הטבעת שלכם, בתלת־ממד, מיוצרת ברמת גן');
    await expect(page.getByRole('main').locator('a[href*="/guides"]')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth), id).toBeLessThanOrEqual(0);
  }
});
