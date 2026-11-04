import { describe, expect, it } from 'vitest';
import { ring001 } from '@/models/ring-001/definition';
import { METALS } from '@/config/metals';
import type { ModelDefinition } from '@/lib/configurator/schema';
import { applyChange, defaultState, metalFamilies, metalTitres, metalVolumeMm3, metalWeightEstimateG, pickMetal, stoneSummary, validateModel, visibleNodes } from '@/lib/configurator/logic';

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
  it('poids = volume STL × densité nominale', () => {
    expect(metalVolumeMm3(ring001, s0)).toBeCloseTo(153.48 + 135.4, 2);
    const w = metalWeightEstimateG(ring001, { ...s0, composition: 'solitaire' });
    expect(w).toBeCloseTo((153.48 / 1000) * METALS['yellow-gold-18k'].density.nominalGcm3, 6);
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
    expect(pickMetal(ring001, 'yellow', 'platinum')).toBe('yellow-gold-18k'); // titre du métal par défaut
  });

  it('chaque métal du catalogue a une couleur et un titre cohérents avec son identifiant', () => {
    for (const m of Object.values(METALS)) {
      if (m.family === 'platinum') expect(m.titre).toBe('platinum');
      else expect(m.id).toBe(`${m.family}-gold-${m.titre}`);
    }
  });

  it('le 14 carats pèse moins que le 18 carats pour la même bague', () => {
    const s0 = defaultState(ring001);
    expect(metalWeightEstimateG(ring001, { ...s0, metal: 'yellow-gold-14k' })).toBeLessThan(metalWeightEstimateG(ring001, s0));
  });
});
