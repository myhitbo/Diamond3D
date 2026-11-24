# Audit : Bespoke Diamonds (Irlande)

- **Site** : Bespoke Diamonds, https://www.bespokediamonds.ie/ (WordPress / WooCommerce)
- **Page de départ** : https://www.bespokediamonds.ie/engagement-rings/ ; fiche testée : https://www.bespokediamonds.ie/engagement-rings/1-82ct-carat-oval-cut-ring-sr201/
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366×900) ; iPhone 13 pour la mesure et le débordement seulement
- **Statut** : **partiel** (catalogue, une fiche à options et le panier vérifiés ; sur mesure, quiz et rendez-vous non actionnés).
- Marques : V vérifié · I inféré · S supposé. `robots.txt` : `/cart/`, `/checkout/`, `/my-account/` interdits ; le panier réel est à `/our-bespoke-diamonds-easy-to-use-shopping-bag/` (autorisé par le contrôle). Une route de blocage a empêché toute navigation vers les chemins interdits ; le bouton « Proceed to checkout » n'a pas été suivi.

## Parcours
| Étape | Options |
|---|---|
| Liste `/engagement-rings/` | menus par style, forme, carat, métal ; filtres Catégorie / Style / Forme / Tri ; 996 contrôles ; « Load 72 more » (V) |
| Fiche bague | Centre diamond (8 options) → Metal (6) → Ring Size (25) → Add to basket (V) |
| Panier | récapitulatif, code promo, mise à jour, expédition forfaitaire, PayPal, accès à la caisse (V) |
| Sur mesure | `/custom-engagement-rings/` : 5 étapes (consultation, diamant, CAO + cire, fabrication, retrait) (V, lu) |

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau cookies : Accept All / Customize | bouton | « Accept All » ferme le bandeau ; « Customize » ouvre 6 catégories (non modifiées) | – | OK (V) |
| Book an Appointment (en-tête) | bouton | ouvre un formulaire : lieu (Dublin, Cork, visio 15 à 30 min), date, plage horaire, comté, origine, centres d'intérêt, message ; non rempli | – | présent (V) |
| Need Help, Log in, Search, panier | liens | `/help/`, `/account/`, recherche, sac ; non actionnés sauf sac | – | présents |
| Menus Engagement / Wedding / Eternity / Gemstone / Jewellery / Custom rings | menus | sous-menus : styles (solitaire, trois pierres, côté, halo, jaune fantaisie), 10 formes, carats (1 ct à 8 ct), moins de 2 000 €, moissanite, gemmes ; alliances femme et homme ; éternité ; bijoux | – | liens relevés (V) ; non tous suivis |
| Filtres métal : 18K YELLOW, WHITE, ROSE, PLATINUM | liens | adresses `?pa_metal=18ct-yellow-gold` etc. ; non suivies | – | présents (V) |
| Select « Category » (8 valeurs), « Style » (5), « Diamond Shape » (≥ 7), « Sort » (5 : Popularity, Latest, Price low/high…) | listes | valeurs relevées ; non actionnées | – | partiel |
| Sélecteur de carats sur chaque carte (ex. 1,20 / 2,00 ct) | liste | présent sur 36 cartes ; non actionné en liste | – | présent |
| Carte bague | lien | ouvre la fiche ; vidéo « Play » sur certaines cartes | – | OK (V) |
| Load 72 more | bouton | présent (affiche 72 sur 225 pour la sélection synthétique, extrait) ; non actionné | – | non testé |
| Ring Quiz | lien | ancre `#quiz-gWHWo46` ; non ouvert | – | non testé |
| Fiche : Centre diamond (8 options) | liste | 1,20 / 1,50 / 2,00 / 2,50 / 3,00 ct synthétiques, 1,20 / 1,50 / 2,01 ct naturels ; la liste « Recommended Diamond Options » affiche le prix : 1,20 ct synth. 2 316 € ; 1,50 ct 2 532 € ; 2,00 ct 2 765 € (V) | oui | OK |
| Fiche : choix « 1.50ct, Lab, Oval, D, VVS2, IGI » | liste | Total passe de 2 316 € à 2 532 € ; spécifications mises à jour | +216 € | OK (V) |
| Fiche : Metal (Rose/White, Yellow/White, 18k White, 18k Yellow, 18k Rose, Platinum) | liste | pour la bague testée, « 18k White » et « 18k Yellow » donnent un total (2 316 €) ; **« Rose/White », « Yellow/White », « 18k Rose Gold » et « Platinum » affichent « Total — »** (combinaison indisponible, aucun message) | oui | **partiel** (V) |
| Fiche : Ring Size (F US 3 à Q½ US 8,75, 25 valeurs) | liste | M (US 6,50) présélectionné ; la taille est reportée au panier | 0 | OK (V) |
| Size Guide | bouton | présent ; non ouvert | – | non testé |
| SPECS / DESCRIPTION | onglets | tableaux : style, métal, poids total 1,79 ct, forme, poids centre 1,7 ct, couleur, pureté, certificat, type « Lab Grown » | – | OK (V) |
| Customisation / Financing / Delivery / FAQs | volets | présents ; non lus un par un (contenu des pages équivalentes lu : voir Prix) | – | partiel |
| Choose a different diamond | lien | présent | – | non suivi |
| Ready made rings | bouton | « versions en stock pour une livraison plus rapide » | – | non testé |
| Make an enquiry | bouton | ouvre un formulaire (nom, courriel, téléphone, consentement) ; non rempli | – | présent |
| Barre flottante Description / Specs / Video / Enquire | boutons | présents | – | non testés |
| Play (vidéo) | bouton | présent ; vidéo non lue | – | non testé |
| Add to basket | bouton | avec 1,50 ct synth. + Yellow/White + M : ouvre le panier et affiche « added to your basket » ; avec une combinaison « Total — » le bouton est désactivé (V) | – | OK (V) |
| Panier : quantité, code promo, Update basket, Change address | champs | présents ; non modifiés | – | présents |
| Panier : Pay with PayPal / Proceed to checkout | boutons | non actionnés (caisse = chemin interdit) | – | non testés |
| Lien « Remove » | lien | présent ; non suivi | – | non testé |

## Options disponibles
- **Diamant (fiche testée)** : synthétique 1,20 à 3,00 ct (D, VVS2 ou VS1, IGI) et naturel 1,20 à 2,01 ct (E-F, SI1 ou VS2, GIA) (V).
- **Métal** : 18 k jaune, blanc, rose ; combinaisons or bicolore ; platine ; alliances en platine et palladium (V pour la liste).
- **Taille** : 25 tailles, de F (US 3) à Q½ (US 8,75) (V).
- **Styles** : solitaire, trois pierres, pierres de côté, halo, jaune fantaisie, gemmes (V). **Formes** : rond, ovale, émeraude, coussin, radiant, poire, marquise, princesse, asscher, cœur (V). Moissanite proposée (V).
- Sur mesure : CAO, modèle en cire, retouche d'un bijou, gravure, pierres cachées, métal de famille (V, page `bespoke-design`).
- Non vu : gravure en ligne dans le panier, choix de griffes à la carte, 3D.

## Prix, délais, retours, garanties
- **Prix** : affiché TTC en euros (TVA 21 % incluse pour l'UE) ; « Price From » en en-tête + total selon le diamant ; mensualités affichées (24 × 109,85 € pour 2 316 €) (V). En-tête contradictoire : la fiche annonce 2 765 € et « Price From 1 554 € » alors que le total chargé par défaut est 2 316 € (V ; cause : prix du diamant présélectionné non répercuté, I).
- **Panier** : 1 article 2 532 €, expédition forfaitaire à Dublin, total 2 532 €, PayPal proposé (V). La livraison en Irlande est gratuite par courrier recommandé An Post ; DHL à l'étranger, coût à la caisse (V, page `shipping-policy`).
- **Délai** : livraison 1 à 5 jours ouvrés ; sur mesure jusqu'à 5 semaines ; fabrication « 3 à 4 semaines » (V, FAQ et politique d'expédition) ; métal hors stock ou remake : jusqu'à 4 semaines.
- **Retours** : 14 jours remboursés (hors articles sur mesure), échange jusqu'à 30 jours ; au-delà, remboursement à la valeur du marché du diamant (V, page `returns`, cache du 22/01). Pour le sur mesure, la page de conception dit « 30 jours », bague non portée, design non « outlandish » (V, cache du 18/04) : **contradiction entre les pages** (V).
- **Garanties** : mise à taille gratuite 30 jours ; contrôle et nettoyage sonique offerts à vie ; rapport d'évaluation indépendant sur chaque bague (V).
- **Certificats** : GIA, IGI, HRD (V).
- **Paiement** : PayPal au panier ; Humm (6, 9 ou 12 paiements, taux 11,99 % après la période, frais de dossier 40 € et 3,50 € par mois au-dessus de 500 €) ; plan interne 0 % avec 10 % d'acompte sur 3, 6 ou 12 mois, retrait après le dernier paiement (V, page `finance`, cache du 22/11).

## Confiance et service
- 900+ avis Google notés 5/5 (V, déclaration du site) ; « Jeweller of the Year » 12 fois (affirmation du site, S).
- Atelier intégré : designers, orfèvres et sertisseurs dans le même immeuble (V, texte) ; or poinçonné à Dublin Castle (V, texte).
- Rendez-vous en boutique à Dublin et à Cork ou en visio ; WhatsApp, téléphone (V).
- Libellé du synthétique : « Lab Grown » ; FAQ : « also known as synthetic or cultured diamonds » (V).
- Preuves de fabrication : modèle en cire montrable ou envoyé ; pas de photos ni de vidéos de commande trouvées (V pour les pages lues).

## Points forts à retenir pour JR Diamond
1. **Diamant listé avec son prix à côté de chaque option, naturel et synthétique côte à côte** (preuve : liste « Recommended Diamond Options »).
2. **Modèle en cire d'essai avant fabrication, envoyé par la poste si besoin** (preuve : page `bespoke-design`).
3. **Plan de paiement interne 0 %, 10 % d'acompte** (preuve : page `finance`).
4. **Expédition gratuite en Irlande, suivie, et mise à taille gratuite 30 jours** (preuve : page `shipping-policy`).
5. **Rapport d'évaluation indépendant fourni avec chaque bague** (preuve : FAQ).
6. **Mensualités affichées sur la fiche** (24 × 109,85 €).

## Défauts observés
- **Combinaisons indisponibles non expliquées** : « Total — » sans message pour 4 métaux sur 6 (V).
- **En-tête de prix contradictoire** avec le total (2 765 € contre 2 316 €, V).
- Aucune vue 3D ni 360° : photo unique de la bague en 18 k jaune pour toute option de métal (nom de fichier inchangé après sélection, V).
- Politique de retour du sur mesure contradictoire entre pages (14 j, 30 j) (V).
- Pas de gravure ni de choix de griffes en ligne (V).
- Aucune photo de fabrication d'une commande.

## Limites de l'audit
- Une seule fiche (SR1016) actionnée ; autres fiches, quiz, « Load more », filtres en liste, rendez-vous, vidéo, guide des tailles non testés.
- Pas de caisse (chemin interdit), pas de paiement.
- Une bague a été ajoutée à un panier anonyme (session jetable, rien envoyé).
- Affichage iPhone : aucun débordement horizontal, 3 listes visibles sur la fiche ; mesure de l'image principale non aboutie (délai de 30 s dépassé par la méthode de détection).
- Pages de politique lues dans un cache daté du 22/01, 18/04, 22/09 et 22/11/2026.

## Mesures de chargement (image principale ≥ 500 px)
| Page | Ordinateur | iPhone 13 |
|---|---|---|
| Fiche SR1016 | 1,8 s et 1,7 s (V) | non mesuré |

## Sources
- https://www.bespokediamonds.ie/engagement-rings/ et fiche `.../1-82ct-carat-oval-cut-ring-sr201/`
- https://www.bespokediamonds.ie/our-bespoke-diamonds-easy-to-use-shopping-bag/
- https://www.bespokediamonds.ie/robots.txt, /returns/, /bespoke-diamonds-shipping-policy/, /faq/, /wedding-ring-engagement-ring-finance/, /bespoke-design/, /custom-engagement-rings/
