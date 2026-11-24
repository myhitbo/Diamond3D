# Audit : Masina Diamonds (Atlanta, Géorgie)

- **Site** : Masina Diamonds Atlanta, https://masinadiamonds.com/. Page de départ : https://masinadiamonds.com/pages/custom-ring-builder
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (chargement et lecture seulement).
- **Statut** : **partiel**. Le site répond (200, robots.txt `Allow: /`), mais le constructeur 3D (JewelerOS) appelle `jeweleros.com/api/`, chemin interdit par le robots.txt de ce domaine (`Disallow: /api/`, vérifié) : **aucune option du constructeur n'a été actionnée**. Le reste du site (pages de contenu, collection) est lu normalement.
- Repères : **[V]** vérifié (page lue), **[I]** inféré, **[S]** supposé. Prix en dollars, relevés le 15/11/2026.
- **Appels involontaires** : le simple chargement de la page de départ déclenche, par le script du site, des requêtes vers `jeweleros.com/api/` (5 sur ordinateur, 34 en affichage iPhone, dont un cadre `jeweleros-custom.netlify.app`). Je n'ai fait aucun clic dans le constructeur ; ces requêtes sont le fait du chargement de la page par le navigateur, et je les note ici par transparence [V, journal des requêtes].

## Parcours

| Étape | Options | Source |
|---|---|---|
| Constructeur « Custom Ring Builder » (étape 1 sur 4) | 8 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone ; « Start from scratch » ; 3 pastilles de métal (jaune, blanc, rose) ; boutons « Back », « Skip » [V, lus dans la page chargée] | /pages/custom-ring-builder |
| Étapes 2 à 4 | « fully customize your design in our 3D Ring Designer » (texte du site) ; **non déroulées** | idem |
| Collection | /collections/engagement-rings : 129 produits, filtres Style, Metal, Price [V] | /collections/engagement-rings |
| Voie sur mesure en boutique | rendez-vous, croquis, CAO 3D, cire optionnelle, fonte et sertissage [V, texte] | /pages/custom-jewelry |

## Contrôles vérifiés

Page de départ : 46 contrôles sur ordinateur (controls.cjs). Le constructeur se superpose à la page (« Step 1 of 4 ») ; ses boutons n'ont **pas** été actionnés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Back / Skip | boutons | présents ; non actionnés (appelleraient le service) | n/a | non testés (JewelerOS interdit) |
| 8 tuiles de style + Start from scratch | boutons | présentes ; non actionnées | n/a | non testées |
| 3 pastilles de métal | boutons | jaune, blanc, rose ; non actionnées | n/a | non testées |
| Apply For Financing, Financing | liens | /pages/financing (lue) : Synchrony, paiements sans intérêt ou avec intérêt sur 3 à 24 mois | n/a | page lue [V] |
| Schedule Appointment | lien | sans adresse (ouvre un module de rendez-vous) | n/a | non ouvert |
| Book Your Appointment, Contact Us | liens | /pages/contact-us | n/a | présents, non ouverts |
| Custom Design Jewelery | lien | /pages/custom-jewelry (lue) | n/a | page lue [V] |
| Jewelry Repair, Where to Sell Jewelry in Atlanta, View Collections | liens | pages internes | n/a | présents, non ouverts |
| Refund Policy | lien | /pages/return-policy-1 (lue) | n/a | page lue [V] |
| LOG IN / SEARCH / CART | liens | /account, /search (non ouverts), /cart | n/a | présents [V] ; /cart autorisé mais panier vide, non utilisé |
| Pause slideshow | bouton | bandeau « FREE SHIPPING ON ORDERS OVER $1,000 » | n/a | présent, non actionné |
| 404.681.0379 | tel: | appel | n/a | non actionné |
| Courriel d'inscription (commit) | formulaire | non rempli | n/a | non testé |
| Réseaux (Instagram, Facebook, Pinterest, TikTok, LinkedIn) | liens | externes | n/a | non ouverts |
| Lien d'accessibilité | lien | « Screen-Reader Guide » (accessiBe), mode lecteur d'écran Alt+1 | n/a | présent [V] |
| 3 boutons sans libellé (iPhone) | boutons | non identifiés | n/a | non testés |

Aucun mode 360°, AR, sur la main, comparer, enregistrer, partager ou chat relevé dans la liste de 46 contrôles [V]. Le texte annonce un « 3D Ring Designer » dont le contenu n'a pas pu être vu [V, texte].

## Options disponibles

- **Styles de départ du constructeur** (8) : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone [V].
- **Métaux (pastilles)** : jaune, blanc, rose [V].
- **Collection de bagues de fiançailles** : filtres Style (Solitaire 54, Halo 33, Vintage 5, Three Stone 19, Modern 3, Classic 6), Metal (14 k blanc 50, 18 k blanc 11, 14 k jaune 63, 18 k jaune 2), curseur de prix 0 à 7 800 $ environ [V]. Pas de platine ni de rose dans les filtres.
- **Non relevé** (constructeur non déroulé) : formes de pierre, carats, origine, tailles, gravure.

## Prix, délais, retours, garanties

- **Prix de la collection** : affichés par fiche, par exemple 1 820 $ (solitaire pavé 0,30 ct, 14 k), 1 850 $, 2 750 $, 4 200 $ [V, /collections/engagement-rings]. Les fiches du bas de liste n'ont pas de prix lu pour toutes les entrées. Pas de décomposition.
- **Livraison** : « FREE SHIPPING ON ORDERS OVER $1,000 » [V, bandeau]. Frais en dessous de 1 000 $ non relevés.
- **Délai** : processus sur mesure annoncé « environ 10 à 14 jours » dans le texte de la page /pages/custom-jewelry [V] ; délai par produit non relevé.
- **Retours** : 30 jours après réception pour les articles non portés, non modifiés, emballage d'origine ; bague redimensionnée : remboursement possible avec 20 % de frais ; bague redimensionnée de plus de 2 tailles : échange seulement ; **les pièces sur mesure, gravées ou en vente finale ne sont pas remboursables** [V, /pages/return-policy-1].
- **Garantie** : « lifetime guarantees » citées dans « The Masina Diamonds Guarantee » (page « Our story ») ; détails non lus [V, texte].
- **Certificats** : « industry-leading Diamond Certification » ; membre GIA certifié (déclaré) [V, /pages/our-story] ; types de certificat par produit non relevés.
- **Financement** : Synchrony, demande en ligne, estimation de mensualité sur la fiche produit [V].
- **Moyens de paiement au panier** : non relevés (panier non utilisé).

## Confiance et service

- **Boutique physique** : 75 14th St NE, Suite 2300, Atlanta GA 30309, du lundi au vendredi 10 h 30 à 17 h ; dans Americas Mart depuis 1984 ; entreprise familiale (Matt, Sina, puis leur fils Rus) [V, textes].
- **Service** : rendez-vous, réparation, rachat de bijoux, financement, guide de mariage, blog [V, liens].
- **Preuves de fabrication** : décrites en texte (cire optionnelle, CAO 3D) ; aucune photo ni vidéo d'atelier lue [V pour le texte].
- **Avis** : section « WHAT OUR CUSTOMERS ARE SAYING » sur la page financement ; presse : /blogs/press [V, présence].
- **Langue et devise** : anglais seul, dollars [V].
- **Accessibilité** : mode lecteur d'écran (accessiBe) [V].

## Points forts à retenir pour JR Diamond

1. **Constructeur en 4 étapes qui démarre par un style, avec 3 pastilles de métal** : preuve : page chargée, texte « Step 1 of 4 », 8 tuiles (capture mobile). Cadence courte, adaptée au mobile.
2. **Option « Start from scratch » à côté des styles prédéfinis** : preuve : texte de la page. Rejoint le sur mesure.
3. **Politique de retour explicite : 30 jours, avec exception du sur mesure et de la gravure** : preuve : /pages/return-policy-1, section 4.
4. **Rachat de bijoux et réparation proposés** : preuve : liens « Where to Sell Jewelry » et « Jewelry Repair ». Voisin de la transformation de bijoux de famille.
5. **Estimation de mensualité sur la fiche produit** : preuve : /pages/financing, « Check your purchasing power on the product page ».

## Défauts observés

- **Constructeur chargé de façon lourde** : 34 requêtes vers JewelerOS en affichage iPhone contre 5 sur ordinateur ; sur iPhone le contenu de la page est en plus affiché derrière le constructeur [V].
- **Page de départ bavarde** : le pied de page, la navigation et le constructeur partagent le même texte ; le bouton « Back » est présent à l'étape 1 sans destination claire [V, capture].
- **Prix non lus pour toutes les fiches** de la collection ; pas de décomposition [V].
- **Délai « 10 à 14 jours »** pour le sur mesure, sans distinguer fabrication et livraison [V].
- **Fautes de frappe** : « Custom Design Jewelery », « excellent excellent reputation » [V, textes].
- **3 boutons sans libellé** à l'étape du constructeur (accessibilité) [V].

## Limites de l'audit

- **Constructeur non déroulé** (interdit par robots.txt de jeweleros.com) : formes, carats, origine, prix dynamique, mode de vue 3D, partage, enregistrement : **non audités**.
- Pas de fiche produit ouverte ni de panier jusqu'au bout ; panier non testé.
- Mesure du temps d'apparition du visuel principal non faite pour le constructeur (cadre JewelerOS) ; la page de départ était lisible après 6 s sur les deux appareils [V, attente fixe, pas une mesure précise].
- Une seule exécution par appareil ; captures dans le dossier de travail (hors dépôt).

## Sources

- https://masinadiamonds.com/pages/custom-ring-builder
- https://masinadiamonds.com/collections/engagement-rings
- https://masinadiamonds.com/pages/return-policy-1
- https://masinadiamonds.com/pages/financing
- https://masinadiamonds.com/pages/custom-jewelry
- https://masinadiamonds.com/pages/our-story
- https://www.jeweleros.com/robots.txt (règle `Disallow: /api/`)
