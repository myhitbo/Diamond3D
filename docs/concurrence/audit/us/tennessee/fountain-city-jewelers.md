# Fountain City Jewelers (Knoxville, Tennessee)

- **Site** : Fountain City Jewelers, bijouterie de Knoxville fondée en 1999 (fondateur Mark Enix, membre IJO ; source : `/llms.txt`, inféré comme auto-déclaration)
- **Adresse** : https://fountaincityjewelers.com/ (départ : `/design-your-ring.aspx`)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13
- **Statut** : **partiel**. Le constructeur 3D est un outil tiers (JewelerOS, `www.jeweleros.com`) dont le robots.txt interdit `/api/` ; les clics sur les styles, qui lancent le designer, n'ont pas été faits. Seul l'écran d'accueil du constructeur est audité.
- Faits « vérifiés » (page lue ou contrôle actionné) sauf mention « inféré » ou « supposé ».

## Parcours

| Étape | Options (vérifié sur `/design-your-ring.aspx`) |
|---|---|
| Accueil du constructeur : « Step 1 of 4 — Let's start designing your ring » | 3 pastilles de métal (jaune, blanc, rose) ; 9 tuiles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » |
| Étapes 2 à 4 | **non vues** : le texte annonce « you'll be able to fully customize your design in our 3D Ring Designer » ; contenu des étapes inconnu |
| Boutons de navigation | « Back », « Skip » |

## Contrôles vérifiés

Ouverture : 8 contrôles listés sur ordinateur, 6 sur iPhone (`controls.cjs`). Le reste est rendu par le widget.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Logo (lien) | lien | renvoie à l'accueil du site | n/a | présent, non suivi |
| About Us | lien | `index.aspx?Pg=About` (autorisé) | n/a | présent, non suivi |
| Contact Us | lien | `index.aspx?Pg=Contact` (autorisé) | n/a | présent, non suivi |
| Back | bouton | non actionné (présent sur l'étape 1) | n/a | non testé |
| Skip | bouton | non actionné : passe l'étape, appelle sans doute le widget (supposé) | n/a | non testé |
| Pastille jaune | bouton | sélectionnée par défaut ; images des tuiles `*_yellow.webp` | aucun prix visible | OK |
| Pastille « White Gold » | bouton (titre) | les 9 images de tuiles passent en `*_white.webp` en moins de 1,2 s (ordinateur) | aucun | OK |
| Pastille « Rose Gold » | bouton (titre) | images `*_rose.webp` | aucun | OK |
| Pastilles sur iPhone | bouton | clics refusés par l'automatisation (3 échecs) ; le changement d'images n'est pas confirmé | n/a | **non vérifié sur iPhone** |
| Tuiles Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch | bouton | **non cliquées** : le clic ouvre le « 3D Ring Designer » (JewelerOS) dont l'API `www.jeweleros.com/api/` est interdite par son robots.txt ; arrêt avant le clic (inféré : l'ouverture appelle `/api/widget/config/…`, observé à la simple ouverture de la page) | inconnu | non testé |

Aucun contrôle du panier, de la gravure, du carat, de la taille de doigt, des filtres de pierres ni des services (rendez-vous, chat) n'a été vu sur cette page.

## Options disponibles

- **Métaux (écran 1)** : jaune, blanc, rose (couleurs seulement ; titres 14 k / 18 k et platine non indiqués sur la page).
- **Styles (écran 1)** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, depuis zéro.
- **Formes de pierre, carats, origine, taille de doigt, gravure** : non vus.
- **Vues** : le widget est présenté comme 3D (« 3D Ring Designer ») ; non ouvert, donc rotation/zoom non vérifiés.

## Prix, délais, retours, garanties

- Aucun prix, délai, retour ni garantie sur la page de départ (vérifié).
- Site hôte en ASP.NET classique ; l'accueil et la page À propos n'ont pas été explorés plus loin que le HTML brut. `/llms.txt` indique une activité de joaillerie sur mesure (cire, CAO), diamants de Anvers, réparations, estimations, gravure, bijoux permanents, rachat d'or ; tél. (865) 686-0502, e-mail fcjweb@fountaincityjewelers.com. Aucun prix ni délai de commande en ligne dans ce fichier (lu).
- Panier : `/cart` autorisé par robots.txt mais **non ouvert** (aucun achat en ligne n'a été identifié) ; moyens de paiement, livraison : inconnus.

## Confiance et service

- Boutique physique à Knoxville, établie en 1999, membre de l'Independent Jewelers Organization (`/llms.txt`, auto-déclaré).
- Langue : anglais ; devise : non affichée. Avis clients : non vus. Preuves de fabrication : aucune sur cette page ; le site annonce du sur-mesure par cire et CAO (`/llms.txt`).
- Suivi : balises Facebook Pixel et Google Tag Manager dans le HTML de l'accueil (lu).

## Points forts à retenir pour JR Diamond

1. **Démarrage en un écran : 8 styles avec vignettes de bague + « Start from scratch »** : preuve : capture de `/design-your-ring.aspx`.
2. **Changement de métal avant tout choix** : les vignettes de style changent de couleur au clic sur blanc/rose (9 images remplacées) : preuve : mesure ordinateur, images `*_white.webp`, `*_rose.webp`.
3. **Étapes numérotées « Step 1 of 4 » avec « Skip »** : parcours court et lisible : preuve : en-tête de page.
4. **Premier visuel rapide** : première vignette chargée en ~1,0 s (ordinateur) et ~1,0 s (iPhone) : preuve : mesure unique, Chromium.

## Défauts observés

- Aucun prix ni délai sur l'écran de départ ; on ignore ce que coûtera la bague avant d'entrer dans l'outil.
- Sur iPhone, les pastilles de métal n'ont pas répondu aux clics automatisés (3 échecs) : à reconfirmer à la main.
- Le widget s'appuie sur un service tiers (JewelerOS, Rudderstack, jos0.b-cdn.net) : dépendance extérieure.
- L'en-tête n'offre que « About Us » et « Contact Us » (pas de lien panier ni de recherche vus).

## Limites de l'audit

- Le designer 3D, ses options (forme de pierre, carat, monture, griffes, gravure, taille, prix), le récapitulatif, la fiche « Ajouter » et le panier sont **non audités** : le clic de lancement dépend de `www.jeweleros.com/api/`, interdit aux robots. Aucune conclusion sur la qualité de la 3D, le prix ou le panier.
- Un appel de configuration à `jeweleros.com/api/widget/config/…` a lieu à l'ouverture de la page ; une requête aborte lors d'un test iPhone (interception de mon script, sans contact avec le serveur).
- Mesures de temps uniques, indicatives.

## Sources

- https://fountaincityjewelers.com/design-your-ring.aspx (vérifié, ordinateur et iPhone)
- https://fountaincityjewelers.com/robots.txt, `/llms.txt`, `/` (HTML lu)
- https://www.jeweleros.com/robots.txt (`Disallow: /api/`)
