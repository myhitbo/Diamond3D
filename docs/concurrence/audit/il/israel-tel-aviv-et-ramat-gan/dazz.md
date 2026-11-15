# Audit : DAZZ, constructeur de bague (hébreu, ₪)

| | |
|---|---|
| Site | DAZZ, Bourse du diamant de Ramat Gan, bâtiment Maccabi |
| Page de départ | https://dazzdiamonds.co.il/il/build |
| Date | 15/11/2026 |
| Appareils | Chromium headless 1366 × 900, langue he-IL ; émulation iPhone 13 (Playwright) |
| Statut | **complet** jusqu'au récapitulatif. Le site n'a **pas de panier** : la commande passe par WhatsApp (V) |
| robots.txt | `User-Agent: * Allow: /` ; pas de Cloudflare ni de défi (V) |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape (onglet) | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. צורה (forme) | עגול, אובל, טיפה, מרקיזה, אמרלד, קושן, פרינסס, אשר, רדיאנט, לב (10) | aucun : 2 650 ₪ pour le solitaire laboratoire 1 ct, quelle que soit la forme (V) | change : image `/b2c/DAZZ-RG-SO-<forme>/<or>/2.webp` (V) |
| 2. סגנון (style) | solitaire « dès 2 650 ₪ » ; DAZZ « dès 2 800 » ; halo caché « dès 2 800 » ; pavé « dès 2 900 » ; solitaire marquises « dès 3 200 » ; trois pierres baguettes « dès 3 200 » ; trois pierres poires « dès 3 200 » ; Toi et Moi « dès 2 650 ». Pour la forme ronde, s'ajoutent halo et demi-éternité (10 styles) (V) | le prix « dès » s'affiche sur chaque bouton (V) | change : une image par style (V) |
| 3. זהב (or) | rose, blanc, jaune, toujours en 14 k : « la couleur de l'or ne change pas le prix · 14K » (V) | aucun (V) | change : dossiers `rose`, `white`, `yellow` (V) |
| 4. יהלום (diamant) | laboratoire « D–E · VVS2–VS1 · IGI » ou naturel « G–H · VS2 · GIA » ; 1,00, 1,50, 2,00, 3,00, 4,00 ct, prix affiché sur chaque bouton. Toi et Moi : « 0.60 ct au total, poids fixe pour ce modèle » (V) | voir le tableau des prix ci-dessous (V) | **aucun** : même image de 1 à 4 ct, en laboratoire comme en naturel (V) |
| 5. הטבעת (la bague) | récapitulatif : modèle, taille, carat, type, couleur et pureté, certificat, or, prix TTC, référence (`DAZZ-RG-SO-RND-W`). Vues : avant, côté, trois autres angles ; partager ; modifier un détail ; voir la bague à la Bourse ; page du modèle ; commander sur WhatsApp (V) | rappel du total (V) | 5 vues par modèle et par or (V) |

Il n'y a ni taille de doigt, ni gravure, ni platine, ni or 18 k dans le constructeur (V). La taille se règle « après l'offre », et la mise à taille est gratuite (V, page du modèle).

## Contrôles vérifiés

Relevé complet avec `controls.cjs` : 62 contrôles sur ordinateur, 55 sur iPhone (V). Tous ont été actionnés, sauf ceux de la dernière section du tableau.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| צורה · סגנון · זהב · יהלום · הטבעת | onglets d'étape | ouvrent l'étape ; on peut revenir à une étape antérieure sans perdre les choix (V) | inchangé | fonctionne |
| 10 boutons de forme | boutons | la sélection passe sur la forme, l'image change (V) | inchangé | fonctionne |
| המשך לסגנון / לצבע הזהב / ליהלום / לטבעת שלך | bouton principal | passe à l'étape suivante (V) | — | fonctionne |
| חזרה לשלב הקודם | bouton | revient d'une étape (V) | — | fonctionne |
| 8 à 10 boutons de style « … החל מ־ » | boutons | changent de modèle et d'image (V) | prix « dès » sur chaque bouton | fonctionne |
| זהב ורוד / לבן / צהוב | boutons | changent l'image (V) | inchangé | fonctionne |
| יהלום מעבדה / יהלום טבעי | boutons | changent la gamme de prix des carats (V) | 2 650 → 21 200 ₪ à 1 ct | fonctionne ; image inchangée |
| 1.00 / 1.50 / 2.00 / 3.00 / 4.00 קראט | boutons | changent le total (V) | voir le tableau | fonctionne ; image inchangée |
| מבט קדמי / מבט צד / זווית נוספת (×3) | boutons de vue | changent la photo : vues 1, 2, 3… (V) | — | fonctionne |
| לשתף את הטבעת | bouton | copie le lien `…/il/build?shape=round&fam=solitaire-ring&gold=white&dt=lab&ct=1&reveal=1` ; ouvert dans un nouvel onglet, ce lien restaure le récapitulatif (V). Aucun message de confirmation n'a été relevé (V) | — | fonctionne |
| לשנות פרט | bouton | revient à l'étape diamant, choix conservés (V) | — | fonctionne |
| לראות אותה בבורסה ← | lien | ouvre `/il/visit?p=solitaire-ring-round&gold=white&dt=lab-grown&ct=1&from=build` : « nous préparerons la bague que vous avez construite, solitaire rond 1 ct en or blanc, et nous poserons à côté quelques pierres de cette taille ». Durée annoncée : environ une heure, entrée sur rendez-vous avec pièce d'identité (V) | — | fonctionne |
| לעמוד הדגם באתר DAZZ ← | lien | ouvre la fiche `/il/product/solitaire-ring-round?gold=white&dt=lab-grown&ct=1` avec la même configuration (V) | 2 650 ₪ | fonctionne |
| להזמנה בוואטסאפ | lien wa.me | message pré-rempli : modèle, taille, type, carat, couleur et pureté, certificat, or, « 2 650 ₪ (TTC) », référence, lien de configuration (V, lien lu, **non ouvert**) | — | non ouvert (règle de l'audit) |
| דברו איתנו, וואטסאפ (menu), bulle WhatsApp | liens wa.me | message générique « היי DAZZ… » (V, lien lu) | — | non ouverts |
| 054-298-8065 | lien tel: | appel (V, lien lu) | — | non actionné |
| contact@dazzdiamonds.com | lien mailto: | — | — | non actionné |
| פגישה פרטית בבורסה ← | lien | page de rendez-vous ; boutons « לבחור מועד » et « רוצים להכין משהו אחר? » (V) | — | page lue ; la prise de date **n'a pas été lancée** (données personnelles) |
| לא תודה / אישור | bandeau de cookies | « אישור » ferme le bandeau (V) | — | fonctionne |
| Fiche du modèle : « גררו לסיבוב », הזווית הקודמת / הבאה, זווית 1 à 5 | visionneuse | rotation par 5 photos, pas de 3D (V) | — | visuel en 1,06 s (V) |
| Fiche du modèle : מעבדה / טבעי, 1 à 4 ct, 3 ors | boutons | mêmes options que le constructeur (V) | même grille | non actionnés un par un (identiques au constructeur) |
| Fiche du modèle : 12 questions fréquentes | accordéons | présents (V) | — | non ouverts un par un |
| Menu (בית, קטלוג et 5 rubriques, בעיצוב אישי, מחירון, הסיפור שלנו, שאלות נפוצות, צור קשר), pied de page (10 pages de formes, guide, alliances, תקנון, פרטיות, נגישות), lien d'évitement | liens | pages d'information : `/il/prices`, `/il/terms` et `/il/faq` lues avec curl (200) (V) | — | les autres ne sont pas liés au constructeur et n'ont pas été ouverts |
| פתיחת התפריט (iPhone) | bouton | ouvre le menu (I, présent sur iPhone seulement) | — | non actionné |

Absents du constructeur (V) : taille de doigt, gravure, comparaison, enregistrement (en dehors du lien de partage), financement, essayage, 3D, vidéo, réalité augmentée, zoom, panier.

## Options disponibles

- **Formes** (10) : rond, ovale, poire, marquise, émeraude, coussin, princesse, asscher, radiant, cœur.
- **Styles** : solitaire, DAZZ, halo caché, pavé, solitaire marquises, trois pierres baguettes, trois pierres poires, Toi et Moi ; plus halo et demi-éternité pour la forme ronde (V). La liste dépend de la forme : 8 styles avec la forme cœur, 10 avec la forme ronde (V).
- **Or** : 14 k jaune, blanc, rose (V).
- **Diamant** : laboratoire D–E VVS2–VS1 avec certificat IGI ; naturel G–H VS2 avec certificat GIA (V).
- **Carats** : 1 ; 1,5 ; 2 ; 3 ; 4 (Toi et Moi : 0,60 ct au total, fixe) (V).
- **Pierres de côté**, incluses et affichées à l'étape diamant (V) : DAZZ 0,40 ct ; halo caché 0,15 ; pavé 0,50 (« côté et halo caché ») ; halo 0,15 ; solitaire marquises 0,60 ; trois pierres 0,50.

**Prix TTC relevés, solitaire rond en or blanc 14 k** (V, constructeur sur iPhone, confirmé sur `/il/prices`) :

| Carat | Laboratoire (IGI) | Naturel (GIA) |
|---|---|---|
| 1 | 2 650 ₪ | 21 200 ₪ |
| 1,5 | 3 450 ₪ | 42 350 ₪ |
| 2 | 4 250 ₪ | 63 550 ₪ |
| 3 | 5 050 ₪ | 105 900 ₪ |
| 4 | 5 850 ₪ | 132 400 ₪ |

Diamant naturel de 1 ct dans les autres styles, forme ronde (V) : DAZZ 28 250 ₪ ; halo caché 25 600 ₪ ; pavé 22 950 ₪ ; halo 25 600 ₪ ; solitaire marquises 26 500 ₪ ; trois pierres baguettes 27 550 ₪ ; trois pierres poires 29 300 ₪ ; demi-éternité 7 950 ₪. Toi et Moi naturel en forme cœur : 8 850 ₪ (V).

## Prix, délais, retours, garanties

- **Affichage du prix** : total TTC sous le bouton principal, « המחיר כולל מע״מ », mis à jour à chaque clic (V). Pas de décomposition entre monture, pierre et façon (V). La page `/il/prices` explique ce qui fait le prix : poids, type de pierre, taille ; « la couleur de l'or ne change pas le prix » (V).
- **Commande et paiement** : on clique sur WhatsApp, l'atelier confirme les détails et la disponibilité, puis « nous fermons un paiement sécurisé ». « Nous ne débitons ni ne conservons de carte sur le site » (V, `/il/terms`). Aucun moyen de paiement n'est affiché, ni paiement échelonné ni Bit (V).
- **Délai** : « fabriquée pour vous… prête en quelques jours ouvrés », sans chiffre (V, récapitulatif et conditions). La version anglaise annonçait environ 10 jours ouvrés (inventaire national ; non relu aujourd'hui).
- **Livraison** : envoi assuré jusqu'au domicile, dans un écrin cadeau ; retrait possible à la Bourse sur rendez-vous (V). Frais de livraison non chiffrés en hébreu (V).
- **Retours** (V, `/il/terms`) :
  - rétractation de 14 jours selon la loi de protection du consommateur, avec des frais d'au plus 5 % ou 100 ₪, le moins élevé des deux ;
  - le sur-mesure peut en être exclu, ce que les conditions rappellent ;
  - échange possible sous 14 jours contre toute pièce de la collection, sans remboursement ;
  - mise à taille gratuite, « toujours ».
- **Garantie** : garantie du fabricant à vie (sertissage, structure, fonte), entretien à la Bourse (V).
- **Certificats** : IGI pour le laboratoire, GIA pour le naturel ; pas de certificat séparé pour les pierres de côté (V).

## Confiance et service

- **Libellé du synthétique** : « יהלום מעבדה » (V).
- **Langues et devises** : hébreu en ₪ ; anglais en $ sur dazzdiamonds.com (V).
- **Avis clients** : aucun dans le constructeur ni sur la fiche lue (V).
- **Preuves de fabrication** : « atelier de fonte à nous, scan STL de chaque pierre » dans le pied de page (V, `/il/faq`). Aucune photo ni vidéo d'atelier dans le constructeur, pas de suivi de commande (V).
- **Service** : WhatsApp partout, téléphone, courriel, rendez-vous à la Bourse pré-rempli avec la bague construite (V).

## Points forts à retenir pour JR Diamond

1. **Le prix suit chaque clic, TTC.** Le passage du laboratoire au naturel montre l'écart sur le bouton même : 2 650 contre 21 200 ₪ à 1 ct (V). C'est le prix « à partir de », puis exact, que JR Diamond attend de `src/config/pricing.ts`.
2. **Un message de commande complet.** Le lien WhatsApp contient la référence, le prix TTC et le lien de configuration (V). La forme est directement réutilisable pour le bouton WhatsApp et le devis de JR Diamond.
3. **Un lien de partage qui restaure la bague** (V). Il est utile entre fiancés et pour l'atelier. JR Diamond peut faire de même avec les paramètres d'adresse du configurateur.
4. **Un rendez-vous qui reprend la configuration** : « nous préparerons la bague que vous avez construite » (V). C'est un pont simple entre le site et la visite à la Bourse.
5. **La vitesse.** Le visuel apparaît en 0,59 s sur ordinateur et 0,79 s sur iPhone, grâce à des photos précalculées (V). Le rendu 3D de JR Diamond doit rester proche.
6. **Des conditions franches** : exception légale du sur-mesure, échange sous 14 jours, mise à taille gratuite (V).

## Défauts observés

1. **L'image ne change ni avec le carat ni avec l'origine** : la même photo sert de 1 à 4 ct (V). Le client ne voit pas la taille qu'il paie, alors que JR Diamond promet que « ce que vous voyez existe ».
2. **Délai flou** : « quelques jours ouvrés », sans chiffre (V).
3. **Choix limités** : ni taille de doigt, ni gravure, ni platine, ni 18 k (V). Le Toi et Moi impose 0,60 ct (V).
4. **« 1.00 קראט » ambigu en demi-éternité** : 7 950 ₪ en naturel, contre 21 200 ₪ pour un solitaire du même poids (V). Le poids affiché est probablement le total des petites pierres (I), mais l'écran ne le précise pas.
5. **Aucune confirmation visible après « partager »** : le lien est copié sans message à l'écran (V). Sur un téléphone sans presse-papiers accessible, l'utilisateur ne sait pas que l'action a réussi (I).
6. **Aucun moyen de paiement affiché** avant la conversation WhatsApp (V) : ni échelonnement ni Bit.

## Limites de l'audit

- WhatsApp, téléphone et courriel ne sont pas ouverts (règle de l'audit). La prise de rendez-vous n'est pas lancée, et le paiement n'a pas été vu (il n'existe pas sur le site).
- La fiche du modèle n'a été ouverte qu'en solitaire rond. Les questions fréquentes de la fiche n'ont pas été dépliées.
- L'iPhone est émulé (Playwright, moteur Chromium), pas un vrai Safari.
- Les temps viennent d'un ou deux passages sur une machine partagée ; ce sont des ordres de grandeur.
- Les temps mesurés (V) :
  - ordinateur : DOM 468 ms, visuel 594 ms (575 ms au second passage), LCP 640 ms (image webp) ;
  - iPhone : DOM 483 ms, visuel 791 ms, LCP 732 ms.
- Le site anglais (dazzdiamonds.com) n'a pas été audité.

## Sources

- https://dazzdiamonds.co.il/robots.txt
- https://dazzdiamonds.co.il/il/build (constructeur, actionné)
- https://dazzdiamonds.co.il/il/build?shape=round&fam=solitaire-ring&gold=white&dt=lab&ct=1&reveal=1 (lien de partage)
- https://dazzdiamonds.co.il/il/product/solitaire-ring-round?gold=white&dt=lab-grown&ct=1
- https://dazzdiamonds.co.il/il/visit?p=solitaire-ring-round&gold=white&dt=lab-grown&ct=1&from=build
- https://dazzdiamonds.co.il/il/prices · https://dazzdiamonds.co.il/il/terms · https://dazzdiamonds.co.il/il/faq
- Inventaire national : `docs/concurrence/2026-11-15_israel.md` (version anglaise, délai d'environ 10 jours)
