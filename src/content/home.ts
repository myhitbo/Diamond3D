import type { Locale } from '@/lib/configurator/schema';

/**
 * Page d'accueil (`/fr`, `/en`, `/he`) : le positionnement « l'atelier en direct », limité à ce qui est vrai aujourd'hui.
 *
 * Sources des affirmations (CLAUDE.md, « Réponses de l'atelier déjà acquises », et la FAQ, qui dit la même chose) :
 * - modèle 3D tiré du fichier de fabrication : vrai pour ring-001, le seul modèle en ligne (pipeline `.3dm` → GLB, retouche web
 *   demandée par l'atelier) ; formulation reprise de la FAQ (`3d-fidele`) ;
 * - atelier à la Bourse du diamant de Ramat Gan ; 14 jours ouvrés pour une pièce du catalogue (atelier, 3/11) ;
 * - métaux, pierres et certificats (atelier, 22/10 et 3/11) ; première mise à taille offerte (atelier, 3/11) ;
 * - prix « sur devis » : le moteur de prix n'est pas branché.
 * Volontairement absents : la pierre filmée et tout prix. Photos et vidéos de fabrication : le propriétaire les a acceptées (4/11),
 * mais rien n'en fixe encore les modalités ; la page en parle comme d'une intention (`making`), pas comme d'un engagement.
 * Badge « Brouillon » tant que l'atelier n'a pas relu la page. Hébreu : traduction automatique, relecture native à faire.
 */
export type HomeCard = { title: string; text: string };

export type HomeContent = {
  /** Titre complet de l'onglet (sans le gabarit « · JR Diamond » du layout). */
  metaTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  lede: string;
  draft: string;
  cta: string;
  /** Sous l'appel principal : le seul modèle en ligne et le prix sur devis. */
  ctaNote: string;
  image: { alt: string; caption: string };
  pointsTitle: string;
  points: HomeCard[];
  making: string;
  materialsTitle: string;
  materials: { term: string; text: string }[];
  moreTitle: string;
  /** `guides` : `null` dans une langue sans guides (hébreu). */
  more: { transformation: HomeCard; guides: HomeCard | null; faq: HomeCard };
};

export const HOME: Record<Locale, HomeContent> = {
  fr: {
    metaTitle: 'JR Diamond · Joaillerie à la Bourse du diamant de Ramat Gan',
    description:
      'Bagues en or et en platine, diamants naturels ou synthétiques, fabriquées par notre atelier de la Bourse du diamant de Ramat Gan. Configurez votre bague en 3D, prix sur devis.',
    eyebrow: 'L’atelier en direct',
    title: 'Votre bague, vue en 3D, fabriquée à Ramat Gan',
    lede: 'JR Diamond est un atelier de joaillerie installé à la Bourse du diamant de Ramat Gan. Choisissez en 3D le métal et le diamant de votre bague : l’atelier vous répond avec un devis, puis la fabrique.',
    draft: 'Brouillon · page en attente de relecture par l’atelier',
    cta: 'Configurer une bague',
    ctaNote: 'Premier modèle en ligne : l’ensemble marquise, en solitaire, en alliance ou les deux. Prix sur devis, sans engagement.',
    image: {
      alt: 'Ensemble marquise en or jaune : bague solitaire et alliance, vues de trois quarts.',
      caption: 'L’ensemble marquise tel qu’il s’affiche dans le configurateur : un rendu 3D, pas une photo.',
    },
    pointsTitle: 'Comment nous travaillons',
    points: [
      {
        title: 'Le modèle 3D vient du fichier de fabrication',
        text: 'La bague que vous faites tourner est tirée du fichier CAO avec lequel l’atelier la fabrique. Elle n’est pas redessinée pour le site : seuls quelques détails sont simplifiés pour l’écran. Les couleurs, elles, restent celles d’un écran.',
      },
      {
        title: 'Fabriquée à la Bourse du diamant de Ramat Gan',
        text: 'Notre atelier fabrique chaque pièce sur place. Comptez 14 jours ouvrés à partir de la commande pour un modèle du catalogue.',
      },
      {
        title: 'Un prix sur devis',
        text: 'Le prix dépend du métal, du titre de l’or et des pierres choisis. L’atelier vous répond avec un devis, sans engagement.',
      },
      { title: 'Première mise à taille offerte', text: 'Si la bague n’est pas à la bonne taille, la première mise à taille est offerte.' },
    ],
    making: 'Nous voulons aussi vous montrer la fabrication de votre bijou, en photos et en vidéos.',
    materialsTitle: 'Métaux et pierres',
    materials: [
      { term: 'Métaux', text: 'Or 14 ou 18 carats, jaune, blanc ou rose, et platine.' },
      { term: 'Diamants', text: 'Naturels ou synthétiques, et diamants de couleur. Un diamant synthétique est un vrai diamant, fabriqué par l’homme : ce n’est pas une imitation.' },
      { term: 'Pierres de couleur', text: 'Émeraudes, saphirs et rubis naturels.' },
      { term: 'Certificat', text: 'GIA pour un diamant naturel, IGI pour un diamant synthétique, à partir de 0,50 carat.' },
    ],
    moreTitle: 'Aussi sur le site',
    more: {
      transformation: { title: 'Transformer un bijou de famille', text: 'Refondre l’or d’un bijou hérité et réutiliser ses pierres dans une nouvelle création.' },
      guides: { title: 'Guides', text: 'Synthétique ou naturel, formes de diamant, or 14 ou 18 carats, taille de doigt : des explications courtes et sourcées.' },
      faq: { title: 'Questions fréquentes', text: 'Délais, certificats, mise à taille, entretien : nos réponses.' },
    },
  },
  en: {
    metaTitle: 'JR Diamond · Fine jewellery from the Diamond Exchange, Ramat Gan',
    description:
      'Gold and platinum rings with natural or lab-grown diamonds, made by our workshop at the Diamond Exchange in Ramat Gan. Configure your ring in 3D, priced on quote.',
    eyebrow: 'Straight from the workshop',
    title: 'Your ring, seen in 3D, made in Ramat Gan',
    lede: 'JR Diamond is a jewellery workshop at the Diamond Exchange in Ramat Gan. Choose the metal and the diamond of your ring in 3D: the workshop replies with a quote, then makes it.',
    draft: 'Draft · page awaiting review by the workshop',
    cta: 'Configure a ring',
    ctaNote: 'First piece online: the marquise set, as a solitaire, a band or both. Priced on quote, with no obligation.',
    image: {
      alt: 'Marquise set in yellow gold: solitaire ring and band, seen at a three-quarter angle.',
      caption: 'The marquise set as shown in the configurator: a 3D render, not a photo.',
    },
    pointsTitle: 'How we work',
    points: [
      {
        title: 'The 3D model comes from the production file',
        text: 'The ring you turn on screen is taken from the CAD file the workshop makes it from. It is not redrawn for the website: only a few details are simplified for the screen. Colours, however, remain those of a screen.',
      },
      {
        title: 'Made at the Diamond Exchange in Ramat Gan',
        text: 'Our workshop makes every piece on site. Allow 14 working days from your order for a piece from our catalogue.',
      },
      {
        title: 'Priced on quote',
        text: 'The price depends on the metal, the gold karat and the stones you choose. The workshop replies with a quote, with no obligation.',
      },
      { title: 'First resizing free', text: 'If the ring does not fit, the first resizing is free.' },
    ],
    making: 'We also want to show you your piece being made, in photos and videos.',
    materialsTitle: 'Metals and stones',
    materials: [
      { term: 'Metals', text: '14 or 18 karat gold, yellow, white or rose, and platinum.' },
      { term: 'Diamonds', text: 'Natural or lab-grown, and coloured diamonds. A lab-grown diamond is a real diamond, not an imitation.' },
      { term: 'Coloured stones', text: 'Natural emeralds, sapphires and rubies.' },
      { term: 'Certificate', text: 'GIA for a natural diamond, IGI for a lab-grown one, from 0.50 carat.' },
    ],
    moreTitle: 'Also on the site',
    more: {
      transformation: { title: 'Give a family piece a new life', text: 'Melt down the gold of an inherited piece and reuse its stones in a new design.' },
      guides: { title: 'Guides', text: 'Lab-grown or natural, diamond shapes, 14 or 18 karat gold, ring size: short, sourced explanations.' },
      faq: { title: 'Frequently asked questions', text: 'Lead times, certificates, resizing, care: our answers.' },
    },
  },
  he: {
    metaTitle: 'JR Diamond · תכשיטים מבורסת היהלומים ברמת גן',
    description: 'טבעות זהב ופלטינה עם יהלומים טבעיים או יהלומי מעבדה, בייצור הסדנה שלנו בבורסת היהלומים ברמת גן. עצבו את הטבעת בתלת־ממד, המחיר לפי הצעת מחיר.',
    eyebrow: 'ישר מהסדנה',
    title: 'הטבעת שלכם, בתלת־ממד, מיוצרת ברמת גן',
    lede: 'JR Diamond היא סדנת תכשיטים בבורסת היהלומים ברמת גן. בחרו בתלת־ממד את המתכת ואת היהלום של הטבעת: הסדנה משיבה בהצעת מחיר, ואחר כך מייצרת אותה.',
    draft: 'טיוטה · העמוד ממתין לאישור הסדנה',
    cta: 'עיצוב טבעת',
    ctaNote: 'הדגם הראשון באתר: סט המרקיזה, כטבעת סוליטר, כטבעת נישואין או שתיהן יחד. המחיר לפי הצעת מחיר, ללא התחייבות.',
    image: {
      alt: 'סט מרקיזה בזהב צהוב: טבעת סוליטר וטבעת נישואין, במבט אלכסוני.',
      caption: 'סט המרקיזה כפי שהוא מוצג במעצב התכשיטים: הדמיה בתלת־ממד, לא תמונה.',
    },
    pointsTitle: 'איך אנחנו עובדים',
    points: [
      {
        title: 'המודל התלת־ממדי נלקח מקובץ הייצור',
        text: 'הטבעת שאתם מסובבים על המסך נלקחה מקובץ ה־CAD שממנו הסדנה מייצרת אותה. היא לא שורטטה מחדש לאתר: רק כמה פרטים פושטו לתצוגה. הצבעים, לעומת זאת, הם צבעי מסך.',
      },
      { title: 'ייצור בבורסת היהלומים ברמת גן', text: 'הסדנה שלנו מייצרת כל תכשיט במקום. זמן הייצור: 14 ימי עבודה מיום ההזמנה, לתכשיט מהקטלוג שלנו.' },
      { title: 'מחיר לפי הצעת מחיר', text: 'המחיר תלוי במתכת, בקראט הזהב ובאבנים שבחרתם. הסדנה משיבה בהצעת מחיר, ללא התחייבות.' },
      { title: 'התאמת המידה הראשונה חינם', text: 'אם הטבעת לא במידה, התאמת המידה הראשונה חינם.' },
    ],
    making: 'נרצה גם להראות לכם את התכשיט שלכם בזמן הייצור, בתמונות ובסרטונים.',
    materialsTitle: 'מתכות ואבנים',
    materials: [
      { term: 'מתכות', text: 'זהב 14 או 18 קראט, צהוב, לבן או אדום, ופלטינה.' },
      { term: 'יהלומים', text: 'יהלומים טבעיים או יהלומי מעבדה, וגם יהלומים צבעוניים. יהלום מעבדה הוא יהלום אמיתי, לא חיקוי.' },
      { term: 'אבני חן', text: 'אמרלד, ספיר ורובי טבעיים.' },
      { term: 'תעודה', text: 'GIA ליהלום טבעי, IGI ליהלום מעבדה, החל מ־0.50 קראט.' },
    ],
    moreTitle: 'עוד באתר',
    more: {
      transformation: { title: 'חיים חדשים לתכשיט משפחתי', text: 'להתיך את הזהב של תכשיט שעבר בירושה ולשבץ את האבנים שלו בתכשיט חדש.' },
      guides: null,
      faq: { title: 'שאלות נפוצות', text: 'זמני ייצור, תעודות, התאמת מידה, טיפול בתכשיט: התשובות שלנו.' },
    },
  },
};
