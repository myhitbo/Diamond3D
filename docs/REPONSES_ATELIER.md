# Réponses de l'atelier

Journal des réponses reçues, par date. Chaque réponse est recopiée telle quelle, puis interprétée. Une réponse ici prime sur les hypothèses des autres documents.

Légende : **[V]** vérifié · **[I]** inféré · **[?]** à confirmer.

---

## 16 novembre 2026 — Yonathan Cohen (réponses au message du 14/11, et WhatsApp)

### Sources
- Fichier de réponses joint par le propriétaire : **pas reçu dans la session qui a écrit cette section**. À recopier tel quel dans `docs/atelier/2026-11-16_reponses.txt`. Les réponses ci-dessous viennent du **résumé écrit par le propriétaire** dans sa consigne du 16/11. [V] veut donc dire : écrit dans ce résumé ou dans les messages WhatsApp. Il faudra les comparer au fichier dès qu'il sera archivé.
- Messages WhatsApp du 16/11, recopiés dans le même fichier :
  - 10 h 37 : « Diamdor », « חפ 345837116 », « Essek patour » ;
  - 11 h 27 : il reste osek patour « le temps que ça marche », puis passe en société au-delà du plafond de chiffre d'affaires ;
  - 11 h 28 : « juste pas de prix automatique ».

### Correspondance avec les 22 points du message du 14/11

| Point | Question (résumé) | Réponse | Statut |
|---|---|---|---|
| 1 | Règle de bénéfice (fixe + 25 %, bornes) | Refusée : aucun prix ni bénéfice calculé automatiquement. Chaque prix est fixé à la main par Yonathan, modèle par modèle. | [V] |
| 2 | Plafond pour un diamant naturel | Refusé : aucun plafond. | [V] |
| 3 | Taux dollar → ₪ | Refusé : aucune conversion automatique. | [V] |
| 4 | Prix du platine | 280 ₪/g de métal + 100 ₪/g de façon (≈ 380 ₪/g). | [V] |
| 5 | Grille de prix des pierres | Pas de réponse dans le résumé. Sans objet si chaque prix est fixé à la main. | [?] / [I] |
| 6 | Polissage et rhodiage : un ou deux frais | Deux : polissage ≈ 10 $ (or jaune), rhodiage ≈ 10 $ de plus (or blanc). Supplément possible pour les pièces complexes (rivière). | [V] |
| 7 | Métal par défaut 14 k | Oui : or jaune 14 k. | [V] |
| 8 | Poids réels de la marquise et des 16 rondes, couleur et pureté | Sans réponse. | [?] |
| 9 | Qui vend : nom légal, numéro, adresse | « Diamdor », osek patour (עוסק פטור), n° 345837116. Adresse : sans réponse. | [V] (nom et numéro), [?] (adresse) |
| 10 | Paiement : carte en ligne, en plusieurs fois, Bit | Carte bancaire en ligne et Bit. Paiement en plusieurs fois : sans réponse. | [V] / [?] |
| 11 | Annulation : pas de retour sauf défaut ; première mise à taille offerte | Réponse de la FAQ `annulation` validée. La non-reprise du sur-mesure reste soumise à l'avocat. | [V] (atelier), [?] (droit) |
| 12 | Livraison Israël ; France plus tard | Israël : coursier (frais selon la ville, en général 150 à 200 ₪, fixés dans le devis) ou retrait à l'atelier de la Bourse. France : sans réponse. | [V] / [?] |
| 13 | Numéro WhatsApp et e-mail des devis | WhatsApp : +972 55-255-0455. E-mail : « en création ». | [V] / [?] |
| 14 | Délai de réponse à un devis | Sous 24 à 48 h ouvrées. | [V] |
| 15 | Plage de tailles, baguier | Sans réponse. | [?] |
| 16 | 5 réponses de la FAQ | Validées : `sur-mesure`, `paiement`, `annulation`, `livraison`, `entretien`. Livraison à l'étranger non confirmée. | [V] |
| 17 | Relecteur hébreu ; terme imposé ; poinçon obligatoire | Terme imposé pour le synthétique : sans réponse. Poinçon : l'atelier poinçonne ses bagues (point 20), sans dire si c'est obligatoire. | [?] / [I] |
| 18 | Planche avant/après des griffes | Validée. | [V] |
| 19 | Bijou de famille | Confirmé : rien n'est démonté sans accord ; l'or récupéré pèse un peu moins ; les pierres fragiles peuvent casser ; photos des étapes sur demande. Remise du bijou : apport à l'atelier recommandé ; si le client organise l'envoi, l'assurance est à sa charge ; si l'atelier organise un envoi international, il prend l'assurance en charge. Clause « le sertisseur décline toute responsabilité en cas de casse » : non publiée, soumise à l'avocat. | [V] |
| 20 | Guides : nickel, poinçon, certificat, tailles, dureté | Or blanc sans nickel ; bagues poinçonnées 585 ou 750. Sous 0,50 ct, pas de certificat *systématique* : couleur et pureté définies avec le client au devis. Tailles européennes (50, 51, 52…), « aussi utilisées en Israël ». Dureté 14 k / 18 k : sans réponse. | [V] / [?] |
| 21 | Fichiers `.3dm` et photos studio | Sans réponse. | [?] |
| 22 | Logo, photos dans chaque métal | Sans réponse. | [?] |

### Ce qui est acquis
- **Aucun prix automatique** [V] : ni prix « à partir de », ni bénéfice calculé, ni plafond, ni conversion dollar → ₪. Chaque prix est fixé à la main par Yonathan pour la pièce. Sans prix validé par lui, le site affiche « Sur devis ». Le moteur `src/lib/pricing/engine.ts` est abandonné, ni branché ni supprimé.
- **Statut** [V] : osek patour (עוסק פטור), donc pas de TVA aujourd'hui. Passage en société quand le plafond de chiffre d'affaires sera dépassé. Le site affiche la mention qui correspond au réglage `vatStatus` (`src/config/business.ts`).
- **Repères internes**, jamais affichés : platine 280 + 100 ₪/g ; polissage ≈ 10 $ ; rhodiage ≈ 10 $ de plus ; supplément pour une pièce complexe [V]. Voir `PRICING_RULES.md`.
- Métal par défaut : or jaune 14 k [V]. Délai de réponse aux devis : 24 à 48 h ouvrées [V]. Téléphone et WhatsApp : +972 55-255-0455 [V]. Paiement par carte en ligne et par Bit [V]. Livraison en Israël par coursier ou retrait à la Bourse [V].
- Or blanc sans nickel, poinçon 585 ou 750 [V]. Tailles européennes [V].
- Planche avant/après des griffes validée [V].

### Points d'attention
- **Numéro** [I] : Yonathan écrit « חפ » (numéro de société), puis « Essek patour ». Un osek patour n'a pas de ח.פ. : son numéro est en principe celui de sa carte d'identité. 345837116 ne commence pas par 51, comme les numéros de société. Le site l'affiche comme numéro d'osek patour.
- **Nom légal** [I] : pour un osek patour, le nom légal est en principe celui du titulaire. « Diamdor » serait alors un nom commercial. Nom du titulaire à demander.
- **Plafond de l'osek patour** (vérifié le 25/11, sources concordantes qui citent le tableau des montants de TVA de l'autorité fiscale, gov.il/he/pages/vat-rate-amount-new : Keep, Slate, Peko, OptiPay, cabinet Haddad) : **122 833 ₪ de chiffre d'affaires en 2026** (120 000 ₪ en 2024 et 2025), revalorisé chaque 1er janvier selon l'indice des prix. Il se mesure sur le **chiffre d'affaires**, pas sur le bénéfice : le prix entier de la bague compte, or et pierres compris. Échéance [I] : avec des bagues vendues entre 5 000 et 10 000 ₪, le plafond est atteint vers 12 à 25 bagues par an ; une bague en diamant naturel de 1 ct peut à elle seule en prendre une bonne part. Le dépassement oblige à passer osek mourché (TVA de 18 %) en cours d'année, au moment même où il se produit ; le bureau de la TVA doit être prévenu dans les 15 jours (règlement d'enregistrement, article 8, selon AITERRA). Le joaillier n'est pas dans les listes de professions tenues d'être osek mourché dès le premier shekel [I : listes partielles des sources]. Au passage en société, il faudra changer `vatStatus`, le nom légal et le numéro, et rouvrir le compte du prestataire de paiement au nom de la société.
- **Paiement intégral sur le site** (3/11) [I] : sans prix automatique, le paiement suit le devis (devis → prix fixé par Yonathan → lien de paiement), comme le prévoyait `PAIEMENT.md`.

### Encore sans réponse
Poids réels de la marquise (8), paiement en plusieurs fois (10), France (12), e-mail des devis (13, « en création »), plage de tailles et baguier (15), terme hébreu imposé pour le synthétique (17), dureté 14 k / 18 k (20), fichiers et logo (21-22), adresse, contact accessibilité, nom légal du titulaire. Relance : `docs/atelier/2026-11-16_relance.md`.

---

## 4 novembre 2026 — Yonathan Cohen (WhatsApp, réponse à la relance prix)

### Messages reçus (verbatim)
> Les 370 sh pour le prix de lor cest ce que je facture au client ainsi que toit les frais de fab (comme si je fabriquais pour une boutique normale) a *part* le bénéfice de la vente aui varie sur chaque bijoux...
> Pour des bague en laboratoire de fillancaille les benef sorn de 1500 a 3000 sh de benef en israel
> Alors quz en france les marges sont enormement plus grandes genre minimume 1000 € de benef 🤯
> Pareille pour le serti et matiere premiere je facture comme pour fab a une boutique cest les prix qui sont pratiques a la bourse ru vois
> Pour le platine je contacte les fonderie je te dit ca
> Ok pour les video
> Pour les benef sur les bijoux il faut trouver une idee genre sur chaque piece un benef fixe et apres ca modifie en fonction des matiere etc tu vois

### Ce qui est acquis
- **Tous les postes communiqués le 3/11 sont des prix « boutique »** (tarifs pratiqués à la Bourse) : métal 370–380 ₪/g, frais de fabrication, sertissage, pierres. Le bénéfice de la vente s'ajoute à part [V].
- **Métal et fabrication sont facturés séparément** : pas de double comptage entre les ₪/g et la fonte au gramme [I, d'après « ainsi que tous les frais de fab »].
- **Bénéfice, bague de fiançailles en diamant synthétique, Israël : 1 500 à 3 000 ₪** par pièce [V].
- **France : bénéfice d'au moins 1 000 € par pièce** chez les bijoutiers, selon Yonathan [V comme témoignage, non vérifié].
- **Règle voulue** : un bénéfice fixe par pièce, modulé selon les matières [V]. Proposition de formule dans `PRICING_RULES.md`.
- **Vidéos de fabrication : d'accord** [V].

### Encore en attente
- Prix du platine (Yonathan interroge les fonderies).
- Taux de change dollar → ₪ (non répondu ; proposition : taux représentatif de la Banque d'Israël).
- Validation de la formule de bénéfice et de ses valeurs, et le bénéfice pour un diamant naturel, une alliance, une alliance de kiddouchin.

## 3 novembre 2026 — Synthèse écrite de l'échange avec l'atelier

Source : `docs/atelier/2026-11-03_synthese_reponses.docx` (document de travail transmis par le propriétaire). Les montants sont ceux communiqués, **indicatifs**.

### Modèle marquise (ring-001)
- Le fichier est fait pour la fabrication et l'impression 3D, pas pour le web.
- Version web : **replier visuellement les griffes** et **supprimer la forme en « 8 »** au bout de l'alliance.
- Le maquettiste **ne peut pas** faire la modification : une solution de retouche est à trouver de notre côté. Voir « Conséquences ».

### Métaux (confirmé)
Or 18 k et 14 k (jaune, blanc, rose), platine. **Pas d'argent 925** : il noircit et ne correspond pas au positionnement voulu.

### Autres modèles et photos
L'atelier va chercher 3 modèles `.3dm` (et leurs STL si possible), dont une bague à plusieurs formes de pierre centrale, ainsi que des photos studio de bijoux réels. Transmission ultérieure.

### Prix

Exemple de référence : solitaire en or jaune 14 k, environ 2,5 g, diamant de laboratoire 1 ct.

| Poste | Montant communiqué |
|---|---|
| Diamant de laboratoire 1 ct | ≈ 132 USD |
| Maquette 3D | 10 USD |
| Impression 3D | ≈ 20–25 USD |
| Reprise de fonte et polissage | 10 USD/g, soit ≈ 25 USD pour 2,5 g |
| Serti de la pierre centrale (≤ 2 ct) | ≈ 10 USD |
| Polissage final | ≈ 5 USD |
| Rhodiage (or blanc uniquement) | ≈ 20–25 USD selon le bijou |

Métal facturé au client particulier :
- or 14 k : 370–380 ILS/g, pour un coût d'achat de 270–280 ILS/g selon le cours ;
- or 18 k : 470–480 ILS/g ;
- professionnels (bijouteries) : or 18 k à 500–550 ILS/g selon la pièce.

Sertissage : pierre centrale ≤ 2 ct ≈ 10 USD, > 2 ct ≈ 20–25 USD, petites pierres ou pavage ≈ 1,50 USD/pierre, rivière ≈ 2–3 USD/pierre au maximum.

TVA israélienne à ajouter. Le taux standard est de **18 %** depuis le 1ᵉʳ janvier 2025 [V : guides fiscaux concordants, source primaire non relue].

Marge : **variable selon la complexité**. Un solitaire classique et une pièce très personnalisée n'ont pas la même marge ; certaines marges demandent un échange.

### Poids
Le poids de la maquette sert de référence, mais le poids réel varie. Exemple : des boucles d'oreilles estimées à 4,5 g ont pesé 4,35 g une fois fabriquées (−3,3 %). Les poids doivent être affichés comme **approximatifs**. Pas encore de densités d'alliages ni de taux de perte standard.

### Pierres et certificats
- Diamants naturels et de laboratoire.
- Certificat disponible **à partir de 0,50 ct** : GIA pour les naturels, IGI pour les laboratoires. Des naturels non certifiés peuvent être proposés moins cher.
- Projet : un **certificat global par bijou** émis par un laboratoire (titre du métal, poids et qualité des pierres), utile pour l'assurance.

### Tailles et après-vente
- **Première mise à taille offerte.** Après un an, payante : rétrécissement ≈ 100 ILS, agrandissement sur devis selon le métal ajouté.
- Réparations et entretien possibles grâce à l'atelier.

### Gravure et finitions
Gravure laser, **20 à 25 polices**, en hébreu, anglais, chinois et autres langues. Un cahier de finitions existe.

### Commandes et fabrication
- Délai standard : **14 jours ouvrés** (≈ 3 semaines). L'urgence en 2–3 jours reste exceptionnelle et ne doit **pas** être annoncée.
- Particuliers en direct : acompte de **50 %**, ou 30 % pour un client hésitant (pour bloquer une pierre).
- **Site : paiement intégral à la commande**, expédition une fois le bijou terminé.

### Organisation
Le responsable de l'atelier prépare les devis, plutôt en fin de journée. Un logo existe.

### Langues
Français et anglais prévus ; hébreu au lancement à confirmer.

### Conséquences pour le projet
1. **Griffes et « 8 » : c'est à nous de les corriger.** *Fait le 3/11 : voir `docs/images/retouche-ring-001-avant-apres.jpg`, en attente de validation.* Piste [I] : retouche faite dans le pipeline, sur la version web uniquement. Les griffes seraient coupées juste au-dessus de la pierre, avec une extrémité arrondie, et les maillages du « 8 » retirés. Le fichier de fabrication reste intact. Le résultat est soumis à validation visuelle de l'atelier. « Replier » les griffes (les courber sur la pierre) est plus difficile que les couper : à faire valider sur une capture avant d'aller plus loin.
2. **Moteur de prix** : la structure est connue (métal au gramme + postes de façon + pierre + sertissage par pierre + options + TVA). Il manque la marge sur les postes en USD, le taux de change et la règle d'arrondi. Voir `PRICING_RULES.md`.
3. **Prix affiché** : avec une marge variable, le site doit afficher un prix **indicatif** (« à partir de »), confirmé par l'atelier dans le devis. C'est cohérent avec le statut indicatif / calculé / confirmé du cahier des charges.
4. **Poids** : afficher « ≈ » et une fourchette d'environ ±5 % [I, à partir de l'unique exemple de −3,3 %].
5. **Paiement** : intégral sur le site, acompte de 50 % en direct. À refléter dans DEV-5.
6. **Délai** : afficher « 14 jours ouvrés », sans option express.
7. **Libellés** : pour une vente en Israël, « diamant de laboratoire » est l'usage. En France, le décret 2002-65 impose « synthétique » (voir plus bas). Les libellés doivent donc dépendre du pays.

---

## 22 octobre 2026 — Yonathan Cohen (WhatsApp, transmis par le propriétaire le 3 novembre)

### Message reçu

> Pierre :
> Diamant naturel
> Diamant laboratoire
> Diamant de couleur : noir, rose, bleu, tt les couleurs
> Pierre de couleur :
> Emeraude, saphire, rubis naturel (et en synthétique c'est du verre genre bcp moins cher)
> Métaux :
> Or 14/18 k (jaune, rose, blanc)
>
> Pour le platine j'ai jamais eu de demande, c'est rare en Israël, faut que je me renseigne.

Compléments du propriétaire : **le platine est finalement confirmé**. Bibliothèque de modèles : **CGTrader**, y compris sa partie gratuite. **dd-diamond.com** est un exemple de site avec de la 3D (rectification du 3 novembre), pas une bibliothèque.

### Ce qui est acquis

| Sujet | Réponse | Conséquence pour le projet |
|---|---|---|
| Diamants | Naturel **et** laboratoire | option « Origine » conservée (déjà dans le schéma, sans effet visuel) |
| Diamants de couleur | Noir, rose, bleu, « toutes les couleurs » | nouveau rendu de pierre teintée ; liste exacte des couleurs à fixer [?] |
| Pierres de couleur | Émeraude, saphir, rubis, naturels | trois matériaux de pierre dédiés (indice et teinte propres) |
| Pierres de couleur synthétiques | Proposées, beaucoup moins chères | voir point de vigilance 1 |
| Métaux | Or 14 k et 18 k, jaune, rose, blanc | 6 combinaisons titre × couleur ; densités différentes entre 14 k et 18 k |
| Platine | Oui (confirmé après coup) | 7ᵉ métal ; demande rare en Israël [I] : à proposer sans le mettre en avant |
| Griffes longues | Réponse déjà donnée selon le propriétaire, contenu non transmis | toujours à consigner ici [?] |

### Points de vigilance

1. **« Synthétique, c'est du verre » : la distinction compte, juridiquement et commercialement.**
   - Un rubis, un saphir ou une émeraude **synthétique** est le même minéral que la pierre naturelle (même composition, même structure cristalline), fabriqué en laboratoire. Une **imitation** (verre, par exemple) a seulement l'apparence de la pierre, avec une autre composition [V : définition GIA reprise par l'AGTA ; page GIA sur les imitations].
   - En France, le décret n° 2002-65 impose le mot **« synthétique »** pour ces pierres. Selon la DGCCRF, il interdit aussi « de culture » et « cultivé », ce qui exclut « diamant de laboratoire » dans un affichage commercial en français [V : DGCCRF, OQLF, réponse ministérielle ; texte Légifrance non relu].
   - Les règles israéliennes et américaines n'ont pas été vérifiées [?].
   - Décision : dans le configurateur, trois catégories distinctes, **naturelle / synthétique / imitation**, jamais confondues. Libellé français « diamant synthétique », avec un libellé adapté par pays (« lab-grown » en anglais, à vérifier pour chaque marché). L'atelier doit dire ce qu'il vend réellement : pierres synthétiques ou verre [?].
2. **Diamants de couleur** : les diamants noirs et beaucoup de diamants de couleur du commerce sont traités, ou synthétiques. L'origine (naturelle / traitée / synthétique) doit être indiquée par pierre [I ; à confirmer avec le certificat].
3. **Exemple DD Diamond** : voir ci-dessous.

### Exemple de site : dd-diamond.com (analysé le 3 novembre 2026)

Rectification du propriétaire : DD Diamond est un **exemple de site avec 3D**, pas une source de modèles. La bibliothèque de modèles est **CGTrader** (voir `CAHIER_DES_CHARGES.md`, PIP-7).

**Qui** [V] : boutique Shopify de DD.Diamond, fondée en 2015 par David Douieb (diplômé du GIA), bureaux à Anvers, en France et en Israël ; 333 produits dont 127 bagues ; bagues de 290 $ à 12 900 $ (médiane 1 700 $) ; métaux or 14/18 k jaune / blanc / rose et platine.

**Ce que fait réellement leur « 3D »** (fiche *Floating Pear Ring*, inspectée dans un navigateur) [V] :
- ce n'est **pas de la 3D** : c'est l'application Shopify **Magic 360** (Magic Toolbox), qui fait défiler **36 photos** (1280 × 1040) de la vraie bague prises sur un plateau tournant ; bouton « 360° », « Drag to spin », zoom, plein écran ;
- aucun moteur 3D, aucun fichier de modèle ;
- la rotation ne se fait que sur un axe horizontal ;
- le tour à 360° n'existe **qu'en or blanc** ; l'or jaune et l'or rose n'ont que des photos fixes. Changer de métal ne change pas le tour ;
- aucune configuration : pierre, carat et forme ne se choisissent pas visuellement ; « autres tailles de diamant sur demande » par e-mail ; bouton « Request a quote » ;
- page lourde : environ **11 Mo** téléchargés, pisteurs Facebook / Google / Klaviyo, contact WhatsApp.

**Ce qu'il faut en retenir** [I] :
- Le point fort est réel : ce sont des **photos du vrai bijou**, donc un réalisme total pour la pièce photographiée. Le client voit la vraie pierre. C'est ce que montrent aussi James Allen et Blue Nile avec leurs vidéos de diamants.
- Les limites sont celles de la photo : un shooting de 36 vues par bijou **et par métal**, aucune variante sans nouveau shooting, rotation sur un seul axe, poids important.
- Pour JR Diamond, la bonne réponse combine les deux : le **configurateur 3D** pour toutes les combinaisons (métal, pierre, forme), plus des **photos ou un tour à 360° de la pièce réelle** quand elle existe, affichés à côté du rendu (exigence CFG-10). On garde la preuve de la photo et la souplesse de la 3D.
- À reprendre de DD Diamond : bouton « Demander un devis » visible, contact WhatsApp (important en Israël), guide des tailles, page d'éducation sur les diamants, photos portées sur la main.

### Sources

- Définition synthétique / imitation : https://4cs.gia.edu/en-us/blog/what-are-synthetic-gemstones-3/ · https://www.gia.edu/gem-imitation · https://jckonline.com/?p=34528
- Réglementation française : https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/qualite-et-conformite-des-bijoux-comportant-des-pierres · https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26529621/diamant-synthetique · https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE5268.pdf
- DD Diamond (exemple) : https://www.dd-diamond.com/products/floating-pear-ring (inspection navigateur), https://www.dd-diamond.com/ · https://www.dd-diamond.com/pages/about · https://www.dd-diamond.com/pages/design-your-jewelry · catalogue public `https://www.dd-diamond.com/products.json`
