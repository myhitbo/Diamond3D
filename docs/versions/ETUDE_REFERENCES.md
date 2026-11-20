# Étude des quatre sites de référence (20/11)

Demande du propriétaire : « Recopie tout le système du site en remplaçant les canettes par des bijoux », avec quatre références,
et trois versions différentes. Étude en lecture seule, un analyste par site. Rapports complets : `etude-references.json`
(structure section par section, mécanismes, typographie, palette, mouvement, technique, idées de transposition, limites).

Marques : **V** vu dans le navigateur · **S** d'après des sources publiques seulement.

| Site | Adresse | Accès | Ce que c'est |
|---|---|---|---|
| Ciao Energy (agence Skaald) | ciaoenergy.com | **V** : `robots.txt` sans interdiction, pas de `llms.txt` ni d'`agents.md` ; une visite ordinateur, une visite iPhone | Une page ; un seul canevas 3D fixe pour toute la visite ; le défilement fait passer la canette du carrousel au gros plan, à quatre preuves, au slogan, à la gamme. |
| Unique Jewelry (démonstration « Mancini & Co ») | webgi-jewelry.vercel.app | **V** : aucun fichier de restriction | Trois écrans autour d'une bague : gauche, droite, bas ; le métal et les pierres changent au défilement ; puis un configurateur dans la même scène. |
| Maserati Trident Stars (Design Group Italia) | tridentstars.maserati.com | **V** : `robots.txt` « Allow: / » | Une scène 3D en « moyeu et rayons » : écran d'entrée, approche au défilement vers un objet lointain, cent points cliquables avec fiche en verre, page manifeste. |
| Seed Jewelry (boutique Shopify) | seedjewelry.com | **S, bloqué** : `agents.md` et `robots.txt` exigent que tout agent s'identifie (Web Bot Auth) ; nous n'avons pas cette identité, le site n'a donc pas été ouvert | Boutique éditoriale : vidéo d'ouverture, bijoux « posés » dans de grandes photos, scène 3D épurée en fiche produit, métaux en sphères, bascule entre deux modèles. |

La fiche Awwwards de chaque site n'a pas été ouverte depuis le conteneur (l'hôte coupe la connexion) : rien n'a été contourné.

## Le système de Ciao Energy (celui que le propriétaire demande)

1. **Un seul canevas 3D fixe** ; les sections ne sont que des hauteurs de défilement, les textes sont des calques par-dessus.
2. **Une table de poses** : une ligne par scène (caméra, objet, lumières) ; la scène est une fonction de la position de défilement.
3. **Carrousel des variantes** en ouverture : flèches, curseur à dégradé, nom de la variante en très grand, lueur de sa couleur.
4. **Thème par variante** : deux couleurs par parfum, reprises par le fond, le curseur, les pastilles.
5. **Gros plan** sur la variante choisie, texte d'un côté, quatre repères ronds de l'autre.
6. **Quatre preuves** lues sur l'objet lui-même, qui tourne d'une étape à l'autre.
7. **Scène du slogan** : fond clair, mot géant derrière l'objet.
8. **Gamme complète** en ruban, puis contenu ordinaire (questions, pied de page).
9. Défilement « par pages » (un cran de molette = une scène), boucle infinie, sons.

Non repris, volontairement : le défilement par pages et la boucle infinie (le site garde le défilement du navigateur : accessibilité,
WCAG 2.1 AA), les sons, les étiquettes « ce que font les autres » barrées (nous n'affirmons rien sur les concurrents), les vidéos de fond.

## Ce que chaque version reprend

| Version | Référence | Repris | Propre à JR Diamond |
|---|---|---|---|
| **A · Écrin** (`/fr/versions/a`) | Ciao Energy | points 1 à 8 : carrousel et curseur des quatre métaux, thème par métal, portrait, quatre étapes avec repères 01 à 04, bande claire au mot géant, rangée des quatre métaux | la bague se sépare en solitaire et alliance ; le configurateur s'ouvre dans le métal choisi |
| **B · Constellation** (`/fr/versions/b`) | Maserati Trident Stars | nuit étoilée, titre en deux coins, bouton jaune, approche au défilement d'un objet lointain, fiches en verre, étoiles de navigation, manifeste, horizon | la constellation est faite des dix-sept pierres du modèle, à leur vraie place (fichier de géométrie) |
| **C · Lumière** (`/fr/versions/c`) | Unique Jewelry, Seed Jewelry | page claire, bague en très gros plan d'un côté et texte de l'autre, métal qui change au défilement, mot de fond ton sur ton, composition dans la page, pastilles de métal, pilules | studio clair (tente de lumière), les quatre vrais métaux, la composition reprise par le configurateur |

Rien n'est copié des sites : ni code, ni texte, ni image, ni marque. Les textes des versions sont ceux de l'accueil et du modèle.

## Idées notées, non faites

- Points cliquables sur les pierres (marquise ≈ 0,25 ct, pierres latérales) avec fiche et vol de caméra (Maserati).
- Lien de partage vers une pierre (`focus=…`), à ajouter à `configToParams`.
- Faisceau de lumière qui isole une zone de la bague à chaque étape (Ciao).
- Ruban des douze combinaisons (4 métaux × 3 compositions) que l'on fait glisser (Ciao).
- Métaux en petites sphères 3D dans le configurateur (Seed).
- Chargement en rideau avec la progression réelle du modèle (Unique Jewelry).
