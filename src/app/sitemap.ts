import type { MetadataRoute } from 'next';
import { SITE_INDEXABLE } from '@/config/site';
import { sitemapFor } from '@/lib/indexing';

/** `/sitemap.xml` : vide avant le lancement, toutes les pages publiques des trois langues ensuite (`sitemapFor`). */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapFor(SITE_INDEXABLE);
}
