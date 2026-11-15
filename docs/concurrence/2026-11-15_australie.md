# Concurrence Australie : vente directe de bagues sur mesure en ligne

Date : 15 novembre 2026 (explorateur n° 2). Complète `docs/concurrence/2026-11-15_etats-unis.md`, même grille, mêmes règles.
Pourquoi l'Australie : des ateliers de taille moyenne y vendent en direct, souvent avec un atelier visible. C'est le modèle le plus proche de JR Diamond [I].

Légende : **[Vn]** vérifié, page lue le 15/11/2026, source n en section 4 (certaines pages servies par un cache de 1 à 3 jours) ;
**[I]** inféré ; **[S]** supposé. Prix en dollars australiens (AUD), tels qu'affichés.

## 0. Inventaire des sites à auditer

Blocage : test curl du 15/11/2026 depuis l'environnement cloud, avec en-tête Safari. Aucun défi Cloudflare ni captcha observé sur ces 8 sites.

| Acteur | Accueil | Configurateur (page de départ) | Autres pages clés | Blocage observé |
|---|---|---|---|---|
| Cullen Jewellery | cullenjewellery.com/en-au | /en-au/engagement-rings (le site l'appelle « ring builder page ») | /en-au/engagement-rings/custom · /en-au/crafting-timeframes · /en-au/visit/showroom · /en-au/ready-to-ship-engagement-rings | Aucun (200). /en-au/ring-builder répond 404 |
| Michael Hill | michaelhill.com.au | /engagement (bague sur mesure en 3 étapes) | /made-to-order/rings (alliances) · /book-appointment · /returns-policy · /finance-options | Aucun (200) |
| Larsen Jewellery | larsenjewellery.com.au | /engagement-rings (commande en ligne) · /services/our-bespoke-process | /wedding-rings/experience · /wedding-rings/price-guide · /policies · /contact | Aucun (200) |
| Natalie Marie | nataliemariejewellery.com | /collections/laboratory-grown-diamond-engagement-ring · /pages/bespoke-process | /pages/book-appointment · /pages/warranty-returns-repairs | Aucun (200) |
| Temple & Grace | templeandgrace.com.au | /jewellery/engagement-rings · /jewellery/engagement-rings/custom-engagement-rings | /lab-grown-diamond-rings · /faqs · /contact (rendez-vous par fenêtre modale) | Aucun (200) |
| Diamond Gallery | diamondgallery.com.au | /engagement-ring-builder/ (monture, diamant naturel, synthétique ou de couleur) | /design-your-own-ring/ · /custom-engagement-rings/ · /book-appointment/ | Aucun (200) |
| Monroe Yorke Diamonds | mydiamonds.com.au | /pages/ring-builder (redirige vers /collections/engagement) | /pages/custom-made-jewellery · assistant IA sur l'accueil | Aucun (200) |
| Lily Dia | lilydiajewellery.com | /design-your-own-engagement-ring | /custom-wedding-rings · /education/engagement-rings/custom-design | Aucun (200) |

Les trois derniers sont inventoriés pour l'audit, sans fiche détaillée. Ce qu'ils annoncent [V9] :
Diamond Gallery a un constructeur en 3 étapes ; Monroe Yorke, un prix total « en direct » et un assistant IA qu'un joaillier peut rejoindre ; Lily Dia, un prix « en direct » et des rendus 3D sous cinq angles.

## 1. Tableau de synthèse

| Acteur | Constructeur et visuel | Prix affiché | Délai annoncé | Retours (changement d'avis) | Mise à taille | Essai physique | Paiement |
|---|---|---|---|---|---|---|---|
| Cullen | Constructeur ; CAO sous 5 j ouvrés en sur mesure ; pas de 3D relevée [V1][V2] | Sans frais de personnalisation : métal + pierres + complexité [V1] | 30 j ouvrés (8 à 10 sem. sur une autre page) [V3][V2] | Aucun, sauf défaut [V4] | 1 offerte, 12 mois [V5] | Salles sur rendez-vous [V4] | Paiement complet avant fabrication ; Afterpay, Zip, Humm, Klarna [V4] |
| Michael Hill | 3 étapes, taille prise en boutique [V10] | Prix public, remises « au panier » [V10] | Non relevé | 30 j, sur mesure et retaillé exclus [V11] | Non relevé | « Réserver en ligne, décider en boutique » [V10] | Latitude jusqu'à 60 mois, Afterpay, Zip, Humm [V12] |
| Larsen | Croquis, rendus 3D, images générées par IA [V20][V21] | Grille publique des alliances [V23] | 3 à 7 sem. [V21] | 30 j en ligne ; sur mesure exclu [V24] | 1 offerte, 60 j (4 sem. dans la FAQ) [V24][V25] | Bague essayée avant le sertissage [V25] | Sur mesure non annulable après l'acompte [V24] |
| Natalie Marie | Vidéos HD des pierres proposées [V30] | « À partir de 5 900 AUD » [V33] | 4–5 sem. (10–12 sem. dans la FAQ) [V30][V32] | Aucun sur commande ; 14 j en échange ou avoir sur le stock [V31] | 1 offerte, 6 mois [V31] | Salles d'Avalon et de Paddington [V34] | Acompte 50–75 % ; Afterpay sous 2 000 AUD [V30][V35] |
| Temple & Grace | Dessin gratuit et illimité à valider [V40] | « Prix le plus bas garanti », 5 % de moins qu'un concurrent [V40] | Non relevé | 100 j hors sur mesure [V41] | Illimitée et gratuite [V40] | Essai à domicile, jusqu'à 3 bagues [V40] | 25 % à la commande, solde à l'expédition [V40] |

Cadre légal [V50] : en Australie, le commerçant n'a pas à rembourser un simple changement d'avis. Les garanties légales contre les défauts restent impératives.
D'où des politiques très variables : de rien (Cullen, Natalie Marie) à 100 jours (Temple & Grace).

## 2. Fiches par acteur

**Cullen Jewellery** (en ligne d'abord ; pierres synthétiques et moissanite, « nous n'utilisons pas de diamants extraits » [V1]).
- Sur mesure : consultation gratuite, aucun frais de personnalisation, CAO livrée sous 5 jours ouvrés, puis 30 jours ouvrés de fabrication. La pierre doit venir de Cullen [V1].
- Date de fin indiquée sur chaque fiche ; fabrication accélérée payante pour les diamants synthétiques [V4][V3].
  Contradiction : une page annonce 8 à 10 semaines [V2].
- Aucun retour pour changement d'avis [V4]. 1 retaille offerte sous 12 mois, avec l'envoi aller-retour [V5]. Garantie de fabrication à vie sur les bagues, 2 ans sur le reste [V6].
- Livraison express offerte en Australie. Hors d'Australie, offerte dès 500 AUD, droits et taxes compris pour la plupart des pays [V4].
  Garde de la commande jusqu'à 90 jours pour préserver la surprise [V4].
- « Des dizaines de milliers d'avis cinq étoiles » (affirmation du site) [V7]. Libellé : « lab-grown diamond » [V2].
- À retenir : un prix expliqué simplement (métal, pierres, complexité) et une CAO en 5 jours.

**Michael Hill** (chaîne australienne, magasins dans toutes les grandes villes [V13]).
- Bague sur mesure en 3 étapes : forme et carats, monture et métal, puis taille mesurée gratuitement en boutique [V10]. Constructeur d'alliances : style, métal, diamants, taille, sauvegarde et partage [V14].
- « Reserve Now, Decide Later » : réserver la bague en ligne, la voir en boutique avant de décider [V10].
- 30 j pour changement d'avis (après livraison si achat en ligne). Exclus : bagues retaillées, gravées, sur mesure. Retour à la charge du client, sauf défaut [V11].
- Financement : Latitude sans intérêt jusqu'à 60 mois dès 2 999 AUD (frais de 11,95 AUD par mois, puis 29,99 % par an), Afterpay jusqu'à 4 000 AUD, Zip, Humm [V12].
- Libellé : « Laboratory-Grown Diamond » ; jusqu'à 10 arbres plantés par diamant synthétique [V15].

**Larsen Jewellery** (ateliers à Sydney, Melbourne et Brisbane). **Le plus proche de « l'atelier en direct ».**
- Parcours : rendez-vous ; choix de la pierre, les 4 C montrés sur de vraies pierres ; croquis ou rendu 3D ; fabrication à l'atelier ; retrait [V21].
  L'accueil cite aussi des « images générées par IA » [V20].
- On essaie la bague **avant le sertissage** des pierres, et on peut encore la modifier [V25]. Dans les ateliers, on voit les joailliers travailler à l'établi [V22].
- « Wedding Ring Experience » : le couple fabrique ses alliances lui-même, en 4 à 5 h, avec un joaillier dédié. Déjeuner, champagne et photos de la séance compris [V26].
  Supplément pour 2 alliances : 600 AUD en semaine, 850 AUD le samedi ; acompte de 30 % [V23][V25].
- Grille de prix publique des alliances, par taille et par largeur [V23]. 30 j pour les achats en ligne ; sur mesure non remboursable [V24].
- Garantie à vie ; entretien annuel offert ; certification GIA [V20] ; avis Google et Trustpilot affichés sur les fiches [V27]. Neutre en carbone, or Fairtrade, 10 % des bénéfices donnés [V22].

**Natalie Marie** (Sydney : Avalon et Paddington).
- Sur mesure : échange avec un designer, surtout par e-mail. Pierres présentées en personne ou par vidéos et images HD. Acompte de 50 à 75 % [V30].
  Fabrication en 4–5 semaines, nouvelles « toutes les quelques semaines », photo de la pièce finie avant le solde [V30].
- Pas de retour sur commande ; pièces en stock : échange ou avoir sous 14 j [V31]. La FAQ dit 7 j pour les achats en boutique [V35].
- 1 retaille offerte sous 6 mois ; garantie à vie limitée sur les bagues de fiançailles et le sur-mesure [V31].
- « Heirloom Service » : refaire un bijou avec les pierres du client, sans garantie sur ces pierres [V31]. C'est l'équivalent de la transformation de bijoux de famille de JR Diamond.
- Livraison express offerte dès 1 000 AUD [V36]. Libellé : « Laboratory Grown Diamonds » [V33].

**Temple & Grace** (atelier à Sydney ; salles à Sydney, Melbourne (2), Brisbane, Perth, Adelaide, et rendez-vous vidéo [V40][V42]).
- 100 j de retour, hors sur mesure (une gravure compte comme sur mesure) [V41]. Retailles et refabrications illimitées et gratuites [V40].
- Paiement : 25 % à la commande, le solde à l'expédition ; étalement possible sur 6 mois [V40][V41]. Rachat garanti, même sur le sur-mesure [V41].
- Preuve matérielle : un lecteur XRF Hitachi montre au client le titre réel de l'or (« Get what you're paying for! ») [V40]. Certificat d'estimation fourni [V40].
- Essai à domicile jusqu'à 3 bagues [V40]. 569 avis affichés [V42]. « We don't have fake sales » : pas de fausses promotions [V40].
- À retenir : la mesure du métal faite devant le client. C'est le pendant du « prix expliqué » de JR Diamond [I].

## 3. Avantages à retenir, classés par impact estimé sur la conversion [I]

1. **Montrer l'atelier et faire participer le client.** Larsen fait essayer la bague avant le sertissage et ouvre ses ateliers [V25][V22] ; Natalie Marie envoie des vidéos des pierres et des nouvelles [V30].
   Pour JR Diamond : un rendez-vous « essayage avant sertissage » à Ramat Gan, et des vidéos de la pierre avant validation [I].
2. **Preuve du métal et du prix.** Temple & Grace montre le titre de l'or au lecteur XRF [V40] ; Larsen publie sa grille [V23] ; Cullen explique le prix [V1].
   JR Diamond annonce déjà le poids du métal à ± 5 % : montrer la pesée et le titre à la livraison, en photo ou vidéo [I].
3. **Acompte puis solde.** Temple & Grace : 25 % [V40] ; Natalie Marie : 50–75 % [V30]. C'est cohérent avec le parcours « devis → prix confirmé → lien de paiement » de `docs/PAIEMENT.md` [I].
   Paiement fractionné très présent : Afterpay, Zip, Humm, Klarna [V4][V12].
4. **CAO rapide et datée.** Cullen : CAO sous 5 jours ouvrés, date de fin sur la fiche [V1][V4]. JR Diamond (14 jours ouvrés) peut afficher les deux [I].
5. **Retours : choisir et l'écrire clairement.** Le marché va de rien à 100 j [V4][V41]. Pour Israël, la règle dépend de l'avis de l'avocat (exception du sur-mesure, `docs/juridique/DOSSIER_AVOCAT_IL.md`) [I].
6. **Expérience « fabriquer ses alliances »** (Larsen, 600–850 AUD de supplément [V23]). Idée pour l'alliance de kiddouchin : séance à l'atelier, photos comprises [S]. Attractivité à tester auprès de l'atelier.

**Contre-exemples à éviter**
- Délais contradictoires d'une page à l'autre : Cullen (30 j ouvrés ou 8–10 sem.), Natalie Marie (4–5 ou 10–12 sem.), Larsen (retaille sous 60 j ou 4 sem.) [V2][V3][V30][V32][V24][V25].

## 4. Sources (lues le 15/11/2026)

- Cullen : [1] https://cullenjewellery.com/en-au/engagement-rings/custom · [2] https://cullenjewellery.com/en-au/engagement-rings · [3] https://cullenjewellery.com/en-au/crafting-timeframes
  [4] https://cullenjewellery.com/en-au/faqs · [5] https://cullenjewellery.com/en-au/free-resizing · [6] https://cullenjewellery.com/en-au/warranty · [7] https://cullenjewellery.com/en-au
- Autres sites inventoriés : [9] https://diamondgallery.com.au/engagement-ring-builder · https://www.mydiamonds.com.au/ · https://lilydiajewellery.com/
- Michael Hill : [10] https://www.michaelhill.com.au/engagement · [11] https://www.michaelhill.com.au/returns-policy · [12] https://www.michaelhill.com.au/finance-options · [13] https://www.michaelhill.com.au/
  [14] https://www.michaelhill.com.au/made-to-order/rings · [15] https://www.michaelhill.com.au/article/knowledge-advice/laboratory-grown-diamonds
- Larsen : [20] https://www.larsenjewellery.com.au/ · [21] https://www.larsenjewellery.com.au/services/our-bespoke-process · [22] https://www.larsenjewellery.com.au/bespoke-wedding-ring-design-service
  [23] https://www.larsenjewellery.com.au/wedding-rings/price-guide · [24] https://www.larsenjewellery.com.au/policies · [25] https://www.larsenjewellery.com.au/faq · [26] https://www.larsenjewellery.com.au/wedding-rings/experience · [27] https://www.larsenjewellery.com.au/engagement-rings
- Natalie Marie : [30] https://www.nataliemariejewellery.com/pages/bespoke-process · [31] https://www.nataliemariejewellery.com/pages/warranty-returns-repairs
  [32] https://www.nataliemariejewellery.com/pages/engagement-faqs · [33] https://www.nataliemariejewellery.com/collections/laboratory-grown-diamond-engagement-ring
  [34] https://www.nataliemariejewellery.com/pages/the-engagement-process · [35] http://nataliemariejewellery.com/pages/frequently-asked-questions · [36] https://www.nataliemariejewellery.com/pages/shipping-production-info
- Temple & Grace : [40] https://www.templeandgrace.com.au/lab-grown-diamond-rings · [41] https://www.templeandgrace.com.au/faqs · [42] https://www.templeandgrace.com.au/
- Droit australien : [50] https://www.accc.gov.au/consumers/consumer-rights-guarantees/repair-replace-refund · https://www.accc.gov.au/business/small-business/small-business-toolkit/rights-and-responsibilities-of-your-small-business/small-business-rights-and-responsibilities
