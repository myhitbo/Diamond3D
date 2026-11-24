# Audit STIL Diamonds (Roumanie)

- **Site** : STIL Diamonds (SC STYL SRL, Râmnicu Vâlcea) · https://www.stildiamonds.ro/
- **Page de départ** : https://www.stildiamonds.ro/cat/verighete-configurabile (liste) puis fiche https://www.stildiamonds.ro/verighete-aur/colectia-harmony/harmony-632 (configurateur d'alliances). Bague de fiançailles « create în laborator » : https://www.stildiamonds.ro/bijuterii-cu-diamante/inele-cu-diamante/inel-de-logodna-din-aur-cu-diamante-create-in-laborator-1
- **Date** : 15/11/2026 (consigne) ; contrôles faits le 24/11/2026
- **Appareils** : Chromium ordinateur 1440×900 ; Chromium en affichage iPhone 13
- **Statut** : **partiel**. Les options du configurateur sont lues et listées, mais **la sélection n'a pas changé d'état au clic et le recalcul du prix a répondu HTTP 419 « CSRF token mismatch »** dans toutes mes sessions. Le panier n'a pas été atteint.
- Légende : [V] vérifié (page lue ou contrôle actionné) · [I] inféré · [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| Menu « Verighete » | Verighete Configurabile, Verighete în stoc (pour elle, pour lui), collections Charm, Classic, Fancy, Harmony, Memory [V] |
| Liste `/cat/verighete-configurabile` | 7 pages, bouton « Încarcă mai multe », prix par alliance (ex. V632 1 970 lei, V529 2 790 lei, V647 5 940 lei) ; bloc « Nu știi cu ce model să începi ? » vers les collections [V] |
| Fiche (configurateur) | Onglets **EA** (elle) et **EL** (lui) avec prix et poids propres ; case « Nu doresc configurație pentru EA » ; Dimensions ; Metal ; Pietre ; Servicii ; total estimé pour la paire [V] |
| Fin | « Salvează configurația » (connexion requise), « Trimite comanda » (non actionné), carrousel de 10 variantes en stock avec prix [V] |

## Contrôles vérifiés

Ordinateur : 134 contrôles listés ; iPhone : 117 [V].

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| EA 1 970 lei (2,6 g) / EL 2 350 lei (3,1 g) | onglets | affichent prix et poids de chaque alliance ; total de la paire 4 320 lei | 1 970 + 2 350 | [V] lu ; bascule non testée |
| Nu doresc configurație pentru EA | case | retire la configuration de l'alliance EA | — | non testé |
| Mărime (52 par défaut) + « Alege altă mărime » | modale radio | liste de 45 à 76 | pas de surcoût affiché | liste lue [V] ; sélection sans effet constaté |
| Lățime 2,5 / 5,0 / 3,0 / 4,0 mm | radio | choix de largeur (2,5 par défaut) | recalcul via POST `get_config_wedding_price` | clic sans changement d'état ; réponse 419 |
| Profil SC | radio (1 seul choix) | profil intérieur confort | — | [V] lu |
| Couleur d'or : alb / galben / roz | radio avec vignettes | la galerie contient une photo par couleur (galben, alb, roz) | — | clic sans changement d'état |
| Finition : Lucios, Mat 1, Mat 2 | radio | vignettes de finition | — | idem |
| Titre : 14 K - 750 lei, 18 K - 880 lei | radio | 14 K coché par défaut ; l'écart de prix entre titres n'est pas expliqué (le libellé indique des montants, sans dire « par gramme » ou « supplément ») | libellés 750 / 880 lei | idem ; sens du montant [S] |
| Nombre de pierres : 0, 1, 2, 3, 5 | radio | « Ai selectat : 1A » (position) ; positions « interdépendantes » (ex. 5A) | à recalculer | idem |
| Type de pierre : Diamant blanc 1,5 mm ; Diamant noir 1,50 mm ; Zircone blanche ; Zircone noire | radio | zircone blanche par défaut ; couleur, forme (rond), taille (1,5), pureté lus | non testé | idem |
| Gravure : sans / avec (+50 lei) | radio | +50 lei annoncé ; 8 polices « Font 01 » à « Font 08 » | +50 lei [V libellé] | idem ; saisie du texte non testée (aucune donnée saisie) |
| Salvează configurația | bouton | ouvre la modale « Salvează configurațiile preferate » : connexion ou création de compte requise [V, capture] | — | [V] ; compte non créé |
| Trimite comanda (2 boutons) | bouton | selon `/pag/cum-comand`, ouvre un formulaire « Ofertă personalizată » : l'alliance est livrée sur commande [V texte] | — | non actionné (formulaire) |
| Variantes en stock (carrousel, 10 fiches) | liens | mènent à d'autres fiches Harmony avec prix (2 540 à 5 570 lei) | — | liens présents [V] |
| Înapoi la configurare | lien | ancre vers le formulaire | — | [V] |
| Bandeau bas « Preț estimativ 4 320 lei » + « Trimite comanda » | barre fixe | suit le total | — | [V] |
| Recherche, menu, panier, compte, rendez-vous showroom, magasins, WhatsApp (+40 771 164 641), chat LiveChat | liens | ouvrent les pages de service | — | liens listés ; chat non ouvert |
| Bannière cookies : Respinge / Personalizează / Permite toate | boutons | « Respinge » actionné ; **« Permite toate » non testé** | — | voir limites |

## Options disponibles

- **Alliance (fiche Harmony 632)** : largeur 2,5 / 3,0 / 4,0 / 5,0 mm ; tailles 45 à 76 ; profil SC ; or blanc, jaune, rose ; finitions brillante, mat 1, mat 2 ; or 14 k ou 18 k ; 0, 1, 2, 3 ou 5 pierres ; diamant ou zircone, blanc ou noir, rond 1,5 mm ; gravure +50 lei en 8 polices [V].
- **Collections** : Charm, Classic, Fancy, Harmony, Memory [V].
- **Bague de fiançailles** (fiches, non configurables) : naturel, zircone, « create în laborator » ; filtres de catégorie par couleur d'or ; catégorie « Diamante certificate GIA/IGI » existe [V, menu] mais n'a pas été ouverte.
- Pas de forme de pierre au choix, pas de carat au choix, pas de choix naturel/synthétique dans le configurateur [V].

## Prix, délais, retours, garanties

- **Prix** : affiché par alliance (EA et EL séparés) puis total estimé de la paire, TVA incluse [V]. Pas de décomposition métal/façon/pierre ; l'écart 14 k / 18 k est donné en lei sans explication.
- **Délai** : « maximum 14 jours ouvrés » pour l'exécution et la livraison des alliances configurées [V]. Stock : livraison 24 à 48 h ouvrées par Cargus.
- **Livraison** : gratuite sur toute commande, emballage cadeau gratuit, colis assuré à sa valeur [V].
- **Retour** : 14 jours calendaires, produit non porté ; **les alliances faites sur commande ne peuvent pas être retournées**, seulement refaites « moyennant une taxe » [V `/pag/politica-de-retur`].
- **Garantie** : certificat de garantie annoncé sur les fiches ; la page `/pag/garantie` liée dans le pied de page renvoie **404** [V].
- **Paiement** : carte Visa/Mastercard via Netopia, paiement en 2, 4 ou 6 fois sans intérêts avec cartes partenaires, remboursement à la livraison (ramburs) [V `/pag/modalitati-de-plata`, `/pag/cum-comand`] ; simulateurs de crédit sur les fiches de bagues [V].

## Confiance et service

- Libellé du synthétique : « diamante create în laborator » ; fiche : « Lab Grown Diamond » ; fiche du solitaire : D-G, VS-VVS, 1,014 ct + 0,297 ct, or jaune 10 k, 3 700 lei [V]. Aucun certificat cité sur cette fiche [V].
- Langue unique : roumain ; devise : lei [V].
- Équipe annoncée : 30 bijoutiers et gemmologues ; bijoux sur mesure par consultation (`/pag/bijuterii-personalizate-la-comanda`) [V].
- Services : rendez-vous showroom, carte de fidélité, réparations, chat, WhatsApp, magasins [V].
- Avis clients : aucun vu sur les fiches ouvertes. Preuves de fabrication : aucune photo ni vidéo d'atelier dans le parcours ; mention « créée et personnalisée dans l'atelier STIL Diamonds » seulement [V].
- Visuel principal : 2 à 3 photos par couleur d'or, 3 éléments vidéo dans la page, aucun canvas 3D, aucune vue 360° [V].

## Points forts à retenir pour JR Diamond

1. **Un configurateur d'alliances avec total de la paire** (EA + EL) : un seul écran, deux bagues, prix cumulé (fiche Harmony 632).
2. **Des photos par couleur d'or** (galben, alb, roz) dans la galerie, au lieu d'un rendu unique [V].
3. **Enregistrer la configuration** (avec compte) pour y revenir, et variantes en stock proposées en bas de page [V].
4. **Annonce claire d'exclusion du retour** pour le sur-mesure, sur la page retours [V].
5. **Paiement en 2, 4 ou 6 fois sans intérêts** et livraison gratuite assurée [V].

## Défauts observés

- **Recalcul du prix en erreur** : chaque modification déclenche un POST `/data/get_config_wedding_price` qui a répondu 419 « CSRF token mismatch » [V, 4 réponses] ; la sélection reste inchangée à l'écran. Je n'ai pas pu établir si le défaut vient de mon navigateur (consentement refusé, session) [S].
- Libellés de titre « 14 K - 750 lei / 18 K - 880 lei » sans explication [V].
- `/pag/garantie` en 404 ; `/cos` en 404 ; `/en` en 404 [V].
- Aucun visuel 3D ni 360° ; aucune preuve de fabrication [V].
- Chargement du visuel principal : 3,0 s (ordinateur) et 5,2 s (iPhone) pour la fiche Harmony 632 ; 2,4 s et 1,9 s pour la fiche du solitaire (une seule mesure, via proxy) [V].

## Limites de l'audit

- L'effet de chaque option sur le prix et l'image n'a **pas pu être mesuré** : clics sans changement d'état et réponse 419. Les montants cités viennent des libellés et de l'état initial.
- L'acceptation des cookies (« Permite toate ») n'a pas été essayée : l'outil de contrôle l'a refusée, et je n'ai pas contourné ce refus.
- « Trimite comanda » et « Adaugă în coș » n'ont pas mené au panier : l'ajout au panier a expiré en 5 s sur la fiche du solitaire ; le panier n'a donc pas été vu (récapitulatif, frais, délais du panier non vérifiés).
- Aucun formulaire rempli, aucun compte créé, chat non ouvert.
- Pas de passage sur les pages filtrées (interdites par robots.txt).

## Sources

- https://www.stildiamonds.ro/cat/verighete-configurabile
- https://www.stildiamonds.ro/verighete-aur/colectia-harmony/harmony-632
- https://www.stildiamonds.ro/bijuterii-cu-diamante/inele-cu-diamante/inel-de-logodna-din-aur-cu-diamante-create-in-laborator-1
- https://www.stildiamonds.ro/pag/livrare · /pag/politica-de-retur · /pag/modalitati-de-plata · /pag/cum-comand · /pag/bijuterii-personalizate-la-comanda
- Captures et sorties de contrôle : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/stil-diamonds/`
