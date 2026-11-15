import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';
import { DEFAULT_SITE_URL, parseSiteUrl, SHARE_IMAGE, SITE_INDEXABLE, TRANSLATED_REDIRECTS_PERMANENT } from '@/config/site';
import { GUIDE_LOCALES, GUIDES } from '@/content/guides';
import { NOT_FOUND } from '@/content/not-found';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES } from '@/lib/configurator/schema';
import { robotsFor, SITEMAP_PAGES, sitemapEntries, sitemapFor } from '@/lib/indexing';
import { notFoundMetadata, OG_LOCALE, pageMetadata } from '@/lib/metadata';
import { localeOrDefault, translatedRouteRules } from '@/lib/routes';

const BASE = 'https://exemple.test';

describe('plan du site', () => {
  const entries = sitemapEntries(BASE);
  const urls = entries.map((e) => e.url.slice(BASE.length));

  it('toutes les pages publiques des trois langues, adresses traduites comprises', () => {
    expect(urls).toEqual(
      expect.arrayContaining([
        '/fr',
        '/en',
        '/he',
        '/fr/configurateur/ring-001',
        '/en/configurator/ring-001',
        '/he/configurator/ring-001',
        '/fr/transformation',
        '/en/transformation',
        '/he/transformation',
        '/fr/faq',
        '/en/faq',
        '/he/faq',
        '/fr/guides',
        '/en/guides',
        '/fr/guides/taille-de-doigt',
        '/en/guides/ring-size',
        '/fr/accessibilite',
        '/en/accessibility',
        '/he/accessibility',
        '/fr/confidentialite',
        '/en/privacy',
        '/he/privacy',
      ]),
    );
    // 3 accueils, 3 configurateurs, 3 transformations, 3 FAQ, 2 listes de guides, 3 déclarations d'accessibilité,
    // 3 politiques de confidentialité, 6 guides en français et 6 en anglais.
    expect(urls).toHaveLength(20 + GUIDE_LOCALES.length * GUIDES.fr.length);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it('ni /he/guides, ni /diagnostic, ni ancienne adresse du configurateur, ni API', () => {
    for (const u of urls) {
      expect(u).not.toMatch(/^\/he\/guides/);
      expect(u).not.toMatch(/diagnostic/);
      expect(u).not.toMatch(/^\/(en|he)\/(configurateur|accessibilite|confidentialite)/);
      expect(u).not.toMatch(/^\/api/);
      expect(u).not.toMatch(/\/$/);
    }
  });

  it('chaque adresse annonce ses versions dans les autres langues, elle-même comprise (hreflang)', () => {
    const home = entries.find((e) => e.url === `${BASE}/he`)!;
    expect(home.alternates?.languages).toEqual({ fr: `${BASE}/fr`, en: `${BASE}/en`, he: `${BASE}/he` });
    const size = entries.find((e) => e.url === `${BASE}/en/guides/ring-size`)!;
    expect(size.alternates?.languages).toEqual({ fr: `${BASE}/fr/guides/taille-de-doigt`, en: `${BASE}/en/guides/ring-size` });
    expect(size.lastModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const privacy = entries.find((e) => e.url === `${BASE}/he/privacy`)!;
    expect(privacy.alternates?.languages).toEqual({ fr: `${BASE}/fr/confidentialite`, en: `${BASE}/en/privacy`, he: `${BASE}/he/privacy` });
    const guides = entries.find((e) => e.url === `${BASE}/fr/guides`)!;
    expect(Object.keys(guides.alternates!.languages!)).toEqual(['fr', 'en']);
    for (const e of entries) expect(Object.values(e.alternates!.languages!)).toContain(e.url);
  });

  it('chaque page de src/app/[locale] est au plan ou exclue explicitement', () => {
    const root = join(process.cwd(), 'src/app/[locale]');
    const pages: string[] = [];
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) walk(path);
        else if (name === 'page.tsx') pages.push(`/${relative(root, dir)}`.replace(/\/$/, '') || '/');
      }
    };
    walk(root);
    const listed = new Set(SITEMAP_PAGES.map((p) => p.path.replace(/\/ring-001$/, '/[modelId]')));
    // Guides : ajoutés un par un (adresse traduite). Diagnostic : jamais indexé. [...rest] : 404.
    const excluded = new Set(['/guides/[slug]', '/diagnostic', '/[...rest]']);
    for (const p of pages) expect(listed.has(p) || excluded.has(p), `page ${p} absente du plan du site`).toBe(true);
  });

  it('vide tant que le site n’est pas indexable', () => {
    expect(sitemapFor(false, BASE)).toEqual([]);
    expect(sitemapFor(true, BASE)).toEqual(entries);
  });
});

describe('robots.txt', () => {
  it('avant le lancement : exploration permise (les robots doivent lire le noindex), pas de plan annoncé', () => {
    const r = robotsFor(false, BASE);
    expect(r.rules).toEqual({ userAgent: '*', allow: '/', disallow: '/api/' });
    expect(r.sitemap).toBeUndefined();
  });

  it('au lancement : plan du site annoncé, adresse absolue', () => {
    expect(robotsFor(true, BASE).sitemap).toBe(`${BASE}/sitemap.xml`);
  });
});

describe('interrupteur de lancement', () => {
  it('prototype : non indexable, redirections traduites temporaires', () => {
    expect(SITE_INDEXABLE).toBe(false);
    expect(TRANSLATED_REDIRECTS_PERMANENT).toBe(SITE_INDEXABLE);
    expect(translatedRouteRules(TRANSLATED_REDIRECTS_PERMANENT).redirects.every((r) => r.permanent === false)).toBe(true);
    expect(translatedRouteRules(true).redirects.every((r) => r.permanent === true)).toBe(true);
  });

  it('adresse du site : défaut, surcharge sans barre finale, valeur invalide refusée', () => {
    expect(parseSiteUrl(undefined)).toBe(DEFAULT_SITE_URL);
    expect(parseSiteUrl('  ')).toBe(DEFAULT_SITE_URL);
    expect(parseSiteUrl('https://www.jrdiamond.co.il/')).toBe('https://www.jrdiamond.co.il');
    expect(() => parseSiteUrl('jrdiamond.co.il')).toThrow(/NEXT_PUBLIC_SITE_URL/);
    expect(() => parseSiteUrl('ftp://jrdiamond.co.il')).toThrow(/NEXT_PUBLIC_SITE_URL/);
  });
});

describe('aperçus de liens partagés', () => {
  it('Open Graph : titre sans la marque, adresse, langue et autres langues, image traduite', () => {
    const m = pageMetadata('he', { title: 'שאלות נפוצות', description: 'תיאור', path: '/he/faq', languages: { fr: '/fr/faq', en: '/en/faq', he: '/he/faq' } });
    expect(m.alternates).toEqual({ canonical: '/he/faq', languages: { fr: '/fr/faq', en: '/en/faq', he: '/he/faq' } });
    expect(m.openGraph).toMatchObject({
      siteName: 'JR Diamond',
      title: 'שאלות נפוצות',
      url: '/he/faq',
      locale: 'he_IL',
      alternateLocale: ['fr_FR', 'en_GB'],
      type: 'website',
      images: [{ url: SHARE_IMAGE.url, width: 1200, height: 630, alt: DICTIONARIES.he.shareImageAlt }],
    });
    expect(m.twitter).toMatchObject({ card: 'summary_large_image', title: 'שאלות נפוצות' });
  });

  it('guide : article daté, autres langues limitées à celles où il existe', () => {
    const m = pageMetadata('en', { title: 'Ring size', description: 'd', path: '/en/guides/ring-size', languages: { fr: '/fr/guides/taille-de-doigt', en: '/en/guides/ring-size' }, modifiedTime: '2026-11-14' });
    expect(m.openGraph).toMatchObject({ type: 'article', modifiedTime: '2026-11-14', locale: 'en_GB', alternateLocale: ['fr_FR'] });
  });

  it('codes de langue Open Graph', () => {
    expect(OG_LOCALE).toEqual({ fr: 'fr_FR', en: 'en_GB', he: 'he_IL' });
  });

  it('image : JPEG 1200 × 630, bien sous les 600 Ko de WhatsApp', async () => {
    const file = join(process.cwd(), 'public', SHARE_IMAGE.url);
    const meta = await sharp(file).metadata();
    expect([meta.format, meta.width, meta.height]).toEqual(['jpeg', SHARE_IMAGE.width, SHARE_IMAGE.height]);
    expect(statSync(file).size).toBeLessThan(300 * 1024);
  });
});

describe('page 404', () => {
  it('trois langues ; hébreu signalé comme traduction à relire ; français hors langue', () => {
    for (const l of LOCALES) expect(NOT_FOUND[l].title.length).toBeGreaterThan(0);
    expect(NOT_FOUND.he.draft).toMatch(/טיוטה/);
    expect(localeOrDefault('nimporte-quoi')).toBe('fr');
    expect(notFoundMetadata('he')).toEqual({ title: { absolute: 'הדף לא נמצא · JR Diamond' } });
    expect(notFoundMetadata('api')).toEqual({ title: { absolute: 'Page introuvable · JR Diamond' } });
  });
});
