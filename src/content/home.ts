import type { Locale } from '@/lib/configurator/schema';

/**
 * Page d'accueil (`/fr`, `/en`, `/he`) : le positionnement « l'atelier en direct », limité à ce qui est vrai aujourd'hui.
 *
 * Sources des affirmations (CLAUDE.md, « Réponses de l'atelier déjà acquises », et la FAQ, qui dit la même chose) :
 * - modèle 3D tiré du fichier de fabrication : vrai pour ring-001, le seul modèle en ligne (pipeline `.3dm` → GLB, retouche web
 *   demandée par l'atelier) ; formulation reprise de la FAQ (`3d-fidele`) ;
 * - atelier à la Bourse du diamant de Ramat Gan ; 14 jours ouvrés pour une pièce du catalogue (atelier, 3/11) ;
 * - métaux, pierres et certificats (atelier, 22/10 et 3/11) ;
 * - première mise à taille offerte, payante après un an (atelier, 3/11 : « Première mise à taille offerte. Après un an,
 *   payante ») ; point de départ de l'année à confirmer (question 81 de `docs/QUESTIONS_ATELIER.md`) ;
 * - prix « sur devis » : le moteur de prix n'est pas branché.
 * Pas de « sur place » ni de « chaque pièce » : l'atelier n'a pas dit quelles étapes il confie à d'autres (fonderie pour le
 * platine, impression 3D ; question 80). Un diamant synthétique n'est jamais dit « vrai » ni « véritable » (décret 2002-65,
 * article 4) : on dit ce qu'il a en commun avec le diamant naturel.
 * Volontairement absents : la pierre filmée et tout prix. Photos et vidéos de fabrication : le propriétaire les a acceptées (4/11),
 * mais rien n'en fixe encore les modalités ; la page en parle comme d'une intention (`making`), pas comme d'un engagement.
 * Badge « Brouillon » tant que l'atelier n'a pas relu la page. Hébreu : traduction automatique, relecture native à faire.
 */
export type HomeCard = { title: string; text: string };

export type HomeContent = {
  /**
   * Titre de la page sans la marque : aperçu des liens partagés (`og:title`, la marque va dans `og:site_name`). L'onglet affiche
   * « JR Diamond · » suivi de ce titre (`src/app/[locale]/page.tsx`).
   */
  shareTitle: string;
  description: string;
  eyebrow: string;
  /** Titre principal en segments : les segments d'indice impair sont mis en valeur (italique, or). */
  title: string[];
  /** Trois repères sous le premier écran (faits acquis : métaux, pierres, délai). */
  heroFacts: string[];
  lede: string;
  draft: string;
  cta: string;
  /** Sous l'appel principal : le seul modèle en ligne et le prix sur devis. */
  ctaNote: string;
  image: { alt: string; caption: string };
  /** Gros plan de la marquise (rendu 3D, vue de dessus). */
  detail: { alt: string; caption: string };
  /** Galerie des quatre métaux (rendus 3D de l'ensemble marquise). `setName` précède le nom du métal dans le texte alternatif. */
  metalsTitle: string;
  metalsText: string;
  setName: string;
  /** Solitaire seul (section « Métaux et pierres »). */
  solitaire: { alt: string; caption: string };
  /** Appel final, en bas de page. */
  finalTitle: string;
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
    shareTitle: 'Joaillerie à la Bourse du diamant de Ramat Gan',
    description:
      'Bagues en or et en platine, diamants naturels ou synthétiques, fabriquées par notre atelier de la Bourse du diamant de Ramat Gan. Configurez votre bague en 3D, prix sur devis.',
    eyebrow: 'L’atelier en direct',
    title: ['Votre bague, ', 'vue en 3D', ', fabriquée à Ramat Gan'],
    heroFacts: ['Or 14 et 18 carats, platine', 'Diamants naturels ou synthétiques', '14 jours ouvrés à partir de la commande'],
    lede: 'JR Diamond est un atelier de joaillerie installé à la Bourse du diamant de Ramat Gan. Choisissez en 3D le métal et le diamant de votre bague : l’atelier vous répond avec un devis, puis la fabrique.',
    draft: 'Brouillon · page en attente de relecture par l’atelier',
    cta: 'Configurer une bague',
    ctaNote: 'Premier modèle en ligne : l’ensemble marquise, en solitaire, en alliance ou les deux. Prix sur devis, sans engagement.',
    image: {
      alt: 'Ensemble marquise en or jaune : bague solitaire et alliance, vues de trois quarts.',
      caption: 'L’ensemble marquise, rendu à partir du fichier de fabrication de l’atelier : une image 3D photoréaliste, pas une photo.',
    },
    detail: { alt: 'Gros plan de la marquise en or jaune, entourée de six diamants ronds.', caption: 'Le solitaire vu de dessus : rendu 3D photoréaliste.' },
    metalsTitle: 'Un modèle, quatre métaux',
    metalsText: 'L’ensemble marquise en or jaune, blanc ou rose et en platine. Rendus 3D photoréalistes du modèle de fabrication, pas des photos.',
    setName: 'Ensemble marquise',
    solitaire: { alt: 'Le solitaire marquise en or jaune, vu de trois quarts.', caption: 'Le solitaire seul : rendu 3D photoréaliste.' },
    finalTitle: 'Composez la vôtre',
    pointsTitle: 'Comment nous travaillons',
    points: [
      {
        title: 'Le modèle 3D vient du fichier de fabrication',
        text: 'La bague que vous faites tourner est tirée du fichier CAO avec lequel l’atelier la fabrique. Elle n’est pas redessinée pour le site : seuls quelques détails sont simplifiés pour l’écran. Les couleurs, elles, restent celles d’un écran.',
      },
      {
        title: 'Un atelier à la Bourse du diamant de Ramat Gan',
        text: 'C’est notre atelier qui fabrique votre bijou. Comptez 14 jours ouvrés à partir de la commande pour un modèle du catalogue.',
      },
      {
        title: 'Un prix sur devis',
        text: 'Le prix dépend du métal, du titre de l’or et des pierres choisis. L’atelier vous répond avec un devis sous 24 à 48 h ouvrées, sans engagement.',
      },
      { title: 'Première mise à taille offerte', text: 'Si la bague n’est pas à la bonne taille, la première mise à taille est offerte pendant la première année.' },
    ],
    making: 'Nous voulons aussi vous montrer la fabrication de votre bijou, en photos et en vidéos.',
    materialsTitle: 'Métaux et pierres',
    materials: [
      { term: 'Métaux', text: 'Or 14 ou 18 carats, jaune, blanc ou rose, et platine.' },
      { term: 'Diamants', text: 'Naturels ou synthétiques, et diamants de couleur. Un diamant synthétique a la même composition et la même structure cristalline qu’un diamant naturel : ce n’est pas une imitation.' },
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
    shareTitle: 'Fine jewellery from the Diamond Exchange, Ramat Gan',
    description:
      'Gold and platinum rings with natural or lab-grown diamonds, made by our workshop at the Diamond Exchange in Ramat Gan. Configure your ring in 3D, priced on quote.',
    eyebrow: 'Straight from the workshop',
    title: ['Your ring, ', 'seen in 3D', ', made in Ramat Gan'],
    heroFacts: ['14 or 18 karat gold, platinum', 'Natural or lab-grown diamonds', '14 working days from your order'],
    lede: 'JR Diamond is a jewellery workshop at the Diamond Exchange in Ramat Gan. Choose the metal and the diamond of your ring in 3D: the workshop replies with a quote, then makes it.',
    draft: 'Draft · page awaiting review by the workshop',
    cta: 'Configure a ring',
    ctaNote: 'First piece online: the marquise set, as a solitaire, a band or both. Priced on quote, with no obligation.',
    image: {
      alt: 'Marquise set in yellow gold: solitaire ring and band, seen at a three-quarter angle.',
      caption: 'The marquise set, rendered from the workshop’s production file: a photorealistic 3D image, not a photo.',
    },
    detail: { alt: 'Close-up of the marquise in yellow gold, surrounded by six round diamonds.', caption: 'The solitaire seen from above: a photorealistic 3D render.' },
    metalsTitle: 'One design, four metals',
    metalsText: 'The marquise set in yellow, white or rose gold and in platinum. Photorealistic 3D renders of the production model, not photos.',
    setName: 'Marquise set',
    solitaire: { alt: 'The marquise solitaire in yellow gold, seen at a three-quarter angle.', caption: 'The solitaire on its own: a photorealistic 3D render.' },
    finalTitle: 'Design yours',
    pointsTitle: 'How we work',
    points: [
      {
        title: 'The 3D model comes from the production file',
        text: 'The ring you turn on screen is taken from the CAD file the workshop makes it from. It is not redrawn for the website: only a few details are simplified for the screen. Colours, however, remain those of a screen.',
      },
      {
        title: 'A workshop at the Diamond Exchange in Ramat Gan',
        text: 'Your piece is made by our own workshop. Allow 14 working days from your order for a piece from our catalogue.',
      },
      {
        title: 'Priced on quote',
        text: 'The price depends on the metal, the gold karat and the stones you choose. The workshop replies with a quote within 24 to 48 working hours, with no obligation.',
      },
      { title: 'First resizing free', text: 'If the ring does not fit, the first resizing is free during the first year.' },
    ],
    making: 'We also want to show you your piece being made, in photos and videos.',
    materialsTitle: 'Metals and stones',
    materials: [
      { term: 'Metals', text: '14 or 18 karat gold, yellow, white or rose, and platinum.' },
      { term: 'Diamonds', text: 'Natural or lab-grown, and coloured diamonds. A lab-grown diamond has the same composition and crystal structure as a natural diamond: it is not an imitation.' },
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
    shareTitle: 'תכשיטים מבורסת היהלומים ברמת גן',
    description: 'טבעות זהב ופלטינה עם יהלומים טבעיים או יהלומי מעבדה, בייצור הסדנה שלנו בבורסת היהלומים ברמת גן. עצבו את הטבעת בתלת־ממד, המחיר לפי הצעת מחיר.',
    eyebrow: 'ישר מהסדנה',
    title: ['הטבעת שלכם, ', 'בתלת־ממד', ', מיוצרת ברמת גן'],
    heroFacts: ['זהב 14 או 18 קראט, פלטינה', 'יהלומים טבעיים או יהלומי מעבדה', '14 ימי עבודה מיום ההזמנה'],
    lede: 'JR Diamond היא סדנת תכשיטים בבורסת היהלומים ברמת גן. בחרו בתלת־ממד את המתכת ואת היהלום של הטבעת: הסדנה משיבה בהצעת מחיר, ואחר כך מייצרת אותה.',
    draft: 'טיוטה · העמוד ממתין לאישור הסדנה · תרגום ממתין להגהה',
    cta: 'עיצוב טבעת',
    ctaNote: 'הדגם הראשון באתר: סט המרקיזה, כטבעת סוליטר, כטבעת נישואין או שתיהן יחד. המחיר לפי הצעת מחיר, ללא התחייבות.',
    image: {
      alt: 'סט מרקיזה בזהב צהוב: טבעת סוליטר וטבעת נישואין, במבט אלכסוני.',
      caption: 'סט המרקיזה, בהדמיה מקובץ הייצור של הסדנה: הדמיה פוטו־ריאליסטית בתלת־ממד, לא תמונה.',
    },
    detail: { alt: 'תקריב של המרקיזה בזהב צהוב, מוקפת שישה יהלומים עגולים.', caption: 'הסוליטר במבט מלמעלה: הדמיה פוטו־ריאליסטית בתלת־ממד.' },
    metalsTitle: 'דגם אחד, ארבע מתכות',
    metalsText: 'סט המרקיזה בזהב צהוב, לבן או אדום ובפלטינה. הדמיות פוטו־ריאליסטיות בתלת־ממד של דגם הייצור, לא תמונות.',
    setName: 'סט מרקיזה',
    solitaire: { alt: 'סוליטר המרקיזה בזהב צהוב, במבט אלכסוני.', caption: 'הסוליטר לבדו: הדמיה פוטו־ריאליסטית בתלת־ממד.' },
    finalTitle: 'עצבו את שלכם',
    pointsTitle: 'איך אנחנו עובדים',
    points: [
      {
        title: 'המודל התלת־ממדי נלקח מקובץ הייצור',
        text: 'הטבעת שאתם מסובבים על המסך נלקחה מקובץ ה־CAD שממנו הסדנה מייצרת אותה. היא לא שורטטה מחדש לאתר: רק כמה פרטים פושטו לתצוגה. הצבעים, לעומת זאת, הם צבעי מסך.',
      },
      { title: 'סדנה בבורסת היהלומים ברמת גן', text: 'הסדנה שלנו היא שמייצרת את התכשיט שלכם. זמן הייצור: 14 ימי עבודה מיום ההזמנה, לתכשיט מהקטלוג שלנו.' },
      { title: 'מחיר לפי הצעת מחיר', text: 'המחיר תלוי במתכת, בקראט הזהב ובאבנים שבחרתם. הסדנה משיבה בהצעת מחיר תוך 24 עד 48 שעות עבודה, ללא התחייבות.' },
      { title: 'התאמת המידה הראשונה חינם', text: 'אם הטבעת לא במידה, התאמת המידה הראשונה חינם במהלך השנה הראשונה.' },
    ],
    making: 'נרצה גם להראות לכם את התכשיט שלכם בזמן הייצור, בתמונות ובסרטונים.',
    materialsTitle: 'מתכות ואבנים',
    materials: [
      { term: 'מתכות', text: 'זהב 14 או 18 קראט, צהוב, לבן או אדום, ופלטינה.' },
      { term: 'יהלומים', text: 'יהלומים טבעיים או יהלומי מעבדה, וגם יהלומים צבעוניים. ליהלום מעבדה אותו הרכב ואותו מבנה גבישי כמו ליהלום טבעי: הוא אינו חיקוי.' },
      { term: 'אבני חן', text: 'אזמרגד, ספיר ואודם טבעיים.' },
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
