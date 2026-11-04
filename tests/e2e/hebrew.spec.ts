import { expect, test } from '@playwright/test';

test('configurateur en hébreu : sens droite-à-gauche, textes traduits, pas de défilement horizontal', async ({ page }) => {
  await page.goto('/he/configurateur/ring-001?debug=1');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('html')).toHaveAttribute('lang', 'he');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('סט מרקיזה');
  await expect(page.getByText('לפי הצעת מחיר', { exact: true })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'זהב אדום', exact: true })).toBeVisible();
  await page.waitForFunction(() => window.__jr?.ready === true, null, { timeout: 60_000 });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

test('FAQ en hébreu et changement de langue', async ({ page }) => {
  await page.goto('/fr/faq');
  await page.getByRole('link', { name: 'עב', exact: true }).click();
  await expect(page).toHaveURL(/\/he\/faq$/);
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('שאלות נפוצות');
  await page.getByText('למה טבעת הקידושין חלקה, בלי אבן?').click();
  await expect(page.getByText(/תחת החופה/)).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
