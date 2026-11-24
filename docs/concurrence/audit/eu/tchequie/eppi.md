# Audit : Eppi (eppi.cz), Prague

- **Site** : Eppi, https://www.eppi.cz/. **Page de départ** : https://www.eppi.cz/vyberte-si-prsten (menu « Sestav si svůj prsten »).
- **Date** : 15/11/2026. **Appareils** : ordinateur (Chromium 1366 × 900) et affichage iPhone 13 (Playwright, mesure de chargement et liste des contrôles).
- **Statut** : **partiel**. Le site répond lentement et par intermittence au navigateur automatisé (plusieurs délais de 30 à 90 s) ; l'étape « pierre » et le panier n'ont pas été parcourus (panier interdit par robots.txt : `/nakupni-karta`, `/pokladna`).
- Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé. Les nombres d'avis sont ceux que le site affiche.

## Parcours

Le constructeur compte 3 étapes affichées en tête de page [V]. Deux entrées existent.

| Entrée (menu « Sestav si svůj prsten ») | Adresse | Ordre des étapes |
|---|---|---|
| Začít s prstenem | https://www.eppi.cz/vyberte-si-prsten | 1 Prsten, 2 Drahokam, 3 Zkompletovat |
| Začít s diamantem | https://www.eppi.cz/diamanty-k-osazeni | 1 Drahokam, 2 Prsten, 3 Zkompletovat |
| Začít s lab-grown diamantem | https://www.eppi.cz/diamanty-k-osazeni-laboratorni | idem |
| Začít s barevným diamantem | https://www.eppi.cz/diamanty-k-osazeni-barevne | idem |

Depuis une fiche bague, « Vybrat diamant » mène à `/diamanty-k-osazeni?ring=<id>` [V, lien lu]. Texte de l'étape 1 : « Nyní si vyberte cenové rozmezí, základní styl, kov a barvu prstenu, na který vám diamant osadíme » [V].

## Contrôles vérifiés

Étape 1, liste (429 produits au chargement, 635 contrôles listés sur `/zasnubni-prsteny`, 652 sur `/vyberte-si-prsten`).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau cookies : « Souhlasím a pokračovat » / « Použít jen technické cookies » | boutons | ferment le bandeau | — | « technické » actionné OK |
| Styl obroučky : Solitér, S postranními kameny, Halo/half halo, Tři kameny, Cluster, Vintage, Zásnubní set | cases | l'adresse reçoit `style[n]=n` ; le tri se recharge | — | Solitér et S postranními OK (adresse) ; les 5 autres non concluants (clic automatisé refusé) |
| Kov : žluté, bílé, růžové, champagne, platina, vícebarevné zlato | cases | filtre métal | — | non concluant (clic refusé) |
| Cena : curseur 5 000 à 150 000 Kč, champs « Od » / « Do » | curseur | l'adresse porte `price_range[from]=5000&price_range[to]=150000` | — | présent, non réglé |
| Zobrazit více | bouton | déplie les filtres | — | présent |
| Od nejlevnějšího (tri) | bouton | menu de tri ; l'adresse porte `sort_by=9` | — | OK |
| Čtveřice 14k / 18k / Pt sur chaque carte | pastilles | variantes de métal de la fiche | « od » + prix | listées |
| ♡ Přidat mezi oblíbené | bouton | favoris (adresse `/pridat-mezi-oblibene/` interdite aux robots) | — | non actionné |
| Fiche : Výběr kovu | liste | 7 métaux (voir ci-dessous) | 18 k : + 10 800 Kč ; platine : + 8 400 Kč | 18k blanc OK dans le navigateur (35 190 Kč) ; autres lus dans le HTML |
| Fiche : Výběr velikosti | liste | 46 à 71 (Ø 14,6 à 22,6 mm) | — | lue dans le HTML ; sélection automatisée non concluante |
| Fiche : Přidat gravírování, Vyberte font, texte 15 signes | champs | case, 9 polices, texte limité à 15 | non indiqué | polices et champ lus ; saisie non testée |
| Fiche : Vybrat diamant | bouton | doit mener à l'étape 2 | — | clic sans changement d'adresse : non concluant |
| Fiche : Domluvit si osobní či virtuální schůzku | bouton | rendez-vous, non ouvert | — | non testé |
| Fiche : Jak zjistit velikost prstenu ? | texte et tableau | tableau mm / Ø / R.-U. / Allemagne / États-Unis ; mesure : anneau à commander ou guide PDF | — | OK (lu) |
| Fiche : « Plaťte ve 3 splátkách po 8 130 Kč » | texte | paiement en 3 fois | 3 × 8 130 Kč | OK (lu) |
| Menu : Šperky na míru, Domluvit si schůzku | liens | atelier sur mesure, rendez-vous | — | non ouverts |
| +420 216 216 046 | lien | `tel:` | — | non ouvert |
| Chat (domaine jarabot) | widget | chargé en arrière-plan ; non ouvert | — | non testé |
| Étape 2 : filtres Tvar (16 formes), Karáty, Cena, Barva D à N, Brus, Čistota FL à SI2 | filtres | **présents dans la page lue** (`/diamanty-k-osazeni-laboratorni`) | — | non actionnés |

## Options disponibles

- **Style** : solitaire, pierres latérales, halo, trois pierres, cluster, vintage, set fiançailles + alliances [V].
- **Métal** : or jaune, blanc, rose en 14 k et 18 k, platine 950, champagne gold, or multicolore, argent doré (« Pozlacené stříbro ») [V].
- **Pierre (étape 2)** : diamant naturel (« Diamant »), diamant lab-grown, diamant de couleur, moissanite, topaze ; formes : Round, Princess, Heart, Oval, Cushion, Emerald, Asscher, Radiant, Marquise, Pear, Trillion, Octagonal, Sq.emerald, Cushion Brilliant, Baguette, Shield ; couleur D à N ; brut « excelentní, velmi dobrý, dobrý » ; pureté FL à SI2 [V].
- **Taille** : 46 à 71, avec diamètre ; première retouche gratuite 120 jours [V].
- **Gravure** : texte de 15 signes, 9 polices (Monotype Corsiva, Segoe Script, Book Antiqua, Century Gothic, Cambria, Freeport, Poiret One, Oswald, Nickainley) [V].
- **Finition** : surface « Vysoký lesk », rhodium « Áno » sur la fiche Iravan [V].

## Prix, délais, retours, garanties

- **Prix** : « od 24 390 Kč » pour la bague Iravan lab-grown (14 k), TVA non précisée dans la page ; Black Friday : −20 % articles en stock (code BF20), −10 % sur commande (code BF10) donnant 21 951 Kč [V].
- **Décomposition** : supplément 18 k + 10 800 Kč, platine + 8 400 Kč, par poste affiché au choix du métal [V]. La pierre se choisit ensuite ; le total n'a pas été relevé.
- **Délai** : « Na objednávku, dodání do 3 až 4 týdnů » ; « objednejte do 30.11. s garancí doručení do Vánoc » ; date de livraison estimée selon la charge [V].
- **Livraison et retour** : livraison et retour gratuits, emballage luxe gratuit, 120 jours pour retourner [V]. L'exception du sur mesure : « personalizované » et gravé non vérifiés [S].
- **Garantie** : service à vie annoncé (« Doživotní servis ») ; certificat de qualité du bijou, certificats internationaux pour les pierres [V].
- **Paiement** : 3 fois sans précision de frais ; autres moyens non vus (caisse interdite) [V/S].
- **Libellé synthétique** : « lab-grown diamant » partout ; la page dit « plnohodnotná, ale etičtější varianta toho přírodního » [V].

## Confiance et service

- Avis : 5/5 sur 2 349 avis affichés sur la fiche ; Heureka 5,0 et Google 4,7 sur la page de la liste [V].
- Boutique : Národní 28, Prague, du lundi au vendredi 9 h à 19 h, samedi et dimanche 10 h à 17 h [V]. Conseillère nommée (Aneta) et téléphone [V].
- Atelier propre (« originální design z vlastní dílny », depuis 2011) [V].
- Preuves de fabrication : pas de photos ni de vidéos d'atelier, de suivi de commande ni d'identifiant constatés sur la fiche [V/I].
- Langues : tchèque, slovaque, allemand (hreflang) ; devise CZK [V].

## Points forts à retenir pour JR Diamond

1. **Constructeur en 2 sens** : « commencer par la bague » ou « par la pierre » ; l'ordre des étapes s'inverse (https://www.eppi.cz/diamanty-k-osazeni). Utile pour « l'atelier en direct » : le client peut arriver avec une pierre.
2. **Surcoût affiché par métal** (+ 10 800 Kč en 18 k, + 8 400 Kč en platine sur la bague testée) : le prix expliqué, avec l'écart visible avant d'ajouter la pierre. Preuve : fiche `/sperk/zasnubni-prsten-s-lab-grown-diamantem-iravan/40647`, 18k blanc : 35 190 Kč contre 24 390 Kč.
3. **120 jours de retour, livraison et retour gratuits**, première retouche de taille gratuite : met la barre haute sur la confiance (même page).
4. **Paiement en 3 fois affiché sur la fiche** : réponse à la peur du prix.
5. **Filtres de pierre complets sur une seule page** (16 formes, couleur, pureté, brut) avec lien direct vers lab-grown ou couleur.
6. **Page de départ unique par intention** (diamant lab-grown, diamant de couleur) : orientation rapide.

## Défauts observés

- Pas de visuel 3D, 360° ou en main constaté sur les pages lues : photos fixes [I].
- Chargement lent : plusieurs délais de plus de 30 s en navigateur automatisé ; première image de fiche visible en 2,02 s (ordinateur) et 1,73 s (iPhone) sur une mesure isolée [V].
- Les cases de filtre ne répondent pas au clic automatisé ; le compteur de produits n'a pas été fiable [V].
- Compte à rebours Black Friday et promotions qui brouillent le prix de référence [V].
- Aucune photo de fabrication ni suivi de commande constatés [I].

## Limites de l'audit

- Non parcourus : étape 2 « Drahokam » en actionnant les filtres, étape 3 « Zkompletovat », récapitulatif, panier (interdit : `/nakupni-karta`, `/pokladna` dans le robots.txt), moyens de paiement détaillés, retour du sur mesure, guide de taille PDF, rendez-vous, chat, WhatsApp.
- Prix des variantes de métal autres que 18 k blanc lus dans le HTML, non vérifiés par clic ; effet des métaux sur l'image non vérifié.
- Mesure de chargement : une seule, via le proxy de l'environnement, fiche Iravan ; la liste n'a pas de mesure fiable (22 s mesurées sur un script au sélecteur erroné).
- Cadence respectée : une page toutes les 2 secondes au plus ; une demande a été annulée par le site (délai).

## Sources

- https://www.eppi.cz/vyberte-si-prsten ; https://www.eppi.cz/diamanty-k-osazeni-laboratorni ; https://www.eppi.cz/zasnubni-prsteny ; https://www.eppi.cz/sperk/zasnubni-prsten-s-lab-grown-diamantem-iravan/40647 ; https://www.eppi.cz/sperk/zasnubni-prsten-s-052ct-igi-certifikovanym-lab-grown-oval-diamantem-frost/50012 ; https://www.eppi.cz/robots.txt.
- Captures et journaux : `scratchpad/audit/eu/tchequie/eppi/`.
