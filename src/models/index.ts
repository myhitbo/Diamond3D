import type { ModelDefinition } from '@/lib/configurator/schema';
import { ring001 } from './ring-001/definition';

/** Registre des modèles. Ajouter un modèle = ajouter son dossier et une ligne ici. */
export const MODELS: Record<string, ModelDefinition> = {
  [ring001.id]: ring001,
};

export const getModel = (id: string): ModelDefinition | undefined => MODELS[id];
