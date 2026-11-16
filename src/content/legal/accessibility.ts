/**
 * Déclaration d'accessibilité (`/fr/accessibilite`, `/en/accessibility`, `/he/accessibility`). Règles de rédaction : `types.ts`.
 *
 * Base : règle 35ה du règlement israélien de 2013 sur les adaptations d'accessibilité des services (adaptations réalisées,
 * contact, moyen de signaler un défaut) et liste du guide de la Commission pour l'égalité des droits des personnes handicapées
 * (date, normes et niveau, méthode, navigateurs, lecteurs d'écran, limites connues, contenus de tiers, exemptions, accès aux
 * locaux). L'état de conformité vit à part, pour être mis à jour après chaque vérification : `accessibility-status.ts`.
 * Engagements de la rubrique « signaler » (solution de remplacement dès que possible, correction dans les 60 jours suivant la
 * réception du signalement, règle 35א(ד)) : à faire confirmer par l'atelier (question 70 de `docs/QUESTIONS_ATELIER.md`), d'où
 * le badge « à valider par un avocat et par l'atelier ».
 */
import type { Locale } from '@/lib/configurator/schema';
import type { Conformance } from './accessibility-status';
import type { LegalLink, LegalPage } from './types';

/** Date de mise à jour de la déclaration, AAAA-MM-JJ : à changer à chaque modification de la page ou de l'état de conformité. */
export const ACCESSIBILITY_UPDATED = '2026-11-16';

const STANDARD_PDF = 'https://www.gov.il/BlobFolder/legalinfo/israeli_accessibility_standards_pdf/he/sitedocs_si-5568-1-september-2023.pdf';
const links = (standard: string): LegalLink[] => [
  { label: standard, url: STANDARD_PDF },
  { label: 'W3C, WCAG 2.0', url: 'https://www.w3.org/TR/WCAG20/' },
  { label: 'W3C, WCAG 2.1', url: 'https://www.w3.org/TR/WCAG21/' },
];

export const ACCESSIBILITY: Record<Locale, LegalPage> = {
  fr: {
    title: 'Déclaration d’accessibilité',
    lede: 'Ce que nous faisons pour que chacun puisse utiliser ce site, y compris les personnes handicapées, ce qui ne va pas encore, et comment nous signaler un problème.',
    badge: 'Brouillon · à valider par un avocat et par l’atelier',
    updated: (date) => `Déclaration mise à jour le ${date}.`,
    sections: [
      {
        id: 'engagement',
        title: 'Notre engagement',
        paragraphs: [
          'Le site JR Diamond doit pouvoir être utilisé par tous : au clavier, avec un lecteur d’écran ou avec un agrandissement de l’écran. Il est exploité par {legalName}.',
          'Nous corrigeons le site lui-même. Nous n’installons ni barre ni surcouche d’accessibilité : selon la Commission pour l’égalité des droits des personnes handicapées, une telle barre n’est pas obligatoire et ne dispense pas de respecter la norme.',
        ],
      },
      {
        id: 'regles',
        title: 'Les règles que nous suivons',
        list: [
          'La loi israélienne de 1998 sur l’égalité des droits des personnes handicapées, et son règlement de 2013 sur les adaptations d’accessibilité des services, qui s’applique aux sites internet (règles 35 à 35ו).',
          'La norme israélienne IS 5568, partie 1 (septembre 2023), qui reprend les règles internationales WCAG 2.0 du W3C avec quelques changements nationaux. Niveau exigé : AA.',
          'Nous visons le niveau AA des règles WCAG 2.1, qui contiennent celles de WCAG 2.0, ainsi que l’exigence israélienne propre aux titres de sections (critère 2.4.10).',
        ],
      },
      { id: 'etat', title: 'État de conformité', slot: 'status' },
      {
        id: 'adaptations',
        title: 'Ce que nous avons fait',
        list: [
          'Chaque page indique sa langue (français, anglais ou hébreu) ; la version hébraïque s’affiche de droite à gauche.',
          'Les pages sont organisées par des titres hiérarchisés.',
          'Un lien «\u00a0Aller au contenu\u00a0», en haut de chaque page, apparaît à la première pression sur la touche Tab ; il est suivi d’un lien vers cette déclaration.',
          'Le focus du clavier est visible (contour de 2 px) et n’est jamais caché derrière la vue 3D, qui reste en haut de l’écran sur téléphone.',
          'Tous les choix du configurateur (composition, métal, titre de l’or, origine, pierres) se font avec des boutons, utilisables au clavier : un seul arrêt de la touche Tab par groupe, les flèches pour changer de choix. Le choix en cours est signalé aux lecteurs d’écran, et le métal choisi est écrit en toutes lettres, pas seulement montré par sa couleur.',
          'La vue 3D a une description en texte de la pièce et des choix en cours, annoncée aux lecteurs d’écran à chaque changement. Quand elle a le focus, elle tourne avec les flèches du clavier et se rapproche avec + et −. Le récapitulatif «\u00a0Votre configuration\u00a0» donne aussi la configuration en texte.',
          'Si votre navigateur ne peut pas afficher la 3D, un message vous le dit ; tous les choix et la demande de devis restent disponibles.',
          'Les champs des formulaires ont une étiquette visible ; les champs obligatoires sont marqués d’un astérisque, expliqué en tête du formulaire. Une erreur s’écrit sous le champ concerné, un résumé des erreurs est annoncé aux lecteurs d’écran et le focus va au premier champ à corriger. Après l’envoi, le message de confirmation reçoit le focus.',
          'Si votre système demande de réduire les animations, les changements de vue de la 3D sont instantanés, sans inertie, et l’interface n’a plus ni transition ni défilement animé. Rien ne tourne ni ne bouge tout seul.',
          'Les textes ont un contraste d’au moins 4,5 pour 1 avec leur fond.',
          'Les pages se lisent sans défilement horizontal sur un écran de 320 px de large et avec un zoom à 200 %.',
          'Les boutons et les liens hors du texte mesurent au moins 24 × 24 px.',
          'Les images portent un texte de remplacement.',
        ],
      },
      {
        id: 'clavier',
        title: 'Naviguer au clavier',
        list: [
          'Tab : passer à l’élément suivant ; Maj + Tab : revenir au précédent.',
          'Entrée : suivre un lien ou activer un bouton.',
          'Espace : activer un bouton ou cocher une case.',
          'Flèches : changer de choix dans un groupe du configurateur (composition, métal, titre de l’or, origine).',
          'Vue 3D, quand elle a le focus : flèches pour la faire tourner, + et − pour zoomer, 0 pour revenir à la vue de départ.',
        ],
      },
      {
        id: 'navigateurs',
        title: 'Navigateurs',
        paragraphs: [
          'Nous testons automatiquement le fonctionnement du site avec les moteurs de Chrome, de Safari et de Firefox, sur ordinateur, téléphone et tablette simulés. Le contrôle d’accessibilité automatique (rubrique «\u00a0État de conformité\u00a0») est fait avec les mêmes moteurs. Utilisez de préférence une version récente de ces navigateurs.',
        ],
      },
      {
        id: 'tiers',
        title: 'Contenus d’autres sites',
        paragraphs: [
          'Les sources citées dans les guides et la FAQ, et WhatsApp si vous choisissez d’envoyer votre demande par ce moyen, sont des sites et des services d’autres entreprises : nous ne pouvons pas garantir leur accessibilité.',
        ],
      },
      { id: 'exemptions', title: 'Exemptions', paragraphs: ['Nous n’invoquons aucune exemption.'] },
      { id: 'atelier', title: 'Accès à l’atelier', paragraphs: ['{premisesAccess}'] },
      {
        id: 'signaler',
        title: 'Signaler un problème, demander une adaptation',
        paragraphs: [
          'Si une page vous pose problème, ou si vous avez besoin d’une adaptation, contactez notre responsable de l’accessibilité : {accessibilityContactName}, téléphone {accessibilityContactPhone}, e-mail {accessibilityContactEmail}.',
          'Dites-nous quelle page est concernée, ce qui ne fonctionne pas et, si possible, quel navigateur et quelle aide technique vous utilisez (lecteur d’écran, agrandisseur, commande vocale).',
          'Nous vous proposons dès que possible une autre façon d’obtenir le service, par exemple une demande de devis par téléphone ou par e-mail, et nous corrigeons le défaut dans un délai raisonnable, au plus tard 60 jours après la réception de votre signalement, comme le prévoit le règlement.',
        ],
      },
    ],
    linksTitle: 'Textes de référence',
    links: links('Norme israélienne IS 5568, partie 1 (septembre 2023), en hébreu (PDF)'),
  },
  en: {
    title: 'Accessibility statement',
    lede: 'What we do so that everyone, including people with disabilities, can use this site, what does not work yet, and how to report a problem.',
    badge: 'Draft · to be reviewed by a lawyer and by the workshop',
    updated: (date) => `Statement updated on ${date}.`,
    sections: [
      {
        id: 'engagement',
        title: 'Our commitment',
        paragraphs: [
          'The JR Diamond site must be usable by everyone: with a keyboard, with a screen reader or with screen magnification. It is operated by {legalName}.',
          'We fix the site itself. We do not install an accessibility toolbar or overlay: according to the Commission for Equal Rights of Persons with Disabilities, such a toolbar is not mandatory and does not exempt anyone from the standard.',
        ],
      },
      {
        id: 'regles',
        title: 'The rules we follow',
        list: [
          'The Israeli Equal Rights for Persons with Disabilities Law of 1998, and its 2013 regulations on service accessibility adjustments, which apply to websites (regulations 35 to 35ו).',
          'Israeli Standard IS 5568, part 1 (September 2023), which adopts the W3C’s international WCAG 2.0 guidelines with a few national changes. Required level: AA.',
          'We aim for level AA of WCAG 2.1, which includes WCAG 2.0, plus the Israeli requirement on section headings (success criterion 2.4.10).',
        ],
      },
      { id: 'etat', title: 'Conformance status', slot: 'status' },
      {
        id: 'adaptations',
        title: 'What we have done',
        list: [
          'Every page states its language (French, English or Hebrew); the Hebrew version reads right to left.',
          'Pages are organised with nested headings.',
          'A “Skip to content” link at the top of every page appears on the first press of the Tab key; it is followed by a link to this statement.',
          'Keyboard focus is visible (a 2 px outline) and is never hidden behind the 3D view, which stays at the top of the screen on phones.',
          'Every configurator choice (composition, metal, gold karat, origin, stones) is made with buttons that work with the keyboard: one Tab stop per group, arrow keys to change the choice. Screen readers are told which option is selected, and the chosen metal is written out in words, not only shown by its colour.',
          'The 3D view has a text description of the piece and the current choices, announced to screen readers at each change. When it has focus, it rotates with the arrow keys and zooms with + and −. The “Your configuration” summary also gives the configuration in text.',
          'If your browser cannot display 3D, a message tells you so; every choice and the quote request remain available.',
          'Form fields have a visible label; required fields are marked with an asterisk, explained at the top of the form. An error is written under the field concerned, a summary of the errors is announced to screen readers and focus moves to the first field to correct. After sending, the confirmation message receives focus.',
          'If your system asks to reduce motion, 3D view changes are instant, with no inertia, and the interface has no transitions or animated scrolling. Nothing turns or moves on its own.',
          'Text has a contrast of at least 4.5 to 1 with its background.',
          'Pages can be read with no horizontal scrolling on a 320 px wide screen and at 200% zoom.',
          'Buttons and links outside running text are at least 24 × 24 px.',
          'Images have a text alternative.',
        ],
      },
      {
        id: 'clavier',
        title: 'Using the keyboard',
        list: [
          'Tab: move to the next item; Shift + Tab: go back to the previous one.',
          'Enter: follow a link or activate a button.',
          'Space: activate a button or tick a box.',
          'Arrow keys: change the choice within a configurator group (composition, metal, gold karat, origin).',
          '3D view, when it has focus: arrow keys to rotate it, + and − to zoom, 0 to return to the starting view.',
        ],
      },
      {
        id: 'navigateurs',
        title: 'Browsers',
        paragraphs: [
          'We automatically test how the site works with the Chrome, Safari and Firefox engines, on simulated computers, phones and tablets. The automated accessibility check (see “Conformance status”) is run with the same engines. Please use a recent version of these browsers.',
        ],
      },
      {
        id: 'tiers',
        title: 'Content from other sites',
        paragraphs: [
          'The sources cited in the guides and the FAQ, and WhatsApp if you choose to send your request that way, are sites and services run by other companies: we cannot guarantee their accessibility.',
        ],
      },
      { id: 'exemptions', title: 'Exemptions', paragraphs: ['We do not claim any exemption.'] },
      { id: 'atelier', title: 'Access to the workshop', paragraphs: ['{premisesAccess}'] },
      {
        id: 'signaler',
        title: 'Report a problem or ask for an adjustment',
        paragraphs: [
          'If a page gives you trouble, or if you need an adjustment, contact our accessibility contact: {accessibilityContactName}, phone {accessibilityContactPhone}, email {accessibilityContactEmail}.',
          'Tell us which page is affected, what does not work and, if you can, which browser and assistive technology you use (screen reader, magnifier, voice control).',
          'We will offer you another way to get the service as soon as possible, for example a quote request by phone or email, and we will fix the problem within a reasonable time, at the latest 60 days after we receive your report, as the regulations require.',
        ],
      },
    ],
    linksTitle: 'Reference texts',
    links: links('Israeli Standard IS 5568, part 1 (September 2023), in Hebrew (PDF)'),
  },
  // Traduction IA, à faire relire par un locuteur natif, puis par l'avocat (version hébraïque).
  he: {
    title: 'הצהרת נגישות',
    lede: 'מה אנחנו עושים כדי שכל אחד, כולל אנשים עם מוגבלות, יוכל להשתמש באתר, מה עדיין אינו תקין, ואיך לדווח לנו על בעיה.',
    badge: 'טיוטה · טעון אישור עורך דין ואישור הסדנה · תרגום ממתין להגהה',
    updated: (date) => `ההצהרה עודכנה ב־${date}.`,
    sections: [
      {
        id: 'engagement',
        title: 'המחויבות שלנו',
        paragraphs: [
          'אתר JR Diamond צריך להיות שמיש לכולם: במקלדת, עם קורא מסך או עם הגדלת מסך. האתר מופעל על ידי {legalName}.',
          'אנחנו מתקנים את האתר עצמו. איננו מתקינים סרגל נגישות או שכבת נגישות: לפי נציבות שוויון זכויות לאנשים עם מוגבלות, סרגל כזה אינו חובה ואינו פוטר מעמידה בתקן.',
        ],
      },
      {
        id: 'regles',
        title: 'הכללים שאנחנו פועלים לפיהם',
        list: [
          'חוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח־1998, ותקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג־2013, החלות על אתרי אינטרנט (תקנות 35 עד 35ו).',
          'תקן ישראלי ת״י 5568 חלק 1 (ספטמבר 2023), המאמץ את הנחיות WCAG 2.0 הבין־לאומיות של W3C עם כמה שינויים לאומיים. הרמה הנדרשת: AA.',
          'אנחנו שואפים לרמה AA של הנחיות WCAG 2.1, הכוללות את WCAG 2.0, וכן לדרישה הישראלית לגבי כותרות של מקטעים (קריטריון 2.4.10).',
        ],
      },
      { id: 'etat', title: 'מצב התאימות', slot: 'status' },
      {
        id: 'adaptations',
        title: 'מה עשינו',
        list: [
          'כל דף מציין את שפתו (צרפתית, אנגלית או עברית); הגרסה העברית מוצגת מימין לשמאל.',
          'הדפים מאורגנים בכותרות היררכיות.',
          'קישור „דילוג לתוכן” בראש כל דף מופיע בלחיצה הראשונה על מקש Tab, ואחריו קישור להצהרה זו.',
          'מיקוד המקלדת נראה לעין (מסגרת של 2 פיקסלים) ואינו מוסתר לעולם מאחורי התצוגה התלת־ממדית, שנשארת בראש המסך בטלפון.',
          'כל הבחירות בעיצוב התכשיט (הרכב, מתכת, קראט הזהב, מקור, אבנים) נעשות בלחצנים שפועלים במקלדת: עצירה אחת של מקש Tab בכל קבוצה, והחצים להחלפת הבחירה. קורא המסך מודיע איזו אפשרות נבחרה, ושם המתכת שנבחרה כתוב במילים, לא רק מוצג בצבעו.',
          'לתצוגה התלת־ממדית יש תיאור טקסטואלי של הפריט ושל הבחירות הנוכחיות, המוקרא לקוראי מסך בכל שינוי. כשהיא במיקוד, היא מסתובבת בחצי המקלדת ומתקרבת ב־+ וב־−. גם הסיכום „התצורה שלכם” מציג את התצורה בטקסט.',
          'אם הדפדפן אינו יכול להציג תלת־ממד, מופיעה הודעה על כך; כל הבחירות ובקשת הצעת המחיר נשארות זמינות.',
          'לשדות הטפסים יש תווית גלויה; שדות חובה מסומנים בכוכבית, שמוסברת בראש הטופס. שגיאה נכתבת מתחת לשדה הנוגע בדבר, סיכום השגיאות מוקרא לקוראי מסך והמיקוד עובר לשדה הראשון שיש לתקן. לאחר השליחה, הודעת האישור מקבלת את המיקוד.',
          'אם המערכת שלכם מבקשת לצמצם תנועה, מעברי התצוגה התלת־ממדית מיידיים וללא תנופה, ובממשק אין מעברים מונפשים או גלילה מונפשת. שום דבר אינו מסתובב או זז מעצמו.',
          'לטקסטים יש ניגודיות של 4.5 ל־1 לפחות מול הרקע.',
          'אפשר לקרוא את הדפים ללא גלילה אופקית במסך ברוחב 320 פיקסלים ובהגדלה של 200%.',
          'לחצנים וקישורים שאינם בתוך הטקסט הם בגודל 24 × 24 פיקסלים לפחות.',
          'לתמונות יש טקסט חלופי.',
        ],
      },
      {
        id: 'clavier',
        title: 'ניווט במקלדת',
        list: [
          'Tab: מעבר לרכיב הבא; Shift + Tab: חזרה לרכיב הקודם.',
          'Enter: מעבר לקישור או הפעלת לחצן.',
          'רווח: הפעלת לחצן או סימון תיבה.',
          'חצים: החלפת הבחירה בקבוצה בעיצוב התכשיט (הרכב, מתכת, קראט הזהב, מקור); החץ השמאלי עובר לבחירה הבאה.',
          'תצוגה תלת־ממדית, כשהיא במיקוד: חצים לסיבוב, + ו־− להתקרבות ולהתרחקות, 0 לחזרה לתצוגת הפתיחה.',
        ],
      },
      {
        id: 'navigateurs',
        title: 'דפדפנים',
        paragraphs: [
          'אנחנו בודקים באופן אוטומטי את תפקוד האתר במנועים של Chrome,‏ Safari ו־Firefox, במחשב, בטלפון ובטאבלט מדומים. בדיקת הנגישות האוטומטית (ראו „מצב התאימות”) נעשית באותם מנועים. מומלץ להשתמש בגרסה עדכנית של דפדפנים אלה.',
        ],
      },
      {
        id: 'tiers',
        title: 'תוכן של אתרים אחרים',
        paragraphs: ['המקורות המצוטטים בשאלות הנפוצות, וכן וואטסאפ אם תבחרו לשלוח בו את פנייתכם, הם אתרים ושירותים של חברות אחרות: איננו יכולים להבטיח את נגישותם.'],
      },
      { id: 'exemptions', title: 'פטורים', paragraphs: ['איננו מסתמכים על פטור כלשהו.'] },
      { id: 'atelier', title: 'הגישה לסדנה', paragraphs: ['{premisesAccess}'] },
      {
        id: 'signaler',
        title: 'דיווח על בעיה ובקשת התאמה',
        paragraphs: [
          'אם דף מסוים מקשה עליכם, או אם אתם זקוקים להתאמה, פנו לאחראי הנגישות שלנו: {accessibilityContactName}, טלפון {accessibilityContactPhone}, דוא״ל {accessibilityContactEmail}.',
          'ציינו באיזה דף מדובר, מה אינו פועל, ואם אפשר, באיזה דפדפן ובאיזו טכנולוגיה מסייעת אתם משתמשים (קורא מסך, תוכנת הגדלה, שליטה קולית).',
          'נציע לכם בהקדם האפשרי דרך אחרת לקבל את השירות, למשל בקשת הצעת מחיר בטלפון או בדוא״ל, ונתקן את הליקוי בתוך זמן סביר, ולכל המאוחר 60 ימים מיום קבלת הפנייה, כפי שקובעות התקנות.',
        ],
      },
    ],
    linksTitle: 'מסמכי ייחוס',
    links: links('תקן ישראלי ת״י 5568 חלק 1 (ספטמבר 2023), PDF'),
  },
};

/** Libellés de la rubrique « État de conformité ». */
export const ACCESSIBILITY_STATUS_UI: Record<
  Locale,
  {
    checkedOn: string;
    conformance: string;
    levels: Record<Conformance, string>;
    methods: string;
    results: string;
    noResults: string;
    screenReaders: string;
    noScreenReaders: string;
    limits: string;
  }
> = {
  fr: {
    checkedOn: 'Dernière vérification',
    conformance: 'Conformité',
    levels: {
      'not-evaluated': 'Non évaluée : aucun audit complet n’a encore été fait.',
      partial: 'Partielle au niveau AA : des limites restent, listées ci-dessous, et la vérification n’est pas complète (contrôles automatiques seulement).',
      full: 'Conforme au niveau AA, d’après la dernière vérification.',
    },
    methods: 'Méthode',
    results: 'Résultats',
    noResults: 'Pas encore de résultat chiffré : aucun contrôle d’accessibilité outillé n’a été fait.',
    screenReaders: 'Lecteurs d’écran testés',
    noScreenReaders: 'Aucun pour l’instant.',
    limits: 'Limites connues',
  },
  en: {
    checkedOn: 'Last checked',
    conformance: 'Conformance',
    levels: {
      'not-evaluated': 'Not evaluated: no full audit has been carried out yet.',
      partial: 'Partial at level AA: some limitations remain, listed below, and the check is not complete (automated checks only).',
      full: 'Conformant with level AA, according to the latest check.',
    },
    methods: 'Method',
    results: 'Results',
    noResults: 'No measured results yet: no tool-based accessibility check has been carried out.',
    screenReaders: 'Screen readers tested',
    noScreenReaders: 'None yet.',
    limits: 'Known limitations',
  },
  he: {
    checkedOn: 'בדיקה אחרונה',
    conformance: 'תאימות',
    levels: {
      'not-evaluated': 'טרם נבדקה: עדיין לא בוצעה ביקורת מלאה.',
      partial: 'חלקית ברמה AA: נותרו מגבלות, המפורטות להלן, והבדיקה אינה מלאה (בדיקות אוטומטיות בלבד).',
      full: 'תואם לרמה AA, לפי הבדיקה האחרונה.',
    },
    methods: 'שיטה',
    results: 'תוצאות',
    noResults: 'אין עדיין תוצאות מדודות: לא בוצעה בדיקת נגישות בכלי ייעודי.',
    screenReaders: 'קוראי מסך שנבדקו',
    noScreenReaders: 'אין עדיין.',
    limits: 'מגבלות ידועות',
  },
};
