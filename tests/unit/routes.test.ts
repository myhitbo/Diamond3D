import { describe, expect, it } from 'vitest';
import { configuratorPath, homePath, languageAlternates, localizedPath, translatedRouteRules } from '@/lib/routes';

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

  it('réécritures et redirections : anglais et hébreu seulement, sans boucle', () => {
    const { rewrites, redirects } = translatedRouteRules();
    expect(rewrites).toContainEqual({ source: '/en/configurator/:modelId', destination: '/en/configurateur/:modelId' });
    expect(redirects.map((r) => r.source)).toEqual(['/en/configurateur/:modelId', '/he/configurateur/:modelId']);
    // Aucune règle ne touche le français, et une redirection ne pointe jamais vers une autre source de redirection.
    for (const r of [...rewrites, ...redirects]) expect(r.source.startsWith('/fr/')).toBe(false);
    for (const r of redirects) expect(redirects.some((o) => o.source === r.destination)).toBe(false);
  });
});
