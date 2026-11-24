# Audit : Met Diamond (Antalya)

- **Site** : https://metdiamond.com.tr/ (marque turque, « 27 ans de joaillerie », fabrication propre, adresse Tahılpazarı, Muratpaşa, Antalya [V : https://metdiamond.com.tr/pages/about-us])
- **Page de départ auditée** : https://metdiamond.com.tr/?view=design-your-ring (« Kendi yüzüğünüzü tasarlayın »)
- **Date** : 15/11/2026 (contrôles faits dans la session du 24/11)
- **Appareils** : Chromium ordinateur 1366×900 (parcours complet jusqu'au panier) ; affichage iPhone 13 (chargement, mise en page, passage à la fiche ; parcours non rejoué)
- **Statut** : **complet**, sauf les contrôles listés dans « Limites ». Boutique Shopify ; `robots.txt` : `Allow: /`, panier compris ; aucun blocage, ni captcha.
- **Écart robots.txt (relevé le 24/11)** : le groupe `User-agent: *` du robots.txt de ce site autorise la page `/cart` mais interdit `/cart/` (donc `/cart/add`, appelé par le bouton d'ajout) et `/cart.js`. L'ajout au panier décrit ici a donc eu lieu sur une adresse interdite : les constats tirés du panier portent **[P1]**, non revérifiés.
- Légende : [V] vérifié (contrôle actionné ou page lue), [I] inféré, [S] supposé.
- Le constructeur est un habillage d'une collection Shopify : il ne montre **pas de modèle 3D**, mais les **photos et la vidéo de studio** de la monture choisie [V].

## Parcours

| Étape | Options |
|---|---|
| 01 Style (« Stil seçin ») | Type de pierre : Lab Grown Pırlanta ou Mozanit ; 7 styles : Solitaire 118 montures, Hidden Halo 102, East West 24, Halo 19, Three Stone 43, Bezel 40, Toi et Moi 14 (360 au total) [V] |
| 02 Monture (« Montür seçin ») | Filtre de forme de pierre, liste de 12 montures par page (10 pages pour Solitaire), prix « à partir de » [V] |
| 03 Personnaliser (« Özelleştirin ») | Photos (12 vignettes) et vidéo main, carat, titre, couleur d'or, taille, couleur et pureté de pierre ; prix décomposé [V] |
| 04 Récapitulatif (« Tasarım özeti ») | Sélections, SKU, prix décomposé, vidéo de studio, « Sepete ekle » [V] |
| Panier | `/cart` : 2 lignes (produit + supplément de conception), quantité, instructions, remise, total, « Ödeme » (non cliqué) [V] | [P1]

## Contrôles vérifiés

### Étapes 01 et 02 (ordinateur)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 01 / 02 / 03 / 04 (barre d'étapes) | boutons | Naviguent entre étapes ; 02 et 01 revenus depuis 03 [V] | — | fonctionne |
| Lab Grown Pırlanta / Mozanit | bascule | Mozanit affiche « Mozanit montürler yükleniyor… » puis les mêmes 7 styles avec les mêmes nombres de montures [V] | — | fonctionne (listes identiques, voir Défauts) |
| Solitaire, Hidden Halo, East West, Halo, Three Stone, Bezel, Toi et Moi (« Keşfedin → ») | boutons | Ouvrent la liste des montures du style (Solitaire testé, Hidden Halo testé) [V] | « ₺45.000 itibarıyla » sur la première page | fonctionne |
| ← Stil seçimine dön | bouton | Retour aux 7 styles | — | fonctionne |
| Tümü, Round 33, Oval 20, Emerald 11, Pear 14, Radiant 7, Princess 2, Marquise 14, Cushion 13, Asscher 2 | filtres | Tümü : 118 bagues ; Oval : 20 ; Round : 33 ; chaque filtre donne 12 cartes par page [V] | — | fonctionne ; la somme des formes (116) n'égale pas 118 |
| ← Önceki / Sonraki → | boutons | « 1 / 10 » devient « 2 / 10 » [V] | — | fonctionne |
| Carte d'une monture (« Met0318 », ₺45.000) | bouton | Ouvre l'étape 03 sans changer d'adresse (reste `?view=design-your-ring`) [V] | 45 000 ₺ | fonctionne |
| Koleksiyonu mağazada incele ↗ | lien | Mène à `/collections/met-solitaire` (non ouvert) | — | non testé |
| ENGAGEMENT RINGS, WEDDING RINGS, DESIGN YOUR RING | liens | `/collections/met-solitaire`, `/collections/diamond-bands`, `#style-panel` [V : adresses] | — | non ouverts |
| Widget WhatsApp (« Hoş geldiniz! ») | bouton flottant | Présent sur toutes les étapes ; lien `wa.me` non trouvé dans le HTML [V] | — | non cliqué |
| « Seçimleriniz bu tarayıcıda kaydedildi » | message | Les choix sont gardés dans le navigateur [V : texte] | — | présent |

### Étape 03 : fiche (monture Met0318, ovale, 14 k blanc, 1 ct, TR 14, D, VS1)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| 12 vignettes « Beyaz altın 1 ct fotoğraf 1 à 12 » | boutons | Changent la grande photo ; les libellés suivent la couleur et le carat (« Rose altın 3 ct fotoğraf 1 ») ; contiennent des vues de la bague, une main, une boîte [V] | — | fonctionne |
| Avertissement « ÜRÜN REFERANSI · RENK EŞLEŞMESİ DOĞRULANMADI » et « Referans fotoğraf : 2,00 ct ; seçiminiz : 1 ct » | texte | Dit que la photo est celle d'un autre carat ou d'une autre couleur [V] | — | présent |
| « Yüzüğünüz elde nasıl görünüyor? » | vidéo | Vidéo de studio sur une main ; le clic « Oynat » lance la lecture (t = 4 s après 3 s) [V] | — | fonctionne |
| Carat 1,00 / 1,50 / 2,00 / 3,00 / 4,00 / 5,00 ct | boutons | Change le SKU (`…C150…`) ; photos non changées | 47 700 ; 60 075 ; 79 200 ; 117 450 ; 140 400 ; 155 700 ₺ | fonctionne |
| Titre 14 K | bouton | Défaut | 47 700 ₺ | fonctionne |
| Titre 18 K | bouton | « Bu seçimin fiyatı alınamadı. Lütfen ürünü yeniden seçin. » ; le bouton « Tasarımımı incele » devient grisé [V : 2 montures ; essais en 1 ct blanc, 1 ct rose, 3 ct rose] | prix absent | **ne fonctionne pas** |
| Or blanc / jaune / rose | boutons | SKU `-WG`, `-YG`, `-RG` ; grande photo inchangée | 47 700 ₺ pour les trois | fonctionne |
| Taille TR 7 à TR 25 | liste | 19 valeurs ; défaut TR 14 = 54 mm ; TR 12 = 52 mm (lu au panier) [V] | inchangé | fonctionne |
| « Yüzük ölçümü nasıl bulurum? » | lien | `/pages/ring-size-guide`, nouvel onglet | — | non ouvert |
| Couleur D / E / F | boutons | Mise à jour du détail de prix | +1 800 ; +1 350 ; +900 ₺ | fonctionne |
| Pureté VS1 / VS2 | boutons | Idem | +900 ; 0 ₺ | fonctionne |
| Tasarımımı incele → | bouton | Ouvre l'étape 04 [V] | — | fonctionne (grisé avec 18 K) |
| Bu ürünün seçimlerini sıfırla | lien | Retour à 1 ct, 14 K, blanc, 47 700 ₺ [V] | — | fonctionne |

### Étape 04 et panier

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| ← Seçimlerimi düzenle | bouton | Retour aux options | — | non testé |
| ▶ Ürün videosunu oynat / Videoyu ayrı aç ↗ | bouton, lien | Lecture de la vidéo de studio ; le lien ouvre le fichier sur `cdn.shopify.com` [V : adresse] | — | fonctionne ; lien non ouvert |
| Değiştir (style et monture) | bouton | Retour à l'étape « Montürünüzü seçin » [V] | — | fonctionne |
| Düzenle (sélections) | bouton | Non actionné | — | non testé |
| Sepete ekle | bouton | Charge `/cart` avec 2 lignes [V] | 47 700 ₺ | fonctionne | [P1]
| Adedi azalt / artır, Kaldır | boutons | Présents au panier ; non actionnés | — | non testé |
| Özel talimatlar, İndirim | champs | Présents ; non remplis | — | non testés |
| Ödeme | bouton | Mène au paiement ; **non cliqué** | — | non testé |

## Options disponibles

- **Pierre** : synthétique (« Lab Grown Pırlanta », certificat IGI) ou moissanite [V].
- **Formes** : ronde, ovale, émeraude, poire, radiant, princesse, marquise, coussin, Asscher [V].
- **Carat** : 1, 1,5, 2, 3, 4, 5 ct (aucune valeur inférieure à 1 ct) [V].
- **Or** : 14 K ou 18 K (18 K inutilisable) ; blanc, jaune, rose ; platine non proposé [V].
- **Couleur et pureté** : D, E, F ; VS1, VS2 [V].
- **Taille** : TR 7 à 25 [V]. **Gravure** : aucune option dans le constructeur [V].
- **Styles** : solitaire, hidden halo, east-west, halo, trois pierres, bezel, toi et moi [V].

## Prix, délais, retours, garanties

- **Décomposition du prix** affichée à chaque étape : « Ürün ₺45.000 + D ₺1.800 + VS1 ₺900 » = 47 700 ₺ ; au panier, une ligne « produit 45 000 TL » et une ligne « Tasarım ek ücreti 2 700 TL » [V]. Le prix du carat est dans le produit de base (45 000 ₺ pour 1 ct, 153 000 ₺ pour 5 ct) [V]. [P1]
- **TVA** : « Vergiler dahil » au panier [V]. Livraison **gratuite et assurée** dans toute la Turquie (et « dans le monde » selon le bandeau du constructeur) [V].
- **Délai** : préparation 3 jours ouvrés, livraison 1 à 2 jours après expédition ; « pour une commande personnalisée, un autre délai est communiqué séparément ». Aucune durée de fabrication propre à une bague configurée n'est affichée [V : https://metdiamond.com.tr/pages/shipping-delivery].
- **Retours** : 14 jours depuis la réception, y compris pour les bagues faites avec les options standard (carat, forme, couleur d'or, taille) ; retour gratuit en Turquie ; les créations hors options standard ou gravées « peuvent » être exclues « lorsque la loi le permet » [V : https://metdiamond.com.tr/pages/returns-exchanges].
- **Garantie** : texte non trouvé [I]. **Certificat** : IGI affiché dans le pied de page ; la page certification dit que l'information est propre à chaque pierre et qu'il faut demander le rapport avant de valider [V : https://metdiamond.com.tr/pages/certification].
- **Étiquette de disponibilité** : « Katalogda mevcut · 24.11.2026 · Güncel fiyat ve stok mağazada doğrulanır » (date du jour affichée) [V].

## Confiance et service

- WhatsApp flottant, page contact, FAQ, guide de la taille, guide des pierres « Lab Grown mı, Mozanit mi ? » [V : pages d'accueil et FAQ].
- Avis clients : non trouvés [V : aucun sur les pages lues]. Preuves de fabrication (photos d'atelier, suivi de commande) : non trouvées ; « Mücevherlerimizi kendimiz üretiyoruz » est une affirmation sans image [V].
- Langue : turc, menus et libellés d'étape en anglais (« ENGAGEMENT RINGS », « Hidden Halo ») ; devise : livre turque [V].

## Points forts à retenir pour JR Diamond

- **Prix décomposé en clair à chaque clic**, jusqu'au panier : « Ürün + couleur + pureté + supplément 18 carats ». Preuve : D +1 800, E +1 350, F +900, VS1 +900 [V].
- **Étapes numérotées visibles** (01 à 04) et retour possible à chaque étape, sans perdre les choix ; « Seçimleriniz bu tarayıcıda kaydedildi » [V].
- **La date et la disponibilité** sont affichées au récapitulatif (« Katalogda mevcut · 24.11.2026 »), avec la mention que prix et stock sont confirmés en boutique [V]. Un modèle pour la mention « à confirmer » de JR Diamond.
- **Aveu honnête sur la photo** : « Référence 2 ct, votre choix 1 ct » et « correspondance de couleur non vérifiée » [V]. Cela répond à la méfiance sur le décalage image/produit, mais montre aussi la limite d'un site sans 3D.
- **Tailles turques avec la circonférence en mm** (« TR 14 · 54 mm ») et lien vers un guide [V].
- **Rapidité** : photo de la fiche en 0,19 s sur ordinateur et 0,39 s sur iPhone après le clic [V].
- **Retour de 14 jours même pour les bagues aux options standard** : annoncé avant l'achat, avec l'exception du sur-mesure formulée prudemment [V].

## Défauts observés

- **18 carats inutilisable** : le prix n'est pas calculé et le bouton « Tasarımımı incele » est grisé ; le message invite à « resélectionner le produit » (2 montures, essais en 1 ct et 3 ct). Un client qui veut de l'or 18 k est bloqué [V].
- **Les photos ne suivent pas les options** : la photo de référence est une bague de 2 ct en or jaune quel que soit le choix (carat ou couleur), l'avertissement le dit [V].
- **Pas de 3D, pas de visuel du diamant choisi** (couleur, pureté, certificat) [V].
- **Liste « Mozanit » identique** à celle du synthétique (mêmes styles, mêmes nombres de montures) : on ne sait pas si les montures sont les mêmes ou si la liste n'a pas été rechargée [I].
- **Somme des formes différente du total** : 116 montures par forme pour 118 au total (Solitaire) [V].
- **Aucune gravure** ni aucun carat inférieur à 1 ct dans le constructeur ; or 18 k et platine absents de fait [V].
- **Pas d'avis, pas de preuve de fabrication** [V].
- **Panier : deux lignes** pour une seule bague (produit + « Tasarım ek ücreti »), ce qui complique la lecture [V].
- **Prix non contractuel** : le récapitulatif dit « Güncel fiyat ve stok mağazada doğrulanır » : le prix affiché n'est pas contractuel [I].

## Limites de l'audit

- Non testés : chaque forme de pierre pour les six autres styles, la navigation complète des 10 pages, la monture Toi et Moi, les liens vers les collections, le guide des tailles, le bouton WhatsApp, les champs du panier, le bouton « Ödeme » et le paiement. Aucun formulaire rempli, aucun compte créé.
- Prix en livres turques à la date du test ; susceptibles de changer avec le cours de l'or [I].
- Le panier ne montre ni frais ni moyens de paiement lisibles ; seul un en-tête « Ödeme yöntemleri » avec des icônes est présent, dont le détail n'a pas été relevé [V].
- Délai de fabrication d'une bague non affiché : à vérifier avec l'atelier [S].
- Mesures de vitesse faites derrière un proxy : ordres de grandeur seulement.

## Sources

- https://metdiamond.com.tr/?view=design-your-ring (constructeur, contrôles du 24/11/2026)
- https://metdiamond.com.tr/cart (panier après « Sepete ekle »)
- https://metdiamond.com.tr/pages/shipping-delivery, /pages/returns-exchanges, /pages/faq, /pages/certification, /pages/about-us
- https://metdiamond.com.tr/robots.txt (`Allow: /`)
- Mesures : première photo de la page de départ en 1,8 à 1,9 s (ordinateur) et 1,2 s (iPhone) ; fiche en 0,19 s (ordinateur) et 0,39 s (iPhone)
