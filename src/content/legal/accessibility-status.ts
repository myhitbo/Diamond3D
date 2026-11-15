/**
 * État de conformité de la déclaration d'accessibilité (rubrique « État de conformité » de `/fr/accessibilite`).
 *
 * À METTRE À JOUR après chaque vérification : date, résultat, méthodes, résultats chiffrés, lecteurs d'écran, limites.
 * Langue simple, comme le demande le guide de la Commission pour l'égalité des personnes handicapées : « les vidéos n'ont pas
 * de sous-titres » plutôt que « critère 1.2.2 non respecté ». Une limite corrigée se retire de la liste ; une limite qui demeure
 * dit quelle solution de remplacement nous proposons. Chaque texte existe dans les trois langues.
 * Changer aussi `ACCESSIBILITY_UPDATED` (`accessibility.ts`), date de mise à jour de la déclaration.
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

const view = (l: (typeof LOCALES)[number]) => DICTIONARIES[l].views;
const summary = (l: (typeof LOCALES)[number]) => DICTIONARIES[l].summary;

export const ACCESSIBILITY_STATUS: AccessibilityStatus = {
  checkedOn: '2026-11-15',
  conformance: 'not-evaluated',
  methods: [
    {
      fr: 'Relecture du code des pages : titres, étiquettes des champs de formulaire, langue et sens d’écriture de chaque page. Ce n’est pas un audit.',
      en: 'Review of the page code: headings, form field labels, language and text direction of each page. This is not an audit.',
      he: 'בדיקה של קוד הדפים: כותרות, תוויות של שדות הטפסים, שפת הדף וכיוון הכתיבה. זו אינה ביקורת נגישות.',
    },
    {
      fr: 'Tests automatisés du fonctionnement du site (Playwright), avec les moteurs de Chrome, de Safari et de Firefox. Ils vérifient au passage que les champs des formulaires ont une étiquette et que le message de confirmation d’envoi reçoit le focus, mais ne mesurent pas l’accessibilité dans son ensemble.',
      en: 'Automated tests of how the site works (Playwright), with the Chrome, Safari and Firefox engines. Along the way they check that form fields have a label and that the confirmation message receives focus, but they do not measure accessibility as a whole.',
      he: 'בדיקות אוטומטיות של תפקוד האתר (Playwright) במנועים של Chrome,‏ Safari ו־Firefox. בין השאר הן בודקות שלכל שדה בטופס יש תווית ושהודעת האישור לאחר השליחה מקבלת את המיקוד, אך אינן בודקות את הנגישות כולה.',
    },
  ],
  results: [],
  screenReaders: [],
  limits: [
    {
      fr: 'Aucun audit d’accessibilité complet n’a encore été fait : ni contrôle automatique (par exemple avec axe-core), ni contrôle manuel complet, ni test avec un lecteur d’écran. D’autres défauts peuvent donc exister : signalez-les-nous.',
      en: 'No full accessibility audit has been carried out yet: no automated check (for example with axe-core), no full manual review and no screen reader test. Other problems may therefore exist: please report them to us.',
      he: 'טרם בוצעה ביקורת נגישות מלאה: לא בדיקה אוטומטית (למשל באמצעות axe-core), לא בדיקה ידנית מלאה ולא בדיקה עם קורא מסך. ייתכן אפוא שקיימות בעיות נוספות: נשמח אם תדווחו לנו עליהן.',
    },
    {
      fr: `La vue 3D du bijou se fait tourner à la souris ou au doigt, pas au clavier, et un lecteur d’écran n’en lit qu’une description générale. En remplacement : tous les choix se font avec des boutons, les boutons «\u00a0${view('fr').hero}\u00a0», «\u00a0${view('fr').top}\u00a0», «\u00a0${view('fr').side}\u00a0» et «\u00a0${view('fr').front}\u00a0» changent l’angle de vue, et le récapitulatif «\u00a0${summary('fr')}\u00a0» décrit la bague en texte.`,
      en: `The 3D view of the piece is rotated with a mouse or a finger, not with the keyboard, and a screen reader only reads a general description of it. Instead: every choice is made with buttons, the “${view('en').hero}”, “${view('en').top}”, “${view('en').side}” and “${view('en').front}” buttons change the viewing angle, and the “${summary('en')}” summary describes the ring in text.`,
      he: `את התצוגה התלת־ממדית של התכשיט מסובבים בעכבר או באצבע, לא במקלדת, וקורא מסך מקריא רק תיאור כללי שלה. כחלופה: כל הבחירות נעשות בלחצנים, הלחצנים „${view('he').hero}”, „${view('he').top}”, „${view('he').side}” ו„${view('he').front}” משנים את זווית הצפייה, והסיכום „${summary('he')}” מתאר את הטבעת בטקסט.`,
    },
    {
      fr: 'La version hébraïque du site est une traduction automatique, pas encore relue par un locuteur natif.',
      en: 'The Hebrew version of the site is a machine translation, not yet reviewed by a native speaker.',
      he: 'הגרסה העברית של האתר היא תרגום ממוחשב שטרם נבדק על ידי דובר עברית.',
    },
  ],
};
