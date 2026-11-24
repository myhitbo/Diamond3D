# Audit : Amaré Fine Jewelry Atelier (Lisbonne)

- **Site** : https://amarejewelry.co/ (version portugaise `/pt/`, anglaise `/`). Shopify.
- **Date** : 15/11/2026 (contrôles exécutés le 24/11/2026). **Appareils** : Chromium ordinateur 1366×900 ; iPhone 13 émulé.
- **Statut** : **partiel**. Ce n'est pas un configurateur : les 9 produits sont des pièces « faites sur commande » et un parcours de rendez-vous. Pas de panier utilisable (voir « Limites »).
- Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé.
- Blocage : aucun en Chromium. `curl` a reçu une fois un défi Cloudflare (« Verifying your connection ») sur robots.txt et un 429 sur `/pt`, puis des 200 : protection sporadique, non contournée [V]. robots.txt (version lue le même jour) autorise tout sauf `/collections/*sort_by*` : le tri de la collection n'a pas été actionné [V].

## Parcours

| Étape | Options |
|---|---|
| 1. Accueil / « Processus de création » | Page https://amarejewelry.co/pt/pages/engagement-rings-lisbon : 6 étapes (réunion en ligne ou en atelier, choix des pierres, esquisses et rendu 3D, révision finale, fabrication, livraison) [V] |
| 2. Galerie « Bespoke Gallery » | 5 pièces d'inspiration, filtres Disponibilité, Prix, Matière [V : /collections/engagement-ring-gallery] |
| 3. Fiche d'une pièce | Texte, prix « à partir de », bouton **Customise This Design** → conversation WhatsApp, formulaire de contact [V] |
| 4. Prise de contact | WhatsApp +351 928 382 996 (lien wa.me, non ouvert) ; page contact ; formulaire à pièces jointes (JPG, PNG, GIF, SVG) [V] |
| 5. Création | Rendu 3D et, si demandé, impression 3D en résine, envoyée au client à distance [V : FAQ] |
| 6. Livraison | Envoi mondial sécurisé [V : FAQ] |

Il n'y a ni choix de métal, de pierre, de taille, ni prix recalculé en ligne : tout se décide par conversation.

## Contrôles vérifiés

Fiche https://amarejewelry.co/pt/products/the-lumina-solitaire-lab-grown-natural-diamond-bespoke-ring (37 contrôles visibles sur ordinateur, 27 sur iPhone).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Skip to content / Skip to product information | lien d'accès | Saute au contenu | — | Fonctionne [V] |
| Bandeau « Bespoke Orders are Now Open for October. Contact Us Today! » | lien | Page contact | — | Fonctionne (affiché en novembre : texte périmé) [V] |
| Logo | lien | Accueil | — | Fonctionne [V] |
| Engagement Rings | lien | Page du processus de création | — | Fonctionne [V] |
| Bespoke Gallery | lien | Galerie de 5 pièces | — | Fonctionne [V] |
| Workshops (3 sous-liens : Couples, Group, All) | menu | Ateliers de bijouterie pour couples ou groupes | de 350 € | Fonctionnent [V] |
| About Us (Our Story, Our Philosophy) | menu | Pages de présentation | — | Fonctionnent [V] |
| Gift Certificate | lien | Carte cadeau | — | Lien présent, page non ouverte |
| Contact | lien | Page contact | — | Fonctionne [V] |
| Langue (English / Português) | bouton | Bascule de langue | — | Fonctionne [V] |
| Search (champ, bouton, Close) | recherche | Recherche de produits | — | Non testé : `/search` est dans la liste des chemins à ne pas automatiser par prudence |
| Log in | lien | Page de connexion client Shopify | — | Non ouvert (compte) |
| Cart | lien | `/cart` | — | Panier vide, aucun produit ajoutable sur les 4 pièces et ateliers lus [V] |
| **Customise This Design** | lien | Ouvre une conversation WhatsApp (http://wa.me/351928382996), non ouverte | — | Lien conforme [V] |
| See How it Works | lien | Page du processus | — | Fonctionne [V] |
| Formulaire : Name, Email, Phone, Comment | 4 champs | Formulaire de contact en pied de page | — | Non rempli (règle de lecture seule) |
| Send | bouton | Envoi du formulaire | — | Non testé (règle) |
| Returns, Exchanges & Cancellations | lien pied de page | Ouvre une page « Discover Our Jewelry Experiences » : **aucune politique de retour** | — | **Défaut** : le lien mène à la page d'accueil des expériences [V : /pages/refunds-returns] |
| Packaging | lien pied de page | `/pages/copy-of-refunds-returns` : **erreur 404** | — | **Lien mort** [V] |
| Track Your Order | lien | `/pages/check-your-order-status` (suivi de commande) | — | Lien présent, page non testée (pas de commande) |
| Powered by Shopify / Privacy policy | liens | Boutique et politique de confidentialité | — | Présents |

Pages produit lues : Lumina (2 000 €), Custom Made Engagement Ring (1 200 €, bouton **Book a Consultation** → page contact), Make Your Gold Wedding Bands (600 €, **Book Workshop** → contact ou WhatsApp, formulaire avec pièces jointes), Eternal Oval Eternity Band (2 000 €, **Customise This Design**) [V]. Aucune fiche lue n'a de bouton d'ajout au panier ni de sélecteur de variante. Les 5 autres produits (Atlantic Sapphire, Amore, Lagos, Proposal Workshop, Ultimate Romantic Date) n'ont pas été ouverts un par un [S pour leur absence de panier].

Contrôles de la collection `/collections/all` (9 produits) : Disponibilité (2 cases), Prix (min et max), Matière (3 cases), Type de produit, Tri (9 critères). Présents ; non actionnés car l'URL de tri est interdite par robots.txt et les filtres changent l'adresse [V pour la liste].

Modes de vue : photo seulement (3 images sur la fiche). Pas de vidéo, 360°, 3D, essayage ou zoom détecté (`video`, `canvas`, `model-viewer` : 0) [V].

## Options disponibles

- **Métaux** : or 14, 18 et 19,2 k, argent ; or recyclé du client accepté (réduction du coût des matières) [V : fiche et FAQ].
- **Pierres** : diamants naturels « d'origine éthique », diamants de laboratoire, pierres de couleur (saphir), pierres du client avec évaluation préalable [V : FAQ].
- **Formes** : exemples ovale (Lumina, Eternal Oval) ; pas de choix de forme en ligne.
- **Gravure, taille** : « touches personnelles : gravures, ajustement » à l'étape de révision finale [V]. Pas de guide des tailles en ligne.
- **Services** : consultation (« Discovery Call » gratuite), atelier « The Proposal Workshop » (finir soi-même la bague dans l'atelier, dès 1 000 €), ateliers d'alliances à fabriquer soi-même (dès 600 € hors or), « Ultimate Romantic Date » (dès 350 €), carte cadeau [V].

## Prix, délais, retours, garanties

- **Prix** : « à partir de » TTC, 1 200 € (sur mesure, argent et peu de pierres), 1 500 € (Atlantic, Amore, Lagos), 2 000 € (Lumina, Eternal) ; devis clair après l'appel initial [V]. Le prix de 1 200 € ne vaut que pour l'argent avec peu de pierres [V : fiche Custom Made]. Aucune décomposition en ligne.
- **Délai** : 4 à 8 semaines après approbation du dessin ; service express de 2 à 4 semaines selon disponibilité (la page du processus dit 3 à 4 semaines) ; début conseillé 2 mois avant [V]. Incohérence entre les deux pages [V].
- **Retours** : non trouvés. Le lien « Returns, Exchanges & Cancellations » ne mène à aucune politique [V]. Rien sur l'exception du sur mesure.
- **Garanties, certificats** : non trouvés dans les pages lues [V pour l'absence].
- **Livraison** : mondiale, sécurisée ; frais non indiqués [V : FAQ].

## Confiance et service

- Fondatrice nommée (Márcia Lages) et joaillier (Rodrigo), atelier familial à Lisbonne, adresse Av. do Colégio Militar [V : accueil, pages processus].
- Preuves de fabrication : rendus 3D photoréalistes, vidéos du modèle, modèle imprimé en 3D sur demande ; vidéo du processus via Instagram ; pas de suivi de commande illustré [V : fiche Custom Made, lien Instagram].
- Avis clients : aucun avis affiché sur les pages lues [V].
- Chat : WhatsApp seulement (non ouvert). Téléphone non repéré hors WhatsApp.
- Langues : portugais (Portugal), anglais. Devise : euro, TVA incluse.

## Points forts à retenir pour JR Diamond

1. **Le 3D est montré comme preuve avant fabrication, avec un modèle imprimé** : « photorealistic images and videos », modèle en résine envoyé au client à distance [V : fiche Custom Made, FAQ]. À rapprocher de notre « ce que vous voyez existe ».
2. **Naturel et synthétique côte à côte**, décrits dans la même phrase (« lab-grown center diamond, accented by 10 natural diamonds ») [V : fiche Lumina]. Notre choix naturel ou synthétique est du même ordre.
3. **Or du client recyclé comme réduction de budget**, argument de la transformation de bijoux de famille [V : FAQ].
4. **Prix « à partir de » et condition de ce prix annoncés sur la fiche** (« Les prix valent pour l'argent… ») [V]. Montre que même un atelier sur mesure affiche un prix plancher.
5. **Chargement rapide** : visuel principal en 0,93 s sur ordinateur et 0,70 s sur iPhone (LCP, 15/11, réseau de l'agent) [V].
6. **Atelier ouvert au couple** (fabriquer ses alliances, finir la bague) : une forme de preuve de fabrication vécue [V].

## Défauts observés

- Aucun configurateur ni prix recalculé : tout passe par WhatsApp ou un rendez-vous [V].
- Pas de politique de retour accessible ; lien « Packaging » en 404 ; lien « Returns… » vers la mauvaise page [V].
- Bandeau « Bespoke Orders are Now Open for October » encore affiché en novembre [V].
- Délai contradictoire (2 à 4 semaines contre 3 à 4) [V].
- Page portugaise mêlée d'anglais (« Customise This Design », « Join the Creation Journey ») [V].
- FAQ : « 9k/4k/18k » (faute de frappe) [V].
- Pas de certificat, de garantie ni d'avis affichés [V].

## Limites de l'audit

- Pas d'option à actionner sur les fiches : le tableau des contrôles est complet pour la fiche Lumina, partiel pour les autres produits.
- Pas de panier rempli : aucune fiche lue n'a de bouton d'ajout. Le robots.txt du site invite les agents à passer par ses interfaces d'achat (`agents.md`) : aucun achat automatisé n'a été tenté.
- Tri et recherche non actionnés (chemins interdits ou sensibles).
- Mesure de chargement à partir de l'environnement de l'agent, sans cache.
- Formulaire, WhatsApp, compte et suivi de commande non utilisés (règle de lecture seule).

## Sources

- https://amarejewelry.co/pt/products/the-lumina-solitaire-lab-grown-natural-diamond-bespoke-ring
- https://amarejewelry.co/pt/pages/engagement-rings-lisbon (processus, FAQ)
- https://amarejewelry.co/products/custom-made-engagement-ring · /products/make-your-own-wedding-bands · /products/the-eternal-oval-diamond-eternity-band
- https://amarejewelry.co/collections/all · /collections/engagement-ring-gallery
- https://amarejewelry.co/pages/refunds-returns · /pages/copy-of-refunds-returns (404) · https://amarejewelry.co/robots.txt
