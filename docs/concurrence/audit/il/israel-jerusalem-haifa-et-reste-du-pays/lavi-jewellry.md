# Audit : Tachshitei Lavi / Lavi Jewellry (Kiryat Gat)

- **Site** : Tachshitei Lavi (תכשיטי לביא), boutique au 64 Sderot Paz, centre commercial, Kiryat Gat ; atelier de fabrication à la Bourse du diamant de Ramat Gan [V : pied de page, /we-are-lavi-jewelry/]
- **Adresse** : https://lavijewellry.com/ ; page de départ : https://lavijewellry.com/diamond-jewelry/engagment-ring/ (catalogue), puis la fiche https://lavijewellry.com/lab-diamond-oval-solitaire-pave-engagement-ring-white-gold-14k/ (pas de constructeur)
- **Date** : 15/11/2026
- **Appareils** : Chromium 1366 × 900 (locale he-IL) et affichage iPhone 13
- **Statut** : **partiel**.
  - Le panier n'a pas été atteint : robots.txt interdit `/cart/`, `/checkout/` et `?wc-ajax=`, et l'ajout au panier passe par `?wc-ajax=add_to_cart` [V : robots.txt et code de la fiche].
  - Ces adresses ont été bloquées dans le navigateur d'audit, ainsi que `?orderby=` et `?filter_`.
  - Le reste de la fiche et du catalogue a été actionné.

Légende : [V] vérifié (page lue ou contrôle actionné) · [I] inféré · [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| Accueil : « השאלה רק באיזו צורה » | 7 formes, chacune avec son nombre de bagues et son prix de départ ; lien « לכל 60 טבעות האירוסין » [V] |
| 1. Catalogue | onglets « הכל » (97 bagues) et « יהלומי מעבדה » (47) · bouton « סינון » (prix seulement) · tri « מומלץ » · « עוד טבעות » · liens de forme (`?shape=`) et de budget (`?tier=`) en bas de page · pages par ville [V] |
| 2. Fiche | taille 44 à 62 ou « מידה אחרת » (champ libre) · enregistrer · partager · 2 vignettes · guide des tailles · onglets livraison, retours, garantie · WhatsApp, téléphone, Waze · ajout au panier |
| 3. Sur mesure (« LAVI ATELIER ») | conversation, modèle 3D, devis décomposé, fabrication : via WhatsApp [V : texte du catalogue] |
| 4. Panier | non atteint (robots.txt) |

## Contrôles vérifiés

Relevé complet : catalogue 126 contrôles (ordinateur) et 157 (iPhone) ; fiche 119 et 90 [V : `controls.cjs`]. Actionnés par les scripts a1 à a9.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Accueil : עגול · אובל · טיפה · מרקיזה · אמרלד · רדיאנט · עפיפון | sélecteur à icônes | le libellé change : rond 7 bagues dès 2 372 ₪, ovale 11 dès 1 912 ₪, poire 6 dès 2 329 ₪, marquise 3 dès 2 990 ₪, émeraude 3 dès 4 890 ₪, radiant 4 dès 3 790 ₪, cerf-volant 5 dès 3 229 ₪ ; le carrousel se met à jour [V] | prix de départ par forme | fonctionne |
| Cookies : אישור | bouton | présent [V] | — | non actionné |
| Onglet יהלומי מעבדה | lien | /…/lab-diamond-engagement-rings/ : « 47 טבעות » [V] | — | fonctionne |
| סינון | bouton | tiroir avec un seul filtre, le prix : jusqu'à 3 000 ₪ (30), 3 000–5 000 ₪ (44), 5 000 ₪ et plus (29) [V] | — | s'ouvre ; filtres non appliqués (`?filter_`, `?min_price=` interdits) |
| מומלץ (tri) | bouton | — | — | non appliqué (`?orderby=` interdit) |
| Liens de forme (הכל 103, עגול 10, אובל 19…) et de budget (`?tier=t1` à `t4`) | liens en bas de catalogue | **chargée directement, l'adresse `?shape=oval` (ou `marquise`, `?tier=t1`, `t4`) montre la même grille : 97 bagues, les mêmes premières** [V] | — | **sans effet visible** ; un filtrage par un appel bloqué (robots) n'est pas exclu [S] |
| עוד טבעות | bouton | 17 → 35 bagues affichées [V] | — | fonctionne |
| אשקלון · אשדוד · באר שבע | liens | pages d'accès à la boutique par ville [V : cibles] | — | non ouvertes |
| WhatsApp (6 variantes) | liens | wa.me/972506559289, messages pré-remplis : « aide pour choisir une bague de fiançailles », « je voudrais dessiner une bague sur mesure » [V] | — | liens valides (non ouverts) |
| Fiche : מידת טבעת : בחרי מידה | bouton | ouvre la grille des tailles [V] | — | fonctionne |
| 44 … 62 (10 tailles) | boutons | le bouton affiche « מידת טבעת : 44 » (testé 44, 52, 62) [V] | inchangé | fonctionne |
| מידה אחרת | bouton + champ | champ libre « כתבי את המידה, למשל 47.5 » [V] | inchangé | fonctionne |
| איך מודדים בבית / לחץ/י למדריך מידות | lien et fenêtre | fenêtre : méthode du fil, tableau tour de doigt (mm), diamètre et taille américaine ; page /find-your-ring-size/ [V] | — | fonctionne |
| שמירה לרשימה | bouton | aucun changement d'état ni message relevé [V] | — | effet non établi |
| שיתוף | bouton | ni partage natif ni menu de partage observés [V] | — | effet non établi |
| תמונה 1 · תמונה 2 | vignettes | 2 images : bague dans l'écrin, bague portée [V : galerie] | — | présentes ; changement d'image non mesuré |
| Onglets זמני אספקה ומשלוחים · החלפות והחזרות · אחריות | accordéons | s'ouvrent ; textes ci-dessous [V] | — | fonctionnent |
| הוספה לסל | bouton | — | — | **non actionné : robots.txt interdit `?wc-ajax=` et `/cart/`** |
| שאלה בוואטסאפ · נציג ב-Whatsapp | liens | WhatsApp pré-rempli [V] | — | valides |
| או מתקשרים לחנות 08-9525045 · התקשר | liens | tel:+97289525045 [V] | — | valides |
| נווטו בוויז · גוגל מפות · שדרת פ״ז 64 · ניווט | liens | Waze et Google Maps vers la boutique [V] | — | valides (non ouverts) |
| 109 ביקורות בגוגל / לקריאת הביקורות | lien | fiche Google [V : texte de la fiche] | — | non ouvert |
| Pied de page : משלוחים, החלפות והחזרות, בקשה לביטול עסקה, אודות, guides, Instagram, TikTok | liens | pages lues (livraison, retours, à propos, FAQ) : 200 [V] | — | fonctionnent ; repliés en accordéons sur iPhone [V] |
| פתח תפריט נייד | bouton (iPhone) | menu mobile [V : contrôles] | — | non actionné |

Absents [V : fiche et catalogue] : choix du métal ou de la pierre sur la fiche (chaque variante est une autre fiche), 3D, 360°, vidéo, AR, comparer, gravure, chat intégré.

## Options disponibles

- **Origine** : naturel (« יהלום טבעי ») ou synthétique (« יהלום מעבדה ») ; 47 des 97 bagues sont synthétiques [V].
- **Formes** : rond, ovale, poire, marquise, émeraude, radiant, cerf-volant, et cœur et princesse dans les liens du bas [V].
- **Métal** : or 14 k blanc ou jaune pour les bagues de fiançailles vues ; or rose sur d'autres bijoux [V : titres des fiches].
- **Tailles** : 44 à 62 (tour de doigt en mm), plus « autre » en champ libre [V].
- **Fiche auditée** : or blanc 14 k, 2 g ; pierres synthétiques VS1, D ; centre 0,75 ct et 0,25 ct dans le corps [V].
- **Budgets** : jusqu'à 3 000 ₪, 3 000–5 000 ₪, 5 000–8 000 ₪, plus de 8 000 ₪ [V].

## Prix, délais, retours, garanties

- **Prix** : fixe et TTC.
  - Fiche : 4 190 ₪ barré, **2 933 ₪** (« économie de 1 257 ₪ »), 12 paiements de 245 ₪, « 1 en stock » [V].
  - Catalogue : de 990 à 12 790 ₪ [V].
  - Page « combien coûte une bague » : bague synthétique dès 2 490 ₪ ; 1 ct entier entre 2 490 et 3 990 ₪ [V : /engagement-ring-price/].
- **Décomposition** : pas sur les fiches. Sur mesure : « prix final et ferme, décomposé en pierre, or et façon » [V : catalogue].
- **Délai** :
  - modèle en stock : le jour même en boutique ; livraison 3 à 5 jours ouvrés [V] ;
  - bague fabriquée à l'atelier : « en général 14 jours ouvrés » [V : FAQ du catalogue] ;
  - sur mesure : « une à deux semaines » après validation [V].
- **Livraison** : 19,90 ₪, offerte dès 700 ₪ ; retrait gratuit en boutique ; Israël seulement [V : /shipping-policy/].
- **Paiement** : carte bancaire, Bit, Apple Pay, Google Pay (cités comme moyens de remboursement) ; 12 paiements sans intérêt [V : /refund-policy/, fiche].
- **Retours** [V : fiche, /refund-policy/] :
  - échange sous 30 jours ; retour sous 14 jours, remboursement intégral sans frais (sur la fiche) ;
  - la politique de retour prévoit pourtant 5 % ou 100 ₪ de frais d'annulation ;
  - coursier : 35 ₪ pour un retour, 80 ₪ pour un échange ;
  - **exclus** : pièces sur mesure, mise à taille, gravure, pierres du client, alliances sur commande.
- **Garantie** : 1 an ; contrôle et nettoyage gratuits tous les 6 mois ; perte de pierre couverte si la bague a été contrôlée dans les 6 mois précédents [V : fiche].
- **Certificats** : certificat propre pour chaque pierre de plus de 1 ct, certificat CGL pour les autres [V : FAQ du catalogue]. GIA et IGI non cités [V].

## Confiance et service

- **Fabrication** :
  - équipe nommée : fondateur diamantaire, gemmologue, designer « Rhino 3D », chef d'atelier et sertisseur à la Bourse [V : /we-are-lavi-jewelry/] ;
  - membre de l'association israélienne des joailliers ; poinçon de l'Institut des normes sur tous les bijoux [V].
- **Sur mesure** [V : catalogue] :
  - « un modèle 3D, vous voyez la bague sous tous les angles avant de toucher l'or » ;
  - « gratuit et sans engagement », « modifications sans limite ».
- **Avis** : « 109 ביקורות בגוגל » [V : fiche].
- **Ton** : FAQ écrite pour le fiancé qui « n'y connaît rien » ; page des prix réels par budget [V].
- **Ancrage local** : pages par ville (Ashkelon, Ashdod, Beer-Sheva) ; retrait en boutique [V].
- Langue : hébreu seulement ; devise : ₪ [V].

## Temps d'apparition du visuel principal

| Page | Appareil | LCP | Fin du chargement du document (DOMContentLoaded) |
|---|---|---|---|
| Fiche | ordinateur | 2,4 s | 9,2 s |
| Fiche | iPhone 13 (émulé) | 1,9 s | 7,3 s |
| Catalogue | ordinateur | 7,4 à 9,4 s | 6,2 à 7,9 s |

[V : `timing.cjs`, a1, a2]. Délai de réponse du serveur ≈ 0,5 s : la lenteur vient du poids de la page (2,4 Mo de HTML pour l'accueil) [V]. La grille du catalogue se remplit au défilement [V : capture].

## Points forts à retenir pour JR Diamond

1. **Le parcours sur mesure en 4 étapes** : conversation gratuite, **modèle 3D avant fabrication, gratuit et sans limite de modifications**, **devis ferme décomposé en pierre, or et façon**, fabrication en 1 à 2 semaines à la Bourse [V]. C'est presque mot pour mot la promesse de JR Diamond ; le différenciateur doit donc être le modèle 3D **en ligne et chiffré**, pas sur WhatsApp [I].
2. **Le sélecteur de forme avec nombre de modèles et prix de départ** (« ovale · 11 bagues · dès 1 912 ₪ ») [V] : simple et efficace pour un « à partir de ».
3. **La page « combien coûte une bague de fiançailles »**, avec des tranches de budget et ce qu'on obtient dans chacune [V] : contenu à créer pour le marché israélien [I].
4. **« Taille autre » en champ libre et guide des tailles en fenêtre** [V].
5. **Contrôle et nettoyage gratuits tous les 6 mois**, condition de la garantie sur les pierres [V] : service d'après-vente concret.
6. **Bit, Apple Pay et Google Pay** cités [V] ; Bit est rare chez les concurrents de la Bourse (voir l'étude Israël).

## Défauts observés

1. **Liens de forme et de budget sans effet** : ils annoncent des nombres (« אובל 19 ») mais affichent la même grille [V].
2. **Nombres incohérents** : 60 bagues (accueil), 97 (catalogue), 103 (liens), 30 + 44 + 29 = 103 (filtre de prix) [V].
3. **Page lourde** : document complet après 7 à 10 s, grille du catalogue vide au premier affichage [V].
4. **Remise permanente affichée** (−30 % sur la fiche) [V] : prix de référence douteux [I].
5. **Contradiction sur les frais de retour** : « sans frais d'annulation » sur la fiche, 5 % ou 100 ₪ dans la politique [V].
6. **Ni 3D ni vidéo sur les fiches** : 2 photos seulement ; le modèle 3D n'existe que pour le sur-mesure, hors du site [V].
7. Boutons « enregistrer » et « partager » sans effet observé [V].

## Limites de l'audit

- Ajout au panier, panier et paiement non actionnés (robots.txt) : frais et récapitulatif du panier tirés des pages de politique.
- Filtres de prix et tri non appliqués (robots.txt).
- Formulaires et WhatsApp non utilisés : le modèle 3D du sur-mesure n'a pas été vu.
- Mesures de temps sur machine partagée.

## Sources

- https://lavijewellry.com/robots.txt
- https://lavijewellry.com/ (sélecteur de forme) · /diamond-jewelry/engagment-ring/ (avec `?shape=oval`, `?shape=marquise`, `?tier=t1`, `?tier=t4`) · /diamond-jewelry/engagment-ring/lab-diamond-engagement-rings/
- https://lavijewellry.com/lab-diamond-oval-solitaire-pave-engagement-ring-white-gold-14k/ (fiche, ordinateur et iPhone)
- https://lavijewellry.com/engagement-ring-price/ · /shipping-policy/ · /refund-policy/ · /we-are-lavi-jewelry/ · /faq/ · /labgrown-diamonds/ · /find-your-ring-size/ (cible)
- Captures et journaux (hors dépôt) : `scratchpad/audit/il/lavi-jewelry/` (`accueil_formes.jpg`, `catalogue_d.jpg`, `fiche_m.jpg`, `a2`–`a9`)
