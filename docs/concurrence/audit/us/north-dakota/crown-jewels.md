# Audit : Crown Jewels (Fargo, Dakota du Nord)

- **Site** : Crown Jewels
- **Adresse** : https://www.crownjewelsfargo.com ; page de départ https://www.crownjewelsfargo.com/bridal
- **Date** : 15/11/2026 (date de l'étude ; contrôles exécutés à la session du 25/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (émulation Playwright)
- **Statut** : **partiel**. Le site vitrine (Squarespace) est lu en entier. Le catalogue et le constructeur de bague sont hébergés sur `crownjewelsfargo-frame.jewelershowcase.com`, dont le robots.txt dit `Disallow: /` (contrôle : INTERDIT) : **aucune page de ce domaine n'a été ouverte**, ni par navigateur ni par curl. Seuls les liens ont été relevés dans la page de départ.
- Marques : **V** vérifié (page lue), **I** inféré, **S** supposé.
- robots.txt du site principal : AUTORISÉ pour `/bridal`, `/bridal-package`, `/custom-jewelry-designs-fargo-nd`, `/visitus`. Il bloque nommément plusieurs robots d'IA (liste de Squarespace) ; l'audit a utilisé un Chromium ordinaire, comme l'ouverture d'une page par un visiteur.

## Parcours

| Étape | Options | État |
|---|---|---|
| 1. Page Bridal | Bandeau d'accueil, bagues de fiançailles, alliances, styles (Halo, Bezel, Duel Stone, Solitaire), formes (Round, Oval, Elongated Cushion, Emerald, Marquise, Pear), constructeur annoncé, bandes pour hommes, « bridal package », 4 questions | Lue (V) |
| 2. Catalogue et constructeur | 11 liens vers `…jewelershowcase.com/browse/…` (bagues, alliances, styles, formes, bandes pour hommes) | **Non ouvert** (robots.txt interdit) |
| 3. Sur mesure | `/custom-jewelry-designs-fargo-nd` : 4 étapes (Consult, Design, Craft, Cherish), refonte de bijou, avant/après ; tous les boutons mènent à `/visitus` | Lue (V) |
| 4. Contact | `/visitus` : formulaire (prénom, nom, e-mail, téléphone, détails, pièce jointe) | Lu, non rempli (V) |
| 5. Panier / paiement | Aucun sur le domaine principal | Inexistant (V) ; éventuel panier sur le domaine interdit : non vérifiable |

## Contrôles vérifiés

Page de départ, ordinateur (47 contrôles ; 37 sur iPhone) :

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Menu : Home, Bridal, Fine Jewelry, Custom, On-Site Repairs, About Us | liens | Pages `/bridal`, `/fine-jewelry-fargo-nd`, `/custom-jewelry-designs-fargo-nd`, `/on-site-repairs`, `/about` ; Bridal, Custom lues | n/a | OK (partiel) |
| (701) 237-6809 | lien tel: | Lien présent | n/a | Non testé (appel) |
| Google Reviews | lien externe | `g.page/r/…` ; non ouvert (autre domaine) | n/a | Non testé |
| Visit Us (2 liens) | lien | Mène à `/visitus` (V) | n/a | OK |
| Explore Engagement Rings / Explore Wedding Bands | liens | Mènent à `…jewelershowcase.com/browse/wedding-and-engagement/…` | n/a | **Non testé : domaine interdit** |
| Vignettes de style (Halo, Solitaire, Two-Stone, Bezel) | 4 liens | Domaine interdit : seule la cible est relevée | n/a | Non testé (robots.txt) |
| Vignettes de forme (Round, Oval, Elongated Cushion, Emerald, Marquise, Pear) | 6 liens avec filtre `pimprimarystoneshapes` | Domaine interdit | n/a | Non testé (robots.txt) |
| Explore All Styles / Explore All Shapes | liens | Domaine interdit | n/a | Non testé (robots.txt) |
| Discover Custom Bridal | lien | Mène à `/visitus` (V) | n/a | OK |
| Explore Men's Bands | lien | Recherche sur le domaine interdit | n/a | Non testé (robots.txt) |
| Explore Our Bridal Package | lien | `/bridal-package` lue (V) | n/a | OK |
| Get To Know Us | lien | `/about` (non ouverte) | n/a | Non testé |
| FAQ (4 boutons accordéon) | boutons | S'ouvrent et se ferment ; 3 réponses lues, celle sur le rendez-vous non capturée (V) | n/a | OK |
| Find Your Forever Ring | lien | `/visitus` | n/a | OK |
| Pied de page : Instagram, Facebook | liens | Non ouverts | n/a | Non testé |
| Formulaire `/visitus` : prénom, nom, e-mail, téléphone, détails, fichier, Submit | champs | Présents ; **rien saisi, rien envoyé** (règle de lecture seule) | n/a | Non testé |
| Boutons de la page sur mesure (Begin Your Custom Design, Start Redesign, Start Your Design) | liens | Mènent tous à `/visitus` (V) | n/a | OK |
| FAQ de la page sur mesure (5 questions) | boutons | Seule la première réponse est lue ; les 4 autres (coût, délai, réutilisation de pierres, refonte) non ouvertes | n/a | Partiel |

Constructeur annoncé (« interactive ring builder and diamond selector », V) : tous ses contrôles (métal, carat, couleur, clarté, certificat, taille, panier) sont **non testés, domaine interdit**. Aucun mode de vue (3D, 360°, photo, vidéo) n'a pu être vérifié.

## Options disponibles

Uniquement ce que la page de départ affiche (V) :

- **Styles annoncés** : Halo, Bezel, Duel Stone (Two-Stone), Solitaire.
- **Formes annoncées** : Round, Oval, Elongated Cushion, Emerald, Marquise, Pear.
- **Origine** : diamants naturels et synthétiques (« natural and lab-grown »), FAQ.
- **Combinaisons** : « more than 800 combinations » de montures et styles (affirmation du site, non vérifiée).
- **Alliances pour hommes** : rubrique dédiée (contenu non lu).
- **Sur mesure** : bagues, pendentifs, boucles, bracelets ; refonte de bijoux de famille ; réutilisation de pierres.
- **Non documenté** (domaine interdit) : métaux, titres, carat, certificat, taille de doigt, gravure.

## Prix, délais, retours, garanties

- **Prix** : aucun sur le site principal (V). Prix du catalogue : non lu (domaine interdit). Coût du sur mesure : question de FAQ, réponse non lue.
- **Délai** : aucun chiffre sur les pages lues (V).
- **Retours, livraison, paiement, panier** : rien sur le domaine principal. Non évalué.
- **Forfait « Bridal Package »** (V, `/bridal-package`), offert avec toute bague de fiançailles : nettoyage et contrôle à vie ; estimation gratuite de la bague et de l'alliance ; remplacement à vie des diamants d'accent jusqu'à 0,05 ct ; 20 % de remise sur les alliances et sur les cadeaux du cortège ; produit de nettoyage et étui ; mise à taille et rhodiage de l'or blanc offerts pendant un an.
- **Financement** : « financing and layaway options » (V), sans taux ni conditions. Diamant naturel et synthétique : les deux (V).
- **Certificats** : aucun GIA/IGI mentionné sur les pages lues.
- **Devise et langue** : anglais ; devise non vue.

## Confiance et service

- Magasin : 4487 Calico Dr South, Suite A, Fargo ; lun-jeu 9 h 30-18 h, ven-sam 9 h 30-16 h ; dimanche fermé ; (701) 237-6809 (V).
- « Troisième génération » familiale, orfèvres sur place, réparations sur place (V, `/bridal`).
- Lien d'avis Google (non ouvert) ; aucun avis affiché sur la page ; aucun chat, WhatsApp, essayage à domicile ni prise de rendez-vous en ligne (V : tout passe par `/visitus`).
- Preuves de fabrication : séquence avant/après des refontes sur la page sur mesure (V, images « Before / After ») ; pas de vidéo.

## Points forts à retenir pour JR Diamond

1. **Forfait de bienvenue clair, listé point par point** : nettoyage à vie, estimation, remplacement des petits diamants, 20 % sur les alliances, mise à taille et rhodiage la première année (V, `/bridal-package`). Utile pour formuler le service après-vente (première mise à taille offerte).
2. **Processus sur mesure en 4 mots** : Consult, Design, Craft, Cherish (V). Simple et lisible.
3. **Avant/après de refonte de bijoux de famille** présenté comme offre (V). Même cible que la page « Bijou de famille ».
4. **FAQ courte sur le naturel et le synthétique** : « both » en une phrase (V).
5. **Visuel principal rapide** : image d'en-tête chargée en environ 1,0 à 1,1 s (ordinateur 1,1 s, iPhone 1,0 s ; V, une mesure chacun).

## Défauts observés

- Constructeur et catalogue hors du site principal, sur un autre domaine (V, 11 liens) ; le visiteur quitte le site de la marque.
- Aucun prix, délai, retour, livraison ni certificat sur les pages lues (V).
- Tous les boutons « Custom » mènent à un formulaire de contact générique (V) : pas d'étape guidée.
- Pas d'avis visibles, pas de prise de rendez-vous en ligne, pas de WhatsApp (V).
- « More than 800 combinations » : affirmation non démontrée sur ce site.

## Limites de l'audit

- **Cœur du parcours non audité** : le constructeur, les filtres, la fiche produit, le panier et les modes de vue sont sur `crownjewelsfargo-frame.jewelershowcase.com` (robots.txt `Disallow: /`) ; rien n'y a été ouvert. Aucune estimation de prix, filtre ou option de ce catalogue n'est donc établie ici. Les éléments cités du catalogue viennent uniquement des libellés et adresses de liens de la page de départ.
- `/about`, `/fine-jewelry-fargo-nd`, `/on-site-repairs`, Google Reviews, réseaux sociaux : non lus en détail.
- Aucune saisie dans le formulaire `/visitus`. Réponses de 5 questions de FAQ non lues.
- Mesures : première image d'en-tête (naturalWidth > 0), une mesure par appareil, sans cache.

## Sources

- https://www.crownjewelsfargo.com/bridal (page de départ, FAQ, liens)
- https://www.crownjewelsfargo.com/bridal-package
- https://www.crownjewelsfargo.com/custom-jewelry-designs-fargo-nd
- https://www.crownjewelsfargo.com/visitus
- https://www.crownjewelsfargo.com/robots.txt ; robots.txt de `crownjewelsfargo-frame.jewelershowcase.com` (INTERDIT, via l'outil de contrôle)
