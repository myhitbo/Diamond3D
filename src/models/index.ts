import type { ModelDefinition } from '@/lib/configurator/schema';
import { ring001 } from './ring-001/definition';
import { ring002 } from './ring-002/definition';
import { ring003 } from './ring-003/definition';

/** Registre des modèles, dans l'ordre d'affichage. Ajouter un modèle = ajouter son dossier et une ligne ici. */
export const MODELS: Record<string, ModelDefinition> = {
  [ring001.id]: ring001,
  [ring002.id]: ring002,
  [ring003.id]: ring003,
};

export const getModel = (id: string): ModelDefinition | undefined => MODELS[id];
