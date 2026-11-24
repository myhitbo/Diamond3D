# Inventaire Liechtenstein (marché Europe) : aucun site pertinent, pas d'audit

Date : 15/11/2026. Explorateur : Liechtenstein. Complète `docs/concurrence/2026-11-15_europe.md` (14 sites, dont Edenly Genève/Paris), sans le refaire.
Légende : **[V]** vérifié (page lue ou réponse HTTP contrôlée, adresse donnée) · **[I]** inféré · **[S]** supposé.

## Conclusion

Je n'ai trouvé **aucun joaillier établi au Liechtenstein qui vende des bagues de fiançailles ou des alliances en ligne** (configurateur, 3D/360°, sur mesure en ligne, prix affichés). **Aucun audit n'a été fait.** La recherche web a été faite en allemand et en anglais (joailliers, orfèvres, « Labordiamant »), avec les seuls moteurs disponibles : les résultats viennent surtout d'Allemagne, d'Autriche et de Suisse, ou de répertoires. Une absence de résultat ne prouve pas l'absence d'acteur [I]. Le registre du commerce liechtensteinois n'a pas été interrogé.

## Tableau (rang | acteur | ville | adresse | page de départ | configurateur | blocage | langues | pourquoi)

| Rang | Acteur | Ville | Adresse | Page de départ | Configurateur | Blocage | Langues | Pourquoi |
|---|---|---|---|---|---|---|---|---|
| 1 | Huber Uhren Schmuck Anstalt (Huber Fine Watches & Jewellery) | Vaduz (aussi Bregenz, Lech, Bad Ragaz) | https://www.huber.li/ (200, redirige vers /li/de/) [V] | Aucune : pas de page de bague de fiançailles trouvée. Pages « marques » de bijoux (Niessing, Pomellato, Just Lucky, Serafino Consoli, Boucheron…) : https://www.huber.li/li/de/brand/niessing [V : la page répond, son contenu est chargé par JavaScript et je n'en ai pas lu le détail] | Non [V] | Aucun : robots.txt `Allow: /` [V] | de, en, zh [V] | Seul joaillier liechtensteinois identifié avec un site (principalement montres : Rolex, Patek Philippe). Vitrine de marques, sans prix, sans panier ni parcours sur mesure repérés dans le code de l'accueil ou de la page atelier (l'atelier est un atelier d'horlogerie). Pas de comparaison utile avec JR Diamond. Contact par téléphone et WhatsApp [V] |
| 2 | Ospelt Uhren u. Schmuck AG | Vaduz | Äulestrasse 29 (répertoire local.ch : https://www.local.ch/de/q/vaduz/uhren) [V pour l'inscription, [I] pour le statut actuel] | Aucun site propre trouvé | Non trouvé | INCONNU : `www.ospelt.li` a coupé la connexion au contrôle robots (reset), à traiter comme bloqué ; ce domaine n'est de toute façon qu'une supposition d'adresse | de [S] | Commerce local de montres et bijoux, sans présence en ligne vérifiée |
| 3 | Juwelier Herzog Loibner | Vaduz | Äulestrasse 20 (local.ch, même page) [V pour l'inscription] | Aucun site propre trouvé (domaine supposé injoignable : erreur 502 du tunnel) | Non trouvé | INCONNU (adresse non résolue) | de [S] | Boutique inscrite au répertoire ; sa marque de bijoux, Herzog & Loibner, vit surtout chez des revendeurs suisses [I] |
| 4 | Strobel Uhren und Schmuck (antenne ou fiche de Vaduz) | Vaduz / Arlesheim (BL) | Fiche local.ch, statut « fermé » en octobre 2024 ; maison familiale à Arlesheim [V pour la fiche, [I] pour le reste] | Aucun | Non | Certificat TLS invalide sur `www.strobel.li` (le nom ne correspond pas) : non ouvert | de [S] | Mention de conseil pour alliances, sans offre en ligne. Fiche contradictoire : à ne pas retenir |
| 5 | Barbara Schädler Atelier | Schaan | https://magma.li/portfolio/barbara-schaedler-atelier/ (robots : autorisé ; page d'une agence, ancienne de plusieurs années d'après le moteur de recherche) [V pour l'autorisation, page non lue] | Aucun site propre trouvé | Non | Aucun | de [S] | Orfèvre indépendante (bagues citées parmi ses pièces). Pas de vente en ligne trouvée |

## Hors territoire, vus pendant la recherche (non classés)

- **uhrenschmuck24.ch** (Suisse) : boutique en ligne d'alliances qui livre au Liechtenstein, page https://www.uhrenschmuck24.ch/en/trauringe-eheringe-liechtenstein-cgz8594.html (robots : autorisé ; livraison gratuite annoncée d'après un extrait de recherche, non relue). Relève du marché suisse, déjà exploré dans `audit/eu/suisse/` : à y traiter [I].
- **David Goldschmied** (Vorarlberg, Autriche, voisin direct), https://www.uhren-schmuck-david.at/eheringe-trauringe/ : atelier se présentant comme « seul atelier 3D du Vorarlberg » d'après un extrait de recherche, non vérifié, non ouvert. À proposer à l'explorateur Autriche [I].
- Satéur (blog d'une marque de diamants de laboratoire) cite quatre « boutiques » liechtensteinoises (Gartner Diamonds, Diamonds Forever, Jewelry by Design, Rings of Liechtenstein) : source promotionnelle, aucune existence corroborée, **écartées** [S].
- Les marques du marché (Piaget, Swarovski à Triesen, Bucherer) : grandes maisons ou magasins de marque, hors périmètre.

## Terme pour le diamant synthétique

Allemand, langue du pays : **« Labordiamant »** (en usage chez les vendeurs allemands, ex. Verlobungsringe.de, `docs/concurrence/2026-11-15_europe.md`) ; « synthetischer Diamant » existe aussi [I]. Aucune règle liechtensteinoise propre trouvée ; le pays est dans l'union douanière suisse et applique largement le droit suisse et européen [I]. Voir le tableau des juridictions du fichier Europe pour la Suisse.

## Limites

Pages non ouvertes en navigateur : aucun site ne justifiait l'audit. Contrôle robots.txt effectué sur huber.li, magma.li, uhrenschmuck24.ch ; les domaines devinés ospelt.li, herzog-loibner.li, huber-uhren.li ont échoué (coupure ou 502) et n'ont aucune valeur de preuve sur l'existence d'un site.

## Sources (consultées le 15/11/2026)

- https://www.huber.li/ , https://www.huber.li/robots.txt , https://www.huber.li/li/de/atelier (adresses Städtle 34 et Städtle 11, WhatsApp, horlogerie) [V]
- https://www.local.ch/de/q/vaduz/uhren (inscriptions Ospelt, Herzog Loibner, Strobel, extrait de recherche) [V via extrait]
- https://www.rolex.com/rolex-dealers/huber-870/rswi_2153-vaduz-liechtenstein (Huber, revendeur Rolex) [V via extrait]
- https://magma.li/portfolio/barbara-schaedler-atelier/ (Schaan) [V via extrait]
- https://www.uhrenschmuck24.ch/en/trauringe-eheringe-liechtenstein-cgz8594.html [V via extrait]
- https://www.sateur.com/where-to-propose-in-liechtenstein-9-best-places-itinerary (source promotionnelle, écartée)
