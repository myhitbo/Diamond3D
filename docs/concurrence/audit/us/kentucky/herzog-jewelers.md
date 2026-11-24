# Audit : Herzog Jewelers (Fort Mitchell, Kentucky)

- **Site** : Herzog Jewelers, https://www.herzogjewelers.com/
- **Page de départ** : https://www.herzogjewelers.com/pages/custom-ring-builder (robots.txt Shopify : `/cart/` interdit, donc `/cart/add` interdit ; le texte adressé aux agents d'IA a été ignoré)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) ; iPhone 13 pour la page de départ seulement
- **Statut** : **partiel**. Le questionnaire de départ (4 étapes) est complet ; le designer 3D n'a pas pu être ouvert (échec de chargement) ; panier non atteint.
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

Le constructeur est un questionnaire en 4 étapes qui mène à un « 3D Ring Designer » (module tiers hébergé sur jeweleros.com [V, requêtes réseau]). Page lue sur l'adresse unique, sans changement d'URL entre les étapes [V].

| Étape | Options observées [V] |
|---|---|
| Départ : « Let's start designing your ring » | 3 pastilles de métal (jaune, blanc, rose) ; 9 styles : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone ; « Start from scratch » ; bouton Skip |
| 2/4 « Choose your center stone » | bascule Natural / Lab Grown (Natural actif au départ) ; 9 formes : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » |
| 3/4 « Select your center stone size » | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carats ; « Decide later » |
| 4/4 « When do you need your ring? » | 1 - 4 weeks, 1 - 3 months, 3 - 6 months, Not sure yet |
| Designer 3D | « Something went wrong / Try again » (voir Défauts) |

## Contrôles vérifiés

Page de départ : 62 contrôles à l'ordinateur et 25 sur iPhone (liste brute par le script ; la plupart sont l'en-tête, le pied de page et le menu).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles de métal (jaune, blanc, rose) | boutons | présentes, jaune présélectionné ; non cliquées une à une | aucun prix affiché | présent [V] |
| Solitaire | carte | passe à l'étape 2/4, le choix s'ajoute en fil d'Ariane (« Solitaire ») | aucun | OK [V] |
| Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, Start from scratch | cartes | présentes ; non actionnées | - | non testé (une seule voie suffisait) |
| Skip | bouton | présent à chaque étape ; non actionné | - | non testé |
| Natural / Lab Grown | bascule | Lab Grown accepté (étape 2) ; effet sur les icônes non visible | aucun | OK [V] |
| Round | carte | passe à l'étape 3/4 (« Solitaire Round ») | aucun | OK [V] |
| Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant | cartes | présentes (icônes SVG chargées) ; non actionnées | - | non testé |
| Decide later (étapes 2 et 3) | cartes | présentes ; non actionnées | - | non testé |
| 1 carat | carte | passe à l'étape 4/4 (« Solitaire Round 1 carat ») | aucun | OK [V] |
| 0.5, 1.5, 2, 2.5, 3, 4, 5 carat | cartes | présentes ; non actionnées | - | non testé |
| 1 - 4 weeks | carte | lance le designer 3D : écran « Something went wrong » + « Try again » après environ 8 s ; la requête `POST https://www.jeweleros.com/api/create/from-ring-config/` échoue (`net::ERR_FAILED`) | aucun | **échec** [V] |
| 1 - 3 months, 3 - 6 months, Not sure yet | cartes | présentes ; non actionnées | - | non testé |
| Try again | bouton | non actionné (pas de nouvel essai pour contourner) | - | non testé |
| Accessibility Menu | bouton | présent (UserWay) | - | présent [V] |
| Search / Log in / Cart / Wishlist | liens | présents ; non ouverts | - | présent [V] |
| Schedule Appointment (Calendly) | lien | présent dans l'en-tête, vers calendly.com/herzogjewelers ; non ouvert | - | présent [V] |
| (859) 331-4653, Email Us | liens | présents (tel, mailto) | - | présent [V] |
| Chat (bulle noire, Clientbook) | bouton | présent en bas à droite ; non ouvert | - | non testé |
| Newsletter | champ | présent ; rien saisi | - | non testé |
| Fiche produit (hors constructeur) : ADD TO CART | bouton | **non cliqué : appelle `/cart/add`, interdit par robots.txt** | 6 495 $ (exemple) | non testé, panier interdit |
| Fiche produit : ADD TO WISHLIST, Drop a Hint, SHIPPING & RETURNS, SATISFACTION POLICY, INTERESTED IN CUSTOMIZATION? | boutons/accordéons | présents ; « Drop a Hint » et le formulaire de personnalisation (champs texte, e-mail, téléphone) non remplis | - | présent [V] |
| Collection « Proposal-ready engagement » : tri (Featured, Best selling, A-Z, Z-A, prix croissant/décroissant, date), filtre Gemstone, Quick view | contrôles | présents ; non actionnés | - | présent [V] |

## Options disponibles

- **Métaux (étape 1)** : or jaune, blanc, rose [V]. Titre (14 k, 18 k) et platine : non vus dans le questionnaire ; la fiche produit lue indique « 14 Karat Yellow Gold » [V].
- **Origine** : Natural, Lab Grown [V].
- **Formes** : Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant (9) [V].
- **Carats** : 0,5 ; 1 ; 1,5 ; 2 ; 2,5 ; 3 ; 4 ; 5 ; le texte annonce un carat exact réglable dans le designer [V].
- **Styles** : Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, depuis zéro [V].
- **Délai souhaité** : 1 à 4 semaines, 1 à 3 mois, 3 à 6 mois, incertain [V].
- **Vues, gravure, taille de doigt, pavage, griffes** : non observables (designer inaccessible) [V pour l'inaccessibilité].
- **Collection prête à acheter** : 36 produits « Proposal-Ready Engagement », 36 fiches avec ordre de tri et filtre de pierre [V].

## Prix, délais, retours, garanties

- **Prix** : aucun prix dans le questionnaire ni, faute d'accès, dans le designer. Les bagues prêtes ont un prix fixe, par exemple « 3 CT Elongated Step Cut Oval Lab Grown Engagement Ring $6,495.00 » (réf. 081-02625), « 1 CT Lab Grown Engagement Ring $1,999.00 », « 2 CT Oval Lab Grown $2,499.00 », « 3 CT Round Lab Grown $3,499.00 » [V, page collection]. Pas de décomposition ; « Shipping calculated at checkout » [V].
- **Livraison** : bandeau « FREE SHIPPING on your purchase of $100 or more » [V].
- **Délai du sur-mesure** : seulement le choix du client (1-4 semaines…), pas de promesse de délai du site [V pour ce qui est lu].
- **Retours** : politique de remboursement de 30 jours après réception, article inutilisé, étiquettes et emballage d'origine, retour aux frais du client, remboursement sous 10 jours ouvrables ; **ventes en solde, cartes cadeaux, articles personnalisés et commandes spéciales non remboursables** [V, https://www.herzogjewelers.com/policies/refund-policy].
- **Reprise des diamants** : programme d'échange (« Diamond Upgrade Policy », mis en ligne le 26/02/2026) : crédit égal au prix d'achat du diamant central pour un diamant de valeur égale ou supérieure, crédit non remboursable en espèces, rapport GIA/IGI exigé, non applicable aux montures [V, https://www.herzogjewelers.com/blogs/news/diamond-upgrade-policy]. Le texte lu mentionne aussi « all other jewelry sales are final » [V].
- **Garantie** : la fiche produit a un accordéon « Satisfaction Policy » (contenu non ouvert) et la FAQ pose « What type of guarantee do you offer? » (réponse non lue) [V pour la présence].
- **Financement** : « More payment options » sur la fiche ; FAQ « Do you offer credit or financing? » [V pour la présence, détail non lu].
- **Certificats** : « 1 Center 3.00 CT. … Lab Grown Diamond, VS1, F » indiqué dans la description ; rapport GIA/IGI mentionné dans la reprise [V] ; certificat joint à chaque fiche non vérifié.
- **Libellé du synthétique** : « Lab Grown » [V]. **Devise** : dollar ; **langue** : anglais [I].

## Confiance et service

- Magasin au 2501 Dixie Highway, Fort Mitchell, KY 41017 ; horaires mardi-vendredi 10 h-17 h 30, samedi 10 h-16 h ; téléphone (859) 331-4653 ; e-mail contactus@herzogjewelers.com [V].
- Bandeau « 100 YEARS of Custom Jewelry in Northern Kentucky and Cincinnati » et « ON-SITE JEWELRY REPAIR + estimates free of charge » [V].
- Prise de rendez-vous en ligne (Calendly), page Témoignages, FAQ, assurance bijoux, article sur la reprise de diamant [V pour la présence ; seule la FAQ a été lue].
- Aucune photo ou vidéo d'atelier, aucun suivi de commande vus sur les pages lues [V pour ces pages].

## Points forts à retenir pour JR Diamond

1. **Questionnaire de départ en 4 questions** (métal, style, pierre, carats, échéance) avant le designer : entrée rapide et adaptée aux hésitants, avec « Decide later » sur chaque étape. Preuve : étapes 1/4 à 4/4 relevées ci-dessus.
2. **« Decide later » / « Skip » à chaque question** : pas de blocage si le client ne sait pas. Preuve : bouton Skip et carte « Decide later » aux étapes 2 et 3.
3. **Question de l'échéance** (« When do you need your ring? ») : le site recommande un délai selon le besoin. Pour JR Diamond, la promesse « 14 jours ouvrés » peut y répondre directement.
4. **Reprise du diamant à valeur d'achat** (crédit égal au prix payé), avec rapport GIA ou IGI exigé : lève la peur de l'échange de la pierre. Preuve : texte de la politique de reprise du 26/02/2026.
5. **Politique de retour écrite**, avec exception claire pour le sur mesure (30 jours, personnalisés exclus). Preuve : page refund-policy.
6. **Prix fixes visibles** pour la collection prête à acheter (36 bagues, de 1 999 $ à 6 495 $ et plus), et rendez-vous en ligne. Preuve : page collection et lien Calendly.

## Défauts observés

- **Le designer 3D ne s'ouvre pas** : après la 4e étape, « Something went wrong » + « Try again » ; la requête vers jeweleros.com échoue (`ERR_FAILED`) [V, 2 essais sur 2]. Cause non établie : peut venir du réseau d'audit ou du site [I].
- **Aucun prix, aucun rendu 3D avant le designer** : le questionnaire de 4 étapes n'affiche ni prix ni aperçu [V].
- **Pas d'URL par étape** : le questionnaire reste sur la même adresse, donc pas de partage ni de bouton retour du navigateur utile [V].
- **Retour aux frais du client** et **personnalisé non remboursable** : durs pour un bijou sur mesure [V].
- **Pas d'option de titre (14 k / 18 k) ni de platine** dans le questionnaire [V pour ces étapes].
- Délai de la page : cartes visibles en 2,7 s (ordinateur) et 3,4 s (iPhone) [V] ; pas de défilement horizontal sur iPhone (390 px) [V].

## Limites de l'audit

- Le designer 3D (vues, métal et titre, griffes, pavage, taille de doigt, gravure, prix) n'a pas été vu : l'audit des options clés est donc **absent**.
- Panier non atteint et bouton « Add to cart » non cliqué (`/cart/add` interdit par robots.txt) ; frais de livraison, moyens de paiement et délai du panier inconnus.
- Seule la voie Solitaire / Lab Grown / Round / 1 carat / 1-4 semaines a été parcourue ; les autres cartes sont listées sans avoir été actionnées. Le parcours sur iPhone n'a été fait que jusqu'à l'affichage de la page de départ.
- Politique de satisfaction, FAQ et témoignages : seule la liste des questions de la FAQ a été lue.
- Aucun formulaire, chat ni newsletter ouvert ou rempli (règles de l'audit).
- Firecrawl indisponible (crédits) ; pages lues avec Playwright.

## Sources

- https://www.herzogjewelers.com/pages/custom-ring-builder (consulté le 15/11/2026, Chromium)
- https://www.herzogjewelers.com/policies/refund-policy
- https://www.herzogjewelers.com/blogs/news/diamond-upgrade-policy
- https://www.herzogjewelers.com/collections/proposal-ready-engagement-in-ft-mitchell-kentucky
- https://www.herzogjewelers.com/collections/proposal-ready-engagement-in-ft-mitchell-kentucky/products/3-ct-elongated-step-cut-oval-lab-grown-engagement-ring
- https://www.herzogjewelers.com/pages/faq
- Requêtes réseau observées : www.jeweleros.com (images SVG de formes, `POST /api/create/from-ring-config/` en échec).
