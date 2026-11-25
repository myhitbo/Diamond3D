# Audit : Paul's Jewelers (West Allis / Milwaukee, Wisconsin)

- **Site** : Paul's Jewelers, https://www.paulsjewelers.com/ (Shopify)
- **Page de départ** : https://www.paulsjewelers.com/pages/custom-engagement-rings
- **Date** : 15/11/2026 (lecture réelle faite en session le 25/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13
- **Statut** : **partiel** : le constructeur est un widget tiers (ShowroomPro / ringbuilder.ai) dont j'ai vu l'écran d'accueil, mais pas les étapes (voir limites) ; panier non atteint (`/cart/add` INTERDIT)
- Repères : **[V]** vérifié, **[I]** inféré, **[S]** supposé.

## Parcours

| Étape | Contenu |
|---|---|
| Page de départ | Argumentaire, 5 boutons « Design Your Ring / Start Designing / AI Ring Builder / Build Your Custom Ring / Design Your Ring Now », tous vers `/#ringbuilder-quiz` (accueil) [V] |
| Accueil avec `#ringbuilder-quiz` | Ouvre une fenêtre (popup) contenant l'iframe `showroompro.ai/embed/quiz` : « Design your dream ring », « 2-min quiz · AI-powered · 10,000+ designs » [V] |
| Écran d'accueil du widget | Langue EN/ES/FR, « Begin Your Design », « Already started a design? View My Designs », « Book a Consultation » (ordinateur) [V] |
| Étapes du quiz | **non vues** : « Begin Your Design » appelle très probablement `showroompro.ai/api/…`, INTERDIT par le robots.txt de ce domaine [I] |
| Processus annoncé | (1) dessiner en 3D en ligne, (2) choisir la pierre au showroom de West Allis, (3) finaliser et commander avec l'équipe [V] |
| Catalogue | /collections/engagement-rings : 39 produits (24 en stock, 15 épuisés), pièces uniques ou en stock [V] |

## Contrôles vérifiés

Page de départ : 64 contrôles (ordinateur), 42 (iPhone), relevés par `controls.cjs`.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Design Your Ring / Start Designing / AI Ring Builder / Build Your Custom Ring / Design Your Ring Now | liens (5) | Vont à `/#ringbuilder-quiz` ; **sur la page de départ rien ne s'ouvre** (le widget ne se déclenche pas) ; **sur l'accueil**, l'adresse avec `#ringbuilder-quiz` ouvre la fenêtre du quiz | n/a | partiel [V] |
| Fenêtre du quiz : EN / ES / FR | liste | Langue du widget | n/a | présente [V], non changée |
| Begin Your Design → | bouton | Démarre le quiz IA | n/a | **non cliqué** : appel probable à une API INTERDITE [I] |
| View My Designs | lien | Retrouve des conceptions enregistrées (compte) | n/a | non ouvert |
| Book a Consultation | bouton (ordinateur seulement) | Prise de rendez-vous | n/a | non cliqué (formulaire) |
| × (fermer) | bouton | Ferme la fenêtre | n/a | présent [V] |
| Bulle de chat « how can I help you today? » | widget | Conversation | n/a | non ouverte (règle) |
| Menu SHOP / CREATE YOUR MASTERPIECE / CUSTOM JEWELRY / JEWELRY REPAIRS / EVENTS / ABOUT / CONTACT | liens | Navigation | n/a | liens relevés [V], non tous suivis |
| Search, Log in, Cart | boutons / liens | Recherche, compte, `/cart` | n/a | non utilisés |
| Collection : Sort by (8 tris : Featured, Best selling, A-Z, Z-A, prix croissant/décroissant, date) | liste | Tri | n/a | options lues [V], non actionnées |
| Collection : filtres Availability (En stock 24 / Épuisé 15), Price (de/à), Shape | filtres | Filtrage ; adresses de filtre non ouvertes (règle prudente) | n/a | lus [V] |
| Fiche : Open media 1 in modal | bouton | Ouvre la photo en grand | n/a | présent [V] (une seule photo) |
| Fiche : Quantité − / + | boutons | Quantité | n/a | présents [V] |
| Fiche : Add to cart | bouton | `/cart/add` | n/a | **non cliqué : panier interdit par robots.txt** |
| Fiche : More payment options / checkout | boutons | Paiement accéléré | n/a | **non cliqués** (règle : jamais de paiement) |
| Lab Grown Diamonds, Jewelry Appraisals, JM Care Plan, Diamond Education, Returns & Refunds | liens | Pages d'information | n/a | pages lues sauf Appraisals et Education [V] |
| Appel (414) 321-5764 / MESSAGE US | lien tel: / bouton | Téléphone / message | n/a | présents [V] |

## Options disponibles

- **Catalogue** (pièces en stock, pas de configuration en ligne) : filtres Disponibilité, Prix, Forme ; tris cités plus haut [V].
- **Fiche d'exemple** (bague lab 14 k or blanc 0,25 ct) : aucune option de métal, de taille ni de pierre ; seulement la quantité [V] https://www.paulsjewelers.com/products/lab-diamond-curved-band-14ktwg-25ctw-gh-si1-si2
- **Constructeur 3D (widget)** : options non vues ; le texte annonce un constructeur 3D piloté par l'IA, « 10,000+ designs » [V, texte] ; contenu réel [S].
- Services : réparations sur place, estimations, plan d'entretien JM Care, transformation d'un bijou de famille (témoignage et page personnalisée) [V].

## Prix, délais, retours, garanties

- **Prix** : affichés en dollars sur les fiches, sans décomposition (ex. 1 250,00 USD la bague lab 0,25 ct ; 2 000 USD pour 1,46 ct lab ; 2 450 USD pour 1,45 ct lab ovale ; 6 550 USD pour une bague 18 k 1,70 ct naturelle) [V]. Aucun prix du constructeur vu.
- **Délai** : constructeur « prête en quelques semaines » (texte de la page de départ) ; un témoignage cite « 6 semaines promis, 3 reçues » [V]. Pas de nombre de jours.
- **Retours** : 30 jours, article non porté, avec reçu ; non remboursable : articles soldés et cartes cadeaux ; remboursement sous 10 jours ouvrés ; exception du sur mesure non écrite explicitement [V] https://www.paulsjewelers.com/pages/refund-policy
- **Garantie** : « JM Care Plan » (Jewelers Mutual) : incluse sans frais sur toutes les pièces sur mesure, optionnelle ailleurs ; couvre griffes, mise à taille, rhodiage, anneaux, fermoirs, certaines pierres [V] /pages/jm-care-plan-milwaukee
- **Certificats** : « GIA graduate gemologists » mentionnés ; certificat GIA/IGI non affiché sur les fiches lues ; une fiche cite « Certified Lab Grown » [V].
- **Libellé du synthétique** : « lab-grown diamonds », « lab diamond » ; « Lab-grown diamonds are diamonds. 100% real » [V].
- **Livraison, panier** : non vus.

## Confiance et service

- Entreprise familiale à Milwaukee depuis « plus de 50/57/59 ans » (trois chiffres différents sur le site) ; atelier sur place (joailliers, CAD, gemmologues) ; 10822 W National Ave, West Allis ; lun-jeu 11-18 h, ven-sam 11-16 h, dim fermé [V].
- Showroom obligatoire pour choisir la pierre et finaliser [V].
- Avis : citations de « Google Review » sur la page ; l'une est signée « Jane Doe » (apparence de texte d'exemple) [V].
- Portfolio de pièces sur mesure (/pages/custom-jewelry-portfolio, non ouvert) [V lien].
- Chat flottant, bouton « Book a Consultation », téléphone ; pas de WhatsApp [V].
- Langues : anglais ; le widget propose EN/ES/FR [V]. Devise : USD.

## Points forts à retenir pour JR Diamond

1. **Un « quiz IA de 2 minutes » comme porte d'entrée**, annoncé « gratuit, sans engagement » : réduit la peur du premier pas (écran vu).
2. **Parcours en trois temps explicite (en ligne, pierre en boutique, finalisation)** : le client sait quoi attendre.
3. **Plan d'entretien gratuit sur toute pièce sur mesure** (JM Care Plan) : garantie visible, argument de confiance.
4. **Retour de 30 jours écrit en cinq phrases** et page dédiée au synthétique qui assume « 100 % réel » sans dénigrer le naturel.
5. **Transformation du bijou de famille mise en avant** (premier témoignage de la page sur ce thème) : même offre que JR Diamond.

## Défauts observés

- Sur la page de départ, **les cinq boutons ne déclenchent pas le constructeur** : ils renvoient à l'accueil avec une ancre ; la fenêtre n'apparaît qu'une fois sur l'accueil [V].
- Constructeur tiers : l'écran d'accueil ne donne ni prix, ni matériaux, ni formes [V].
- Fiches de stock : une seule photo, aucune option, pas de taille de doigt avant « Add to cart » [V].
- 15 produits sur 39 « épuisés » sur la page des bagues de fiançailles [V].
- Annonce périmée en novembre : « Spring Cleaning Event, April 13th, 14th & 15th » sur l'accueil [V].
- Ancienneté incohérente (« 50 », « 57 », « 59 » ans) ; avis « Jane Doe » ressemblant à un texte d'exemple [V].
- Délai « quelques semaines » sans engagement chiffré [V].

## Mesures

| Mesure | Ordinateur | iPhone 13 |
|---|---|---|
| Page de départ : première image ≥ 200 px | 520 ms | 479 ms |
| Page de départ : événement load | ≈ 2,0 s | ≈ 2,2 s |
| Fiche produit : première image visible | 591 ms | 503 ms |
| Collection : load | ≈ 5,0 s | non mesuré |
| Fenêtre du quiz (accueil + ancre) | visible après ≈ 6 s d'attente | idem |
| Défilement horizontal parasite (page de départ) | non | non |

## Limites de l'audit

- **Statut partiel** : étapes du constructeur 3D non vues. « Begin Your Design » n'a pas été cliqué, car le robots.txt de showroompro.ai interdit `/api/` et le quiz s'en sert très probablement [I]. L'écran d'accueil du widget (adresse `/embed/quiz`, AUTORISÉE) a été lu seulement. Le blocage signalé « widget non chargé » est nuancé : il ne s'ouvre pas sur `/pages/custom-engagement-rings` mais s'ouvre avec `/#ringbuilder-quiz` sur l'accueil.
- Pas d'ajout au panier (`/cart/add` INTERDIT) : ni panier, ni livraison, ni moyens de paiement (icônes « Payment methods » du pied de page non lues).
- Une seule fiche produit et la collection lues ; filtres et tris non actionnés ; pages Appraisals, Education, Portfolio, Repairs non lues.
- À l'ouverture, la page émet d'elle-même des requêtes vers ringbuilder.ai (script) et showroompro.ai (`/api/embed/analytics`, `/api/embed/ping`) : comportement du site, pas un clic.

## Sources

- https://www.paulsjewelers.com/pages/custom-engagement-rings [V]
- https://www.paulsjewelers.com/ (avec `#ringbuilder-quiz`) [V]
- https://www.showroompro.ai/embed/quiz (iframe) [V]
- https://www.paulsjewelers.com/collections/engagement-rings [V]
- https://www.paulsjewelers.com/products/lab-diamond-curved-band-14ktwg-25ctw-gh-si1-si2 [V]
- https://www.paulsjewelers.com/pages/refund-policy, /pages/milwaukee-lab-grown-diamonds, /pages/jm-care-plan-milwaukee, /pages/custom-jewelry [V]
- robots.txt de paulsjewelers.com, ringbuilder.ai (redirige vers showroompro.ai), showroompro.ai [V]
