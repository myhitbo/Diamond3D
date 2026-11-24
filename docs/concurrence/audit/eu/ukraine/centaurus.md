# Audit Centaurus (atelier de joaillerie, Kyiv)

- **Site** : Centaurus, https://centaurus.ua/ ; départ : https://centaurus.ua/kabluchky/kabluchky-na-zaruchyny (catalogue de bagues de fiançailles). Pas de configurateur sur ce site.
- **Date** : 15/11/2026 (consigne) ; contrôles faits le 24/11/2026
- **Appareils** : ordinateur (Chromium 1366 x 900) et affichage iPhone 13
- **Statut** : **partiel** : catalogue, filtres, fiche, modale de demande et pages de service vérifiés ; pas de panier ni de paiement en ligne (la commande est une demande de chiffrage) ; tri et pagination non utilisés (robots.txt)
- Légende : **[V]** vérifié · **[I]** inféré · **[S]** supposé. Toutes les adresses ouvertes étaient AUTORISÉES par `robots.cjs`.

## Parcours

| Étape | Options (constat [V]) |
|---|---|
| 1. Catalogue « Bagues de fiançailles » | 32 cartes sur la page, pagination « 1, 2, > » ; filtres : Pour qui (femmes), Métal (or 585, or 750, platine 950), Couleur du métal (blanc, jaune, combiné, rose, rouge), Pierre (améthyste, diamant, diamant noir, zircone, **diamant de laboratoire**, saphir bleu, émeraude, topaze bleue), Catégorie (8) |
| 2. Fiche produit | photos (carrousel), référence (SKU), prix, choix de taille 16 à 20, listes de métal et de couleurs, pierres et poids, bouton « ЗАМОВИТИ » |
| 3. Demande de chiffrage | modale : nom, téléphone, e-mail, commentaire, photo à joindre, « ВІДПРАВИТИ » |
| 4. Suite (hors site) | un responsable rappelle pour préciser délai, livraison et paiement ; traitement annoncé en 10 à 60 minutes ouvrées [V, /payment-and-delivery] |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Filtre « Лабораторний діамант » | case | liste réduite à 2 cartes ; l'adresse devient `/kabluchky/kabluchky-na-zaruchyny/kamin/laboratornij-diamant` (appel AJAX `ocfilter/callback`) | 90 008 et 93 915 ₴ | fonctionne [V] |
| Filtre « Платина 950 » | case | l'adresse devient `/metal/platina-950` ; nombre de cartes reconnu par notre script peu fiable | – | fonctionne [V] (compte de cartes non retenu) |
| Autres filtres (17 cases au total : 1 + 3 + 5 + 8) | cases | non tous actionnés ; même mécanisme | – | présents [V] ; 2 testés |
| Tri (5 options : défaut, prix croissant, prix décroissant, note décroissante, note croissante) | liste | **non utilisé** : chaque option charge une adresse `?sort=…&order=…` que le robots.txt interdit | – | non testé (interdit) |
| Pagination « 2 », « > », « >| » | liens | non suivis (adresses `?page=` non vérifiées au robots.txt avant clic) | – | non testés |
| Carte produit (image, titre) | lien | ouvre la fiche | 23 000 à 90 008 ₴ (cartes lues) | fonctionne [V] |
| « ЗАМОВИТИ » sur carte | bouton | ouvre la modale de demande | – | fonctionne [V] |
| Modale : nom, téléphone, e-mail, commentaire, fichier | champs | non remplis | – | non testés (règle formulaires) |
| Modale : « ВІДПРАВИТИ » | bouton | non cliqué | – | non testé |
| Fiche : liste « Оберіть розмір » (16, 17, 18, 19, 20) | liste | taille 18 choisie, aucun changement | 90 008 ₴ avant et après | fonctionne sans effet sur le prix [V] |
| Fiche : « Золото 750 », « Платина 950 », « Жовтий » (liste Métal/Couleur) | texte | **non cliquables** : textes statiques, aucun effet | 90 008 ₴ inchangé | pas de contrôle [V] |
| Fiche : flèches du carrousel (gauche, droite) | boutons | présents ; non analysés image par image | – | présents |
| Fiche : « Заявка на прорахунок » (pied de page) | lien | ouvre la même modale de demande | – | présent [V] |
| Icônes Telegram, Viber, WhatsApp | liens | `t.me/gold_centaurus`, `viber://chat?number=+380999761229`, `wa.me/+380999761229/?text=urlencodedtext` | – | présents ; **non ouverts** (le lien WhatsApp contient un texte non rempli « urlencodedtext » : défaut visible dans le code) [V] |
| Sélecteur de langue « UA » | bouton | présent ; contenu non exploré | – | non testé |
| Case à cocher RGPD (pied de page, formulaire du bas) | case | présente ; non cochée | – | non testée |
| Formulaire du bas (nom, téléphone, e-mail, « НАДІСЛАТИ ») | champs | non remplis | – | non testés |
| Pages « Ціни », « Ваші гарантії », « Оплата і доставка », « Про компанію », « Таблиця розмірів », « Догляд » | liens | pages lisibles (200) ; « Таблиця розмірів », « Догляд » non lues | – | 4 lues [V] |

## Options disponibles

- Métal : or 585, or 750, platine 950. Couleurs : blanc, jaune, combiné, rose, rouge [V, filtre et fiche].
- Pierres : diamant naturel, diamant noir, **diamant de laboratoire**, zircone (« fianit »), saphir, émeraude, améthyste, topaze [V].
- Tailles de la fiche vue : 16 à 20 [V].
- Sur mesure : croquis ou photo, modèle 3D réalisé avant fabrication, copie de modèles de marques, apport de son propre or ; gravure intérieure ou extérieure [VR : centaurus.com.ua/uk/obruchalnyie-koltsa, mêmes numéros de téléphone].
- Aucun choix de carat, de pureté ni d'origine dans une interface ; la fiche affiche seulement les pierres et leur poids (ex. 1 pierre de 2,0 ct + 48 pierres de 0,69 ct au total, labo) [V].

## Prix, délais, retours, garanties

- **Prix** : prix fixe par modèle (ex. 90 008 ₴ pour la bague à diamant de laboratoire, 2 g d'or 585 rouge). Aucune décomposition. **Grille de main-d'œuvre publique** (page « Ціни ») : bague de fiançailles sur modèle du catalogue **à partir de 6 000 ₴**, avec modélisation **à partir de 7 000 ₴** ; alliances 3 000 à 4 000 ₴ pièce, 5 500 à 7 000 ₴ la paire ; alliances à motifs ou pierres à partir de 11 000 ₴ la paire ; **platine à partir de 85 $ le gramme** (110 $ avec modélisation) [V, /prices]. Que ces prix soient « sans métal » n'est pas dit [S].
- **Délai** : fabrication des alliances « jusqu'à 10 jours ouvrés » ; commande urgente possible (page alliances, centaurus.com.ua) [VR]. Aucun délai sur la fiche vue [V].
- **Paiement** : espèces, virement ou carte Visa/Mastercard au terminal de l'atelier, achat en plusieurs fois sans intérêt (avec carte PrivatBank) ; **65 % d'acompte** pour un modèle exclusif, 35 % à la remise [V]. Aucun paiement en ligne.
- **Livraison** : retrait à l'atelier ; coursier à Kyiv (9 h à 21 h) ; Nova Poshta, Delivery, Intime en province ; « livraison gratuite en Ukraine » affichée en page d'accueil [V].
- **Retours** : non trouvés sur les pages lues ; l'offre publique n'a pas été lue [V pour l'absence].
- **Garanties** (page « Ваші гарантії ») : reconstitution d'un bijou perdu avec 50 % de remise sur la main-d'œuvre ; exclusivité du design ; « garantie des délais » ; copie moins chère d'un bijou de plus de 4 000 USD pour la sécurité ; poinçon de la Chambre de contrôle ukrainienne et « certificat de qualité » sur les pierres ; garantie de qualité à vie en page d'accueil [V].
- **Certificats** : « certificats sur les diamants » annoncés ; type (GIA, IGI) non précisé [V].

## Confiance et service

- Atelier à Kyiv (vul. Novokostiantynivska 1B) ; « 15 ans sur le marché, plus de 400 clients par an » [VR].
- Contacts : 3 téléphones, e-mail, Telegram, Viber, WhatsApp [V]. Essayage à domicile par un artisan, sur demande (200 UAH + transport, annoncé gratuit en bonus) [VR].
- Avis clients : demandés (« photo ou vidéo d'avis ») pour la province ; pas d'avis affichés sur les pages lues [V].
- Preuves de fabrication : page « Portfolio » (non ouverte) ; aucune photo d'atelier sur les pages lues [I].
- Langues : ukrainien (un second domaine centaurus.com.ua propose ukrainien et russe, [I]). Devises : ₴ et $ (platine) [V].

## Points forts à retenir pour JR Diamond

1. **Grille de main-d'œuvre publique** : le client sait avant de contacter ce que coûte la façon (page « Ціни » ; bague à partir de 6 000 ₴, alliance de 3 000 à 4 000 ₴). C'est le « prix expliqué » que nous visons, mais seulement pour la façon.
2. **Platine affichée au gramme en dollars** (85 $/g), comme le tarif boutique de notre atelier (façon en USD).
3. **Filtre « diamant de laboratoire » séparé** du diamant naturel, adresse propre indexable (`/kamin/laboratornij-diamant`).
4. **Acompte de 65 % puis solde à la remise** : règle de paiement claire pour du sur mesure (page « Оплата і доставка »).
5. **Modèle 3D montré avant fabrication** (page alliances de centaurus.com.ua) : même logique que la promesse « ce que vous voyez existe » [VR].
6. **Essayage à domicile par l'artisan** : service de proximité à envisager à Ramat Gan [VR].

## Défauts observés

- Aucune option réellement configurable : les listes de métal, de couleur et de pierres sont du texte ; seul le choix de taille est actif et il n'agit pas sur le prix [V].
- Prix incohérent à la lecture : une bague à diamant de laboratoire de 2 ct (+ 48 pierres) affichée 90 008 ₴ pour 2 g d'or [V] ; non expliqué.
- Faute visible : « лобараторним діамантом » sur une carte [V] ; lien WhatsApp avec un texte-modèle non rempli [V].
- Pas de panier, de paiement en ligne, de suivi, de politique de retour lue, ni d'avis [V].
- Chargement lent : 5,9 s pour la première image du catalogue sur ordinateur [V].

## Limites de l'audit

- Tri, pagination et pages de filtres interdits par `robots.txt` (`?sort=`, `?order=` ; pagination non vérifiée) : non utilisés ou non ouverts. Formulaires et modale : non remplis.
- Page « Portfolio », « Таблиця розмірів », offre publique : non lues. Deux filtres sur 17 actionnés.
- Temps mesurés avec un proxy, un essai par page : catalogue, première image à **5,9 s** sur ordinateur (DCL 5,9 s) ; fiche : image principale à **6,7 s** sur ordinateur et **6,2 s** en affichage iPhone ; aucun défilement horizontal sur iPhone (390/390 px).
- Une seule fiche lue ; la grille de prix est un tarif de main-d'œuvre, non un prix de bague terminée.

## Sources

- https://centaurus.ua/kabluchky/kabluchky-na-zaruchyny · https://centaurus.ua/kabluchky/kabluchky-na-zaruchyny/zolota-kabluchka-z-laboratornym-diamantom
- https://centaurus.ua/prices · https://centaurus.ua/guarantees · https://centaurus.ua/payment-and-delivery
- https://centaurus.com.ua/uk/obruchalnyie-koltsa (extrait de recherche, non ouvert)
- Captures et journaux : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/centaurus/`
