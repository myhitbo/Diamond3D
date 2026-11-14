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
/** Ordre d'affichage : `paragraphs`, puis `list`, puis `after`. */
export type GuideSection = { id: string; title: string; paragraphs?: string[]; list?: string[]; after?: string[] };
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
    next: [CONFIGURATOR, { label: 'Guide : les formes de diamant', href: '/fr/guides/formes-de-diamant' }, FAQ_LINK],
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
    next: [CONFIGURATOR, { label: 'Guide : synthétique ou naturel', href: '/fr/guides/diamant-synthetique-ou-naturel' }, FAQ_LINK],
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
    next: [CONFIGURATOR, FAQ_LINK],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
