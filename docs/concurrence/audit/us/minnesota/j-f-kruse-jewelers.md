# Audit : J.F. Kruse Jewelers (St. Cloud, Minnesota)

- **Site** : J.F. Kruse Jewelers, https://store.jfkrusejewelers.com/ (www.jfkrusejewelers.com y redirige)
- **Page de départ** : https://store.jfkrusejewelers.com/custom-jewelry-design-twin-cities
- **Date** : 15/11/2026 (audit repris le 24/11/2026)
- **Appareils** : Chromium ordinateur 1366×900 ; affichage iPhone 13
- **Statut** : **partiel**. Pas de configurateur : le sur-mesure se fait par consultation. Page de départ lue en entier et FAQ dépliée ; pages catalogue (`/engagement-rings/`) et panier non ouvertes car la session a refusé la dernière commande de navigation.

Marquage : [V] vérifié ; [I] inféré ; [S] supposé.

## Parcours

| Étape | Options |
| --- | --- |
| 1. Page de départ | « Book a Free Virtual Consult », appel `(320) 345-3267`, SMS `(320) 208-2813` avec photo d'inspiration [V] |
| 2. Consultation gratuite 30 min | Calendly intégré : téléphone (par défaut), boutique St. Cloud ; vidéo à noter en commentaire [V] |
| 3. Dessin ou 3D | Croquis ou conception 3D envoyés pour validation, modifications libres [V] |
| 4. Modèle en cire | Photos et vidéo, ou essai sur place [V] |
| 5. Fabrication | Fonte, sertissage, polissage dans l'atelier ; « 3–4 weeks » [V] |
| 6. Remise | Expédition assurée, remise en main propre « white-glove », ou retrait à St. Cloud [V] |

## Contrôles vérifiés

Ordinateur : 34 contrôles relevés ; iPhone : 39. Aucun champ de formulaire sur la page (le formulaire est dans l'iframe Calendly, non rempli).

| Libellé | Type | Effet observé | Prix | État |
| --- | --- | --- | --- | --- |
| ENGAGEMENT & BRIDAL / JEWELRY & GIFTS / CUSTOM DESIGN / ABOUT / SERVICES | liens | Mènent à `/engagement-rings/`, `/jewelry-gifts/`, `/custom-jewelry-design/`, `/company/`, `/services/` | – | relevés, non suivis |
| MAKE AN APPOINTMENT (en-tête et pied) | lien ancre | Défile jusqu'à `#appointment` | – | relevé |
| Book a Free Virtual Consult (×2), Start With a Free Consult, Book a free design consult | liens ancre | Défilent jusqu'à `#appointment` (calendrier) | gratuit | relevés |
| call (320) 345-3267 | lien `tel:` | Appel | – | non testé |
| text us a photo of your idea / (320) 208-2813 | lien `sms:` | Ouvre l'application SMS (aucune donnée envoyée) | – | non testé |
| Meet Melissa — 2 min | button | **Actionné** : charge une vidéo YouTube (`youtube-nocookie.com/embed/B51rviqI1Ec`, lecture automatique) ; pas de boîte de dialogue [V] | – | fonctionne |
| Calendrier « Loading the calendar… » | iframe | Charge Calendly (`custom-design-consultation`, 30 min) ; non rempli | gratuit | chargé |
| Open the calendar in a new tab | lien | Mène à calendly.com | – | non suivi |
| Get Directions | lien | Google Maps, 110 Waite Ave S | – | non suivi |
| Dix questions de la FAQ | accordéons | **Actionnés** : chacune s'ouvre et affiche sa réponse (voir « Prix, délais ») | – | fonctionnent |
| See more of our custom work / Engagement rings & bridal | liens | `/custom-jewelry-design/`, `/engagement-rings/` | – | non suivis |
| Icônes compte, liste de souhaits, panier | liens | `account/login/?next=/account/wish-list/`, `/account/login/`, `www.jfkrusejewelers.com/cart/` | – | non suivis (connexion et panier non ouverts) |
| Réseaux : Facebook, Instagram, Pinterest, YouTube, TikTok, LinkedIn | liens | Relevés | – | non suivis |
| Galerie « A few pieces our goldsmiths have made » (6 images décrites) | images | Photos de pièces finies (poire, marquise et émeraudes, rubis, topaze…) [V] | – | vue sur capture |

Non testés : essayage, chat (aucun widget de chat relevé), partage, comparaison, filtres, configuration : absents de cette page.

## Options disponibles

- **Modes de contact** : téléphone, vidéo (à demander), SMS avec photo, boutique.
- **Quatre formules de projet** : entièrement virtuelle, avec une visite pour essayer la cire, visite pour le dévoilement final, ou tout en boutique.
- **Livraison** : expédition assurée (Twin Cities), remise en main propre, retrait à St. Cloud.
- **Pierres et métaux** : non listés sur cette page ; [inv.] diamants naturels, synthétiques, à pureté améliorée, « Diamond from the air » ; jusqu'à 30 % (FAQ bagues) ou 50 % (cette page) du métal d'un bijou existant réutilisable [V : écart entre les deux pages].

## Prix, délais, retours, garanties

- [V] Prix : « Design is free… Labor on most custom engagement rings starts around $695, plus metal and stones, and we design to your budget » ; « Usually not » plus cher que le prêt-à-porter. Pas de prix catalogue sur cette page, pas de configurateur de prix.
- [V] Délai : « about 3–4 weeks from first sketch to final polish » ; on peut planifier à rebours d'une date. [inv.] La page des bagues annonce « three to six weeks ».
- [V] Acompte : « small upfront deposit » une fois le projet lancé ; montant non indiqué. Aucune obligation d'achat après la consultation.
- [V] « Love it or we remake it » : garantie de satisfaction à 100 % pour le sur-mesure (« remake it, free ») ; garantie à vie gratuite ; financement Synchrony et Wells Fargo.
- Retours : pas de politique chiffrée en jours sur cette page. Frais de livraison : non indiqués.

## Confiance et service

- [V] « 4.9 from 458 Google reviews » (affirmation du site, non recoupée). Entreprise familiale depuis 2000 ; fondateur gemmologue certifié, propriétaire Melissa Kruse-Kelley, GIA Graduate Gemologist (affirmations du site).
- [V] Atelier : « designed, cast, set and polished by our goldsmiths. It doesn't get sent out to a factory ». Pas de commission pour le personnel.
- [V] Preuves de fabrication : photos et vidéos du modèle en cire envoyées avant la fonte ; ni galerie d'étapes ni suivi en ligne.
- [V] Transformation de bijoux de famille : « Heirloom redesign » proposée, photos envoyées d'abord.
- Langue : anglais ; devise : dollar. Certificats : non évoqués sur cette page. Libellé synthétique : non présent ici.

## Points forts à retenir pour JR Diamond

1. **Prix du sur-mesure expliqué en une phrase** (« labor starts around $695, plus metal and stones »). Preuve : texte de la page et FAQ « Does custom cost more? ».
2. **Fabrication montrée avant la fonte** : approbation sur photos et vidéo du modèle en cire, « Nothing gets cast in gold until you're happy ». Preuve : FAQ « How will I see my design before it's made? ».
3. **Quatre formules de présence** (de 100 % à distance à 100 % en boutique) plus trois modes de remise : réduit la friction pour un client lointain.
4. **Vidéo de présentation de la propriétaire** (2 min, chargée au clic) et calendrier de réservation intégré.
5. **« Plan backward » depuis une date** (proposition, mariage) et acompte annoncé : proche du besoin de la kiddouchin.
6. **Page dédiée à la transformation de bijoux de famille** avec réutilisation du métal.

## Défauts observés

- Aucun configurateur ni 3D interactive : l'image n'est montrée qu'après consultation.
- Pas de prix de bague fini ; « starts around » seulement.
- Incohérences : 3–4 semaines contre 3 à 6 ; 30 % ou 50 % de l'or réutilisable selon la page.
- Domaines mélangés : `store.` et `www.` (le panier et les comptes sont sur `www.`).
- Aucune politique de retour ni de livraison chiffrée sur la page.

## Limites de l'audit

- **Temps d'apparition du visuel principal** (premier visuel affiché, domcontentloaded + image > 200 px) : **866 ms sur ordinateur, 780 ms en affichage iPhone** [V, une mesure chacun, réseau du bac à sable].
- Catalogue `/engagement-rings/`, page `/custom-jewelry-design/`, services, panier `www.jfkrusejewelers.com/cart/` : non ouverts (la dernière commande navigateur a été refusée par la session ; je ne l'ai pas contournée). robots.txt autorise ces pages, mais je n'ai pas pu les lire.
- Aucun formulaire, calendrier ni chat rempli ou ouvert. La liste des cadres de l'iframe Calendly n'a pas été lue.
- Les avis (458, 4,9) ne sont pas recoupés.

## Sources

- https://store.jfkrusejewelers.com/custom-jewelry-design-twin-cities (page lue, FAQ dépliée, vidéo cliquée, 15/11 et 24/11/2026)
- https://store.jfkrusejewelers.com/engagement-rings/ (via `INVENTAIRE.md`, explorateur précédent)
- `docs/concurrence/audit/us/minnesota/INVENTAIRE.md`
- robots.txt : seul `/wp-admin/` interdit [inv.] ; contrôle `robots.cjs` : pages de départ et `/cart` autorisées
