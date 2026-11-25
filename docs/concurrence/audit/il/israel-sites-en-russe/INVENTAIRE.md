# Israël, sites en russe : inventaire des joailliers qui vendent en ligne

Recensement du 25 novembre 2026, pour l'étude de concurrence de JR Diamond en Israël (clientèle russophone). Territoire : joailliers établis en Israël (siège, atelier ou salle d'exposition dans le pays) dont le site est en russe ou a une version russe complète. Complète `../israel-tel-aviv-et-ramat-gan/INVENTAIRE.md` et `../israel-jerusalem-haifa-et-reste-du-pays/INVENTAIRE.md` sans les refaire.

Exclus d'office (déjà audités ou écartés) : DAZZ, B-Gem, Shiree Odiz, Alpha Gold, Lavi, L'Émeraude Paris, Diamony, Daskalo, Jerusalem Jeweler, La Perla (lpj.co.il, déjà en russe), Baltinester, Love Diamonds, iLab Diamonds, uDiamonds, Royalty, Eli Paz (déjà en russe). Grandes maisons internationales et places de marché exclues.

Marques : **[V]** vérifié (page lue le 25/11/2026, adresse en source) · **[E]** extrait d'un moteur de recherche, page non ouverte · **[I]** inféré · **[S]** supposé.

## Méthode

- Recherche web en russe et en hébreu (WebSearch, mode étendu). Parallel Search avait atteint sa limite gratuite dès la première requête et Firecrawl n'avait plus de crédits : l'index utilisé est américain, faible sur le russe israélien. Des sites ont pu échapper au recensement [I].
- Pour chaque candidat : robots.txt lu par l'outil de contrôle `robots.cjs` (groupe `*` et groupes nominatifs Claude/Anthropic), puis pages lues avec `curl` (identité par défaut de curl), une page toutes les 2,2 s au plus par site.
- Aucun formulaire rempli, aucun compte, aucun ajout au panier, aucune conversation WhatsApp ou Telegram ouverte. Les chemins interdits (`?add-to-cart`, `/simplecheckout`, filtres `?mfp`…) n'ont pas été visités.
- Nos requêtes sortent d'un serveur hors d'Israël : IDC affiche « Purchase not available for your country » et masque ses prix [V]. Les prix de ce site n'ont donc pas pu être lus.

## Constat d'ensemble

- **Aucun configurateur ni visuel 3D de bague** sur les sites en russe trouvés [V pour les 4 sites lus]. Le seul parcours avec options et prix en ₪ est celui de Louisa (fiche produit : couleur d'or, taille, carat).
- Le russe sert surtout deux publics [I] : les olim (Louisa, IDC, en ₪) et les acheteurs de Russie, d'Ukraine ou du Kazakhstan venus à la Bourse (BrillRings, isradiamond.ru, IDT : téléphones moscovites, prix en dollars ou « sur demande », détaxe pour touristes) [V].
- Les traductions sont souvent automatiques : Louisa garde des mots hébreux au milieu du russe (« צהוב », « איך זה עובד? ») et traduit « טבעת אירוסין » (bague de fiançailles) par « обручальное кольцо » (alliance) [V]. Pour JR Diamond, une version russe relue à la main serait un avantage [I].

## Classement

L'intérêt pour JR Diamond est mesuré, dans cet ordre, par : configurateur et lien image-objet ; transparence du prix ; preuves de fabrication ; sur mesure ; synthétique.

Toutes les adresses de la colonne « Page de départ » ont répondu 200 le 25/11 (V), sauf mention contraire.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Pourquoi |
|---|---|---|---|---|---|---|---|
| 1 | Louisa Jewelry (Ювелирные изделия Луиза) | Tel-Aviv, rue Shontsino 11 (retrait sur rendez-vous) [V] ; histoire liée à la Bourse de Ramat Gan [V] | https://louisa.co.il/ru/ (aussi en hébreu) | https://louisa.co.il/ru/product-category/rings/%D7%98%D7%91%D7%A2%D7%95%D7%AA-%D7%90%D7%99%D7%A8%D7%95%D7%A1%D7%99%D7%9F/ (bagues de fiançailles, 18 prix affichés sur la page) | **Non** : options sur fiche, 3 couleurs d'or 14 k, tailles israéliennes avec équivalent (« 13/53 »), carat central 1,50 / 2,00 / 2,50 ; le prix suit le choix (« Лотос » : 5 490 à 6 490 ₪) [V]. Images de fiche nommées « RENDERS » : rendus 3D précalculés, pas de 3D interactive [I] | aucun ; robots.txt n'interdit que `?add-to-cart` et l'administration [V] | Le plus proche de « l'atelier en direct » : **vidéo au microscope de la pierre du client**, numéro gravé au laser comparé au certificat GIA/IGI, envoyée par WhatsApp avant l'expédition (189 ₪, offerte au-delà de 1 ct) [V]. Surtout du synthétique, certificat IGI, garantie 5 ans, livraison offerte en 2 à 5 jours ouvrés, échange sous 14 jours [V]. Rubrique alliances de kiddouchin (1 290 et 1 690 ₪ relevés), page « prix de l'or aujourd'hui », kit de mesure de taille remboursé à l'achat [V]. Commande sur mesure par contact, à partir de modèles nés de demandes de clients [V] |
| 2 | IDC – Israel Diamond Center (famille Tavisal) | Ramat Gan, Jabotinsky 1 / angle Zisman 3, bâtiment Maccabi (Bourse) [V] | https://www.idc-diamond.co.il/ru/ (aussi HE, EN) | https://www.idc-diamond.co.il/ru/shop/%d7%98%d7%91%d7%a2%d7%95%d7%aa-%d7%99%d7%94%d7%9c%d7%95%d7%9e%d7%99%d7%9d/%d7%98%d7%91%d7%a2%d7%95%d7%aa-%d7%90%d7%99%d7%a8%d7%95%d7%a1%d7%99%d7%9f/ (« Кольца помолвочные », 3 pages) | **Non** : catalogue WooCommerce, filtres couleur d'or et catégorie ; « Характеристики бриллианта … по индивидуальному заказу » (pierre choisie sur commande) [V]. Visite virtuelle 360° de la salle d'exposition, pas de la bague [V] | aucun ; robots.txt n'interdit que `?add-to-cart` et les pièces jointes [V]. **Prix et achat masqués hors d'Israël** (« Purchase not available for your country ») [V] | Plus grande salle d'exposition du pays selon le site, membre de la Bourse, diamants naturels GIA/EGL/HRD seulement, appareil Sarine [V]. Nettoyage annuel et mise à taille offerts [V]. Contradiction sur l'échange : 7 jours sur la fiche, 14 jours dans « Доставка и возврат » [V]. Délais : 3 à 5 jours ouvrés en stock, jusqu'à 60 pour une pièce sur mesure (texte hébreu de la même page) [V]. Prix en ₪ cités par un extrait d'index (3 520 ₪, solitaire « Étoile de David ») [E]. Nombreuses fiches marquées « Продано » [V] |
| 3 | Moshe Skapa : BrillRings et isradiamond.ru (même négociant, même adresse) | Ramat Gan, Jabotinsky 1, bâtiment Maccabi, bureau 1141 (Bourse) ; rendez-vous du dimanche au jeudi [V] | https://brillrings.ru/ · https://isradiamond.ru/ | https://brillrings.ru/catalog/zhenskie-koltsa/ (« Женские кольца ») · https://isradiamond.ru/opravy/obruchalnye-kolca/ | **Non** : métal (or, platine) et couleur d'or sur chaque montre ; aucun prix de bague, « Цена по запросу » 24 fois sur la page BrillRings, « по запросу » sur isradiamond.ru [V]. Diamants nus en dollars sur isradiamond.ru (exemple : 9,33 ct D IF à 619 064 $) [V] | aucun ; robots.txt Bitrix et OpenCart standards, filtres et caisse interdits, non visités [V] | Négociant membre de la Bourse (carte n° 3976), tailleur de diamants naturels depuis plus de 30 ans [V]. Vise l'acheteur de Russie : domaines .ru, téléphone moscovite, « освобождение от НДС для туристов », micro-gravure du numéro de certificat GIA [V]. Propose aussi « HPHT, облагороженные и выращенные бриллианты » [V]. Prix opaques, aucun parcours en ligne : contre-exemple pour JR Diamond [I] |
| 4 | IDT – Israel Diamond Trade | Ramat Gan, « Алмазная Башня », rue Betsalel [V, pied de page « © 2017 »] ; contacts annoncés à Tel-Aviv, Moscou, Kiev [V] | https://diamonds-israel.com/ | https://diamonds-israel.com/jewelry (« Индивидуальный дизайн ») | **Non**. Parcours sur mesure décrit en 5 étapes : croquis, **modèle 3D soumis au client**, cire imprimée en 3D, fonte, sertissage [V] | aucun ; robots.txt Drupal standard [V] | Seul site en russe qui décrit la fabrication à partir d'un modèle 3D validé [V]. Mais site à l'abandon : erreurs PHP sur l'accueil, catalogue de diamants vide (« Бриллианты не найдены »), prix en dollars, public russe et ukrainien (douane russe, stockage hors taxes) [V] |
| 5 | Kladshop | non vérifiée ; « продажа без посредников на алмазной бирже » [E] | https://kladshop.co.il/ru/ | non ouverte | inconnu | **ne répond pas** : le proxy n'a pas pu joindre le serveur (502) et le nom ne se résout pas (ENOTFOUND), deux essais sur le robots.txt, pas d'autre essai [V] | Seul site en russe consacré au synthétique d'après l'index : « Лабораторные бриллианты в Израиле », bague 14 k à centre 1,00 ct (1,60 ct au total), IGI, 6 550 ₪ ; autres prix 4 770 et 8 540 ₪ [E]. Site peut-être fermé [I] |
| 6 | I.P. Diamonds | non vérifiée [E] | http://www.ipdiamond.co.il/ (page russe `gallery_rus.asp`) [E] | non ouverte | inconnu | **bloqué** : le robots.txt renvoie une page de captcha SiteGround (`/.well-known/sgcaptcha/`, HTTP 202) ; aucune page ouverte, pas de nouvel essai [V] | « Обручальные кольца в Израиле » : bijoux en or et diamants, consultation gemmologique gratuite [E] |
| 7 | Ka Gold Jewelry | non vérifiée | https://www.ka-gold-jewelry.com/russian/ | non ouverte | inconnu | **bloqué** : robots.txt autorise, mais l'accueil russe répond 403 « Just a moment... » (défi Cloudflare) ; pas de nouvel essai [V] | Rubrique russe « Иудейские украшения » (bijoux juifs) [E] ; intérêt possible pour l'alliance de kiddouchin, non vérifié [S] |

### Terme russe du diamant synthétique

- **« выращенный в лаборатории бриллиант / алмаз »** (diamant cultivé en laboratoire) : Louisa, partout (fiches, guide) [V]. La fiche « Лотос » mentionne aussi « CVD » [V].
- **« выращенные бриллианты »** (diamants cultivés), à côté de « HPHT » et « облагороженные » (traités) : BrillRings [V].
- **« лабораторные бриллианты »** et « синтетические » : Kladshop, d'après l'index seulement [E]. La Perla (inventaire précédent) écrit « лабораторный » [V, 15/11].
- IDC et IDT ne vendent que du naturel [V : « натуральные бриллианты », « сертификат GIA »].
- Pour JR Diamond en russe [I] : « выращенный в лаборатории » est le terme des concurrents ; « синтетический » n'apparaît sur aucune page lue le 25/11.

### Devise et TVA

- **Louisa** : shekels, prix uniques ou en fourchette ; aucune mention de TVA [V]. Prix TTC, comme la loi israélienne l'impose pour un affichage aux particuliers [I].
- **IDC** : prix masqués depuis l'étranger ; sélecteur de devise `?wmc-currency=USD` [V] ; shekels selon l'index [E].
- **BrillRings / isradiamond.ru** : dollars ou roubles (sélecteur), bagues sur demande ; met en avant la détaxe des touristes, donc des prix hors TVA pour eux [V pour la mention, I pour l'effet].
- **IDT** : dollars (filtre « Цена, $ ») [V].
- **Kladshop** : shekels [E].

## Repérés mais écartés

| Acteur | Raison |
|---|---|
| Fuzailov (fuzailovjewelry.co.il) | robots.txt : `Disallow: /` pour ClaudeBot, anthropic-ai et Claude-Web ; non ouvert [V]. Le site russe fuzailov.ru est un atelier de Moscou (téléphones +7) : hors territoire [V] |
| Berkowitz Jewelry (Petah Tikva, Mohilever 3) | site en hébreu seulement (`lang="he-IL"`), malgré une campagne dans la presse russe (9tv.co.il) [V] ; il a une collection de synthétiques (« יהלומי מעבדה ») [V] |
| Gispan, Apollo Diamonds, Seran Collection, Ziv Or, BEN&GUY, Odeya Diamonds, Diamond Bourse (Rotman), Gindi Gold, XLAB, Joolme, Levy's, Rozenbaum, Inbar, Yvel, Lianne, eDiamonds, Dianoche, Goldiam, D'oro | aucune version russe : attribut `lang` et `hreflang` en hébreu ou en anglais seulement [V]. Chez Rozenbaum, « Русский » n'est que la langue de l'outil d'accessibilité [V] |
| Amberjack | robots.txt illisible (403) : bloqué, non ouvert [V] |
| Divo (divo.co.il/ru) | robots.txt `Disallow: /` pour tous ; boutique de souvenirs [V pour le robots.txt, E pour l'activité] |
| Simenda Jewellery (Nazareth Illit) | site injoignable (502) ; surtout de l'argent, vendu sur Etsy [E] |
| Kupi.co.il | place de marché [E] |
| Annuaires Orbita Profi et SarafanPRO | artisans russophones (Ramat Gan, Petah Tikva, Karmiel, Haïfa) sans boutique en ligne ni prix [V pour Orbita] |

## Sources

Pages lues le 25/11/2026 (HTTP 200 sauf mention) :

- Louisa : https://louisa.co.il/ru/ ; catégorie fiançailles (adresse ci-dessus) ; fiche « Лотос » https://louisa.co.il/ru/product/%D7%98%D7%91%D7%A2%D7%AA-%D7%90%D7%99%D7%A8%D7%95%D7%A1%D7%99%D7%9F-%D7%90%D7%95%D7%91%D7%9C-%D7%9C%D7%95%D7%98%D7%95%D7%A1/ ; vidéo au microscope https://louisa.co.il/ru/product/%D7%A1%D7%A8%D7%98%D7%95%D7%9F-%D7%90%D7%99%D7%9E%D7%95%D7%AA-%D7%99%D7%94%D7%9C%D7%95%D7%9D-%D7%90%D7%99%D7%A9%D7%99-%D7%A2%D7%9D-%D7%9E%D7%99%D7%A7%D7%A8%D7%95%D7%A1%D7%A7%D7%95%D7%A4/ ; kiddouchin https://louisa.co.il/ru/product-category/rings/%D7%98%D7%91%D7%A2%D7%95%D7%AA-%D7%A7%D7%99%D7%93%D7%95%D7%A9%D7%99%D7%9F/ ; guide synthétique https://louisa.co.il/ru/%D7%99%D7%94%D7%9C%D7%95%D7%9D-%D7%9E%D7%A2%D7%91%D7%93%D7%94-%D7%90%D7%95-%D7%99%D7%94%D7%9C%D7%95%D7%9D-%D7%98%D7%91%D7%A2%D7%99/ ; prix de l'or https://louisa.co.il/ru/%D7%9E%D7%97%D7%99%D7%A8-%D7%94%D7%96%D7%94%D7%91-%D7%94%D7%99%D7%95%D7%9D/ ; https://louisa.co.il/ru/about/ ; https://louisa.co.il/robots.txt
- IDC : https://www.idc-diamond.co.il/ru/ ; catégorie (adresse ci-dessus) ; fiche https://www.idc-diamond.co.il/ru/product/sale/engagement-ring-with-oval-diamond/ ; https://www.idc-diamond.co.il/ru/about-us/ ; https://www.idc-diamond.co.il/ru/shipments-and-returns/ ; https://www.idc-diamond.co.il/ru/contact-us/ ; https://www.idc-diamond.co.il/robots.txt
- BrillRings / isradiamond.ru : https://brillrings.ru/ ; https://brillrings.ru/about/ ; https://brillrings.ru/contact/ ; https://brillrings.ru/catalog/zhenskie-koltsa/ ; https://isradiamond.ru/ ; https://isradiamond.ru/about_us ; https://isradiamond.ru/opravy/obruchalnye-kolca/ ; https://isradiamond.ru/beloe-zoloto-s-centralnym-brilliantom-1-karat-kolco ; robots.txt des deux domaines
- IDT : https://diamonds-israel.com/ ; https://diamonds-israel.com/jewelry ; https://diamonds-israel.com/diamonds ; https://diamonds-israel.com/about/delivery ; https://diamonds-israel.com/robots.txt
- Contrôles de langue et de blocage : accueils de gispanjewelry.co.il, apollodiamonds.co.il, serencojewelry.com, ziv-or.com, bgjewellers.com, odeyadiamonds.co.il, diamondbourse.co.il, gindigold.com/en/, xlabdiamonds.co.il, joolme.co.il, levysjewelry.co.il, rozenbaumj.co.il, inbarj.com, yvel.com, liannejewelry.com, ediamonds.co.il, dianoche.co.il, goldiam.co.il, doro.co.il, berkowitz-jewelry.co.il, fuzailov.ru ; robots.txt de fuzailovjewelry.co.il, divo.co.il, amberjack.co.il (403), ipdiamond.co.il (captcha), kladshop.co.il et simenda.com (injoignables) ; https://www.ka-gold-jewelry.com/russian/ (403)
- Articles et annuaires : https://www.9tv.co.il/item/18757 (Berkowitz) ; https://profi.orbita.co.il/?cat=52 ; https://www.eilatlive.co.il/bolshaya-kollektsiya-ukrasheniya-s-laboratornyim-brilliantami-v-tic-tac- (Tic Tac, Eilat : boutique sans site trouvé, non retenue)
- Extraits d'index [E] : résultats WebSearch du 25/11 pour kladshop.co.il/ru/, ipdiamond.co.il/gallery_rus.asp, ka-gold-jewelry.com/russian/p-categories/jewish-jewelry.php, fiches IDC à prix en ₪, kupi.co.il, etsy.com/shop/SimendaJewellery
