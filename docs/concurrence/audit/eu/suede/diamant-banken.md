# Audit : Diamant Banken

- **Site** : Diamant Banken (Ackumulera AB, Göteborg, boîte postale), https://www.diamantbanken.com/
- **Page de départ** : https://www.diamantbanken.com/pages/ring-builder
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 × 900), Chromium en affichage iPhone 13 (mesure du temps d'apparition et captures ; les contrôles ont été actionnés sur ordinateur)
- **Statut** : **partiel**. Parcours monture, diamant et récapitulatif complet. Non faits : ajout au panier et page du panier (`/cart` est INTERDIT par `robots.txt`, et l'ajout n'a pas été actionné), pages `/policies/` (INTERDIT, non ouvertes), mode « On Me » de l'essayage (caméra), choix de la taille de doigt au-delà de l'ouverture de la liste.
- Marques : **V** vérifié · **I** inféré · **S** supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| 1. Infattning (monture) | 24 montures « The Signature », « The Embrace »… ; filtres Stil, Pris, Metall, Form ; tri ; fiche avec forme et métal |
| 2. Diamant | Onglets Naturlig, Labbodlad, Gemstones ; filtres forme, carat, couleur, pureté, taille, prix, avancés ; vue liste ou grille ; tri |
| 3. Slutför din Ring | Récapitulatif (monture + pierre), taille de doigt (norme européenne), total, bouton « Välj storlek », « Try it on », « Share » |

## Contrôles vérifiés

Adresses : `…/pages/ring-builder?stage=Select+Setting|Add+Diamond|Complete+Ring&isSWS=true…` (l'état est dans l'adresse).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Stil : Sidostensringar | filtre | 16 montures sur 24 | de 15 020 SEK | OK (V) |
| Stil : Haloringar | filtre | 2 montures (The Illustra, The Illume) | 22 770 et 23 050 SEK | OK (V) |
| Stil : Naturinspirerade ringar | filtre | 3 montures (The Wave I à III) | 17 730 à 24 950 SEK | OK (V) |
| Stil : Flerstensringar | filtre | 6 montures | 15 900 à 21 050 SEK | OK (V) |
| Stil : Solitärringar | filtre | 12 montures | dès 13 910 SEK | OK (V) |
| Stil : Mer Stilar | bouton | aucun changement de liste visible | — | Sans effet visible (V) |
| Pris (2 champs) | saisie | bornes 13 358 et 71 927 kr affichées | — | Non testé (saisie libre) |
| Metall : 18K rosé / vit / gul | filtre | liste inchangée (24), mêmes prix (14 940 pour The Signature) | identique | OK (V) |
| Metall : 950 Platina | filtre | liste inchangée, prix **plus bas** (The Signature 12 300 au lieu de 14 940) | −2 640 SEK | OK ; contre-intuitif (V) |
| Form : Marquise | filtre | liste inchangée, prix en hausse (The Signature 15 860) | +920 SEK | OK (V) |
| Form : Fler former | bouton | déploie 10 formes : rund briljant, marquise, oval, radiant, smaragd, päron, cushion, hjärta, asscher, princess | — | OK (V) |
| Tri (liste) | liste | Price low to high, Price high to low, Best Selling | — | OK (V) |
| Carte monture | lien | ouvre la fiche (adresse avec `id=` et `variant=`) | — | OK (V) |
| Fiche : 18K Vitguld, Gulguld, Roséguld, 950 Platina | boutons | changent la variante dans l'adresse ; l'image se recharge | 14 940 identique pour les trois ors ; platine 12 300 | OK (V) |
| Fiche : formes (Princess, Cushion, Oval, Päronslipad…) | boutons | l'image change de forme ; le prix change | platine : princess 12 080, cushion 12 220, oval 12 140, poire 12 120 | OK (V) |
| Fiche : « Fler former » | bouton | 10 formes ; Marquise, Hjärtslipad, Radiant, Asscher, Smaragdslipad | — | OK (V) |
| Image 360° (icône) | image | l'image du récapitulatif change d'angle (dessus, côté, dessous) d'une capture à l'autre ; ce sont des vues photo, pas un modèle 3D (canvas : 0) | — | OK ; activation précise non isolée (I) |
| Try it on | bouton | ouvre un panneau : « On Model » (main de modèle avec la bague), « On Me » (caméra), 4 teintes de peau, curseur, zoom + et −, main gauche ou droite, « Similar Variants », code QR « Scan the QR code to capture your photos » | — | OK (V) |
| Try it on : « On Me » | onglet | caméra du navigateur | — | Non testé (caméra) |
| Try it on : Escape | clavier | ne ferme pas le panneau ; la croix ferme | — | Défaut (V) |
| Share | bouton | rien d'observé dans le texte de la page | — | Non confirmé (clic sans effet visible) |
| Lägg till diamant | bouton | passe à l'étape 2 (diamants rond, labbodlad par défaut) | + prix de la pierre | OK (V) |
| Naturlig / Labbodlad / Gemstones | onglets | 63 829 / 108 062 / 520 résultats ; pierres de couleur (améthyste 1,20 ct à 2 312 SEK) | — | OK (V) |
| Vit / Fancy | boutons | Fancy : 9 009 résultats | — | OK (V) |
| Carat (min 0.5, max 8) | saisie | champs numériques | — | Non testé |
| Färg D à M | boutons | D : 47 525 résultats | — | OK (V) |
| Klarhet FL à SI2 | boutons | VVS1 : 8 972 | — | OK (V) |
| Slipkvalitet Ideal, Excellent, Very Good | boutons | Ideal : 6 921 | — | OK (V) |
| Pris (1 130 à 16 440 355 kr) | saisie | champs | — | Non testé |
| Avancerade filter | bouton | ouvre Bordbredd, Ratio, Polering, Symmetri, Fluorescens, Certifikat (GIA, IGI, HRD, EGL, AGL, GCAL, DBIOD, GSI, SGL, AGS, EGLISR), Labgrown Typ (HPHT, CVD, IIA) | — | OK (V) |
| Rensa alla filter | bouton | remet à zéro | — | Présent, non actionné |
| Lista / Rutnät | boutons | liste ou grille | — | OK (V) |
| Sort (pierres) | liste | 4 tris ; « Karat : högt till lågt » donne 88 274, 91 336 SEK | — | OK (V) |
| Välj diamant | bouton | ajoute la pierre ; va à l'étape 3 | + 2 055 SEK | OK (V) |
| Ta bort (monture, pierre) | lien | retire l'élément | — | Présent, non actionné |
| Visa (monture, pierre) | lien | revient à l'étape de la monture ou de la pierre | — | OK (V) |
| Välj Ringstorlek | liste | s'ouvre : « Not sure » puis 45,00, 45,25, 45,50… (mm, pas de 0,25) ; message « Europa, 52.50 » par défaut | — | OK (V) |
| Välj storlek | bouton | bouton qui mène à l'ajout au panier (I ; nom : « choisir la taille ») | — | Non actionné (panier interdit) |
| Behöver du hjälp ? | bouton | chat en direct | — | Non ouvert |
| Menu : Förlovningsringar, Diamanter, Ädelstenar, Boka konsultation, Guider & hjälp | menus | liens vers collections, guides, FAQ, Calendly | — | Liens lus (V) |
| Devise SEK | sélecteur | sélecteur de région et de langue | — | Non actionné |

## Options disponibles

- **Montures (24)** : Signature, Embrace, Origin, Essence, Arc, Cluster, Embrace II, Light V/VI/VII, Crest, Trinity, Glow, Cascade, Celestial, Twisted Pavé Solitaire, Accent, Quintet, Cluster II, Trace, Twist, Wave, Split, Bloom (V). Styles : solitaires, trois pierres et côtés, halos, nature, multi-pierres.
- **Métaux** : 18 k blanc, jaune, rosé ; platine 950 (V). Pas de 14 k.
- **Formes** : 10 (V). **Pierres** : synthétiques, naturelles, pierres de couleur. Certificats cités : IGI, GIA, HRD, SGL, EGL, AGL, GCAL, AGS (V).
- **Taille** : échelle européenne en 0,25 ; « Not sure » (taille 52,50 par défaut) (V). **Gravure** : aucune option dans le parcours ; la FAQ parle de « personlig gravyr » (V).

## Prix, délais, retours, garanties

- **Prix** : « Priset avser endast infattningen. Centerdiamant tillkommer » (V). Total = monture + pierre : 14 940 + 2 055 = 16 995 SEK (V). Un exemple : pierre synthétique de 0,67 ct E VS1 VG à 2 055 SEK (V). Prix TTC non précisé sur la page [I].
- **Délai** : bagues sur commande « cirka 6–7 veckor » ; pierres en vrac « 10–20 arbetsdagar » (V, `/pages/vanliga-fragor`). **Livraison** : « Fri och försäkrad frakt », envois suivis et assurés (V).
- **Retours** : 14 jours sur les articles en stock et les pierres en vrac ; les bagues du Ring Builder en sont exclues (« omfattas inte av ångerrätten ») ; 700 kr de frais de retour par pierre ; les bijoux gravés exclus (V). Pages `/policies/` non lues (INTERDIT).
- **Garantie** : non trouvée sur la FAQ (V). **Mise à taille** : « fri storleksjustering i de flesta fall » (V).
- **Paiement** : Visa, Mastercard, American Express ; Swish, Klarna, Apple Pay mentionnés (V).

## Confiance et service

- Libellé du synthétique : « labbodlad diamant » partout (V). Pierres des deux types présentées comme « riktiga » (V).
- Services : consultation de 30 minutes (Calendly), téléphone 010-880 05 50, chat en direct, e-mail avec réponse sous un jour ouvré ; pas de WhatsApp (V, `/pages/kontakt`).
- Avis : widget Trustpilot sur l'accueil (V, iframe) ; note non lue. Pas de photos ni de vidéos de fabrication, pas de suivi de commande illustré (V). Langues : suédois ; devises : SEK (V).

## Points forts à retenir pour JR Diamond

1. **Prix de la monture et de la pierre séparés, total à chaque étape** : « 14 940 + 2 055 = 16 995 SEK » dans la bande d'étapes en haut de page (V, étape 3).
2. **Essayage virtuel sur quatre mains et code QR** pour passer sur téléphone (V). JR Diamond pourrait proposer le même effet avec sa 3D.
3. **Filtres de pierre complets** : couleur, pureté, taille, fluorescence, certificat, type HPHT ou CVD, 108 062 pierres (V). Utile pour la grille de pierres de l'atelier.
4. **Tout est dans l'adresse** : monture, variante, pierre, étape (V). Partage et retour arrière fiables.
5. **Les pierres naturelles et synthétiques sont dans la même interface** (onglets), avec les pierres de couleur en troisième (V).

## Défauts observés

- **Les images ne montrent pas la pierre choisie** : « Bilderna visar varje modell med en 1.50 ct diamant som visuell referens » (V). Le visuel d'une monture avec une pierre de 0,67 ct montre donc une pierre de 1,50 ct. C'est l'inverse du principe « ce que vous voyez existe ».
- Interface mêlée de suédois et d'anglais : « Try it on », « Share », « Sort order », « Not sure », « Pris (low to high) » (V).
- Prix en platine plus bas qu'en or 18 k pour la même monture (12 300 contre 14 940 SEK) : surprenant et non expliqué (V). Les trois ors affichent le même prix (V).
- Le panneau d'essayage ne se ferme pas avec Escape et bloque les clics derrière lui (V).
- Délai de 6 à 7 semaines, deux à trois fois celui de JR Diamond (14 jours ouvrés) (V). Pas de garantie lue. Bagues du constructeur non remboursables (V).
- Pas de gravure, pas de 14 k, pas d'alliance dans le constructeur (V).

## Temps d'apparition du visuel principal

| Appareil | Cartes de la liste | Première image de monture |
|---|---|---|
| Ordinateur | 1,6 s | 5,7 s |
| iPhone 13 | 1,7 s | 5,4 s |

(V, une mesure par appareil, connexion du poste d'audit.) Pas de canvas WebGL : les visuels sont des photos (V).

## Limites de l'audit

- Panier : `robots.txt` interdit `/cart` ; l'ajout n'a pas été actionné (V). Frais de livraison et récapitulatif du panier non vus.
- Pages `/policies/` (livraison, retour, conditions) interdites : les délais et retours viennent de la FAQ.
- « On Me » (caméra), « Share », saisies de prix et de carat, « Rensa alla filter », chat : non testés.
- Mesure unique par appareil ; captures dans le dossier de travail, hors dépôt.
- Les contrôles ont été actionnés sur ordinateur ; en iPhone, seuls le chargement et deux captures ont été faits.

## Sources

- https://www.diamantbanken.com/pages/ring-builder (et variantes `?stage=Select+Setting`, `Add+Diamond`, `Complete+Ring`)
- https://www.diamantbanken.com/pages/vanliga-fragor · https://www.diamantbanken.com/pages/kontakt · https://www.diamantbanken.com/pages/om-oss
- `robots.txt` du site (vérifié avec `robots.cjs` : `/cart` et `/policies/` interdits)
