# Audit : Laveran Paris, spécialiste du synthétique sur Shopify (français, €) : **partiel, lecture statique**

| | |
|---|---|
| Site | Laveran Paris (« 11 showrooms en France », V, bandeau de la fiche) |
| Page de départ | https://laveran-paris.com/collections/coups-de-coeur/products/bague-palais-royal |
| Date | 16/11/2026 |
| Appareils | **aucun navigateur**. Une seule requête `curl` (HTML de la fiche), puis lecture hors ligne ; pas d'émulation iPhone, pas de contrôle actionné |
| Statut | **partiel**. Le site publie des règles pour les agents (voir ci-dessous) ; je me suis limité à la lecture du HTML public de la fiche et à `agents.md`, sans piloter les contrôles de la page. Une seconde série de lectures (page du sur-mesure, politique de remboursement, showrooms) a été **refusée par le système de permissions** de la session ; je ne l'ai pas contournée. Panier : interdit par robots.txt (`/cart`, `/cart.js`) et jamais approché |
| robots.txt | interdit `/cart`, `/cart.js`, `/checkout`, `/account`, `/orders`, `/collections/*sort_by*`, les filtres combinés `+`, `/recommendations/products` (V). Le fichier renvoie à `https://laveran-paris.com/agents.md` (V) |

Marques : **V** vérifié (page lue) · **I** inféré · **S** supposé.

## Règles publiées pour les agents

`agents.md` (V) demande que les agents « s'identifient comme agents », passent par l'interface UCP ou les outils WebMCP du site pour toute action d'achat, et **n'agissent pas par scripts sur les formulaires et contrôles de la page** ; il autorise la « lecture de pages HTML publiques » à condition de suivre l'identification des agents (Web Bot Auth). Je n'ai pas cette identification. J'ai donc : lu la fiche en une requête avec un en-tête qui se déclare comme un outil de recherche (pas un navigateur), actionné aucun contrôle, et arrêté là. **Écart, relevé par l'orchestrateur le 16/11** : cette lecture a eu lieu sans l'identification que le site exige ; elle respecte robots.txt mais pas `agents.md`. Elle ne sera pas renouvelée, et les constats de ce rapport restent à confirmer par une visite humaine. C'est un cas où le texte du site va plus loin que robots.txt ; il est à connaître pour la suite de l'étude (**un audit complet de ce site demande un geste humain ou l'identification d'agent**).

## Parcours (d'après le HTML de la fiche, non actionné)

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Fiche « Bague Palais Royal » | Pierre (8 libellés), Métal (4), Poids du diamant central (11), Qualité (3), Tour de doigt, gravure gratuite, baguier gratuit (V) | 132 variantes de prix dans la page (4 × 11 × 3) (V) | non observé (aucun contrôle actionné) |
| Panier | non approché | — | — |
| Sur-mesure | trois étapes annoncées : rendez-vous (showroom ou visio), « on dessine » (« vous validez un rendu fidèle avant le moindre geste de fabrication »), « on façonne » (V, texte de la fiche) | non lu | non lu |

## Contrôles relevés (lus dans la page, non actionnés)

| Libellé | Type | Contenu relevé | État |
|---|---|---|---|
| Pierre | 8 choix | Diamant de laboratoire (par défaut), Diamant, Diamant jaune, Diamant rose, Diamant bleu, Rubis, Saphir, Émeraude ; légende : « Diamants de laboratoire · rubis, saphir et émeraude synthétiques » (V) | non actionné ; ce que recouvre « Diamant » (naturel ?) n'est pas indiqué sur la fiche (I) |
| Métal | 4 choix | Or blanc 18 K, Or jaune 18 K, Or rose 18 K, Platine 950/1000 (V) | non actionné |
| Poids en carat du diamant central | 11 choix | 0,30 · 0,50 · 0,70 · 1,00 · 1,30 · 1,50 · 2,00 · 2,50 · 3,00 · 4,00 · 5,00 (V) | non actionné |
| Qualité diamant | 3 choix | H/VS2, F/VS1, D/VVS1 ; « Taille Excellent · Sans fluorescence · Certifié IGI / GIA » (V) | non actionné |
| Tour de doigt | liste | 46 à 65 (V) | non actionné |
| Recevoir un baguier gratuit | bouton + formulaire | prénom, nom, e-mail (obligatoires), adresse (V) | **non rempli** |
| Ajouter une gravure gratuite | bouton | « Offerte », 25 caractères, polices Baton, Camille, Anglaise ; aperçu « Votre gravure apparaîtra ici » (V) | non actionné |
| Ajouter au panier | bouton | « La quantité sélectionnée dépasse le stock actuel » existe dans le gabarit (V) | **non actionné** |
| Complétez votre parure | bouton | — | non actionné |
| Chat | — | non relevé dans le HTML (S) | — |

## Options disponibles

- **Pierre** : diamant de laboratoire IGI (par défaut) ; huit libellés de pierre sur la fiche (V). Rubis, saphir, émeraude « synthétiques » selon la légende (V).
- **Poids** : 11 valeurs de 0,30 à 5,00 ct ; **trois qualités couplées** (couleur et pureté ensemble) (V).
- **Métaux** : or blanc, jaune, rose 18 K, platine (V).
- **Taille de doigt** : 46 à 65, baguier gratuit (V). **Gravure** : offerte, 25 caractères (V).

## Prix, délais, retours, garanties

Prix de la fiche, tirés des 132 variantes de la page (V, données du HTML). Prix en € TTC (« Taxe incluse »). Remise annoncée : « Prix normal 1 100 € », 880 €, « 20 % de réduction » à 0,30 ct H/VS2 (V).

| Poids (ct) | H/VS2 | F/VS1 | D/VVS1 |
|---|---|---|---|
| 0,30 | 880 | 976 | 1 080 |
| 0,50 | 1 136 | 1 344 | 1 544 |
| 0,70 | 1 400 | 1 568 | 1 720 |
| 1,00 | 1 744 | 2 096 | 2 360 |
| 1,30 | 2 016 | 2 464 | 2 656 |
| 1,50 | 2 520 | 3 160 | 3 440 |
| 2,00 | 2 960 | 3 632 | 4 304 |
| 2,50 | 3 760 | 4 960 | 5 392 |
| 3,00 | 4 440 | 5 200 | 6 080 |
| 4,00 | 5 096 | 5 856 | 6 736 |
| 5,00 | 5 816 | 6 576 | 7 456 |

- **Le métal ne change pas le prix** : les quatre métaux (dont le platine) ont **exactement les mêmes 33 prix** dans les données de la page (V). Soit le prix est unique par construction, soit la page ne porte pas les écarts (I). À vérifier avec un navigateur.
- **Délai** : « entre le 30 novembre 2026 et le 7 décembre 2026 », soit deux à trois semaines ; solutions plus rapides par téléphone ou WhatsApp (V).
- **Livraison** et **retour** offerts ; **retour 30 jours** « satisfait ou remboursé » ; mise à taille gratuite à vie ; garantie à vie ; « remise en beauté offerte tous les 18 mois, à vie » (V).
- **Paiement** : Visa, Mastercard, Cartes Bancaires, American Express, Apple Pay, Google Pay, PayPal, Shop Pay, Klarna, Bancontact, BLIK, EPS, MB WAY, MobilePay, Satispay (V, logos).
- **Fabrication** : « fabriqué à Paris par les artisans de la Maison Laveran » ; contrôle qualité « à 2 reprises » (V).
- **Certification** : « au-delà de 0,30 carat, un certificat (GIA, IGI ou HRD) » ; un « rapport d'expertise agréé par les compagnies d'assurance » pour tout bijou serti ; micro-gravure laser du numéro (V).

## Confiance et service

- **Avis** : « 5/5 sur Google, près de 100 avis », trois avis « achat vérifié » affichés ; l'un parle d'un pendentif livré en quelques jours (V).
- **Contact** : 01 81 70 09 82, WhatsApp, showrooms (non ouverts).
- **Image** : aucune réserve sur l'écart entre photo et bijou relevée dans la fiche (V pour l'absence dans le texte lu).
- **Preuves de fabrication** : un schéma en trois étapes, sans photo ni vidéo de fabrication dans le texte (V).

### Terme du diamant synthétique et décret 2002-65

| Où | Libellé | Conforme ? |
|---|---|---|
| Titre de la page | « Diamants de Laboratoire » (V) | non (I) |
| Fiche, menus, texte | « diamant de laboratoire » (plusieurs fois), « diamants de laboratoire » (V) | non (I) |
| Rubrique « Détails et composition » | « Diamants Synthétiques » (V) | oui |
| FAQ de la page | « Un diamant de laboratoire est-il un vrai diamant ? **Oui.** » ; « le diamant minier » ; « jusqu'à 80 % moins cher » (V) | **non** : « vrai » est interdit pour une pierre synthétique (article 4) ; l'équivalence est affichée sans réserve |
| Fiche | « Identique en composition et en dureté au diamant naturel » (V) | formulation d'équivalence, sans « vrai » |

## Points forts à retenir pour JR Diamond

1. **Un tableau complet poids × qualité dans la page** : 33 prix pour une bague, de 880 à 7 456 € (V). Ce que JR Diamond peut offrir en direct, avec sa 3D.
2. **Trois qualités nommées par couple couleur/pureté** (H/VS2, F/VS1, D/VVS1), pas dix : peu de choix, donc peu d'hésitation (V).
3. **Gravure offerte avec aperçu dans la page** (V), baguier gratuit avec adresse (V).
4. **« Vous validez un rendu fidèle avant le moindre geste de fabrication »** : la promesse du sur-mesure, en trois lignes (V). Même formulation que « ce que vous voyez existe », mais sans rendu en ligne.
5. **Moyens de paiement très larges** (15 logos) (V) : le contraste avec la situation israélienne (Grow, Bit) est complet.

## Défauts observés

1. **Terme « de laboratoire » partout et « vrai diamant : oui »** : non conforme au décret 2002-65 (V). À ne pas imiter.
2. **Le métal n'a pas de prix propre** dans les données (V), ce qui est peu crédible pour le platine ; ou la page ne le montre pas (I).
3. **Prix barré à −20 %** (1 100 → 880 €) sans date de fin (V) : référence douteuse (S).
4. **Rien n'est dit sur l'écart entre la 3D, la photo et la pierre livrée** dans le texte lu (V).
5. **Site ouvert aux agents sous conditions** : les robots non identifiés ne peuvent pas auditer le parcours (V, `agents.md`).

## Limites de l'audit

- **Aucun contrôle actionné** : les prix viennent du JSON embarqué dans le HTML, pas d'un clic ; l'effet sur l'image, les messages d'erreur, l'ordre des étapes et le panier ne sont pas vérifiés.
- Pages non lues : sur-mesure (`/pages/atelier-sur-mesure-17`), showrooms, guide « Labo ou naturel ? », politique de remboursement (la demande a été refusée par le système de permissions de la session ; elle n'a pas été répétée).
- Aucun mobile, aucun temps de chargement. Un seul produit.
- Aucun formulaire, aucun chat, aucun compte, aucun WhatsApp.

## Sources

- https://laveran-paris.com/collections/coups-de-coeur/products/bague-palais-royal (HTML lu une fois) · `/robots.txt` · `/agents.md`
- Fichiers de travail (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/029abcd0-3d8a-56d2-8c2e-67bb96f3ed98/scratchpad/fr/out/` (`lav_prod.html`, `lav_variants.json`)
