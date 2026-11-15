# Audit : Slaets, configurateur de bague de fiançailles (néerlandais, €)

| | |
|---|---|
| Site | Juwelier Slaets (Slaets NV), De Keyserlei 46-48, Anvers ; boutique en ligne des bagues de fiançailles |
| Page de départ | https://shop.slaets.eu/verlovingsringen/ (liste « Stel je verlovingsring samen ») |
| Date | 15/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) |
| Statut | **partiel** : toutes les options ont été actionnées, mais le parcours s'arrête à la fiche. Le prix n'est pas affiché et aucun bouton de commande n'existe, donc pas de panier |
| robots.txt | `Disallow: /checkout/`, `/plesk-stat/webstat/`, `/webstat/` (V). Aucun de ces chemins n'a été ouvert. Pas de Cloudflare, pas de captcha (V) |

Marques : **V** vérifié (contrôle actionné ou page lue le 15/11) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Accueil `/` | bouton « STEL JE RING SAMEN », 5 collections avec « vanaf » (V) | prix d'appel par collection, de 1 709 à 1 755 € (V) | photo par collection (V) |
| Liste `/verlovingsringen/` | matière (or rose, or blanc, or jaune, platine), collection (5, choix multiple), modèle (4, choix multiple) (V) | « vanaf » par modèle, de 1 709 € (Brilliance Solitair) à 3 135 € (Romance Halo Pavé), identique dans les trois ors (V) | la vignette et le lien changent avec la matière (V) |
| Fiche, ex. `/verlovingsringen/000014-brilliance-solitair/1-witgoud/` | or (1 à 3 pastilles), poids du diamant (5), couleur (5 dont 1 désactivée), pureté (6 dont 1 désactivée), taille de doigt (46 à 60), gravure (5 polices, 2 × 4 caractères, 4 symboles) (V) | recalculé par le serveur à chaque clic, **mais dans un bloc masqué** (V) | aucune : 4 photos qui défilent seules toutes les 6 s (V) |
| Commande | **aucun bouton** : « NU BESTELLEN » est en commentaire dans le code de la page (V) | — | — |

## Contrôles vérifiés

Relevé avec `controls.cjs` : 53 contrôles sur la liste et 53 sur la fiche (ordinateur) ; 46 et 46 sur iPhone (V). Tous ont été actionnés, sauf ceux marqués « non actionné ».

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau de cookies « Akkoord » | bouton | ferme le bandeau (V) | — | fonctionne |
| Materiaal / kleur : wit goud (coché par défaut) | pastille radio | 20 modèles visibles (V) | « vanaf » inchangé | fonctionne |
| Materiaal / kleur : roze goud, geel goud | pastilles radio | 9 modèles chacun (Brilliance Solitair, 4 Romance, 4 Forever) (V) | inchangé | fonctionne |
| Materiaal / kleur : platina | pastille radio | **0 modèle** : la liste se vide sans message (V) | — | filtre vide |
| Collectie : Brilliance, Romance, Modern, Blossom, Forever | liste à choix multiple | 4 modèles par collection ; deux collections cochées : 8 (V) | — | fonctionne |
| Ontwerp : Solitair, Pavé, Halo, Halo Pavé | liste à choix multiple | 5 modèles par type (V) | — | fonctionne |
| Vignette « Meer info » (38 liens) | lien | ouvre la fiche dans l'or filtré (V, 5 fiches ouvertes) | — | fonctionne |
| Pastilles d'or de la fiche (wit, roze, geel) | radio avec lien | charge `/verlovingsringen/000014-rozegoud/2-rozegoud` ou `…/000014-geelgoud/4-geelgoud` ; titre et sous-titre corrects (V) | inchangé (monture au même prix) | **galerie cassée** sur le Brilliance Solitair : en or jaune, le mot « undefined » remplace les photos (V, capture) ; en or rose, la galerie ne contient aucune photo (V, code de la page) |
| Points de la galerie (4) | onglets | affichent les vues 1 à 4 (face, profil, dessus, tranche) (V) | — | fonctionne |
| Photo principale | image | clic : rien, pas de zoom (V) | — | sans effet |
| Vidéo Vimeo (n° 530475610) sous le texte | iframe | « Sign in to Vimeo to watch this video » dans notre navigateur (V) | — | non lisible ici ; état pour un visiteur ordinaire non établi (I) |
| Gewicht diamant : 0.3, 0.5, 0.7, 0.9, 1 ct | radios | appel `POST /pricecheck.php` (V) | 1 709, 2 761, 4 021, 5 279, 6 268 € (G, SI1) | calcul correct, **résultat masqué** |
| Kleur diamant : D, E, F, G | radios | même appel (V) | 0,3 ct SI1 : 1 835, 1 793, 1 751, 1 709 € | calcul correct, masqué |
| Kleur diamant : H | radio désactivée | bulle « Komt niet meer in aanmerking » (V) | — | désactivé, toujours affiché |
| Helderheid : LC, VVS, VS1, VS2 (avec 0,3 ct, G) | radios | message « We kunnen op dit moment geen diamant aanbieden met deze specificaties… » (V) | « Niet beschikbaar » | fonctionne ; 4 choix sur 5 sans offre dans cette combinaison |
| Helderheid : SI1 | radio | — | 1 709 € | fonctionne |
| Helderheid : SI2 | radio désactivée | même bulle que H (V) | — | désactivé |
| « Ons advies » × 6 (poids, couleur, pureté, taille du diamant, fluorescence, taille de doigt) | liens | fenêtre de conseil chargée depuis `/popup/advies-…/`, bouton « Sluiten » (V) | — | fonctionne (6 sur 6) |
| Maat | liste | 46 à 60, 53 par défaut (V) | inchangé | fonctionne |
| Police de gravure | liste | Charmonman, Garamond, Merriweather, Nunito, Roboto ; la police des deux champs change aussitôt (V) | gratuit | fonctionne |
| Symbole de gravure | liste | vide, &, +, cœur, infini (V) | — | fonctionne |
| Champs de gravure (2 × 4 caractères) | champs | présents (V) | — | **non remplis** (pas de saisie) |
| « Vind ik ook leuk » (« 1841 mensen vinden deze ring leuk ») | lien `?a=like` | — | — | non actionné : il écrirait un vote sur le site |
| Liens « Leer meer… » (4C), guide des tailles en PDF, « Ontdek hoe… » (2) | liens | deux pages « Hoe we werken » lues (V) | — | les autres n'ont pas été ouverts |
| Menu : Verlovingsringen, Hoe we werken, Onze belofte, Advies, FAQ, Contact | liens | pages lues, sauf Advies (V) | — | fonctionne |
| +32 3 213 50 81 | lien `tel:` | cible `tel:00322135081` (V) | — | **numéro tronqué** : il manque un chiffre (I) |
| info@slaets.eu | lien `mailto:` | cible `mailto:nfo@slaets.eu` (V) | — | **adresse fausse** (le « i » manque) |
| Formulaire de contact (nom, courriel, téléphone, message, « Verzenden ») | formulaire | présent (V) | — | non rempli |
| Juwelen & Horloges, Facebook, Instagram, webdesign | liens externes | — | — | non ouverts |
| Verkoopsvoorwaarden, Annulering, Privacy & cookies | liens | conditions lues ; « Annulering » renvoie aux conditions (V) | — | fonctionne |
| Menu « hamburger » (iPhone) | bouton | présent (V) | — | non actionné |

## Options disponibles

- **Collections** : Brilliance, Romance, Modern, Blossom, Forever (V).
- **Modèles** : Solitair, Pavé, Halo, Halo Pavé, soit 20 bagues (V).
- **Métaux** : or 18 carats blanc pour les 20 ; rose et jaune pour 9 d'entre elles ; platine 950 « op aanvraag » (V). Pas d'or 14 carats (V).
- **Diamant** : naturel seulement, rond. Poids 0,3 ; 0,5 ; 0,7 ; 0,9 ; 1 ct. Couleur D à G. Pureté LC, VVS, VS1, VS2, SI1 (V).
- **Taille et fluorescence du diamant** : pas de choix. Le texte promet « triple excellent » et aucune fluorescence pour D à F, au moins un « Excellent » et deux « Very Good » pour G/SI1 (V).
- **Tailles de doigt** : 46 à 60 (V).
- **Gravure** : initiales, 4 caractères de chaque côté d'un symbole, 5 polices, gratuite (V).

## Prix, délais, retours, garanties

- **Affichage** : sur la fiche, **aucun prix n'est visible**. Le bloc `div.prijs` porte `style="display:none"` et le second bloc de prix est en commentaire (V). Seuls les « vanaf » de la liste et de l'accueil sont affichés (V).
- **Décomposition** (calculée à partir des réponses du site, V) : prix = monture fixe + diamant.
  - Montures : Brilliance Solitair 1 081 €, Brilliance Pavé 1 771 €, Forever Halo Pavé 1 890 €, Romance Halo Pavé 2 507 €, quel que soit l'or.
  - Diamant 0,3 ct G SI1 : 628 € sur les quatre fiches. En G SI1 : 0,5 ct 1 680 €, 0,7 ct 2 940 €, 0,9 ct 4 198 €, 1 ct 5 187 € (I, par soustraction).
  - Prix TTC (TVA belge de 21 %), livraison assurée comprise (V).
- **Délai** : « Levertermijn maatwerk: 2-3 weken » sur la fiche ; « maximum 21 dagen » dans la FAQ ; « binnen 30 werkdagen » dans les conditions de vente (V). Trois valeurs.
- **Livraison** : en Belgique seulement, gratuite et assurée, par un transporteur spécialisé, contre pièce d'identité ; retrait possible en boutique (V).
- **Retours**, trois versions (V) :
  - fiche : « Niet tevreden? Geld terug! 20 dagen retourrecht » ;
  - FAQ et art. 7 des conditions : 14 jours calendaires ;
  - même art. 7 : une bague sur mesure dont le client a composé le diamant est « en principe » faite selon ses spécifications et « ne relève donc pas du droit de rétractation » ; Slaets « essaiera » de la reprendre.
  - La gravure supprime le droit de retour, et c'est écrit sous le champ de gravure (V).
- **Offre** : le prix d'une offre est garanti 5 jours ouvrables ; les produits à prix « indicatif » reçoivent une offre par courriel (V, art. 4).
- **Substitution du diamant** : couleur, pureté et poids ne peuvent être modifiés sans accord que vers le haut ; la taille peut descendre à « Very Good » × 3 (V, art. 3).
- **Garanties** : garantie légale ; mise à taille gratuite jusqu'à 2 tailles, en boutique ; gravure, nettoyage et contrôle offerts (V).
- **Certificats** : GIA, HRD ou IGI à partir de 0,30 ct (V).
- **Paiement annoncé** : Visa, Mastercard, Maestro, Bancontact, virement, par Ingenico (Ogone) (V, FAQ). Non observable : pas de panier.

## Temps d'apparition du visuel principal

| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Fiche (photo principale) | 1,6 s (LCP 1,7 s) | 1,3 s (LCP 1,35 s) |
| Liste (première vignette) | 1,3 s | 1,0 s |

Une mesure par cas, depuis un centre de données (V). Photos JPEG, ni 3D ni 360° (V).

## Confiance et service

- **Maison** : « since 1904 », quatre générations, trois boutiques à Anvers (V).
- **Diamant** : « 100 % naturel », jamais traité ; Slaets se dit « HRD Antwerp Certified Diamond Grader » et choisit chaque pierre à la main après la commande (V).
- **Suivi de fabrication** : promis deux fois, « we houden je op de hoogte van iedere stap in het maakproces » et « updates over de fase waarin uw bestelling zich bevindt » (V). Aucun exemple, aucune photo d'étape, aucun espace de suivi visible (V).
- **Contact** : téléphone, courriel, formulaire. Ni chat, ni WhatsApp, ni prise de rendez-vous en ligne (V).
- **Avis clients** : aucun sur le site. Seul signal : le compteur de « j'aime » par bague (790 à 1 895) (V).
- **Langue et devise** : néerlandais, euro (V).
- **Libellé du synthétique** : non vendu ; cité comme ce que la bague n'est pas (« niet synthetisch, lab-grown of treated ») (V).

## Points forts à retenir pour JR Diamond

1. **Un conseil par option.** Chaque rubrique a son lien « Ons advies », qui ouvre une courte fenêtre : diamètre moyen par poids (0,30 ct : 4,3 mm ; 0,50 ct : 5,0 mm ; 0,75 ct : 5,7 mm) et choix recommandé (V, six fenêtres ouvertes).
2. **La photo dit ce qu'elle montre.** « De ring op de afbeeldingen en video toont een diamant met een gewicht van ongeveer 0.70ct » sous la galerie (V). C'est la règle « ce que vous voyez existe », en une phrase.
3. **Un moteur de prix simple.** Monture à prix fixe par modèle, diamant tarifé selon trois critères par un appel au serveur (V). Les combinaisons sans offre répondent par un message clair, et les qualités retirées sont grisées avec une bulle (V).
4. **Aperçu de la gravure dans la police choisie**, avec cœur et infini, et l'avertissement sur le retour placé sous le champ (V).
5. **Clause de substitution.** Les conditions disent ce que l'atelier peut changer sans demander (seulement mieux) et le plancher de taille (V). Utile pour le « ≈ 0,25 ct, à confirmer » de JR Diamond.
6. **Prix garanti 5 jours ouvrables** après l'offre (V) : une réponse aux variations de l'or.
7. **La mise à taille gratuite est annoncée sous la liste des tailles** (V), là où le doute naît.

## Défauts observés

1. **Configurateur sans prix ni commande.** Le prix est calculé puis caché, le bouton de commande est retiré (V). La FAQ dit pourtant « Onze webshop is dag en nacht… geopend » (V). Motif inconnu : mise en veille de la vente en ligne (S).
2. **Galerie cassée en or jaune et en or rose** du modèle d'appel : « undefined » à la place des photos (V).
3. **Filtre « platina » vide**, alors que le platine est annoncé (V).
4. **Texte non remplacé** : « Gegarandeerd klaar voor vandaag+21 dagen » (V).
5. **Trois règles de retour et trois délais** qui se contredisent (V).
6. **Liens de contact faux** : `mailto:nfo@slaets.eu` et un numéro `tel:` tronqué, sur toutes les pages (V).
7. **FAQ « Under Construction »**, en anglais, en tête d'une page néerlandaise (V).
8. **L'image ne suit aucune option** : le diamant affiché reste celui de 0,70 ct, la galerie défile seule (V).
9. **Vente limitée à la Belgique**, site en une seule langue (V).

## Limites de l'audit

- Pas de panier, donc ni récapitulatif, ni frais, ni moyens de paiement observés.
- Les puretés LC à VS2 n'ont été essayées qu'avec 0,3 ct et la couleur G. Les autres combinaisons (5 × 4 × 5) n'ont pas toutes été appelées.
- Cinq fiches sur vingt ont été ouvertes. Le défaut de galerie n'est établi que pour le Brilliance Solitair.
- La vidéo Vimeo n'a pas pu être vue. La page « Advies » et le guide des tailles en PDF n'ont pas été ouverts.
- Mesures de temps : une par cas, réseau de centre de données.

## Sources

- https://shop.slaets.eu/ · https://shop.slaets.eu/verlovingsringen/
- https://shop.slaets.eu/verlovingsringen/000014-brilliance-solitair/1-witgoud/ · https://shop.slaets.eu/verlovingsringen/000014-brilliance-solitair/4-geelgoud/
- https://shop.slaets.eu/verlovingsringen/000015-brilliance-pave/1-witgoud/ · https://shop.slaets.eu/verlovingsringen/000013-romance-halo-pave/1-witgoud/ · https://shop.slaets.eu/verlovingsringen/000029-forever-halo-pave/2-rozegoud/
- https://shop.slaets.eu/faq/ · https://shop.slaets.eu/hoewewerken/002-hoe-we-werken/ · https://shop.slaets.eu/hoewewerken/7-hoe-we-jouw-ring-op-maat-maken/
- https://shop.slaets.eu/belofte/003-onze-belofte/ · https://shop.slaets.eu/algemeen/8-verkoopsvoorwaarden/ · https://shop.slaets.eu/algemeen/010-annulering/ · https://shop.slaets.eu/contact/
- https://shop.slaets.eu/robots.txt
- Scripts, journaux et 11 captures, hors dépôt : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/slaets/`
