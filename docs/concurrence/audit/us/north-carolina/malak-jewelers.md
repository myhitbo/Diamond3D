# Audit : Malak Jewelers (Charlotte, Caroline du Nord)

- **Site** : Malak Jewelers, https://malakjewelers.com/ (page de départ : https://malakjewelers.com/pages/custom-ring-builder)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366x900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le constructeur 3D annoncé ne s'affiche pas dans notre navigateur (voir « Défauts » et « Limites »). Le reste du site (collections, fiche bague, pages de service, panier) a été audité.
- **robots.txt** : lu avant toute ouverture. Pages ouvertes : toutes AUTORISÉES. `/cart/add` est INTERDIT (`Disallow: /cart/`) : bouton d'ajout au panier non cliqué. Le tri des collections (`sort_by`) et les filtres combinés sont interdits : non actionnés. Le constructeur appelle `jeweleros.com/api/widget/config/…` (INTERDIT pour ce domaine, `Disallow: /api/`) : appel fait par la page à son ouverture, aucun clic de ma part n'en a déclenché d'autre.
- **Convention** : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options | État |
|---|---|---|
| 1. Constructeur 3D `/pages/custom-ring-builder` | Zone de contenu vide (hauteur 700 px sur ordinateur, 300 px sur iPhone) [V] | Non fonctionnel dans notre test |
| 2. Page de présentation `/pages/custom-engagement-rings` | 3 étapes annoncées : concevoir en 3D en ligne, choisir la pierre en boutique à Charlotte, finaliser et commander [V] | Texte lu, 4 boutons vers le constructeur |
| 3. Collections `/collections/solitaire-engagement-rings` | 4 pages de produits (pagination 1 à 5), tri, filtre « Product type » [V] | Fonctionne |
| 4. Fiche bague (14K White Gold 0.75CT Round Solitaire) | Galerie de 3 photos, prix, bouton « Inquire to order », « Ask a question », partage réseaux [V] | Fonctionne |
| 5. Panier `/cart` | « Your cart is currently empty. » [V] | Vide ; pas atteint avec un article (ajout interdit) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Constructeur 3D (contenu de page) | Widget JewelerOS | Rien ne s'affiche ; la requête de configuration `jeweleros.com/api/widget/config/9fE4BEy7ek1U/` est bloquée par CORS (erreur console) [V] | n.d. | Cassé (dans notre test) |
| Design Your Ring / 3D Ring Builder / Build Your Custom Ring / Design Your Ring Now (page présentation) | Liens (4) | Mènent tous au constructeur vide [V] | n.d. | Lien OK, destination vide |
| Diamonds > Lab Grown, Fancy Colored, formes (round, oval, cushion, pear, marquise, asscher, emerald, radiant, princess, heart) | Menu, liens `/apps/diamondtools/diamondtype/navlabgrown?shape=…` | Page ouverte avec en-tête et pied de page mais zone centrale vide (même erreur CORS) [V sur navlabgrown] | n.d. | Cassé (dans notre test) |
| Pause slideshow | Bouton | Présent en haut de page (diaporama) [V], non cliqué | – | Non testé : sans enjeu |
| Sort (Featured, Most relevant, Best selling, A-Z, Z-A, prix croissant, prix décroissant, date ancienne, date récente) | Liste déroulante | 9 options listées [V]. Non actionnée : l'adresse `sort_by` est interdite par robots.txt | – | Non testé (robots.txt) |
| Product type | Bouton déroulant | Déplie 8 types de monture (Halo, Three Stone, Multirow, Pavé, Solitaire, Single Row, Bypass, Side Stone), 7 formes (Round, Princess, Cushion, Oval, Emerald Cut, Marquise, Pear), 4 métaux (White Gold, Yellow Gold, Rose Gold, Platinum) [V ; ces entrées sont les liens du menu] | – | Fonctionne (non appliqué) |
| Pagination 2, 3, 5, Next | Liens | `?page=N` [V], non suivis | – | Non testé : sans enjeu |
| Photos de la fiche (3 miniatures) | Galerie | 3 images (2 rendus fond blanc, 1 photo portée) [V] | – | Fonctionne |
| INQUIRE TO ORDER | Bouton | Aucun changement visible de la fenêtre après le clic ; la page contient un formulaire de contact (`contact[product]`, nom, e-mail, message) [V]. Formulaire non rempli | – | Fonctionne (clic) ; envoi non testé |
| Liste « Default Title - $2,995.00 USD » | Select (1 variante) | Une seule variante, aucun choix de taille ni de métal [V] | 2 995 USD | OK |
| ASK A QUESTION | Bouton accordéon | Présent [V], non ouvert | – | Non testé : formulaire |
| Share (Facebook, Tweet, Pin it) | Liens | Liens de partage vers les réseaux [V] ; pas d'enregistrement ni de comparaison | – | Lien OK, non suivis |
| Search | Lien `/search` | Présent [V] ; recherche interdite par robots.txt non vérifiée | – | Non testé |
| Log in | Lien `/account` | `/account` INTERDIT : non ouvert | – | Non testé (robots.txt) |
| Call (704) 341-1188 | Lien `tel:` | Présent en haut de page [V] | – | OK |
| Contact Us | Lien/bouton | `/pages/contact` [V] | – | Lien OK |
| Book appointment | Lien menu (`#jos-book-appointment`) | Présent dans « About us » [V] ; widget JewelerOS donc probablement cassé comme le constructeur [I] | – | Non testé |
| Financing (bandeau « Finance your jewelry… Learn More ») | Lien | `/pages/financing-options` [V] | – | OK |
| Réseaux (Instagram, Facebook, TikTok, LinkedIn) | Liens externes | Présents [V] | – | Non suivis |
| Panier | Page | Vide [V] | – | OK |
| Ajout au panier (formulaire `/cart/add`) | Formulaire caché | Présent dans la page [V]. Non utilisé | – | Non testé : panier interdit par robots.txt |
| Chat, WhatsApp, essayage à domicile, AR, 360°, vidéo, vue sur la main, gravure, taille de doigt | – | Aucun contrôle de ce type repéré sur les pages ouvertes [V par la liste des contrôles] | – | Absent |

## Options disponibles

- **Constructeur 3D** : options inconnues, rien ne s'affiche. Le site annonce seulement « customize every detail » et la visualisation en temps réel [V, page présentation].
- **Montures (menu)** : halo, trois pierres, multi-rangs, pavé, solitaire, rang simple, bypass, pierres latérales [V].
- **Formes** : ronde, princesse, coussin, ovale, émeraude, marquise, poire [V] ; en diamants de laboratoire s'ajoutent asscher, radiant, cœur [V, menu].
- **Métaux** : or blanc, jaune, rose, platine [V]. Titres vus dans les produits : 14K, 18K [V].
- **Pierres** : naturelles et de laboratoire, diamants de couleur, « salt & pepper » [V].
- **Financement** : carte de crédit American Gem Society (Wells Fargo) [V].
- **Autres collections** : bijoux indiens, judaïca, bijoux de succession, marques (Simon G., Forevermark, Fope, Zeghani) [V].

## Prix, délais, retours, garanties

- **Prix** : affiché en USD sur la fiche, avec la mention « do not include the price of delivery » dans les conditions [V]. Exemple : 14K white gold 0.75CT round solitaire, 2 995,00 USD [V]. Aucune décomposition (métal, pierre, main-d'œuvre) [V].
- **Délai** : « ready for you in just a couple of weeks » pour une bague conçue avec le constructeur [V, page présentation].
- **Livraison** : « delivery costs are clearly shown and invoiced at the end of the order » [V, conditions] ; non vérifié concrètement (pas de panier).
- **Retours** : page Refund : 14 jours de remboursement, 4 semaines d'échange, hors articles endommagés, modifiés, commandés spécialement, en paiement échelonné ou soldés [V]. Les conditions générales disent 7 jours après livraison [V] : contradiction entre les deux pages. Le sur mesure (« special ordered ») est donc exclu du remboursement [V].
- **Garanties** : bijoux garantis contre les défauts de fabrication, conception et main-d'œuvre ; métal précieux conforme au poinçon [V]. Page warranty.
- **Certificats** : « All diamonds … graded and certified … according to the GIA grading system » [V] ; la FAQ synthétique contient une question « Are lab grown diamonds GIA certified? » (réponse non lue) [V].
- **Libellé du synthétique** : « Lab Grown » (menu, FAQ, 21 questions) [V].
- **Paiement** : Visa, MasterCard, American Express, Discover [V, conditions]. Aucun moyen affiché dans le panier vide.
- **Financement** : 0 % si payé sous 24 mois sur achats de 3 000 USD et plus avec crédit approuvé ; information « exacte au 13/06/2024 » [V].
- **Assurance** : deux partenaires (Zillion, Jeweler's Mutual) [V].
- **Expertise** : estimation offerte pour tout achat de 1 000 USD et plus, à partir de 75 USD sinon [V].

## Confiance et service

- Boutique physique : 8042 Providence Rd, Ste 1000, Charlotte, NC 28277 ; lun.-sam. 10 h-18 h, fermé le dimanche [V]. Fondée en 1980 [V].
- Avis : citations d'avis Google en toutes lettres sur la page présentation (2 vues) [V] ; pas de note globale ni de nombre d'avis repéré [V].
- Rendez-vous : bouton « book appointment » (JewelerOS) ; non vérifié [V présence].
- Service : redimensionnement, rhodiage, réparation, estimation, rachat d'or [V].
- Langues : anglais seulement [V]. Devise : USD seule [V].
- Preuves de fabrication : aucune photo ni vidéo d'atelier, aucun suivi de commande vus [V par absence sur les pages ouvertes].
- Remise militaire (page dédiée) [V].

## Points forts à retenir pour JR Diamond

1. **Parcours « 3D en ligne puis pierre choisie en boutique »** : la page présentation explique en 3 étapes comment une conception en ligne se finalise avec un spécialiste (preuve : https://malakjewelers.com/pages/custom-engagement-rings). Rassure sur le fait que la 3D n'est pas la fin du parcours.
2. **Prix visible sur chaque fiche en USD** : « $2,995.00 USD » (https://malakjewelers.com/collections/solitaire-engagement-rings/products/14k-white-gold-0-75ct-round-diamond-solitaire-ring). Atout contre « Sur devis ».
3. **Rapidité d'affichage de la fiche** : photo principale en environ 0,85 s, LCP 740 ms sur ordinateur, 704 ms sur iPhone (mesure Playwright ci-dessous) [V].
4. **Pages de service rassurantes** : garantie, assurance, financement 24 mois, estimation offerte à partir de 1 000 USD [V].
5. **Navigation par filtres d'attributs** (monture, forme, métal) dans un seul menu, faciles à reprendre pour le catalogue [V].

## Défauts observés

- **Constructeur 3D et outil de diamants vides** : zone centrale blanche sur ordinateur et iPhone, erreur console « blocked by CORS policy » sur la requête de configuration JewelerOS [V]. Le visiteur n'a aucun message d'erreur ni de secours [V]. Il peut s'agir d'une particularité de notre environnement [S] : je ne l'ai pas contournée.
- Quatre boutons de la page présentation envoient vers ce constructeur vide [V].
- Aucune fiche testée n'a de bouton « Ajouter au panier » : seulement « Inquire to order » ; on n'achète pas directement en ligne [V].
- Contradiction entre la page de retours (14 jours) et les conditions (7 jours après livraison) [V].
- Page de financement datée de juin 2024 [V].
- Les conditions générales évoquent des retours « by registered post » et frais à la charge du client : texte générique non adapté à la bijouterie [I].
- Pas de décomposition du prix [V]. Pas de photo d'atelier [V].

## Limites de l'audit

- Impossible de parcourir le constructeur (options, effet sur prix et image) : le widget ne charge pas et l'API appelée est interdite par le robots.txt de jeweleros.com.
- Ajout au panier non testé (robots.txt : `/cart/add` interdit) ; frais de livraison et moyens de paiement du panier non observés.
- Tri non actionné ; compte, recherche et formulaires non utilisés (règles de l'étude).
- Temps d'affichage : mesures uniques ; sur iPhone, l'attente de l'image principale par sélecteur a dépassé 20 s (sélecteur inadapté), je retiens donc le LCP [V].
- Une seule fiche produit parcourue.

## Sources

- https://malakjewelers.com/pages/custom-ring-builder (contrôles + capture)
- https://malakjewelers.com/pages/custom-engagement-rings
- https://malakjewelers.com/apps/diamondtools/diamondtype/navlabgrown
- https://malakjewelers.com/collections/solitaire-engagement-rings
- https://malakjewelers.com/collections/solitaire-engagement-rings/products/14k-white-gold-0-75ct-round-diamond-solitaire-ring
- https://malakjewelers.com/cart
- https://malakjewelers.com/policies/refund-policy ; /policies/terms-of-service ; /pages/warranty-guarantees ; /pages/financing-options ; /pages/services ; /pages/lab-grown-faqs
- https://malakjewelers.com/robots.txt ; https://www.jeweleros.com/robots.txt
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/malak-jewelers/
