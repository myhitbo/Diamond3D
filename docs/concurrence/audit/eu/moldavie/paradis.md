# Audit : Paradis (paradis.md)

- **Site** : Paradis, bijouterie de Chișinău · **Adresse** : https://www.paradis.md/ro/ · **Page de départ** : https://www.paradis.md/ro/katalog/pomolvochnye-koltsa
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur 1366 × 900 et affichage iPhone 13 (Playwright)
- **Statut : partiel.** Pas de configurateur. Le robots.txt interdit le panier (`/*/cart`), les filtres, la recherche, les favoris et le tri paginé : ces contrôles sont décrits à partir du code de la page, **non actionnés**. Panier et paiement non atteints.
- Légende : **[V]** vérifié · **[I]** inféré · **[S]** supposé.

## Parcours

| Étape | Options |
|---|---|
| 1. Catalogue « Inele de logodnă » | Grille de 30 modèles par page, 10 pages liées (`?start=30`…) [V] ; filtres, tri, favoris |
| 2. Fiche produit (ex. `/ro/katalog/pomolvochnye-koltsa/pomolvochnye-koltsa/vgr082322a391`) | Galerie photo + vidéo, choix de la taille (une seule : 17), « În rate » (crédit), « Adaugă în coș » [V] |
| 3. Panier | **Non atteint** : `/*/cart` interdit par robots.txt |
| 4. Commande | Bouton « Plasați o comandă » mène à `/ro/mia/step2` (autorisé, mais non ouvert au-delà d'un test de statut : réponse 303, redirection) [V] |

Il n'y a **aucune composition** par l'acheteur : métal, pierre et forme sont ceux du modèle [V].

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Bijuterii aur / argint / oțel, Inele de logodnă, Verighete, Ceasuri, Gift card, Surprise box, Colecție exclusivă | Liens | Mènent aux catégories (liens lus, 149 contrôles listés) | — | Vérifié (lecture) |
| Recherche (champ) | Champ | Envoie `/ro/search/result?search=` : **interdit par robots.txt** | — | Non testé |
| RU / RO | Lien | Bascule la langue (`/ru/katalog/pomolvochnye-koltsa`) | — | Lien lu |
| Magasins (`/ro/kontakty`), Calitate, Cariera | Liens | Pages de service | — | Liens lus |
| Téléphone `tel:+37322221232` | Lien | Appel | — | Lien lu |
| Favoris (cœur, `/ro/wish-list`) | Bouton | Ajout aux favoris : **interdit** (`/*/wish`) | — | Non testé |
| Filtrează / Resetează | Boutons | Soumet le filtre (`extra_fields…`) : **interdit** | — | Non testé, mais le panneau et ses options sont lus dans le code |
| Sortează după | Bouton | 6 tris : plus récents, plus populaires, prix croissant/décroissant, remise croissante/décroissante [V, code]. Appliquer un tri ajoute `limitstart` : **interdit** | — | Non testé |
| Pagination 1 à 10, « Go to next page » | Liens | `?start=30`, `60`… (autorisé) | — | Liens lus, page 2 non ouverte |
| Fiche : Înapoi / Înainte, vignettes 1 à 4 | Liens | Parcours de la galerie | — | Lu |
| Fiche : champ de taille (radio 17) | Radio | Une seule taille proposée ; « Află mărimea » ouvre `/ro/sizes` | « peut varier selon la taille ou l'adresse » [V, texte] | Lu |
| Fiche : « Adaugă în coș » | Bouton (submit) | Ajouterait au panier : **non cliqué, panier interdit par robots.txt** | — | Non testé |
| Fiche : « În rate » | Lien | Ouvre le calcul du crédit (voir prix) | — | Lu via la fiche |
| Fiche : formulaire de crédit (nom, prénom, téléphone, e-mail, ville, adresse) | Formulaire | Non rempli (règle) | — | Non testé |
| Fiche : « Trimite SMS » / « Confirmă » (connexion) | Boutons | Connexion par SMS | — | Non testé |
| Fiche : « Vezi Video-ul », « Descarcă tabelul » | Liens | Vidéo de taille, tableau PDF | — | Liens lus, non ouverts |
| Pied de page : Garanție, Livrare, Metode de plată, Termeni, Politica, Certificate, Loialitate, APCSP (consumator.gov.md) | Liens | Pages lues (voir plus bas) | — | Vérifié |
| Cookies : « Setări cookie » | Bouton | Paramétrage | — | Lu |

## Options disponibles

Filtres lus dans le formulaire du catalogue (non soumis) [V] :
- **Matériau** : Aur (585), Aur (750) ; **couleur du métal** : Blanc, Blanc et rouge, Jaune, Rose, Rouge.
- **Pierre** : Diamant, **Diamant creat în laborator**, Moissanite, Saphir, Cubic Zirconia (+ bleu, incolore), Swarovski, Fără pietre.
- **Forme du diamant** : Baguette, Cushion, Emerald, Marquise, Oval, Pară, Princess, Rotundă Brilliant.
- **Couleur de pierre** : Albastru Safir, Galben, Incolor ; **thème** : Love ; **certificat (caractéristique spéciale)** : GGL, GIA, IGI.
- **Marque** : 19 marques (Sokolov, Valentine, Master Brilliant, Kast…). **Tailles** : 15, 15,5, 15,8, 16, 16,5, 17, 17,5, 18, 18,5, 19, 19,5, 21. **Disponible à l'adresse** : 17 adresses (dont des boutiques Sokolov) à Chișinău, Bălți, Comrat, Ungheni, Cahul. Filtre « Prix » (champs `fprice_from`/`fprice_to`) et « Disponibile în set ».
- Pas de choix carat, pureté, monture, gravure, pavage dans l'interface [V].
- Vues : galerie de photos et une vidéo de produit lue automatiquement (`/components/com_jshopping/files/video_products/VGR082322.mp4`) ; pas de 3D, 360° ni essayage [V].

## Prix, délais, retours, garanties

- **Prix** : affichés en lei (MDL), TTC [I]. Exemple, bague or blanc 585, diamant de laboratoire 1 à 1,07 ct, 2,69 g : 30 670 lei barré, **23 003 lei** (−25 %) [V]. Pas de décomposition du prix (métal, pierre, façon) [V].
- **Crédit** : acompte ajustable (2 000 lei proposé), 4 à 24 mensualités ; remise de 15 % (4 à 10), 10 % (12), 7 % (15 à 18), 0 % (24) ; non cumulable avec la carte de fidélité [V]. Banques : MAIB (5 mensualités), Victoriabank Star Card (6), Moldinconbank, Microinvest, Iute Credit, Easy Credit [V : `/ro/garantiya/online-pay`].
- **Paiement** : carte Visa/Mastercard via Moldova Agroindbank, en lei, 3D Secure possible [V]. Au livreur : espèces uniquement, pièce d'identité au-dessus de 20 000 lei [V : `/ro/garantiya/delivery`].
- **Livraison** : toute la Moldavie sauf la Transnistrie ; 2 jours ouvrés à Chișinău, 3 ailleurs (comptés depuis la confirmation téléphonique) ; 50 lei Chișinău, 70 lei régions ; **gratuite dès 2 000 lei** ; dernier magasin de transfert : +3 jours [V].
- **Délai de fabrication** : sans objet, tout est en stock ; aucune fabrication sur mesure annoncée [V].
- **Retours** : « Bijuteria procurată nu poate fi returnată sau schimbată » (conditions, art. 7.18) : **aucun retour ni échange**, pas de délai de rétractation indiqué [V : `/ro/garantiya/gid`]. Défaut visible à signaler sous 24 h [V].
- **Garantie** : légale, 24 mois ; réparation gratuite d'un défaut de fabrication ; usure du rhodium et rayures exclues ; mise à taille non traitée [V : `/ro/poleznye-sovety/garanty`].
- **Réservation** : 24 h (art. 5.6) [V, extrait du texte].
- **Fidélité** : paliers Silver 3 % (5 000 lei) à Diamond 12 % (500 000 lei) ; cashback 2 % [V : `/ro/loaialitate`].

## Confiance et service

- **Certificats** : filtre GIA, IGI, GGL ; sur la fiche lue, pas de certificat propre au produit ; seulement étiquette d'authenticité et poinçons [V]. La page « Certificate » ne nomme pas d'émetteur dans son texte [V].
- **Libellé du synthétique** : « Diamant creat în laborator » dans le titre, le filtre et la fiche [V]. Pas de mention « synthétique ».
- **Avis clients** : aucun sur la fiche lue [V]. Une page d'avis existe dans le code (`index.php?review/` autorisé par robots.txt) [I].
- **Magasins** : 17 adresses (certaines Sokolov) ; appel +373 22 22 12 32 ; application mobile en bandeau [V].
- **Preuves de fabrication** : aucune photo d'atelier ni suivi de commande [V]. Seule une vidéo de produit.
- **Service** : taille expliquée par un PDF à imprimer ; pas de chat, ni de rendez-vous, ni d'essayage à domicile vus [V].

## Points forts à retenir pour JR Diamond

1. **Filtre de pierre « Diamant creat în laborator » à côté de « Diamant »** : le synthétique est un choix assumé, pas caché. Preuve : filtre `extra_fields[1][119460]` lu sur la page de départ.
2. **Filtre de certificat (GIA, IGI, GGL)** dès la liste. Preuve : `extra_fields[29]`.
3. **Remise liée au nombre de mensualités** (15 % pour 4 à 10) : levier de conversion sur un panier élevé. Preuve : `/ro/garantiya/online-pay`.
4. **Livraison gratuite dès 2 000 lei et délais en jours ouvrés annoncés** (2 à 3 j). Preuve : `/ro/garantiya/delivery`.
5. **Fiche avec vidéo du produit et vue des stocks par magasin.** Preuve : `VGR082322.mp4` chargé par la fiche ; « Disponible à l'adresse » avec le prix local.
6. **Le catalogue sert aussi de preuve de volume** (30 modèles par page, 10 pages) [V], argument « cela existe en vrai ».

## Défauts observés

- **Aucun retour possible** sur les bijoux : exception générale, y compris hors sur mesure [V]. JR Diamond devra l'expliquer pour le sur mesure (question à l'avocat).
- Carat, pureté et couleur du diamant de laboratoire **non affichés** dans le texte de la fiche lue (champs présents, valeurs vides) [V].
- Une seule taille proposée par fiche ; prix « variable selon la taille ou l'adresse » sans règle [V].
- Pas de 3D, ni 360°, ni composition [V]. Pas d'avis. Pas de décomposition du prix.
- Chargement : plus grand élément visible à **3,9 s** (ordinateur, fiche) et **3,8 s** (catalogue), **3,2 s** sur iPhone ; première image visible du catalogue à 3,1 s sur iPhone [V, mesures Playwright, un passage chacune].
- Le texte de la fiche ne donne pas le titre de l'or en carats (seulement 585) [V].

## Limites de l'audit

- Panier, recherche, filtres, tri, favoris : **interdits par robots.txt**, non actionnés. Paiement non atteint, frais de panier non observés (vus sur la page de livraison seulement).
- Une requête de statut (curl) a été envoyée à `/ro/mia/step2` (autorisée) : réponse 303, rien d'autre.
- La vidéo de produit est une ressource chargée automatiquement par la page ; robots.txt interdit son indexation (`video_products/`), elle n'a pas été ouverte directement.
- Un seul modèle de bague lu en détail. Pas de fiche de diamant naturel lue.
- Mesures de temps : un seul passage, réseau du proxy de l'environnement, non représentatif d'un utilisateur moldave.
- Pas de test de la version russe.

## Sources

- https://www.paradis.md/ro/katalog/pomolvochnye-koltsa (page de départ, 15/11/2026)
- https://www.paradis.md/ro/katalog/pomolvochnye-koltsa/pomolvochnye-koltsa/vgr082322a391
- https://www.paradis.md/ro/garantiya/delivery · /ro/garantiya/online-pay · /ro/garantiya/gid · /ro/poleznye-sovety/garanty · /ro/sizes · /ro/loaialitate · /ro/informatsiya/certificate
- https://www.paradis.md/robots.txt
