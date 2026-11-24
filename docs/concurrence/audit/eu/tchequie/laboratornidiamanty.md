# Audit : LaboratorniDiamanty.cz (marque Sirius, ULTIMATE-GEMS s.r.o.), Tchéquie

- **Site** : LaboratorniDiamanty.cz. **Adresses** : studio https://laboratornidiamanty.cz/konfigurator/ ; fiche à options https://laboratornidiamanty.cz/shop/alya-zasnubni-prsten/.
- **Date** : 15/11/2026. **Appareils** : ordinateur (Chromium 1366 × 900) et affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. Le studio est parcouru jusqu'à la dernière étape. Le bouton panier est interdit par robots.txt (`?add-to-cart=`), l'envoi de la demande et la génération du visuel IA ne sont pas actionnés (formulaire).
- Légende : **[V]** vérifié (contrôle actionné ou page lue) · **[I]** inféré · **[S]** supposé. Sociétés : ULTIMATE-GEMS s.r.o., Králův Dvůr, IČO 24314820, active depuis 2012 [V, pied de page].

## Parcours

Il y a deux outils distincts [V].

**A. Studio « Váš šperk, váš příběh » (/konfigurator/), 6 étapes, sans prix**

| Étape | Options |
|---|---|
| 1 Typ šperku | Prsten, Náušnice, Přívěsek, Náramek, Jiný šperk |
| 2 Materiál | 14K (585), 18K (750), Platina (950) ; couleur : bílé, žluté, růžové (masquée pour la platine : « Platina má přirozeně světlý odstín ») |
| 3 Diamant, 3 sous-étapes | (1) origine, forme, carat ; (2) couleur et qualité ; (3) diamants latéraux |
| 4 Design | Texte libre facultatif (5 000 signes), 4 amorces (« Jemný a minimalistický »…) |
| 5 Inspirace | Dépôt de 1 à 8 images (JPG, PNG, WEBP, 10 Mo), étape ignorable |
| 6 Rozpočet | Budget maximal fixé ou non fixé ; bouton final « Zobrazit můj návrh → » |

**B. Fiche à options (/shop/alya-zasnubni-prsten/), 7 sections avec prix en direct** [V] : 1 pierre (laboratoire ou naturelle), 2 forme, 3 choix de la pierre dans une liste filtrable, 4 pierres latérales, 5 or, 6 taille, 7 gravure ; puis « Shrnutí vašeho šperku », quantité et « Přidat do košíku ».

## Contrôles vérifiés

Studio, ordinateur (23 contrôles listés par `controls.cjs`, tous les boutons de chaque étape actionnés sauf mention).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Přejít ke konfiguraci | lien d'accès | saute au contenu | — | [V] listé, non actionné |
| Logo / lien « hlavní web » | lien | retour à la page d'accueil | — | OK |
| ↺ Začít znovu (haut et bas) | bouton | remet le studio à l'étape 1 | — | OK |
| Jak to funguje ↗ | bouton | ouvre un panneau « Od představy ke šperku » en 3 temps ; précise que le brouillon reste dans le navigateur et n'est envoyé qu'au clic sur « Odeslat nezávaznou poptávku » | — | OK |
| CZ / EN | bascule | traduit tout le studio (« Start over », « Jewellery type »…) | — | OK |
| Barre d'étapes 1 à 6 | boutons | étapes suivantes désactivées tant que la précédente n'est pas validée ; étapes faites cliquables (✓) | — | OK |
| Prsten, Náušnice, Přívěsek, Náramek, Jiný šperk | cartes | choix du type ; seul « Prsten » parcouru | — | Prsten OK ; les 4 autres non parcourus |
| 14K / 18K / Platina | cartes | légende de l'aperçu « 18K · … » change | aucun prix | OK |
| Bílé / Žluté / Růžové zlato | cartes | légende change (18K · Bílé zlato, Růžové zlato…) ; l'effet sur l'image n'a pas été comparé | — | OK |
| Laboratorní / Přírodní | cartes | origine ; « Přírodní » règle la recommandation d'expert | — | OK |
| 10 formes : Kulatý, Oválný, Kapka, Emerald, Radiant, Cushion, Princess, Marquise, Asscher, Srdce | cartes | légende de l'aperçu change (« Emerald · 1,50 ct »…) | — | 10 sur 10 OK |
| 0,50 / 0,75 / 1,00 / 1,50 / 2,00 / 2,50 / 3,00 ct | boutons | légende change (ex. « Oválný · 3,00 ct ») | — | OK |
| Vlastní (carat) | bouton | affiche un champ « Vlastní hmotnost (ct) » | — | champ affiché, saisie non testée |
| Bílý, Růžový, Modrý, Zelený, Žlutý | cartes | couleur de pierre ; légende « Růžový diamant »… | — | OK |
| « Mám vlastní požadavky na kvalitu » | case | ouvre Barva (expert, D–E, D, E, F, G, H) et Čistota (expert, IF, VVS1, VVS2, VS1, VS2, SI1) ; « Obnovit doporučení experta » | — | OK |
| Kvalita výbrusu | texte | fixe « Nejvyšší možná » | — | non modifiable |
| Boční diamanty : Ano / Ne / Doporučí designér | cartes | « Ano » ouvre : rangée sur l'anneau, couleur des latéraux (5 teintes), « Doporučit nejlepší kombinaci » | — | OK |
| Zone de texte, 4 amorces « + … » | champ, boutons | saisie libre, compteur 0 / 5 000 | — | amorces non cliquées |
| Nahrát fotografie nebo nákresy | zone de dépôt | **non actionné** (envoi de fichiers) | — | non testé |
| Přeskočit tento krok | lien | présent à l'étape 4 ; non actionné | — | non testé |
| Mám stanovený maximální rozpočet / Nemám pevně stanovený | cartes | choix du budget ; texte : « non contraignant, sert de guide » | — | OK |
| ← Zpět / Pokračovat → | boutons | navigation, brouillon conservé (« se ukládá v tomto prohlížeči ») | — | OK |
| Zobrazit můj návrh → | bouton final | **non actionné** : mène au résumé et à l'« AI návrh » photoréaliste ; l'envoi de la demande est un formulaire | — | non testé |
| Živý náhled | bouton | libellé de l'aperçu ; non actionné | — | listé |
| ⤢ « Zvětšit náhled » | bouton | agrandissement ; clic automatisé sans effet détecté | — | non concluant |
| info@laboratornidiamanty.cz | lien | `mailto:` | — | OK |

Fiche à options, ordinateur [V, actionnés dans Chromium, sans panier].

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Laboratorní / Přírodní diamant (section 1) | boutons | change la liste ; propose une pierre par défaut | lab : pierre 0,84 ct E/VVS1 = 7 930 Kč ; naturelle : 0,85 ct G/SI1 = 39 351 Kč ; total « od » 38 130 puis 69 551 Kč | OK |
| Formes : Kulatý 42, Ovál 26, Hruška 26, Polštářek 27, Emerald 26, Radiant 27, Markýza 26 (nombre de pierres) | boutons | filtre la liste de pierres (Ovál : 26 pierres, de 0,50 à 3,00 ct) | de 7 040 Kč (0,50 ct) à 22 800 Kč (3,00 ct E/VVS2) [V] | Ovál et Kulatý testés ; les 5 autres non cliqués |
| Filtres Velikost (do 0.50, 0.50–1.00, 1.00–1.50, nad 1.50), Barva, Čistota | boutons | présents ; le clic automatisé sur « 0.50 – 1.00 » n'a pas filtré | — | non concluant |
| Změnit diamant | bouton | ouvre la liste (« Na objednání · IGI (na objednávku) » ou « skladem ») | — | OK |
| Pierres latérales Laboratorní / Přírodní | boutons | présents ; non actionnés | — | non testé |
| 14K bílé zlato | bouton | « Zlato : 14k bílé zlato » | prix de la bague 30 200 Kč | OK |
| 14K růžové zlato | bouton | idem | 30 200 Kč (comme le blanc) | OK |
| 18K žluté zlato | bouton | idem | 36 200 Kč (+ 6 000 Kč vs 14K) | OK |
| Platina | bouton | idem | 37 500 Kč | OK |
| Autres couleurs 14K/18K | boutons | présents (3 + 3) | non relevé | non testé |
| Vyberte velikost (4/47 … 10/62, 13 tailles) | liste | sélection automatisée échouée | — | non concluant |
| Jak určit velikost? | bouton | affiche un tableau des tailles | — | OK |
| Gravírování (zone de texte, « volitelné ») | champ | « Gravírování : TEST » dans le résumé | gratuit | OK |
| Změnit vše ⌄ | bouton | déroule le résumé | — | OK |
| − / quantité / + | boutons | le clic « + » ne modifie pas le total | — | à confirmer |
| PŘIDAT DO KOŠÍKU | bouton | **non actionné** : le robots.txt interdit `?add-to-cart=` ; panier interdit par robots.txt | — | non testé |
| Nezávazně poptat | lien | `wa.me/420777222121` avec message prérempli (non ouvert) | — | OK (cible lue) |
| Napsat na WhatsApp, +420 777 222 121 | liens | `wa.me` et `tel:` (non ouverts) | — | OK (cible lue) |
| Miniatures, ▶, « Další fotografie », « Zvětšit » | boutons | galerie de photos et vidéo ; non parcourus | — | non testé |
| Avis « Všechny recenze → » | lien | page d'avis Google (5,0, 30 avis) | — | OK |

Mobile (iPhone 13) : studio et fiche chargent sans défilement horizontal (largeur 394 = fenêtre) [V]. Les contrôles ont été listés (`controls.cjs --mobile`) ; le parcours n'a pas été rejoué en entier sur mobile.

## Options disponibles

- Pierre : laboratoire (IGI) ou naturelle (GIA) ; forme (10 dans le studio, 7 sur la fiche) ; carat 0,50 à 3,00 ct plus saisie libre ; couleur de pierre blanche, rose, bleue, verte, jaune ; couleur D à H, pureté IF à SI1 ; taille « ex » fixe ; latérales ou non.
- Métal : 14K, 18K, platine ; or blanc, jaune, rose.
- Taille : 13 tailles (4/47 à 10/62) ; gravure gratuite, police et place précisées avant fabrication.
- Autres : jusqu'à 8 images d'inspiration, budget fixé ou non.

## Prix, délais, retours, garanties

- **Prix affiché** : sur la fiche, bague sans pierre plus pierre séparée, TVA comprise, « od 38 130 Kč » (lab) [V]. Pas de prix dans le studio. Prix « sur demande » pour certaines variantes (« cenu vám rádi sdělíme na dotaz ») [V].
- **Décomposition** : « Cena prstenu » et « Cena diamantu » en lignes distinctes [V].
- **Délai** : 2 à 4 semaines, photos avant envoi ; pierre en stock expédiée en 1 à 2 jours ; naturelle sur commande, souvent 14 jours ouvrés [V, FAQ].
- **Livraison** : GLS 149 Kč en Tchéquie, 299 Kč Slovaquie, 30 € Europe, 60 € outre-mer, assurée ; emballage offert [V, FAQ].
- **Retours** : bijoux sur mesure ni repris ni échangés (§ 1837 du Code civil) ; 14 jours légaux pour les pierres en stock ; mise à taille gratuite après livraison [V, FAQ].
- **Garantie** : selon les conditions de ULTIMATE-GEMS ; service gratuit à vie [V].
- **Paiement** : carte en ligne, virement, échelonnement sans banque ni intérêt sur accord, fabrication après paiement complet (https://laboratornidiamanty.cz/sperk-na-splatky/) [V].
- **Libellé synthétique** : « Laboratorní diamant » ; pas « syntetický » [V]. Texte : « aucune différence physique ni optique » (FAQ) [V].

## Confiance et service

- 30 avis Google, note 5,0 [V, https://laboratornidiamanty.cz/recenze/]. Conseiller nommé, WhatsApp, téléphone, e-mail, réponse « le jour même ou le suivant » [V].
- Preuves de fabrication : « fotografie před odesláním », fabrication à la main en Tchéquie, une réalisation « Electra » présentée ; vidéos de la chaîne « Pan Diamant » [V]. Pas de suivi de fabrication en ligne ni de photos d'étapes [I].
- Certificat IGI par e-mail avant confirmation de la pierre ; numéro gravé sur la ceinture [V].
- Langues : 11 (menu), devise CZK [V].

## Points forts à retenir pour JR Diamond

1. **Studio guidé avec aperçu en direct et sauvegarde du brouillon** : chaque choix change une légende et l'image ; l'aperçu est annoncé « indicatif, pas un modèle CAD » (https://laboratornidiamanty.cz/konfigurator/). Preuve : captures `w3_s3.jpg`, légendes relevées à chaque clic.
2. **Liste de pierres réelles avec dimensions, certificat et prix** (« Ovál 7,9 × 5,5 mm (1.00 ct), E / VVS2, 8 830 Kč ») : transparence que JR Diamond doit égaler.
3. **Prix décomposé en direct** (bague, pierre, total « TVA comprise ») sur la fiche. Preuve : relevé 30 200 → 36 200 → 37 500 Kč selon le métal.
4. **Gravure gratuite, taille réglable gratuitement, service à vie** annoncés sur chaque fiche.
5. **Recommandation d'expert modifiable** : « D–E / VVS2 au-delà de 1,50 ct » avec réglage libre derrière une case. Reprenable pour « le prix expliqué ».
6. **Échelonnement sans banque ni intérêt** et fabrication après paiement complet.

## Défauts observés

- Le studio n'affiche aucun prix ; le prix n'apparaît que sur une autre fiche : deux outils non reliés [V].
- L'aperçu est une illustration générique, la forme de la pierre ne change que dans l'icône ; il ne montre ni le modèle réel ni la pierre filmée [V].
- Retour impossible pour le sur mesure, annoncé seulement dans la FAQ [V].
- Pas de suivi de fabrication en ligne ni de vidéos d'atelier propres à la commande [I].
- Les listes de pierres mêlent « skladem » et « na objednávku » sur la même page [V].

## Limites de l'audit

- Non actionnés : « Přidat do košíku » (interdit par robots.txt), « Zobrazit můj návrh » et envoi de la demande (formulaire), dépôt d'images, WhatsApp, chat.
- Non concluants : filtres de taille et couleur de la liste, choix de la taille, « Zvětšit », quantité.
- Sélection naturelle, formes autres que Kulatý/Ovál et latérales de la fiche non rejouées ; le panier n'a été lu que vide (https://laboratornidiamanty.cz/kosik/ : trois étapes Košík, Pokladna, Objednávka).
- Temps d'apparition : studio, texte « Živý náhled » présent après 2,37 s (ordinateur) et 2,05 s (iPhone) ; fiche, première image visible après 3,0 s (ordinateur). Une seule mesure, via le proxy de l'environnement [V], le temps réel d'un visiteur peut différer.
- Pages vues à une cadence d'une toutes les deux secondes au plus.

## Sources

- https://laboratornidiamanty.cz/konfigurator/ ; https://laboratornidiamanty.cz/shop/alya-zasnubni-prsten/ ; https://laboratornidiamanty.cz/informace/caste-dotazy/ ; https://laboratornidiamanty.cz/sperk-na-zakazku/ ; https://laboratornidiamanty.cz/sperk-na-splatky/ ; https://laboratornidiamanty.cz/recenze/ ; https://laboratornidiamanty.cz/kosik/ ; https://laboratornidiamanty.cz/robots.txt.
- Captures et journaux : `scratchpad/audit/eu/tchequie/labdia/` et `labdia2/`.
