# Audit : Gold of Sweden

- **Site** : Gold of Sweden (Guldsmedjan i Borås), https://www.goldofsweden.com/sv/
- **Page de départ** : fiche https://www.goldofsweden.com/sv/petite-collection/1570-135734-diamantring-liljekonvalj-14k-roedguld.html (pas de configurateur ; la fiche est le parcours le plus proche) ; sur mesure https://www.goldofsweden.com/sv/egen-design
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 × 900), Chromium en affichage iPhone 13
- **Statut** : **partiel**. Fiche à options relevée, pages de services lues, formulaire de devis décrit sans envoi. Non faits : effet des listes déroulantes sur le prix (l'automatisation n'a pas pu les actionner), ajout au panier et page du panier.
- Marques : **V** vérifié · **I** inféré · **S** supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| Catalogue | Rayon « Förlovningsringar » : 285 bagues ; modèles solitaire, alliance, côtés, deux ou trois pierres, halo, sans pierre ; collections Plain, Classic, Petite, Carved |
| Fiche | Métal (5 pages), taille, diamants, carat, style de gravure, texte de gravure, quantité, ajout au panier |
| Sur mesure | Formulaire de devis (non envoyé), devis en 48 h, dessin CAO, validation, fabrication |

## Contrôles vérifiés

Fiche Liljekonvalj, ordinateur.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bannière de cookies (Anpassa, Tillåt alla) | boutons | masque une partie de la fiche tant qu'elle est ouverte | — | Présent (V) |
| Språk : Svenska | menu | suédois, anglais, allemand, danois (hreflang `sv-se, en-us, de-de, da-dk`) | — | OK (V) |
| Valuta : SEK | menu | SEK, DKK, EUR | — | Non actionné ; options lues sur le catalogue |
| Sök | champ | recherche | — | Non testé |
| Image : Previous, Next, View full-screen | boutons | galerie photo avec flèches et plein écran | — | Présents (V) |
| 14K rödguld, 18K rödguld, 18K Vitguld, 14K Vitguld, Platina | boutons | **chaque métal est une autre page** (adresses `…89661…18k-roedguld`, `…89702…18k-vitguld`, `…1428-129387…platina`, `…130820…14k-vitguld`) ; changement de photo non vérifié (I) | à relever par page | OK (V) |
| Storlek (45 à 70) | liste | 26 tailles, nombre entier | — | Présent (V) |
| Diamanter : Labbodlade, Naturliga | liste | choix de l'origine ; par défaut « Labbodlade » | non mesuré | Présent ; effet non mesuré |
| Carat : Vänligen välj, 0.30, 0.50, 0.70, 1.00 ct | liste | choix du poids de la pierre ; obligatoire (« Vänligen välj ») | non mesuré | Présent ; effet non mesuré |
| Gravyrstil : Rak stil, Kursiv stil | liste | deux styles ; avec un champ « Gravyrtext » | gravure gratuite (V, texte de la fiche) | Présent (V) |
| Gravyrtext | champ | texte libre | — | Non testé |
| Antal | champ | quantité 1 | — | Présent |
| Lägg till i varukorgen | bouton | ajout au panier | 14 125,00 kr affiché avant choix du carat | **Non actionné** |
| Enkel betalning med Klarna | lien | information de paiement | — | Non ouvert |
| Beskrivning, Låna hem | onglets | description ; prêt à domicile (voir plus bas) | — | OK (V) |
| 58 Omdömen, Fråga recensionerna | boutons | avis ; questions à une IA sur les avis (« Svaren genereras med AI. AI kan göra fel. ») | — | Présents ; non ouverts |
| Filtres d'avis (med medier, service, size…), pagination 1 à 5 | boutons | tri des avis | — | Présents (V) |
| Utvalt för dig, Kunder som köpt… | cartes | ventes liées : autres bagues ; « Expressleverans, prioriterad beställning » 1 000 kr | 1 000 kr | Lus (V) |
| Frågor & svar | bouton flottant | assistant ou chat | — | Non ouvert |
| Menu : Boka konsultation, Våra ringar, Smycken, Diamanter, Egen design, Återvinn ditt guld, Hemlån, Information, Om oss | menu | pages de service | — | Liens lus (V) |
| Egen design : Begär offert | bouton | ouvre un formulaire (prénom, nom, e-mail, téléphone, métal, diamants, description, fichier de référence, trois liens, consentement) | départ de projet 1 000 kr, inclus dans le devis | Formulaire lu, **non envoyé** |

## Options disponibles

- **Métaux** : or rouge 14 k et 18 k, or blanc 14 k et 18 k, platine (V). Or jaune et rose « sur demande » ; alliances aussi en palladium (V, page de rayon). Tout en « 100 % återvunnet guld ».
- **Pierres** : synthétiques (par défaut) ou naturelles ; moissanite dès 0,20 ct sur certains modèles ; carat 0,30, 0,50, 0,70, 1,00 (V).
- **Tailles** : 45 à 70 (V). **Gravure** : style droit ou italique, texte libre, gratuite (V).
- **Spécifications de la fiche** : pierre naturelle « H/SI1 », synthétique « F/VS1 » ; largeur 1,5 mm ; hauteur 1,5 mm (V).
- **Sur mesure** : métaux rose, blanc, rouge ; pierres aucune, naturelle, synthétique, moissanite (V).

## Prix, délais, retours, garanties

- **Prix** : la fiche affiche 14 125,00 kr (or 14 k rouge, pierre synthétique) avant tout choix de carat (V). Sur le rayon, 18 bagues vues de 2 250 à 14 250 kr (V). Le détail naturel contre synthétique n'a pas été mesuré. Prix TTC (V, panier : « Totalt (inkl. moms) »).
- **Les photos montrent une pierre de 0,70 ct** quel que soit le carat choisi : « På bilderna visas Liljekonvalj … med en centersten på 0.70 Carat » (V).
- **Délai** : « Leveranstid 4-6 veckor » pour une bague à pierre ; jusqu'à 4 semaines pour une bague lisse (V). **Express** : « Expressleverans, prioriterad beställning » 1 000 kr (V).
- **Livraison** : gratuite et assurée, par PostNord vers un point relais ou retrait à Borås (V).
- **Retours** : 14 jours (« 14 dagars öppet köp »), bague et emballage en parfait état, retour gratuit avec le bon joint ; **exclus** : produits « Egen design », modifications de hauteur ou de largeur, produits dont la pierre dépasse 100 000 SEK (V). Gravure : non citée parmi les exclusions sur cette page (V).
- **Mise à taille** : une mise à taille gratuite comprise (V). **Gravure** : gratuite (V).
- **Paiement (Klarna)** : carte, Swish avec BankID, facture à 30 jours, paiement en 3, 6, 12, 24 ou 36 mois, virement bancaire (V, `/sv/content/11-betalning`).
- **Garanties** : non lues (pages Köpvillkor non ouvertes).

## Confiance et service

- **Libellé du synthétique : « labbodlad diamant » et jamais « syntetisk »** (V, `/sv/labbodlade-diamanter`). Écart de 40 à 60 % avec le naturel annoncé.
- **Certificats** : IGI pour les pierres synthétiques rondes dès 0,30 ct et les autres formes dès 0,50 ct ; « det framgår alltid tydligt av certifikatet att diamanten är labbodlad » (V). Certificat des naturels : non vu sur la fiche.
- **Fabrication** : « All vår tillverkning sker för hand i Sverige, exklusivt efter kundens beställning » (V). Pas de photos ni de vidéos de la commande ; sur mesure : images 3D de CAO « fotorealistiska » avant fabrication (V).
- **Avis** : 58 avis affichés, 57 à cinq étoiles et 1 à quatre (V, fiche). Avis vérifiés (« Verifierad köpare ») (V).
- **Services** : consultation (`/sv/events`), téléphone +46 33-14 80 00 (lundi à vendredi 8 h à 17 h), e-mail, prêt à domicile de trois modèles pendant trois jours (premier prêt gratuit, 300 kr ensuite, 2 000 kr par bague non rendue ; modèles en zircone) (V), prêt d'une bague pour la demande, guide des tailles avec mètre-ruban à commander, rachat de l'or (V).
- **Sur mesure** : « Vi lämnar ett kostnadsfritt prisförslag … inom 48 timmar » ; CAO 3D ; pas de droit de retour ; 1 000 kr de départ si le client renonce (V).

## Points forts à retenir pour JR Diamond

1. **Choix naturel ou synthétique sur la même fiche**, avec la teinte de pierre indiquée (H/SI1 contre F/VS1) : le client voit ce qu'il achète (V).
2. **Jeu de métaux identique à celui de JR Diamond** : 14 k, 18 k, platine, une page par métal (V).
3. **Garantie de transparence de l'origine sur le certificat** : la mention « labbodlad » est toujours sur le certificat (V).
4. **Prêt à domicile de trois bagues en zircone**, premier envoi gratuit, tarif de retard explicite (V). Réponse à la peur de se tromper de taille.
5. **Devis en 48 h et frais de départ de 1 000 kr déduits du prix** : le client sait ce que coûte de renoncer (V).
6. **Retour de 14 jours même sur une bague de la collection, mise à taille et gravure gratuites** (V).

## Défauts observés

- Pas de visuel qui suive les choix : une photo unique, pierre de 0,70 ct, quel que soit le carat (V).
- Chaque changement de métal recharge une autre page (V).
- Le carat est obligatoire mais vide au départ ; le prix affiché est celui d'une pierre non choisie (V).
- Pas de 3D, pas de vue 360°, pas de vidéo sur la fiche (I : aucun lecteur vidéo ni 3D repéré dans le texte et les contrôles ; `canvas` non compté).
- Pas de photos de fabrication des commandes (V).
- Bannière de cookies qui couvre la fiche et empêche l'automatisation des listes (V).

## Temps d'apparition du visuel principal

| Appareil | Première grande image |
|---|---|
| Ordinateur | 1,8 s |
| iPhone 13 | 2,3 s |

(V, une mesure par appareil.)

## Limites de l'audit

- Effet du diamant (naturel ou synthétique), du carat et de la gravure sur le prix : non mesuré (les listes déroulantes n'ont pas répondu à l'automatisation après la bannière de cookies).
- Ajout au panier et page `/sv/kundvagn` : non actionnés ; frais de livraison, récapitulatif et délai du panier non vus.
- Avis, assistant « Frågor & svar », chat et formulaire de devis : non ouverts ou non envoyés.
- Pages Köpvillkor, Betalning de l'ensemble du site : seules Frakt & retur, Betalning, Låna hem et Labbodlade diamanter ont été lues.
- Une seule fiche (Liljekonvalj) a été auditée ; les autres modèles ne sont connus que par le rayon.

## Sources

- https://www.goldofsweden.com/sv/petite-collection/1570-135734-diamantring-liljekonvalj-14k-roedguld.html (et variantes de métal)
- https://www.goldofsweden.com/sv/42-foerlovningsringar · /sv/egen-design · /sv/labbodlade-diamanter
- https://www.goldofsweden.com/sv/content/10-frakt-return · /sv/content/11-betalning · /sv/content/16-hemlan-av-ring
