# Inventaire Pologne : joailliers en ligne (bagues de fiançailles, alliances)

Explorateur : Pologne (Europe). Date de consigne : 15/11/2026 ; recherches et contrôles d'adresses faits le 24/11/2026.
Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[VR]** vérifié par extrait de recherche web seulement (page non ouverte dans le navigateur) · **[I]** inféré · **[S]** supposé.
Le premier inventaire européen (`docs/concurrence/2026-11-15_europe.md`) ne couvrait pas la Pologne : seul Edenly y est cité comme site disponible en polonais (PL parmi ses 8 langues) [V, ce fichier]. Rien n'est refait ici : les 10 sites ci-dessous sont nouveaux.

Contrôles faits pour chaque adresse : `robots.cjs` (robots.txt, groupe `*`), puis `curl` avec en-tête Safari (code HTTP final). Une seule requête par site et par contrôle, avec 2 à 3 s d'écart.

## Classement par intérêt pour JR Diamond

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Auroria (Auroria Sp. z o.o.) | Poznań (manufaktura ; 6 salons : Varsovie, Cracovie, Gdańsk, Poznań, Katowice, Wrocław) | https://auroria.pl/ | https://auroria.pl/konfigurator-3d/pierscionki-zareczynowe (page de présentation, 200) | Oui : configurateur 3D de bagues de fiançailles et d'alliances en 5 étapes. **Le configurateur lui-même (`/konfigurator-3d/*/konfiguruj`) est interdit par robots.txt** : non ouvert. Fiches produit à options (type de pierre, masse, qualité) ouvertes | Aucun blocage technique (200, pas de Cloudflare). robots.txt interdit `/koszyk`, `/konto`, les filtres `?metal=` etc. et `/konfigurator-3d/*/konfiguruj` | PL (livraison UE annoncée) | Plus proche du positionnement : fabrication à Poznań, photos et vidéos de fabrication, naturel et laboratoire sur la même fiche avec prix, certificats GIA/HRD/IGI dès 0,30 ct, retour 100 jours sur les bagues [V] |
| 2 | Diamora Diamonds (Finevo Polska Sp. z o.o.) | Varsovie (showroom Mennica Residence) | https://diamora.pl/ | https://diamora.pl/ringbuilder/engagement-ring-settings (200) | Oui : constructeur en 3 étapes (monture, diamant, bague finie) ; 761 186 diamants de laboratoire annoncés, filtres 4C, certificat, « vue réelle » photo/vidéo | Aucun au chargement. **429 « Too Many Requests » reçu après une vingtaine de requêtes automatisées** (limitation de débit, respectée : arrêt) | PL (EN dans les chemins `/en/`) | Constructeur de type « choisir la monture puis le diamant », naturel et laboratoire, GIA recommandé pour le naturel et IGI pour le labo, service de coursier-gemmologue dès 15 000 zł [V] |
| 3 | Luva | Cracovie (salons) | https://luva.pl/ | https://luva.pl/konfigurator (200) | Oui : configurateur 3D d'alliances (17 profils au premier pas) [VR] ; bagues de fiançailles en fiches produit | Aucun (robots.txt permissif sur la page) | PL | Configurateur d'alliances direct, sur-mesure, 5,0 sur Google (plus de 1000 avis) affichés [VR]. Pas de constructeur de pierre |
| 4 | Geselle | Wrocław (atelier rue Kołłątaja) | https://geselle.pl/ | https://geselle.pl/bizuteria-na-zamowienie/ (lien repéré dans l'accueil) | Non : processus « croquis, modèle 3D, fonte, sertissage », modèle imprimé en 3D [VR] | Aucun (200) | PL | Atelier familial depuis 1948, diamants naturels et de laboratoire, certificat GIA/IGI/HRD dès 0,30 ct, transformation de bijoux de famille [VR]. Proche de l'esprit « atelier en direct » |
| 5 | Omara Jewelry (OMARA s.r.o., adresse à Poznań) | Poznań | https://omara.pl/ | https://omara.pl/projekt-na-zamowienie (200, autorisé) | Partiel : bouton « Zaprojektuj pierścionek » (cible non ouverte), sur-mesure par CAO puis modèle en cire [VR] | Aucun (robots.txt `Allow: /`) | PL, expédition UE | Laboratoire seulement (IGI sur chaque diamant), prix visibles de 5 568 zł, choix du diamant central (carats, couleur, pureté), retour 30 jours [VR] |
| 6 | Zeccoro | Wrocław (salon) | https://www.zeccoro.pl/ | https://www.zeccoro.pl/pl/i/Konfigurator-obraczek/33 (200) | Oui : configurateur d'alliances (profil, dimensions, métal, finition, pierres), vue 3D rotative, envoi d'une demande [VR] | Aucun | PL (Italie évoquée) | Configurateur d'alliances à visuel 3D ; pas de bague de fiançailles configurable [VR] |
| 7 | BigDIAMOND | Cracovie | https://bigdiamond.pl/ | https://bigdiamond.pl/obraczki-slubne-konfigurator/ (200) | Oui : configurateur d'alliances ; section diamants de laboratoire [VR] | Aucun | PL | Salon et atelier, projets sur mesure, page pédagogique « synthétique ou laboratoire » [VR] |
| 8 | Antonea | Łódź | https://antonea.pl/ | https://antonea.pl/konfigurator/ (200) | Oui : configurateur en ligne (forme, métal 585/750, pierre, gravure) [VR] | Aucun | PL | Bagues dès 1 200 zł, alliances dès 800 zł la paire, commande sur mesure 2 à 4 semaines, diamants naturels [VR] |
| 9 | WĘC – Twój Jubiler | Cracovie, Krzeszowice | https://www.wec.com.pl/ | https://www.wec.com.pl/pierscionki-zareczynowe-na-zamowienie (200) | Non : projet 3D payant (dès 960 zł), validation de la visualisation avant fabrication, 2 corrections incluses | Aucun | PL | Prix du projet 3D affichés (960 à 3 300 zł), fabrication en 4 à 6 semaines, **bague sur mesure non remboursable** [VR]. Intéressant pour le prix de la CAO |
| 10 | YES (réseau national de bijouteries) | Poznań (siège) | https://yes.pl/ | https://yes.pl/pierscionki-zareczynowe | Non (catalogue, diamants de laboratoire, pas de configurateur) | **Bloqué : 403 avec curl (en-tête Safari)** ; robots.txt autorise la page. Non retenté | PL | Grande marque nationale ; utile seulement pour les prix catalogue, bague en diamant de laboratoire à 6 795 zł [VR] |

Mentionnés, non classés :
- **Glamira.pl** (Glamira, groupe international) : configurateur de bagues, robots.txt illisible (403) donc **bloqué** ; hors critère « marque nationale ».
- **Apart.pl** : grande marque nationale, robots.txt illisible (403), **bloqué**.
- **Moissanit.pl / HARIETS** (Varsovie) : bagues sur mesure en moissanite et diamant de laboratoire, formulaire sans configurateur [VR].
- **Pierscionek.pl** : boutique en ligne, pierres naturelles et de laboratoire, fabrication à la commande, sans configurateur ouvert [VR].
- **W.KRUK** (grande marque nationale) : robots.txt autorise `/`, aucune page de configurateur recherchée ; non classé faute de temps.

## Terme employé pour le diamant synthétique

- **« diament laboratoryjny »** (diamant de laboratoire) est le terme dominant : Auroria, Diamora (« biały diament laboratoryjny »), Omara, YES, Glamira.pl [V sur Auroria et Diamora ; VR sur les autres].
- **« diament syntetyczny »** existe en parallèle : BigDIAMOND écrit que les deux termes désignent le même matériau et que « laboratoryjny » est préféré en communication grand public car « syntetyczny » se lit comme « imitation » [VR, https://bigdiamond.pl/diamenty-syntetyczne-nowy-trend-w-jubilerstwie].
- Autres formes vues : « hodowlany » (Glamira.pl), « moissanit » (pierre différente, pas un diamant) [VR].
- **Règle** : aucune norme polonaise vérifiée dans cette étude. Le fichier européen cite seulement la règle allemande, britannique, américaine et française [V, fichier 2026-11-15_europe.md]. Pour la Pologne : [S].

## Audits réalisés

Les deux premiers sites qui ne bloquent pas les robots ont été audités :
1. `auroria.md` (partiel : configurateur et panier interdits par robots.txt).
2. `diamora.md` (partiel : limitation de débit 429 atteinte avant la fiche diamant et le panier).

## Sources

- robots.txt lus le 24/11/2026 : https://auroria.pl/robots.txt, https://diamora.pl/robots.txt ; contrôle par `robots.cjs` des adresses de tous les sites du tableau (AUTORISÉ, sauf glamira.pl et apart.pl : INCONNU, 403).
- Pages ouvertes en navigateur : auroria.pl (accueil du configurateur, fiche Classic Four 0,70 ct, pages darmowy-zwrot, formy-platnosci, darmowa-dostawa), diamora.pl (liste des montures, fiche monture, liste des diamants).
- Extraits de recherche web (Parallel Search) : https://omara.pl/, https://omara.pl/o-nas, https://luva.pl/, https://luva.pl/konfigurator, https://www.zeccoro.pl/pl/i/Konfigurator-obraczek/33, https://bigdiamond.pl/, https://antonea.pl/, https://geselle.pl/, https://www.wec.com.pl/pierscionki-zareczynowe-na-zamowienie, https://yes.pl/pierscionki-zareczynowe, https://www.glamira.pl/pierscionki-zareczynowe, https://www.moissanit.pl/zaprojektuj_swoj_pierscionek, https://pierscionek.pl/.
- Auroria : https://auroria.pl/kontakt (société, Poznań), https://auroria.pl/o-nas (depuis 2016), https://auroria.pl/produkcja (fabrication à Poznań), LinkedIn Auroria (11 à 50 employés).
