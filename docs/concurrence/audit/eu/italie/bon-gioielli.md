# Audit : Bon Gioielli (bongioielli.com)

- **Site** : Bon Gioielli, Fonte Nuova (Rome), « Bon Sas di Stefano Bon & C. » (pied de page, V).
- **Page de départ** : https://www.bongioielli.com/anelli-di-fidanzamento-con-diamanti/ (constructeur en 3 étapes).
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur 1366×900, iPhone 13 émulé.
- **Statut** : **partiel**. Le panier (`/cart/`) et la liste de diamants par fiche (`/labdiamond/*`, `/diamond/*`) sont interdits par `robots.txt` : non ouverts. Marques : V vérifié, I inféré, S supposé.

## Parcours

| Étape | Options (V sauf mention) |
|---|---|
| 1. Monture (page de départ) | 5 styles : Solitario, Pavè, Halo, Halo Nascosto, Trilogy. Filtres : style, métal (18 k blanc, jaune, rose ; platine), forme (10), prix (curseur 500 à 7 730 €). Tri : nouveautés, plus vendus, prix croissant ou décroissant. 51 résultats, 20 affichés, bouton « Carica altro » (3 pages) |
| 1b. Fiche de monture (Taygeta) | Métal (4 pastilles), carat du diamant central 0,30 / 0,50 / 0,75 / 1,00 / 1,50 / 2,00 / 3,00, forme « solo rotondo », « Scegli questa montatura », favori, « Consulta un esperto », WhatsApp |
| 2. Diamant | Tiroir « Seleziona il tipo di pietra centrale » : naturel ou lab grown, « Continua ». Puis liste `/diamanti-cresciuti-in-laboratori` (ordre inversé annoncé : diamant d'abord possible) : 149 999 pierres, filtres forme, couleur D à H, pureté IF à SI1, carats, taille, prix, filtres avancés, vue Visual ou Lista, comparaison, derniers vus |
| 3. Bague | Récapitulatif : non atteint (voir limites) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu, recherche, compte, favoris, panier (en-tête) | boutons | Présents ; non actionnés (recherche et compte : `/search/`, `/account/` interdits ; panier `/cart/` interdit) | — | non testé (robots) |
| Bandeau « 100 % made in Italy, service clients 24/7, livraison gratuite en Europe, remboursement garanti » | liens | Mènent aux pages Chi siamo, Contatti, Spedizioni, Resi (V, adresses) | — | OK (liens lus) |
| Cookies Ok / No | boutons | Ferment le bandeau | — | OK |
| Style Solitario / Pavè / Halo / Halo Nascosto / Trilogy | liens | Ouvrent la page filtrée du style (adresses `/anelli-di-fidanzamento-con-diamanti/<style>`) | prix de monture | lien lu, non cliqué un par un |
| Filtri (0) | bouton | Ouvre un tiroir : Stile, Metallo, Forma, Prezzo ; « Cancella tutto », « Visualizza risultato » (V, capture) | — | OK ; les sections n'ont pas pu être dépliées par script : cases de style lues (5 cases `on`) |
| Curseur de prix | range | Plage 500 à 7 730 € lue ; déplacement non testé | — | partiel |
| Ordina | menu | Tri nouveautés, plus vendus, prix ↑ ↓ (texte lu) | — | non cliqué |
| Reimposta Filtri | bouton | Présent | — | non testé |
| Carica altro | bouton | Charge la suite de la liste (3 pages) | — | présent, non cliqué |
| Scegli questa montatura (liste) | liens | Ouvrent la fiche de la monture | prix de monture TTC | OK (20 liens lus) |
| Fiche : pastille 18K blanc / rose / jaune / Pt | pastilles | Le titre « Metallo » et la photo changent (V : fichiers `_WG-01`, `_RG-01`, `_YG-01`). **Platine : le texte devient « Platino » mais la photo reste celle de l'or blanc** | **950 € inchangé pour les 4 métaux** | OK, défaut de prix et d'image |
| Fiche : carat 0,30 / 0,75 / 2,00 / 3,00 (et 0,50, 1,00, 1,50) | boutons | Photos remplacées (fichiers `RD0030`, `RD0075`, `RD0200`, `RD0300` : le diamant change de taille à l'image) | **950 € inchangé** (prix de la monture seule, « diamant exclu » implicite, V) | OK |
| Fiche : galerie (7 vues : portée, vue de face, côté, dessous) | images | 6 à 7 photos statiques, sans 360° ni 3D ni vidéo trouvés (V, capture) | — | OK |
| Condividi | bouton | Cliqué : aucun menu de partage détecté dans le DOM | — | effet non observé |
| Cœur (favori) | bouton | Non testé (crée une liste de souhaits côté client) | — | non testé |
| Scegli questa montatura (fiche) | bouton | Ouvre le tiroir « Seleziona il tipo di pietra centrale » : « Aggiungi Diamante Naturale » ou « Aggiungi Diamante Lab Grown » + « Continua ». L'adresse devient `?shape=Rotondo&cat_filter_metal=18k-oro-bianco` | — | tiroir OK ; le clic sur « Lab Grown » puis « Continua » n'a pas abouti en automatisation (2 essais) |
| Consulta un esperto | lien | Mène à `/appuntamento-virtuale/` (V, adresse) | — | non ouvert |
| WhatsApp (fiche et pied de page) | lien | `api.whatsapp.com/send/?phone=393516742311` (V, adresse) | — | non ouvert (règle) |
| Chat Dal Vivo / Chatta Con Noi | boutons | Présents | — | non ouvert (règle) |
| Dettagli prodotto / Descrizione / Garanzia di rimborso 100 % | accordéons | Ouvrent : SKU, métal, profil « Medio », 6 griffes, style ; texte descriptif ; garantie « se non ricevi esattamente ciò che hai ordinato ti rimborsiamo » (V) | — | OK |
| Avis : Google, Trustpilot, filtres Tutto / Regalo / Prezzo / Diamante / Consegna, tri « Con media », pages 1 à 4 | boutons | Affichés ; non cliqués | — | lus |
| Guide (4C, forme, taille, métaux, fluorescence, « Perché 3EX ») | liens | Pages de contenu (adresses V) | — | non ouvertes |
| Prenota un appuntamento / Prenota la tua consulenza | liens | `/appuntamento-in-store/` et `/appuntamento-virtuale/` | — | non ouverts (formulaires) |
| Newsletter, langue IT/EN | champs | Présents | — | non remplis |
| Liste diamants : forme, couleur, pureté, taille, prix, avancés | boutons | Seul le filtre pureté « VVS1 » a réduit la liste (149 999 → 25 070). Les clics sur forme « Ovale » et couleur « D » n'ont rien changé par script | prix par pierre | partiel |
| Liste diamants : Lista | bouton | Affiche des lignes « 0,55 carati, diamant rond lab grown, couleur G, pureté IF, taille ID, 466 € barré 621 € (IVA incluse) » | 466 € / 621 € | OK |
| Liste diamants : Naturale / Lab Grown | bascules | Présentes ; non confirmées par script | — | partiel |

## Options disponibles

- **Styles** : solitaire, pavé, halo, halo caché, trilogy ; en plus « Toi et moi » et « Pronta consegna » (prêts en 2 jours).
- **Métaux** : or blanc, jaune, rose 18 k ; platine. Pas de 14 k.
- **Formes** : rond, princesse, coussin, ovale, radiant, poire, émeraude, marquise, asscher, cœur.
- **Carats de la fiche** : 0,30 à 3,00 (7 valeurs). **Couleur (liste)** : D à H. **Pureté** : IF à SI1. **Taille** : « Eccellente » et « Ideale » (3EX uniquement, V texte).
- **Certificats** : GIA ou IGI (3EX) (V texte). **Origine** : naturel ou lab grown.
- **Taille de doigt** : pas de sélecteur dans le parcours lu ; un mesureur de doigt est expédié gratuitement après la commande, puis la taille est fixée ensemble (V, page Spedizioni). **Gravure** : non trouvée dans ce que j'ai lu.

## Prix, délais, retours, garanties

- **Prix** : prix de la **monture seule**, TTC (« IVA inc »), 950 € à 1 300 € sur les premières cartes lues dans la page du 15/11 (un extrait de recherche antérieur donnait 713 € pour Taygeta : le prix a varié, V), plage 500 à 7 730 € (V). Le prix du diamant s'ajoute séparément (« basé sur couleur, pureté, carat, taille », V). Pas de décomposition main-d'œuvre / métal / marge.
- **Promotions** : bandeau Black Friday « 20 à 25 % » (V) ; la liste de pierres affiche un prix barré (466 € pour 621 €, rapport 0,75 : cohérent avec « 25 % lab grown », I).
- **Paiement en 3 fois** : Klarna et PayPal (V, cartes).
- **Délai** : « 2 à 3 semaines » (page Spedizioni) ; la fiche du 15/11 annonce « ricevilo entro lunedì 14 dicembre » (V). « Pronta consegna » en 2 jours.
- **Livraison** : gratuite en Europe, DHL, assurée, signature d'un adulte.
- **Retours** : 15 jours, gratuits en Europe, deux retours gratuits par client et par an, article neuf avec emballage et certificat (V). L'exception du sur-mesure n'a pas été lue (texte tronqué à ma lecture) : non vérifié.
- **Mise à taille** : gratuite après livraison ; le client ne paie que le transport (V). La fiche affiche aussi « Resizing gratuito entro 10 giorni » (V, capture, chiffre à relire).
- **Paiements acceptés** : PayPal, cartes Visa, Mastercard, Maestro, virement (annulé sans copie sous 48 h), Klarna, Soisy (V).

## Confiance et service

- Avis : Google « 350+ » à 5 étoiles, Trustpilot 4,9 (V, affichage du site, non audité). Avis datés de « 1 mois ».
- Rendez-vous en boutique ou en visio, WhatsApp, téléphone, chat, carte cadeau, garantie « remboursement à 100 % » (V, liens).
- Boîte cadeau et certificat GIA ou IGI joints (V, bandeau vidéo).
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier de la commande ; seuls des e-mails de suivi sont évoqués (« ti terrà aggiornato », V). Photos de bagues portées par des mains.
- Libellé : « Lab Grown », « creato in laboratorio », « diamanti etici » (V) ; « sintetico » absent.

## Mesures de chargement

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Liste de montures : premier ring visible | ≈ 1,8 s (DOM 1,7 s, première image 1,4 s) | ≈ 1,7 s (DOM 1,6 s) |
| Fiche : première photo de produit | 1,7 s | 1,8 s |
| Liste de diamants (`/diamanti-cresciuti-in-laboratori`) | ≈ 5 s (8,8 s mesurés dont 3,5 s d'attente) | non mesuré |

Mesures uniques, depuis un centre de données ; à prendre comme ordre de grandeur (V).

## Points forts à retenir pour JR Diamond

1. **Filtres du diamant et de la monture avec photo qui suit le carat** : chaque carat remplace les images (fichiers `RD0030` à `RD0300`) : preuve, fiche Taygeta.
2. **Choix naturel ou lab grown posé tout de suite**, dans un tiroir à deux cartes avec une phrase d'explication : preuve, capture du tiroir.
3. **Prix lisible par pièce, TTC**, avec Klarna en 3 fois affiché sur la carte : preuve, listes.
4. **Mesureur de doigt envoyé gratuitement et mise à taille offerte** : page Spedizioni.
5. **Double preuve sociale** (Google et Trustpilot) sur chaque fiche.
6. **Prêt à livrer en 2 jours** à côté du sur-mesure : onglet « Pronta consegna ».

## Défauts observés

- Le prix affiché de la monture **ne change ni avec le métal (platine compris) ni avec le carat** (950 € pour 0,30 ct et 3 ct, or comme platine) ; le coût réel n'apparaît qu'après le choix du diamant.
- **Platine montré avec les photos de l'or blanc.**
- « Anteprima a 360° in tempo reale » annoncée dans le texte, mais la fiche n'offre qu'une galerie de photos fixes (V) ; un visualiseur `3d-ring-studio` existe probablement mais interdit aux robots (I).
- Liste de 149 999 diamants sans indication claire du délai ou du poids réel avant sélection ; temps de chargement de 5 à 9 s.
- Bouton « Condividi » sans menu observé.
- Pas de gravure, de 14 k, ni de fichier de fabrication montré.

## Limites de l'audit

- Pas d'ouverture de `/cart/`, `/checkout/`, `/search/`, `/account/`, `/labdiamond/*`, `/diamond/*`, `/3d-ring-studio/`, `/wp-json/` (interdits par `robots.txt`) : parcours arrêté au tiroir de choix de la pierre ; récapitulatif et panier non vus.
- Les clics sur Lab Grown puis Continua, sur forme et couleur de la liste de diamants, et sur les sections du tiroir de filtres n'ont pas pu être automatisés de façon fiable : états non vérifiés.
- Aucun chat, WhatsApp ni formulaire ouvert. Une seule session, un seul jour.
- Texte de la page de retours tronqué à 2 600 caractères : exception du sur-mesure non lue.

## Sources

- https://www.bongioielli.com/anelli-di-fidanzamento-con-diamanti/ · fiche https://www.bongioielli.com/solitari/taygeta-anello-di-fidanzamento-solitario-con-6-griffe/ · https://www.bongioielli.com/diamanti-cresciuti-in-laboratori
- https://www.bongioielli.com/spedizioni/ · https://www.bongioielli.com/resi-e-rimborsi/ · https://www.bongioielli.com/metodi-di-pagamento/
- https://www.bongioielli.com/robots.txt (lu le 15/11/2026)
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/italie/bon/`
