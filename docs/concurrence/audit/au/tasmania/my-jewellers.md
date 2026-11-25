# Audit : My Jewellers (Burnie, Tasmanie)

- **Site** : My Jewellers
- **Adresse** : https://myjewellers.com.au
- **Page de départ** : https://myjewellers.com.au/collections/bespoke-engagement-rings
- **Date** : 15/11/2026 (date de consigne ; contrôles exécutés le 25/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; Chromium en affichage iPhone 13 ; locale en-AU
- **Statut** : **partiel**. Aucun blocage cette fois (aucune réponse 429, robots.txt en 200, tout permis sauf `/cart/`, `/checkout*`, `/cart.js`, `*sort_by*`). Limites : il n'y a ni configurateur ni ajout au panier (le site vend « sur demande »), et deux clics n'ont pas pu être menés à bout (voir « Limites »).
- **Légende** : [V] vérifié (page lue ou contrôle actionné, adresse indiquée) ; [I] inféré ; [S] supposé.

## Parcours

Pas de configurateur en étapes : une page de collection, puis une fiche par modèle avec des sélecteurs, puis une demande de devis. [V]

| Étape | Page | Options |
|---|---|---|
| 1. Collection « Bespoke Engagement Rings » | `/collections/bespoke-engagement-rings` (3 pages de résultats ; 48 cartes sur la page 1) | Filtres Metal, Diamond Shape, Style ; tri ; 3 densités de grille (large, medium, compact) ; chaque carte montre 7 pastilles de métal et le bouton « REQUEST QUOTE » |
| 2. Fiche modèle (ex. Sylvara, taille ovale demi-chaton) | `/products/sylvara-oval-cut-diamond-half-bezel-solitaire-engagement-ring` | Métal (7), pierre (labo ou naturel), taille de la pierre centrale (8 valeurs), taille de doigt (12 valeurs) |
| 3. Demande | bouton « Enquire About This Ring » ; « Send My Partner a Hint » | Aucun formulaire visible n'a pu être ouvert (voir contrôles) |
| 4. Devis et acompte | hors site (échange avec l'équipe) | « Process » : brief, choix de la pierre, devis final, acompte de 50 % [V fiche] |
| 5. Panier | `/cart` | « Your cart is empty » ; aucun ajout possible depuis une bague sur mesure |

## Contrôles vérifiés

Relevé automatique : 534 contrôles sur la collection, 98 sur la fiche (ordinateur) et 58 (iPhone) ; l'essentiel est du menu (3 niveaux de liens) et des 48 cartes. Seuls les contrôles propres à l'audit sont détaillés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastille « 9ct Yellow Gold » (sélection par défaut) | radio | Reste sélectionnée ; pas de changement d'URL | aucun prix affiché | OK |
| Pastilles 18ct jaune, 9ct rose, 18ct rose, 9ct blanc, 18ct blanc, platine | radio (6) | Chaque clic change `?variant=` dans l'adresse et le libellé « Color: … ». Les cinq premières images de la galerie ne changent pas (restent en or jaune) ; une image s'ajoute à la fin au premier changement | aucun | OK pour la variante ; l'image principale ne suit pas [V] |
| « Lab-diamond » (par défaut) / « Natural Diamond » | radio (2) | « Natural » change `?variant=` ; image inchangée | aucun | OK |
| « Centre Stone Size » | liste | 8 valeurs : 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 ct (+ « -- »). Sélection prise en compte, sans effet sur l'image ni l'adresse (propriété de commande) | aucun | OK |
| « Ring Size » | liste | 12 valeurs relevées, de H à O (H, I, J, J½, K, K½ L, L½, M, M½, N, N½, O). Aucun effet visible. Tailles australiennes en lettres | aucun | OK |
| « Enquire About This Ring » | lien `#` | Clic sans et avec sélection complète (1 ct, taille K) : aucun formulaire ni fenêtre visible, aucune navigation ; deux requêtes POST vers `/api/2026-07/graphql.json` partent (contenu non identifié) | aucun | Effet non observé |
| « Send My Partner a Hint » | lien `#` | Aucune fenêtre visible, aucune navigation | aucun | Effet non observé |
| « Process » (accordéon) | texte | Ouvre : brief, pierre, devis, acompte 50 %, fabrication 4 à 6 semaines, expédition 1 à 2 semaines, « au moins 8 semaines » | aucun | OK |
| « Customer Guarantee » (accordéon) | texte | « 12 month guarantee », certificats de diamant | aucun | OK |
| Galerie : 15 boutons « Go to item n » + vignettes | boutons | 15 éléments ; 2 vignettes portent l'icône vidéo (rendu des rubis et or rose) ; non lus | aucun | Présents ; vidéos non lues [I] |
| Filtres Metal (4), Diamond Shape (8), Style (9) de la collection | cases | Libellés relevés ; clic réel non abouti (expiré), voir « Limites ». Les filtres existent côté Shopify | aucun | Non testé |
| Tri « SORT BY » | menu | Non actionné : `Disallow: /collections/*sort_by*` | aucun | Non testé (interdit) |
| Densité large / medium / compact | boutons | Présents ; non actionnés | aucun | Non testé |
| « REQUEST QUOTE » (sur chaque carte) | bouton | Non actionné (mêmes réserves que « Enquire ») | aucun | Non testé |
| « LEARN MORE » / « BESPOKE BANDS » (cartes de renvoi) | liens | Vers `/pages/custom-engagement-ring` et `/collections/bespoke-wedding-bands` | aucun | Lien présent, non suivi sauf `custom-engagement-ring` (lu, 200) |
| Pagination 1 / 2 / 3 | liens | Présente ; page 2 non ouverte | aucun | Non testé |
| Recherche, panier (en-tête) | liens | `/cart` ouvert : panier vide ; recherche non utilisée | aucun | Panier OK |
| Fenêtre « 10 % OFF Your first order » | fenêtre | S'ouvre seule à l'arrivée (champ e-mail). « No, thanks » la ferme. E-mail non saisi | -10 % sur la première commande [V] | OK |
| Bouton « Need help? » | chat | Présent en bas à droite (composant Shopify chat) ; non ouvert, consigne | aucun | Non testé |
| Bouton « Add to cart » / achat accéléré | bouton | **Absent** de la fiche d'une bague sur mesure. Pour les autres fiches : non cherché ; `/cart/add` est de toute façon interdit | aucun | Absent |
| Appel (03) 6431 1531, e-mail, « Make an Appointment » | liens | Téléphone en bandeau ; page de rendez-vous avec formulaire (non rempli) | aucun | OK |
| Guides : « How to size your ring », « Diamond Shapes and Sizes » | liens | Présents en pied de page ; non lus | aucun | Non lus |

## Options disponibles

- **Métaux** (fiche Sylvara) : or jaune 9 et 18 ct, or rose 9 et 18 ct, or blanc 9 et 18 ct, platine [V]. La collection montre « 14ct » à la place de 9 ct sur certains modèles (ex. Adriana) [V], et la page de conseil annonce 9, 14 et 18 ct [V].
- **Pierre** : « Lab-diamond » ou « Natural Diamond » [V]. La page de conseil cite aussi saphirs et diamants de couleur de laboratoire [V].
- **Taille de la pierre centrale** : 0,5 à 4 ct par 0,5 ; fiche : « Suitable for 0.50ct to 4.00ct » [V].
- **Forme** : fixée par le modèle (ex. ovale) ; la collection se filtre par Cushion, Emerald, Marquise, Oval, Pear, Princess, Radiant, Round [V].
- **Style** : Bezel, East West Facing, Halo, Hidden Halo, Pavé, Solitaire, Toi et Moi, Trilogy, Vintage Inspired [V].
- **Monture, bande et griffes** : décrites dans la page de conseil (tulip, panier, trellis, cathedral, hidden halo, bezel ; band plate, pavé, courbe, knife-edge, cigar, pinched) mais **non sélectionnables** en ligne [V].
- **Taille de doigt** : lettres H à O (12 valeurs relevées) ; pas de gravure ni de pavage proposés en option [V].
- **Pas de** : filtre de pierre (couleur, pureté, prix), vue 3D, 360°, essayage en réalité augmentée, comparaison, enregistrement, financement affiché sur la fiche.

## Prix, délais, retours, garanties

- **Prix** : aucun prix affiché. « PRICE GUIDE : once you have submitted an enquiry, we will provide you with a price estimate. Final pricing will be confirmed once your preferred diamond size and quality have been selected. » Les cartes disent « REQUEST QUOTE ». [V]
- **Décomposition** : aucune (ni pierre, ni métal, ni façon). [V]
- **Délai** : production d'environ 4 à 6 semaines, plus 1 à 2 semaines d'expédition ; « au moins 8 semaines » conseillées ; délai plus court « sur demande ». [V fiche, accordéon Process]
- **Paiement** : acompte de 50 % pour lancer la production, solde avant remise ou expédition. [V]
- **Retours** : 30 jours (changement d'avis) pour les articles en stock ; **« custom-made pieces, and special orders are not eligible »** : les bagues sur mesure sont exclues. Retours à la boutique ou par coursier prépayé. [V `/policies/refund-policy`]
- **Garantie** : 12 mois sur tous les bijoux sur mesure ; certificat de diamant fourni ; droit australien à la consommation cité. [V]
- **Livraison** : express gratuit en Australie dès 250 AUD, sinon 15 AUD ; 2 à 7 jours ouvrables après expédition ; mise à taille : jusqu'à 7 jours ouvrables de plus ; signature obligatoire ; **pas de livraison internationale**. [V `/policies/shipping-policy`]
- **Moyens de paiement annoncés (FAQ)** : PayPal, Afterpay, Zip, Apple Pay, Mastercard, Amex, Visa ; devise AUD. [V `/pages/faq`]
- **Certificats** : GIA pour le diamant naturel, IGI pour le diamant de laboratoire, « included » (fiche Sylvara). [V]
- **Libellé du synthétique** : « Lab-diamond » (sélecteur) et « lab grown diamond » (FAQ, qui précise « identical to mined diamonds »). [V]

## Confiance et service

- **Avis** : bloc « Excellent. 4.8 out of 5 stars. Based on 144 Reviews, on Google » sur la page de rendez-vous et le panier ; un avis à 1 étoile est publié (critique d'un devis de réparation). [V]
- **Boutique physique** : Shop 33/22 Mount St, Burnie ; téléphone (03) 6431 1531 ; rendez-vous par formulaire. [V]
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi de commande sur mesure. Rendus de synthèse dans la galerie (2 vignettes avec lecteur vidéo non lues). [V / I]
- **Langues et devises** : anglais, AUD seulement. [V]
- **Assistance** : bouton « Need help? » (chat), appel, e-mail, rendez-vous. [V]
- **Mesures du visuel principal** : fiche, ordinateur : 1 025 à 1 746 ms (deux passes) ; iPhone : 891 ms ; collection, ordinateur : 1 637 ms, iPhone : 1 254 ms (domcontentloaded jusqu'à la première image chargée, connexion de l'environnement d'audit). Aucun débordement horizontal sur iPhone. [V]

## Points forts à retenir pour JR Diamond

1. **Mêmes certificats que JR Diamond** : GIA pour le naturel, IGI pour le synthétique, annoncés « included » sur la fiche. Preuve : tableau des spécifications de la fiche Sylvara. Confirme que ce duo est un standard attendu en Australie.
2. **Spécifications lisibles** (forme, monture, largeur de bande 2,5 mm, tailles de pierre convenables, délai) dans un tableau sur la fiche : à imiter, plus la mention du poids total (« TDW »). Preuve : fiche Sylvara.
3. **Process en 4 étapes expliqué sur la fiche** (brief, pierre, devis, acompte 50 %, délais cumulés 4 à 6 semaines + 1 à 2 semaines) : c'est le modèle de transparence que JR Diamond doit dépasser avec le prix visible. Preuve : accordéon « Process ».
4. **Choix du métal par pastilles de couleur et de la pierre par bascule**, avec une variante dans l'adresse (`?variant=`) : partage de configuration par lien. Preuve : clics sur les 7 pastilles.
5. **Garantie de 12 mois écrite sur la fiche** et rappel du droit à la consommation ; un acteur local rassure par la preuve sociale (4,8 sur 144 avis Google). Preuve : accordéon « Customer Guarantee » et page de rendez-vous.
6. **Bouton « Send My Partner a Hint »** : idée de partage conçue pour l'acheteur qui n'est pas la personne qui reçoit. Réserve : effet non observé. Preuve : bouton présent sur la fiche.

## Défauts observés

- **Aucun prix, même indicatif** : « Request quote » sur 48 cartes. L'écart principal avec JR Diamond. [V]
- **L'image ne suit pas le métal ni l'origine** : les cinq premières images restent en or jaune quand on choisit rose, blanc ou platine ; la fiche n'indique pas à quoi correspond la sélection. [V]
- **Boutons « Enquire » et « Send My Partner a Hint » sans effet visible** (lien `#`, aucune fenêtre ni navigation dans le navigateur d'audit) ; le prix ne s'affiche jamais. [V]
- **Incohérence 9 ct / 14 ct** : la fiche Sylvara propose 9 et 18 ct, la carte Adriana 14 et 18 ct, la page de conseil 9, 14 et 18 ct. [V]
- **Les bagues sur mesure sont exclues du retour de 30 jours** ; FAQ : « 30-day change of mind exchange » sans exception visible : contradiction avec la politique. [V]
- **Pas de livraison hors Australie**, signature obligatoire. [V]
- **Pas de preuve de fabrication** : aucune photo d'atelier, aucun suivi. [V]
- **Faute d'adresse e-mail dans la collection** : le lien « Email us for a free consultation » pointe vers `info@myjewelelrs.com.au` (lettre en trop) au lieu de `myjewellers`. [V : lien relevé dans le relevé automatique de la collection]
- **Fenêtre d'inscription (10 %)** à l'ouverture de chaque page, sur ordinateur et iPhone. [V]

## Limites de l'audit

- Les filtres de la collection ont été listés, mais le clic réel sur une case n'a pas abouti (case masquée, délai de 30 s dépassé) ; leur effet sur les 48 modèles n'est pas vérifié.
- « Enquire About This Ring » et « Send My Partner a Hint » : clics sans effet visible ; si un formulaire existe, il ne s'est pas ouvert dans le navigateur d'audit. Aucun formulaire rempli.
- Tri non actionné (`sort_by` interdit par `robots.txt`) ; « Add to cart » non cherché (`/cart/add` interdit).
- Un seul modèle (Sylvara) a été parcouru en détail ; les 47 autres cartes ont été lues seulement sur la collection (nom, 7 pastilles). Page 2 et 3 non ouvertes. Les guides de taille et des formes non lus. Vidéos de la galerie non lues.
- Requêtes de la page à son ouverture (non des écarts) : `/checkouts/internal/preloads.js`, `/cart.js`, `/cart/update.js`, `shopify_pay/accelerated_checkout` ; je les ai bloquées côté navigateur dans les parcours suivants. Aucun bouton de paiement cliqué, aucune donnée saisie.
- Le 429 signalé lors du recensement n'est pas revenu. Rythme respecté : au plus une page toutes les 2 secondes.
- Les dates des avis (« Nov, 2026 ») viennent du bloc d'avis du site.

## Sources

- https://myjewellers.com.au/collections/bespoke-engagement-rings (200, relevé de 534 contrôles ; lu le 25/11/2026)
- https://myjewellers.com.au/products/sylvara-oval-cut-diamond-half-bezel-solitaire-engagement-ring (fiche, contrôles, accordéons)
- https://myjewellers.com.au/pages/custom-engagement-ring (guide du sur mesure)
- https://myjewellers.com.au/policies/refund-policy ; https://myjewellers.com.au/policies/shipping-policy
- https://myjewellers.com.au/pages/faq (accordéons : délai, devise, paiement, retour, synthétique, mise à taille)
- https://myjewellers.com.au/pages/make-an-appointment (formulaire non rempli, avis Google)
- https://myjewellers.com.au/cart (panier vide)
- https://myjewellers.com.au/robots.txt (contrôle préalable par l'outil robots.cjs)
