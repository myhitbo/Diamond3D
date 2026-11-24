# Audit : Lovely Rings (Allemagne)

- **Site** : Lovely Rings, LR GmbH, Fürstenfeldbruck (siège d'après l'Impressum) ; atelier partenaire à Pforzheim d'après « Über uns » [V].
- **Adresse** : https://www.lovelyrings.de/ ; page de départ : https://www.lovelyrings.de/verlobungsringe/konfigurator/ ; configurateur : https://www.lovelyrings.de/configurator/ri3303-m14-g20-lde/ (modèle Isobel) [V].
- **Date** : 15/11/2026 (date imposée par la consigne ; consultations faites à la date système du 24/11/2026, bandeau « Black Week » en cours).
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (devices['iPhone 13']).
- **Statut** : **complet** pour le modèle Isobel (parcours jusqu'au panier ; la caisse `/checkout/` est interdite par robots.txt et n'a pas été ouverte). Marqueurs : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (contrôle) |
|---|---|
| 0. `/verlobungsringe/konfigurator/` | Texte de présentation, bouton « Verlobungsring gestalten » (vers `/verlobungsringe/`), carte Isobel « zum Konfigurator » |
| 1. Forme de base (`/verlobungsringe/`) | Filtres : Schliff & Form, Carat des Steines, Anzahl der Steine ; familles : solitaire, simple, sans pierre, Spannring, paire ; chaque carte ouvre `/configurator/<modèle>-m<métal>-g<pierre>-lde/` |
| 2. Metall wählen | Famille de couleur, puis titre (585 / 750 / Platin 950) |
| 3. Haupt-Edelstein wählen | 9 couleurs de diamant, 12 autres pierres, zircone |
| 4. Diamantqualität | SI2, SI1, VS2, VVS1 |
| 5. Gravur | Texte (25 caractères), 3 polices, 3 symboles + « mehr Symbole » |
| 6. Ringgröße wählen | 46 à 65, ou « noch nicht bekannt » |
| 7. Achat | « in den Warenkorb » (fenêtre « Im Warenkorb »), PayPal/Amazon Pay directs, « weiter zur Kasse » (caisse non ouverte) |

Chaque option est un **lien vers une adresse distincte** (`m` = métal, `g` = pierre) : la configuration se partage par l'adresse [V, hrefs relevés].

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Metall wählen | accordéon | Ouvre les familles Gelbgold / Weißgold-Platin / Roségold | — | OK [V] |
| Gelbgold 585 → 750 | lien | Recharge la page, image en or jaune, poids 5,34 g → 5,70 g (infobulle) | 1 690 € → 2 090 € (+400) | OK [V] |
| Weißgold 585 / Rotgold 585 | lien | Recharge, couleur change | 1 690 € (sans supplément) | OK [V] |
| Roségold 750 / Weißgold 750 / Platin 950 (mode « erweitert ») | lien | Titres supplémentaires | +400 / +500 / +260 € (étiquettes) | OK [V] pour les étiquettes ; prix d'arrivée relevé seulement pour 750 jaune |
| Alle Metalle und Steine zeigen | interrupteur | Passe de « einfach » à « erweitert » (Rotgold 585/750, Weißgold 585/750, Platin) | — | OK [V] |
| Erklärung zu einfach und erweitert | info | Explique les deux modes | — | OK [V] |
| Informationen anzeigen : Goldfarbe, Platin und Silber | info (i) | Boutons présents ; clic sur « Platin und Silber » : délai dépassé (3 s) | — | non confirmé [V] |
| Haupt-Edelstein : Weiß/Farblos, Blau, Grün, Gelb, Rot, Rosa, Violett, Schwarz, Braun | lien | Pierre colorée (images et prix testés pour 3 d'entre elles) | Aquamarin 1 450 €, Rubin 1 490 €, diamant noir 1 550 € (or 585) | OK [V] |
| Zirkonia | lien | Remplace le diamant par de la zircone | 1 390 € (−300) | OK [V] |
| Diamantqualität SI2 / SI1 / VS2 / VVS1 | lien | Pureté change ; SI1 = « Standard » | 1 650 / 1 690 / 1 750 / 1 790 € | OK [V] |
| Gravur (texte) | champ | 25 caractères, 3 polices « Aa », symboles ♡ ∞ ⚭ | gratuit | OK [V] (saisie non effectuée) |
| Ringgröße 46 à 65 | liste | Affiche le diamètre (46 = 14,6 mm … 65 = 20,7 mm) ; « Größe offen » possible | — | OK [V] |
| Ringgrößenmesser kostenlos bestellen | lien | Mène à `/ringgroessenmesser/<modèle>/` (formulaire non rempli) | gratuit | lien présent [V] |
| Ringgröße heimlich ermitteln | lien | Article de guide | — | lien présent [V] |
| Vignettes (3 vues) | images | De face, de dessus, de côté | — | OK [V] |
| teilen | bouton | Ouvre un formulaire « per E-Mail teilen » (courriel, message, case AGB) ; non envoyé | — | OK [V] |
| merken und vergleichen | bouton | Aucun retour visible ; compteur de liste de souhaits resté à 0 | — | effet non constaté [V] |
| per WhatsApp speichern | bouton | Aucun nouvel onglet ni message visible | — | effet non constaté [V] |
| Informationen anzeigen : Was der Preis enthält | info | « Le prix suit la sélection ; TVA et livraison dans le pays choisi incluses » | — | OK [V] |
| Informationen anzeigen : 60 Tage Geld-zurück-Garantie | info | Délai dès réception, port retour pris en charge une fois | — | OK [V] |
| Informationen anzeigen : Lieferzeit | info | Bouton présent ; clic : délai dépassé | — | non confirmé [V] |
| in den Warenkorb | bouton | Fenêtre « Im Warenkorb » : article, « Größe offen », prix, « weiter zur Kasse », « per E-Mail speichern », lien WhatsApp | 1 690 € | OK [V] |
| weiter zur Kasse | lien | Vise `/checkout/address/` (INTERDIT par robots.txt) | — | non ouvert (exclu par la règle) |
| frag uns zur Größe oder zum Ring | lien | `wa.me/498008989123` avec message pré-rempli contenant l'adresse du ring ; non ouvert | — | lien présent [V] |
| PayPal / Amazon Pay (« oder direkt bestellen ») | boutons | Présents ; non actionnés (paiement) | — | non testé (paiement) |
| E-Mail schreiben, WhatsApp, 0800 - 89 89 123 | liens | Contact direct du fondateur (Andreas Nitsche) et du service | — | liens présents [V] |
| Newsletter « 10 % Rabatt sichern » | formulaire | Non rempli | — | non testé (formulaire) |
| zuletzt gesehen | bouton | Liste des modèles vus | — | présent [V] |
| Pied de page : AGB, Widerruf, Datenschutz, Impressum, Bestellablauf, Bezahlung, Rückgabe, Versand | liens | Pages lues (voir plus bas) | — | OK [V] (Rückgabe et Bezahlung : un premier chargement a expiré, relu au second essai) |
| Panier (`/warenkorb/`) | lien | Affiche « Dein Warenkorb ist leer » après nouveau chargement : l'article n'est conservé que dans la fenêtre / la caisse | — | comportement noté [V] |

Décompte : 70 contrôles listés sur ordinateur, 67 en affichage iPhone (controls.cjs) ; les contrôles de navigation et de pied de page sont regroupés ci-dessus.

## Options disponibles (modèle Isobel, Spannring à pierre unique)

- **Métal** : or jaune, blanc, rouge/rose en 585 (14 k) et 750 (18 k) ; platine 950. Mentions du site : aussi palladium, argent 925, céramique (page `/verlobungsringe/konfigurator/`) [V]. Pas d'or 333 dans ce modèle.
- **Pierre principale** : diamant (blanc, bleu, vert, jaune, rouge, rose, violet, noir, brun), aquamarine, améthyste, saphir bleu, topaze bleue, émeraude, péridot, tourmaline rose, rubis, quartz fumé, zircone [V].
- **Qualité du diamant** : SI2, SI1, VS2, VVS1 ; couleur G, coupe « sehr gut », 0,20 ct, 3,8 mm (infobulle) [V].
- **Origine** : **aucune option synthétique dans ce configurateur** ; la fiche dit « laut Lieferant … nicht aus Konfliktgebieten » (diamant naturel) [V]. Le site exploite « Zirkonia » comme alternative d'imitation.
- **Forme de pierre, taille en carats, corps de bague, griffes** : non modifiables dans le configurateur (forme de base choisie en amont, carat fixé par le modèle) [V].
- **Gravure** : gratuite, 25 caractères [V]. **Tailles** : 46 à 65 [V].
- **Autres modes de vue** : 3 vignettes photo ; pas de 3D, 360°, vidéo, essayage ni AR relevés [V].

## Prix, délais, retours, garanties

- **Affichage** : un prix unique TTC « inkl. MwSt. » qui change à chaque option, pas de décomposition ; la fenêtre « Was der Preis enthält » indique TVA et livraison incluses [V].
- **Exemples de prix (Isobel, or jaune 585, SI1)** : 1 690 € ; or 750 : 2 090 € ; zircone : 1 390 € ; SI2 : 1 650 € ; VS2 : 1 750 € ; VVS1 : 1 790 € [V].
- **Délai** : « Garantierte Lieferung bis 22.12.2026 », « individuell für dich angefertigt » ; fabrication d'une à quatre semaines ; livraison DHL 2 à 3 jours ouvrés (page Versand) [V].
- **Livraison** : gratuite et assurée vers l'Allemagne, l'Autriche et la Suisse (droits suisses à la charge du client) [V].
- **Retours** : 60 jours dès réception, **même pour une bague configurée et gravée** ; remboursement sous 14 jours après réception ; étiquette de retour offerte une fois ; état intact exigé [V, `/seiten/rueckgabe/`]. Première mise à taille gratuite dans les 60 jours, ensuite 185 € [V].
- **Garantie** : deux ans, réparations ; polissage et nettoyage non proposés [V].
- **Certificat** : joint dès 0,5 ct (page Konfigurator) ; l'émetteur n'est pas indiqué dans les pages lues [V/I].
- **Paiement affiché** : PayPal, Klarna, Visa, Mastercard, Apple Pay, Google Pay, Amazon Pay, virement (pages Konfigurator et Bezahlung) [V].
- **Code promotionnel** : BLACK10 (−10 % au panier) affiché sur la page [V].

## Confiance et service

- Trusted Shops (protection acheteur, lien vers la fiche ; note non relevée) ; un avis client cité sur la page de configuration [V].
- Fondateur identifié (Andreas Nitsche, photo, courriel et WhatsApp « direct à moi ») [V].
- Hotline gratuite 0800 - 89 89 123 (lun.-ven. 10-17 h), WhatsApp, courriel [V].
- **Preuves de fabrication** : aucune photo ni vidéo d'atelier, aucun suivi illustré. Texte : « made in Pforzheim », partenaires qui produisent « auch für mehrere renommierte Marktbegleiter » [V].
- Langues : allemand seul (sélecteur « DE ») ; devise : euro [V].

## Mesure du visuel principal

- Configurateur Isobel, chargement à froid : **LCP 4,2 s sur ordinateur, 3,6 s en affichage iPhone** ; événement load 6,1 s et 5,7 s (une mesure chacun, proxy du bac à sable) [V].
- Changement d'option : nouvelle page, 2,7 à 4,9 s jusqu'au rendu du configurateur [V].

## Points forts à retenir pour JR Diamond

1. **Prix vivant à côté de la bague, avec supplément sur chaque option** (« + 400 € », « − 300 € », « ohne Aufpreis ») : preuve : étiquettes `aria-label` des liens et prix relevés 1 690 → 2 090 €. Répond à l'écart principal (« Sur devis »).
2. **Une adresse par configuration** (`ri3303-m17-g20`) : partage et retour arrière gratuits ; preuve : hrefs listés.
3. **Retour 60 jours explicite sur le sur-mesure, gravure comprise**, avec première mise à taille gratuite : preuve : `/seiten/rueckgabe/`. Mérite d'être comparé à ce que l'atelier peut offrir.
4. **« Größe offen »** : on achète sans connaître la taille, et le service demande la taille après la commande ; preuve : fenêtre du panier et texte de l'étape.
5. **Fondateur visible avec ligne directe** (courriel, WhatsApp) : preuve : bloc « Gibt es weitere Fragen ? ».
6. **Date de livraison garantie affichée avant le panier** : preuve : « Garantierte Lieferung bis 22.12.2026 ».
7. **Guide pour trouver la taille en secret et mètre-bague gratuit** : preuve : liens de l'étape Ringgröße.

## Défauts observés

- Aucune preuve de fabrication ; le modèle visible est un rendu photo en 3 vues, pas un fichier de fabrication.
- Pas de diamant synthétique dans ce configurateur ; la zircone est la seule option « moins chère ». Le libellé du synthétique n'a donc pas pu être relevé ici.
- Forme de pierre et carat verrouillés par le modèle : le « configurateur » ne règle ni forme, ni griffes, ni corps de bague.
- Boutons « merken und vergleichen » et « per WhatsApp speichern » : aucun effet visible dans notre navigateur.
- Le bouton d'information « Lieferzeit » et « Platin und Silber » n'a pas répondu en 3 s.
- Un premier chargement des pages Rückgabe et Bezahlung a expiré à 40 s.
- Le panier vidé après rechargement : l'article n'existe que dans la fenêtre contextuelle.

## Limites de l'audit

- Un seul modèle (Isobel) parcouru en entier ; les autres formes de base (Solitär, Spannring, pavé) ne sont pas testées.
- Prix d'arrivée relevé pour 10 variantes seulement ; Platin 950 (+260 €) et les titres 750 des autres couleurs d'après les étiquettes.
- Caisse (`/checkout/`) interdite par robots.txt : moyens de paiement et frais finaux d'après les pages d'information.
- Gravure, mesure de bague, partage par courriel, newsletter : non remplis. WhatsApp et téléphone : non ouverts.
- Parcours mobile : mise en page, accordéons, champ de gravure et bouton d'achat fixe vérifiés ; pas de parcours complet.
- Sans compte : la liste de souhaits et le comparateur n'ont pas été vérifiés.

## Sources

- https://www.lovelyrings.de/verlobungsringe/konfigurator/ · https://www.lovelyrings.de/configurator/ri3303-m14-g20-lde/ (et variantes `-m17-`, `-m15-`, `-m16-`, `-g54-` à `-g59-`, `-g14-`, `-g26-`, `-g39-`)
- https://www.lovelyrings.de/seiten/rueckgabe/ · https://www.lovelyrings.de/info/versand/ · https://www.lovelyrings.de/info/bezahlung/ · https://www.lovelyrings.de/seiten/bestellablauf/ · https://www.lovelyrings.de/info/ueber-uns/ · https://www.lovelyrings.de/info/impressum/
- robots.txt : adresses vérifiées avec l'outil robots.cjs ; `/checkout` interdit.
