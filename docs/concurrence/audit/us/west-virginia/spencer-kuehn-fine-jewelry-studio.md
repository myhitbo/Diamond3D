# Audit : Spencer & Kuehn Fine Jewelry Studio (Morgantown, Virginie-Occidentale)

- **Site** : Spencer & Kuehn Fine Jewelry Studio, 716 Venture Drive, Morgantown (WV).
- **Adresse** : https://www.spencerandkuehn.com/ ; page de départ : https://www.spencerandkuehn.com/design/
- **Date de l'audit** : 15/11/2026 (pages relues le 25/11/2026 avec la file d'attente de navigateurs).
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Pas de configurateur ; le site est une boutique WooCommerce (bagues en stock) et un service de sur mesure par rendez-vous et formulaire. `robots.txt` interdit `?add-to-cart=` : les boutons « ADD TO CART » (liens `?add-to-cart=ID`) ne sont pas cliqués. La vitrine d'alliances Stuller (`sk-fjs.jewelershowcase.com`, interdit à tout robot selon l'inventaire) n'est pas ouverte.
- Marquage : [V] vérifié (page lue ou contrôle actionné, adresse citée), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié) |
| --- | --- |
| 1. Sur mesure (page de départ) | Trois étapes : Consultation, Rendering & Approval, Creation & Delivery ; bouton « See Custom Gallery » (`/gallery`) [V] |
| 2. Demande de conception | `/ask-a-designer/` : formulaire avec questions (personnaliser ou partir de zéro, éléments choisis, taille de doigt, matériaux), contact préféré, référence produit ; non rempli [V] |
| 3. Bagues « sur catalogue » | `/in-stock-engagement-rings/` : tri, 3 pages, bouton ADD TO CART ou OUT OF STOCK [V] |
| 4. Fiche bague | Photos (SKU, 3 images vues), vidéo de 15 s, prix, « 1 in stock », quantité, Add To Cart, « Request a customization » [V] |
| 5. Panier | `/cart/` autorisé mais aucun article ajouté (ajout interdit) : « Your cart is currently empty. » [V] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Login/Register | lien | `/my-account/` (compte : non créé) | - | non testé (compte) |
| Panier d'en-tête « $0.00 0 Cart » | lien | Affiche le total ; ouvre le panier | 0,00 $ | fonctionne [V] |
| Search (loupe) | lien | Lien d'ouverture d'une fenêtre Elementor (action `popup:open`) ; non cliqué | - | non testé |
| Menu (icône) | bouton | Lien d'ouverture d'une fenêtre Elementor ; non cliqué, liens du pied de page lus | - | présent [V] |
| See Custom Gallery | lien | `/gallery/` : galerie de réalisations (bagues sur mesure, noms propres, descriptions, « Made by Katherine Spencer ») | - | fonctionne [V] |
| Formulaire « Sign up for our emails » (prénom, nom, e-mail, « How did you hear about us? », Subscribe Now) | formulaire | Non rempli | - | non testé (règle : aucun formulaire) |
| SHOP ESTATE SALE | lien | `/antique-fine-jewelry/` (bandeau fermable par « Close ») | - | présent [V] |
| Pied de page : About, Repair Services, Engraving, Cash for Gold, Blog, Financing | lien | Pages de service ; Financing lue : carte de crédit, « Buy Now, Pay Over Time », sans taux ni durée | - | fonctionne [V] |
| Pied de page : Return Policy, Policies & FAQs, Terms of Service, Privacy Policy, Accessibility, Mobile SMS Policy | lien | Return Policy et Policies & FAQs lues | - | fonctionne [V] |
| Réseaux : Facebook, Yelp, Instagram, Pinterest, Google Business, Trip Advisor | lien | Externes ; non ouverts | - | présents [V] |
| Liste de tri (Default, popularity, average rating, latest, price low-high, price high-low) | liste | `?orderby=price` : bagues triées de 865,00 $ à 1 395,00 $ et suivantes ; pas de rechargement bloquant | - | fonctionne [V] |
| Pagination 1, 2, 3, → | lien | `/page/2/` : 16 produits ; dernier prix lu 4 500,00 $ | - | fonctionne [V] |
| ADD TO CART (liste) | lien | `?add-to-cart=ID` : interdit par robots.txt | - | non cliqué (interdit) |
| OUT OF STOCK (liste) | bouton | Mène à la fiche (ex. Black Diamond Halo Ring, 4 450 $) | - | fonctionne (lien lu) [V] |
| Fiche : image, miniatures | image | 3 images 600×600 vues (`7960_1…_3.png`) ; zoom non testé | - | présentes [V] |
| Fiche : vidéo (Play, Mute, Fullscreen, 00:00 / 00:15) | vidéo | Fichier `7960.mp4`, 15,7 s ; lecture non lancée | - | présente [V] |
| Fiche : champ quantité | champ | Non modifié | 1 395,00 $ | non testé |
| Fiche : Add To Cart | bouton | Ajout au panier par l'action `add-to-cart` (interdite) | - | non cliqué (interdit) |
| Fiche : Request a customization | lien | `/ask-a-designer/?product_reference=…&inquiry_type=Customization inquiry` : formulaire avec référence pré-remplie (non envoyé) | - | fonctionne [V] |
| Fiche : produits liés (Milgrain Diamond Stacking Band 535 $, Power Ring 350 $, Ruby and Diamond Millgrain Band 595 $, Dainty Heart Ring 89,99 $) | lien | Fiches voisines | affiché | présents [V] |
| Formulaire « Ask a Designer » | formulaire | Non rempli (contact préféré : téléphone, SMS, e-mail ; réseaux d'origine) | - | non testé (règle) |
| Alliances « band-builder » (Stuller) | lien | `sk-fjs.jewelershowcase.com` : interdit | - | non ouvert (interdit) |
| Chat, WhatsApp, essayage, AR, 3D, 360°, comparer, partager | - | Aucun contrôle vu sur les pages ouvertes | - | absents [V] |

## Options disponibles

- **Métaux** (FAQ) : argent, or jaune, blanc, rose, vert, palladium, platine ; alternatives (titane, tungstène, acier) en bandes vendues à part [V]. Pas de choix sur la fiche.
- **Formes de pierre, carat** : aucun filtre ; la page « Bridal » cite SOLITAIRE, TWO STONE, THREE STONE, ACCENTED, HALO, VINTAGE et « different center stone shapes, precious metal types/colors » pour les modèles semi-sur mesure [V].
- **Origine** : la FAQ cite des pierres « rock-hounded, sustainable or top quality lab-grown gemstones » ; aucun libellé « synthétique » sur une fiche lue (l'inventaire du 16/11 disait « pas de synthétique » : à nuancer) [V].
- **Taille de doigt** : pas de liste sur la fiche lue (bague « Size 5 1/2 » inscrite dans la description) ; question « Need help with a finger size? » dans le formulaire [V].
- **Gravure** : page de service « Engraving » (non lue en détail) [V].
- **Modes de vue** : photos et vidéo de 15 s sur la fiche lue [V].
- **Réalisations** : galerie `/gallery/` [V].

## Prix, délais, retours, garanties

- **Prix** : affichés sur les bagues en stock (de 865,00 $ à 14 300,00 $ vus sur les pages triées et listées ; Bezel Set Diamond Solitaire Ring 1 395,00 $, Five Stone Engagement Ring 14 300,00 $) [V]. Sur mesure : « Within a week a personalized selection of drawings and quotes are emailed to you » [V]. Aucune décomposition du prix [V]. « Our prices are subject to change without notice » (métaux) [V].
- **Délai** : sur mesure « 4 to 6 weeks - sometimes as little as 12 to 15 business days » (`/design/`) ; FAQ : « up to 12 weeks » pour les alliances ; articles en stock expédiés en 1 à 2 jours ouvrés ; existants hors stock 4 à 6 semaines ; sur mesure complexe 6 à 12 semaines (`/policies-and-faq/`) [V].
- **Livraison** : 9 à 30 $ aux États-Unis (USPS, assurance et suivi compris) ; 80 à 120 $ pour les envois « National and International » par FedEx ou UPS ; coffret cadeau [V, `/policies-and-faq/`]. Récapitulatif réel non vu.
- **Retours** : page « Return Policy » : 30 jours, article non utilisé, reçu ; **les articles sur mesure sont exclus du remboursement**, avec garantie de fabrication « 100 % » et délai de 30 jours pour signaler un défaut [V]. Page « Policies & FAQs » : 7 jours après livraison, remboursement complet pour les articles listés, crédit en magasin seulement pour les commandes spéciales [V]. Les deux pages se contredisent (30 jours ou 7 jours) [V].
- **Garanties** : qualité de fabrication garantie ; mise à taille gratuite (frais d'envoi à la charge du client) ; réparation gratuite en cas de défaut de fabrication [V].
- **Certificats** : « GIA gemologist » en interne ; aucun certificat de pierre lu sur la fiche [V].
- **Moyens de paiement** : non affichés sur les pages lues (panier vide) ; financement par carte de crédit sur demande [V].
- **Langues, devises** : anglais, dollars [V].

## Confiance et service

- [V] « With in-house designers, goldsmiths, and a GIA gemologist » ; « Designing & Servicing Fine Jewelry In Our Community For Over 40 Years » (page design) puis « Since 1976 » (page ask-a-designer).
- [V] Atelier visible : galerie de réalisations nominatives (« Made by Katherine Spencer in Morgantown, West Virginia USA »), un rendu CAO « life-like » à approuver avant fabrication, vidéo de 15 s sur la fiche d'une bague en stock.
- [V] Contact : téléphone 304-296-9669, e-mail, horaires (mardi-vendredi 10 h-18 h, samedi 10 h-15 h, dimanche et lundi fermé), adresse.
- [V] Avis : liens vers Yelp, Google, Trip Advisor ; aucune note ni citation sur les pages lues.
- [V] Transformation : « Heirloom Redesign » et « Gold Recycling » (« use your existing gold to recycle into your completely new design »).
- Suivi de commande : non vu [V].

## Points forts à retenir pour JR Diamond

1. **Étapes du sur mesure en trois temps, avec rendu à approuver** : « You will get to see a final drawing or CAD rendering to suggest edits or approve as shown » (https://www.spencerandkuehn.com/design/).
2. **Vidéo de 15 s sur la fiche d'une bague en stock** (`7960.mp4`) : preuve que l'objet existe (https://www.spencerandkuehn.com/product-page/bezel-set-diamond-solitaire-ring/).
3. **Galerie de réalisations nominatives**, avec l'artisan nommé (https://www.spencerandkuehn.com/gallery/).
4. **Délai annoncé avec une fourchette honnête** : « 4 to 6 weeks - sometimes as little as 12 to 15 business days », et jusqu'à 12 semaines pour les alliances (https://www.spencerandkuehn.com/policies-and-faq/).
5. **Frais de livraison annoncés avant l'achat** : 9 à 30 $ aux États-Unis, assurance et suivi compris (même page).
6. **Mise à taille gratuite et garantie de fabrication écrites** (même page).
7. **« Request a customization » depuis la fiche**, avec la référence du produit déjà remplie.

## Défauts observés

- [V] Aucun configurateur, aucun choix de métal, de pierre ou de taille sur la fiche lue.
- [V] Les deux pages de retours se contredisent : 30 jours (Return Policy) et 7 jours (Policies & FAQs).
- [V] Le sur mesure est exclu du remboursement (store credit au mieux).
- [V] Aucune décomposition du prix ; « prices subject to change without notice ».
- [V] Chaque bague est un exemplaire unique (« 1 in stock ») : pas de variantes de taille.
- [V] La vitrine des alliances (Stuller) est un second site extérieur.

## Limites de l'audit

- Ajout au panier interdit (`Disallow: /*?add-to-cart=`) : panier non rempli ; frais de livraison, récapitulatif, moyens de paiement du paiement non vus.
- Aucun formulaire rempli (demande de conception, newsletter) ; fenêtres de menu et de recherche (Elementor) non ouvertes.
- Une seule fiche ouverte (Bezel Set Diamond Solitaire Ring) ; le zoom, la lecture de la vidéo et les alliances (Stuller) non testés.
- Rubrique « Bridal » et semi-sur mesure : noms de modèles lus, fiches non ouvertes.
- Temps d'affichage de l'image principale de la fiche (`largest-contentful-paint`) : 2,59 s sur ordinateur, 2,04 s en affichage iPhone [V, mesures uniques].
- Lecture initiale de la page de départ : 5,8 s sur ordinateur (réseau de la session) [V, mesure unique].
- Compte, recherche du site et chat : non utilisés.

## Sources

- https://www.spencerandkuehn.com/design/ ; https://www.spencerandkuehn.com/robots.txt
- https://www.spencerandkuehn.com/in-stock-engagement-rings/ (tri `?orderby=price`, page 2)
- https://www.spencerandkuehn.com/product-page/bezel-set-diamond-solitaire-ring/ ; https://www.spencerandkuehn.com/ask-a-designer/
- https://www.spencerandkuehn.com/gallery/ ; https://www.spencerandkuehn.com/bridal/ ; https://www.spencerandkuehn.com/cart/
- https://www.spencerandkuehn.com/return-policy/ ; https://www.spencerandkuehn.com/policies-and-faq/ ; https://www.spencerandkuehn.com/spencer-kuehn-general-financing-jewelry/
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/spencer-kuehn/` (hors dépôt).
