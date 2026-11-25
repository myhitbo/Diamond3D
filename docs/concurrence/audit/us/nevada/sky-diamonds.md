# Audit : Sky Diamonds (Las Vegas, Nevada)

- **Site** : Sky Diamonds (Shopify ; pages construites avec des cadres intégrés d'une application hébergée sur vercel.app)
- **Adresse** : https://skydiamonds.com — page de départ https://skydiamonds.com/pages/custom-design
- **Date** : 15/11/2026 (exécution des contrôles ; fichier rédigé le 25/11/2026 selon l'horloge de la session)
- **Appareils** : Chromium ordinateur 1366×900 ; émulation iPhone 13 (mesure de temps seulement)
- **Statut** : **partiel**. Le site n'a **pas de configurateur en ligne** : « Custom Designs » est une page de prise de rendez-vous en magasin. Le parcours audité est donc la page sur mesure, le catalogue et le financement. Aucune fiche produit ni aucun ajout au panier n'ont été audités.
- Légende : [V] vérifié (page lue ou contrôle actionné) ; [I] inféré ; [S] supposé.

## Parcours
| Étape | Contenu [V] |
|---|---|
| 1. Page « Custom Designs » | pitch « Design Her Dream Ring at Sky Diamonds », bouton « BUILD YOUR DREAM RING — COMPLIMENTARY » (ouvre un widget de réservation `api.leadconnectorhq.com/widget/booking/…`) et « CALL TO BOOK » |
| 2. Séance de conception en magasin | 45-60 min : croquis à la main, choix du diamant (labo ou naturel), du métal |
| 3. CAO 3D en 24-48 h | rendu 3D montré en magasin sur écran, révisions illimitées |
| 4. Rendez-vous de revue de la CAO | prix final, -10 % si commande passée ce jour-là, paiement intégral à la commande |
| 5. Fabrication | « environ 2 semaines » ; total 2-3 semaines depuis la première séance |

## Contrôles vérifiés
| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| BUILD YOUR DREAM RING — COMPLIMENTARY | lien (cadre hero) | adresse de réservation LeadConnector `…/CtxMZo2lBny0pnIsIpN1` ; non ouverte | gratuit (annoncé) | lien présent [V] ; non cliqué (formulaire de rendez-vous, règle lecture seule) |
| CALL TO BOOK / (702) 527-3775 | lien tel | appel | — | présent [V] |
| Las Vegas Showroom / Get Directions | lien | itinéraire Google Maps | — | présent [V] |
| SCHEDULE ONLINE (en-tête) | lien | réservation LeadConnector `…/PSADQTYy9Oevsu8m7THs` | — | présent [V] ; non ouvert |
| 📞 / 📍 Visit Our Store | lien | tel / Google Maps | — | présents [V] |
| Menu : Engagement Rings, Wedding Bands, Diamonds, Fine Jewelry, Watches, Custom Designs, Jewelry Repair, Financing, About Us | lien | pages `/pages/…` | — | liens présents [V] ; Engagement Rings et Financing lues |
| 💎 Special Savings! View Offers | lien | `/pages/special-offers` | — | présent [V] ; non ouvert |
| Bannière Black Friday (image) | lien | `/pages/black-friday-2026` | — | présent [V] |
| Bannière cookies Accept / Reject | bouton | Reject ferme la bannière | — | OK [V] |
| Widget d'accessibilité (ouvrir / masquer) | bouton | présent | — | non ouvert |
| FAQ (9 questions) | accordéon (cadre) | chacune se déplie et affiche sa réponse | — | OK [V] |
| Demande « Send Us a Message » (mailto dorit@skydiamonds.com) | lien | e-mail | — | présent [V] ; non cliqué |
| « Book an Appointment » / « Call Us Now » (fenêtre « Diamond Specialist Help ») | fenêtre | proposition d'aide ; « Not now » | — | présent [V] |
| Page Engagement Rings : 3 « REDEEM OFFER » (formulaires LeadConnector), « Visit Our Las Vegas Store », « See Our Financing Options » ; indicateurs 1-3 (carrousel) | lien/bouton | liens vers formulaires ; non ouverts | — | présents [V] |
| Page Financing : sélection Synchrony / Affirm, FAQ (7 questions) | liens / accordéon | liens de demande de financement ; non ouverts | — | présents [V] ; non testés (données personnelles) |
| Connexion / Créer un compte (Shopify) | lien | non ouverts | — | présents [V] |
| `/cart` | page | « There Are No Items In Your Cart » ; bandeau « 20% OFF Sale Storewide! » et menu différent de celui du reste du site | — | OK [V] |
| Filtres, tri, forme, métal, carat, taille de doigt, gravure | — | n'existent pas sur les pages auditées | — | absents [V] |
| Vues photo / vidéo / 360° / 3D / main / AR / zoom, partager, enregistrer, comparer, chat, WhatsApp, essayage à domicile | — | non trouvés sur les pages auditées | — | absents [V] |

## Options disponibles
- **Métaux, formes, origine** : « Any diamond shape or metal type » ; diamants labo ou naturels ; sur mesure déclaré [V, texte] ; aucun sélecteur en ligne.
- **Styles d'engagement listés (page Engagement Rings)** : solitaire, halo, trois pierres, pavé, halo caché, vintage [V].
- **Stock** : « over 300 in-stock » engagement rings annoncés [V, texte].
- **Pierres** : diamants naturels GIA et diamants de labo IGI [V, FAQ].
- **Pierre ou métal du client** : acceptés (« diamonds and gemstones you bring in ») [V, FAQ].
- **Paiement** : Visa, Mastercard, Amex, Discover ; financement 0 % 12 mois (page sur mesure) et jusqu'à 60 mois via Synchrony et Affirm (page Financing) [V].

## Prix, délais, retours, garanties
- **Prix** (cadres « pricing » et « gallery ») [V] : bague sur mesure « à partir de 1 800 $ » ; solitaire simple 1 800-4 700 $ ; halo ou pavé 1 800-5 400 $ ; trois pierres ou complexe 2 800-7 800 $ ; luxe / grosse pierre 10 000 $+. Prix exact « à votre second rendez-vous ». Aucune décomposition en ligne.
- **CAO** : normalement 300 $, offerte à la réservation ; « 450 $+ de valeur » pour la séance [V].
- **Remise** : 10 % si commande passée lors de la revue de la CAO [V].
- **Délai** : 24-48 h pour la CAO ; fabrication environ 2 semaines ; 2-3 semaines au total [V].
- **Paiement** : intégral à la commande [V, FAQ].
- **Retours** : aucun retour une fois la production commencée (« special order ») ; révisions illimitées de la CAO avant [V, FAQ].
- **Garantie** : « lifetime warranty covering manufacturing defects » sur les bagues sur mesure ; « Best Price Guarantee » [V, FAQ ; conditions non lues].
- **Fabrication** : « handcrafted in the USA » [V, FAQ].
- Cadre « comparison » : compare à « other jewelers » (dépôt 50-100 %, non remboursable) [V] ; affirmation commerciale, non vérifiée.
- **Livraison** : non audité (pas de commande en ligne).

## Confiance et service
- Magasin : 6539 S Las Vegas Blvd, Suite C112, Las Vegas ; horaires affichés [V]. Les pages indiquent des codes postaux différents (89118 / 89119) [V].
- Avis : « 4.9/5 », « 500+ couples » dans le cadre « social-proof » et « Over 2,000 Happy Couples » dans la barre ; trois témoignages cités avec prénoms (sans source vérifiable) [V pour l'affichage, I pour la fiabilité]. Les chiffres 500+ et 2 000+ ne concordent pas [V].
- Équipe : « Tiffany & Co., Kay Jewelers, Tacori » (cadre team), sans noms [V].
- Sceau BBB, Facebook, Instagram [V]. Aucune vidéo d'atelier ni suivi de commande vus.
- Rendez-vous et confidentialité (« Planning a surprise proposal? ») mis en avant [V].
- Langue : anglais ; devise : dollar [V]. Libellé du synthétique : « lab-grown » / « IGI lab diamonds » [V].

## Mesure du visuel principal
- Ordinateur : document HTML (`domcontentloaded`) en **0,75 s** ; les 10 cadres « embed » naviguent entre 0,76 et 0,80 s puis une seconde fois vers 2-2,5 s (rechargement) [V, une mesure]. Temps d'apparition de l'image du ring non mesuré avec précision ; visible sur la capture prise à 6 s [V].
- iPhone 13 : première image du CDN à **2,6 s**, événement `load` à **5,6 s** [V, une mesure].
- Une première tentative d'attente d'une balise `h1` a expiré à 20 s : le titre est dans un cadre, pas dans le document principal [V].

## Points forts à retenir pour JR Diamond
1. **Prix de départ et fourchettes par type de bague affichés** (1 800 $ ; 1 800-4 700 $ ; …) alors que la fabrication est sur mesure. Preuve : cadre « pricing » [V].
2. **« See exactly what you're getting first »** : la CAO 3D est offerte avant tout engagement ; promesse proche de « ce que vous voyez existe ». Preuve : cadres « comparison » et « how-it-works » [V].
3. **Calendrier jour par jour** (J1 séance, J2-3 CAO, J4-7 révisions, semaine 2-3 bague prête). Preuve : cadre « how-it-works » [V].
4. **Répond à la peur du dépôt** (« 50-100 % deposit required… » chez les autres). Preuve : cadre « comparison » [V].
5. **Politique claire sur le sur mesure** : pas de retour après le début de la production, mais révisions illimitées avant ; garantie à vie sur les défauts de fabrication. Preuve : FAQ [V].
6. **Financement détaillé** (Synchrony, Affirm, 12-60 mois, applicable au sur mesure à la commande). Preuve : /pages/financing [V].

## Défauts observés
1. **Pas de configurateur** : la page « Custom Designs » ne mène qu'à une prise de rendez-vous [V].
2. Contenu **dans des cadres d'une application tierce** (vercel.app) : le texte n'est pas dans la page principale (moins lisible par les moteurs et les lecteurs d'écran) [V ; conséquences I].
3. Chiffres d'avis incohérents (« 500+ » / « 2 000+ ») ; texte « 4.9/5 » sans source [V].
4. Panier d'un autre thème (« 20% OFF Sale Storewide! », menu différent) que le reste du site [V].
5. Offre de financement affichée « Expires September 30th, 2026 » sur la page Financing alors que la date de l'audit est postérieure [V].
6. Adresse postale avec deux codes postaux différents [V].
7. Curl simple reçoit une page de vérification de connexion ; le navigateur est servi normalement (site derrière Cloudflare) [V]. Aucun contournement tenté.

## Limites de l'audit
- Pas de configurateur à auditer ; fiches produit, collections et ajout au panier non testés ; le panier a été ouvert vide.
- Aucun formulaire ni réservation ouverts ou envoyés (règle) ; liens LeadConnector non suivis.
- Pages Diamonds, Wedding Bands, Fine Jewelry, About Us, Special Offers, Terms non lues ; retours et garanties relevés uniquement dans la FAQ de la page sur mesure.
- Version mobile : seulement les mesures de temps ; contrôles mobiles non relevés.
- Les revendications commerciales (500+, comparaison avec les concurrents) n'ont pas été vérifiées.
- robots.txt du site contient des instructions pour agents (agents.md, UCP) ; non suivies, aucune interface d'agent utilisée.

## Sources
- https://skydiamonds.com/pages/custom-design (et ses 10 cadres sur https://v0-sky-diamonds-e-commerce.vercel.app/embed/custom-ring/{hero,social-proof,gallery,comparison,what-you-get,how-it-works,team,pricing,faq,booking})
- https://skydiamonds.com/pages/engagement-rings
- https://skydiamonds.com/pages/financing
- https://skydiamonds.com/cart
- https://skydiamonds.com/robots.txt
- Captures : /tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/us/sky-diamonds/
