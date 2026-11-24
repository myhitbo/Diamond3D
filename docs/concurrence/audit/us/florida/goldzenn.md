# Audit GOLDZENN (Floride, États-Unis)

- **Site** : GOLDZENN (Miami, FL) — https://goldzenn.com
- **Page de départ** : https://goldzenn.com/collections/engagement-rings (« Build your own lab-grown diamond engagement rings »)
- **Date** : 15/11/2026 (pages lues le 24/11/2026 d'après l'horloge de la machine ; les prix et dates d'expédition sont ceux relevés ce jour-là)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel** — parcours jusqu'au choix de la taille ; panier non ouvert (voir « Limites »)
- Marque : bijouterie de Miami, pas un atelier de bagues de fiançailles à l'origine (chaînes cubaines, or d'investissement). Bagues = **diamants de synthèse uniquement**, certificat IGI.

## Parcours

| Étape | Où | Options |
|---|---|---|
| 1. Choix de la forme | page collection, bandeau « Shape » | Toutes (60 modèles), Rond 56, Ovale 58, Émeraude 56, Radiant 47, Poire 46, Coussin 29, Marquise 44, Princesse 49, Asscher 1 |
| 2. « Your picks » | barre de la collection | Forme, carat (1, 1.5, 2, 2.5, 3, 4), or (jaune, blanc, rose), titre (14K, 18K), Reset |
| 3. Style | vignettes | Solitaire (12), Hidden halo (9), Halo (8), Pavé et pierres latérales (16), Trois pierres et toi-et-moi (5) |
| 4. Fiche du modèle | /products/<nom>-<forme>-lab-grown-diamond-engagement-ring | forme, carat (1 à 5), or, 14K/18K, qualité (VS1 F-G, VVS1 F-G, VVS1 D), taille de doigt, gravure |
| 5. Taille | guide « Find her size » | 3 à 10 par demi-taille ; guide en 3 onglets |
| 6. Panier | bouton « CHOOSE SIZE » puis ajout | **non atteint** (panier interdit aux robots) |

Pas de choix libre de monture : le client choisit un **modèle fini** (60 designs) et fait varier forme, carat, or, titre, qualité. Pas de choix de pavage, de corps de bague ni de griffes.

## Contrôles vérifiés

Vérifié = actionné dans le navigateur (adresse de la page entre parenthèses quand utile). 842 contrôles visibles sur la collection (ordinateur), 736 sur iPhone ; la plupart sont les liens « View this ring » des 60 cartes.

### Collection (https://goldzenn.com/collections/engagement-rings)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Boutons de forme (Round, Oval, Emerald, Radiant, Pear, Cushion, Marquise, Princess) | bouton | filtre la grille ; le compteur passe à 56, 58, 56, 47, 46, 29, 44, 49 ; les cartes affichent la forme choisie | le prix de la carte change (ex. Sabrina rond 1 895 $, ovale 2 095 $, émeraude/radiant/poire 2 150 $, 2 ct 14K jaune) | fonctionne |
| Asscher (1) | bouton | un seul modèle ; clic sans filtre visible lors du test (compteur non lu) | — | partiel (non confirmé) |
| All shapes | bouton | remet toutes les formes (60) | — | fonctionne |
| Carat 1 / 1.5 / 2 / 2.5 / 3 / 4 | bouton | recalcule le prix de toutes les cartes et la légende « Round, N ct » | Ophelia : 1 395 / 1 595 / 1 795 / 1 995 / 2 195 / 2 595 $ ; Sabrina : 1 450 / 1 650 / 1 895 / 2 095 / 2 295 / 2 695 $ | fonctionne |
| Yellow / White / Rose | bouton | change l'or de toutes les cartes et la photo | aucun écart de prix entre couleurs d'or (4 ct 14K : 2 595 $ les trois, Ophelia) | fonctionne |
| 14K / 18K | bouton | change le titre | 4 ct : Ophelia 2 595 → 2 950 $ ; Sabrina 2 695 → 3 095 $ (+355 à +400 $) | fonctionne |
| Reset | bouton | revient à 2 ct, 14K jaune, toutes formes | — | fonctionne |
| Any shape (liste « Your picks ») | bouton | liste déroulante de formes | — | vu, non actionné séparément |
| Solitaire / Hidden halo / Halo / Pavé / Trois pierres | bouton | filtre par style : 12, 9, 8, 16, 5 modèles | — | fonctionne (compteurs lus) |
| Filter | bouton | panneau « Filter & sort » : Budget (Tout, moins de 2 000 $ 5, 2 000–2 500 $ 40, 2 500–3 000 $ 13, 3 000 $+ 2), Style, Tri, « Reset all », « Show 60 designs » ; « Prices for 2 ct, 14K yellow gold. Change carat or gold and the prices update. » | budget calculé sur le prix courant | s'ouvre ; budget non actionné |
| Tri (liste) | liste | 6 options : alphabétique A-Z/Z-A, prix croissant/décroissant, date ancienne/récente | — | options lues, tri non appliqué |
| On hand (par carte) | bouton | bascule la carte en aperçu « sur la main » | — | vu, non actionné sur la grille |
| Pastilles or (3 par carte) et pastilles de forme (par carte) | bouton | changent la photo de la carte (images `...-yellow/rose-front-mg.webp`) | selon l'or/la forme | fonctionne (images changent) |
| Badge « 360° » (carte) | info | indication « 360° view on the ring page » | — | info seulement |
| View this ring (60) | lien | ouvre la fiche, variante dans l'adresse | prix repris | fonctionne |
| Build your ring / Text a jeweler | lien | ancre vers la grille / SMS `+13215214651` | — | fonctionne (SMS non envoyé) |
| Call 321-521-4651, Text us | lien | `tel:` / `sms:` | — | non actionné |
| Search jewelry, Cart | lien | /search et /cart, **interdits par robots.txt** | — | non ouvert |
| Menus (Chains, Bracelets, Pendants, Rings, Earrings, Custom jewelry, Sell your gold) | lien/bouton | navigation | — | non parcouru (hors périmètre bagues) |

### Fiche du modèle (https://goldzenn.com/products/sabrina-round-lab-grown-diamond-engagement-ring)

| Libellé | Type | Effet observé | Prix (Sabrina, rond, 14K jaune) | État |
|---|---|---|---|---|
| Ring / On the hand / Compare | onglets | Ring : photo ; On the hand : « aperçu numérique de la taille sur la main » ; Compare : « Same ring, three center sizes » 1 ct ≈ 6,5 mm 1 450 $, 2 ct ≈ 8,1 mm 1 895 $, 3 ct ≈ 9,3 mm 2 295 $, taper pour choisir | affichés | fonctionne |
| 360° | bouton | passe en vue 360° ; un glissement de souris change l'image affichée | — | fonctionne au 1er essai ; introuvable après avoir quitté la vue (1 échec au 2e test) |
| Forme (Round, Oval, Emerald, Radiant, Pear) | lien | charge la fiche de la même bague dans une autre forme (autre adresse) | change | fonctionne |
| Carat 1, 1.5, 2, 2.5, 3, 4, 5 | bouton | taille de pierre (« about 8.1 mm across » à 2 ct), adresse `?variant=` | 1 450 / 1 650 / 1 895 / 2 095 / 2 295 / 2 695 / 3 150 $ | fonctionne |
| Yellow / White / Rose | bouton | change l'or et la photo | identique (1 895 $) | fonctionne |
| 14K / 18K | bouton | change le titre | 14K 1 895 $ → 18K 2 250 $ (+355 $) | fonctionne |
| Quality « VS1 · F–G (our pick) » / Change | bouton | ouvre 3 choix : VS1 F-G (base), VVS1 F-G, VVS1 D, avec « Will she see a difference? » | +100 $ (VVS1 F-G), +255 $ (VVS1 D) | fonctionne |
| Her ring size / Find her size | bouton | guide en 3 onglets : « Ring she wears » (règle, diamètre en mm avec − et +), « Paper strip » (circonférence en mm), « Size chart » (tableau US diamètre et circonférence) ; bouton « USE THIS SIZE » | — | s'ouvre ; « USE THIS SIZE » sans effet visible au test |
| Tailles 3 à 10 (par 0,5) | bouton | choix de la taille ; « Most women wear 6 to 7. Between two sizes? Choose the larger one. » | — | **non confirmé** : mon clic n'a pas sélectionné de taille (sélecteur) |
| Add engraving | case | « Optional, inside the band », champ « Initials or a date », 20 caractères au plus | pas de supplément affiché | champ présent, **non révélé** par mon clic (non confirmé) |
| CHOOSE SIZE | bouton | reste le libellé tant que la taille n'est pas confirmée ; deux exemplaires (page et barre fixe) | — | non dépassé |
| Text a jeweler 321-521-4651, Chat | lien/bouton | SMS pré-rempli ; « Chat » non ouvert | — | non actionné |
| See our return policy | lien | /policies/refund-policy | — | fonctionne |
| About this ring, Ring details, Questions before you order? | sections | texte repliable | — | lu partiellement |
| Aide : « This design in other shapes » | liens | idem formes | — | présent |

Non testés : ajout au panier, page panier et paiement (voir Limites) ; « Compare » des cartes de la grille ; partage, enregistrement, comparaison de bagues entre elles, AR, vidéo : **aucun de ces boutons n'existe** sur la fiche (vérifié dans la liste des contrôles).

## Options disponibles

- **Formes** : rond, ovale, émeraude, radiant, poire, coussin, marquise, princesse, asscher (1 modèle). Toutes les formes ne sont pas offertes pour chaque modèle (ex. Sabrina : 5 formes ; sur « Cushion », la carte retombe sur la poire).
- **Carat** : 1, 1.5, 2, 2.5, 3, 4, 5 (fiche) ; 1 à 4 sur la grille.
- **Or** : jaune, blanc, rose. **Titre** : 14K, 18K. Pas de platine (non vu).
- **Origine** : synthétique seulement, annoncée « lab-grown » partout.
- **Qualité du diamant** : VS1 F-G (base), VVS1 F-G, VVS1 D.
- **Styles** : solitaire, hidden halo, halo, pavé et pierres latérales, trois pierres et toi-et-moi, twist. 60 modèles au total.
- **Tailles** : US 3 à 10 par demi-taille.
- **Gravure** : à l'intérieur de l'anneau, 20 caractères (non vérifié sur prix).
- **Service** : SMS, téléphone, chat, Layaway (paiement échelonné, page de conditions), guide des tailles, reprise d'or. Aucun rendez-vous en ligne, essayage à domicile ou WhatsApp vu.
- **Sur mesure** : page /pages/custom-projects, formulaire de devis (non rempli) ; « custom projects start at $1800 ».

## Prix, délais, retours, garanties

- **Prix** (vérifié, fiche Sabrina rond 14K jaune, USD) : 1 ct 1 450 $, 1,5 ct 1 650 $, 2 ct 1 895 $, 2,5 ct 2 095 $, 3 ct 2 295 $, 4 ct 2 695 $, 5 ct 3 150 $. 18K : +355 $ (2 ct). Qualité : +100 $ ou +255 $. Prix par défaut annoncé « pour un VS1 F-G » sur la collection. L'or jaune, blanc et rose coûtent pareil. Décomposition du prix (métal, pierre, main-d'œuvre) : **non affichée**, seul un total par variante. Cours de l'or en direct affiché en bandeau (« Gold $3,565/oz »). Fourchette de la grille à 2 ct : moins de 2 000 $ (5 modèles) à plus de 3 000 $ (2).
- **Délai** : « Made to order. Ships by Tue, Dec 15 (about 3 weeks) » ; bandeau « Christmas: order by Nov 25 ». La politique d'expédition (mise à jour le 24/03/2026) annonce 4 à 6 semaines pour les autres articles sur commande : écart entre fiche (≈ 3 semaines) et politique générale (inféré, la bague en collection n'est pas citée nommément dans ce passage).
- **Livraison** : politique : aucune livraison gratuite ; tarifs calculés à la caisse ; expédition États-Unis, plus Canada, Royaume-Uni, Australie, France, Allemagne, EAU, etc. (liste complète dans la page ; Israël non listé). Expédition de Miami les lundi, mercredi, vendredi.
- **Retours** (politique du 27/03/2026) : bagues de la collection : **30 jours**, 100 % en crédit magasin ou remboursement moins 10 % de frais (400 $ au plus) ; étiquette de retour gratuite (États-Unis) ; commandes du 1er nov. au 24 déc. reprises jusqu'au 31 janvier ; bague non portée, **non regravée, non redimensionnée**, avec certificat IGI (150 $ si manquant) ; une bague retournée par client et par 12 mois. **Vente définitive** pour les créations sur mesure, les bagues gravées et toute modification non proposée sur le site. Annulation : 12 h (5 % de frais), après début de production impossible.
- **Mise à taille** : un redimensionnement offert sous 60 jours, expédition comprise ; après quoi le retour n'est plus possible.
- **Garantie** : 1 an limitée contre les défauts de fabrication ; pièces serties de diamants et sur mesure examinées au cas par cas ; redimensionnement, polissage, rhodiage : services payants (FAQ).
- **Certificats** : « IGI report for the center diamond » ; expertise d'assurance émise par GOLDZENN, incluse.

## Confiance et service

- Avis : 4,90/5 sur Google (364+ avis) et 4,8/5 sur 3 924 avis produits (Judge.me), affichés dans le pied de page (vérifié).
- Boutique physique à Miami (1056 SW 67th Ave) ; horaires lundi-vendredi 11 h-18 h, samedi 11 h-16 h (ET).
- Contact : téléphone, SMS pré-rempli, chat, formulaire de devis.
- Preuves de fabrication : page « Workshop Videos » (5 vidéos de 7 à 26 min, **toutes sur des chaînes cubaines**, aucune sur les bagues). Pas de photo ou de vidéo de la bague commandée, pas de suivi de commande vu.
- Langue : anglais ; devise : dollar. Pas de choix de langue ou de devise vu.

## Points forts à retenir pour JR Diamond

1. **Prix affiché partout, qui bouge en direct** : chaque filtre (forme, carat, or, titre) recalcule le prix de 60 cartes sur la collection (preuve : Sabrina 2 ct 1 895 $, 4 ct 2 695 $). C'est l'écart principal avec notre « Sur devis ».
2. **Mention explicite de ce que le prix suppose** : « Prices are for a VS1 F–G center diamond », puis 3 niveaux de qualité avec supplément (+100 $, +255 $) et la phrase « Will she see a difference? » (fiche Sabrina, bloc Quality).
3. **« Compare » : même bague en 1, 2, 3 ct avec diamètre en mm et prix**, sur la photo d'une main (fiche Sabrina). Répond à « quelle taille de pierre ? » sans 3D.
4. **Guide de taille en 3 méthodes** (bague portée, bandelette, tableau) avec réglage en mm.
5. **Politique de retour lisible dans une seule page**, avec une section dédiée aux bagues (30 jours, plafond de 400 $ de frais, 1 mise à taille offerte) : à copier en clarté, pas en contenu.
6. **Un lien partageable par variante** (`?variant=`) et un bouton SMS pré-rempli.
7. Rapidité : fiche iPhone visible en 1,4 s (mesuré).

## Défauts observés

- Aucun configurateur 3D ; photos et un « 360° » : pas de lien avec le fichier de fabrication.
- Aucune décomposition du prix.
- Retour « vente définitive » pour toute bague gravée ou modifiée : écueil pour les clients qui veulent un sur-mesure.
- Une seule bague retournée par client sur 12 mois ; frais de 10 % : politique stricte (vérifié).
- Aucune vidéo de fabrication de bagues ; les vidéos d'atelier concernent des chaînes.
- Écart de délai entre la fiche (≈ 3 semaines) et la politique d'expédition (4 à 6 semaines pour les articles sur commande).
- Pas de panier de type page : tout le funnel passe par la caisse Shopify.
- Bouton « 360° » introuvable lors d'un 2e passage (non reproduit, probablement état de l'onglet).
- Pas de choix d'origine naturel ou de platine : l'offre bagues est 100 % synthétique et or seulement.

## Limites de l'audit

- **Panier non ouvert** : /cart est Disallow dans robots.txt ; je n'ai donc pas ajouté d'article. Récapitulatif du panier, frais de livraison, moyens de paiement affichés : **non vus**. (La page produit appelle d'elle-même `/cart.js` au chargement ; ce n'est pas une action de ma part.)
- Sélection d'une taille, gravure et « USE THIS SIZE » : mes clics n'ont pas produit de changement visible ; ces contrôles sont signalés comme non confirmés.
- Filtre de budget et tri non appliqués ; carte « On hand » de la grille non actionnée.
- Temps mesurés sur une connexion de machine cloud avec proxy, à titre indicatif : grille ordinateur ≈ 5,0 s jusqu'aux cartes ; grille iPhone ≈ 5,0 s jusqu'à la première image de bague ; fiche ordinateur 3,5 s jusqu'à la première image ; fiche iPhone ≈ 1,4 s ; chargement complet iPhone 1,5 s.
- Capture mobile de la grille non conservée (échec d'écriture).
- Une seule fiche (Sabrina) testée en détail ; les autres suivent la même mise en page (inféré).
- Dates : le rapport est daté du 15/11/2026 par consigne ; la machine indique le 24/11/2026 et le bandeau « order by Nov 25 » est cohérent avec cette dernière date.

## Sources

- https://goldzenn.com/collections/engagement-rings (lue, filtres actionnés)
- https://goldzenn.com/products/sabrina-round-lab-grown-diamond-engagement-ring (lue, contrôles actionnés)
- https://goldzenn.com/policies/refund-policy (lue)
- https://goldzenn.com/pages/shipping-policy (lue)
- https://goldzenn.com/pages/faqs (lue)
- https://goldzenn.com/pages/videos (lue)
- https://goldzenn.com/pages/custom-projects (lue, formulaire non rempli)
- https://goldzenn.com/robots.txt (lu : /cart, /search, /checkouts, /account, filtres de collection interdits)
- Captures et scripts : dossier de travail `scratchpad/audit/us/goldzenn/` (hors dépôt)
