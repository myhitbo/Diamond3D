# Audit : La Maison de l'Alliance, monture + diamant certifié au poids près (français, €)

| | |
|---|---|
| Site | La Maison de l'Alliance (enseigne de la SARL Shop'Or, RCS 342 689 429), 104 boulevard Haussmann, 75008 Paris ; bijouterie « depuis 1987 » (V, CGV et accueil) |
| Page de départ | https://www.maisondelalliance.fr/bijoux-diamant/sur-mesure/solitaires, puis la fiche https://www.maisondelalliance.fr/monture/bagues-classiques-platine-950-pt-manae-pt |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) |
| Statut | **complet jusqu'au panier**. Fiche de bague actionnée option par option, panier atteint avec un article (session jetable, jamais « Confirmer votre commande »). Non faits : le filtre de la liste (ouvert, non appliqué), le tri, les alliances configurées une à une, le rendez-vous, les fiches de pierres de couleur |
| robots.txt | `Disallow: /admin/` seulement (V). Pas de défi, pas de captcha, aucune requête bloquée par notre garde. Intervalle de 2,5 s entre pages respecté |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

Le parcours est le plus proche, en France, de l'idée « une bague, un prix qui suit chaque choix » : une monture fixe, dont on règle la pierre au poids, à la couleur, à la taille (cut) et à la pureté, avec un récapitulatif chiffré. Il n'y a **aucune 3D** : c'est la même photo à tous les choix (V).

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Accueil | 4 grandes entrées : alliances femme, alliances homme, bagues de fiançailles, bagues « diamants de synthèse » ; bandeau « −50 % sur tout, offre valable jusqu'au 30/11 » ; boutique, rendez-vous, WhatsApp, Trustpilot (V) | prix barrés partout (ex. 3 142 → 1 571 €) | photos |
| Liste « Solitaires Diamants Certifiés Sur Mesure » | 152 montures, « à partir de » ; filtres Style (classique, accompagné, entourage, trilogie), Métal (platine, or jaune, blanc, rose), Forme (rond, princesse, émeraude, ovale, poire) ; tri (V) | prix « à partir de » par monture, de 1 067 à 2 423 € sur les 20 premières (V) | photo de la monture |
| Fiche monture | Métal (4 liens vers une fiche par métal), Poids (8), Couleur (5), Taille de coupe (4), Pureté (7), taille de doigt (liste), gravure, récapitulatif (V) | recalculé à chaque clic, sans rechargement (V) | **aucun** : même photo à toute option (V) |
| Panier | modèle, collection, métal, poids du métal en grammes, prix, gravure, doigt ; « Confirmer votre commande » ; Alma (V) | 920 € pour une configuration affichée 1 291 € (voir Défauts) | — |

## Contrôles vérifiés

Fiche MANAE PT (solitaire classique, platine 950, diamant naturel GIA) sauf mention. Prix en € TTC, **remise de 50 % déjà appliquée** (le prix barré est le double) ; l'option modifiée est la seule changée par rapport à 0,30 ct · H · SI1 · GD (V).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Métal : Platine / Or blanc / Or jaune / Or rose | 4 liens | chacun ouvre **une autre fiche** (autre adresse), avec sa propre pierre par défaut (V) | départ : platine 1 129 € (0,30 ct) ; or jaune 1 249 € (0,30 ct) ; or blanc 1 295 € et or rose 1 291 € (la pierre par défaut y est de 0,34 ct, non comparables) (V) | fonctionnent (3 sur 3 actionnés + platine) |
| Poids carat : 0,30 · 0,40 · 0,50 · 0,60 · 0,70 · 0,80 · 0,90 · 1,00 ct | 8 boutons radio | le récapitulatif change (V) | 1 129 · 1 277 · 1 496 · 1 663 · 2 051 · 2 277 · 2 764 · 3 583 € (V) | fonctionnent (8 sur 8) |
| Couleur : H · G · F · E · D | 5 boutons radio | idem (V) | 1 129 · 1 159 · 1 159 · 1 188 · 1 218 € (G et F au même prix) (V) | fonctionnent (5 sur 5) |
| Taille (coupe) : GD · VG · EX · 3EX | 4 boutons radio | idem (V) | 1 129 · 1 146 · 1 163 · 1 181 € (V) | fonctionnent (4 sur 4) |
| Pureté : SI2 · SI1 · VS2 · VS1 · VVS2 · VVS1 · PUR | 7 boutons radio | idem (V) | 1 101 · 1 129 · 1 159 · 1 188 · 1 218 · 1 249 · 1 277 € (V) | fonctionnent (7 sur 7) |
| Taille de doigt | liste | 30 valeurs de 45 à 74 (V) | inchangé (V) | fonctionne ; **obligatoire** pour ajouter au panier : sans elle, le bouton ne fait rien d'annoncé (V) |
| Votre gravure offerte | section dépliable | champ « Votre texte (40 caractères max) », deux styles « Bâton » et « Anglaise (Calligraphiée) », une case (V) | gratuite (V) | ouverte ; **rien saisi** |
| Aides « ? » à côté de Couleur, Taille, Pureté | boutons | présents ; leur contenu n'a pas été lu | — | non actionnés |
| Ajouter au panier | bouton | redirige (302) vers `/order/card/list` (V) | — | fonctionne |
| Découvrir en boutique | lien | mène à `/rdv` (V) | — | non actionné |
| « Modèles MANAE PT disponibles immédiatement » | 5 cartes | pierres précises : 0,35 D SI1 à 1 383 € ; 0,40 D SI1 1 504 € ; 0,50 D SI1 2 201 € ; 0,60 E VVS2 2 652 € ; 1,00 G SI2 4 246 € (V) | — | une fiche ouverte (voir ci-dessous) |
| Fiche d'une pierre en stock (0,35 D SI1) | page | certificat **GIA n° 5513740368**, date, poids, couleur, pureté, coupe 3EX, poli, symétrie, fluorescence « non » ; bague présentée en taille 53, « disponible immédiatement », livraison prévue le 20/11/2026 (V) | 1 383 € | lue |
| Liste : Filtrer | panneau latéral | 4 styles, 4 métaux, 5 formes (rond, princesse, émeraude, ovale, poire), « Valider », « Réinitialiser » (V) | — | **ouvert, non appliqué** |
| Liste : Trier | menu | — | — | non ouvert |
| Bagues « diamants de synthèse » (fiche MANAE PT synthétique) | 5 poids | 0,50 · 0,70 · 1,00 · 1,50 · 2,00 ct ; pierre fixe « D VVS2 » ; pas de choix de couleur, de pureté ni de coupe (V) | 1 052 · 1 102 · 1 177 · 1 302 · 1 427 € (V) | fonctionnent (5 sur 5) |
| Alliance « Mistral » (demi-jonc, platine) | largeur 2,00 à 4,50 mm (6) | seule la largeur et le métal sont proposés (V) | 517 · 633 · 749 · 883 · 1 045 · 1 201 € (V) | fonctionne (6 sur 6) |
| Cookies | fenêtre bloquante | « Tout accepter » ou « Personnaliser » ; la personnalisation offre « Tout refuser » (V) | — | refusé |

## Options disponibles

- **Montures** : 152 (naturel) et 152 (synthétique), en 4 styles ; 4 métaux (platine 950, or blanc, jaune, rose 750) (V).
- **Pierre naturelle (GIA)** : 8 poids de 0,30 à 1,00 ct ; couleur D à H ; coupe GD à 3EX ; pureté SI2 à PUR ; **forme ronde sur la fiche** (la liste filtre 5 formes) (V).
- **Pierre synthétique (IGI)** : 5 poids de 0,50 à 2,00 ct ; qualité fixe D VVS2 (V).
- **Pierres de couleur** : non proposées dans le parcours relevé (S ; rubrique « Joaillerie » non ouverte).
- **Alliances** : 1 836 produits en 843 familles, largeur et métal ; sur mesure « sur contact » ; gravure (V).
- **Taille de doigt** : 45 à 74 (V). **Gravure** : 40 caractères, 2 styles, gratuite (V).

## Prix, délais, retours, garanties

- **Affichage** : prix TTC, barré et remisé (« −50 % SUR TOUT jusqu'au 30/11 ») ; sur la fiche, « Meilleur prix jusqu'au 22/11/2026 » (V). Le tarif plein est exactement le double du prix affiché sur tous les relevés (V) ; si ce « −50 % » est permanent en pratique, le prix barré n'est qu'un repère (S, non vérifié ; l'historique des prix n'est pas public).
- **Prix décomposé** : non. Le récapitulatif donne un seul « Prix total » ; on déduit la part de la pierre en comparant deux configurations (I).
- **Délai** : « Livraison gratuite prévue : 10/01/2027 » sur la fiche à façon, soit environ huit semaines le jour du relevé (V pour la date, I pour la durée) ; « 20/11/2026 » pour une pierre en stock (V). Aucun délai en jours ouvrés n'est écrit.
- **Paiement** : carte, virement ; Alma en 2, 3, 4 fois sans frais, en 10 ou 12 fois avec frais (V, CGV et panier).
- **Retours** : « satisfait ou remboursé » de 14 jours après réception, par e-mail ; trois options : échange, avoir de 2 ans, remboursement, avec **50 € retenus si gravure** (V). **Les produits « personnalisés par une configuration spécifique » (largeur non affichée, par exemple), hors gravure, ne sont ni repris ni échangés** ; une mise à taille ôte aussi le retour (V, article 7).
- **Garanties** : à vie contre les vices de fabrication ; entretien gratuit à vie (ultrasons, polissage, contrôle du sertissage) ; mise à taille gratuite pendant 6 mois après livraison ; garantie du prix le plus bas sous 30 jours (V, `/garanties`, CGV).
- **Transport** : Colissimo, Poste en valeur déclarée ou UPS, assurés, contre signature (V).
- **Certificat** : GIA remis avec la bague (naturel) ; IGI (synthétique) ; numéro gravé au laser (V, texte de la liste).

## Confiance et service

- **Ancrage** : bijouterie familiale depuis 1987, boutique de Haussmann avec un atelier attenant (gravure, entretien) (V).
- **Avis** : lien Trustpilot en pied de page ; la note n'est pas affichée (V).
- **Contact** : téléphone, e-mail, rendez-vous, WhatsApp (lien wa.me) (V ; non ouverts).
- **Libellé du synthétique** : voir le tableau ci-dessous.
- **Preuves de fabrication** : aucune photo ni vidéo de fabrication ; l'atelier n'est mentionné que pour la gravure et l'entretien (V). Les montures sont dites « fabriquées par les meilleurs fabricants français » : la fabrication est sous-traitée (V, texte d'accueil).
- **Image** : « fidèle au modèle présenté » (V) ; aucune réserve sur l'écart avec la photo.

### Terme du diamant synthétique et décret 2002-65

| Où | Libellé | Conforme ? |
|---|---|---|
| Menu et fiches | « Diamants de synthèse », « Diamant de synthèse » ; titre de page « Diamant Synthétique » (V) | oui |
| Texte de la liste synthétique | « diamant de laboratoire » (5 occurrences), « diamants synthétiques », « éthique de laboratoire » dans le titre (V) | **non** pour « de laboratoire » (I) ; les deux registres coexistent sur la même page |
| Comparaison | « la même composition chimique, la même structure cristalline, la même dureté, la même brillance qu'un diamant naturel » (V) | formulation d'équivalence ; elle n'emploie ni « vrai » ni « véritable » (V) |

## Points forts à retenir pour JR Diamond

1. **Le prix se lit pierre par pierre** : chaque poids, couleur, coupe ou pureté a son prix, de 1 101 à 3 583 € sur la même monture (V). On voit ce que coûte le passage de SI2 à PUR ou de H à D. C'est la forme de prix « expliqué » à viser, sans devis.
2. **Récapitulatif chiffré à côté du bouton d'achat** : « Poids · Coul. · Pur. · Taille · Fluo · Prix total » (V).
3. **Des pierres précises en stock avec leur certificat** (numéro GIA, date, poli, symétrie) et une date de livraison de quelques jours, à côté de la fabrication à façon (V). C'est la version catalogue de la « pierre filmée ».
4. **Une monture, quatre fiches de métal** : le métal est un choix d'adresse, pas d'option ; le prix de départ de chaque métal est lisible (V).
5. **Synthétique à côté du naturel dans la même grille**, avec les mêmes 152 montures et un seul niveau de qualité (D VVS2) (V). Moins de choix, donc moins de risque de se perdre.
6. **Garantie de prix, mise à taille, entretien à vie, gravure gratuite** : un bloc de services lisible sur chaque fiche (V).
7. **Alma en 2 à 12 fois** (V) : le panier annonce le fractionné.

## Défauts observés

1. **Aucune image ne bouge** : le même visuel s'affiche à 0,30 et à 1,00 ct, en H et en D (V). C'est l'inverse de « ce que vous voyez existe ».
2. **Le panier ne reprend pas la pierre** : une fiche affichant 1 291 € (or rose, 0,34 ct H SI1) donne dans le panier « MANAE R, or rose 750, poids 3,20 g, 920 € », sans carat, couleur ni pureté (V). Le prix de 920 € est celui de la monture seule ou d'une autre configuration (I, écart de 371 €). À vérifier avant commande : un client peut croire avoir commandé la pierre (S).
3. **Remise « −50 % sur tout »** et « Meilleur prix jusqu'au 22/11 » sur la fiche : la date diffère du 30/11 du bandeau (V) ; le prix de référence est le double du prix affiché partout (V, I pour la portée).
4. **Deux « Taille »** sur la même fiche (la coupe et le doigt), et des abréviations non expliquées sur l'étiquette (GD, VG, EX, 3EX) ; seule l'aide « ? » renvoie à une explication (V).
5. **Pierre par défaut qui change selon le métal** (0,30 ct en platine et en or jaune, 0,34 ct en or blanc et en or rose) : on ne compare pas les métaux d'un coup d'œil (V).
6. **Le prix n'est pas visible en haut sur iPhone** : le récapitulatif est après les six groupes d'options, sous la ligne de flottaison (V, capture à 390 px) ; 31 étiquettes d'options mesurent moins de 44 px (V). La page tient en 390 px de large, sans défilement horizontal (V).
7. **Retour limité** sur le « spécifique » (largeur non affichée) ; 50 € de remise en état si gravure, même gratuite (V). À rapprocher de l'exception du sur-mesure.
8. **Libellé mixte** « synthèse » et « de laboratoire » sur la même page (V).
9. **Fenêtre de cookies bloquante** à chaque page vue en navigateur neuf : il faut choisir (ou personnaliser) avant de lire (V).

## Limites de l'audit

- Le filtre de forme n'a pas été appliqué ; on n'a pas vérifié si une forme autre que ronde se règle sur la fiche (la fiche relevée dit « Forme : Diamant rond »).
- Prix lus sur trois montures de la même famille seulement (MANAE en platine, or jaune, blanc, rose) ; les autres familles (entourage, trilogie) ne l'ont pas été.
- Un seul article ajouté au panier ; l'écart de 920 € contre 1 291 € n'a pas été reproduit sur une seconde configuration (V pour un cas, S pour la généralité).
- Aucun paiement, aucune commande, aucun chat, aucun WhatsApp, aucun formulaire. Rendez-vous non ouvert.
- iPhone émulé avec Chromium (pas un vrai Safari). Temps de chargement non mesuré hors un passage (document prêt en 7,2 s sur iPhone émulé, machine partagée) (V).

## Sources

- https://www.maisondelalliance.fr/ · `/bijoux-diamant/sur-mesure/solitaires` · `/monture/bagues-classiques-platine-950-pt-manae-pt` (et variantes `-or-blanc-750-palladie-op-manae-op`, `-or-jaune-750-oj-manae-oj`, `-or-rose-750-r-manae-r`) · `/diamant/18368/solitaires-diamants-certifies-style-classique-platine-950-diamant-rond-0-35-d-si1`
- Synthétique : `/bijoux-diamant/diamant-synthetique/solitaires` · `/monture-diamant-synthese/bagues-classiques-platine-950-pt-manae-pt`
- Alliances : `/alliance` · `/alliance/alliance-monochrome-platine-950-demi-jonc-prestige-arrondi-interieur-1`
- Panier : `/order/card/list` · Garanties : `/garanties` · CGV : `/cgv` (version du 9 mars 2026) · règles : `/robots.txt`
- Scripts et captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/029abcd0-3d8a-56d2-8c2e-67bb96f3ed98/scratchpad/fr/`
