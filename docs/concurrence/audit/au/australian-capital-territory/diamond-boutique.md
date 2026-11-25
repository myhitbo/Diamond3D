# Audit : Diamond Boutique (Braddon, Canberra)

- **Site** : Diamond Boutique, https://diamondboutique.com.au (WordPress)
- **Page de départ** : https://diamondboutique.com.au/engagement-rings/
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366x900 et affichage iPhone 13
- **Statut** : **partiel**. Pas de configurateur : catalogue de bagues en stock (3 bagues de fiançailles). Filtres actionnés en partie ; paiement non ouvert.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Liste /engagement-rings/ | Filtres métal et forme, tri par prix ; 3 bagues |
| 2. Fiche (même adresse avec ?item_sku=…) | Fiche technique, ajout au sac, liste d'envies, « Drop someone a hint », partage, onglets Livraison / Guide des tailles / Assurance |
| 3. Sac (volet latéral) | Quantité, supprimer, « Update Bag », « Proceed to checkout » (non cliqué) |
| Autres voies | Rendez-vous, bijou sur mesure, CAO, remodelage (page Services), « Text Us » |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Metal Type | liste : All, 18k jaune, rose, blanc, deux tons, platine | Liste lue ; sélection non confirmée | n/a | liste OK, effet non testé |
| Stone Shape | liste : All, Round, Princess, Pear, Oval | Clic de souris sur l'option : la liste est passée à « Trilogy Ring » seul [V] ; forme non vérifiée sur la fiche | n/a | OK |
| Sort by: Price | liste : bas vers haut, haut vers bas | Liste lue ; tri non testé | n/a | liste OK |
| Cartes produit (3) | liens ?item_sku=… | Ouvrent la fiche ; une est « Out of stock » (Double Halo) | 6 490 $ ; 9 990 $ ; 5 999 $ | OK |
| Fiche : caractéristiques | texte | Style, serti, poids de pierre 0,59, pureté SI1, couleur G, forme ovale, platine 4,6 g, naturel, taille J,5, certificat GIA nommé et numéroté [V] | 6 490 $ | OK |
| Add to bag | bouton | Volet « Shopping Bag » : « Item has been added », bague, quantité 1, total 6 490 $ ; deux appels POST admin-ajax.php (autorisés par robots.txt) | 6 490 $ | OK |
| Proceed to checkout | bouton | Non cliqué (paiement) | n/a | non testé |
| Champ « custom size or order note » | zone de texte | Présente dans la fiche ; non remplie | n/a | non testé |
| Add to Wishlist | bouton | Non cliqué (compte) | n/a | non testé |
| Drop someone a hint | bouton | Non cliqué (formulaire) | n/a | non testé |
| Share via | icônes | Non cliquées | n/a | non testé |
| Zip (« Own it now ») | paiement différé | Visible dans le volet ; détails non lus | n/a | visible |
| Onglet Shipping & Delivery | accordéon | Australie seulement, pas d'international ; 5-10 jours standard, 1-5 Express (texte « covid-19 ») [V] | n/a | OK |
| Onglet Size Guide | accordéon | Renvoie à un guide et au téléphone | n/a | OK |
| Onglet Insurance | accordéon | Assuré en transit si envoi premium | n/a | OK |
| Text Us / bulle d'accueil | chat SMS | Non ouvert | n/a | non testé |
| Book an appointment, Services, Valuations | liens | Pages non explorées en détail | n/a | liens OK |
| Abonnement e-mail | champ | Non rempli | n/a | non testé |
| Flux Instagram (9 vignettes, 5 « play video ») | grille | Photos et vidéos d'atelier et de pierres ; non lues | n/a | visible |
| Bandeau de promo | texte | 10 % sur les alliances pour une story d'annonce taguée | n/a | lu |

Mobile : 32 contrôles (64 sur ordinateur), menu replié ; parcours d'achat non rejoué en mobile.

## Options disponibles

- **Métal** : or 18 k jaune, rose, blanc, deux tons ; platine.
- **Forme de pierre** (filtre) : ronde, princesse, poire, ovale.
- **Tri** : prix croissant ou décroissant.
- **Fiche** : aucune option de configuration (pièce unique, taille donnée : J,5) ; une zone de texte permet de demander une autre taille ou une note.
- **Services** (page) : sur mesure, CAO, remodelage, polissage et réparation, rachat d'or, valuations, assurance Q Report, atelier à vivre.

## Prix, délais, retours, garanties

- **Prix** : prix unique par bague (6 490 $ platine/0,59 ct G SI1 naturel) ; aucune décomposition ; « prix indicatif, sujet à changement sans préavis » [V].
- **Livraison** : Australie seulement. Standard 7 jours ouvrés (texte principal) ou 5-10 jours ; Express 1-3 ou 1-5 jours : la page contient les deux versions, dont une liée au covid [V]. Frais non affichés avant le paiement (non ouvert).
- **Sur mesure** : « jusqu'à 90 jours ouvrés » de production [V].
- **Retours** : échange ou avoir sous 30 jours « pour changement d'avis » ; avis par e-mail sous 7 jours ; remboursement complet si défaut. **Exclus** : sur mesure, commande spéciale, bijoux modifiés, soldes, boucles d'oreilles [V].
- **Paiement** : carte, virement bancaire (annulation si non reçu sous 7 jours bancaires) [V] ; Zip visible.
- **Garantie** : garantie à vie sur les bijoux fabriqués par la maison (défauts de matière et de façon) ; 12 mois sur le détail ; droits du droit de la consommation australien rappelés [V].

## Confiance et service

- Boutique physique : Shop 141 Mode3, 24 Lonsdale St, Braddon ACT 2612 ; tél. (02) 6249 6997 ; shop@diamondboutique.com.au [V].
- Certificat GIA nommé sur la fiche vue, avec numéro [V] ; libellé « Natural / Laboratory » dans la fiche : le terme pour le synthétique est « Laboratory » [V].
- Langue : anglais ; devise : dollar (australien présumé, symbole $) [I].
- Avis clients : aucun vu. Prix de récompenses, équipe et histoire : pages non lues.
- Preuves de fabrication : flux Instagram avec photos et vidéos d'atelier ; aucun suivi de commande [V pour la présence, contenu non détaillé].
- Chat SMS « Text Us » avec photo de la conseillère [V].

## Points forts à retenir pour JR Diamond

1. **Fiche technique complète, certificat GIA numéroté** sur la page du produit (fiche Oval Solitaire).
2. **Poids du métal indiqué (4,6 g)** : transparence que JR Diamond cherche aussi (fiche).
3. **Sac avec récapitulatif immédiat** sur la même page, sans rechargement (volet « Shopping Bag »).
4. **Retour par changement d'avis sous 30 jours** pour les pièces en stock : point de comparaison pour les retours israéliens (page shipping-policy).
5. **Flux Instagram d'atelier** intégré à la liste (9 vignettes dont 5 vidéos).

## Défauts observés

- Pas de configurateur : 3 bagues de fiançailles seulement [V].
- Aucune image principale détectée dans la zone de la fiche après chargement (mesure) ; l'image n'apparaît que dans le volet du sac et dans la liste [I : à revérifier].
- Chargement lent : première image de produit à 7-8 s sur ordinateur, 4 s en mobile [V, 2 mesures].
- Texte légal obsolète (covid-19, « © 2021 ») et deux versions de délais [V].
- Filtres difficiles à actionner (liste peu réactive à un clic standard ; fonctionne au clic de souris) [V].
- Page /cart/ en 404 : le sac est un volet [V].
- Prix « indicatifs », sujets à changement ; pas d'international [V].

## Limites de l'audit

- Le paiement, la zone de saisie du sac, la liste d'envies, « Drop someone a hint », le chat, le formulaire de rendez-vous et l'abonnement ne sont pas actionnés (données personnelles ou paiement).
- Les tris et les filtres métal n'ont pas été vérifiés individuellement ; seul « Round » a été essayé.
- Seules 3 bagues sont listées : le sac n'a été testé qu'avec l'une d'elles ; frais de livraison et moyens de paiement du paiement non vus.
- Mobile : chargement et liste des contrôles seulement.
- Pages Services, Valuations, Our Story non lues en détail.

## Sources

Toutes autorisées par robots.txt (seul /wp-admin/ est interdit, admin-ajax autorisé), lues le 15/11/2026 :
- https://diamondboutique.com.au/engagement-rings/ ; …/engagement-rings/?item_sku=001-001-00057 ; …/shipping-policy/ ; …/our-guarantee/ ; …/cart/ (404)
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/au/diamond-boutique/
