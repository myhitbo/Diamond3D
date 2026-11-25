# Audit : Jewelers Workshop (Madison, Wisconsin)

- **Site** : Jewelers Workshop, https://www.jewelersworkshop.com/ (page de départ : /page/custom-ring-builder.html)
- **Date** : 15/11/2026 (date fixée par la consigne ; contrôles faits à l'horloge de la session, le 25/11/2026)
- **Appareils** : Chromium ordinateur 1366x900 et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Assistant en étapes (JewelerOS) parcouru jusqu'à l'étape 4 ; **concepteur 3D non ouvert** : le dernier clic appelle `POST https://www.jeweleros.com/api/create/from-ring-config/`, interdit par le robots.txt de jeweleros.com (`Disallow: /api/`). Cet appel a été observé sur le site jumeau Kesslers (même widget, même code) ; ici, le dernier clic n'a pas été fait. Pas de vente en ligne : le site est un catalogue sans panier utilisable (voir plus bas).
- **Garde-fous** : robots.txt lu en entier : `/*?stoneID=`, `/*?ringType=`, `/*ajax.php`, `/exec/`, `/admin/` interdits (non ouverts) ; ClaudeBot explicitement autorisé, mais l'audit s'est tenu aux règles du groupe `*`. Aucun formulaire rempli, aucun chat, aucun paiement.
- **Repères** : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vérifié [V]) |
|---|---|
| Pastilles de métal (étape 1) | Or jaune (actif), blanc, rose : présentes ; effet sur les miniatures non actionné ici [I : identique à Kesslers, vérifié là-bas] |
| 1. Style | Solitaire, Halo, Hidden Halo, Bezel, Cathedral, Full Pavé, Toi et Moi, Three Stone, « Start from scratch » |
| 2. Pierre centrale | bascule NATURAL / LAB GROWN ; Round, Oval, Cushion, Emerald, Princess, Asscher, Marquise, Pear, Radiant, « Decide later » |
| 3. Taille | 0,5 / 1 / 1,5 / 2 / 2,5 / 3 / 4 / 5 carat, « Decide later » |
| 4. Délai | 1-4 semaines, 1-3 mois, 3-6 mois, « Not sure yet » (**non cliqués** : appel interdit) |
| Concepteur 3D | **non atteint** |
| Après le concepteur | « Finalize & order your ring » : en fait un rendez-vous en salle (texte de /page/custom-engagement-rings.html) |

Quatre étapes sur ordinateur **et** sur iPhone (pas d'étape magasin : un seul lieu) [V].

## Contrôles vérifiés

Relevé automatique de la page de départ : 39 contrôles visibles (ordinateur), 11 (iPhone).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Pastilles Yellow / White / Rose | boutons | Présentes (`data-metal`), actif = jaune | non | présentes, effet non actionné |
| 8 styles | cartes | Style « Solitaire » cliqué : passe à l'étape 2 ; les 7 autres non cliqués | non | OK pour 1 sur 9 ; même widget que Kesslers où 9/9 passent |
| NATURAL / LAB GROWN | bascule | « LAB GROWN » cliqué, reste à l'étape 2 | non | OK |
| Formes (Marquise testée) | cartes | Marquise : passe à l'étape 3 ; 9 autres formes non cliquées | non | OK pour 1 sur 10 |
| Tailles (1 carat testée) | cartes | Passe à l'étape 4 | non | OK pour 1 sur 9 |
| 4 délais | cartes | Non cliqués : appel interdit | non | **non testé : adresse interdite** |
| Back, Skip | boutons | Présents ; non actionnés | non | non testés |
| Concepteur 3D (métal, griffes, taille, gravure…) | outil tiers | Non ouvert | non | **non testé : adresse interdite** |
| Call or Text 608-251-7705 | lien `tel:` | Présent, non suivi | non | non testé |
| Schedule an Appointment | lien | Mène à /schedule-an-appointment.html ; formulaire non rempli | non | lien présent |
| Menu (Design Process, Gallery, Workshop Services, Learn, About Us) | menus | Liens lus dans le code de la page | non | OK (lecture) |
| Wish-list (cœur) | lien | /wish-list.html : présentation du service et inscription ; non remplie | non | page lue |
| Catalogue /diamond-jewelry/rings : filtre Metal | cases | 6 options listées (voir plus bas) ; non cochées | non | listées seulement |
| Catalogue : « Quick View », « View Detail » | boutons | Présents | non | non testés |
| Catalogue : « Ring Size » + « Add » | liste + bouton | 4 à 12 par demi-taille et « Greater than 12 » ; « Add » non actionné (appelle probablement un script `ajax.php`, interdit [S]) | « Call for Price » | non testé |
| /cart | lien | Redirigé (301) vers /cart.html, qui répond 200 avec un corps sans contenu lisible | non | OK, vide |
| Facebook, Instagram, Pinterest, Google Maps | liens | Présents, non suivis | non | non testés |
| Newsletter « Subscribe to Shop News » | formulaire | Non rempli | non | non testé (règle) |

## Options disponibles

- **Assistant** : voir Parcours. Aucun prix ni budget demandé [V].
- **Catalogue** : trois galeries (Diamond Jewelry : bagues, bandeaux larges, boucles d'oreilles, pendentifs ; Gemstone Jewelry ; Gold & Silver Jewelry, avec broches). Bagues de diamant : **144 articles**, filtre de métal : White Gold, Yellow Gold, Rose Gold, White & Yellow Gold, Platinum, Rose & White Gold ; catégories ; 20 par page [V]. Filtres « Patterns & Styles » (12 styles : Art Deco, Celtic, filigrane, floral, etc.) [V, liens].
- **Services** : conception sur mesure, rendez-vous, réparation, restauration, remodelage (« restyling »), éducation sur le naturel, le synthétique et les pierres de couleur, gravure à la main, finitions, métaux, bagues.
- **Modes de vue** : non relevés (photos des galeries seulement) [V en lecture du code].

## Prix, délais, retours, garanties

- **Prix** : **aucun prix affiché** sur les bagues de la galerie : « Call for Price » [V, /diamond-jewelry/rings]. Dans l'assistant, aucun prix [V]. Le prix du concepteur n'a pas été vu. Les conditions précisent : « all prices are final », prix variables sans préavis avec le cours de l'or, prix erroné non honoré, tout en dollars US [V, /page/terms-and-conditions.html].
- **Délai** : « we can have it ready for you in just a couple of weeks » (page des bagues sur mesure) ; « it usually takes less than a month to build most jewelry » une fois le dessin fait (page du processus) [V].
- **Retours** : **aucune politique de retour ni de garantie lue** sur les pages ouvertes (conditions générales, bagues sur mesure, processus). Seule règle liée : le certificat d'un diamant retourné doit être rendu sinon frais de remplacement [V]. Les diamants peuvent varier de 0,05 ct du poids annoncé [V].
- **Certificats** : « Loose diamonds are shipped with a diamond grading report and appraisal » de « one of two highly respected diamond laboratories », laboratoires non nommés [V, conditions].
- **Livraison, paiement** : conditions parlent d'expédition et de service client ; aucun tarif de livraison, aucun moyen de paiement affiché sur les pages lues [V : non trouvé]. Pas de panier utilisable.
- **Synthétique** : page « Lab Grown Diamonds » : « as real and as brilliant as mined diamonds », « exact same chemical composition », « less expensive and more environmentally conscious » [V]. Libellé employé : **« lab grown » / « lab created »**, et « man-made ».
- **Éthique** : politique Kimberley (« No Conflict Diamonds ») [V].
- **Devise, langue** : dollars US, anglais [V].

## Confiance et service

- [V] Atelier depuis 1969 (« started out with a blanket on Library Mall »), 2110 Atwood Ave, Madison ; « Every piece is created in-house » ; spécialistes nommés (Jackie, Jake) ; propriétaire Jason Braden. Horaires affichés (fermé dimanche et lundi), horaires de fêtes.
- [V] **Avis** : deux citations de clients Google sur la page des bagues sur mesure (5 étoiles), sans note globale ni lien vérifiable.
- [V] Rendez-vous, téléphone et SMS (608-251-7705), e-mail ; aucun chat ouvert ; consentement SMS lié au concepteur.
- [V] **Preuves de fabrication** : page « Jewelry Design Process » en 4 étapes (idées, rendus 2D à la main ou sur écran, **modèle en résine ou cire à essayer** avant la finition, remise de la pièce). Aucune photo ou vidéo de fabrication d'une commande, aucun suivi de commande lu.
- [V] Parcours en trois temps : « Design your ring online in stunning 3D », « Pick out your center stone in our Madison, WI showroom », « Finalize & order your ring with our expert team ».

## Points forts à retenir pour JR Diamond

1. **Pas de pression** : le parcours est conçu comme une préparation de rendez-vous (3D, choix de la pierre en salle, finalisation), avec témoignage « We didn't feel any pressure to move forward » (/page/custom-engagement-rings.html). Preuve : texte lu.
2. **Essayer une maquette avant la finition** : modèle résine ou cire que le client peut essayer, voir à l'échelle et corriger (/page/jewelry-design-process.html). C'est la même logique que « ce que vous voyez existe » ; JR Diamond peut aller plus loin avec la photo de la maquette réelle.
3. **Délai annoncé court et honnête** : « less than a month » une fois le dessin fait. Preuve : page du processus.
4. **Éducation sur le synthétique** : une page claire sur le fait que la composition est identique, avec l'argument du prix (/page/lab-grown-diamonds.html). Reprise utile pour les guides de JR Diamond.
5. **Un widget tiers à marque blanche en 1,1 à 1,3 s** : les options de l'assistant apparaissent en 1,33 s (ordinateur) et 1,15 s (iPhone) [mesure sur cette page] : pas de 3D lourde au démarrage.

## Défauts observés

- **Aucun prix nulle part** (« Call for Price », prix absent de l'assistant) : le visiteur ne peut ni budgéter ni comparer avant d'appeler.
- **Aucune politique de retour, de garantie ni de livraison lue** : défaut de transparence majeur pour un achat en ligne.
- **Texte d'une autre entreprise** sur la galerie des bagues de diamant : « Maharaja's is a family owned business whose tradition began December 17, 1977 when the Samtani's opened their first location in Panama City Beach, Florida » [V, /diamond-jewelry/rings] : reste d'un modèle de site recopié, qui nuit à la confiance.
- **Annonces de fêtes périmées** : horaires « Sunday 12/7, 12/14, 12/21 » alors que la date du jour est le 25/11/2026 ; message « open sundays through christmas (12/10, 12/17) » avec des dates incohérentes entre elles [V].
- **Les conditions générales disent que le site vend** (« any purchase from Jewelers Workshop Website ») **alors que le parcours se termine en salle** : promesse « order your ring » non tenue en ligne [V, textes lus].
- **Faute** « Design SErvices & More » dans le pied de page [V].
- **Concepteur 3D tiers non lisible pour un robot** : mêmes limites que Kesslers (appel interdit), pas de repli visible.

## Limites de l'audit

- Concepteur 3D non ouvert (adresse interdite) : ni prix, ni options de monture, ni gravure, ni partage, ni sauvegarde. Non testé.
- Assistant : 1 option sur 9 styles, 1 sur 10 formes, 1 sur 9 tailles cliquée ici ; les autres sont supposées identiques à Kesslers (même widget, mêmes libellés vus dans le texte) [I].
- Aucun panier, aucun récapitulatif, aucun moyen de paiement ni frais de livraison à observer : pas de vente en ligne trouvée [V sur les pages lues ; une page de produit détaillée n'a pas été ouverte].
- Catalogue lu en HTML brut (curl) et pas dans le navigateur ; les boutons « Quick View », « View Detail » et « Add » n'ont pas été actionnés (risque d'appeler `ajax.php`, interdit).
- Page des conditions lue en partie (jusqu'au programme SMS) ; retours et livraison cherchés dans les pages liées du menu, non trouvés [V : non trouvés ; une page non listée n'est pas exclue].
- Mesure de temps : une seule série par appareil ; elle mesure l'apparition des options de l'assistant, pas un visuel 3D.
- Une page toutes les 2 secondes au plus ; requêtes du widget à l'ouverture (jeweleros.com/api/config) non comptées comme écart.

## Sources

- https://www.jewelersworkshop.com/page/custom-ring-builder.html (assistant, contrôles) [V]
- https://www.jewelersworkshop.com/page/custom-engagement-rings.html [V]
- https://www.jewelersworkshop.com/page/jewelry-design-process.html [V]
- https://www.jewelersworkshop.com/page/lab-grown-diamonds.html [V]
- https://www.jewelersworkshop.com/page/terms-and-conditions.html [V]
- https://www.jewelersworkshop.com/diamond-jewelry/rings [V]
- https://www.jewelersworkshop.com/cart.html ; https://www.jewelersworkshop.com/wish-list.html [V]
- https://www.jewelersworkshop.com/robots.txt ; https://www.jeweleros.com/ (robots.txt : `Disallow: /api/`) [V]
- Inventaire du territoire : /home/user/Diamond3D/docs/concurrence/audit/us/wisconsin/INVENTAIRE.md [I]
