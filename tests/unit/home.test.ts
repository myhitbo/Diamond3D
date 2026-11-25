import { describe, expect, it } from 'vitest';
import { SITE_NAME } from '@/config/site';
import { allFaqItems } from '@/content/faq';
import { GUIDES } from '@/content/guides';
import { isGuideLocale } from '@/content/guides/types';
import { HOME } from '@/content/home';
import { PRIVACY } from '@/content/legal';
import { DICTIONARIES } from '@/i18n/dictionaries';
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

  it('titre de l’aperçu partagé sans la marque (elle va dans og:site_name)', () => {
    for (const l of LOCALES) expect(HOME[l].shareTitle, l).not.toContain(SITE_NAME);
  });

  it('n’affirme pas ce que l’atelier n’a pas confirmé : ni « sur place », ni une mise à taille offerte sans limite', () => {
    expect(JSON.stringify(HOME.fr)).not.toMatch(/sur place|chaque pièce/i);
    expect(JSON.stringify(HOME.en)).not.toMatch(/on site|every piece/i);
    expect(JSON.stringify(HOME.he)).not.toMatch(/במקום|כל תכשיט/);
    // Atelier, 3/11 : « Première mise à taille offerte. Après un an, payante ».
    expect(HOME.fr.points.find((p) => /mise à taille/.test(p.title))!.text).toMatch(/première année/);
    expect(HOME.en.points.find((p) => /resizing/.test(p.title))!.text).toMatch(/first year/);
    expect(HOME.he.points.find((p) => /התאמת המידה/.test(p.title))!.text).toMatch(/השנה הראשונה/);
  });
});

describe('vocabulaire du diamant synthétique (décret 2002-65, article 4)', () => {
  it('jamais « vrai » ni « véritable » en français : accueil, configurateur, FAQ, guides, politique', () => {
    const fr = [HOME.fr, DICTIONARIES.fr, allFaqItems().map((i) => [i.q.fr, i.a.fr]), GUIDES.fr, PRIVACY.fr].map((x) => JSON.stringify(x)).join(' ');
    expect(fr).not.toMatch(/\b(vrais?|véritables?) diamants?\b/i);
    expect(fr).not.toMatch(/\bdiamants? (synthétiques? )?(est-il |sont-ils )?(un |des )?(vrais?|véritables?)\b/i);
  });
});
