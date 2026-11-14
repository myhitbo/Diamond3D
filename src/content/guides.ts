/**
 * Guides (français seulement).
 *
 * Règles de rédaction :
 * - chaque fait extérieur est vérifié et sa source figure en bas du guide ;
 * - ce qui concerne l'atelier reprend ses réponses (docs/REPONSES_ATELIER.md) et la FAQ ;
 * - aucun prix : les règles de prix ne sont pas fixées ;
 * - « synthétique », jamais « de laboratoire » ni « de culture » (décret 2002-65) ;
 * - questions religieuses : on rapporte la coutume et on renvoie au rabbin, sans trancher.
 * Les guides portent le badge « Brouillon » tant que l'atelier ne les a pas relus.
 */

export type GuideSource = { label: string; url: string };
/** Tableau simple : la première colonne sert d'en-tête de ligne. */
export type GuideTable = { caption: string; head: string[]; rows: string[][] };
/** Ordre d'affichage : `paragraphs`, puis `list`, puis `table`, puis `after`. */
export type GuideSection = { id: string; title: string; paragraphs?: string[]; list?: string[]; table?: GuideTable; after?: string[] };
export type GuideLink = { label: string; href: string };
export type Guide = {
  slug: string;
  title: string;
  /** Résumé d'une à deux phrases (liste des guides, balise description). */
  description: string;
  /** Date de dernière vérification des faits, AAAA-MM-JJ. */
  verified: string;
  sections: GuideSection[];
  sources: GuideSource[];
  /** Liens internes proposés en fin de guide. */
  next: GuideLink[];
};

const CONFIGURATOR: GuideLink = { label: 'Configurer une bague', href: '/fr/configurateur/ring-001' };
const FAQ_LINK: GuideLink = { label: 'Lire les questions fréquentes', href: '/fr/faq' };
const G_SYNTH: GuideLink = { label: 'Guide : synthétique ou naturel', href: '/fr/guides/diamant-synthetique-ou-naturel' };
const G_FORMES: GuideLink = { label: 'Guide : les formes de diamant', href: '/fr/guides/formes-de-diamant' };
const G_4C: GuideLink = { label: 'Guide : les 4 C du diamant', href: '/fr/guides/les-4-c-du-diamant' };
const G_OR: GuideLink = { label: 'Guide : or 14 ou 18 carats', href: '/fr/guides/or-14-ou-18-carats' };
const G_TAILLE: GuideLink = { label: 'Guide : trouver sa taille de doigt', href: '/fr/guides/taille-de-doigt' };

/**
 * Correspondance des tailles de bague, calculée plutôt que recopiée :
 * - taille française = tour intérieur en mm (ISO 8653:2016) ; diamètre = tour / π ;
 * - taille israélienne = taille française − 40 (tableaux de bijoutiers israéliens) ;
 * - taille américaine ≈ (tour − 36,5) / 2,55, arrondie au quart (échelle nord-américaine : 0,032 po de diamètre par taille).
 */
const QUARTERS = ['', '¼', '½', '¾'];
export function ringSizeRow(circumferenceMm: number) {
  const us = Math.round(((circumferenceMm - 36.5) / 2.55) * 4) / 4;
  const whole = Math.floor(us);
  return {
    fr: String(circumferenceMm),
    diameterMm: (circumferenceMm / Math.PI).toFixed(1).replace('.', ','),
    il: String(circumferenceMm - 40),
    us: `${whole}${QUARTERS[Math.round((us - whole) * 4)]}`,
  };
}
const SIZE_RANGE = Array.from({ length: 21 }, (_, i) => 46 + i);

export const GUIDES: Guide[] = [
  {
    slug: 'diamant-synthetique-ou-naturel',
    title: 'Diamant synthétique ou naturel : comment choisir',
    description: 'Le même matériau, deux origines. Ce qui change vraiment entre un diamant synthétique et un diamant naturel : la rareté, le prix, la revente et le certificat.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'meme-materiau',
        title: 'Le même matériau',
        paragraphs: [
          'Un diamant synthétique est du diamant : du carbone cristallisé, avec la même dureté et le même éclat qu’une pierre extraite du sol. Ce n’est pas une imitation. Une imitation, comme le verre ou l’oxyde de zirconium, ressemble au diamant sans en être.',
          'Deux procédés existent. Le premier, dit HPHT, reproduit la haute pression et la haute température dans lesquelles le diamant se forme sous terre. Le second, dit CVD, dépose le carbone à partir d’un gaz, couche après couche, sur un germe de diamant. Les premiers diamants synthétiques de qualité joaillerie sont sortis du procédé HPHT. Aujourd’hui, la plupart de ceux que reçoit le laboratoire GIA viennent du CVD.',
        ],
      },
      {
        id: 'ce-qui-change',
        title: 'Ce qui change vraiment',
        list: [
          'L’origine. Un diamant naturel s’est formé sous terre en des millions d’années. Un diamant synthétique est produit en quelques semaines.',
          'La rareté et le prix. Le naturel est rare, et c’est ce qui fait son prix. À budget égal, le synthétique permet une pierre nettement plus grosse.',
          'La revente. Un diamant naturel se revend mieux. Un synthétique se revend peu : on peut en produire sans limite, et son prix baisse.',
          'Le certificat. Chez nous, GIA pour un diamant naturel et IGI pour un diamant synthétique, à partir de 0,50 carat.',
        ],
      },
      {
        id: 'distinguer',
        title: 'Peut-on les distinguer ?',
        paragraphs: [
          'Pas à l’œil nu, ni à la loupe. Seul un laboratoire équipé le peut. C’est pour cela que le certificat compte : il dit noir sur blanc d’où vient la pierre.',
          'Sur un diamant synthétique qu’il a gradé, le GIA grave au laser, sur la tranche de la pierre, le numéro du rapport et la mention « laboratory-grown ». Vous pouvez vérifier ce numéro sur le site du laboratoire.',
        ],
      },
      {
        id: 'le-mot',
        title: 'Pourquoi nous disons « synthétique »',
        paragraphs: [
          'En France, le mot n’est pas un choix de style. Le décret du 14 janvier 2002 sur le commerce des pierres impose « synthétique » pour une pierre fabriquée par l’homme qui a les mêmes propriétés que la pierre naturelle. L’expression « diamant de culture » figure parmi les pratiques que la répression des fraudes relève lors de ses contrôles.',
          'Des professionnels ont demandé à pouvoir écrire « diamant créé en laboratoire ». Après consultation, l’administration a annoncé que le décret ne serait pas modifié. Nous employons donc le terme légal, et nous expliquons ce qu’il veut dire.',
        ],
      },
      {
        id: 'conseil',
        title: 'Notre conseil',
        paragraphs: [
          'Choisissez un diamant synthétique pour le porter : vous aurez une pierre plus grande pour le même budget. Ne l’achetez pas comme un placement.',
          'Choisissez un diamant naturel si la rareté compte pour vous, ou si vous pensez à la transmission et à la revente.',
          'Dans notre configurateur, les deux s’affichent à l’identique. Seuls le certificat et le prix changent.',
        ],
      },
    ],
    sources: [
      { label: 'GIA, laboratory-grown diamonds', url: 'https://4cs.gia.edu/en-us/laboratory-grown-diamond/' },
      { label: 'GIA, natural vs laboratory-grown diamonds', url: 'https://my.gia.edu/gia-news-research/difference-between-natural-laboratory-grown-diamonds' },
      { label: 'GIA, latest research on laboratory-grown diamonds (HPHT, CVD)', url: 'https://www.gia.edu/gia-news-research/gems-gemology-summary-latest-research-lab-grown-diamonds' },
      { label: 'GIA, how are synthetic diamonds made (inscription au laser)', url: 'https://4cs.gia.edu/?p=9935' },
      { label: 'IGI, Laboratory Grown Diamond Report', url: 'https://www.igi.org/lab-grown-diamond-report' },
      { label: 'DGCCRF, qualité et conformité des bijoux comportant des pierres (décret 2002-65)', url: 'https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/qualite-et-conformite-des-bijoux-comportant-des-pierres' },
      { label: 'Assemblée nationale, question écrite n° 5268 sur le décret 2002-65', url: 'https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE5268.pdf' },
    ],
    next: [CONFIGURATOR, G_4C, G_FORMES, FAQ_LINK],
  },
  {
    slug: 'formes-de-diamant',
    title: 'Formes de diamant : ronde, ovale, poire, marquise',
    description: 'Forme et taille ne veulent pas dire la même chose. Ce qu’il faut regarder sur une pierre ronde, et sur les formes allongées : le rapport longueur-largeur, le « nœud papillon », les pointes.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'forme-et-taille',
        title: 'Forme et taille, deux choses différentes',
        paragraphs: [
          'La forme est le contour de la pierre vue de dessus : ronde, ovale, poire, marquise. La taille est la façon dont ses facettes sont disposées. Une « ronde brillant » est ainsi une pierre de contour rond, taillée en brillant.',
        ],
      },
      {
        id: 'ronde',
        title: 'La ronde brillant',
        paragraphs: [
          'C’est la référence. Elle compte 57 facettes, ou 58 quand la pointe du dessous est remplacée par une minuscule facette plate, la colette.',
          'C’est aussi la seule forme pour laquelle le laboratoire GIA donne une note de taille d’ensemble, d’« Excellent » à « Poor ». Pour les autres formes, le rapport ne porte pas cette note : il faut regarder la pierre elle-même.',
        ],
      },
      {
        id: 'allongees',
        title: 'Ovale, poire, marquise : les formes allongées',
        paragraphs: [
          'Trois points se vérifient sur ces formes.',
        ],
        list: [
          'Le rapport longueur-largeur. On divise la longueur par la largeur. Une marquise classique est environ deux fois plus longue que large (2 pour 1). Celles que reçoit le GIA se situent le plus souvent entre 1,6 et 2,2. Il n’y a pas de bon chiffre : c’est une affaire de goût, plus élancé ou plus plein.',
          'Le « nœud papillon ». Beaucoup de pierres allongées montrent une zone sombre en travers du centre, en forme de nœud papillon. On ne l’évite pas toujours. On cherche une pierre où il reste discret.',
          'La symétrie et les pointes. Les deux moitiés doivent se répondre. Les pointes d’une poire ou d’une marquise sont les parties les plus exposées : la monture doit les protéger.',
        ],
      },
      {
        id: 'atelier',
        title: 'Chez JR Diamond',
        paragraphs: [
          'Notre premier modèle porte une marquise, tenue par des griffes dont deux protègent les pointes. C’est pour vérifier tout cela sur votre pierre que l’atelier la filme sur un plateau tournant avant que vous ne la choisissiez.',
          'Une autre forme, ronde, ovale, poire, émeraude ou princesse, se demande dans le devis. Elle exige une tête de sertissage dessinée pour elle : l’aperçu 3D reste donc celui de la marquise tant que le modèle n’existe pas.',
        ],
      },
    ],
    sources: [
      { label: 'GIA, diamond cut (forme, taille, note de taille)', url: 'https://4cs.gia.edu/?p=6684' },
      { label: 'GIA, anatomy of a round brilliant (57 ou 58 facettes)', url: 'https://www.gia.edu/diamond-cut-anatomy-round-brilliant' },
      { label: 'GIA, marquise diamonds (rapport longueur-largeur)', url: 'https://4cs.gia.edu/?p=9484' },
      { label: 'GIA, diamond shapes (nœud papillon, symétrie, pointes)', url: 'https://4cs.gia.edu/en-us/blog/tag/diamond-shape/' },
    ],
    next: [CONFIGURATOR, G_4C, G_SYNTH, FAQ_LINK],
  },
  {
    slug: 'alliance-de-kiddouchin',
    title: 'L’alliance de kiddouchin : pourquoi un anneau uni',
    description: 'Sous la houppa, la coutume veut un anneau simple, sans pierre, qui appartient au marié. Ce que dit la tradition, ce qui se discute, et ce que fait l’atelier.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'tradition',
        title: 'Ce que demande la tradition',
        paragraphs: [
          'Sous la houppa, le marié remet un anneau à la mariée. Elle doit pouvoir connaître la valeur de ce qu’elle reçoit. La valeur d’un métal uni se voit. Celle d’une pierre ne s’estime pas à l’œil.',
          'La coutume veut donc un anneau uni, sans pierre. Il doit appartenir au marié au moment où il le donne.',
        ],
      },
      {
        id: 'gravure',
        title: 'Et la gravure ?',
        paragraphs: [
          'Les avis diffèrent. Certains décisionnaires étendent la réserve aux gravures, d’autres sont plus souples. Nous ne tranchons pas à la place de votre rabbin : posez-lui la question avant de commander.',
          'Une solution simple existe : l’atelier fabrique l’alliance unie, et grave l’intérieur après la cérémonie si vous le souhaitez.',
        ],
      },
      {
        id: 'atelier',
        title: 'Ce que fait l’atelier',
        paragraphs: ['L’atelier, installé à la Bourse du diamant de Ramat Gan, fabrique déjà des alliances de kiddouchin.'],
        list: [
          'Des alliances unies en or 14 ou 18 carats (jaune, blanc ou rose) et en platine. L’atelier ne travaille pas l’argent.',
          'La gravure au laser, avec une vingtaine de polices, en hébreu comme en français ou en anglais.',
          'La première mise à taille est offerte.',
        ],
        after: ['Le modèle en 3D arrivera sur ce site. En attendant, écrivez-nous depuis la demande de devis du configurateur.'],
      },
    ],
    sources: [
      { label: 'Choulhan Aroukh, Even HaEzer 31', url: 'https://www.sefaria.org.il/Shulchan_Arukh,_Even_HaEzer.31' },
      { label: 'Halakha of the Day, gold, silver and stones', url: 'https://halakhaoftheday.org/2012/06/18/jewish-wedding-gold-silver-and-stones/' },
      { label: 'My Jewish Learning, Jewish wedding rings', url: 'https://www.myjewishlearning.com/article/all-about-jewish-wedding-rings/' },
    ],
    next: [CONFIGURATOR, G_OR, G_TAILLE, FAQ_LINK],
  },
  {
    slug: 'les-4-c-du-diamant',
    title: 'Les 4 C du diamant : couleur, pureté, taille, carat',
    description: 'Les quatre critères qui décrivent un diamant, ce que dit chaque note, et pourquoi le certificat d’un diamant synthétique ne se lit plus de la même façon.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'origine',
        title: 'Quatre critères, une langue commune',
        paragraphs: [
          'Les « 4 C » viennent de l’anglais : color, clarity, cut et carat weight. En français : la couleur, la pureté, la taille et le poids en carats. Le GIA, laboratoire américain, les a posés comme système de classement en 1953. C’est encore la langue commune des laboratoires et des joailliers.',
          'Aucun critère ne suffit seul. Deux diamants du même poids peuvent valoir des prix très différents si leur couleur, leur pureté ou leur taille diffèrent.',
        ],
      },
      {
        id: 'couleur',
        title: 'La couleur : de D à Z',
        paragraphs: [
          'L’échelle va de D, incolore, à Z, une teinte légère jaune, brune ou grise. Le laboratoire compare la pierre à des pierres étalons dont la couleur est connue, sous un éclairage contrôlé. L’échelle commence à D pour ne pas se confondre avec des systèmes plus anciens.',
          'Au-delà de Z, ou pour une autre teinte franche comme le rose ou le bleu, on parle de diamant de couleur. Il se classe autrement. L’atelier travaille aussi ces diamants : demandez-les dans le devis.',
        ],
      },
      {
        id: 'purete',
        title: 'La pureté : ce que montre la loupe',
        paragraphs: [
          'Presque tous les diamants portent de petites marques : des inclusions à l’intérieur, des défauts en surface. La pureté se note à la loupe qui grossit dix fois, sur onze degrés, du meilleur au moins bon :',
        ],
        list: [
          'FL : aucune inclusion ni défaut visible à la loupe.',
          'IF : aucune inclusion, seulement d’infimes défauts de surface.',
          'VVS1 et VVS2 : inclusions très, très légères.',
          'VS1 et VS2 : inclusions très légères.',
          'SI1 et SI2 : inclusions légères.',
          'I1, I2 et I3 : inclusions franches.',
        ],
      },
      {
        id: 'taille',
        title: 'La taille : ce qui fait briller',
        paragraphs: [
          'La taille juge la façon dont les facettes renvoient la lumière : l’éclat blanc, les feux colorés, le scintillement quand la pierre bouge. Elle dépend des proportions, de la symétrie et du poli. Une pierre bien taillée paraît plus vive qu’une pierre mal taillée de meilleure couleur.',
          'Le GIA ne donne une note de taille d’ensemble, d’« Excellent » à « Poor », qu’aux pierres rondes. Pour les autres formes, il note le poli et la symétrie. Notre guide des formes explique quoi regarder sur une marquise ou une poire.',
        ],
      },
      {
        id: 'carat',
        title: 'Le carat : un poids, pas une taille',
        paragraphs: [
          'Le carat des pierres est une unité de poids : 1 carat pèse 0,2 gramme, et se divise en 100 points. Une pierre de 0,25 carat pèse donc 25 points. Ce carat n’a rien à voir avec le carat de l’or, qui mesure la part d’or pur dans un alliage.',
          'Certains poids ronds, comme 1 carat, sont très recherchés. Une pierre de 0,99 carat ne se distingue pas à l’œil d’une pierre de 1 carat, mais son prix peut être nettement plus bas.',
        ],
      },
      {
        id: 'synthetique',
        title: 'Diamant synthétique : un certificat différent',
        paragraphs: [
          'Depuis fin 2025, le GIA ne donne plus de lettre de couleur ni de degré de pureté aux diamants synthétiques. Selon lui, plus de 95 % de ceux qui arrivent sur le marché se situent dans une fourchette étroite de couleur et de pureté. Il les classe donc « Premium » ou « Standard », d’après leur couleur, leur pureté et leur finition, et ne classe pas ceux qui sont en dessous.',
          'L’IGI, lui, continue de noter les diamants synthétiques sur l’échelle D à Z, avec un degré de pureté et, pour une pierre ronde, une note de taille. C’est ce certificat que l’atelier fournit pour un diamant synthétique.',
        ],
      },
      {
        id: 'atelier',
        title: 'Chez JR Diamond',
        list: [
          'À partir de 0,50 carat, la pierre est livrée avec son certificat : GIA pour un diamant naturel, IGI pour un diamant synthétique.',
          'Sous 0,50 carat, comme la marquise d’environ 0,25 carat de notre premier modèle, il n’y a pas de certificat. L’atelier filme la pierre pour que vous la voyiez avant de la choisir.',
          'Le configurateur affiche le poids estimé de la pierre. Couleur et pureté se choisissent avec l’atelier, dans le devis.',
        ],
      },
    ],
    sources: [
      { label: 'GIA, communiqué du 2 juin 2025 (4 C, 1953, nouveaux termes pour les diamants synthétiques)', url: 'https://www.gia.edu/gia-news-press/new-descriptive-terminology-for-laboratory-grown-diamonds' },
      { label: 'GIA, diamond color (échelle D à Z, pierres étalons, diamants de couleur)', url: 'https://4cs.gia.edu/en-us/diamond-color/' },
      { label: 'GIA, diamond clarity (11 degrés, loupe ×10)', url: 'https://4cs.gia.edu/en-us/diamond-clarity/' },
      { label: 'GIA, diamond cut (éclat, feux, scintillement)', url: 'https://www.gia.edu/4cs-cut' },
      { label: 'GIA, cut grade (note réservée à la ronde, poli et symétrie pour toutes)', url: 'https://4cs.gia.edu/?p=38874' },
      { label: 'GIA, why cut grades matter (une bonne taille paraît plus brillante)', url: 'https://4cs.gia.edu/?p=13061' },
      { label: 'GIA, carat weight (200 mg, 100 points, poids recherchés)', url: 'https://4cs.gia.edu/en-us/diamond-carat-weight/' },
      { label: 'GIA, laboratory-grown diamond assessment (Premium ou Standard)', url: 'https://hongkong.gia.edu/gem-lab-service/laboratory-grown-diamond' },
      { label: 'IGI, Laboratory Grown Diamond Report (D à Z, pureté, taille)', url: 'https://www.igi.org/lab-grown-diamond-report' },
    ],
    next: [CONFIGURATOR, G_SYNTH, G_FORMES, FAQ_LINK],
  },
  {
    slug: 'or-14-ou-18-carats',
    title: 'Or 14 ou 18 carats : que choisir',
    description: 'Le carat de l’or dit la part d’or pur dans l’alliage. Ce qui change vraiment entre 14 et 18 carats : la couleur, le poids, la solidité, et ce que dit la loi française.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'carat-de-l-or',
        title: 'Ce que veut dire « carat » pour l’or',
        paragraphs: [
          'L’or pur est très mou. On le mélange à d’autres métaux, comme l’argent et le cuivre : c’est un alliage. Le carat dit la part d’or pur, sur 24. Un or 18 carats contient 75 % d’or, soit 750 millièmes. Un or 14 carats en contient 58,5 %, soit 585 millièmes.',
          'Ce carat n’a rien à voir avec celui des diamants, qui est un poids.',
        ],
      },
      {
        id: 'loi',
        title: 'Ce que dit la loi française',
        paragraphs: [
          'En France, l’or a cinq titres légaux : 999, 916, 750, 585 et 375 millièmes. Aucune tolérance n’est admise vers le bas : un bijou annoncé à 750 millièmes en contient au moins autant. Tout bijou d’au moins 375 millièmes peut être vendu sous le nom « or ». Le 14 carats est donc de l’or, au sens de la loi, comme le 18 carats.',
          'Le titre est attesté par un poinçon frappé sur le bijou.',
        ],
      },
      {
        id: 'difference',
        title: 'Ce qui change entre 14 et 18 carats',
        list: [
          'La couleur. Le cuivre rougit l’alliage, l’argent le pâlit. Avec plus d’or, un 18 carats jaune est d’ordinaire d’un jaune plus soutenu qu’un 14 carats.',
          'Le poids. L’or 18 carats est plus dense : d’après les fiches d’un fondeur, environ 15,5 g/cm³ contre 13,0 g/cm³ pour un or jaune 14 carats. La même bague pèse donc près de 20 % de plus en 18 carats.',
          'Le prix. Le 18 carats coûte plus cher : il contient plus d’or par gramme, et il faut plus de grammes pour la même bague.',
          'La solidité. On lit souvent que le 14 carats est plus dur. Les fiches des fondeurs montrent surtout que la dureté dépend de la recette de l’alliage : chez un même fondeur, un or jaune 18 carats recuit peut être plus dur qu’un or jaune 14 carats, et un or blanc au nickel est plus dur que les deux. Les deux titres conviennent à une bague portée tous les jours.',
        ],
      },
      {
        id: 'blanc-et-rose',
        title: 'Or blanc, or rose',
        paragraphs: [
          'L’or rose doit sa teinte au cuivre. L’or blanc est un alliage pâle, souvent recouvert de rhodium pour un blanc éclatant ; cette couche s’use et se refait.',
          'Certains ors blancs contiennent du nickel, d’autres du palladium et pas de nickel. Si vous êtes allergique au nickel, dites-le dans votre demande : l’atelier vous indiquera l’alliage qu’il emploie.',
        ],
      },
      {
        id: 'atelier',
        title: 'Chez JR Diamond',
        paragraphs: [
          'L’atelier travaille l’or 14 et 18 carats, en jaune, blanc et rose, ainsi que le platine. Il ne travaille pas l’argent. Dans le configurateur, choisissez la couleur, puis le titre : le poids de métal estimé change avec lui.',
          'Notre conseil : prenez le 18 carats si vous voulez le jaune le plus riche et la plus grande part d’or. Prenez le 14 carats pour une bague plus légère et moins chère, avec la même allure.',
        ],
      },
    ],
    sources: [
      { label: 'Douane, table de concordance du code des impositions sur les biens et services (titres légaux, appellation « or »)', url: 'https://www.douane.gouv.fr/sites/default/files/2025-12/10/table%20de%20concordance%20partie%20l%C3%A9gislative%20d%C3%A9taill%C3%A9e.pdf' },
      { label: 'Assemblée nationale, question écrite n° 82959 (titre attesté par le poinçon)', url: 'https://www.assemblee-nationale.fr/dyn/13/questions/QANR5L13QE82959.pdf' },
      { label: 'Hoover & Strong, glossaire (carat de l’or)', url: 'https://hooverandstrong.com/links/Glossary' },
      { label: 'Total Materia, gold and gold alloys (cuivre, argent et couleur)', url: 'https://www.totalmateria.com/articles/gold-and-gold-alloys/' },
      { label: 'Cooksongold, or jaune 14 carats « 14ct AY » (densité, dureté)', url: 'https://www.cooksongold.com/downloads/files/bullion/14ctAY_properties_sheet.pdf' },
      { label: 'Cooksongold, or jaune 18 carats « 18ct KK » (densité, dureté)', url: 'https://www.cooksongold.com/downloads/files/bullion/18ctKK_properties_sheet.pdf' },
      { label: 'Cooksongold, or blanc 18 carats au nickel « 18ct WNC »', url: 'https://www.cooksongold.com/downloads/files/bullion/18ctWNC_properties_sheet.pdf' },
      { label: 'Cooksongold, or blanc 14 carats au nickel, à rhodier « 14ct NW »', url: 'https://www.cooksongold.com/downloads/files/bullion/14ctNW_properties_sheet.pdf' },
      { label: 'Cooksongold, or blanc 14 carats au palladium, sans nickel « 14ct NF »', url: 'https://www.cooksongold.com/downloads/files/bullion/14ctNF_properties_sheet.pdf' },
      { label: 'GIA, carat weight (le carat des pierres)', url: 'https://4cs.gia.edu/en-us/diamond-carat-weight/' },
    ],
    next: [CONFIGURATOR, G_4C, G_TAILLE, FAQ_LINK],
  },
  {
    slug: 'taille-de-doigt',
    title: 'Taille de doigt : la trouver sans se tromper',
    description: 'Une taille de bague, c’est un tour de doigt en millimètres. Comment la mesurer, les pièges à éviter, et la correspondance avec les tailles israéliennes et américaines.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'le-chiffre',
        title: 'Ce que veut dire le chiffre',
        paragraphs: [
          'En France, la taille d’une bague est son tour intérieur en millimètres : une bague de taille 52 mesure 52 mm de tour, soit environ 16,6 mm de diamètre. C’est la règle de la norme internationale ISO 8653.',
          'En Israël, les bijoutiers emploient souvent une taille plus courte de 40 : la taille israélienne 12 correspond au 52 français. Les États-Unis ont leur propre échelle. Le tableau plus bas fait la correspondance.',
        ],
      },
      {
        id: 'mesurer',
        title: 'La méthode la plus sûre : une bague qui va déjà',
        list: [
          'Prenez une bague portée au même doigt de la même main. La main dominante est souvent un peu plus forte : chez un droitier, l’annulaire gauche fait en général une demi-taille de moins que le droit.',
          'Mesurez son diamètre intérieur avec une règle, de bord intérieur à bord intérieur, ou faites-la mesurer par un bijoutier. Si l’anneau est large, mesurez au milieu.',
          'Pour une demande surprise, empruntez discrètement une de ses bagues le temps de la mesurer. Vous pouvez aussi tracer son contour intérieur sur une feuille, ou la presser dans un savon pour en garder l’empreinte.',
        ],
      },
      {
        id: 'pieges',
        title: 'Les pièges à éviter',
        list: [
          'Le fil ou la bande de papier autour du doigt : le fil s’étire, le papier se froisse. Le résultat est peu fiable.',
          'Le froid et la chaleur : les doigts rétrécissent au froid et gonflent à la chaleur. Mesurez à température normale, plutôt en fin de journée, et pas juste après le sport.',
          'L’articulation : la bague doit passer la phalange, souvent plus large que la base du doigt.',
          'L’anneau large : il serre davantage. Prévoyez une taille un peu plus grande.',
          'Entre deux tailles, prenez la plus grande : il est plus facile de retirer du métal que d’en ajouter.',
        ],
      },
      {
        id: 'correspondances',
        title: 'Tableau des correspondances',
        table: {
          caption: 'Tailles françaises, diamètre intérieur, tailles israéliennes et américaines',
          head: ['France (tour, mm)', 'Diamètre (mm)', 'Israël', 'États-Unis (env.)'],
          rows: SIZE_RANGE.map((c) => {
            const r = ringSizeRow(c);
            return [r.fr, r.diameterMm, r.il, r.us];
          }),
        },
        after: [
          'Les tailles américaines sont calculées et arrondies au quart. Les tableaux des bijoutiers diffèrent d’un quart, parfois d’une demi-taille. Dans le doute, donnez-nous les millimètres.',
        ],
      },
      {
        id: 'atelier',
        title: 'Chez JR Diamond',
        paragraphs: [
          'Notre premier modèle est dessiné en taille 51½, soit 16,4 mm de diamètre intérieur. L’atelier le fabrique à votre taille ; l’aperçu 3D, lui, reste à la taille dessinée.',
          'Indiquez votre taille dans la demande de devis, dans le système que vous connaissez : 52, 12 en taille israélienne, 6 américain, ou « je ne sais pas ». La première mise à taille est offerte.',
          'Une alliance sertie de pierres tout autour se remet difficilement à taille : pour celle-là, mesurez avec un soin particulier.',
        ],
      },
    ],
    sources: [
      { label: 'ISO 8653:2016, tailles de bagues (aperçu de la norme)', url: 'https://standards.iteh.ai/catalog/standards/iso/799f4661-1465-4f4f-a23d-1a9ad8567517/iso-8653-2016' },
      { label: 'Wikipédia (anglais), ring size (pays de la norme ISO, échelle américaine)', url: 'https://en.wikipedia.org/wiki/Ring_size' },
      { label: 'Gindi Gold, tableau des tailles israéliennes, européennes et américaines', url: 'https://gindigold.com/en/ring-and-bracelet-size-guide/' },
      { label: 'B144, guide des tailles de bagues (taille israélienne, conseils)', url: 'https://www.b144.co.il/Magazine/%D7%AA%D7%9B%D7%A9%D7%99%D7%98%D7%99%D7%9D/%D7%9E%D7%93%D7%A8%D7%99%D7%9A-%D7%9E%D7%99%D7%93%D7%95%D7%AA-%D7%98%D7%91%D7%A2%D7%95%D7%AA/' },
      { label: 'GIA, how to determine ring size (main, fil, articulation, anneau large)', url: 'https://4cs.gia.edu/en-us/blog/how-to-determine-ring-size/' },
      { label: 'GIA, ring size (température, alliances difficiles à mettre à taille)', url: 'https://4cs.gia.edu/?p=12663' },
    ],
    next: [CONFIGURATOR, G_OR, FAQ_LINK],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
