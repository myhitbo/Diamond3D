# Inventaire des sites à auditer : Turquie

Date : 15/11/2026 (contrôles faits dans la session du 24/11). Explorateur : Turquie. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun turc) sans le refaire.
Légende : **[V]** vérifié (page lue ou contrôle actionné, adresse indiquée) · **[I]** inféré · **[S]** supposé.
Contrôle `robots.cjs` avant chaque adresse ouverte. Aucune identité de navigateur modifiée, aucun nouvel essai pour passer un blocage. Recherches web en turc, requêtes génériques. Prix en livres turques (₺, TVA « KDV » incluse sauf mention).

## Constat d'ensemble

- **Deux sites turcs ont un vrai constructeur en ligne, avec prix en direct** : Alyans Atölyem (alliances, **modèle 3D temps réel**, Istanbul) et Met Diamond (bague de fiançailles en 4 étapes, diamant synthétique, Antalya) [V : pages de départ ci-dessous, parcours audités].
- X Diamond propose des fiches de bague à options (carat, couleur, pureté, certificat HRD ou IGI, or 8/14/18 k, gravure) et une boutique européenne en euros en 10 langues, donc un concurrent direct pour la phase France [V : pages lues]. Non audité (3e rang).
- Les grandes marques nationales (Atasay, Altınbaş, Zen Pırlanta) vendent des catalogues de bagues « tektaş » sans configurateur, avec prix affichés, remises et paiement en plusieurs fois [V : listes lues ; Zen en recherche seulement].
- Plusieurs ateliers du Grand Bazar (Kapalıçarşı) vendent en ligne des diamants synthétiques certifiés IGI ou HRD à prix affichés (Arz Pırlanta, Tan Pırlanta) [V d'après les pages d'accueil lues].
- Aucun site turc rencontré ne montre de photos ou vidéos de fabrication de la commande, ni de suivi illustré [I : non trouvé sur les pages lues, non vérifié site par site].
- **Aucun site bloqué** : tous les `robots.txt` lus autorisent la racine (`Allow: /`). Exceptions de chemins : Alyans Atölyem interdit `/sepet.php` (panier), `/odeme.php`, `/uyelik.php`, `/arama.php`, `/begendiklerim.php` et `*?filter=`. Ces pages **n'ont pas été ouvertes** (voir « Limites » du rapport).
- **Terme du diamant synthétique en turc** : « laboratuvar pırlantası » ou « laboratuvar elması » (diamant de laboratoire) et « lab grown » transcrit. Exemples : Met Diamond « Lab Grown Pırlanta », DVS Diamonds « Laboratuvar Pırlantası », Arz Pırlanta « Laboratuvar pırlanta » (« Taklit taş değil »), X Diamond (« Lab grown diamond » rendu en turc par « laboratuvar pırlantası ou laboratuvar elması »), Alyans Atölyem « Lab-grown Pırlanta » (à côté de « Doğal Pırlanta » et « Zirkonya ») [V]. « Sentetik » apparaît chez Atasay seulement pour le saphir (« Sentetik Safir ») [V]. Je n'ai pas trouvé de texte légal turc imposant un terme [S : non recherché en source officielle]. « Pırlanta » désigne le diamant taillé en brillant, « elmas » le diamant en général [I].

## Classement et tableau

Classé par intérêt pour JR Diamond (constructeur en ligne, 3D, diamants naturels et synthétiques, prix décomposé, alliances).

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Alyans Atölyem | Istanbul (siège Sefaköy ; boutique au Kuyumcukent) [V : pied de page et FAQ] | https://www.alyansatolyem.com/ | https://www.alyansatolyem.com/alyansini-tasarla | **Oui, 3D temps réel** (« Alyansını Tasarla », moteur tiers confmetrix) : 17 profils, tailles, largeur, métal, pierres, rainures, gravure, prix par alliance ; ajout d'un solitaire ou d'un tour complet [V] | Aucun blocage ; `robots.txt` interdit panier, compte, recherche, favoris | TR (interface lue en turc) ; TRY [V] | Seul constructeur 3D rencontré en Turquie ; alliances (cœur de l'offre de kiddouchin) ; prix en direct ; **audité** |
| 2 | Met Diamond | Antalya (Tahılpazarı) [V : page « about-us »] | https://metdiamond.com.tr/ | https://metdiamond.com.tr/?view=design-your-ring | **Oui** (« Kendi yüzüğünüzü tasarlayın », 4 étapes : style, monture, personnaliser, récapitulatif). 7 styles, 360 montures, 9 formes, carat 1 à 5, 14/18 k, 3 couleurs d'or, couleur et pureté ; prix décomposé [V] | Aucun | TR (menus en anglais) ; TRY [V] | Synthétique et moissanite ; prix décomposé ligne par ligne jusqu'au panier ; **audité** |
| 3 | X Diamond | non relevée | https://www.xdiamond.com.tr/ | https://www.xdiamond.com.tr/laboratuvar-pirlanta-yuzukler (fiches à options, ex. https://xdiamond.com.tr/eu/paris-oval-laboratuvar-pirlantasi-tektas-yuzuk) | Fiches à options : carat 0,50 à 5 ct, couleur D-G, pureté VVS2-VS, or 8/14/18 k trois couleurs, HRD ou IGI, gravure 12 signes, « date d'expédition » affichée ; guide « Studio » [V d'après la fiche lue] | Aucun | TR, EN, DE, FR, ES, IT, NL, DA, SV, FI (hreflang) ; TRY et euro [V] | Boutique européenne en euros : concurrent direct en phase France ; non audité (3e) |
| 4 | Tan Pırlanta (Tan Diamond) | Istanbul, Kapalıçarşı | https://tanpirlanta.com/ | https://tanpirlanta.com/koleksiyon/tektas-yuzukler | Pas de constructeur. Fiches « Kendi yüzüğünüzü tasarlayın » à options (pierre, métal) avec fourchette de prix, ex. 14 094 à 89 677 ₺ [V d'après la recherche] | Aucun | TR ; USD et TRY [V] | Atelier du Grand Bazar, diamants GIA et HRD, guides (« 14 ou 18 ayar », « sertifika ») ; non audité |
| 5 | Bold Diamonds | non relevée | https://bold.diamonds/ | https://bold.diamonds/collections/laboratuvar-pirlantasi-tektas-yuzuk | Non. Catalogue synthétique IGI, formes en collections, fiches à options ; « −50 % jusqu'au 14/2/2027 » affiché (prix barré) [V] | Aucun | TR | Prix barrés et remise de 50 % : pratique à noter ; non audité |
| 6 | Arz Pırlanta | Istanbul, Kapalıçarşı (annoncé) | https://www.arzpirlanta.com/ | https://www.arzpirlanta.com/ (catégories sous `/kategori/…`) | Non. Uniquement du synthétique, certificats IGI ou HRD, prix affichés (ex. 1 ct D VS2 radiant 42 000 ₺) [V] | Aucun | TR | Se présente comme « marque de diamants de laboratoire en ligne » ; non audité |
| 7 | DVS Diamonds | non relevée | https://www.dvsdiamonds.com/ | https://www.dvsdiamonds.com/collections/ozel-tasarim-koleksiyon | Non. Collection « conception sur mesure », GIA et IGI, 3 mensualités au prix comptant, livraison assurée [V] | Aucun | TR | Mélange naturel et synthétique ; non audité |
| 8 | Thales Pırlanta | non relevée | https://www.thalespirlanta.com/ | https://www.thalespirlanta.com/gia-sertifikali-tektas-pirlanta-yuzukler | Non. Pages GIA et HRD ; « Özel Tasarım Talebi Oluştur » (dessin, fabrication, finition) en 3 étapes [V] | Aucun | TR | Bagues à partir de 12 105 ₺ ; demande de création sur mesure ; non audité |
| 9 | Atasay | Istanbul (siège) [I] | https://www.atasay.com/tr/pirlanta/pirlanta-tektas-yuzuk | idem | Non. 148 bagues, filtres métal, couleur, pureté, carat ; « expédition le jour même » ; or 8/14 k [V] | Aucun | TR | Grande marque nationale : référence de prix affiché et de remise ; non audité |
| 10 | Altınbaş | Istanbul | https://www.altinbas.com/ | https://www.altinbas.com/pirlanta-tektas-yuzukler | Non. 132 bagues, filtres 8/14/18 k, carat, prix ; remises de 50 % affichées [V] | Aucun | TR | Grande marque nationale ; non audité |

Vus, non classés : Zen Pırlanta (https://www.zenpirlanta.com/ ; catalogue, paiement en 3 fois, entretien gratuit tous les 6 mois [V d'après la recherche]) ; Bir Karat (https://birkarat.com.tr/ ; page « tasarım rehberi » qui décrit un processus de commande sur mesure par conseiller et rendez-vous vidéo, texte proche de celui d'un joaillier américain [I]).
Écartés : places de marché (Trendyol, Hepsiburada [S : cités de mémoire, non ouverts]) ; revendeurs d'or de détail sans diamant à prix affiché.

## Audits réalisés

Les deux premiers sites qui ne bloquent pas les robots ont été audités : **Alyans Atölyem** (`alyans-atolyem.md`) et **Met Diamond** (`met-diamond.md`). Le panier d'Alyans Atölyem n'a pas été ouvert (`/sepet.php` interdit) ; celui de Met Diamond l'a été (autorisé).

## Sources

- Recherches web génériques en turc (6 requêtes) et lecture des pages d'accueil par `curl` avec en-tête Safari (statut 200 pour les 13 adresses du tableau, 15/11 et 24/11).
- `robots.txt` : https://metdiamond.com.tr/robots.txt, https://www.alyansatolyem.com/robots.txt, https://tanpirlanta.com/robots.txt, et les autres sites par `robots.cjs` (tous autorisés).
- Pages lues : https://metdiamond.com.tr/pages/about-us, https://www.alyansatolyem.com/musteri-hizmetleri/sik-sorulan-sorular, https://www.xdiamond.com.tr/tr, https://www.arzpirlanta.com/, https://www.dvsdiamonds.com/, https://bold.diamonds/, https://www.thalespirlanta.com/, https://www.atasay.com/tr/pirlanta/pirlanta-tektas-yuzuk, https://www.altinbas.com/pirlanta-tektas-yuzukler.
