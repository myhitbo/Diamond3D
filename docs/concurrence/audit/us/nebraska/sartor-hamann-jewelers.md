# Audit : Sartor Hamann Jewelers (Nebraska)

- **Site** : Sartor Hamann Jewelers, bijoutier familial de Lincoln et Grand Island (Nebraska), fondé en 1905, 3 boutiques (texte de présentation lu sur la page du constructeur).
- **Adresse de départ** : https://sartorhamann.com/custom-ring-builder/
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright).
- **Statut** : **partiel**. L'assistant de départ en 4 étapes est vérifié ; le **designer 3D n'a pas été atteint** : le dernier clic de l'assistant envoie `POST https://www.jeweleros.com/api/create/from-ring-config/`, adresse interdite par le robots.txt de jeweleros.com (`Disallow: /api/`). La requête a été bloquée dans le navigateur (aucun envoi) et je me suis arrêté là. Le panier (`/cart`) est aussi interdit par le robots.txt du site : non ouvert.

## Parcours

| Étape | Options (vérifiées) |
|---|---|
| Choix du métal (avant l'étape 1) | 3 pastilles sans libellé : or jaune, blanc, rose (les vignettes changent de couleur) |
| 1 sur 4 : style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » |
| 2 sur 4 : pierre centrale | bascule Natural / Lab Grown ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant ; « Decide later » |
| 3 sur 4 : taille | 0.5, 1, 1.5, 2, 2.5, 3, 4, 5 carats ; « Decide later » |
| 4 sur 4 : délai souhaité | 1 – 4 weeks, 1 – 3 months, 3 – 6 months, Not sure yet |
| Suite | ouverture du « 3D Ring Designer » (non atteint, voir statut) |

Chaque étape affiche en tête le résumé des choix déjà faits (ex. « Halo | Oval | 0.5 carat »), un bouton Back et un bouton Skip.

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles métal (jaune, blanc, rose) | 3 boutons | la sélection (anneau bleu) est déplacée ; les 8 vignettes de styles changent de teinte (blanc vérifié par capture) | aucun prix affiché | OK |
| Solitaire / Halo / Hidden Halo / Bezel / Cathedral / Full Pavé / Toi et Moi / Three Stone | 8 cartes | passage à l'étape 2 (« Halo », « Solitaire » apparaissent dans le résumé) ; Solitaire et Halo cliqués, les autres non | aucun | OK (2 sur 8 cliquées) |
| Start from scratch | carte | non cliquée : conduit probablement à la création du designer par l'API interdite (inféré) | — | non testé |
| Natural / Lab Grown | bascule | « Lab Grown » activé sans erreur ; Natural par défaut | aucun | OK |
| Formes (9) | cartes | Round et Oval cliquées ; passage à l'étape 3 | aucun | OK (2 sur 9) |
| Decide later (étapes 2 et 3) | cartes | non cliquées | — | non testé |
| Carats (8) | boutons | 0.5 et 1 cliqués ; passage à l'étape 4 | aucun | OK (2 sur 8) |
| Délai (4) | boutons | « 1 - 4 weeks » : la page lance `POST jeweleros.com/api/create/from-ring-config/` (interdit) ; blocage côté navigateur ; l'écran affiche « Something went wrong / Try again » (conséquence de mon blocage, pas un défaut du site) | aucun | arrêt volontaire |
| Back | bouton | revient d'une étape (testé 2 fois : 4→3, 3→2) | — | OK |
| Skip | bouton | non cliqué (probablement même appel API : inféré) | — | non testé |
| Text us (Podium) | bouton flottant | non ouvert (règle : pas de chat) ; une bulle « Hi there, have a question? Text us here. » s'affiche | — | non testé |
| Menu, recherche, liste de souhaits (connexion requise), panier, connexion | liens | liens présents ; `/search`, `/cart`, `/account` interdits : non suivis | — | non testé |
| Téléphone (402) 476-8561, Hours & Directions, Facebook, Instagram, Pinterest, Twitter | liens | présents | — | non suivis (liens externes) |

Pages lues : `/shipping-policy/`, `/return-policy/`, `/services/`, `/diamonds-edu/`.

## Options disponibles

- Métaux : or jaune, blanc, rose (pastilles) ; aucun platine ni titre (14 k / 18 k) visible dans l'assistant.
- Styles : 8 + départ libre. Pierres : 9 formes, naturelle ou synthétique. Carats : 0,5 à 5 (8 valeurs). Délai : 4 plages.
- Le designer 3D annonce (texte de l'assistant, lu) qu'on peut « fully customize » et fixer un carat exact : non vérifié.

## Prix, délais, retours, garanties

- **Prix** : aucun prix à aucune étape de l'assistant (vérifié).
- **Délai** : question posée au client (« When do you need your ring? ») ; aucun délai de fabrication annoncé dans l'assistant. Livraison : 2 à 5 jours ouvrés après expédition.
- **Livraison** (page lue) : États-Unis seulement, y compris APO/FPO ; gratuite dès 200 $, sinon 15 $ ; express +30 $ (1 à 2 jours) ; retrait gratuit en boutique ; assurée à la valeur de remplacement, signature obligatoire.
- **Retours** (page lue) : 30 jours à partir de la facture, état neuf, boîte, certificats et rapports de diamant inclus ; **« special orders, custom and altered pieces are not returnable or exchangeable »** ; frais de restockage possibles ; bague gravée ou ajustée non reprise. Frais de retour et assurance payés par le magasin. Remboursement en environ 7 jours ouvrés après réception.
- **Garantie** (page services, lue) : « Limited warranty on all purchases for 12 months ».
- **Autres services** (lus) : financement sous réserve d'acceptation, estimations et évaluations, gravure, rachat d'or, reprise de diamant, réparations, assurance Jewelers Mutual.
- **Libellé du synthétique** : « Lab Grown » dans l'assistant, « lab-created » en pédagogie ; la page « diamants » décrit la pierre comme chimiquement, physiquement et optiquement identique (lue).
- **Certificats** : mention « diamond reports » dans la politique de retour ; pas de GIA/IGI vu dans l'assistant.

## Confiance et service

- Histoire familiale « Since 1905 », quatrième génération ; 3 magasins ; téléphone (402) 476-8561 ; bouton de texto Podium ; bouton « Appointment » dans les services.
- Collection « Heartland » (taille exclusive à 32 facettes supplémentaires, texte lu) ; collections « Natural » et « Lab-Created ».
- Langue : anglais ; devise : dollar. Avis clients, photos/vidéos de fabrication et suivi de commande : **non vus**.
- Mesure du premier visuel (cartes de l'assistant) : **1,7 s sur ordinateur, 1,7 s en affichage iPhone** ; sur iPhone la page encapsule l'outil dans un cadre `jeweleros-custom.netlify.app` (vérifié par la liste des cadres), sur ordinateur dans la page. Le visuel 3D lui-même n'a pas été mesuré (non atteint).
- Chargement de nombreux traceurs publicitaires à l'ouverture (AdRoll, Rubicon, Taboola, etc., liste des hôtes lue).

## Points forts à retenir pour JR Diamond

1. **Assistant en 4 questions avant la 3D** (style, pierre, taille, délai souhaité) : démarre vite (1,7 s) et qualifie le client sans le noyer d'options (preuve : captures `d/…jpg`, `q3b.jpg`).
2. **Résumé cumulatif en en-tête** (« Halo | Oval | 0.5 carat ») avec Back et Skip sur chaque étape : pas de perte de repère.
3. **« Decide later »** sur la pierre et le carat : lève la pression de choisir (texte lu).
4. **Pastilles métal changeant toutes les vignettes** : l'effet est visible avant de choisir (capture `q3.jpg`).
5. **Retours chiffrés** (30 jours, port retour payé par le magasin) et **garantie 12 mois** affichés en clair, mais avec **exclusion du sur mesure** : confirme qu'un concurrent applique l'exception du sur mesure (return-policy, lue).
6. **Livraison avec seuil** (gratuite dès 200 $, express 30 $) et retrait gratuit en boutique.
7. **Question du délai posée au client** : permet d'annoncer un délai réaliste ou d'orienter vers l'atelier.

## Défauts observés

- Aucun prix dans l'assistant ni avant le designer : le client ne sait pas ce que coûte sa bague avant d'avoir terminé 4 étapes (vérifié).
- Aucun titre d'or ni platine proposé dans l'assistant ; 3 pastilles sans libellé texte (accessibilité) (vérifié).
- Dépendance à un service tiers dont l'API est interdite aux robots : l'outil ne peut pas être exploré sans appel à cet API (constat technique, non un défaut utilisateur).
- Panier et compte non joignables (interdits) ; la page de départ est en `noindex` (indiqué dans la demande).
- Nombreux traceurs publicitaires.

## Limites de l'audit

- Designer 3D, filtres de pierres, prix, panier, paiement : **non atteints** (appel API interdit, `/cart` interdit).
- Les clics « Start from scratch », « Skip », « Decide later » et les 6 autres styles, 7 formes et 6 carats n'ont pas tous été essayés ; ils partagent le même gabarit (inféré).
- Le message « Something went wrong » vu après le dernier clic résulte du blocage volontaire de l'appel, pas d'une panne.
- Effet réel de la pastille métal sur le designer 3D : non vérifié.

## Sources

- https://sartorhamann.com/custom-ring-builder/ (assistant, contrôles, mesures)
- https://sartorhamann.com/shipping-policy/, `/return-policy/`, `/services/`, `/diamonds-edu/`
- robots.txt : `/cart`, `/account`, `/search` interdits sur sartorhamann.com ; `https://www.jeweleros.com/api/` INTERDIT
- Captures et scripts : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/sartor-hamann/`
