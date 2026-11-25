# Audit : Simon Alexander Jewellers (Adelaide, Australie-Méridionale)

- **Site** : https://www.simonalexander.com.au ; page de départ https://www.simonalexander.com.au/collections/lab-grown-engagement-rings ; fiche étudiée : `/products/sasha-round-brilliant-cut-engagement-ring-lab-grown`
- **Date** : 15/11/2026 (séance d'audit menée le 25/11)
- **Appareils** : Chromium ordinateur (1366×900, locale en-AU) et affichage iPhone 13 (Playwright, proxy de la session)
- **Statut** : **partiel**. Le défi Shopify 429 signalé n'est pas apparu : les pages se sont ouvertes en 200 du premier coup (aucun nouvel essai, aucun contournement). Le parcours jusqu'à la fiche, ses options et ses prix est vérifié. Non fait : ajout au panier (`/cart/add` interdit par robots.txt), page `/cart` (non ouverte : mon script combiné a été refusé par la session, je n'ai pas retenté), réservation de pierre (bouton de paiement), filtres de la collection.
- **robots.txt** : `Allow: /` ; `Disallow: /cart/` (donc `/cart/add`, `/cart/add.js`) et `/collections/*sort_by*` (tri non utilisé). Aucune adresse interdite ouverte.
- Marques : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| Collection lab-grown [V] | `/collections/lab-grown-engagement-rings` | grille de fiches (2 pages), boutons FILTER et SORT BY, pages par forme (rond, ovale, coussin, émeraude, poire, princesse), pages 1 carat / 2 carats |
| Fiche bague [V] | `/products/<modèle>` | 5 vues (360° + 4 photos), métal (4), couleur (3), carat (4), taille de doigt (liste), « Simon's five » (5 pierres réelles), bague ou pierre seule, « Reserve this stone in this ring » |
| Fiche pierre [V, partiel] | boutons « View stone · 360° » | présents sur les 5 cartes, non ouverts |
| Panier / paiement [non vérifié] | `/cart` | non atteint (voir statut) ; livraison et paiement lus dans les pages de politique |
| Sur mesure [V] | `/pages/custom-engagement-rings-adelaide`, `/pages/book-a-viewing` | liens relevés, rendez-vous « sans engagement » |

## Contrôles vérifiés

Le contrôleur liste 165 contrôles visibles sur ordinateur et 146 sur iPhone (page collection) [V]. Fiche : 5 boutons de vue, 7 boutons métal/couleur, 4 boutons radio carat, 1 liste, 5 cartes pierre, 2 champs, 1 bouton de réservation.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Platinum / 18ct / 14ct / 9ct gold | 4 boutons | titre « In 18kt White Gold with the 1.05 ct E VS2 diamond… » ; la vidéo/photo reste sur la même couleur | $3,400 / $3,350 / $3,050 / $3,000 en blanc (lus 0,9 s après chaque clic ; la pierre retenue change aussi, donc comparaison métal seul non fiable [I]) | OK [V] |
| White / Yellow / Rose | 3 boutons | « In 9ct Rose Gold with… » ; fichiers vidéo distincts `spin-sasha-w/y/r.mp4` | 9 ct : blanc 2 400 $, jaune 2 400 $, rose 2 350 $ | OK [V] |
| Carat 1.00 / 1.50 / 2.00 / 3.00 ct | 4 radios | « stones meet Simon's standard at about N ct » ; les 5 pierres sont recalculées ; l'adresse reçoit `?variant=` | 18 ct blanc : 3 550 / 4 050 / 5 400 / 6 950 $ | OK [V] |
| Finger Size | liste (39 valeurs) | de « Select your size » et « Not sure — it's a surprise (first resize complimentary) » à Z (US 12½) ; H à P½ sans mention, P½ à Z « larger size » ; correspondance US affichée | aucun | OK [V] |
| 5 cartes pierre (Most affordable, Cleanest, Balanced choice, Whitest…) | boutons | sélectionne la pierre : titre « …with the 1.03 ct G VS2 diamond you have chosen » | 1 pierre à 1,00 ct : 3 400 / 3 450 / 3 550 / 3 550 / 3 600 $ (bague montée) | OK [V] |
| In this ring / Stone only | 2 onglets | « Stone only » : « the 1.09 ct E VVS2 diamond… » | 1 250 $ la pierre seule, contre 3 600 $ montée (monture ≈ 2 350 $ [I]) | OK [V] |
| 360° view (vidéo) | bouton | lecteur vidéo 678×678 (mp4 en boucle, « Drag to rotate ») | — | OK [V] |
| View 1 à 4 | 4 boutons | 4 photos `gal-sasha-w-1…4.jpg` | — | OK [V] |
| View stone · 360° | 5 boutons | présents ; non cliqués | — | non testé (lecteur tiers possible, non vérifié) |
| Your email / Mobile (optional) | 2 champs | « so Simon can confirm your stone with you » | — | non remplis |
| Reserve this stone in this ring | bouton | paiement intégral puis réservation de la pierre ; appelle le panier Shopify | prix affiché | **non cliqué** (panier interdit par robots.txt, bouton de paiement) |
| Natural · GIA / Lab-grown · IGI | 2 liens | le lien naturel mène à la fiche équivalente (`?variant=`) | texte : « same design with a natural diamond: $9,350 in 18kt White Gold at 1.00ct » | lien lu, non suivi |
| FILTER / SORT BY (collection) | 2 boutons | présents ; non ouverts (tri : `sort_by` interdit) | — | non testé |
| Pages par forme, 1 carat, 2 carats | liens | relevés | — | non suivis |
| Book a private viewing (×5) | liens | `/pages/book-a-viewing` (avec `?product=` depuis la fiche) | — | lus, formulaire non rempli |
| Chat with Aria | bouton | assistant de chat ; non ouvert | — | non testé |
| Search, Cart | liens | `/search`, `/cart` | — | non ouverts |
| Subscribe (e-mail) | champ + bouton | lettre d'information | — | non rempli |
| Pied de page (About, Contact, Lifetime Care, Privacy, Terms, Shipping & Returns, About Zip, tél., e-mail, Facebook, Instagram) | liens | politiques lues : livraison, retours, soins, Zip, conditions | — | lus [V] |
| Pop in for a quick fitting | lien | `/pages/book-a-viewing` | — | non suivi |

## Options disponibles

- **Métal** : platine, or 18, 14 et 9 ct [V]. Couleurs : blanc, jaune, rose [V].
- **Carat** (diamant vedette) : 1,00 / 1,50 / 2,00 / 3,00 ct [V].
- **Origine** : lab-grown (IGI) et naturel (GIA), deux fiches liées par modèle [V].
- **Formes** (pages dédiées) : rond, ovale, coussin, émeraude, poire, princesse [V] ; marquise absente [V].
- **Monture** : modèles nommés (Sasha, Nadia, Grace, June, Chloe, Casey, Fiona, Katie…), solitaire 4 griffes, halo, pavé, bande fendue ; pas de choix de griffes ni de bande dans la fiche [V].
- **Pierre** : « Simon's five », cinq pierres IGI sélectionnées par règle (D–G, VS2–VVS1, taille excellente, sans fluorescence) parmi un stock (202 pierres à 1 ct ce jour-là) [V].
- **Taille de doigt** : H à Z, US en regard, option « surprise » [V].
- **Gravure** : « Engraving, at no charge » ; aucun champ de saisie trouvé dans la fiche [V/I].
- **Pierre seule** : possible [V].

## Prix, délais, retours, garanties

- **Prix** : en dollars australiens, GST comprise [V, conditions]. Prix affiché en gros, bague montée avec la pierre choisie ; « From $2,400 in 9ct gold at 1.00ct » ; « Price guide » 18 ct jaune : 3 500 / 4 050 / 5 350 / 6 650 $ à 1,00 / 1,50 / 2,00 / 3,00 ct [V]. Décomposition : bague / pierre seule (1 250 $ pour une pierre), pas de détail métal-façon [V]. Pas de financement en ligne : Zip « in our boutique for eligible customers, not at online checkout » [V].
- **Délai** : fabrication « 4–6 weeks » ; livraison gratuite 3 à 5 jours ouvrés après achèvement ; bandeau « order by Tuesday 1 December » pour Noël [V].
- **Livraison** : gratuite en Australie, retrait au magasin (14 King William Street), envoi suivi avec signature ; hors Australie, devis [V].
- **Retours** : « we don't offer refunds or exchanges for change of mind » (fait sur mesure) ; remboursement si défaut ou non-conforme ; première mise à taille offerte [V, `/pages/shipping-returns`]. Acompte non remboursable sur commande sur mesure une fois le dessin ou la fabrication commencé ; devis valables 14 jours [V, conditions]. Pierre vendue entre-temps : pierre équivalente ou remboursement intégral [V].
- **Garanties** : garantie de fabrication à vie pour le premier propriétaire ; nettoyage et contrôle annuels ; évaluation d'assurance ; premier rhodiage offert ; ne couvre pas pierres perdues ou abîmées ni l'usure [V, `/pages/lifetime-care`].
- **Certificats** : IGI pour le lab-grown, GIA pour le naturel, plus certificat Simon Alexander ; numéro communiqué une fois la pierre réservée [V].

## Confiance et service

- Avis : « 4.9 from 30 Google reviews », lien Google Maps ; trois citations sur la fiche [V].
- Rendez-vous privé « sans obligation », téléphone (08) 8231 0700, e-mail, assistant « Aria » (non ouvert) [V].
- Fabrication : « Australian made », atelier « at our Adelaide bench », « You approve every design before it's made » (croquis et rendus) ; aucune photo ni vidéo d'atelier trouvée sur la fiche, pas de suivi de commande en ligne : « we'll contact you when it's ready » [V].
- Libellé du synthétique : « lab-grown » partout, avec « IGI certified » [V]. Langue : anglais seul. Devise : AUD seul.
- Sanfl : fabricant officiel des bagues de la finale de football SANFL [V].

## Points forts à retenir pour JR Diamond

1. **Prix unique clair avec pierre réelle incluse** : « Price includes your IGI-certified lab-grown diamond », prix lié à la pierre choisie (carte pierre : 3 400 à 3 600 $) [V, fiche].
2. **Cinq pierres sélectionnées par règle publiée** (couleur, pureté, taille, fluorescence), de la moins chère à la plus fine, avec le stock total (202 pierres) [V].
3. **Vue « pierre seule » avec son prix** (1 250 $ contre 3 600 $ montée) : le prix est expliqué [V].
4. **Comparaison naturel / lab-grown sur la même fiche** avec l'écart chiffré (9 350 $ en naturel contre 3 550 $) [V].
5. **Vidéo 360° par couleur de métal** (3 fichiers mp4) et 4 photos [V].
6. **Prix d'appel et grille par carat** sous forme de « price guide » [V].
7. **Pierre indisponible** : choix d'une équivalente au même prix ou remboursement, annoncé avant l'achat [V].
8. **Rapidité** : image principale visible en 0,86 s (ordinateur), 0,71 s (iPhone) [V].
9. **Taille de doigt avec option « surprise »** (première retouche offerte) [V].
10. **Garantie à vie et soins** détaillés avec exclusions explicites [V].

## Défauts observés

- Pas de configurateur : monture figée par modèle, aucune option de griffes, de bande ou de pavé [V].
- Prix variant de façon peu lisible : après un changement de métal, la pierre sélectionnée change aussi, et les écarts de prix mêlent métal et pierre [V/I].
- Sans financement en ligne ; sans photo ni vidéo d'atelier ; sans suivi de commande [V].
- Aucun retour pour changement d'avis, acompte non remboursable [V].
- Anglais seul, aucune devise secondaire [V].

## Limites de l'audit

- Ajout au panier, page panier, moyens de paiement du paiement et frais au récapitulatif non vérifiés : `/cart/add` est interdit par robots.txt, `/cart` non ouvert (blocage de ma session), « Reserve this stone » est un bouton de paiement.
- Filtres, tri (interdit), chat Aria, lecteur 360° des pierres, gravure (champ), formulaire de rendez-vous non actionnés.
- Prix relevés à un instant, sur une seule fiche ; stock de pierres variable.
- Le défi 429 annoncé n'est pas apparu à cet audit : l'état « bloqué » de l'étape précédente ne s'applique plus, mais rien ne garantit qu'il ne revienne pas.
- Contrôle mobile : timing et liste de contrôles uniquement, parcours complet fait sur ordinateur.

## Sources

- https://www.simonalexander.com.au/collections/lab-grown-engagement-rings [V]
- https://www.simonalexander.com.au/products/sasha-round-brilliant-cut-engagement-ring-lab-grown [V]
- https://www.simonalexander.com.au/pages/shipping-returns [V]
- https://www.simonalexander.com.au/pages/lifetime-care [V]
- https://www.simonalexander.com.au/pages/zip-own-it-now-pay-later [V]
- https://www.simonalexander.com.au/pages/terms-conditions [V]
- https://www.simonalexander.com.au/robots.txt [V]
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/au/simon-alexander-jewellers/`
