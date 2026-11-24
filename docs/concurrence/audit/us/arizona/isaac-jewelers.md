# Audit : Isaac Jewelers (Scottsdale, Arizona)

- **Site** : Isaac Jewelers, bijoutier familial de Scottsdale (Kierland Commons), grossiste en diamants
- **Adresse auditée** : https://www.isaacjewelers.com/design-your-ring/ (« Design Your Own Jewelry in 3D »)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright), sans GPU (rendu logiciel : les temps de chargement et de réponse sont pessimistes)
- **Statut** : complet pour le concepteur 3D ; sans objet pour le panier (voir « Prix, délais »)
- **Conformité** : `robots.txt` du site lu, toutes les adresses ouvertes étaient AUTORISÉES ; aucun formulaire envoyé, aucun chat ouvert
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé

## Parcours

Une seule page, sans étape ni passage de page ; tout se règle sur la même colonne et l'image se met à jour (V, `/design-your-ring/`).

| Ordre | Étape | Options |
|---|---|---|
| 1 | Que concevez-vous ? | Bague de fiançailles, collier (pendentif/tennis), bracelet (tennis, joncs) |
| 2 | Forme du diamant | 10 : rond, ovale, coussin, princesse, émeraude, asscher, radiant, poire, marquise, cœur |
| 3 | Monture (« pick one or more ») | 9, combinables : solitaire, cathédrale, halo caché, halo, double halo, trois pierres, pavé sur le corps, corps fendu, bezel |
| 4 | Métal | Or blanc, or jaune, or rose, platine (aucun titre 14/18 k proposé) |
| 5 | Corps et griffes | Largeur (fin, classique, large), finition (poli, satiné), griffes (4 ou 6) |
| 6 | Diamant central | Curseur 0,50 à 5,00 ct, pas 0,05 ; lien « Compare diamond cut, color and clarity » |
| 7 | Taille de doigt | Curseur 3 à 10, pas 0,5 |
| 8 | Gravure (facultative) | Texte de 20 caractères au plus, 3 polices (script, classique, capitales) |
| 9 | Action | « Send this design to Frank » (lien vers la prise de rendez-vous) ou « Save design » |

## Contrôles vérifiés

Commandes lues avec controls.cjs (108 contrôles sur ordinateur, 97 sur iPhone, en-tête et pied compris) puis actionnées une à une par script. L'état complet se lit dans l'adresse (hash, par exemple `#design-ring-solitaire-round-white-1.00-6`).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Engagement ring / Diamond necklace / Diamond bracelet | bouton | Change l'objet ; la légende devient « 1.00 ct round solitaire pendant » ou « 4.00 ct tw tennis bracelet » ; taille 18 ou 7 | aucun prix | fonctionne |
| 10 formes (Round à Heart) | boutons | Légende et dimension mises à jour (ex. poire « ≈ 8,5 × 5,5 mm ») ; adresse mise à jour | aucun | fonctionne (10 sur 10) |
| Solitaire, Cathédrale, Halo caché, Halo, Double halo, Trois pierres, Pavé, Corps fendu, Bezel | boutons à bascule | Se cumulent : « cathedral + hidden halo + halo » ; Solitaire remet à zéro ; Pavé et Corps fendu font apparaître une seconde ligne « 0.50 ct » (inféré : poids des pierres latérales) | aucun | fonctionne (9 sur 9) ; Halo, Double halo et Trois pierres se remplacent entre eux |
| Or blanc, jaune, rose, Platine | boutons | Teinte du modèle 3D et segment `white/yellow/rose/platinum` de l'adresse | aucun | fonctionne (4 sur 4) |
| Petite / Classic / Bold | boutons | Largeur du corps ; code `bp`/`bb` dans l'adresse | aucun | fonctionne |
| High polish / Satin | boutons | Finition ; code `fs` | aucun | fonctionne |
| 4 prongs / 6 prongs | boutons | Griffes ; code `p4` | aucun | fonctionne |
| Curseur carat | range 0,5 à 5 | Légende « 0.50 ct … 5.00 ct » ; diamètre « about … mm » recalculé | aucun | fonctionne (valeurs 0,5, 2, 3,5, 5 essayées) |
| Compare diamond cut, color and clarity | lien | Mène à `/loose-diamonds-scottsdale/#diamond-quality` (non ouvert) | n/a | lien présent |
| Curseur taille de doigt | range 3 à 10 | « Size 3 / 7 / 10 » ; adresse mise à jour | aucun | fonctionne |
| Champ gravure | texte | 20 caractères au plus ; texte ajouté à l'adresse (`~Forever~script~`) | aucun | fonctionne |
| Script / Classic / BLOCK | boutons | Police de gravure ; code `script`/`block` dans l'adresse | aucun | fonctionne |
| STUDIO | bouton de vue | Fond clair, bague 3D ; vue par défaut | n/a | fonctionne |
| SPARKLE | bouton de vue | Fond sombre, éclat du diamant mis en avant | n/a | fonctionne |
| ON A HAND | bouton de vue | Bandeau « True to scale on a size 6 finger » ; photo de doigt avec la bague par-dessus (3 s après le clic, la bague 3D était semi-transparente et décalée du doigt, à la capture) | n/a | fonctionne, rendu moyen |
| + / − | boutons | Zoom de la vue 3D (clics acceptés ; capture du zoom échouée, voir limites) | n/a | clics acceptés |
| Glisser (« Drag to turn it any way ») | geste | Rotation libre de la bague | n/a | non testé (pas de souris réelle ; indication lue sur la page) |
| SAVE DESIGN | bouton | Ajoute une carte « Your saved designs, 1 of 3 » avec OPEN et REMOVE ; adresse inchangée | n/a | fonctionne ; 3 conceptions au plus (V) |
| OPEN / REMOVE (conceptions) | boutons | Rouvre ou supprime la conception enregistrée | n/a | vus, non actionnés |
| SEND THIS DESIGN TO FRANK | lien | Mène à `/contact/#book` (formulaire de rendez-vous ; non rempli) | n/a | lien présent |
| See engagement rings | lien | `/engagement-rings-scottsdale/` | n/a | lien fonctionnel (page lue) |
| START DESIGNING / Book a design appointment | liens | Défilement vers `#design` ; `/contact/#book` | n/a | présents |
| Search, Call 480-941-9090, Hours and directions, Book an appointment, Cart | icônes d'en-tête | `tel:` ; `/contact/` ; `/contact/#book` ; `/cart/` | n/a | Panier ouvert : « Your cart is currently empty » |
| Liens de pied (Instagram, Facebook, Yelp, YouTube, politiques) | liens | Non suivis (réseaux sociaux) | n/a | non testés (hors parcours) |

Non existants (V, absents de la liste de contrôles) : bouton partager natif (le partage passe par l'adresse), comparer, financement, chat, WhatsApp, essayage à domicile, réalité augmentée, ajout au panier, filtres de pierres (le concepteur n'a pas de choix de pierre réelle).

## Options disponibles

- Objets : bague de fiançailles, collier, bracelet.
- Formes : rond, ovale, coussin, princesse, émeraude, asscher, radiant, poire, marquise, cœur.
- Montures : solitaire, cathédrale, halo caché, halo, double halo, trois pierres, pavé sur le corps, corps fendu, bezel (combinables, certaines s'excluent).
- Métaux : or blanc, jaune, rose, platine. Titre de l'or : non proposé.
- Corps : 3 largeurs, 2 finitions ; griffes : 4 ou 6.
- Carat : 0,50 à 5,00 ct par 0,05. Taille de doigt : 3 à 10 par 0,5.
- Gravure : 20 caractères, 3 polices.
- Vues : studio, éclat, sur la main, zoom, rotation.
- Origine du diamant, couleur, pureté, certificat : non choisis dans le concepteur (la page dit que les vrais diamants se choisissent en rendez-vous).

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans le concepteur ni sur la page « Design your ring » (V). Le texte dit que la bague est « dessinée, tarifée et faite avec vous en personne » ; le prix se donne en boutique (V, bas du concepteur). Le chemin est donc : concevoir, envoyer à Frank Isaac, rendez-vous.
- **Délai** : « Ready shortly after your approval » (V, bandeau de réassurance) ; aucun chiffre en jours.
- **Panier** : `/cart/` répond « Your cart is currently empty » ; pas d'ajout au panier depuis le concepteur (V). Pas de récapitulatif, de frais de livraison ni de moyens de paiement affichés.
- **Retours et garanties** : aucune page de retours ni de garantie trouvée dans les pages lues (concepteur, personnalisation, fiançailles, diamants, à propos, panier) ; seule la politique de confidentialité figure au pied (V). Ce qui n'est pas affiché n'est pas confirmé inexistant (I).
- **Certificats** : GIA cité pour un anneau de la collection (« 3.01 carat round brilliant halo ring in platinum, GIA certified ») ; pour la collection, 5 bagues sur 6 certifiées GIA (V, `/engagement-rings-scottsdale/`). Rien sur l'IGI.
- **Synthétique** : aucune mention de diamant de laboratoire dans les pages lues ; « Smart Cut™ Diamonds » proposés en boutique (V).
- **Langues et devises** : anglais, dollar (V) ; aucun sélecteur.

## Confiance et service

- Avis : section « Five-star reviews on Google » avec témoignages signés de leur nom sur `/about/` (V) ; note chiffrée non relevée.
- Famille, vingt ans d'activité, grossiste en diamants (V, bandeau). Remises militaires, policiers, pompiers (V).
- Rendez-vous de conception : bouton visible partout ; téléphone 480-941-9090 ; horaires lundi-jeudi 10 h-19 h, vendredi-samedi 10 h-20 h, dimanche 11 h-18 h (V, pied de page).
- Processus de fabrication : dessin, « digital blueprint » (plan numérique) vu sous tous les angles avant fabrication, approbation, finition (V, `/custom-jewelry-scottsdale/`). Aucune photo ou vidéo de fabrication de la commande, aucun suivi de commande (V, absence dans les pages lues). Une page « Videos » existe (non ouverte).
- Transformation de bijoux : « Can you redesign jewelry I already own ? » (V, FAQ de la page personnalisation, réponse non lue).
- Taille d'un diamant sur la main (« How big is a carat ? ») : curseur de carat comparant les 10 formes à l'échelle (V, page `/loose-diamonds-scottsdale/`).

## Points forts à retenir pour JR Diamond

1. **L'état de la conception est dans l'adresse** : chaque option modifie le hash et le lien se partage (`#design-ring-solitaire-round-white-1.00-6`) ; le texte de la page le dit (« saved in the page link »). Preuve : adresse relevée après chaque clic. Rejoint l'action déjà identifiée pour le configurateur de JR Diamond.
2. **Légende vivante sous l'image** : « 1.00 ct round solitaire · about 6.4 mm » se met à jour à chaque clic, avec la dimension réelle du diamant (V, 10 formes). Rend la taille concrète sans prix.
3. **Vue « sur la main » à l'échelle de la taille de doigt choisie** (« True to scale on a size 6 finger ») et comparateur de carats par forme sur une vraie main (V).
4. **Montures combinables** (cathédrale + halo caché + halo) avec légende cumulée : l'utilisateur voit la composition qu'il a construite (V).
5. **Enregistrer jusqu'à 3 conceptions** et les rouvrir (V), sans compte.
6. **Texte honnête** : « An illustration to help you picture proportions. Diamond sizes are typical… » (V, bas du concepteur) : le site dit que l'image est une illustration, là où JR Diamond promet « ce que vous voyez existe ».
7. Gravure avec aperçu de police : 3 polices et adresse mise à jour (V). JR Diamond propose 20 à 25 polices.

## Défauts observés

- **Aucun prix, aucun panier** : le parcours se termine par un rendez-vous ; aucun moyen de payer ou de connaître le coût en ligne (V).
- **Lent sans GPU** : image 3D visible après 5,0 s (iPhone) et 5,5 à 6,4 s (ordinateur) ; chaque clic met 1,2 à 3,8 s à répondre ; un script de curseurs, zoom, vues et gravure a été coupé à 300 s, et un premier essai par clics Playwright a expiré après le passage en collier (V). Sur un vrai GPU, le résultat sera meilleur (S).
- **Titre de l'or absent** (14 ou 18 k) et aucune information de poids de métal (V).
- **Vue « sur la main » peu convaincante** à la capture : bague semi-transparente, décalée (V, capture).
- **Pas de pureté, couleur, certificat, naturel/synthétique** dans le concepteur (V).
- **Pas de retours, garantie ni livraison visibles** dans les pages lues (V).
- Zoom +/− : capture après zoom impossible, effet non constaté (voir limites).

## Limites de l'audit

- Chromium sans GPU : le temps d'apparition mesuré (5,0 à 6,4 s) est le premier moment où le canevas WebGL existe (`canvas` de plus de 100 px), pas une mesure sur appareil réel. Les clics ont été faits par le DOM (`element.click()`) car le défilement Playwright échouait sous charge.
- Rotation au doigt ou à la souris, effet réel du zoom +/− et de OPEN/REMOVE : non testés ou non confirmés.
- Aucune page de retours ni de garantie lue (chemin non trouvé, non cherché au-delà des liens du menu). Le catalogue (`/catalog/`) et le formulaire de rendez-vous n'ont pas été ouverts ; le champ du chat de la recherche n'a pas été touché.
- Pas de contrôle des polices de gravure rendues sur le modèle 3D (le texte gravé n'apparaît pas dans la légende, seulement dans l'adresse).
- Affichage iPhone : boutons +/− et sélecteur de vue plus grands (V, capture) ; les 90 contrôles n'ont pas tous été rejoués sur mobile.

## Sources

- https://www.isaacjewelers.com/design-your-ring/ (ordinateur et iPhone, 15/11/2026)
- https://www.isaacjewelers.com/custom-jewelry-scottsdale/
- https://www.isaacjewelers.com/engagement-rings-scottsdale/
- https://www.isaacjewelers.com/loose-diamonds-scottsdale/
- https://www.isaacjewelers.com/about/
- https://www.isaacjewelers.com/cart/
- robots.txt contrôlé par l'outil de l'étude (toutes les adresses ci-dessus AUTORISÉES)
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/isaac-jewelers/`
