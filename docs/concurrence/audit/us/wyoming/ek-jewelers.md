# Audit : EK Jewelers (Gillette, Wyoming)

- **Site** : EK Jewelers (ex-Elegant Kreations) ; **adresse** : https://ekjewelers.com/ ; page de départ : https://ekjewelers.com/pages/design-your-ring
- **Date** : 15/11/2026 (date imposée par la consigne ; pages lues le 25/11/2026 d'après l'horloge du poste)
- **Appareils** : Chromium sans écran, ordinateur (1366 × 900) et affichage iPhone 13
- **Statut** : **partiel** (les étapes 1 à 4 du questionnaire sont vérifiées ; la vue 3D finale et l'ajout au panier n'ont pas été ouverts, voir « Limites »)
- Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé. Prix en dollars américains.

## Parcours

Outil 3D en marque blanche JewelerOS (identifiant partenaire visible dans les requêtes ; scripts `jos.js`, `partner_config.js`), affiché dans la page Shopify. [V] https://ekjewelers.com/pages/design-your-ring

| Étape | Options (vérifiées) |
|---|---|
| 1 sur 4 « Let's start designing your ring » | Pastilles de métal : Yellow Gold, White Gold, Rose Gold ; styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » ; boutons « Back » et « Skip » |
| 2 sur 4 « Choose your center stone » | Natural ou Lab Grown ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » |
| 3 sur 4 « Select your center stone size » | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carats ; « Decide later » ; texte : « Once you're in the ring designer you can easily set an exact carat weight » |
| 4 sur 4 « When do you need your ring? » | 1 - 4 weeks ; 1 - 3 months ; 3 - 6 months ; Not sure yet |
| Après l'étape 4 | Designer 3D « 3D Ring Designer » : **non ouvert** (voir Limites) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| White Gold / Rose Gold (étape 1) | pastille | les vignettes passent de `solitaire_yellow` à `solitaire_white` ou `solitaire_rose` (images webp d'un CDN) | aucun prix affiché | fonctionne [V] |
| Yellow Gold (étape 1) | pastille | sélectionnée par défaut | aucun | fonctionne [V] |
| Solitaire (étape 1) | carte | passe à l'étape 2 en 2,6 s environ (délai d'attente de mon script inclus) ; aucune requête vers l'API du fournisseur | aucun | fonctionne [V] |
| Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone | carte | présentes, même mécanique que Solitaire | aucun | non cliquées une à une (même composant) [I] |
| Start from scratch | carte | passe directement à l'étape 2 | aucun | fonctionne [V] |
| Natural / Lab Grown (étape 2) | bascule | « Lab Grown » cliqué, puis une forme : passe à l'étape 3 ; pas de changement visible d'image | aucun | fonctionne [V] |
| Marquise (étape 2) | carte | passe à l'étape 3 ; le choix reste affiché en fil d'Ariane (« Solitaire / Marquise ») | aucun | fonctionne [V] |
| Round (affichage iPhone) | carte | passe à l'étape 3 (Solitaire, Natural, Round) | aucun | fonctionne [V] |
| Autres formes (Oval, Cushion, Emerald, Princess, Asscher, Pear, Radiant) | carte | présentes | aucun | non cliquées (même composant) [I] |
| 1 carat (étape 3) | carte | passe à l'étape 4 | aucun | fonctionne [V] |
| 0.5, 1.5 à 5 carats | carte | présentes | aucun | non cliquées [I] |
| 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet (étape 4) | carte | présentes ; **non cliquées** : le clic ouvre le designer 3D, qui appelle `jeweleros.com/api/`, interdit par le robots.txt de ce domaine | aucun | non testé (robots.txt) |
| Skip | bouton | présent à chaque étape ; mène au designer, même raison | aucun | non testé (robots.txt) |
| Back | bouton | présent dès l'étape 1 ; sans effet visible après « Start from scratch » (le texte de l'étape 2 reste affiché) | aucun | comportement douteux [V] |
| Recherche (loupe), Close | bouton | champ de recherche du thème Shopify | aucun | non testé (pas de saisie) |
| United States / USD $ | sélecteur | pays et devise Shopify | USD | non testé |
| Log in | lien | `customer_authentication/redirect` | aucun | non ouvert (compte) |
| Cart | lien | page `/cart` : « Your cart is empty », « Continue shopping », « Have an account? Log in » [V] https://ekjewelers.com/cart | aucun | fonctionne |
| 307-363-4010 | lien tel | appel téléphonique | aucun | non testé |
| 304 S Gillette Ave | lien | itinéraire Google Maps | aucun | non testé |
| Facebook, Instagram | lien | pages sociales | aucun | non testé |
| Fiche produit : Add to cart | bouton | appelle `/cart/add`, **interdit par robots.txt** (`Disallow: /cart/`) | 18 299 $ sur la fiche GIA | non testé (panier interdit par robots.txt) |
| Fiche produit : More payment options | bouton | ouvre le paiement accéléré | : | non cliqué (règle : jamais de bouton de paiement) |
| Fiche produit : quantité − / + | bouton | présents | : | non testés |
| Fiche produit : View store information | bouton | retrait en magasin « Pickup available at 304 South Gillette Avenue, usually ready in 24 hours » | : | présent [V] |
| Collection « Bridal » : filtres Availability et Price (min/max), tri | filtre | présents ; le tri passe par `?sort_by=`, **interdit** (`Disallow: /collections/*sort_by*`) | : | non testés |

Contrôles absents (vérifiés par la liste des éléments de la page) : pas de partage, d'enregistrement, de comparaison, de chat, de WhatsApp ni de prise de rendez-vous dans le questionnaire. Un bouton « Share » existe sur les fiches produit.

## Options disponibles

- **Métaux** : jaune, blanc, rose (pastilles). Pas de titre (10, 14, 18 k) ni de platine dans le questionnaire [V] ; les fiches mentionnent « 14K » [V].
- **Styles** : 8 plus « Start from scratch » (liste ci-dessus).
- **Origine** : Natural, Lab Grown.
- **Formes** : 9, dont la marquise.
- **Carats** : 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5.
- **Délai souhaité** : 1 à 4 semaines, 1 à 3 mois, 3 à 6 mois, indécis.
- **Taille de doigt, gravure, pavage, griffes** : non proposés avant le designer ; [S] éventuellement dans la 3D.
- **Vues** : un aperçu du designer « Visualize your creation in real time » est annoncé (page https://ekjewelers.com/pages/custom-engagement-rings) ; non vu.

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans le questionnaire [V]. Catalogue « Bridal » : 13 produits de 1 299 à 18 299 $ (« Regular price »), sans décomposition [V] https://ekjewelers.com/collections/bridal. Fiche de la bague avec rapport GIA : 18 299 $ ; description détaillée : diamant rond naturel 1,30 ct, H, SI1, 7,01 × 6,99 × 4,29 mm, taille Excellent, rapport GIA n° 5181938321, bague de 4,89 g [V] https://ekjewelers.com/products/14k-white-gold-and-diamond-engagement-ring-with-gia-report.
- **Délai** : « ready for you in just a couple of weeks » [V] https://ekjewelers.com/pages/custom-engagement-rings ; retrait en magasin « usually ready in 24 hours » pour le stock.
- **Retours** : page « Shipping & Returns policy to come » (aucune politique d'expédition ou de retour) [V]. Conditions générales : « special orders are not returnable, and that no refund or exchange can be made » ; acompte de 50 % non remboursable ; mise de côté (layaway) jusqu'à 90 jours avec 50 % d'acompte [V] https://ekjewelers.com/pages/general-terms-conditions.
- **Garanties** : réparations 3 mois, achat en magasin 6 mois (défauts de fabrication et de métal), nettoyage et contrôle gratuits à vie, soudure gratuite des ensembles, première mise à taille gratuite sous 6 mois ; plan de soins supplémentaire (rhodiage, griffes, mise à taille) ; plans Jewelers Mutual 3 ans ou à vie [V] même page.
- **Reprise de diamant** : échange au prix d'achat contre un diamant d'au moins 0,5 ct de clarté et couleur égales ou meilleures, ou de prix double [V].
- **Panier** : vide, non rempli (Add to cart interdit). Livraison, délai et moyens de paiement du panier : non relevés. Pied de page : American Express, Apple Pay, Bancontact, Diners Club, Discover, Google Pay, iDEAL, Mastercard, PayPal, Satispay, Shop Pay, Visa [V].
- **Rabais** : « military and first responder discount » (mention de pied de page) [V].

## Confiance et service

- Avis : deux avis Google cités (5 étoiles) sur la page du parcours sur mesure ; pas de note globale ni de nombre d'avis [V].
- Atelier : orfèvre sur place et gemmologue diplômé du GIA, ouverture en avril 2018 [V, d'après l'inventaire] ; page « Services » (blog).
- Parcours : conception en ligne, choix de la pierre en salle d'exposition, finalisation avec un spécialiste [V].
- Preuves de fabrication (photos, vidéos d'atelier, suivi de commande) : aucune relevée sur les pages lues [V pour l'absence sur ces pages].
- Langues : anglais seulement ; devise : USD ; pays : États-Unis (sélecteur Shopify) [V].
- Contact : téléphone, adresse, courriel dans l'en-tête ; pas de chat ni de WhatsApp [V].

## Points forts à retenir pour JR Diamond

1. **Questionnaire d'entrée en 4 étapes, sans compte ni prix**, qui prépare le designer : style, origine, forme, carat, échéance ; il qualifie le projet avant la boutique. Preuve : https://ekjewelers.com/pages/design-your-ring.
2. **Choix naturel ou synthétique avant la forme**, formulé « Natural / Lab Grown » [V]. JR Diamond fait de même ; le libellé français reste « synthétique » (décret 2002-65).
3. **Les vignettes changent de couleur de métal dès l'étape 1** (images `_white`, `_rose`). Preuve : requêtes et images relevées au clic.
4. **Texte d'étape qui rassure** : « Once you're in the ring designer you can easily set an exact carat weight » (l'étape 3 n'engage pas). Preuve : page de l'étape 3.
5. **Fiche d'un diamant très détaillée** (couleur, pureté, dimensions en mm, numéro de rapport GIA, poids de la bague) : modèle pour la transparence de JR Diamond. Preuve : fiche GIA à 18 299 $.
6. **Politique de garantie et de reprise publique** (reprise de diamant à prix d'achat sous conditions ; première mise à taille offerte sous 6 mois), proche des réponses de l'atelier JR. Preuve : conditions générales.
7. Affichage rapide : visuel de l'étape 1 en 1,0 à 1,2 s (voir mesures).

## Défauts observés

- Aucun prix, même indicatif, dans le questionnaire ; le prix n'apparaît ni en 3D (selon l'inventaire) ni avant la visite en boutique. [V pour le questionnaire]
- Pas de politique de retour ni de livraison (« policy to come »), alors que la vente en ligne existe ; les conditions disent que les commandes spéciales sont non remboursables. [V]
- Pas de titre d'or, pas de platine dans le questionnaire ; pas de choix de la monture avant le designer.
- Le bouton « Back » n'a pas fait revenir à l'étape 1 après « Start from scratch » ; clic de « Lab Grown » sans changement visible. [V]
- Pas de preuve de fabrication ni de vidéo. [V]
- La pierre centrale se choisit en boutique : le parcours en ligne ne mène pas à un achat de bout en bout. [V, texte de la page]
- Aperçu 3D générique d'un fournisseur ; aucun lien annoncé avec le fichier de fabrication [I].

## Limites de l'audit

- Le clic sur l'échéance (étape 4) ou sur « Skip » ouvre le designer 3D du fournisseur, dont les appels passent par `jeweleros.com/api/`, **interdit par le robots.txt** de ce domaine : je n'ai pas cliqué. Tout ce qui est dans le designer (vue 3D, rotation, zoom, prix, partage, enregistrement) est **non testé**. À l'ouverture de la page, le site appelle lui-même cette API (`/api/config/…`, `/api/widget/config/…`, `/api/log-error/`) : cela n'est pas un écart, mais mon script a **bloqué** ces appels côté navigateur pour éviter tout doute ; la page affichait quand même l'étape 1 (les tests de clic ont donc eu lieu avec une configuration partenaire possiblement non chargée : l'ordre des étapes est fiable, mais je ne peux pas exclure des options supplémentaires fournies par la configuration).
- Un premier relevé (`controls.cjs`), fait avant ce blocage, a laissé passer ces appels de chargement.
- Panier : `Add to cart` interdit (`/cart/add`) ; seule la page `/cart` (vide) a été lue. Pas de livraison, délai ni moyens de paiement de commande.
- Tri et filtres de la collection : tri interdit, filtres non actionnés.
- Pas de saisie de données, pas de compte, pas de chat.

## Mesures (Chromium sans écran, réseau de l'agent, une mesure par appareil)

| Appareil | Visuel principal (premier choix de l'étape 1 visible) |
|---|---|
| Ordinateur | environ 1,0 à 1,2 s après `domcontentloaded` (3 mesures : 1,22 / 1,15 / 1,00 s) |
| iPhone 13 | environ 1,2 s (une mesure) |

Passage d'une étape à l'autre : transitions sans attente visible (le script attendait 2,5 s après chaque clic) ; le temps réel n'est donc pas mesuré. [I]

## Sources

- https://ekjewelers.com/pages/design-your-ring (contrôles actionnés)
- https://ekjewelers.com/pages/custom-engagement-rings
- https://ekjewelers.com/pages/shipping-returns
- https://ekjewelers.com/pages/general-terms-conditions
- https://ekjewelers.com/collections/bridal
- https://ekjewelers.com/products/14k-white-gold-and-diamond-engagement-ring-with-gia-report
- https://ekjewelers.com/cart
- robots.txt de ekjewelers.com (`Disallow: /cart/`, `/collections/*sort_by*`) et de jeweleros.com (`Disallow: /api/`)
- Inventaire : `docs/concurrence/audit/us/wyoming/INVENTAIRE.md`
