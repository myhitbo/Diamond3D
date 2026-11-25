# Audit : Aquamarina Gioielli (Saint-Marin)

- Site : Aquamarina Gioielli (Aquamarina Srl), https://www.aquamarinagioielli.com/
- Page de départ auditée : https://www.aquamarinagioielli.com/categoria-prodotto/anelli/ (pas de configurateur), fiche https://www.aquamarinagioielli.com/prodotto/anello-goa-a-cinque-fili-in-oro-bianco-18-kt-con-solitario-e-barretta-di-diamanti-ct-0-46-misura-15/
- Date : 15/11/2026. Appareils : Chromium ordinateur 1366x900 et affichage iPhone 13.
- Statut : **partiel**. Panier, filtres et tri interdits par robots.txt, donc non actionnés ; pas de configurateur.
- Marques : V vérifié, I inféré, S supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| Accueil | Recherche, compte, panier, Chi siamo, Partners, Categorie, Regali, Archivio, Servizi ; meilleures ventes, bracelet « omaggio a San Marino », flux Instagram, « Carica altro » |
| Catégorie Anelli | Filtres Matériau et Marque, tri, grille de fiches ; prix barrés (−50 %) |
| Fiche | Photo, prix, « aggiungi al carrello », onglets Informazioni sul prodotto / Recensioni, description, détail (marque, collection, matériau, pierre, style), articles similaires |
| Panier / paiement | Non ouverts : `/carrello/`, `/pagamento/`, `/checkout/` interdits par robots.txt |

Aucun choix de pierre, de monture ni de taille de doigt : la taille est dans le titre de l'article (« misura 15 »).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Recherche + Search | champ, bouton | Recherche interne WordPress | - | non testé (`?s=` interdit) |
| Mio account | lien | Compte, connexion | - | non testé (compte) |
| Panier « 0 » | lien | `/carrello/` | - | non ouvert : interdit |
| Chi siamo, Servizi, Categorie, Regali, Archivio | liens | Pages de contenu et catégories | - | OK (200) |
| I nostri partners | lien | Ouvre une liste de marques (`#`) | - | OK en liste (Calderoni, Chimento, Visconti, Raspini, Italpreziosi, K di Kuore, Gandini, Maman et Sophie, Marco Bicego, Maria e Luisa, Rosso Prezioso, Rubinia, Trollbeads, Venini) |
| Lien marque (Trollbeads, Raspini) | lien | `/negozio/?filter_merchant=…` | - | non ouvert : filtre interdit |
| Filtre Matériau (or 18 kt blanc 7, jaune 6 ; or 9 kt ; argent 925 ; etc.) | cases | Filtrage par matériau, avec comptes | - | non actionné : `filter_` interdit |
| Filtre Marque (Chimento 5, Raspini 73, Marco Bicego 5, Rubinia 44, Maria e Luisa 24…) | cases | Filtrage par marque | - | non actionné |
| Tri (6 valeurs : défaut, popularité, note, récent, prix croissant, décroissant) | liste | Navigation vers `?orderby=` | - | non actionné : interdit |
| Aggiungi al carrello | bouton | `/?add-to-cart=ID` | - | non cliqué : interdit par robots.txt |
| Onglet Recensioni | onglet | Contenu vide (aucun avis) | - | OK |
| Click to enlarge (photo) | zoom | Aucune visionneuse trouvée par le script | - | non confirmé |
| Guide des tailles (page Servizi) | contenu | Tableau diamètre mm / taille IT / taille UE, fiche à imprimer | - | OK (lu) |
| Cash Refund for Tourists | service | Remboursement de TVA aux touristes (texte) | - | lu seulement |
| Confezione regalo | service | Emballage gratuit « au check-out » | gratuit | lu seulement |
| Incisioni personalizzate | service | Gravure à la demande (par contact) | n.c. | lu seulement |
| WhatsApp 335 545 8437 | lien wa.me | Message pré-rempli « Salve! Vorrei delle informazioni » | - | non ouvert (règle : pas de chat) |
| Téléphone 0549 992135, e-mail | liens | tel:, mailto: | - | non ouverts |
| Newsletter + case | formulaire | −10 % sur le premier achat | - | non rempli |
| Instagram, Facebook | liens | Réseaux sociaux | - | non ouverts |
| Carica altro | bouton | Charge plus de publications Instagram | - | non testé |

## Options disponibles

- Métaux (filtre, V) : or blanc 18 kt, or jaune 18 kt, or blanc 9 kt, or jaune 9 kt, or rose 9 kt, argent 925 (diverses finitions), bronze doré. Pas de platine.
- Bagues avec diamant (page Anelli, V) : Marco Bicego GOA cinq fils 0,25 ct (4 600 €, affiché 2 300 €), GOA solitaire 0,46 ct (6 500 €, affiché 3 250 €), GOA sept fils 0,41 ct (6 950 € puis 3 475 €), MASAI double bande 0,78 ct (8 600 € puis 4 300 €).
- Autres pierres : pierres naturelles, tourmaline, perle naturelle (titres). Origine du diamant non précisée (« diamante taglio brillante »), V.
- Forme, couleur, pureté, certificat : non affichés (V). Pas de monture à choisir.
- Taille : une référence par taille (« misura 15 »). Guide des tailles disponible.
- Modes de vue : photo seule (V). Pas de 3D, 360°, vidéo ni essayage.

## Prix, délais, retours, garanties

- Prix : TTC, en euros, avec prix barré et −50 % sur plusieurs bagues (V). Pas de décomposition. La mention « scontistica non cumulabile avec la newsletter » est sur la fiche.
- Expédition : BRT, expédié le premier jour ouvré après paiement confirmé, sous 30 jours au plus selon stock ; 10 € en Italie, gratuite au-delà de 100 € ; contre-remboursement +4 € (V).
- Retours : 14 jours dès réception, remboursement par le même moyen, **exclusion des produits sur mesure ou personnalisés** (V : diritto-di-recesso) ; frais de retour au client ; après 14 jours, échange ou avoir d'un an (V) ; remboursement sous 7 jours ouvrés (V).
- Garantie : « garantie et emballage de notre bijouterie » ; page « garanzia-legale » existe (V : lien en pied de page, non lue).
- Paiement : carte (Maestro, Mastercard, Visa) sur POS virtuel, PayPal, virement (7 jours pour payer), contre-remboursement (V : metodi-di-pagamento).
- Certificats : aucun annoncé ; hormis le prix, aucun libellé sur l'origine des diamants (V).
- Devise : euro. Langue : italien seul.

## Confiance et service

- Boutique à Saint-Marin Città, ouverte tous les jours sauf le dimanche (V) ; autorisation d'e-commerce n° 1021, registre n° 7373 (V : pied de page).
- Service client WhatsApp « Concierge », assistance à l'achat, réparation, gravure sur demande, produits sans nickel (V : /servizi/).
- Avis : onglet Recensioni vide (V).
- Preuves de fabrication : aucune ; il s'agit de revente de marques (V). Les pièces sont « originales, avec garantie et emballage » (V).

## Points forts à retenir pour JR Diamond

- Guide des tailles imprimable avec tableau diamètre / taille IT / taille UE, et conseil de prendre la taille supérieure en cas de doute (V : /servizi/).
- Services expliqués sur une page unique : gravure, réparation, emballage, remboursement touristes (V : /servizi/). Pour JR Diamond : une page « ce qui est inclus » comparable.
- Politique de retour courte et lisible, avec l'exclusion du sur mesure écrite noir sur blanc (V : /diritto-di-recesso/) ; à reprendre telle quelle sous réserve de l'avis de l'avocat.
- Paiements multiples : carte, PayPal, virement, contre-remboursement (V).

## Défauts observés

- Prix de référence barrés à −50 % en permanence sur plusieurs bagues (V) : méfiance possible, point à éviter chez JR Diamond.
- Pas d'avis, pas de certificat, pas de pureté ni de couleur sur des bagues à diamants de 3 000 à 4 000 € (V).
- Fiche : un champ « Alternative : » apparaît sur la page, apparemment un piège à robots (I : champ `alt_s` de l'étiquette « Alternative: »).
- Chargement lent mesuré : 11 s pour le catalogue des bagues sur ordinateur (V, premier chargement), 7,4 s pour la fiche (V).

## Limites de l'audit

- Panier, filtres, tri et ajout au panier interdits par robots.txt : jamais actionnés. Pas de récapitulatif de commande ni de frais chiffrés au panier ; ceux de la page « modalità di spedizione » seulement.
- Pas de bague de fiançailles « sur mesure » : le site n'en propose pas.
- Mesures de l'image principale (V) : ordinateur 7,7 s sur la fiche et 11,2 s sur le catalogue ; iPhone 5,5 s sur l'accueil, 1,8 s sur le catalogue, 2,1 s sur la fiche (cache probable au second passage : I).
- Garanzia legale non ouverte ; zoom de la photo non confirmé.

## Sources

- https://www.aquamarinagioielli.com/ ; /categoria-prodotto/anelli/ ; fiche GOA 0,46 ct ci-dessus (V, 15/11/2026)
- https://www.aquamarinagioielli.com/servizi/ ; /modalita-di-spedizione/ ; /metodi-di-pagamento/ ; /diritto-di-recesso/ ; /domande-frequenti/ (V)
- https://www.aquamarinagioielli.com/robots.txt (V)
