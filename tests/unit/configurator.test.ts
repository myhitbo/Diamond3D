import { describe, expect, it } from 'vitest';
import { ring001 } from '@/models/ring-001/definition';
import { ring002 } from '@/models/ring-002/definition';
import { METALS } from '@/config/metals';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type ModelDefinition } from '@/lib/configurator/schema';
import {
  applyChange,
  buildRequestMessage,
  configFromParams,
  configToParams,
  defaultState,
  fixedStoneCount,
  hasConfigParams,
  metalFamilies,
  metalTitres,
  metalVolumeMm3,
  metalWeightEstimateG,
  pickMetal,
  shareUrl,
  stoneSummary,
  validateModel,
  visibleNodes,
} from '@/lib/configurator/logic';

const clone = (): ModelDefinition => structuredClone(ring001) as ModelDefinition;

describe('modèle ring-001', () => {
  it('passe la validation', () => {
    expect(validateModel(ring001)).toEqual([]);
  });

  it('reprend les faits mesurés dans le fichier CAO', () => {
    const g = ring001.geometry;
    expect(g.source.sha256).toBe('7517160f25c0e02d8567d05ec6f2ec346034ad2a3b1d1fd22bd5fc01892d9dca');
    expect(g.fingerSize).toEqual({ label: 'France 51 1/2', innerDiameterMm: 16.393 });
    const stones = Object.values(g.pieces).flatMap((p) => p.parts.flatMap((x) => x.stones ?? []));
    expect(stones).toHaveLength(17);
    const center = g.pieces.A.parts.find((p) => p.slot === 'center')!.stones![0];
    expect([center.shape, center.lengthMm, center.widthMm]).toEqual(['marquise', 6, 3]);
  });
});

describe('modèle ring-002 (solitaire marquise pavé)', () => {
  const s0 = defaultState(ring002);

  it('passe la validation', () => {
    expect(validateModel(ring002)).toEqual([]);
  });

  it('reprend les faits mesurés dans le fichier CAO', () => {
    const g = ring002.geometry;
    expect(g.source.sha256).toBe('e0fe7b53f16cecc576753debdadfc66fc641550b4f6392a07c3c40fcfa622560');
    // Pas de courbe de taille dans le fichier : diamètre mesuré sur l'anneau, taille française = circonférence.
    expect(g.fingerSize).toMatchObject({ label: 'France 54 1/2', innerDiameterMm: 17.31 });
    const stones = g.pieces.A.parts.flatMap((x) => x.stones ?? []);
    expect(stones).toHaveLength(36);
    const center = g.pieces.A.parts.find((p) => p.slot === 'center')!.stones![0];
    expect([center.shape, center.lengthMm, center.widthMm]).toEqual(['marquise', 16.5, 8.5]);
    const side = stones.filter((st) => st.shape === 'round').map((st) => st.widthMm);
    expect([side.filter((w) => w === 1.9).length, side.filter((w) => w === 1.1).length]).toEqual([16, 19]);
    // Pas de STL de référence : volume de l'union des solides du fichier.
    expect(g.pieces.A.metalVolumeMm3).toBeCloseTo(396.95, 1);
  });

  it('n’a qu’une composition : toutes ses pièces sont affichées', () => {
    expect(ring002.compositions).toHaveLength(1);
    expect(visibleNodes(ring002, s0)).toEqual(['A__gem_center', 'A__gem_side', 'A__metal_head_center', 'A__metal_settings_side', 'A__metal_shank']);
  });

  it('pèse entre 5 et 9 g selon le métal, et compte 36 pierres', () => {
    expect(metalVolumeMm3(ring002, s0)).toBeCloseTo(396.95, 1);
    const weights = ring002.metals.options.map((metal) => metalWeightEstimateG(ring002, { ...s0, metal }));
    expect(Math.min(...weights)).toBeGreaterThan(5);
    expect(Math.max(...weights)).toBeLessThan(9);
    expect(stoneSummary(ring002, s0).reduce((n, g) => n + g.count, 0)).toBe(36);
    // Dimensions dans l'ordre croissant, quel que soit l'ordre des pierres dans le fichier.
    expect(stoneSummary(ring002, s0).map((g) => [g.shape, g.sizesMm])).toEqual([
      ['marquise', ['16.5 × 8.5']],
      ['round', ['1.1', '1.9']],
    ]);
  });

  it('partage sa configuration dans l’adresse et la relit', () => {
    const s = { ...s0, metal: 'platinum-950' as const, diamondOrigin: 'lab-grown' as const };
    const params = configToParams(ring002, s);
    expect(params.get('composition')).toBe('solitaire');
    expect(configFromParams(ring002, params)).toEqual(s);
  });
});

describe('affichage des pièces', () => {
  const s0 = defaultState(ring001);

  it('affiche les deux bagues dans la composition « ensemble »', () => {
    expect(visibleNodes(ring001, s0)).toHaveLength(8);
  });

  it('n’affiche que la bague A pour « solitaire », pierre centrale et tête comprises', () => {
    const v = visibleNodes(ring001, { ...s0, composition: 'solitaire' });
    expect(v.every((n) => n.startsWith('A__'))).toBe(true);
    expect(v).toContain('A__gem_center');
    expect(v).toContain('A__metal_head_center');
  });

  it('n’affiche que la bague B pour « alliance »', () => {
    const v = visibleNodes(ring001, { ...s0, composition: 'band' });
    expect(v).toEqual(['B__gem_side', 'B__metal_settings_side', 'B__metal_shank']);
  });

  it('le métal et l’origine ne changent pas la géométrie affichée', () => {
    const a = visibleNodes(ring001, s0);
    const b = visibleNodes(ring001, { ...s0, metal: 'platinum-950', diamondOrigin: 'lab-grown' });
    expect(b).toEqual(a);
  });
});

describe('règles de changement', () => {
  const s0 = defaultState(ring001);
  it('refuse une valeur non prévue par la définition', () => {
    expect(applyChange(ring001, s0, { composition: 'inexistante' })).toBe(s0);
    expect(applyChange(ring001, s0, { stones: { center: 'ronde-1ct' } })).toBe(s0);
    expect(applyChange(ring001, s0, { metal: 'silver' as never })).toBe(s0);
  });
  it('accepte une valeur prévue', () => {
    expect(applyChange(ring001, s0, { metal: 'rose-gold-18k' }).metal).toBe('rose-gold-18k');
  });
});

describe('estimations', () => {
  const s0 = defaultState(ring001);
  it('métal par défaut : or jaune 14 k (atelier, 16/11)', () => {
    expect(s0.metal).toBe('yellow-gold-14k');
  });
  it('poids = volume STL × densité nominale', () => {
    expect(metalVolumeMm3(ring001, s0)).toBeCloseTo(153.48 + 135.4, 2);
    const w = metalWeightEstimateG(ring001, { ...s0, composition: 'solitaire' });
    expect(w).toBeCloseTo((153.48 / 1000) * METALS['yellow-gold-14k'].density.nominalGcm3, 6);
  });
  it('récapitule les pierres visibles', () => {
    const g = stoneSummary(ring001, { ...s0, composition: 'solitaire' });
    expect(g.map((x) => [x.shape, x.count])).toEqual([
      ['marquise', 1],
      ['round', 6],
    ]);
  });
});

describe('contrôles de publication', () => {
  it('refuse la publication sans validation de l’atelier', () => {
    const m = clone();
    m.status = 'published';
    expect(validateModel(m)).toContain('publication refusée : modèle non validé par l’atelier');
  });
  it('détecte un nœud absent du GLB', () => {
    const glbNodes = Object.keys(ring001.asset.nodes).filter((n) => n !== 'A__gem_center');
    expect(validateModel(ring001, glbNodes)).toContain('nœud absent du fichier GLB : A__gem_center');
  });
  it('détecte une variante dont la forme annoncée ne correspond pas à la géométrie', () => {
    const m = clone();
    m.stoneSlots[0].variants[0].shape = 'round';
    expect(validateModel(m).some((e) => e.includes('différente de la géométrie'))).toBe(true);
  });
  it('détecte une forme à la fois proposée et déclarée indisponible', () => {
    const m = clone();
    m.stoneSlots[0].unavailableShapes.push({ shape: 'oval', reason: 'requires_dedicated_head' });
    m.stoneSlots[0].variants.push({ ...m.stoneSlots[0].variants[0], id: 'x', shape: 'oval' });
    expect(validateModel(m).some((e) => e.includes('à la fois proposée et indisponible'))).toBe(true);
  });
  it('refuse un prix ou un mode de tarification non défini', () => {
    const m = clone() as unknown as { pricing: unknown };
    m.pricing = { mode: 'calculated', base: 1990 };
    expect(validateModel(m as unknown as ModelDefinition)[0]).toMatch(/^schéma : pricing/);
  });
});

describe('couleur et titre du métal', () => {
  it('propose 4 couleurs, 14 et 18 carats pour l’or, un seul titre pour le platine', () => {
    expect(metalFamilies(ring001)).toEqual(['yellow', 'white', 'rose', 'platinum']);
    expect(metalTitres(ring001, 'rose')).toEqual(['14k', '18k']);
    expect(metalTitres(ring001, 'platinum')).toEqual(['platinum']);
  });

  it('garde le titre en changeant de couleur, et retombe sur le seul titre possible', () => {
    expect(pickMetal(ring001, 'white', '14k')).toBe('white-gold-14k');
    expect(pickMetal(ring001, 'platinum', '14k')).toBe('platinum-950');
    expect(pickMetal(ring001, 'yellow', 'platinum')).toBe('yellow-gold-14k'); // titre du métal par défaut (atelier, 16/11)
  });

  it('chaque métal du catalogue a une couleur et un titre cohérents avec son identifiant', () => {
    for (const m of Object.values(METALS)) {
      if (m.family === 'platinum') expect(m.titre).toBe('platinum');
      else expect(m.id).toBe(`${m.family}-gold-${m.titre}`);
    }
  });

  it('le 14 carats pèse moins que le 18 carats pour la même bague', () => {
    const s0 = defaultState(ring001);
    expect(metalWeightEstimateG(ring001, { ...s0, metal: 'yellow-gold-14k' })).toBeLessThan(metalWeightEstimateG(ring001, { ...s0, metal: 'yellow-gold-18k' }));
  });
});

describe('formes et pierres « sur demande »', () => {
  const s0 = defaultState(ring001);
  const labGrown = { ...s0, diamondOrigin: 'lab-grown' as const };
  const fr = DICTIONARIES.fr;

  it('propose le diamant de couleur, l’émeraude, le saphir et le rubis sur la pierre centrale', () => {
    expect(ring001.stoneSlots[0].stonesOnRequest).toEqual(['colored-diamond', 'emerald', 'sapphire', 'ruby']);
  });

  it('compte les diamants qui restent autour de la pierre centrale', () => {
    expect(fixedStoneCount(ring001, s0)).toBe(16); // 6 autour de la marquise + 10 sur l’alliance
    expect(fixedStoneCount(ring001, { ...s0, composition: 'solitaire' })).toBe(6);
  });

  it('sans demande, aucun message', () => {
    expect(buildRequestMessage(fr, ring001, s0, {})).toBeUndefined();
  });

  it('forme seule : message inchangé', () => {
    expect(buildRequestMessage(fr, ring001, s0, { shape: 'oval' })).toBe('Je souhaite ce bijou avec une pierre centrale de forme : Ovale.');
  });

  it('pierre seule, puis pierre et forme : les deux demandes figurent dans le message', () => {
    expect(buildRequestMessage(fr, ring001, s0, { stone: 'emerald' })).toBe('Je souhaite ce bijou avec une émeraude naturelle en pierre centrale.');
    expect(buildRequestMessage(fr, ring001, s0, { stone: 'sapphire', shape: 'oval' })).toBe(
      'Je souhaite ce bijou avec un saphir naturel en pierre centrale, de forme : Ovale.',
    );
    expect(buildRequestMessage(DICTIONARIES.en, ring001, s0, { stone: 'ruby', shape: 'pear' })).toBe(
      'I would like this piece with a natural ruby as the centre stone, in this shape: Pear.',
    );
    expect(buildRequestMessage(DICTIONARIES.he, ring001, s0, { stone: 'emerald' })).toBe('אני מעוניין/ת בתכשיט זה עם אזמרגד טבעי כאבן מרכזית.');
  });

  it('origine « synthétique » : la pierre de couleur reste naturelle, le message le dit des autres diamants', () => {
    expect(buildRequestMessage(fr, ring001, labGrown, { stone: 'emerald' })).toBe(
      'Je souhaite ce bijou avec une émeraude naturelle en pierre centrale. Les autres pierres restent des diamants synthétiques.',
    );
    expect(buildRequestMessage(DICTIONARIES.en, ring001, labGrown, { stone: 'sapphire' })).toBe(
      'I would like this piece with a natural sapphire as the centre stone. The other stones remain lab-grown diamonds.',
    );
    expect(buildRequestMessage(DICTIONARIES.he, ring001, labGrown, { stone: 'ruby' })).toBe(
      'אני מעוניין/ת בתכשיט זה עם אודם טבעי כאבן מרכזית. שאר האבנים נשארות יהלומי מעבדה.',
    );
    for (const locale of LOCALES) {
      for (const stone of ['emerald', 'sapphire', 'ruby'] as const) {
        for (const shape of [undefined, 'emerald', 'round'] as const) {
          const text = buildRequestMessage(DICTIONARIES[locale], ring001, labGrown, { stone, shape })!;
          expect(text, `${locale} ${stone} ${shape}`).not.toMatch(/(émeraude|saphir|rubis)\s+synthétique|lab-grown (emerald|sapphire|ruby)|(אזמרגד|ספיר|אודם) מעבדה/i);
        }
      }
    }
  });

  it('composition sans pierre centrale (alliance seule) : aucun message, la demande revient avec la pierre centrale', () => {
    const band = { ...s0, composition: 'band' };
    expect(ring001.stoneSlots.some((slot) => ring001.compositions.find((c) => c.id === 'band')!.pieces.includes(slot.piece))).toBe(false);
    expect(buildRequestMessage(fr, ring001, band, { stone: 'emerald', shape: 'oval' })).toBeUndefined();
    expect(buildRequestMessage(fr, ring001, band, { shape: 'oval' })).toBeUndefined();
    expect(buildRequestMessage(fr, ring001, { ...band, composition: 'solitaire' }, { stone: 'emerald' })).toBe(
      'Je souhaite ce bijou avec une émeraude naturelle en pierre centrale.',
    );
  });

  it('diamant de couleur : il suit l’origine choisie, sans phrase sur les autres pierres', () => {
    expect(buildRequestMessage(fr, ring001, labGrown, { stone: 'colored-diamond' })).toBe('Je souhaite ce bijou avec un diamant de couleur en pierre centrale.');
    expect(buildRequestMessage(DICTIONARIES.en, ring001, s0, { stone: 'colored-diamond' })).toBe(
      'I would like this piece with a coloured diamond as the centre stone.',
    );
  });

  it('pas de phrase sur les autres diamants s’il n’y en a pas', () => {
    const m = clone();
    for (const part of m.geometry.pieces.A.parts) if (part.node === 'A__gem_side') part.stones = [];
    const solitaire = { ...labGrown, composition: 'solitaire' };
    expect(fixedStoneCount(m, solitaire)).toBe(0);
    expect(buildRequestMessage(fr, m, solitaire, { stone: 'ruby' })).toBe('Je souhaite ce bijou avec un rubis naturel en pierre centrale.');
  });
});

describe('configuration dans l’adresse (lien partagé)', () => {
  it('aller-retour : l’adresse rend exactement la configuration', () => {
    const s = applyChange(ring001, defaultState(ring001), { composition: 'solitaire', metal: 'rose-gold-18k', diamondOrigin: 'lab-grown' });
    expect(s.composition).toBe('solitaire');
    const p = configToParams(ring001, s);
    expect(p.get('composition')).toBe('solitaire');
    expect(p.get('metal')).toBe('rose-gold-18k');
    expect(p.get('origin')).toBe('lab-grown');
    expect(configFromParams(ring001, new URLSearchParams(p.toString()))).toEqual(s);
  });

  it('ignore une valeur non prévue, une à une, sans perdre les autres', () => {
    const s = configFromParams(ring001, new URLSearchParams('composition=solitaire&metal=silver-925&origin=imitation&stone-center=xxl'));
    expect(s).toEqual({ ...defaultState(ring001), composition: 'solitaire' });
    expect(configFromParams(ring001, new URLSearchParams(''))).toEqual(defaultState(ring001));
  });

  it('reconnaît une adresse qui porte une configuration', () => {
    expect(hasConfigParams(ring001, new URLSearchParams('debug=1&quality=low'))).toBe(false);
    expect(hasConfigParams(ring001, new URLSearchParams('metal=platinum-950'))).toBe(true);
    expect(hasConfigParams(ring001, new URLSearchParams('stone-center=marquise-6x3'))).toBe(true);
  });

  it('lien à partager : garde la page, retire les autres paramètres et l’ancre', () => {
    const s = applyChange(ring001, defaultState(ring001), { metal: 'platinum-950' });
    const u = new URL(shareUrl(ring001, s, 'https://jr.example/he/configurator/ring-001?debug=1&quality=low#quote-form'));
    expect(u.origin + u.pathname).toBe('https://jr.example/he/configurator/ring-001');
    expect(u.hash).toBe('');
    expect([...u.searchParams.keys()].sort()).toEqual(['composition', 'metal', 'origin', 'stone-center']);
    expect(u.searchParams.get('metal')).toBe('platinum-950');
  });
});
