import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  accessibilityPath,
  configuratorPath,
  homePath,
  languageAlternates,
  localizedPath,
  privacyPath,
  TRANSLATED_SEGMENTS,
  translatedRouteRules,
} from '@/lib/routes';

describe('adresses traduites', () => {
  it('configurateur : segment propre à chaque langue', () => {
    expect(configuratorPath('fr', 'ring-001')).toBe('/fr/configurateur/ring-001');
    expect(configuratorPath('en', 'ring-001')).toBe('/en/configurator/ring-001');
    expect(configuratorPath('he')).toBe('/he/configurator/ring-001');
  });

  it('chemin interne vers adresse publique', () => {
    expect(localizedPath('en', '/configurateur/ring-001')).toBe('/en/configurator/ring-001');
    expect(localizedPath('fr', '/configurateur/ring-001')).toBe('/fr/configurateur/ring-001');
    expect(localizedPath('he', '/faq')).toBe('/he/faq');
    expect(localizedPath('en', '/transformation')).toBe('/en/transformation');
  });

  it('balises de langue', () => {
    expect(languageAlternates('/configurateur/ring-001')).toEqual({
      fr: '/fr/configurateur/ring-001',
      en: '/en/configurator/ring-001',
      he: '/he/configurator/ring-001',
    });
    expect(languageAlternates('/guides', ['fr'])).toEqual({ fr: '/fr/guides' });
  });

  it('accueil : /fr, /en, /he, sans double barre ni barre finale', () => {
    expect(homePath('fr')).toBe('/fr');
    expect(localizedPath('he', '/')).toBe('/he');
    expect(localizedPath('en', '')).toBe('/en');
    expect(languageAlternates('/')).toEqual({ fr: '/fr', en: '/en', he: '/he' });
    for (const href of Object.values(languageAlternates('/'))) expect(href).not.toMatch(/\/\/|\/$/);
  });

  it('déclaration d’accessibilité et politique de confidentialité : dossier français, adresse traduite en anglais et en hébreu', () => {
    expect(accessibilityPath('fr')).toBe('/fr/accessibilite');
    expect(accessibilityPath('en')).toBe('/en/accessibility');
    expect(accessibilityPath('he')).toBe('/he/accessibility');
    expect(privacyPath('fr')).toBe('/fr/confidentialite');
    expect(privacyPath('en')).toBe('/en/privacy');
    expect(privacyPath('he')).toBe('/he/privacy');
    expect(localizedPath('en', '/confidentialite')).toBe('/en/privacy');
    expect(languageAlternates('/accessibilite')).toEqual({ fr: '/fr/accessibilite', en: '/en/accessibility', he: '/he/accessibility' });
    // Seul le premier segment se traduit ; un chemin qui commence comme un segment traduit n'est pas touché.
    expect(localizedPath('en', '/faq')).toBe('/en/faq');
    expect(localizedPath('en', '/confidentialite-bis')).toBe('/en/confidentialite-bis');
  });

  it('réécritures et redirections : anglais et hébreu seulement, sans boucle', () => {
    const { rewrites, redirects } = translatedRouteRules();
    expect(rewrites).toContainEqual({ source: '/en/configurator/:modelId', destination: '/en/configurateur/:modelId' });
    expect(rewrites).toContainEqual({ source: '/en/accessibility', destination: '/en/accessibilite' });
    expect(rewrites).toContainEqual({ source: '/he/privacy', destination: '/he/confidentialite' });
    expect(redirects.map((r) => r.source)).toEqual([
      '/en/configurateur/:modelId',
      '/he/configurateur/:modelId',
      '/en/accessibilite',
      '/he/accessibilite',
      '/en/confidentialite',
      '/he/confidentialite',
    ]);
    expect(redirects).toContainEqual({ source: '/en/confidentialite', destination: '/en/privacy', permanent: false });
    // Aucune règle ne touche le français, et une redirection ne pointe jamais vers une autre source de redirection.
    for (const r of [...rewrites, ...redirects]) expect(r.source.startsWith('/fr/')).toBe(false);
    for (const r of redirects) expect(redirects.some((o) => o.source === r.destination)).toBe(false);
    // Une adresse traduite n'est jamais aussi l'adresse française d'une autre page (elle serait à la fois réécrite et redirigée).
    for (const r of rewrites) expect(redirects.some((o) => o.source === r.source)).toBe(false);
  });

  it('redirections permanentes au lancement, sur toutes les pages traduites', () => {
    expect(translatedRouteRules(true).redirects.every((r) => r.permanent)).toBe(true);
    expect(translatedRouteRules(true).redirects).toHaveLength(translatedRouteRules().rewrites.length);
  });

  it('chaque segment traduit correspond à un dossier de pages, et aucun segment public ne masque un autre dossier', () => {
    const root = join(process.cwd(), 'src/app/[locale]');
    const folders = readdirSync(root, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    for (const [internal, { segments }] of Object.entries(TRANSLATED_SEGMENTS)) {
      expect(existsSync(join(root, internal)), internal).toBe(true);
      expect(segments.fr, internal).toBe(internal);
      for (const segment of Object.values(segments)) if (segment !== internal) expect(folders, segment).not.toContain(segment);
    }
  });
});
