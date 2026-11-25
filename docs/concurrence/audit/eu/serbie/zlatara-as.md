# Audit : Zlatara AS (Novi Sad, Belgrade)

> **[P1] pour tout le rapport (relevé le 25/11)** : le robots.txt du site interdit tout aux agents Claude (`Disallow: /` dans un groupe nominatif ClaudeBot / anthropic-ai). L'outil de contrôle ne lisait que le groupe `*` (défaut corrigé le 25/11) : l'audit l'a suivi à tort. Constats gardés pour mémoire, valeur [P1], jamais repris comme vérifiés.

- **Site** : https://www.zlatara-as.rs/ (Wedding Centar Zlatara AS ; boutiques à Novi Sad, Jevrejska 34, et Novi Beograd, Belvil ; depuis 1991 selon l'accueil [V])
- **Page de départ** : fiche de bague à variantes https://www.zlatara-as.rs/product/classics-prsten-k191-roze-zlato/ (pas de configurateur) ; catalogue https://www.zlatara-as.rs/kategorija/verenicko-prstenje/
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13.
- **Statut** : **complet jusqu'au panier** (`/korpa/`). Sélecteur de taille, « Opcije isporuke » et moyens de paiement finaux non vus ; commande (`/porudzbina/`) non ouverte.
- Marques : **V** vérifié, **I** inféré, **S** supposé.

## Parcours

| étape | options |
|---|---|
| Catalogue | « Veridba i venčanje » : vereničko prstenje (2 119 bagues), burme, moissanite, laboratorijski dijamanti ; 7 collections (K Twin 6, Oval 207, Soliter 313, AS Modeli 288, Classics 752, Memory 495, InvisiDiamond 15) [V] |
| Fiche | Metal (14K / 18K) × Vrsta kamena (5) ; taille ; accessoire « krpa za poliranje » ; quantité |
| Panier | récapitulatif, coupon, points, livraison, total, « Nastavite na poručivanje » |

## Contrôles vérifiés

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| Metal : 14K Zlato / 18K Zlato | bouton à pastille (liste cachée) | met à jour le prix ; l'image **ne change pas** (même fichier pour les 10 combinaisons) | 14 k 91.040 à 204.480 ; 18 k 127.840 à 241.280 RSD | OK [V] |
| Vrsta kamena : Moissanite VVS | pastille | prix recalculé | 14 k 91.040 ; 18 k 127.840 | OK [V] |
| Vrsta kamena : Lab Diamond VS | pastille | prix recalculé | 14 k 111.760 ; 18 k 148.560 | OK [V] |
| Vrsta kamena : Natural Diamond SI | pastille | prix recalculé | 14 k 170.080 ; 18 k 206.880 | OK [V] |
| Vrsta kamena : Natural Diamond VS | pastille | prix recalculé | 14 k 188.480 ; 18 k 225.280 | OK [V] |
| Vrsta kamena : Natural Diamond VVS | pastille | prix recalculé | 14 k 204.480 ; 18 k 241.280 | OK [V] |
| Reset des variantes | lien | visible après choix | — | non cliqué |
| Ne znam tačnu veličinu | case | cochée : « Veličina : Ne znam tačnu veličinu » dans le panier | 0 | OK [V] |
| Veličina (EU 5 à EU 18, avec mm, Ø, US ; « Drugo » + champ texte) | liste | désactivée et masquée dans mes essais | — | **non établi** : jamais actionnable |
| « O veličini » | texte | explique qu'on prend une taille moyenne (≈ 53 mm) et qu'on corrige après la demande | — | lu [V] |
| Krpa za poliranje nakita : DODAJ | bouton + nombre | ajout d'un accessoire (1.000 RSD, 500 RSD en promotion) | +500 | non cliqué |
| Količina | nombre | 1 par défaut | — | non modifié |
| DODAJ U KORPU | bouton | « Proizvod je u korpi » ; la page reste sur la fiche ; POST WooCommerce (`admin-ajax.php`) | — | OK [V] |
| Onglets (8) | onglet | Održavanje i servis ; Veličina i korekcija ; Slike, opisi i dostupnost ; O kamenju ; Classics prstenje ; Uzmi račun ; Recenzije (0) ; O prstenju | — | 5 lus, 3 non lus |
| Platite do 12 mesečnih rata (Banca Intesa) | texte | rappel de paiement échelonné | — | lu |
| Pretraga (champ de recherche) | champ | non utilisé (`/?s=` interdit) | — | non testé |
| Prikaži 16 / 40 / 80 / Sve ; tri ; filtres | liste | catalogue ; le tri `?orderby=` et les filtres `?filter_` sont interdits par robots.txt | — | non actionnés |
| Panier : Količina | nombre | 1 | — | non modifié |
| Panier : Imate kupon ? / OK | champ + bouton | coupon | — | non testé |
| Panier : Izmeni opcije / Ukloni / ISPRAZNI KORPU | liens | modifier, retirer, vider | — | non cliqués |
| Panier : Opcije isporuke | bouton | non ouvert | — | non testé |
| Panier : Nastavite na poručivanje | lien | mène à `/porudzbina/` | — | non ouvert |
| Téléphone 066 / 205 060 | lien | `tel:` | — | non ouvert |

## Options disponibles

- **Métal** : 14 k, 18 k selon la fiche ; les textes du site disent « 14K ou 18K, platine Pt950 sur certains modèles » et burme en 9K, 14K, 18K, Pt950 et titane [V].
- **Pierre centrale** (fiche K191, ovale 5×4, 0,30 ct) : moissanite VVS, synthétique « Lab Diamond VS », naturel SI, VS, VVS [V].
- **Autres pierres du catalogue** : zircon, saphir blanc, tanzanite, aigue-marine, morganite, rubis, saphir bleu, émeraude, diamant noir [V].
- **Taille** : EU 5 à EU 18 (45 à 58 mm), ou « je ne sais pas » [V].
- **Accessoires** : krpa za poliranje (microfibre).
- **Services** : AS Invest (or d'investissement), rachat d'or, Personal shopper, Price Match [V].

## Prix, délais, retours, garanties

| point | constat | statut |
|---|---|---|
| Prix affiché | fourchette « 91.040,00 à 241.280,00 RSD », « PDV je uračunat u cenu i nema skrivenih troškova » | V |
| Décomposition | aucune (pas de ligne métal, façon, pierre) ; prix par variante seulement | V |
| Promotion | prix barré par variante (ex. 139.700 → 111.760 pour or 14 k + synthétique, soit −20 %) avec « najniža cena u poslednjih 30 dana » ; pour cette variante la mention dit 139.700 RSD | V |
| Disponibilité | « BackOrder » dans les données structurées, « Po porudžbini » dans le catalogue ; guide : « izrada najčešće traje do približno mesec dana » | V |
| Retours | 14 jours pour les bagues en stock, non portées ; **exception** pour les bagues « koje nije sa stanja », sur spécification du client, « specijalne 3D izrade » ; frais de retour à la charge de l'acheteur ; remboursement par carte, dans les 14 jours après réception du formulaire | V |
| Réclamations | réponse en 8 jours, résolution en 15 jours au plus ; formulaire PDF ; rappel : fiscalité (« Uzmi račun ») | V |
| Garanties | première correction de taille et polissage gratuits ; si la bague est rendue juste après les fiançailles, non portée, une nouvelle bague à la bonne taille peut être faite | V |
| Panier | 111.760 RSD (dont 18.626,67 RSD de TVA), « Uštedili ste 27.940 RSD », livraison : « Preuzimanje u prodavnici » avec « Opcije isporuke » | V |
| Paiement | « PLAĆANJE KARTICAMA » (logos de cartes) en pied de page ; 12 mensualités Banca Intesa ; choix final non vu | V / non vu |
| Certificats | « GIA » et « IGI » cités dans les guides ; sur la fiche K191 (0,30 ct) aucun certificat annoncé [I : sous le seuil de 0,50 ct usuel] | V / I |

## Confiance et service

- 2 boutiques (Novi Sad, Belgrade), rendez-vous de conseil, « Personal shopper », suivi de commande (`/track-order/`), téléphone, formulaire de contact [V].
- Guides publiés : vereničko prstenje, burme, laboratorijski dijamanti, moissanite, avec sources GIA et IGI [V].
- Avis : onglet « Recenzije (0) » sur la fiche ; note 4,5/5 lisible sur un modèle du catalogue (TriStone K332) [V].
- Preuves de fabrication : aucune photo ou vidéo d'atelier trouvée ; « majstor ručno ugrađuje kamen pod mikroskopom » (texte) [V].
- Langues : serbe seulement (aucun hreflang) ; devise RSD, parfois repères en euros dans les guides [V].
- Libellé du synthétique : « Lab Diamond VS », « laboratorijski dijamant » ; le guide dit que « sintetički dijamant » désigne le mode de formation et distingue la moissanite, qu'il ne faut pas confondre [V].

## Points forts à retenir pour JR Diamond

1. **Prix par variante tous visibles** (10 variantes de prix dans les données de la page) et fourchette lisible dès la liste [V].
2. **Moissanite, synthétique et naturel côte à côte sur la même bague**, avec 3 niveaux de pureté naturelle ; le client compare le prix à structure identique [V].
3. **Guide chiffré du budget** : « Koliko košta verenički prsten ? » avec fourchettes par pierre et la date de relevé (« 16.08.2026 ») ; prix de fabrication « d'après photo » à partir de ≈ 900 € [V].
4. **Explication de l'incertitude sur la taille** : case « Ne znam tačnu veličinu » et procédure écrite de correction ou de refabrication [V].
5. **Sur mesure et retour décrits avant l'achat** (article « Pravo na odustanak ») [V].
6. **Rappel de la mention fiscale « Uzmi račun »** (facture fiscale pour garantir les droits du consommateur) : un argument de confiance local [V].

## Défauts observés

- L'image ne change pas avec le métal ni la pierre : un seul cliché pour 10 variantes, ce qui va à l'encontre de la promesse de JR Diamond (« ce que vous voyez existe ») [V].
- Étiquette « Lab Diamond VS » mais l'adresse de la variante porte `lg-diamonds-lab-grown-si-g` (SI, G) : pureté incohérente entre l'étiquette et l'adresse [V].
- Mention « najniža cena u poslednjih 30 dana : 139.700 RSD » alors que la remise affichée est de 20 % : la promotion paraît permanente [I].
- Taille : le sélecteur reste désactivé ; seule l'option « ne sait pas » a été exploitée [V].
- Le contenu du site est lourd : l'accueil pèse 1,2 Mo de HTML [V].
- Pas de configurateur ni de visuel 3D ou 360° [V].

## Limites de l'audit

- Aucune option de filtre ni de tri du catalogue n'a été actionnée (les adresses `?filter_`, `?orderby=`, `min_price` sont interdites par `robots.txt`) ; le catalogue a été lu sans filtre.
- `/porudzbina/` (commande) non ouverte, moyens de paiement et frais d'envoi non vus ; livraison à domicile non vue (seule « Preuzimanje u prodavnici » lue).
- Une seule fiche de bague a été parcourue en détail (K191) ; 3 onglets non lus.
- Le sélecteur de taille est resté invisible avec ma méthode d'interaction (case masquée forcée) : la cause n'est pas établie.
- Un article a été placé dans un panier de session (non payé), puis la session a été fermée.
- Visuel principal : 3,3 s (ordinateur), 2,3 s (iPhone) ; chargement complet 3,6 s (ordinateur), 2,8 s (iPhone) [V].

## Sources

- https://www.zlatara-as.rs/product/classics-prsten-k191-roze-zlato/ · https://www.zlatara-as.rs/kategorija/verenicko-prstenje/ · https://www.zlatara-as.rs/korpa/
- https://www.zlatara-as.rs/pravo-na-otkazivanje-odustanak-od-ugovora-kupovine/ · https://www.zlatara-as.rs/reklamacije/ · https://www.zlatara-as.rs/podrska/
- https://www.zlatara-as.rs/laboratorijski-dijamanti · https://www.zlatara-as.rs/verenicki-prsten/ · https://www.zlatara-as.rs/robots.txt
