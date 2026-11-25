# Audit : Harry & Co Jewellery (Adelaide, Australie-Méridionale)

- **Site** : https://harryandcojewellery.com.au ; page de départ https://harryandcojewellery.com.au/collections/engagement-rings (redirigée vers `/collections/engagement-rings-1` pour les liens produits)
- **Date** : 15/11/2026 (séance d'audit menée le 25/11)
- **Appareils** : ordinateur (Chromium 1440 x 900) et affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Le blocage signalé (défi Shopify 429 sur la page de départ) ne s'est pas reproduit : la page, la fiche et les pages de service se sont ouvertes normalement (HTTP 200), sans nouvel essai répété ni changement d'identité. Mais le site n'a **pas de panier ni de configurateur pour bagues de fiançailles** : la fiche mène à une demande de devis. Filtres, tri et bouton « Notify me » non actionnés.
- Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.
- Conformité : `robots.txt` lu ; aucune adresse INTERDITE ouverte ; `/cart` (autorisé) lu une fois ; formulaire de devis lu mais non rempli.

## Parcours

| Étape | Adresse | Options [V] |
|---|---|---|
| Collection | `/collections/engagement-rings-1` (83 articles d'après le panneau de filtres) | formes en pastilles (ovale, coussin allongé, rond, émeraude, marquise, radiant, poire, Asscher) ; filtres ; tri |
| Fiche | `/collections/engagement-rings-1/products/oval-cut-diamond-hidden-halo` | métal (3), type de pierre (2), personnalisation (gravure, pierre de naissance, halo caché), « From $… – Request a quote » |
| Devis | `/pages/request-today-s-price-form` | nom, e-mail, téléphone, carat, budget, notes (non rempli) |
| Rendez-vous | `/pages/appointment` | calendrier Calendly intégré (non utilisé) |
| Panier | `/cart` | page vide ; texte « free shipping », code WELCOME10 ; aucun ajout testé |

## Contrôles vérifiés

Collection (180 contrôles listés par `controls.cjs`) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau « Secure your one-on-one consultation » | lien | `/pages/appointment` | — | présent [V] |
| Menu Custom design / Engagement / Wedding / Fine jewellery / About | menus | survol, liens `#` | — | non parcourus |
| Account, wishlist (`#swym-wishlist`), Cart | liens | `/account` (interdit, non ouvert), liste d'envies, `/cart` (lu) | — | Cart ouvert ; compte non testé |
| Pastilles de formes (8) | liens | `/collections/oval-cut`, `…elongated-cushion-cut`, `…round-brilliant-cut`, `…emerald-cut`, `…marquise-cut`, `…radiant-cut`, `…pear-cut`, `…marquise-cut-engagement-rings-copy` (Asscher) | — | présentes ; non suivies ; **le lien Asscher pointe vers une adresse « marquise-cut … copy »** [V] |
| FILTERS | bouton | ouvre un tiroir de filtres (compteur « View 83 items ») | — | ouvert [V] ; aucune case cochée |
| Filtres : Gem cut (rond, ovale, coussin, princesse, émeraude, poire, marquise, radiant, rose cut, hexagonal, coussin allongé), Side stones, Product type, Prongs (4, 5, 6), Centre stone carat (0,5 – 8,0), Gemstone (diamond), Halo, Band width (1,8 mm), Accent stones, Bridge, Gallery, Shank profile (cathédrale, tapered, half round, knife edge, split), Ring type (solitaire, trilogie), Ring setting (solitaire, bezel), Gallery rail, Tiger claws, Head (low set, basket, bezel) | cases | listées avec leurs valeurs ; **pas de filtre de prix, de couleur, de pureté, de certificat** | — | non cochés (le cumul de deux filtres est interdit par robots.txt) |
| SORT BY | bouton | présent ; options non ouvertes (`sort_by` interdit) | — | non testé |
| Cartes produit (24 par page, pagination 1, 2, 3, Next) | liens | prix « From $2 500 / $3 000 / $4 500 / $4 800 » | — | présentes [V] |
| « Need help choosing ? Book an appointment » | bloc | `/pages/appointment` | — | présent |
| Pied de page : About, Adelaide studio, Ethical promises, FAQ, Shipping, Returns, Warranty, Size guide, Policy hub, Diamond guide, Glossary | liens | pages de contenu | — | politiques lues |
| 08 7119 8939, care@harryandcojewellery.com.au | tel / mailto | présents | — | non actionnés |
| Devise « AUD $ » | bouton | sélecteur de devise présent | — | non ouvert |

Fiche produit (ovale solitaire halo caché) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Galerie (5 liens image, Previous / Next) | boutons | photos de studio ; une vidéo/3D n'a pas été trouvée (aucun `video`, `model-viewer` ni iframe) | — | présentes [V] |
| « …read more » | bouton | déplie la description (halo caché sous la pierre) | — | OK [V] |
| Métal : 18 kt (jaune, blanc, rose) | radio | sélectionné par défaut | pierre lab-grown : $3 500 ; naturelle : $4 500 | OK [V] |
| Métal : platine | radio | change la variante (adresse `?variant=…`) | lab $4 000 ; naturel $5 000 | OK [V] |
| Métal : 14 kt (jaune, blanc, rose) | radio | idem | lab $3 000 ; naturel $4 000 | OK [V] |
| Pierre : Lab Grown Diamond | radio | par défaut | prix ci-dessus | OK [V] |
| Pierre : Natural Mined Diamond | radio | +$1 000 sur chaque métal | voir ci-dessus | OK [V] |
| Photo principale selon le métal | — | le nom du fichier de la photo n'a pas changé après chaque clic | — | la photo ne suit pas [V] |
| Couleur du métal (jaune / blanc / rose) | — | **aucun choix de couleur** à l'intérieur de « 18 kt Gold | Yellow | White | Rose » : une seule radio par titre | — | pas de sélecteur [V] |
| Chips « Customisation options » : Engraving, Birthstones, Hidden Halo | libellés | affichage seul (pas de case) | non chiffré | présents [V] |
| BOOK AN APPOINTMENT / Talk to our team / Send us an email / Make an appointment | liens | `/pages/appointment`, `tel:0871198939`, `/pages/contact-us` | — | présents ; non actionnés |
| « From $3 500 – REQUEST A QUOTE » | lien / bouton | mène à `/pages/request-today-s-price-form` (formulaire : nom, e-mail, téléphone, carat 0,50 à 2,00+, budget « Below $500 » à « Above $5000 », notes) | prix « à partir de » seulement | formulaire lu, non rempli |
| Design specifications / The signature range | boutons | non dépliés par le test | — | non testé |
| Accordéons « Hand-selected diamonds… », « Guidance from our diamond experts », « In-person or virtual review… », « Crafted to be cherished… », « Ethically sourced… » | accordéons | textes lus | — | OK [V] |
| Avis (« See more reviews », carrousel) | liens | 2 avis Google cités sur la page | — | présents [V] |
| Produits liés / vus récemment, cœur de liste d'envies | cartes | présents | — | non testé |
| ADD TO CART | — | **absent de la fiche** ; un élément masqué « Add to cart / Made to order – Notify me when it's available » existe dans le code de la page, non visible | — | non testé |

Absents : vue 3D, 360°, vidéo, essayage AR, comparateur, partage, carat et couleur de la pierre dans la fiche.

## Options disponibles [V]

- **Métal** : or 18 kt, or 14 kt (jaune, blanc, rose), platine (la couleur n'est pas choisie sur la fiche).
- **Pierre** : lab-grown ou naturelle (« Natural Mined »), carat 0,5 à 8,0 ; la pierre est « hand selected » par l'atelier après contact.
- **Formes** : ovale, coussin allongé, rond, émeraude, marquise, radiant, poire, Asscher, hexagonale, rose cut, princesse, toi et moi.
- **Styles** : solitaire, trilogie, halo caché, bezel, compass, baguettes latérales, vintage.
- **Détails** : griffes 4 / 5 / 6, jonc cathédrale, tapered, half round, knife edge, split ; gravure ; pierre de naissance à l'intérieur ; tiger claws.
- **Taille de doigt** : tailles standard S / M / L (australienne L, N, …) ou taille personnalisée à indiquer en note de commande ; retour dans les 120 jours pour la faire ajuster (page Sizing).

## Prix, délais, retours, garanties [V]

- **Prix** : « From $X » (lab-grown, 14 kt) ; la fiche vue : $3 000 (14 kt lab), $3 500 (18 kt lab), $4 000 (platine lab ou 14 kt naturel), $4 500 (18 kt naturel), $5 000 (platine naturel). Total non décomposé ; le prix définitif passe par « Request today's price ».
- **Délai** : « Crafted in Australia in 4-6 weeks » (fiche) ; page livraison : 6 à 8 semaines pour le sur mesure ; 4 semaines pour la joaillerie fine (incohérences entre les pages) [V].
- **Livraison** : gratuite sur tout achat ; Australie, boîtes postales comprises ; 3 à 5 jours ouvrés ; suivi par e-mail de confirmation [V].
- **Retours** (mise à jour du 17/10/2025) : bijoux sur mesure ni remboursables ni échangeables sauf défaut, non-conformité aux spécifications ou garanties légales ACL ; contact sous 7 jours ; prêt-à-porter : retour sous 14 jours (échange ou avoir de 12 mois, y compris avec le certificat GIA), remboursement seulement si la loi l'impose [V].
- **Garanties** : garantie à vie limitée sur les bagues de fiançailles et alliances ; entretien à vie offert (contrôle, nettoyage, polissage, serrage) ; rhodiage en supplément [V].
- **Certificats** : la page de retours cite un certificat GIA ; certificats par pierre non montrés en ligne [V pour la mention].
- **Libellé du synthétique** : « Lab Grown » ; « Natural Mined » pour le naturel [V].
- **Langues, devises** : anglais ; AUD avec un sélecteur de devise présent [V].
- **Financement, moyens de paiement** : non relevés (pas de panier fonctionnel) ; le panier vide annonce « free shipping », « Update cart », « Check out » et le code WELCOME10 (10 %) [V].

## Confiance et service

- Studio à Hyde Park (Adelaide) ; rendez-vous en personne ou virtuel ; calendrier en ligne ; conseillère dédiée citée dans les avis [V].
- Avis Google cités sur la page (2 affichés, nom cité dans l'extrait) ; « Our ethical promises » (diamants sans conflit) [V].
- Engagement « conflict-free » et chaîne d'approvisionnement : texte déclaratif, sans preuve vérifiable sur la page [V].
- Preuves de fabrication : processus en 4 étapes décrit en texte (personnaliser, choisir un diamant, fabriquer en 4-6 semaines) ; **aucune photo ni vidéo d'atelier, aucun suivi de commande** vus [V].

## Mesures du visuel principal

| Page | Ordinateur | iPhone |
|---|---|---|
| Collection, première image | 4 600 ms | 10 254 ms |
| Fiche, première image | 2 274 ms | 2 367 ms |

Un essai par cas, réseau du bac à sable : ordre de grandeur seulement. Pas de défilement horizontal sur mobile [V].

## Points forts à retenir pour JR Diamond

1. **Prix par métal et par origine affiché sur la fiche** (lab $3 000 à $4 000, naturel $4 000 à $5 000) avec le même menu : l'effet de la pierre naturelle (+$1 000) se voit en un clic. Preuve : variantes relevées.
2. **Processus en 4 étapes expliqué** (personnaliser la monture, choisir un diamant, fabriquer, livrer) : modèle de parcours « devis → pierre → fabrication ». Preuve : section « Our process ».
3. **Pierre « hand selected » + revue en personne ou à distance avant engagement** : argumentaire de confiance proche de « l'atelier en direct ». Preuve : accordéons « In-person or virtual review before committing ».
4. **Politique de retours et garantie lisibles** (date de mise à jour 17/10/2025, exceptions du sur mesure énumérées, délai de 7 jours pour déclarer un défaut). Preuve : `/pages/refund-returns-and-exchange-policy`.
5. **Taille de doigt ajustable sous 120 jours** : réduit le risque d'une commande-cadeau. Preuve : page Sizing.
6. **Filtres de conception rares** (griffes, profil du jonc, tête, galerie, tiger claws). Preuve : tiroir de filtres.

## Défauts observés

- **Pas de prix final ni de panier pour les bagues de fiançailles** : le bouton principal est « Request a quote » ; le prix de départ reste « From ».
- Aucun choix de couleur de l'or (jaune, blanc, rose) sur la fiche vue ; la photo ne change pas avec le métal.
- Aucun filtre de prix, de couleur, de pureté ni de certificat ; pas de 3D, 360° ni vidéo.
- Délais contradictoires : 4-6 semaines (fiche), 6-8 semaines (livraison), 4 semaines (joaillerie fine).
- La pastille « Asscher » pointe vers une adresse « marquise-cut-engagement-rings-copy ».
- Chargement lent de la collection sur iPhone (10,3 s la première image dans un essai).
- La fiche affiche un bloc au texte provisoire de modèle (« TITLE — Share details about your shipping policies, item returns, or customer service »).
- Aucune preuve de fabrication visible.

## Limites de l'audit

- Filtres, tri, sélecteur de devise, calendrier et formulaire de devis non actionnés ; aucune donnée saisie.
- Ajout au panier impossible sur la fiche testée ; récapitulatif, frais, moyens de paiement et financement non relevés.
- Une seule fiche détaillée (ovale halo caché) ; d'autres fiches (par exemple les pierres lab-grown listées à 1,82 ct, $5 500) n'ont pas été ouvertes.
- Le blocage signalé le 22/11 ne s'est pas reproduit ; il n'y a donc pas de copie ni d'extrait de moteur de recherche dans ce rapport.
- Mesures de vitesse : une mesure par page.

## Sources

- https://harryandcojewellery.com.au/collections/engagement-rings-1 (collection, filtres)
- https://harryandcojewellery.com.au/collections/engagement-rings-1/products/oval-cut-diamond-hidden-halo (fiche)
- https://harryandcojewellery.com.au/pages/request-today-s-price-form ; /pages/shipping-and-returns ; /pages/refund-returns-and-exchange-policy ; /pages/warranty-and-care ; /pages/sizing ; /pages/appointment ; /cart
- https://harryandcojewellery.com.au/robots.txt
