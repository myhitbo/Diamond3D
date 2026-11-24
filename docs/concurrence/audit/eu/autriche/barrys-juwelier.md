# Audit : Barry's Juwelier (Vienne, Autriche)

- **Site** : Barry's Juwelier GmbH, https://barrysjuwelier.com/ (Shopify)
- **Page de départ** : https://barrysjuwelier.com/collections/lab-grown-verlobungsringe (bagues synthétiques) ; fiche testée : https://barrysjuwelier.com/products/solitar-verlobungsring-14kt-weiss-und-gelbgold-mit-1-07ct-lab-grown-diamant
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur (1366×900) et iPhone 13 · **Statut** : partiel (pas de configurateur ; panier non atteint)
- V = vérifié, I = inféré, S = supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| Accueil | Deux entrées « Natur Diamant Ringe » et « Labor Diamant Ringe », collections Maple Leaf Diamonds™, Lab-Grown, diamants de couleur, bijoux, pierres, sacs d'occasion |
| Collection | Liste de bagues avec prix et bouton « In den Warenkorb » ou « Optionen auswählen » |
| Fiche | Photos, caractéristiques, quantité, ajout au panier, « Mit Shop kaufen », retrait en boutique |
| Sur mesure | Pas d'outil en ligne : demande par e-mail ou WhatsApp (« Ring Concierge » : budget, naturel ou synthétique, forme, couleur d'or, taille ; 3 propositions avec vidéos réelles) |

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Barre d'annonce « Kostenlose & Persönliche Beratung » (Zurück/Vor) | boutons | Défile | — | OK |
| Menu : Maple Leaf Diamonds™, Lab-Grown, Farbige Diamanten, Schmuck, Edelsteine, Handtaschen, About us, Kontakt | liens | Ouvrent des collections (200) | — | OK, pages non toutes lues |
| Sélecteur pays/devise « USD $ » | bouton | Ouvre une liste de pays : Autriche (EUR), Israël (ILS ₪), Suisse, Allemagne, France, etc. | change la devise | OK (liste lue) ; **choix non validé** |
| Sélecteur de langue « Deutsch » | bouton | Deutsch / English | — | OK (liste) |
| Recherche (/search) | lien | Adresse de recherche : non ouverte | — | non testé (chemins de recherche à vérifier) |
| Compte | lien | Redirection vers authentification | — | non ouvert |
| Panier (/cart) | lien | Non ouvert (vide, sans intérêt) | — | non testé |
| Galerie « Gehe zu Element 2 » | bouton | Passe à l'image suivante (2 images) | — | OK |
| Quantité − / + | boutons | 1 → 2 → 1 | proportionnel (I) | OK |
| IN DEN WARENKORB | bouton submit | Appelle `/cart/add`, interdit par robots.txt | — | **non testé** |
| Mit Shop kaufen / Weitere Bezahlmöglichkeiten | boutons | Le second recharge la fiche avec `?variant=…` ; paiement accéléré non ouvert | — | partiel |
| UNSICHER? WIR BERATEN SIE… | lien | `tel:+43 1 5896948` | — | OK (ne pas appeler) |
| Shop-Informationen ansehen | bouton | Panneau de disponibilité (retrait « fertig in 2-4 Tagen ») | — | OK |
| Produits « Gut kombinierbar » (alliance 14 k, memory) | cartes | Ajout au panier direct, non actionné | — | non testé |
| Journal (3 articles) | liens | Ouvrent le blog | — | non lu |
| WhatsApp +43 676 5081342 | lien | `https://wa.me/+436765081342` (non ouvert) | — | non testé |
| Newsletter (champ + ABONNIEREN) | formulaire | Présent | — | non testé (aucune saisie) |
| Pied de page : Kontakt, FAQ, Über uns, Datenschutz, Impressum, Rückgabe, Versand, AGB | liens | Pages lues : FAQ, Rückgabe, Versand | — | OK |
| FAQ (accordéons, 20) | boutons | 10 ouverts : sur mesure, métaux, mise à taille, paiement, certificat, suivi, délai | — | OK |

## Options disponibles

- Pas de variantes de métal, de carat ni de forme sur la fiche testée : une référence = une bague (SKU 66611) (V). La fiche invite à écrire pour un autre diamant ou carat (V).
- Quelques fiches « Optionen auswählen » (ex. ovale 2,01 ct, or jaune ou blanc) (V, collection).
- Catalogue lab-grown : rond, marquise, cushion, ovale, radiant, poire, émeraude ; or 14 k blanc, jaune, rose (V).
- Taille de doigt : EU 52 affichée en dur sur la fiche testée (« aktuelle Ring-Größe: EU52 ») ; première mise à taille gratuite (V, FAQ).
- Guide des tailles, financement, essayage à domicile : non vus. Rendez-vous : boutique (Seilergasse 1) ou « Ring Concierge ».
- Filtres : aucun lu sur la collection (non ouverts).

## Prix, délais, retours, garanties

- Prix affichés par bague, TVA incluse : 1,03 ct E VS1 « Ideal » IGI = 2 126 $ vu depuis un navigateur américain ; en euro sur la page d'accueil : 1,03 ct 1 900 €, 1,22 ct marquise 2 200 €, 1,50 ct ovale 2 699 €, 2,07 ct cushion 3 199 € (I : extrait de recherche de l'accueil, non relu dans le navigateur). **Devise par défaut en dollars pour mon accès (géolocalisation, I)**.
- Décomposition du prix : aucune.
- Retrait « fertig in 2-4 Tagen » ; expédition le jour même avant 13 h 30 (V, https://barrysjuwelier.com/policies/shipping-policy). Frais de port calculés à la caisse ; livraison offerte dans l'UE, en Suisse et au Royaume-Uni (V).
- Retours : pas de retour gratuit ; 30 jours (dont les 14 jours légaux), frais de retour à la charge du client ; article neuf (V, https://barrysjuwelier.com/policies/refund-policy). Exception du sur mesure : non mentionnée dans cette page.
- Garantie : expertise écrite d'assurance pour tout achat de plus de 1 000 € ; première mise à taille gratuite (V, FAQ). Certificat : « IGI-Zertifikat wird beim Kauf bereitgestellt » (V, fiche).
- Paiement : virement, MasterCard, Visa en ligne ; American Express et espèces en boutique (V, FAQ) ; la page affiche aussi Apple Pay, Google Pay, PayPal, Klarna, Bancontact, BLIK, Maestro, Shop Pay (logos du pied de page, V).

## Confiance et service

- Boutique à Vienne depuis « plus de 40 ans » dans le détail (déclaratif) ; « House of the Canadian Maple Leaf Diamonds™ » (V).
- Preuve de fabrication : aucune photo ni vidéo d'atelier ; vidéos réelles envoyées sur WhatsApp (I, texte). Suivi : e-mail avec numéro, ou compte (V, FAQ).
- Avis clients : aucun affiché (V).
- Libellé du synthétique : « Lab-Grown » / « Labor-Diamant » ; mention de l'IGI (V). Diamants « konfliktfrei » (déclaratif).
- Langues : allemand, anglais (V).

## Points forts à retenir pour JR Diamond

1. **Un « concierge » WhatsApp structuré** : budget, naturel ou synthétique, forme, couleur d'or, taille ; trois propositions avec vidéos réelles en heures d'ouverture. Preuve : bloc « BARRY'S RING CONCIERGE » de l'accueil.
2. **Fiche très lisible** : carat, couleur, pureté, taille, certificat IGI, prix TTC et retrait en 2 à 4 jours dans le même bloc. Preuve : texte de la fiche testée.
3. **Politique de retour de 30 jours qui inclut les 14 légaux**, énoncée sans détour. Preuve : page Rückgabe.
4. **Sélecteur de devise incluant le shekel (ILS)** : utile pour le marché israélien. Preuve : liste des pays.
5. **Expertise d'assurance écrite dès 1 000 €**. Preuve : FAQ.

## Défauts observés

- Pas de configurateur ni de visuel 3D ; une seule photo de bague, sans vue de profil ni sur la main (V).
- Devise par défaut en dollars pour une adresse hors UE, avec mention « inkl. MwSt. » (V).
- Taille de doigt « EU52 » fixe sur la fiche : pas de sélecteur de taille visible (V).
- Aucune explication du prix, ni avis, ni preuve de fabrication.
- Section « Ähnliche Produkte » et journal vides sur la capture pleine page (chargement différé, I).
- Pas de mention de l'exception du sur mesure dans les retours (V).

## Limites de l'audit

- Pas de configurateur à tester ; le panier n'a pas été atteint (le bouton d'ajout appelle un chemin interdit) : aucun récapitulatif, aucun frais de port chiffré, aucun moyen de paiement du panier lu.
- Non ouverts : recherche, filtres, panier, compte, WhatsApp, newsletter, articles du journal.
- Mesure du visuel principal : LCP 0,72 s (ordinateur) et 0,94 s (iPhone) sur la fiche ; chargement complet 3,4 s et 2,7 s (V, une mesure chacune).
- Devise : le prix en euro de la fiche n'a pas été confirmé, mon accès étant en dollars.

## Sources

- https://barrysjuwelier.com/ ; /products/solitar-verlobungsring-14kt-weiss-und-gelbgold-mit-1-07ct-lab-grown-diamant ; /collections/lab-grown-verlobungsringe
- https://barrysjuwelier.com/pages/faq ; /policies/refund-policy ; /policies/shipping-policy
- https://barrysjuwelier.com/robots.txt (lu ; /cart/ interdit)
