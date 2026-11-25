import type { MetadataRoute } from 'next';
import { SITE_INDEXABLE } from '@/config/site';
import { robotsFor } from '@/lib/indexing';

/** `/robots.txt`, selon l'interrupteur de lancement. Règle choisie avant le lancement et pourquoi : `robotsFor`. */
export default function robots(): MetadataRoute.Robots {
  return robotsFor(SITE_INDEXABLE);
}
