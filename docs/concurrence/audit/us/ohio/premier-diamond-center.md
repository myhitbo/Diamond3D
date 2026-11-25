# Audit : Premier Diamond Center (Beavercreek, Ohio)

- **Site** : Premier Diamond Center. **Adresse** : https://www.premierdiamondcenter.com/ (départ : https://www.premierdiamondcenter.com/pages/custom-ring-builder)
- **Date** : 15/11/2026 (consigne ; pages lues le 25/11/2026 d'après l'horloge de la machine). **Appareils** : Chromium ordinateur 1366×900 et affichage iPhone 13.
- **Statut** : **partiel**. L'assistant d'entrée et le parcours « montures puis diamant » (`/ringsettings`) sont lisibles ; le concepteur 3D n'a pas été actionné (voir « Limites »). Panier : interdit par robots.txt, non ouvert.
- Repères : [V] vérifié (page lue ou contrôle actionné, adresse donnée), [I] inféré, [S] supposé.
- Même plateforme que Peter & Co. (JewelerOS pour la 3D, Punchmark pour le site) : voir `peter-co-jewelers.md`.

## Parcours

| Étape | Options relevées |
| --- | --- |
| `/pages/custom-ring-builder` [V] | « Step 1 of 4 : Let's start designing your ring » ; 3 pastilles de métal (jaune, blanc, rose) ; 9 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, un style masqué par le bandeau cookies, Three Stone, « Start from scratch » ; Back, Skip |
| Étapes 2 à 4 de l'assistant | **Non actionnées** (appels `jeweleros.com/api/` interdits). [I] identiques à Peter & Co. : pierre centrale Natural/Lab Grown et formes, puis 3D |
| Parcours « Build an Engagement Ring » `/ringsettings` [V] | 3 étapes : 1 « Choose a ring », 2 « Choose a diamond », 3 « Complete ring / Review your ring » ; 140 montures ; styles Solitaire, Three Stone, Halo, Antique, Single Row, Multi Row, Bypass ; filtres métal (tous, blanc, jaune, platine, rose), plage de prix, « Can be set with » ; tri (Default, Featured, High to Low, Low to High, Newest) ; pagination (6 pages) |
| Recherche de diamants `/diamonds` [V] | Natural / Lab Grown, formes, prix, carat, cut, couleur, pureté, avancé |
| Constructeur de bandes (menu « Build Your Wedding Band » → `/pages/band-builder`) | **page 404** [V] |
| Panier | `/cart` interdit par robots.txt (`Disallow: */cart`) : non ouvert, aucun bouton d'ajout cliqué |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Pastilles métal (jaune, blanc, rose) | boutons | présentes ; non cliquées | aucun | non testé [V présence] |
| 9 cartes de style, « Start from scratch », Skip, Back | cartes / boutons | présentes ; **aucune cliquée** : sur le site jumeau, un clic appelle `jeweleros.com/api/` (interdit) | aucun | non testé (interdit par robots.txt du domaine tiers) |
| Natural / Lab Grown (`/diamonds`) | liens | rechargement | aucun | fonctionne, **0 résultat** |
| Forme « Round » | bouton | requête renvoyée, 0 diamant | aucun | fonctionne, vide |
| Filtres prix, carat, cut, couleur, pureté, avancé (polissage, symétrie, fluorescence, table, profondeur, laboratoire) | curseurs, boutons | présents comme chez Peter & Co. ; « Advanced » a bloqué le clic (un widget Podium intercepte la souris) | aucun | non testé |
| Étapes « Choose a ring / Choose a diamond / Review » | liens `/ringsettings`, `/ringsettings-diamonds`, `/ringsettings-complete` | présents ; étapes 2 et 3 non ouvertes | | non testé |
| Styles (7) | liens JavaScript | présents ; non cliqués | aucun | non testé |
| Métaux (5 liens) | liens JavaScript | présents ; non cliqués | aucun | non testé |
| Champs prix mini (« No minimum ») / maxi (« Unlimited »), « Can be set with » | champs | présents ; non utilisés | | non testé |
| Tri (Default, Featured, High to Low, Low to High) | liste | un clic sur le texte « Low to High » a été tenté (délai de 1,5 s, probablement sans effet) ; **l'adresse de tri `?sortSpec=` est interdite** : tri non validé, **écart possible à signaler** | | non testé (interdit) |
| « Clear Filters », vue grille/liste | boutons | présents | | non testé |
| Cartes de monture (nom + prix) | cartes | prix affichés (ex. 10K White Gold Round Halo : 1 288,18 à 3 980,45 $ sur la première page) | oui | lu |
| « Text us » (widget), téléphone (937) 203-4600, « Visit Us » (Google Maps), « Make an Appointment » `/make-an-appointment` | boutons, liens | non ouverts (chat, formulaire) | | non testé |
| Cœur / wishlist, compte, panier (icônes en tête) | liens JavaScript | non ouverts (compte et panier interdits) | | non testé |
| Bandeau cookies | boutons | « Decline all cookies » ferme le bandeau | | fonctionne |
| Menu : Design Your Ring, Start from Scratch `/pages/custom-designing`, Custom Gallery, Refinishing & Restoration, 3D Scanning, Jewelry Engraving, etc. | liens | `custom-designing` et `custom-engagement-rings` lus ; `band-builder` : 404 | | partiellement testé |
| Galerie « Custom Gallery » avec boutons « Play » et « Inquire » | boutons | vus dans le texte de `custom-designing` ; non cliqués | | non testé |

## Options disponibles

- **Métaux de l'assistant** : or jaune, blanc, rose [V]. Montures de `/ringsettings` : tous métaux, blanc, jaune, platine, rose ; les noms affichés sont en **or 10 carats** (« 10K White Gold ») [V].
- **Styles** : Solitaire, Three Stone, Halo, Antique, Single Row, Multi Row, Bypass (parcours montures) ; Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Three Stone (assistant) [V].
- **Pierres** : naturel et synthétique (bascules), formes standard ; recherche de diamants vide [V].
- **Services annoncés** : conception sur mesure (consultation, CAO ou cire, fonte et sertissage sur place), transformation de bijoux de famille, 3D scanning, gravure, mise à taille, rhodiage, assurance, expertise [V liens et `/pages/custom-designing`].
- Taille de doigt, gravure, pavage, griffes dans le 3D : **non relevés**.

## Prix, délais, retours, garanties

- **Prix** : montures chiffrées sur `/ringsettings` (prix sans pierre, [I] « Setting » seule) ; aucun prix dans l'assistant d'entrée [V]. Pas de décomposition, pas de prix total avec pierre (étape pierre inaccessible).
- **Délai** : « we can have it ready for you in just a couple of weeks » pour le constructeur 3D [V `/pages/custom-engagement-rings/`] ; la pierre est choisie **en boutique** (« Pick out your center stone in our Beavercreek, OH showroom ») [V].
- **Retours** [V `/return-policy`] : 15 jours après réception ; pièces personnalisées non retournables ; échange pour défaut sous 30 jours ; **gemmes et diamants vendus tels quels** (« sold as-is ») ; remboursement 7 à 10 jours ouvrés ; retour à ses frais.
- **Garantie** : contrôle à la main des articles (texte de la politique) ; pas de garantie chiffrée lue [V].
- **Certificats** : filtre laboratoire GIA, IGI, AGS, EGL, HRD dans la recherche (vide) [V]. Libellé : « Lab Grown » [V].
- **Livraison, moyens de paiement, financement** : non lus (panier interdit ; pas de page de financement relevée).

## Confiance et service

- Entreprise familiale (famille Siroki), « over 30 years of combined experience », atelier sur place (CAO, impression 3D, fonte, sertissage, soudure laser) [V `/pages/custom-designing`, `/pages/custom-engagement-rings/`].
- **Avis clients** : deux avis Google cités en pleine page sur `/pages/custom-engagement-rings/` [V]. Pas de note moyenne chiffrée relevée.
- **Preuves de fabrication** : processus en 4 étapes décrit (consultation, CAO ou cire, fonte, remise), « Custom Gallery » avec vidéos (boutons « Play ») [V sur la page, non lancées]. Pas de suivi de commande en ligne relevé.
- Adresse 1360 North Fairfield Rd, Beavercreek ; téléphone ; texto ; rendez-vous ; Facebook, Instagram, Google [V].
- Langue : anglais seul ; devise : USD [V].

## Points forts à retenir pour JR Diamond

1. **Parcours « monture puis diamant puis récapitulatif » avec prix des montures affichés** (3 étapes numérotées) : lisible et rassurant. Preuve : https://www.premierdiamondcenter.com/ringsettings (« 140 settings found », prix par carte).
2. **Processus de fabrication raconté en 4 étapes, avec CAO à valider avant la fonte** (« request any design adjustments before we cast it in metal »), proche de la promesse « on voit naître son bijou ». Preuve : `/pages/custom-designing`.
3. **Galerie de réalisations avec vidéos et bouton « Inquire »** sur chaque pièce. Preuve : `/pages/custom-designing` (boutons Play, Inquire).
4. **Délai annoncé court** (« a couple of weeks ») et pierre choisie en direct avec le spécialiste. Preuve : `/pages/custom-engagement-rings/`.
5. **Avis clients cités sur la page de conception.** Preuve : même page.

## Défauts observés

- **Recherche de diamants vide** : 0 diamant, naturel et synthétique [V `/diamonds`].
- **Lien de menu mort** : « Build Your Wedding Band » → `/pages/band-builder` renvoie une page 404 [V].
- **Pas de pierre ni de prix total en ligne** : la pierre se choisit en boutique, donc pas de prix final de bague en ligne [V texte de la page].
- Pierres « vendues telles quelles » (« sold as-is »), sur-mesure non retournable [V `/return-policy`].
- Montures annoncées en **10 carats**, titre rare en Israël [V libellés ; I pour la comparaison].
- Le widget de chat Podium intercepte des clics (bouton « Advanced » inaccessible au premier essai) ; bandeau cookies qui masque une carte de style [V].

## Limites de l'audit

- **Le concepteur 3D n'a pas été actionné** : il charge et se pilote via `www.jeweleros.com/api/…`, interdit par le robots.txt de ce domaine (`Disallow: /api/`). Je n'ai cliqué aucun style de l'assistant. Pas de contrôles 3D, pas de prix du configurateur, pas de panier.
- **Écart possible** : un clic sur « Low to High » à l'étape de tri de `/ringsettings` a été tenté ; le tri passe par `?sortSpec=` (interdit). Je n'ai pas relevé l'adresse atteinte ; considérer ce clic comme douteux.
- Panier, compte : interdits, non ouverts. Aucun formulaire, chat ou rendez-vous ouvert. Aucune fiche produit ouverte, aucune étape 2 ou 3 de `/ringsettings`.
- Mesures (un essai chacun) : visuel de départ visible en **3,5 s (ordinateur)** et **3,0 s (iPhone)** ; liste des montures en 4,7 s (ordinateur).
- Une partie du texte de la politique de retour a été tronquée à la lecture.

## Sources

- https://www.premierdiamondcenter.com/pages/custom-ring-builder (robots.txt : AUTORISÉ ; liste de contrôles ordinateur 132 / iPhone 53)
- https://www.premierdiamondcenter.com/ringsettings ; https://www.premierdiamondcenter.com/diamonds
- https://www.premierdiamondcenter.com/pages/custom-designing ; https://www.premierdiamondcenter.com/pages/custom-engagement-rings/ ; https://www.premierdiamondcenter.com/pages/band-builder (404)
- https://www.premierdiamondcenter.com/return-policy ; https://www.premierdiamondcenter.com/robots.txt
- Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/premier-diamond-center/`
