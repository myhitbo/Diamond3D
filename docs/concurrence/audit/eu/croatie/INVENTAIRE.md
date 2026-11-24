# Croatie : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond (Europe). Complète `docs/concurrence/2026-11-15_europe.md`, qui ne couvre pas la Croatie (aucun des 14 sites n'est croate).

Périmètre : joailliers établis en Croatie qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers, avec au moins un de ces éléments : configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés. Grandes maisons internationales, grands magasins et places de marché exclus.

Méthode : recherche web générique en croate (Parallel Search) ; `robots.cjs` sur chaque adresse avant ouverture ; lecture avec curl (en-tête Safari) et Chromium (Playwright, identité par défaut, une page toutes les 2 s au plus par site) ; aucun formulaire envoyé, aucun compte créé.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- **Un seul vrai configurateur 3D, et il ne fait que les alliances** : Ardigold (Dugo Selo), prix en direct, mais envoi d'un upit (demande) sans paiement en ligne [V].
- **Aucun configurateur de bague de fiançailles** trouvé en Croatie [I : recherche non exhaustive]. Les autres vendent un catalogue avec prix affichés (Dvornik, Dodić, Križek, AR) ou annoncent du sur mesure sans outil en ligne (Zrin, 4S).
- **Le synthétique est déjà là, avec des mots différents selon les sites** : « laboratorijski dijamant(i) » (Dvornik, Križek, Ardigold), « dijamant uzgojen u laboratoriju » (Glamira.hr, d'après un extrait d'index), « laboratorijski proizvedeni dijamanti » (4S), « Lab-grown » (Križek) [V]. Aucun site lu n'emploie « sintetički » dans ses libellés produit [V sur les pages lues ; I pour le reste]. Terme à retenir pour la page croate : « laboratorijski dijamant » (usage observé) ; une règle légale croate n'a pas été recherchée [S].
- **Monnaie : l'euro** (la Croatie l'utilise ; prix en € TTC sur tous les sites lus) [V].
- **Deux sites bloquent les robots** : Zlatarnica Gerić (robots.txt en 403) et Glamira.hr (403 ; marque paneuropéenne d'origine allemande, hors périmètre « marque nationale ») [V].

## Classement

Intérêt pour JR Diamond, dans l'ordre : configurateur et lien entre image et objet fabriqué ; prix visible et expliqué ; synthétique proposé ; preuves de fabrication ; proximité du modèle (atelier qui fabrique).

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Ardigold (ARDIGOLD d.o.o.) | Dugo Selo (près de Zagreb) [V] | https://ardigold.com/ | https://ardigold.com/konfigurator/ | Oui : 3D temps réel, 4 étapes, prix en direct (€, TTC), alliances seulement [V] | Aucun (robots.txt autorise) [V] | HR ; page EN `/en/home-en/` [V] | Atelier familial depuis 1965 ; 12 profils, 10 métaux, 11 finitions, pierres, gravure ; prix = estimation au cours de l'or, upit sans paiement ; audité |
| 2 | Zlatarije Dvornik | Split (Obala Hrvatskog narodnog preporoda 20) [V] | https://dvornik.hr/ | https://dvornik.hr/product-category/zarucnicko-prstenje/zarucnicko-prstenje-laboratorijski-dijamanti/ | Non : catalogue de « projets 3D » (rendus) avec option de couleur d'or [V] | Aucun ; robots interdit `?add-to-cart=` [V] | HR [V] | Boutique WooCommerce complète jusqu'au panier ; bagues en synthétique IGI, naturel, moissanite ; délai 2 semaines annoncé ; audité |
| 3 | Zlatarna Križek | Velika Gorica et Dubrovnik [V] | https://www.krizek.hr/ | https://www.krizek.hr/laboratorijski-dijamanti | Non ; « 3D vizualizacija prije izrade » annoncée sur l'accueil [V] | Aucun (Allow: /) [V] | HR [V] | Page dédiée aux bagues « lab-grown » avec prix (dès 310 €) ; sur mesure ; 102 avis Google affichés (4,5/5) ; page rendue par JavaScript (HTML de 1,3 Ko) |
| 4 | Zrin Nakit | Zagreb (centre Importanne) [V] | https://www.zrin-nakit.hr/ | https://www.zrin-nakit.hr/zarucnicko-prstenje | Non ; création sur croquis ou image [V] | Aucun [V] | HR [V] | Fabricant (3D, impression 3D, 30 ans) ; plus de 600 modèles d'alliances ; certificat IGI dès 0,06 ct ; vidéo « comment naît la bague » |
| 5 | Zlatarnica 4S | non vérifiée | https://www.zlatarnica4s.hr/ | https://www.zlatarnica4s.hr/ | Non ; « dizajnirajte prsten uz našeg majstora », modélisation 3D en atelier [V] | Aucun (Allow: /) [V] | HR [V] | Moissanite et diamants de laboratoire GIA ; alliances en 3 h ; transformation de bijoux ; pas de prix lu |
| 6 | Zlatarna Dodić | Zagreb, 7 boutiques dont Split [V] | https://www.zlatarna-dodic.hr/ | https://www.zlatarna-dodic.hr/katalog/prsteni/zarucnicki-prsteni | Non ; 142 bagues filtrables (or, pierre, carat, prix, boutique) [V] | Aucun [V] | HR [V] | Chaîne nationale ; prix affichés avec date (« Cijena na 14. 9. 2026 ») ; naturel seulement dans les filtres |
| 7 | Malalan | Istrie (non vérifié) | https://malalan.eu/hr/ | https://malalan.eu/hr/nakit/prstenje/zarucnicko-prstenje | Non ; filtres pierre, métal, taille [V] | Aucun (Allow: /) [V] | HR, autres versions [I] | Joaillier de marques (Rolex, Pomellato) ; or 18 k et diamants ; peu de prix lus |
| 8 | Zlatarna AR | Zadar [V] | https://zlatarna-ar.hr/ | https://zlatarna-ar.hr/ | Non [V] | Aucun [V] | HR [V] | Webshop avec prix, IGI sur tous les diamants, livraison 5 € / 20 € UE ; offre modeste |
| 9 | Zlatarna Đonlić | Split [I] | https://zlatarna-donlic.hr/ | https://zlatarna-donlic.hr/collections/zarucnicko-prstenje | Non [V] | robots.txt autorise ; la page a répondu 429 (limite de débit) à un curl, lisible dans l'index [V] | HR [V] | Shopify, 207 bagues avec prix ; « izrada po narudžbi » |
| 10 | Zlatarnica Gerić | non vérifiée | https://zlatarnica-geric.hr/ | https://zlatarnica-geric.hr/ | Non [I] | **Bloqué** : robots.txt illisible (HTTP 403) → site traité comme bloqué [V] | HR | Annonce (Instagram) une collection de fiançailles naturel et laboratoire ; non auditable |
| (hors liste) | Glamira.hr | — | https://www.glamira.hr/ | https://www.glamira.hr/zarucnicki-prsteni | Oui, mais marque paneuropéenne (pas une marque nationale) [I] | **Bloqué** : robots.txt 403 [V] | HR | Seulement noté : 3 388 bagues personnalisables, prix dès 195 €, retour 60 jours (extraits d'index de recherche) |

Toutes les adresses de la colonne « page de départ » ont répondu 200 le 15/11 (curl avec en-tête Safari), sauf Đonlić (429) et les deux sites bloqués [V].

## Audits réalisés

Les deux premiers sites non bloquants :

1. Ardigold : `audit/eu/croatie/ardigold.md`
2. Dvornik : `audit/eu/croatie/dvornik.md`

## Sources

- Recherches (Parallel Search, requêtes génériques en croate et en anglais) : « zaručnički prstenovi online », « vjenčani prstenovi konfigurator », « laboratorijski uzgojeni dijamant », etc.
- robots.txt lus par `robots.cjs` : ardigold.com, dvornik.hr, zrin-nakit.hr, zlatarna-dodic.hr, krizek.hr, zlatarnica4s.hr, malalan.eu, zlatarna-donlic.hr, zlatarna-ar.hr ; illisibles (403) : zlatarnica-geric.hr, glamira.hr.
- https://ardigold.com/pravni/uvjeti/ · https://dvornik.hr/opci-uvjeti-poslovanja/ · https://www.krizek.hr/laboratorijski-dijamanti · https://www.zrin-nakit.hr/zarucnicko-prstenje · https://www.zlatarnica4s.hr/ · https://www.zlatarna-dodic.hr/katalog/prsteni/zarucnicki-prsteni · https://zlatarna-ar.hr/ · https://malalan.eu/hr/nakit/prstenje/zarucnicko-prstenje · https://zlatarna-donlic.hr/collections/zarucnicko-prstenje
- Écart signalé : aucun chemin interdit n'a été ouvert. Sur Dvornik, les boutons d'ajout direct de la liste pointent vers `?add-to-cart=` (interdit) : non utilisés ; l'ajout au panier a été fait par le formulaire de la fiche produit, avec blocage de toute requête `add-to-cart`.
