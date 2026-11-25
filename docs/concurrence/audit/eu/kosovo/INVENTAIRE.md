# Kosovo : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond (Europe). Complète `docs/concurrence/2026-11-15_europe.md`, dont aucun des 14 sites n'est kosovar.

Périmètre : joailliers établis au Kosovo qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers (configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés). Grandes maisons internationales, grands magasins et places de marché exclus (GjirafaMall et la boutique officielle Pandora Kosova écartés pour cette raison).

Méthode : recherche web générique (Parallel Search, requêtes en albanais et en anglais) ; `robots.cjs` sur chaque adresse avant ouverture ; lecture par curl (identité par défaut) et Chromium (Playwright, identité par défaut, une page toutes les 2 s au plus par site) ; aucun formulaire envoyé, aucun compte créé.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- **Le territoire est mince : un seul site kosovar est une vraie boutique en ligne de bagues de fiançailles** : Ariana Nila (Prishtinë). Fiche à onglets Vue d'ensemble / Personnaliser / Terminer : choix laboratoire ou naturel, 13 carats, 9 formes de pierre, 14 ou 18 k, taille de doigt, gravure ; prix recalculé à chaque option ; panier jusqu'à la page « Shopping Bag » [V].
- **Le prix change avec le carat, le titre, l'origine et la taille ; il ne change pas avec la forme, et l'image non plus** : les neuf formes de pierre laissent le prix à 3 150 € et la photo de la marquise inchangée [V, voir le rapport].
- **Rubin (Ferizaj et Prishtinë, depuis 1965) est un site vitrine d'une seule page** : cinq modèles d'« unaza fejese » (en réalité des paires d'alliances, fichiers `burmeU00xx.jpg`) avec « dès » 250 à 650 €, or 14 k, zircone ; aucun panier, aucune commande en ligne [V]. Fabricant, gros et détail, plus de 1 500 modèles en boutique, commande sur mesure acceptée [V, affirmation du site].
- **Le synthétique** : seul Ariana Nila le vend en ligne, sous le terme anglais « Lab-Grown » (page « Lab vs Natural Diamonds »), jamais en albanais [V]. Aucun site kosovar lu n'emploie un terme albanais. Termes albanais relevés ailleurs, sur des sites de diaspora : « Diamante laboratori » (émin jewelry, Zurich) et « Unaza të rritura në laborator » (Lola Jewellers, Canada) [V sur ces pages, pas au Kosovo]. Aucune règle kosovare imposant un terme n'a été trouvée [S : recherche non exhaustive].
- **Monnaie : l'euro** (le Kosovo l'utilise sans être dans l'Union) [V : prix en € partout].
- **Blocages** : Flori Diamonds (Cloudflare, HTTP 406 à la première requête curl, non réessayé) traité comme bloqué ; Egzona (`robots.txt` : `Disallow: /`) interdit.
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier lue sur Ariana Nila (« Made in Prishtina », « Handcrafted » en pied de page) ; Rubin montre sa frise historique et un laboratoire d'essai de l'or (2009), pas de fabrication en cours [V sur les pages lues].
- **Écart notable avec les promesses de JR Diamond** : tous les modèles d'Ariana Nila sont des photos de studio ; aucune vue 3D, 360°, vidéo ou essayage [V].

## Classement

Intérêt pour JR Diamond, dans l'ordre : configurateur et lien entre image et objet fabriqué ; prix visible et expliqué ; synthétique proposé ; preuves de fabrication ; proximité du modèle (atelier qui fabrique).

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Ariana Nila | Prishtinë (studio « Ariana Nila Store », +383 49 577 540) [V] | https://ariananila.com/ | https://ariananila.com/collections/engagement-wedding/ ; fiche à options : https://ariananila.com/product/finesa-ring-2ct-marquise-diamond-with-micro-prong-band/ | Oui, de type fiche « Personnaliser » : laboratoire/naturel, 0,5 à 9 ct, forme, titre, taille, gravure ; prix en direct ; pas de 3D, image fixe [V] | Aucun (WordPress + WooCommerce derrière Cloudflare) ; `robots.txt` interdit `?add-to-cart=` en adresse, pas le bouton (envoi POST sans paramètre dans l'adresse) [V] | EN (aucun sélecteur de langue vu) [V] | Seul site kosovar à vendre en ligne des bagues de fiançailles avec prix recalculé ; diamants naturels GIA et synthétiques IGI ; devis sur mesure en deux étapes ; rendez-vous payant ; prix en €, panier fonctionnel |
| 2 | Rubin Jewellery (Rubin Exclusive, Diamond Line, Boutique Albi Mall) | Ferizaj (siège) et Prishtinë [V] | https://www.rubin14k.com/ | https://www.rubin14k.com/ (section « Produktet », ancre `#produktet`) | Non [V] | Aucun ; `robots.txt` vide. Le lien « UNAZA FEJESE » mène à facebook.com/RubinUnazaFejese, **interdit par robots.txt : non ouvert** [V] | SQ (+ quelques mots EN) [V] | Fabricant depuis 1965 (gros, détail, CNC depuis 2005), cinq modèles avec prix « dès » ; aucun achat en ligne : sert de contre-exemple de vitrine sans parcours ; **audité** car c'est le seul autre site kosovar lisible qui affiche des prix de bagues |
| 3 | Almora Jewelry | Prishtinë (Rruga Migjeni) [V] | https://almora-jewelry.com/ | https://almora-jewelry.com/ (sections `#rings`, `/ring-sizer`) | Non [V] | Aucun (`Allow: /`) [V] | EN, SQ [V] | Bijoux d'émeraude et d'or, pas de bague de fiançailles ni de prix lus ; guide des tailles de bague, assistant IA, renvoi vers Instagram ; pas audité (hors des 2 premiers) |
| 4 | Fisi Gold | Prishtinë (Agim Ramadani) [V] | https://fisigold.com/ | https://fisigold.com/collections/unaza | Non [V] | Aucun blocage ; `robots.txt` interdit `/cart/` (panier non ouvert) [V] | SQ [V] | Boutique Shopify encore en gabarit : 14 « Unaza 1 à 13 » à 0,00 €, textes « Short content about your store » ; pas de prix réel, pas d'intérêt ; pas audité |
| 5 | Flori Diamonds | Prishtinë (Prishtina Mall) [V] | https://flori.diamonds/ | https://flori.diamonds/ | Inconnu | **Bloqué** : HTTP 406 de Cloudflare à la première requête curl ; non réessayé, aucune tentative de contournement [V] | Inconnu | « Custom fine jewellery », diamants, or, platine [V d'après la page Facebook affichée par la recherche] ; non auditable |
| (interdit) | Egzona Jewelry | Prishtinë (Albi Mall), Ferizaj | https://egzona.com/ | — | Non [I] | **`robots.txt` : `Disallow: /`** : aucune page ouverte au-delà de `robots.txt` [V] | EN [V d'après la recherche] | Bijoux de cristaux et de pierres à 25-35 € ; hors sujet (ni fiançailles ni alliances) |
| (hors liste) | Rexha Gold | Tirana (Albanie), livraison gratuite au Kosovo [V] | https://www.rexhagold.com/ | https://www.rexhagold.com/sq/ (menu « Bridal » > « Konfigurator ») | Oui, annoncé dans le menu ; non ouvert [V] | Aucun (`robots.txt` PrestaShop standard) | SQ, EN | **Pas un acteur kosovar** : marque albanaise, fabrication italienne ; à traiter dans l'inventaire de l'Albanie si elle existe ; noté ici car elle vend au Kosovo |
| (hors liste) | Autres fiches sans site marchand lu | Prishtinë, Prizren, Ferizaj | — | — | — | — | — | ZEN Diamond Kosova (Prishtina Mall), Argjendaria KOSHI et My Silvers (Prizren), Argjendaria N&N, Artar Kelmendi & Rron Gold, Kamberi Gold, Lisi Gold, Eris Gold : présents sur Google Maps, Facebook ou Instagram, **aucun site marchand trouvé** [V pour l'absence dans mes recherches, pas pour l'inexistence] ; `zen-diamond.com` est un domaine parqué (redirige vers `/lander`) sans lien avec la boutique [V] |

Toutes les adresses des colonnes « adresse » et « page de départ » ont répondu 200 le 15/11 (curl, identité par défaut), sauf Flori Diamonds (406) et Egzona (page non demandée : `Disallow: /`). `robots.cjs` répond AUTORISÉ pour les rangs 1 à 4 et 5 (adresse racine) ; la règle `/cart/` de Fisi Gold n'a pas été enfreinte [V].

## Audits réalisés

- Rang 1 : `ariana-nila.md` (statut complet : fiche, personnalisation, panier ; paiement et passage en caisse non ouverts par règle).
- Rang 2 : `rubin.md` (statut complet pour un site d'une page ; pas de panier à vérifier).

## Sources

- Recherches Parallel Search (requêtes génériques, 15/11/2026) : fiches Instagram, Facebook et Google Maps citées par les résultats pour Rubin, Flori Diamonds, ZEN Diamond Kosova, KOSHI, My Silvers, Artar Kelmendi & Rron Gold ; mapcarta.com/N5205091521 (Rubin Ferizaj) et mapcarta.com/N7129387785 (N&N).
- https://ariananila.com/ , https://ariananila.com/collections/engagement-wedding/ , https://ariananila.com/help/shipping-returns/ , https://ariananila.com/help/faq/ , https://ariananila.com/learn/lab-vs-natural/ , https://ariananila.com/wp-sitemap.xml et ses plans de produits (lus le 15/11).
- https://www.rubin14k.com/ (lu le 15/11, HTML et Chromium).
- https://almora-jewelry.com/ , https://fisigold.com/ , https://fisigold.com/collections/unaza , https://fisigold.com/robots.txt , https://flori.diamonds/ (en-têtes seulement), https://egzona.com/robots.txt , https://www.rexhagold.com/ et `robots.txt`.
- Termes albanais : https://eminjewelry.ch/sq/wissen/fejesa-dhe-unaza et https://lolajewellers.com/sq/collections/lab-grown-rings (pages de diaspora, hors Kosovo).
- Terminologie : CIBJO, Laboratory-Grown Diamond Guidelines (cibjo.org/wp-content/uploads/2024/01/LGD-Guidelines-CIBJO-Final-2024.pdf) : « laboratory-grown », « laboratory-created », « synthetic » synonymes ; abréviation « lab-grown » déconseillée.
