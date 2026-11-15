import { expect, test } from '@playwright/test';

test('la FAQ s’affiche, se déplie et reste lisible', async ({ page }) => {
  await page.goto('/fr/faq');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Questions fréquentes');
  const q = page.getByText('Un diamant synthétique est-il une imitation ?');
  await q.click();
  await expect(page.getByText(/Il est fait de carbone cristallisé/)).toBeVisible();
  await expect(page.getByRole('link', { name: 'GIA, simulants, moissanite and lab-grown diamonds' })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

test('données structurées FAQPage sans les réponses à confirmer', async ({ page }) => {
  await page.goto('/fr/faq');
  const raw = await page.locator('script[type="application/ld+json"]').textContent();
  const data = JSON.parse(raw!);
  expect(data['@type']).toBe('FAQPage');
  const names: string[] = data.mainEntity.map((e: { name: string }) => e.name);
  expect(names).toContain('Un diamant synthétique est-il une imitation ?');
  expect(names).not.toContain('Puis-je annuler ou retourner un bijou ?');
});

test('lien FAQ depuis le configurateur, et version anglaise', async ({ page }) => {
  await page.goto('/fr/configurateur/ring-001');
  // Nom du lien = texte affiché : « Questions fréquentes » sur ordinateur, « FAQ » sur mobile (WCAG 2.5.3).
  await page.getByRole('banner').getByRole('link', { name: /^(Questions fréquentes|FAQ)$/ }).click();
  await expect(page).toHaveURL(/\/fr\/faq$/);
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/faq$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Frequently asked questions');
});
