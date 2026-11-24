# Audit — NAGI Jewelers (Stamford, Connecticut)

- **Site** : NAGI Jewelers, 828 High Ridge Road, Stamford, CT
- **Adresse** : https://nagijewelers.com/ ; page de départ https://nagijewelers.com/pages/stamford-custom-jewelry-designs
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Il n'existe pas de configurateur en ligne : le sur mesure passe par un formulaire de contact. Les fiches de bagues sont lues ; le panier n'a pu être lu que vide (voir Limites).
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vues) |
| --- | --- |
| Page de départ « Services - Custom Designs » | Texte sur le processus (croquis, rendu 3D « from every angle », cire à essayer, fonderie, deux maîtres joailliers présentés), formulaire « Get Started ». [V] |
| Contact | Nom, courriel, téléphone, message, bouton Send ; formulaire non rempli. [V] |
| Rendez-vous | /pages/schedule-an-appointment (lien « Book an appointment ») ; non ouvert. [V lien] |
| Catalogue fiançailles | /collections/bridal : 176 bagues, prix affichés, « Center stones are sold separately. Design your dream ring with ease, one step at a time. » [V] |
| Fiche de bague | Prix, SKU, Add to Cart, wishlist, « Contact Concierge Team », retrait en magasin « Usually ready in 2 hours ». Pas de choix de métal, taille ni carat sur la fiche. [V] |
| Panier | /cart : « Your cart is currently empty ». [V] |

## Contrôles vérifiés

Relevé automatique : 46 contrôles visibles sur ordinateur, 35 en affichage iPhone (page de départ).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Previous / Next (bandeau supérieur) | boutons | Défilement des messages (« Complimentary Shipping on Domestic Orders over $300 ») | aucun | Relevés, non actionnés |
| Book an appointment | lien | Vers /pages/schedule-an-appointment | aucun | Non ouvert |
| Open Search | bouton | Recherche du site | aucun | Non actionné |
| Wishlist, compte, panier (0) | icônes | Wishlist via Swym ; panier vide | aucun | Panier lu vide |
| Menu : David Yurman, Engagement, Wedding Bands, Jewelry, Watches, Vintage & Estate, Giftware, About | liens | Sous-menus par forme, style, marque, prix ; certains vers un sous-domaine David Yurman | aucun | Liens relevés |
| Name, Email, Phone Number, Message, Send | formulaire | Non rempli ni envoyé | aucun | Non testés (donnée personnelle) |
| Chat | bouton | Bulle « Chat » en bas à droite | aucun | Non ouvert (règle : pas de chat) |
| Scroll to top | bouton | Remonte la page | aucun | Relevé |
| 828 High Ridge Road, Stamford CT 06905 | lien | Google Maps | aucun | Relevé |
| 203.964.0551 ; hello@nagijewelers.com | liens | Téléphone ; courriel | aucun | Relevés |
| Shipping & Return Policy ; Services ; Ask NAGI | liens | Pages lues (retours, livraison) ; blog « Ask NAGI » non ouvert | aucun | OK |
| Inscription lettre d'information (Join) | champ | Non rempli | aucun | Non testé |
| Catalogue : Filter, Sort by (8 critères) | menus | Présents ; non actionnés (tri interdit par robots.txt : `*sort_by*`) | prix affichés | Non testés |
| Fiche : Add to Cart | bouton | Non cliqué : voir Limites | 2 800 $ (exemple) | Non testé |
| Fiche : Add To Wishlist, Contact Concierge Team, View store information, Write a review | boutons | Relevés ; non actionnés | aucun | Non testés |
| Fiche : « More payment options » | lien | Relevé (options de paiement échelonné) ; non ouvert | aucun | Non testé |

## Options disponibles

- Bagues de fiançailles : surtout Gabriel & Co., 14 k blanc ou jaune ; styles halo caché, solitaire, trois pierres, cathédrale, contemporain ; formes ovale, radiant, émeraude, rond. [V, /collections/bridal]
- Sur mesure : croquis, rendu 3D, cire, fonte, filigrane et gravure à la main, sertissage à la main ; pierres choisies par un gemmologue sur place. [V]
- Aucune option de métal, titre, carat, origine ou taille en ligne ; aucune mention du synthétique dans les pages lues. [V pour les pages lues]
- Vues : photos de produit ; pas de 3D, 360°, AR ni essayage relevés sur les pages lues. [V]
- Langues : anglais ; devise : dollar ; livraison internationale proposée par UPS. [V]
- Services : réparations, estimation, vente de montres (Breitling, David Yurman), « Vintage & Estate ». [V]

## Prix, délais, retours, garanties

- Prix de bagues sans pierre centrale : de 1 400 $ à 3 050 $ dans les premières lignes de la collection ; « Price does not reflect center stone ». [V]
- Sur mesure : aucun prix, aucun délai annoncé, aucun mot sur le paiement. [V]
- Livraison : gratuite dès 300 $ en FedEx Ground ou USPS Priority, 1 à 5 jours ouvrés, signature obligatoire, tout assuré ; express et samedi possibles avec frais ; international UPS à partir de 49 $ (jusqu'à 450 $ de valeur, 6 à 10 jours), taxes et droits à la charge du client. Retrait en magasin « usually ready in 2 hours ». [V, /pages/shipping-and-returns]
- Retours : 30 jours après livraison (achats en ligne) ; **commandes spéciales et sur mesure : vente finale**, ainsi que articles ajustés, gravés ou soldés, et « all sized items are final sale ». Remboursement, échange ou avoir (un an). Retour en magasin possible. [V]
- Garantie : réparation gratuite un an sur les pièces faites maison ; garanties des fabricants honorées. [V]
- Certificats : « laboratory reports » exigés au retour ; les diamants « ideal cut » sont vantés ; pas de mention GIA ou IGI vue. [V]
- Moyens de paiement : non vus (panier vide). [S]

## Confiance et service

- Entreprise familiale « spanning nearly five decades », atelier sur place, deux joailliers nommés (Leon Minassian, Pedro Ordonez) avec photo. [V]
- « Your project is never outsourced » (sur mesure) : promesse de fabrication interne, sans preuve photo ni vidéo de fabrication. [V]
- Avis : « Be the first to write a review » sur la fiche lue ; pas de note globale sur la page de départ. [V]
- Chat, téléphone, courriel, concierge. [V pour les liens]

## Points forts à retenir pour JR Diamond

1. **Discours de fabrication interne** : rendu 3D « from every angle », puis cire « to touch, hold, and try on » ; « never outsourced » ; maîtres joailliers nommés avec photo (https://nagijewelers.com/pages/stamford-custom-jewelry-designs). Même promesse que « l'atelier en direct », mais sans preuve visuelle : JR Diamond peut la prouver par photos et vidéos.
2. **Personnes visibles** : les artisans sont nommés et photographiés ; avantage de confiance simple à copier (la page de départ).
3. **Retrait en magasin sous 2 heures et livraison assurée avec signature** : repères de sécurité que le client attend (fiche produit, page de livraison).
4. **Retour de 30 jours et exception du sur mesure écrite sans détour** : le client sait d'avance que l'article sur mesure est vendu définitif ; JR Diamond doit l'écrire aussi, après avis d'avocat.
5. **Bague sans pierre centrale annoncée en toutes lettres** : « Center stones are sold separately. Design your dream ring with ease, one step at a time. » (https://nagijewelers.com/collections/bridal) : la structure en deux temps (monture, puis pierre) est lisible.

## Défauts observés

- Aucun configurateur ni prix pour le sur mesure ; seul un formulaire de contact. [V]
- Aucune option de personnalisation sur les fiches (pas de métal, taille, gravure). [V]
- Pas de mention du diamant synthétique ni de certificats GIA / IGI dans les pages lues. [V]
- Aucun délai de fabrication annoncé. [V]
- Aucune preuve visuelle de fabrication en dehors de photos génériques. [V]
- Page de départ très courte : après le texte, le formulaire occupe le bas de page ; pas d'avis clients visibles. [V]
- Livraison gratuite seulement dès 300 $ ; frais d'express non affichés avant le paiement. [V]

## Limites de l'audit

- Aucun parcours de configuration à auditer (le site n'en a pas) : l'audit porte sur la page de départ, le catalogue, une fiche, les politiques et le panier vide.
- **Panier non rempli** : le robots.txt interdit `/cart/` (chemin d'ajout) et `/cart.js` ; le site demande aux agents d'utiliser ses outils d'agent plutôt que de scripter les contrôles. Aucun ajout fait. Récapitulatif, frais et délai au panier : non vus ; moyens de paiement non vus.
- Tri et filtres du catalogue non actionnés (URL de tri interdites).
- Formulaire, chat, rendez-vous, wishlist non utilisés.
- Mesure du visuel principal : fiche de bague, première image visible en 1,5 s depuis le catalogue (ordinateur) ; la page de départ affiche son visuel en moins de 4 s (capture à 4 s, aucune mesure plus fine) ; mesure iPhone non faite séparément au-delà de la capture à 4 s.
- Les prix cités viennent des premières lignes de la collection (176 bagues) : pas de relevé complet.

## Sources

- https://nagijewelers.com/pages/stamford-custom-jewelry-designs
- https://nagijewelers.com/collections/bridal
- https://nagijewelers.com/products/gabriel-co-14k-white-gold-hidden-halo-engagement-ring-radiant-cut-diamond
- https://nagijewelers.com/pages/the-nagi-jewelers-engagement-rings-and-bridal-jewelries
- https://nagijewelers.com/pages/shipping-and-returns ; /cart
- https://nagijewelers.com/robots.txt
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/nagi-jewelers/
