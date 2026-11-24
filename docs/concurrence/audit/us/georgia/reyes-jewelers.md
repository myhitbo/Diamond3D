# Audit : Reyes Jewelers (Duluth, Géorgie)

- **Site** : Reyes Jewelers, https://reyesjewelers.com/. Page de départ : https://reyesjewelers.com/ring-builder
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur 1366×900 (parcours complet), affichage iPhone 13 (chargement et liste des contrôles seulement).
- **Statut** : **complet** pour le constructeur jusqu'à l'étape 5 (formulaire vu, non rempli) ; le site n'a pas de panier fonctionnel pour ce parcours.
- Repères : **[V]** vérifié (contrôle actionné ou page lue), **[I]** inféré, **[S]** supposé. Prix en dollars, relevés le 15/11/2026. robots.txt : tout autorisé (`Allow: /`), y compris `/cart` et `/ring-builder`.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Diamond Cut | 9 formes : Round Brilliant, Oval, Cushion, Emerald, Pear, Princess, Radiant, Marquise, Asscher [V] | /ring-builder |
| 2. Carat Size | 11 poids : ½, ¾, 1, 1¼, 1½, 1¾, 2, 2½, 3, 4, 5 ct, chacun avec son diamètre en mm (4,5 à 11,2 mm) [V] | idem |
| 3. Setting | 8 styles : Hidden Halo, Solitaire, Halo, Twisted Band, Three Stone, Pavé Band, Bezel Set, Vintage Milgrain [V] | idem |
| 4. Metal | 7 métaux : or 14 k jaune, blanc, rose ; 18 k jaune, blanc ; 10 k jaune, blanc [V] | idem |
| 5. Your Details | nom, courriel, téléphone (facultatif), taille de bague (4 à 12, ou « pas sûr »), budget, description, photos jointes ; bouton « Get My Free Consultation → » [V] | idem, étape vue, rien saisi ni envoyé |

Pas d'étape « origine » : tout est diamant synthétique (« All diamonds are lab-grown ») [V].

## Contrôles vérifiés

Page de départ : 49 contrôles sur ordinateur, 44 en affichage iPhone (controls.cjs). Tous les contrôles actionnés ont été testés sur ordinateur.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Call (678) 725‑1484 (bandeau et en-tête) | lien tel: | ouvre l'appel téléphonique | n/a | présent [V], non actionné |
| Book Appointment (×3) | lien | /jeweler-services et /#contact | n/a | présent [V], non ouvert |
| Home / Collection / Ring Builder / Dream Ring / Services | menu | navigation ; « Collection » est un bouton déroulant | n/a | présents [V] |
| Shopping cart | lien | /cart lu : texte non traduit « stripe.cart_title », « stripe.empty_cart_title », « stripe.btn_browse_store », « 0 stripe.items_plural » | n/a | **défaut** [V] |
| Toggle search | bouton | recherche (non ouverte) | n/a | non testé |
| Follow Reyes Jewelers on Instagram | lien | externe | n/a | non ouvert |
| 9 cartes de forme (étape 1) | boutons | une carte est cochée ; l'aperçu « Marquise Cut Diamond / Choose a setting to see your ring → » apparaît à l'étape 2 | aucun | fonctionnent [V], 9 sur 9 cliquées |
| Continue / Back (étapes 1 à 5) | boutons | avance et recule ; l'état est conservé entre les étapes | aucun | fonctionnent [V] |
| 11 cartes de carat (étape 2) | boutons | mettent à jour « Carat » dans « Your Design » avec le diamètre ; étiquettes « Most Popular » (1 ct), « Best Value » (1½ ct), « Statement » (2 ct) | prix après métal choisi : voir ci-dessous | fonctionnent [V], 11 sur 11 |
| 8 cartes de monture (étape 3) | boutons | mettent à jour « Setting » ; le clic sur « Halo » avec une recherche par texte a coché « Hidden Halo » (test imprécis, voir limites) | pas de variation relevée | fonctionnent [V] ; « Halo » seul non confirmé |
| 7 cartes de métal (étape 4) | boutons | mettent à jour « Metal » ; l'aperçu affiche la pastille « 14K Yellow Gold » ; prix apparu | voir plus bas | fonctionnent [V], 7 sur 7 |
| Aperçu de la bague (« Your ring preview ») | image | image fixe d'une bague de la bibliothèque (ex. halo rond, PNG 286×286, `airo-assets/uploads/luxury-engagement-ring-product-photo-rou-…`) ; pas de 3D, pas de rotation, pas de zoom | aucun | fonctionne [V] |
| Try the Dream Ring Studio → | lien | /dream-ring lue : cases à cocher (formes, métaux, styles, budget), « Send Him the Link » ; pas utilisée | n/a | fonctionne [V] |
| Étape 5 : Your Name, Email, Phone, Ring Size, Budget Range, Describe, photos | champs | présents ; **rien saisi** | n/a | présents [V], non remplis |
| Get My Free Consultation → | bouton | envoi du devis : **non actionné** (règle : aucun formulaire envoyé) | n/a | non testé |
| Accept / Decline (cookies) | boutons | « Decline » cliqué pour fermer le bandeau | n/a | fonctionne [V] |
| Google Reviews, Yelp, Facebook, @vaulted_vvs | liens | externes | n/a | non ouverts |
| Privacy Policy / Terms & Conditions | liens | ancres de la page d'accueil (/#privacy, /#terms) | n/a | présents [V] |

Aucun mode de vue (360°, vidéo, AR, sur la main), aucun bouton partager, enregistrer, comparer, chat, WhatsApp ou guide des tailles dans le constructeur [V, liste des 49 contrôles]. Le « Dream Ring Studio » joue le rôle d'enregistrement et de partage (« Send Him the Link ») [V, texte].

## Options disponibles

- **Formes** (9) : Round Brilliant, Oval, Cushion, Emerald, Pear, Princess, Radiant, Marquise, Asscher.
- **Carats** (11) : ½, ¾, 1, 1¼, 1½, 1¾, 2, 2½, 3, 4, 5 ct, avec diamètres 4,5 / 5,0 / 6,5 / 6,9 / 7,4 / 7,8 / 8,2 / 8,8 / 9,4 / 10,4 / 11,2 mm.
- **Montures** (8) : Hidden Halo (« #1 Trending 2026 »), Solitaire, Halo, Twisted Band, Three Stone, Pavé Band, Bezel Set, Vintage Milgrain.
- **Métaux** (7) : 14 k jaune / blanc / rose ; 18 k jaune / blanc ; 10 k jaune / blanc. Pas de platine, pas de rose en 18 k ni en 10 k.
- **Origine** : synthétique seulement dans le constructeur. Le site vend « lab & natural diamonds » ailleurs (pied de page) [V].
- **Non proposés** : choix des griffes, corps de bague, pavage, gravure, taille de doigt avant l'étape 5, filtres de pierres (couleur, pureté, certificat) [V].

## Prix, délais, retours, garanties

- **Fourchette de prix** « Est. Price Range » apparaît dès qu'un carat et un métal sont choisis, avec « Based on 14K gold » et « Final price confirmed at consultation » [V].
- **Barème par carat (or 14 k, test sur ovale solitaire)** [V] :

| Carat | Fourchette |
|---|---|
| ½ à ¾ | 1 500 – 1 995 $ |
| 1 à 1½ | 1 995 – 2 550 $ |
| 1¾ à 2 | 2 995 – 3 550 $ |
| 2½ | 3 995 – 4 550 $ |
| 3 | 5 495 – 6 250 $ |
| 4 | 7 995 – 9 250 $ |
| 5 | 10 995 – 12 500 $ |

- **Effet du métal** : 14 k jaune, blanc et rose identiques ; 18 k : « +$500 for 18K gold » (1 ct : 2 495 – 3 050 $) ; 10 k : « −$200 for 10K gold » (1 795 – 2 350 $) [V].
- **Effet de la forme et de la monture** : aucune différence de prix relevée sur 3 combinaisons au même carat (marquise solitaire, ovale solitaire, rond halo : 1 995 – 2 550 $ à 1 ct) [V pour ces trois ; le reste est inféré]. Le prix ne tient donc pas compte du style de monture.
- **Décomposition du prix** : aucune (ni pierre, ni métal, ni main-d'œuvre) [V].
- **Délai** : devis sous 1 à 2 jours ouvrés ; « 4–6 Week Turnaround », « Production begins after purchase is confirmed » [V].
- **Retours** : « All sales are final » ; « Custom rings are made exclusively for you and are non-refundable » ; aucun échange après achat, y compris la mise à taille [V, pied de page et étape 2].
- **Garanties** : « Solid gold — never plated » ; aucune garantie détaillée, mise à taille ni nettoyage relevés [V pour l'absence sur les pages lues].
- **Financement** : bandeau « 0% In-House Financing — No Credit Check · Any Item · 50%+ Down » [V].
- **Panier** : /cart vide, avec clés de traduction affichées ; récapitulatif, livraison et moyens de paiement **non vus** : le parcours du constructeur ne mène pas au panier (il envoie une demande de devis) [V pour le panier vide].

## Confiance et service

- **Certificats** : « Lab diamonds, certified quality » ; aucun laboratoire nommé dans le constructeur ; « EGL Certified » sur une pièce de la boutique [V].
- **Libellé du synthétique** : « lab-grown » ; « chemically and visually identical to mined diamonds — certified and conflict-free » ; « at 40–60% less cost » [V].
- **Arguments chiffrés** : « 20–35% below Kay, Zales & Jared » (non sourcé sur le site) [V pour l'affichage, non vérifié pour le fond].
- **Avis** : « 200+ five-star reviews » avec liens Google et Yelp ; pas d'avis intégrés [V].
- **Langues, devises** : anglais, dollar [V].
- **Preuves de fabrication** : « handcrafted to order », « Est. 1994 · Founded by Tomas Reyes » ; aucune photo ni vidéo d'atelier, aucun suivi de commande vus [V pour l'absence].
- **Service** : téléphone, rendez-vous, adresse 3176 Main St Ste 122, Duluth ; horaires affichés (lun-ven 11h-18h, sam 11h-16h) [V].

## Points forts à retenir pour JR Diamond

1. **Fourchette de prix dès le carat et le métal choisis**, devis sous 1 à 2 jours ouvrés : un petit atelier tient un constructeur maison avec un prix visible [V, essais 1 à 5 ct].
2. **Parcours court en cinq étapes**, résumé « Your Design » toujours affiché à côté, avec diamètre en millimètres pour chaque carat [V].
3. **Écarts de métal chiffrés** (« +$500 for 18K », « −$200 for 10K ») : l'effet du titre est expliqué en une ligne [V].
4. **Dream Ring Studio** : sélection de bagues, taille et mot, « Send Him the Link » : enregistrement et partage pensés pour l'offrir [V].
5. **Étiquettes d'aide au choix** (« Most Popular », « Best Value ») sur le carat [V].

## Défauts observés

- Aperçu en image fixe de la bibliothèque, pas de 3D ni de vue à 360° : on ne voit pas la bague configurée, seulement une photo approchante [V].
- Prix indépendant de la forme et de la monture (3 cas testés) : l'écart réel apparaît seulement au devis [V].
- Aucun libellé de laboratoire de certification, aucune pierre identifiée [V].
- Aucune garantie, aucun retour, même pour la mise à taille : « All sales are final » [V].
- Panier cassé : clés de traduction brutes (« stripe.cart_title ») [V].
- Pas de platine, de gravure, de choix de griffes ni de corps de bague [V].
- Arguments marketing (« 20–35% below Kay, Zales & Jared », « 40–60% less cost ») sans source affichée [V].

## Limites de l'audit

- L'étape 5 a été lue sans rien saisir ni envoyer ; la page de confirmation après envoi n'a pas été vue.
- Le test du bouton « Halo » (étape 3) a mal ciblé (recherche par texte : « Hidden Halo » a été coché) ; le prix de « Halo » seul n'a pas été relevé.
- Affichage iPhone : chargement et liste des 44 contrôles seulement, parcours non rejoué.
- Temps d'apparition : le constructeur n'a pas de visuel principal avant le choix de la monture ; DOMContentLoaded mesuré à 1,0 s sur ordinateur et 1,0 s sur iPhone (Chromium sans écran) ; l'apparition de l'aperçu après chaque choix n'a pas été chronométrée.
- Prix relevés sur ovale solitaire en 14 k pour le barème ; ceux du reste des combinaisons ne sont pas testés.
- Boutique (55 pièces à prix barré « vs. retail ») : lue par l'inventaire, non reparcourue ici ; pas de panier avec article.

## Sources

- https://reyesjewelers.com/ring-builder (étapes 1 à 5)
- https://reyesjewelers.com/dream-ring
- https://reyesjewelers.com/cart
- https://reyesjewelers.com/ (pied de page, politique de retour, boutique)
- docs/concurrence/audit/us/georgia/INVENTAIRE.md (fiche Reyes)
- Captures et listes de contrôles : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/reyes-jewelers/
