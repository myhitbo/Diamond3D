# Audit — Diamond Designs (Orange, Connecticut)

- **Site** : Diamond Designs LLC, 500 Boston Post Road, Orange, CT
- **Adresse** : https://www.dia-designs.com/ ; page de départ https://www.dia-designs.com/pages/design-your-ring
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Le questionnaire « ring builder » (13 étapes, outil ShowroomPro) exige nom, courriel et téléphone dès l'étape 1 (bouton « Continue » désactivé tant que les champs sont vides) : les étapes 2 à 13 n'ont pas pu être actionnées (règle : aucune donnée personnelle). Panier non atteint (voir Limites).
- Marquage : [V] vérifié (page lue ou contrôle actionné), [I] inféré, [S] supposé.

## Parcours

| Étape | Options (vues) |
| --- | --- |
| Page de départ | Texte, « How it works » en 4 étapes, 6 arguments de confiance, comparatif naturel / synthétique, 7 questions fréquentes, bloc rendez-vous. [V] |
| Widget (iframe showroompro.ai/embed/quiz) | Accueil : langue EN/ES/FR, « Begin Your Design », « View My Designs », « Book a Consultation ». [V] |
| Étape 1 sur 13 « Welcome » (8 %) | Nom, courriel, téléphone (indicatif +1), pays (États-Unis par défaut) ; boutons Back / Continue. [V] |
| Étapes 2 à 13 | Non actionnées. Décrites par la page : photo d'inspiration facultative, naturel ou synthétique, forme, carat, monture (solitaire, halo, trois pierres, pavé, torsadée, corps fendu), métal, largeur de bande, hauteur de pierre, détails libres (milgrain, martelé, filigrane, pierre cachée), taille, budget, date. [V pour le texte de la page, non actionné] |
| Après envoi | « Our designers work up your concept […] you come into the store, see the actual stones […] and we refine the design with you before anything is made » [V] |
| Alternative sans widget | Page « custom design » (processus en 4 temps, conception 3D, honoraires) et prise de rendez-vous. [V] |
| Boutique en ligne | Montures « semi-mounts » à prix affiché (99 produits), fiche produit, « Add to cart ». Panier non testé. [V pour la lecture] |

## Contrôles vérifiés

Relevé automatique (controls.cjs) : 88 contrôles visibles sur ordinateur, 63 en affichage iPhone (menu replié).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| Begin Your Design | bouton (iframe) | Ouvre l'étape 1 sur 13 « Welcome » | aucun | OK |
| Sélecteur de langue EN / ES / FR | liste | Traduit le widget (« Créez la bague de vos rêves », « Diseña el anillo de tus sueños ») | aucun | OK |
| Continue (étape 1) | bouton | Désactivé tant que nom, courriel et téléphone sont vides | aucun | OK (verrou volontaire) |
| Back (étape 1) | bouton | Retour à l'écran d'accueil | aucun | OK |
| Pays / indicatif | boutons | Présents (+1, United States) ; liste non ouverte | aucun | Non testé : sans intérêt pour l'audit |
| Nom, courriel, téléphone | champs | Non remplis | aucun | Non testés : donnée personnelle |
| Étapes 2 à 13 (forme, carat, métal, monture, taille, budget…) | questionnaire | Inaccessibles sans contact saisi | aucun | Non testés |
| Book a Consultation (dans le widget) | lien | Mène à /pages/appointment | aucun | OK (lien lu) |
| View My Designs | lien | Mène à /my-designs?view=all&studio=… (compte du widget) | aucun | Non ouvert |
| Start Your Dream Design (en-tête, ×3) | lien | Renvoie à la page de départ | aucun | OK |
| Request An Appointment | lien | Page de rendez-vous : six motifs (fiançailles, alliances, sur mesure, cadeau, rachat et expertises, réparation), « walk-ins always welcome », agenda intégré | aucun | OK (agenda non utilisé) |
| Engagement Rings / Wedding Bands / Fine Jewelry / Services / About | menus | Sous-menus : styles (halo, 3 pierres, solitaire, diamants de laboratoire), budgets (500–2 500 $ à plus de 10 000 $), marques (Diamond Designs, Ritani, Simon G, Artcarved), montures | aucun | OK (liens lus) |
| Reviews | lien | Page d'avis Google : 5,0 / 5 sur 272 avis | aucun | OK |
| Search, Cart 0 | icônes | Recherche et panier ; /cart vide : « Your cart is empty » | aucun | Panier lu vide seulement |
| Collection montures : filtres Brand, Product type, Price (0–6 600 $), Availability, Metal type ; tri (8 critères) | filtres | Lus dans la page ; non actionnés (les URL à tri et à filtres multiples sont interdites par robots.txt) | prix affichés | Non testés |
| LOAD MORE (collection) | bouton | Un clic : le compteur est resté à « Showing 28/99 » après 2,5 s | aucun | Défaut possible [I] |
| Fiche monture : Image zoom, Description, quantité −/+, ADD TO CART, Share (Facebook, X, Pinterest) | boutons | Page lue ; boutons relevés ; aucun actionné | 2 550 $ (exemple) | Non testés : ajout au panier interdit (voir Limites) |
| Chat (Podium, « Text us »), téléphone (203) 799-7999, courriel, réseaux sociaux | liens et widget | Relevés ; chat non ouvert | aucun | Non testés |
| Pied de page : After sales service, Jewelry exchange, Custom design, Repairs, Track your order, Shipping, Returns, Warranty, FAQs, Our story, Brands, Ring size guide, Jewelry care, Blog… | liens | Relevés ; politiques de retour, livraison, conditions lues | aucun | « Ring size guide » mène à /pages/bridal-event-2023 et « Diamond education » à un article sur le « Diamonds Do Good » : libellés non conformes à la cible [V] |
| Inscription à la lettre d'information | champ | Non rempli | aucun | Non testé |

## Options disponibles

- Pierre : naturel ou synthétique (« lab-grown »), forme, carat (selon la page ; étape non actionnée). [V texte]
- Monture : solitaire, halo, trois pierres, pavé, torsadée, corps fendu. [V texte]
- Métal : or 14 k ou 18 k, platine (page custom) ; en boutique en ligne : 14 k blanc, 14 k jaune, 14 k blanc et rose, 14 k blanc et jaune, 18 k idem, platine (3). [V]
- Marques des montures : Artcarved 33, Ritani 37, Simon G 12, Diamond Designs 9, Yourline 6, Stuller 2. [V]
- Langues du widget : anglais, espagnol, français ; le site : anglais. Devise : dollar. [V]
- Vues : photos uniquement relevées ; pas de 3D, 360°, essayage ni AR dans le questionnaire. [V pour la page lue]
- Gravure : non proposée dans le parcours ; les objets gravés sont exclus du retour. [V]

## Prix, délais, retours, garanties

- Prix de montures affichés, de 1 881 $ (Artcarved Solitude) à 5 044 $ (parmi les 28 premiers) ; filtre jusqu'à 6 600 $. Sans pierre centrale. [V]
- Aucun prix dans le questionnaire : budget saisi à l'étape 13, puis suite en boutique. Le prix de la bague finie n'est jamais calculé en ligne. [V]
- Sur mesure : honoraires de conception 250 $ non remboursables mais déduits du prix si commande ; acompte 50 % à l'approbation ; solde à la livraison ; devis valable 7 jours ; deux révisions incluses (trois conceptions). Délai : « several weeks » (pas de chiffre). Une commande en production ne peut être ni annulée ni retournée. [V, /pages/custom-design]
- Livraison : gratuite, assurée, signature obligatoire, États-Unis continentaux seulement ; articles en stock expédiés en 1 à 2 jours ouvrés ; pas de livraison express ; retrait en boutique. [V, /policies/shipping-policy]
- Fiche monture : « Estimated delivery between November 27 and November 29 » (texte de fiche : « Order within . » incomplet, défaut). [V]
- Retours : 21 jours après livraison, frais de retour payés, pas de frais de réapprovisionnement, remboursement en 3 jours ouvrés après inspection. Exclus : pièces sur mesure, gravées, ajustées, commandes spéciales, soldes finales. Défaut ou erreur : signaler sous 7 jours. [V, /policies/refund-policy]
- Garantie : « Lifetime limited warranty » contre les défauts de fabrication, nettoyage et contrôle gratuits à vie, mise à niveau au prix d'achat d'origine (« Future upgrades »). Le lien « Warranty » du pied de page pointe vers les conditions d'utilisation. [V]
- Certificats : GIA évoqué (« a GIA graduate on site », avis client citant « GIA certified »). Libellé du synthétique : « lab-grown ». [V]
- Paiement : logos Amex, Apple Pay, Google Pay, Mastercard, PayPal, Shop Pay, Visa, etc. affichés en pied de page ; « Financing Available » dans la barre. Récapitulatif et frais au panier : non vus. [V pour la page]

## Confiance et service

- Avis : Google 5,0 sur 272 avis, résumé généré par IA, avis datés. [V]
- Boutique physique ouverte du mardi au samedi, ouverte depuis 2002 (« Independently owned since 2002 »). [V]
- Chat texte (Podium), téléphone, rendez-vous, visite virtuelle dans le menu « About ». [V pour les liens]
- Preuves de fabrication : décrites en texte (CAO 3D, « renderings from every angle », deux révisions) mais aucune photo ni vidéo d'atelier relevée. L'étape de fonderie « goes to the trade workshop we have used for years » : sous-traitance annoncée. [V]
- Suivi de commande : numéro de suivi envoyé par courriel ; lien « Track your order » mène à la page de contact. [V]

## Points forts à retenir pour JR Diamond

1. **Franchise naturel / synthétique** : la page de départ compare les deux et dit « We will tell you the resale difference before you decide » ; les synthétiques « tradeoff is resale » (https://www.dia-designs.com/pages/design-your-ring). JR Diamond doit afficher la même transparence.
2. **Honoraires de conception crédités au prix** : 250 $ déduits de l'achat, devis valable 7 jours, 50 % d'acompte (https://www.dia-designs.com/pages/custom-design). Modèle simple à comprendre pour un client.
3. **Questionnaire guidé de 2 minutes, 13 étapes, retour possible** ; bandeau « Free · No commitment » (iframe showroompro). Mais le contact est exigé avant la première option : coût de friction que JR Diamond évite en laissant explorer d'abord.
4. **Retours clairs** : 21 jours, retour payé, remboursement en 3 jours ; la politique cite l'exception du sur mesure en toutes lettres (https://www.dia-designs.com/policies/refund-policy).
5. **Mise à niveau garantie** : reprise de la bague au prix d'achat pour une plus grosse pierre (page de départ, « Future upgrades »).
6. **Multilingue minimal du widget** (EN, ES, FR) : montre que la langue est un levier même aux États-Unis.

## Défauts observés

- Contact obligatoire avant toute option du questionnaire ; aucun aperçu ni prix avant l'envoi. [V]
- Aucun visuel de la bague en cours de conception (pas de 3D, pas de photo dynamique). [V]
- Texte interne laissé en ligne en bas de la politique de retour : « Everything above this line is the copy to paste into Shopify. Everything below is internal. » [V, /policies/refund-policy]
- Liens de pied de page mal ciblés : « Ring size guide » → événement 2023 ; « Diamond education » → article sur le « Diamond Empowerment Fund » ; « Warranty » → conditions d'utilisation. [V]
- Fiche produit : phrase « Order within . » tronquée. [V]
- Mention « 10,000+ designs » et « AI-powered » non expliquées. [V texte, non vérifiable]
- Étape de fonderie sous-traitée, présentée sans photos. [V]

## Limites de l'audit

- Étapes 2 à 13 du questionnaire non vues : elles demandent d'abord un nom, un courriel et un téléphone (aucune saisie, règle de l'audit).
- **Panier non atteint** : le robots.txt interdit `/cart/` (l'ajout passe par `/cart/add`) et `/cart.js`, et le fichier agents.md du site demande aux agents de ne pas automatiser les contrôles d'achat par script. Seule la page /cart vide a été lue. Récapitulatif, frais, délai et moyens de paiement du panier : non vus. Les frais et délais viennent des pages de politique.
- Filtres et tri de la collection non actionnés (tri et filtres multiples interdits par robots.txt). Un clic sur « Load more » a été fait, sans effet observé en 2,5 s.
- Aucun chat, WhatsApp, agenda ni formulaire ouvert.
- Mesure du visuel principal : le widget est affiché 5,0 s (ordinateur) et 4,5 s (iPhone) après le début de la navigation (premier bouton visible) ; une seule mesure par appareil, réseau de la session.
- Sans avis détaillés relevés : les avis lus sont ceux de la page Google intégrée, pas vérifiés à la source.

## Sources

- https://www.dia-designs.com/pages/design-your-ring (contrôles, iframe https://www.showroompro.ai/embed/quiz?d=1d4e2049cba3aad2)
- https://www.dia-designs.com/collections/engagement-ring-mountings
- https://www.dia-designs.com/products/artcarved-white-14-karat-gold-diamond-engagement-ring-mounting-size-6-68
- https://www.dia-designs.com/pages/custom-design ; /pages/appointment ; /pages/reviews ; /cart
- https://www.dia-designs.com/policies/refund-policy ; /policies/shipping-policy ; /policies/terms-of-service
- https://www.dia-designs.com/robots.txt ; https://www.dia-designs.com/agents.md
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/diamond-designs/
