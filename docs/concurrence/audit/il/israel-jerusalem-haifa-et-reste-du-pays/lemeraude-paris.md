# Audit : L'Émeraude Paris (Netanya)

- **Site** : L'Émeraude Paris, joaillier, diamantaire et horloger, 4 rue Tel Hai, Netanya [V]
- **Adresse** : https://lemeraude-paris.com/ ; page de départ : https://lemeraude-paris.com/sur-mesure (configurateur « Personnalisez votre bague », aussi présent sur l'accueil)
- **Date** : 15/11/2026
- **Appareils** : Chromium 1366 × 900 (locale fr-FR) et affichage iPhone 13 (Playwright `devices['iPhone 13']`)
- **Statut** : **complet** pour ce que le site propose. Il n'a ni panier ni prix ; les formulaires n'ont pas été remplis (règle d'audit).

Légende : [V] vérifié (page lue ou contrôle actionné, adresse indiquée) · [I] inféré · [S] supposé. robots.txt : `Allow: /`, seul `/admin` interdit [V].

## Parcours

| Étape | Options |
|---|---|
| 1. Configurateur 3D (/sur-mesure ou accueil) | onglet MÉTAL : Or Jaune 18 carats, Or Blanc 18 carats, Or Rose 18 carats, Platine 950 · onglet FINITION (« Finition du jonc ») : Poli, Brossé, Ciselé · bouton WIREFRAME · axes X, Y, Z · rotation au glisser (ordinateur) ou au doigt, zoom à la molette ou en pinçant |
| 2. Récapitulatif | « Solitaire » · Alliage · Pierre « Diamant brillant » (fixe) · Finition |
| 3. Suite | bouton « DÉMARRER MON PROJET » → WhatsApp (message pré-rempli, sans la configuration) |
| Hors configurateur | « Demander un devis », « Prendre rendez-vous » (WhatsApp), formulaire « Être rappelé » (/contact), salon sur rendez-vous à Netanya |

Il n'y a ni choix de forme, de carat, d'origine (naturel ou synthétique), de monture, de griffes, de pavage, de taille de doigt ni de gravure [V : /sur-mesure, texte complet du panneau].

## Contrôles vérifiés

Relevé complet par `controls.cjs` : 31 contrôles sur ordinateur, 33 en affichage iPhone [V]. Actionnés un par un (scripts a1 à a8).

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| FR · HE · EN | boutons de langue | changent la langue de la page ; HE passe en `dir=rtl` ; l'adresse ne change pas [V] | — | fonctionne, mais **le configurateur reste en français** en HE et en EN [V] |
| Activer le thème clair | bouton | fond sombre → clair, le libellé devient « Activer le thème sombre » [V] | — | fonctionne |
| Ouvrir le menu d'accessibilité | bouton flottant | panneau : taille du texte (100 %), contraste élevé, souligner les liens, réduire les animations, réinitialiser [V] | — | fonctionne |
| Discuter sur WhatsApp | bouton flottant | lien wa.me/972525091582, message « je vous contacte depuis votre site… » [V] | — | lien valide (non ouvert) |
| Cookies : Accepter · Refuser · En savoir plus | bandeau | « Refuser » ferme le bandeau [V] | — | fonctionne |
| WIREFRAME | bouton | superpose les arêtes du maillage au modèle (capture `wireframe`) ; second clic : retour [V] | aucun | fonctionne |
| MÉTAL | onglet | affiche « Choisir l'alliage » et les 4 alliages [V] | — | fonctionne |
| Or Jaune 18 carats | option | état initial ; récapitulatif « Or Jaune · 18 carats » [V] | aucun | fonctionne |
| Or Blanc 18 carats | option | récapitulatif « Or Blanc · 18 carats », teinte du métal changée [V, iPhone et ordinateur] | aucun | fonctionne ; le clic attend parfois plus de 4 s (le modèle s'anime) [V] |
| Or Rose 18 carats | option | récapitulatif « Or Rose · 18 carats » [V] | aucun | fonctionne |
| Platine 950 | option | récapitulatif « Platine · 950 », métal gris-bleu (capture `alliage_Platine`) [V] | aucun | fonctionne |
| FINITION | onglet | affiche « Finition du jonc » : Poli (« surface miroir lisse »), Brossé (« mat satiné directionnel »), Ciselé (« motifs gravés en relief ») [V] | — | fonctionne |
| Poli · Brossé · Ciselé | options | récapitulatif « Or Jaune · Brossé », puis « · Ciselé », puis « · Poli » [V, iPhone] | aucun | fonctionne ; sur ordinateur, onglet ouvert mais clic d'option non confirmé (délai dépassé) |
| X · Y · Z | repère d'axes | l'image change, mais elle change aussi sans action : le modèle s'anime seul [I] | — | effet propre non établi |
| Glisser pour pivoter · molette pour zoom | canvas | image modifiée après glisser et après molette [V] ; même réserve d'animation [I] | — | fonctionne [I] |
| Glisser · pincer pour zoom | canvas iPhone | libellé affiché ; canvas de 350 × 221 px seulement [V] | — | non actionné au doigt |
| DÉMARRER MON PROJET | lien | wa.me/972525091582, « je souhaiterais discuter d'un projet de bijou sur-mesure » ; **l'alliage et la finition choisis ne sont pas transmis** [V] | — | lien valide (non ouvert) |
| Prendre rendez-vous / BOOK AN APPOINTMENT | lien | WhatsApp, « prendre rendez-vous à votre boutique de Netanya » [V] | — | lien valide |
| Demander un devis · Trouver ma pierre | boutons (accueil) | aucune fenêtre ni changement d'adresse observés après le clic [V] | — | effet non établi |
| Notre maison · Sur-mesure · Services · Galerie · Expériences clients · Contact | menu (et « Menu » sur iPhone) | pages /notre-maison, /sur-mesure, /services, /galerie, /temoignages, /contact : toutes 200 [V] | — | fonctionnent |
| Découvrir le processus · Découvrir nos métiers · En savoir plus · Voir tous les avis | liens (accueil) | /sur-mesure, /services, /notre-maison, /temoignages [V] | — | fonctionnent |
| Discuter de ce projet (×4) · Écrire sur WhatsApp | liens (/services) | WhatsApp [V : texte de la page] | — | non ouverts |
| Adresse · Téléphone · Email · Avis Google · LinkedIn · Instagram · Facebook | liens (/contact, pied de page) | Google Maps (itinéraire), tel:+972525091582, mailto, fiche Google, profils sociaux [V] | — | cibles valides (non ouvertes) |
| Enregistrer le contact | bouton (/contact) | non actionné : téléchargement de fiche contact supposé [S] | — | non testé |
| Formulaire « Être rappelé » (nom, téléphone, e-mail, service, case d'accord, Envoyer) | formulaire | liste « Service souhaité » : Bague / Alliance, Collier / Pendentif, Montre, Création sur-mesure, Réparation / Transformation, Achat d'or, Autre [V] | — | non rempli (règle) |
| Déclaration d'accessibilité · Politique de confidentialité · Conditions d'utilisation | liens | /accessibilite, /confidentialite, /conditions [V] | — | fonctionnent |
| Levi Dror | lien (pied de page) | WhatsApp du créateur du site [V] | — | sans rapport avec la vente |

Non applicables (absents du site) : forme, carat, origine, monture, griffes, pavage, taille, gravure, filtres de pierres, photo, vidéo de la bague, 360°, sur la main, AR, partager, enregistrer, comparer, guide des tailles, financement, livraison, retours, chat, essayage à domicile, panier [V : textes complets de 8 pages].

## Options disponibles

- **Alliages** : Or Jaune 18 carats, Or Blanc 18 carats, Or Rose 18 carats, Platine 950 (pas de 14 carats) [V].
- **Finitions du jonc** : Poli, Brossé, Ciselé [V].
- **Pierre** : « Diamant brillant », non modifiable [V].
- **Modèle** : un seul, nommé « Solitaire ». Les captures montrent pourtant un halo de petites pierres et un corps pavé, avec un maillage à facettes grossières [V : captures `alliage_Platine_d.jpg`, `config_mobile.jpg`].
- **Vue** : « Perspective · Studio », grille au sol, wireframe [V].

## Prix, délais, retours, garanties

- **Prix** : aucun, ni sur le configurateur ni ailleurs (recherche de « ₪ », « € », « $ », « prix » et « מחיר » sans résultat) [V : /sur-mesure].
- **Délais** :
  - création sur mesure 4 à 8 semaines ;
  - transformation et réparation 1 à 4 semaines ;
  - horlogerie 1 à 3 semaines [V : /services].
- **Réponse** : « nous revenons vers vous sous 24 h » [V : /services].
- **Garanties** : à vie sur le sertissage (création) ; 12 mois (transformation) [V : /services].
- **Certificat** : « certificat d'authenticité » remis avec le bijou [V : /sur-mesure, étape 04]. GIA ou IGI non mentionnés [V].
- **Retours, droit d'annulation, conditions de vente** : aucune page. /conditions ne contient que des conditions d'utilisation : propriété intellectuelle, responsabilité, droit israélien, tribunaux de Tel-Aviv [V].
- **Panier, livraison, paiement** : aucun. La vente se conclut en boutique ou sur WhatsApp [I].
- **Synthétique** : non mentionné, en français comme en hébreu [V].

## Confiance et service

- Histoire : « fondée en France en 1954 », trois générations, quatre boutiques en France, « 1000+ créations uniques signées » (chiffre affiché par le site) [V : /notre-maison].
- Personne nommée : Michael Fitoussi, diamantaire, joaillier, horloger [V].
- Avis : 8 avis Google reproduits, de 4 mois à 2 ans, dont un de « Ad Olim Services », et lien vers la fiche Google [V : /temoignages].
- Preuves de fabrication :
  - vidéo `videos/atelier.mp4` sur l'accueil ; photo « michael-atelier » [V : accueil, /notre-maison] ;
  - 7 photos de créations dans la galerie [V : /galerie] ;
  - pas de suivi de commande [V].
- Langues : français, hébreu, anglais. Le site suit la langue du navigateur (anglais en en-US, français en fr-FR) [V]. Devise : aucune.
- Horaires affichés ; vendredi matin seulement, fermé le samedi [V : /contact].
- Accessibilité : menu dédié et déclaration [V].

## Temps d'apparition du visuel principal

Mesure du 15/11, une page à la fois, machine partagée [V : `timing.cjs`] :

| Appareil | LCP | Canvas 3D visible (navigation directe, défilement immédiat) |
|---|---|---|
| Ordinateur | 1,6 s | 1,9 s |
| iPhone 13 (émulé) | 1,5 s | 3,1 s |

Lors de passes parallèles plus chargées, le canvas est apparu entre 4,7 et 16 s [V : a5, a6]. Ces mesures dépendent de la charge de la machine [I].

## Points forts à retenir pour JR Diamond

1. **Un configurateur 3D comme vitrine du savoir-faire, en français**. Il est placé sur l'accueil (« Essayez notre configurateur ») et sur la page sur mesure [V]. JR Diamond vise le même public francophone en Israël, avec une 3D issue du fichier de fabrication [I].
2. **Le bouton wireframe**, qui montre le modèle comme un fichier technique [V]. C'est une idée simple pour « ce que vous voyez existe », à condition d'afficher le vrai maillage CAO [I].
3. **Le parcours en 4 étapes** (écoute, création assistée par ordinateur « jusqu'à votre approbation », atelier, révélation avec certificat), écrit au-dessus du configurateur [V].
4. **La vidéo d'atelier et le nom de l'artisan** en page d'accueil [V] : c'est la preuve de fabrication que JR Diamond prévoit.
5. **Un accès en un geste à WhatsApp** et au rendez-vous en boutique, partout sur le site [V].
6. **Le menu d'accessibilité** et le thème clair ou sombre [V]. La loi israélienne impose l'accessibilité des sites [S] ; à prévoir pour JR Diamond.

## Défauts observés

1. **Aucun prix**, ni « à partir de », ni fourchette [V]. Le configurateur ne sert pas la décision d'achat.
2. **La configuration est perdue** : le message WhatsApp de « Démarrer mon projet » ne reprend ni l'alliage ni la finition [V].
3. **Modèle générique et grossier** : un seul modèle, appelé « Solitaire » alors qu'il a un halo et un corps pavé ; facettes visibles [V : captures]. Pierre non modifiable.
4. **Configurateur non traduit** en hébreu et en anglais (MÉTAL, FINITION, Or Jaune…) alors que le reste du site l'est [V].
5. **Petit canvas sur iPhone** (350 × 221 px) [V].
6. Les boutons **« Demander un devis » et « Trouver ma pierre »** n'ont produit aucun effet visible [V].
7. **Pas de conditions de vente** : ni retours, ni droit d'annulation, ni garantie écrite hors /services [V].
8. Pas de 14 carats, pas de synthétique, pas de taille de doigt [V].

## Limites de l'audit

- Formulaires (« Être rappelé », devis) non remplis ; WhatsApp non ouvert ; « Enregistrer le contact » non actionné.
- Le modèle 3D s'anime sans action : l'effet propre des axes X, Y, Z, du glisser et de la molette n'est pas isolé par la comparaison d'images [I].
- Rendu WebGL en Chromium sans GPU (rendu logiciel) : la qualité visuelle et la fluidité sur un vrai iPhone peuvent différer [I].
- Mesures de temps prises sur une machine partagée avec d'autres navigateurs.

## Sources

- https://lemeraude-paris.com/robots.txt
- https://lemeraude-paris.com/sur-mesure (configurateur, 15/11/2026, ordinateur et iPhone)
- https://lemeraude-paris.com/ · /services · /notre-maison · /galerie · /temoignages · /contact · /conditions
- Cibles relevées : https://wa.me/972525091582 (messages pré-remplis) · tel:+972525091582 · https://www.google.com/maps/dir/?api=1&destination=4+Rehov+Tel+Hai,+Netanya,+Israel
- Captures et journaux (hors dépôt) : `scratchpad/audit/il/lemeraude-paris-netanya/` (`alliage_Platine_d.jpg`, `wireframe_d.jpg`, `config_mobile.jpg`, `cisele_m.jpg`, `a1`–`a8`, `pages.json`)
