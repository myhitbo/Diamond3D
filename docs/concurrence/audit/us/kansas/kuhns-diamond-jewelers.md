# Audit : Kuhn's Diamond Jewelers (Hays, Kansas)

- **Site** : https://kuhnsdiamondjewelers.com (WordPress, thème Avada, WooCommerce) ; page de départ : https://kuhnsdiamondjewelers.com/custom-design-center/
- **Date** : 15/11/2026 (contrôles refaits le 24/11/2026)
- **Appareils** : ordinateur (Chromium 1366×900) et affichage iPhone 13
- **Statut : partiel.** Il n'y a pas de configurateur sur le site : la page décrit un parcours (choisir un modèle de base, personnaliser, devis sous 24 h) dont les modèles de base sont hébergés sur `kuhnsjewelers.jewelershowcase.com` (Stuller, robots.txt `Disallow: /`) : non exploré. Seuls la page, son formulaire d'envoi (ouvert, non rempli), et deux pages du site ont été lus.
- Marquage : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Choose a design | « base design, over a million variations » ou téléverser son modèle | [V] page de départ |
| 2. Customize it | « metal colors, stone types, stone shapes, and much more » (non visible sur le site) | [V] texte ; [S] outil Stuller |
| 3. Get a quote | devis exact et rendus professionnels « within 24 hours » | [V] |
| 4. Approve design | livraison « within 2 weeks » (page) ; « 10 to 12 days after approval » (fenêtre contextuelle) | [V] |
| Formulaire « Upload your own design » | nom*, e-mail*, téléphone*, instructions, images, « Request quote » | [V] modale, non remplie |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau « Sell your valuables » + compte à rebours (8 au 10 décembre) | bandeau | achat d'or, argent, diamants ; « Learn more » → /services/buy-gold/ | – | affiché ; croix « Dismiss event banner » [V] |
| Cookies « OK » | bouton | ferme le bandeau | – | marche [V] |
| Menu : Home, Collections, Jewelry Showcase, Services, Engagement Rings, Custom Design, About | liens | pages WordPress ; Showcase = texte et liens de catégories ; Engagement Rings = texte d'aide, liste de 12 styles | aucun prix lu | marchent [V] |
| My Account / panier (icône) / recherche | liens | compte et panier WooCommerce ; non ouverts | – | non testé |
| UPLOAD YOUR OWN DESIGN! | bouton | ouvre une modale « Upload your own design » (Formcraft) : nom, e-mail, téléphone, instructions, « Upload Images », « Request quote » | devis | formulaire visible ; non rempli ni envoyé (règle) [V] |
| APPLY TODAY! | lien | vers /services/12-months-interest-free/ ; la page a répondu par une erreur de relais (405) à la lecture | – | non vérifié |
| Fenêtre « Engagement Ring Guide » (après ≈ 8 s) | modale | « Take the 2-Minute Ring Guide » (quatre questions, profil de bague, « No email needed to start »), « Book a Ring Consultation », appel téléphonique | – | affichée ; clic sans effet en 5 s, guide non vu [V] |
| Appel (785) 625-2121 / sales@… | liens tel: et mailto: | ouvrent l'application d'appel ou de messagerie | – | non actionnés |
| Facebook, YouTube, PayPal (icônes) | liens | PayPal → /services/make-a-payment/ (paiement d'un montant libre) | – | non ouverts |
| Newsletter « Subscribe now! » | lien | renvoie à mailmunch.co | – | non actionné (donnée personnelle) |
| Avis Google : « review us on », « Previous / Next » | boutons | carrousel d'avis (5,0, 25 avis) | – | visible [V] |
| Catégories de blog (12) | liens | /category/engagement/, gift-ideas, learn, … | – | non ouvertes |
| Sélecteur de modèles de base, métal, pierre, forme, carat, taille, gravure, vues 3D, AR, partage, comparaison, panier | – | absents de la page du site (probablement dans l'outil Stuller non exploré) | – | non testable |

## Options disponibles

- **Sur le site** : demande de devis sur mesure avec téléversement d'images ; guide de bague en 2 minutes (non vu) ; rendez-vous de consultation ; financement 12 mois sans intérêts ; achat d'or ; réparation, estimation, piercing (mentions) [V].
- **Page « Engagement Rings »** : 12 styles listés (Diamond, Floral, Tanzanite, Solitaire, Heart Shaped, Garnet, Cathedral, Nature, Alexandrite, Princess Cut, Vintage, Opal), « Salt and Pepper » ; bagues sans diamant proposées ; « can be bought online as well as in-store » [V]. Aucune option de configuration ni prix lue sur cette page.
- **Inventaire de diamants et modèles de base** : chez Stuller, non lu [V robots.txt du tiers dans l'inventaire du 15/11].

## Prix, délais, retours, garanties

- **Prix** : aucun prix lu sur les pages du site visitées ; devis « exact » sous 24 h [V]. Décomposition : aucune.
- **Délai** : « within 2 weeks » ou « less than 2 weeks » après approbation (page) ; « 10 to 12 days after approval » (fenêtre) [V] : les deux formulations coexistent.
- **Livraison, frais, retours, garantie, certificats, libellé du synthétique** : non trouvés sur les pages lues ; panier non ouvert [V].
- **Devise et langue** : dollar, anglais seul [I].
- **Financement** : « 12 months interest free », par une page de services non lue [V texte du bouton].

## Confiance et service

- Entreprise familiale à Hays depuis 1930, propriétaire nommé (Eric Wagner), « handcrafted right here in Hays » pour les créations sur mesure [V] (/showcase/).
- Avis Google : 5,0 sur 25 avis ; l'avis affiché date de « 5 years ago » et concerne un perçage d'oreilles [V].
- Téléphone et e-mail publiés dans l'en-tête ; pas de WhatsApp, pas de chat [V].
- Preuves de fabrication : rendus CAO sous 24 h promis, mais aucun exemple de rendu, photo ou vidéo d'atelier sur la page ; un lien YouTube existe (chaîne non ouverte) [V].
- Suivi de commande : « Your order status will be communicated clearly to you » (texte) [V].

## Points forts à retenir pour JR Diamond

1. **Quatre étapes lisibles en tête de page** (Choose, Customize, Quote, Approve) : promesse simple de bout en bout (capture 01).
2. **Rendus et devis sous 24 h, livraison annoncée en jours** : la promesse de délai la plus proche des 14 jours ouvrés de JR Diamond (texte de la page).
3. **Chemin « envoyez votre idée »** : formulaire avec instructions et images, utile à la transformation de bijoux de famille (modale vue).
4. **Argument de proximité** : famille depuis 1930, fabrication locale.
5. Fenêtre d'aide « Engagement Ring Guide » qui propose guide, rendez-vous ou appel : trois niveaux d'aide au même endroit.

## Défauts observés

- Aucun configurateur visible : la page promet « over a million variations » sans montrer un seul modèle, rendu ou prix [V].
- Délais contradictoires (2 semaines / 10 à 12 jours) [V].
- Page de départ datée : pied de page « Copyright 2015 », avis de 5 ans, liens http non sécurisés dans le pied de page [V].
- Fenêtre « Ring Guide » : bouton sans effet à la souris (5 s) en test automatisé [V].
- Aucune information de retour, garantie, certificat ni prix sur les pages vues [V].
- Temps d'affichage : titre de la page visible à 2,4 s (ordinateur) et 1,8 s (iPhone), chargement complet à 4,2 s et 3,8 s ; pas de défilement horizontal sur iPhone (390/390) [V].

## Limites de l'audit

- Inventaire et modèles de base de Stuller non explorés (robots.txt `Disallow: /`) : les contrôles de personnalisation (métal, pierre, forme, carat, vues) et les prix n'ont pas été vus.
- Formulaires non remplis ni envoyés ; guide de bague, page de financement, panier, compte, retours et garantie non lus (le panier existe : il n'a pas été ouvert faute d'article à y mettre).
- Mesures de temps prises une seule fois par appareil, sur le même poste.

## Sources

- https://kuhnsdiamondjewelers.com/custom-design-center/ (ordinateur et iPhone)
- https://kuhnsdiamondjewelers.com/engagement-rings/ , /showcase/ , /robots.txt
- Captures : scratchpad/audit/us/kuhns-diamond-jewelers/ (01, 03, 05)
