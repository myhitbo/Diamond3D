# Audit : Cardin Jewelers (Nashua, New Hampshire)

- **Site** : Cardin Jewelers (famille Cardin, « Since 1920 »), site Shopify avec application de constructeur de bague
- **Adresse de départ** : https://www.cardinjewelers.com/apps/ringbuilder/settings/
- **Date** : 15/11/2026 (consultation des index de recherche faite le 25/11/2026 selon l'horloge de la machine)
- **Appareils** : aucun. Le site n'a pas été ouvert dans un navigateur.
- **Statut** : **bloqué**. Le contrôle `robots.cjs` répond INCONNU : le `robots.txt` renvoie HTTP 403 (page « Verifying your connection... »), comme à l'inventaire du 24/11. Conformément aux règles, aucune page du site n'a été demandée ni contournée ; aucune mesure de temps, aucun contrôle actionné.
- Marques : **[V, index]** lu dans un extrait de moteur de recherche (Parallel Search), pas sur le site ; **[I]** inféré ; **[S]** supposé. Prix en dollars.

## Parcours

| Étape | Options |
| --- | --- |
| Menu « Design Your Own » [V, index] | 4 entrées : « Start with a Setting » (`/apps/ringbuilder/settings/`), « Start with a Natural Diamond » (`/apps/ringbuilder/diamondtools`), « Start with a Lab Grown Diamond » (`…/diamondtype/navlabgrown`), « Start with a Fancy Colored Diamond » (`…/diamondtype/navfancycolored`) |
| Accueil [V, index] | « Create the ring of your dreams in 3 easy steps! Start Building » |
| Étapes 1 à 3 | [S] monture, diamant, bague finale ; **non vérifié** |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Tous les contrôles du constructeur (monture, métal, forme, carat, couleur, pureté, certificat, taille, gravure, vues, partage, panier) | n/a | Aucun | n/a | **Non testés : site bloquant les robots (HTTP 403 dès le robots.txt)** |
| Entrées de menu « Design Your Own » (4) | liens | Adresses lues dans l'extrait d'index | n/a | Non ouvertes |
| Formes lab-grown listées à l'accueil | liens | Rond [S], princesse, ovale, marquise, poire, asscher, émeraude, radiant [V, index] | n/a | Non ouvertes |
| Book an Appointment (bandeau « Looking to create a custom piece? ») | lien | Prise de rendez-vous | n/a | Non ouvert |
| Tri des collections | filtre | Featured, Best selling, A-Z, Z-A, prix croissant et décroissant, date [V, index] | n/a | Non testé |

## Options disponibles

Toutes issues d'extraits d'index [V, index] :

- **Montures** : 226 « Engagement Ring - Semi Mount » ; collection bridal de 994 produits ; métal 14 k seulement (740 en 14 k) ; couleurs : jaune, blanc, rose, deux tons, trois tons, blanc et jaune.
- **Pierres** : diamant (62), diamant de couleur, brun, noir, bleu, émeraude, rubis, saphir. Départ possible par diamant naturel, synthétique (« Lab Grown ») ou de couleur.
- **Filtres de collection** : type de produit, prix (moins de 1 000 $, 1 000 à 2 500 $, 2 500 à 5 000 $, plus de 5 000 $), type de pierre, couleur et type de métal.
- **Autres produits** : alliances de 615 à 885 $ (« The Troy » 675 $, « The Stag » 885 $), joaillerie, montres Seiko, pièces anciennes.

## Prix, délais, retours, garanties

- **Prix** [V, index] : prix affichés sur les alliances et les produits en stock (exemples ci-dessus) ; le sur mesure n'a pas de prix (« will know cost-drivers » sans chiffre). D'après l'inventaire du 24/11 [V, index] : montures de 2 112 à 5 784 $ en 14 k.
- **Délai** [V, index] : aucun délai chiffré sur la page du sur mesure ; un avis client cite « less than 2 weeks » pour un resserrage et « less than 3 weeks » pour un chaton en platine. Ces durées viennent d'avis Google, pas du site.
- **Retours, garantie, livraison** : non relevés. [V, index] le pied de page de l'accueil mentionne « Shipping, taxes, and discount codes calculated at checkout » ; Terms of Services et Privacy Policy listés.
- **Certificats** : non relevés.

## Confiance et service

- [V, index] Avis : Google 4,9 sur 5 (59 avis) selon une fiche cartographique ; StoneAlgo cite 4,8 sur 5 (33 avis) : écart non expliqué.
- [V, index] BBB : note A+, non accrédité, activité depuis 1971 (fichier ouvert en 1992).
- [V, index] Sur mesure : consultation en boutique ou en visio, croquis, « 3D Mock-Up » ou rendus numériques (« may provide digital renderings »), fabrication à l'atelier, contrôle final, entretien conseillé. La page promet « You'll know cost-drivers, timelines and be able to track progress ». Page `custom-design`.
- [V, index] Transformation de bijoux de famille proposée (« Heirloom Transformation »).
- [V, index] Adresse : 125 Main Street, Nashua ; mardi et mercredi 10 h à 16 h, jeudi 10 h à 19 h, vendredi et samedi 10 h à 16 h. Téléphone (603) 889-0011.
- Langue : anglais ; devise : dollar [V, index]. Aucune vidéo d'atelier trouvée.

## Points forts à retenir pour JR Diamond

1. **Quatre portes d'entrée** dans le constructeur (monture, naturel, synthétique, diamant de couleur) : le client choisit l'origine avant le reste. Preuve : menu « Design Your Own » dans l'extrait de l'accueil.
2. **Prix affichés dans le constructeur et sur les alliances** (montures de 2 112 à 5 784 $ ; alliances de 615 à 885 $) ; à confirmer sur le site. Preuve : extraits d'index.
3. **Promesse de transparence au sur mesure** : « cost-drivers, timelines and ... track progress », proche du positionnement « prix expliqué ». Preuve : page `custom-design`. [I] La promesse n'est pas vérifiée dans un parcours réel.

## Défauts observés

- Le site refuse les robots dès le `robots.txt` (403), ce qui interdit tout audit automatisé [V].
- Constructeur limité au 14 k d'après les filtres [V, index].
- Le « 3D Mock-Up » est annoncé comme éventuel (« may provide digital renderings ») : pas de 3D en ligne dans le constructeur d'après les extraits [I].

## Limites de l'audit

- Aucune page du site lue, aucun contrôle actionné, aucune mesure de temps (ordinateur ni iPhone), aucun panier : audit **bloqué**, aucune tentative de contournement.
- Tous les faits viennent d'extraits de moteurs de recherche (dates de capture inconnues, certains peuvent être périmés) et de pages tierces (cartes, BBB, StoneAlgo, willyou.net).
- Retours, garanties, certificats, frais de livraison et moyens de paiement : inconnus.
- Un audit manuel, hors automatisation, pourrait lire le site normalement [I].

## Sources

- https://www.cardinjewelers.com/ (extrait d'index, accueil et menu)
- https://www.cardinjewelers.com/pages/custom-design ; /pages/services ; /pages/about ; /collections/bridal ; /collections/engagement-rings?page=7 (extraits d'index)
- https://www.bbb.org/us/nh/nashua/profile/jewelry-stores/cardin-jewelers-inc-0051-10000065
- https://www.stonealgo.com/local-jewelers/nashua-nh/cardin-jewelers-6a297f665cb9a39be76b030cdb7550c1 ; https://willyou.net/jewelers/cardin-jewelers-nashua-nh ; fiche cartographique Google (données du 04/11/2026)
- Inventaire du territoire : `docs/concurrence/audit/us/new-hampshire/INVENTAIRE.md`
