# Monténégro : inventaire des joailliers qui vendent en ligne

Recensement du 15 novembre 2026 pour l'étude de concurrence de JR Diamond (Europe). Complète `docs/concurrence/2026-11-15_europe.md`, dont aucun des 14 sites n'est monténégrin.

Périmètre : joailliers établis au Monténégro qui vendent ou exposent en ligne des bagues de fiançailles ou des alliances à des particuliers. Grandes maisons internationales, grands magasins et places de marché exclus.

Méthode : recherche web générique en serbo-croate et en anglais (Parallel Search, WebSearch) ; `robots.cjs` sur chaque adresse avant ouverture ; lecture avec curl (en-tête Safari) et Chromium (Playwright, identité par défaut, une page toutes les 2 s au plus par site) ; aucun formulaire envoyé, aucun compte créé.

Marques : **V** vérifié (page lue ou contrôle actionné le 15/11/2026) · **I** inféré · **S** supposé.

## Ce qu'il faut retenir

- **Aucun configurateur, aucun visuel 3D ou 360° de bague de fiançailles au Monténégro** [I : recherche non exhaustive ; un marché de 600 000 habitants environ, chiffre non vérifié ici]. Les sites sont des catalogues avec fiche produit, ou des vitrines.
- **Le plus abouti : Mikel F Diamond Center** (Podgorica), catalogue de 522 bagues et 422 alliances, filtres, fiches détaillées (couleur, pureté, carat, poids d'or, certificat IGS London), rendez-vous en ligne. **Mais** la plupart des fiches affichent « Kontaktirajte nas » au lieu d'un prix, et il n'y a pas de panier [V].
- **Dameo** vend en ligne jusqu'au paiement (panier, livraison 1 à 5 jours ouvrés, retours 14 jours, gravure offerte (selon le site)), mais ses deux pages « fiançailles » étaient vides (« Nema proizvoda ») ; seules 5 bagues en or 14 k (279 à 669 €) sont en ligne [V].
- **Terme du diamant synthétique : non observé.** Aucun des sites lus ne vend de diamant synthétique ; Mikel F écrit « Prirodni dijamant » (naturel) sur ses fiches [V]. Terme régional voisin (Serbie, hors périmètre) : « laboratorijski dijamant » [V sur zlatara-as.rs, I pour le Monténégro]. Aucune règle légale monténégrine recherchée [S].
- **Monnaie : l'euro** (prix en € TTC sur Dameo et Mikel F) [V].
- **Aucun site ne bloque les robots** parmi ceux listés. Restrictions de `robots.txt` à respecter : Dameo interdit `?add-to-cart=` ; Leandro interdit `/cart`, `/search`, `/auth`.
- Une enseigne citée est **écartée** : Zlatarna Celje (chaîne slovène, deux boutiques au Monténégro ; `robots.txt` : `Disallow: /`).

## Classement

Intérêt pour JR Diamond, dans l'ordre : lien entre image et objet fabriqué ; prix visible et expliqué ; fiche détaillée du diamant et certificat ; achat en ligne jusqu'au paiement ; preuves de fabrication.

| rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Mikel F Diamond Center (Unity Jewels World ; « première et plus ancienne juwelirnica du Monténégro » selon le site) | Podgorica, Miljana Vukova 29 [V] | https://mikelf.com/ | https://mikelf.com/me/prodavnica/prsteni | Non. Catalogue filtrable (matière, taille de doigt, prix, carat, qualité de taille) avec fiches détaillées et rendez-vous en ligne [V] | Aucun (`Allow: /`) [V] | 15 : ME, EN, CZ, RU, DE, FR, AL, ES, IT, GR, HU, RO, SV, TR, PL [V] | 522 bagues, 422 alliances ; fiche avec couleur, pureté, carat, titre 585, poids ; IGS London ; prix souvent absent ; audité |
| 2 | Dameo (REBUSS d.o.o., Cetinje [V]) | Cetinje ; boutiques à Podgorica, Kotor, Budva [V] | https://dameo.me/ | https://dameo.me/zlatno-prstenje/ | Non. Boutique WooCommerce ; page « vjereničko prstenje » vide [V] | Aucun ; `robots.txt` interdit `?add-to-cart=` [V] | ME/SR (une seule version) [V] | Seul site lu qui va jusqu'au panier avec prix en €, livraison, retours, rates ; 5 bagues en or 14 k seulement ; audité |
| 3 | Leandro Jewelry & Watches (Leandro d.o.o., fondée 1977 [V]) | Podgorica, Miljana Vukova 13 [V] | https://www.leandro-stores.com/ | https://www.leandro-stores.com/ (rubrique « Diamond » non ouverte) | Non [I] | Aucun ; `robots.txt` interdit `/cart`, `/search`, `/auth` [V] | ME [V] | Boutique en ligne surtout de montres (prix en €, page « Rate ») ; aucune bague de fiançailles vue ; panier interdit aux robots |
| 4 | Zlatara Methadžović | Podgorica, Miljana Vukova 27 [V] | https://methadzovic.me/ | https://methadzovic.me/ | Non [V] | Aucun [V] | ME [V] | Vitrine d'un atelier familial (1986) : « vous pouvez acheter un vjerenički prsten, des burme » ; catalogue renvoyé à Instagram et Facebook ; pas de panier lu |
| 5 | Zlatara Vera | Nikšić, Trg Slobode 3 [V] | https://www.instagram.com/zlatara_vera/ | idem | Non | Réseau social, hors périmètre d'audit | ME | Seul « site » déclaré sur la fiche Google Maps : un compte Instagram [V] ; non audité |
| (hors liste) | Škrbić, Barović, Monte Jewellery, Zlatara Opal | Podgorica | introuvable | — | — | — | — | Cités par des annuaires ou un blog promotionnel (Satéur) ; aucun site marchand trouvé [I] |
| (hors liste) | Zlatarna Celje | Budva, Podgorica (boutiques) | https://zlatarnacelje.com/en | non ouverte | — | **Interdit** : `robots.txt` `Disallow: /` [V] | SL, EN, HR, SR, BS… | Chaîne slovène : pas une marque monténégrine ; seulement notée |

Toutes les pages de départ listées ont répondu 200 le 15/11 (curl, en-tête Safari) [V], sauf le compte Instagram (non ouvert).

## Audits réalisés

Les deux premiers sites qui ne bloquent pas les robots :
- `mikel-f-diamond-center.md` (statut partiel : pas de panier ni de prix sur la plupart des fiches) ;
- `dameo.md` (statut partiel : bouton « Dodaj u korpu » non cliqué, interdit par `robots.txt`).

## Sources

- https://mikelf.com/ , https://mikelf.com/robots.txt , https://mikelf.com/me/prodavnica/prsteni [V]
- https://dameo.me/ , https://dameo.me/robots.txt , https://dameo.me/zlatno-prstenje/ [V]
- https://www.leandro-stores.com/ , https://www.leandro-stores.com/robots.txt [V]
- https://methadzovic.me/ [V]
- Fiches Google Maps (données du 04/11/2026) : Zlatara Vera, Zlatara Mikel, Dameo Podgorica, Zlatara Opal, via recherche Parallel Search [V]
- https://www.budvadirectory.com/shopping/jewellery/jewelry-celje-zlatarna (Zlatarna Celje au Monténégro) ; https://zlatarnacelje.com/en [V]
- https://www.zlatara-as.rs/kategorija/verenicko-prstenje/lg-dia (terme serbe « laboratorijski dijamant », hors Monténégro) [V]
- https://www.sateur.com/?p=62579 (blog promotionnel citant Škrbić et Barović) [I]
