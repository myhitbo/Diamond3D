# Audit : Dianna Rae Jewelry (Lafayette, Louisiane)

| | |
|---|---|
| Site | Dianna Rae Jewelry, 500 Settlers Trace Blvd, Suite 1, Lafayette, LA 70508 : https://diannaraejewelry.com/ |
| Page de départ | https://diannaraejewelry.com/our-process/ (aucun configurateur ; parcours d'achat testé sur https://diannaraejewelry.com/shop/rings/engagement-rings/ et la fiche https://diannaraejewelry.com/product/oval-trilogy-diamond-engagement-ring/) |
| Date | 15/11/2026 |
| Appareils | Chromium 1366 x 900 (ordinateur) et émulation iPhone 13 (Playwright, via le proxy de la machine) |
| Statut | **partiel** : site lisible, mais le panier, le compte, la liste de souhaits et la recherche sont interdits par robots.txt, et la recherche de diamants est une iframe Stuller Showcase interdite aux robots |

Marques : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré, **[S]** supposé. robots.txt lu : `Disallow: /cart/`, `/checkout/`, `/my-account/`, `/search/`, `/wishlist/`, `/?s=`, `/wp-admin/` ; le reste est autorisé aux agents d'IA [V : https://diannaraejewelry.com/robots.txt]. Aucune page n'a été ouverte sur `jewelershowcase.com` (hôte interdit) : les scripts de lecture bloquaient cet hôte, et les pages relevées par controls.cjs ne contenaient pas l'iframe [I].

## Parcours

| Étape | Options |
|---|---|
| 1. Our Process (`/our-process/`) | [V] 4 temps : Inspire, Design, Craft, Complete. Boutons « Schedule a consultation » (`/schedule-appointment/`) et « See our work » (`/gallery/`). Aucun outil en ligne. |
| 2. Catalogue (`/shop/rings/engagement-rings/`) | [V] 49 pièces « Ready to ship or pick up in Lafayette », tri (4 choix), filtres prix (5 tranches), collections (6 cases), « Load more pieces ». |
| 3. Fiche bague | [V] 2 photos, prix, SKU, « Add to Bag », « Inquire About this Piece », financement Affirm, guide des tailles, ramassage gratuit. Pas de choix de métal, de taille ni de gravure sur la fiche. |
| 4. Sur mesure | [V] Page « Our Process » : rendez-vous gratuit, rendu photoréaliste + devis, prototype imprimé en 3D (acompte 150 $), fabrication, sertissage à la main. Tout se fait en rendez-vous, en salle ou à distance. |
| 5. Diamants (`/loose-diamonds/`) | [V] Boutons « Search natural » / « Search lab-grown » ; la recherche est une iframe Stuller Showcase [V : inventaire du même jour, `/lab-grown-diamond-search/`] : non ouverte (interdite). |
| 6. Panier | **Non atteint** : `/cart/` interdit par robots.txt. |

## Contrôles vérifiés

Le relevé automatique (controls.cjs) donne 73 contrôles sur `/our-process/`, 83 sur la fiche (77 en iPhone), 100 sur le catalogue. Les contrôles de navigation (menu SHOP, DESIGN, BRIDAL, GALLERY, SERVICES, ABOUT, COMMUNITY, CONTACT, pied de page) sont des liens vers des pages de contenu, listés et non tous ouverts.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Tri « Featured / Newest / Price: Low to High / Price: High to Low » | liste déroulante (`sort`) | « Low to High » : l'adresse devient `?sort=price-asc`, la liste se réordonne (1 795 $ en tête, puis 2 295 $, 2 995 $…) [V] | trie | fonctionne |
| Filtre prix : 0-1 000, 1 000-3 000, 3 000-5 000, 5 000-10 000, 10 000+ | cases | clic (étiquette) en délai dépassé (3 s) : l'adresse et la liste n'ont pas changé [V] | filtre | **non vérifié** (clic non abouti ; je n'ai pas relancé) |
| Filtre collections (6 cases, sans libellé lisible) | cases | 5 sur 6 masquées au chargement ; clic non abouti [V] | filtre | non vérifié |
| Filtre type : Rings 49, Earrings 0, Bracelets 0, Necklaces 0 | cases | seul « Rings » visible | – | non actionné |
| « Load more pieces » | bouton | passe de 24 à 48 cartes, compteur « 48 of 49 » [V] | – | fonctionne |
| « View gallery » | lien | mène à `/custom-bridal-gallery/` (photos de bagues sur mesure, « Load more photos ») [V] | – | fonctionne (page lue) |
| Fiche : « Photo 1 / Photo 2 » | boutons | clic forcé : délai dépassé ; deux photos statiques (719 x 479 et 649 x 432 px) [V] | – | non vérifié |
| Fiche : « Open photo 1 of 2 » | lien vers l'image | clic forcé : l'adresse ne change pas ; aucune visionneuse détectée en cinq secondes [I : ouverture dans un diaporama non confirmée] | – | non concluant |
| Fiche : « Ring size guide » | bouton | ouvre une fenêtre : tailles US 3 à 11,5, diamètre intérieur (14,1 à 20,6 mm) et circonférence [V] | – | fonctionne (ordinateur et iPhone) |
| Fiche : « See if you qualify » (Affirm) | lien `javascript:void(0)` | non cliqué (service tiers) ; le texte annonce « Starting at $226/mo or 0% APR with Affirm » pour 6 995 $ [V] | mensualité | non testé : service externe |
| Fiche : « View Other Financing Options » | lien | mène à `/special-financing/` (lue) [V] | – | fonctionne |
| Fiche : « Inquire About this Piece » | lien | mène à `/inquire/?piece=29828` (formulaire, non ouvert) | – | non testé : formulaire |
| Fiche : « Add to Bag » / « Add to wishlist » | bouton | **non cliqués** : le panier et la liste de souhaits sont interdits par robots.txt ; l'adresse de l'ajout n'est pas confirmée | – | non testé : interdit |
| « Cart », « View bag », « Checkout », « Wishlist » | liens | non ouverts : interdits | – | non testé : interdit |
| « Search » (loupe) | lien `/?post_type=product&s=` | non ouvert : `/?s=` interdit | – | non testé : interdit |
| « Schedule a consultation » / « Book an appointment » | lien | mène à `/schedule-appointment/` : texte lu, réservation en ligne (« Book Your Visit ») non remplie | – | page lue |
| « Open chat » (iPhone) | bouton | présent dans le menu mobile ; non ouvert (consigne : pas de chat) | – | non testé |
| Téléphone (337) 706-7316, e-mail info@diannaraejewelry.com, adresse | liens `tel:`, `mailto:`, Google Maps | présents ; non suivis | – | non testé |
| Newsletter « Subscribe » | formulaire | non rempli | – | non testé : formulaire |
| Facebook, Instagram, Pinterest, LinkedIn, YouTube | liens | présents, non suivis | – | non testé |
| Recherche de diamants naturels / synthétiques | boutons vers l'iframe Stuller | non ouverts : iframe interdite | prix et filtres de pierres : inconnus | non testé : interdit |

Aucun mode de vue 3D, 360°, vidéo, AR ou « sur la main » n'a été trouvé sur la fiche [V : relevé des contrôles, aucun bouton de ce type].

## Options disponibles

- Métal : pas de choix en ligne. Les fiches affichent un métal par pièce (p. ex. « 18K Yellow Gold », « Two Tone », « White Gold » dans les titres) ; le texte de catégorie annonce or blanc, jaune, rose et platine en sur-mesure [V : `/shop/rings/engagement-rings/`].
- Formes citées : ronde, ovale, coussin, émeraude, poire (texte de catégorie) ; titres : marquise, radiant, coussin allongé [V].
- Naturel ou synthétique : les deux ; chaque fiche indique l'origine dans son descriptif (« Lab-Grown Diamonds: Center: VVS-2 clarity, E color ») [V].
- Pierre unique par fiche (« Only one available »). Pas de sélecteur de carat.
- Taille de doigt : guide US 3 à 11,5 ; aucun champ de choix sur la fiche [V].
- Gravure : gravure à la main et milgrain proposés en sur-mesure ; une bague du catalogue est « with hand engraving » [V].
- Prix du catalogue : de 1 795 $ à 24 995 $ (bague jaune fantaisie) ; 49 pièces [V].

## Prix, délais, retours, garanties

- Prix [V] : un seul prix affiché par bague, sans décomposition (métal, pierre, façon). Le devis sur mesure arrive avec le rendu : « an accurate estimate of the completed project cost » (`/our-process/`). FAQ : le prix dépend du métal, des pierres, du dessin et du travail, sans chiffres.
- Délai [V] : sur mesure « 4 to 6 weeks after all of the details have been finalized », petits travaux 2 à 3 semaines, modèle 3D « within a week » (`/faqs/`). Catalogue : prêt à emporter ou à expédier.
- Retours [V] : 30 jours en l'état pour les articles en stock ; remboursement partiel possible si commande spéciale ou personnalisée (`/faqs/`). Exception « sur mesure » donc mentionnée mais sans pourcentage. Annulation gratuite pendant la conception ; « If you're not in love with any aspect … we will work with you to resolve the issue at no charge ».
- Acompte [V] : 150 $ avant le prototype imprimé en 3D, déduit du prix final.
- Garanties [V] : 1 an sur la fabrication et les matériaux (`/faqs/`) ; plan Jewelers Mutual Care Plan à vie, payant (griffes, mise à taille, rhodiage, polissage, pierres) ; assurance par Jewelers Mutual (`/warranty/`, `/faqs/`).
- Livraison [V] : « anywhere in the continental United States » ; ramassage gratuit à Lafayette. Coût d'expédition et délai : non vus (panier interdit).
- Financement [V] : Wells Fargo, 12 mois sans intérêt dès 480 $ d'achat avec crédit approuvé ; Affirm sur la fiche (`/special-financing/`). Moyens de paiement du panier : non vus.

## Confiance et service

- Atelier visible [V] : « Jewelry Theater » (vitre sur l'atelier), jeweler et sertissage sur place ; « create the majority of our jewelry right here in our workshop » (`/faqs/`). Pas de vidéo d'atelier ni de suivi de commande trouvés [I : absence dans les pages lues].
- Rendu et prototype [V] : rendus photoréalistes (Matrix, CounterSketch), prototype imprimé en 3D aux dimensions réelles avec pierres factices ; galerie de bagues sur mesure (`/custom-bridal-gallery/`).
- Avis [V] : page `/reviews/` avec des témoignages datés (« 3 days ago », « 1 week ago »), sans note globale lue. Badges American Gem Society et Jewelers of America en pied de page.
- Certificats : la fiche lue ne cite aucun laboratoire (GIA, IGI) [V : texte de la fiche Oval Trilogy]. FAQ : fournisseur membre de la DMIA, Kimberley Process, « conflict-free ».
- Libellé du synthétique [V] : « Lab-Grown Diamonds » (fiches, `/loose-diamonds/`), « lab-created » (FAQ) ; texte : « averaging about half the price », mêmes propriétés que le naturel, sources AGS et GIA.
- Langues et devise : anglais seul, dollars [V : aucun sélecteur de langue ni de devise dans les contrôles ; prix en $].
- Service : rendez-vous gratuit (à distance possible), téléphone, texte, e-mail, chat (bouton iPhone), réparation, remontage de bijoux de famille ; or ancien repris en crédit (`/faqs/`). Heures : mardi au vendredi 10 h à 17 h, samedi 10 h à 16 h.

## Points forts à retenir pour JR Diamond

1. **Atelier montré** : vitre sur l'atelier et phrase « who makes your jewelry » en FAQ, mais seulement en salle. Preuve : `/faqs/`, `/our-process/`. JR Diamond peut tenir la même promesse en ligne (photos et vidéos).
2. **Rendu + devis exact avant paiement** : « Can I see my design before I pay? Yes » ; devis joint au rendu. Preuve : `/faqs/`.
3. **Prototype imprimé en 3D contre acompte déductible (150 $)** : réduit la peur d'un bijou différent de la CAO. Preuve : `/our-process/`.
4. **Annulation gratuite pendant la conception** et reprise si insatisfait. Preuve : `/faqs/`.
5. **Guide des tailles en fenêtre**, avec diamètre et circonférence en mm, utilisable sur iPhone. Preuve : contrôle « Ring size guide ».
6. **Financement annoncé sur la fiche** (mensualité calculée sur le prix : 226 $/mois pour 6 995 $). Preuve : fiche Oval Trilogy.
7. **Origine de la pierre dans le descriptif** : couleur et pureté du centre et des accents. Preuve : fiche Oval Trilogy.
8. **Page FAQ complète** (délais, retours, garantie, assurance, expédition, synthétique, conflits). Preuve : `/faqs/`.

## Défauts observés

- Pas de configurateur : métal, taille, pierre, gravure ne se choisissent pas en ligne ; tout passe par un rendez-vous [V].
- Fiche : deux photos fixes, pas de 3D, de vidéo, de 360° ni d'essai ; les boutons de la galerie n'ont pas répondu à mes clics (non concluant).
- Prix sans décomposition ; aucun prix de sur-mesure en ligne [V].
- Aucun laboratoire de certification cité sur la fiche lue [V].
- Pas de langue autre que l'anglais, pas de devise [V].
- Filtre prix du catalogue : clic sans effet dans mon test (non vérifié si le défaut est du site ou du test).

## Limites de l'audit

- Panier, paiement, liste de souhaits, recherche et compte : interdits par robots.txt, non ouverts ; « Add to Bag » non cliqué. Frais de livraison, moyens de paiement et délai du panier : **inconnus**.
- Recherche de diamants (Stuller Showcase) : interdite, non vue ; filtres de taille, couleur, pureté, certificat non vérifiés.
- Une seule fiche a été ouverte et actionnée en détail ; d'autres fiches n'ont pas été comparées.
- Mesure du visuel principal (photo de la fiche Oval Trilogy, depuis la navigation, cache vide) : environ 1,4 s sur ordinateur, 1,0 s en émulation iPhone, une mesure chacune, avec le réseau de la machine d'audit (peu représentatif).
- Pas de formulaire rempli, pas de chat ouvert, pas de compte.

## Sources

- https://diannaraejewelry.com/our-process/ , /faqs/ , /warranty/ , /special-financing/ , /loose-diamonds/ , /reviews/ , /schedule-appointment/ , /custom-design/ , /custom-bridal-gallery/
- https://diannaraejewelry.com/shop/rings/engagement-rings/
- https://diannaraejewelry.com/product/oval-trilogy-diamond-engagement-ring/
- https://diannaraejewelry.com/robots.txt
- Inventaire du même jour : `docs/concurrence/audit/us/louisiana/INVENTAIRE.md` (page `/lab-grown-diamond-search/`, rendu non revu).
- Captures et relevés JSON : dossier de travail `scratchpad/audit/us/dianna-rae-jewelry/` (hors dépôt).
