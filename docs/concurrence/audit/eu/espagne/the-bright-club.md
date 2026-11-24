# Audit : The Bright Club (bagues de fiançailles en synthétique, Madrid)

- **Site** : The Bright Club (marque espagnole, showroom C. del Arenal 7, 28013 Madrid).
- **Adresse de départ** : https://thebrightclub.es/products/anillo-duchess (fiche de la bague Duchess ; le site n'a pas de configurateur 3D).
- **Date** : 15/11/2026 (date du lot). Contrôles faits le 24/11/2026.
- **Appareils** : Chromium ordinateur 1366 x 900 ; Chromium en affichage iPhone 13.
- **Statut** : **partiel**. La fiche à options est parcourue ; le panier n'est pas ouvert : `/cart` est interdit par robots.txt (V : https://thebrightclub.es/robots.txt, outil de contrôle), et le bouton « Añadir al carrito » n'a pas été actionné.
- Marques : V vérifié, I inféré, S supposé. Prix en euros TTC tels qu'affichés.

## Parcours

| Étape | Options |
|---|---|
| Fiche d'un modèle | Forme (7), couleur de l'or (3), poids du diamant (4), bras de la bague (2), taille de doigt (liste), gravure intérieure (champ), galerie photo (6 vues), curseur de carats sur une main |
| Autres modes de commande | Chat WhatsApp, rendez-vous (showroom ou en ligne), page « Personaliza tu joya » (plus de 700 000 diamants IGI ou GIA, sur conseil de l'équipe) |
| Panier | Non atteint (interdit par robots.txt) |

Le catalogue de départ est https://thebrightclub.es/collections/anillos-de-compromiso : solitaires, halo, trilogies ; or blanc, jaune, rose, avec gravure (V).

## Contrôles vérifiés

Base : forme ronde, or blanc 18 k, 0,50 ct, bras standard 1,8 mm, taille 07 (15,29 mm) = **1 150 €** (V).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Forme : Redondo / Esmeralda / Pera / Marquise / Cushion / Radiant / Oval | pastille (7) | change la forme de la pierre | **1 150 € pour toutes** | OK : aucun écart de prix entre formes |
| Couleur : Oro Blanco / Rosa / Amarillo 18 k | pastille (3) | change le métal | 1 150 € pour toutes | OK |
| Peso del diamante 0,50 ct | bouton | sélection | 1 150 € | OK |
| Peso 0,70 ct | bouton | idem | **1 350 €** | OK |
| Peso 1,00 ct | bouton | idem | **1 550 €** | OK |
| Peso 1,50 ct | bouton | idem | **1 850 €** | OK |
| Brazo de anillo : Standar 1.8 mm / Plus 2.1 mm | liste | épaisseur du bras | Plus : **+100 €** (V : libellé « + 100 € ») | liste lue ; clic sur « Plus » non fait |
| Talla : 07 (15.29 mm), 08 (15.61 mm), 09 … | liste | taille de doigt avec diamètre en mm | non mesuré | liste lue ; autres tailles non cliquées |
| Grabado interior | champ texte | « Grabado incluido en el precio » | 0 € | champ présent, non rempli (règle) |
| Curseur de carats (0,5 à 8, pas 0,1) sur la main | curseur | affiche la taille d'un diamant de ce poids sur une main ; position « 3.0 quilates » | **aucun changement de prix** (1 150 €) | OK : visuel seul, sans lien avec le prix |
| Galerie : vues 0 à 5, flèches | bouton | photos : bague, portée à la main, autres angles | — | présent ; 6 vues (V : contrôles « Go to item 0 à 5 ») ; effet non cliqué |
| Agregar a la lista de deseos (cœur) | bouton | — | — | présent, non cliqué (compte requis [I]) |
| Añadir al carrito | bouton | — | — | **non actionné** (panier interdit) |
| Hablar por WhatsApp | lien | `api.whatsapp.com/send?phone=34682333306` | — | présent ; **non ouvert** |
| Chatea con nosotros | bouton | chat | — | présent ; non ouvert |
| Guía de tallas | lien | page de guide | — | présent ; page non lue |
| Consulta para entrega inmediata | lien | WhatsApp | — | présent ; non ouvert |
| Personaliza tu joya | lien | https://thebrightclub.es/pages/personaliza-tu-joya | — | page lue en curl (V) |
| Pago a plazos | lien | financement | — | présent ; Klarna dans les logos de paiement (V) |
| Devoluciones | lien | `/policies/refund-policy` | — | lue (V) |
| Description / Detalles del anillo / Detalles del diamante | accordéon | déplie le texte | — | OK (Description lue) |
| Agenda cita (bandeau, menu, « Pedir cita ») | lien | https://thebrightclub.es/pages/reservar-cita | — | présent ; formulaire non rempli |
| Menu : Anillos de compromiso, Alianzas, Joyería, Nuestro proceso, Universo Bright | lien | navigation | — | présents ; non suivis (hors fiche) |
| Langue (Español / English), pays (España EUR) | bouton | sélecteurs | — | présents ; non actionnés |
| Compte, recherche, carrito, wishlist (icônes) | lien | `/search`, `/cart` | — | présents ; **`/search` et `/cart` interdits**, non ouverts |
| Modèles associés (Alianza Minnie, Noa, Jazz, Río, Blu, Blu Plus, Oval Band, Eternity 2.75 ct) | lien + pastilles | trois couleurs d'or chacun | — | présents, non suivis |
| Réseaux (Instagram, TikTok, LinkedIn) et pied de page | lien | — | — | présents ; non suivis |
| FAQ, Cómo elegir tu anillo, Opiniones, Cuidado de joyas | lien | — | — | présents ; non lus |

## Options disponibles

- **Formes** : ronde, émeraude, poire, marquise, coussin, radiante, ovale (7 sur la fiche Duchess ; le catalogue en liste aussi princesse, asscher, cœur selon les modèles, I).
- **Or** : blanc, rose, jaune, 18 k seulement ; bicolore sur d'autres modèles (V : menu).
- **Poids** : 0,50, 0,70, 1,00, 1,50 ct sur la fiche (la description annonce jusqu'à 2,00 ct, V).
- **Bras** : 1,8 mm (standard) ou 2,1 mm (+100 €).
- **Tailles** : échelle de la forme « 07 (15,29 mm) » en pas de 0,32 mm environ (V : 07 → 15,29 mm, 08 → 15,61 mm).
- **Gravure** : intérieure, gratuite pour le premier grabado (V : FAQ du catalogue).
- **Diamants** : de laboratoire, certificat IGI inclus (V) ; GIA ou IGI via « Personaliza tu joya » (V) ; couleurs « fancy » et pierres de laboratoire (émeraude, saphir) (V).

## Prix, délais, retours, garanties

- **Prix** : un seul prix par variante, TTC, mis à jour par poids de diamant (1 150 → 1 850 €). Le bras épais ajoute 100 €. Forme et métal ne changent pas le prix (V). Pas de décomposition.
- **Délai** : en stock 2 à 5 jours ouvrés ; stock avec gravure 5 à 7 jours ouvrés ; hors stock fabriqué « de zéro », 20 à 25 jours naturels ; juillet-août livrés à partir de septembre (V : https://thebrightclub.es/pages/condiciones-generales). La fiche annonce « Envío gratuito estimado : 20 días naturales » (V : capture).
- **Livraison** : « toda España et pays de la CEE » ; coûts calculés au panier (non vus) ; envois hors CEE avec droits à la charge du client (V : condiciones generales). La FAQ du catalogue parle d'envoi assuré gratuit (V).
- **Retours** : web : désistement dans 15 jours naturels après réception, bijou à retourner dans ces 15 jours, collecte payée par le client, essai permis mais pas de port ; **exclus des retours commerciaux : bijoux gravés, personnalisés ou sur mesure, et tailles inférieures à 9 ou supérieures à 15** (V : https://thebrightclub.es/policies/refund-policy). Showroom ou WhatsApp : bon d'achat seulement, retenue jusqu'à 300 € si usure (V).
- **Garanties** : première mise à taille gratuite dans l'année ; garantie annoncée (V : FAQ du catalogue) ; contenu détaillé de la garantie non lu.
- **Certificats** : IGI ou GIA, numéro gravé au laser sur la tranche du diamant (V : page « personaliza tu joya »).
- **Libellé du synthétique** : « diamante de laboratorio » (V) ; mention « cultivados en laboratorio » dans les textes.
- **Paiement** : cartes Visa et Mastercard, Bizum, portefeuilles numériques, virement, 3D Secure (V : condiciones generales) ; logos : American Express, Apple Pay, Google Pay, Klarna, Maestro, Mastercard, PayPal, Shop Pay, Visa (V : pied de page).

## Confiance et service

- Showroom visible à Madrid, sur rendez-vous ; horaires lundi-vendredi 10 h 30 à 20 h, samedi 11 h à 14 h (V : page showroom) ; WhatsApp, téléphone, e-mail, chat.
- Page « Opiniones » et mentions d'une expertise de 25 ans (V : en-tête du catalogue). Notes non lues.
- Fabrication annoncée « en Espagne, en or 18 k » (V : https://thebrightclub.es/pages/joyeria-diamantes-de-laboratorio-madrid). Pas de photo ni de vidéo d'atelier vues sur la fiche.
- Page « portal de devoluciones » (V : lien).

## Points forts à retenir pour JR Diamond

1. **Un prix affiché par poids de diamant** : 1 150 / 1 350 / 1 550 / 1 850 € pour 0,50 / 0,70 / 1,00 / 1,50 ct (preuve : mesure ci-dessus).
2. **Curseur de carats sur une main** : donne l'échelle visuelle d'une pierre (preuve : curseur de 0,5 à 8 ct au pas de 0,1) ; il ne change pas le prix, mais répond au besoin de « voir la taille ».
3. **Diamètre en mm à côté de la taille de doigt** (07 = 15,29 mm), utile pour la précision que cherchent les clients.
4. **Numéro du certificat gravé au laser** sur le diamant, mis en avant (V : page « personaliza tu joya »).
5. **Exceptions de retour écrites sans ambiguïté** : gravé, sur mesure, tailles hors 9-15 (V).
6. **Date de livraison estimée sur la fiche** (« 20 días naturales ») et table des délais par cas (stock, gravé, fabriqué) (V).
7. **Pourquoi 700 000 diamants** : accès à un grand stock via conseil, comparable au rôle de la Bourse de Ramat Gan pour JR Diamond [I].

## Défauts observés

- **Pas de visuel 3D ni 360°** : photos et main stylisée seulement (V).
- Forme et métal sans effet visible sur le prix ni, d'après les photos de la galerie, sur le diamant montré [I : la forme ronde restait la première image] ; le changement d'image n'a pas été mesuré.
- Le curseur de carats n'a pas de lien avec le prix : 3,0 ct affichés avec 1 150 € (V).
- Le prix s'arrête à 1,50 ct sur la fiche alors que la description annonce 2,00 ct (V).
- Le bloc « Alianzas con diamantes » en bas de page était vide au premier chargement du rendu pleine page (V : capture).
- Sans carnet de bord de fabrication ni photo d'atelier.

## Limites de l'audit

- Panier, frais de port, récapitulatif et choix de livraison non vus : `/cart` est interdit par robots.txt.
- Un seul modèle audité (Duchess). Les autres modèles et la page « Personaliza tu joya » (lue en curl, sans moteur de recherche de diamants) ne sont pas parcourus.
- Les listes Brazo et Talla ont été lues, pas toutes cliquées ; aucune pastille « Plus 2,1 mm » actionnée.
- Hand slider et image principale vérifiés sur ordinateur ; en iPhone seuls les contrôles ont été listés (107 contrôles).
- Chat, WhatsApp, rendez-vous et wishlist non ouverts (règle).
- **Temps d'apparition du visuel principal** : ordinateur 4,8 s (DOMContentLoaded) et 4,9 s (première image principale chargée), plus grande peinture 0,98 s ; iPhone 4,2 s et 4,3 s, plus grande peinture 0,62 s (V : mesures Chromium via proxy, une seule passe).

## Sources

- https://thebrightclub.es/products/anillo-duchess (contrôles, mesures, captures), 24/11/2026.
- https://thebrightclub.es/collections/anillos-de-compromiso (extrait), https://thebrightclub.es/pages/condiciones-generales, https://thebrightclub.es/policies/refund-policy, https://thebrightclub.es/pages/personaliza-tu-joya, https://thebrightclub.es/pages/joyeria-diamantes-de-laboratorio-madrid, https://thebrightclub.es/robots.txt.
