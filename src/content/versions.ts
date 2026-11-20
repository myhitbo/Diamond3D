import type { Locale } from '@/lib/configurator/schema';

/**
 * Trois versions de l'accueil, à comparer en ligne (`/fr/versions`). Demande du propriétaire (20/11) : reprendre le système des
 * sites de référence (objet 3D qui traverse la page au défilement) avec la bague, en trois directions différentes. Non indexées.
 * Les textes des versions viennent de l'accueil (`src/content/home.ts`) et du modèle : uniquement des faits acquis.
 */
export const VERSION_IDS = ['a', 'b', 'c'] as const;
export type VersionId = (typeof VERSION_IDS)[number];

type Trilingual = Record<Locale, string>;

export const VERSIONS: Record<VersionId, { name: Trilingual; summary: Trilingual }> = {
  a: {
    name: { fr: 'Version A · Écrin', en: 'Version A · The case', he: 'גרסה א · הקופסה' },
    summary: {
      fr: 'La bague flotte sur son socle ; on change de métal comme on change de parfum, et la bague traverse la page au défilement.',
      en: 'The ring floats above its pedestal; you switch metals like flavours, and the ring travels through the page as you scroll.',
      he: 'הטבעת מרחפת מעל המעמד; מחליפים מתכת כמו שמחליפים טעם, והטבעת עוברת לאורך הדף בזמן הגלילה.',
    },
  },
  b: {
    name: { fr: 'Version B · Nuit', en: 'Version B · Night', he: 'גרסה ב · לילה' },
    summary: {
      fr: 'Une mise en scène de nuit, lente et cinématographique : la bague dans un ciel d’éclats.',
      en: 'A slow, cinematic night staging: the ring in a sky of sparks.',
      he: 'בימוי לילי, איטי וקולנועי: הטבעת בשמי ניצוצות.',
    },
  },
  c: {
    name: { fr: 'Version C · Atelier', en: 'Version C · Workshop', he: 'גרסה ג · סדנה' },
    summary: {
      fr: 'Une page claire et éditoriale : grande typographie, la bague posée entre les lignes.',
      en: 'A light, editorial page: large type, the ring set between the lines.',
      he: 'דף בהיר ועריכתי: טיפוגרפיה גדולה, והטבעת מונחת בין השורות.',
    },
  },
};

export const VERSIONS_UI: Record<Locale, { title: string; intro: string; open: string; index: string; switcherLabel: string; draft: string }> = {
  fr: {
    title: 'Trois versions de l’accueil',
    intro: 'Trois directions pour la page d’accueil. Dans chacune, la bague est affichée en 3D et suit le défilement de la page.',
    open: 'Ouvrir',
    index: 'Les trois versions',
    switcherLabel: 'Versions de l’accueil',
    draft: 'Brouillon · versions à comparer, non publiées',
  },
  en: {
    title: 'Three versions of the home page',
    intro: 'Three directions for the home page. In each, the ring is shown in 3D and follows the page as you scroll.',
    open: 'Open',
    index: 'All three versions',
    switcherLabel: 'Home page versions',
    draft: 'Draft · versions to compare, not published',
  },
  he: {
    title: 'שלוש גרסאות לדף הבית',
    intro: 'שלושה כיוונים לדף הבית. בכל אחד מהם הטבעת מוצגת בתלת־ממד ועוקבת אחרי הגלילה.',
    open: 'פתיחה',
    index: 'שלוש הגרסאות',
    switcherLabel: 'גרסאות דף הבית',
    draft: 'טיוטה · גרסאות להשוואה, לא פורסמו · תרגום ממתין להגהה',
  },
};

/**
 * Libellés communs aux versions, en plus des textes de l'accueil (`HOME`), du modèle (compositions) et du dictionnaire (métaux).
 * Rien de nouveau n'est affirmé : `kickers` résume en deux ou trois mots chacun des quatre points de `HOME.points`, dans le même
 * ordre (fichier de fabrication, délai, devis, mise à taille).
 */
export const STORY: Record<
  Locale,
  {
    prevMetal: string;
    nextMetal: string;
    scrollHint: string;
    kickers: [string, string, string, string];
    compositionsTitle: string;
    liveNote: string;
    menu: string;
    progress: string;
  }
> = {
  fr: {
    prevMetal: 'Métal précédent',
    nextMetal: 'Métal suivant',
    scrollHint: 'Faites défiler pour découvrir',
    kickers: ['Fichier de fabrication', '14 jours ouvrés', 'Sur devis', 'Première année'],
    compositionsTitle: 'Solitaire, alliance, ou les deux',
    liveNote: 'Bague affichée en 3D en temps réel, à partir du fichier de fabrication. Les couleurs sont celles d’un écran.',
    menu: 'Menu',
    progress: 'Avancement dans la page',
  },
  en: {
    prevMetal: 'Previous metal',
    nextMetal: 'Next metal',
    scrollHint: 'Scroll to discover',
    kickers: ['Production file', '14 working days', 'On quote', 'First year'],
    compositionsTitle: 'Solitaire, band, or both',
    liveNote: 'Ring shown in real-time 3D, from the production file. Colours are those of a screen.',
    menu: 'Menu',
    progress: 'Progress through the page',
  },
  he: {
    prevMetal: 'המתכת הקודמת',
    nextMetal: 'המתכת הבאה',
    scrollHint: 'גללו כדי לגלות',
    kickers: ['קובץ הייצור', '14 ימי עבודה', 'הצעת מחיר', 'השנה הראשונה'],
    compositionsTitle: 'סוליטר, טבעת נישואין, או שתיהן',
    liveNote: 'הטבעת מוצגת בתלת־ממד בזמן אמת, מקובץ הייצור. הצבעים הם צבעי מסך.',
    menu: 'תפריט',
    progress: 'התקדמות בדף',
  },
};
