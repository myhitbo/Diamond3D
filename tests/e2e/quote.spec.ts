import { expect, test, type Page } from '@playwright/test';

// Le serveur de test tourne avec QUOTE_DRY_RUN=1 : la route valide et « envoie » sans e-mail réel.
const URL = '/fr/configurateur/ring-001';

async function openForm(page: Page) {
  await page.goto(URL);
  await page.getByRole('button', { name: 'Demander un devis' }).click();
  await expect(page.getByRole('heading', { name: 'Demande de devis' })).toBeVisible();
}

async function fill(page: Page) {
  await page.getByLabel('Nom *').fill('Jeanne Martin');
  await page.getByLabel('E-mail *').fill('jeanne@example.com');
  await page.getByLabel('Taille de doigt', { exact: true }).fill('52');
  await page.getByLabel('Message').fill('Gravure intérieure');
  await page.getByRole('checkbox', { name: /uniquement pour répondre/ }).check();
}

test('envoie une demande avec la configuration choisie et une photo', async ({ page }) => {
  await page.goto(URL);
  await page.getByRole('radio', { name: /Or rose/ }).click();
  await page.getByRole('button', { name: 'Demander un devis' }).click();
  await fill(page);
  await page.getByLabel('Photos (facultatif)').setInputFiles({ name: 'main.png', mimeType: 'image/png', buffer: Buffer.alloc(2048, 1) });

  // Le corps multipart avec fichier n'est pas lisible depuis Playwright : on relève le FormData côté page.
  await page.evaluate(() => {
    const native = window.fetch;
    window.fetch = (input, init) => {
      if (init?.body instanceof FormData) {
        (window as unknown as { __sent: unknown }).__sent = {
          config: init.body.get('config'),
          photos: init.body.getAll('photos').map((f) => (f as File).name),
        };
      }
      return native(input, init);
    };
  });
  const res = page.waitForResponse((r) => r.url().endsWith('/api/devis'));
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  expect((await res).status()).toBe(200);
  const sent = (await page.evaluate(() => (window as unknown as { __sent: unknown }).__sent)) as { config: string; photos: string[] };
  expect(JSON.parse(sent.config).metal).toBe('rose-gold-18k');
  expect(sent.photos).toEqual(['main.png']);

  await expect(page.getByRole('heading', { name: 'Demande envoyée' })).toBeVisible();
  await expect(page.getByRole('status').filter({ hasText: 'L’atelier a bien reçu' })).toBeFocused();
});

test('champs obligatoires : le navigateur bloque l’envoi', async ({ page }) => {
  await openForm(page);
  let posted = false;
  page.on('request', (r) => r.url().endsWith('/api/devis') && (posted = true));
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  await expect(page.getByLabel('Nom *')).toBeFocused();
  expect(posted).toBe(false);
});

test('photos refusées avant envoi (type)', async ({ page }) => {
  await openForm(page);
  await fill(page);
  await page.getByLabel('Photos (facultatif)').setInputFiles({ name: 'doc.pdf', mimeType: 'application/pdf', buffer: Buffer.from('x') });
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  await expect(page.locator('form [role=alert]')).toContainText('Format de photo non accepté');
});

test('erreur serveur : message lisible, formulaire conservé', async ({ page }) => {
  await page.route('**/api/devis', (r) => r.fulfill({ status: 502, json: { ok: false, error: { code: 'send_failed' } } }));
  await openForm(page);
  await fill(page);
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  await expect(page.locator('form [role=alert]')).toContainText('n’a pas pu être envoyée');
  await expect(page.getByLabel('Nom *')).toHaveValue('Jeanne Martin');
});

test('la route refuse une configuration falsifiée', async ({ request }) => {
  const res = await request.post('/api/devis', {
    multipart: {
      modelId: 'ring-001',
      locale: 'fr',
      config: JSON.stringify({ composition: 'set', metal: 'platinum-950', stones: { center: 'inventee' }, diamondOrigin: 'natural' }),
      name: 'Test',
      email: 'test@example.com',
      consent: 'on',
    },
  });
  expect(res.status()).toBe(400);
  expect((await res.json()).error.code).toBe('invalid_config');
});

test('version anglaise du formulaire', async ({ page }) => {
  await page.goto('/en/configurateur/ring-001');
  await page.getByRole('button', { name: 'Request a quote' }).click();
  await expect(page.getByRole('heading', { name: 'Quote request' })).toBeVisible();
  await expect(page.getByLabel('Email *')).toBeVisible();
});

test('accord facultatif de publication : décoché par défaut et transmis s’il est coché', async ({ page }) => {
  await openForm(page);
  await fill(page);
  const publish = page.getByRole('checkbox', { name: /photos et vidéos de la fabrication/ });
  await expect(publish).not.toBeChecked();
  await publish.check();
  await page.evaluate(() => {
    const native = window.fetch;
    window.fetch = (input, init) => {
      if (init?.body instanceof FormData) (window as unknown as { __publish: unknown }).__publish = init.body.get('publishConsent');
      return native(input, init);
    };
  });
  const res = page.waitForResponse((r) => r.url().endsWith('/api/devis'));
  await page.getByRole('button', { name: 'Envoyer la demande' }).click();
  expect((await res).status()).toBe(200);
  expect(await page.evaluate(() => (window as unknown as { __publish: unknown }).__publish)).toBe('on');
});

test('formulaire de devis en hébreu : sens droite-à-gauche et envoi', async ({ page }) => {
  await page.goto('/he/configurateur/ring-001');
  await page.getByRole('button', { name: 'בקשת הצעת מחיר' }).click();
  await expect(page.getByRole('heading', { name: 'בקשת הצעת מחיר' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await page.getByLabel('שם *').fill('ישראל ישראלי');
  await page.getByLabel('דוא״ל *').fill('israel@example.com');
  await page.getByRole('checkbox', { name: /ישמשו רק כדי להשיב/ }).check();
  const res = page.waitForResponse((r) => r.url().endsWith('/api/devis'));
  await page.getByRole('button', { name: 'שליחת הבקשה' }).click();
  expect((await res).status()).toBe(200);
  await expect(page.getByRole('heading', { name: 'הבקשה נשלחה' })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});
