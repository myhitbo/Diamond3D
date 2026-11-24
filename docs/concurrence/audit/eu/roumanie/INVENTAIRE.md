# Inventaire Roumanie : joailliers en ligne (bagues de fiançailles, alliances)

Explorateur : Roumanie (Europe). Date de consigne : 15/11/2026 ; recherches et contrôles faits pendant la session du 24/11/2026.
Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[VR]** vérifié par extrait de recherche web seulement · **[I]** inféré · **[S]** supposé.
Le premier inventaire européen (`docs/concurrence/2026-11-15_europe.md`) ne couvre pas la Roumanie : seul Edenly y est cité, avec le roumain parmi ses 8 langues [V, ce fichier], et 77 Diamonds propose des pages `/ro/` [VR]. Rien n'est refait ici.

Contrôles faits pour chaque adresse : `robots.cjs` (robots.txt, groupe `*`), puis navigateur Chromium ou `curl`. Aucune adresse interdite n'a été ouverte.

**Terme employé pour le diamant synthétique en roumain** [V] : « diamante create în laborator » (STIL Diamonds, DAAR, titres de produit), « diamant de laborator » (recherches), « Lab Grown Diamond / LGD » (Malvensky, fiches STIL), « diamante sintetice » (Sabrini, dans une offre cadeau). Le roumain n'a donc pas de terme imposé unique observé : « créé en laboratoire » domine, « sintetic » apparaît chez un seul acteur.

## Classement par intérêt pour JR Diamond

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | STIL Diamonds (SC STYL SRL) | Râmnicu Vâlcea (siège), showrooms dont Timișoara | https://www.stildiamonds.ro/ | https://www.stildiamonds.ro/cat/verighete-configurabile (200) ; fiche type https://www.stildiamonds.ro/verighete-aur/colectia-harmony/harmony-632 | Oui pour les **alliances** : taille, largeur, couleur et titre de l'or, finition, nombre et type de pierres, gravure avec 8 polices, prix estimé en direct. Pas de configurateur de bague de fiançailles ; bagues de fiançailles en fiches prêtes (naturel, zircone, « create în laborator ») [V] | Aucun blocage technique. robots.txt interdit `/admin`, les filtres de catalogue (`stil_website_products…`) et quelques dossiers. **Le calcul du prix a répondu HTTP 419 « CSRF token mismatch »** dans mes sessions [V] | RO seulement (`/en` renvoie 404) | Seul configurateur d'alliances roumain à options chiffrées trouvé ; 30 bijoutiers et gemmologues annoncés, atelier propre, délai maximal de 14 jours ouvrés annoncé pour les alliances, retour exclu pour le sur-mesure [V] |
| 2 | Sabrini (Irinik SRL) et sa ligne Blanco's | Botoșani (siège), 30 magasins annoncés [VR] | https://sabrini.ro/ | https://sabrini.ro/Inele-Logodna-Diamante-Naturale (200) ; alliances https://sabrini.ro/verighete-aur-sabrini | Non : fiches à options listées en texte, prix « La cerere » (sur demande) pour les alliances. Une publication promotionnelle parle d'un « système de configuration » [VR] non retrouvé sur le site [V] | Aucun blocage technique. robots.txt interdit les adresses `?route=checkout/`, `?route=account/`, la recherche, les tris : **panier et compte interdits**, bouton « Adaugă în coș » non actionné | RO | Plus grande marque nationale, prix de bagues affichés (ex. 44 900 lei), certificat IGI/GIA, retour de 60 jours, livraison gratuite, vidéo d'atelier [V] |
| 3 | Malvensky | Cluj-Napoca (magasin ouvert en 2026 [VR]) ; maison de joaillerie à Bucarest [I] | https://www.malvensky.com/en-ro/ | https://www.malvensky.com/en/engagement-rings (200) | Non : fiches par modèle, pierres LGD en RON (ex. 13 700 RON pour 1,00 ct, 18 k, solitaire), tailles en précommande, boutons « demander une offre » et « prendre rendez-vous » [V] | Aucun ; sélecteur de pays (États-Unis) | EN, RO via sélecteur de région | Offre claire en diamant de laboratoire à prix fixe ; pas de configuration [V] |
| 4 | Valmand | Bucarest (showroom) [VR] | https://www.valmand.com/ | https://www.valmand.com/custom-jewelry (200) | Non : page « Custom jewelry » (consultation, CAO 3D, fabrication, remise), formulaire avec fichier joint, prix en USD [V] | Aucun | EN | Parcours sur mesure décrit en 4 étapes avec visuel 3D de validation ; 1 023 avis Trustpilot annoncés [VR] |
| 5 | StilUnic | Bucarest | https://stilunic.ro/ | https://stilunic.ro/pages/confectionare-bijuterii-la-comanda-0-7 | Non : bijoux sur commande, rubrique « Diamante de laborator » | robots.txt n'autorise que `/` (règle `Allow: /$`) : le reste n'a pas été vérifié page par page | RO | Atelier de sur-mesure ; billet « combien coûte un bijou sur commande » [V, titre] |
| 6 | DAAR (groupe Teilor) | Cluj-Napoca [VR] | https://daar.ro/ | https://daar.ro/diamante | Non : catalogue de diamants créés en laboratoire, prix affichés | Aucun | RO | Marque nationale 100 % laboratoire, texte « diamante create în laborator vs naturale » [V] |
| 7 | Verighete ATCOM (Atcom SRL) | Bucarest | https://www.atcom.ro/ | https://www.atcom.ro/ | Non constaté (page d'accueil seule lue) : alliances et bijoux d'or 14 k de fabrication propre | Aucun | RO | Fabricant d'alliances ; rien de plus vérifié [V, titre] |
| 8 | Variation (variation.in/ro) | Inde, boutique en roumain et en RON | https://variation.in/ro | https://variation.in/ro/collections/inele-de-logodna | Non vérifié | Aucun | RO, EN | Pas une marque nationale (inscrit pour mémoire) ; bagues et pierres de laboratoire IGI [VR] |

Mentionnés, non classés :
- **Blanco's** (blancos.ro), **Aurarul**, **Dalma**, **Lisa&Co** : robots.txt illisible (connexion refusée par le proxy), donc traités comme **bloqués**, non ouverts.
- **Tiara.ro** : robots.txt `Disallow: /`, interdit.
- **Ignis Studio** (alliances et bagues d'auteur, Bucarest) : site officiel non confirmé par la recherche [VR] ; non audité.
- **Swarovski** (diamants créés en RON) : grande marque internationale, exclue.
- Valley Rose Studio : boutique « Design your ring » avec prix en lei, étrangère, exclue.

## Audits faits
Les deux premiers sites qui ne bloquent pas les robots : **STIL Diamonds** (`stil-diamonds.md`, statut partiel) et **Sabrini** (`sabrini.md`, statut partiel : panier interdit par robots.txt).

## Sources
- Recherches web génériques (WebSearch) : configurateur de bague de fiançailles en roumain, alliances configurables, diamants créés en laboratoire en Roumanie (24/11/2026).
- https://www.stildiamonds.ro/ (menu, `/cat/verighete-configurabile`, `/pag/livrare`, `/pag/politica-de-retur`, `/pag/modalitati-de-plata`, `/pag/cum-comand`, `/pag/bijuterii-personalizate-la-comanda`).
- https://sabrini.ro/ (pages alliances, bague, `/returnare`, `/livrare`, `/garantie`, `/comanda-plata`).
- https://www.malvensky.com/en-ro/product/18kt-white-gold-1ct-round-cut-lab-grown-diamond-classic-engagement-ring ; https://www.valmand.com/custom-jewelry ; https://daar.ro/ ; https://stilunic.ro/ ; https://www.atcom.ro/.
- robots.txt lus : sabrini.ro, stildiamonds.ro ; autres sites via `robots.cjs`.
