# Israel Diamond Supply (Tulsa, Oklahoma) : audit du « Ring Creator »

- **Site** : Israel Diamond Supply, https://www.israeldiamond.com/ — page de départ https://www.israeldiamond.com/apps/ring-creator/rb-get-started
- **Date** : 15/11/2026 (auditeur Oklahoma 2)
- **Appareils** : Chromium ordinateur 1366x900 ; affichage iPhone 13 (Playwright) pour la page de départ et la liste des montures
- **Statut** : **partiel**. Le parcours est fait jusqu'à la page « Your Completed Ring » (sous-total), mais **pas le panier** : le bouton « Add to Cart » appelle sur Shopify `/cart/add`, interdit par le robots.txt du site (`Disallow: /cart/`), et `/checkout` est aussi interdit. Le panier, les frais de livraison au panier et les moyens de paiement du panier ne sont donc pas vérifiés.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.
- Le configurateur est une application tierce (`app.ringcreator.io`), appelée par la page à son ouverture ; aucun clic n'a déclenché de requête vers une adresse interdite. Les images de montures viennent de meteor.stullercloud.com (catalogue Stuller) [V].

## Parcours

| Étape | Options (vérifié) |
|---|---|
| Départ (rb-get-started) | « Begin with a Setting » ou « Begin with a Stone » |
| 1. Choose Setting (rb-setting-list) | 6 styles (Solitaire, Three Stone, Side Stone, Halo, Vintage, Other) ; filtres Metal Type, Price, Supported Shape, Ring Style (tiroir « All Filters ») ; tri ; 936 résultats |
| 1b. Fiche monture (rb-setting-details) | Métal (6 pastilles), forme prise en charge (Oval/Round), taille de doigt US 3 à 11 par quart, tableau de conversion, « Select Setting », « Add to Cart », « Ask a Question », fiches Details / Description / Side Stone / Disclaimer |
| 2. Choose Stone (rb-stone-list) | Lab-Grown / Natural, forme, carat, couleur blanche / fantaisie, pureté, taille (cut), tri ; 8 640 résultats synthétiques ovales |
| 2b. Fiche pierre (rb-stone-details) | Stock #, carat, couleur, pureté, taille, poli, symétrie, fluorescence, laboratoire, profondeur, table, girdle, mesures, ratio, n° de rapport ; « Add to Ring » |
| 3. Complete Ring (rb-ring-review) | Monture + pierre, choix de la taille de doigt, sous-total, « Add to Cart », « Start Over », « Drop a Hint » |

## Contrôles vérifiés

Page de départ : 125 contrôles en ordinateur, 21 en iPhone (menu replié) ; liste des montures : 158 en ordinateur.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Begin with a Setting / Begin with a Stone | liens | Mènent à rb-setting-list / rb-stone-list?in_journey=true | - | OK (adresses lues, liste de montures ouverte) |
| Menus Diamonds / Engagement Rings / Wedding Bands / Jewelry | menus | Liens vers des collections, des filtres de diamants (VDB) et des alliances (métaux alternatifs, platine, or) | - | liens lus, non tous ouverts |
| Icônes réseaux sociaux (7), Call (918) 492-9300, e-mail | liens | Présents, non ouverts | - | non testé (liens externes) |
| Recherche, Login, devise USD | boutons | Présents ; non actionnés (compte) | - | non testé |
| Solitaire / Three Stone / Side Stone / Halo / Vintage / Other | liens | Filtrent la liste (paramètre `ring_style`) | - | OK (adresses lues) |
| Metal Type (filtre) | tiroir | Section dépliable : 14K Two Tone, Rose, White, Yellow, 18K, platine ; filtre par défaut posé « 14K White Gold » [V] | - | OK (lecture du DOM) |
| Price / Supported Shape (filtres) | boutons | Présents ; clics sur l'étiquette sans effet visible dans l'automatisation | - | non concluant |
| All Filters | bouton | Ouvre un tiroir (Ring Style, Metal Type, Price, Supported Shape) avec « Reset All » et « Apply Filters » | - | OK |
| Sort By | liste | Entrées « Price: Lowest / Highest » | - | lues |
| Pagination 1 2 3 … 78 | boutons | Affiche « 936 Results · Page 1 of 12 » mais le dernier lien indique 78 | - | incohérent [V] |
| Carte de monture | lien | Ouvre rb-setting-details?ring_stock_num=… | « $1,185.00 Setting Price » | OK |
| Pastilles de métal (14K rose, blanc, jaune ; 18K blanc, jaune ; platine) | boutons | Le libellé « Metal Type » change ; **le prix reste 1 185,00 $ pour les six** et les photos restent blanches | inchangé (voir défauts) | fonctionne en partie |
| Forme prise en charge Oval / Round | boutons | Round non cliquable dans l'automatisation | - | non concluant |
| Taille de doigt 3 à 11 + « See Size Conversion Chart » | puces + fenêtre | Tableau : US/Canada, UK/Australie, France, Allemagne/Russie, Inde/Chine/Japon/Israël, Italie/Espagne | - | OK |
| Select Setting | bouton | Sans taille : reste sur la fiche, aucun message ; avec taille 7 : mène à rb-stone-list | - | OK |
| Add to Cart (fiche monture et récapitulatif) | bouton | **Non cliqué** : appelle `/cart/add`, interdit par robots.txt | - | non testé (panier interdit par robots.txt) |
| Ask a Question | lien | Présent, non ouvert | - | non testé (formulaire/chat) |
| Lab-Grown / Natural Diamonds, Round / Oval, Carat 0,70 à 4,25, White / Fancy, Clarity, Cut, Reset All, All Filters, Sort By | contrôles de la liste de pierres | Liste lue : « 8 640 Results », page 1 sur 720 ; clics d'ouverture non concluants par script | - | partiel |
| Carte de pierre | lien | Ouvre rb-stone-details (labgrown_stock_num=D102182) | $172,00 (0,76 ct E VS2) | OK |
| Add to Ring | bouton | Mène à rb-ring-review, sous-total 1 357,00 $ = 1 185 + 172 | somme | OK |
| Start Over / Drop a Hint / Change (monture ou pierre) / View | liens | Présents, non actionnés | - | non testé |
| Financing (Wells Fargo), Warranty, Shipping & Returns, Certificates, Ethical Diamonds | liens | Pages lues | - | OK |

## Options disponibles

- **Styles de monture** : solitaire, trois pierres, pierres latérales, halo, vintage, autre [V].
- **Métaux** : or 14K rose, blanc, jaune ; or 18K blanc, jaune ; platine ; 14K bicolore dans les filtres [V].
- **Formes de pierre** (menu Diamonds) : Round, Oval, Pear, Emerald, Princess, Radiant, Marquise, Asscher, Heart, Cushion brillant, Cushion modifié [V].
- **Pierres** : synthétique et naturel, blanc ou fantaisie ; paramètres carat, couleur, pureté, taille, poli, symétrie, fluorescence.
- **Taille de doigt** : US 3 à 11 par 0,25.
- **Autres produits** : alliances (métaux alternatifs, précieux, éternité), boucles d'oreilles, bracelets, colliers, pendentifs, gemmes [V, liens de menu].
- Pas de gravure ni de réglage de pavé sur le parcours vérifié.

## Prix, délais, retours, garanties

- **Prix** : monture et pierre affichées séparément en dollars (« $1,185.00 Setting Price », « $172.00 Stone Price »), sous-total 1 357,00 $ [V]. Taxe et livraison : non vues (panier non atteint).
- **Délai** : « Most in-stock items will be shipped within 3 business days » ; plus long selon le métal et la taille ; sur mesure : à voir avec l'atelier ; l'article n'est expédié qu'après appel de confirmation [V /pages/shipping-and-returns].
- **Livraison** : FedEx de nuit assurée, signature requise, **adresse professionnelle ou point FedEx uniquement, pas de livraison résidentielle**, États-Unis seulement [V].
- **Retours** : 10 jours après réception, état d'origine, frais de port non remboursables, **5 % de frais de restockage, commandes sur mesure non reprises** [V].
- **Garantie** : mise à taille offerte et rhodiage offert la première année, garantie de montage 12 mois, plan « Lifetime Protection » payant sur demande (prix par téléphone) [V /pages/warranty].
- **Financement** : Wells Fargo, 12 ou 36 mois, sous réserve de crédit [V].
- **Paiement affiché en pied de page** : Amex, Apple Pay, Diners, Discover, Google Pay, Mastercard, Shop Pay, Visa [V].

## Confiance et service

- Certificats : GIA, IGI, GCAL ; rapport n° (855619382) et laboratoire IGI affichés sur la fiche d'une pierre synthétique [V].
- Libellé « Lab-Grown » dans l'interface ; page « Ethical Diamonds » pour naturel et synthétique [V].
- Téléphone, e-mail, horaires (lun-ven 10h30-18h, sam, dim après-midi, heure du centre), réseaux sociaux [V]. Langue : anglais ; devise : sélecteur USD [V, un seul choix vu].
- Avis clients : non vus. Photos ou vidéos d'atelier, suivi de commande : non vus. Intercom (chat) présent dans les requêtes, non ouvert [V requête, I pour le chat].

## Points forts à retenir pour JR Diamond

1. **Stock réel de pierres avec fiche complète** : poli, symétrie, fluorescence, profondeur, table, girdle, mesures, ratio, n° de rapport (fiche D102182).
2. **Étapes numérotées « Choose Setting, Choose Stone, Complete Ring »** et sous-total qui additionne monture et pierre (1 185 + 172 = 1 357 $).
3. **Tableau de conversion des tailles de doigt multi-pays, Israël inclus** (même colonne que l'Inde, la Chine, le Japon) — utile en Israël.
4. **Entrée par la pierre ou par la monture** (« Begin with a Stone »).
5. **Garantie lisible** : mise à taille et rhodiage offerts un an, montage 12 mois.
6. **Moyens de paiement et financement visibles dès le pied de page**.
7. **Bouton « Drop a Hint »** pour faire deviner son cadeau (non testé).

## Défauts observés

- **Le prix de la monture ne change pas avec le métal** : même 1 185,00 $ pour le 14K blanc, le 18K jaune et le platine ; les photos restent en blanc [V]. Soit le prix est faux, soit il est figé (non élucidé).
- **Pas de rendu visible du métal choisi** ; pas de vue 3D, que des photos fixes [V].
- Compteur incohérent : « 936 Results · Page 1 of 12 » et dernière page « 78 » [V].
- « Select Setting » sans taille : aucun message d'erreur [V].
- Livraison réservée à une adresse professionnelle ou FedEx ; États-Unis seulement [V].
- Retours avec 5 % de restockage et exception du sur-mesure [V].
- Dans la capture pleine page de la fiche monture, la zone image est vide au premier chargement (images différées) [V sur capture].
- Plusieurs filtres de la liste ne réagissent pas aux clics sur l'étiquette dans l'automatisation ; effet non confirmé [V, non concluant].

## Limites de l'audit

- **Panier non atteint** (robots.txt interdit `/cart/` et `/checkout`) : pas de frais de livraison au panier, taxe, délai du panier, moyens de paiement effectifs.
- Temps d'apparition de la première image de la liste de montures : 3,2 s (ordinateur) et 2,8 s (iPhone) ; parcours mobile non rejoué au-delà de la liste (aucun débordement horizontal observé).
- Filtres de pierre (carat, couleur, pureté, taille) et tri : options partiellement lues, effets non vérifiés un par un.
- Une lecture de la page /cart a été refusée par l'environnement d'exécution et n'a pas été retentée.
- Aucune vidéo, aucune vue 360° ni essayage rencontrés ; chat non ouvert.

## Sources

- https://www.israeldiamond.com/robots.txt
- https://www.israeldiamond.com/apps/ring-creator/rb-get-started, rb-setting-list, rb-setting-details, rb-stone-list, rb-stone-details, rb-ring-review
- https://www.israeldiamond.com/pages/shipping-and-returns, /pages/warranty, /pages/certificate-what-is-a-diamond-certificate, /pages/ethical-diamonds, /pages/financing (lus le 15/11/2026)
