import type { Locale } from '@/lib/configurator/schema';

/**
 * FAQ du site.
 *
 * Chaque réponse indique sa base :
 * - `atelier` : donnée communiquée par l'atelier (date dans `basis`) ;
 * - `source`  : fait vérifié, sources affichées sous la réponse ;
 * - `toConfirm` : formulation provisoire, à valider par l'atelier (ou un juriste) avant publication.
 * Aucun montant de prix n'est donné ici tant que les règles de prix ne sont pas fixées.
 */

type L = Record<Locale, string>;
export type FaqStatus = 'atelier' | 'source' | 'toConfirm';
export type FaqItem = {
  id: string;
  q: L;
  /** Paragraphes de la réponse. */
  a: Record<Locale, string[]>;
  status: FaqStatus;
  /** Origine de l'information (usage interne, non affiché). */
  basis: string;
  sources?: { label: string; url: string }[];
};
export type FaqCategory = { id: string; title: L; items: FaqItem[] };

const GIA_LGD = {
  label: 'GIA, Laboratory-grown diamonds',
  url: 'https://4cs.gia.edu/en-us/laboratory-grown-diamond/',
};
const GIA_DIFF = {
  label: 'GIA, natural vs laboratory-grown',
  url: 'https://my.gia.edu/gia-news-research/difference-between-natural-laboratory-grown-diamonds',
};
const IGI_LGD = {
  label: 'IGI, Laboratory Grown Diamond Report',
  url: 'https://www.igi.org/lab-grown-diamond-report',
};
const SA_EH31 = {
  label: 'Choulhan Aroukh, Even HaEzer 31',
  url: 'https://www.sefaria.org.il/Shulchan_Arukh,_Even_HaEzer.31',
};
const HOTD = {
  label: 'Halakha of the Day, gold, silver and stones',
  url: 'https://halakhaoftheday.org/2012/06/18/jewish-wedding-gold-silver-and-stones/',
};
const MJL = {
  label: 'My Jewish Learning, Jewish wedding rings',
  url: 'https://www.myjewishlearning.com/article/all-about-jewish-wedding-rings/',
};
const IDE = {
  label: 'Wikipedia, Israel Diamond Exchange',
  url: 'https://en.wikipedia.org/wiki/Israel_Diamond_Exchange',
};
const KNOT = {
  label: 'The Knot, engagement ring replating',
  url: 'https://www.theknot.com/content/engagement-ring-replating',
};

export const FAQ: FaqCategory[] = [
  {
    id: 'atelier',
    title: {
      fr: 'L’atelier et la méthode',
      en: 'The workshop and how we work',
      he: 'הסדנה ושיטת העבודה',
    },
    items: [
      {
        id: 'qui',
        q: {
          fr: 'Qui fabrique les bijoux ?',
          en: 'Who makes the jewellery?',
          he: 'מי מייצר את התכשיטים?',
        },
        a: {
          fr: [
            'Notre propre atelier, installé à la Bourse du diamant de Ramat Gan. Elle abrite la plus grande salle de négoce de diamants au monde. Le bijou que vous configurez est dessiné, fondu, poli et serti sur place, sans intermédiaire.',
          ],
          en: [
            'Our own workshop, at the Diamond Exchange in Ramat Gan. The exchange houses the world’s largest diamond trading floor. The piece you configure is designed, cast, polished and set on site, with no middleman.',
          ],
          he: [
            'הסדנה שלנו, בבורסת היהלומים ברמת גן, שבה נמצא אולם המסחר ביהלומים הגדול בעולם. התכשיט שאתם מעצבים משורטט, נוצק, מלוטש ומשובץ במקום, בלי מתווכים.',
          ],
        },
        status: 'source',
        basis: 'atelier (adresse) ; salle de négoce : Wikipedia',
        sources: [IDE],
      },
      {
        id: '3d-fidele',
        q: {
          fr: 'Le bijou en 3D est-il fidèle à la pièce que je recevrai ?',
          en: 'Is the 3D model faithful to the piece I will receive?',
          he: 'האם התכשיט בתלת־ממד נאמן לתכשיט שאקבל?',
        },
        a: {
          fr: [
            'Oui, pour la forme : le modèle 3D est tiré du fichier de fabrication de l’atelier, celui qui sert à imprimer le modèle avant la fonte. Il n’est pas redessiné pour le web. Seuls quelques détails invisibles une fois porté sont simplifiés pour l’écran.',
            'Pour les couleurs, un écran ne rend jamais exactement l’or ni le feu d’un diamant. C’est pour cela que nous filmons votre pierre et vous envoyons des photos de votre bijou pendant sa fabrication.',
          ],
          en: [
            'Yes, for the shape: the 3D model comes from the workshop’s production file, the one used to print the model before casting. It is not redrawn for the web. Only a few details that are invisible when worn are simplified for the screen.',
            'For colour, no screen renders gold or a diamond’s fire exactly. That is why we film your stone and send you photos of your piece while it is being made.',
          ],
          he: [
            'כן, מבחינת הצורה: המודל התלת־ממדי נלקח מקובץ הייצור של הסדנה, אותו קובץ שממנו מדפיסים את הדגם לפני היציקה. הוא לא משורטט מחדש לאתר. רק כמה פרטים שאינם נראים בעת הענידה פושטו לתצוגה.',
            'מבחינת הצבעים, אף מסך לא מציג בדיוק את גוון הזהב או את הניצוץ של יהלום. לכן אנחנו מצלמים את האבן שלכם בווידאו ושולחים לכם תמונות של התכשיט בזמן הייצור.',
          ],
        },
        status: 'atelier',
        basis: 'pipeline du projet ; retouche web validée par l’atelier (3/11)',
      },
      {
        id: 'voir-pierre',
        q: {
          fr: 'Puis-je voir ma vraie pierre avant d’acheter ?',
          en: 'Can I see my actual stone before buying?',
          he: 'האם אפשר לראות את האבן האמיתית לפני הקנייה?',
        },
        a: {
          fr: [
            'Oui. L’atelier filme la pierre proposée sur un plateau tournant et vous envoie la vidéo, une photo de la table et le certificat. Vous validez la pierre, pas une photo de catalogue.',
          ],
          en: [
            'Yes. The workshop films the proposed stone on a turntable and sends you the video, a photo of the table and the certificate. You approve the stone itself, not a catalogue photo.',
          ],
          he: ['כן. הסדנה מצלמת את האבן המוצעת על משטח מסתובב ושולחת לכם את הסרטון, תמונה של פני האבן ואת התעודה. אתם מאשרים את האבן עצמה, לא תמונה מקטלוג.'],
        },
        status: 'atelier',
        basis: 'accord du propriétaire, 4/11 ; procédure docs/PROCEDURE_PHOTO_ATELIER.md',
      },
      {
        id: 'suivi',
        q: {
          fr: 'Puis-je suivre la fabrication ?',
          en: 'Can I follow the making of my piece?',
          he: 'האם אפשר לעקוב אחרי הייצור?',
        },
        a: {
          fr: [
            'Oui, c’est notre engagement. Vous recevez une photo à chaque étape (modèle imprimé, fonte, polissage, sertissage, gravure, pièce finie) et de courtes vidéos des moments clés : la coulée du métal, le sertissage, la gravure.',
            'Rien n’est publié sans votre accord.',
          ],
          en: [
            'Yes, it is our promise. You receive a photo at each stage (printed model, casting, polishing, setting, engraving, finished piece) and short videos of the key moments: pouring the metal, setting, engraving.',
            'Nothing is published without your consent.',
          ],
          he: [
            'כן, זו ההתחייבות שלנו. תקבלו תמונה בכל שלב (דגם מודפס, יציקה, ליטוש, שיבוץ, חריטה, תכשיט מוגמר) וסרטונים קצרים של הרגעים החשובים: יציקת המתכת, השיבוץ, החריטה.',
            'שום דבר לא יפורסם בלי הסכמתכם.',
          ],
        },
        status: 'atelier',
        basis: 'accord du propriétaire, 4/11 (photos et vidéos)',
      },
      {
        id: 'delai',
        q: {
          fr: 'Quel est le délai de fabrication ?',
          en: 'How long does it take?',
          he: 'כמה זמן לוקח הייצור?',
        },
        a: {
          fr: [
            '14 jours ouvrés à partir de la commande, pour une pièce de notre catalogue. Une création entièrement sur mesure demande un délai propre, indiqué dans le devis.',
          ],
          en: ['14 business days from the order for a piece from our catalogue. A fully bespoke design has its own timeline, given in the quote.'],
          he: ['14 ימי עבודה מיום ההזמנה, לתכשיט מהקטלוג שלנו. לעיצוב אישי לגמרי יש לוח זמנים משלו, שמצוין בהצעת המחיר.'],
        },
        status: 'atelier',
        basis: 'atelier, 3/11 (14 jours ouvrés, sans express) ; sur mesure : déduit',
      },
    ],
  },
  {
    id: 'diamants',
    title: {
      fr: 'Diamants et pierres',
      en: 'Diamonds and gemstones',
      he: 'יהלומים ואבנים',
    },
    items: [
      {
        id: 'synthetique-vrai',
        q: {
          fr: 'Un diamant synthétique est-il un vrai diamant ?',
          en: 'Is a lab-grown diamond a real diamond?',
          he: 'האם יהלום מעבדה הוא יהלום אמיתי?',
        },
        a: {
          fr: [
            'Oui. Il est fait de carbone cristallisé, exactement comme un diamant naturel : même composition, même dureté, même éclat. La seule différence est son origine : il a été créé en laboratoire en quelques semaines, au lieu de se former sous terre en des millions d’années.',
            'À l’œil nu, et même à la loupe, personne ne peut les distinguer. Seul un laboratoire équipé le peut.',
            'Nous employons le mot « synthétique », celui qu’impose la loi française. Ce n’est pas une imitation : une imitation, comme le verre ou l’oxyde de zirconium, n’est pas du diamant.',
          ],
          en: [
            'Yes. It is crystallised carbon, exactly like a natural diamond: same composition, same hardness, same sparkle. The only difference is its origin: it was grown in a laboratory in a few weeks rather than formed underground over millions of years.',
            'With the naked eye, or even a loupe, no one can tell them apart. Only an equipped laboratory can.',
            'It is not an imitation: an imitation, such as glass or cubic zirconia, is not diamond at all.',
          ],
          he: [
            'כן. הוא עשוי מפחמן מגובש, בדיוק כמו יהלום טבעי: אותו הרכב, אותה קשיות, אותו ברק. ההבדל היחיד הוא המקור: הוא נוצר במעבדה בתוך כמה שבועות, במקום להיווצר באדמה במשך מיליוני שנים.',
            'בעין, ואפילו בזכוכית מגדלת, אי אפשר להבחין ביניהם. רק מעבדה מאובזרת יכולה.',
            'זה לא חיקוי: חיקוי, כמו זכוכית או זירקון מעובד (קוביק זירקוניה), אינו יהלום כלל.',
          ],
        },
        status: 'source',
        basis: 'GIA ; décret français 2002-65 (terme « synthétique »)',
        sources: [GIA_LGD, GIA_DIFF],
      },
      {
        id: 'naturel-ou-synthetique',
        q: {
          fr: 'Naturel ou synthétique : comment choisir ?',
          en: 'Natural or lab-grown: how do I choose?',
          he: 'טבעי או מעבדה: איך לבחור?',
        },
        a: {
          fr: [
            'Le synthétique permet une pierre bien plus grosse pour le même budget. Le naturel est rare, et c’est ce qui fait son prix.',
            'Soyons honnêtes sur la revente : un diamant naturel se revend mieux. Un synthétique se revend peu, car on peut en produire sans limite et son prix baisse. Achetez un synthétique pour le porter, pas comme placement.',
            'Dans le configurateur, les deux s’affichent à l’identique à l’écran. Seuls le certificat et le prix changent.',
          ],
          en: [
            'Lab-grown gives you a much larger stone for the same budget. Natural is rare, and that is what you pay for.',
            'To be honest about resale: a natural diamond resells better. A lab-grown one resells for little, because supply is unlimited and prices keep falling. Buy lab-grown to wear it, not as an investment.',
            'In the configurator, both look identical on screen. Only the certificate and the price change.',
          ],
          he: [
            'יהלום מעבדה מאפשר אבן גדולה בהרבה באותו תקציב. היהלום הטבעי נדיר, ועל זה משלמים.',
            'בכנות לגבי מכירה חוזרת: יהלום טבעי נמכר מחדש טוב יותר. יהלום מעבדה נמכר מחדש בסכום נמוך, כי אפשר לייצר אותו ללא הגבלה ומחירו יורד. קנו יהלום מעבדה כדי לענוד אותו, לא כהשקעה.',
            'במעצב התכשיטים שניהם נראים זהים על המסך. רק התעודה והמחיר משתנים.',
          ],
        },
        status: 'source',
        basis: 'revente : sources commerciales concordantes sur le sens, pas sur les chiffres (aucun chiffre donné)',
        sources: [GIA_DIFF],
      },
      {
        id: 'certificat',
        q: {
          fr: 'Ma pierre aura-t-elle un certificat ?',
          en: 'Will my stone come with a certificate?',
          he: 'האם לאבן שלי תהיה תעודה?',
        },
        a: {
          fr: [
            'Oui, à partir de 0,50 carat : GIA pour les diamants naturels, IGI pour les diamants synthétiques. Ce sont deux laboratoires indépendants reconnus dans le monde entier.',
            'Le numéro du certificat est en général gravé au laser sur la tranche de la pierre, lisible à la loupe. Vous pouvez le vérifier sur le site du laboratoire.',
          ],
          en: [
            'Yes, from 0.50 carat: GIA for natural diamonds, IGI for lab-grown diamonds. Both are independent laboratories recognised worldwide.',
            'The report number is usually laser-inscribed on the girdle of the stone, readable with a loupe. You can check it on the laboratory’s website.',
          ],
          he: [
            'כן, החל מ־0.50 קראט: GIA ליהלומים טבעיים, IGI ליהלומי מעבדה. שתיהן מעבדות עצמאיות המוכרות בכל העולם.',
            'מספר התעודה בדרך כלל חרוט בלייזר על שפת האבן וניתן לקריאה בזכוכית מגדלת. אפשר לאמת אותו באתר המעבדה.',
          ],
        },
        status: 'source',
        basis: 'atelier, 3/11 (seuil et laboratoires) ; inscription : IGI',
        sources: [IGI_LGD],
      },
      {
        id: 'pierres-couleur',
        q: {
          fr: 'Proposez-vous des pierres de couleur ?',
          en: 'Do you offer coloured stones?',
          he: 'האם אתם מציעים אבנים צבעוניות?',
        },
        a: {
          fr: [
            'Oui : diamants de couleur (noirs, roses, bleus et d’autres teintes), émeraudes, saphirs et rubis naturels. Pour chaque pierre, nous indiquons clairement si elle est naturelle, traitée ou synthétique.',
          ],
          en: [
            'Yes: coloured diamonds (black, pink, blue and other shades), and natural emeralds, sapphires and rubies. For every stone we state clearly whether it is natural, treated or lab-grown.',
          ],
          he: [
            'כן: יהלומים צבעוניים (שחורים, ורודים, כחולים ובגוונים נוספים), וכן אמרלד, ספיר ורובי טבעיים. לכל אבן אנחנו מציינים בבירור אם היא טבעית, מטופלת או מעבדה.',
          ],
        },
        status: 'atelier',
        basis: 'atelier, 22/10 et 3/11 ; mention « traitée » : point de vigilance REPONSES_ATELIER.md',
      },
      {
        id: 'carat',
        q: {
          fr: 'Puis-je choisir une pierre plus grosse que celle affichée ?',
          en: 'Can I choose a larger stone than the one shown?',
          he: 'האם אפשר לבחור אבן גדולה מזו שמוצגת?',
        },
        a: {
          fr: [
            'Sur un solitaire, en général oui : la monture s’adapte à la pierre. Sur un modèle où la pierre centrale touche d’autres pierres, comme un halo, changer sa taille change tout le dessin du bijou. L’atelier l’étudie alors sur demande.',
          ],
          en: [
            'On a solitaire, usually yes: the setting adapts to the stone. On a design where the centre stone touches others, such as a halo, changing its size changes the whole design. The workshop then studies it on request.',
          ],
          he: [
            'בטבעת סוליטר, בדרך כלל כן: המשבצת מותאמת לאבן. בעיצוב שבו האבן המרכזית נוגעת באבנים אחרות, כמו הילה, שינוי הגודל משנה את כל העיצוב. במקרה כזה הסדנה בוחנת זאת לפי בקשה.',
          ],
        },
        status: 'atelier',
        basis: 'analyse ring-001 (halo touchant la marquise) ; solitaire : en attente du sélecteur de carat',
      },
    ],
  },
  {
    id: 'metaux',
    title: { fr: 'Or et platine', en: 'Gold and platinum', he: 'זהב ופלטינה' },
    items: [
      {
        id: '14-ou-18',
        q: {
          fr: 'Or 14 carats ou 18 carats ?',
          en: '14 karat or 18 karat gold?',
          he: 'זהב 14 קראט או 18 קראט?',
        },
        a: {
          fr: [
            'Le 18 carats contient 75 % d’or (poinçon 750), le 14 carats 58,5 % (poinçon 585). Le 18 carats a une couleur plus riche, il est plus lourd et plus cher. Le 14 carats, qui contient plus d’alliage, est en général plus dur : il résiste mieux aux chocs du quotidien.',
            'Les deux sont de l’or véritable. Pour une bague portée tous les jours, le 14 carats est un excellent choix.',
          ],
          en: [
            '18 karat is 75% gold (hallmark 750), 14 karat is 58.5% (hallmark 585). 18 karat has a richer colour, is heavier and costs more. 14 karat, with more alloy, is generally harder: it stands up better to everyday knocks.',
            'Both are real gold. For a ring worn every day, 14 karat is an excellent choice.',
          ],
          he: [
            'ב־18 קראט יש 75% זהב (חותמת 750), ב־14 קראט 58.5% (חותמת 585). ל־18 קראט צבע עשיר יותר, והוא כבד ויקר יותר. 14 קראט, שיש בו יותר סגסוגת, בדרך כלל קשיח יותר ועמיד יותר למכות היומיום.',
            'שניהם זהב אמיתי. לטבעת שעונדים כל יום, 14 קראט הוא בחירה מצוינת.',
          ],
        },
        status: 'source',
        basis:
          'titres : Engineering ToolBox ; dureté : tableau Vickers d’un détaillant (14 k ≈ 155–200 HV, 18 k ≈ 135–170 HV), une source contraire hors 14 k ; métaux : atelier 3/11',
        sources: [
          {
            label: 'Engineering ToolBox, karat fineness',
            url: 'https://www.engineeringtoolbox.com/carat-fineness-precious-metals-d_1749.html',
          },
          {
            label: 'Diamonds & Gem, 18K vs 14K',
            url: 'https://diamondsandgem.com/metals/18k-vs-14k-gold.html',
          },
        ],
      },
      {
        id: 'or-blanc',
        q: {
          fr: 'L’or blanc jaunit-il ?',
          en: 'Does white gold turn yellow?',
          he: 'האם זהב לבן מצהיב?',
        },
        a: {
          fr: [
            'L’or blanc est un alliage légèrement teinté, recouvert d’une fine couche de rhodium qui lui donne son blanc éclatant. Avec le temps, cette couche s’use et une nuance chaude peut réapparaître.',
            'Il suffit de refaire le rhodiage, en général tous les un à deux ans pour une bague portée tous les jours. L’atelier s’en charge.',
            'Le platine, lui, est naturellement blanc et n’a pas besoin de rhodiage.',
          ],
          en: [
            'White gold is a slightly tinted alloy covered with a thin layer of rhodium that gives it its bright white. Over time the layer wears and a warm tint can show through.',
            'It simply needs replating, usually every one to two years for a ring worn daily. The workshop does it.',
            'Platinum is naturally white and does not need rhodium plating.',
          ],
          he: [
            'זהב לבן הוא סגסוגת בגוון עדין, המצופה בשכבה דקה של רודיום שמעניקה לו את הלובן הבוהק. עם הזמן השכבה נשחקת וגוון חם יותר עלול להופיע.',
            'מספיק לצפות מחדש ברודיום, בדרך כלל כל שנה עד שנתיים לטבעת שעונדים כל יום. הסדנה עושה זאת.',
            'פלטינה לבנה מטבעה ואינה צריכה ציפוי רודיום.',
          ],
        },
        status: 'source',
        basis: 'fréquence : sources de joailliers concordantes (1 à 2 ans pour un port quotidien) ; rhodiage par l’atelier : 3/11',
        sources: [KNOT],
      },
      {
        id: 'argent',
        q: {
          fr: 'Travaillez-vous l’argent ?',
          en: 'Do you work in silver?',
          he: 'האם אתם עובדים בכסף?',
        },
        a: {
          fr: ['Non. L’atelier travaille l’or 14 et 18 carats (jaune, blanc et rose) et le platine.'],
          en: ['No. The workshop works in 14 and 18 karat gold (yellow, white and rose) and platinum.'],
          he: ['לא. הסדנה עובדת בזהב 14 ו־18 קראט (צהוב, לבן ואדום) ובפלטינה.'],
        },
        status: 'atelier',
        basis: 'atelier, 3/11',
      },
    ],
  },
  {
    id: 'occasions',
    title: {
      fr: 'Occasions et créations',
      en: 'Occasions and commissions',
      he: 'אירועים ועיצובים',
    },
    items: [
      {
        id: 'kiddouchin',
        q: {
          fr: 'Pourquoi l’alliance de kiddouchin est-elle sans pierre ?',
          en: 'Why is a kiddushin ring plain, without stones?',
          he: 'למה טבעת הקידושין חלקה, בלי אבן?',
        },
        a: {
          fr: [
            'Sous la houppa, la mariée doit pouvoir connaître la valeur de l’anneau qu’elle reçoit. Celle d’un métal simple se voit, celle d’une pierre ne s’estime pas à l’œil. La coutume veut donc un anneau uni, sans pierre, qui appartient au marié.',
            'Certains décisionnaires étendent cette réserve aux gravures. D’autres sont plus souples. Demandez à votre rabbin, puis choisissez : nous fabriquons des alliances unies, et nous pouvons graver l’intérieur après la cérémonie si vous le souhaitez.',
          ],
          en: [
            'Under the chuppah, the bride must be able to know the value of the ring she receives. A plain metal’s value can be seen, a stone’s cannot be judged by eye. Custom therefore calls for a plain ring without stones, owned by the groom.',
            'Some authorities extend this caution to engravings, others are more lenient. Ask your rabbi, then choose: we make plain bands and can engrave the inside after the ceremony if you wish.',
          ],
          he: [
            'תחת החופה, הכלה צריכה לדעת את שוויה של הטבעת שהיא מקבלת. את שוויה של מתכת פשוטה רואים, ואת שוויה של אבן אי אפשר להעריך בעין. לכן נוהגים בטבעת חלקה, בלי אבן, השייכת לחתן.',
            'יש פוסקים שמחמירים גם לגבי חריטה, ויש המקלים. שאלו את הרב שלכם ואז בחרו: אנחנו מייצרים טבעות חלקות, ואם תרצו נוכל לחרוט את פנים הטבעת אחרי החתונה.',
          ],
        },
        status: 'source',
        basis: 'atelier fait des alliances de kiddouchin (4/11) ; règle : sources ; gravure après cérémonie : déduit, à confirmer avec l’atelier',
        sources: [SA_EH31, HOTD, MJL],
      },
      {
        id: 'transformation',
        q: {
          fr: 'Pouvez-vous transformer un bijou de famille ?',
          en: 'Can you remake a family heirloom?',
          he: 'האם אפשר לעצב מחדש תכשיט משפחתי?',
        },
        a: {
          fr: [
            'Oui. Nous pouvons refondre l’or d’un ancien bijou et dessertir ses pierres pour les placer dans une nouvelle création. Une bague de grand-mère peut ainsi devenir une bague de fiançailles.',
            'Envoyez-nous des photos du bijou. L’atelier vérifie le titre de l’or et l’état des pierres, puis vous propose un dessin et un devis.',
          ],
          en: [
            'Yes. We can melt down the gold of an old piece and unset its stones to place them in a new design. A grandmother’s ring can become an engagement ring.',
            'Send us photos of the piece. The workshop checks the gold’s karat and the condition of the stones, then proposes a design and a quote.',
          ],
          he: [
            'כן. אפשר להתיך את הזהב של תכשיט ישן ולהוציא את אבניו כדי לשבץ אותן בעיצוב חדש. כך טבעת של סבתא יכולה להפוך לטבעת אירוסין.',
            'שלחו לנו תמונות של התכשיט. הסדנה בודקת את קראט הזהב ואת מצב האבנים, ואז מציעה עיצוב והצעת מחיר.',
          ],
        },
        status: 'atelier',
        basis: 'accord du propriétaire, 4/11 ; contrôle du titre et des pierres : déduit, à préciser avec l’atelier',
      },
      {
        id: 'gravure',
        q: {
          fr: 'Peut-on graver un texte, en hébreu par exemple ?',
          en: 'Can you engrave text, in Hebrew for instance?',
          he: 'האם אפשר לחרוט טקסט, למשל בעברית?',
        },
        a: {
          fr: [
            'Oui. La gravure se fait au laser, avec une vingtaine de polices, en hébreu, en français, en anglais et dans d’autres alphabets. Un prénom, une date ou un verset court tiennent à l’intérieur d’un anneau.',
          ],
          en: [
            'Yes. Engraving is done by laser, in some twenty fonts, in Hebrew, English, French and other scripts. A name, a date or a short verse fits inside a band.',
          ],
          he: ['כן. החריטה נעשית בלייזר, בכעשרים גופנים, בעברית, באנגלית, בצרפתית ובכתבים נוספים. שם, תאריך או פסוק קצר נכנסים בפנים הטבעת.'],
        },
        status: 'atelier',
        basis: 'atelier, 3/11 (laser, 20 à 25 polices, hébreu, anglais, chinois…)',
      },
      {
        id: 'sur-mesure',
        q: {
          fr: 'Pouvez-vous réaliser un modèle qui n’est pas sur le site ?',
          en: 'Can you make a design that is not on the site?',
          he: 'האם אפשר להכין עיצוב שאינו באתר?',
        },
        a: {
          fr: [
            'Oui. Envoyez une photo, un croquis ou une idée. L’atelier dessine le modèle en 3D et vous le montre avant toute fabrication.',
            'Nous ne copions pas les créations protégées des grandes maisons. Nous pouvons en revanche créer une pièce dans le même esprit.',
          ],
          en: [
            'Yes. Send a photo, a sketch or an idea. The workshop models the design in 3D and shows it to you before anything is made.',
            'We do not copy protected designs from major houses, but we can create a piece in the same spirit.',
          ],
          he: [
            'כן. שלחו תמונה, סקיצה או רעיון. הסדנה מעצבת את הדגם בתלת־ממד ומציגה לכם אותו לפני תחילת הייצור.',
            'איננו מעתיקים עיצובים מוגנים של בתי תכשיטים גדולים, אבל נוכל ליצור תכשיט באותה רוח.',
          ],
        },
        status: 'toConfirm',
        basis: 'déduit (maquette 3D au tarif atelier) ; refus des copies : règle du projet (PIP-7)',
      },
    ],
  },
  {
    id: 'commande',
    title: {
      fr: 'Prix, commande et paiement',
      en: 'Price, ordering and payment',
      he: 'מחיר, הזמנה ותשלום',
    },
    items: [
      {
        id: 'prix',
        q: {
          fr: 'Comment le prix est-il calculé ?',
          en: 'How is the price calculated?',
          he: 'איך נקבע המחיר?',
        },
        a: {
          fr: [
            'Le prix se compose de trois parties : le métal, au poids et au cours du jour ; la ou les pierres, selon leur nature, leur poids et leur qualité ; la façon, c’est-à-dire le modèle 3D, la fonte, le polissage et le sertissage.',
            'Nous vendons directement depuis l’atelier, sans intermédiaire. Le prix affiché est TTC.',
          ],
          en: [
            'The price has three parts: the metal, by weight at the day’s rate; the stone or stones, by type, weight and quality; and the workmanship: the 3D model, casting, polishing and setting.',
            'We sell directly from the workshop, with no middleman. Prices include VAT.',
          ],
          he: [
            'המחיר מורכב משלושה חלקים: המתכת, לפי משקל ולפי שער היום; האבן או האבנים, לפי סוג, משקל ואיכות; והעבודה: הדגם התלת־ממדי, היציקה, הליטוש והשיבוץ.',
            'אנחנו מוכרים ישירות מהסדנה, בלי מתווכים. המחירים כוללים מע״מ.',
          ],
        },
        status: 'atelier',
        basis: 'structure de prix, atelier 3/11 ; TTC : décision lancement Israël (TVA 18 %)',
      },
      {
        id: 'paiement',
        q: {
          fr: 'Comment se passe le paiement ?',
          en: 'How does payment work?',
          he: 'איך מתבצע התשלום?',
        },
        a: {
          fr: [
            'Sur le site, le bijou se paie intégralement à la commande. La fabrication démarre aussitôt, et le bijou est expédié une fois terminé.',
            'Les moyens de paiement acceptés seront indiqués ici.',
          ],
          en: [
            'On the site, the piece is paid in full when you order. Production starts at once, and the piece ships when finished.',
            'Accepted payment methods will be listed here.',
          ],
          he: ['באתר, התכשיט משולם במלואו בעת ההזמנה. הייצור מתחיל מיד, והתכשיט נשלח כשהוא מוכן.', 'אמצעי התשלום המקובלים יפורטו כאן.'],
        },
        status: 'toConfirm',
        basis: 'paiement intégral : atelier 3/11 ; moyens de paiement : non communiqués',
      },
      {
        id: 'annulation',
        q: {
          fr: 'Puis-je annuler ou retourner un bijou ?',
          en: 'Can I cancel or return a piece?',
          he: 'האם אפשר לבטל או להחזיר תכשיט?',
        },
        a: {
          fr: [
            'Nos bijoux sont fabriqués pour vous, à votre configuration. Les conditions d’annulation et de retour seront précisées dans nos conditions de vente, conformément à la loi israélienne de protection du consommateur.',
          ],
          en: [
            'Our pieces are made for you, to your configuration. Cancellation and return terms will be set out in our terms of sale, in line with Israeli consumer protection law.',
          ],
          he: ['התכשיטים שלנו מיוצרים במיוחד עבורכם, לפי התצורה שבחרתם. תנאי הביטול וההחזרה יפורטו בתנאי המכירה, בהתאם לחוק הגנת הצרכן.'],
        },
        status: 'toConfirm',
        basis: 'exception « fabriqué sur mesure » : non tranchée pour une bague configurée, à faire valider par un avocat (STRATEGIE.md §6)',
      },
      {
        id: 'livraison',
        q: {
          fr: 'Livrez-vous à l’étranger ?',
          en: 'Do you ship abroad?',
          he: 'האם אתם שולחים לחו״ל?',
        },
        a: {
          fr: [
            'Nous livrons d’abord en Israël. Pour la France et les autres pays, contactez-nous : l’envoi d’un bijou de valeur demande un transport assuré, et l’import peut entraîner des taxes.',
          ],
          en: [
            'We ship within Israel first. For France and other countries, contact us: sending a valuable piece requires insured transport, and import taxes may apply.',
          ],
          he: ['בשלב ראשון אנחנו שולחים בישראל. לצרפת ולמדינות אחרות, צרו איתנו קשר: משלוח של תכשיט יקר דורש הובלה מבוטחת, וייתכנו מסי יבוא.'],
        },
        status: 'toConfirm',
        basis: 'décision lancement Israël (4/11) ; modalités d’expédition non définies',
      },
    ],
  },
  {
    id: 'apres',
    title: {
      fr: 'Taille et après-vente',
      en: 'Sizing and aftercare',
      he: 'מידה ושירות לאחר מכירה',
    },
    items: [
      {
        id: 'taille',
        q: {
          fr: 'Comment connaître ma taille de doigt ?',
          en: 'How do I find my ring size?',
          he: 'איך יודעים מה מידת הטבעת שלי?',
        },
        a: {
          fr: [
            'Le plus fiable : prenez une bague que vous portez au même doigt et mesurez son diamètre intérieur en millimètres. Faites la mesure en fin de journée, quand les doigts sont un peu plus gros.',
            'Pour une demande en mariage surprise, empruntez discrètement une de ses bagues. Pas de panique en cas d’erreur : la première mise à taille est offerte.',
          ],
          en: [
            'The most reliable way: take a ring worn on the same finger and measure its inner diameter in millimetres. Measure at the end of the day, when fingers are slightly larger.',
            'For a surprise proposal, discreetly borrow one of their rings. Don’t worry if it is off: the first resizing is free.',
          ],
          he: [
            'הדרך האמינה ביותר: קחו טבעת שאתם עונדים על אותה אצבע ומדדו את הקוטר הפנימי שלה במילימטרים. מדדו בסוף היום, כשהאצבעות מעט גדולות יותר.',
            'להצעת נישואין בהפתעה, שאלו בשקט אחת מהטבעות שלה. אל דאגה אם המידה לא מדויקת: התאמת המידה הראשונה חינם.',
          ],
        },
        status: 'atelier',
        basis: 'première mise à taille offerte : atelier 3/11 ; méthode : pratique courante',
      },
      {
        id: 'mise-a-taille',
        q: {
          fr: 'Et si la bague n’est pas à la bonne taille ?',
          en: 'What if the ring does not fit?',
          he: 'ומה אם הטבעת לא במידה?',
        },
        a: {
          fr: [
            'La première mise à taille est offerte. Après un an, un rétrécissement coûte environ 100 ₪. Un agrandissement demande d’ajouter du métal : il est chiffré sur devis.',
            'Certaines bagues, comme les alliances serties tout autour, se modifient difficilement. Nous vous le signalons au moment de la commande.',
          ],
          en: [
            'The first resizing is free. After one year, making a ring smaller costs about ₪100. Making it larger needs added metal and is quoted separately.',
            'Some rings, such as full eternity bands, are hard to resize. We tell you when you order.',
          ],
          he: [
            'התאמת המידה הראשונה חינם. אחרי שנה, הקטנה עולה כ־100 ₪. הגדלה דורשת תוספת מתכת ומתומחרת בנפרד.',
            'יש טבעות, כמו טבעות משובצות מסביב, שקשה לשנות את מידתן. נציין זאת בעת ההזמנה.',
          ],
        },
        status: 'atelier',
        basis: 'atelier, 3/11 ; alliances serties tout autour : pratique courante, à confirmer avec l’atelier',
      },
      {
        id: 'entretien',
        q: {
          fr: 'Comment entretenir mon bijou ?',
          en: 'How do I care for my piece?',
          he: 'איך שומרים על התכשיט?',
        },
        a: {
          fr: [
            'Retirez-le pour le sport, la piscine et les produits ménagers. Nettoyez-le à l’eau tiède savonneuse avec une brosse douce.',
            'Faites contrôler les griffes environ une fois par an : une griffe usée peut laisser partir une pierre. L’atelier assure l’entretien et les réparations.',
          ],
          en: [
            'Take it off for sport, swimming pools and household cleaning products. Clean it with warm soapy water and a soft brush.',
            'Have the prongs checked about once a year: a worn prong can lose a stone. The workshop handles maintenance and repairs.',
          ],
          he: [
            'הסירו אותו בזמן ספורט, בבריכה ובשימוש בחומרי ניקוי. נקו אותו במים פושרים עם סבון ומברשת רכה.',
            'בדקו את הציפורניים בערך פעם בשנה: ציפורן שחוקה עלולה לשחרר אבן. הסדנה מטפלת בתחזוקה ובתיקונים.',
          ],
        },
        status: 'toConfirm',
        basis: 'réparations et entretien par l’atelier : 3/11 ; conseils : pratique courante, à relire par l’atelier',
      },
    ],
  },
];

export const allFaqItems = () => FAQ.flatMap((c) => c.items);
