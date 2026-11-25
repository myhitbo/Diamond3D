# Audit : W.R. Metalarts

- **Site** : W.R. Metalarts (Brattleboro, Vermont), https://www.wrmetalarts.com/ ; page de départ https://www.wrmetalarts.com/pages/custom
- **Date** : 15/11/2026 ; **appareils** : Chromium ordinateur (1366x900) et affichage iPhone 13
- **Statut** : **partiel**. Aucun configurateur : le « constructeur » est un processus de consultation (visio ou atelier). Seule la fiche catalogue d'un solitaire (`/collections/solitaires/products/the-simple-solitaire`) a des options. « Add to cart » non cliqué (`/cart/add` interdit par robots.txt, vérifié) ; le panier n'a été ouvert que vide.
- Convention : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Page `/pages/custom` | Texte du processus en 5 étapes (consultation, design, approbation et sourcing, production, livraison ou retrait), 8 questions-réponses, tableau « chaîne vs atelier », bouton « Book a Free Design Consultation Meeting » [V] |
| 2. Consultation | Visio Zoom ou en personne à Brattleboro, gratuite, 30 min [V `/pages/schedule-your-free-design-consult-today`] ; formulaire non rempli |
| 3. Design | Croquis à la main et/ou rendus 3D, « three rounds of sketches » [V] |
| 4. Catalogue (alternative) | Fiche : taille 1 à 17 par quart, boîte en bois (non / 1 fente +40 $ / 2 fentes +40 $), métal (5 choix), quantité, ajout au panier [V] |
| 5. Panier | Non atteint avec un article (ajout interdit) ; panier vide : « Your cart is empty » [V `/cart`] |

## Contrôles vérifiés

Page `/pages/custom` : 49 contrôles visibles sur ordinateur, 23 sur iPhone (liste `controls.cjs`).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu SHOP / CUSTOM DESIGN / HEIRLOOM PROJECTS / OUR WORK / ABOUT US / OUR ETHICS / CONTACT | liens | Navigation ; ouverts : shop-page, heirloom-projects, our-ethics (200). OUR WORK, ABOUT US, CONTACT non ouverts (non utiles) | – | OK |
| Search / Cart, 0 | liens | `/search` non ouvert (recherche : prudence) ; `/cart` ouvert : panier vide | – | OK |
| Book a Free Design Consultation Meeting | lien | Page de prise de rendez-vous (200), 27 titres « LET'S GET STARTED » répétés (bannière défilante), choix Zoom / en personne | gratuit | OK ; formulaire non rempli |
| 8 boutons FAQ (coût, délai, « je ne sais pas ce que je veux », taille, pierres/or existants, hors Vermont, or et pierres, qui fabrique) | accordéon | Chaque réponse s'ouvre (8/8 lus) | – | OK |
| Pied de page : How it Works, Heirloom Projects, Book a Consult, About Us, Our Ethics, Client Love, Our Blog, Contact, All Products, Ready to Ship, Loose Gemstones, Request a Ring Sizer, Gift Cards, Refund/Privacy/Terms/Accessibility | liens | Ouverts : stone-inventory, ready-to-ship, ring-sizer, refund-policy (200). Les autres non ouverts | – | OK |
| Fiche solitaire : Ring Size | select | 1 à 17 par 0,25 (65 valeurs) | 0 | OK |
| Wooden Ring Box | select | 3 valeurs | +40 $ affiché dans le libellé ; le prix d'en-tête relevé n'a pas changé (5 041 $) ; le bouton « Add to cart » n'a pas été relu après ce choix | OK ; effet sur le total non confirmé |
| Metal : 14K Rose / White / Yellow gold | radio | Libellé « Metal: … » change | 5 041 $ (identique) | OK |
| Metal : 14K Palladium White Gold | radio | idem | 5 370 $ | OK |
| Metal : Platinum | radio | idem | 5 648 $ | OK |
| Quantity −/+ | bouton | Non actionné | – | non testé (peu utile) |
| Add to cart | bouton | Non cliqué : `/cart/add` interdit | – | non testé (robots.txt) |
| More payment options / Shop (paiement accéléré) | bouton | Non cliqué (règle : jamais de bouton de paiement) | – | non testé |
| Image zoom (galerie, ~19 vignettes) | bouton | Ouvre une visionneuse (dialogue détecté) | – | OK |
| Play video | bouton | Charge un lecteur vidéo (2 `video`, 5 `iframe` dans la page) | – | OK |
| Description / Dimensions / Materials / Shipping | accordéon | Ouverts et lus (voir plus bas) | – | OK |
| View store information | bouton | Non actionné | – | non testé |
| Tri des produits « Ready to ship » (9 critères) | select | Liste lue, non actionnée ; bouton « Load more » non actionné (10/104) | – | non testé |

## Options disponibles

- **Métaux (fiche solitaire)** : or 14 k rose, blanc, jaune ; or blanc au palladium 14 k ; platine [V]. Or 18 k : non proposé sur cette fiche [V].
- **Pierres** : sur la fiche, pierre ronde 0,5 ct (4,5 mm) : diamant de laboratoire VVS1 en vitrine, ou diamant recyclé 0,5 ct VS1/2, G+, pour d'autres tailles « message for custom order » [V]. Pierres hors diamant : saphir du Montana, péridot d'Arizona, aigue-marine, goshénite, etc. [V titres du catalogue]. Diamants canadiens d'origine identifiée et diamants de laboratoire [V `/pages/our-stone-inventory`].
- **Tailles** : 1 à 17+, quarts et demis, sans supplément [V].
- **Finitions** : mat mentionné en description [V]. Gravure : « engraved pieces » exclues du retour [V]. Pas de choix de monture/griffes/pavage en ligne [V].
- **Catalogue** : 104 produits « Ready to ship » (retrait ou expédition le jour ouvré suivant, à la taille indiquée) ; autres : sur commande, tri par type et ambiance (Vintage, Nature, etc.) [V].
- **Services** : consultation visio/atelier, projets de bijou de famille (reset de pierre, refonte de l'or, combinaison) [V], mesureur de bague gratuit (0,00 $) [V], cartes cadeaux, retrait à l'atelier.
- **Vues** : galerie photos avec zoom, vidéo ; pas de 3D, 360°, AR ni essayage virtuel [V].

## Prix, délais, retours, garanties

- **Prix** : fourchette annoncée « most projects between $5,000 and $25,000 », minimum sur mesure 2 000 $, ajustable à 2 000-20 000 $ [V `/pages/custom`]. Prix catalogue affiché (solitaire 5 041 $, 0,5 ct ; ring « Ready to ship » à partir de 688 $ [V]). Pas de décomposition du prix (métal / pierre / façon) [V]. Financement : « 0 % APR or from $244.42/mo with shop » (Shop Pay Installments) [V]. Devise USD uniquement visible [V].
- **Délai** : le texte annonce « 8-10 weeks » de fabrication une fois le design final ; la FAQ dit « 2-10 weeks » + design « 2-12 weeks » ; la page de consultation « about 10 weeks » [V, trois chiffres différents]. Option « rush production plus expedited shipping » sans tarif [V]. Fiche : « Estimated delivery between January 20 and January 26 » (date de livraison automatique, contraire au délai de fabrication de 8-10 semaines [I]).
- **Retours** : 48 h pour contacter, 7 jours ouvrés pour renvoyer, au cas par cas, pour les articles de moins de 750 $ avec frais de traitement ou avoir ; « Custom work, including engraved pieces, are not eligible for returns or refunds » ; remise à taille possible avec frais éventuels, pas d'échange de taille ; frais de retour à la charge du client [V `/policies/refund-policy`].
- **Garantie** : « If We Made It Wrong, We Fix It » (intertitre de confiance) [V] ; aucune durée chiffrée lue [V].
- **Certificats** : pas de GIA/IGI affiché ; traçabilité par code d'alliage et documents de pierre sur demande [V `/pages/our-stone-inventory`].
- **Libellé synthétique** : « lab-grown » [V].
- **Livraison** : retrait à Brattleboro (« usually ready in 5+ days »), expédition US et monde ; frais non vus (pas de panier rempli) [V partiel].

## Confiance et service

- Avis : témoignage cité sur Heirloom Projects et page « Client Love » (non ouverte) ; pas de note agrégée vue [V partiel].
- Preuves de fabrication : « Before your piece leaves the studio, we photograph and film it » (étape 5) ; équipe nommée (Will, George, Martin, Vanessa) ; « never sent out to a factory » ; vidéos produit (Play video) ; avant/après d'héritage [V].
- Suivi de commande : mises à jour fréquentes citées par un client [V] ; pas d'outil de suivi vu [V].
- Éthique : or Fairmined certifié, gemmes traçables nommées [V `/pages/our-ethics`].
- Langues : anglais seul [V]. Contact : studio@wrmetalarts.com [V]. Pas de chat vu ni WhatsApp.

## Points forts à retenir pour JR Diamond

1. **Étape 5 « on photographie et on filme avant l'envoi »** : même promesse que JR Diamond, déjà posée comme argument (preuve : `/pages/custom`, étape 5).
2. **Traçabilité par code d'alliage et dossier de pierre « ask us at any time »** (preuve : `/pages/our-stone-inventory`).
3. **Tailles 1-17 sans supplément, annoncé en gras** et répété (FAQ, éthique, catalogue) ; réduit une objection fréquente.
4. **Prix de départ clair sur le catalogue et fourchette sur mesure** annoncée dès la page de départ (5 000-25 000 $) ; l'écart principal de JR Diamond reste « Sur devis ».
5. **Catalogue « Ready to ship »** pour les clients pressés (104 articles, expédition J+1) (preuve : `/collections/ready-to-ship`).
6. **Page projets d'héritage** structurée en trois cas (reset, refonte de l'or, combinaison) avec avant/après glissant : modèle pour la page « bijou de famille ».
7. Écart de prix par métal visible sur la fiche (+329 $ palladium, +607 $ platine) : l'effet du métal est expliqué par le prix du bouton.

## Défauts observés

- Aucun visualiseur ni configurateur : l'image ne change pas avec le métal (vignette identique après les 5 choix) [V].
- Délais contradictoires entre trois pages (8-10 semaines, 2-10 + 2-12, ~10) [V].
- « Estimated delivery January 20-26 » sur une fiche présentée comme faite sur commande [V, I sur l'incohérence].
- Option « Wooden Ring Box +$40 » : prix d'en-tête inchangé après choix (5 041 $) ; effet sur le total non confirmé.
- Politique de retours : sur mesure non remboursable, délai de 48 h pour signaler [V].
- 27 titres « LET'S GET STARTED » répétés sur la page de rendez-vous (artefact visuel) [V].
- Fiches : texte d'accordéon « Description » avec code résiduel (`400;">`) visible [V].

## Limites de l'audit

- Aucun formulaire rempli, aucun compte, aucun paiement ; panier non rempli car `/cart/add` interdit (robots.txt `Disallow: /cart/`) : frais de livraison, moyens de paiement du panier non vus.
- Une seule fiche catalogue testée en détail ; pages OUR WORK, ABOUT, CLIENT LOVE, CONTACT et blog non lues.
- Temps d'apparition du visuel principal (fiche solitaire) : ordinateur DOM 1,2 s, image 1,5 s ; iPhone DOM 0,9 s, image 1,3 s (une mesure, via proxy, indicative).
- Avertissement : le robots.txt invite les agents à utiliser des interfaces UCP ; non utilisées. Le suivi des requêtes pendant les tests n'a montré aucun POST `/cart/add`.

## Sources

- https://www.wrmetalarts.com/pages/custom ; /pages/shop-page ; /pages/our-stone-inventory ; /pages/our-ethics ; /pages/heirloom-projects ; /pages/schedule-your-free-design-consult-today
- https://www.wrmetalarts.com/collections/ready-to-ship ; /collections/solitaires/products/the-simple-solitaire ; /products/ring-sizer-1
- https://www.wrmetalarts.com/policies/refund-policy ; /cart ; /robots.txt
- Captures et listes de contrôles : scratchpad `audit/us/wr-metalarts/` (hors dépôt)
