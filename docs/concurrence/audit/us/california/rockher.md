# Audit RockHer

- **Site** : RockHer (Los Angeles, Californie) — https://www.rockher.com
- **Page de départ** : https://www.rockher.com/pages/design-your-own-engagement-ring (page éditoriale, pas un configurateur) ; parcours réel audité : https://www.rockher.com/collections/build-an-engagement-ring puis la fiche `/collections/build-an-engagement-ring/products/agnes-oval-bezel-solitaire-engagement-ring-setting-in-18k-yellow-gold`
- **Date** : 15/11/2026 (date fixée par la consigne ; horloge de la machine d'audit : 24/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; Chromium en affichage iPhone 13 (Playwright). Aucun appareil réel.
- **Statut** : **partiel**. `robots.txt` interdit `/apps/` (recherche de diamants), `/cart`, `/collections/*filter*` et `/collections/*sort_by*`. Donc : étape « diamant » non visitée, panier non atteint, filtres et tri de la collection non actionnés (seul le tiroir « Refine » a été ouvert et lu).

Convention : **[V]** vérifié (page lue ou contrôle actionné, adresse citée), **[I]** inféré, **[S]** supposé. Chiffres cités tels qu'affichés.

## Parcours

| Étape | Options observées | Source |
|---|---|---|
| 0. Page « Design your own » | 3 voies : (1) catalogue de plus de 200 modèles, diamant + monture ; (2) photo envoyée par e-mail à un gemmologue, devis « à un prix juste », sans frais de conception ; (3) création sur mesure avec frais de conception séparés (croquis, 3 CAO, 3 retouches, modèle en résine envoyé pour l'essayer) [V] | `/pages/design-your-own-engagement-ring`, `/pages/custom-engagement-rings` |
| 1. Monture | collection de 2 932 montures [V] ; fiche : métal, forme de pierre centrale, taille (« Find My Size ») | `/collections/build-an-engagement-ring` |
| 2. Diamant | bouton « Choose your center diamond » (non cliqué : cible attendue `/apps/diamondsearch`, interdite ; fil d'Ariane « 1 SETTING / 2 DIAMOND ») [V pour le fil, I pour la cible du bouton] | fiche produit |
| 3. Panier | non atteint (`/cart` interdit) | — |

Le site recommande de choisir le diamant d'abord, mais accepte les deux ordres [V : « Choose the diamond first… If you fell for a setting first, that works too »].

## Contrôles vérifiés

Décompte des contrôles visibles : page de départ 110 (ordinateur) et 49 (iPhone) ; collection 216 ; fiche produit 157. L'en-tête, le pied de page et le méga-menu (environ 50 liens) ne sont pas répétés ci-dessous.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| ENGAGEMENT RINGS / DIAMONDS / WEDDING / FINE JEWELRY / ABOUT / EDUCATION / BLOG | liens de menu | navigation | — | cibles lues, non suivies une à une |
| Search (champ `q`) | recherche | `/search` interdit | — | non testé (robots) |
| Wishlist / Your atelier | liens | liste de favoris, connexion client | — | non testés (compte) |
| Cart, 0 items | lien | `/cart` interdit | — | non testé (robots) |
| Book an appointment / Virtual Appointment | lien externe | ouvre Calendly (« jewelry-review-w-john ») | — | cible lue, non ouvert (service tiers) |
| (800) 779-1726 | lien `tel:` | appel | — | cible lue |
| START WITH A DIAMOND | lien | `/apps/diamondsearch` | — | interdit |
| START WITH A SETTING / DESIGN YOUR RING | liens | collection des montures | — | OK |
| ROSI™ Score Report | lien | page du score de diamant maison | — | cible lue |
| EMAIL JOHN A PHOTO | lien `mailto:` | e-mail pré-rempli « My ring idea » | — | cible lue |
| Chat with ROSI™ 24/7 / Ask ROSI | bouton | assistant IA : 4 amorces (« Lab diamonds under $3k », « Find a 2ct round diamond », « Your best emerald cut », « Lab vs natural… »), saisie libre, pièce jointe d'image | — | non ouvert (consigne : pas de chat) |
| Collection : FILTERS | bouton | tiroir « Refine » : forme (Round 695, Oval 344, Cushion 357, Princess 371, Pear 199, Emerald 271, Marquise 186, Asscher 146, Radiant 179, Heart 119, plus 10 formes rares à 3 modèles), couleur de métal (18K blanc 735, 18K jaune 755, 14K rose 738, 18K rose 1, platine), style, serti, largeur ; bouton « SHOW 2932 SETTINGS » | — | **ouvert et lu** ; cases non cochées (`/collections/*filter*` interdit) |
| Collection : SORT: FEATURED | bouton | options « Featured », « Price · Low to High », « Price · High to Low » | — | liste lue ; non actionné (`sort_by` interdit) |
| Gallery view 3 / Compact view 4 | boutons | passage de 3 à 4 colonnes | — | OK sur ordinateur ; clic échoué en iPhone (cause non établie) |
| LOAD MORE | bouton | 28 modèles au départ ; aucun ajout mesuré après le clic (2,5 s) | — | **sans effet dans mon test** (peut venir de l'automate) |
| Cœur « Save … to wishlist » | bouton | favoris | — | non testé (compte probable) |
| Carte monture | lien | fiche produit ; prix « From $2,140 · Setting » | dès 2 140 $ | OK |
| START A CUSTOM DESIGN | lien | `/pages/custom-engagement-rings` | — | cible lue |
| Fiche : 18K WHITE / 18K YELLOW / PLATINUM | liens | chaque métal est une **autre fiche produit** (URL distincte) | un prix par fiche | liens lus, non suivis |
| Fiche : Round, Oval, Cushion, Princess, Pear, Emerald, Marquise, Asscher, Radiant, Heart | liens | une fiche produit par forme de pierre | idem | lus |
| Fiche : « + 10 more » | bouton | déplie 10 formes de plus : Tapered Baguette, Trillion, Old European, Briolette, Rose Cut, Step, Hexagon, Shield, Kite, Half Moon | — | **OK** |
| Find My Size | lien | guide des tailles `/pages/ring-sizing-guide` ; la page de départ mentionne aussi un « virtual ring sizer » | — | cible lue |
| Try On | bouton | modale « Powered by Camweara » : demande la caméra (essayage virtuel) | — | s'ouvre ; caméra indisponible en test, essayage non vérifié |
| Galerie : Load image 1 à 6, Slide left/right | boutons | 6 vignettes ; 4 vidéos d'atelier dans la section « How it's made » | — | vignette 6 : OK ; flèches : clics échoués (cause non établie) |
| CHOOSE YOUR CENTER DIAMOND | bouton de formulaire vers `/cart/add` | cible attendue : recherche de diamant | — | **non cliqué** (chemins `/cart` et `/apps/` interdits) |
| Terms (cadeau « jewelry case ») | bouton | modale : étui offert pour un achat avant le 31/12/2026 ; remboursement conditionné au retour de l'étui | — | OK, lu |
| More details (cadeau « pearl studs ») | bouton | clous de perles 14 k offerts dès 6 000 $ avant le 31/12/2026 | — | OK, lu |
| Onglets HOW IT'S MADE / SPECIFICATIONS / CARE & WARRANTY / WHAT COMES WITH YOUR RING / SHIPPING & RETURNS | onglets | contenu relevé dans le HTML de la page ; le clic automatique n'a pas donné de panneau lisible | — | contenu **vérifié** par lecture, clic **non vérifié** |
| FAQ (5 questions : prix et diamant, délai, métaux, retour, bague assortie) | accordéons | réponses lues | — | OK |
| WRITE A REVIEW / Reviews0 / tri / filtre étoiles / With media | boutons, listes | avis du produit : 0 | — | non testés (formulaire) |
| ROSI™ STYLEMATCH (SEE HER RING) | lien | envoi de photos de la destinataire pour obtenir une bague suggérée | — | non testé (envoi de photos) |
| VIEW OVAL DIAMONDS SCORED 90+ | lien | `/apps/diamondsearch/oval-cut?rosi=90` | — | interdit |
| Read the reviews | lien | Trustpilot (4,9 sur 237 avis) | — | cible lue |

## Options disponibles

- **Métaux** : 18 k blanc, 18 k jaune, 18 k rose, 14 k rose, platine 950 [V : tiroir « Refine »]. La fiche examinée propose 18 k blanc, 18 k jaune, platine (3 liens) ; la FAQ parle de quatre métaux (platine, 18 k blanc, jaune, rose) [V]. Pas d'or 14 k blanc ni jaune dans les filtres [V].
- **Formes de pierre** : 10 courantes + 10 rares (liste ci-dessus) [V].
- **Styles** : Petite, Halo, Classic, Solitaire, Modern, Vintage inspired, Pavé, Prong, Side stone, Bezel, Channel, Unique [V, tiroir].
- **Diamants** : naturels (rapport GIA) et de laboratoire (rapport IGI) [V : « Every center diamond arrives with its GIA or IGI grading report »] ; recherche non visitée.
- **Gravure** : « Engraved pieces are returnable on the same terms » ; aucune option de gravure vue sur la fiche monture [V pour le texte, I pour l'absence].
- **Taille de doigt** : choisie plus tard ; une remise à taille gratuite sous 60 jours [V].
- **Sur mesure** : croquis, 3 CAO, modèle en résine ; frais de conception de 1 000 $ non remboursables, cités dans la politique de retour [V].

## Prix, délais, retours, garanties

- **Prix affiché** : sur la fiche, « $2,140 Setting only · 18K Yellow Gold ». Le diamant est choisi ensuite et « carries its own single price from our live inventory ; the finished ring is the sum of the two » [V]. Montures : 1 310 $ à 9 480 $, la plupart entre 2 100 $ et 5 400 $ [V : `/pages/design-your-own-engagement-ring`]. Affichage « One fair price », sans code ni prix barré [V].
- **Décomposition** : monture + diamant seulement ; pas de ligne pour le métal, la main-d'œuvre ou la marge [V par absence].
- **Délai** : 8 à 12 jours ouvrés après approbation écrite, puis envoi assuré ; sur mesure : environ 2 semaines de conception en plus [V].
- **Retours** : 40 jours. La page de politique dit que le délai court depuis la **date de commande**, la page « How we make » dit « 40 days from delivery » : **contradiction** [V]. Annulation remboursée à tout stade. Vente finale : pièces personnalisées, alliance contournée sur une bague précise, éternité complète, création unique confirmée par écrit, frais de conception de 1 000 $ [V : `/pages/return-policy`].
- **Remboursement** : au mode de paiement d'origine sous 5 jours ouvrés après inspection ; au-delà de 25 000 $, hors virement, remboursement à 94 % [V].
- **Garantie** : à vie contre les défauts de fabrication, par écrit ; une remise à taille gratuite sous 60 jours (États-Unis), jusqu'à 1,5 taille ; inspection gratuite à un an ; entretien payant [V : `/pages/warranty`, fiche produit].
- **Livraison** : FedEx Priority Overnight assurée, signature, gratuite aux États-Unis ; monde entier, droits et taxes à la charge du client et non calculés au paiement ; coursier blindé au-delà de 100 000 $ [V].
- **Paiement annoncé** (hors panier) : Visa, Mastercard, American Express ; Apple Pay, Google Pay, Amazon Pay, Venmo, PayPal ; Affirm 0 % TAEG sur 3, 6 ou 12 mois « for qualifying clients » ; virement obligatoire à partir de 40 000 $ [V : `/pages/shipping-payment`].

## Confiance et service

- **Preuves de fabrication** : 4 vidéos d'atelier sur la fiche (CAO, résine, fonte à cire perdue, sertissage) et la page « How we make » ; bague « signed RH inside the shank » [V]. Suivi : « Tracking is provided » à l'expédition [V]. Pas de photo ni vidéo de la bague du client avant envoi relevée [I].
- **Certificats** : GIA (naturel), IGI (laboratoire) ; « the certificate number is shown on the diamond's listing before you order » ; estimation d'assurance écrite livrée avec la bague [V].
- **Libellé du synthétique** : « lab-grown », « lab diamond » ; « Both are real diamonds » [V].
- **Langues, devise** : anglais, dollar américain ; aucun sélecteur vu [V].
- **Avis** : Trustpilot 4,9 sur 237 avis (note de toute la boutique) [V]. Pages `/pages/reviews` et témoignages existent ; contenu non lu.
- **Service** : téléphone, rendez-vous vidéo (Calendly), chat IA « ROSI » 24 h/24, e-mail, essayage virtuel, guide des tailles [V].
- **Score maison ROSI™** : note d'un diamant sur 3 critères, « 90+ » recommandé ; méthode non lue [V pour l'affichage, S pour la fiabilité].
- **Offres saisonnières** : étui offert, clous de perles dès 6 000 $, jusqu'au 31/12/2026 [V].

## Points forts à retenir pour JR Diamond

1. **Prix de monture affiché dès la carte et la fiche**, avec la règle « monture + diamant, rien d'autre » et la phrase « no codes, no countdowns, no second number crossed out » (`/pages/design-your-own-engagement-ring`). Répond à la méfiance sur les prix.
2. **Vidéos d'atelier sur chaque fiche** : 4 éléments `<video>` détectés (CAO, résine, fonte, sertissage). Très proche de « on voit naître son bijou ».
3. **Page de process « made to order »** : modèle 3D reconstruit aux mesures du certificat, résine, cire perdue (`/pages/how-we-make-your-ring-to-order`). Argument de provenance clair.
4. **Fenêtre de retour de 40 jours détaillée** (« the window opens the day you place the order… ») avec exclusions listées une à une (`/pages/return-policy`). Rassurant malgré le sur mesure.
5. **Numéro de certificat visible avant l'achat** : une réponse à la peur de l'échange de pierre.
6. **Modèle en résine envoyé à porter avant la fonte** (offre sur mesure) : preuve physique à étudier avec l'atelier de Ramat Gan.

## Défauts observés

- Le « design your own » est un **catalogue de 2 932 montures prédéfinies** en images fixes ; pas de 3D de la bague configurée (0 `model-viewer` détecté) [V].
- La fiche **ne donne pas de prix final** : le total n'apparaît qu'après la recherche de diamants (hors audit) [V pour la fiche].
- **Contradiction** entre pages sur le départ des 40 jours [V].
- Droits de douane « not calculated at checkout » : coût final incertain hors États-Unis [V]. Point à noter pour un export vers la France.
- Clics sans effet en test : « LOAD MORE », flèches de galerie, boutons de vue en iPhone [V comme observation, cause non établie].
- Étui offert : remboursement conditionné au retour de l'étui [V].

## Limites de l'audit

- Pas de recherche de diamants, pas de panier, pas de paiement (robots.txt).
- Pas d'essai du chat ROSI, de StyleMatch ni du rendez-vous (consigne).
- Essayage virtuel : modale lue, caméra non accordée dans le navigateur de test.
- Mesure : une seule passe à froid, sans limitation de réseau, depuis un serveur cloud. Plus grande peinture (LCP) : page de départ 0,67 s ordinateur / 1,28 s iPhone (un titre) ; collection 1,10 s (image) / 1,64 s (titre) ; fiche 0,78 s / 0,85 s (image d'atelier, **pas** la photo de la bague) [V]. L'apparition de la photo principale de la galerie n'est donc pas isolée.
- Un seul modèle de fiche (Agnes ovale 18 k jaune) examiné ; prix des autres métaux non relevés.
- Onglets de la fiche : contenu lu dans le HTML, pas via un clic réussi.

## Sources

- https://www.rockher.com/pages/design-your-own-engagement-ring
- https://www.rockher.com/collections/build-an-engagement-ring
- https://www.rockher.com/collections/build-an-engagement-ring/products/agnes-oval-bezel-solitaire-engagement-ring-setting-in-18k-yellow-gold
- https://www.rockher.com/pages/custom-engagement-rings
- https://www.rockher.com/pages/how-we-make-your-ring-to-order
- https://www.rockher.com/pages/return-policy
- https://www.rockher.com/pages/shipping-payment
- https://www.rockher.com/pages/warranty
- https://www.rockher.com/robots.txt (règles `/apps/`, `/cart`, `/collections/*filter*`, `/collections/*sort_by*`)
- Fichiers de travail (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/rockher/`
