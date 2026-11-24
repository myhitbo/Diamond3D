# Audit : Selman's Jewelers (Mississippi)

- **Site** : Selman's Jewelers, détaillant indépendant (McComb et Brookhaven, Mississippi), boutique Shopify.
- **Adresse de départ** : https://selmansjewelers.com/pages/custom-ring-builder
- **Date** : 15/11/2026 (audit réalisé par l'auditeur 2 du Mississippi)
- **Appareils** : Chromium ordinateur 1366×900 ; Chromium en affichage iPhone 13 (émulation).
- **Statut** : **partiel**. Le constructeur d'avant-projet (4 étapes) a été parcouru ; le « 3D Ring Designer » final n'a jamais chargé (voir Défauts). Pas de blocage anti-robots.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

Le « constructeur » est un assistant en 4 étapes intégré à la page (widget JewelerOS, scripts et images de jeweleros.com / jos0.b-cdn.net) qui doit ensuite ouvrir un « 3D Ring Designer » [V : texte « you'll be able to fully customize your design in our 3D Ring Designer »].

| Étape | Options (toutes relevées) |
|---|---|
| 1 sur 4 « Let's start designing your ring » | Pastille de métal : or jaune, or blanc, or rose. Style : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » |
| 2 sur 4 « Choose your center stone » | Bascule Natural / Lab Grown. Forme : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » |
| 3 sur 4 « Select your center stone size » | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carat, « Decide later » (« once you're in the ring designer you can easily set an exact carat weight ») |
| 4 sur 4 « When do you need your ring? » | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet |
| Après l'étape 4 | Écran de chargement puis « Something went wrong / Try again » (3 essais sur 3) ; « Try again » renvoie à l'étape 1 |

## Contrôles vérifiés

Liste brute relevée par controls.cjs : 83 contrôles visibles sur ordinateur, 57 en affichage iPhone (en-tête, menus, avis, pied de page compris). Seuls les contrôles du constructeur et du service sont détaillés ; la navigation du magasin est regroupée.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille or jaune / blanc / rose | bouton | Actif par défaut : jaune. Change la couleur des vignettes d'étape 1 (solitaire_yellow → _white, etc.) | aucun prix affiché | OK [V] |
| 9 cartes de style (étape 1) | carte cliquable | Passe à l'étape 2, pas de navigation d'adresse | aucun | OK [V] (Solitaire testé ; les autres cartes non cliquées une à une) |
| « Start from scratch » | carte | Non testé (même mécanisme présumé) | — | non testé [S] |
| Natural / Lab Grown | bascule | Change l'état actif (vérifié sur Kux, même widget, et sur Selman's pour Natural par défaut) | aucun | OK [V] |
| 9 formes + « Decide later » | carte | Passe à l'étape 3 (Round et Oval testés) | aucun | OK [V] |
| 8 poids + « Decide later » | carte | Passe à l'étape 4 (0,5 et 1 ct testés) | aucun | OK [V] |
| 4 délais | carte | Lance le chargement du 3D Ring Designer (« 1 - 4 weeks » testé) | aucun | **en échec** [V] |
| « Try again » | bouton | Remet le widget à l'étape 1 | — | OK mais inutile [V] |
| « Back » / « Skip » | boutons | Présents dans le widget ; non actionnés | — | non testés |
| Recherche, liste de souhaits, panier (icône) | champ, liens | Panier vide : « Your cart is empty » [V /cart] | — | OK |
| Avis Google (carrousel, « Show more », « Leave a Review ») | liens | Mènent à Google Maps ; non ouverts | — | non testés (hors site) |
| Bouton « Text us » | chat SMS | Bulle « Hi there, have a question? Text us here! » ; conversation non ouverte | — | non ouvert (règle) |
| Réseaux sociaux, e-mail, téléphone | liens | tel:+1 601 684 1517, sales@selmansjewelers.com | — | non ouverts |
| Ajouter au panier (fiche Alanna) | bouton | **Non cliqué** : /cart/add interdit par robots.txt. Panier interdit par robots.txt pour l'ajout | — | non testé |

Fiche produit lue pour comparaison (/collections/engagement-rings/products/alanna) : taille de bague (liste), quantité, « Add to cart », « More payment options », « Pickup available … Usually ready in 24 hours », « Add to Wishlist », « Returns + Exchanges », partage Facebook/Pinterest, zoom d'image [V].

## Options disponibles

- Métaux du constructeur : or jaune, or blanc, or rose. Pas de platine, pas de titre (10/14/18 k) à ce stade [V].
- Styles : 9 + « from scratch ». Formes : 9. Origine : naturel ou « Lab Grown ». Carats : 8 paliers.
- Non proposés dans l'avant-projet : taille de doigt, gravure, pavage détaillé, certificat (GIA/IGI), prix. Le reste est censé se faire dans le 3D Ring Designer, inaccessible [V/I].
- Modes de vue : aucun mode (3D, 360°, AR) accessible ; seules des vignettes webp statiques [V].

## Prix, délais, retours, garanties

- **Prix du constructeur** : aucun prix affiché dans les 4 étapes [V]. Fiche d'une bague en vente (catalogue de 52 produits) : « Alanna » 14 k or blanc, diamant de laboratoire rond 3,05 ct + 1,42 ct tw, 2 530,00 $ ; autres prix du catalogue de 2 140 à 8 280 $ [V]. Pas de décomposition du prix.
- **Délai** : constructeur : question « When do you need your ring? » (1-4 semaines à 3-6 mois), pas de promesse de délai. Fiche : « Estimated delivery between November 28 and November 30 » [V]. Expédition : même jour pour le stock, 2-3 jours en haute saison ; livraison gratuite dès 150 $ (/policies/shipping-policy) [V].
- **Retours** : deux textes qui se contredisent sur le site. /pages/store-policies : remboursement ou échange sous 15 jours, avoir sous 30 jours, article non porté, non modifié (ni mise à taille, ni gravure) ; « Custom pieces, special orders … cannot be refunded » [V]. /policies/refund-policy : 30 jours, exceptions pour produits personnalisés/commandes spéciales et soldes ; délai de rétractation UE de 14 jours [V].
- **Garanties** : non lues sur les pages consultées. Services en magasin : réparation, design sur mesure, estimations, gravure, nettoyage gratuit pour les achats faits chez eux (/pages/our-services) [V].
- **Moyens de paiement affichés** (pied de page) : Amex, Apple Pay, Diners, Discover, Google Pay, Mastercard, PayPal, Shop Pay, Visa [V].
- **Devise, langue** : USD, anglais [V]. **Certificats** : non mentionnés dans le constructeur. **Libellé synthétique** : « Lab Grown » (constructeur) et « Lab-Grown » (catalogue) ; texte de collection « Natural or Lab-Grown: What's the Difference? » [V].

## Confiance et service

- Avis : 4,9 / 5 sur 438 avis Google, résumé « AI Summary », avis avec photos [V, page du constructeur].
- Deux boutiques physiques avec adresses, horaires, téléphones ; retrait en magasin sous 24 h [V].
- Chat SMS « Text us » en permanence ; formulaire de contact [V].
- Preuves de fabrication (vidéos d'atelier, suivi de commande) : aucune vue ; seul un récit d'avis client sur la transformation d'un bijou de famille [V : avis cité en substance, auteur non reproduit].
- Page de financement : non trouvée ; « More payment options » sur la fiche [V].

## Points forts à retenir pour JR Diamond

1. **Entrée en 4 questions courtes, avec boutons visuels** : style, forme, carat, délai souhaité ; chaque réponse a une sortie « Decide later ». Preuve : étapes 2 et 3 relevées. À imiter pour réduire l'indécision.
2. **Question du délai souhaité en dernière étape** : sert à recommander un calendrier (texte « Help us recommend the best timeline »). Preuve : étape 4.
3. **Date de livraison estimée sur la fiche** (« Estimated delivery between November 28 and November 30 »). Preuve : fiche Alanna.
4. **Bascule Natural / Lab Grown dès la forme de pierre** : même geste pour les deux origines. Preuve : étape 2.
5. **Avis Google et note visibles directement sous le constructeur** : preuve sociale au point de décision.

## Défauts observés

- **Le « 3D Ring Designer » n'a pas chargé** : après l'étape 4, écran « Something went wrong / Try again », 3 essais sur 3 ; retour à l'étape 1 après « Try again » [V]. Cause observée dans la console : requêtes du widget vers jeweleros.com/api/config, /api/widget/config et /api/create/from-ring-config bloquées par CORS [V]. [I] La panne peut tenir à l'environnement d'audit (proxy) ou au site ; nous n'avons pas pu trancher.
- Aucun prix, aucun résultat de configuration dans la partie accessible : le visiteur ne voit rien de sa bague.
- Politique de retour contradictoire entre deux pages (15 j contre 30 j) [V].
- Aucune photo de bague 3D réelle : vignettes de type « image de catalogue » (webp) [V].
- Message de bulle chat qui masque partiellement la carte « Start from scratch » à 1366 px [V, capture].

## Limites de l'audit

- Le visuel principal 3D n'a pas pu être mesuré : la 3D n'a jamais chargé. Temps de première vignette visible du constructeur (adresse ouverte → première image d'étape chargée) : 2,4 s ordinateur, 2,6 s iPhone, une mesure chacune [V, une seule exécution].
- Cartes de style autres que Solitaire, « Start from scratch », « Back » et « Skip » non actionnées.
- Ajout au panier non testé : /cart/add interdit par robots.txt (« Disallow: /cart/ ») ; page /cart ouverte (vide) seulement. Le robots.txt de Selman's demande aussi aux agents d'utiliser ses interfaces dédiées plutôt que des scripts de navigation ; l'audit s'est limité à la lecture et à un parcours sans achat.
- Le chemin /api/ de jeweleros.com est interdit par robots.txt ; il n'a pas été ouvert directement, seulement appelé par le widget du site lors d'un parcours normal.
- Capture mobile du constructeur faite (étape 2 atteinte) ; parcours mobile complet non rejoué.
- Aucune donnée personnelle saisie, aucun formulaire envoyé, pas de chat ouvert.

## Sources

- https://selmansjewelers.com/pages/custom-ring-builder (parcours, avis, pied de page)
- https://selmansjewelers.com/pages/store-policies, /pages/our-services, /pages/contact, /policies/shipping-policy, /policies/refund-policy
- https://selmansjewelers.com/collections/engagement-rings et /collections/engagement-rings/products/alanna
- https://selmansjewelers.com/cart (vide) ; https://selmansjewelers.com/robots.txt
- Captures et JSON dans le dossier de travail de l'audit (hors dépôt).
