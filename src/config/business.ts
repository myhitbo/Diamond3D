import type { Locale } from '@/lib/configurator/schema';

/**
 * Informations sur l'entreprise affichées par les pages légales (déclaration d'accessibilité, politique de confidentialité).
 *
 * À REMPLIR AVANT LA VENTE (voir TODO.md et les questions 67 à 79 de `docs/QUESTIONS_ATELIER.md`). Tant qu'une valeur vaut
 * `null`, les pages affichent à sa place une marque visible : « [à compléter : …] », « [to be completed: …] », « [להשלמה: …] ».
 * Un seul endroit à remplir : les textes des pages (`src/content/legal/`) appellent ces valeurs par leur nom (`{legalName}`).
 *
 * Valeur : une chaîne (nom, numéro, téléphone, adresse e-mail : la même dans les trois langues) ou un texte par langue
 * (`{ fr, en, he }`) quand elle se traduit (adresse, accès au local, durée de conservation…). Les textes juridiques
 * (annulation, base du transfert hors d'Israël) sont à rédiger ou à valider par l'avocat.
 */
export type BusinessValue = string | Record<Locale, string> | null;

/**
 * Statut au regard de la TVA israélienne : le SEUL réglage à changer au passage en société.
 * - `exempt` : osek patour (עוסק פטור), qui ne facture pas de TVA (situation de l'atelier au 16/11/2026) ;
 * - `registered` : société ou osek mourché, prix TVA comprise.
 * Il décide de la mention de TVA de la FAQ (`prix`) et des pages légales (`{vatNotice}`). Au passage en société,
 * changer aussi `legalName` et `registrationNumber` (ח.פ.), et rouvrir le compte du prestataire de paiement au nom
 * de la société (voir TODO.md).
 */
export type VatStatus = 'exempt' | 'registered';
export const vatStatus: VatStatus = 'exempt';

/** TVA israélienne depuis le 1/1/2025 (18 %). */
export const VAT_RATE_PERCENT = 18;

/** Mention de TVA selon le statut, dans chaque langue. */
export const VAT_NOTICE: Record<VatStatus, Record<Locale, string>> = {
  exempt: {
    fr: 'L’atelier est osek patour (עוסק פטור) : il ne facture pas de TVA, aucune TVA ne s’ajoute au prix du devis.',
    en: 'The workshop is a VAT-exempt dealer (עוסק פטור): it does not charge VAT, and no VAT is added to the quoted price.',
    he: 'הסדנה היא עוסק פטור: היא אינה גובה מע״מ, ולא מתווסף מע״מ למחיר שבהצעת המחיר.',
  },
  registered: {
    fr: `Le prix du devis comprend la TVA (${VAT_RATE_PERCENT} %).`,
    en: `The quoted price includes VAT (${VAT_RATE_PERCENT}%).`,
    he: `המחיר שבהצעת המחיר כולל מע״מ (${VAT_RATE_PERCENT}%).`,
  },
};

export type BusinessField =
  | 'legalName'
  | 'registrationNumber'
  | 'address'
  | 'phone'
  | 'email'
  | 'accessibilityContactName'
  | 'accessibilityContactPhone'
  | 'accessibilityContactEmail'
  | 'premisesAccess'
  | 'emailProvider'
  | 'transferBasis'
  | 'retention'
  | 'hostLogRetention'
  | 'payment'
  | 'delivery'
  | 'vatNotice'
  | 'quoteValidity'
  | 'warranty'
  | 'cancellation';

export const BUSINESS: Record<BusinessField, BusinessValue> = {
  /** Nom légal de l'exploitant du site : raison sociale de la société, ou nom de l'entrepreneur en nom propre. */
  legalName: null,
  /** Numéro de société (ח.פ.) ou numéro d'entrepreneur (ע.מ.) ; pour un entrepreneur en nom propre, voir la question 40 de `docs/juridique/DOSSIER_AVOCAT_IL.md`. */
  registrationNumber: null,
  /** Adresse postale complète (immeuble et bureau à la Bourse du diamant, Ramat Gan). */
  address: null,
  /** Téléphone de l'atelier, format international (+972 …). */
  phone: null,
  /** Adresse e-mail publique : questions, demandes d'accès et de rectification des données. */
  email: null,
  /** Personne qui reçoit les signalements d'accessibilité (nommément) et ses coordonnées. */
  accessibilityContactName: null,
  accessibilityContactPhone: null,
  accessibilityContactEmail: null,
  /** Accès au local : entrée et contrôle de sécurité, ascenseur, toilettes, stationnement, transports, ou « pas d'accueil du public ». */
  premisesAccess: null,
  /** Fournisseur de la messagerie qui reçoit les demandes (QUOTE_TO) et envoie les e-mails (SMTP_HOST), et pays de ses serveurs. */
  emailProvider: null,
  /** Base juridique du transfert des données hors d'Israël (Vercel aux États-Unis, fournisseur d'e-mail) : à fixer par l'avocat. */
  transferBasis: null,
  /** Durée de conservation dans la messagerie de l'atelier : devis sans suite, commande, photos d'un bijou de famille. */
  retention: null,
  /**
   * Durée de conservation du journal des requêtes de Vercel, selon la formule souscrite (documentation « Runtime Logs », lue le
   * 15/11) : « 1 heure » en Hobby, « 1 jour » en Pro, « 3 jours » en Enterprise, « 30 jours » avec Observability Plus.
   * Formule du projet `jr-diamond` non vérifiée (le connecteur Vercel ne la donne pas) ; la formule Hobby est réservée à un
   * usage non commercial.
   */
  hostLogRetention: null,
  /** Moyens et modalités de paiement. */
  payment: null,
  /** Mode, délai et zone de livraison (Israël, France plus tard), retrait à l'atelier. */
  delivery: null,
  /** Mention de TVA : découle de `vatStatus`, ne pas la saisir ici. */
  vatNotice: VAT_NOTICE[vatStatus],
  /** Durée de validité d'un devis. */
  quoteValidity: null,
  /** Garantie : durée et couverture. */
  warranty: null,
  /** Droit d'annulation et ses exceptions (bijou fabriqué sur mesure) : rédaction de l'avocat. */
  cancellation: null,
};

/** Libellé de chaque information, affiché dans la marque « à compléter » tant qu'elle manque. */
export const BUSINESS_LABELS: Record<BusinessField, Record<Locale, string>> = {
  legalName: { fr: 'nom légal de l’entreprise', en: 'legal name of the business', he: 'שם העסק הרשמי' },
  registrationNumber: { fr: 'numéro ח.פ. ou ע.מ.', en: 'company or dealer number (ח.פ. or ע.מ.)', he: 'מספר ח.פ. או ע.מ.' },
  address: { fr: 'adresse postale', en: 'postal address', he: 'כתובת למשלוח דואר' },
  phone: { fr: 'téléphone', en: 'phone', he: 'טלפון' },
  email: { fr: 'adresse e-mail', en: 'email address', he: 'כתובת דוא״ל' },
  accessibilityContactName: { fr: 'nom du responsable de l’accessibilité', en: 'name of the accessibility contact', he: 'שם האחראי על הנגישות' },
  accessibilityContactPhone: { fr: 'son téléphone', en: 'their phone', he: 'הטלפון שלו' },
  accessibilityContactEmail: { fr: 'son adresse e-mail', en: 'their email address', he: 'כתובת הדוא״ל שלו' },
  premisesAccess: {
    fr: 'accès au local de l’atelier (entrée et contrôle de sécurité, ascenseur, toilettes, stationnement, transports) ou absence d’accueil du public, et solution de remplacement',
    en: 'access to the workshop premises (entrance and security check, lift, toilets, parking, public transport) or no public reception, and the alternative offered',
    he: 'הגישה למשרדי הסדנה (כניסה ובדיקה ביטחונית, מעלית, שירותים, חניה, תחבורה ציבורית) או ציון שאין קבלת קהל, והחלופה המוצעת',
  },
  emailProvider: { fr: 'fournisseur de la messagerie de l’atelier et pays de ses serveurs', en: 'the workshop’s email provider and the country of its servers', he: 'ספק הדוא״ל של הסדנה והמדינה שבה נמצאים שרתיו' },
  transferBasis: { fr: 'base juridique du transfert hors d’Israël, à fixer avec l’avocat', en: 'legal basis for the transfer outside Israel, to be set with the lawyer', he: 'הבסיס המשפטי להעברה אל מחוץ לישראל, ייקבע עם עורך הדין' },
  retention: { fr: 'durée de conservation des demandes (devis sans suite, commandes, photos)', en: 'how long requests are kept (quotes not followed up, orders, photos)', he: 'משך שמירת הפניות (הצעות מחיר שלא מומשו, הזמנות, תמונות)' },
  hostLogRetention: {
    fr: 'durée de conservation du journal, selon la formule Vercel souscrite (1 heure à 30 jours)',
    en: 'how long the log is kept, depending on the Vercel plan (1 hour to 30 days)',
    he: 'משך שמירת היומן, לפי חבילת Vercel (שעה אחת עד 30 ימים)',
  },
  payment: { fr: 'moyens et modalités de paiement', en: 'payment methods and terms', he: 'אמצעי התשלום ותנאיו' },
  delivery: { fr: 'mode et délai de livraison', en: 'delivery method and time', he: 'אופן המשלוח ומועדו' },
  vatNotice: { fr: 'mention de TVA', en: 'VAT notice', he: 'ציון המע״מ' },
  quoteValidity: { fr: 'durée de validité d’un devis', en: 'how long a quote remains valid', he: 'תוקף הצעת המחיר' },
  warranty: { fr: 'garantie', en: 'warranty', he: 'אחריות' },
  cancellation: { fr: 'droit d’annulation, rédigé par l’avocat', en: 'cancellation rights, to be drafted by the lawyer', he: 'זכות הביטול, בנוסח עורך הדין' },
};

/** Marque visible d'une information manquante. */
export const TO_COMPLETE: Record<Locale, (label: string) => string> = {
  fr: (label) => `[à compléter : ${label}]`,
  en: (label) => `[to be completed: ${label}]`,
  he: (label) => `[להשלמה: ${label}]`,
};

export const isBusinessField = (name: string): name is BusinessField => Object.hasOwn(BUSINESS, name);

/** Valeur d'une information dans une langue, ou sa marque « à compléter » (`missing`). */
export function businessText(field: BusinessField, locale: Locale): { text: string; missing: boolean } {
  const value = BUSINESS[field];
  if (value === null) return { text: TO_COMPLETE[locale](BUSINESS_LABELS[field][locale]), missing: true };
  return { text: typeof value === 'string' ? value : value[locale], missing: false };
}

/** Informations encore manquantes (tests, liste de contrôle avant la vente). */
export const missingBusinessFields = (): BusinessField[] => (Object.keys(BUSINESS) as BusinessField[]).filter((f) => BUSINESS[f] === null);
