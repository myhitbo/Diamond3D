# Audit : Auroria (Pologne)

- **Site** : Auroria, https://auroria.pl/ (Auroria Sp. z o.o., Poznań, KRS 0000700706, en activité depuis 2016 [V, /kontakt, /o-nas]).
- **Page de départ** : https://auroria.pl/konfigurator-3d/pierscionki-zareczynowe (présentation du configurateur 3D) ; fiche testée : https://auroria.pl/produkt/pierscionek-zareczynowy-z-diamentem-laboratoryjnym-classic-four-070-biale-zloto
- **Date** : 15/11/2026 (consigne) ; contrôles effectués le 24/11/2026.
- **Appareils** : Chromium ordinateur (1366 x 900, locale pl-PL) et affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Le configurateur 3D lui-même (`/konfigurator-3d/pierscionki-zareczynowe/konfiguruj` et `/konfigurator-3d/obraczki-slubne/konfiguruj`) est interdit par `Disallow: /konfigurator-3d/*/konfiguruj` dans robots.txt : non ouvert. Le panier (`/koszyk`), le compte et les filtres à paramètres sont aussi interdits : non ouverts, et le bouton « Dodaj do koszyka » n'a pas été cliqué.
- Légende : [V] vérifié (page lue ou contrôle actionné) · [I] inféré · [S] supposé.

## Parcours

| Étape | Options relevées |
|---|---|
| Présentation du configurateur de bague (5 étapes annoncées) | 1 style de bague · 2 type et taille de la pierre centrale · 3 couronne et anneau · 4 couleur de l'or · 5 commande ; « Skontaktuj się z doradcą » [V, page de départ] |
| Présentation du configurateur d'alliances (5 étapes annoncées) | 1 profil · 2 aspect et mode de fabrication (type, couleur de l'or, titre, finition de surface) · 3 dimensions (taille de doigt, hauteur, largeur, visuel 3D mis à jour en direct) · 4 gravure · 5 commande [V, texte de la page, étapes non parcourues] |
| Catalogue de bagues de fiançailles (3 482 produits) | filtres : prix, couleur de l'or, type de pierre, forme, style, masse, « disponible en 24 h » (filtres à paramètres interdits : non actionnés) [V, texte] |
| Fiche produit (Classic Four 0,70 ct) | assistant de pierre (type, masse, qualité) · métal · taille · ajout au panier · conseiller en visio [V] |
| Panier, livraison, paiement | non atteints (panier interdit) ; conditions lues sur les pages d'aide [V] |

## Contrôles vérifiés

Relevé de contrôles : 149 sur la page de départ ordinateur, 195 (ordinateur) et 126 (iPhone) sur la fiche produit. Les liens de pied de page et de navigation sont regroupés.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu Pierścionki zaręczynowe, Obrączki ślubne | menu déroulant | liens par or (jaune, blanc, bicolore, rose), pierre (naturel, laboratoire, bleu, rose, noir, saphirs…), forme (7), style (9), budget (jusqu'à 1 500, 2 000, 3 000, 5 000 zł) | — | Fonctionne [V, liens relevés, pages non toutes ouvertes] |
| Przejdź do konfiguratora 3D | lien | mène à `/konfigurator-3d/*/konfiguruj` | — | **Non testé : interdit par robots.txt** |
| Skontaktuj się z doradcą | bouton | lien vers /kontakt | — | Fonctionne [V, lien] |
| Wirtualny salon | lien | page de prise de rendez-vous en visio ; « Zobacz podczas wideorozmowy » sur la fiche | — | Page 200 [V], rendez-vous non pris |
| Zdjęcia / Wideo | bascule | alterne galerie photo (13 vignettes) et lecteur vidéo (2 vidéos webm, 15 s pour la première, lecture manuelle) | — | Fonctionne [V] |
| Vignettes de galerie (13) | image | photos de bague (3 angles, vue de côté), portée à la main, emballage, 3 images de certificat et documents, vidéo | — | Fonctionne [V, capture p1_d] |
| Flèches de galerie | bouton | photo suivante ou précédente | — | Fonctionne [V] |
| Kopiuj kod | bouton | copie le code promo (BLACK) | −33 % (4 355 zł au lieu de 6 499 zł) | Fonctionne [V, bouton visible, copie non vérifiée] |
| Skąd tak atrakcyjna cena? | lien | /sekret-niskich-cen-naszych-diamentow : explication des prix (fabricant, vente directe, pas d'intermédiaire) | — | 200 [V] |
| Wybrane parametry : Białe złoto, Próba 585 | ligne cliquable | ouvre un panneau ; **contenu non lu** (clic non concluant sur cette ligne) | ? | Non vérifié |
| Wybrane parametry : Kamień cent. (Diament laboratoryjny 0,70 ct) | ligne cliquable | ouvre « Wybierz kamień centralny » : 1 type de pierre, 2 masse, 3 qualité | voir ci-dessous | Fonctionne [V] |
| Type de pierre (12 choix) | vignettes | Brylant (naturel), diamant noir, saphir bleu, saphir rose, topaze Swiss Blue, améthyste, péridot, grenat, citrine, diamant de laboratoire, diamant rose de laboratoire, diamant bleu de laboratoire ; la sélection de « Brylant » affiche « Obecnie : Brylant » et change les prix de la liste de masses | naturel plus cher (0,70 ct : 15 999 zł contre 6 499 zł en laboratoire) | Fonctionne [V, capture p3_nat] |
| Masse de la pierre | vignettes | laboratoire : 0,30 · 0,40 · 0,50 · 0,70 · 1 · 2 ct ; naturel : 0,08 · 0,13 · 0,18 · 0,24 · 0,30 · 0,40 · 0,50 · 0,70 · 1 ct | laboratoire 3 999 · 4 519 · 4 799 · 6 499 · 8 499 · 14 284 zł ; naturel 2 419 · 2 879 · 3 589 · 3 819 · à partir de 4 799 · 6 999 · 8 999 · 15 999 · 30 999 zł | Fonctionne [V] |
| Qualité de la pierre (étape 3) | vignettes | texte de l'étape non lu (défilement non réussi) | ? | Non vérifié |
| Fermer le panneau (croix) | bouton | ferme sans valider ; la fiche garde l'option d'origine (laboratoire 0,70 ct, 6 499 zł) | — | Fonctionne [V]. Échap ne ferme pas [V] |
| Wybierz rozmiar | liste déroulante | s'ouvre ; valeurs lues 1 à 5 sur un relevé incomplet, liste complète non relevée | — | Partiel [V] |
| Dodaj do koszyka | bouton | appelle le panier | — | **Non testé : panier interdit par robots.txt** |
| Spotkaj się online z doradcą | bouton | visioconférence avec un conseiller | — | Ouverture non testée (contact) |
| Otrzymaj … 5 % cashback (+217 zł) | lien | /cashback : 5 % de remise sur un prochain achat | −217 zł sur achat suivant | 200 [V, lien] |
| Raty 10x0% | lien | /platnosc-ratalna : 10 mensualités à 0 %, via Tpay, prêt Pekao SA ; 436 zł par mois pour 4 355 zł | — | 200 [V] |
| Jak wybrać rozmiar pierścionka ? / Zamów bezpłatną miarkę | liens | guide des tailles et mesureur gratuit | gratuit | Guide 200 [V] ; commande de mesureur non testée (formulaire) |
| Wielkość kamienia (0,30 à 2 ct) | sélecteur | compare la taille sur la main ; chaque palier a son prix | voir masses | Fonctionne [V, texte] |
| Zobacz pierścionek Classic Four 0,70 ct | lien | fiche de la variante | — | Non testé |
| Podobne (14 modèles) | liens | fiches de modèles voisins | — | 200 [V, liens] |
| Zobacz wszystkie opinie | bouton | ouvre la fiche Google Maps de la société | — | Lien externe, non suivi |
| Chat (icône en bas à droite) | widget | chat en ligne | — | Non ouvert (règle : pas de conversation) |
| Zaloguj się / Zarejestruj się / Koszyk | boutons | compte et panier | — | Non testés (compte et panier interdits) |
| Newsletter (champ + Zapisz) | formulaire | inscription | — | Non rempli (règle : aucun formulaire) |
| Pomoc : Korekta rozmiaru, Darmowa dostawa, Gwarancja, Reklamacje, Domowa przymierzalnia, Salony, Kontakt | liens | pages d'aide, lues en texte | voir plus bas | 200 [V] |
| Zarządzanie cookies | lien | rouvre le bandeau Cookiebot | — | Fonctionne [V, lien] |

## Options disponibles

- **Or** : jaune, blanc, bicolore blanc et jaune, rose ; titre 585 (14 carats) sur les bagues ; alliances en 585 et en **333 (8 carats)** [V, filtres du menu]. Pas de 750 ni de platine vus sur Auroria (le titre 750 est cité par Antonea, pas par Auroria) [V, menus].
- **Pierre centrale (fiche)** : diamant naturel (« brylant »), diamant noir, saphir bleu ou rose, topaze, améthyste, péridot, grenat, citrine, diamant de laboratoire (blanc, rose, bleu) [V].
- **Masse** : laboratoire 0,30 à 2 ct ; naturel 0,08 à 1 ct ; les brylants de la collection vont de 0,03 à 1 ct [V, /brylanty-auroria].
- **Qualité annoncée** : couleur H à D, pureté SI à VVS1, taille Good à Excellent ; la fiche du modèle test indique pureté VS1, couleur F, taille EX [V].
- **Forme de pierre (menu)** : rond, ovale, marquise, coussin, poire, carré, émeraude [V].
- **Styles** : alliance, solitaire, trois pierres, multi-pierres, organique, atypique, rétro, classique, « dostawki » (anneaux d'accompagnement) [V].
- **Taille de doigt** : liste déroulante ; guide et mesureur gratuit [V].
- **Alliances (texte du configurateur)** : profil, type, couleur et titre de l'or, finition, taille, hauteur, largeur, gravure ; parcours non parcouru [V texte].
- **Services** : visio, essayage à domicile, retrait en salon, emballage, pack Premium [V].

## Prix, délais, retours, garanties

- **Prix** (fiche Classic Four 0,70 ct, laboratoire, or blanc 585) : 6 499 zł affiché, 4 355 zł avec le code BLACK (−33 %, offre jusqu'au 30/11), 436 zł par mois en 10 mensualités à 0 % [V].
- **Mise en avant du prix** : « Cena podobnej konfiguracji u innych jubilerów : 7 619 zł (+1 120 zł) » et « Najniższa cena z 30 dni przed obniżką : 6499 zł » (mention légale de prix de référence) [V]. Le code promotionnel change d'un jour à l'autre dans nos lectures (YOU, SHINE, BLACK, NEW, LOVE) : remise permanente [I].
- **Décomposition** : pas de ventilation or, pierre, façon. Une page « Sekret naszych cen » explique en texte : fabrication propre, vente directe sans intermédiaire [V, /sekret-niskich-cen-naszych-diamentow]. Le prix par masse de pierre est affiché dans le panneau d'options [V].
- **Délai** : fiches en stock « 3 à 7 jours ouvrés » ; commande du configurateur : 15 jours ouvrés d'après la page de présentation ; « dostępny w 24 h » sur certains modèles [V].
- **Livraison** : gratuite en Pologne et dans toute l'UE ; retrait en salon ; Paczkomat, coursier [V, /darmowa-dostawa].
- **Paiement** : à la livraison, virement ou carte via Tpay, 10 mensualités à 0 % (Pekao SA) ; BLIK non mentionné [V, /formy-platnosci].
- **Retours** : bague 100 jours, retour gratuit ; alliances 14 jours extensibles jusqu'à un an avec un pack d'avantages payant ; accessoires 14 jours ; **aucun retour après une correction de taille** [V, /darmowy-zwrot]. Exception du sur-mesure : non trouvée dans les pages lues (le règlement `/regulamin` n'a pas été ouvert) [S].
- **Garantie** : 5 ans sur les vices cachés ; garantie à vie avec le pack Premium ; remise à neuf des rayures : 99 zł ; délai de traitement 14 jours ; toute réparation chez un autre bijoutier fait perdre la garantie [V, /gwarancja].
- **Correction de taille** : gratuite (durée selon le type de bijou et le pack ; la fiche cite « 10 lat na zmianę rozmiaru ») [V].
- **Pack Premium** : échange à vie contre une bague de plus grande valeur, avec paiement de la différence [V, /korzysci-zakupu].

## Confiance et service

- **Certificats** : GIA, HRD ou IGI pour tout diamant de 0,30 ct et plus ; certificat maison Auroria pour les plus petits et pour tout bijou [V, /brylanty-auroria].
- **Origine** : « sources éthiques, légales » ; le texte ne détaille pas le contrôle de provenance [V].
- **Libellé du synthétique** : « diament laboratoryjny » (bandeau « Laboratoryjny » sur chaque fiche) ; texte : « mają wygląd i właściwości identyczne jak diamenty naturalne », mention « Eco-friendly » [V]. Aucune mention « syntetyczny ».
- **Avis** : lien vers Google Maps ; note chiffrée non lue ; galerie Instagram @auroria_bizuteria sur la fiche (« Na Waszych dłoniach… ») [V].
- **Preuves de fabrication** : page « Manufaktura » (/produkcja) : bijoux conçus et fabriqués à Poznań, dessin et impression 3D, « ręczna produkcja » ; sur la fiche : « Wszystkie pierścionki wykonujemy ręcznie po tym, jak złożysz zamówienie » et un lien « Zobacz pracownię » [V]. Pas de suivi photo de la commande vu.
- **Canaux** : téléphone, e-mail, visio, chat, 6 salons (Varsovie Arkadia, Cracovie Bonarka, Gdańsk Forum, Poznań Posnania, Katowice Silesia, Wrocław Magnolia Park) [V].
- **Langues, devise** : polonais, prix en zł TTC ; livraison UE gratuite annoncée [V].

## Points forts à retenir pour JR Diamond

1. **Naturel et laboratoire sur la même fiche, avec le prix qui change en direct par masse** : le panneau « Wybierz kamień centralny » montre 12 types de pierre et, pour chaque masse, le prix (0,70 ct : 6 499 zł en laboratoire, 15 999 zł en naturel) [V, capture p3_nat].
2. **Fiche à galerie riche** : 13 vignettes dont portée à la main, emballage, certificats, deux vidéos ; bascule Zdjęcia/Wideo [V, capture p1_d].
3. **Garanties lisibles par objet** : 100 jours pour la bague, 14 jours pour les alliances, 5 ans de garantie, rayures à 99 zł, échange à vie : chaque durée est sur une page dédiée [V].
4. **Pack à vie « upgrade »** : modèle de fidélisation inconnu chez JR Diamond [V, /korzysci-zakupu].
5. **Essayage à domicile gratuit de répliques** : 3 jours, envoi aller-retour gratuit, répliques en or jaune de taille standard et mesureur [V, /domowa-przymierzalnia].
6. **Comparaison de prix et mention du plus bas prix des 30 derniers jours sur la fiche** [V].
7. **Quatre garanties de service visibles dès le haut de page** : livraison gratuite, retrait en salon, correction de taille gratuite, 10 mensualités à 0 % [V].

## Défauts observés

- Configurateur 3D inaccessible à l'audit : interdit par robots.txt. On ne peut donc pas décrire ses étapes réelles, son prix ni sa vitesse [V].
- Remise permanente : le code promotionnel change à chaque lecture (YOU, SHINE, BLACK, NEW, LOVE), ce qui rend le « prix » barré peu crédible [I].
- Les fiches affichent encore le prix plein barré à côté de −33 % (4 355 zł) ; plusieurs promotions se cumulent dans la barre noire [V].
- Retour des alliances limité à 14 jours, sauf pack payant ; aucun retour après correction de taille [V].
- Page de présentation : le bouton « Przejdź do konfiguratora 3D » mène à un chemin que robots.txt interdit à tous les robots, pas à une page publique statique [V].
- Panneau d'options : Échap ne ferme pas le volet, la croix est la seule sortie ; le volet de qualité n'a pas pu être lu [V].
- Titre de l'or limité à 585 (et 333 sur alliances) : pas de 750 ni de platine [V, menus].

## Limites de l'audit

- Configurateur et panier non ouverts (robots.txt). Pas de récapitulatif de commande, de frais, de délai en panier ni de moyens de paiement affichés au panier : ceux listés viennent des pages d'aide.
- Panneau métal non lu ; troisième étape (qualité) du panneau de pierre non lue ; liste complète des tailles non relevée.
- Temps d'apparition du visuel principal, **machine d'audit chargée** : première image de galerie visible et bouton d'achat présents après 5,2 s sur ordinateur et 5,4 s en affichage iPhone ; plus grand élément affiché (LCP) 1,4 à 1,6 s sur ordinateur et 1,2 s en iPhone (valeurs peu fiables, mesure unique) [V].
- Avis chiffrés, note Google, preuves de la manufacture (photos réelles de la fabrication) non examinés.

## Sources

- https://auroria.pl/robots.txt (lu le 24/11/2026).
- https://auroria.pl/konfigurator-3d/pierscionki-zareczynowe ; https://auroria.pl/konfigurator-3d/obraczki-slubne ; https://auroria.pl/produkt/pierscionek-zareczynowy-z-diamentem-laboratoryjnym-classic-four-070-biale-zloto ; https://auroria.pl/kategoria/pierscionki-zareczynowe.
- https://auroria.pl/darmowy-zwrot ; /formy-platnosci ; /darmowa-dostawa ; /gwarancja ; /domowa-przymierzalnia ; /brylanty-auroria ; /sekret-niskich-cen-naszych-diamentow ; /korzysci-zakupu ; /produkcja ; /o-nas ; /kontakt.
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/auroria/` (p1_d.jpg, p2_stone.jpg, p3_nat.jpg).
