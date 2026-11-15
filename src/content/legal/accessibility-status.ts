/**
 * État de conformité de la déclaration d'accessibilité (rubrique « État de conformité » de `/fr/accessibilite`).
 *
 * À METTRE À JOUR après chaque vérification : date, résultat, méthodes, résultats chiffrés, lecteurs d'écran, limites.
 * Langue simple, comme le demande le guide de la Commission pour l'égalité des personnes handicapées : « les vidéos n'ont pas
 * de sous-titres » plutôt que « critère 1.2.2 non respecté ». Une limite corrigée se retire de la liste ; une limite qui demeure
 * dit quelle solution de remplacement nous proposons. Chaque texte existe dans les trois langues.
 * Changer aussi `ACCESSIBILITY_UPDATED` (`accessibility.ts`), date de mise à jour de la déclaration.
 *
 * Vérification du 15 novembre 2026 : `tests/e2e/accessibility.spec.ts` (axe-core et contrôles complémentaires), tout vert sur
 * Chromium (ordinateur et téléphone simulés), WebKit (iPhone et iPad simulés, sans le parcours complet à la touche Tab) et
 * Firefox (pages sans 3D). Les chiffres ci-dessous en viennent : à
 * recompter si la liste des pages du test change. Aucun test avec un vrai lecteur d'écran : ne rien écrire dans `screenReaders`
 * tant qu'un tel test n'a pas été fait et daté.
 */
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES } from '@/lib/configurator/schema';
import type { Trilingual } from './types';

/** `not-evaluated` : aucun audit ; `partial` : audit fait, des écarts restent ; `full` : audit fait, aucun écart connu. */
export type Conformance = 'not-evaluated' | 'partial' | 'full';

export type AccessibilityStatus = {
  /** Date de la dernière vérification, AAAA-MM-JJ. */
  checkedOn: string;
  conformance: Conformance;
  /** Ce qui a été fait lors de la dernière vérification, une ligne par méthode. */
  methods: Trilingual[];
  /** Résultats chiffrés (par exemple : « axe-core : aucune violation sur les N pages, dans les trois langues »). */
  results: Trilingual[];
  /** Lecteurs d'écran et navigateurs avec lesquels le site a été testé (par exemple « NVDA 2026.1 et Firefox, Windows 11 »). */
  screenReaders: string[];
  /** Limites connues, avec la solution de remplacement proposée. */
  limits: Trilingual[];
};

/** Version d'axe-core utilisée (`@axe-core/playwright`, `package.json`). */
export const AXE_VERSION = '4.14.0';

const dict = (l: (typeof LOCALES)[number]) => DICTIONARIES[l];

export const ACCESSIBILITY_STATUS: AccessibilityStatus = {
  checkedOn: '2026-11-15',
  // Partielle : les contrôles automatiques ne trouvent plus de défaut, mais des limites restent (ci-dessous) et la vérification
  // n'est pas complète (ni audit manuel, ni lecteur d'écran). Ne passer à « full » qu'après ces deux vérifications.
  conformance: 'partial',
  methods: [
    {
      fr: `Contrôle automatique avec axe-core ${AXE_VERSION} (règles WCAG 2.0, 2.1 et 2.2, niveaux A et AA), dans Chromium 153 (le moteur de Chrome et d’Edge) sur un ordinateur et sur un téléphone simulés, dans WebKit (le moteur de Safari) sur un iPhone et un iPad simulés, et dans Firefox 157 pour les pages sans 3D. Pages contrôlées dans chaque langue : accueil, configurateur (3D chargée, demande de devis ouverte, puis avec des erreurs de saisie), bijou de famille (formulaire vide, puis avec des erreurs), questions fréquentes (réponses dépliées), liste des guides et chacun des six guides, dont celui de la taille de doigt avec son tableau (français et anglais), déclaration d’accessibilité, politique de confidentialité et page d’erreur 404.`,
      en: `Automated check with axe-core ${AXE_VERSION} (WCAG 2.0, 2.1 and 2.2 rules, levels A and AA), in Chromium 153 (the engine of Chrome and Edge) on a simulated computer and phone, in WebKit (the engine of Safari) on a simulated iPhone and iPad, and in Firefox 157 for the pages without 3D. Pages checked in each language: home, configurator (3D loaded, quote request open, then with input errors), family jewellery (empty form, then with errors), FAQ (answers expanded), the list of guides and each of the six guides, including the ring size guide with its table (French and English), accessibility statement, privacy policy and the 404 error page.`,
      he: `בדיקה אוטומטית באמצעות axe-core ${AXE_VERSION} (כללי WCAG 2.0,‏ 2.1 ו־2.2, רמות A ו־AA), בדפדפן Chromium 153 (המנוע של Chrome ו־Edge) במחשב ובטלפון מדומים, ב־WebKit (המנוע של Safari) ב־iPhone וב־iPad מדומים, וב־Firefox 157 בדפים ללא תלת־ממד. הדפים שנבדקו בכל שפה: דף הבית, עיצוב התכשיט (לאחר טעינת התלת־ממד, עם טופס הצעת המחיר פתוח, ואז עם שגיאות הקלדה), תכשיט משפחתי (טופס ריק, ואז עם שגיאות), שאלות נפוצות (כל התשובות פתוחות), רשימת המדריכים וכל אחד מששת המדריכים, ובהם מדריך מידת הטבעת עם הטבלה (בצרפתית ובאנגלית), הצהרת הנגישות, מדיניות הפרטיות ודף השגיאה 404.`,
    },
    {
      fr: 'Contrôles automatisés complémentaires, qu’axe-core ne fait pas : parcours de chaque page à la touche Tab (ordre, focus visible, focus jamais caché par la vue 3D, aucun piège), vue 3D et groupes de choix au clavier, demande de devis faite entièrement au clavier, annonce des erreurs et de la confirmation des formulaires, affichage sur 320 px de large et avec un zoom à 200 % sans défilement horizontal, réduction des animations, description en texte de la vue 3D, taille des boutons et des liens (24 × 24 px au moins), sens de droite à gauche en hébreu.',
      en: 'Additional automated checks that axe-core does not do: going through every page with the Tab key (order, visible focus, focus never hidden by the 3D view, no keyboard trap), the 3D view and choice groups with the keyboard, a quote request made entirely with the keyboard, announcement of form errors and confirmation, display at 320 px wide and at 200% zoom with no horizontal scrolling, reduced motion, text description of the 3D view, size of buttons and links (at least 24 × 24 px), right-to-left reading in Hebrew.',
      he: 'בדיקות אוטומטיות נוספות ש־axe-core אינו עושה: מעבר בכל דף במקש Tab (סדר, מיקוד גלוי, מיקוד שאינו מוסתר מאחורי התצוגה התלת־ממדית, ללא מלכודת מקלדת), התצוגה התלת־ממדית וקבוצות הבחירה במקלדת, בקשת הצעת מחיר במקלדת בלבד, הקראת שגיאות ואישור בטפסים, תצוגה ברוחב 320 פיקסלים ובהגדלה של 200% ללא גלילה אופקית, צמצום תנועה, תיאור טקסטואלי של התצוגה התלת־ממדית, גודל לחצנים וקישורים (24 × 24 פיקסלים לפחות), כיוון מימין לשמאל בעברית.',
    },
    {
      fr: 'Relecture du code des pages : titres, étiquettes des champs, langue et sens d’écriture de chaque page.',
      en: 'Review of the page code: headings, form field labels, language and text direction of each page.',
      he: 'בדיקה של קוד הדפים: כותרות, תוויות של שדות הטפסים, שפת הדף וכיוון הכתיבה.',
    },
  ],
  results: [
    {
      fr: 'Avant corrections, axe-core relevait trois défauts : des textes dorés trop pâles sur presque toutes les pages (contraste de 3,4 pour 1, au lieu de 4,5 pour 1 au moins), un lien « FAQ » dont le nom lu par un lecteur d’écran différait du texte affiché sur téléphone, et des liens de sources trop petits et trop rapprochés. Tous trois sont corrigés.',
      en: 'Before fixes, axe-core found three problems: gold text too pale on almost every page (contrast of 3.4 to 1 instead of at least 4.5 to 1), an “FAQ” link whose name read by screen readers differed from the text shown on phones, and source links too small and too close together. All three are fixed.',
      he: 'לפני התיקונים, axe-core מצא שלוש בעיות: טקסט זהוב בהיר מדי כמעט בכל הדפים (ניגודיות של 3.4 ל־1 במקום 4.5 ל־1 לפחות), קישור „FAQ” בגרסה הצרפתית ששמו כפי שהוא מוקרא בקורא מסך היה שונה מהטקסט המוצג בטלפון, וקישורים למקורות קטנים וצפופים מדי. שלושתן תוקנו.',
    },
    {
      fr: 'Après corrections : aucun défaut relevé par axe-core sur les 44 vues contrôlées (32 pages et 12 états de formulaire ou du configurateur, dans les trois langues), sur ordinateur, téléphone et tablette, avec les trois moteurs.',
      en: 'After fixes: no problem found by axe-core on the 44 views checked (32 pages and 12 states of the forms or the configurator, in the three languages), on computer, phone and tablet, with all three engines.',
      he: 'לאחר התיקונים: axe-core לא מצא אף בעיה ב־44 התצוגות שנבדקו (32 דפים ו־12 מצבים של הטפסים או של עיצוב התכשיט, בשלוש השפות), במחשב, בטלפון ובטאבלט, בשלושת המנועים.',
    },
    {
      fr: 'Les contrôles complémentaires et la relecture du code ont révélé, et nous avons corrigé : sur téléphone, des boutons qui recevaient le focus restaient cachés derrière la vue 3D ; quelques boutons et liens de moins de 24 px ; des erreurs de formulaire qui ne s’affichaient que dans une bulle passagère du navigateur ; une vue 3D qu’on ne pouvait pas faire tourner au clavier ; un groupe de boutons dont le nom restait en français dans les autres langues.',
      en: 'The additional checks and the code review revealed, and we fixed: on phones, buttons that received focus stayed hidden behind the 3D view; a few buttons and links smaller than 24 px; form errors that only appeared in a short-lived browser bubble; a 3D view that could not be rotated with the keyboard; a group of buttons whose name stayed in French in the other languages.',
      he: 'הבדיקות הנוספות ובדיקת הקוד חשפו, ותיקנו: בטלפון, לחצנים שקיבלו מיקוד נשארו מוסתרים מאחורי התצוגה התלת־ממדית; כמה לחצנים וקישורים קטנים מ־24 פיקסלים; שגיאות בטפסים שהופיעו רק בבועה חולפת של הדפדפן; תצוגה תלת־ממדית שלא ניתן היה לסובב במקלדת; קבוצת לחצנים ששמה נשאר בצרפתית בשפות האחרות.',
    },
  ],
  screenReaders: [],
  limits: [
    {
      fr: 'Nos contrôles sont automatiques : ils ne couvrent qu’une partie des règles. Aucun audit manuel complet n’a encore été fait, et le site n’a pas encore été essayé avec un lecteur d’écran (NVDA, JAWS, VoiceOver ou TalkBack) ni par des personnes handicapées. Nous ne pouvons donc pas affirmer que le site est entièrement conforme. Si quelque chose vous gêne, signalez-le-nous : nous vous proposerons une autre façon d’obtenir le service.',
      en: 'Our checks are automated: they cover only part of the rules. No full manual audit has been carried out yet, and the site has not yet been tried with a screen reader (NVDA, JAWS, VoiceOver or TalkBack) or by people with disabilities. We therefore cannot claim that the site fully conforms. If anything gets in your way, please tell us: we will offer you another way to get the service.',
      he: 'הבדיקות שלנו אוטומטיות: הן מכסות רק חלק מהכללים. טרם בוצעה ביקורת ידנית מלאה, והאתר טרם נוסה עם קורא מסך (NVDA,‏ JAWS,‏ VoiceOver או TalkBack) או על ידי אנשים עם מוגבלות. לכן איננו יכולים לומר שהאתר תואם במלואו. אם משהו מפריע לכם, ספרו לנו: נציע לכם דרך אחרת לקבל את השירות.',
    },
    {
      fr: `La vue 3D est une image : un lecteur d’écran en lit une description en texte (pièce, métal, pierres, origine), mise à jour à chaque choix, mais les reflets et le volume du bijou ne se traduisent pas en mots. Au clavier, elle tourne avec les flèches et se rapproche avec + et − quand elle a le focus ; avec un lecteur d’écran en mode lecture, les flèches servent d’abord à lire la page. Les boutons « ${dict('fr').views.top} », « ${dict('fr').views.side} » et « ${dict('fr').views.front} » changent l’angle de vue, le récapitulatif « ${dict('fr').summary} » décrit la bague, et l’atelier répond à toute question dans la demande de devis.`,
      en: `The 3D view is an image: a screen reader reads a text description of it (piece, metal, stones, origin), updated with every choice, but the reflections and volume of the piece do not translate into words. With the keyboard, it rotates with the arrow keys and zooms with + and − when it has focus; with a screen reader in browse mode, the arrow keys first serve to read the page. The “${dict('en').views.top}”, “${dict('en').views.side}” and “${dict('en').views.front}” buttons change the viewing angle, the “${dict('en').summary}” summary describes the ring, and the workshop answers any question in the quote request.`,
      he: `התצוגה התלת־ממדית היא תמונה: קורא מסך מקריא תיאור טקסטואלי שלה (פריט, מתכת, אבנים, מקור), המתעדכן בכל בחירה, אך את ההשתקפויות ואת נפח התכשיט אי אפשר לתרגם למילים. במקלדת, כשהתצוגה במיקוד, היא מסתובבת בחצים ומתקרבת ב־+ וב־−; עם קורא מסך במצב קריאה, החצים משמשים קודם כול לקריאת הדף. הלחצנים „${dict('he').views.top}”, „${dict('he').views.side}” ו„${dict('he').views.front}” משנים את זווית הצפייה, הסיכום „${dict('he').summary}” מתאר את הטבעת, והסדנה עונה על כל שאלה בבקשת הצעת המחיר.`,
    },
    {
      fr: 'Les titres des sources citées dans les guides et les questions fréquentes sont souvent en anglais, sans que leur langue soit indiquée : un lecteur d’écran peut les prononcer comme du français ou de l’hébreu.',
      en: 'Some titles of the sources cited in the FAQ are in French, without their language being marked: a screen reader may pronounce them as English.',
      he: 'כותרות המקורות המצוטטים בשאלות הנפוצות הן לרוב באנגלית, בלי שצוינה שפתן: קורא מסך עשוי להקריא אותן כאילו נכתבו בעברית.',
    },
    {
      fr: 'La version hébraïque du site est une traduction automatique, pas encore relue par un locuteur natif.',
      en: 'The Hebrew version of the site is a machine translation, not yet reviewed by a native speaker.',
      he: 'הגרסה העברית של האתר היא תרגום ממוחשב שטרם נבדק על ידי דובר עברית.',
    },
  ],
};
