# Italie : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond en Europe. Il complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun italien : « Italie : non couverte ») sans le refaire.

Marques : **V** vérifié (page lue ou contrôle actionné, adresse en source) · **I** inféré · **S** supposé.

Méthode : recherche web générique en italien (Parallel Search, trois requêtes). Pour chaque candidat : `robots.cjs`, puis `curl` avec en-tête Safari, puis, pour les deux audités, Chromium (identité par défaut, aucun contournement), une page toutes les 2 secondes au plus. Aucun formulaire, compte, chat ni WhatsApp ouvert.

## Terme du diamant synthétique en Italie

Aucun site italien lu n'emploie « sintetico » : ils disent « diamante lab grown », « diamante creato (ou coltivato, cresciuto) in laboratorio » (Bon Gioielli : « Diamanti coltivati in laboratorio », « Lab Grown », et « diamanti etici » dans le texte SEO ; Oltremare : « lab-grown ») [V, pages des sites]. Je n'ai pas vérifié la règle italienne sur la dénomination (hors périmètre de cet inventaire) : la comparaison avec le décret français ou avec la règle CIBJO de septembre 2026 (« synthetic » seul terme, voir le fichier Europe) reste à faire [S].

## À retenir

- L'Italie a **un vrai constructeur de bague de fiançailles en ligne, Bon Gioielli (Fonte Nuova, Rome)** : 3 étapes (monture, diamant, bague), naturel ou « lab grown » GIA/IGI, 4 métaux, 10 formes, prix de monture affichés [V].
- **18carati.com (Arezzo) est le plus riche mais bloque les robots** : `robots.txt` et pages en 403 [V]. Non audité. Ses extraits de recherche annoncent des configurateurs solitaire et trilogy, 10 000 diamants certifiés naturels (« mai lab-grown »), rendu 3D sur mesure inclus, retour 14 jours, livraison offerte dès 300 € [V, extraits de recherche, pages non ouvertes].
- Les autres sont des **catalogues à options** (Oltremare, Torino Gioielli), un **choix de pierre puis monture** (Gioielli di Valenza) ou des **ateliers à devis** (Risivi & Co, Botta, LeS Creations).
- Aucun site ne montre, dans ce que j'ai pu lire, de photos ou de vidéos de fabrication de la commande du client ; seul Botta promet un dessin 3D gratuit et une présence à l'atelier de Milan [V, texte].

## Classement

Critères : proximité du modèle JR Diamond (atelier, fabrication à la commande, 14/18 k, naturel et synthétique, certificats), qualité du parcours en ligne, transparence du prix.

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Bon Gioielli | Fonte Nuova (Rome) | https://www.bongioielli.com/ | https://www.bongioielli.com/anelli-di-fidanzamento-con-diamanti/ (200 après redirection ; `robots.cjs` : autorisé) | Oui : monture, diamant, bague ; 5 styles, 4 métaux, 10 formes ; prix de monture TTC (V) | Aucun. `robots.txt` interdit `/cart/`, `/checkout/`, `/diamond/*`, `/labdiamond/*`, `/3d-ring-studio/` (V) | IT, EN (V) | Seul vrai constructeur italien non bloqué ; naturel et lab grown ; avis Google 350+ et Trustpilot 4,9 (V) |
| 2 | 18carati.com | Arezzo | https://www.18carati.com/ | https://www.18carati.com/it/configuratori | Oui d'après les extraits : solitaire, trilogy, boucles et collier, prix en temps réel (V, extrait) | **Bloqué : 403 sur `robots.txt` et les pages (V)** | IT, EN, FR ; EUR, GBP, USD (V, extrait) | Producteur de 1961, 240 modèles, diamants GIA/IGI/HRD, retour 14 j ; non audité |
| 3 | Gioielli di Valenza | Valence (Piémont) | https://www.gioiellidivalenza.com/ | https://www.gioiellidivalenza.com/it/anello-fidanzamento-solitario | Oui : pierre (forme, carats, prix, couleur, pureté, IGI, fluorescence, polissage, symétrie, taille), puis monture, gravure (V, texte) ; 117 pierres | Aucun (V) | IT (V) | Groupe orfèvre, boutique en ligne séparée (store.gioiellidivalenza.com), gravure offerte |
| 4 | Oltremare Gioielli | Italie (fabrication) | https://www.oltremaregioielli.it/ | https://www.oltremaregioielli.it/it-it/collections/anelli-fidanzamento-diamanti-personalizzati | Parcours monture puis pierre, prix de monture « diamant exclu » ; or massif 14 k et 18 k ; GIA/IGI, naturel ou lab-grown (V, texte) | Aucun (V) | IT (V, adresse `it-it`) ; anglais (S) | Offre la plus proche de JR Diamond (14/18 k, GIA/IGI, naturel et synthétique, sur commande) ; non audité |
| 5 | Risivi & Co | Rome (boutique Fontanella di Borghese) | https://www.risiviandco.com/ | https://www.risiviandco.com/en/wedding-ring-configurator/ | Oui, alliances : modèle, or (blanc, jaune, rose, platine), tailles de lui et d'elle, gravure 25 signes ; **prix sur devis** (V, texte) | Aucun (V) | EN, IT (V) | Alliances de couple ; photo qui change à chaque option |
| 6 | Torino Gioielli | Turin | https://www.torinogioielli.com/ | https://www.torinogioielli.com/anello-solitario | « Crea il tuo solitario » : pierre IGI naturelle, monture, prix complet de combinaisons (V, extrait) | Aucun refus par `robots.txt` ; **la connexion échoue depuis notre accès** (`curl` code 000, tunnel coupé) (V) | IT (I) | Solitaires prêts avec prix complet et envoi WhatsApp ; non lisible |
| 7 | Botta Gioielli | Milan (via Torino 68) | https://www.bottagioielli.com/ | https://www.bottagioielli.com/fidanzamento-e-matrimonio | Non : atelier, rendez-vous ou visio, dessin 3D sans frais, fedi en 20 jours ouvrés (V, texte) | Aucun (V) | IT (I) | Atelier avec poinçon « 716 MI », or 9 ou 18 k, remise à taille comprise |
| 8 | LeS Creations | Rome | https://www.lescreations.it/ | https://www.lescreations.it/servizi/fedi-nuziali | Non : alliances sur mesure en platine et or ; produits à variantes (V, extrait) | Aucun (V) | IT (I) | Atelier d'alliances sur mesure, boutique en ligne |

Vérification des adresses (15/11/2026, `curl` avec en-tête Safari) : Bon Gioielli 301 puis 200 (barre finale) ; Valenza 200 ; Oltremare 200 ; Risivi 200 ; Botta 301 puis 200 ; LeS Creations 301 puis 200 ; 18carati 403 ; Torino Gioielli : échec de connexion (même sans en-tête et en HTTP/1.1).

## Audits réalisés

Les deux premiers sites qui ne bloquent pas : **Bon Gioielli** (`bon-gioielli.md`) et **Gioielli di Valenza** (`gioielli-di-valenza.md`). Le rang 2 (18carati) est bloqué et n'est pas audité.

## Sources

- Recherche web (Parallel Search), 15/11/2026 : pages de départ citées dans le tableau.
- `robots.txt` lus avec `robots.cjs` : bongioielli.com, gioiellidivalenza.com, oltremaregioielli.it, risiviandco.com, bottagioielli.com, lescreations.it ; 18carati.com : 403.
- Fichier Europe : `docs/concurrence/2026-11-15_europe.md`.
