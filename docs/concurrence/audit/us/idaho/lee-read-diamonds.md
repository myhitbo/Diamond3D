# Lee Read Diamonds (Meridian, Idaho)

- **Site** : Lee Read Diamonds, 650 E. Sonata Ln, Meridian, ID 83642 (joaillier local de 3e génération, [V] pied de page)
- **Adresse** : https://www.leeread.com/ ; page de départ https://www.leeread.com/page/build-your-own-ring.html
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 (parcours complet) ; affichage iPhone 13 (liste de contrôles et capture seulement)
- **Statut** : **partiel**. Le constructeur est un cadre tiers (AVA Couture, `avacoutures.com/retailer/band-builder.html?r_id=211065`, robots.txt autorisé) qui recharge sa page à chaque clic ; il est lent sur la machine d'audit et plusieurs enchaînements ont été interrompus. Panier et paiement : **non atteignables** (voir Limites).
- Repères : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options relevées |
| --- | --- |
| 1. `/page/build-your-own-ring.html` | [V] Une seule page : « Eternity Band Builder », « Fancies by AVA Eternity Band Builder ». Ce n'est **pas** un constructeur de bague de fiançailles : seulement des alliances « eternity » (pierres tout autour) |
| 2. Forme de pierre | [V] 10 : Round, Oval, Emerald, Asscher, Cushion, Princess, Pear, Marquise, Heart, Radiant |
| 3. Profil de monture | [V] 10 : Signature-Cup (défaut), Bezel, Channel, French Pave, Flush, Trellis, Single Prong, Half Bezel, U-Prong, Gallery |
| 4. Nombre de pierres | [V] 5 stone, 7 stone, Halfway, 3/4 way, Eternity (défaut), East West Halfway, East West Eternity (les deux derniers grisés pour Round) |
| 5. Taille de pierre (ct unitaire) | [V] 0.03, 0.07, 0.10 (défaut), 0.15, 0.20, 0.25, 0.30, 0.40, 0.50 (0.03 absent du DOM pour Round ; la liste se réduit selon la forme et le nombre de pierres) |
| 6. Métal | [V] 7 pastilles : 14K blanc (défaut), 14K jaune, 14K rose, 18K blanc, 18K jaune, 18K rose, platine |
| 7. Taille de doigt | [V] liste déroulante, défaut 6.5 |
| 8. Qualité | [V] « Earth Mined- G/VS » ($7,800 au défaut) et « Earth Mined- GH/SI » ($6,870). Aucune option synthétique relevée |
| 9. Fin | [V] Récapitulatif « Your Selection » avec SKU et MSRP ; deux boutons : « Contact Retailer » et « Send Hint ». **Pas de bouton d'achat ni de panier** |

## Contrôles vérifiés

Cadre construit : [V] prêt en 2,0 à 3,4 s (cadre dans la page) et 2,5 s (chargé seul). Les clics ci-dessous sont des clics sur les libellés du cadre, 3 s d'attente après chaque clic.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Forme Oval | pastille | [V] 25 pierres, 2,50 CTW, SKU ET1005 | $9,013 (G/VS), $8,183 (GH/SI) | OK |
| Forme Emerald | pastille | [V] 28 pierres, 2,80 CTW ; une seule qualité (G/VS) | $8,073 | OK |
| Forme Asscher | pastille | [V] 24 pierres, 2,40 CTW ; une seule qualité | $9,455 | OK |
| Forme Cushion | pastille | [V] 24 pierres, 2,40 CTW | $10,148 / $9,455 | OK |
| Forme Princess | pastille | [V] 24 pierres, 2,40 CTW | $7,538 / $6,908 | OK |
| Forme Pear | pastille | [V] bascule seule sur « East West Eternity » et GH/SI, 16 pierres, 1,60 CTW | $5,583 | OK, changement non annoncé |
| Forme Marquise | pastille | [V] clic accepté ; résultat non relevé (page rechargée, mesure perdue) | non lu | partiel |
| Heart, Radiant | pastille | Non testés (le script a été coupé) | n/a | non testé |
| Forme Round | pastille | [V] état de départ, 21 pierres, 2,10 CTW, SKU ET1002-10-SC-EM2-14W-650 | $7,800 / $6,870 | OK |
| Nombre : 5 stone | bouton | [V] 5 pierres, 0,50 CTW, SKU 5ST1002 ; tailles proposées dès 0.10 | $3,158 | OK |
| Nombre : 7 stone | bouton | [V] 7 pierres, 0,70 CTW | $3,703 | OK |
| Nombre : Halfway | bouton | [V] 10 pierres, 1,00 CTW | $4,568 | OK |
| Nombre : 3/4 way | bouton | [V] 16 pierres, 1,60 CTW | $6,325 | OK |
| Nombre : East West Eternity / Halfway | bouton | [V] désactivés pour Round (le clic est sans effet) | n/a | désactivé |
| Taille 0.07 | pastille | [V] 21 pierres, 1,47 CTW | $4,420 | OK |
| Taille 0.15 | pastille | [V] 19 pierres, 2,85 CTW | $10,830 | OK |
| Taille 0.25 | pastille | [V] 16 pierres, 4,00 CTW | $16,845 | OK |
| Taille 0.50 | pastille | [V] 14 pierres, 7,00 CTW | $44,478 | OK |
| Taille 0.03 | pastille | [V] absente pour Round / Signature-Cup ; apparaît dans l'interface pour d'autres cas (une capture antérieure l'affiche avec un message « no product found », [I]) | n/a | non reproduit |
| Profil Bezel | vignette | [V] 17 pierres, 1,70 CTW ; le **métal passe de blanc à 14K jaune** dans la désignation | $7,033 | OK, effet de bord |
| Profil Channel | vignette | [V] clic accepté ; la désignation affichée reste « Bezel » (3 s) | non relevé | à confirmer |
| Profil French Pave | vignette | [V] 21 pierres, 2,10 CTW, désignation « French Pave », métal 14K jaune | $7,400 | OK |
| Flush, Trellis, Single Prong, Half Bezel, U-Prong, Gallery | vignette | Non testés (script coupé par la limite de 300 s) | n/a | non testé |
| Métal 14K jaune / rose, 18K blanc / jaune / rose, platine | pastille | [V] le libellé « Choose your Metal » change et la photo se recolore (capture rose : bague rose) ; **SKU, désignation et MSRP restent ceux du 14K blanc 3 s après le clic** | $7,800 inchangé | effet prix non établi |
| Taille de doigt (liste) | select | [V] la liste existe, défaut 6.5 ; valeurs 4 et 9.75 : script coupé avant lecture | n/a | non lu |
| Qualité GH/SI | bouton | [V] présent, prix affiché sur le bouton ($6,870 au défaut) | $6,870 | OK |
| Reset | lien | [V] existe (`resetAllFilter()`), non retesté après coupure | n/a | non testé |
| Contact Retailer | bouton | [V] ouvre une fenêtre « Request Viewing » : prénom, nom, e-mail, téléphone, commentaire, captcha ; rien envoyé | n/a | OK |
| Send Hint | bouton | [V] ouvre « Email to Friend » : destinataires, message, nom, e-mail, copie, captcha ; rien envoyé | n/a | OK |
| Vidéo AVA Care | icône | [V] fonction `playAvaCareVideo(...)` présente ; lien de texte « AVA Care » introuvable ; vidéo non lue | n/a | non testé |
| Zoom / 360° / AR / essayage | n/a | [V] aucun contrôle trouvé dans la galerie (4 images dont 2 photos portées en main) | n/a | absent |
| Chat « Hi there! » + « Text us » | bulle | [V] bulle de chat flottante sur la page ; non ouverte (règle) | n/a | non testé |
| Menu : Phone, Location, Book an Appointment, Wishlist, Login | liens | [V] `tel:208376-8800`, page magasin, `/schedule-an-appointment.html`, `/wish-list.html`, `/login-checkout.html` ; non suivis (pas de compte) | n/a | non testé |
| Newsletter (champ e-mail + SUBMIT) | formulaire | [V] présent au pied de page ; rien saisi | n/a | non testé |
| Call / Text-SMS pied de page | liens | [V] `tel:(208) 376-8800` et `sms:2083768800` | n/a | présents |

Total relevé : 49 contrôles sur ordinateur, 25 en affichage iPhone ([V] `controls.cjs`).

## Options disponibles

- **Formes** : Round, Oval, Emerald, Asscher, Cushion, Princess, Pear, Marquise, Heart, Radiant.
- **Profils** : Signature-Cup, Bezel, Channel, French Pave, Flush, Trellis, Single Prong, Half Bezel, U-Prong, Gallery.
- **Nombres de pierres** : 5, 7, Halfway, 3/4, Eternity, East West Halfway, East West Eternity.
- **Tailles unitaires** : 0.03 à 0.50 ct (9 valeurs).
- **Métaux** : or 14 k blanc, jaune, rose ; or 18 k blanc, jaune, rose ; platine.
- **Qualité** : diamant « Earth Mined » G/VS ou GH/SI. Aucun diamant synthétique dans ce constructeur.
- **Absents** : gravure, pierres de couleur, certificat au choix, bague de fiançailles, solitaire, achat en ligne.

## Prix, délais, retours, garanties

- **Prix** : [V] un seul prix « MSRP » affiché pour la bague complète, calculé en direct selon forme, nombre, taille, qualité. Aucune décomposition (métal, pierres, façon). Mention : « Total stone count and total carat weight could vary ».
- **Exemples** : Round 0,10 ct éternité 14K blanc, $7,800 ; 5 pierres, $3,158 ; 0,50 ct, $44,478 (7,00 CTW).
- **Délai de fabrication** : [V] non affiché sur la page.
- **Retours, livraison, financement** : non affichés dans le constructeur ; non lus ailleurs sur le site.
- **Garantie** : [V] « AVA Care » incluse gratuitement : resserrage des pierres, réparation des griffes, remise en état et polissage, rhodiage, remplacement de pierres abîmées, réparation de tige fissurée, un redimensionnement offert ; carte d'enregistrement par bijou.
- **Libellé du synthétique** : sans objet (aucune offre).

## Confiance et service

- [V] Pied de page : American Gem Society, BBB, GIA, Jewelers of America, Jewelers Vigilance Committee, Jewelers for Children, Make-A-Wish.
- [V] Logos Google Reviews, Facebook, The Knot, WeddingWire (liens vers les fiches, notes non lues).
- [V] Horaires : mardi-samedi 10 h-18 h ; magasin physique à Meridian ; rendez-vous en ligne.
- [V] Langue : anglais ; devise : dollar. Pas de suivi de commande, pas de photos d'atelier sur cette page.

## Points forts à retenir pour JR Diamond

1. **Le prix change à chaque option et la désignation affiche SKU et poids total** (« 2.10CTW, 21 pierres »). Preuve : MSRP de $7,800 à $44,478 selon la taille de pierre, SKU qui suit chaque choix.
2. **Les options impossibles sont grisées plutôt que cachées** (East West Eternity pour Round). Preuve : boutons `disabled` relevés.
3. **Une garantie lisible sous le constructeur** (AVA Care, liste de 6 services, carte d'identité du bijou). Preuve : bloc « Included with Every Purchase ».
4. **Photos portées en main à côté du rendu** dans la galerie. Preuve : 4 images dont 2 sur une main.
5. **Bouton « Send Hint »** (envoyer un indice à un proche) : idée reprise de la liste « partager ». Preuve : fenêtre « Email to Friend ».

## Défauts observés

- [V] Aucun achat ni panier : seulement « Contact Retailer » (demande de rendez-vous avec captcha).
- [V] Le prix reste identique pour 14K, 18K et platine 3 s après le clic, alors que l'image change : soit le prix ignore le métal, soit il se met à jour trop tard ([I] à confirmer).
- [V] La désignation affichée ne suit pas toujours le clic (profil Channel) et un clic sur un profil peut changer le métal (Bezel passe en jaune) ; Pear force « East West Eternity » sans message.
- [V] Page très lente à charger sur la machine d'audit ; la page entière se recharge à chaque option (cadre rechargé, mesure impossible à la main).
- [V] Erreurs réseau relevées : `add_to_purchase_ajax.php` et `add_to_vendor_wishlist_ajax.php` renvoient 404 ; `nobanner.jpg` 404 ; erreur JS « `$.cookie is not a function` ».
- [V] Aucune vue 3D ni 360° : photos pré-rendues par variante.

## Limites de l'audit

- Parcours des options du constructeur interrompu : Marquise (résultat), Heart, Radiant, six profils, tailles de doigt, Reset, vidéo AVA Care non lus.
- Le nombre d'images affichées n'a pas pu être mesuré (images en arrière-plan) : seul le temps de prêt du cadre est relevé (2,0 à 3,4 s ordinateur) ; **temps en affichage iPhone non mesuré**.
- Pas d'accès au panier : le constructeur n'en a pas. Les pages bagues « ready-to-wear » du site n'ont pas été auditées.
- Prix lus à 3 s après le clic ; un retard d'affichage peut fausser les lignes marquées « inchangé ».
- Aucun formulaire envoyé ; le chat n'a pas été ouvert.

## Sources

- https://www.leeread.com/page/build-your-own-ring.html (page et pied de page, lus le 15/11/2026)
- https://www.avacoutures.com/retailer/band-builder.html?r_id=211065 (constructeur, robots.txt autorisé)
- Captures et sorties : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/lee-read-diamonds/`
