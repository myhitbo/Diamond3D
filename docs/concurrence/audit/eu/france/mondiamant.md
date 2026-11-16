# Audit : MonDiamant, fiche à options et sur mesure avec rendu 3D facturé (français, €)

| | |
|---|---|
| Site | MonDiamant (société Eurogem d'après les CGV), showroom 9 rue Buffault, Paris 9e ; « diamantaire depuis 1988 » (V, pages `/c/68` et CGV) |
| Page de départ | https://www.mondiamant.com/35-bague-de-fiancailles, puis la fiche https://www.mondiamant.com/177-solitaire-dana-rond-or-blanc.html |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) |
| Statut | **partiel**. Fiche Dana actionnée (poids, qualité), pages de service, sur mesure et CGV lues. **Panier non atteint** : l'ajout de la bague passe par une requête POST vers `/module/kbproductfield/kbcustom`, et robots.txt interdit `/module/` ; la requête a été bloquée par notre garde et la page `/panier` est restée vide (V). Aucun contournement |
| robots.txt | interdit `/module/`, les paramètres `?q=`, `?order=`, `?n=`, `?back=`, une série de `controller=…` (panier, commande, compte…) (V). Pas de défi, pas de captcha. 3 requêtes de recherche automatique (`/recherche?…`) et 9 POST du module Facebook (`/module/ps_facebook/Ajax`) ont été bloquées par notre garde : rien n'a été envoyé à ces adresses (V) |

Marques : **V** vérifié (contrôle actionné ou page lue) · **I** inféré · **S** supposé.

C'est le site français dont le prix au carat est le plus lisible après La Maison de l'Alliance : sept poids, trois qualités, un prix qui change à chaque clic, mais **une seule photo**, **aucune 3D**, et un sur mesure vendu comme un rendez-vous (V).

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Catalogue « Bagues de fiançailles » | 349 produits ; tri « Pertinence » ; FAQ sur le budget, les prix « moins chers ailleurs », les diamants de laboratoire, le retour (V) | prix de chaque fiche | photos |
| Fiche Dana rond, or blanc (trilogie) | forme (rond, avec liens poire, émeraude, princesse, marquise), métal (or blanc, jaune, rose, platine), poids (7), qualité (3), taille de doigt (45 à 62), gravure, WhatsApp, showroom (V) | recalculé à chaque choix sans quitter la page ; l'adresse de la page change (V) | **la même photo** à tous les poids et qualités (V) |
| Panier | non atteint (voir Statut) | — | — |
| Sur mesure | rendez-vous ou WhatsApp ; modélisation 3D facturée 200 € ; 6 semaines (V) | pas de prix avant le rendez-vous, sauf les 200 € | rendu 3D envoyé avant fabrication (non vu, V pour l'annonce) |

## Contrôles vérifiés

Fiche Dana rond, or blanc 18 k. Prix TTC ; le prix est celui de la page à 0,30 ct H-SI sauf indication (V).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Poids du diamant central | liste (7) | 0,30 · 0,50 · 0,70 · 1,00 · 1,20 · 1,50 · 2,00 ct ; la page se met à jour sans rechargement (V) | 1 980 · 3 100 · 4 210 · 8 750 · 10 320 · 17 250 · 29 150 € (H-SI) (V) | fonctionne (7 sur 7) |
| Qualité du diamant | 3 boutons radio | H - SI, G - VS, D - IF ; une aide « En savoir plus » explique chaque note (V) | à 0,30 ct : 1 980 · 2 100 · 2 630 € (V) | fonctionne (3 sur 3, à 0,30 ct seulement) |
| Forme du diamant : Rond « Changer » | bouton + 4 liens | Poire, Émeraude, Princesse, Marquise : chaque lien mène à **une autre fiche** (autre numéro de produit) (V) | non relevé | liens lus ; non ouverts |
| Métal : or blanc, jaune, rose, platine | 4 liens | chaque lien mène à une autre fiche (178, 179, 180) (V) | non relevé | liens lus ; non ouverts |
| Tour de doigt | liste | 45 à 62 (18 valeurs) ; 45 est présélectionné (V) | inchangé | liste lue ; une valeur prise par défaut |
| Votre gravure offerte | champ « Texte à graver » | présent sur la fiche (V) | gratuite (V) | non saisi |
| 2x · 3x · 4x (Alma) | 3 boutons | paiement fractionné annoncé : « 2 × 990 € (sans frais) » (V) | — | non actionnés |
| AJOUTER AU PANIER | bouton | clic : la requête du champ de gravure (`/module/…`) est interdite par robots.txt, donc bloquée ; **aucun article ajouté** (V) | — | tenté une fois, non réessayé |
| ESSAYER AU SHOWROOM | lien | adresse `/c/41-prendre-un-rendez-vous#modele=…&carat=0.30 Carat · H - SI&ref=fiche-177` : le modèle et le choix de pierre sont **repris dans le lien** (V) | — | lien lu ; formulaire non rempli |
| DEMANDER SUR WHATSAPP | lien | `api.whatsapp.com/send?phone=…&text=` : le texte contient le nom du modèle et l'adresse de la page, **pas** le poids ni la qualité choisis (V) | — | lien lu ; non ouvert |
| Page « Rendez-vous showroom » | formulaire | prénom, coordonnées, jour et créneau, rappel par un conseiller (V) | — | lue ; **non remplie** |
| FAQ du catalogue (4 questions) | accordéon | réponses lues : budget, prix « moins chers ailleurs », laboratoire, retour (V) | — | fonctionne |
| Recherche (« Que recherchez-vous ? ») | champ | non saisi ; la page lance seule trois recherches de suggestions, bloquées par notre garde (V) | — | non utilisé |

## Options disponibles

- **Pierre** : diamant naturel certifié GIA ; 7 poids de 0,30 à 2,00 ct ; qualités H-SI, G-VS, D-IF ; coupe « très bonne », sans fluorescence (V). Pas de choix libre de couleur et de pureté séparés.
- **Formes** : rond, poire, émeraude, princesse, marquise sur la fiche Dana ; ovale, coussin, radiant cités par la page du sur-mesure (V) ; absents des 4 liens de la fiche (I).
- **Métaux** : or blanc, jaune, rose 18 k, platine (V).
- **Taille de doigt** : 45 à 62 ; baguier à télécharger en PDF ; première remise à taille offerte (V).
- **Gravure** : offerte (V). **Pierres de couleur** : saphir, émeraude, rubis sur mesure seulement (V).
- **Alliance du fiancé en or 18 k offerte** pour l'achat d'une bague de fiançailles (V, bandeau et fiche).

## Prix, délais, retours, garanties

- **Affichage** : prix TTC unique par fiche, avec « Payez en plusieurs fois sans frais » (2, 3, 4 fois) (V). Aucune décomposition (métal, pierre, façon) (V).
- **Sur mesure** : « phase de création » de **200 €**, modélisation 3D et ajustements jusqu'à validation compris ; fabrication en 6 semaines ; le devis détaille « métal, diamant, pierres d'accompagnement et délai » (V, `/c/68`). On ne sait pas si les 200 € sont déduits du prix final (non écrit).
- **Délai** : « Livraison prévue le 07/12/2026 » sur la fiche, soit environ trois semaines le jour du relevé (V pour la date, I pour la durée) ; livraison « au plus tard à la date annoncée sur la page panier, avec un maximum de 30 jours » (V, CGV).
- **Livraison** : offerte, assurée, en France, Monaco, Belgique ; retrait au showroom (V).
- **Retours** : 30 jours (le délai légal de 14 jours est étendu), « retour gratuit » ; remboursement sous 14 jours après retour (page) ou 30 jours (CGV) ; les deux textes ne donnent pas le même délai (V). **Pas de rétractation pour ce qui est personnalisé « telle que la mise à taille ou inscription gravée »** (V, CGV article VIII.4).
- **Garantie** : 10 ans contre les vices de fabrication ; entretien offert tous les 18 mois ; remise à taille offerte (V).
- **Certificat** : GIA fourni avec le diamant central, « garantissant son poids et sa qualité » (V).
- **Engagements** : diamants « d'origine éthique » achetés à des mines partenaires (Afrique du Sud, Botswana, Canada), métaux précieux recyclés (V, page `/c/14` ; non vérifiable ici).

## Confiance et service

- **Avis** : « 5/5 sur Google, 116 avis clients » (V, affiché).
- **Contact** : téléphone du lundi au vendredi, WhatsApp, e-mail, showroom sur rendez-vous (V).
- **Fabrication** : « 100 % française, du fondeur au sertisseur » (V, annonce) ; aucune photo ni vidéo de fabrication sur les pages lues (V).
- **Une page de comparaison** : « Avis Gemmyo : qualité, prix et alternatives » (`/c/54`) qui présente le concurrent et renvoie vers ses propres bagues (V).
- **Image** : aucune réserve sur l'écart entre la photo et la bague ; la fiche dit que le diamant central « pèse entre 0,30 et 2,00 carats » selon le choix (V).

### Terme du diamant synthétique et décret 2002-65

- **MonDiamant ne vend que du diamant naturel** (V, FAQ) : « Non : nous ne travaillons que le diamant naturel, certifié GIA. Votre union mérite bien plus qu'une pierre créée en laboratoire. »
- La question est posée avec « diamants de laboratoire », et la réponse dit « pierre créée en laboratoire », puis renvoie à « diamants naturels et synthétiques » (V). Terme non conforme au décret 2002-65 dans la question et la réponse (I), mais **sans objet commercial** : le site n'en vend pas. À noter : le ton déprécie la pierre synthétique (« votre union mérite bien plus »).

## Points forts à retenir pour JR Diamond

1. **Un lien de rendez-vous qui transporte la configuration** : modèle, poids et qualité sont dans l'adresse (`#modele=…&carat=…&ref=…`) (V). C'est l'exemple à suivre pour « demander à l'atelier » depuis le configurateur.
2. **Prix par poids et par qualité sur la même page**, de 1 980 € à 29 150 € pour la même bague (V). Le client voit l'effet exact du carat.
3. **Le sur mesure est chiffré** : 200 € pour un rendu 3D et des ajustements illimités avant fabrication, délai de 6 semaines (V). Même promesse que JR Diamond, mais hors ligne : rien n'est en 3D sur le site.
4. **Alliance du fiancé offerte** : une offre de couple qui répond à la demande « kiddouchin / alliance du marié » (V).
5. **Page « Gemmyo Alternatives »** : le site se compare nommément à un concurrent (V). Modèle de page pour un argument de prix.
6. **Aide en ligne sur la qualité** : une fenêtre explique H-SI, G-VS, D-IF en termes visibles à la loupe ×10 et à l'œil nu (V).

## Défauts observés

1. **Aucun visuel ne change avec le poids ou la qualité** : la photo est la même pour 0,30 et 2,00 ct (V).
2. **Le métal et la forme ouvrent d'autres fiches** : on perd son choix de poids à chaque changement (I : le poids revient à 0,30 dans les liens, qui portent `105-…030_carat`) (V pour le lien).
3. **Le panier ne s'est pas rempli** : l'ajout dépend d'un module interdit aux robots ; un visiteur humain ne le subit pas (I). Non vérifiable ici.
4. **Le WhatsApp ne transporte pas le choix** (modèle et page seulement), alors que le lien de rendez-vous le transporte (V). Incohérent entre deux boutons voisins.
5. **Délais de remboursement différents** : 14 jours sur la page « satisfait ou remboursé », 30 jours dans les CGV (V).
6. **Pas de prix décomposé ni d'explication de l'écart** entre qualités ; l'argument « nos prix sont plus bas à certificat égal » est une affirmation (V pour le texte, S pour sa véracité).
7. **Sur iPhone**, 53 contrôles de la première partie de la page font moins de 44 px ; la page tient en 390 px de large, sans défilement horizontal (V). Document prêt en 4,1 s sur iPhone émulé, machine partagée (V).
8. **Le texte sur le synthétique** déprécie la pierre et emploie « laboratoire » (V).

## Limites de l'audit

- Panier et commande non atteints ; frais, récapitulatif et moyens de paiement viennent des pages de service et des CGV.
- Métal et forme non ouverts (liens lus) ; qualités G-VS et D-IF relevées à 0,30 ct seulement ; prix des autres poids lus en H-SI uniquement.
- Catalogue : filtres et tri non actionnés (le tri par prix passe par `?order=`, interdit par robots.txt).
- Aucun formulaire, aucun rendez-vous, aucun WhatsApp, aucun chat, aucun compte.
- iPhone émulé avec Chromium (pas un vrai Safari). Temps mesurés sur une machine partagée.

## Sources

- https://www.mondiamant.com/ · `/35-bague-de-fiancailles` · `/177-solitaire-dana-rond-or-blanc.html` · `/panier?action=show` (vide)
- Sur mesure : `/c/68-bijoux-sur-mesure-paris` · rendez-vous : `/c/41-prendre-un-rendez-vous` · comparaison : `/c/54-gemmyo-info`
- Services : `/c/10-retour-gratuit` · `/c/8-livraison-securisee` · `/c/14-nos-engagement-responsables` · CGV : `/c/15-conditions-generales-de-vente` · règles : `/robots.txt`
- Scripts et captures (hors dépôt) : `/tmp/claude-0/-home-user-Diamond3D/029abcd0-3d8a-56d2-8c2e-67bb96f3ed98/scratchpad/fr/`
