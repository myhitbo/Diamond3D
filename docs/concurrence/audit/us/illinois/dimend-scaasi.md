# Audit : dimend SCAASI (Illinois)

- **Site** : dimend SCAASI, joaillier indépendant du Jewelers Row de Chicago (5 S Wabash Ave, Suite 1734), « in business since 1997 » [V, ext.]
- **Adresse** : https://www.dimendscaasi.com/
- **Page de départ** : https://www.dimendscaasi.com/create-your-ring/
- **Date** : 15/11/2026
- **Appareils** : aucun. **Aucune page du site n'a été ouverte** (ni navigateur, ni curl, ni outil de lecture).
- **Statut** : **bloqué**. Le `robots.txt` (https://www.dimendscaasi.com/robots.txt, lu seul) contient un bloc géré par Cloudflare qui interdit `ClaudeBot`, `Claude-Web` et `anthropic-ai` (`Disallow: /`) pour tout le site ; la règle générale `User-agent: *` autorise tout (`Allow: /`, `Content-Signal: search=yes,ai-train=no`). L'outil de contrôle des adresses répond « AUTORISÉ » parce qu'il lit la règle générale ; comme l'auditeur est un agent Claude, la règle visée le concerne et le site est traité comme fermé. Rien n'a été contourné.
- Repères : **[V, ext.]** lu dans l'extrait d'un moteur de recherche, page non ouverte ; **[I]** inféré ; **[S]** supposé. Aucun contrôle n'a été actionné : **aucun fait ci-dessous n'est « vérifié » au sens d'un contrôle**. Prix en dollars américains.

## Parcours

Trois étapes, dans les deux sens (« Start with a Setting » ou « Start with a Diamond ») ; une barre de progression suit les choix [V, ext. S1].

| Étape | Options annoncées | Prix |
|---|---|---|
| 1. Choose Your Setting | ~200 montures à prix « setting only » ; filtres métal, forme du diamant, style, collection, prix ; bouton « Choose This Setting » sur la fiche | monture seule, affichée |
| 2. Choose Your Diamond | diamant naturel (« mined ») ou synthétique (« lab-grown ») certifié ; filtres forme, carat, couleur, pureté, coupe | pierre seule, affichée |
| 3. Review & Complete | bague finie avec prix total, taille de doigt, « add to cart » | total |

## Contrôles vérifiés

**Aucun contrôle testé** : le site n'a pas été ouvert (voir statut). Rien n'a été relevé avec `controls.cjs`, ni sur ordinateur ni en affichage iPhone ; aucun temps d'affichage n'a été mesuré ; le panier n'a pas été atteint.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Tous (filtres Metal, Diamond shape, Ring style, Collection, Price ; Start with a Setting / a Diamond ; Choose This Setting ; sélecteurs de pierre ; taille ; ajout au panier ; rendez-vous ; chat) | tous | rien d'observé | n/a | non testé : site interdit aux robots Claude |

Ce que les extraits permettent seulement de dire des contrôles [V, ext.] : le filtre Metal compte 14k blanc (274), 14k rose (281), 14k jaune (281), platine (265) ; Diamond shape propose 12 formes ; Ring style liste Side-Stone 77, Halo 74, Hidden-Halo 38, Three-Stone 27, Solitaire 42, Shaped-Shank 9, Vintage 7, Floral 5, Pavé 2 ; Collection : Signature 41, Luxury 26 [S1].

## Options disponibles

- **Métaux** [V, ext. S1] : or 14 k blanc, rose, jaune ; platine. L'accueil cite aussi tantale et fibre de carbone pour d'autres bijoux [S9]. Pas d'or 18 k dans les filtres.
- **Formes (12)** [V, ext. S9] : rond, ovale, coussin, émeraude, princesse, poire, marquise, radiant, asscher, cœur, « Old Miner », « European » (les deux dernières « the big online stores don't carry »).
- **Origine** [V, ext.] : diamants naturels et synthétiques, certificats GIA, GCAL ou IGI ; plus de 100 000 pierres en stock indiquées [S6]. Pierres latérales de même origine que la pierre centrale (sauf quelques formes fantaisie) [S8].
- **Styles de monture** : voir le filtre ci-dessus [V, ext. S1].
- **Sur-mesure** [V, ext.] : dessin CAO puis impression 3D, frais de CAO à partir de 350 $, déduits du prix si la commande se poursuit ; la maison garde les droits du fichier CAO et ne le remet pas [S2][S4]. Réutilisation d'une pierre de famille [S5].
- **Absent des extraits** : gravure, griffes au choix, vue 3D, vidéo, réalité augmentée, essayage à domicile.

## Prix, délais, retours, garanties

- **Prix** [V, ext. S1][S6] : monture « from » 1 900 $ (Abby), 2 500 $ (Ada), 3 500 $ (Yarden) ; pierre à part ; « your ring is two honest parts », total affiché à l'étape 3. Page « Diamond Prices » : 1 ct synthétique de 1 060 à 1 360 $ (médiane 1 205 $), 1 ct naturel de 2 100 à 3 900 $ (médiane 2 823 $) ; 2 ct naturel de 9 800 à 20 000 $ (médiane 14 201 $), 2 ct synthétique de 1 580 à 2 870 $ [S6]. Aucune décomposition de la monture (métal, façon, marge) dans les extraits [I].
- **Délai** [V, ext. S2] : production standard d'un sur-mesure : **5 semaines**, plus pour un dessin complexe (halo caché, pavé, pierre de famille) ; l'article « engagement-ring-cost » dit 3 à 6 semaines [S6b]. Délai d'une bague du catalogue non vu.
- **Livraison** [V, ext. S7] : FedEx assuré gratuit sur toute commande neuve, vers un point FedEx « HOLD » (pièce d'identité exigée) ; 2 jours selon l'article [S2] ; nuit : 100 $ aller-retour ; réparation : 40 $ aller-retour ; international : droits et taxes à la charge de l'acheteur.
- **Retours** [V, ext. S3][S3b] : achat en ligne : 14 jours après livraison pour remboursement complet, 15 à 30 jours pour avoir ; magasin ou virtuel : 30 jours, avoir seul ; la fabrication ne compte pas dans le délai ; étiquette de retour gratuite, autorisation (RMA) obligatoire. Exclus : bague portée, modifiée, mise à taille, **gravée** ou abîmée ; alliances d'éternité et montres : vente finale. Les commandes spéciales (modifications d'un modèle) : échange ou avoir seulement [S4]. Certificat manquant au retour : 150 $. Frais de 3,5 % sur American Express (version plus ancienne de la page).
- **Garanties** [V, ext. S3][S4] : garantie à vie contre les défauts de fabrication, annulée si un autre bijoutier intervient ; première mise à taille offerte la première année ; plan de service étendu en option.
- **Paiement** [V, ext. S7] : cartes, Apple Pay, Google Pay, Link, virement, chèque, espèces (2 % de remise en magasin ou virtuel) ; Affirm (10 à 36 % APR, ou 4 versements à 0 %), mensualité estimée sur la fiche ; commande sur-mesure démarrable en payant 350 $ de CAO.
- **Certificats, libellé du synthétique** [V, ext.] : GIA, GCAL, IGI ; « lab-grown », rapport qui précise l'origine ; renvoi à la règle de la FTC sur la mention du synthétique [S6b].
- **Langues, devises** [S] : anglais et dollar ; non vérifié.

## Confiance et service

- **Avis** [V, ext. S5b] : « over 2,100 five-star reviews » (Google plus de 760, Yelp plus de 500, The Knot plus de 25, Birdeye plus de 860) ; chiffres du site, non recoupés.
- **Rendez-vous** [V, ext.] : consultation gratuite en magasin (samedi 10 h à 15 h sur rendez-vous) ou en vidéo partout aux États-Unis [S5][S5b].
- **Fabrication** [V, ext. S1][S2] : « handcrafted on Jeweler's Row », bandeau « From Drawing to Forever » (dessin, CAO, métal, diamant), CAD et impression 3D avant la pièce finale ; le client voit le dessin CAO avant la fabrication [S2]. Aucune photo ou vidéo de fabrication de la commande, aucun suivi de commande dans les extraits [I].
- **Fondateur nommé** : Isaac Gottesman [V, ext. S5].
- **Visualisation** [V, ext.] : page « The Online Experience » intitulée « Virtual Shopping & 360 Degree Visuals » [S10] ; contenu du 360° non lu.

## Points forts à retenir pour JR Diamond

1. **Prix « en deux nombres honnêtes »** : monture au prix affiché, pierre au prix affiché, total à l'étape 3, et page publique des prix réels par carat tirés du stock [V, ext. S6]. Preuve : extraits cités ci-dessus.
2. **Délai et dates limites écrites** : « order by 13 November » pour Noël, 5 semaines annoncées [V, ext. S2]. Utile pour le message « 14 jours ouvrés » de JR Diamond.
3. **Le client voit la CAO avant la fabrication**, argument proche de « ce que vous voyez existe » [V, ext. S2].
4. **Formes anciennes (Old Miner, European)** présentées comme un avantage sur les grands sites [V, ext. S9].
5. **Retour clair** : 14 jours remboursés, 15 à 30 jours en avoir, délai qui ne court pas pendant la fabrication [V, ext. S3].
6. **Frais de CAO déduits du prix final** (350 $) comme porte d'entrée du sur-mesure [V, ext. S7].

## Défauts observés

Aucun défaut observé : le site n'a pas été ouvert. Constats tirés des extraits seulement :
- Pas d'or 18 k, ni de vue 3D ou vidéo mentionnées dans les extraits [V, ext.].
- Gravure exclue du retour ; sur-mesure sans retour complet [V, ext. S3][S4].
- Livraison à un point FedEx, pas à domicile [V, ext. S7].
- Deux sources de la maison donnent des délais différents (5 semaines ; 3 à 6 semaines) [V, ext. S2][S6b].
- Les pages d'aide indiquent « 30-Day Return Policy » à l'accueil, 14 jours pour remboursement dans la politique : lecture ambiguë [V, ext. S9][S3].

## Limites de l'audit

- Site non ouvert : `robots.txt` interdit ClaudeBot, Claude-Web et anthropic-ai. Seul ce `robots.txt` a été lu. Les faits viennent d'extraits de moteurs de recherche (outil Parallel Search), qui peuvent dater ou citer des pages modifiées depuis ; plusieurs pages portent des dates de 2022 à 2026.
- Aucun contrôle, aucune mesure de temps d'affichage, aucun panier, aucune vue iPhone.
- Firecrawl indisponible (crédits épuisés) : une seule famille d'outils de recherche utilisée.
- Un humain, sans restriction de robots, pourra compléter cet audit.

## Sources

Toutes lues dans des extraits de recherche, **pages non ouvertes**.
1. https://www.dimendscaasi.com/create-your-ring [V, ext.]
2. https://www.dimendscaasi.com/articles/custom-ring-lead-times (22/10/2026)
3. https://www.dimendscaasi.com/return-policy/ (26/09/2026) ; 3b. https://www.dimendscaasi.com/hc/return-policy
4. https://www.dimendscaasi.com/hc/sales-information
5. https://www.dimendscaasi.com/articles/ring-consultation-chicago ; 5b. https://www.dimendscaasi.com/reviews
6. https://www.dimendscaasi.com/diamond-prices/ ; 6b. https://www.dimendscaasi.com/articles/engagement-ring-cost/
7. https://www.dimendscaasi.com/hc/payments-shipping
8. https://www.dimendscaasi.com/hc/faq-diamonds
9. https://www.dimendscaasi.com/ ; https://www.dimendscaasi.com/hc/build-your-own-unique-engagement-ring
10. https://www.dimendscaasi.com/hc/the-online-experience
11. robots.txt : https://www.dimendscaasi.com/robots.txt
12. Inventaire de l'Illinois : `docs/concurrence/audit/us/illinois/INVENTAIRE.md`
