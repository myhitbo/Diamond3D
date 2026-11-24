# Monaco : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond en Europe. Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun monégasque) sans le refaire.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré (extrait d'index de recherche, déduction) · **S** supposé.

Périmètre : joailliers établis dans la Principauté qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers (configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés). Grandes maisons internationales (Cartier, Van Cleef & Arpels, Bulgari…), grands magasins et places de marché exclus.

Méthode : recherche web générique en français et en anglais (Parallel Search) ; lecture du `robots.txt` avec l'outil de contrôle imposé avant chaque adresse ; Chromium (Playwright, identité par défaut) ; une page toutes les 2 secondes au plus par site ; aucun formulaire rempli, aucun compte, aucun chat.

## Ce qu'il faut retenir

- **Aucun configurateur en ligne, aucun visuel 3D ou 360° de bague** n'a été trouvé à Monaco (V sur les deux sites audités ; I sur les autres). Le marché monégasque vend sur rendez-vous, avec des photos fixes (V).
- **Seuls deux acteurs affichent des prix de bagues de fiançailles et ont un panier** : Barth Monte-Carlo (Shopify, 62 bagues de fiançailles, de 2 380 € à 185 000 €) et TheWatchProject (Wix, 5 bagues en stock, de 3 650 € à 12 000 €, en diamants « lab grown » avec certificat IGI) (V).
- **Les maisons de haute joaillerie ne montrent pas leurs prix** : Vitale 1913 affiche « Price on request » sur chaque bague (V). Claris-A, Les Ateliers MC et Diamantaire de Monaco n'ont pas de boutique en ligne de bagues (V).
- **Le sur mesure se fait par contact ou rendez-vous**, jamais en ligne : Barth annonce croquis, modèle 3D envoyé au client et cire optionnelle (V) ; Diamantaire de Monaco annonce des « rendus 3D calibrés » (I, extrait de page).
- **Une seule offre en synthétique** : TheWatchProject (« Lab Grown », IGI). Barth vend du naturel (GIA ou HRD) (V).
- **Le droit du sur mesure est annoncé** : Barth exclut du droit de rétractation les pièces gravées, personnalisées, mises à taille (V) ; TheWatchProject exclut le sur mesure et déclare tout acompte non remboursable (V).
- **Deux sites bloquent ou refusent les robots** : Diamant Factory et Elvé (connexion coupée, `robots.txt` illisible : marqués « bloqué »).

## Terme employé pour le diamant synthétique

| Langue | Terme observé | Où | Statut |
|---|---|---|---|
| Anglais | « Lab Grown Diamond » | TheWatchProject, fiches des bagues et page « Engagement rings » : https://www.thewatchprojectmonaco.com/luxury-diamond-engagement-rings-monaco | V |
| Français | Aucun terme observé : Barth ne vend que du naturel (« diamants », « certifié GIA ou HRD ») | https://www.barthmontecarlo.com/products/bague-pure-0-30-ct-or-blanc | V |
| Français (Diamant Factory) | Non vérifiable (site bloqué) | — | — |

Règle applicable : aucune réglementation monégasque propre sur la dénomination n'a été trouvée (S). Les CGV de Barth invoquent le code civil monégasque et renvoient au droit français pour les garanties (V) ; l'application du décret français 2002-65 (« synthétique ») à Monaco reste à confirmer par un juriste (S).

## Classement

L'intérêt pour JR Diamond est mesuré, dans cet ordre, par : la proximité du modèle (atelier, fabrication à la commande, vente en ligne avec prix) ; le choix d'options en ligne ; la transparence du prix ; les preuves de fabrication ; l'offre en synthétique.

Toutes les adresses de la colonne « Page de départ » ont répondu 200 (V), sauf mention contraire.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Barth Monte-Carlo | Monaco (salon sur rendez-vous ; fabrication à Valenza, Italie, et en France) | https://www.barthmontecarlo.com/ | https://www.barthmontecarlo.com/collections/bagues-de-fiancailles (fiche type : https://www.barthmontecarlo.com/products/bague-pure-0-30-ct-or-blanc) | Non. Catalogue de 62 bagues, une fiche par métal (or blanc, jaune, rose) et par poids, choix de taille 44 à 70, panier. Sur mesure par contact, avec modèle 3D envoyé au client | Aucun ; robots.txt : `/cart/`, `/cart.js`, `/checkout` et les tris `sort_by` interdits (V) | FR (V) ; EN non vu | Le plus proche d'un vendeur en ligne : prix TTC affichés, livraison offerte, délai de fabrication annoncé (3 à 4 semaines), alliances en ligne. **Audité** : `barth-monte-carlo.md` |
| 2 | THEWATCHPROJECT Monaco | Monaco (23 bd Princesse Charlotte) | https://www.thewatchprojectmonaco.com/ | https://www.thewatchprojectmonaco.com/luxury-diamond-engagement-rings-monaco | Non. 5 bagues en stock (platine, diamant « lab grown » IGI de 2 à 5 ct) avec bouton « Add to Cart » ; sur mesure par formulaire | Aucun ; robots.txt `Allow: /` (V) | EN, FR, IT (V) | Seul vendeur monégasque de synthétique : prix, numéro de certificat IGI, couleur et pureté sur la fiche. Marchand de montres d'occasion qui ajoute des bagues : ce n'est pas un atelier. **Audité** : `thewatchproject-monaco.md` |
| 3 | Vitale 1913 | Monaco (Les Boulingrins, 5 av. Princesse-Alice) | https://vitale1913.com/ | https://vitale1913.com/collections/eng-rings (alliances : https://vitale1913.com/collections/wedding-band) | Non. Pages « Engagement Ring », « Classic solitaries », « Wedding bands », « Bespoke » | Aucun ; robots.txt `Allow: /` (V) | EN, FR (V) | Maison de haute joaillerie de quatre générations (I) : 6 bagues de fiançailles et 15 alliances en ligne, toutes « Price on request », aucun bouton « add to cart » (V). Non audité : pas de prix ni de panier, donc moins utile que les deux premiers |
| 4 | Diamant Factory | Monaco (36 bd des Moulins) et Aix-en-Provence | https://www.diamantfactory.fr/ | https://www.diamantfactory.fr/ (onglet « e-shop ») | Non (I) : fiches « à partir de 1 790 € » (alliance « Aurore »), 1 890 € (solitaire « Culte ») (I, extrait d'index) | **Connexion coupée** (`robots.txt` illisible, HTTP 0, deux essais du contrôleur et de curl) : marqué « bloqué » (V) | FR | Annonce « mise à taille offerte », « 3 fois sans frais », livraison offerte, sur mesure (I). Atelier d'origine marseillaise ou aixoise plus que monégasque : rattachement à Monaco par une adresse de boutique (I). **Non audité** : bloqué |
| 5 | Diamantaire de Monaco | Monaco (Palais de la Scala, sur rendez-vous) | https://www.diamantairedemonaco.com/ | https://www.diamantairedemonaco.com/ | Non. Négociant en diamants naturels certifiés ; joaillerie sur mesure avec « rendus 3D calibrés » (I) | Aucun ; pas de robots.txt (V) | FR, EN, IT, RU | Pas de bague ni de prix en ligne : formulaire d'estimation et rendez-vous. Utile pour son argument « coûts transparents, production après satisfaction » (V) |
| 6 | Claris-A | Monte-Carlo | https://www.claris-a.com/ | https://www.claris-a.com/ | Non | Aucun (V) | EN | Joaillier de 1964, bijoux uniques, pierres de couleur, sur mesure par conversation. Aucune bague de fiançailles à prix, aucun panier (V) |
| 7 | Les Ateliers MC | Monaco (Le Montaigne A, 2 av. de la Madone) | https://www.lesateliersmc.com/ | https://www.lesateliersmc.com/ | Non | Aucun (V) | EN | Haute joaillerie et horlogerie sur mesure, fabrication « Swiss made », pas de boutique en ligne (V) |

Écartés : Elvé Bijoux Monte-Carlo (https://www.elvebijoux.com/) : bijoux de créateurs en argent, 63 à 325 € dans l'extrait d'index, sans bague de fiançailles ; connexion coupée en plus (I). Boutiques de grandes maisons internationales : exclues par la consigne.

Nombre d'acteurs : 7 (moins de 10). Un seul configurateur de bague vendeur au sens de JR Diamond n'existe pas à Monaco ; les deux premiers sont audités comme vendeurs avec prix et panier.

## Écarts à signaler

- Sur Barth Monte-Carlo, chaque chargement de page déclenche une requête de la boutique Shopify vers `/cart.js`, que le robots.txt interdit. Elle vient du script de la boutique, pas d'un script d'audit, et n'a pas pu être évitée en navigateur ; aucune autre adresse interdite n'a été ouverte (`/cart/add.js` et la page de panier n'ont pas été visités). Le panier de Barth n'a donc pas été atteint.
- Les liens de rendez-vous de Barth renvoient vers un service externe de réservation (YouCanBook.me, classe `ycbm_link`) : non ouvert.

## Sources

- Barth Monte-Carlo : https://www.barthmontecarlo.com/ · https://www.barthmontecarlo.com/robots.txt · https://www.barthmontecarlo.com/pages/livraison-et-retour · https://www.barthmontecarlo.com/pages/creations-sur-mesure · https://www.barthmontecarlo.com/pages/cgv-et-mentions-legales
- TheWatchProject : https://www.thewatchprojectmonaco.com/luxury-diamond-engagement-rings-monaco · https://www.thewatchprojectmonaco.com/refund-policy · https://www.thewatchprojectmonaco.com/terms-conditions
- Vitale 1913 : https://vitale1913.com/collections/eng-rings · https://vitale1913.com/collections/wedding-band
- Diamant Factory (extrait d'index) : https://www.diamantfactory.fr/
- Diamantaire de Monaco : https://www.diamantairedemonaco.com/
- Claris-A : https://www.claris-a.com/ · Les Ateliers MC : https://www.lesateliersmc.com/ · Elvé : https://www.elvebijoux.com/ (extrait d'index)
- Recherche web : Parallel Search, requêtes génériques en français et en anglais sur les joailliers de Monaco, le 15/11/2026.
