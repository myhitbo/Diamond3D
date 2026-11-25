# Consider the Wldflwrs (Nashville, Tennessee)

- **Site** : Consider the Wldflwrs, bijoutier-créateur de Nashville (atelier « Nashville studio », 1201 Villa Pl, Nashville, TN 37212)
- **Adresse** : https://considerthewldflwrs.com/ (départ : `/collections/engagement-rings`)
- **Date** : 15/11/2026 (page affichant « Order by 11/18… » pour Noël, donc contenu daté de novembre 2026)
- **Appareils** : Chromium ordinateur 1366×900 (locale en-US) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Pas de configurateur : boutique Shopify de fiches bagues à variantes. Panier non rempli (voir Limites).
- Tout fait ci-dessous est « vérifié » (page lue ou contrôle actionné, adresse indiquée) sauf mention « inféré » ou « supposé ».

## Parcours

| Étape | Options (vérifié sur `/collections/engagement-rings/products/evergreen-engagement-ring`) |
|---|---|
| 1. Catalogue | 41 bagues ; filtres Type, Style, Métal, Prix ; tri ; vues Large / Small / List |
| 2. Métal | 7 pastilles : 14 k jaune / blanc / rose, 18 k jaune / blanc / rose, platine |
| 3. Forme de la pierre centrale | 9 formes : Round, Oval, Emerald, Pear, Cushion, Marquise, Radiant, Princess, Asscher |
| 4. Taille de doigt | liste 3 à 9 par quarts (25 valeurs) + « View size chart » |
| 5. Diamant (« Select diamond size ») | liste en carats, de 1 CT à 5 CT par quarts (liste lue à partir de 1 CT ; valeurs plus petites non confirmées) |
| 6. Ajout au panier | bouton « ADD TO CART » (non actionné) |
| Service | Affirm, « Drop a hint », rendez-vous, chat, téléphone |

Le prix affiché est celui de la **monture seule** (« can be set with any size or shape of center stone ») ; la pierre est choisie à part avec l'atelier (inféré de la description de fiche et de la FAQ « handpicked for you »).

## Contrôles vérifiés

Page catalogue (133 contrôles à l'ouverture sur ordinateur, 86 sur iPhone ; liste complète par `controls.cjs`, résumée par familles) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pause slideshow / Previous / Next (bandeau d'annonces) | bouton | fait défiler 3 annonces (livraison Noël, charms, rendez-vous) | n/a | OK |
| Recherche (champ + loupe) | champ | non actionné : `/search` autorisé mais non testé | n/a | non testé |
| ACCOUNT / CART | lien | `/account` INTERDIT par robots.txt, non ouvert ; `/cart` ouvert (panier vide) | n/a | OK (cart) |
| Menu : Engagement, Wedding Bands, Fine Jewelry, Gifts, Ready-to-ship, Visit us | menu | liens présents ; seul `/collections/ready-to-ship` vérifié autorisé, non parcouru | n/a | non testé |
| Filtre PRODUCT TYPE | accordéon | ouvre : « Engagement rings (41) » | n/a | OK |
| Filtre STYLE | accordéon | Bezel set (6), Halo (4), Hidden halo (3), Pavé band (6), Solitaire (14), Three stone (12) | n/a | ouvre OK ; case non cochée (filtre combiné interdit par robots) |
| Filtre METAL | accordéon | 7 cases avec pastille de couleur (14 k/18 k rose, blanc, jaune ; platine) | n/a | ouvre OK ; non coché |
| Filtre PRICE | curseur + 2 champs | bornes 0 à 7 680 ($) | n/a | ouvre OK ; non utilisé |
| Sort (liste) | select | 9 tris (Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant/décroissant, dates) | n/a | **non testé** : change l'adresse en `?sort_by=…`, INTERDIT par robots.txt |
| Large / Small / List | boutons | change la densité de la grille | n/a | non testé (effet visuel seulement) |
| QUICK SHOP (×41) | bouton | ouvre un aperçu de la fiche | n/a | non testé |
| Pastilles de métal des cartes (4 + « +3 ») | pastille | indication visuelle des métaux disponibles | n/a | OK (lecture) |
| Fiche : pastilles métal (7) | radio | change le libellé « SELECT METAL — … » et la photo (jaune → photo YG, blanc/platine → photo WG) | 14 k : 1 920 $ ; 18 k : 2 020 $ (+100 $) ; platine : affichage 1 920 $ après 1,2 s | OK ; **rose : la photo reste celle du jaune** |
| Fiche : formes (9) | radio | change « SELECT SHAPE — … » ; **la photo ne change pas** (reste ovale/ronde jaune) | aucun (1 920 $ pour toutes) | OK ; Radiant : clic non pris en compte à la 1re tentative (état resté « Marquise »), échec observé |
| Ring size | liste déroulante personnalisée | 25 tailles 3 → 9 par quarts | aucun | OK (ouverture) |
| Diamond size | liste déroulante personnalisée | 1 CT à 5 CT par quarts | non mesuré (option non sélectionnée) | ouverture OK ; effet prix non testé |
| View size chart | bouton | fenêtre « Ring Sizing Guide » (quarts de taille, conseils, gabarit imprimable, bouton « Request a complimentary ring sizer ») | n/a | OK |
| Zoom (galerie) | bouton | présent ; 6 vignettes (photos produit, vues portées) ; flèche Next | n/a | non actionné |
| Starting at $169/mo with Affirm — SEE IF YOU QUALIFY | lien JS | ouvre le module Affirm (autre domaine) | n/a | non testé (outil tiers) |
| DROP A HINT | bouton | ouvre un formulaire d'indice ; non rempli | n/a | non testé |
| ADD TO CART | bouton submit | `/cart/add` INTERDIT par robots.txt (règle `Disallow: /cart/`) | n/a | **non cliqué : panier interdit par robots.txt** |
| MEET WITH A SPECIALIST / BOOK AN APPOINTMENT | lien | `/pages/book-a-consultation` ; calendrier Calendly « engagement-ring-try-on-experience » | n/a | lien présent, non suivi (Calendly = autre domaine) |
| CHAT WITH US / Text us | lien (#podium-chat) | ouvre le chat Podium ; pas de conversation ouverte | n/a | non testé (règle) |
| CALL 615-209-8810 | lien tel: | lien téléphone | n/a | OK (lecture) |
| Accordéons Details / Shipping Policy / Warranty & Exchanges / Care & Cleaning | boutons | contenu lu (voir sections suivantes) ; « Care & Cleaning » : clic échoué à l'automatisation | n/a | 3 OK, 1 échec de clic |
| YOU MAY ALSO LIKE / MORE FROM ENGAGEMENT RINGS | carrousel | zone « You may also like » restée **vide** sur la capture pleine page ; 5 cartes en dessous | n/a | défaut possible de chargement différé |
| Pied de page : Subscribe (champ e-mail), Directions, Instagram, YouTube, Pinterest, TikTok, About, Careers, Terms, Privacy, Accessibility, Do not sell, Your privacy choices, Journal, Free ring sizer, Jewelry care, Anniversary reminder, FAQ, Engagement ring FAQ, Returns, Repairs, Shipping, Contact | liens/champ | non remplis ; pages Returns, Engagement ring FAQ, Shipping lues | n/a | OK (lecture) |

## Options disponibles

- **Métaux** : 14 k jaune, blanc, rose ; 18 k jaune, blanc, rose ; platine (fiche Evergreen). Sur le catalogue, certaines bagues n'ont que 14 k + platine (Fern, Lavender (Earth Mined Side Diamonds) : vu dans le texte du catalogue).
- **Formes** : Round, Oval, Emerald, Pear, Cushion, Marquise, Radiant, Princess, Asscher.
- **Styles (filtre)** : Bezel set, Halo, Hidden halo, Pavé band, Solitaire, Three stone.
- **Origine** : bagues « Lab Grown Side Diamonds » et « Earth Mined Side Diamonds » vendues comme fiches distinctes (ex. `holly-engagement-ring-lab-grown-side-diamonds`, `varsha-…-lab-grown-side-diamonds`) ; pas de bascule naturel/synthétique dans la fiche Evergreen.
- **Tailles de doigt** : 3 à 9 par quarts. **Carats** : 1 à 5 ct par quarts (liste).
- **Gravure, pavage, griffes, corps de bague** : aucun choix dans la fiche ; la description indique « 1.7 mm band with claw prongs », « Half Round », « Single Claw Prong Set ».
- **Vues** : photos et vues portées (6 vignettes), zoom. Pas de 3D, 360°, vidéo ni AR trouvés.

## Prix, délais, retours, garanties

- **Prix affiché** : « FROM $1,920 » (Evergreen) ; fourchette du catalogue de 1 855 $ (Eucalyptus) à 7 680 $ (Lavender Earth Mined) ; filtre de prix 0–7 680 $ (vérifié). Monture seulement ; la pierre n'est pas dans ce prix (inféré).
- **Décomposition** : 18 k = +100 $ sur Evergreen ; forme, taille : aucun écart (vérifié sur la fiche). Pas de ventilation matière/façon.
- **Financement** : « Starting at $169/mo with Affirm » ; la FAQ dit « payment upfront in full » exigé pour lancer la production ; financer à l'avance.
- **Délai** : « This item ships in 4-6 weeks » (fiche) ; FAQ : 4–6 semaines, 6–8 pour le sur mesure ; prêt-à-expédier : expédié 3–5 jours ouvrés (page Shipping).
- **Livraison** : UPS Ground, 2 Day, Next Day Air Saver sous 3 500 $ ; au-dessus, FedEx Overnight assuré ; signature requise ; international par DHL Express, ventes finales ; retrait à Nashville. Frais non vus (panier non rempli).
- **Retours** : pièces sur mesure (dont bagues de fiançailles) = ventes finales, ni retour ni échange ; prêt-à-expédier : échange contre avoir sous 14 jours ; commandes internationales et remises = ventes finales ; annulation par e-mail dans les 4 h (`/pages/returns-exchanges`).
- **Garantie** : 1 an contre défauts de fabrication, entretien (resserrage des griffes, nettoyage) gratuit à vie, réparation payante modique ensuite ; défaut à signaler sous 24 h après livraison ; pierre centrale exclue (assurance conseillée) (`/pages/engagement-ring-faq`).
- **Certificats** : « certificate of authenticity » et estimation de remplacement avec toute bague à diamant traditionnel ; « authenticity report » pour chaque diamant ; pas de GIA/IGI cités dans les pages lues.
- **Synthétique** : libellé « lab grown » ; FAQ : environ 30 % moins cher que le naturel, déconseillé comme investissement.

## Confiance et service

- Atelier physique à Nashville (adresse, horaires lundi–samedi 10 h–17 h) ; rendez-vous sur place ou virtuel ; téléphone, e-mail, chat Podium ; anneau de mesure gratuit à domicile (« Free ring sizer ») ; assurance Jeweler's Mutual proposée.
- Langue : anglais ; devise : USD. Avis clients : aucun bloc d'avis vu sur la fiche (non cherché ailleurs).
- Preuves de fabrication : « Designed in-house and handcrafted in our Nashville studio » (texte du catalogue) ; pas de photo ou vidéo de fabrication ni suivi de commande vus.
- Remarque : le `robots.txt` et `/agents.md` demandent aux agents d'utiliser les interfaces UCP/WebMCP pour les actions d'achat ; aucune action d'achat n'a été scriptée.

## Points forts à retenir pour JR Diamond

1. **Choix métal en 7 pastilles avec écart de prix visible** (+100 $ pour le 18 k) : preuve : fiche Evergreen, 1 920 → 2 020 $ au clic.
2. **Délai et garantie affichés au-dessus du bouton d'achat** (« ships in 4-6 weeks », « 1-year warranty ») : preuve : fiche Evergreen.
3. **Guide de tailles en fenêtre avec demande d'anneau de mesure gratuit** : preuve : « View size chart ».
4. **Prix « à partir de » au catalogue + filtre de prix** : preuve : « FROM $1,920 », curseur 0–7 680.
5. **Pierre vendue séparément avec accompagnement humain** (rendez-vous, chat) : preuve : description « any size or shape of center stone ».
6. **Garantie claire : entretien gratuit à vie** : preuve : page Warranty.

## Défauts observés

- La photo ne suit ni la forme de pierre (9 choix, même image) ni le rose (image du jaune) ; l'acheteur ne voit pas ce qu'il choisit.
- Aucune 3D, vidéo ni 360° ; pas de preuve de fabrication.
- Prix de la monture seule : l'effet de la pierre n'apparaît pas dans la fiche.
- Sur mesure = vente finale, y compris bague de fiançailles.
- Zone « You may also like » vide sur la capture ; clic Radiant échoué une fois ; « Care & Cleaning » non ouvrable.
- Visuel principal : première image visible à ~3,7 s (ordinateur et iPhone, mesure unique).

## Limites de l'audit

- **Panier** : `/cart/add` interdit par robots.txt, bouton non cliqué ; seule la page `/cart` vide a été lue. Livraison, moyens de paiement du panier, frais : non vus.
- `?sort_by` et filtres combinés interdits : tri non testé, un seul filtre ouvert, aucun appliqué.
- Une seule fiche (Evergreen) ; les autres montures, le prêt-à-expédier, le sur-mesure en rendez-vous, l'impact du carat sur le prix : non testés. Liste des carats lue à partir de 1 CT.
- Chat, Affirm, Calendly, Drop a hint, Quick shop : non actionnés (outils tiers, formulaires, règle de non-interaction).
- Mesures de temps : une mesure par appareil (Chromium, proxy de l'agent), indicatives.

## Sources

- https://considerthewldflwrs.com/collections/engagement-rings (vérifié, ordinateur et iPhone)
- https://considerthewldflwrs.com/collections/engagement-rings/products/evergreen-engagement-ring (vérifié)
- https://considerthewldflwrs.com/pages/returns-exchanges, `/pages/engagement-ring-faq` (lus)
- https://considerthewldflwrs.com/robots.txt, `/agents.md` (lus)
- https://considerthewldflwrs.com/cart (lu : vide)
