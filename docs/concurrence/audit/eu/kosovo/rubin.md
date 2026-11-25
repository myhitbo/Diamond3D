# Audit : Rubin Jewellery (Ferizaj et Prishtinë, Kosovo)

- **Site** : Rubin Jewellery, https://www.rubin14k.com/ (page unique en HTML statique, gabarit « 50th Anniversary », préchargeur animé, lightbox prettyPhoto [V])
- **Page de départ** : https://www.rubin14k.com/ (section « Produktet », ancre `#produktet`). Pas de configurateur ni de fiche produit : la page de départ est la liste de cinq modèles.
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366×900) et affichage iPhone 13 (Playwright)
- **Statut** : complet pour ce que le site propose (une page, aucun panier ni formulaire). Le seul lien vers l'offre de bagues pointe vers Facebook, interdit par robots.txt : non ouvert.
- **Marques** : V vérifié (page lue ou contrôle actionné) · I inféré · S supposé.
- **Robots** : `robots.txt` du site sans règle (`User-agent: *` seul) ; `robots.cjs` : AUTORISÉ pour `/` et `/index.html`. Le lien « UNAZA FEJESE » mène à `https://facebook.com/RubinUnazaFejese` : **INTERDIT, non ouvert**. Les liens X, YouTube, Pinterest, Instagram, Facebook (`/artariaRUBIN/`) et Google Maps n'ont pas été ouverts.

## Parcours

| Étape | Options |
|---|---|
| 1. Accueil | Menu à 7 ancres (Home, 50 Vjetori, Historiku, Produktet, Shërbimet, Kontakti, Garancioni) ; coordonnées de quatre magasins ; encart « 50 ans » |
| 2. Frise « Historiku » | 11 jalons de 1965 à 2019, un clic déplie le texte |
| 3. « Produktet » (« Disa nga modelet e Unazave të Fejesës ») | Cinq vignettes qui ouvrent une visionneuse de 5 images ; cinq blocs de texte avec référence, prix « dès », matière, largeur, épaisseur |
| 4. Services, témoignages, contact | Texte de réparation, trois témoignages de clients, téléphones, horaires, carte Google |
| 5. Suite | Lien vers la page Facebook « Unaza Fejese » (interdit : arrêt) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Logo | lien | Renvoie à `/index.html` | — | OK [V] |
| Home | ancre | Défile en haut de page (scrollY 0) | — | OK [V] |
| 50 Vjetori | ancre | Défile vers l'encart du 50e anniversaire (scrollY 1 883) | — | OK [V] |
| Historiku | ancre | Défile vers la frise (scrollY 2 548) | — | OK [V] |
| Produktet | ancre | Défile vers les modèles (scrollY 3 579) | — | OK [V] |
| Shërbimet | ancre | Défile vers les services (scrollY 5 780) | — | OK [V] |
| Kontakti | ancre | Défile vers le contact (scrollY 7 641) | — | OK [V] |
| Garancioni | ancre | Défile au même endroit que « Kontakti » (7 641) ; **aucune section « garancioni » dans la page** | — | Lien vers rien [V] |
| Onze jalons « 1965 … 2019 » | liens déroulants | Le clic sur « 1969 » déplie le texte de l'année | — | OK [V] (un jalon testé) |
| Cinq vignettes de modèles (U0002, U0008, U0010, U0016, U0024) | liens image | Ouvrent la visionneuse prettyPhoto (« 2/5 », précédent, suivant, lecture, fermer, « Tweet ») ; adresse `#gallery[gallery1]/1/` | — | OK [V] (testé : U0008 ; image 2/5 affichée) |
| Boutons précédent / suivant / lecture / fermer de la visionneuse | boutons | Présents ; seul l'affichage de l'image 2/5 a été vu | — | Non testés un à un |
| « Tweet » | lien | Partage vers X | — | Non ouvert |
| « UNAZA FEJESE » | lien (Facebook) | Mène à `facebook.com/RubinUnazaFejese` | — | **Non ouvert : interdit par robots.txt** |
| Icônes Facebook, X, YouTube, Pinterest, Instagram (×2) | liens | Pages sociales de la marque | — | Non ouvertes |
| Google Maps : « Map », « Satellite », « Toggle fullscreen view », « Map camera controls » | boutons | Présents dans la carte intégrée ; quatre onglets de magasin (Diamond Line, Exclusive, Albimall, Bijoux) | — | Non testés (les clics sur les onglets n'ont rien changé : l'adresse reste `/`) [V] |
| Flèche haut de page | bouton | Visible en bas à droite | — | Non testée |
| Téléphones, courriel | texte | `rubin1@rubin14k.com`, `diamond@rubin14k.com`, `albimall@rubin14k.com`, trois numéros +383 49 701-… | — | Texte lu, non cliqué [V] |

Aucun bouton « ajouter au panier », « acheter », « chat », « WhatsApp », « partager » (hors « Tweet »), « comparer », « rendez-vous », « guide des tailles » n'existe sur la page [V].

## Options disponibles

- **Modèles listés** : U0002 (dès 450 €, or 14 k jaune et blanc), U0008 (dès 350 €, or blanc), U0010 (dès 650 €, or jaune et blanc), U0016 (dès 250 €, or jaune), U0015 (dès 330 €, or jaune) ; largeur 6 à 7 mm, épaisseur 1,5 à 2,0 mm ; pierre « signity zirkonia » [V]. La cinquième vignette est U0024 sans texte associé : six références pour cinq blocs [V].
- **Remarque** : les images sont nommées `burmeU00xx.jpg` ; « burme » est un mot albanais courant pour alliance ; les images montrent des paires d'anneaux : ce sont des alliances présentées comme « unaza fejese » [I].
- Autres offres déclarées : plus de 1 500 modèles en boutique, commande sur mesure acceptée, or 14 k et 18 k, diamants, rubis, émeraudes naturels « certifiés internationalement et garantis » (boutique Albi Mall, 2019) [V, texte du site ; non vérifié]
- **Devise** : euro ; **langue** : albanais avec quelques éléments en anglais ; pas de sélecteur [V].

## Prix, délais, retours, garanties

| Point | Constat | Marque |
|---|---|---|
| Prix | « Duke filluar nga » (à partir de) 250 à 650 € pour cinq modèles ; aucune décomposition, aucun carat, aucune qualité de pierre | V |
| Délai | Non annoncé | V |
| Livraison | Non annoncée ; vente en boutique | V |
| Retours | Non annoncés | V |
| Garantie | Mot « Garancioni » dans le menu sans contenu ; une mention de « garancion » dans le texte de la boutique Albi Mall ; aucune durée | V |
| Certificats | « Të certifikuara ndërkombëtarisht » sans nom de laboratoire ; pierres des modèles listés : zircone, donc sans certificat de diamant | V |
| Libellé du synthétique | Aucun diamant de synthèse mentionné ; aucun terme albanais relevé | V |
| Laboratoire interne | Laboratoire d'essai de l'or ouvert en 2009, « 0,00001 % de précision » (affirmation du site) | V (texte), non vérifié |

## Confiance et service

- Ancienneté : fondée en 1965, quatre points de vente, lignée de fabricant (production en série dès 1972, CNC depuis 2005) [V, frise].
- Réparation sur place revendiquée à Ferizaj [V].
- Trois témoignages de couples (Donika et Uran, Donika et Valon, Sidorela Dauti), sans date ni lien [V].
- Horaires lundi-samedi 9 h-18 h ; trois téléphones et trois courriels, un par magasin [V].
- Avis clients vérifiables : aucun ; suivi de commande : aucun ; chat ou WhatsApp : aucun [V].
- Preuves de fabrication : aucune photo ni vidéo d'atelier ; la frise raconte la fabrication sans l'illustrer [V].

## Points forts à retenir pour JR Diamond

1. **Ancienneté et fabrication racontées en frise datée** (1965 à 2019), avec le laboratoire d'essai de l'or comme preuve de rigueur : une histoire de confiance sans photo de fabrication [V]. JR Diamond peut aller plus loin avec des photos et vidéos d'atelier.
2. **Visionneuse d'image avec compteur « 2/5 »**, précédent et suivant : rendu net, mais très simple [V].
3. **Prix « dès » affichés en clair avec la largeur et l'épaisseur du jonc en millimètres** : une précision technique que le client peut comparer, bonne pour le sujet « cotes » des forums [V].
4. **Annonce « mêmes bijoux dans plus de 1 500 modèles en boutique » + « commande sur mesure »** : la vitrine en ligne sert d'appel vers le magasin [V].

## Défauts observés

- **Aucun achat, aucun devis, aucun contact en ligne** : seuls des numéros de téléphone et des courriels ; pas de formulaire [V].
- **Menu « Garancioni » sans contenu** (il défile vers le contact) [V].
- **Libellé trompeur** : « Unaza Fejese » (bague de fiançailles) pour des paires d'alliances en zircone, sans diamant ; une cliente ne saurait pas que la pierre est une zircone avant d'avoir lu le texte [V sur le texte, I sur la confusion].
- **Page lourde** : 8 s de chargement complet sur ordinateur (voir mesures), préchargeur animé ; carte Google chargée d'office [V].
- Six images pour cinq descriptions de modèles (U0024 sans texte) [V].
- Pas de 3D, 360°, vidéo ni essayage ; aucun libellé du synthétique ; aucun avis [V].
- Aucune page de politique de retour, de livraison ni de confidentialité [V sur la page lue].

## Limites de l'audit

- Un seul document HTML, pas de sous-pages. L'offre détaillée est annoncée sur Facebook (page interdite par robots.txt, non ouverte) : le catalogue réel, les prix des 1 500 modèles et d'éventuelles commandes sont donc inconnus.
- Visionneuse : seules les images 1 et 2 sur 5 ont été vues ; la lecture automatique n'a pas été lancée.
- Carte Google : onglets de magasins sans effet visible au clic, boutons de carte non essayés.
- Mesures prises en une seule série ; aucune limitation de débit.
- Quatre jalons de la frise vus, un déplié.

## Mesures

| Mesure | Ordinateur | Affichage iPhone 13 |
|---|---|---|
| DOM prêt (`domcontentloaded`) | 2 845 ms | 2 235 ms |
| Chargement complet (`load`) | 8 004 ms | 6 196 ms |
| Préchargeur masqué après 3 s | oui | non mesuré |
| Premier visuel de bague (vignettes) | visible après le préchargeur, non chronométré séparément | idem |
| Défilement horizontal | non | non |
| Contrôles repérés (liens et ancres) | 9 à l'outil `controls.cjs`, 15 liens en tout | idem |

## Sources

- https://www.rubin14k.com/ (HTML et Chromium, 15/11/2026) ; https://www.rubin14k.com/robots.txt
- Fiches de recherche : https://linkedin.com/company/rubin-jewellery (fondation 1965, Prishtina, 11-50 employés) ; https://mapcarta.com/N5205091521 (Rubin Jewellery Ferizaj) ; https://www.instagram.com/rubin_bridal/ (« Since 1965 », quatre points de vente)
- Captures et relevés : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/rubin/` et `eu/kosovo-probe/www_rubin14k_com_/` (hors dépôt)
