import type { Locale } from '@/lib/configurator/schema';

/**
 * Page 404 (`src/app/[locale]/not-found.tsx`) : page absente dans une langue (ex. `/he/guides`), modèle inconnu, adresse
 * inconnue sous `/fr`, `/en` ou `/he`, et adresse hors langue (ex. `/nimporte-quoi`, en français).
 * Aucune affirmation sur l'atelier : seulement des liens vers des pages qui existent dans chaque langue.
 * Hébreu : traduction automatique, relecture native à faire ; signalé par `draft` (badge « Brouillon »), comme les autres pages.
 */
export type NotFoundContent = {
  /** Titre de la page, et de l'onglet suivi de « · JR Diamond » (`notFoundMetadata`). */
  title: string;
  text: string;
  /** `null` : pas de badge (texte sans relecture en attente). */
  draft: string | null;
  linksLabel: string;
  links: { home: string; configurator: string; faq: string };
};

export const NOT_FOUND: Record<Locale, NotFoundContent> = {
  fr: {
    title: 'Page introuvable',
    text: 'Cette adresse ne mène à aucune page du site. Elle a peut-être changé, ou contient une faute de frappe.',
    draft: null,
    linksLabel: 'Pages du site',
    links: { home: 'Accueil', configurator: 'Configurer une bague', faq: 'Questions fréquentes' },
  },
  en: {
    title: 'Page not found',
    text: 'This address does not lead to any page on the site. It may have changed, or contain a typo.',
    draft: null,
    linksLabel: 'Site pages',
    links: { home: 'Home', configurator: 'Configure a ring', faq: 'Frequently asked questions' },
  },
  he: {
    title: 'הדף לא נמצא',
    text: 'הכתובת הזו אינה מובילה לאף דף באתר. ייתכן שהיא השתנתה, או שנפלה בה שגיאת הקלדה.',
    draft: 'טיוטה · תרגום ממתין להגהה',
    linksLabel: 'דפי האתר',
    links: { home: 'דף הבית', configurator: 'עיצוב טבעת', faq: 'שאלות נפוצות' },
  },
};
