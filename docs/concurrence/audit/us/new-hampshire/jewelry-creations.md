# Audit : Jewelry Creations (Dover, New Hampshire)

- **Site** : Jewelry Creations Inc, https://jewelrycreationsinc.com/ (Shopify). Page de départ : https://jewelrycreationsinc.com/pages/custom-engagement-rings-in-dover-nh
- **Date** : 15/11/2026 (consigne de l'étude ; relu le 25/11, robots.txt autorise la lecture)
- **Appareils** : ordinateur (Chromium 1366 x 900) et affichage iPhone 13 (Chromium émulé)
- **Statut : partiel.** Aucun blocage (HTTP 200 partout, la fiche d'inventaire « bloqué » du 24/11 est périmée). Mais le site n'a **ni configurateur ni constructeur en ligne** : le sur mesure passe par un rendez-vous. Seul le catalogue (68 bagues) est actionnable ; le bouton d'ajout au panier n'a pas été cliqué (voir Limites).
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options observées |
| --- | --- |
| Page de départ « Custom Engagement Rings » | Texte et formulaire de contact (nom, e-mail, téléphone, commentaire) ; téléphone/SMS (603) 749-3129 ; aucun outil de conception [V] |
| Processus sur mesure (`/pages/custom-jewelry-design-process`) | 1 Consultation, 2 CAD, 3 Refinement, 4 maquette de cire imprimée en 3D, 5 Creation, « Final Reveal » [V] |
| Pierre | Naturel ou synthétique (« lab-grown »), choix guidé en rendez-vous ; achat à Anvers possible, photos/vidéos/visio pendant le voyage [V] |
| Catalogue prêt-à-porter (`/collections/engagement-rings`) | 68 produits, 5 pages, filtres disponibilité et prix, tri, fiche produit, quantité, bouton « Special Order » ou « Add to cart » [V] |
| Panier (`/cart`) | Panier vide testé seulement : « Your cart is empty », suggestions de produits [V] |

## Contrôles vérifiés

Page de départ, ordinateur : 84 contrôles listés (controls.cjs) ; iPhone : 39. Écart : le menu et ses sous-liens sont masqués derrière le menu burger en affichage mobile. Captures dans le dossier de travail de l'auditeur (hors dépôt).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Menus Shop / About Us / Engagement & Wedding / Custom Jewelry Design / Repair / Knowledge | menus déroulants (summary) | Ouvrent 7 à 14 liens chacun (collections, pages de service) | n/a | OK [V] |
| Recherche (champ q + Search) | champ | Présent ; non utilisé (`/search` autorisé mais requêtes de recherche non lancées) | n/a | Non testé : inutile à l'étude |
| Log in | lien | Mène à `customer_authentication/redirect` (compte client Shopify) | n/a | Non ouvert (création de compte exclue) |
| Cart | lien | Ouvre `/cart`, panier vide | n/a | OK [V] |
| Téléphone (603) 749-3129 | lien tel: | Appel ; 3 occurrences dans la page | n/a | Lien présent [V] |
| Formulaire de contact (Name, Email *, Phone, Comment, Send) | formulaire | Envoi d'une demande de consultation | n/a | Non envoyé (règle : aucun formulaire) |
| Newsletter (e-mail + Subscribe) | formulaire | Inscription | n/a | Non envoyé |
| « Learn more about our custom design process » | lien | Ouvre la page du processus en 5 étapes | n/a | OK [V] |
| Réseaux : Google/Apple Maps, Facebook, Instagram, Pinterest | liens | Sortent vers des domaines tiers | n/a | Non suivis |
| Cookie preferences | lien | Rouvre la bannière de consentement | n/a | Non testé |
| Filtre Availability (In stock 51, Out of stock 21) | cases | Présents sur `/collections/engagement-rings` ; 51 + 21 = 72 alors que « 68 products » (écart non expliqué) | n/a | Non actionné [V] présence |
| Filtre Price (de 0 à 16 775 $) | deux champs | `?filter.v.price.gte=3000` : affiche « $3,000.00 - $16,775.00 », bouton « Clear filter » / « Clear all » | filtre sur prix affiché | OK [V] |
| Tri (Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant/décroissant, date) | liste | 9 options présentes ; **non actionné** : l'adresse `?sort_by=` est INTERDITE par robots.txt | n/a | Non testé, raison : robots.txt |
| Pagination 1, 2, 3 … 5 | liens | `?page=2` autorisé ; non parcouru au-delà de la page 1 | n/a | Présent [V] |
| Fiche produit : quantité (−, champ, +) | boutons | Présents | prix x quantité [I] | Non actionné |
| Fiche produit : « Special Order » (bouton submit `add`) | bouton | Même contrôle que « Add to cart » (formulaire Shopify), libellé « Special Order » pour les produits sur commande | prix affiché, sans option | **Non cliqué** : l'envoi appelle `/cart/add`, INTERDIT par robots.txt |
| Fiche produit : « Add to cart » (semi-monture Artcarved) | bouton | Idem | 2 395 $ | **Non cliqué**, même raison |
| « More payment options » | bouton | Paiement accéléré (Shopify) | n/a | Non cliqué (règle : paiement) |
| Fiche produit : Share | summary + champ lien | Déplie un lien à copier | n/a | Présent [V], non copié |
| Retrait en boutique (« Pickup available at Dover Store, usually ready in 2 hours ») | information | Affiché sur la fiche des produits en stock | n/a | [V] |

Aucun mode photo/vidéo/360°/3D/AR/essayage, comparaison, financement, chat, WhatsApp, guide des tailles ni gravure n'a été trouvé sur les pages lues [V : listes de contrôles ; absence = non observé, pas prouvé sur tout le site].

## Options disponibles

- **Métal** : aucun sélecteur. Les descriptions citent un métal par produit (ex. « 14k white gold » pour la semi-monture Artcarved) [V].
- **Pierre** : naturel ou synthétique (« lab-grown ») cités en texte ; pas de filtre forme/carat/couleur/pureté. Sur les fiches lues, « center stone sold separately » ou « *Price does not include center diamond » : prix **de la monture seule** [V].
- **Styles listés** (page « Engagement Rings in Dover ») : solitaire, halo, trois pierres, vintage, moderne/minimaliste [V].
- **Catalogue** : 68 bagues, de 965 $ (Modern Bridal Ring) à 16 775 $ (maximum du filtre) ; exemples : Aurora 2 198 $, Beloved 1 114 $, Sentiment 3 848 $, Pink Sapphire and Diamond 4 599 $ [V].
- **Services d'atelier** : réparation, estimation, nettoyage, rachat d'or, retouche de bijoux de famille (« Heirloom redesign ») [V : menus].
- **Pas de gravure, pas de taille de doigt à choisir en ligne** : les fiches lues n'ont aucune option [V].

## Prix, délais, retours, garanties

- **Prix** : affiché en $ pour le catalogue (« Regular price »), sans décomposition. Le sur mesure n'a aucun prix : « You'll receive a clear estimate before moving forward » [V : /pages/custom-jewelry-design-faq]. « Custom jewelry can vary widely in cost » [V]. Les fournisseurs principaux semblent être des marques (ex. fiche « SCHNEIDER DESIGNS ») [V].
- **Taxe** : « No hidden fees—and no sales tax » (New Hampshire) [V : /pages/engagement-rings-in-dover-nh].
- **Délai sur mesure** : « most custom pieces are completed within 4-6 weeks from the time the design is approved » [V : FAQ]. Produits « Special Order » : « 1-8 weeks depending on the vendor » [V : /pages/policies]. Produits en stock : traitement 1-2 jours ouvrés, +1-3 jours [V].
- **Livraison** : gratuite, USPS Priority Mail, signature requise au-dessus de 1 000 $ [V]. Le texte de la fiche dit aussi « Shipping calculated at checkout », ce qui contredit « Shipping is free » (même page) [V].
- **Retours** : en ligne, 30 jours avec RMA obtenu par téléphone, 5 % de frais de restockage en cas de retour, aucun frais en cas d'échange ou avoir ; en boutique, 15 jours (remboursement) ou avoir jusqu'à 30 jours. **Les commandes sur mesure et les pièces gravées ne sont pas reprises** ; articles en solde non plus [V : /policies/refund-policy, /pages/policies]. Traitement du retour : 2 à 4 semaines [V].
- **Garanties et services inclus** : estimation pour assurance (offerte, au-dessus de 1 000 $), première mise à taille offerte (dans les 2 ans), nettoyage/contrôle à vie, rhodiage offert si besoin, garantie contre les défauts, sertissage offert, coffret cadeau, points de fidélité [V : /pages/engagement-rings-in-dover-nh, /pages/policies].
- **Paiement** : « More payment options » (paiement accéléré Shopify) présent ; moyens exacts non vus (checkout non atteint) [V présence].

## Confiance et service

- **Ancienneté** : « over 40 years » ; boutique à Dover, contact par téléphone/SMS, formulaire, e-mail sales@jewelrycreationsinc.com [V].
- **Avis clients** : seulement deux citations (Russ, Berwick ME ; Jason, Manchester NH) sur la page Anvers ; aucun avis agrégé ni note observés [V]. Noms recopiés en prénom seul, déjà publiés par le site.
- **Preuves de fabrication** : textuelles seulement (CAO 3D relue, cire imprimée en 3D à essayer, éventuellement sertie de pierres de test). Aucune photo ou vidéo d'atelier de commande, aucun suivi de commande vu [V : processus]. Page « The Bench » listée au menu, non lue.
- **Certificats** : pas de mention GIA/IGI ou de seuil de carat sur les pages lues ; la sélection d'Anvers est décrite sans certificat [V absence sur les pages lues].
- **Libellé du synthétique** : « lab-grown » [V].
- **Langues** : anglais. **Devise** : USD, une seule [V].
- **Anvers** : achat de diamants sur place, partage de photos, vidéos et visio en direct pendant le voyage [V : /pages/antwerp-diamond-buying].
- **Transformation de bijoux de famille** : page dédiée (refaire, combiner, reconstruire, recréer à l'identique) [V].

## Points forts à retenir pour JR Diamond

1. **Maquette physique à essayer avant fonte** : cire imprimée en 3D, parfois sertie de pierres, « see and try on » (preuve : /pages/custom-jewelry-design-process, étape 4). JR Diamond montre la pièce issue du fichier de fabrication et la pierre filmée ; une copie de cire est un argument comparable.
2. **Voyage et visio à Anvers** pour choisir la pierre en direct (preuve : /pages/antwerp-diamond-buying) : exemple de « pierre filmée » vendu comme expérience.
3. **Ensemble de services inclus clairement listés** (estimation, mise à taille, rhodiage, sertissage, nettoyage à vie, coffret) (preuve : /pages/engagement-rings-in-dover-nh).
4. **Livraison gratuite** et « no sales tax » mis en avant (preuve : /pages/policies).
5. **Page dédiée à la transformation de bijoux de famille** avec cas d'usage listés (preuve : /pages/heirloom-jewelry-redesign-in-dover-nh).
6. **Rapidité du visuel** : l'image principale d'une fiche produit apparaît en 1,3 s (iPhone émulé) à 2,2 s (ordinateur) (voir mesures ci-dessous).

## Défauts observés

- **Aucun configurateur** : pas de choix de métal, de forme, de carat, de taille ni de gravure en ligne ; le sur mesure exige un rendez-vous [V].
- **Pas de prix du sur mesure** et prix du catalogue souvent **sans la pierre centrale** (« center stone sold separately ») [V].
- **Pas de 3D ni d'AR en ligne** malgré le discours sur la CAO : la 3D n'est montrée qu'en rendez-vous [V : les pages ne proposent aucun lecteur 3D].
- **Contradiction livraison** : « Shipping calculated at checkout » alors que « Shipping is free » [V].
- **Incohérences de retours** : 15 jours en boutique, 30 jours en ligne, 5 % de frais de restockage ; commandes sur mesure non reprises, sans exception ni détail [V].
- **Compte du filtre disponibilité** : 51 + 21 = 72 pour « 68 products » [V, cause non expliquée].
- **Bouton « Special Order »** à la place d'un ajout au panier standard : la vente en ligne d'un produit sur commande ne dit pas son délai sur la fiche [V].
- **Avis** : deux citations seulement, pas d'avis vérifiables [V].

## Limites de l'audit

- **Ajout au panier non testé** : le bouton envoie vers `/cart/add`, INTERDIT par le robots.txt du site. Récapitulatif de panier, frais, délai et moyens de paiement du panier rempli non vus ; seul le panier vide a été lu.
- **Tri non testé** (`sort_by` interdit) ; filtre de disponibilité et pagination non actionnés ; un seul filtre de prix testé.
- **Formulaires, newsletter, compte, recherche** non utilisés (règle).
- **Page « The Bench »**, blog, certificats et service de réparation non lus.
- Seules deux fiches produits ont été lues (Aurora, semi-monture Artcarved) ; les options de variantes (taille, métal) des autres fiches ne sont pas connues.
- Mesures du visuel principal : une seule mesure par appareil, à froid, par Chromium via un proxy ; indicatives.
- À l'ouverture d'une fiche, la page appelle d'elle-même des scripts de checkout de Shopify (préchargement) ; aucun écart au robots.txt (règle : les requêtes faites à l'ouverture ne comptent pas).
- Une capture de contrôle (20 au plus) est conservée hors dépôt.

## Mesures du visuel principal (fiche Aurora Engagement Ring)

| Appareil | DOM prêt | Première image principale chargée |
| --- | --- | --- |
| Ordinateur 1366 x 900 | 1,8 s | 2,2 s |
| iPhone 13 (émulé) | 1,1 s | 1,3 s |

Fiche Artcarved Sapphire Semi-Mount (ordinateur) : DOM 1,7 s, image 2,0 s. [V, mesures de l'auditeur du 25/11]

## Sources

Pages lues le 25/11/2026 (robots.txt : AUTORISÉ pour toutes) :
- https://jewelrycreationsinc.com/robots.txt (Shopify ; `Disallow: /cart/`, `/collections/*sort_by*`)
- https://jewelrycreationsinc.com/pages/custom-engagement-rings-in-dover-nh
- https://jewelrycreationsinc.com/pages/custom-jewelry-design-process
- https://jewelrycreationsinc.com/pages/custom-jewelry-design-faq
- https://jewelrycreationsinc.com/pages/heirloom-jewelry-redesign-in-dover-nh
- https://jewelrycreationsinc.com/pages/engagement-rings-in-dover-nh
- https://jewelrycreationsinc.com/pages/antwerp-diamond-buying
- https://jewelrycreationsinc.com/pages/policies
- https://jewelrycreationsinc.com/policies/refund-policy
- https://jewelrycreationsinc.com/policies/shipping-policy
- https://jewelrycreationsinc.com/collections/engagement-rings (et `?filter.v.price.gte=3000`)
- https://jewelrycreationsinc.com/products/aurora-engagement-ring
- https://jewelrycreationsinc.com/products/sapphire-semi-mount
- https://jewelrycreationsinc.com/cart (vide)
- Inventaire : docs/concurrence/audit/us/new-hampshire/INVENTAIRE.md (fiche 6)
