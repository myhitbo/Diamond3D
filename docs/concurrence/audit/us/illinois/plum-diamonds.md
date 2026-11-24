# Audit : Plum Diamonds (Illinois)

- **Site** : Plum Diamonds (Chicago, 5 S Wabash Ave, Ste 704B)
- **Adresse** : https://www.plumdiamonds.com/
- **Page de départ** : https://www.plumdiamonds.com/products/build-your-own-engagement-ring
- **Date** : 15/11/2026
- **Appareils** : aucun (aucune page ouverte)
- **Statut** : **bloqué**. Le contrôle de `robots.txt` (`robots.cjs`) répond INCONNU : le fichier est illisible (HTTP 429, page HTML « Verifying your connection… », vérification anti-robots). Selon la règle de l'étude, le site est traité comme bloqué : aucune page n'a été ouverte (ni navigateur, ni curl, ni outil de lecture), aucun nouvel essai.

## Parcours

Non audité. Les éléments ci-dessous viennent uniquement de l'inventaire déjà versé au dépôt (`docs/concurrence/audit/us/illinois/INVENTAIRE.md`, ligne 1, lu le 15/11 avant le blocage). Ils sont **repris, non revérifiés** [V, par l'inventaire ; non revérifié ici].

| Étape (selon l'inventaire) | Options |
|---|---|
| Constructeur | forme du diamant ; profil du chaton (« Side View ») ; anneau ; couleur du métal ; ajout de couleur (diamant rose, pierre de naissance cachée à 50 $) ; gravure (15 caractères au plus) |
| Prix | 1 190 $ « Setting Only », puis « Choose your lab diamond » (recherche de pierres intégrée) |

## Contrôles vérifiés

Aucun. Tous les contrôles sont **non testés** : site bloqué aux robots (HTTP 429 sur `robots.txt`, vérification anti-robots).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| (tous) | n/a | n/a | n/a | non testé : bloqué |

## Options disponibles

Reprises de l'inventaire, non revérifiées : 100 % synthétique ; certificat IGI ou GIA ; gravure 15 caractères ; couleur ajoutée au choix.

## Prix, délais, retours, garanties

Repris de l'inventaire [V, par l'inventaire, non revérifié] :
- « Made-to-order, ships in 15-17 business days ».
- Retours 30 jours ; entretien à vie ; baguier gratuit avant fabrication ; trousse d'essai à domicile (« Find Your Diamond Kit », imitations de 1 à 3 ct, baguier, 3 styles).
- Sur-mesure : dessin CAO à valider, à partir d'environ 150 $, dès 20 jours ouvrés.
- Modèles « à partir de » 1 190 à 3 440 $ [V, ext.].

## Confiance et service

Repris de l'inventaire : société sœur du joaillier Ethan Lord, « owned and operated in Chicago », fabrication « in our own sustainable manufacturing facility », membre du Responsible Jewellery Council ; lieu de l'atelier non établi. Avis, suivi de commande et preuves de fabrication non relevés.

## Points forts à retenir pour JR Diamond

Aucun constaté ici. L'inventaire note un rendu 3D en canvas WebGL (`webgl_vdb_canvas`, ressources Pixotronics), seul relevé en Illinois [V, par l'inventaire] ; à confirmer par un lecteur humain avant toute conclusion.

## Défauts observés

Aucun (aucune page lue). Le site oppose une vérification anti-robots à l'accès automatisé [V, `robots.cjs`, 429].

## Limites de l'audit

- Audit impossible : robots.txt illisible (429), site à marquer « bloqué ». Aucun contournement tenté.
- Tout le contenu ci-dessus est de seconde main (inventaire). Mesure de chargement, parcours, panier, prix par option, rendu 3D, avis : non faits.
- À reprendre par un lecteur humain ou si le blocage cesse.

## Sources

1. Contrôle robots : `node robots.cjs https://www.plumdiamonds.com/products/build-your-own-engagement-ring` → INCONNU (429).
2. Inventaire de l'Illinois : `docs/concurrence/audit/us/illinois/INVENTAIRE.md` (sources S1 à S5 qui y sont listées).
