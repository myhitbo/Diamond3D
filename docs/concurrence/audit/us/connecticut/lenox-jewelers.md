# Audit : Lenox Jewelers (Fairfield, Connecticut)

> **[P1] pour les constats du constructeur (relevé le 25/11)** : le constructeur est servi par `portal.mesh3d.com`, dont le robots.txt interdit tout aux agents Claude (`Disallow: /`) ; il a été actionné. Les constats qui en viennent valent [P1] ; le reste du rapport garde sa valeur.

- **Site** : Lenox Jewelers, https://lenox-jewelers.com/
- **Page de départ** : https://lenox-jewelers.com/pages/design-the-one (« Design The One »)
- **Date** : 15/11/2026 (mesures refaites le 24/11 pour le configurateur)
- **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel** (configurateur parcouru en entier ; pas de panier possible, voir Limites)
- Légende : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé. robots.txt : AUTORISÉ pour toutes les adresses ouvertes. Le configurateur est un module tiers intégré (iframe `portal.mesh3d.com`, contenu `fana.jeweler.io`) : robots.txt de mesh3d : autorisé ; fana.jeweler.io : pas de robots.txt.

## Parcours

Le site ne fait que revendre le configurateur du fabricant FANA [V]. Il n'y a pas d'étapes : un seul écran, un seul anneau paramétrable.

| Étape | Options |
|---|---|
| Page « Design The One » | Texte d'accueil, bouton « Make an Appointment » (/pages/book-appointment), configurateur FANA intégré, bouton « VIEW ALL FANA BRIDAL » |
| Configurateur : visuel | Rotation automatique, plein écran, canevas 3D |
| Configurateur : réglages | Couleur (3), titre (3), style (27), forme de pierre (6), taille de pierre (7), gravure |
| Sortie | « Try It On » (essayage virtuel, nouvel onglet), « Inquire » (formulaire de demande) ; pas d'ajout au panier |

## Contrôles vérifiés

Page hôte : 128 contrôles listés par script (menus Rolex, mariage et fiançailles, bijoux, créateurs, horlogerie, société, contact, recherche, liste de souhaits, panier, compte, pied de page). Détail ci-dessous pour ce qui concerne la bague.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| White / Yellow / Rose | pastille couleur | change la référence (…14W / 14Y / 14R) et le rendu 3D | inchangé (2 650 $) | OK [V] |
| 14K / 18K / PLT | bouton titre | référence …18W18W, …PLTPLT | 14K 2 650 $ ; 18K 3 325 $ ; platine 3 675 $ | OK [V] |
| 27 styles (Active Elegance … Vintage Elegance) | boutons défilants, flèche « Scroll right » | change l'anneau ; la fiche (nom, référence, texte) se met à jour | non relevé pour les 27 (voir Limites) | liste lue [V], effet prix non testé |
| Round / Oval / Emerald Cut / Marquise / Princess / Pear | bouton forme | référence SP1006-OV075, EC100, MQ100, PR100, PS100 | Oval 2 650 $ ; Emerald, Marquise, Princess, Pear : prix absent à l'écran | OK, prix absent [V] |
| 0.75 / 1.00 / 1.25 / 1.50 / 2.00 / 2.50 / 3.00 | bouton taille de pierre (ct) | référence RD075…RD300 | 1.00 et 1.25 : 2 650 $ ; 1.50 à 3.00 : prix absent | OK, prix absent [V] |
| Engraving | bouton | panneau : champ texte 0/20, 7 polices (Dancing Script, Great Vibes, EB Garamond, Inter, Cinzel, GFS Didot, Special Elite) | non affiché | OK [V] |
| Reset | bouton | remet les réglages | n/a | présent, non testé séparément |
| Auto-Rotate | bouton | bascule la rotation | n/a | OK [V] |
| Full Screen / Exit Full Screen | bouton | passe en plein écran, le libellé change | n/a | OK [V] |
| Try It On | bouton | ouvre un nouvel onglet `portal.mesh3d.com/embed/tryon` (adresse relevée, page non ouverte : caméra) | n/a | ouvre [V], suite non testée |
| Inquire | bouton | ouvre un formulaire : nom, e-mail, téléphone, taille de doigt, dimensions de la pierre, notes | n/a | s'ouvre [V], rien saisi ni envoyé |
| Make an Appointment | lien | /pages/book-appointment | n/a | lien présent [V], page non ouverte |
| VIEW ALL FANA BRIDAL | lien | /pages/fana-bridal-jewelry | n/a | lien présent [V] |
| Bulle de chat (Clientbook) | bouton | invite « Hi there! How may we help? » | n/a | affichée [V], pas ouverte |
| Bandeau cookies | bouton | Accept all / More options / Decline All, interrupteurs Marketing et Performance | n/a | relevé [V], aucun choix cliqué |
| Panier (/cart) | lien | « Your cart is empty » | n/a | OK [V] |
| Wishlist, Log in | liens | /pages/wishlist, connexion client | n/a | liens présents, non ouverts |
| Téléphone 203-374-6157, e-mail info@lenox-jewelers.com | liens tel/mailto | ouverts par le système | n/a | présents [V] |
| Newsletter (champ e-mail + Signup) | formulaire | | n/a | non testé (formulaire) |

## Options disponibles

- **Couleurs** : blanc, jaune, rose [V].
- **Titres** : 14 k, 18 k, platine [V].
- **Formes de pierre** : rond, ovale, émeraude, marquise, princesse, poire [V].
- **Tailles de pierre (ct)** : 0,75 ; 1,00 ; 1,25 ; 1,50 ; 2,00 ; 2,50 ; 3,00 [V].
- **Styles (27)** : Active Elegance, Angelic Twist, Beaded Brilliance, Breathtaking Beauty, Chic Brilliance, Classic Elegance, Classic Serenity, Contemporary Grace, Delicate Radiance, Detailed Romance, Diamond Waves, Double Harmony, Elegant Spark, Graceful Channel, Lustrous Love, Milgrain Majesty, Pristine Solitaire, Romantic Milgrain, Sleek Harmony, Sophisticated Harmony, Splendid Divide, Striking Elegance, Subtle Splendor, Tapered Grace, Timeless Taper, Twisted Radiance, Vintage Charm, Vintage Elegance [V].
- **Gravure** : texte jusqu'à 20 caractères, 7 polices [V].
- **Absents** : choix naturel/synthétique, certificat, taille de doigt dans le configurateur (seulement dans le formulaire « Inquire »), pavage, filtres de pierres, comparer, partager, enregistrer dans le configurateur [V].

## Prix, délais, retours, garanties

- **Prix** : le configurateur affiche le prix de la **monture seule** : « Center stones are sold separately » et « Pricing subject to change » [V]. Exemple Active Elegance, rond 0,75 : 14 k blanc 2 650 $, 18 k 3 325 $, platine 3 675 $ [V]. Les couleurs ne changent pas le prix ; le prix disparaît pour certaines combinaisons de forme ou de taille de pierre [V, cause inconnue ; I : combinaison non tarifée ou chargement].
- **Pas de total** pierre + monture, pas de décomposition [V].
- **Délai de fabrication** : non annoncé dans le configurateur [V]. Politique : « Special Order … expect longer delivery times and call our store » [V, /policies/shipping-policy].
- **Expédition** : gratuite 2-3 jours, express payant, États-Unis seulement, expédition sous 48 h, signature au-dessus de 500 $, emballage cadeau offert [V].
- **Retours** : « No Refunds on Special Orders » ; 10 jours de remboursement sur marchandise neuve non portée ; paiement en plusieurs fois sur 90 jours (pas de remboursement après 30 jours) [V, /policies/refund-policy]. La page d'expédition parle de 30 jours : les deux pages se contredisent [V].
- **Garantie / certificats / synthétique** : rien dans le configurateur [V].
- **Langues, devises** : anglais, dollar [V].

## Confiance et service

- Téléphone 203-374-6157, rendez-vous en magasin, chat Clientbook, magasin à Fairfield (2500 Black Rock Turnpike) depuis 1936 [V].
- Page /pages/custom-design : processus en 3 étapes (consultation, rendu 3D ou croquis, fabrication et validation finale) et avis clients sur le site (étoiles, prénoms ; avis portant surtout sur Rolex et le service) [V].
- Avant/après de transformation d'une bague ancienne [V]. Pas de photos ou vidéos d'atelier, pas de suivi de commande [V].
- Mesure du visuel : dans l'iframe, le canevas 3D et les contrôles apparaissent en **≈ 5,4 s** (ordinateur) et **≈ 6,8 s** (iPhone) après le début du chargement ; DOM de la page en ≈ 2 s [V, une mesure chacune ; connexion de l'agent, pas un réseau client].

## Points forts à retenir pour JR Diamond

1. **Prix de la monture mis à jour en direct** selon le titre (14 k 2 650 $ → 18 k 3 325 $ → platine 3 675 $), avec référence de fabrication (SKU) qui change à chaque option : la référence rend le choix traçable [V, script de clic, 24/11].
2. **Rendu 3D + essayage virtuel + plein écran + rotation** dans un seul module [V].
3. **Gravure** : 7 polices, 20 caractères, aperçu [V]. (L'atelier de JR en propose 20 à 25, hébreu compris.)
4. **Formulaire de demande « Inquire »** avec taille de doigt et dimensions de pierre, sans engagement [V].
5. **Processus de sur-mesure en 3 étapes** présenté clairement (consultation, rendu, validation) [V].

## Défauts observés

- Le configurateur appartient à un fabricant : le rendu n'est pas issu d'un fichier de l'atelier [I : module FANA].
- Prix de la monture seulement ; la pierre est vendue à part, aucun prix total [V].
- Prix qui disparaît pour de nombreuses combinaisons (forme et taille) sans explication [V].
- Aucun parcours d'achat : seuls « Inquire » et le rendez-vous ; panier non connecté au configurateur [V].
- Iframe de hauteur fixe de ~150 px dans la page hôte : sur la capture, la zone du configurateur reste vide en dessous du texte d'accueil jusqu'au chargement du module (≈ 5 s) [V, capture].
- Pas de choix naturel/synthétique, pas de certificat [V].
- Règles de retour contradictoires (10 jours / 30 jours) [V].
- Nombreux traceurs tiers (Google, Facebook, Bing, Clarity, DoubleClick) chargés avant tout choix de consentement [V, requêtes observées].

## Limites de l'audit

- Pas d'ajout au panier : le configurateur n'en propose pas. Récapitulatif, moyens de paiement et frais au panier non observés (panier vide seulement).
- Effet sur le prix des 27 styles : un balayage a été lancé mais interrompu avant la fin ; seuls les premiers styles affichaient 2 650 $. Non conclu.
- « Try It On » : adresse du nouvel onglet relevée, page non ouverte (caméra). « Inquire » : formulaire non rempli. Chat non ouvert. Rendez-vous non ouvert.
- Les mesures de temps viennent d'une seule exécution par appareil.
- Le prix absent pour certaines formes peut venir d'un temps d'attente de 1,2 s trop court [S].

## Sources

- https://lenox-jewelers.com/pages/design-the-one (page lue, 128 contrôles, 15 et 24/11/2026)
- https://portal.mesh3d.com/embed/configurator/4e12e76e-7847-4dfb-b1c7-48a6d22c2c57 (configurateur actionné)
- https://lenox-jewelers.com/policies/refund-policy ; https://lenox-jewelers.com/policies/shipping-policy ; https://lenox-jewelers.com/cart ; https://lenox-jewelers.com/pages/custom-design
