import { ModelDefinition, type ConfigState, type MetalFamily, type MetalId, type MetalTitre } from './schema';
import { METALS } from '@/config/metals';

export function defaultState(m: ModelDefinition): ConfigState {
  return {
    composition: m.defaultComposition,
    metal: m.metals.default,
    stones: Object.fromEntries(m.stoneSlots.map((s) => [s.id, s.defaultVariant])),
    diamondOrigin: m.diamondOrigins.default,
  };
}

const allNodes = (m: ModelDefinition) =>
  new Map(Object.entries(m.geometry.pieces).flatMap(([pid, p]) => p.parts.map((x) => [x.node, { piece: pid, ...x }] as const)));

const slotNodes = (m: ModelDefinition) => new Set(m.stoneSlots.flatMap((s) => s.variants.flatMap((v) => v.nodes)));

export const activePieces = (m: ModelDefinition, s: ConfigState) =>
  m.compositions.find((c) => c.id === s.composition)?.pieces ?? [];

/** Pièces 3D affichées : fixes des pièces actives + variantes choisies dans leurs emplacements. */
export function visibleNodes(m: ModelDefinition, s: ConfigState): string[] {
  const pieces = new Set(activePieces(m, s));
  const inSlots = slotNodes(m);
  const out: string[] = [];
  for (const [node, info] of allNodes(m)) if (pieces.has(info.piece) && !inSlots.has(node)) out.push(node);
  for (const slot of m.stoneSlots) {
    if (!pieces.has(slot.piece)) continue;
    const v = slot.variants.find((x) => x.id === s.stones[slot.id]);
    if (v) out.push(...v.nodes);
  }
  return out.sort();
}

export function metalVolumeMm3(m: ModelDefinition, s: ConfigState): number {
  return activePieces(m, s).reduce((sum, p) => sum + m.geometry.pieces[p].metalVolumeMm3, 0);
}

/** Estimation de poids brut du métal (hors pertes de fonte et finition), en grammes. */
export function metalWeightEstimateG(m: ModelDefinition, s: ConfigState): number {
  return (metalVolumeMm3(m, s) / 1000) * METALS[s.metal].density.nominalGcm3;
}

export type StoneGroup = { shape: string; count: number; sizesMm: string[]; caratEstimate: number };

/** Récapitulatif des pierres visibles, regroupées par forme. */
export function stoneSummary(m: ModelDefinition, s: ConfigState): StoneGroup[] {
  const visible = new Set(visibleNodes(m, s));
  const groups = new Map<string, StoneGroup>();
  for (const p of activePieces(m, s)) {
    for (const part of m.geometry.pieces[p].parts) {
      if (!visible.has(part.node)) continue;
      for (const st of part.stones ?? []) {
        const g = groups.get(st.shape) ?? { shape: st.shape, count: 0, sizesMm: [], caratEstimate: 0 };
        g.count += 1;
        const size = st.shape === 'round' ? `${st.widthMm}` : `${st.lengthMm} × ${st.widthMm}`;
        if (!g.sizesMm.includes(size)) g.sizesMm.push(size);
        g.caratEstimate += st.caratEstimate ?? 0;
        groups.set(st.shape, g);
      }
    }
  }
  return [...groups.values()];
}

/** Applique un changement en refusant toute valeur non prévue par la définition. */
export function applyChange(m: ModelDefinition, s: ConfigState, change: Partial<ConfigState>): ConfigState {
  const next = { ...s, ...change, stones: { ...s.stones, ...change.stones } };
  if (!m.compositions.some((c) => c.id === next.composition)) return s;
  if (!m.metals.options.includes(next.metal as MetalId)) return s;
  if (!m.diamondOrigins.options.includes(next.diamondOrigin)) return s;
  for (const slot of m.stoneSlots) if (!slot.variants.some((v) => v.id === next.stones[slot.id])) return s;
  return next;
}

/**
 * Contrôle de cohérence d'un modèle avant publication.
 * `glbNodes` : noms de nœuds réellement présents dans le fichier GLB.
 */
export function validateModel(m: ModelDefinition, glbNodes?: string[]): string[] {
  const errors: string[] = [];
  const parsed = ModelDefinition.safeParse(m);
  if (!parsed.success) return parsed.error.issues.map((i) => `schéma : ${i.path.join('.')} — ${i.message}`);

  if (m.geometry.modelId !== m.id || m.asset.modelId !== m.id) errors.push('identifiants géométrie/asset incohérents');
  const nodes = allNodes(m);
  for (const n of nodes.keys()) if (!(n in m.asset.nodes)) errors.push(`nœud absent du rapport GLB : ${n}`);
  if (glbNodes) {
    for (const n of nodes.keys()) if (!glbNodes.includes(n)) errors.push(`nœud absent du fichier GLB : ${n}`);
    for (const n of glbNodes) if (!nodes.has(n)) errors.push(`nœud GLB non décrit : ${n}`);
  }
  const ids = (xs: { id: string }[]) => xs.map((x) => x.id);
  if (!ids(m.compositions).includes(m.defaultComposition)) errors.push('composition par défaut inconnue');
  for (const c of m.compositions)
    for (const p of c.pieces) if (!(p in m.geometry.pieces)) errors.push(`composition ${c.id} : pièce inconnue ${p}`);
  if (!m.metals.options.includes(m.metals.default)) errors.push('métal par défaut non proposé');
  for (const id of m.metals.options) if (!(id in METALS)) errors.push(`métal inconnu : ${id}`);
  if (!m.diamondOrigins.options.includes(m.diamondOrigins.default)) errors.push('origine par défaut non proposée');

  const seen = new Set<string>();
  for (const slot of m.stoneSlots) {
    if (!(slot.piece in m.geometry.pieces)) errors.push(`emplacement ${slot.id} : pièce inconnue`);
    if (!ids(slot.variants).includes(slot.defaultVariant)) errors.push(`emplacement ${slot.id} : variante par défaut inconnue`);
    for (const v of slot.variants) {
      const hasGem = v.nodes.some((n) => nodes.get(n)?.kind === 'gem');
      if (!hasGem) errors.push(`variante ${v.id} : aucune pierre`);
      for (const n of v.nodes) {
        const info = nodes.get(n);
        if (!info) errors.push(`variante ${v.id} : nœud inconnu ${n}`);
        else if (info.piece !== slot.piece) errors.push(`variante ${v.id} : nœud ${n} hors de la pièce ${slot.piece}`);
        else if (info.kind === 'gem' && !info.stones?.every((st) => st.shape === v.shape))
          errors.push(`variante ${v.id} : forme annoncée ${v.shape} différente de la géométrie`);
      }
    }
    for (const n of new Set(slot.variants.flatMap((v) => v.nodes))) {
      if (seen.has(n)) errors.push(`nœud ${n} utilisé dans plusieurs emplacements`);
      seen.add(n);
    }
    const offered = new Set(slot.variants.map((v) => v.shape));
    for (const u of slot.unavailableShapes) if (offered.has(u.shape)) errors.push(`forme ${u.shape} à la fois proposée et indisponible`);
  }
  if (m.status === 'published' && !m.workshopValidated) errors.push('publication refusée : modèle non validé par l’atelier');
  return errors;
}

/** Couleurs de métal proposées, dans l'ordre des options du modèle. */
export function metalFamilies(m: ModelDefinition): MetalFamily[] {
  return [...new Set(m.metals.options.map((id) => METALS[id].family))];
}

/** Titres proposés pour une couleur donnée (14 k, 18 k ; « platinum » seul pour le platine). */
export function metalTitres(m: ModelDefinition, family: MetalFamily): MetalTitre[] {
  return m.metals.options.filter((id) => METALS[id].family === family).map((id) => METALS[id].titre);
}

/**
 * Métal correspondant à une couleur et un titre. Si le titre n'existe pas pour cette couleur
 * (en quittant le platine, par exemple), prend le titre du métal par défaut, sinon le premier proposé.
 */
export function pickMetal(m: ModelDefinition, family: MetalFamily, titre: MetalTitre): MetalId {
  const ids = m.metals.options.filter((id) => METALS[id].family === family);
  const byTitre = (t: MetalTitre) => ids.find((id) => METALS[id].titre === t);
  return byTitre(titre) ?? byTitre(METALS[m.metals.default].titre) ?? ids[0];
}
