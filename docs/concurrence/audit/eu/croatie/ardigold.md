# Audit : Ardigold (Croatie)

- **Site** : Ardigold (ARDIGOLD d.o.o., Dugo Selo, atelier familial depuis 1965)
- **Adresse** : https://ardigold.com/ · page de départ : https://ardigold.com/konfigurator/
- **Date** : 15/11/2026 · **Appareils** : ordinateur (Chromium 1366×900) et affichage iPhone 13
- **Statut** : complet pour le configurateur ; pas de panier (le site ne vend pas en ligne). robots.txt lu : autorisé, aucune adresse interdite ouverte.

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

## Parcours

Le configurateur (alliances uniquement) s'ouvre sur une carte d'accueil, puis 4 étapes (5 en mode « Napredno ») ; le bouton → avance, ← recule [V].

| étape | options |
|---|---|
| Accueil | « Kako se zove ona? » : champ prénom (gravé à l'intérieur de la bague de lui), « Nastavi », « Preskoči, samo gledam » ; bandeau cookies Odbijam / Prihvaćam (Google Analytics) |
| 01 Profil et dimensions | Muški / Oboje / Ženski ; 12 profils P1 à P12 ; taille de doigt homme et femme ; largeur ; épaisseur |
| 02 Métal et finition | métal (10), titre, finition (11) ; mode avancé : « Podjela » (zones) |
| 03 Pierres | Bez / Lunet / Pavé / Kanal ; taille, sertissage, nombre |
| 04 Gravure | Tekst / Simbol / Učitavanje ; bouton « Preuzmi PDF » |
| Demande | « Zatraži ponudu » : formulaire (nom, e-mail, téléphone, message) |

## Contrôles vérifiés

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| NATRAG | lien | retour à l'accueil du site | — | fonctionne (non suivi) |
| NAPREDNO | interrupteur | ajoute une 5e étape ; en étape 02 apparaît « Podjela : Jednobojni » (liste non ouverte par le script) | inchangé | fonctionne [V] ; liste de la Podjela non testée |
| 01 à 04 (pastilles) | boutons | saut d'étape | — | présents, non cliqués un à un (le bouton → a été utilisé) |
| Muški / Oboje / Ženski | boutons | choisit quelle bague est montrée/éditée ; Oboje = paire ; cliquer Lunet bascule automatiquement sur Ženski | inchangé en étapes 1 et 2 (1 567 € pour la paire dans tous les cas) | fonctionne ; le prix reste celui de la paire [V] |
| P1 à P12 (profils) | boutons | change la section de la bague en 3D | P1 1 637 · P2 1 477 · P3 1 567 (défaut, « Bestseler ») · P4 1 457 · P5 1 534 · P6 1 494 · P7 1 464 · P8 1 543 (« Arhitektonski ») · P9 1 526 · P10 1 560 · P11 1 524 · P12 1 707 (€, paire, mode Oboje, défaut) | fonctionne [V] |
| Taille de doigt homme | curseur | 47 à 69 (EU), clic à 10 % : 47 ; à 90 % : 69 | 1 451 € à 47 ; 1 620 € à 69 | fonctionne [V] |
| Taille de doigt femme | curseur | clic à 10 % : 47 ; à 90 % : 69 | 1 567 € à 47 ; 1 698 € à 69 | fonctionne [V] |
| Largeur | curseur | 2,50 mm à 10 % ; 7,50 mm à 90 % (défaut 4,50) | 1 317 € à 2,50 ; 2 589 € à 7,50 | fonctionne [V] |
| Épaisseur | curseur | clic à 10 % et 90 % : valeur restée à 1,70 mm | inchangé | clic sur la piste sans effet ; non testé au clavier |
| « EU · UK T½ » | bouton | bascule le système de tailles (EU/UK) ; au clic le script n'a pas trouvé le bouton après un changement de viewport | — | affiché ; effet non vérifié |
| Boîte Metal | liste visuelle | 10 métaux : Žuto, Bijelo, Rozé, Crveno, Marelica, Sivo (or), Platina, Paladij, Srebro, Tantal | voir ci-dessous | fonctionne [V] |
| Čistoća (titre) | liste | or : 9, 14, 18, 22 ct selon la couleur (voir Options) ; platine Pt 950, palladium Pd 950, argent Ag 925, tantale | Žuto 14 ct : 9 ct 1 248 · 14 ct 1 567 · 18 ct 1 816 · 22 ct 2 068 | fonctionne [V] |
| Obrada (finition) | liste | 11 finitions (Polirano… Glodano) | 1 567 € pour les 11 | fonctionne, aucun effet sur le prix [V] |
| Lunet / Pavé / Kanal / Bez | boutons | Lunet ouvre l'éditeur de pierre (une pierre de 0,020 ct déjà incluse sur la bague de femme dans le défaut) ; Pavé, Kanal et Bez : cliqués sans effet visible après l'ouverture de l'éditeur (le script ne les a plus retrouvés) | — | Lunet fonctionne ; Pavé, Kanal, Bez non vérifiés |
| Brus (taille de pierre) | liste | Briljant, Princess, Baguette (3 icônes) | pas de variation relevée sur le premier essai | ouverture vérifiée ; sélection non confirmée |
| Pozicija | liste | Lijevo, Centrirano, Desno, Slobodno (+ curseur « Pomak po širini », ± mm) | — | ouverture vérifiée |
| Veličina kamena | liste | 19 tailles de 0,005 ct (Ø 1,0 mm) à 0,300 ct (Ø 4,3 mm) | 0,100 ct sélectionné : 1 567 € (inchangé) ; 0,300 ct non sélectionné par le script | prix peu sensible dans la plage testée [V] ; 0,300 ct non testé |
| Dijamant | liste | « Prirodni dijamant · G/VS » ou « Laboratorijski dijamant · E/VS » | laboratoire : 1 421 € (−146 €) | fonctionne [V] |
| Količina | liste | 1 à 27 (« 14 · pola », « 27 · cijeli prsten ») | 5 pierres : 2 733 € | fonctionne [V] |
| Razmak | liste | Zajedno, Pola razmaka, Puni razmak, Dvostruki razmak, Trećina prstena, Pola prstena, Cijeli prsten | non relevé | listé, non actionné |
| « Rasporedi kamenje u grupe » | case | regroupe les pierres en groupes | non relevé | présent, non coché |
| Tekst (gravure) | onglet | champ « Vaše riječi ovdje » (30 caractères), choix de la police | inchangé (1 567) | fonctionne [V] |
| Pismo (police) | liste | 19 polices : Great Vibes, Allura, Parisienne, Pinyon Script, Sacramento, Dancing Script, Tangerine, Cormorant Garamond, EB Garamond, Playfair Display, Lora, Libre Baskerville, Manrope, Montserrat, Raleway, Josefin Sans, Cinzel, Marcellus, JetBrains Mono | inchangé | fonctionne [V] |
| Učitajte pismo | bouton | téléverse une police (TTF, OTF, WOFF) | — | non testé (téléversement) |
| Simbol | onglet | « + Dodaj simbol », symbole « Srce », taille 60 %, « Centriraj », rotation 0° | inchangé | fonctionne [V] ; autres symboles non listés |
| Učitavanje | onglet | téléverse un SVG ou une image | — | non testé (téléversement) |
| Preuzmi PDF | bouton | aucun téléchargement en 15 s | — | effet non observé |
| Zatraži ponudu ~ €1567 | bouton | ouvre un formulaire : « Javljamo se u jednom radnom danu s konačnom cijenom i terminom » ; champs nom, e-mail, téléphone, message (facultatif) | affiche « ~ €1567 PROCJENA » | formulaire ouvert, non envoyé |
| Rotation (glisser) / molette | vue 3D | le glisser fait tourner la bague ; la molette change l'échelle (images différentes) | — | fonctionne [V] |
| Partager, enregistrer, comparer, chat, WhatsApp, essayage | — | aucun de ces boutons dans le configurateur | — | absents [V] |

## Options disponibles

- **Composition** : homme seul, femme seule ou paire [V].
- **Profils** : P1 à P12 [V].
- **Métaux** : or jaune, blanc, rozé, rouge, abricot (« marelica »), gris ; platine 950, palladium 950, argent 925, tantale. Titres de l'or : jaune 9/14/18/22 ; blanc 9/14/18 ; rozé 9/14/18/22 ; rouge 9/14/18/22 ; abricot 9/14/18 ; gris 14/18 [V]. Prix de la paire à 14 ct : jaune 1 567 · blanc 1 560 · rozé 1 563 · rouge 1 560 · abricot 1 563 · gris 1 573 · platine 1 454 · palladium 1 098 · argent 694 · tantale 733 [V].
- **Finitions** : poli, mat horizontal, vertical, diagonal, givré, sablé gros, sablé fin, martelé mat, martelé poli, martelé sablé, fraisé [V].
- **Pierres** : lunette, pavé, canal (cités) ; coupes brillant, princesse, baguette ; naturel G/VS ou laboratoire E/VS [V].
- **Gravure** : texte (30 caractères, 19 polices ou police téléversée), symbole, image/SVG [V].
- **Devise** : euro [V]. **Langues** : croate ; page en anglais `/en/home-en/` [V].

## Prix, délais, retours, garanties

- **Prix** : « UKUPNO · UKLJ. PDV » (TTC) recalculé à chaque option, affiché en grand et sur le bouton ; cours de l'or affiché en haut (« Spot Au 94,75 €/g ») [V]. Le prix est une **estimation** « prema današnjoj cijeni zlata i stvarnoj geometriji », confirmée dans l'offre [V : /pravni/uvjeti/].
- **Pas de paiement en ligne** : « Na ardigold.com ne prodajemo online i ništa ne naplaćujemo » ; paiement en espèces ou virement au retrait à l'atelier [V : /pravni/uvjeti/].
- **Délai** : 10 à 14 jours ouvrés après confirmation ; urgent à convenir [V].
- **Retrait** : atelier de Dugo Selo ; envoi sur demande, assuré et suivi, dans l'UE, frais indiqués dans l'offre [V].
- **Retours** : le droit de rétractation légal est exclu pour une bague faite sur mesure (« roba izrađena po specifikaciji potrošača ») ; mise à taille gratuite si la taille ne convient pas [V].
- **Garanties** : 2 ans de garantie légale pour défauts ; garantie à vie sur la fabrication de l'atelier, valable en Europe [V]. Réclamations : réponse écrite sous 15 jours, médiation citée [V : /pravni/reklamacije/].
- **Poinçon** : poinçon croate d'État (585 et 750) sur chaque bague, expliqué dans le guide [V : /vodic/punca-i-garancija/].
- **Modification** : gratuite tant que la bague n'est pas coulée ; ensuite c'est une nouvelle bague [V : /vjencano-prstenje/].

## Confiance et service

- Ce que le site met en avant : 3 générations (1965 : grand-père ; 1985 : père fonde Tehnik Filigran, première fonderie de bijoux de Yougoslavie ; aujourd'hui CNC qui fraise une bague en 4 minutes, puis finition à la main) [V : /prica/].
- Coordonnées : atelier Kolodvorska 8, Dugo Selo, tél. +385 1 275 0967, e-mail, horaires lun-ven 9-19 h, sam 9-15 h [V : /kontakt/].
- Rendez-vous : « Dogovorite termin u radionici » ; pas de visio vue ; formulaire de contact ; pas de chat ni de WhatsApp [V].
- Guides : choix 585/750, mesure de la taille (PDF gratuit à imprimer), poinçon et garantie [V].
- Avis clients : aucun vu [V]. Photos ou vidéos de fabrication : pas de galerie d'atelier lue ; le texte décrit les étapes [I].

## Points forts à retenir pour JR Diamond

1. **Prix recalculé en direct avec le cours de l'or affiché**. Preuve : « Spot Au 94,75 €/g » en haut à droite et prix qui passe de 1 567 € à 1 248 € en 9 ct [V].
2. **Chaque option a un effet visible sur le prix, y compris la largeur** (2,50 mm : 1 317 € ; 7,50 mm : 2 589 €) [V].
3. **Gravure au cœur du parcours** : nom saisi dès l'accueil, 19 polices, symboles, téléversement de police ou d'image [V].
4. **Mise à jour du prix honnête** : « procjena », confirmée en atelier, sans engagement [V].
5. **Poinçon d'État expliqué** (preuve de titre) [V].
6. **Prise de contact en un jour ouvré** annoncée dans le formulaire [V].

## Défauts observés

- Prix inchangé quand on change de finition, de composition ou de taille de pierre (0,100 ct) : l'utilisateur ne comprend pas ce qui est facturé [V].
- Alliances seulement : ni bague de fiançailles ni solitaire [V].
- Pas de paiement en ligne ni de panier ; retrait à l'atelier [V].
- Sur mobile, le bouton « Zatraži ponudu ~€1567 » recouvre une partie de la bague en 3D (iPhone 13) [V : capture].
- Le bouton « Preuzmi PDF » n'a produit aucun téléchargement visible en 15 s [V].
- Cookies : Google Analytics proposé avec refus possible (« Odbijam ») [V].

## Limites de l'audit

- **Mesure du visuel** : l'élément 3D (canvas) est présent en 4,5 s sur ordinateur et 3,3 s en affichage iPhone ; la bague est visible sur les captures prises environ 2 s plus tard [V ; mesure d'un seul essai, réseau d'agent].
- Non testés : téléversements (police, SVG), sélection de la taille de pierre 0,300 ct, boutons Pavé, Kanal, Bez, liste « Podjela », liste « Razmak », système de tailles EU/UK, boutons 01 à 04, clic sur les symboles.
- Aucun panier à atteindre : pas de commerce en ligne.
- Un seul navigateur (Chromium) ; rendu de l'anneau non comparé à une photo réelle.

## Sources

- https://ardigold.com/konfigurator/ · https://ardigold.com/ · https://ardigold.com/vjencano-prstenje/ · https://ardigold.com/pravni/uvjeti/ · https://ardigold.com/pravni/reklamacije/ · https://ardigold.com/vodic/punca-i-garancija/ · https://ardigold.com/prica/ · https://ardigold.com/kontakt/ (lus le 15/11/2026).
