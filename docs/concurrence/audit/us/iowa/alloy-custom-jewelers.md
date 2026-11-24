# Alloy Custom Jewelers (Cedar Falls, Iowa)

- **Site** : https://alloycustomjewelers.com/ ; configurateur « Design Your Ring » : https://alloycustomjewelers.com/pages/design-your-ring (la page de départ indiquée, `/pages/ring-studio`, est un catalogue de montures avec filtres ; le constructeur 3D est derrière « Build / Open the ring builder »).
- **Date** : 15/11/2026 (audit réalisé le 24/11/2026 dans l'environnement de l'étude). **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Parcours du configurateur complet jusqu'à la taille de doigt ; la porte « prix + diamant » (nom et mobile exigés) n'a pas été franchie (règle : aucune donnée personnelle) ; le panier n'a pas été ouvert (voir Limites).
- Légende : **V** vérifié (page lue ou contrôle actionné), **I** inféré, **S** supposé.

## Parcours

| Étape (V, `/pages/design-your-ring`) | Options |
|---|---|
| Barre permanente | Métal : jaune, blanc, rose, platine ; titre 14 K / 18 K ; vue « ON HAND » ; « QUESTIONS? » ; « ALL STEPS » ; prix « YOUR RING FROM » |
| 1/10 Forme | 4 « favoris » (Oval Solitaire, Oval Hidden Halo, Marquise Solitaire, Emerald Open Bezel) ; 9 formes : rond, ovale, coussin, coussin allongé, princesse, émeraude, radiant, poire, marquise |
| 2/10 Style | Solitaire, Cathedral |
| 3/10 Corps de bague | Plain, Diamonds, Engraved (selon le style) ; largeur 1,8 / 2,0 / 2,5 / 3,0 mm |
| 4/10 Griffes ou lunette | Prongs, Tulip, Open Bezel |
| 5/10 Halo caché | No Hidden Halo / Hidden Halo (indisponible avec la lunette, message affiché) |
| 6/10 Griffes rondes ou « claw » | Round Prongs / Claw Prongs |
| 7/10 Alliance assortie | No Wedding Band / Plain / Diamonds |
| 8/10 Taille du diamant | LAB GROWN / NATURAL ; 0,50 à 5,00 ct (12 valeurs) avec dimensions en mm |
| 9/10 Votre diamant | « HELP ME CHOOSE » + liste de vraies pierres (ex. « 5.01 ct H · SI1 GIA », vue 360°) |
| 10/10 Taille | Liste déroulante US 3,0 à 10,0 par 0,25 (défaut 6,5) |
| Fin | « SEE MY DESIGN » (récapitulatif « Your Design » + « Choose » pour le diamant) ; « SEE YOUR PRICE » |

## Contrôles vérifiés

Prix : écart observé sur « YOUR RING FROM » (monture seule, hors diamant central). Les écarts dépendent de l'ordre des choix (le prix affiché recalcule la monture selon la pierre) : valeurs lues au moment du clic.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Métal jaune / blanc / rose / platine | pastilles | l'anneau 3D change de teinte et le sous-titre (« 14K White Gold »…) | 1 000 / 975 / 1 025 / 1 425 $ (14 K) | OK (V) |
| 14K / 18K | bascule | sous-titre « 18K Yellow Gold » | 1 000 → 1 425 $ | OK (V) |
| ON HAND | mode de vue | passe en vue sur une main 3D ; légende « On a size 6.5 finger, true size », « Hand model: Blender Studio, CC0 » ; 3 teintes de peau apparaissent | aucun | OK (V) |
| Drag to turn · scroll to zoom | indication | rotation et zoom 3D à la souris | aucun | Texte vu ; geste non automatisé (S) |
| QUESTIONS? | panneau | « Good to Know » : 3 questions (forme la plus grande, changer d'avis, apporter son diamant) + « ASK OUR TEAM » + Close | aucun | OK (V) ; « ASK OUR TEAM » non ouvert |
| ALL STEPS | panneau | récapitulatif des 10 étapes, « START OVER », « CLOSE » | aucun | OK (V) |
| 4 favoris (étape 1) | cartes | saute directement au récapitulatif « ALL SET / Your Design » (solitaire 1,50 ct ovale lab grown, 14 K jaune, taille 6,5) | 1 000 $ | OK (V) |
| Rond / Ovale / … / Marquise | cartes | change la forme du diamant 3D | rond 1 000 $, émeraude 1 050 $ | OK (V, 2 formes mesurées) |
| Style Cathedral | cartes | épaules relevées | +25 $ (1 025 $) | OK (V) |
| Corps « Diamonds » | cartes | petits diamants sur le corps | +275 $ (1 025 → 1 300 $) | OK (V) |
| Corps « Engraved » | cartes | motif gravé | retour à 1 025 $ | OK (V) |
| Largeur 1,8 / 2,0 / 2,5 mm | boutons | corps plus ou moins large | 0 $ | OK (V) |
| Largeur 3,0 mm | bouton | corps plus large | +150 à +275 $ selon l'état | OK (V) |
| Tulip | carte | griffes en pétales | 0 $ | OK (V) |
| Open Bezel | carte | lunette ouverte | +150 $ (1 025 → 1 175 $) | OK (V) |
| Hidden Halo | carte | halo de petits diamants sous la pierre | +450 $ (1 000 → 1 450 $) | OK (V) |
| Round / Claw prongs | cartes | forme de griffe | 0 $ | OK (V) |
| Wedding band No / Plain / Diamonds | cartes | alliance assortie ajoutée à la vue | 0 $ affiché ; mention « + center diamond and wedding band » | OK (V) ; effet sur le prix final non établi |
| LAB GROWN / NATURAL | bascule | texte : « Real diamonds grown in a lab: more size for your budget » | Natural : +100 $ sur la monture (1 450 → 1 550 $) | OK (V) |
| 0,50 à 5,00 ct (12 boutons) | boutons | la pierre change de taille ; dimensions mm affichées | monture 1 350 à 1 725 $, par paliers (0,75-1,25 : 1 350 ; 1,50-2,50 : 1 550 ; 3-5 : 1 725) ; 2 100 $ à l'étape 9 | OK (V) |
| HELP ME CHOOSE | bouton | ouvre la liste de pierres réelles (GIA, couleur, pureté, dimensions) | aucun prix visible sans coordonnées | OK (V) |
| Pierre « 5.01 ct H · SI1 GIA… » | carte | sélectionne une pierre, passe à la taille | monture 2 100 $ | OK (V) |
| 360° | bouton | présenté sur chaque pierre ; sert à la vidéo 360° de la pierre | — | Cliqué (V) ; lecteur non inspecté (S) |
| Taille US (liste) | select | 29 tailles | 0 $ | OK (V) |
| BACK / NEXT | boutons | navigation (le premier clic Playwright standard expire ; clic à la souris OK) | — | OK (V) |
| SEE MY DESIGN | bouton | récapitulatif | — | Visible (V), non ouvert |
| SEE YOUR PRICE | bouton | texte : prix de la bague et du diamant affichés « once you share your name and mobile number » | — | **Non testé** : exige nom et téléphone |
| « Save your ring », « Text me my ring », e-mail, « Sketch my idea » | fonctions | décrites dans l'inventaire Iowa (même site, lues le 15/11 dans le code) | — | Non actionnées (données personnelles) |
| Catalogue `/pages/ring-studio` : filtres métal (4), formes (9), prix (2 champs), tailles de pierre (Any, ¼ à 3 ct), styles (Solitaire 332, Halo 372, Hidden Halo 51, Three-Stone 123, Side Stones 720, Bezel 134, Vintage 99, Modern 92, Classic 538…), tri, « HIDE FILTERS », cœur favori, 41 pages | liste | 1 567 montures ; « Starting at » 875 à 2 775 $ vus ; « Center diamond selected separately » ; pastilles de 3 métaux | prix « à partir de » | Chargé (V, 338 contrôles ordinateur, 305 iPhone) ; filtres non actionnés un à un (S) |
| Pied de page : téléphone 319-290-6116, itinéraire, « Book Your Visit », FAQ, guide des tailles, enregistrer sa bague, réparations, Instagram, Facebook, inscription e-mail (hCaptcha) | liens | — | — | Liens lus (V), non suivis un par un |
| « Talk With Our Team » (bouton flottant) | chat | ouvre un chat | — | Non ouvert (règle) |

## Options disponibles

- **Métaux** : or jaune, blanc, rose, platine ; 14 K ou 18 K. (V)
- **Formes** : rond, ovale, coussin, coussin allongé, princesse, émeraude, radiant, poire, marquise. (V)
- **Styles** : solitaire, cathedral ; corps plain / diamants / gravé ; largeur 1,8 à 3,0 mm. (V)
- **Montures** : griffes, tulipe, lunette ouverte ; halo caché ; griffes rondes ou « claw » ; alliance assortie (aucune, lisse, diamants). (V)
- **Pierre** : lab grown ou natural, 0,50 à 5,00 ct, puis choix d'une pierre réelle GIA (couleur, pureté, dimensions). (V)
- **Taille** : US 3,0 à 10,0 (0,25). Aucune gravure sur l'écran du configurateur (V : aucune étape).
- **Vues** : 3D rotative et zoom, vue « sur la main » (3 teintes), 360° de la pierre. Pas de photo ni vidéo de bijou réel dans le configurateur (V). Pas de comparaison de pierres, pas de partage vu dans le configurateur (V).

## Prix, délais, retours, garanties

- **Prix** : « YOUR RING FROM » (monture) + « center diamond » séparé ; prix complet derrière nom + mobile (V). Catalogue : « Starting at $875 à $2,775 » (V). Décomposition : monture et pierre séparées, variations affichées en direct par option (V).
- **Délai** (FAQ, V `/pages/faq`) : Made for You en général 2-3 semaines, 3-4 semaines pour bagues de fiançailles et sur mesure ; Ready Made expédié en 1-2 jours ouvrés. Le catalogue annonce « Typically 1-3 weeks » (choisir), « 3-4 weeks » (construire), « 4-6 weeks » (créer).
- **Livraison** (V `/policies/shipping-policy`, màj 8/10/2026) : standard 3-5 jours ouvrés, express 1-2 jours, overnight ; tarifs calculés à la commande ; international « select destinations », droits à la charge du client ; signature au-dessus de 500 $ ; dommages à signaler sous 48 h.
- **Retours** (V `/policies/refund-policy`, màj 16/10/2026) : Ready Made 30 jours ; Made for You (taille, métal, pierre, gravure, sur mesure) **vente ferme** ; défauts à signaler sous 7 jours ; remboursement sous 10 jours ouvrés après accord ; annulation non garantie une fois la fabrication lancée.
- **Garantie** (V FAQ) : 5 ans sur les pièces Made for You, avec contrôle gratuit tous les 6 mois ; 1 an sur les Ready Made ; premier redimensionnement gratuit (±1 taille) ; nettoyage à vie ; diamant secondaire remplacé gratuitement ; pierre centrale non couverte ; évaluation d'assurance fournie.
- **Certificats** : grand diamant central avec rapport (IGI ou GIA) ; petits diamants non certifiés (V FAQ). Pierres de la liste : étiquette « GIA » (V).
- **Libellé du synthétique** : « lab grown » ; FAQ : « the same crystal, with the same hardness and sparkle » (V).
- **Langues / devises** : anglais, dollar uniquement (V).

## Confiance et service

- Atelier : 314 Brandilynn Blvd, Cedar Falls ; téléphone 319-290-6116 ; rendez-vous « Book Your Visit » ; adresse e-mail de contact lue dans les politiques (V).
- Pages « Alloy Love Stories », « Register Your Ring », « Repairs & Redesign », FAQ (liens du pied de page, V) ; contenus non lus en détail.
- Avis clients : aucun module d'avis lu sur les pages auditées (V : absent de la page du constructeur et du catalogue).
- Preuves de fabrication : fabrication « in-house » (selon l'inventaire du 15/11, V) ; pas de photo ni de vidéo de suivi de commande vues dans le configurateur.
- Suivi de commande : e-mail avec numéro de suivi transporteur (V, politique de livraison).

## Points forts à retenir pour JR Diamond

1. **Prix de la monture qui bouge en direct à chaque option**, avec « + center diamond » affiché à part (preuve : 1 000 → 1 025 → 1 300 $ en changeant style, corps, halo). JR Diamond affiche « Sur devis ».
2. **Zéro chargement visible** : l'anneau 3D apparaît ~1,6 à 2,1 s après le chargement de la page (mesuré, 2 passes, ordinateur ; iPhone 1,8 s).
3. **Vue sur la main à l'échelle réelle** (taille 6,5, 3 teintes de peau) : réponse à « va-t-elle être trop grosse ? » (V, capture « hand.jpg »).
4. **Pierre réelle choisie dans le parcours** (liste de GIA avec dimensions et vue 360°) : preuve que « ce qu'on voit existe ».
5. **Porte douce** : l'utilisateur voit la monture sans compte ; seules les coordonnées débloquent le total (V).
6. **Règles écrites et datées** : vente ferme, garantie 5 ans, annulation, signature à la livraison (V, pages politiques).
7. **Raccourcis « favoris »** pour les indécis (4 bagues types) puis récapitulatif « Your Design » modifiable par ligne.

## Défauts observés

- Le clic Playwright standard sur « NEXT » expire (probable animation continue) ; le clic à la souris fonctionne (V). Sans conséquence visible pour un visiteur.
- Les « favoris » sautent toutes les étapes et ramènent au récapitulatif sans avertir (V).
- Le prix total est masqué tant qu'on n'a pas donné nom et mobile (V) : friction ; mais « from » monture reste visible.
- Le diamant 3D montre des artefacts de facettes pixelisées sur ordinateur (V, captures `wd0.jpg`, `hand.jpg`).
- Aucune étape de gravure dans le constructeur, malgré la mention « engraved » dans les retours (V).
- La page `/pages/ring-studio` porte `noindex` (V, inventaire).
- Incohérence apparente de délais : 26 jours codés dans la configuration (inventaire) ; 3-4 semaines en FAQ ; « 4-6 semaines » pour « Create » (V).

## Limites de l'audit

- Mesures de temps : 2 passes ordinateur (1,6 et 2,1 s) et 1 passe iPhone (1,8 s) jusqu'à l'apparition de l'élément `canvas`, pas jusqu'à la stabilité du rendu.
- Le total avec diamant, le panier, les frais de livraison au panier et les moyens de paiement n'ont pas été vus : la porte exige nom et mobile (non saisis) et la lecture directe du panier a été refusée par l'environnement ; la page est autorisée par `robots.txt`. Moyens de paiement à vérifier au panier.
- Les écarts de prix mesurés dépendent de l'ordre des clics (la monture recalcule selon la pierre) : ne pas les lire comme des suppléments unitaires.
- Engagement : « Ask About a Change », « Save your ring », « Text me my ring », chat et rendez-vous non actionnés. Étapes 7 et 9 : effet de l'alliance sur le prix final non établi.
- Version iPhone : liste des contrôles lue (305), parcours complet non rejoué ; défilement horizontal absent (largeur 390 px).

## Sources

- https://alloycustomjewelers.com/pages/design-your-ring ; https://alloycustomjewelers.com/pages/ring-studio (V, 24/11/2026)
- https://alloycustomjewelers.com/pages/faq ; /policies/refund-policy ; /policies/shipping-policy (V, lus par curl)
- `docs/concurrence/audit/us/iowa/INVENTAIRE.md` (V, lecture antérieure)
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/alloy/` (hors dépôt)
