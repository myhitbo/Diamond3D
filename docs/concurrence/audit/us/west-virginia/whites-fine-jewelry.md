# Audit : White's Fine Jewelry (White Hall, Virginie-Occidentale)

- **Site** : White's Fine Jewelry, https://whitesfinejewelry.com/ (Shopify)
- **Page de départ** : https://whitesfinejewelry.com/collections/engagement-rings
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Pas de configurateur : catalogue de 38 bagues de fiançailles (Shopify). Le bouton « Add to Bag » n'a pas été actionné (il appelle `/cart/add`, interdit par robots.txt) ; les filtres de la liste n'ont pas pu être actionnés.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| Liste « Engagement Rings » (38 résultats) | Filtres : Type de produit (Ring), Prix (curseur 0-6 130 $), Marque (Midwest Diamond Distributors, OSTBYE, SDC Creations, Victor Corp., White's Fine Jewelry - Stewart), Métal (10 k, 14 k, …) ; tri ; bouton « Show more » (charge la suite) [V] |
| Fiche produit | Galerie (2 vignettes sur l'exemple), prix, financement Affirm, quantité, « Add to Bag », « Ask An Expert », suggestions « You may also like » (10) [V] |
| Panier | `/cart` : « Your bag is currently empty » (page lisible, autorisée) [V] |
| Pas d'étapes de personnalisation | aucune sélection de métal, de pierre, de taille de doigt ni de gravure sur la fiche testée [V] |

## Contrôles vérifiés

Relevé automatique : 123 contrôles (ordinateur), 114 (iPhone) sur la liste ; 10 propres à la fiche exemple (`14k-yg-lab-dia-ring-with-cert-8`).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Recherche (`q`) | champ | Non utilisé (`/search?q=` autorisé, mais aucun besoin) | | non testé |
| Shopping Bag 0 | lien | Mène à `/cart` : panier vide, lisible [V] | | OK |
| Wishlist `/pages/wish-list`, Sign In, Create an account | liens | Compte interdit (`/account` Disallow) : non ouverts | | non testé : interdit |
| Menu : Engagement & Wedding, Fine Jewelry, Fashion Jewelry & Gifts, Education, About Us, Services, Financing, Clearance | liens | Navigation ; Education et Financing lues : pages **vides** (titre seul) [V] | | 2 pages vides |
| Filtre Prix (deux champs + curseurs, « Apply ») | formulaire | Non actionné : l'URL produite `filter.v.price.gte=…&filter.v.price.lte=…` est interdite (`Disallow: /collections/*filter*&*filter*`) | | non testé : interdit |
| Filtres Marque, Type, Métal (cases) | cases | Panneau latéral replié sous « Refine by » ; clic sur « OSTBYE » sans effet (le bouton de panneau n'a pas été trouvé) ; en ouvrant directement `?filter.p.vendor=OSTBYE` (autorisé) : **2 résultats** [V] | | partiellement vérifié |
| Tri (9 options : Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant, prix décroissant, date croissante, date décroissante) | liste | Non actionné : `sort_by` interdit | | non testé : interdit |
| « Show more » | bouton | Présent après 24 fiches ; non actionné | | non testé |
| Carte produit (38) | lien | Ouvre la fiche [V] | affiche le prix, ou « Call for Price » | OK |
| Fiche : vignettes galerie (role option, 2) | bouton | Image principale en 1,3 à 1,6 s ; zoom via lien vers le png [V] | | OK |
| Fiche : « See if you qualify » (Affirm) | lien | Ouvre une modale Affirm : non ouverte (domaine tiers) | « 0 % APR ou à partir de 140 $/mois » (prix de l'exemple 4 325 $) | non testé |
| Fiche : champ « Quantity » (+/−) | champ | Présent, valeur 1 [V] | | non actionné |
| Fiche : « Add to Bag » | bouton | **Non cliqué** : `/cart/add` interdit par robots.txt (« panier interdit par robots.txt ») | | non testé : interdit |
| Fiche : « Ask An Expert » | lien | Non ouvert (formulaire) | | non testé |
| Fiche : « You may also like » | carrousel | 10 suggestions avec prix [V] | | OK |
| Pied de page : téléphone (304) 366-7999, e-mail WFJ@whitesfinejewelry.com, Facebook, Twitter, Instagram | liens | `tel:`, `mailto:`, réseaux [V] | | non suivis |
| Newsletter (e-mail, Submit) | formulaire | Non rempli | | non testé |
| Bandeau cookies « ACCEPT ✔ » | lien | Acceptation par défaut (« allow all cookies ») [V] | | OK |
| Menu d'accessibilité (bouton rond) | bouton | Présent ; non ouvert [V] | | non testé |
| Widget de chat (« Hi there! Have a question? ») | bouton | Bulle visible ; non ouverte [V capture] | | non testé |
| Pied de page : Our Team, Store Location, Testimonials, FAQ, Education, Contact Us, Privacy, Terms, Shipping, Refund, CCPA | liens | FAQ, Shipping, Refund lues [V] ; les autres non suivis | | partiel |

## Options disponibles

- **Métal** : indiqué dans le titre (14K YG, 14KWG, 14K) ; filtre Métal 10 Karat, 14 Karat [V]. Pas de choix de métal par fiche.
- **Forme de pierre** : non filtrable ; visible sur les photos (ovale, marquise, radiant, émeraude, coussin) [V capture].
- **Origine** : presque tout le catalogue de bagues de fiançailles est en diamant de laboratoire (« LAB-GROWN », « LAB DIA », « LG DIA ») ; certificat indiqué dans le titre (« WITH CERT ») [V].
- **Taille de doigt, gravure** : aucune option en ligne ; la politique de livraison indique que la taille standard est 7 (femme) et 10 (homme), les autres tailles ajoutent des frais et du délai [V].
- **Carat** : dans le titre (« 3 3/8 CTW ») ; aucun curseur [V].
- Marques : SDC Creations, Ostbye, Victor Corp., Midwest Diamond Distributors, atelier White's [V].

## Prix, délais, retours, garanties

- **Prix** : affiché en liste et sur la fiche, de 1 749 $ à 5 997 $ sur la première page ; « Call for Price » pour certaines ; aucune décomposition [V].
- **Financement** : Affirm, 0 % APR ou dès 140 $/mois sur l'exemple [V] ; page Financing vide [V].
- **Délai** : « Availability: In Stock » ; politique : articles en stock expédiés dès localisation ; bagues à ajuster ou commandes spéciales : délai supplémentaire non chiffré [V].
- **Livraison** : États-Unis seulement, adresse physique, signature requise, e-mail de suivi à l'expédition ; frais et délais non affichés avant le paiement (non atteint) [V, /policies/shipping-policy].
- **Retours** : crédit ou échange seulement, 15 jours après livraison, facture, certificat et emballage d'origine ; articles ajustés, gravés, sur mesure ou spéciaux non repris ; crédit sous 3 semaines ; retour assuré aux frais du client [V, /policies/refund-policy].
- **Garantie** : aucune garantie propre annoncée sur les fiches lues [V].
- **Panier** : vide, non atteint avec un article : récapitulatif, frais, moyens de paiement non vus.

## Confiance et service

- Magasin : 2600 Middletown Commons Suite 141, White Hall, WV 26554 ; lun-ven 10-18 h, sam 10-16 h ; dimanche fermé ; « Independently owned and operated since 1998 » [V].
- FAQ : gemmologues sur place ; taxes d'État et locales ; pas d'expédition internationale [V].
- Pas d'avis clients sur la fiche testée ; page Testimonials non lue [V].
- Langues : anglais ; devise : dollar [V].
- Preuves de fabrication : aucune ; produits issus de fournisseurs (photos de catalogue) [V].

## Points forts à retenir pour JR Diamond

1. **Photo principale rapide** : 1,3 à 1,6 s (ordinateur et iPhone) pour la fiche et la liste [V : mesure `whites/pdp.cjs`].
2. **Mention « WITH CERT » et « LAB-GROWN » dès le titre** : l'origine et le certificat sont lisibles en liste [V].
3. **Prix avec mensualité Affirm sur la fiche** (« 0 % APR or as low as $140/mo ») [V].
4. **Politique de retour datée et lisible**, avec exclusion explicite du sur mesure [V].
5. **Filtre Marque autorisé par URL** (`?filter.p.vendor=OSTBYE` : 2 résultats) [V].

## Défauts observés

- Titres de produits internes et répétés (« 14K YG LAB DIA RING WITH CERT » ×11) : impossible de distinguer les bagues sans la photo [V].
- Pas de personnalisation : ni métal, ni taille, ni gravure [V].
- Pages Financing et Education vides [V].
- « Call for Price » sur au moins une bague [V].
- Chargement paresseux : cases d'images en attente (cercle de chargement) au bas de la liste après plusieurs secondes sur capture [V capture].
- Bandeau cookies « allow all cookies » préchargé sans refus possible [V].
- Pas d'avis ni de preuve d'atelier sur les fiches [V].

## Limites de l'audit

- Aucun article ajouté au panier : le clic sur « Add to Bag » appelle `/cart/add(.js)`, interdit ; récapitulatif, frais, délai et moyens de paiement du panier non vus. La page `/cart` (vide) a été lue.
- Filtres Prix et tri : URL interdites par robots.txt, donc non actionnés ; filtre Marque vérifié par URL seulement.
- Affirm, chat, « Ask An Expert », newsletter, compte : non ouverts.
- Une seule fiche lue en détail ; 38 bagues listées. Pas de test de 3D, vidéo, 360 ou essayage (non présents sur la fiche).
- Le panneau de filtres sur ordinateur est replié ; mon clic n'a pas ouvert le panneau.

## Sources

- https://whitesfinejewelry.com/collections/engagement-rings [V]
- https://whitesfinejewelry.com/collections/engagement-rings/products/14k-yg-lab-dia-ring-with-cert-8 [V]
- https://whitesfinejewelry.com/collections/engagement-rings?filter.p.vendor=OSTBYE [V]
- https://whitesfinejewelry.com/policies/refund-policy, /policies/shipping-policy, /pages/faq-s, /pages/financing, /pages/education, /cart [V]
- robots.txt de whitesfinejewelry.com [V, via robots.cjs]
- Captures et scripts : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/whites/
