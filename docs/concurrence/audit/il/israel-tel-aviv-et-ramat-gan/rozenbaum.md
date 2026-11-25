# Audit : Rozenbaum (Ramat Gan), fiche à variations jusqu'au panier

| | |
|---|---|
| Site | Rozenbaum Jewelry (רוזנבאום תכשיטים, société « Leo Bell 1986 Ltd »), « depuis 1974 », magasin à la Bourse, 3 Zisman Shalom, Ramat Gan ; 03-575-3315 ; WhatsApp 054-345-2454 (V : pied de page et fiche) |
| Page de départ | https://www.rozenbaumj.co.il/product-category/engagement-ring/, puis la fiche https://www.rozenbaumj.co.il/product/hidden-halo-oval-danielle-ring/ (« Danielle », ovale à halo caché ; pas de constructeur : les variations sont sur la fiche) |
| Date | 16/11/2026 |
| Appareils | Chromium headless 1366 × 900 (he-IL) ; émulation iPhone 13 (Playwright) |
| Statut | **complet jusqu'au panier** sur ordinateur (ajout, volet du panier, page « סל קניות »). Le bouton « תשלום » n'a pas été suivi. iPhone : chargement et lecture des options seulement (voir les limites) |
| robots.txt | `User-agent: *` : interdits `/wp-content/uploads/wc-logs/`, `/wp-content/uploads/woocommerce_transient_files/`, `/wp-content/uploads/woocommerce_uploads/`, `/*?add-to-cart=`, `/*?*add-to-cart=`, `/wp-admin/` (sauf `admin-ajax.php`). Aucun `Crawl-delay`. Aucune requête interdite n'a été émise par la page pendant l'audit (V). L'ajout au panier de la fiche se fait par formulaire et requête sans le paramètre `add-to-cart` dans l'adresse (V : aucune adresse bloquée) |

Marques : **V** vérifié (contrôle actionné ou page lue, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| 1. Catégorie « טבעות אירוסין » | 42 liens de produit (V : source) ; chaque carte donne une **fourchette** (par exemple « 3 400 à 26 400 ₪ » pour « Lily », ovale) ; tri : popularité, nouveauté, prix croissant, prix décroissant ; formulaire de contact (V) | fourchette par carte | — |
| 2. Fiche « Danielle » | poids du diamant central : 0,30 / 0,50 / 0,70 / 1,00 ct ; or 14 k rouge / blanc / jaune (pastilles) ; taille 42 à 59 (liste) (V) | voir ci-dessous | **la galerie comporte une photo par couleur d'or** (6 vignettes : blanc, mains, jaune, rose) ; la photo principale change avec la pastille (V : capture) |
| 3. Ajout | bouton « הוספה לסל » (désactivé tant que les trois choix ne sont pas faits) (V) | — | — |
| 4. Volet « עגלת קניות » | ligne : modèle, poids, or, taille, prix ; sous-total ; « מעבר לסל הקניות » et « תשלום » (V) | 14 200 ₪ | — |
| 5. Page « סל קניות » | quantité, coupon, mise à jour, options de livraison (gratuite, retrait en boutique, express payant), total, « מעבר לתשלום » (V) | 14 200 ₪, livraison gratuite | — |

## Prix relevés (V : fiche « Danielle », or blanc 14 k, taille 52, diamant central **naturel** : la fiche parle d'un « יהלום אובל מרכזי טבעי »)

| Poids du diamant central | Prix |
|---|---|
| 0,30 ct | 3 320 ₪ |
| 0,50 ct | 6 740 ₪ |
| 0,70 ct | 8 900 ₪ |
| 1,00 ct | 14 200 ₪ |

- **La couleur d'or ne change pas le prix** : or blanc ou jaune à 1,00 ct, 14 200 ₪ (V).
- **Le prix n'apparaît qu'une fois les trois choix faits** : avant, le bouton reste désactivé (`wc-variation-selection-needed`) (V).
- Les fiches de laboratoire sont à part : un lien « קיימת עם יהלומי מעבדה – כאן » mène à la déclinaison laboratoire (V : texte de la fiche ; non ouvert).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| קבל הכל / הסר לא הכרחיות / העדפות | bandeau de cookies | « הסר לא הכרחיות » ferme le bandeau (V) | — | fonctionne |
| משקל יהלום מרכזי (0,30 à 1,00 ct) | liste | se règle ; le prix s'affiche une fois les trois choix faits (V) | 3 320 → 14 200 ₪ | fonctionne |
| סוג הזהב : 14K אדום / לבן / צהוב | pastilles | se cochent ; la galerie change de photo (V) | inchangé | fonctionne |
| מידת הטבעת (42 à 59) | liste | la taille 52 se choisit (V) | inchangé | fonctionne |
| הוספה לסל | bouton | ajoute la ligne et ouvre le volet du panier (V) | 14 200 ₪ | fonctionne |
| Volet : × · מעבר לסל הקניות · תשלום | boutons et liens | `/סל-קניות/` s'ouvre ; « תשלום » mène à `/עמוד-תשלום/` (V : lien lu, **non suivi**) | — | « סל » fonctionne ; paiement non suivi (règle) |
| Panier : כמות − / + · להסיר פריט · החלת קופון · לעדכן סל · אפשרויות de livraison | contrôles | présents (V) | — | non actionnés |
| שיתוף ב whatsapp / telegram | boutons | partage de la fiche (V : libellés) | — | non ouverts |
| Add to Wishlist | lien | liste de souhaits (V : contrôle) | — | non actionné |
| Onglets : תיאור · פרטים · מידות · משלוחים והחזרות · אחריות | onglets | textes lus (V) | — | fonctionnent |
| צרו איתנו קשר (nom, téléphone, message, case d'accord) | formulaire | présent sur chaque page (V) | — | **non rempli** (règle) |
| Barre d'accessibilité | bouton | présent (V) | — | non actionnée |
| Menu « יהלומי מעבדה » | sous-menu | rubrique séparée dans le menu (V : contrôle) | — | non ouverte |
| Bandeau « מילואימניקים… כרטיס פייטר » | texte | « nous acceptons la carte Fighter » (V) | — | informatif |

Absents (V) : 3D, 360°, essayage, comparaison, gravure, choix de la forme, naturel ou laboratoire dans la même fiche, photo de la pierre réelle.

## Options disponibles

- **Métal** : or 14 k rouge, blanc, jaune (V). Pas de 18 k ni de platine sur cette fiche.
- **Pierre** : diamant naturel central de 0,30 à 1,00 ct sur cette fiche ; les modèles « CVD » (par exemple « Gefen ») sont des bagues de laboratoire (V : lien de produit). La couleur et la pureté ne sont pas choisies (V).
- **Taille** : 42 à 59 ; guide des tailles (onglet) (V).
- **Personnalisation** : « on peut changer la pierre centrale, le type et la forme des pierres de côté, la couleur et le type d'or » ; demande par WhatsApp (V : texte de la fiche).

## Prix, délais, retours, garanties (V : onglets de la fiche)

- **Fabrication** : « 1 à 10 jours ouvrés » ; **livraison** à domicile 3 à 5 jours ouvrés par HFD, avec appel du livreur avant la remise ; retrait en boutique, dimanche à jeudi 10 h à 18 h 30, vendredi 9 h à 13 h 30 (V).
- **Livraison** : 40 ₪ d'après l'onglet ; **gratuite** au panier (14 200 ₪), express payant, coût fixé après contact (V).
- **Retour** : jusqu'à **deux jours ouvrés** après l'achat, pièce neuve, avec facture et certificat de garantie, frais de 5 % ou 100 ₪ (le plus bas) ; **sur-mesure : ni annulation ni remboursement** ; **« aucun échange ni retour des diamants de laboratoire »** (V).
- **Garantie** : 1 an ; réparation, rénovation et entretien payants ensuite ; recommandation d'assurer le bijou (V).
- **Inclus** (bandeau de fiche) : certificat gemmologique, jusqu'à **8 paiements sans intérêt**, formulaire d'évaluation pour l'assurance, **mise à taille gratuite**, écrin (V).
- **Certificat** : « תעודה גמולוגית » sans laboratoire nommé sur la fiche (V).

## Confiance et service

- **Libellé du synthétique** : « יהלומי מעבדה » (menu), « CVD » (nom de modèle) (V).
- **Avis** : note 5,0 sur 150 avis affichée selon l'inventaire (non revérifiée ici ; la fiche lue n'en contient pas).
- **Atelier** : « tout le processus de fabrication sous un même toit », depuis 1974, magasin à la Bourse (V : texte). Aucune photo ni vidéo de fabrication (V).
- **Contenu** : section « מידע מקצועי » (guides) ; gift card ; club clients ; carte Fighter (V : menu).
- **Société identifiée** : nom légal et numéro d'entreprise en pied de page (V).

## Temps d'apparition (V ; une passe, machine partagée)

| Page | Ordinateur | iPhone 13 (émulé) |
|---|---|---|
| Catégorie | LCP 2,0 s ; charge complète 6,5 s | — |
| Fiche « Danielle » | LCP 1,2 à 2,0 s ; charge complète 5,4 à 6,0 s | LCP 1,8 s ; charge complète 5,5 s |

## Points forts à retenir pour JR Diamond

1. **Un panier qui fonctionne en trois clics** : poids, or, taille, puis volet avec sous-total, livraison gratuite et total [V]. Aucune friction après le choix.
2. **Une photo par couleur d'or dans la galerie** (blanc, jaune, rose, portée) [V : capture]. À rapprocher de la teinte des métaux dans le rendu 3D de JR Diamond.
3. **Tout est dans un bandeau de réassurance sur la fiche** : certificat, 8 paiements, évaluation d'assurance, mise à taille gratuite, écrin [V]. Un bandeau analogue peut réunir les engagements de l'atelier.
4. **Le prix ne dépend ni de la couleur d'or ni de la taille** : trois colonnes de choix, un seul prix par poids [V]. Un schéma simple pour un premier prix « exact » sur JR Diamond (I).
5. **Livraison à date annoncée** : 3 à 5 jours ouvrés, avec appel préalable du livreur [V].
6. **Marque familiale depuis 1974** mise en avant (« רגע של פעם בחיים ») [V] : l'ancienneté joue comme preuve ; JR Diamond a l'atelier et Yonathan (I).

## Défauts observés

1. **Retour en deux jours ouvrés seulement, et aucun retour pour le laboratoire** [V] : parmi les conditions les plus strictes relevées en Israël.
2. **Le prix de la fiche ne s'affiche qu'après trois choix** [V] : le visiteur ne voit que la fourchette de la carte (« 3 320 à 14 200 ₪ ») ; l'inventaire parle de « 2 900 à 9 800 ₪ » pour un autre modèle.
3. **Pas de choix de la pureté ni de la couleur du diamant** [V].
4. **Pas de photo de la pierre réelle, pas de numéro de certificat** [V].
5. **Livraison : 40 ₪ dans l'onglet, gratuite au panier** [V] : l'écart n'est pas expliqué.
6. **Pas de 18 k ni de platine** sur la fiche [V].
7. **La personnalisation passe par WhatsApp**, sans aperçu ni prix en ligne [V].
8. **Page de catégorie lente** : 6,5 s de charge complète [V ; une passe].

## Limites de l'audit

- Paiement (`/עמוד-תשלום/`), quantité, coupon, WhatsApp, formulaire de contact : non suivis ou non remplis (règle).
- Un seul modèle parcouru (« Danielle », naturel, ovale). Les modèles de laboratoire (« CVD »), l'avis 5,0 sur 150 et la page de sur-mesure n'ont pas été relus.
- iPhone : le bouton d'ajout est resté désactivé dans mon scénario (la pastille d'or n'a pas été cochée par le script) ; l'ajout au panier n'a donc pas été vérifié sur iPhone, et ce n'est pas un défaut établi du site.
- Le tri de la catégorie n'a pas été actionné.
- iPhone émulé avec Chromium (pas un vrai Safari) ; temps sur machine partagée, une passe.

## Sources

- https://www.rozenbaumj.co.il/robots.txt
- https://www.rozenbaumj.co.il/product-category/engagement-ring/
- https://www.rozenbaumj.co.il/product/hidden-halo-oval-danielle-ring/
- https://www.rozenbaumj.co.il/סל-קניות/
- Inventaire : `INVENTAIRE.md` (note 5,0 sur 150 avis ; « fabricant depuis 1974 »)
- Captures et journaux (hors dépôt) : `scratchpad/il/out/rozen/`
