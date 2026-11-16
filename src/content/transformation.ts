import type { Locale } from '@/lib/configurator/schema';

/**
 * Page « Transformer un bijou de famille ».
 *
 * Base : l'atelier pratique déjà la transformation (réponse du 4/11) : refonte de l'or, pierres desserties
 * et replacées, devis après examen. Confirmé par l'atelier le 16/11 (questions 57 à 60) : rien n'est démonté
 * sans accord, l'or récupéré pèse un peu moins, les pierres fragiles peuvent casser, photos des étapes sur
 * demande ; apport à l'atelier recommandé, assurance de l'envoi à la charge du client s'il l'organise, à la
 * charge de l'atelier s'il organise un envoi international. Non publiée : la clause « le sertisseur décline
 * toute responsabilité en cas de casse », soumise à l'avocat (docs/juridique/DOSSIER_AVOCAT_IL.md).
 * Badge « Brouillon » maintenu : textes hébreux à relire.
 * Aucun prix ni délai chiffré : ils dépendent du projet et figurent dans le devis.
 * Hébreu : traduction automatique, relecture native à faire.
 */
export type TransformationContent = {
  title: string;
  lede: string;
  draft: string;
  stepsTitle: string;
  steps: { title: string; text: string }[];
  frankTitle: string;
  frank: string[];
  formTitle: string;
  formIntro: string;
  fields: { jewel: string; wish: string; photos: string };
  jewelPlaceholder: string;
  /** Erreur affichée sous le champ « bijou » s'il est vide ou trop court. */
  jewelError: string;
  wishPlaceholder: string;
  successText: string;
  whatsAppNote: string;
};

export const TRANSFORMATION: Record<Locale, TransformationContent> = {
  fr: {
    title: 'Transformer un bijou de famille',
    lede: 'Une bague de grand-mère, une chaîne cassée, des boucles dépareillées : l’atelier peut refondre l’or et réutiliser les pierres dans une nouvelle création.',
    draft: 'Brouillon · page en attente de relecture par l’atelier',
    stepsTitle: 'Comment cela se passe',
    steps: [
      { title: 'Vous envoyez des photos', text: 'Le bijou vu de dessus, de profil et, si possible, ses poinçons. Dites-nous ce que vous aimeriez en faire, même si l’idée est encore vague.' },
      { title: 'L’atelier donne un premier avis', text: 'Sur photos, il vous dit ce qui est réalisable. Le titre de l’or et l’état des pierres ne se vérifient vraiment qu’avec le bijou en main.' },
      {
        title: 'Vous confiez le bijou à l’atelier',
        text: 'Le mieux est de l’apporter à l’atelier, à la Bourse du diamant de Ramat Gan. Si vous organisez vous-même l’envoi, son assurance est à votre charge. Si l’atelier organise un envoi international, il prend l’assurance en charge.',
      },
      { title: 'Vous recevez un dessin et un devis', text: 'L’atelier propose un dessin de la nouvelle pièce et un devis. Rien n’est démonté ni fondu avant votre accord.' },
      { title: 'Vous pouvez suivre la fabrication', text: 'Sur demande, l’atelier vous envoie des photos des étapes : le démontage, la fonte, le sertissage, la pièce finie.' },
    ],
    frankTitle: 'Ce que nous vous dirons franchement',
    frank: [
      'Toutes les pierres ne supportent pas d’être desserties. Une pierre fêlée ou fragile peut se briser : l’atelier vous prévient avant d’y toucher.',
      'L’or récupéré pèse toujours un peu moins que le bijou d’origine, à cause des soudures et des pertes de fonte. Si la nouvelle pièce demande plus de métal, le complément figure dans le devis.',
      'Le délai et le prix dépendent du projet. Ils sont indiqués dans le devis, sans engagement de votre part.',
    ],
    formTitle: 'Envoyer mon bijou en photos',
    formIntro: 'L’atelier vous répond sous 24 à 48 h ouvrées, sans engagement.',
    fields: { jewel: 'Le bijou que vous avez', wish: 'Ce que vous aimeriez en faire', photos: 'Photos du bijou' },
    jewelPlaceholder: 'Ex. bague en or jaune avec un diamant et deux saphirs, héritée de ma grand-mère',
    jewelError: 'Décrivez le bijou que vous avez (5 caractères au moins).',
    wishPlaceholder: 'Ex. une bague de fiançailles avec le diamant, un pendentif avec les saphirs',
    successText: 'Merci. L’atelier a bien reçu vos photos et vous répondra par e-mail sous 24 à 48 h ouvrées.',
    whatsAppNote: 'WhatsApp s’ouvre avec votre description déjà écrite : joignez-y vos photos, puis appuyez sur Envoyer.',
  },
  en: {
    title: 'Give a family piece a new life',
    lede: 'A grandmother’s ring, a broken chain, odd earrings: the workshop can melt the gold down and reuse the stones in a new piece.',
    draft: 'Draft · page awaiting review by the workshop',
    stepsTitle: 'How it works',
    steps: [
      { title: 'You send photos', text: 'The piece seen from above, from the side and, if you can, its hallmarks. Tell us what you would like to make of it, even if the idea is still vague.' },
      { title: 'The workshop gives a first opinion', text: 'From the photos, it tells you what is feasible. The gold purity and the condition of the stones can only be truly checked with the piece in hand.' },
      {
        title: 'You entrust the piece to the workshop',
        text: 'Bringing it to the workshop at the Diamond Exchange in Ramat Gan is best. If you arrange the shipping yourself, its insurance is at your expense. If the workshop arranges an international shipment, it covers the insurance.',
      },
      { title: 'You receive a design and a quote', text: 'The workshop proposes a design for the new piece and a quote. Nothing is taken apart or melted before you agree.' },
      { title: 'You can follow the making', text: 'On request, the workshop sends you photos of each stage: dismantling, casting, setting, the finished piece.' },
    ],
    frankTitle: 'What we will tell you plainly',
    frank: [
      'Not every stone can safely be unset. A cracked or fragile stone may break: the workshop warns you before touching it.',
      'The recovered gold always weighs a little less than the original piece, because of solder and casting losses. If the new piece needs more metal, the extra appears in the quote.',
      'Lead time and price depend on the project. Both are stated in the quote, with no obligation on your part.',
    ],
    formTitle: 'Send photos of my piece',
    formIntro: 'The workshop replies within 24 to 48 working hours, with no obligation.',
    fields: { jewel: 'The piece you have', wish: 'What you would like to make of it', photos: 'Photos of the piece' },
    jewelPlaceholder: 'E.g. yellow gold ring with a diamond and two sapphires, inherited from my grandmother',
    jewelError: 'Describe the piece you have (at least 5 characters).',
    wishPlaceholder: 'E.g. an engagement ring with the diamond, a pendant with the sapphires',
    successText: 'Thank you. The workshop has received your photos and will reply by e-mail within 24 to 48 working hours.',
    whatsAppNote: 'WhatsApp opens with your description already written: attach your photos, then tap Send.',
  },
  he: {
    title: 'חיים חדשים לתכשיט משפחתי',
    lede: 'טבעת של סבתא, שרשרת קרועה, עגילים בודדים: הסדנה יכולה להתיך את הזהב ולשבץ את האבנים בתכשיט חדש.',
    draft: 'טיוטה · העמוד ממתין לאישור הסדנה',
    stepsTitle: 'איך זה עובד',
    steps: [
      { title: 'שולחים תמונות', text: 'התכשיט מלמעלה, מהצד, ואם אפשר גם החותמות שעליו. ספרו לנו מה הייתם רוצים לעשות ממנו, גם אם הרעיון עדיין לא מגובש.' },
      { title: 'הסדנה נותנת חוות דעת ראשונה', text: 'לפי התמונות היא אומרת מה אפשרי. את טוהר הזהב ואת מצב האבנים אפשר לבדוק באמת רק כשהתכשיט ביד.' },
      {
        title: 'מפקידים את התכשיט בסדנה',
        text: 'הכי טוב להביא אותו לסדנה, בבורסת היהלומים ברמת גן. אם אתם מארגנים את המשלוח בעצמכם, הביטוח שלו על חשבונכם. אם הסדנה מארגנת משלוח בינלאומי, היא נושאת בעלות הביטוח.',
      },
      { title: 'מקבלים שרטוט והצעת מחיר', text: 'הסדנה מציעה שרטוט של התכשיט החדש והצעת מחיר. שום דבר לא מפורק ולא מותך לפני אישורכם.' },
      { title: 'אפשר לעקוב אחרי הייצור', text: 'לפי בקשה, הסדנה שולחת לכם תמונות מכל שלב: הפירוק, היציקה, השיבוץ והתכשיט המוגמר.' },
    ],
    frankTitle: 'מה שנאמר לכם בכנות',
    frank: [
      'לא כל אבן אפשר להוציא בבטחה מהשיבוץ. אבן סדוקה או עדינה עלולה להישבר: הסדנה מזהירה אתכם לפני שנוגעים בה.',
      'הזהב שמתקבל שוקל תמיד מעט פחות מהתכשיט המקורי, בגלל הלחמות ואובדן ביציקה. אם התכשיט החדש דורש יותר מתכת, התוספת מופיעה בהצעת המחיר.',
      'זמן הייצור והמחיר תלויים בפרויקט. שניהם מצוינים בהצעת המחיר, ללא התחייבות מצדכם.',
    ],
    formTitle: 'שליחת תמונות של התכשיט',
    formIntro: 'הסדנה משיבה תוך 24 עד 48 שעות עבודה, ללא התחייבות.',
    fields: { jewel: 'התכשיט שיש לכם', wish: 'מה הייתם רוצים לעשות ממנו', photos: 'תמונות של התכשיט' },
    jewelPlaceholder: 'לדוגמה: טבעת זהב צהוב עם יהלום ושני ספירים, ירושה מסבתא',
    jewelError: 'נא לתאר את התכשיט שיש לכם (5 תווים לפחות).',
    wishPlaceholder: 'לדוגמה: טבעת אירוסין עם היהלום, תליון עם הספירים',
    successText: 'תודה. הסדנה קיבלה את התמונות ותשיב בדוא״ל תוך 24 עד 48 שעות עבודה.',
    whatsAppNote: 'וואטסאפ נפתח עם התיאור שכתבתם: צרפו את התמונות ולחצו על שליחה.',
  },
};
