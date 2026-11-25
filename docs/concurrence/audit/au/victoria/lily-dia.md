# Audit : Lily Dia (Victoria, Australie)

- **Site** : https://lilydiajewellery.com/ ; page de départ https://lilydiajewellery.com/design-your-own-engagement-ring
- **Date** : 15/11/2026 (séance d'audit techniquement menée le 25/11)
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le parcours s'arrête à l'étape « Continue » de la fiche : l'étape suivante passe par des adresses à paramètres (`?metal=…`) et par `/api/diamonds/…`, interdites par robots.txt. Le choix du diamant, la vidéo 360° et le panier ne sont pas audités.
- Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| Page constructeur [V] | `/design-your-own-engagement-ring` | 56 modèles (`/engagement-rings/customise/<nom>`), liens par forme (9) et par style (7), boutons de métal jaune / blanc / rose sur chaque carte |
| Fiche modèle, étape 1 « Metal » [V] | `/engagement-rings/customise/hailey-4-claw-round-solitaire-engagement-ring` | couleur de métal (6), titre 14 k / 18 k, « More info », « Continue » |
| Étapes 2 à 5 : Setting, Personalise, Gemstone, Confirm [I] | adresses à paramètres interdites | largeur de bande, hauteur, style, griffes, taille de doigt, gravure, pierre : décrits par le site, non visités |
| Panier [V] | bouton « Open cart » | « Your bag is empty. » ; ajout au panier non atteint |

## Contrôles vérifiés

Le contrôleur liste 276 contrôles visibles sur ordinateur et 256 sur iPhone (page constructeur) [V]. La navigation, les 56 cartes et le pied de page (≈ 120 liens) ne sont pas détaillés un à un.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Titre « 14k » / « 18k » (fiche Hailey) | boutons | 18 k : « 18k yellow gold » affiché | monture 14 k jaune 1 360 A$, 18 k jaune 1 660 A$ (+300) | OK [V] |
| Couleur : Yellow, White, Rose Gold, Platinum, Yellow & White Gold, Yellow Gold & Platinum | boutons | 6 boutons listés ; mes clics (par nom et forcés) n'ont pas changé le libellé « 14k yellow gold » ni le prix ni l'image | — | non fonctionnel dans mon test, cause inconnue (mauvaise cible ou état piloté par une adresse à paramètres bloquée) [V pour l'échec] |
| More info (métal) | bouton | fenêtre « Metal information » : composition (14 k : 58,3 % d'or), durabilité, entretien, allergie, pour jaune, blanc, rose (14 k/18 k) et platine 950 | aucun | OK [V] |
| Continue | bouton | navigue vers une adresse à paramètres interdite : requête interceptée, la page est devenue une erreur | — | non suivi (interdit) |
| Show the video / Show photo 2 à 6 of 6 / Pause video | boutons | galerie : une vidéo, six photos ; la photo porte la mention « LD logo in images for copyright only » | aucun | présents [V], non lus un à un |
| Hover to see video (carte) | lien | vidéo au survol de la carte | — | présent [V], non testé (survol) |
| Contact us / Book an appointment / Share | boutons | non cliqués (ouvrent un formulaire ou un partage) | — | non testés |
| Open cart | bouton | tiroir « Your bag is empty. » | — | OK [V] |
| US / AU (sélecteur de pays) | bouton | libellé « AU » après appel de `/api/country` (interdit, intercepté) | — | non actionné |
| FAQ (8 questions) | accordéons | 5 lus : fonctionnement, coût, délai, paiement, pierre apportée | — | OK [V] |
| Newsletter : champ e-mail + Join | formulaire | non rempli | — | non testé (règle de lecture seule) |
| Liens de forme (9), de style (7) | liens | `/design-your-own-engagement-ring?shape=…` et `?design=…` | — | non suivis (adresses interdites) |
| Liens `/engagement-rings/<forme|style|métal|carat|bande>` | liens | catalogues par forme, style, métal (4), carat (1 à 5 ct par 0,5 sauf 1,25), bande fine / épaisse, moissanite | — | liens lus [V], non parcourus |

## Options disponibles

- **Formes** : Round, Oval, Emerald, Radiant, Pear, Cushion, Elongated cushion, Marquise, Princess [V].
- **Styles** : Solitaire, Three stone / Trilogy, Bezel, East-west, Halo, Hidden halo, Pavé, Toi et Moi, Cathedral, Low profile [V].
- **Métaux** : or jaune, blanc, rose, platine, bicolores (jaune/blanc, or jaune/platine) ; 14 k, 18 k ; platine 950 [V].
- **Pierres** (fiche Hailey) : diamant « lab-grown » et moissanite ; naturel non proposé [V] ; carats 1 à 5 ct pour les rubriques [V].
- **Bande** : 1,8 / 2 / 2,5 / 3 mm ; hauteur : haute ou basse ; style : basket ou cathedral ; griffes : 4 griffes, pointe aigle ou ronde [V].
- Annoncé par la FAQ, non vérifié : pierre IGI choisie par carat, couleur, pureté et forme, « with a 360 degree video and the report for each one » ; moissanite choisie en millimètres [I].

## Prix, délais, retours, garanties

- **Prix** : « Setting · $1,360 AUD » en tête de la fiche, qui s'ajuste avec le titre ; « The price updates with every choice and includes the setting and the stone » (FAQ). Monture dès 1 260 A$ (solitaire 14 k), bague complète 1 ct synthétique dès ≈ 2 400 A$ (14 k, bande 1,8 mm), moissanite dès 2 210 A$ (18 k) [V, FAQ]. Prix de chaque pierre : non vu.
- **Délai** : conception CAO sous 1 semaine, validation du client sous 3 jours, fabrication 4 à 6 semaines après approbation, 6 à 8 semaines en tout [V, `/delivery-and-warranty`].
- **Paiement** : acompte 50 % pour démarrer ; ou conception d'abord avec 250 A$ pour l'étape CAO, puis 50 % à l'approbation, solde avant expédition [V, FAQ]. Moyens de paiement affichés : non vus (panier non atteint).
- **Livraison** : mondiale, suivie et assurée [V]. Frais : non vus.
- **Retours** : pas de retour pour changement d'avis (bagues de fiançailles, sur-mesure, pierres libres, soldes), sans préjudice du droit australien de la consommation ; annulation et approbation du design décrites sur `/returns` [V].
- **Garantie** : garantie fabricant à vie pour l'acheteur d'origine, non transférable ; défauts de fabrication, sertis desserrés, finitions [V].
- **Certificats** : « IGI certified » pour les synthétiques (FAQ) ; GIA non vu [V pour l'IGI en texte].
- **Libellé du synthétique** : « lab-grown diamond » [V].
- **Langues et devises** : anglais ; A$ (sélecteur de pays AU / US) [V pour la présence du bouton].

## Confiance et service

- Rendez-vous vidéo (« Book a video consultation »), « Book an appointment », e-mail via `/contact`, pages de FAQ, questions, glossaire, guides (taille, certification, moissanite) ; pas de numéro de téléphone relevé en tête de page, pas de WhatsApp [V pour les liens].
- Page « Our story » : deux fondateurs (Brie et Jared), « over a decade in jewellery », promesse de transparence (« you'll see everything we see. Pricing, sourcing, the lot. ») [V].
- Preuves de fabrication : rendus et vidéos des modèles ; aucune photo d'atelier ni suivi de commande vérifié [V].
- Avis clients : non relevés sur les pages lues [V].
- Pages locales : Melbourne, Sydney, Brisbane, Perth, Adelaide, Gold Coast, Canberra, Hobart, Auckland, Wellington [V pour les liens].

## Points forts à retenir pour JR Diamond

1. **Barème public de la monture** : la fiche affiche « Setting · $1,360 AUD » et le titre 18 k ajoute 300 A$ (preuve : tests du titre sur la fiche Hailey).
2. **FAQ chiffrée** : coût d'une bague (« dès 1 260 A$ » monture, « ≈ 2 400 A$ » complète) et déroulé du paiement (acompte 50 %, 250 A$ pour la CAO) lisibles sans contact.
3. **Délais décomposés** : 1 semaine de CAO, 3 jours de validation, 4 à 6 semaines de fabrication (`/delivery-and-warranty`).
4. **Fenêtre de validation du dessin avant fabrication** (3 jours calendaires) : proche de la promesse « ce que vous voyez existe » de JR Diamond.
5. **Galerie par fiche** : une vidéo et six photos, avec la mention explicite de la pierre montrée (« Shown with : 9 mm / 3,00 ct, bande 2,0 mm, haute, cathedral »).
6. **Fenêtre « Metal information »** : composition, durabilité, entretien, risque d'allergie par métal ; modèle de transparence pour un choix 14 k / 18 k.

## Défauts observés

- Le cœur du constructeur (étapes Setting à Confirm) passe par des adresses à paramètres, ce qui l'empêche d'être exploré par un robot respectueux : audit incomplet par construction [V].
- Les boutons de couleur de métal n'ont pas répondu dans mon test : sans effet visible sur la fiche [V pour l'échec ; cause inconnue].
- Pas de retour pour changement d'avis, même pour une bague standard [V].
- Pas de naturel, pas de GIA sur les pages lues ; panier vide au chargement, aucun récapitulatif de commande observé [V].
- Une photo porte la mention « LD logo in images for copyright only - not on final product » : le visuel affiché n'est pas la pièce finale [V].

## Limites de l'audit

- robots.txt interdit `/api/`, `/_vercel/` et toute adresse contenant `?…metal=`, `shape=`, `design=`, `stone=`, `ring-size=`, `engraving`, etc. La page appelle à son ouverture `/api/diamonds/round/index?country=AU` et `/api/country` : ces requêtes ont été interceptées dans le navigateur. Le bouton « Continue » mène à une adresse interdite : non suivi. Les étapes 2 à 5, la liste des diamants, la vidéo 360° et l'ajout au panier n'ont donc pas été vus.
- Le prix des couleurs de métal autres que le jaune n'a pas pu être lu (clics sans effet).
- Formulaires (newsletter, contact, rendez-vous) non remplis.
- Mesures en réseau de session cloud, valeurs relatives. Temps d'apparition de l'image principale : page constructeur **ordinateur 484 ms visible, 751 ms chargée ; iPhone 431 ms / 725 ms** ; fiche Hailey **ordinateur 478 ms ; iPhone 353 ms** ; premier rendu 716 ms ; pas de défilement horizontal sur iPhone [V].
- Visuel principal : photo ou vidéo, pas de 3D temps réel ; la présence d'une visionneuse 3D ou d'un essayage sur la main n'a pas été relevée [V pour l'absence dans les contrôles listés].

## Sources

- https://lilydiajewellery.com/design-your-own-engagement-ring [V]
- https://lilydiajewellery.com/engagement-rings/customise/hailey-4-claw-round-solitaire-engagement-ring [V]
- https://lilydiajewellery.com/delivery-and-warranty [V] ; https://lilydiajewellery.com/returns [V] ; https://lilydiajewellery.com/our-story [V]
- https://lilydiajewellery.com/robots.txt [V]
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/au/lily-dia/` (hors dépôt)
