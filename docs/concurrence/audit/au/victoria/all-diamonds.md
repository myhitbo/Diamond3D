# Audit : All Diamonds (Melbourne, Victoria, Australie)

- **Site** : https://www.alldiamonds.com.au/ ; page de départ https://www.alldiamonds.com.au/ring-builder
- **Date** : 15/11/2026 (séance d'audit techniquement menée le 25/11)
- **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 (Playwright, proxy de la session)
- **Statut** : **complet** pour ce que le site propose : le constructeur est parcouru de bout en bout (bague, diamant, finitions, récapitulatif). Il n'existe ni prix, ni ajout au panier, ni paiement : le parcours se termine par « Enquire » (demande de devis) et le panier est vide en permanence. Robots.txt : tout autorisé sauf `/cart`, `/account`, `/search`, `/admin` pour certains robots d'IA ; aucune adresse interdite ouverte.
- Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| 1 · Band [V] | `/ring-builder` | métal (4), style de bande (5), épaisseur (4), « Next · Diamond » |
| 2 · Diamond [V] | `/ring-builder?...` (la configuration est écrite dans l'adresse à chaque choix) | forme (10), carat (6 tranches), origine (2), qualité couleur/pureté (3), liste de 4 pierres réelles + « More diamonds » |
| Fiche pierre [V] | `/diamond/nivoda_DIAMOND/<id>` | vidéo 360°, photos, fiche technique, « Choose this diamond », « Enquire » |
| 3 · Finishing [V] | `/ring-builder?...&diamond=[...]` | style de sertissage (5), halo caché (2), orientation (2), taille de doigt (F à Z½ + « To be confirmed »), gravure (40 caractères), « Enquire », « Book an appointment » |
| Panier [V] | bouton « Open basket », `/cart` | « Your bag is empty. » dans les deux cas ; aucun bouton d'ajout n'existe dans le constructeur |
| Recherche de diamants [V] | `/diamond-search` | filtres forme, carat, couleur, pureté, origine ; 48 résultats, 4 pages de 12 |

## Contrôles vérifiés

Le contrôleur liste 56 contrôles visibles sur ordinateur et 60 sur iPhone (page constructeur) [V]. Pied de page (≈ 40 liens) et menus : listés, non suivis un à un.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Yellow / White / Rose gold, Platinum | 4 boutons ronds | titre « Oval · 18ct White Gold », « Platinum » ; image recolorée | aucun prix affiché | OK [V] |
| Band style (Round, Flat, Knife edge, Tapered, Diamond-set) | liste | image recalculée à chaque choix (photo générée) ; « Diamond-set » montre une rangée de pavé | aucun | OK [V] |
| Band thickness (1.8, 2.0, 2.5, 3.0 mm) | liste | options lues ; changement d'épaisseur appliqué, effet visuel faible [I] | aucun | OK [V] |
| Next · Diamond / Back / Next · Finishing | boutons | change d'onglet ; l'adresse reçoit `metal=…&band=…&width=…&shape=…` | — | OK [V] |
| Onglets 1·Band / 2·Diamond / 3·Finishing | tabs | navigation libre | — | OK [V] |
| Diamond shape (Round, Oval, Emerald, Pear, Cushion, Radiant, Princess, Marquise, Asscher, Heart) | liste | les 10 testés : titre et image changent (une image par forme) | aucun | OK [V] |
| Carat size (0.50–0.99, 1.00–1.49, 1.50–1.99, 2.00–2.99, 3.00–3.99, 4.00–5.00 ct) | liste | tranches lues ; relance la recherche de pierres | aucun | OK [V] |
| Diamond origin (Lab-grown, Natural) | liste | « Natural » : la liste passe à des pierres GIA ; « Lab-grown » : pierres IGI | aucun | OK [V] |
| Colour / clarity quality (Exceptional, Signature, Essential) | liste | recherche de 4 pierres réelles ; correspondance lue dans les requêtes de la page : Exceptional D–F et FL–VVS2 ; Signature D–F VS1–VS2 et G–H FL–VS2 ; Essential D–H SI1–SI2 et I–J FL–SI2 [I] | aucun | OK [V] |
| Carte pierre « View » | bouton | ouvre la fiche pierre (carat, couleur, pureté, taille, certificat) | aucun | OK [V] |
| More diamonds / View all diamonds | boutons | renvoient vers `/diamond-search` [I] | — | présents, non cliqués |
| 360° video / Photo (fiche pierre) | 2 boutons | 360° : lecteur tiers loupe360.com (iframe 500×500 dans un cadre de 603 px, vide à droite) ; Photo : 9 images | aucun | OK [V] |
| Choose this diamond | bouton | retour à l'onglet Band avec « Selected diamond : … » ; il faut recliquer « Next » deux fois pour atteindre Finishing | aucun | OK avec défaut [V] |
| Enquire (fiche pierre) | bouton | fenêtre : nom, e-mail, téléphone facultatif, message prérempli ; « We typically reply within one business day » | — | formulaire non rempli, non envoyé [V] |
| Setting style (Four claw, Six claw, Double claw, Compass claw, Bezel) | liste | « Four claw » et « Bezel » : image photo ; les trois autres : rendu 3D simplifié (voir plus bas) | aucun | OK [V] |
| Hidden halo (No hidden halo / Hidden halo) | liste | texte : « A fine row of diamonds set into the setting rail beneath the centre stone » ; image : rendu simplifié | aucun | OK [V] |
| Stone orientation (North–south, East–west) | liste | l'ovale tourne de 90° (rendu simplifié) | aucun | OK [V] |
| Ring size (To be confirmed, F … Z½, 43 valeurs) | liste | s'inscrit dans l'adresse (`size=M`) ; aucune échelle indiquée (UK/AU supposé) | aucun | OK [V] |
| Engraving (champ, 40 caractères) | champ | « A + B » : compteur « 5 / 40 », écrit dans l'adresse (`engraving=A+++B`) | aucun | OK [V] |
| Enquire (finitions) | bouton | fenêtre « Enquire about your ring · Price on request » avec récapitulatif complet (métal, bande, forme, carat, origine, qualité, sertissage, halo, orientation, taille, gravure, pierre choisie, stock, délai, livraison, garantie, lien de la conception) | « Price on request » | non envoyé [V] |
| Book an appointment | bouton | fenêtre « Choose a date and time… ONCE BOOKED, TAP CONTINUE » (agenda intégré) | — | ouvert, non réservé [V] |
| Share design | bouton | message « Design link copied. » ; le presse-papiers contient l'adresse avec la configuration complète | — | OK [V] |
| Reset design | bouton | revient à l'onglet Band et aux choix par défaut | — | OK [V] |
| Open basket | bouton | tiroir « Your bag is empty. / Discover the collection » | — | OK [V] |
| « Text us » (widget Podium) | bulle de chat | ouvre un formulaire (nom, mobile, message) ; ouvert par erreur lors d'un clic forcé, rien saisi | — | non utilisé [V] |
| Book an appointment (en-tête) | lien | `#book` | — | non cliqué |
| Search (loupe), « Shop », « Engagement & Bridal » | boutons | menus et recherche (`/search`, déconseillé aux robots) | — | non ouverts |
| Diamond search : Natural GIA / Lab grown IGI, 11 formes (dont Old Miner), curseurs carat, couleur white/fancy D à K, pureté FL à I1, Search diamonds, Reset filters, tri (4 options), pagination 1 à 4 | filtres | page lue ; 48 résultats, 12 par page ; chaque carte : « Choose this diamond », « View details » | aucun prix | lus [V], filtres non tous actionnés |
| Pied de page : Elsternwick, Toorak (liens Google Maps), info@, tél., réseaux | liens | non suivis | — | non testés |

## Options disponibles

- **Métal** : or 18 ct jaune, blanc, rose ; platine. Pas de 14 ct [V].
- **Bande** : Round, Flat, Knife edge, Tapered, Diamond-set ; épaisseur 1,8 / 2,0 / 2,5 / 3,0 mm [V].
- **Formes** : Round, Oval, Emerald, Pear, Cushion, Radiant, Princess, Marquise, Asscher, Heart ; Old Miner dans la recherche de diamants [V].
- **Carat** : 0,50–0,99 ; 1,00–1,49 ; 1,50–1,99 ; 2,00–2,99 ; 3,00–3,99 ; 4,00–5,00 [V].
- **Origine** : synthétique (« Lab-grown », certificat IGI) ou naturel (certificat GIA) [V].
- **Qualité** : trois paliers nommés (Exceptional, Signature, Essential) cachant des plages couleur/pureté ; la pierre affichée est une pierre réelle de l'inventaire (exemple : « 1.08ct Oval · D colour · IF clarity · IGI #LG846663413 ») [V].
- **Sertissage** : quatre griffes, six griffes, double griffe, « compass claw », bezel ; halo caché oui/non ; orientation nord–sud ou est–ouest [V].
- **Finitions** : taille de doigt (To be confirmed, F à Z½), gravure 40 caractères [V]. Pas de choix de police, pas de pavé sur la bande hors « Diamond-set ».
- **Fiche pierre** : forme, carat, couleur, pureté, polissage, symétrie, fluorescence, « eye clean 100 % », table, profondeur, rapport L/l, culasse, mesures en mm, lien vers le certificat [V].
- **Service** : ring sizer en ligne (étalonnage avec carte ou pièce, conversion AU/US/EU, tableau 14,0 à 22,2 mm), gravure, réparation, redimensionnement, évaluation, assurance, guides (diamant, gemmes, styles, sertissages, métaux, perles) [V, pages lues pour le ring sizer et la gravure].

## Prix, délais, retours, garanties

- **Prix** : aucun prix nulle part dans le constructeur, dans la fiche pierre, dans la recherche de diamants ni dans le catalogue `/engagement-rings` (cartes marquées « Customisable »). Récapitulatif final : « **Price on request** ». Le visuel reste accompagné de « Final proportions and details confirmed with your quotation. » [V]
- **Délai** : « Approximately 4–6 weeks from design approval » (récapitulatif) [V]. Fiche de livraison : pièces sur mesure expédiées 1 à 2 jours ouvrés après achèvement [V, `/shipping-returns`, mise à jour mai 2026].
- **Livraison** : « Complimentary insured shipping Australia-wide » ; signature à la livraison, suivi par e-mail, express et même jour à Melbourne sur demande ; international sur devis, droits à la charge du destinataire ; retrait possible en showroom [V].
- **Retours** : pièces de stock : 14 jours, remboursement ou échange, retour assuré gratuit. **Pièces sur mesure : « cannot be returned »**, avec renders, images CAO et points d'approbation avant production [V].
- **Garanties** : « Lifetime craftsmanship guarantee » (griffes, sertissage, structure) ; nettoyage et contrôle gratuits à vie en showroom ; évaluation d'assurance par un gemmologue avec chaque pièce [V, `/care`]. Les questions « What does the lifetime guarantee cover ? » sont repliées, non lues.
- **Redimensionnement** : `/shipping-returns` annonce un redimensionnement gratuit « for life, where the design allows » ; `/care` annonce « one complimentary resize within the first 12 months, up to two sizes ». Les deux pages se contredisent [V].
- **Certificats** : IGI (synthétique), GIA (naturel), numéro affiché sur chaque pierre, lien vers le rapport ; la pierre est réelle, pas un modèle générique [V].
- **Libellé du synthétique** : « Lab-grown », « Lab grown diamond · IGI certified » [V]. Pas de « synthetic ».
- **Langues, devises** : anglais uniquement ; aucune devise visible, puisqu'aucun prix [V].
- **Financement** : non vu.

## Confiance et service

- Deux showrooms, Elsternwick (8 Riddell Parade) et Toorak (428A Toorak Road), téléphone (03) 9523 6603, e-mail ; « Family owned since 1985 » ; bandeau « Lifetime craftsmanship guarantee » sur toutes les pages [V].
- Chat par SMS (widget Podium « Text us ») présent en permanence, avec bulle d'invitation qui masque le bouton « Next » sur ordinateur [V].
- Rendez-vous en ligne (agenda intégré). Aucun avis client vu dans le constructeur ni sur la fiche pierre [V pour l'absence sur ces pages].
- Preuves de fabrication : promesse de « renders, CAD images and approval points » avant production ; aucune photo ni vidéo d'atelier, aucun suivi de commande vu dans le parcours [V pour l'absence ; promesse lue sur `/shipping-returns`].
- « Not sure where to start ? » : sélection de trois diamants par un gemmologue avec vidéos comparées (formulaire « Request a shortlist », non ouvert) ; « Already have a setting ? » : montage de la pierre en 2 à 3 semaines [V, texte lu].

## Points forts à retenir pour JR Diamond

1. **La configuration vit dans l'adresse** et « Share design » copie le lien en un clic (message « Design link copied. ») ; une pierre précise y est incluse (`diamond=[…]`). Preuve : adresse lue après chaque choix et contenu du presse-papiers [V].
2. **Pierre réelle choisie dans le constructeur** : quatre diamants de l'inventaire avec numéro IGI/GIA, vidéo 360°, photos, dimensions et lien vers le certificat. Proche de « la pierre filmée » de JR Diamond. Preuve : fiche `/diamond/nivoda_DIAMOND/…` [V].
3. **Récapitulatif d'« Enquire » exhaustif** : toutes les options, la pierre, le délai, la garantie et le lien de la conception dans un seul message. Preuve : fenêtre « Enquire about your ring » [V].
4. **Qualité nommée en trois paliers** (Exceptional, Signature, Essential) plutôt qu'une grille couleur × pureté : simple pour un client non expert. Plages lues dans les requêtes de la page [I].
5. **Double rendu** : image photo générée pour les configurations courantes, rendu 3D simplifié sinon, avec la mention « Final proportions… confirmed with your quotation » qui cadre la promesse. À méditer face à « ce que vous voyez existe » : ici l'image ne prétend pas être la pièce finale [V].
6. **Politique du sur mesure explicite** : « cannot be returned » mais renders, CAD et points d'approbation promis, redimensionnement gratuit [V, `/shipping-returns`].

## Défauts observés

- **Aucun prix** : le client ne peut pas comparer ni budgéter ; le constructeur se termine par « Price on request » alors que les pierres de l'inventaire ont forcément un prix de gros [V, inféré pour la cause].
- **Le choix du métal est perdu** : platine choisi, puis « Choose this diamond » : le titre revient à « Oval · 18ct Yellow Gold » et l'adresse à `metal=18ct Yellow Gold` (vérifié sur ordinateur) [V].
- **« Choose this diamond » renvoie à l'étape 1** au lieu de la suivante : deux clics de plus pour arriver à Finishing [V].
- **Adresse de pierre non partageable** : ouverte dans une session neuve, la fiche répond « Diamond unavailable — This stone may have sold or the link expired » [V].
- **Rendu simplifié gris** (griffes à six, double, « compass », halo caché, est–ouest) : pierre sans éclat, aucune photo dans les 10 s d'attente, alors que la page parle de « design visualisation » [V].
- **Lecteur 360° mal cadré** : 500×500 px dans un cadre de 603 px, bande blanche à droite [V].
- **Bulle de chat** posée sur le bouton « Next » à 1366×900 : il faut la fermer ou la contourner [V].
- **Contradiction** sur le redimensionnement gratuit (à vie / 12 mois) entre deux pages [V].
- **Libellés peu clairs** dans la recherche de diamants : « E / VVS1 / ID » (la troisième valeur n'est pas expliquée) et un emoji sur certaines cartes [V].
- **Chargement lent mesuré une fois** : 30,8 s jusqu'à `domcontentloaded` lors du premier essai, puis 4,2 s et 6,0 s jusqu'à l'affichage du visuel ; cause non établie (proxy ?) [V pour les mesures].

## Limites de l'audit

- Mesures de temps d'apparition du visuel (rendu 3D, canvas) : **ordinateur 4,2 s et 6,0 s** (deux essais) ; **iPhone 13 : 4,7 s** (un essai) ; l'image photo remplace le rendu simplifié en moins d'une seconde pour la configuration par défaut [V]. Réseau : proxy de la session, donc indicatif.
- Seule la forme ovale a été parcourue pour sertissage, halo et orientation ; les autres formes n'ont été testées que pour l'image. Les options de sertissage peuvent varier selon la forme [S].
- Prix : aucun à relever. Le panier n'a jamais pu contenir un article.
- Non testés : envoi des formulaires « Enquire », de l'agenda et du chat (règle de lecture seule) ; liste « Request a shortlist » ; questions repliées de `/care` ; menus « Shop » et « Engagement & Bridal » ; catalogue au-delà de la première page ; pierres naturelles hors fiche listée ; affichage iPhone de la fiche pierre au-delà de la capture.
- Firecrawl indisponible (crédits épuisés) : pages de service lues avec le navigateur.
- Le contrôle robots.txt a répondu AUTORISÉ pour toutes les adresses ouvertes, dont `/cart`.

## Sources

- https://www.alldiamonds.com.au/ring-builder [V]
- https://www.alldiamonds.com.au/diamond-search [V]
- https://www.alldiamonds.com.au/diamond/nivoda_DIAMOND%2F3c736ea4-fb6b-400a-a6fa-a649e1af75a6 (fiche ouverte depuis la liste, puis lien expiré en accès direct) [V]
- https://www.alldiamonds.com.au/engagement-rings [V]
- https://www.alldiamonds.com.au/cart [V]
- https://www.alldiamonds.com.au/shipping-returns [V]
- https://www.alldiamonds.com.au/care [V]
- https://www.alldiamonds.com.au/ring-sizer [V]
- https://www.alldiamonds.com.au/services/engraving [V]
- https://www.alldiamonds.com.au/robots.txt [V]
