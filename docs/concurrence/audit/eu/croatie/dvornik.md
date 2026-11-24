# Audit : Zlatarije Dvornik (Croatie)

- **Site** : Zlatarije Dvornik, entreprise familiale « depuis 1933 », Split
- **Adresse** : https://dvornik.hr/ · page de départ : https://dvornik.hr/product-category/zarucnicko-prstenje/zarucnicko-prstenje-laboratorijski-dijamanti/
- **Date** : 15/11/2026 · **Appareils** : ordinateur (Chromium 1366×900) et affichage iPhone 13 (fiche produit)
- **Statut** : complet jusqu'à la page du panier ; paiement non ouvert. robots.txt lu ; aucune adresse interdite ouverte.

Marques : **V** vérifié · **I** inféré · **S** supposé.

## Parcours

Pas de configurateur : catalogue WooCommerce de bagues « 3D projekti » (rendus de bagues issues de la ligne « Individual ») [V].

| étape | options |
|---|---|
| Catégorie « 3D projekti – Laboratorijski dijamanti » | 20 résultats, 12 par page ; tri ; menu de catégories (zaručničko : synthétique, Individual, 3D naturel, naturel, moissanite, or Individual) |
| Fiche produit | couleur d'or (liste), quantité, « Dodaj u košaricu », « Imate pitanje? Kontaktirajte nas » (formulaire) |
| Panier `/kosarica/` | quantité, coupon, livraison gratuite ou retrait en boutique, « Kreni na plaćanje » |

## Contrôles vérifiés

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| Recherche « Pretraži proizvode… » | champ | présent en en-tête | — | non utilisé (adresses de recherche à éviter) |
| Tri de la liste | liste | 6 choix : défaut, popularité, note moyenne, plus récent, prix croissant, prix décroissant | — | présent, non actionné (adresse `?orderby=` non vérifiée contre robots.txt) |
| Menu catégories (≈ 90 liens) | liens | navigation par catégories (or, argent, tradition croate, Hajduk, collections…) | — | listés, non suivis |
| Pagination 1, 2, → | liens | page 2 de la catégorie | — | non suivie |
| Carte produit | lien | ouvre la fiche | prix en € TTC ; mention « Bazna cijena (10.9.2026.) » sur certaines | fonctionne [V] |
| « Odaberi opcije » (liste) | lien | ouvre la fiche (produit à variantes) | — | fonctionne [V] |
| « Dodaj u košaricu » (liste) | lien | l'adresse contient `?add-to-cart=` (interdite par robots.txt) | — | **non cliqué** |
| Couleur d'or (fiche) | liste | Bijelo zlato, Roze zlato, Žuto zlato ; sans choix, le bouton ne fait rien de visible | prix inchangé : 1 030 € les trois | fonctionne [V] |
| Image de la fiche | galerie | 2 vignettes ; pas de zoom, de 360° ni de vidéo vus ; l'image ne change pas avec la couleur d'or | — | [V] |
| Quantité | champ | numérique avec + et − | — | fonctionne |
| « Dodaj u košaricu » (fiche) | bouton | ajoute « Art of Bezel … – Žuto zlato », 1 × 1 030 €, ouvre un tiroir de mini-panier | 1 030 € | fonctionne [V] (requêtes `add-to-cart` bloquées, ajout par Ajax) |
| « Imate pitanje? Kontaktirajte nas » | bouton | formulaire : nom, prénom, e-mail, téléphone, message | — | ouvert, non envoyé |
| « 4C metoda », « Upute za veličinu prstena » | liens | pages d'aide | — | liens vus, non suivis (taille : page « Veličine prstena » lue : règle ou mètre ruban) |
| Panier : quantité ± | boutons | change la quantité | — | présents, non actionnés |
| Panier : « Primijeni kupon » | champ + bouton | code de réduction | — | présent, non testé |
| Panier : livraison | radio | « Besplatna dostava » (sélectionnée) ou « Preuzimanje u trgovini » ; adresse « Dostava u Splitsko-dalmatinska županija » | gratuite | fonctionne [V] |
| Panier : « Kreni na plaćanje » | bouton | mène à `/placanje/` (paiement) | — | **non cliqué** |
| Panier : « Plati sigurno uz Link » | bouton | paiement express Stripe | — | non cliqué |
| Compte, services, paiement (en-tête) | liens | Moj račun, Naše usluge, Plaćanje | — | liens vus |
| Partager, enregistrer, comparer, chat, WhatsApp | — | absents ; téléphone 095 904 5276 et e-mail en en-tête | — | [V] |

## Options disponibles

- **Catalogue** : bagues de fiançailles en synthétique (« Laboratorijski dijamanti », 20 modèles), naturel, moissanite, « Individual » (pièces uniques), or 14 kt ; alliances en or et en platine ; collections [V].
- **Fiche d'une bague en synthétique** : par ex. Art of Bezel : 1 diamant de laboratoire 0,30 ct, couleur E, pureté VVS2, or 14 kt, certificat IGI ; couleur d'or au choix ; « broj izrade » par défaut 14 si rien d'autre n'est précisé à la commande [V].
- **Pas de choix** de forme, de carat ou de pureté en ligne ; ils sont fixés par modèle [V].
- **Devise** : euro ; **langue** : croate seulement (« zasada na hrvatskom jeziku ») [V].

## Prix, délais, retours, garanties

- **Prix** : prix ferme en € TTC, un seul chiffre par modèle ; panier : « Ukupno 1 030,00 € (uključuje 206,00 € PDV) » (TVA 25 % non précisée, 206/824 ≈ 25 %) [V]. Dans la catégorie : 1 030 € à 2 150 € relevés (12 premières bagues) [V]. Pas de décomposition or, pierre, façon [V].
- **Délai** : fiche « Rok izrade – 2 tjedna » ; conditions générales : 3 à 5 jours ouvrés en stock, 7 à 10 jours ouvrés sur commande [V] (les deux chiffres ne s'accordent pas).
- **Livraison** : gratuite dès 200 € ; retrait en boutique possible [V].
- **Retours** : 14 jours de rétractation à compter de la réception ; frais de retour à la charge du client ; bague non portée, non modifiée, dans son emballage avec certificats ; **les produits sur mesure ne sont pas repris** (« custom made proizvodi nisu povratni ») ; traitement 3 à 5 jours ouvrés [V : /opci-uvjeti-poslovanja/].
- **Garantie** : 2 ans, fabricant ; perdue en cas de gravure, mise à taille ou réparation par un tiers [V].
- **Certificats** : IGI pour les diamants de laboratoire (texte de la catégorie) [V].
- **Prix publics** : page « Cjenik » avec fichiers XML/CSV quotidiens (obligation légale croate NN 101/2026) [V].

## Confiance et service

- Mention « 100 % sigurno plaćanje : cartes de crédit / virement », « Ručno izrađeni proizvodi », « Obiteljski obrt s tradicijom » [V].
- Un avis en pied de page (« Lena M. », 5 étoiles), pas d'agrégat de notes [V].
- Services d'atelier : réparation, fabrication d'or, sertissage, gravure, rhodiage, estimation, rachat d'or [V : /nase-usluge/].
- Pas de suivi de commande, pas de photos ou vidéos de fabrication, pas de rendez-vous en ligne [V]. Questions : téléphone 095 904 5276 (boutique n° 2 sur le quai) [V].

## Points forts à retenir pour JR Diamond

1. **Prix, délai, certificat sur la fiche** : « Rok izrade 2 tjedna », IGI 0,30 ct E VVS2 14 kt à 1 030 € [V].
2. **Ligne « 3D projekti »** : le client voit un rendu de la bague avant fabrication, avec le texte « s individualnim pristupom » [V : texte de la catégorie].
3. **Livraison offerte dès 200 €** et retrait en boutique dans le panier [V].
4. **Publication de prix quotidienne** (page Cjenik) : exigence locale à connaître pour un site vendant en Croatie [V].
5. **Fiche de dix lignes lisible** : or, carat, couleur, pureté, certificat [V].

## Défauts observés

- Le prix ne change pas selon la couleur d'or et l'image ne change pas non plus : le choix n'a aucun effet visible [V].
- Délai contradictoire : 2 semaines (fiche) et 7 à 10 jours ouvrés (conditions) [V].
- Boutons « Ajouter au panier » de la liste construits sur `?add-to-cart=` (non automatisable ; peut aussi poser un souci de lien partagé) [V].
- Pas de zoom, de 360°, de vidéo ni de guide visuel des tailles sur la fiche [V].
- Sur mobile, l'image principale met environ 5,4 s à s'afficher (voir limites) [V].
- Site en croate seulement, aucune version anglaise [V].
- Adresse `/cart/` renvoie une page 404 ; le panier est à `/kosarica/` [V].

## Limites de l'audit

- **Mesure** : image principale de la fiche Art of Bezel chargée en 5,1 s (ordinateur, 800 px de large) et 5,4 s (iPhone 13, 390 px) ; un seul essai chacun, mesuré par le chargement de la première image de la galerie [V].
- Non testés : tri, pagination, recherche, coupon, quantité du panier, page de paiement, produits à variantes (« Odaberi opcije ») autres que la couleur d'or, mini-panier sur mobile.
- Un seul modèle (Art of Bezel) examiné en détail ; les 19 autres bagues de la catégorie n'ont pas été ouvertes.
- Le panier créé a été abandonné sans commande.

## Sources

- https://dvornik.hr/product-category/zarucnicko-prstenje/zarucnicko-prstenje-laboratorijski-dijamanti/ · https://dvornik.hr/product/art-of-bezel-14kt-labgrown-dia/ · https://dvornik.hr/kosarica/ · https://dvornik.hr/opci-uvjeti-poslovanja/ · https://dvornik.hr/cjenik/ · https://dvornik.hr/nase-usluge/ · https://dvornik.hr/velicine-prstena/ · https://dvornik.hr/o-nama/ (lus le 15/11/2026).
