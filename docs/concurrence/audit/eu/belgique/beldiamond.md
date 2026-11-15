# Audit : Beldiamond, fiche à options (français, €)

| | |
|---|---|
| Site | Beldiamond, Anvers ; showrooms à Anvers et à Bruxelles |
| Page de départ | https://www.beldiamond.com/fr/collections/lab-grown-diamond-engagement-rings/products/classic-solitaire-round-lab-grown-diamond-engagement-ring (« Giulia LAB »). Pas de configurateur : la fiche d'une bague de fiançailles sert de départ |
| Date | 15/11/2026 |
| Appareils | Chromium headless 1366 × 900 ; émulation iPhone 13 (Playwright) ; langue du navigateur réglée sur le français |
| Statut | **complet** jusqu'à la page du panier ; « Procéder au paiement » n'a pas été ouvert |
| robots.txt | Shopify : « product, collection, page, blog, policy, cart… is crawlable » ; interdits : `/cart/…`, `/checkout`, `/account`, `*sort_by*` (V). Cloudflare sans défi (V) |

Marques : **V** vérifié (contrôle actionné ou page lue le 15/11) · **I** inféré · **S** supposé.

Écart : le test de la liste de tri a chargé une adresse en `?sort_by=`, interdite aux robots. Une page, non répété.

## Parcours

| Étape | Options proposées | Effet sur le prix | Effet sur l'image |
|---|---|---|---|
| Collection `/fr/collections/engagement-rings` | filtres : métal (4), type de pierre (4), forme (10), style (6), prix ; tri (4) (V) | « À partir de » par bague, dès 1 260 € (V) | une photo par bague (V) |
| Fiche « Giulia LAB » | métal (4), diamant central (7 poids, qualité fixe D/E VVS2), taille de doigt (45 à 66, ou « Je ne sais pas »), gravure offerte (2 polices, 35 caractères) (V) | recalculé à chaque choix, sur la fiche et dans le tiroir (V) | le métal change le rendu et ses 5 vues ; le poids du diamant ne change rien (V) |
| Fiche « Giulia » (naturel) | mêmes options ; diamant : 11 poids × 2 puretés, couleur F (V) | de 1 780 à 28 680 € (V) | même rendu que la version synthétique (V) |
| Panier `/fr/cart` | quantité, instructions, mettre à jour, paiement (V) | sous-total 1 650,00 € (V) | vignette |

## Contrôles vérifiés

Relevé : 150 contrôles sur la collection et 112 sur la fiche (ordinateur) ; 54 sur la fiche en affichage iPhone (V). Environ 60 ont été actionnés ; les autres sont listés avec la raison.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Fenêtre « L'éclat discret du bracelet tennis… -20 % » | fenêtre Klaviyo | couvre la fiche à l'arrivée, sur ordinateur et sur iPhone ; la croix la ferme (V) | — | fonctionne ; hors sujet sur une bague de fiançailles |
| Devise (USD par défaut depuis notre adresse) | menu | 22 devises, dont EUR, GBP, CHF, AED ; EUR choisi : la page se recharge en euros (V) | 1 534 $ → 1 650 € | fonctionne ; pas de shekel |
| Langue | menu | English, Français, Nederlands (V) | — | liste ouverte, langue non changée |
| Filtrer | bouton | tiroir à gauche avec les 5 groupes (V) | — | fonctionne |
| Forme « Ovale » | lien du tiroir | charge `/fr/collections/engagement-rings/oval` : 58 bagues au lieu de 82 (V) | — | fonctionne |
| Autres filtres (23 liens), prix min et max, « Appliquer » | liens et champs | même mécanisme d'adresse (V, liens lus) | — | non actionnés un par un |
| Tri : « Prix: faible à élevé » | liste | `?sort_by=price-ascending`, Alessia 1 260 € en tête (V) | — | fonctionne |
| Pagination « 2 », « Suivant » | liens | — | — | non actionnés |
| Vignette d'une bague | lien | ouvre la fiche (V) | — | fonctionne |
| Listes natives « Diamant central » et « Taille de doigt », avant tout geste | listes | choisir un poids ne change ni le prix ni la page (V) | inchangé | **inertes** tant que les scripts ne sont pas lancés |
| Deux cases vides « Diamant central » et « Taille de doigt », avant tout geste | boutons sans texte | visibles sous les listes (V) | — | affichage cassé avant le premier geste |
| Métal : or blanc, or jaune, or rose 18 k | pastilles | le rendu et les 5 vues passent dans l'or choisi ; la variante passe dans l'adresse (V, or jaune) | 1 650 € dans les trois ors | fonctionne |
| Métal : platine | pastille | rendu d'or blanc (V) | 1 950 € (+ 300 €) | fonctionne |
| « ? » Métal | bulle | « L'or 18 carats… 750 millièmes… platine 950 millièmes… Tous nos bijoux ont un poinçon » (V) | — | fonctionne |
| Diamant central | tiroir à droite | 7 choix, prix dans l'en-tête du tiroir, « Sélectionner ce diamant », texte « Nos standards de qualité » (V) | 0,50 ct 1 650 € ; 0,70 ct 1 730 € ; 1,00 ct 1 910 € ; 1,50 ct 2 140 € ; 2,00 ct 2 340 € ; 2,50 ct 2 600 € ; 3,00 ct 2 900 € | fonctionne (7 sur 7) |
| « Demander un devis » (dans le tiroir et sur la page) | bouton | — | — | non actionné : ouvre un formulaire (I) |
| « ? » Diamant central, « ? » Taille de doigt | icônes | ouvrent le tiroir correspondant et son texte d'aide (V) | — | fonctionne |
| Taille de doigt | tiroir | 45 à 66 et « Je ne sais pas » ; rappel « remise à taille gratuite » ; 52 choisi puis « Sélectionner cette taille » (V) | inchangé | fonctionne |
| Guide des tailles | lien | `/fr/pages/size-guide` (V, adresse lue) | — | non ouvert |
| Ajouter une gravure offerte | case | affiche deux aperçus « Alice et Thomas » (Moderne, Classique) et un champ « Caractères maximum: 35 » (V) | gratuit | fonctionne ; champ **non rempli** |
| « ? » Gravure | icône | aucune bulle lue (V) | — | non concluant |
| « ? » Délai | bulle | « fabriqué sur mesure… jusqu'à 25 jours. Si vous avez besoin de ce bijou plus rapidement, veuillez nous contacter avant de passer la commande. » (V) | — | fonctionne |
| Payer en 3 fois | lien | panneau : Alma, 2 ou 3 fois sans frais, jusqu'à 5 500 €, pays éligibles (V) | — | fonctionne |
| Galerie : 10 vignettes, flèches (10 points sur iPhone) | vignettes | rendus, photos portées avec légende « Giulia (1,00 ct) », vidéo de 11,5 s en lecture automatique (V, 3 vignettes) | — | fonctionne |
| Photo principale | image | clic : aucun zoom observé (V) | — | sans effet |
| Ajouter au panier | bouton | mène à `/fr/cart` (V) | 1 650,00 € | fonctionne |
| Prendre rendez-vous | bouton dépliant | trois choix : Anvers, Bruxelles, Vidéoconférence, chacun vers une fenêtre Calendly (V, cibles lues) | — | fonctionne ; Calendly non ouvert |
| « sur Google », « sur Trustpilot » | liens | — | — | non ouverts |
| Champ e-mail « Téléchargez le ebook », lettre d'information | champs | présents (V) | — | non remplis |
| « Découvrez aussi » (4 bagues), retour à la collection | liens | — | — | non actionnés |
| Barre haute : Nous contacter, Prendre rendez-vous, Nuit d'hôtel offerte, Offres | liens | page de l'hôtel lue (V) | — | les autres non ouverts |
| Bandeau « Beldiamond à Paris, les 21 et 22 novembre » (en alternance avec Luxembourg et bracelets) | lien | — | — | non ouvert |
| Rechercher, Se connecter | liens | — | — | non actionnés (recherche, compte) |
| +32 800 260 85 (gratuit), WhatsApp +32 489 16 55 48, courriel | liens | `tel:`, `wa.me`, page de contact (V, cibles lues) | — | non ouverts |
| Panier : Retirer, quantité, « Instructions spéciales », Mettre à jour | bouton, champs | présents (V) | — | non actionnés ; note non remplie |
| Procéder au paiement | bouton | — | — | **non actionné** (règle) |

## Options disponibles

- **Métaux** : or 18 carats blanc, jaune, rose ; platine 950 (V). Pas d'or 14 carats (V).
- **Synthétique (« Giulia LAB »)** : rond, 0,50 ; 0,70 ; 1,00 ; 1,50 ; 2,00 ; 2,50 ; 3,00 ct, toujours D/E VVS2, taille « Excellent », certificat HRD ou IGI (V).
- **Naturel (« Giulia »)** : 0,30 à 2,00 ct en 11 poids, couleur F, pureté SI2 ou VS2, certificat GIA ou HRD (V).
- **Formes au catalogue** : rond, ovale, poire, émeraude, coussin, princesse, marquise, asscher, radiant, cœur (V).
- **Styles** : solitaire, pavé, halo, pierres latérales, ancien, « créative » (V).
- **Pierres de couleur** : saphir, émeraude, rubis (V, filtre).
- **Tailles de doigt** : 45 à 66, ou inconnue (V).
- **Gravure** : 35 caractères, polices Moderne ou Classique, offerte (V).
- **Autres qualités, sur mesure** : sur devis, dès 2 500 € (V).

## Prix, délais, retours, garanties

- **Prix du même solitaire** (or blanc, V) :

| Poids | Synthétique D/E VVS2 | Naturel F SI2 | Naturel F VS2 |
|---|---|---|---|
| 0,50 ct | 1 650 € | 2 130 € | 2 420 € |
| 0,70 ct | 1 730 € | 2 880 € | 3 370 € |
| 1,00 ct | 1 910 € | 4 800 € | 6 510 € |
| 1,50 ct | 2 140 € | 10 040 € | 14 100 € |
| 2,00 ct | 2 340 € | 18 650 € | 28 680 € |

- **Décomposition** : aucune. Un prix par variante ; le platine ajoute 300 € quel que soit le diamant (1 950 € et 3 200 € contre 1 650 € et 2 900 €) (V). Ni la fiche ni le panier ne disent « TTC » (V) ; la FAQ propose le hors TVA aux résidents hors Union (V, question lue), donc prix TVA comprise (I).
- **Délai, par variante** (V) :
  - en stock (or blanc de 0,50 à 1,00 ct ; or jaune en 0,50 ct, seul poids essayé) : « En stock ! Livré au plus tard le : 22/11/2026 », soit 7 jours ;
  - à fabriquer (or rose, platine, 1,50 ct et plus) : « Livré au plus tard le : 10/12/2026 », soit 25 jours ;
  - la date suit la bague dans le panier.
  - Ailleurs : « environ 3 semaines » (page livraison), « 1 à 3 semaines » (page visio) (V).
- **Livraison** : gratuite dans le monde entier, assurée, par Malca-Amit, signature exigée, colis sans marque, lien de suivi ; retrait possible à Anvers ou à Bruxelles (V).
- **Retours** : 30 jours, gratuits, pour le catalogue, « cela comprend les bijoux gravés ». Le sur mesure hors catalogue n'est ni repris ni remboursé ; il peut être retouché sous 30 jours (taille, défaut) (V).
- **Mise à taille** : la première est gratuite, la suivante coûte 60 € ; port à la charge du client ; une semaine (V).
- **Garantie à vie** : mise à taille, nettoyage, polissage, rhodiage, petites réparations, échange en cas de défaut ; « nous ne facturons que les frais d'envoi » (V).
- **Certificats** : selon la page, « HRD ou IGI » (fiche synthétique), « GIA ou HRD » (fiche naturelle), « GIA, HRD ou IGI » au-delà de 0,30 ct (page paiement), « certificat GIA » (page visio) (V).
- **Paiement** :
  - icônes du pied de page : American Express, Apple Pay, Bancontact, BLIK, iDEAL/Wero, Klarna, Maestro, Mastercard, MobilePay, Satispay, Visa (V) ;
  - page « Solutions de paiement » : aussi PayPal et Alma ; acompte de 50 %, solde avant la livraison ; trois paiements sans intérêts, « le bijou sera livré une fois le montant total intégralement payé » (V).
- **Panier** : « Giulia LAB · Or blanc 18k / 0,50 ct - D/E VVS2 · Taille de doigt : 52 · Livré au plus tard le : 22/11/2026 », prix, quantité, sous-total 1 650,00 €. Aucune ligne de livraison ni de taxe (V).

## Temps d'apparition du visuel principal

| Cas | Ordinateur | iPhone 13 |
|---|---|---|
| Sans aucun geste | **photo absente après 20 s** ; plus grand élément affiché à 3,8 s, la fenêtre promotionnelle (I) | **photo absente après 20 s** ; plus grand élément à 4,3 s |
| Avec un geste (souris à 1,05 s ; toucher à 2,3 s) | 1,7 s, soit 0,6 s après le geste | 2,7 s, soit 0,35 s après le toucher |

Le thème ne lance ses scripts (galerie, tiroirs, prix) qu'au premier geste du visiteur (V, une mesure par cas). Un visiteur réel bouge vite ; un robot d'indexation ou un outil de mesure ne voit ni photo ni options actives (I).

## Confiance et service

- **Fabrication** : « Fait main à Anvers par les meilleurs artisans joailliers », écrit sur chaque fiche (V). Aucune photo ni vidéo d'atelier relevée sur la fiche, aucun suivi de fabrication annoncé ; seulement un lien de suivi du colis (V).
- **Traçabilité** : page « Diamants blockchain » avec Everledger (trajet de la mine au détaillant), sur devis (V).
- **Avis** : « Nos clients nous notent 5 sur Google et 4.9 sur Trustpilot », avec liens ; aucun avis lisible sur la fiche (V).
- **Rendez-vous** : Anvers, Bruxelles ou visio de 45 minutes à 1 heure, par Calendly (V). Tournées annoncées : Luxembourg les 14 et 15/11, **Paris les 21 et 22/11** (V). Nuit d'hôtel NH Collection offerte aux clients venus d'un autre pays (V).
- **Contact** : numéro gratuit, WhatsApp, formulaire ; pas de chat (V).
- **Langues et devises** : FR, EN, NL ; 22 devises (V).
- **Libellé du synthétique**, sur la même fiche (V) : « diamant synthétique » (fil d'Ariane, sous-titre), « Diamant de Laboratoire » (titre de la page), « Diamant cultivé en laboratoire » (pierres d'accompagnement), « LAB » (nom du modèle). « Cultivé » est interdit en France par le décret 2002-65 (I, voir `2026-11-15_europe.md`).

## Points forts à retenir pour JR Diamond

1. **Une date de livraison par variante, avant le panier et dans le panier.** « En stock ! Livré au plus tard le 22/11/2026 » ou « Livré au plus tard le 10/12/2026 », avec une bulle qui explique les 25 jours (V). JR Diamond annonce « 14 jours ouvrés » : l'afficher en date.
2. **Deux fiches jumelles, naturel et synthétique**, même bague, même rendu : l'écart de prix se lit seul (1,00 ct : 1 910 € contre 4 800 €) (V).
3. **Le synthétique réduit à un seul choix** : la qualité est fixée (D/E VVS2), le client ne choisit que le poids (V). Sept clics possibles au lieu d'une grille des 4 C.
4. **L'aide est dans le tiroir du choix** : standards de qualité à côté des poids, rappel de la mise à taille gratuite à côté des tailles, « Je ne sais pas » accepté comme taille (V).
5. **Gravure offerte avec aperçu des deux polices**, et retour maintenu pour les bijoux gravés (V).
6. **La légende des photos portées donne le poids montré** : « Giulia (1,00 ct) » (V).
7. **Trois rendez-vous depuis la fiche** (deux villes et la visio), et une marque qui se déplace à Paris et à Luxembourg (V). C'est le concurrent direct de JR Diamond pour la France.
8. **Le contenu de la garantie à vie est listé** (cinq services), avec ce qui reste payant : le port (V).

## Défauts observés

1. **Rien ne s'affiche ni ne réagit avant le premier geste** : pas de photo, listes inertes, deux cases vides (V).
2. **Une promotion de bracelets recouvre la bague de fiançailles** à l'arrivée, sur ordinateur et sur iPhone (V).
3. **Quatre noms pour le synthétique** sur une même page, dont « cultivé » (V).
4. **Devise en dollars sur la page française** pour un visiteur hors d'Europe (V).
5. **Fiche française servie en anglais** à un navigateur réglé en anglais, malgré `/fr/` dans l'adresse ; la collection, elle, est restée en français (V, relevés `controls.cjs`).
6. **Erreurs JavaScript** à chaque chargement (« Invalid left-hand side in assignment ») et à chaque changement de variante (« Cannot read properties of null ») (V).
7. **L'image ne suit pas le diamant** : même rendu de 0,50 à 3,00 ct ; le platine montre l'or blanc (V).
8. **Délais et certificats formulés différemment** d'une page à l'autre (V).
9. **Pas de zoom** au clic sur la photo (V).
10. **Panier sans ligne de livraison ni mention de la TVA** (V).

## Limites de l'audit

- Le paiement n'a pas été ouvert : frais, taxes à l'étranger et moyens de paiement réels non observés.
- Une seule bague testée à fond (en synthétique et en naturel) ; le reste du catalogue n'a été vu qu'en liste.
- Les fenêtres Calendly, WhatsApp, le formulaire de devis et la recherche n'ont pas été ouverts. Aucun champ n'a été rempli.
- Les réponses de la FAQ n'ont pas été dépliées (questions lues).
- Navigateur automatisé depuis un centre de données hors d'Europe : la devise par défaut et le déclenchement des scripts peuvent différer pour un visiteur belge.

## Sources

- Fiches : adresse de départ · https://www.beldiamond.com/fr/collections/engagement-rings/products/classic-four-prong-diamond-solitaire-diamond-ring-giulia
- Collections : https://www.beldiamond.com/fr/collections/engagement-rings · https://www.beldiamond.com/fr/collections/engagement-rings/oval · https://www.beldiamond.com/fr/collections/lab-grown-diamond-engagement-rings
- Panier : https://www.beldiamond.com/fr/cart
- Pages : https://www.beldiamond.com/fr/pages/shipping-and-returns · https://www.beldiamond.com/fr/pages/lifetime-warranty · https://www.beldiamond.com/fr/pages/financing-and-payment · https://www.beldiamond.com/fr/pages/faq · https://www.beldiamond.com/fr/pages/tailor-made · https://www.beldiamond.com/fr/pages/the-story-of-your-diamond-backed-by-blockchain · https://www.beldiamond.com/fr/pages/hotel-free-stay · https://www.beldiamond.com/fr/pages/virtual-appointment
- https://www.beldiamond.com/robots.txt
- Scripts, journaux et 20 captures, hors dépôt : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/beldiamond/`
