# Audit : ArzilliShop (Arzilli Giovanni, Saint-Marin)

- Site : ArzilliShop (Oreficeria, Orologeria e Preziosi), https://www.arzillishop.it/
- Page de départ auditée : https://www.arzillishop.it/it/arzilli-oro-18kt.1.23.uw (catalogue « Arzilli Oro 18 kt, 2026 or à poids »), fiche https://www.arzillishop.it/it/anello-in-oro-bianco-18kt-solitario-con-zircone-a-doppio-filo.1.0.496.gp.60606.uw
- Date : 15/11/2026. Appareils : Chromium ordinateur 1366x900 et affichage iPhone 13.
- Statut : **partiel**. Pas de configurateur ; catalogue de bijoux prêts à porter. Ajout au panier non actionné (voir Limites).
- Cadence : une page toutes les 10 s (`Crawl-delay: 10` du robots.txt). Marques : V vérifié, I inféré, S supposé.

## Parcours

| Étape | Options (V) |
|---|---|
| Accueil | Carrousel (4 puces, précédent/suivant), vidéos YouTube, rubriques Arzilli Oro 18 kt, Rue des Mille, Swarovski, Tissot, Natale, Outlet |
| Catalogue bagues | Arzilli Oro 18 kt > « 2026 Or à poids » > Anelli / Anelli con pietre o perle ; 96 résultats, 10 par page, 5 pages |
| Fiche | Prix TTC, frais de transport « à partir de 9,50 € », quantité, Aggiungi, Stampa, Richiedi informazioni |
| Panier | Page `/?cmd=showCart` lue vide : « Riepilogo ordine », bouton « Torna al negozio ». Aucun article n'a été ajouté |

Aucune étape de choix de pierre, de carat, de monture ni de gravure n'existe (V).

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Accetta / Personalizza / Chiudi (cookies) | boutons | Bandeau cookies ; non actionnés | - | non testé (bandeau sans effet sur le parcours) |
| Accedi / Registrati | formulaire | Connexion et création de compte | - | non testé (règle : aucun compte) |
| Hai perso la password | lien | Récupération de mot de passe | - | non testé |
| Champ Cerca + ok | recherche | Formulaire GET vers `/` (`cmdString`) | - | non testé (recherche : chemin prudent) |
| Menu Home, Arzilli Oro 18 kt, Rue des Mille, Swarovski, Tissot, Natale, Outlet | liens | Chargent la rubrique | - | OK (Arzilli Oro 18 kt chargée, 200) |
| Arbre Tissot, Swarovski Diamonds / Gioielli / Oggettistica / Orologeria, Rue des Mille | liens | Sous-catégories de marques | - | non ouverts (hors bagues) |
| Marque : Gioielli Arzilli, Rue des Mille Oro 18k / Silver, Swarovski, Tissot | filtre | Liste filtrée par marque (`br.10` : 96 résultats) | affiché | OK pour Gioielli Arzilli |
| Pagination 1 à 5, « Avanti » | liens | Page suivante de 10 articles | - | non actionné (page 1 lue) |
| « Ordina per » | liste | Tri du catalogue | - | non testé (valeurs non lues) |
| Aggiungi (liste et fiche) | bouton | Ajoute au panier par script (`addToCartProduct`) ; robots.txt interdit `/ajaxRequests.asp` | - | **non cliqué** : appel probable à une adresse interdite (I) |
| Quantité (liste) | liste | Option « 1 » seule ; champ libre alternatif sur la fiche | - | non modifié |
| Stampa | lien | Impression de la fiche | - | non testé |
| Richiedi informazioni | lien | Demande d'information | - | non testé (formulaire : règle) |
| Compteur panier « 0,00 » | lien | Ouvre le panier vide | - | OK |
| Vidéos YouTube (5 liens) | liens | Ouvrent YouTube | - | non ouverts (autre domaine) |
| Chi siamo, Contatti, Condizioni di vendita, Resi e spedizioni | liens | Pages de texte | - | OK (200) |
| Diritto di recesso | lien | Formulaire de rétractation : nom, e-mail, téléphone, n° et date de commande, articles, notes | - | lu, non envoyé |
| info@arzillishop.it, WhatsApp +39 337 1010207 | liens | mailto, numéro affiché | - | non ouverts (le numéro n'est pas un lien WhatsApp : I) |

## Options disponibles

- Métal : or 18 kt, blanc ou jaune (« oro bianco 18kt », « oro giallo 18kt » dans les titres), V. Pas de platine, pas de 14 kt trouvés.
- Pierres : zircone, corail, turquoise, perles (titres). **Aucun diamant** parmi les 10 bagues de la première page (V) ; Swarovski Diamonds est une marque de cristal (I).
- Forme, carat, origine, monture, griffes, gravure : aucune option (V).
- Taille : un numéro par article (ex. « Taglia 15 »), donc une référence par taille (V). Pas de guide des tailles trouvé sur le site (V sur les pages lues).
- Modes de vue : une photo par article ; aucune 3D, vidéo ni zoom constaté (V ; zoom non testé).

## Prix, délais, retours, garanties

- Prix : TTC, « imposte incluse », par article (V). Exemples de la page 1 : bague fil infini or blanc 180 €, fedina lisse 247,50 €, solitaire zircone double fil 360 €, chaîne 607,50 € (V). La rubrique s'intitule « or à poids » : prix probablement fixé au poids (I), sans décomposition affichée (V).
- Livraison : « à partir de 9,50 € » (V). Transporteur GLS ; 2 jours ouvrés de préparation puis 48 à 72 h ; Italie, Saint-Marin, Vatican, UE sur accord (V : condizioni-di-vendita).
- Délai de fabrication : aucun, tout est en stock (« Disponible ») (V).
- Retours : rétractation sous 14 jours ouvrés, frais de retour à la charge du client, remboursement par virement ; vidéo d'ouverture demandée pour les objets fragiles ; exclusion des biens scellés (V : resi-e-spedizioni). Pas d'exception « sur mesure » : rien n'est sur mesure.
- Garantie : celle du fabricant dans la boîte (V). Pas de certificat de pierre.
- Paiement : cartes Visa et Mastercard (traitées par Cartasì), virement (expédition après crédit, commande supprimée sans paiement sous 8 à 10 jours), contre-remboursement (2 %) (V). PayPal, annoncé par l'annuaire matrimonio.com, n'est pas listé sur le site (V : écart).
- Synthétique : aucun libellé (V).
- Devise : euro. Langue : italien seul.

## Confiance et service

- Ancienneté : « plus de 70 ans » à Saint-Marin (V : page d'accueil) ; autorisation d'e-commerce n° 539 du 19/03/2018 (V : pied de page).
- Avis : aucun sur le site ; l'annuaire matrimonio.com affiche 5,0 sur 3 avis (I).
- Contact : téléphone, WhatsApp (numéro), e-mail, adresse Contrada del Collegio 1 (V). Pas de chat, pas de rendez-vous en ligne.
- Preuves de fabrication : aucune photo ni vidéo d'atelier, aucun suivi de commande (V).

## Points forts à retenir pour JR Diamond

- Prix TTC affiché sans compte, avec frais de transport minimaux visibles sur la fiche (V : fiche solitaire, 360 €, « à partir de 9,50 € »).
- Rubrique « or à poids » : le prix suit la matière, une idée proche du prix expliqué, mais sans détail (I : intitulé, pas de décomposition lue).
- Écart de ton : la page de recours demande une **vidéo d'ouverture du colis** pour accepter un retour (V : resi-e-spedizioni) ; JR Diamond peut au contraire filmer la fabrication et l'expédition.

## Défauts observés

- Site daté : pas de photo multiple, pas de tri lu, pas de guide des tailles (V).
- Une référence par taille : un client doit trouver sa pointure article par article (V).
- Pas d'information sur l'origine des pierres ni de certificat (V).
- Deux réponses 502 au cours d'un second passage, à quelques secondes d'intervalle ; la page est revenue ensuite (V, sans doute liées au cadencement ou au proxy : I).

## Limites de l'audit

- Ajout au panier non actionné : le script appelle probablement `/ajaxRequests.asp`, interdit par robots.txt (I) ; le panier n'a donc été vu que vide, sans récapitulatif, livraison chiffrée au panier ni délai.
- Pas de bague avec diamant trouvée sur la page 1 ; les pages 2 à 5 n'ont pas été ouvertes (cadence de 10 s).
- Mesure de l'apparition de l'image principale : ordinateur 1,2 s sur la fiche solitaire (V) ; mobile : accueil 1,8 s (V). Le second passage mobile de la fiche et l'accueil ordinateur ont répondu 502, donc non mesurés.

## Sources

- https://www.arzillishop.it/ ; /it/arzilli-oro-18kt.1.23.uw ; /it/gioielli-arzilli/products.1.0.0.br.10.uw ; fiche solitaire ci-dessus (V, 15/11/2026)
- https://www.arzillishop.it/resi-e-spedizioni ; /diritto-di-recesso ; /condizioni-di-vendita ; /?cmd=showCart (V)
- https://www.arzillishop.it/robots.txt (V)
- https://www.matrimonio.com/gioielleria/arzilli-gioielli--e203122 (I : extrait)
