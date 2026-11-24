# Luxembourg : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026, pour l'étude de concurrence de JR Diamond en Europe. Ce fichier complète `docs/concurrence/2026-11-15_europe.md` (14 sites, aucun luxembourgeois) sans le refaire.

Périmètre : joailliers établis au Luxembourg qui vendent en ligne des bagues de fiançailles ou des alliances à des particuliers, avec au moins un de ces éléments : configurateur, visuel 3D ou 360°, sur mesure en ligne, prix affichés. Grandes maisons internationales, grands magasins et places de marché exclus.

Méthode : recherche web (Parallel Search, requêtes génériques en français, allemand et anglais) ; lecture de `robots.txt` avec `scratchpad/audit/robots.cjs` avant chaque adresse ; pages ouvertes avec Chromium (Playwright, identité par défaut, une page toutes les 2,5 s au moins par site). Aucun formulaire rempli, aucun compte créé, aucun chat ouvert.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- Le marché luxembourgeois est **petit et artisanal** : neuf joailliers retenus, tous implantés au Grand-Duché (V). Un seul vend des bagues **configurables en ligne avec prix** (Alexandre Rosenberg). Les autres sont des vitrines, des boutiques de pièces uniques ou des renvois vers des configurateurs allemands (V).
- **Aucun site ne bloque les robots** : tous les `robots.txt` autorisent l'accueil et les pages de départ ; aucun défi Cloudflare ni captcha rencontré (V).
- **Aucun des neuf ne vend de diamant synthétique** (V pour Rosenberg et Goedert, I pour les autres d'après leurs pages de présentation). Le créneau « synthétique expliqué » est libre.
- **Aucune preuve de fabrication** (photos ou vidéos d'atelier par commande, suivi) sur les deux sites audités : seulement la promesse « fabriqué dans notre atelier » (V).
- Le sur mesure se règle par **devis sur formulaire ou rendez-vous** (Rosenberg : modèle 3D et devis par courriel ; Goedert : en boutique) (V).
- Libellé du synthétique : aucune règle luxembourgeoise propre trouvée (voir « Terme employé »).

## Classement

L'intérêt pour JR Diamond est mesuré, dans cet ordre, par : la proximité du modèle (atelier, fabrication à la commande) ; la qualité du configurateur et le lien entre l'image et l'objet ; la transparence du prix ; les preuves de fabrication ; l'offre en synthétique.

Toutes les adresses de la colonne « adresse » ont répondu 200 dans Chromium le 15/11 (V).

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Alexandre Rosenberg | Luxembourg | https://www.alexandrerosenberg.com/ | https://www.alexandrerosenberg.com/bagues-de-fiancailles | Oui, par fiche : variation (rond ou ovale, corps nu ou pavé), diamètre 4 à 8 mm, pierre (13), métal (4), taille, gravure, cadeau ; prix recalculé à chaque choix (V) | Aucun (robots.txt autorise) | FR, EN | Atelier maison, prix recalculé à chaque option (sans décomposition), retours 30 j y compris personnalisés. Seul vrai configurateur du pays. Naturel seulement |
| 2 | Bijouterie Goedert | Luxembourg | https://www.bijou.lu/ | https://www.bijou.lu/shop/fiancailles/ | Non : pièces uniques à prix fixe, filtres métal, couleur de pierre, prix ; sur mesure en boutique (V) | Aucun (pas de robots.txt) | FR, DE | Atelier d'orfèvrerie, 44 pièces avec prix, certificat GIA, panier avec TVA détaillée. Vend aussi via Letzshop (V) |
| 3 | Daniel Gerard | Luxembourg (Royal Hamilius) | https://www.danielgerard.lu/ | https://danielgerard.lu/categorie-produit/diamants/ | Non : « bar à diamants », diamants GIA en vrac ; **prix sur demande** par formulaire, réponse sous 24 h (V) | Aucun | FR | Parcours « choisir la pierre puis la monture » ; paiement en 3 ou 4 fois (Alma) annoncé. Pas de prix affiché |
| 4 | Bijouterie Hoffmann | Grevenmacher et Luxembourg | https://bijouterie.lu/ | https://bijouterie.lu/en/engagement-wedding-rings | Non : catalogue de marques (Bloch, Krieger, Gerstner, Breuning), rendez-vous, vente en ligne via Letzshop (V) | Aucun | DE, FR, EN, LU | Atelier de orfèvre et transformation d'or ancien annoncés ; prêt en 2 semaines environ. Prix non vérifiés |
| 5 | Bijouterie Wagner | Dudelange | https://bijoux-wagner.lu/ | https://bijoux-wagner.lu/shop/ | Renvoie vers des configurateurs de tiers allemands (Fischer, Breuning, Luis & Freya) ; retrait en magasin (V) | Aucun | FR | Illustre le modèle « configurer chez le fabricant, retirer chez le détaillant » |
| 6 | Corniche Bijoux | Luxembourg | https://cornichebijoux.lu/ | https://cornichebijoux.lu/e-shop/ | Non : e-shop de pièces, alliances faites main sur mesure (page informative) (V) | Aucun | FR | Atelier d'une maître-bijoutière, 25 ans, article « alliances » détaillé (métaux, finitions, délais) |
| 7 | Quetsch Créa | Luxembourg | https://www.quetschcrea.lu/ | https://www.quetschcrea.lu/page/sur-mesure | Non : sur mesure sur rendez-vous, transformation de bijoux de famille, e-shop surtout en argent (V) | Aucun | FR | Spécialiste du sertissage, 5,0 sur 7 avis Google affichés (V). Peu de volume |
| 8 | La Forge d'Or | Mersch, Ettelbruck | https://laforgedor.lu/ | https://laforgedor.lu/ | Non : vitrine de sur mesure, pas de vente en ligne (V) | Aucun (pas de robots.txt) | FR | Mentionné pour mémoire : sur mesure et mise à taille, devis par téléphone |
| 9 | Luxor | Luxembourg | https://www.luxor.lu/ | https://www.luxor.lu/product-category/rings/ | Non : catalogue de marques (I) | Aucun | FR | Titre de page « bagues de fiançailles » ; contenu non audité |

Page de départ du configurateur du n° 1 : https://www.alexandrerosenberg.com/bagues-de-fiancailles (liste de 59 liens de fiches, chaque fiche porte le bouton « Créer une configuration personnalisée »). Fiche utilisée pour l'audit : https://www.alexandrerosenberg.com/bague-de-fiancailles-solitaire-diamant-or-blanc-stella-26r1.1.1 (V).

## Terme employé pour le diamant synthétique

- Aucun des neuf sites n'emploie de terme pour le synthétique : ils ne le vendent pas (V pour n° 1 et 2 : aucune occurrence de « laboratoire », « synthétique » ou « culture » dans la liste de fiançailles de Rosenberg ; Goedert décrit ses diamants « naturels » avec certificat GIA).
- Pas de loi luxembourgeoise propre trouvée à ce sujet. La recherche n'a donné que les lignes directrices internationales : « synthetic », « laboratory-grown » ou « laboratory-created » (AWDC et sept autres organismes, CIBJO Blue Book) (V, sources ci-dessous). Les usages voisins sont, en français « diamant synthétique » (règle française, décret 2002-65 : voir `docs/concurrence/2026-11-15_europe.md`), en allemand « synthetischer Diamant » (la Chambre de commerce autrichienne écarte « Labordiamant » ; pas de source luxembourgeoise) (V pour les sources citées, **S** pour leur application au Luxembourg).
- Exception de rétractation : Goedert cite l'article 55 §4b de la loi luxembourgeoise (produits personnalisés exclus du droit de rétractation de 14 jours) ; Rosenberg offre 30 jours même pour les produits personnalisés (V).

## Audits faits

1. Alexandre Rosenberg : `alexandre-rosenberg.md`
2. Bijouterie Goedert : `bijouterie-goedert.md`

Les rangs 3 à 9 n'ont pas été audités (l'instruction limite l'audit aux 2 premiers sites qui ne bloquent pas).

## Sources

- https://www.alexandrerosenberg.com/ , /bagues-de-fiancailles , /alliances , /comment-commander , /politique-de-retour , /bijoux-sur-mesure (lues le 15/11/2026)
- https://www.bijou.lu/ , /shop/fiancailles/ , /terms_conditions.php , /faq/ (lues le 15/11/2026)
- https://letzshop.lu/en/vendors/bijouterie-goedert (extrait d'index de recherche, I)
- https://danielgerard.lu/produit/diamant-brillant-0-76-carats-gia-e-vvs1/ (lue)
- https://bijouterie.lu/en/engagement-wedding-rings (lue)
- https://bijoux-wagner.lu/ , https://cornichebijoux.lu/ , https://www.quetschcrea.lu/ , https://laforgedor.lu/ , https://www.luxor.lu/ (accueils lus ; Luxor : extrait d'index)
- https://www.editus.lu/en/bijouterie-goedert-luxembourg-22877 (annuaire, I : moyens de paiement)
- https://www.awdc.be/diamond-terminology-guideline ; https://cibjo.org/wp-content/uploads/2024/11/CIBJO-Diamond-Blue-Book-2024-1.pdf ; https://www.wko.at/handel/juwelen-uhren-kunst-antiquitaeten-briefmarken/korrekte-bezeichnung-nicht-natuerlicher-diamanten (terminologie)
