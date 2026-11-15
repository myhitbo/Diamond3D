import { describe, expect, it } from 'vitest';
import { isGuideLocale } from '@/content/guides/types';
import { HOME } from '@/content/home';
import { LOCALES } from '@/lib/configurator/schema';

describe('page d’accueil', () => {
  it('mêmes rubriques dans les trois langues ; carte des guides seulement là où ils existent', () => {
    for (const l of LOCALES) {
      expect(HOME[l].points).toHaveLength(HOME.fr.points.length);
      expect(HOME[l].materials).toHaveLength(HOME.fr.materials.length);
      expect(HOME[l].more.guides !== null).toBe(isGuideLocale(l));
    }
  });

  it('n’affirme que ce qui est vrai aujourd’hui : aucun prix, pas de pierre filmée', () => {
    for (const l of LOCALES) {
      const text = JSON.stringify(HOME[l]);
      // Le moteur de prix n'est pas branché : aucun montant.
      expect(text).not.toMatch(/[₪€$]|\bUSD\b|\bNIS\b|ש״ח/);
      expect(text).not.toMatch(/film|וידאו מהאבן/i);
    }
    // Décret 2002-65 : « synthétique » ; en anglais, « lab-grown » comme le reste du site.
    expect(JSON.stringify(HOME.fr)).not.toMatch(/de laboratoire|de culture|cultivé/i);
    expect(JSON.stringify(HOME.fr)).toMatch(/synthétique/);
    expect(JSON.stringify(HOME.en)).not.toMatch(/\bsynthetic\b/i);
    expect(JSON.stringify(HOME.en)).toMatch(/lab-grown/);
  });
});
