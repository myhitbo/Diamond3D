import { expect, test, type Page } from '@playwright/test';

const shot = async (page: Page) => (await page.locator('canvas').screenshot()).toString('base64');

// Les gestes tactiles sont simulés par CDP (Chrome DevTools Protocol), propre à Chromium.
// Sur WebKit et Firefox, ces gestes se vérifient sur appareil réel (docs/DEVICE_TESTS.md).
test.skip(({ browserName }) => browserName !== 'chromium', 'Simulation tactile par CDP : Chromium seulement');

async function open(page: Page) {
  await page.goto('/fr/configurateur/ring-001?debug=1');
  await page.waitForFunction(() => window.__jr?.ready === true, null, { timeout: 60_000 });
  const box = (await page.locator('canvas').boundingBox())!;
  return { cx: box.x + box.width / 2, cy: box.y + box.height / 2 };
}

test('glisser fait tourner le bijou', async ({ page, isMobile }) => {
  const { cx, cy } = await open(page);
  const before = await shot(page);
  if (isMobile) {
    const cdp = await page.context().newCDPSession(page);
    const touch = (type: 'touchStart' | 'touchMove' | 'touchEnd', x: number) =>
      cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y: cy }] });
    await touch('touchStart', cx - 80);
    for (let i = 1; i <= 10; i++) await touch('touchMove', cx - 80 + i * 16);
    await touch('touchEnd', cx + 80);
  } else {
    await page.mouse.move(cx - 80, cy);
    await page.mouse.down();
    await page.mouse.move(cx + 80, cy, { steps: 10 });
    await page.mouse.up();
  }
  await page.waitForTimeout(800);
  expect(await shot(page)).not.toBe(before);
});

test('pincer (mobile) ou la molette (ordinateur) zoome', async ({ page, isMobile }) => {
  const { cx, cy } = await open(page);
  await page.waitForTimeout(800);
  const d0 = await page.evaluate(() => window.__jr!.cameraDistance());
  if (isMobile) {
    const cdp = await page.context().newCDPSession(page);
    const pinch = (type: 'touchStart' | 'touchMove' | 'touchEnd', d: number) =>
      cdp.send('Input.dispatchTouchEvent', {
        type,
        touchPoints: type === 'touchEnd' ? [] : [{ x: cx - d, y: cy, id: 1 }, { x: cx + d, y: cy, id: 2 }],
      });
    await pinch('touchStart', 30);
    for (let i = 1; i <= 10; i++) await pinch('touchMove', 30 + i * 8);
    await pinch('touchEnd', 110);
  } else {
    await page.mouse.move(cx, cy);
    await page.mouse.wheel(0, -400);
  }
  await page.waitForTimeout(800);
  const d1 = await page.evaluate(() => window.__jr!.cameraDistance());
  expect(d1).toBeLessThan(d0 * 0.95);
});
