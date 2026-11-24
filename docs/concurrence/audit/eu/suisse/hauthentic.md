# Hauthentic (Genève, Anvers)

- **Site** : https://www.hauthentic.com/ (Hauthentic / Yazam Sàrl, place du Molard 7, Genève ; maison diamantaire à Anvers, V)
- **Page de départ** : https://www.hauthentic.com/bijouterie-en-ligne/bague-de-fiancaille/
- **Date** : 15/11/2026
- **Appareils** : Chromium ordinateur (1366 x 900) et affichage iPhone 13 (Playwright)
- **Statut** : **partiel**. Catalogue, fiche d'un modèle, liste des diamants et textes de service vérifiés ; le passage « Sélectionner » vers le choix du diamant puis le panier n'a pas abouti dans l'essai (voir « Limites »).
- **robots.txt** : seuls `/wp-admin/`, `/author/`, `/cgi-bin` et des extensions de fichiers sont interdits ; les pages ouvertes et `/panier/` sont autorisées (V).

Marques : **V** vérifié (page lue ou contrôle actionné, adresse indiquée) · **I** inféré · **S** supposé.

## Parcours

| Étape | Options | Source |
|---|---|---|
| 1. « Choisissez un modèle » | catalogue de 16 pages : onglets Tout / Solitaire / Entouré / Halo ; pages par métal (or blanc, or jaune, or rose, platine) ; « Solitaire personnalisé », « Bague en livraison rapide » (déjà sertie), diamants de forme fantaisie (V) | `/bijouterie-en-ligne/bague-de-fiancaille/` |
| 2. Fiche du modèle | photo (dont portées), prix de la monture, texte de caractéristiques, bouton « Sélectionner », favoris, zoom (V) | fiche `h1717r` |
| 3. « Sélectionnez un diamant » | liste de 226 pages de diamants, filtres GIA / HRD / IGI, lien « Retour à mes préférences » (V pour la page ; lien depuis la fiche non vérifié) | `/bijouterie-en-ligne/diamant/` |
| 4. « Validez votre panier » | page `/panier/` (compteur à 0) ; non atteint avec un article | `/panier/` |
| Hors ligne | haute joaillerie sur mesure : devis et rendez-vous à Genève, Lausanne, Anvers | `/haute-joaillerie/bague-fiancailles-sur-mesure/` |

## Contrôles vérifiés

Relevé automatique : 124 contrôles sur la page sur mesure, 210 sur le catalogue, 124 sur la liste de diamants.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Sélecteur de pays (30 pays) | liste | le site détecte les États-Unis (IP du proxy) et affiche « $ 1,149 hors taxe » ; choisir « Suisse » recharge la page après environ 10 s et affiche « 959 CHF hors taxe » (V) | change devise et montant | fonctionne, lent |
| Onglets Tout / Solitaire / Entouré / Halo | liens | filtrent le catalogue (liens relevés) | prix par fiche | présents, non tous ouverts |
| Pages 2 à 16 | liens | pagination | — | présents |
| « Solitaire personnalisé » | lien | page de solitaires à diamant au choix (lien relevé) | — | non ouvert |
| « Bague en livraison rapide » | lien | bagues déjà serties, « sans attente de production » (V, texte du menu) | — | non ouvert |
| Mes favoris / Ajouter à mes favoris | lien, bouton | liste de favoris `/favoris/` ; non testé | — | non testé |
| Zoom sur la photo | icône | agrandit la photo | — | présent, non actionné |
| **Sélectionner** | bouton `add-to-cart` | clic forcé : l'adresse n'a pas changé après 8 s (V) | — | **résultat non établi** |
| Filtres GIA / HRD / IGI | liens `#` | filtrent les diamants (V pour l'existence ; effet non vérifié) | — | non testé |
| Liste de diamants | liens | chaque ligne : carat, couleur, pureté, taille, diamètre en mm, stock, prix hors taxe (V) | de 211 $ (0,10 ct D VS2) | fonctionne |
| Compte, panier (0) | liens | `/compte-client/`, `/panier/` ; panier non rempli | — | non testé |
| Lien « Besoin d'aide ? » | languette | non ouverte | — | non testé |
| Téléphone, courriel | liens | `tel:` et `mailto:` | — | non actionnés |
| Formulaire de contact | formulaire | reCAPTCHA ; objet : informations, devis, rendez-vous… | — | non rempli (règle) |
| Bandeau cookies : Accepter tout / Refuser tout / Afficher les détails | boutons | masque le bandeau (V) | — | fonctionne |
| Blog (18 articles relevés) | liens | guides carat, couleur, pureté, forme, sertissage, prix | — | non lus |
| Garanties, FAQ, CGV | liens | pages lues (V) | — | fonctionne |

**Effet sur l'image** : photo fixe de la bague, pas de 3D, pas de 360° relevé, pas de rendu avec le diamant choisi (V, capture de la fiche).

## Options disponibles

- **Styles** : solitaire, épaulé, halo, fantaisie (V).
- **Métaux** : or blanc palladié 18 k, or jaune, or rose 18 k, platine 950 ; chaque fiche existe en quatre variantes séparées (V, liens par métal).
- **Diamants** : naturels uniquement ; certificats GIA, HRD (IGI cité dans la FAQ) ; forme ronde par défaut, « autres formes sur demande » ; diamants de couleur sur demande, pas d'autres pierres (V, FAQ).
- **Taille de doigt** : 43 à 70, à donner après la commande, un conseiller rappelle (V).
- **Gravure** : « personnalisée offerte » (V, fiche).
- **Non vus** : pavage, griffes, filtre prix, comparaison, partage.

## Prix, délais, retours, garanties

| Sujet | Constat | Source |
|---|---|---|
| Prix | monture seule, « hors prix du diamant central », **hors taxe** ; exemple 959 CHF (solitaire 4 griffes or blanc) ; diamant ajouté séparément (de 211 $ pour 0,10 ct) | fiche, liste |
| Décomposition | monture et diamant séparés ; pas de détail matière / façon | idem |
| TVA | payée à la commande ou à l'import selon le pays ; commande facturée hors taxe dans ce dernier cas | FAQ |
| Délai | « Production et livraison en 10 à 15 jours ouvrés » sur la fiche ; haute joaillerie : sur devis | fiche, garanties |
| Livraison | gratuite et assurée en Suisse et dans l'UE ; transporteurs de valeurs (FedEx, UPS, DHL, Malca Amit…) ; pas de point relais | garanties |
| Retours | gratuits sous 30 jours si non porté au-delà d'un essayage ; **sont exclus** les pièces de haute joaillerie et tout article personnalisé | garanties |
| Mise à taille | offerte sous 30 jours ; délai moyen 3 semaines, jusqu'à 6 en haute saison ; limitée à 2 tailles (solitaire) | garanties |
| Garanties | à vie contre les défauts de fabrication ; garantie d'authenticité (naturel, non traité) ; nettoyage et inspection offerts une fois par an | garanties |
| Paiement | carte, PayPal, virement ; débit à la commande | garanties |
| Certificats | GIA ou HRD ; « Diamond Passport » (livret du parcours du diamant, moins détaillé sous 0,30 ct) ; colis avec écrin, certificat, facture | garanties, FAQ |

## Confiance et service

- Ancienneté affichée : « famille de diamantaires depuis 1860 », membre de la Bourse diamantaire d'Anvers (V).
- Conseil : téléphone, rendez-vous à Genève et Lausanne, contact par formulaire ; WhatsApp non relevé.
- Preuves de fabrication : une photo d'atelier (« Réalisation personnalisée en nos ateliers », V) et un livret de provenance du diamant ; pas de vidéo de fabrication ni de suivi illustré (V sur les pages lues). Numéro de suivi du colis fourni à l'expédition (V).
- Avis clients : aucun relevé sur les pages ouvertes (V).
- Langues : FR (pages lues), sélecteur de pays pour 30 pays ; devises : USD par défaut hors Suisse, CHF en Suisse (V).

## Points forts à retenir pour JR Diamond

1. **Étapes visibles en tête de page** : « Choisissez un modèle > Sélectionnez un diamant > Validez votre panier » (V, fiche). Le client voit où il en est.
2. **Pays détecté, devise et prix qui suivent le pays** (V, passage de $ 1,149 à 959 CHF). Utile pour le basculement Israël / France ; mais le prix automatique affiché était hors taxe et en dollars pour un visiteur étranger.
3. **Liste de diamants avec tailles en mm, stock et prix, filtrable par certificat** (V, `/bijouterie-en-ligne/diamant/`) : sert de modèle à une grille de pierres (carat, couleur, pureté, certificat) quand l'atelier la fournira.
4. **« Bague en livraison rapide »** : une offre déjà sertie, distincte du sur mesure, pour répondre à l'urgence (V, menu).
5. **Livret de provenance du diamant remis avec le bijou** (V, FAQ et garanties) : idée proche de « la pierre filmée » ; à rapprocher d'un dossier de fabrication.
6. **Retours : conditions chiffrées sur la mise à taille** (3 semaines en moyenne, 6 en haute saison, 2 tailles au plus) : réponse aux inquiétudes de délai relevées dans les forums (V, garanties).

## Défauts observés

- Le prix affiché est **hors taxe** et hors diamant : le client ne voit pas le prix final d'une bague (V).
- Visiteur étranger : prix en dollars sans choix évident de devise ; le changement de pays recharge toute la page en environ 10 s (V).
- Taille de doigt demandée **après** la commande : source d'erreurs, un conseiller doit rappeler (V).
- Aucun visuel 3D ni aperçu avec le diamant choisi ; une photo par modèle et par métal (V).
- Naturel seulement : aucune offre en synthétique (V, FAQ « uniquement du diamant » naturel).
- Retour exclu pour tout article personnalisé (V) : même la configuration standard à diamant choisi n'est pas précisée.
- Chargement lent : page complète en 10,6 s et première image en 4,8 s sur ordinateur ; 8,0 s et 2,7 s en affichage iPhone (V, mesure unique via proxy).

## Limites de l'audit

- Le bouton « Sélectionner » n'a pas changé de page dans mon essai (clic forcé, 8 s) : l'étape 3 et le panier avec un article n'ont pas été vus ; je n'ai pas établi s'il s'agit d'un défaut du site ou d'un effet de la superposition du bandeau et du rechargement par pays.
- Frais de livraison, délai et moyens de paiement au panier : lus dans les textes de garanties, non vus au panier.
- Filtres GIA/HRD/IGI, onglets du catalogue et favoris : relevés, non actionnés un à un.
- Une seule fiche (solitaire Moderne, or blanc) a été ouverte ; les halos, épaulés et fantaisie ne l'ont pas été.
- Haute joaillerie : formulaire non rempli. Mesures de temps uniques, via un proxy.

## Sources

- https://www.hauthentic.com/bijouterie-en-ligne/bague-de-fiancaille/
- https://www.hauthentic.com/bijoux-diamant/solitaire-classique-diamant-4-griffes-or-blanc-18-carat-h1717r/
- https://www.hauthentic.com/bijouterie-en-ligne/diamant/ · https://www.hauthentic.com/joaillerie/garanties/ · https://www.hauthentic.com/joaillerie/questions-frequentes/
- https://www.hauthentic.com/haute-joaillerie/bague-fiancailles-sur-mesure · https://www.hauthentic.com/robots.txt
- Captures et relevés : `scratchpad/audit/eu/hauthentic/` (hors dépôt).
