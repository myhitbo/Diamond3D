# Dale's Jewelers (Idaho Falls, Idaho)

- **Site** : Dale's Jewelers Inc., 1950 Channing Way, Idaho Falls
- **Adresse** : https://dalesjewelers.com/ ; page de départ https://dalesjewelers.com/design-studio/
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13
- **Statut** : **bloqué pour l'outil, partiel pour le site**. L'iframe `dalesjewelers.everandever.com` (Stuller ever&ever) affiche un contrôle « Let's confirm you are human » (bouton « Begin ») : non cliqué, pas de contournement. Le catalogue WooCommerce (robots.txt : seules les adresses `add-to-cart` sont interdites) a été lu.
- Repères : [V] vérifié, [I] inféré, [S] supposé.

## Parcours

| Étape | Options relevées |
| --- | --- |
| 1. `/design-studio/` | [V] Titre « Design Studio » ; le cadre affiche un captcha de sécurité (« Complete the security check… », bouton Begin, choix de langue « English » + Apply). Aucun configurateur visible |
| 2. Configurateur ever&ever | [I] d'après l'inventaire : 13 titres de métal, jusqu'à 9 formes, changements en temps réel. **Non vu** |
| 3. `/custom-rings/` | [V] formulaire de demande (nom, e-mail, téléphone, métal : or, or blanc, argent, platine ; pierre : diamant, perle, topaze, saphir, rubis, améthyste ; monture : solitaire, halo, pierres latérales, trois pierres, set de mariage ; photo à joindre ; reCAPTCHA). Non rempli |
| 4. `/product-category/bridal-gallery/` | [V] 3 sous-catégories : Engagement Rings (52), Wedding Bands (67), Diamond Bands (7) ; tri ; 8 pages |
| 5. Fiche produit | [V] prix, 3 puces de description, quantité, « ADD TO CART », « DROP A HINT » |
| 6. `/cart/` | [V] panier vide : « Your cart is currently empty », « RETURN TO SHOP » ; aucun article ajouté (bouton non cliqué, adresse `add-to-cart` interdite) |

## Contrôles vérifiés

Visuel principal de la fiche (`/product/marquise-diamond-solitaire-ring/`) : 3,4 s sur ordinateur et 3,4 s en affichage iPhone. Design Studio : page lue en 4-5 s, mais l'outil n'apparaît jamais.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Captcha « Begin » du Design Studio | bouton (iframe) | [V] présent ; non cliqué (protection anti-robot) | n/a | bloqué |
| Select language / Apply | liste + bouton | [V] présents dans le captcha, non utilisés | n/a | non testé |
| Bridal Gallery, Elk Ivory Jewelry, Stewart Douglas Collection, About Us (+ sous-menus), Location, Contact Us | menu | [V] adresses relevées | n/a | OK (liens) |
| Open navigation menu | bouton iPhone | [V] présent | n/a | non testé |
| Sort by (défaut, popularité, nouveauté, prix croissant, prix décroissant) | liste | [V] 5 options listées ; non déroulée | n/a | non testé |
| Engagement Rings (52) / Wedding Bands (67) / Diamond Bands (7) | liens | [V] adresses relevées | n/a | OK |
| Pagination 1–8, → | liens | [V] `/page/2/`… relevées | n/a | OK |
| Vignettes produit (18 par page) | liens | [V] fiches avec prix | 479 à 10 985 $ | OK |
| Quantity | champ | [V] présent | n/a | non testé |
| ADD TO CART | bouton | [V] présent ; non cliqué (chemin `?add-to-cart=` interdit par robots.txt) | 1 625 $ (exemple) | non testé |
| DROP A HINT | lien | [V] présent, formulaire non ouvert | n/a | non testé |
| Text us (bulle) | chat | [V] présent, non ouvert | n/a | non testé |
| Call - 208-525-3361 | lien | [V] lien `tel:` | n/a | OK |
| Facebook, Instagram, X, LinkedIn, YouTube | liens | [V] adresses relevées | n/a | OK |
| Shipping Policy, Return Policy, Privacy Policy | liens | [V] lues (200) | n/a | OK |
| Filtres forme, carat, couleur, pureté, certificat, vues 360°/AR | — | absents du catalogue ; outil ever&ever inaccessible | n/a | non testé (bloqué) |

## Options disponibles

- [V] Formulaire sur mesure : métal (or, or blanc, argent, platine), pierre (diamant, perle, topaze, saphir, rubis, améthyste), monture (solitaire, halo, sidestone, trois pierres, set de mariage), téléchargement d'une photo.
- [V] Fiche : une seule combinaison par pièce (ex. 0,40 ct marquise, G/SI1, or jaune 14 k) ; aucun choix de métal ou de taille sur la fiche lue.
- [I] ever&ever : 13 métaux, 9 formes (index, non vu).

## Prix, délais, retours, garanties

- [V] Prix affichés par pièce, sans décomposition : 1 625 $ pour la marquise 0,40 ct ; catalogue de 479 à 10 985 $ sur la page 1.
- [V] `/custom-rings/` : « our pricing for custom rings is priced very similarly to our non-custom designs » ; le prix est discuté après contact.
- [V] Livraison (`/shipping`) : FedEx uniquement, États-Unis seulement, pas de boîte postale, signature adulte obligatoire, assurance complète, traitement de 2 jours ouvrés ; sur-mesure : « additional handling parameters apply as agreed ».
- [V] Retours (`/warranty-and-returns/`) : 30 jours calendaires depuis la livraison, état neuf avec emballage et certificats GIA ; **créations sur mesure (dont Stewart Douglas Collection) et pièces modifiées (mise à taille, gravure) non remboursables** ; frais de retour et assurance à la charge du client.
- Garantie : aucune page de garantie distincte vue [V sur les pages lues].
- Libellé du synthétique : non relevé dans les pages lues ; l'inventaire cite un rayon dans d'autres sites, pas ici.
- Langues : anglais ; devise : dollar. Panier : frais et moyens de paiement non vus (panier vide).

## Confiance et service

- [V] Téléphone 208-525-3361, horaires lun–sam 10–18 h, adresse, réseaux sociaux, bulle « Text us », « Drop a hint ».
- [V] « Designing and creating custom jewelry since 1963 » (pied de page).
- Avis clients : aucun vu. Preuves de fabrication (photos, vidéos d'atelier), suivi de commande : non vus [V sur les pages lues].
- [V] Note de pied de page : pas de rachat d'or à distance, e-commerce non utilisé pour acquisitions de métaux.

## Points forts à retenir pour JR Diamond

1. **Politique de livraison claire** : transporteur, assurance, signature, 2 jours de traitement [V, `/shipping`].
2. **Retours chiffrés (30 jours) avec exception explicite du sur-mesure** : repère concret pour l'avocat israélien [V, `/warranty-and-returns/`].
3. **Formulaire sur mesure simple (métal, pierre, monture, photo)** : modèle minimal de la demande de devis [V, `/custom-rings/`].
4. **Prix de catalogue affiché dès la liste** avec tri par prix [V, `/product-category/bridal-gallery/`].
5. **Pas de prix « Sur devis » pour le catalogue** : le client voit tout de suite l'ordre de grandeur [V].

## Défauts observés

- [V] Le Design Studio, page de départ, n'affiche qu'un captcha : aucun configurateur lisible par un visiteur automatisé ; un visiteur humain devra cliquer « Begin » [I].
- [V] Les fiches n'offrent ni choix de métal, ni de taille, ni photo multiple visible ; visuel principal en 3,4 s.
- [V] Le sur-mesure est exclu de tout remboursement ; frais de retour à la charge du client.
- [V] Texte de pied de page et site sans avis ni preuve d'atelier.
- [V] Le panier n'affiche pas les moyens de paiement avant le paiement (non vu).

## Limites de l'audit

- Outil ever&ever **non audité** : captcha, aucune tentative de passage. Toutes les options de configuration sont inférées de l'inventaire.
- Aucun article ajouté au panier : l'adresse `?add-to-cart=` est interdite par robots.txt ; frais de livraison, délai et paiement au panier non observés.
- Formulaires, chat, « Drop a hint » non ouverts.
- Pas de revérification mobile détaillée des fiches (seulement le temps d'apparition).

## Sources

- https://dalesjewelers.com/design-studio/ ; /custom-rings/ ; /shipping ; /warranty-and-returns/ ; /cart/ ; /product-category/bridal-gallery/ ; /product/marquise-diamond-solitaire-ring/ (lus le 15/11/2026).
- https://dalesjewelers.com/robots.txt.
- `docs/concurrence/audit/us/idaho/INVENTAIRE.md` (ever&ever, métaux).
