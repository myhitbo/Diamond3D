# Audit : Apex Jewelry Design

- **Site** : Apex Jewelry Design (Los Angeles, Jewelry District, 607 S Hill St, Suite 850)
- **Adresse** : https://apexjewelrydesign.com (départ : https://apexjewelrydesign.com/shop/engagement-rings)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366 x 900 ; affichage iPhone 13 (émulation Playwright)
- **Statut** : **partiel** (parcours boutique complet jusqu'au panier ; visionneuse 3D non affichée dans notre Chromium, aucune interaction avec WhatsApp, téléphone, rendez-vous)
- Marquage : V = vérifié (page lue ou contrôle actionné), I = inféré, S = supposé.
- robots.txt contrôlé avant chaque adresse (AUTORISÉ pour toutes les pages ouvertes). Le robots.txt Cloudflare interdit les robots d'entraînement ; nos lectures sont ponctuelles, sans entraînement.

## Parcours

Pas de configurateur libre : une boutique de modèles à options chiffrées (V). Le sur-mesure passe par un rendez-vous avec le joaillier.

| Étape | Options (fiche https://apexjewelrydesign.com/shop/engagement-rings/marquise-cathedral-solitaire) |
|---|---|
| Liste `/shop/engagement-rings` | 18 modèles en grille, chacun avec prix « As shown » et composition ; pas de filtre ni de tri (V) |
| Vue | 2 vues par bouton : « Three-quarter », « Gallery / underside » ; la fiche du saphir en propose 3 (trois-quarts, profil, profil opposé) (V) |
| 01 Metal | 14 k blanc, jaune, rose ; 18 k blanc, jaune, rose ; platine (V) |
| 02 Centre | Diamant synthétique ≈ 1,50 ct D VS1 ; moissanite ≈ 1,50 ct ; monture seule ; lien « diamant naturel : sourcing sur mesure avec Max » (V) |
| 03 Taille de doigt | 3 à 9 par quarts de taille (25 boutons) (V) |
| 04 Vitesse de production | Case « Priority production », +350 $ (V) |
| Récapitulatif | « Your selection » + « Order total » en direct (V) |
| Panier | `/shop/cart` : ligne, quantité 1 à 4, total, paiement Stripe (V) |

## Contrôles vérifiés

Fiche de la marquise, ordinateur et iPhone (contrôles listés par `controls.cjs` : 69 sur ordinateur, 62 sur iPhone).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Three-quarter / Gallery-underside | bouton (vue) | change la photo principale (fichiers `…-three-quarter.png`, `…-rear-gallery.png`) (V) | aucun | fonctionne |
| 14K White / Yellow / Rose Gold | bouton | l'image bascule sur la photo de la couleur (rose : fichiers `rose-gold`) ; ligne « Your selection » mise à jour (V) | 1 936 $ | fonctionne |
| 18K White / Yellow / Rose Gold | bouton | idem ; l'image de l'or blanc 18 k reprend la photo « white-gold » (V) | 2 436 $ | fonctionne |
| Platinum | bouton | la photo reste « white-gold » (pas de photo propre au platine) (V) | 2 586 $ | fonctionne ; pas d'image dédiée |
| Laboratory-grown diamond ≈ 1,50 ct D VS1 | bouton | ligne « Laboratory-grown diamond » (V) | +1 150 $ | fonctionne |
| Moissanite ≈ 1,50 ct | bouton | ligne « moissanite » (V) | +650 $ | fonctionne |
| Setting only | bouton | ligne « Not included » ; total = monture (V) | 0 | fonctionne |
| Natural diamond center, begin custom sourcing | lien | mène à `/start-a-project/` (non ouvert, formulaire) (V) | n/a | lien présent, non suivi |
| Finger size 3 à 9 (25 boutons) | bouton | ligne « Finger size » mise à jour (6,5 testé) (V) | 0 | fonctionne ; les autres tailles non cliquées une à une (I : même mécanisme) |
| Priority production | case | ajoute la ligne « Priority production » (V) | +350 $ | fonctionne |
| Add to cart | bouton | redirige vers `/shop/cart` avec la configuration (V) | total | fonctionne |
| Book a custom appointment | lien | `/start-a-project/` (non ouvert) | n/a | non testé : formulaire |
| Read FAQ & Apex Care | lien | `/shop/faq` (lu) (V) | n/a | fonctionne |
| Cart (en-tête) | lien | `/shop/cart` (V) | n/a | fonctionne |
| 818-464-6077 | lien tel | `tel:+18184646077` (V) | n/a | non appelé |
| WhatsApp Max | lien | `https://wa.me/18184646077` (V) | n/a | non ouvert (règle : pas de conversation) |
| Find your style, Lab-grown diamonds, Contact, Private consultation | liens | pages `/styles/`, `/lab-grown-diamonds/` (lue), `/contact/`, `/start-a-project/` | n/a | seule `/lab-grown-diamonds/` lue |
| Réseaux (Facebook, Instagram, YouTube, Pinterest) | liens | adresses externes (V) | n/a | non ouverts |
| Panier : quantité 1 / 2 / 3 / 4 | boutons | présents ; non actionnés (V : lus dans le panier) | n/a | non testé : évite de modifier le panier |
| Panier : Edit product, Remove | liens/boutons | présents (V) | n/a | non testés |
| Panier : Continue to checkout | bouton | présent, « Secure Stripe checkout » (V) | n/a | non actionné : le paiement est hors périmètre |
| Open interactive 3D view | bouton | page `/interactive-3d/` : visionneuse iJewel3D (hébergée sur `jewelry3dview.online`), canevas non affiché chez nous (I d'après l'inventaire) | n/a | non testé : adresse tierce, pas de rendu 3D dans notre Chromium |
| Partager, enregistrer, comparer, zoom, 360°, sur la main, AR, essayage, chat | n/a | absents de la fiche (V : absents de la liste des contrôles) | n/a | absent |

## Options disponibles

- **Métaux** : 14 k blanc, jaune, rose ; 18 k blanc, jaune, rose ; platine (V). Pas de choix de rhodiage ni de titre à part (le titre est lié à la couleur).
- **Centres** : synthétique ≈ 1,50 ct D VS1 « proportions matched to this setting » ; moissanite ≈ 1,50 ct ; monture seule ; naturel : sur mesure uniquement (V). Pas de choix de carat, de couleur ni de pureté sur la fiche (V).
- **Tailles** : 3 à 9 par quarts (V).
- **Production** : standard, ou « Priority » +350 $ (V).
- **Pas d'option** : gravure, monture, griffes, pavage, forme de pierre (la forme est celle du modèle) (V : absents de la fiche).
- **Catalogue** : 4 rayons (Engagement, Vintage, Bands, Fine jewelry) ; 18 bagues de fiançailles de 3 020 $ à 4 670 $ « as shown » en synthétique, plus un saphir bleu naturel 3 740 $ (V).

## Prix, délais, retours, garanties

- **Prix** (V, fiche marquise) : monture par métal + centre + options, total en direct. Exemples : 14 k jaune + synthétique = 3 086 $ ; platine + synthétique = 3 736 $ ; platine + moissanite = 3 236 $ ; platine monture seule = 2 586 $ ; 18 k jaune + synthétique, taille 6,5 = 3 586 $ ; platine + synthétique + priorité = 4 086 $. Le prix « As shown » du haut (3 086 $) ne bouge pas : seul « Order total » en bas suit les choix (V).
- **Décomposition** : chaque ligne (monture, centre, priorité) est visible avec son montant (V). Pas d'explication de marge, mais une page « coût d'une bague sur mesure » (lue par l'inventaire).
- **Délai** (V) : production standard 2 à 4 semaines après confirmation ; « priority » environ 10 jours ouvrés pour +350 $. Contradiction avec l'inventaire (sur mesure 7 à 10 jours ouvrés après approbation) : les deux chiffres sont affichés, pour deux voies (boutique et sur mesure) (V : FAQ).
- **Livraison** (V) : assurée, signature, « next-day » après fabrication, offerte ; panier : « Calculated at checkout ». Retrait possible à l'atelier.
- **Taxe** : calculée au paiement d'après l'adresse (V).
- **Retours** : aucune politique de retour ni d'exception du sur mesure trouvée sur la fiche, le panier ni la FAQ (V : absence dans les pages lues). Une politique pourrait figurer ailleurs (conditions de vente, non lues).
- **Garanties** (V) : mise à taille offerte une fois sous 60 jours (sous réserve de la construction) ; nettoyage et contrôle des pierres annuels offerts (dépôt, 2 à 3 jours) ; le reste est évalué à part.
- **Paiement** (V) : boutique, « Paid in full at checkout » ; sur mesure, 50 % au début et 50 % avant retrait ou expédition ; centre naturel payé en totalité d'avance (FAQ).
- **Certificats** : non mentionnés sur la fiche (V) ; la FAQ parle de « documentation » sans nommer GIA ni IGI.
- **Libellé du synthétique** : « Laboratory-grown diamond » dans les options, « lab-grown » dans la composition ; FAQ : « Are lab-grown diamonds real diamonds? Yes » (V).

## Confiance et service

- **Langues, devises** : anglais, dollar américain (V).
- **Contact** (V) : téléphone, WhatsApp, rendez-vous « Book a custom appointment », parking validé (3 $ pour 90 min, FAQ). Le joaillier unique, Max, annonce « No handoffs » (V).
- **Avis clients** : aucun avis ni note visible sur les pages lues (V : absence).
- **Preuves de fabrication** : galerie « Exact-item gallery · APX-ENG-SOL-002 : chaque image appartient à ce modèle » (V) ; approbation 3D interactive du modèle CAO avant fabrication pour le sur mesure (V : page `/interactive-3d/`) ; pas de photos ni vidéos de fabrication de la commande ni de suivi de commande observés (V : absence).
- **Aide au choix** : page « FAQ & Apex Care » avec 7 thèmes et 24 questions (V) ; page sur les diamants de synthèse (V).

## Points forts à retenir pour JR Diamond

1. **Total en direct, ligne par ligne.** Le bloc « Your selection » affiche monture, centre, taille, priorité, puis « Order total », et change à chaque clic (V : 3 086 → 3 736 $ en passant au platine). Preuve : https://apexjewelrydesign.com/shop/engagement-rings/marquise-cathedral-solitaire.
2. **Photo propre à chaque couleur d'or** : le changement de métal remplace l'image (fichiers `rose-gold`, `white-gold`, `yellow-gold`) (V).
3. **Galerie « exact item »** : chaque image appartient au modèle (V). Écho direct à « ce que vous voyez existe ».
4. **Promesse 3D avant fabrication** : approbation en 3D interactive du modèle CAO, déclarée sur `/interactive-3d/` (V pour la promesse ; I pour le rendu, non vu).
5. **Option de rapidité payante, +350 $** pour 10 jours au lieu de 2 à 4 semaines (V). JR Diamond annonce 14 jours ouvrés sans option express.
6. **Garanties lisibles dans le panier** : le panier répète « Apex Care » (mise à taille, nettoyage annuel, livraison assurée) (V).
7. **Voie claire pour le naturel** : « sourcing sur mesure, paiement intégral avant fabrication » (V).
8. **Un seul interlocuteur** : WhatsApp et téléphone en pied de page (V).

## Défauts observés

- Prix « As shown » du haut non mis à jour quand on change de métal ou de centre : il reste à 3 086 $ alors que le total bas change (V).
- Platine : la photo reste celle de l'or blanc (V).
- Un seul carat par modèle (≈ 1,50 ct), pas de choix de couleur ni de pureté sur la fiche (V).
- Pas de politique de retour trouvée (V : absence), pas de mention de certificat GIA ou IGI (V : absence).
- Le délai standard (2 à 4 semaines) est plus long que celui du sur mesure (7 à 10 jours ouvrés) : message à double lecture (V).
- Pas de filtre ni de tri sur la liste des 18 modèles (V).
- Bouton « 9 » non distinct dans notre script : l'essai a cliqué un autre bouton ; sans conséquence pour le constat (V : taille 6,5 testée).
- Ni partage ni enregistrement de la configuration (V : absents).

## Limites de l'audit

- Visionneuse 3D iJewel3D non affichée dans notre Chromium (pas de carte graphique) : rendu, interactions et vitesse non évalués (V pour l'absence de canevas, d'après l'inventaire).
- Une seule fiche testée en détail (marquise) ; la fiche du saphir bleu naturel (même structure) lue, seuls les prix de la fiche relevés.
- Mesure du visuel principal (image > 200 px chargée, `performance.now`) : ordinateur 709 ms et 1 183 ms (deux essais), iPhone 619 ms ; cache froid, réseau du poste d'audit (V). Un seul passage par appareil, indicatif.
- Panier atteint, vidé à la fermeture du navigateur ; aucun paiement, aucune saisie de donnée.
- Pas de WhatsApp, téléphone, rendez-vous, réseaux sociaux ouverts. Conditions de vente et politique de retour éventuelles non cherchées en dehors de la FAQ.
- Pas de test de navigateur autre que Chromium.
- Les adresses `/shop/cart` et la fiche ont été vérifiées avec robots.cjs (AUTORISÉ).

## Sources

- https://apexjewelrydesign.com/shop/engagement-rings (liste, contrôles)
- https://apexjewelrydesign.com/shop/engagement-rings/marquise-cathedral-solitaire (fiche, options, prix)
- https://apexjewelrydesign.com/shop/engagement-rings/blue-sapphire-vine-ring (fiche naturelle)
- https://apexjewelrydesign.com/shop/cart (panier)
- https://apexjewelrydesign.com/shop/faq (FAQ, 24 questions)
- https://apexjewelrydesign.com/how-it-works/, https://apexjewelrydesign.com/lab-grown-diamonds/, https://apexjewelrydesign.com/interactive-3d/
- Inventaire : `docs/concurrence/audit/us/california/INVENTAIRE.md`
