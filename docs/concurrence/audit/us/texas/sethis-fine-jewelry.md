# Sethi's Fine Jewelry (Houston, Texas)

| | |
|---|---|
| Site | Sethi's Fine Jewelry (Houston, Voss Road, près de la Galleria) |
| Adresse | https://sethisfinejewelry.com/ (page de départ : https://sethisfinejewelry.com/custom-ring-builder/) |
| Date | 15/11/2026 |
| Appareils | Chromium ordinateur (1366 x 900) et affichage iPhone 13 |
| Statut | **partiel** : assistant en 4 étapes vérifié jusqu'à l'étape 4 ; la sortie vers le dessinateur 3D appelle `jeweleros.com/api/` (interdit par le robots.txt de ce domaine : `Disallow: /api/`), donc non actionnée. Panier : `/cart/` interdit par robots.txt du site, non ouvert ; le site est vitrine (pas de boutique en ligne repérée). |

Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé. Pages ouvertes (autorisées) : `/custom-ring-builder/`, `/custom-jewelry/`, `/engagement-rings-houston-3/`, `/testimonials/`, `/buying-natural-diamonds-houston/`.

## Parcours

| Étape | Options |
|---|---|
| 1. Style | 3 pastilles de métal (Yellow Gold, White Gold, Rose Gold) ; 9 cartes : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch ; boutons Back, Skip [V] |
| 2. « Choose your center stone » (étape 2 sur 4) | Natural / Lab Grown ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; Decide later [V] |
| 3. « Select your center stone size » (3 sur 4) | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carats ; Decide later ; phrase : le carat exact se règle dans le dessinateur [V] |
| 4. « When do you need your ring? » (4 sur 4) | 1–4 semaines, 1–3 mois, 3–6 mois, Not sure yet [V] |
| 5. Sortie | Appel `jeweleros.com/api/create/…` (domaine tiers, Disallow: /api/) : non actionné [I, par comparaison avec l'assistant identique de Wolf Diamonds, voir `wolf-diamonds.md`] |
| Panier | Non ouvert : `/cart/` interdit [V, robots.txt] |

Parcours exercé : Three Stone, Lab Grown, Oval, 2 carats, arrêt à l'étape 4. L'URL reste `/custom-ring-builder/` [V].

## Contrôles vérifiés

Relevé automatique : 30 contrôles (ordinateur), 21 (iPhone). L'assistant est un composant tiers (préfixe `jos-`, JewelerOS).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles de métal (Yellow, White, Rose Gold) | boutons `jos-metal-btn` | Présents ; la pastille jaune est active par défaut ; les vignettes de bague restent dorées à la capture [V] | aucun prix | présents, effet visuel non mesuré |
| 9 cartes de style | boutons | Passage à l'étape 2 (clic sur Halo et Three Stone vérifié) [V] | aucun | OK |
| Skip | bouton | Présent à chaque étape ; non actionné [V] | aucun | non testé |
| Back | bouton | Présent ; retour à l'étape précédente [I] | aucun | non testé |
| Natural / Lab Grown | boutons | Lab Grown cliqué : reste sur l'étape 2, sélection enregistrée [V] | aucun | OK |
| 9 formes de pierre | boutons | Oval cliqué : passage à l'étape 3 [V] ; les 8 autres relevées, non cliquées | aucun | OK (1/9) |
| 8 tailles en carats + Decide later | boutons | « 2 carat » cliqué : passage à l'étape 4 ; en-tête résume « Three Stone Oval 2 carat » [V] | aucun | OK (1/8) |
| 4 délais de besoin | boutons | Présents ; non cliqués (le dernier clic lance l'appel au domaine interdit) [V] | aucun | non testé : robots.txt de jeweleros.com |
| BOOK NOW (en-tête) | lien | Calendly `calendly.com/sethisfinejewelryhouston/personal-jewelry-consultation` ; non ouvert [V, lien] | aucun | non testé |
| Call 713-789-3359 | lien tel: | Appel [V] | aucun | non testé |
| Recherche (loupe) | champ | Présent ; non utilisé (adresses de recherche à contrôler) [V] | aucun | non testé |
| Testimonials, Bridal, Diamonds, Fine Jewelry, Gemstone Jewelry, Custom Designs | liens de menu | Pages vitrine ; Testimonials, Custom Jewelry, Bridal et Diamonds : 200 [V] | aucun | OK / reste non ouvert |
| The Knot, WeddingWire, WeddingsInHouston | liens | Annuaires externes [V] | aucun | non testé |
| Formulaire de pied de page (prénom, nom, e-mail, Sign up) | formulaire | Inscription à la liste d'envoi (Constant Contact) ; non rempli [V] | aucun | non testé (règle : aucun formulaire) |
| Facebook, Instagram, plan (maps.app.goo.gl) | liens | Réseaux et carte [V] | aucun | non testé |

Visuel : une image de bague par style (photo ou rendu fixe, en or jaune) ; aucune image de bague ne change avec la pierre ou le métal dans les étapes vues [V, captures]. Une image d'insigne cassée (« weddingwire.com ») s'affiche en pied de page [V, capture].

## Options disponibles

- Styles : 9. Métaux : or jaune, blanc, rose dans l'assistant (platine cité en texte pour la fabrication sur mesure) [V]. Pierres : naturel ou lab ; 9 formes ; 0,5 à 5 ct par paliers. Délais d'usage : 4 choix.
- Absents : prix, taille de doigt, gravure, titre 14/18 k, vue 3D dans l'assistant (la 3D se fait ensuite sur le dessinateur du tiers, non vu), comparaison, enregistrement.
- Page `/engagement-rings-houston-3/` : 500 montures en stock, diamants GIA en vrac, marques revendues (Gabriel & Co., Imagine Bridal, Crown's Ring, ODELIA…) [V, texte].

## Prix, délais, retours, garanties

- Prix : aucun prix affiché dans le parcours ni sur les pages lues ; « transparent pricing » est une affirmation sans chiffre [V].
- Délai : l'assistant demande seulement la date souhaitée (1–4 semaines à 3–6 mois) ; pas de délai promis. Étapes du sur-mesure : choix de la pierre, rendu CAO 3D, **prototype en cire imprimé en 3D à essayer en boutique**, coulée, sertissage, polissage [V, texte].
- Retours, garanties, livraison, paiement : non trouvés dans les pages lues ; panier non accessible [V].

## Confiance et service

- Diamants GIA naturels en vrac ; diamants « lab-made » proposés ; pas de mention IGI lue [V].
- Libellé synthétique : « lab-grown » dans l'assistant ; « lab-made diamonds » dans le texte [V].
- Anglais, USD implicite ; aucune autre langue [V].
- Avis : page Testimonials (témoignages signés par prénom et ville, dont un client revenu après un achat en ligne décevant) ; liens The Knot et WeddingWire [V].
- Preuves de fabrication : promesse de rendu CAO et d'essayage d'un prototype en cire ; pas de vidéo d'atelier ni suivi de commande vus [V, texte].
- Service : consultation sur rendez-vous (Calendly), téléphone, boutique, famille « depuis plus de 25 ans » [V].

## Points forts à retenir pour JR Diamond

- **Prototype en cire imprimé en 3D à essayer avant la fabrication** : preuve physique que « ce que vous voyez existe », sur la page d'étape du sur-mesure [V, texte]. À rapprocher de notre promesse du fichier de fabrication.
- Assistant court (4 étapes, bouton Skip et « Decide later » à chaque étape) qui ne bloque jamais l'utilisateur [V].
- Résumé affiché en tête de l'étape (« Three Stone Oval 2 carat ») qui montre les choix déjà faits [V].
- Témoignage d'un acheteur déçu par un achat en ligne parti en boutique : confirme le besoin de preuve et de service humain [V, page Testimonials].

## Défauts observés

- Aucun prix, aucun panier, aucun achat en ligne [V].
- Aucune visualisation de la bague composée dans l'assistant : tout part vers un dessinateur tiers [I].
- Assistant lent à apparaître : 3,8 s (ordinateur), 4,4 s (iPhone) [V].
- Image d'insigne cassée, en-tête et logo qui se chevauchent sur ordinateur [V, capture].
- Une requête d'erreur (`POST jeweleros.com/api/log-error/`) part de la page elle-même pendant le parcours [V].

## Limites de l'audit

- Étape finale non actionnée (domaine interdit) : le dessinateur 3D du tiers, ses options (taille de doigt, 3D, prix) et sa vitesse n'ont pas été vus. La page `/cart/` n'a pas été ouverte (interdite).
- Effet des pastilles de métal sur l'image non mesuré ; 1 forme sur 9 et 1 taille sur 8 cliquées. Sur iPhone, seules les commandes de l'étape 1 ont été relevées, non cliquées.
- Pages boutique, produits et le reste du menu non ouverts.

## Sources

- https://sethisfinejewelry.com/custom-ring-builder/ ; /custom-jewelry/ ; /engagement-rings-houston-3/ ; /testimonials/ ; /buying-natural-diamonds-houston/ (lues le 15/11/2026).
- https://sethisfinejewelry.com/robots.txt (`Disallow: /cart/`, `/checkout/`) et https://www.jeweleros.com/robots.txt (`Disallow: /api/`), vérifiés.
