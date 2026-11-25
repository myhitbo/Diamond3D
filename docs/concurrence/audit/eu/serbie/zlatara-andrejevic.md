# Audit : Zlatara Andrejević (Belgrade)

- **Site** : https://www.zlatara.net/ (« Andrejević Diamonds », six boutiques à Belgrade, depuis 1934 [V])
- **Pages de départ** : configurateur d'alliances https://www.zlatara.net/konfigurator-burmi/ ; fiche de bague https://www.zlatara.net/proizvodi/verenicki-prsten-kp0550d050/
- **Date** : 15/11/2026. **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13.
- **Statut** : **partiel**. Parcours et image du configurateur vérifiés en entier ; **prix des options non relevé** (l'appel de prix est interdit par `robots.txt`, voir « Limites ») ; panier non visité (`/korpa/` interdit) ; aucun envoi de formulaire.
- Marques : **V** vérifié, **I** inféré, **S** supposé.

## Parcours

| étape | options |
|---|---|
| Départ | « Poručujete » : par, samo njegova, samo njena. « Podešavate » : iste za obe / različite |
| 1 Oblik | 24 profils (6 visibles, « Još oblika (18) ») |
| 2 Mere | largeur, épaisseur, taille de chaque bague (45 à 75 par 0,5, ou « Ne znam još ») |
| 3 Zlato | 12 couleurs d'or, titre 585 / 750, rhodié ou palladium |
| 4 Površina i žleb | 11 finitions, 3 gorges, bords gauche et droit (bez / stepenik / perle) |
| 5 Dijamanti | bague porteuse, 12 modes de sertissage, nombre, taille, position, naturel ou synthétique |
| 6 Gravura | laser gratuit / signature sur demande / aucune ; texte, police, symbole, date |
| 7 Pregled | récapitulatif, date de mariage, « PORUČI IZRADU », « Sačuvajte i probajte u radnji » |

Sur iPhone, un seul bouton d'étape est visible à la fois (« 1 Oblik »), on avance par « Dalje » (les 7 étapes ont été parcourues ainsi) ; barre fixe en bas avec le prix et « PORUČI IZRADU » [V].

## Contrôles vérifiés

« Image » = le cliché de la zone du visuel change (empreinte d'écran différente d'avant le clic). « Prix » = effet sur le prix : **non relevé** pour tout le configurateur (voir Limites), la valeur d'entrée est 118.350 RSD le couple.

| libellé | type | effet observé | prix | état |
|---|---|---|---|---|
| Par / Samo njegova / Samo njena | radio | l'image passe du couple à une seule bague | non relevé | OK [V] |
| Iste za obe / Različite | radio | modifie la portée des réglages suivants (« Podešavate : obe burme / njegova / njena ») | non relevé | OK [V] |
| Profil P1 à P24 (24 radios) | radio | chaque profil change l'image (24 images distinctes sur 24) ; noms : Vera, Zora, Ana, Dana, Tara, Lana, six « kupola » (basse, très basse, moyenne, moyenne fine, modérée, haute), Kupola dubok komfor, Kupola meka unutra, Kupola sa kosinom, Ravna pun komfor, Pun komfor meka ivica, Sočivo tanka ivica, Sočivo, Udubljena bez dijamanata, Skošena komfor, Široko skošena komfor, Široko skošena | non relevé | OK [V] |
| Iste za obe / Različite (mesures) | radio | passe de « obe burme » à « njegova » (largeur et taille séparées) | non relevé | OK [V] |
| Širina − / + | bouton | de 3 à 3,5 mm au clic ; limites atteintes : 2 mm et 9,5 mm ; l'image change | non relevé | OK [V] |
| Debljina − / + | bouton | 1,4 → 1,5 mm ; l'image change | non relevé | OK [V] |
| Sve mere | bouton | déroule d'autres dimensions (compteur « 5 / 12 » lu) | non relevé | partiel : contenu non détaillé |
| Njegova / Njena veličina | liste | 45 à 75 (diamètre en mm affiché) ; « 50,5 » choisi : résumé « vel. 50,5 » | non relevé | OK [V] |
| Vodič za veličinu | bouton | cliqué, aucun panneau détecté | — | **non établi** |
| Boja zlata (12 radios) | radio | image différente pour chacune des 12 : jaune, blanc, rose, blanc palladium, 4 bicolores, 4 tricolores | non relevé | OK [V] |
| Finoća 585 / 750 | radio | 750 désactivé (libellé « nije uz paladijum ») dans l'état testé | non relevé | 750 : désactivé, cause exacte non établie |
| Rodinirano / Sa paladijumom | radio | l'image change ; « paladijum » désactivé pour l'or jaune | non relevé | OK [V] |
| Površina (11 radios) | radio | polirano, mat, ice mat, čekićano, peskirano, četkano poprečno, dijagonalno, grubo, dijamantski mat, kora, čekićano mat ; image différente pour chacune | non relevé | OK [V] |
| Žleb (3) | radio | bez, V, zaobljen ; image différente | non relevé | OK [V] |
| Ivica levo / desno (3+3) | radio | bez, stepenik, perle ; image différente | non relevé | OK [V] |
| Kamen na (njegova / njena) | radio | la pierre passe d'une bague à l'autre ; image change | non relevé | OK [V] |
| Ugradnja (12 radios) | radio | bez, bezel, ravno, pavé, kanal, poprečno, pavé poprečno, zatvoren kanal, slobodno : image change ; « ravno » donne la même image que « bezel » ; « pavé sa strane levo/desno » désactivés pour ce profil | non relevé | OK sauf 2 désactivés [V] |
| Nombre de pierres | nombre 1 à 39 et − / + | présélections trećina / polovina / ceo red (13, 19, 39 sur le profil par défaut ; 14, 21, 43 sur un autre) ; aucun changement d'image visible dans l'état testé | non relevé | partiel [V] |
| Veličina dijamanta | liste | 12 tailles de 0,002 ct (0,8 mm) à 0,15 ct (3,5 mm) ; les grandes marquées « za širu traku » | non relevé | listée, non actionnée |
| Položaj kamena | radio | sredina, levo, desno ; « granica » (limite) désactivé hors bandes bicolores | non relevé | OK ; image identique dans l'état testé |
| Prirodni / Laboratorijski dijamanti | radio | l'image change ; mention « prirodni dijamanti H/Si » dans le récapitulatif | non relevé | OK [V] |
| Grupisanje | case | désactivée | — | désactivée |
| Vrsta gravure | radio | laser (gratuit), « posebna » (signature, sur demande), bez | 0 pour le laser (annoncé) | OK [V] |
| Tekst (30 signes) | champ | le texte apparaît à l'intérieur de la bague (image change) ; limite de 30 lue dans l'attribut | — | OK [V] |
| Police (10 radios) | radio | Klasična, Moderna, Rukopis + 7 autres (Playball, Petit, Petemoss, Oooh, Luxurious, Kaushan, Italianno) ; image change (4 testées) | — | OK [V] |
| Simbol | radio | bez, srce, beskonačno ; image change | — | OK [V] |
| Datum gravure | champ + calendrier | présent (jj.mm.aaaa) | — | non testé en saisie |
| Pogledajte gravuru | bouton | bascule la vue sur l'intérieur gravé | — | OK [V] |
| Ceo prikaz | bouton | revient à la vue d'ensemble | — | OK [V] |
| Glisser sur le visuel (« Prevucite da okrenete ») | geste | le visuel tourne (image change) | — | OK [V] |
| Kopirajte kod konfiguracije | bouton | code du type `AB-7518-RSG0-8MCG-800W` ; l'adresse `?k=` change à chaque option | — | OK ; presse-papiers non lu |
| Pošaljite sebi link | formulaire | champ e-mail + envoi | — | non envoyé |
| 1 à 7 (barre d'étapes) | boutons | navigation libre entre étapes | — | OK [V] |
| Dalje / Nazad | boutons | étape suivante / précédente | — | OK [V] |
| Viber / Telefon +381 63 585 367 | liens | `viber://` avec message prérempli (code et lien) ; `tel:` | — | non ouverts |
| Zakažite probu u radnji | lien | mène à `/termin/?razlog=burme` | — | non ouvert |
| Besplatan merač poštom | formulaire | nom, e-mail, téléphone, date de mariage, adresse | — | non envoyé |
| Glasko (assistant IA) | bouton | non ouvert (conversation) | — | non testé |
| EN | lien | mène à `/en/wedding-band-configurator/` | — | OK (200) |
| PORUČI IZRADU | bouton | ajoute à la commande ; appelle l'API et le panier interdits | — | **non cliqué** (panier interdit par robots.txt) |
| Sačuvajte i probajte u radnji / Imate pitanje? | boutons | enregistrement, contact | — | non cliqués |

## Options disponibles

- **Composition** : couple, lui seul, elle seule ; mêmes réglages ou séparés.
- **Profils (24)** et **dimensions** : largeur 2 à 9,5 mm, épaisseur à partir de 1,4 mm, taille 45 à 75 (pas de 0,5).
- **Or** : jaune, blanc, rose, blanc palladium, 4 combinaisons bicolores, 4 tricolores ; titre 585 (14 k) ou 750 (18 k) ; rhodié ou palladium. Platine : non proposé dans le configurateur, mais vendu ailleurs sur le site (rubrique Burme) [I].
- **Finitions (11)**, **gorges (3)**, **bords (3 par côté)**.
- **Pierres** : 12 modes de sertissage, 1 à 39 pierres, 12 tailles (0,002 à 0,15 ct), position (3), naturel ou synthétique.
- **Gravure** : laser gratuit (30 signes, 10 polices, symbole, date), signature sur demande.
- **Bague de fiançailles** (fiche Kp0550d050) : métal blanc / rose / jaune « po meri », titre 585, carat 0,42 à 0,60 ct (19 valeurs), pureté IF / VVS1 / VVS2 / VS1, couleur D / E / F / G, taille 10 à 24 ou « Ne znam », gravure gratuite, réservation en boutique, ajout au panier [V].

## Prix, délais, retours, garanties

| point | constat | statut |
|---|---|---|
| Prix d'entrée du couple | 118.350 RSD TTC (131.500 barré, −10 % jusqu'au 13/12/2026) ; lui 59.850, elle 58.500 ; masse estimée 2,81 + 2,50 g | V |
| Décomposition du prix | masse et couleur d'or citées dans la FAQ comme facteurs ; aucune ligne métal / façon / pierre | V |
| Prix des options | **non relevé** ; en cas d'échec de l'appel, la page affiche « Cena na upit » (prix sur demande) | V |
| Bague Kp0550d050 | 414.000 RSD en stock (Galerija) ; en fabrication, carat 0,5 ct VS1 F : 413.000 RSD ; plage lue de 326.840 à 527.000 RSD ; IF 455.000, VVS1 443.000, VVS2 431.000, VS1 414.000 ; couleur D 443.000, E 431.000, F 414.000, G 401.000 | V |
| Délai | alliances sur mesure : 2 à 4 semaines (« stiže do 23. 12. 2026 ») ; bagues : 28 jours ou en stock | V |
| Acompte | « Kapara 50 % pri porudžbini, online ili u radnji » ; les conditions de paiement disent que la carte est débitée après la livraison (contradiction à confirmer) | V / I |
| Livraison | gratuite par coursier, TVA comprise ; expédition sous 1 jour ouvré, livraison 6 jours ouvrés au plus (2 à 3 en général) | V |
| Retours | 14 jours à compter de la réception ; **gravé et sur mesure non retournables, sauf réclamation** ; frais de retour à la charge de l'acheteur sauf défaut | V |
| Garanties | première correction de taille offerte la première année (bague) ; correction à vie offerte sur les alliances classiques ; certificat GIA annoncé pour la bague | V |
| Paiement | Visa, Mastercard, Maestro ; 12 mensualités sans intérêt avec Banca Intesa | V |

## Confiance et service

- Boutiques : 6 à Belgrade, essayage, remise en main propre, réservation en boutique [V].
- Contact : téléphone, Viber, assistant IA « Glasko » (bouton sur chaque page), rendez-vous (`/termin/`), mètre-bague gratuit par la poste [V].
- Sceau « Excellent Business » en pied de page ; GIA cité comme certificat des bagues [V].
- Avis clients : aucun sur les pages lues [V]. Preuves de fabrication (photos, vidéos d'atelier, suivi de commande) : non trouvées ; seule mention « atelier propre à Belgrade » [V sur les pages lues].
- Langues : serbe, anglais ; devise RSD [V].
- Libellé du synthétique : « Laboratorijski dijamanti » dans le configurateur ; « lab-grown » dans la marque Luminore [V].

## Points forts à retenir pour JR Diamond

1. **Code de configuration et lien partageable** : `?k=AB-…` change à chaque option, avec un bouton « Kopirajte kod » et un message Viber prérempli (preuve : adresse lue après chaque clic, lien `viber://` dans les contrôles) [V].
2. **Prix d'un choix de pierre lisible sans configurateur** : sur la fiche de bague, chaque carat, pureté et couleur affiche son prix et son délai (« 0,42 ct · 336.920 RSD · 28 dana ») [V].
3. **Vue sur l'intérieur gravé** : bouton « Pogledajte gravuru », 10 polices, symbole, date, l'image montre le texte dans la bague [V].
4. **Date limite visible** : « stiže do 23. 12. 2026 » calculée pour la commande et rappel de la date de mariage dans le récapitulatif [V].
5. **Exception du sur mesure dite avant l'achat** : gravé et sur mesure non retournables, écrit dans les conditions [V].
6. **Mètre-bague gratuit par la poste** et rendez-vous d'essayage proposés à côté de la taille [V].

## Défauts observés

- Le prix de chaque option dépend d'un appel serveur ; s'il échoue, la page affiche « Cena na upit ». Acompte annoncé (50 %) en contradiction apparente avec les conditions (carte débitée après livraison) [V].
- Rendu 2D : images précalculées et canvas (pas de modèle 3D chargé observé) ; aucun lien explicite avec le fichier de fabrication [I].
- Bague : 414.000 RSD en titre contre 413.000 RSD dans la liste des carats pour la même configuration (écart de 1 000 RSD) [V].
- « Vodič za veličinu » ne s'ouvre pas dans mon essai ; « Sve mere » peu explicite [V].
- Le configurateur d'alliances de marque Breuning mène à un site externe (commande en boutique) [V].
- Pas d'avis clients ni de preuve de fabrication sur les pages lues [V].

## Limites de l'audit

- **Écart au `robots.txt`** : `Disallow: /api/` couvre `/api/burme-cena.json` (calcul du prix) et `/api/users/me` (appelé au chargement). Avant d'avoir vu cette règle, deux de mes scripts ont déclenché **un** appel à `/api/burme-cena.json` (après un clic « Belo zlato ») et les appels de chargement de page à `/api/users/me`. Ensuite, toutes les requêtes `/api/` hors `/api/media/file/` ont été **bloquées dans le navigateur** : donc pas de prix par option.
- `/korpa/` interdit : « PORUČI IZRADU » et « Dodaj u korpu » non cliqués ; moyens de paiement finaux, frais, récapitulatif de panier non vus.
- Prix de bague lus sur la page seulement (calcul local) ; les 19 valeurs de carat n'ont pas été toutes sélectionnées une à une (la liste est lue).
- Composants non testés : Glasko, formulaires, calendrier de date, pièces de sertissage sur d'autres profils, deuxième bague (réglages « Različite »).
- Le visuel principal apparaît à 2,5 à 3,8 s sur ordinateur (trois mesures : 2,5 s, 3,0 s, 3,8 s) et 2,8 s en affichage iPhone (première image détectée : 220 px de large) ; sur la fiche de bague : 1,9 s ordinateur, 3,5 s iPhone [V].

## Sources

- https://www.zlatara.net/konfigurator-burmi/ · https://www.zlatara.net/en/wedding-band-configurator/ · https://www.zlatara.net/burme/ · https://www.zlatara.net/burme-po-meri/ · https://www.zlatara.net/proizvodi/verenicki-prsten-kp0550d050/
- https://www.zlatara.net/uslovi-placanja/ · https://www.zlatara.net/reklamacija-ili-vracanje-robe/ · https://www.zlatara.net/kako-kupovati/
- https://www.zlatara.net/robots.txt (lu le 15/11/2026)
