# Audit : Berman Designers (Moshav HaYogev), bijoux d'atelier en 18 k

| | |
|---|---|
| Site | Berman Designers Ltd (ברמן מעצבים בע״מ, n° 512339235), studio au moshav HaYogev, vallée de Jezreel ; 04-959-0377 ; 054-632-3315 (V : pied de page et conditions) |
| Page de départ | https://berman-j.co.il/collections/טבעות-אירוסין, puis la fiche https://berman-j.co.il/products/טבעת-יהלום-אמרלד-קאט (« bague diamant, taille émeraude ») |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. Catalogue (flux `products.json`), fiche, FAQ et conditions lus ; options actionnées. **Ajout au panier non réalisé** : `/cart/add` est interdit par le robots.txt et la requête a été bloquée par la règle de l'audit |
| robots.txt | Shopify standard : `Allow: /` ; interdits `/cart/`, `/cart.js`, `/checkout`, `/checkouts/`, `/account`, `/orders`, `/recommendations/products`, `/collections/*sort_by*`, `/collections/*+*`, `/collections/*filter*&*filter*`, `/cdn/wpm/*.js`, `/.well-known/shopify/monorail`. Aucun `Crawl-delay`. Le fichier contient en commentaire un renvoi vers `/agents.md` et un point d'accès « UCP/MCP » : non ouverts (V) |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Collection « טבעות אירוסין » | 29 bagues, de 3 038 à 32 384 ₪ (V : flux `products.json`) | prix fixe par bague | — |
| 2. Fiche | taille US de 4 à 9 par quarts (22 valeurs) ; **finition** : or jaune 18 k mat ou brillant (liste) ; prix dans le libellé de chaque option (V) | **aucun** : 11 127 ₪ pour les deux finitions | non déterminé (V) |
| 3. Ajout au panier | « הוספה לעגלה » (V) | — | — |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| מידת טבעת (4 à 9 US) | liste | la taille 7 se choisit (V) | inchangé | fonctionne |
| טוהר זהב : 18 k (מאט) / (מבריק) | liste | les deux finitions se choisissent ; le libellé affiche « — 11 127 ₪ » (V) | inchangé | fonctionne |
| הוספה לעגלה | bouton | cliqué : la requête `/cart/add` a été **bloquée par la règle de l'audit** ; aucun message (V) | — | **non réalisé** |
| מדריך מידות לטבעות | lien | guide des tailles (V : libellé) | — | non actionné |
| יש שאלות ? תכתבו לנו | lien | contact (V : libellé) | — | non actionné |
| הרשמה (newsletter) | champ et bouton | présent (V) | — | **non rempli** (règle) |
| English | lien | version anglaise (V : lien) | — | non ouvert |
| Menu : כל החנות, האוספים, טבעות, תליונים, עגילים, צמידים, Gift Card, November Sale | liens | catalogue (V) | — | non parcourus un par un |

Absents (V) : 3D, 360°, vidéo, essayage, comparaison, choix de la pierre, du carat, du métal (hors finition), avis, WhatsApp.

## Options disponibles

- **Métal** : or jaune 18 k, mat ou brillant, seulement ; d'autres couleurs, 14 ou 22 k, gravure, sur demande (V : FAQ).
- **Pierre** : naturelle, taillée « spécialement » (nuances et dimensions pouvant varier) ; sur la fiche : diamant de 0,53 ct avec certificat, serti de 5,5 × 7 mm ; modèles « salt & pepper », saphirs, diamants bruns (V).
- **Taille** : US de 4 à 9 ; **au-delà, devis**, « à cause du prix de l'or » ; mesurer chez un joaillier avec un anneau de largeur comparable (V).
- **Commande spéciale** : chercher une pierre précise sur demande (V).

## Prix, délais, retours, garanties

- **Prix** : en ₪, TVA incluse si applicable, livraison en plus, au moment de la fin de la commande (V : `/pages/terms-of-service`). Pas de décomposition.
- **Fabrication** : « jusqu'à **trois semaines** » sur la fiche ; « environ deux semaines » dans la FAQ ; 3 à 5 jours ouvrés pour les « pièces uniques » ou « prêtes à expédier » (V : fiche et FAQ, **deux chiffres différents**).
- **Livraison** : mondiale par DHL, UPS ou FedEx, frais ajoutés à la commande ; numéro de suivi envoyé à l'expédition (V : FAQ).
- **Annulation et retour** (V : conditions) : sans frais sous 14 jours si l'article est reçu emballé, fermé et inchangé ; sinon frais de 5 % ou 100 ₪ (le plus bas) ; **remboursement sauf pour les bijoux faits sur mesure pour le client** ; frais de livraison déduits au retour.
- **Paiement** : carte, PayPal (V : conditions).
- **Garantie** : non lue dans les pages ouvertes (V).

## Confiance et service

- **Libellé du synthétique** : aucun ; la fiche précise que « les pierres utilisées sont naturelles » (V).
- **Atelier** : « fabriqué à la main dans notre studio au moshav HaYogev » (V). Aucune photo de fabrication relevée dans les pages lues (V).
- **Contenu** : blog, « à propos », FAQ ; séance « stylisme » pour remonter des bijoux anciens (inventaire).
- **Avis** : aucun relevé (V).
- **Langues** : hébreu, anglais (V : lien).

## Temps d'apparition (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Fiche | LCP 1,2 s ; charge complète 4,0 s | LCP 1,4 s ; charge complète 4,2 s |

## Points forts à retenir pour JR Diamond

1. **Le prix est dans le libellé de chaque option** (« or jaune 18 k mat — 11 127 ₪ ») [V] : aucun clic de plus pour savoir ce qu'on paie.
2. **« Ce qui est naturel varie » écrit sur la fiche** : « chaque pierre est taillée spécialement ; la teinte et les dimensions peuvent varier légèrement » [V]. Une formule honnête pour des pierres réelles, à rapprocher du poids « ≈ 0,25 ct, à confirmer » de JR Diamond.
3. **Taille hors tableau : devis, à cause du prix de l'or** [V] : même logique que `src/config/pricing.ts`, qui suit le cours.
4. **Cotes de la monture en mm** : sertissage 5,5 × 7 mm, largeur de l'anneau 2,3 mm (V).
5. **Distinction « sur commande » et « prêt à expédier »** avec deux délais (3 semaines contre 3 à 5 jours) [V].

## Défauts observés

1. **Une seule finition à choisir** : l'acheteur ne configure presque rien [V].
2. **Délai contradictoire** : trois semaines (fiche), deux semaines (FAQ) [V].
3. **Taille limitée à 9 US** ; plus grand : devis [V].
4. **Pas de photo de fabrication** malgré « fait à la main dans le studio » [V].
5. **Panier non vérifiable**, pas de moyen de paiement échelonné lu [V].
6. **Pas d'avis** [V].

## Limites de l'audit

- Ajout au panier, panier, paiement : non réalisés (robots.txt).
- Une seule fiche ouverte en entier ; les 28 autres bagues, les pages de collection filtrées et la page « stylisme » n'ont pas été lues.
- Garantie et certificat : non trouvés dans les pages ouvertes.
- Formulaire de contact et newsletter : non remplis.
- iPhone : chargement seulement.
- iPhone émulé avec Chromium (pas un vrai Safari) ; temps sur machine partagée, une passe.

## Sources

- https://berman-j.co.il/robots.txt
- https://berman-j.co.il/collections/טבעות-אירוסין/products.json
- https://berman-j.co.il/products/טבעת-יהלום-אמרלד-קאט
- https://berman-j.co.il/pages/faqs · /pages/terms-of-service
- Inventaire : `INVENTAIRE.md` (29 bagues de 3 038 à 32 384 ₪ ; séance de stylisme)
- Captures et journaux (hors dépôt) : `scratchpad/il/out/berman/`
