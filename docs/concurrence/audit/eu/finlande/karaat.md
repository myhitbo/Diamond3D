# Audit Karaat (karaatjewelry.com, Finlande)

- **Site** : KARAAT, https://www.karaatjewelry.com/fi (Shopify). Showrooms à Helsinki (Mannerheimintie 2) et Stockholm (Strandvägen 15) (V : /fi/pages/karaat-showrooms).
- **Page auditée** : fiche https://www.karaatjewelry.com/fi/collections/kihlasormus/products/the-oval-solitaire (Ovaali Solitaire-sormus), liste https://www.karaatjewelry.com/fi/collections/wedding-engagement, panier https://www.karaatjewelry.com/fi/cart.
- **Date** : 15/11/2026 (date du lot) ; contrôles réalisés le 24/11/2026.
- **Appareils** : Chromium ordinateur 1440 x 900 ; affichage iPhone 13 (Playwright). Identité du navigateur par défaut.
- **Statut** : **partiel**. Aucun blocage de robots ; `robots.txt` interdit `/cart/`, donc l'ajout au panier n'a pas été fait et la page panier a été lue vide.
- Marques : **V** vérifié · **I** inféré · **S** supposé.

## Parcours

Pas de configurateur 3D : une fiche produit à options, un simulateur de taille de pierre sur photo de main, puis le panier.

| Étape | Options (V) |
|---|---|
| Liste des bagues de fiançailles | Filtres : disponibilité (en stock, épuisé), prix, forme (Cushion, Emerald, Marquise, Ovale, Poire, Ronde, Radiant), métal (18 k jaune, rose, blanc), carat de la pierre (0,25 ; 0,5 ; 0,75 ; 1 ; 1,25 ; 1,5 ; 2 ; 2,5 ; 3) ; tri |
| Fiche : métal | 18 k jaune, blanc, rose (3 pastilles de couleur) |
| Fiche : carat | 0,25 ; 0,50 ; 0,75 ; 1,00 ; 1,25 ; 1,50 ; 2,00 ; 2,50 ; 3,00 ct (liste déroulante) |
| Fiche : qualité | Hyvä G-H / VS ; Korkea D-F / VS ; Erinomainen D-F / VVS |
| Fiche : taille de doigt | 14 à 19 mm au quart de millimètre (21 valeurs), obligatoire |
| Fiche : gravure | case « Lisää kaiverrus » (+45 €), champ texte de 25 signes |
| Service | « Näe eri karaattikoot kädessä » (simulateur), « Varaa aika showroomille », « Lainaa sormus » |
| Panier | `/fi/cart` : vide ; frais « calculés à la caisse » (V) |

## Contrôles vérifiés

Fiche sur ordinateur (106 contrôles listés) et iPhone (93). Prix de départ 915 € (0,25 ct, 18 k jaune, G-H / VS).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Bandeau « Pavé-timanttisormus kaupan päälle » | lien | Mène à `/fi/pages/complimentary-pave-ring` (bague pavé offerte dès 2 000 €, jusqu'au 31/12) | offre | OK (lu, non suivi) |
| Menu KORUT, KIHLA- JA VIHKISORMUKSET, SHOWROOMIT, MEISTÄ, OPPAAT | liens | Pages catégories, showrooms, histoire, blog | non | OK (V : adresses) |
| FI / EUR € | boutons | Sélecteur de langue et de devise ; pied de page « Sweden (SEK) » | devise | non ouvert (S : autres valeurs) |
| TILI, ETSI, OSTOSKORI | liens | Compte (non ouvert), recherche (non testée), panier | non | non testé (compte, recherche) |
| 18K keltakulta / valkokulta / ruusukulta | radio | Change la photo principale (3 vues de couleur différente) | 915 € inchangé | OK |
| Timantin koko | liste | 9 valeurs ; prix : 0,25 = 915 ; 0,50 = 1 795 ; 1,00 = 2 600 ; 2,00 = 3 995 ; 3,00 = 5 495 € ; photo inchangée | suit le carat | OK |
| Timantin laatu : Hyvä / Korkea / Erinomainen | radio | 915 → 955 → 995 € (+40, +80) ; photo inchangée | +40 / +80 € | OK |
| « About diamond quality » (i) | bouton | Clic refusé (délai dépassé 4 s) : explication non lue | non | non testé |
| Sormuskoko | liste | 14, 17, 19 essayés : prix inchangé ; « Valitse » obligatoire avant le panier (S) | 0 | OK |
| Lisää kaiverrus (+45 €) | case | Coche ouvre un champ de 25 signes ; le prix affiché reste 915 € à la coche (supplément de 45 € annoncé dans le libellé) ; pas de choix de police vu | +45 € | OK |
| **Näe eri karaattikoot kädessä** | bouton | Panneau « Karaattikoot kädessä » : curseur 0,25 à 5 ct, photo de main (taille de doigt 16,5), légende « Ovaali · noin 9,7 × 7,2 mm » à 2 ct ; 7 formes (Pyöreä, Ovaali, Pisara, Emerald, Cushion, Radiant, Markiisi) ; 3 métaux ; case « Näytä todellisessa koossa näytölläni » ; mention « Koot ovat suuntaa antavia » ; lien « varaa showroom-käynti » | non | OK (7 formes cliquées, curseur à 0,25 / 2 / 5 ct) |
| Case « Näytä todellisessa koossa näytölläni » | case | Taille réelle à l'écran, non cochée | non | non testé |
| LISÄÄ OSTOSKORIIN | bouton | Non actionné : `/cart/add` est interdit par `robots.txt` | non | non testé (règle) |
| VARAA AIKA SHOWROOMILLE | lien | Mène à `/fi/pages/karaat-showrooms` puis à un agenda externe (Acuity), non rempli | non | OK (lu, non suivi) |
| Onglets KUVAUS / YKSITYISKOHDAT / TOIMITUS & PALAUTUS | onglets | Détails : 18 k recyclé, 2,5 g, 4 griffes, anneau 1,7 mm, hauteur 6 mm, « excellente taille » ; expédition « Tilaustuote, avant le 30 décembre » ; 5 semaines gratuites ou 3 semaines payantes | non | OK |
| Elinikäinen takuu / Maksuton koonmuutos / Ilmainen toimitus / Sertifioidut timantit | accordéons | Un seul panneau : garantie à vie, mise à taille offerte, expédition et retour offerts, certificat | non | OK |
| 6 histoires de clients (« KARAAT-tarinat ») | liens | Articles de blog, non ouverts | non | non testé |
| Vignette de galerie avec ▶ | image | Une vignette porte l'icône vidéo ; non lue | non | non testé |
| Sormuksen osto-opas, Lainaa sormus, Tilaustyöt, Sormuskoko-opas, FAQ, Toimitus, Palautukset | liens pied de page | Pages lues par l'outil de lecture (sauf FAQ et guide de taille, non lus) | non | OK (5 lues) |

## Options disponibles

- **Métal** : or 18 k jaune, blanc, rose uniquement (pas de 14 k, pas de platine) (V).
- **Pierre** : diamant synthétique seulement. Carats 0,25 à 3,00 sur la fiche ; simulateur jusqu'à 5 ct. Qualités : G-H / VS, D-F / VS, D-F / VVS (V).
- **Formes** (filtre et simulateur) : ronde, ovale, poire, émeraude, coussin, radiant, marquise (V). Une fiche par combinaison de forme et de monture (solitaire, halo, pierres latérales, halo et pierres latérales) (V : liste, 8 premières).
- **Taille de doigt** : 14 à 19 mm (V).
- **Gravure** : 45 €, 25 signes (V).
- **Sur mesure** : « Tilaustyöt », sans configurateur : bijoux « tilaustyönä ketterästi ja edullisesti », or 18 k recyclé, diamants synthétiques ; pas de prix donné (V).

## Prix, délais, retours, garanties

- **Prix** : affiché en euros, mis à jour à chaque option, sans décomposition (matière, façon, marge) (V). Pas de remise sur la fiche vue ; offre de fin d'année : bague pavé de 695 € offerte dès 2 000 € (V).
- **Délai** : « Tilaustuote. Lähetetään 30.12. mennessä » le 24/11 ; 5 semaines gratuites ou 3 semaines avec expédition accélérée payante (V). Politique d'expédition : Nordiques 1 à 5 jours, reste du monde 2 à 5 jours, DHL Express gratuit, assuré, signature demandée (V). La page ne chiffre pas le tarif de l'accéléré (V : non indiqué).
- **Retours** : 30 jours (livraison comprise), produit neuf avec certificat. **Gravé et sur mesure : non repris, ni droit de rétractation de 14 jours**, mais échange 30 jours pour le sur mesure (V). Mise à taille offerte 30 jours, 85 € remboursés si faite ailleurs (V).
- **Garantie** : à vie, transférable ; perte d'une pierre de moins de 0,5 ct remplacée, à condition d'un contrôle annuel dès 12 mois ; plus de 0,5 ct : non couvert, assurance conseillée ; 4 à 8 semaines de réparation (V).
- **Certificats** : « sertifioidut laboratoriotimantit » sur la fiche ; la page du sur mesure cite HRD Antwerp (V). Numéro de certificat par pierre : non vu.
- **Libellé du synthétique** : « laboratoriotimantti », « laboratorioluotu timantti » (V).

## Confiance et service

- Showrooms Helsinki et Stockholm, visite libre ou sur rendez-vous ; service de **prêt de bague de demande** : 150 € déduits si commande dans les 3 mois, 14 jours, 20 minutes de rendez-vous (V).
- Pas de note d'étoiles vue ; 6 « histoires de clients » rédigées (V).
- Paiements : non affichés avant la caisse (V : « calculés à la caisse »).
- Preuves de fabrication : « Suunniteltu Suomessa, valmistettu Italiassa » ; pas de photos ni vidéos d'atelier vues ; images principales de type rendu (I).
- Suivi de commande : numéro DHL envoyé par courriel ou SMS (V).

## Points forts à retenir pour JR Diamond

1. **Simulateur « carats sur la main »** : curseur, 7 formes, 3 métaux, taille en mm de la pierre, avertissement honnête « indicatif » (V : panneau « Karaattikoot kädessä »). JR Diamond a un sélecteur de carat à venir ; la photo de main en est le modèle.
2. **Le prix suit chaque choix de pierre** (carat, qualité) en direct, sans devis (V : 915 → 5 495 €).
3. **Prêt de bague pour la demande**, 150 € déduits : lève la peur de se tromper et ouvre un acte de vente avant le choix final (V).
4. **Délai annoncé avec date** sur la fiche, avec option accélérée (V).
5. **Retours et exception du sur mesure énoncés clairement**, avec échange de 30 jours même pour le sur mesure (V).
6. **Garantie transférable et contrôle annuel expliqué** : conditions transparentes (V).

## Défauts observés

- Le métal ne change pas le prix (or 18 k seulement) : pas de choix 14 k ni de platine (V).
- Aucune photo ni vidéo de fabrication ; fabrication en Italie, non montrée (V : absence).
- L'info-bulle de qualité n'a pas répondu au clic en 4 s (V : délai dépassé).
- Un clic sur « TOIMITUS » a suivi le lien du bandeau de Noël (adresse `/fi/pages/christmas-shop`) : libellé ambigu entre bandeau et onglet (V).
- Pas de nombre d'avis ni de note affichés (V).

## Mesures

- Premier visuel principal visible (image ≥ 300 px chargée, depuis la requête) : **1,09 s sur ordinateur, 1,03 s en affichage iPhone** (V : une mesure chacune, via proxy de la machine).

## Limites de l'audit

- Page panier non remplie (règle `robots.txt`) : récapitulatif, frais, délai et moyens de paiement non vus ; seules les pages d'information les décrivent.
- Une seule fiche détaillée (Ovale Solitaire) ; les halo, pierres latérales et formes autres que ronde et ovale n'ont pas été ouverts.
- Pas de test de la recherche, du compte, de l'agenda, de la vidéo, du FAQ.
- Pages d'information lues par un outil tiers (cache jusqu'à quatre jours).

## Sources

- https://www.karaatjewelry.com/fi/collections/kihlasormus/products/the-oval-solitaire · https://www.karaatjewelry.com/fi/collections/wedding-engagement · https://www.karaatjewelry.com/fi/cart
- https://www.karaatjewelry.com/fi/pages/borrow-a-ring · https://www.karaatjewelry.com/fi/pages/bespoke-jewelry · https://www.karaatjewelry.com/fi/policies/shipping-policy · https://www.karaatjewelry.com/fi/policies/refund-policy · https://www.karaatjewelry.com/fi/pages/karaat-showrooms
- Scripts et captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/finlande/karaat/`
