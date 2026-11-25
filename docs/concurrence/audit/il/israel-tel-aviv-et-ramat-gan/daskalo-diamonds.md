# Audit : Daskalo Diamonds (דסקלו יהלומים)

- **Site** : Daskalo Diamonds, Bourse du diamant de Ramat Gan (Tuval 23, immeuble Noam)
- **Adresse** : https://daskalodiamonds.com/ (WordPress, WooCommerce, Elementor ; V : scripts et classes du DOM)
- **Date de l'audit** : 15/11/2026 (étiquette de la mission ; relevés effectués le 25/11/2026)
- **Appareils** : ordinateur (1366 x 900, locale he-IL) et affichage iPhone 13 (Playwright, Chromium)
- **Statut** : **complet** pour le parcours achat (fiche, options, panier). Aucun configurateur n'existe : le site est un catalogue.
- robots.txt relu : AUTORISÉ pour l'accueil, les catégories, les fiches, `/cart/`, `/checkout` (seuls interdits : `?add-to-cart=` en adresse, `wp-admin`, journaux WooCommerce). Le script Cloudflare `challenge-platform` est chargé, mais aucun défi ni blocage n'est apparu (HTTP 200 partout) [V].
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options relevées [V] |
|---|---|
| 1. Accueil `/` | Menu : bijoux femme, bagues de fiançailles, bijoux homme, « bijoux jusqu'à 2 700 ₪ », diamants de laboratoire, promotions, diamants naturels en promotion, contact. Appels : « rendez-vous de design » (page contact), collection de fiançailles, promotions. Sélection de produits, 250+ avis Google, formulaire de rappel (nom, téléphone), FAQ |
| 2. Catégorie `/product-category/טבעות-אירוסין/` | Grille de fiches (nom, prix barré et prix remise, bouton « Choisir les options »), 8 questions de FAQ. **Aucun filtre ni tri** (aucun `select` ni case à cocher relevé sur 172 contrôles) |
| 3. Fiche bague | Taille (46 à 60), couleur d'or (blanc, jaune, rose) en pastilles, « Ajouter au panier », accordéons Garantie et Livraison/Retours, formulaire de rappel, lien « mesure rapide » |
| 4. Panier `/cart/` | Quantité, coupon, livraison gratuite ou retrait sur place, bouton « Vers la page de paiement » |
| 5. Paiement | **Non ouvert** (consigne) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Téléphone 050-665-6013 (en-tête, pied) | lien `tel:` | Appel téléphonique | n/a | OK (non appelé) |
| Bouton flottant WhatsApp | lien `wa.me/972554368717?text=` | Ouvre WhatsApp, texte vide (non ouvert) | n/a | Présent sur ordinateur et iPhone ; non ouvert (consigne) |
| Panier (icône, compteur) | lien | Mini-panier ; compteur passe à 1 après ajout | n/a | OK |
| Menu « bagues de fiançailles » | lien | Catégorie, 172 contrôles, 200 | n/a | OK |
| Menu « diamants de laboratoire » | lien | Catégorie `/יהלומי-מעבדה/` : sous-catégories chaînes, bracelets, boucles, bagues + texte « diamants vrais, créés en laboratoire » | n/a | OK |
| Menu promotions / « naturels en promotion » | lien | Pages de remises | n/a | Non ouvert (hors parcours) |
| « Prendre rendez-vous de design » | lien | Mène à la page contact (formulaire) | n/a | Lien OK ; formulaire non rempli |
| Formulaire de rappel (nom, téléphone) | formulaire | « Un expert vous rappelle avec une offre personnalisée » | n/a | Non envoyé (consigne) |
| Carrousel de catégories (5) | liens | Bagues de fiançailles, bagues, bracelets, pendentifs, boucles | n/a | OK |
| Carrousel d'avis Google (précédent / suivant) | boutons | Défilement des avis | n/a | Présent ; avis Google intégrés, pas de lien vérifiable [V] |
| Mobile : bouton menu | bouton | Ouvre le menu | n/a | Présent (iPhone) |
| FAQ (8 questions) | accordéon | Ouvre la réponse (choix, solitaire/halo, gravure, achat à distance, taille, nombre de pierres, entretien, évolution) | n/a | OK, 8/8 |
| Taille de doigt 46 à 60 | liste | 15 tailles françaises ; aucun effet sur prix ni image | aucun (13 900 → 10 700 ₪ constants) | OK |
| Couleur d'or (3 pastilles) | pastilles radio | Change le libellé « Couleur d'or : … » ; **l'image principale ne change pas** (même fichier) | aucun | OK, sans effet visuel |
| « Effacer » | lien | Réinitialise les choix | n/a | Présent |
| « Mesure rapide » | lien | Mène à l'article « comment trouver la taille de la bague » (pas de fenêtre) | n/a | OK |
| « Qualité F / SI2 » | bouton | Fenêtre : échelle de couleur D-Z et de pureté (VVS, VS, SI) | n/a | OK |
| « Ajouter au panier » sans taille | bouton | Désactivé tant que la taille n'est pas choisie | n/a | OK |
| « Ajouter au panier » avec taille 54 + blanc | bouton | Message « ajouté au panier » + lien panier ; ligne avec taille et couleur | 10 700 ₪ | OK (une ligne ajoutée, non payée) |
| Accordéon « Garantie et service » | accordéon | Certificat gemmologique, estimation d'assurance, retouche de taille offerte, rénovation annuelle, écrin | n/a | OK |
| Accordéon « Livraison et retours » | accordéon | Livraison sécurisée jusqu'à 10 jours ouvrés, retrait sur place à la Bourse | n/a | OK |
| Formulaire fiche (nom, téléphone) | formulaire | « Demander plus d'informations » | n/a | Non envoyé |
| Panier : quantité, coupon | champs | Quantité modifiable, code promo | n/a | Non utilisés |
| Panier : livraison gratuite / retrait | radio | « Livraison gratuite jusqu'à 7 jours ouvrés » ou retrait | 0 ₪ | OK |
| Panier : « Vers la page de paiement » | lien `/checkout/` | Page de paiement | n/a | **Non cliqué (consigne)** |
| Galerie de fiche (2 vignettes) | image | Photos produit (600 px) ; pas de vue 360°, 3D, essayage ni AR | n/a | Aucun visuel interactif |
| Partager, enregistrer, comparer, liste de souhaits, guide des tailles intégré, chat, financement (simulateur), AR | n/a | **Absents** (aucun contrôle relevé) | n/a | Non testables |

## Options disponibles

- **Métal (fiche)** : or 14 carats (« זהב 14 », texte de la fiche) ; couleurs blanc, jaune, rose. Platine, 18 carats : non proposés [V].
- **Pierre** : forme annoncée par produit (rond, ovale, princesse, etc.) ; carat fixé par produit (0,50, 0,70, 1,00, 1,35 ct…). **Pas de choix de forme ni de carat sur une même fiche.**
- **Origine** : par produit, naturel ou « יהלום מעבדה » (catégorie dédiée) ; pas de bascule naturel/laboratoire sur une fiche.
- **Qualité** : texte « F / SI2 » + fenêtre d'explication ; pas de choix.
- **Taille** : 46 à 60 (échelle française).
- **Gravure** : annoncée en FAQ (date, nom, message), non proposée comme option sur la fiche [V].
- **Filtres / tri** : aucun [V].
- **Services** : retrait à la Bourse, livraison, estimation d'assurance, retouche de taille, trade-in (« possibilité de trade-in » en bandeau), 12 paiements sans intérêt, rendez-vous de design.

## Prix, délais, retours, garanties

- **Affichage du prix** [V] : prix catalogue barré + prix remise en ₪ (ex. LIBI 1,35 ct naturel 13 900 → 10 700 ₪ ; April 1,00 ct 11 000 → 10 300 ₪ ; Ruslana lab 8 800 → 6 400 ₪ ; Orin vintage 2 900 ₪). Aucun détail (métal, pierre, façon). Le prix ne varie pas selon la taille ni la couleur.
- **Remises** : permanentes (« -30 % », « -40 % » dans les titres) ; prix barrés très élevés [V].
- **Financement** : « possibilité de 12 paiements sans intérêt » [V], conditions non détaillées.
- **Délais** : trois chiffres différents : fiche (onglet) « jusqu'à 10 jours ouvrés » ; panier « livraison sans frais jusqu'à 7 jours ouvrés » ; règlement « jusqu'à 14 jours ouvrés dès la commande » (§4.2) [V].
- **Livraison** : gratuite en Israël, retrait possible à la Bourse [V].
- **Retours (règlement §6)** [V] : remboursement uniquement pour un achat de 3 000 ₪ au plus et sous 48 h ; frais d'annulation 5 % ou 100 ₪ (le moindre) + 3 % de frais de carte ; au-dessus de 3 000 ₪, avoir ou échange sous 14 jours à la discrétion de la société. **Exclus : commandes spéciales, bijoux sur mesure ou à taille ajustée, alliances, pierres choisies sur demande.** C'est l'exception « sur mesure » appliquée.
- **Garantie** : onglet de fiche « garantie à vie » / entretien annuel ; règlement 7.2 : garantie fabricant **5 ans** pour les produits fabriqués par la société ; pierres de 0,02 ct au plus remplacées si défaut de fabrication [V]. Contradiction entre « à vie » et « 5 ans ».
- **Moyens de paiement (règlement §3.4)** [V] : espèces (limite légale 11 000 ₪ pour un Israélien, 50 000 ₪ pour un touriste), carte, virement, PayPal, Bit. Le panier annonce « nous acceptons les moyens de paiement suivants » mais affiche des logos (non lisibles en texte) ; page de paiement non ouverte.
- **Certificats** : « certificat gemmologique international » mentionné sur la fiche naturelle ; pas de laboratoire nommé (GIA, IGI) sur les fiches lues [V].
- **Libellé du synthétique** : « יהלום מעבדה » (diamant de laboratoire) ; texte de catégorie « diamants vrais, mêmes éclat et résistance ». Pas de mention « synthétique ». Les fiches lab affichent D/VVS mais pas de certificat nommé [V].
- **Langues, devises** : hébreu seul ; ₪ seul [V].

## Confiance et service

- Famille « troisième génération » à la Bourse, « plus de 60 ans d'expérience », 250+ avis Google 5 étoiles (affichage, non recoupé) [V].
- Contact : téléphone, WhatsApp, e-mail, adresse avec lien Waze, horaires dim.-jeu. 9 h-18 h, vendredi irrégulier [V].
- Aucune photo d'atelier ni de fabrication, aucune vidéo, aucun suivi de commande relevé sur les pages ouvertes [V ; non exhaustif].
- Blog « Articles » (guides) et déclaration d'accessibilité présents [V].
- Règlement copié d'un autre site : mentionne « ג'י בי » (JB) à la place de Daskalo (§1.7) [V].

## Points forts à retenir pour JR Diamond

1. **Prix toujours affiché, avec un prix barré** (ex. 13 900 → 10 700 ₪ sur LIBI, page lue) : le visiteur sait tout de suite l'ordre de grandeur. À prendre côté prix, sans la remise permanente.
2. **« 12 paiements sans intérêt »** sous le prix de chaque fiche (page lue) : lève le frein sur les prix élevés.
3. **Rappel par un expert** (formulaire nom + téléphone) sur chaque fiche et à l'accueil, et bouton WhatsApp flottant (relevé sur ordinateur et iPhone).
4. **Fenêtre « qualité F / SI2 »** qui explique couleur et pureté sans quitter la fiche : modèle pédagogique pour le configurateur.
5. **Livraison gratuite en Israël + retrait à la Bourse**, annoncé en bandeau noir et dans le panier.
6. **FAQ de catégorie (8 questions)** : gravure, achat à distance, taille, évolution du bijou.
7. **Panier court** : une ligne avec taille et couleur, livraison gratuite ou retrait, bouton de paiement : peu d'étapes.
8. **Texte de catégorie « diamant de laboratoire »** qui explique l'origine sans dénigrer le naturel.

## Défauts observés

- **Aucun configurateur** : pas de choix de forme, carat, origine, finition ni gravure sur une même fiche ; chaque produit est figé. La taille et la couleur d'or ne changent pas le prix.
- **La couleur d'or ne change pas l'image** (même photo après clic sur « blanc ») : le visiteur ne voit pas ce qu'il choisit.
- **Aucune vue interactive** (360°, 3D, essayage, AR) ; deux vignettes seulement.
- **Aucun filtre ni tri** dans une catégorie de bagues de fiançailles (172 contrôles, aucun champ).
- **Prix non décomposé** ; remises permanentes et prix barrés élevés (affichage de promotion) ; pas de détail du métal ni du poids.
- **Délais contradictoires** : 7, 10 et 14 jours ouvrés selon l'endroit.
- **Garantie contradictoire** : « à vie » sur la fiche, 5 ans dans le règlement.
- **Retours très restrictifs** : remboursement seulement jusqu'à 3 000 ₪ et 48 h ; frais 5 % ou 100 ₪ + 3 % ; pas de remboursement du sur mesure ni des alliances.
- **Règlement avec une autre marque** (« ג'י בי »), signe de texte repris.
- Texte de certificat sans laboratoire nommé ; « synthétique » jamais dit.
- Nombre et poids des diamants donnés comme « estimation » (fiche).
- Pas de preuve de fabrication (photos d'atelier, vidéo, suivi).

## Limites de l'audit

- Page de paiement `/checkout` non ouverte (consigne) : moyens de paiement réellement proposés, frais éventuels, pièces demandées non vus.
- Aucun formulaire envoyé, aucun chat, WhatsApp ni appel ; un article a été ajouté au panier d'une session de test, non payé.
- Fiches lues en détail : LIBI (naturel, 1,35 ct) et Ruslana LAB ; autres fiches seulement par leurs prix en catégorie.
- Le panier montre « 7 jours » alors que le règlement dit 14 : non résolu, délai réel inconnu [I].
- Le temps d'apparition du visuel principal a été mesuré sur une fiche, pas sur l'accueil.
- Mesures : visuel principal de la fiche LIBI (navigation jusqu'à l'image de galerie chargée) : ordinateur 4,4 s (LCP 2,2 s) ; iPhone 3,8 s (LCP 1,7 s) [V, réseau du poste d'audit, une mesure par appareil].
- Avis Google, « 60 ans », « troisième génération » : affichés par le site, non recoupés [S].
- Blog et pages non ouvertes : promotions, guides, contact.

## Sources

- https://daskalodiamonds.com/ (accueil, desktop et iPhone)
- https://daskalodiamonds.com/product-category/טבעות-אירוסין/ (catégorie, FAQ)
- https://daskalodiamonds.com/product-category/יהלומי-מעבדה/ (catégorie lab)
- https://daskalodiamonds.com/product/טבעת-אירוסין-1-35-קראט-טבעי-libi/ (fiche, ajout, panier)
- https://daskalodiamonds.com/product/טבעת-יהלומים-ruslana-lab/ (fiche lab)
- https://daskalodiamonds.com/cart/ (panier)
- https://daskalodiamonds.com/מדיניות-משלוחים/ (règlement, retours, garantie, paiement)
- https://daskalodiamonds.com/about/ ; https://daskalodiamonds.com/robots.txt
- Inventaire : `docs/concurrence/audit/il/israel-tel-aviv-et-ramat-gan/INVENTAIRE.md`
