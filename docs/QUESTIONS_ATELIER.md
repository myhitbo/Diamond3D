# Questions à l'atelier — préparation des phases 3 à 6

Deux versions : une **courte** (10 questions, pour un premier échange ou un message rapide) et une **complète** (79 questions, à remplir au fil des phases).

---

## Relance après la synthèse du 3 novembre (questions encore ouvertes)

*Envoyée par WhatsApp le 3 novembre 2026, en version courte (7 questions : coûts ou prix client, fonte incluse ou non, platine, 3 niveaux de marge, grille des diamants, 20 bagues chiffrées, tailles / paiement / livraison). En attente de réponse.*

Bonjour,

Merci pour la synthèse, elle débloque le moteur de prix. Il me reste des points à préciser, surtout sur les prix :

1. Les montants en USD (diamant 132 $, maquette, impression, fonte, sertissage, polissage) sont-ils **vos coûts** ou **les prix facturés au client** ? Si ce sont des coûts, quelle marge appliquez-vous dessus ?
2. Les 370–380 ILS/g de l'or 14 k incluent-ils déjà la reprise de fonte et le polissage à 10 $/g, ou s'y ajoutent-ils ?
3. Prix du **platine** au gramme ?
4. Pour la marge variable : pouvez-vous définir 3 niveaux (par exemple solitaire simple / bijou personnalisé / pièce complexe), avec un coefficient pour chacun ?
5. Prix des diamants : avez-vous une grille (forme, carat, couleur, pureté, naturel ou laboratoire, avec ou sans certificat) ou un fournisseur dont je peux reprendre les prix ?
6. Taux USD → ILS : lequel utilisez-vous, et à quelle fréquence le mettez-vous à jour ?
7. Pouvez-vous chiffrer à la main **une vingtaine de configurations** (modèle, métal, pierre, taille) pour que je vérifie le calcul automatique ?
8. Plage de tailles fabriquées ? Envoyez-vous un baguier ?
9. Moyens de paiement, livraison et assurance, conditions d'annulation ?
10. Hébreu au lancement : oui ou non ? Marchés prioritaires et devise de facturation ?

Pour la bague marquise, je m'occupe de la retouche web (griffes et « 8 ») et je vous enverrai des captures à valider.

---

## Version courte (10 questions)

Bonjour,

Le prototype 3D de la bague marquise fonctionne. Pour avancer sur les prix, le devis et les autres modèles, j'ai dix questions. Des réponses partielles suffisent pour commencer.

1. **La bague marquise** : la forme en « 8 » au bout de l'alliance est-elle normale sur la pièce finie ? *(Métaux déjà répondus le 22/10 : or 14 et 18 k jaune / rose / blanc, platine.)*
2. **Bibliothèque CGTrader** : pour élargir le catalogue, nous partons de modèles CGTrader (gratuits d'abord, puis payants ; têtes, corps, bagues complètes en `.3dm`). Je vous enverrai une sélection : pouvez-vous dire pour chacun s'il est fabricable tel quel, ce qu'il faut corriger (épaisseurs, griffes, sièges, taille), et lesquels vous voulez proposer ? Avez-vous des photos studio de vos pièces réelles pour calibrer les couleurs à l'écran ?
3. **Comment calculez-vous un prix aujourd'hui ?** Un exemple complet et chiffré (métal au cours du jour, pertes, façon, sertissage, pierre, marge, TVA) me suffit pour commencer. Et pouvez-vous chiffrer à la main une vingtaine de configurations de référence pour que je vérifie le calcul automatique ?
4. **Données du fondeur** : densités de vos alliages (18 k jaune, blanc, rose, platine), pourcentage de perte, et poids réels des pierres du modèle actuel.
5. **Pierres** *(déjà répondu le 22/10 : diamant naturel et synthétique, diamants de couleur, émeraude / saphir / rubis)* : quels certificats ? Quelles formes et tailles par modèle ? Vos pierres de couleur « synthétiques » sont-elles de vraies pierres synthétiques (corindon, béryl de laboratoire) ou du verre ? La loi impose de les nommer différemment. Avez-vous un stock certifié à vendre en priorité ?
6. **Tailles** : quelle plage fabriquez-vous, et que proposez-vous si le client se trompe (remise à taille offerte ? combien de fois ? limites sur les alliances serties) ? Envoyez-vous un baguier ? Maquette résine à essayer avant fabrication ?
7. **Options** : gravure intérieure (laser ? polices ? hébreu ?), finitions (poli, brossé, martelé), autres variantes ?
8. **Commande** : acompte à combien de pourcent, moyens de paiement acceptés (Stripe ou autre compte existant ?), livraison et assurance, délai total de fabrication, nombre de modifications incluses avant lancement ?
9. **Organisation** : qui répond aux demandes de devis et sous quel délai ? Souhaitez-vous utiliser le configurateur en boutique sur tablette ? Avez-vous déjà un site, un domaine, un logo, des CGV ?
10. **Marchés et langues** : français et anglais sont prêts ; l'hébreu dès le lancement ? Quels pays vendez-vous en priorité, et en quelle devise facturez-vous ?

Le plus urgent : les points 1 à 4. Les fichiers peuvent être déposés dans un dossier partagé ; je confirme sous 48 h s'ils sont exploitables tels quels.

Merci.

---

## Version complète (66 questions)

Bonjour,

Le prototype 3D de la bague marquise fonctionne (fichier Rhino → modèle web de 191 Ko, écart max 0,02 mm, configurateur FR/EN sur mobile et ordinateur). Pour passer à la suite — autres modèles, prix, devis, commande — j'ai besoin de vos réponses et de quelques fichiers. Répondez directement sous chaque point, même partiellement ; « je ne sais pas » ou « à décider » sont des réponses utiles.

## 1. Validation du modèle actuel (bague marquise + alliance, `Ring.3dm`)

1. *(Griffes longues : réponse déjà donnée, à reporter dans `TODO.md`.)*
2. À l'extrémité gauche de l'alliance, les sièges des pierres forment un « 8 » visible. Est-ce normal sur la pièce finie ?
3. Les deux bagues sont-elles vendues ensemble, séparément, ou les deux ?
4. Dans quels métaux proposez-vous réellement ce modèle ? (or 18 k jaune / blanc / rose, platine 950, autre ?)
5. L'or blanc est-il rhodié ? Le platine est-il poli ou satiné ?
6. La marquise 6 × 3 mm : quel poids réel en carats ? Quel poids pour les 6 rondes de 1,4 mm et les 10 rondes de 1,3 à 2,3 mm de l'alliance ?

## 2. Bibliothèque de modèles (CGTrader)

Le catalogue sera élargi à partir de modèles CGTrader (gratuits d'abord, puis payants ; `.3dm` / STL : têtes, corps, bagues complètes). Ces fichiers ne sont pas garantis fabricables : votre validation est indispensable.

7. Pour chaque modèle de la sélection que je vous enverrai : fabricable tel quel ? Sinon, que faut-il corriger (épaisseur minimale du corps, section des griffes, sièges des pierres, tolérances de sertissage) ?
8. Pouvez-vous faire ces corrections dans Rhino/Matrix, ou faut-il un prestataire CAO ? Combien de temps par modèle ?
9. Quelles têtes et quels corps voulez-vous combiner entre eux ? Faut-il un point d'ancrage commun (hauteur et diamètre de la galerie) pour que toute tête se monte sur tout corps ?
10. En quelle taille de doigt les modèles doivent-ils être ramenés pour l'affichage web (actuellement 51½) ?
11. Avez-vous des photos studio de vos pièces réelles (fond neutre, plusieurs angles) ? Elles servent à calibrer les teintes des métaux et des pierres à l'écran.

## 3. Pierres

12. Quelles formes de pierre centrale proposez-vous sur chaque modèle ? Chaque forme nécessite une tête modélisée : lesquelles existent déjà en CAO ?
13. Quelles tailles de pierre centrale (en mm ou en carats) par forme ?
14. Diamant naturel, laboratoire, ou les deux ? Quels certificats (GIA, IGI, HRD) ?
15. Quelles qualités proposez-vous (couleur D–K, pureté IF–SI2) ? Faut-il laisser le client choisir ou proposer 2–3 niveaux (« bon », « très bon », « exceptionnel ») ?
16. Pierres de couleur (saphir, rubis, émeraude, autres) : oui ou non ? Sur quels modèles ?
17. Avez-vous un stock de pierres avec certificats que vous souhaitez vendre en priorité, ou achetez-vous à la commande ?

## 4. Prix

18. Comment calculez-vous aujourd'hui le prix d'une bague ? Décrivez votre méthode avec un exemple chiffré complet.
19. Cours du métal : quelle source utilisez-vous (fondeur, cotation), et à quelle fréquence le prix change-t-il ?
20. Densités des alliages de votre fondeur (or 18 k jaune, blanc, rose, platine 950) ?
21. Pourcentage de perte de fonte et de finition que vous appliquez au poids de métal ?
22. Façon : forfait par modèle, prix horaire, ou grille ? Donnez les montants.
23. Sertissage : prix par pierre selon la taille et le type (griffes, rail, pavé) ?
24. Prix des pierres : grille par forme / poids / qualité / origine, ou prix fournisseur au cas par cas ?
25. Marge : coefficient unique ou variable selon le modèle ?
26. Gravure, finition spéciale, écrin, certificat atelier : inclus ou en supplément ? Montants ?
27. TVA et pays de vente : France uniquement, Union européenne, Israël, États-Unis ? Dans quelle devise facturez-vous ?
28. Pouvez-vous fournir **20 configurations de référence** (modèle, métal, pierre, taille) avec le prix que vous établiriez à la main ? Elles serviront à vérifier le moteur de prix.
29. Durée de validité d'un devis ?
30. Souhaitez-vous afficher un prix calculé automatiquement, ou toujours « sur devis » avec un prix indicatif ?

## 5. Tailles et essayage

31. Quelles tailles de doigt fabriquez-vous (plage, demi-tailles) ? Quelles normes afficher (France, US, UK, Israël, mm) ?
32. Remise à taille : offerte ? Combien de fois ? Dans quel délai ? Quelles limites (pavé, alliance sertie tout le tour) ?
33. Envoyez-vous un baguier physique ? Acceptez-vous une commande « taille inconnue » (cadeau surprise) ?
34. Proposez-vous une maquette résine ou cire à essayer avant fabrication ? Offerte ou facturée ?

## 6. Gravure et options

35. Gravure intérieure : oui ? Laser ou main ? Polices disponibles ? Nombre de caractères maximum selon la largeur de l'anneau ? Hébreu possible ?
36. Finitions (poli, brossé, martelé, sablé) : lesquelles, sur quels modèles ?
37. Autres options : halo caché, pierres sur le corps, mélange de deux métaux ?

## 7. Fabrication et délais

38. Étapes de fabrication et durée de chacune (validation CAO, cire/impression, fonte, sertissage, polissage, contrôle, expédition) ?
39. Délai total annoncé au client, et délai express possible ?
40. Qui valide la CAO finale avec le client : vous, par e-mail, par téléphone ?
41. Combien de modifications de design incluez-vous avant fabrication ? Au-delà, facturez-vous ?

## 8. Commande, paiement, livraison

42. Acompte à la commande : quel pourcentage ? Solde avant expédition ou à la livraison ?
43. Moyens de paiement acceptés : carte, virement, paiement en plusieurs fois ? Avez-vous déjà un compte Stripe, PayPal ou un terminal ?
44. Livraison : transporteur, assurance, pays desservis, frais ?
45. Retour et annulation sur un bijou sur mesure : conditions ?
46. Garantie : durée, couverture (pierres, sertissage, métal) ?
47. Documents remis avec le bijou : facture, certificat de la pierre, certificat de l'atelier (poids, métal, pierres) ?

## 9. Boutique et organisation

48. Qui recevra et traitera les demandes de devis ? Combien de personnes ? Délai de réponse que vous vous engagez à tenir ?
49. Utilisez-vous le configurateur en boutique sur tablette ? Faut-il que le vendeur puisse enregistrer une configuration au nom d'un client ?
50. Avez-vous déjà un site, un nom de domaine, une boutique en ligne, un logiciel de caisse ou de gestion à connecter ?
51. Logo, charte graphique, photos de l'atelier, textes de présentation : disponibles ?

## 10. Langues et marchés

52. Langues du site : français et anglais confirmés ; hébreu dès le lancement ou plus tard ?
53. Qui traduit et relit les textes (noms de modèles, descriptions, CGV) ?
54. Marchés visés en priorité : France, Europe, Israël, États-Unis ?

## 11. Juridique

55. Conditions générales de vente, mentions légales, politique de confidentialité : existantes ou à rédiger ?
56. Durée de conservation souhaitée des demandes de devis et des photos envoyées par les clients ?

## 12. Transformation d'un bijou de famille (ajouté le 14/11)

57. La page `/fr/transformation` dit : « Rien n'est démonté ni fondu avant votre accord. » Est-ce exact ?
58. Elle dit aussi que l'or récupéré pèse un peu moins que le bijou (soudures, pertes de fonte) et qu'une pierre fragile peut casser au dessertissage. Formulation à valider.
59. Envoyez-vous aussi des photos des étapes pour une transformation, comme pour les autres bijoux ?
60. Comment le client remet-il son bijou : à l'atelier, par envoi assuré ? Depuis la France ?

## 13. Guides 4 C, or 14 ou 18 carats, taille de doigt (ajouté le 14/11)

61. Votre or blanc contient-il du nickel ou du palladium ? Le guide de l'or renvoie les clients allergiques au nickel vers vous.
62. Frappez-vous le titre (585 ou 750) à l'intérieur des bagues ? Le guide dit seulement qu'en France le titre est attesté par un poinçon.
63. Sous 0,50 carat, la pierre n'a pas de certificat : est-ce exact pour toutes les pierres, naturelles et synthétiques ? Le guide des 4 C le dit.
64. Le guide des 4 C dit que la couleur et la pureté se choisissent avec vous, dans le devis. Est-ce votre façon de faire ?
65. Le guide de la taille de doigt donne la taille israélienne comme « taille française − 40 » (12 = 52), d'après deux bijoutiers israéliens. Est-ce le système que vous employez ?
66. Le guide de l'or ne tranche pas sur la dureté : selon les fiches des fondeurs, elle dépend de l'alliage plus que du titre. Votre expérience à l'atelier ?

## 14. Déclaration d'accessibilité, politique de confidentialité, informations légales (ajouté le 15/11)

Les deux pages existent en brouillon (`/fr/accessibilite`, `/fr/confidentialite`, `/en/accessibility`, `/en/privacy`, `/he/accessibility`, `/he/privacy`). Tout ce qui manque y apparaît en surligné « [à compléter : …] » ; les réponses se saisissent une seule fois, dans `src/config/business.ts`.

67. Forme juridique de l'activité : עוסק פטור, עוסק מורשה ou société ? Nom légal exact, nom commercial, et numéro à publier sur le site (ח.פ. pour une société, ע.מ. ou numéro d'identité pour un entrepreneur en nom propre).
68. Adresse postale à publier (immeuble et bureau à la Bourse du diamant), téléphone, et adresse e-mail publique pour les questions et les demandes d'accès ou de rectification des données. Avez-vous une adresse à l'étranger, en France par exemple ?
69. Chiffre d'affaires annuel des trois derniers exercices, nombre de salariés, total du bilan. Ces chiffres décident de l'exemption d'accessibilité (100 000 ₪), du référent accessibilité obligatoire (25 salariés), du sous-titrage obligatoire des vidéos (5 M₪), du montant des amendes, et plus tard du statut de microentreprise en France (10 personnes, 2 M€).
70. Qui sera le contact accessibilité publié sur le site (nom, téléphone, e-mail, WhatsApp) ? Qui s'engage à répondre, à proposer tout de suite une autre solution (devis par téléphone ou par e-mail) et à faire corriger un défaut signalé en 60 jours au plus ?
71. Recevez-vous des clients à l'atelier de la Bourse ? Comment se passe l'accès : contrôle à l'entrée, pièce d'identité, ascenseur, toilettes accessibles, stationnement, transports ? Une autre solution est-elle possible (rendez-vous ailleurs, visite, visioconférence) ? S'il n'y a pas d'accueil du public, la page le dira.
72. Les vidéos de fabrication auront-elles une voix ou un commentaire, ou seront-elles seulement visuelles ? Les PDF que vous voudriez publier (procédure, certificats) sont-ils créés par l'atelier ou reçus de tiers (GIA, IGI) ?
73. Quelle messagerie recevra les demandes du site et enverra les e-mails : Gmail ou Google Workspace, Outlook, hébergeur israélien ? Dans quel pays sont ses serveurs ? Avez-vous un contrat ou un accord de traitement des données avec ce fournisseur ?
74. Combien de personnes ont accès à la boîte des devis et au WhatsApp de l'atelier ? Jusqu'à 2 personnes en plus de vous, le règlement israélien de 2017 sur la sécurité des données prévoit un niveau allégé ; au-delà, un niveau plus exigeant.
75. Durée de conservation (précise la question 56) : pour une demande de devis sans suite, pour une commande, pour les photos d'un bijou de famille ? Que deviennent ensuite les e-mails (suppression, archivage) ? Acceptez-vous de supprimer les données d'un client sur simple demande, même si elles sont exactes ?
76. Les adresses des clients serviront-elles à relancer un devis, à envoyer une lettre d'information ou des promotions par WhatsApp ? Le numéro WhatsApp est-il un compte WhatsApp Business ?
77. Publication des photos et vidéos de fabrication : comment un client retire-t-il son accord, et que devient une publication déjà faite ? Ses mains ou son visage peuvent-ils apparaître ?
78. Informations de vente à distance à publier (reprend les questions 42 à 46) : moyens et modalités de paiement, mode et délai de livraison, durée de validité d'un devis, garantie (durée, ce qu'elle couvre).
79. Relecture du texte hébreu des deux pages par un locuteur natif (traduction faite par l'IA).

## Ce que j'attends concrètement, par ordre d'urgence

1. Réponses aux questions 2 à 6 (validation du modèle actuel).
2. Validation de la sélection CGTrader + photos studio (questions 7 à 11).
3. Densités, pertes, poids réels des pierres (questions 6, 20, 21).
4. Méthode de prix et les 20 configurations de référence (questions 18 à 30).
5. Le reste peut suivre au fil des phases.

Merci. Les fichiers peuvent être déposés dans un dossier partagé ; je confirme réception et je vous dis sous 48 h si chaque fichier est exploitable tel quel ou s'il demande une préparation dans Rhino.
