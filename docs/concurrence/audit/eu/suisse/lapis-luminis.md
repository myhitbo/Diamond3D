# Lapis Luminis (Genève)

- **Site** : https://www.lapisluminis.com/ (exploitant : Call Me Gems SA, Genève, d'après le pied de page, V)
- **Page de départ** : https://www.lapisluminis.com/shop (« Configurez votre bague de fiançailles »)
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Parcours de configuration vérifié jusqu'à la validation du formulaire ; l'ajout au panier n'a pas été fait (il demande de saisir une taille et ouvre une commande, voir « Limites »).
- **robots.txt** : `Allow: /` ; seuls `*?lightbox=` et deux chemins techniques de Wix sont interdits (V). Les pages ouvertes sont autorisées.

Marques : **V** vérifié (page lue ou contrôle actionné, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. Choix du modèle (`/shop`) | 5 modèles « À partir de » : Supraluminis 3 749 CHF, Aurora 3 249, Grande Ourse 2 749, Petite Ourse 2 749, Numéro 7 2 099, bouton « Configurer » chacun (V) | `/shop` |
| 1 bis. Bagues « prêtes » | 3 séries de bagues à pierre fixée, bouton « Finaliser » : de 3 499 CHF (Numéro 7, 0,50 ct, Planétaire) à 103 549 CHF (Supraluminis 3,00 ct, Firmament) (V) | `/shop` |
| 2. Fiche du modèle (ex. `/product-page/aurora`) | poids du diamant (7), qualité (4), coupe (7), métal (4), tour de doigt (texte, 5 caractères), gravure (texte, 20 caractères) (V) | `/product-page/aurora` |
| 3. Validation | bouton « Confirmez votre commande » ; champs obligatoires signalés par « Sélectionnez … » (V) | idem |
| 4. Panier, paiement | non atteints | — |

## Contrôles vérifiés

Relevé automatique (`controls.cjs`) : 86 contrôles sur l'accueil, 132 sur `/shop` ordinateur, 91 en affichage iPhone.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| FR / EN | bouton | change la langue de la page ; l'iPhone s'ouvre en anglais sans choix (V) | — | fonctionne |
| CHF (CHF) | liste (« Convertisseur de devise ») | liste de devises ; les CGV annoncent CHF, EUR, USD (V, CGV art. 3.1) | non testé | ouvert, non changé |
| Menu : Accueil, La Maison, Nos Valeurs, aMaze, Configurez votre bague, Créations sur mesure, Choisir son diamant | liens | pages internes ; `/shop`, `/sur-mesure`, `/choisir-son-diamant`, `/faq`, CGV répondent (V) | — | fonctionne |
| Compte (« User », « Se connecter ») | lien | `/account/my-account` ; non ouvert | — | non testé (compte) |
| Téléphone | lien `tel:` | n'ouvre qu'un appel (+41 78 793 57 45) | — | non actionné |
| Mail (page sur mesure) | lien | mène à `/sur-mesure` (formulaire), non rempli | — | non testé (formulaire) |
| Location | bouton | non ouvert | — | non testé |
| Configurer (x5) | bouton | ouvre la fiche du modèle (V) | « À partir de » | fonctionne |
| Finaliser (x10) | bouton | ouvre la fiche d'une bague à pierre fixée (liens relevés, non tous ouverts) | prix fixe | partiel |
| Poids du diamant de centre | liste | 0,30 / 0,50 / 0,70 / 1,00 / 1,25 / 1,50 / 2,00 ct (V) | affichage inchangé (voir ci-dessous) | fonctionne |
| Qualité du diamant | liste | Firmament (D IF), Galactique (min F VVS), Stellaire (min G VS), Planétaire (min H SI1) (V) | inchangé | fonctionne |
| Coupe du diamant | liste | Rond brillant, Poire, Émeraude, Coussin, Marquise, Ovale, Cœur (V) | inchangé | fonctionne |
| Métal éthique | 4 pastilles de couleur | Or blanc 18 kt, Or jaune 18 kt, Or rose 18 kt, Platine 950 (V) | non vérifié | présentes, non cliquées |
| Tour de doigt | champ texte | 0/5 caractères (V) | — | non rempli |
| Gravure (facultatif) | champ texte | 0/20 caractères (V) | — | non rempli |
| Confirmez votre commande | bouton | formulaire vide : message « Sélectionnez Poids … » et « Sélectionnez Qualité … », pas de navigation (V) | — | validation fonctionne |
| Précédent / Suivant (carrousels) | boutons | défilent les créations de l'accueil | — | présents, non testés un à un |
| Pied de page : Guide des tailles, FAQ, CGV, Protection des données | liens | pages de texte ; FAQ et CGV lues (V) ; guide des tailles non lu | — | fonctionne |
| Instagram, Facebook, LinkedIn, YouTube, TikTok | liens | sites externes, non ouverts | — | non testés |
| Bandeau cookies : Paramètres / Accepter | boutons | masque le bandeau, qui recouvre la liste des options tant qu'il reste (V) | — | fonctionne |

**Effet sur le prix** : après avoir choisi 0,30 ct puis 2,00 ct, puis la qualité Planétaire puis Firmament, puis la coupe Ovale, l'affichage est resté « À partir de 3 249,00 CHF » (V, script du 15/11). Le prix de la configuration n'est donc pas montré avant la commande (I : calculé plus tard, non vérifié).
**Effet sur l'image** : la zone image de la fiche est restée vide (fond blanc) sur la capture ordinateur après sélection (V, capture) ; aucune visualisation 3D, 360° ni essayage relevé.

## Options disponibles

- **Modèles** : Supraluminis, Aurora, Grande Ourse, Petite Ourse, Numéro 7 (V).
- **Poids** : 0,30, 0,50, 0,70, 1,00, 1,25, 1,50, 2,00 ct. La FAQ dit « à partir de 0,50 carat » : contradiction avec la liste (V).
- **Qualité** (couleur et pureté liées) : D IF, F VVS, G VS, H SI1 (V, FAQ).
- **Coupes** : 7 (liste ci-dessus).
- **Métaux** : or blanc, jaune, rose 18 kt, platine 950 ; titane sur demande (V, FAQ). Pas de 14 kt.
- **Origine** : diamants naturels uniquement : « aucune ne provient de laboratoires » (V, FAQ). Pierres de couleur sur demande.
- **Gravure** : texte libre de 20 caractères (V). **Taille** : saisie libre.
- **Pas d'option** : pavage, griffes, forme du corps de bague, filtres de pierres, comparaison, partage, enregistrement.

## Prix, délais, retours, garanties

| Sujet | Constat | Source |
|---|---|---|
| Prix | Pages en CHF « À partir de » ; la FAQ dit « tous les prix sont HT » ; les CGV disent que la TVA suisse est facturée à la commande pour une livraison en Suisse et que le total TTC est montré avant validation (V, deux textes à rapprocher) | FAQ, CGV art. 3 |
| Décomposition | aucune (matière, façon, marge non séparées) | fiche produit |
| Livraison | gratuite au-delà de 3 000 CHF ; transitaire, remise contre signature ; hors Suisse le client est importateur | CGV 3.3, 3.4, FAQ |
| Délai | « inférieur à 15 jours ouvrables » via le configurateur ; indicatif, sans dommages en cas de dépassement | FAQ, CGV 5.3 |
| Retours | « Aucun délai de rétractation dans la loi suisse » ; ventes définitives, ni remboursées ni échangées ; seule la mise à taille est retournable sous 30 jours | CGV 6.1 à 6.3 |
| Mise à taille | première gratuite sous 30 jours, limitée à 2 mm (1 mm pour les épaulées) ; environ 2 semaines | CGV 6.2, 6.3 |
| Garanties | à vie contre les défauts de fabrication ; garantie d'authenticité (naturel, non traité) ; garantie légale 2 ans | CGV 7 |
| Certificats | GIA pour tout diamant de plus de 0,50 ct | FAQ |
| Paiement | carte (Visa, MasterCard, Amex), virement (à recevoir sous 7 jours), PayPal ; paiement intégral à la commande, acompte seulement sur devis | CGV 4.4 |

## Confiance et service

- Avis : un seul témoignage signé « E. M. » sur l'accueil (V) ; aucune note agrégée.
- Contact : téléphone, WhatsApp (non ouvert), courriel ; retrait en main propre sur rendez-vous (V, FAQ).
- Preuves de fabrication : affirmées (« fabrication à la main par nos maîtres joailliers », « production genevoise ») mais aucune photo ni vidéo d'atelier, aucun suivi de commande illustré relevé (V sur les pages lues). Rubrique « Mes commandes » mentionnée dans les CGV (non vérifiée).
- Guide « Choisir son diamant » et guide des tailles présents (non lus en détail).
- Langues : FR, EN. Devises : CHF, EUR, USD (CGV).

## Points forts à retenir pour JR Diamond

1. **Échelle de qualité nommée** : quatre paliers (Firmament, Galactique, Stellaire, Planétaire) qui lient couleur et pureté, au lieu de deux curseurs. Preuve : liste de la fiche et FAQ. Évite au client de combiner lui-même des lettres.
2. **Poids garanti « au minimum »** : choisir 1,00 ct donne au moins 1,00 ct (V, FAQ). Règle claire à reprendre dans l'explication du prix.
3. **Délai annoncé avant paiement** (« inférieur à 15 jours ouvrables ») proche du nôtre de 14 jours (V, FAQ).
4. **Première mise à taille gratuite sous 30 jours, avec plafond chiffré** (V, CGV 6.2), proche de la réponse de l'atelier.
5. **Retour des documents dans la garantie** : le certificat, l'écrin et la facture sont exigés au retour, et un document manquant coûte 300 CHF (V, CGV 7.1.1.3). Idée de dossier unique remis au client.

## Défauts observés

- Le prix ne bouge pas quand on change poids, qualité ou coupe : « À partir de 3 249 CHF » reste affiché (V). Le client ignore le prix final avant de valider.
- Aucune image qui suit les choix : zone image blanche, pas de 3D (V, capture).
- La FAQ (0,50 ct minimum) contredit la liste (0,30 ct) (V).
- Prix annoncés HT (FAQ) ou TTC (CGV) : ambigu (V).
- Ventes définitives, y compris la bague configurée : aucun retour (V, CGV 6.3).
- Bandeau cookies qui recouvre les listes d'options en bas d'écran ; options des listes en double dans le code (accessibilité), sans effet visible (I).
- Temps d'affichage : titre en 1,2 s et première image en 0,4 s sur ordinateur ; 2,9 s et 2,3 s en affichage iPhone (V, mesure unique, via le proxy de la session).

## Limites de l'audit

- Seule la fiche Aurora a été configurée ; les 4 autres modèles et les bagues « Finaliser » n'ont pas été ouverts un à un.
- Panier, paiement et suivi de commande non atteints : « Confirmez votre commande » exige une taille de doigt et ouvre une commande ; je n'ai pas créé de panier. Frais de livraison réels, moyens de paiement affichés au panier non vus (seuls les textes des CGV sont lus).
- Pastilles de métal : relevées, non cliquées ; leur effet sur le prix n'est pas connu.
- Devises, comptes, formulaire sur mesure, WhatsApp, YouTube, TikTok : non ouverts (règle de lecture seule).
- Le guide des tailles et « Choisir son diamant » n'ont pas été lus.
- Mesures de temps : une seule par appareil, réseau passant par un proxy.

## Sources

- https://www.lapisluminis.com/ · https://www.lapisluminis.com/shop · https://www.lapisluminis.com/product-page/aurora
- https://www.lapisluminis.com/faq · https://www.lapisluminis.com/conditions-g%C3%A9n%C3%A9rales-de-vente
- https://www.lapisluminis.com/robots.txt
- Captures et relevés : `scratchpad/audit/eu/lapis-luminis/` (hors dépôt).
