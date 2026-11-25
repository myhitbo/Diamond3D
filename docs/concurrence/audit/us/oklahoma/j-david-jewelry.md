# Audit : J. David Jewelry, « 3D Ring Designer » (Tulsa et Broken Arrow, Oklahoma)

| | |
|---|---|
| Site | J. David Jewelry, trois salles d'exposition : 613 N Aspen Ave, Broken Arrow ; 8200 E 101st St S, Tulsa ; 3646 S Peoria Ave, Tulsa (Brookside) : https://jdavidjewelry.com/ |
| Page de départ | https://jdavidjewelry.com/3d-ring-designer/ |
| Date | 15/11/2026 |
| Appareils | aucun : le site n'a pas été ouvert dans un navigateur |
| Statut | **bloqué** : le robots.txt et l'accueil répondent par une page « Vercel Security Checkpoint » (HTTP 429). Le blocage n'a pas été contourné, aucun nouvel essai. |

Convention : **[V]** vérifié (page lue ou contrôle actionné), **[I]** inféré, **[S]** supposé. Tout ce qui suit vient de **l'index d'un moteur de recherche** (extraits de résultats de recherche, requêtes génériques, pages jamais ouvertes par moi) : marqué **[I]** quand il s'agit d'un extrait, car je ne l'ai pas vu sur la page elle-même.

## Constat du blocage

- `node robots.cjs https://jdavidjewelry.com/` : **INCONNU** (« robots.txt illisible : HTTP 429, page HTML ») ; même résultat pour `/3d-ring-designer/`. [V]
- Conséquence : aucune page du site ouverte, aucune capture, aucun contrôle, aucune mesure de temps, pas de panier. Le site est classé « bloqué » selon la règle de l'étude.

## Parcours

| Étape | Options |
|---|---|
| Non audité | Les extraits de recherche décrivent un constructeur en 3 étapes : « 1 Setting, 2 Diamond, 3 Metal », avec aperçu en direct (« Live Preview ») et styles Solitaire, Halo, Three-Stone, Cathedral [I : extrait de la page d'accueil dans l'index]. Un ancien texte du site parle de « our new 3D engagement ring builder » : conception en ligne, puis choix de la pierre en salle (Broken Arrow ou Tulsa), puis finalisation avec un spécialiste [I : /pages/custom-engagement-rings dans l'index]. |

## Contrôles vérifiés

Aucun contrôle actionné : site bloqué. Contrôles d'une page de départ non relevés (`controls.cjs` non lancé : l'adresse est INCONNUE).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Tous | n.d. | n.d. | n.d. | non testé : blocage anti-robot (HTTP 429 Vercel Security Checkpoint) |

## Options disponibles

Ce que l'index de recherche laisse voir (non vérifié sur le site) :
- Constructeur 3D : styles Solitaire, Halo, Three-Stone, Cathedral ; étapes Setting, Diamond, Metal [I].
- Catalogue : 2 897 bagues de fiançailles de Gabriel & Co., A.Jaffe, The J. David Collection et The J. David Legacy Collection ; 20 288 modèles au total ; tri par prix croissant ou décroissant ; filtre « Natural or lab-grown » [I : /engagement-rings, /collections].
- Conception sur mesure : bagues de fiançailles (53 modèles montrés), alliances (7), pendentifs (14), boucles d'oreilles (2), bagues pour hommes (6), bijoux de mode (18) ; modèles « à tourner » (« Drag to turn ») [I : /custom].
- Diamants synthétiques : vendus et sertis dans l'atelier de la maison ; sertissage de diamants apportés par le client ; reprise de pierres de famille (« Heirloom Redesign ») [I : /services, /custom].

## Prix, délais, retours, garanties

- **Prix** : affichés au catalogue (exemples : bague Gabriel & Co. à partir de 4 800 $, une autre à 3 150 $ ; bagues synthétiques de mode de 3 500 à 6 500 $) ; pas de prix pour une conception sur mesure [I : /engagement-rings, /collections/lab-grown-diamond-fashion-rings].
- **Délai** : sur mesure « five to six weeks on average », rendu approuvé avant la fonte ; dans l'ancienne page du constructeur « ready in just a couple of weeks » [I].
- **Retours, garantie** : lien « Refund Policy » en pied de page de l'ancienne boutique, texte non lu ; garantie à vie citée pour A.Jaffe ; réparations examinées gratuitement, « home in two to three weeks » [I].
- **Certificats, panier, livraison, moyens de paiement** : non relevés. Des fiches « Add to cart » existent sur l'ancienne boutique (extrait) [I].

## Confiance et service

- « 5,400+ Five-Star Google Reviews », « 32+ Years at the Bench », cinq maîtres joailliers, atelier dans chaque salle (« Nothing is sent out ») [I : /custom, /services].
- Preuves de fabrication en texte : croquis, rendu CAD, modèle en cire, sertissage sur place ; photos de chaque étape sur la page « custom » ; journal « Inside a Custom Ring Design », 12/06/2026 [I].
- Sans rendez-vous : mardi-vendredi 10 h-18 h, samedi 10 h-17 h [I : /services].
- Langues, devises : non relevées (anglais, dollar supposés) [S].

## Points forts à retenir pour JR Diamond

Tous sont **[I]**, extraits de l'index de recherche :
1. **Les quatre étapes de fabrication montrées en photos** (croquis, rendu, cire, bague finie) et un engagement « you approve the design before anything is cast » : c'est le récit « on voit naître son bijou » de JR Diamond [I : jdavidjewelry.com/custom].
2. **Modèles clients à faire tourner à la souris** (« Drag to turn »), numérotés (ex. « Engagement Ring No. 565133-A »), par catégorie avec le nombre de modèles [I].
3. **Filtre « Natural or lab-grown »** sur 2 897 bagues, avec une phrase directe « A lab-grown diamond is a diamond, born somewhere else » [I].
4. **Constructeur en 3 étapes avec aperçu en direct** : un parcours court Setting, Diamond, Metal [I].

## Défauts observés

- **Blocage anti-robot** : `Vercel Security Checkpoint`, code 429, y compris sur robots.txt [V].
- Le texte de l'ancienne boutique mélange deux plateformes (liens `/pages/…` et `/p/…`) dans l'index : le site semble refait récemment [I].
- Le constructeur d'une ancienne page a un texte « Translation missing: en.general.search.loading » visible dans un extrait [I].

## Limites de l'audit

- Aucune page du site n'a été ouverte (navigateur, curl ou outil de lecture) en dehors de la vérification de `robots.txt` par `robots.cjs` (qui lit `/robots.txt` avec curl, une fois par site) : tout le reste vient d'**un seul résultat de recherche Parallel** (requêtes génériques, sans mention de JR Diamond).
- Aucun contrôle, aucun temps d'affichage, aucun panier, aucun mode de vue vérifiés.
- Les extraits de l'index peuvent dater : un extrait est une copie, pas la page actuelle.
- Il reste à faire : lecture de la page par un humain, ou prise de contact avec le site pour obtenir une autorisation.

## Sources

- `robots.cjs` du 15/11/2026 : https://jdavidjewelry.com/ et https://jdavidjewelry.com/3d-ring-designer/ : INCONNU (HTTP 429).
- Index de recherche (extraits) : https://jdavidjewelry.com/, /custom, /pages/custom-engagement-rings, /services, /engagement-rings, /collections, /our-story/inside-a-custom-ring-design, /pages/lab-grown-diamonds, /collections/lab-grown-diamond-fashion-rings ; fiche tierce https://www.stonealgo.com/local-jewelers/tulsa-ok/j-david-jewelry-5f50528c702808cecd74c8f5a2f30842 (non ouverte).
