# Pays-Bas : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence de JR Diamond en Europe. Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (14 sites, dont un seul néerlandais : DiamondsByMe, fiche n° 11) sans le refaire. La ligne de DiamondsByMe y portait le site français ; on y ajoute ici le site néerlandais et neuf autres acteurs.

Périmètre : joailliers établis aux Pays-Bas qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers, avec au moins un de ces éléments : configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés. Exclus : grandes maisons internationales, grands magasins, places de marché. Les marques nationales sont admises.

Méthode :
- Recherche web (Parallel Search, requêtes génériques), puis sonde Chromium (Playwright, identité par défaut, sans contournement) : statut, adresse finale, langues, canevas, extrait de texte.
- `robots.cjs` avant chaque adresse ouverte, y compris pour les adresses de panier, de filtres et de tri. Une page toutes les 2 secondes au plus par site.
- Aucun formulaire rempli, aucun compte créé, aucun chat ni WhatsApp ouvert, aucun paiement.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026, adresse en source) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- **Le terme employé pour le diamant synthétique est « lab grown diamant »** sur les deux sites les plus aboutis (DiamondsByMe, Vondel) (V). La Fédération Goud en Zilver écrit que, aux Pays-Bas, « synthetisch » et « lab grown » sont tous deux corrects, et rappelle que la France et l'Italie imposent « synthétique » (V, fgz.nl). Aucune règle néerlandaise contraignante n'a été trouvée (I). Vondel écrit « échte diamanten » (« vrais diamants ») pour ses pierres synthétiques : l'adjectif « real » est déconseillé par les lignes directrices de CIBJO (V), un risque de formulation, pas un interdit néerlandais (I).
- **Deux vrais configurateurs ou constructeurs lisibles** : DiamondsByMe (3 étapes, 3D et 360°, vue sur la main, prix décomposé) et Vondel (fiche à options par forme, métal et carat, avec stock par boutique). Les autres sont des catalogues, des rendez-vous ou des configurateurs d'alliances en iframe (V pour Rijk, I pour les autres).
- **Les prix sont affichés TTC** en euros, avec une remise permanente « Black Friday −25 % » chez DiamondsByMe (V).
- **Trois sites bloquent ou ne répondent pas** : Lucardi (Cloudflare 403), Rikkoert (403 « Verification error »), 123gold.nl (le serveur renvoie la page de test d'un serveur Red Hat, 403) (V). Zazare : domaine à vendre (V). Non audités, non contournés.
- **Aucun des dix ne montre de photos ni de vidéos de fabrication d'une commande** (V pour DiamondsByMe et Vondel, I pour les autres). Seule trace : DiamondsByMe propose une réplique 3D en plastique à 12,40 € pour essayer la taille, et promet une image 3D par courriel pour le sur mesure (V).

## Classement

Intérêt pour JR Diamond, dans l'ordre : proximité du modèle (atelier, fabrication à la commande, naturel et synthétique) ; qualité du configurateur et lien image-objet ; transparence du prix ; preuves de fabrication ; offre en synthétique.

Toutes les adresses de « Page de départ » ont répondu 200 dans Chromium le 15/11, sauf mention contraire (V).

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | DiamondsByMe (DBM B.V.) | Rhoon, au sud de Rotterdam ; showroom sur rendez-vous (V) ; bureaux à Anvers, Londres, Duisbourg (V) | https://www.diamondsbyme.nl/ | https://www.diamondsbyme.nl/verlovingsring/ (étape 1 « Kies je model », puis fiche à options) · sur mesure : https://www.diamondsbyme.nl/zelf-ontwerpen/ | **Oui** : 3 étapes (modèle, diamant, assemblage), 3D tournante et vue sur la main, 25 pierres, 6 métaux et titres, prix à chaque choix (V) | Aucun : `robots.txt` « Allow: / » ; Cloudflare sans défi (V) | NL, EN, DE, FR, ES, IT, FI, PL, PT… (35 variantes hreflang) ; devises EUR, USD, GBP, CHF, DKK, NOK, SEK, PLN, HKD, SGD, AUD (V) | Le plus proche : naturel et synthétique côte à côte, prix décomposé (« bijoutier traditionnel » et « vous économisez »), réplique plastique, retour 30 j annoncé. **Audité** : `diamondsbyme.md` |
| 2 | Vondel Diamonds | Amsterdam (2 boutiques) et Den Bosch (V) | https://www.vondel.com/ | https://www.vondel.com/collections/alle-verlovingsringen (194 bagues, filtres) · fiche : https://www.vondel.com/products/lisa-round-solitair-lab-grown-diamond-ring-with-hidden-halo · sur mesure : https://www.vondel.com/eigen-ontwerp | Partiel : fiche à options (9 formes, 7 métaux, 11 carats, taille) avec stock par boutique ; pas de 3D, photos par métal (V) | Aucun. `robots.txt` interdit `/api/`, `/preview/` et les adresses avec `?sort=` ou `?per-materiaal=` (V). Autorise les robots d'IA (V) | NL, EN, DE, FR, ES ; 107 devises dont le shekel (V) | Synthétique seulement, 14/18 k et platine, fabrication sur commande 3 à 5 semaines, premier ajustement de taille offert, sur mesure « sans frais de conception ». **Audité** : `vondel-diamonds.md` |
| 3 | Van Amstel Diamant | Amsterdam (V, description du site) | https://www.vanamsteldiamant.nl/ | https://www.vanamsteldiamant.nl/diamanten (diamants naturels certifiés dès 500 €, puis montage) · sur mesure https://www.vanamsteldiamant.nl/unique | Oui, annoncé : « stel uw eigen diamanten sieraad samen » (extrait de page) ; non actionné (V pour le texte, I pour le fonctionnement) | Aucun ; pas de `robots.txt` (404 en page HTML) (V). reCAPTCHA sur les formulaires (V) | NL (V) | Naturel seulement, GIA/IGI/HRD, 177 000 pierres annoncées, visites sur rendez-vous. Candidat pour un audit suivant |
| 4 | Siebel Juweliers | non vérifiée | https://www.siebeljuweliers.nl/ | https://www.siebeljuweliers.nl/verlovingsringen (catalogue) · alliances : https://siebel.ringconfigurator.nl/ | Oui pour les alliances (configurateur de tiers `ringconfigurator.nl`, 3 collections visibles) ; catalogue pour les bagues de fiançailles (V pour les liens, I pour le contenu) | Aucun ; `robots.txt` du configurateur absent (V) | NL | Chaîne nationale : livraison gratuite dès 59,95 €, retour gratuit en magasin, rubrique « Lab grown diamant » (V) |
| 5 | Delve Jewellery | Amsterdam (V) | https://delvejewellery.com/ | https://delvejewellery.com/collections/engagement-rings · sur mesure https://delvejewellery.com/pages/custom-designed-jewellery | Non : catalogue Shopify et page « custom design » (V) | Aucun (V) | EN (accueil), pages `nl-NL` (V) | Synthétique, or 18 k recyclé, showroom sur rendez-vous, collaboration avec une créatrice (« Delve x Renée Vervoorn ») (V) |
| 6 | Diamonds & Jewels Amsterdam | Amsterdam (V) | https://diamondsandjewels.nl/ | https://diamondsandjewels.nl/pages/trouwringen-zelf-ontwerpen-configurator | Annoncé pour les alliances : « trouwringconfigurator » (page lue, fonctionnement non vérifié) | Aucun : Shopify, `robots.txt` « Allow: / » (V) | NL, EN, ES, DE (V) | Note affichée de 9,5 sur 126 avis (V) ; livraison gratuite dès 250 € avec transport de valeurs (V) |
| 7 | Juwelier Rijk | Amsterdam (V, titre) | https://www.juwelierrijk.nl/ | https://www.juwelierrijk.nl/trouwringen | Oui pour les alliances : iframe du configurateur d'un tiers allemand `konfigurator.jakob-schmuck.de` (V) ; pas de configurateur pour les fiançailles vu | Aucun (V) | NL | « Handgemaakt & Custom Made » (titre) ; le configurateur n'est pas le leur (V) |
| 8 | Royal Coster Diamonds | Amsterdam (I) | https://www.royalcoster.com/nl/ | https://www.royalcoster.com/nl/collections/verlovingsringen | Non : catalogue, diamants libres, « Royal Engagement Experience » (visite) (V pour les liens) | Aucun (V) | NL, EN… (I) | « Plus grand joaillier de fiançailles des Pays-Bas » (auto-proclamé) ; 4,8 sur 599 avis affichés (V) |
| 9 | GASSAN | Amsterdam (I) | https://www.gassan.com/ | https://www.gassan.com/verlovingsringen | Non : catalogue, « Créez votre bague » mène à une prise de rendez-vous (V, lien) | Aucun (V) | NL, EN (V) | Maison de taille de diamants ; programme « Membership » et connexion (V) |
| 10 | Lucardi | non vérifiée | https://www.lucardi.nl/ | https://www.lucardi.nl/sieraden-en-horloges/ringen (rubrique Verloven) | Non vérifiable | **Bloque les robots** : 403 « Sorry, you have been blocked » (Cloudflare) dans Chromium (V). `robots.txt` lu : n'interdit pas la racine (V) | NL (I) | Grande chaîne nationale. **Non auditée** : bloquée |

### Sites vus et écartés

- **Rikkoert** (https://www.rikkoert.nl/) : 403 « Verification error » dès l'accueil (V). Bloqué.
- **123gold.nl** : le serveur répond 403 avec la page de test de Red Hat Enterprise Linux (V). Site hors service ou bloqué.
- **Zazare** (https://www.zazare.com/) : domaine à vendre (V).
- **Brunott** : `robots.txt` illisible (HTTP 403, page HTML) : traité comme bloqué (V).
- **Circles Trouwringen** (https://www.circles-trouwringen.nl/) : spécialiste des alliances, note de 9,8 affichée sur The Perfect Wedding, site WordPress de présentation ; pas de configurateur vu (V pour l'accueil, I pour le reste).
- **Atelier Aroha** (https://www.atelieraroha.nl/verlovingsring/) : atelier de bagues sur mesure, 92 contrôles, formulaire de prise de contact (V pour la page, I pour l'offre).
- **Lyppens Amsterdam** (depuis 1959) et **Aller Spanninga** : catalogues Shopify ou à rendez-vous, sans configurateur vu (V pour l'accueil de la collection).
- **acredo** (acredo-trouwringen.nl) : version néerlandaise d'un fabricant allemand, déjà couvert côté allemand (I).

## Sources

- Sondes Chromium du 15/11/2026 : titre, statut, langues, contrôles de DiamondsByMe, Van Amstel, Vondel, Royal Coster, Gassan, Aller Spanninga, Zazare, Lucardi, Siebel, Juwelier Rijk, Diamonds & Jewels, Delve, Atelier Aroha, Lyppens, Kish (horlogerie, écarté), Rikkoert.
- `robots.txt` : https://www.diamondsbyme.nl/robots.txt, https://www.vondel.com/robots.txt, https://www.vanamsteldiamant.nl/robots.txt (404).
- Terme du synthétique : https://www.fgz.nl/informatie-tekst/lab-grown-synthetische-diamant (Fédération Goud en Zilver) ; CIBJO, lignes directrices 2024 : https://cibjo.org/rstoolkit/diamond-terminology-guideline/ (recommandation « synthetic » seul du 7/9/2026 : voir `2026-11-15_europe.md`).
- Pages de départ citées dans le tableau, lues le 15/11/2026.
