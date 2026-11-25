# Audit : EverettBrookes Jewellers (Adelaide, Australie-Méridionale)

- **Site** : https://everettbrookes.com.au ; page de départ https://everettbrookes.com.au/create-your-own-engagement-ring-online/choose-a-setting/
- **Date** : 15/11/2026 (séance d'audit menée le 25/11)
- **Appareils** : aucun. Aucun navigateur n'a été lancé sur ce site.
- **Statut** : **bloqué**. `robots.txt` illisible (HTTP 403, page HTML de défi Cloudflare) : la vérification obligatoire répond INCONNU, donc le site est traité comme refusant les robots. Aucune page ouverte par navigateur, curl ni lecture directe ; aucun contournement.
- **Source des constats** : uniquement des extraits de copies d'un moteur de recherche tiers (dates de copie indiquées par le moteur : 2017 à 2022 pour la plupart des pages, donc **possiblement périmées**) et une fiche Google Maps (données du 04/11/2026). Les constats concernant le site sont donc de marque [I] au mieux ; je n'ai pas pu vérifier le constructeur de bague actuel.
- Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré (copie tierce), [S] supposé. Aucun contrôle n'est [V] ici.

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| Constructeur « Designer Series » [I] | `/engagement-rings/create-your-own-engagement-ring` (ancienne adresse ; la page de départ demandée est `/create-your-own-engagement-ring-online/choose-a-setting/`) | « 1. Choose a setting, 2. Choose a diamond, 3. Place your order online » ; « des centaines » de styles Designer Series |
| Recherche de diamants lab-grown [I] | `/labgrown-diamonds` | filtres forme, prix, carat, taille, pureté, couleur ; filtres avancés ; comparer |
| Boutique [I] | `/shop` | 7 975 résultats (copie), tri popularité / nouveauté / prix, bouton « Add to cart » sur chaque fiche |
| Sur mesure [I] | `/product-category/rings/custom-engagement-rings` | bagues d'inspiration ; « Make your own ring » (atelier avec un bijoutier) |
| Panier [I] | `/cart/` | compteur dans l'en-tête ; non vu |

## Contrôles vérifiés

Aucun contrôle actionné ni listé par `controls.cjs` : la page répond par un défi Cloudflare. Contrôles décrits par les copies tierces, tous **non testés (site bloqué)** :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Choose a setting / Choose a diamond / Place your order online | étapes | non observé | non observé | non testé |
| Filtres diamants : Shape, Price, Carat, Cut (4 niveaux), Clarity (IF à I1), Colour (D à M) | listes | décrits dans la copie de `/labgrown-diamonds` [I] | prix en AUD, GST comprise [I] | non testé |
| Advance Filter : Polish, Symmetry, Fluorescence, Depth, Table, Grading Report (AGS, CGL, GIA, HRD, IGI, GCAL) | listes | idem [I] | — | non testé |
| Reset Filters, Search, Compare | boutons | idem [I] | — | non testé |
| Add to cart (fiche, `?add-to-cart=<id>`) | bouton | présent dans la copie de `/shop` [I] | — | non testé |
| Sort by popularity / latest / price | liste | présente [I] | — | non testé |
| Virtual Diamond Sizer | outil | présent dans le menu « Rings » ; « try the classic solitaire, halo or trilogy in any shape and size » [I] | — | non testé |
| Make an Appointment, Contact, Login | liens | présents [I] | — | non testé |

## Options disponibles

(d'après les copies [I])
- **Type de diamant** : naturel, coloré, lab-grown, moissanite ; pierres de couleur [I].
- **Métal** : or 9 et 18 ct, platine ; jaune, blanc, rose, bicolore (d'après les titres de fiches) [I].
- **Montures** : solitaire (4 et 6 griffes), halo, trilogie, halo perlé, épaules à griffes partagées, pavé [I].
- **Formes** : rond, poire, ovale, coussin, émeraude, Asscher, princesse, marquise, trillion (titres de fiches) [I].
- **Fabrication** : main, ou CAO puis fonte ; « handmade » mis en avant [I].
- **Tailles et gravure, 360°, 3D, essayage** : non établis.

## Prix, délais, retours, garanties

- **Prix** : exemples de la copie `/shop` : solitaire poire avec 3,01 ct lab-grown E VS2 : AU$ 4 765 ; ovale 1,20 ct naturel F SI1 : AU$ 8 995 ; rond 0,62 ct naturel H VVS1 : AU$ 3 835 [I]. Prix en AUD, GST comprise (page diamants) [I]. Pas de décomposition vue.
- **Délai** : « Excellent turnaround » cité dans un avis ; envoi le jour ouvré suivant pour les articles en stock [I]. Aucun délai de fabrication annoncé trouvé.
- **Retours** [I, `/returns`] : pas de remboursement en cas de changement d'avis ; remboursement ou échange pour défaut majeur ; commandes spéciales : acompte jusqu'à 75 %, annulation pour changement d'avis avec 50 % de frais ; diamants commandés spécialement : acompte non remboursable (accord d'achat maintenu) ; pierres lab-grown : « all sales are final ». Précaution : « subtle differences » possibles entre la commande et le bijou fait main.
- **Livraison** : expédition le jour ouvré suivant, courrier recommandé assuré, partout en Australie ; livraison internationale proposée sur la page lab-grown [I].
- **Garanties** : « lifetime warranty on workmanship » ; page « 90 Day free resizing » dans le pied de page [I].
- **Financement** : Afterpay (quatre versements), zipPay / zipMoney, plan TLC de 2 000 à 50 000 $, layby [I].
- **Certificats** : GIA cité pour les pierres naturelles ; certificats AGS, CGL, GIA, HRD, IGI, GCAL filtrables [I].

## Confiance et service

- Google Maps (donnée du 04/11/2026) : 5 sur 5, 589 avis ; Easy Weddings : 5 sur 5, 26 avis [I].
- Atelier visible dans le magasin (90 Gawler Place, Adelaide) ; service « Make your own ring » (une heure et demie avec un bijoutier) avec film du moment « placed on a USB » [I].
- Prix et distinctions : « Best Jewellery Retailer » (Jewellery Industry Awards), prix de mariage 2019 à 2022 (annonce du site) [I].
- Libellé du synthétique : « lab-grown », « physically, chemically & optically identical to mined diamonds » [I]. Langue : anglais ; devise : AUD [I].
- Association : Jewellers Association of Australia [I].

## Points forts à retenir pour JR Diamond

1. **Film de fabrication offert** : le couple fabrique ses alliances avec un bijoutier, le moment est filmé et remis sur clé USB (« Service fee: Free ») ; proche de la promesse « on voit naître son bijou » (extrait, page `/about-us`, copie 2017) [I].
2. **Politique de retours détaillée** : cas de commande spéciale, acompte, frais d'annulation de 50 %, et précision sur les « subtle differences » de la fabrication manuelle [I, `/returns`].
3. **Filtres complets de pierres** (couleur D à M, pureté, symétrie, fluorescence, table, profondeur, laboratoire de certification) [I].
4. **Financement multiple** : Afterpay, Zip, TLC jusqu'à 50 000 $ (`/payment-plans`) [I].
5. **Garantie à vie sur la fabrication** et « 90 Day free resizing » [I].

## Défauts observés

- Site entièrement fermé aux robots (Cloudflare 403 dès `robots.txt`) : aucun défaut fonctionnel vérifiable.
- D'après les copies [I] : renvoie vers d'anciens chemins (`/engagement-rings/create-your-own-engagement-ring` contre la page de départ attendue) ; message WordPress d'Instagram Feed « No connected account » visible dans le texte de la page d'accueil (copie) ; copyright « © 2021 » au pied de page ; page lab-grown avec « Diamonds found ( 0 ) » dans la copie (liste chargée par script).
- Aucune donnée de prix du constructeur lui-même.

## Limites de l'audit

- Aucune page du site n'a été ouverte : ni navigateur, ni curl, ni lecteur direct. Toutes les informations viennent d'extraits de recherche tiers (dates de copie 2017 à 2022 pour la plupart, la fiche Google Maps est de novembre 2026).
- Le constructeur « choose a setting » (étapes, options, prix, temps d'affichage ordinateur et iPhone, panier, moyens de paiement) n'est pas décrit : mesures de temps impossibles.
- Les prix, retours et garanties peuvent avoir changé depuis les copies.
- Un nouvel essai pour franchir le blocage a été exclu.

## Sources

- https://everettbrookes.com.au/ (extrait de recherche tiers) [I]
- https://everettbrookes.com.au/engagement-rings (extrait) [I]
- https://everettbrookes.com.au/engagement-rings/create-your-own-engagement-ring (extrait) [I]
- https://everettbrookes.com.au/labgrown-diamonds (extrait) [I]
- https://everettbrookes.com.au/shop (extrait) [I]
- https://everettbrookes.com.au/returns (extrait) [I]
- https://everettbrookes.com.au/payment-plans (extrait) [I]
- https://everettbrookes.com.au/about-us (extrait) [I]
- https://everettbrookes.com.au/education/faqs (extrait) [I]
- https://everettbrookes.com.au/contact (extrait) [I]
- https://www.easyweddings.com.au/WeddingJewellery/Adelaide/EverettBrookesJewellers (extrait) [I]
- Fiche Google Maps `place_id:ChIJ9ZNX79bOsGoRBA0J7aYQ4jc` (extrait, données du 04/11/2026) [I]
- Vérification robots : `robots.cjs` → INCONNU (HTTP 403)
