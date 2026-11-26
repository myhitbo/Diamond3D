import { expect, test } from '@playwright/test';

// Cinq styles de boutons à comparer avec l'atelier (26/11/2026) : paramètre d'adresse `boutons`, barre de comparaison dans
// le configurateur, page de comparaison. L'aspect d'origine reste celui par défaut tant que le propriétaire n'a pas choisi.

test('par défaut : aspect d’origine, pas de barre de comparaison', async ({ page }) => {
  await page.goto('/fr/configurateur/ring-001');
  await expect(page.locator('[data-buttons]')).toHaveAttribute('data-buttons', '1');
  await expect(page.getByRole('group', { name: 'Style des boutons' })).toHaveCount(0);
  // Le nom du métal reste lu, même s'il n'est pas affiché dans l'aspect d'origine ; le titre garde son nom court.
  await expect(page.getByRole('radio', { name: 'Or rose', exact: true })).toBeVisible();
  await expect(page.getByRole('radio', { name: '14 carats', exact: true })).toBeVisible();
});

test('le paramètre « boutons » choisit le style ; la barre change le style et l’adresse, sans recharger', async ({ page }) => {
  await page.goto('/fr/configurateur/ring-002?boutons=3');
  const root = page.locator('[data-buttons]');
  await expect(root).toHaveAttribute('data-buttons', '3');
  const bar = page.getByRole('group', { name: 'Style des boutons' });
  await expect(bar.getByRole('button')).toHaveCount(5);
  await expect(bar.getByRole('button', { name: '3 · Plaques d’or' })).toHaveAttribute('aria-pressed', 'true');
  // Dans les versions 2 à 5, le poinçon fait partie du nom du titre, et les pictogrammes sont affichés.
  await expect(page.getByRole('radio', { name: '14 carats 585 ‰' })).toBeVisible();
  await expect(page.getByRole('radio', { name: /Marquise 16,5/ }).locator('svg')).toBeVisible();

  await bar.getByRole('button', { name: '5 · Verre et lumière' }).click();
  await expect(root).toHaveAttribute('data-buttons', '5');
  await expect(page).toHaveURL(/boutons=5/);
  // Un choix du configurateur garde le style dans l'adresse.
  await page.getByRole('radio', { name: /Or rose/ }).click();
  await expect(page).toHaveURL(/metal=rose-gold-14k/);
  await expect(page).toHaveURL(/boutons=5/);
});

test('valeur inconnue : aspect d’origine, barre affichée pour choisir', async ({ page }) => {
  await page.goto('/fr/configurateur/ring-001?boutons=9');
  await expect(page.locator('[data-buttons]')).toHaveAttribute('data-buttons', '1');
  await expect(page.getByRole('group', { name: 'Style des boutons' }).getByRole('button', { name: '1 · Original' })).toHaveAttribute('aria-pressed', 'true');
});

test('page de comparaison : cinq versions qui fonctionnent, non indexée, liens vers le configurateur', async ({ page }) => {
  await page.goto('/fr/versions/boutons');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Cinq styles de boutons');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  const names = ['Original', 'Noir et or', 'Plaques d’or', 'Épuré', 'Verre et lumière'];
  for (const [i, name] of names.entries()) {
    const n = i + 1;
    const block = page.getByRole('region', { name: `Version ${n} · ${name}` });
    await expect(block.locator('[data-buttons]')).toHaveAttribute('data-buttons', String(n));
    await expect(block.getByRole('link', { name: 'Voir dans le configurateur' })).toHaveAttribute('href', `/fr/configurateur/ring-002?boutons=${n}`);
    // Chaque bloc fonctionne : choisir « Solitaire » le coche, sans toucher aux autres blocs.
    const group = block.getByRole('radiogroup', { name: `Composition, Version ${n}` });
    await group.getByRole('radio', { name: 'Solitaire' }).click();
    await expect(group.getByRole('radio', { name: 'Solitaire' })).toHaveAttribute('aria-checked', 'true');
    await expect(block.getByRole('button', { name: /Ronde/ })).toBeVisible();
  }
  await expect(page.getByRole('radiogroup', { name: 'Composition, Version 1' }).getByRole('radio', { name: 'Solitaire' })).toHaveAttribute('aria-checked', 'true');
  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0);
});

test('page de comparaison en anglais et en hébreu', async ({ page }) => {
  await page.goto('/en/versions/boutons');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Five button styles');
  await expect(page.getByRole('region', { name: 'Version 4 · Refined' })).toBeVisible();
  await page.goto('/he/versions/boutons');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('חמישה סגנונות לחצנים');
  await expect(page.getByRole('region', { name: 'גרסה 5 · זכוכית ואור' })).toBeVisible();
});
