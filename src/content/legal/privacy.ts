/**
 * Politique de confidentialité (`/fr/confidentialite`, `/en/privacy`, `/he/privacy`). Règles de rédaction : `types.ts`.
 *
 * Décrit ce que fait le code, relu le 15/11 : formulaires `src/lib/quote/request.ts` et `transformation.ts` (champs, limites
 * des photos), routes `src/app/api/devis` et `src/app/api/transformation` (e-mail SMTP à l'atelier, photos jointes, aucune
 * écriture sur disque), `rateLimit.ts` (adresse IP en mémoire, 5 envois en 10 minutes), `whatsapp.ts` (lien wa.me), layout
 * (Speed Insights seulement sur Vercel, polices auto-hébergées), aucun cookie ni stockage du navigateur dans `src`.
 * Toute modification de ces fichiers qui change ce que le site recueille ou transmet se reporte ici, dans les trois langues.
 *
 * Contenu exigé : notice de l'article 11 de la loi israélienne sur la protection de la vie privée (caractère facultatif et
 * conséquence d'un refus, finalité, responsable, destinataires, droits d'accès et de rectification, articles 13 et 14) et
 * informations de vente à distance de l'article 14ג(א) de la loi sur la protection du consommateur.
 */
import type { Locale } from '@/lib/configurator/schema';
import type { LegalLink, LegalPage } from './types';

/** Date de mise à jour de la politique, AAAA-MM-JJ : à changer à chaque modification. */
export const PRIVACY_UPDATED = '2026-11-15';

const links = (vercel: string, speed: string, whatsapp: string): LegalLink[] => [
  { label: vercel, url: 'https://vercel.com/legal/privacy-notice' },
  { label: speed, url: 'https://vercel.com/docs/speed-insights/privacy-policy' },
  { label: whatsapp, url: 'https://www.whatsapp.com/legal/privacy-policy' },
];

export const PRIVACY: Record<Locale, LegalPage> = {
  fr: {
    title: 'Politique de confidentialité',
    lede: 'Ce que deviennent les informations que vous nous confiez sur ce site : ce qui est recueilli, pourquoi, qui le reçoit, combien de temps, et vos droits.',
    badge: 'Brouillon · à valider par un avocat',
    updated: (date) => `Politique mise à jour le ${date}.`,
    sections: [
      {
        id: 'responsable',
        title: 'Qui est responsable de vos données',
        paragraphs: [
          'Le site JR Diamond est exploité par {legalName} ({registrationNumber}), {address}. C’est l’atelier qui reçoit vos demandes et décide de leur usage.',
          'Pour toute question sur vos données : {email} ou {phone}.',
        ],
      },
      {
        id: 'en-bref',
        title: 'En bref',
        list: [
          'Nous ne recueillons que ce que vous écrivez dans un formulaire de demande, et seulement pour vous répondre.',
          'Votre demande nous arrive par e-mail. Le site n’a pas de base de données et ne garde aucune copie de vos messages ni de vos photos.',
          'Le site ne dépose aucun cookie et n’affiche aucune publicité. Il mesure de façon anonyme la vitesse d’affichage de ses pages.',
        ],
      },
      {
        id: 'donnees',
        title: 'Ce que nous recueillons',
        paragraphs: [
          'Le site a deux formulaires. Les remplir est facultatif, mais les champs marqués d’un astérisque et la case d’accord sont nécessaires : sans eux, la demande ne peut pas partir. Vous pouvez aussi nous écrire ou nous appeler directement (voir plus haut).',
        ],
        list: [
          'Demande de devis, depuis le configurateur : nom et e-mail (obligatoires) ; téléphone, taille de doigt, message et photos (facultatifs) ; votre accord, facultatif, pour la publication de photos et de vidéos de la fabrication de votre bijou, sans votre nom. La configuration choisie (modèle, composition, métal, pierres, origine du diamant) et la langue de la page sont jointes à la demande.',
          'Transformation d’un bijou de famille : nom, e-mail et description du bijou (obligatoires) ; téléphone, souhait et photos (facultatifs). La langue de la page est jointe à la demande.',
          'Photos : 3 au plus, aux formats JPEG, PNG, WebP ou HEIC, 3 Mo chacune et 4 Mo en tout. Leur nom de fichier est transmis avec elles. Photographiez de préférence le bijou seul, ou votre main, sans votre visage.',
          'Dans les deux formulaires, une case à cocher obligatoire recueille votre accord pour que vos coordonnées servent uniquement à répondre à votre demande.',
        ],
      },
      {
        id: 'usage',
        title: 'À quoi elles servent',
        paragraphs: [
          'À répondre à votre demande : établir un devis, étudier la transformation de votre bijou et échanger avec vous à ce sujet.',
          'Les photos et vidéos de la fabrication de votre bijou ne sont publiées que si vous avez coché la case prévue, et sans votre nom. Pour retirer cet accord, écrivez à {email}.',
        ],
      },
      {
        id: 'acheminement',
        title: 'Comment votre demande nous parvient',
        paragraphs: [
          'Votre demande est envoyée par e-mail à l’atelier, vos photos en pièces jointes. L’e-mail reprend tout ce que vous avez saisi, ainsi que le nom et la taille de chaque photo et l’adresse de la page d’où vous écrivez. Quand l’atelier répond, il vous écrit directement à votre adresse.',
          'Le site lui-même n’enregistre rien : ni vos messages ni vos photos ne sont stockés sur ses serveurs ou dans une base de données. Les photos ne restent en mémoire que le temps de l’envoi.',
          'Vos demandes sont ensuite conservées dans la messagerie de l’atelier, chez son fournisseur : {emailProvider}.',
          'Pour limiter les envois répétés, le serveur garde en mémoire votre adresse IP et l’heure de vos envois : 5 demandes au plus en 10 minutes, tous formulaires confondus. Ces données ne sont ni écrites sur disque ni transmises ; elles s’effacent au redémarrage du serveur.',
          'Si un envoi échoue, un message d’erreur technique est écrit dans le journal de l’hébergeur.',
        ],
      },
      {
        id: 'whatsapp',
        title: 'Si vous choisissez WhatsApp',
        paragraphs: [
          'Quand il est proposé, le bouton «\u00a0Envoyer sur WhatsApp\u00a0» ouvre une conversation avec l’atelier, avec un message déjà rédigé à partir de ce que vous avez saisi : configuration ou description du bijou, souhait, taille de doigt, nom, message et adresse de la page. Ce texte est transmis à WhatsApp, service de la société Meta, dès l’ouverture du lien. Rien n’est envoyé à l’atelier tant que vous n’appuyez pas sur Envoyer, et vous joignez vous-même vos photos. La conversation relève ensuite des conditions de WhatsApp.',
        ],
      },
      {
        id: 'hebergement',
        title: 'Hébergement et transfert hors d’Israël',
        paragraphs: [
          'Le site est hébergé par Vercel Inc., société américaine. Les formulaires sont traités par ses serveurs situés aux États-Unis, dans la région de Washington. Les messages d’erreur du site restent dans le journal de Vercel de 1 heure à 30 jours, selon la formule d’hébergement. Vercel traite aussi, pour son propre compte, des données techniques liées à son service, selon sa politique de confidentialité.',
          'Vos données quittent donc Israël : vers les États-Unis (Vercel) et vers le pays des serveurs du fournisseur de messagerie. Base de ce transfert : {transferBasis}.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies et mesure de vitesse',
        paragraphs: [
          'Le site ne dépose aucun cookie et n’utilise pas le stockage de votre navigateur. Les polices de caractères, les images et le modèle 3D sont servis par le site lui-même : pour les afficher, votre navigateur ne contacte aucun autre service.',
          'Sur le site en ligne, l’outil Speed Insights de Vercel mesure la vitesse d’affichage des pages. Selon Vercel, cette mesure est anonyme : elle n’est liée ni à un visiteur ni à une adresse IP. Elle relève la page, le navigateur, le type d’appareil et son système, le pays, le type de connexion et des indicateurs de vitesse.',
        ],
      },
      { id: 'conservation', title: 'Combien de temps', paragraphs: ['Le site ne conserve rien. Dans la messagerie de l’atelier : {retention}.'] },
      { id: 'securite', title: 'Sécurité', paragraphs: ['Les échanges entre votre navigateur et le site sont chiffrés (HTTPS).'] },
      {
        id: 'droits',
        title: 'Vos droits',
        paragraphs: ['La loi israélienne de 1981 sur la protection de la vie privée, modifiée par l’amendement 13 entré en vigueur le 14 août 2025, vous donne notamment :'],
        list: [
          'le droit de consulter les informations qui vous concernent, en hébreu, en arabe ou en anglais, dans les 30 jours suivant votre demande ;',
          'le droit de demander la correction ou la suppression d’une information inexacte, incomplète, peu claire ou périmée.',
        ],
        after: ['Pour exercer ces droits, écrivez à {email} ou par courrier à {address}.'],
      },
      {
        id: 'vendeur',
        title: 'Le vendeur et la vente à distance',
        paragraphs: ['La loi israélienne sur la protection du consommateur demande ces informations pour une vente à distance :'],
        list: [
          'Vendeur : {legalName}, {registrationNumber}.',
          'Adresse : {address}. Téléphone : {phone}. E-mail : {email}.',
          'Produits : bijoux fabriqués à la commande par l’atelier. Leurs caractéristiques figurent sur la page de chaque modèle et dans le devis.',
          'Prix : sur devis. Aucun prix n’est affiché sur le site ; il figure dans le devis.',
          'Validité du devis : {quoteValidity}.',
          'Paiement : {payment}.',
          'Fabrication : 14 jours ouvrés. Livraison : {delivery}.',
          'Garantie : {warranty}. La première mise à taille est offerte.',
          'Annulation : {cancellation}.',
        ],
      },
    ],
    linksTitle: 'Politiques de nos prestataires',
    links: links('Vercel, politique de confidentialité (en anglais)', 'Vercel, confidentialité de Speed Insights (en anglais)', 'WhatsApp, politique de confidentialité'),
  },
  en: {
    title: 'Privacy policy',
    lede: 'What happens to the information you give us on this site: what is collected, why, who receives it, for how long, and your rights.',
    badge: 'Draft · to be reviewed by a lawyer',
    updated: (date) => `Policy updated on ${date}.`,
    sections: [
      {
        id: 'responsable',
        title: 'Who is responsible for your data',
        paragraphs: [
          'The JR Diamond site is operated by {legalName} ({registrationNumber}), {address}. The workshop receives your requests and decides how they are used.',
          'For any question about your data: {email} or {phone}.',
        ],
      },
      {
        id: 'en-bref',
        title: 'In short',
        list: [
          'We only collect what you write in a request form, and only to answer you.',
          'Your request reaches us by email. The site has no database and keeps no copy of your messages or photos.',
          'The site sets no cookies and shows no advertising. It measures, anonymously, how fast its pages load.',
        ],
      },
      {
        id: 'donnees',
        title: 'What we collect',
        paragraphs: [
          'The site has two forms. Filling them in is up to you, but the fields marked with an asterisk and the consent box are needed: without them, the request cannot be sent. You can also write to us or call us directly (see above).',
        ],
        list: [
          'Quote request, from the configurator: name and email (required); phone, ring size, message and photos (optional); your optional agreement to the publication of photos and videos of your piece being made, without your name. The chosen configuration (model, composition, metal, stones, diamond origin) and the page language are attached to the request.',
          'Family jewellery transformation: name, email and description of the piece (required); phone, wish and photos (optional). The page language is attached to the request.',
          'Photos: up to 3, in JPEG, PNG, WebP or HEIC format, 3 MB each and 4 MB in total. Each photo’s file name is sent with it. Preferably photograph the piece alone, or your hand, without your face.',
          'On both forms, a required tick box records your agreement that your details are used only to answer your request.',
        ],
      },
      {
        id: 'usage',
        title: 'What it is used for',
        paragraphs: [
          'To answer your request: prepare a quote, study the transformation of your piece and correspond with you about it.',
          'Photos and videos of your piece being made are only published if you ticked the box for it, and without your name. To withdraw this agreement, write to {email}.',
        ],
      },
      {
        id: 'acheminement',
        title: 'How your request reaches us',
        paragraphs: [
          'Your request is sent to the workshop by email, with your photos attached. The email contains everything you entered, plus the name and size of each photo and the address of the page you wrote from. When the workshop replies, it writes to your address directly.',
          'The site itself records nothing: neither your messages nor your photos are stored on its servers or in a database. Photos are only held in memory while they are being sent.',
          'Your requests are then kept in the workshop’s mailbox, with its email provider: {emailProvider}.',
          'To prevent repeated sending, the server keeps your IP address and the times of your requests in memory: at most 5 requests in 10 minutes, across both forms. This data is neither written to disk nor passed on; it is erased when the server restarts.',
          'If sending fails, a technical error message is written to the host’s log.',
        ],
      },
      {
        id: 'whatsapp',
        title: 'If you choose WhatsApp',
        paragraphs: [
          'When it is offered, the “Send on WhatsApp” button opens a conversation with the workshop, with a message already written from what you entered: configuration or description of the piece, wish, ring size, name, message and page address. This text is passed to WhatsApp, a service of Meta, as soon as the link opens. Nothing is sent to the workshop until you press Send, and you attach your photos yourself. The conversation is then governed by WhatsApp’s terms.',
        ],
      },
      {
        id: 'hebergement',
        title: 'Hosting and transfer outside Israel',
        paragraphs: [
          'The site is hosted by Vercel Inc., an American company. The forms are processed on its servers in the United States, in the Washington area. The site’s error messages stay in Vercel’s log for 1 hour to 30 days, depending on the hosting plan. Vercel also processes, on its own behalf, technical data related to its service, under its privacy policy.',
          'Your data therefore leaves Israel: to the United States (Vercel) and to the country of the email provider’s servers. Basis for this transfer: {transferBasis}.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies and speed measurement',
        paragraphs: [
          'The site sets no cookies and does not use your browser’s storage. Fonts, images and the 3D model are served by the site itself: your browser contacts no other service to display them.',
          'On the live site, Vercel’s Speed Insights tool measures how fast pages load. According to Vercel, this measurement is anonymous: it is tied neither to a visitor nor to an IP address. It records the page, the browser, the type of device and its operating system, the country, the connection type and speed indicators.',
        ],
      },
      { id: 'conservation', title: 'How long', paragraphs: ['The site keeps nothing. In the workshop’s mailbox: {retention}.'] },
      { id: 'securite', title: 'Security', paragraphs: ['Exchanges between your browser and the site are encrypted (HTTPS).'] },
      {
        id: 'droits',
        title: 'Your rights',
        paragraphs: ['The Israeli Protection of Privacy Law of 1981, as amended by Amendment 13, in force since 14 August 2025, gives you in particular:'],
        list: [
          'the right to see the information about you, in Hebrew, Arabic or English, within 30 days of your request;',
          'the right to ask for information that is inaccurate, incomplete, unclear or out of date to be corrected or deleted.',
        ],
        after: ['To exercise these rights, write to {email} or by post to {address}.'],
      },
      {
        id: 'vendeur',
        title: 'The seller and distance selling',
        paragraphs: ['Israeli consumer protection law requires this information for a distance sale:'],
        list: [
          'Seller: {legalName}, {registrationNumber}.',
          'Address: {address}. Phone: {phone}. Email: {email}.',
          'Products: jewellery made to order by the workshop. Their characteristics are given on each model’s page and in the quote.',
          'Price: on request. No price is shown on the site; it is given in the quote.',
          'Quote validity: {quoteValidity}.',
          'Payment: {payment}.',
          'Production: 14 business days. Delivery: {delivery}.',
          'Warranty: {warranty}. The first resizing is free.',
          'Cancellation: {cancellation}.',
        ],
      },
    ],
    linksTitle: 'Our providers’ policies',
    links: links('Vercel, privacy notice', 'Vercel, Speed Insights privacy', 'WhatsApp, privacy policy'),
  },
  // Traduction IA, à faire relire par un locuteur natif, puis par l'avocat (version hébraïque).
  he: {
    title: 'מדיניות פרטיות',
    lede: 'מה קורה למידע שאתם מוסרים לנו באתר: מה נאסף, לשם מה, מי מקבל אותו, לכמה זמן, ומה הזכויות שלכם.',
    badge: 'טיוטה · טעון אישור עורך דין · תרגום ממתין להגהה',
    updated: (date) => `המדיניות עודכנה ב־${date}.`,
    sections: [
      {
        id: 'responsable',
        title: 'מי אחראי למידע שלכם',
        paragraphs: [
          'אתר JR Diamond מופעל על ידי {legalName} ({registrationNumber}), {address}. הסדנה היא שמקבלת את הפניות שלכם וקובעת את השימוש בהן.',
          'לכל שאלה על המידע שלכם: {email} או {phone}.',
        ],
      },
      {
        id: 'en-bref',
        title: 'בקצרה',
        list: [
          'אנחנו אוספים רק את מה שאתם כותבים בטופס פנייה, ורק כדי להשיב לכם.',
          'הפנייה שלכם מגיעה אלינו בדוא״ל. לאתר אין מאגר נתונים, והוא אינו שומר עותק של ההודעות או של התמונות שלכם.',
          'האתר אינו שומר עוגיות (cookies) ואינו מציג פרסומות. הוא מודד באופן אנונימי את מהירות הטעינה של דפיו.',
        ],
      },
      {
        id: 'donnees',
        title: 'מה אנחנו אוספים',
        paragraphs: [
          'באתר שני טפסים. מילוי הטפסים תלוי ברצונכם, אך השדות המסומנים בכוכבית ותיבת ההסכמה נחוצים: בלעדיהם לא ניתן לשלוח את הפנייה. אפשר גם לכתוב לנו או להתקשר ישירות (ראו למעלה).',
        ],
        list: [
          'בקשת הצעת מחיר, מתוך עיצוב התכשיט: שם ודוא״ל (חובה); טלפון, מידת טבעת, הודעה ותמונות (לא חובה); הסכמתכם, שאינה חובה, לפרסום תמונות וסרטונים מייצור התכשיט שלכם, ללא שמכם. התצורה שבחרתם (דגם, הרכב, מתכת, אבנים, מקור היהלום) ושפת הדף מצורפות לפנייה.',
          'חיים חדשים לתכשיט משפחתי: שם, דוא״ל ותיאור התכשיט (חובה); טלפון, משאלה ותמונות (לא חובה). שפת הדף מצורפת לפנייה.',
          'תמונות: עד 3, בפורמטים JPEG,‏ PNG,‏ WebP או HEIC, עד 3 MB כל אחת ו־4 MB בסך הכול. שם הקובץ של כל תמונה נשלח יחד איתה. מומלץ לצלם את התכשיט בלבד, או את היד, ללא הפנים.',
          'בשני הטפסים, תיבת סימון שחובה לסמן מתעדת את הסכמתכם לכך שפרטיכם ישמשו רק כדי להשיב לפנייתכם.',
        ],
      },
      {
        id: 'usage',
        title: 'לשם מה המידע משמש',
        paragraphs: [
          'כדי להשיב לפנייתכם: להכין הצעת מחיר, לבחון את חידוש התכשיט ולהתכתב איתכם בנושא.',
          'תמונות וסרטונים מייצור התכשיט שלכם מתפרסמים רק אם סימנתם את התיבה המיועדת לכך, וללא שמכם. כדי לבטל את ההסכמה, כתבו אל {email}.',
        ],
      },
      {
        id: 'acheminement',
        title: 'איך הפנייה מגיעה אלינו',
        paragraphs: [
          'הפנייה נשלחת לסדנה בדוא״ל, והתמונות מצורפות אליו. הדוא״ל כולל את כל מה שהזנתם, את שמה וגודלה של כל תמונה ואת כתובת הדף שממנו פניתם. כשהסדנה עונה, היא כותבת ישירות לכתובת שלכם.',
          'האתר עצמו אינו שומר דבר: ההודעות והתמונות שלכם אינן נשמרות בשרתים שלו או במאגר נתונים. התמונות נשמרות בזיכרון רק בזמן השליחה.',
          'לאחר מכן הפניות נשמרות בתיבת הדוא״ל של הסדנה, אצל ספק הדוא״ל שלה: {emailProvider}.',
          'כדי למנוע שליחה חוזרת ונשנית, השרת שומר בזיכרון את כתובת ה־IP שלכם ואת שעות השליחה: עד 5 פניות ב־10 דקות, בשני הטפסים יחד. נתונים אלה אינם נכתבים לדיסק ואינם מועברים לאיש; הם נמחקים כשהשרת מופעל מחדש.',
          'אם שליחה נכשלת, הודעת שגיאה טכנית נרשמת ביומן של ספק האחסון.',
        ],
      },
      {
        id: 'whatsapp',
        title: 'אם תבחרו בוואטסאפ',
        paragraphs: [
          'כשהלחצן „שליחה בוואטסאפ” מוצג, הוא פותח שיחה עם הסדנה ובה הודעה כתובה מראש לפי מה שהזנתם: התצורה או תיאור התכשיט, המשאלה, מידת הטבעת, השם, ההודעה וכתובת הדף. הטקסט מועבר לוואטסאפ, שירות של חברת Meta, ברגע שהקישור נפתח. שום דבר אינו נשלח לסדנה עד שתלחצו על שליחה, ואת התמונות אתם מצרפים בעצמכם. מכאן ואילך השיחה כפופה לתנאים של וואטסאפ.',
        ],
      },
      {
        id: 'hebergement',
        title: 'אחסון והעברה אל מחוץ לישראל',
        paragraphs: [
          'האתר מאוחסן אצל Vercel Inc., חברה אמריקאית. הטפסים מעובדים בשרתים שלה בארצות הברית, באזור וושינגטון. הודעות השגיאה של האתר נשמרות ביומן של Vercel בין שעה אחת ל־30 ימים, לפי חבילת האחסון. Vercel מעבדת גם, לצרכיה, נתונים טכניים הקשורים לשירות שלה, לפי מדיניות הפרטיות שלה.',
          'המידע שלכם יוצא אפוא מישראל: לארצות הברית (Vercel) ולמדינה שבה נמצאים שרתי ספק הדוא״ל. הבסיס להעברה: {transferBasis}.',
        ],
      },
      {
        id: 'cookies',
        title: 'עוגיות ומדידת מהירות',
        paragraphs: [
          'האתר אינו שומר עוגיות (cookies) ואינו משתמש באחסון של הדפדפן. הגופנים, התמונות והמודל התלת־ממדי מוגשים מהאתר עצמו: כדי להציג אותם, הדפדפן אינו פונה לשום שירות אחר.',
          'באתר החי, הכלי Speed Insights של Vercel מודד את מהירות הטעינה של הדפים. לפי Vercel, המדידה אנונימית: היא אינה קשורה למבקר מסוים או לכתובת IP. היא רושמת את הדף, הדפדפן, סוג המכשיר ומערכת ההפעלה שלו, המדינה, סוג החיבור ומדדי מהירות.',
        ],
      },
      { id: 'conservation', title: 'לכמה זמן', paragraphs: ['האתר אינו שומר דבר. בתיבת הדוא״ל של הסדנה: {retention}.'] },
      { id: 'securite', title: 'אבטחה', paragraphs: ['התקשורת בין הדפדפן שלכם לבין האתר מוצפנת (HTTPS).'] },
      {
        id: 'droits',
        title: 'הזכויות שלכם',
        paragraphs: ['חוק הגנת הפרטיות, התשמ״א־1981, כפי שתוקן בתיקון 13 שנכנס לתוקף ב־14 באוגוסט 2025, מקנה לכם בין השאר:'],
        list: [
          'את הזכות לעיין במידע עליכם, בעברית, בערבית או באנגלית, בתוך 30 ימים מיום בקשתכם;',
          'את הזכות לבקש לתקן או למחוק מידע שאינו נכון, שאינו שלם, שאינו ברור או שאינו מעודכן.',
        ],
        after: ['כדי לממש זכויות אלה, כתבו אל {email} או בדואר אל {address}.'],
      },
      {
        id: 'vendeur',
        title: 'המוכר והעסקה מרחוק',
        paragraphs: ['חוק הגנת הצרכן מחייב למסור את הפרטים האלה בעסקת מכר מרחוק:'],
        list: [
          'המוכר: {legalName}, {registrationNumber}.',
          'כתובת: {address}. טלפון: {phone}. דוא״ל: {email}.',
          'המוצרים: תכשיטים המיוצרים בהזמנה בסדנה. מאפייניהם מפורטים בדף של כל דגם ובהצעת המחיר.',
          'מחיר: לפי הצעת מחיר. באתר לא מוצג מחיר; המחיר מופיע בהצעת המחיר.',
          'תוקף הצעת המחיר: {quoteValidity}.',
          'תשלום: {payment}.',
          'ייצור: 14 ימי עבודה. משלוח: {delivery}.',
          'אחריות: {warranty}. התאמת המידה הראשונה ללא תשלום.',
          'ביטול: {cancellation}.',
        ],
      },
    ],
    linksTitle: 'מדיניות הפרטיות של נותני השירות',
    links: links('Vercel, מדיניות פרטיות (באנגלית)', 'Vercel, פרטיות ב־Speed Insights (באנגלית)', 'WhatsApp, מדיניות פרטיות'),
  },
};
