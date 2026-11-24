# Audit 3dvestuviniai.lt (Monodija, Kaunas)

- **Site** : « Vestuviniai žiedai visiems | MONODIJA » · **Adresse** : https://3dvestuviniai.lt/ · **Page de départ** : https://3dvestuviniai.lt/ziedai/classic-ii (premier modèle de la liste ; l'accueil liste 40 modèles)
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur (1440 x 900) et affichage iPhone 13
- **Statut** : **partiel**. Aucun blocage sur ce domaine. Pas de panier : le parcours se termine par « Gauti kainos pasiūlymą » (demande de devis), qui n'a pas été actionné (formulaire). Le site frère monodija.lt est bloqué (voir Limites).
- Légende : **[V]** vérifié · **[I]** inféré · **[S]** supposé. Offre : **alliances uniquement** (pas de bague de fiançailles).

## Parcours
| Étape | Options |
|---|---|
| 1. Accueil, catégories | Briliantinės juostelės, Prabangūs, Klasikiniai, Amžinybės (eternity) ; 40 modèles (Modernus, Ornament, Cushion, Oval, Classic, Comfort, Ratu et variantes) [V] |
| 2. Fiche modèle (3D) | taille, largeur, épaisseur, alliage (5), puis, pour les modèles à pierres : type de pierre (7), répartition (3), diamètre (5) [V] |
| 3. Prix | affiché en direct (poids, carats, prix), code de remise [V] |
| 4. Fin | « Gauti kainos pasiūlymą » (obtenir une offre de prix) ; commande avec acompte ensuite, selon les conditions d'achat [V pour le texte, non actionné] |

## Contrôles vérifiés
Fiche Classic II (alliance lisse), sur ordinateur. Chaque réglage envoie une requête à un moteur ShapeDiver (3D) et à `/uzsakyti/gautiziedoreiksmes` (prix) [V, requêtes observées].
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| DYDIS (taille), 13 à 24,5, pas 0,05 | curseur + champ | change le diamètre intérieur en 3D [I] ; touche Fin = 24,5, Début = 13 | 17 : 5,19 g / 921 € ; **le prix affiché a mis plus d'une seconde à suivre** (lecture à 1,2 s encore périmée ; valeurs 13 : 7,26 g / 1 208 € relevées à la lecture suivante) [V] | OK |
| PLOTIS (largeur), 2,5 à 9,5 mm | curseur + champ | change la largeur du ruban en 3D | 2,5 mm : 3,2 g / 645 € ; 4,05 mm : 5,19 g / 921 € ; 9,5 mm : 12,2 g / 1 892 € [V] | OK |
| STORIS (épaisseur), 1,5 à 2,5 mm | curseur + champ | change l'épaisseur en 3D | 2,5 mm : 2,52 g / 551 € relevé avec la largeur à 2,5 mm [V] | OK |
| AUKSAS (alliage) : 750 jaune, 750 blanc, 585 jaune, 585 blanc, 585 rose | liste | change la couleur de la bague en 3D et le prix | 585 rose : 5,19 g / 921 € (défaut) ; 585 blanc : 5,04 g / 900 € ; 585 jaune : 5,34 g / 941 € ; 750 blanc : 6,03 g / 1 266 € ; 750 jaune : 6,06 g / 1 271 € [V] | OK |
| Orbite de la 3D (glisser) | gestuelle | pas testée | — | Non testé |
| NUOLAIDOS KODAS + TAIKYTI | champ + bouton | applique un code de remise ; non saisi (aucune donnée) | — | Non testé |
| GAUTI KAINOS PASIŪLYMĄ | bouton | mène à la demande d'offre ; non actionné (formulaire) | — | Non testé |
| VISI ŽIEDAI | lien | retour à la liste (/?active_ring_category=2#rings) | — | Lien lu |
| Menu (≡) : ŽIEDAI, PASLAUGOS, APIE MUS, KONTAKTAI | liens | pages lues en curl : Paslaugos, Apie mus, Kontaktai, Pirkimo taisyklės | — | Lien lu, 200 [V] |
| Avis clients (« Klientų atsiliepimai ») | lien externe | mentionné dans les conditions d'achat | — | Non ouvert |
| Cookies : « Sutinku » | lien | ferme la bannière | — | OK |
| Téléphone, e-mail, Instagram | liens | `tel:+370 66600087`, `vestuviniai@gmail.com`, instagram.com/3dvestuviniai | — | Non utilisés |

Modèle à pierres (Classic BII), contrôles relevés (non actionnés un à un) :
| Libellé | Type | Valeurs |
|---|---|---|
| Akmenys | liste | briliantes blancs VVS/F+ ; blancs SI/G+ ; **briliantes de laboratoire** ; noirs ; saphirs ; rubis ; émeraudes [V] |
| Kiekis | liste | entier (pilnas), moitié (pusė), tiers (trečdalis) |
| Skersmuo | liste | 1,00 mm/0,005 ct ; 1,30/0,01 ; 1,50/0,015 ; 1,70/0,02 ; 2,00/0,03 |
| Nombre de carats total | champ numérique | 0,0185 ct par défaut (calculé) |
| Taille, largeur 5,00 mm, épaisseur 2,00 mm | champs | mêmes plages que ci-dessus |
Effet sur le prix de ces options : non mesuré.

## Options disponibles
- **Taille** 13 à 24,5 ; **largeur** 2,5 à 9,5 mm ; **épaisseur** 1,5 à 2,5 mm (pas de 0,05) [V].
- **Or** : 585 (14 k) jaune, blanc, rose ; 750 (18 k) jaune, blanc. Pas de 750 rose, pas de platine [V].
- **Pierres** : 7 types dont diamants de laboratoire ; 5 diamètres de 1 à 2 mm ; moitié, tiers ou tour complet ; modèles « Ratu » en 3, 5, 7, 9, 11 pierres ou 1/3, 2/3, 1/2 [V].
- **Gravure** : texte à l'intérieur de l'anneau, sur demande (texte de l'accueil) ; champ de saisie non vu sur la fiche [V pour le texte].
- Pas de bague de fiançailles, pas de forme de pierre au-delà du rond ; pas de solitaire.

## Prix, délais, retours, garanties
- **Prix** : en euros, mis à jour en direct, avec le poids de métal ; pas de décomposition entre matière, façon, marge ; **le prix suit le poids** : un ruban de 9,5 mm coûte 1 892 € contre 645 € à 2,5 mm [V].
- **Délai** : « jusqu'à 25 jours ouvrés » (accueil) ; l'expédition « sous 30 jours ouvrés après réception de l'acompte » (conditions d'achat) [V]. Les deux chiffres ne sont pas identiques.
- **Livraison** : gratuite vers les bornes LP Express ; étranger 50 € (colis enregistré) ; assurance automatique 500 € ; envoi possible par bus (Kautra) avec pièce d'identité ; numéro lituanien requis pour LP Express [V].
- **Paiement** : Paysera au moment de l'achat, virement sur facture proforma, paiement au terminal LP Express ou au livreur ; acompte exigé [V].
- **Retours / sur mesure** : non lu sur la page de conditions consultée (le texte ne traite que livraison, paiement, délai) [V pour le texte lu].
- **Certificat / poinçon** : « les bagues sont poinçonnées à l'office lituanien des poinçons, les pierres certifiées » [V]. Pas de certificat GIA/IGI mentionné.
- **Rachat d'or** : l'or de la cliente est repris au cours mondial et déduit du prix [V].
- **Libellé du synthétique** : « laboratoriniai briliantai » [V].
- **Langues** : lituanien seul [V]. Devise : euro.

## Confiance et service
- Adresse physique : Gedimino g. 2, Kaunas ; téléphone, e-mail, Instagram [V]. Éditeur du site : digis.lt.
- Avis : lien vers des avis externes dans les conditions d'achat ; aucune note affichée sur la fiche [V].
- Preuves de fabrication : aucune photo ni vidéo d'atelier relevée ; le 3D remplace la preuve [V].
- Pas de chat, pas de WhatsApp, pas de rendez-vous en ligne [V pour la fiche].

## Points forts à retenir pour JR Diamond
1. **Prix et poids en direct sur un modèle 3D paramétrique** (ShapeDiver) : chaque curseur met à jour l'image, le poids et le prix. Preuve : 2,5 mm = 3,2 g / 645 € ; 9,5 mm = 12,2 g / 1 892 €.
2. **Le poids de métal est affiché** : cela rend le prix lisible (le client voit pourquoi il paie plus). Même logique que la décomposition annoncée par JR Diamond. Preuve : ligne « SVORIS » à côté du prix.
3. **Choix 585 ou 750 et plusieurs teintes** : or 14 k ou 18 k, chaque combinaison change le prix (900 à 1 271 € à dimensions égales). Preuve : relevés des cinq alliages.
4. **Reprise de l'or du client** déduite du prix : proche de la transformation de bijoux de famille. Preuve : conditions d'achat et accueil.
5. **Choix du diamètre de pierre en mm et en ct** (1 à 2 mm, 0,005 à 0,03 ct) : précision rare pour des pierres de pavage. Preuve : liste « Skersmuo ».
6. **Charge rapide sur mobile** : première zone visible à 4,6 s sur iPhone, contre 11 à 13 s sur ordinateur en mesure (voir Limites). Preuve : mesures.

## Défauts observés
- **Prix décalé** : après un réglage, le prix et le poids restent anciens environ une seconde (la lecture à 1,2 s affichait l'ancien prix) [V].
- Pas d'**image de produit réelle** ni de photos de fabrication ; seulement la 3D [V].
- Pas de retours, de garantie ni de délai chiffré dans la page de conditions lue ; deux délais différents (25 et 30 jours ouvrés) [V].
- Pas de panier ni de paiement en ligne immédiat : « offre de prix » puis acompte [V].
- Écran d'attente « Prašome palaukti » et chargement initial de 11 à 13 s sur ordinateur [V].
- Une seule langue ; adresse e-mail Gmail comme contact [V].

## Limites de l'audit
- Pas de panier, pas de formulaire : « Gauti kainos pasiūlymą », la remise, le champ de gravure, la rotation 3D, l'effet des pierres sur le prix n'ont pas été actionnés.
- Affichage iPhone : visuel principal à 4,6 s, message d'attente retiré à 6,7 s ; réglages mobiles non actionnés ; la capture mobile n'a pas été relue (délai dépassé à la capture).
- Les lectures du prix juste après un réglage (1,2 s) étaient périmées ; les chiffres cités sont ceux relevés après 3,5 s d'attente, sauf indication contraire. La taille (13 et 24,5) n'a pas été confirmée de façon fiable : la valeur 7,26 g / 1 208 € est attribuée à la taille 13 avec ce doute.
- **monodija.lt** (site vitrine du même éditeur) répond « Verifying your connection » : bloqué, non contourné, non audité.
- Mesure : une seule par appareil. Ordinateur : visuel à 11,5 s puis 12,8 s (deux essais) ; iPhone : 4,6 s.

## Sources
https://3dvestuviniai.lt/ · https://3dvestuviniai.lt/ziedai/classic-ii · https://3dvestuviniai.lt/ziedai/classic-bii · https://3dvestuviniai.lt/pirkimo-taisykles-ir-salygos · https://3dvestuviniai.lt/robots.txt (Disallow : /membox, /cron) · requêtes observées : sdeuc1-nocdn.eu-central-1.shapediver.com et https://3dvestuviniai.lt/uzsakyti/gautiziedoreiksmes
