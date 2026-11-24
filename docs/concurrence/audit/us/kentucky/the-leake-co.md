# Audit : The Leake Co. (Louisville, Kentucky)

- **Site** : The Leake Co., « Private Jeweler & Design » (Louisville, KY)
- **Adresse** : https://www.theleakeco.com/ ; page de départ : https://www.theleakeco.com/custom-jewelry/
- **Date** : 15/11/2026
- **Appareils** : Chromium (Playwright) sur ordinateur (1366 x 900) et en affichage iPhone 13
- **Statut** : **partiel**. Le site principal est lisible, mais ce n'est pas un configurateur : le seul outil de personnalisation en ligne (bibliothèque « Ready to Style ») est hébergé sur `theleakeco.jewelershowcase.com`, dont le robots.txt est `Disallow: /`. Je ne l'ai pas ouvert (les requêtes vers ce domaine ont été coupées dans mon navigateur). Pas de panier ni de paiement sur le site principal (vente par contrat après rendez-vous).
- Repères : **[V]** vérifié (page lue ou contrôle actionné, adresse donnée), **[I]** inféré, **[S]** supposé. Montants en dollars américains.

## Parcours

[V] Il n'existe pas de parcours d'achat en ligne sur le site principal. Le parcours est celui d'un atelier sur rendez-vous (source : https://www.theleakeco.com/faq/ et https://www.theleakeco.com/custom-jewelry/).

| Étape | Options / ce qui se passe |
| --- | --- |
| 1. Contact | Formulaire « Inquire », rendez-vous en boutique (« Schedule Your Visit ») ou en visio « from anywhere in the country » (« Book a Virtual Appointment »), tous deux vers https://www.theleakeco.com/contact/. Questionnaire de préparation (« Prep Quiz ») envoyé à la prise de rendez-vous |
| 2. Croquis | « Sample artboard » (planche d'échantillon), puis frais de création de 350 $ + taxe, payés en ligne par sous-contrat |
| 3. Conception | Jusqu'à 5 planches, 1 modèle CAO avec 3 retouches, 1 prototype imprimé en 3D ; suivi par un tableau de bord privé (« private online design board ») |
| 4. Contrat et production | Acompte de 50 % au lancement de la production, sur la base du total contractuel |
| 5. Livraison | Solde à la livraison ; expédition assurée et suivie FedEx ou UPS |
| Alternative | « Ready to Style » : bibliothèque de modèles à personnaliser (métal, pierre, gravure) avec « real-time pricing updates » ; non lue (voir Limites) |

## Contrôles vérifiés

Pas de configurateur à actionner. Les contrôles de la page de départ ont été relevés avec controls.cjs (43 sur ordinateur, 38 en affichage iPhone) ; chaque lien interne a été ouvert une fois sauf mention.

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| About / Meet Your Designer | lien | Page de la designer (Sarah Rowe selon l'inventaire du 15/11) | non | non rouvert (déjà lu le 15/11) |
| Portfolio / View Our Portfolio | lien | https://www.theleakeco.com/portfolio/ : 4 ancres (Custom Engagement Rings, Wedding Bands, Fashion Jewelry, Heirloom Jewelry Restyling) et 50 photos cliquables (fichiers .webp) ; ni prix ni légende de prix | non | fonctionne |
| FAQ | lien | https://www.theleakeco.com/faq/ : 6 thèmes en accordéons (voir plus bas) | texte | fonctionne |
| Inquire / bouton enveloppe | lien | https://www.theleakeco.com/contact/ : deux boutons (visite, visio), adresse, formulaire de message (non rempli) | non | fonctionne |
| Schedule Your Visit / Book a Virtual Appointment | lien | Les deux mènent à /contact/ (même page) | non | fonctionne, pas de calendrier propre sur la page lue |
| Open Services / Open Client Care | bouton (menu) | Ouvre les sous-menus Services et Client Care ; les liens correspondants (Custom Design, Repair, Gifting, Appraisals, Ready to Style) sont aussi dans le pied de page | non | fonctionne (liens relevés dans le DOM) |
| Education | lien | https://www.theleakeco.com/education/ : « The Design Desk », 3 articles (private jeweler, préparer le rendez-vous, entretien) | non | fonctionne |
| Gift Cards | lien | https://www.theleakeco.com/gift-cards/ : titre « Let's start a beautiful design together! » ; contenu d'achat non visible dans mon rendu | [S] carte-cadeau | page chargée, contenu non vérifié |
| Client Login | lien | https://www.theleakeco.com/portal/ : « Welcome to The Leake Co. Client Portal » (écran de connexion, non utilisé) | non | fonctionne, aucun compte créé |
| Repair / Gifting / Appraisals | lien | Pages de services (réparation, cadeaux, expertises) ; Repair relue : « Restore What Matters Most » | non | fonctionne |
| Ready to Style | lien | https://www.theleakeco.com/ready-to-style/ : texte « Select your preferred metal, gemstone, or engraving… » ; le catalogue est un cadre/lien externe vers theleakeco.jewelershowcase.com | « instant pricing updates » (FAQ) | **non testé** : robots.txt Disallow / sur le sous-domaine |
| Flux Instagram (6 liens) | lien | Publications sur instagram.com/theleakeco (dont 2 reels) | non | non suivis |
| Facebook, LinkedIn, Google | lien | Réseaux sociaux et fiche Google | non | non suivis |
| Adresse (Google Maps) | lien | Carte de 120 Sears Ave. Suite 211, Louisville | non | non suivi |
| Privacy Policy, Terms of Use, Accessibility | lien | Pages légales | non | non lues |
| Accept & Close | bouton | Ferme le bandeau « By using this website, you agree to our use of cookies » (pas de refus possible) | non | fonctionne |
| Ajout au panier, carat, forme, métal, gravure, taille de doigt, 360°, 3D, AR, comparer, enregistrer, partager | n/a | **absents** du site principal (aucun panier, aucune vue 3D, aucune vidéo ni `canvas` sur les 3 pages mesurées) | n/a | n/a |
| Chat, WhatsApp, téléphone | n/a | Aucun bouton de chat ni de WhatsApp relevé ; contact par formulaire et rendez-vous [V] (/contact/) | n/a | n/a |

## Options disponibles

- **Métaux** [V] (FAQ) : or 14 k et 18 k en jaune, blanc ou rose ; platine ; argent sterling ; or blanc 18 k au palladium (sans nickel). L'or blanc est rhodié sauf demande contraire.
- **Pierres** [V] : diamants et gemmes « clearly identified as natural or lab-grown » ; pierres de famille réutilisables ; pas de grille de carat, de forme ni de certificat publiée sur les pages lues.
- **Types de pièces** [V] (portfolio) : bagues de fiançailles sur mesure, alliances, bijoux de mode, restylage de bijoux de famille ; plus réparation, cadeaux, expertises.
- **Gravure** : mentionnée comme option (FAQ, Ready to Style) ; polices et longueur non publiées.
- **Taille de doigt** [V] : un redimensionnement offert dans les 60 jours (1 taille en plus ou en moins) ; conseils de mesure sur demande.
- **Moyens de paiement** [V] : cartes, virement ACH ou wire, espèces, chèque (délai d'attente) ; financement Citi Jeweler's Reserve à 6 mois à intérêt différé.
- **Langues, devises** : anglais, dollars [V].

## Prix, délais, retours, garanties

- **Prix** [V] (FAQ, https://www.theleakeco.com/faq/) : « simple custom designs begin at » or 14 k 2 000 $, argent sterling 1 000 $, platine 3 000 $ ; « transparent estimates » en rendez-vous. Aucun prix de bague précis sur les pages lues du site principal. Le prix n'est pas décomposé (matière, façon, pierre) sur ces pages.
- **Frais de création** [V] : 350 $ + taxe, dus après réception de la première planche ; **déduits du prix final** ; non remboursables.
- **Échéancier** [V] : 350 $, puis 50 % d'acompte au lancement, solde à la livraison.
- **Délai** [V] : « in as little as four weeks » (page de départ) ; « 4 to 8 weeks » de la consultation à la livraison (FAQ).
- **Retours** [V] : « Custom jewelry is made specifically for you and is non-returnable and non-refundable » ; aucun remboursement sur les créations ; annulation acceptée seulement avant le début de la production ; dépôts de sourcing de pierres non remboursables ; pas d'échange sur les pièces sur mesure.
- **Modifications** [V] : retouches mineures avant production ; ensuite limitées et payantes.
- **Garantie** [V] : garantie limitée contre les défauts de fabrication à la livraison ; **défaut à signaler par écrit sous 14 jours** ; exclut l'usure normale et les projets avec métal ou pierres fournis par le client ; réparations : 30 jours sur la main-d'œuvre.
- **Entretien** [V] : nettoyage gratuit à vie ; inspection gratuite tous les 6 à 12 mois pour les clients établis ; plan « Jeweler's Mutual Care Plan » (3 ans ou durée étendue).
- **Propriété intellectuelle** [V] : le joaillier garde tous les droits sur les fichiers de conception, les cires et les moules ; ils ne sont pas remis au client.
- **Livraison** [V] : expédition assurée et suivie par FedEx ou UPS ; assurance qui s'arrête à la livraison ; coût non indiqué.

## Confiance et service

- [V] Atelier sur rendez-vous, 120 Sears Ave. Suite 211, Louisville ; visio pour tout le pays.
- [V] Diamants vérifiés « clearly identified as natural or lab-grown » ; fournisseurs conformes au processus de Kimberley ; métaux « of the stated purity ». Les mots « GIA » et « IGI » ne figurent pas dans la FAQ lue [V, texte intégral de la page].
- [V] Preuves de fabrication : 3D rendus « detailed 3D renderings » et prototype imprimé en 3D à approuver avant la production (FAQ) ; tableau de bord privé pour suivre le projet (page de départ) ; flux Instagram avec reels. Aucune vidéo d'atelier ni photo de fabrication sur les trois pages mesurées (0 balise `video`).
- [V] Avis clients : aucune note ni avis chiffré sur les pages lues ; un témoignage cité dans l'inventaire du 15/11.
- [V] Engagement social : « Giving Back with Leake » (don d'une partie des frais de carte économisés lorsque le client paie par virement, espèces ou chèque).

## Points forts à retenir pour JR Diamond

1. **Frais de création déduits du prix final** : le client paie 350 $ pour voir croquis, CAO et prototype, puis ce montant est crédité (FAQ, https://www.theleakeco.com/faq/). Idée de « frais de conception crédité » pour les transformations de bijoux de famille.
2. **Échéancier écrit et simple** (frais, 50 % au lancement, solde à la livraison) : même page FAQ.
3. **Prix planchers publiés par métal** (14 k dès 2 000 $, platine dès 3 000 $, argent dès 1 000 $) : donne un repère avant tout rendez-vous, même sans configurateur.
4. **Tableau de bord privé de suivi** (« private online design board ») : le plus proche de « l'atelier en direct » du recensement ; JR Diamond peut aller plus loin avec la pierre filmée (page de départ).
5. **Prototype imprimé en 3D à approuver** avant production : réponse directe à la peur « le bijou reçu diffère de la CAO validée » (FAQ).
6. **Pierres « clearly identified as natural or lab-grown »** et or blanc sans nickel (palladium) proposé : repère de libellé (FAQ).
7. **Rendez-vous en visio dans tout le pays**, avec questionnaire de préparation : parcours à reproduire pour la France (Contact).
8. **Politique de retours écrite sans ambiguïté sur le sur-mesure** (non remboursable, annulation avant production) : formulation à comparer avec l'avis de l'avocat israélien (FAQ, rubrique Policies).

## Défauts observés

- [V] Aucun configurateur ni aperçu 3D interactif sur le site principal ; aucune photo ou vidéo de pierre ; aucun prix réel avant le rendez-vous.
- [V] Retours : sur-mesure non remboursable, frais de création non remboursables, garantie à déclarer sous 14 jours seulement.
- [V] Le bandeau de cookies n'offre que « Accept & Close » (aucun refus).
- [V] Pages à contenu absent dans mon rendu : /ready-to-style/ (embed bloqué par moi) et /gift-cards/ ; captures pleine page avec grandes zones blanches (chargement différé).
- [V] Les rendez-vous « Schedule Your Visit » et « Virtual Appointment » mènent à la même page /contact/ sans calendrier visible ; 24 h de préavis et frais de 50 $ en cas d'annulation tardive (FAQ).
- [V] Propriété intellectuelle : le client ne reçoit ni les fichiers ni les moules ; le client ne possède pas la CAO de sa bague.
- [I] Pas de certificat GIA ou IGI annoncé : la confiance repose sur la vérification « in-store ».

## Limites de l'audit

- Bibliothèque « Ready to Style » (theleakeco.jewelershowcase.com) **non lue** : robots.txt `User-agent: * / Disallow: /`. Je n'ai donc ni les contrôles, ni le prix en direct, ni le panier éventuel de cet outil.
- Menus déroulants (Services, Client Care) non ouverts un à un ; les liens ont été relevés dans le DOM.
- Mesures de temps prises sur une machine partagée et chargée : ordre de grandeur seulement.
- Aucun formulaire rempli ; page /portal/ vue sans connexion ; aucune conversation ouverte.
- Temps d'apparition du premier visuel (photo) : /custom-jewelry/ 1,1 s ordinateur et 1,2 s iPhone (chargement complet 1,3 s et 1,7 s) ; /portfolio/ 1,1 s et 0,9 s. Pour /ready-to-style/, la mesure ordinateur (30 s, délai maximal atteint) est **non exploitable** car j'avais coupé le domaine de la bibliothèque ; 1,5 s sur iPhone pour l'image d'en-tête seulement. Visuel principal = photo, pas de 3D.
- Respect de robots.txt : Crawl-delay 3, une page toutes les 3 s respectée ; `Disallow: /*?` : aucune adresse avec `?` ouverte (les liens `?page_id=` du menu n'ont pas été suivis).

## Sources

- https://www.theleakeco.com/custom-jewelry/ (lue, contrôles et mesures)
- https://www.theleakeco.com/faq/ (lue intégralement)
- https://www.theleakeco.com/ready-to-style/ (lue, partiel)
- https://www.theleakeco.com/portfolio/ (lue, 50 photos relevées)
- https://www.theleakeco.com/contact/ , https://www.theleakeco.com/portal/ , https://www.theleakeco.com/education/ , https://www.theleakeco.com/gift-cards/ , https://www.theleakeco.com/jewelry-repair/ (lues)
- https://www.theleakeco.com/robots.txt (lu) ; robots.txt du sous-domaine de la bibliothèque (lu le 15/11, non ouvert)
- Inventaire du 15/11 : `docs/concurrence/audit/us/kentucky/INVENTAIRE.md`
