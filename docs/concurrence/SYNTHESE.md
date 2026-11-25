# Synthèse de l'étude de concurrence JR Diamond

Date : 26/11/2026, comme les deux comparaisons vérifiées dont elle est tirée (359 sites, quatre marchés, compléments du 25/11 compris). Remplace la synthèse du 25/11. Seul ce qui a survécu à leur section « Vérification » est repris. Aucune page web rouverte, aucun code modifié.

**Marques.** (V) vérifié dans un audit ou dans le code · (Vc) contenu lu sans visite, site bloqué · (Inv) repris d'un inventaire · [P1] obtenu sur une adresse interdite par robots.txt, jamais compté comme vérifié · (I) inféré · (S) supposé. Un « Qui » sans marque est (V) dans la source citée ; un « État chez nous » est (V), code lu le 25/11 (aucun commit sous `src/` depuis le 24/11). Rangs, priorités, efforts, actions et dépendances sont des jugements (I). « n/N » : décompte de la synthèse d'audit citée ; une addition entre synthèses est (I).
**Renvois.** `P4` = ligne 4 de la [comparaison produit](2026-11-26_comparaison_produit.md) ; `O7` = ligne 7 de la [comparaison offre](2026-11-26_comparaison_offre.md) ; `P§3` = section 3. Les preuves de code (`fichier:ligne`) et les fils de forum y sont cités, pas recopiés ici. « Point n » = message à l'atelier du 24/11 (`docs/atelier/2026-11-24_message.md`).

## 1. L'essentiel

- **Le prix reste l'écart principal** (V) : prix affiché chez 12/12 vendeurs nationaux américains (7 V, 5 Vc), 10/14 sites israéliens (I, addition), 13/16 australiens ; chez nous « Sur devis », moteur prêt mais bloqué par l'atelier (rang 20). Une estimation validée par l'atelier peut en tenir lieu (rang 18) · `O§1`, `P1`.
- **« Ce que vous voyez existe » et « on voit naître son bijou » restent sans équivalent** (V) : aucune 3D présentée comme le fichier de fabrication, aucune fabrication de commande montrée, y compris dans les 36 sites des compléments · `P§3.1`, `P13`.
- **Le prix expliqué reste presque libre** (V) : NANEA (Arménie) seul complet, 7 lignes ; métal et façon détaillés à l'écran par aucun site américain, israélien ni australien · `P3`, `O3`.
- **En Israël, le contact humain est la norme** (I, additions) : WhatsApp 12/14, rendez-vous, rappel ou visio 9/14 ; le rendez-vous à l'atelier passe de P2 à P1 · `P8`, `O19`.
- **Nos conditions de vente ne sont pas écrites** (V, code) : paiement, retour, garantie, livraison ; Diamony les tient sur une page (acompte de 500 ₪, garantie 12 mois, livraison 50 ₪, V) · `O§1`.
- **Sans dépendance** (I) : champ « date souhaitée », bouton de devis fixe sur mobile, libellé « Vues » traduit, champs « budget » et « surprise » ; les variables Vercel n'attendent que le propriétaire · rangs 1 à 4, 24, 25.

## 2. Avantages de la concurrence à retenir

Classement : priorité (P1 avant le lancement en Israël, P2 dans les 90 jours, P3 plus tard), puis effort (S faible, M moyen, L fort), puis dépendance la plus légère. Marchés : États-Unis, Israël, Europe, Australie.

| Rang | Avantage | Qui | Marchés | État chez nous | Action | Effort | Dépend de |
|---|---|---|---|---|---|---|---|
| 1 · P1 | Date souhaitée demandée, date « prête le … » | 12/12 nationaux (7 V, 5 Vc) ; Henry's « Decide later » ; Alpha Gold au paiement ; NANEA « Ready by 2 December » ; Arnold & Co « Ships by Dec 24, 2026 » · `P4`, `O6` | US, IL, EU, AU | partiel : « 14 jours ouvrés » fixe, aucun champ de date | champ « pour quelle date ? » (fiançailles, mariage) ; puis « prête au plus tard le … » (dimanche à jeudi, fêtes) | S | aucun (champ) ; atelier (points 30-31) |
| 2 · P1 | Bouton d'action fixe sur mobile, premier visuel rapide | Keyzar, bouton fixe ; DAZZ 0,59 s, Diamony 0,9 s (une mesure, sans carte graphique) · `P17` | US, IL, EU, AU | non mesuré sur appareil réel ; bouton de devis en fin de récapitulatif | bouton « Demander un devis » fixe ; mesure par `/fr/diagnostic` ; image fixe avant la 3D en P2 | S | aucun ; propriétaire (tests) |
| 3 · P1 | Accessibilité soignée et déclarée | L'Émeraude (menu, déclaration) ; IDC (déclaration) · `P19` | IL | partiel : `aria-label="Vues"` en français dans les trois langues ; aucune déclaration | traduire le libellé ; déclaration en hébreu si l'obligation est confirmée (S) | S | aucun ; avocat |
| 4 · P1 | WhatsApp qui porte la demande ; coordonnées visibles | WhatsApp 12/14 en Israël (I), demande complète 3/14 (DAZZ, Alpha Gold, Diamony, I) ; 10/14 (`EU1b`) ; 0/13 (`USR`), 0/12 (`AU2`) · `P7`, `O17` | IL, EU (US rare) | prêt en attente : message avec référence, configuration, lien ; bouton masqué sans numéro | saisir `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_CONTACT_*` et SMTP dans Vercel ; prix dans le message dès qu'il existe | S | propriétaire |
| 5 · P1 | Rendez-vous, rappel ou visio ; retrait à la Bourse ; livraison assurée chiffrée | 9/14 en Israël (I), dont Moshe Skapa à la Bourse ; retrait chez DAZZ, Daskalo, La Perla, Louisa, IDC ; visio 9/12 nationaux (5 V, 4 Vc) ; retrait 7/12 (`AU2`) · `P8`, `O19`, `O20` | US, IL, EU, AU | absent ; lieu nommé sans adresse ; livraison sans modalité | bouton « voir la bague à l'atelier ou en visio » qui ouvre le devis prérempli ; coursier assuré, coût écrit ; retrait sur rendez-vous | S | atelier (points 39, 41) |
| 6 · P1 | Taille locale dans le parcours, « je ne sais pas », mise à taille offerte | Louisa « 13/53 » israélienne / française, kit remboursé ; Alpha Gold, taille israélienne ; Lavi et Gispan, européenne 44 à 65 ; « taille inconnue » 5/16 (`AU`) · `P5`, `O12` | US, IL, EU, AU | partiel : champ libre ; guide lié en fr et en, pas en hébreu ; mise à taille offerte dans la FAQ seulement | liste israélienne / européenne / américaine (calcul `ringSizeRow`) avec « je ne sais pas » ; phrase « première mise à taille offerte » | S | atelier (plage, point 34) |
| 7 · P1 | Ce que montre l'image, écrit sous l'image | Blue Nile, VRAI ; Alpha Gold « le produit réel peut différer » ; Met · `P9` | US, IL, EU, AU | partiel : source repliée ; retouche des griffes non dite, alors que la FAQ dit « pas redessiné pour le web » | une ligne sous la 3D ; accorder FAQ et retouche | S | atelier (point 26) |
| 8 · P1 | Fiche technique : cotes en mm, poids, poinçon | La Perla, tige de 1,6 mm et poinçon ; Alpha Gold, page ת״י 299 ; IDC 2,92 g ; Arnold & Co 1,22 g · `P10`, `O28` | US, IL, EU, AU | partiel : pierres en mm, diamètre intérieur, poids ± 5 % ; largeur, épaisseur, hauteur absentes (présentes dans `geometry.json`) ; pas de poinçon | afficher largeur, épaisseur, hauteur, tolérance ; titre et poids sur la facture ; poinçon après avis | S | atelier (points 27-28, question 62), avocat |
| 9 · P1 | Photos réelles de bagues finies à côté du rendu | Rare Carat, 10 bagues en 360° ; DovEggs « not renders » ; Manich ; Aharoni, 393 pièces numérotées · `P11` | US, IL (alliance), EU, AU | absent ; teintes « à calibrer » | photo studio et photo portée de ring-001, légendées « photo » ; calibrer les teintes dessus | S | atelier (point 29) |
| 10 · P1 | Artisan nommé, adresse, preuves de la Bourse | Moshe Skapa, carte de membre n° 3976, bureau 1141 ; Daskalo, La Perla (adresse) ; NAGI, Green Lake · `P14`, `O16` | US, IL, EU, AU | partiel : Bourse nommée ; ni artisan, ni adresse, ni société | page « L'atelier » : Yonathan nommé avec son accord, n° de membre, société, adresse, établi filmé | S à M | atelier (point 40), propriétaire, avocat |
| 11 · P1 | Suivi daté ; bague finie montrée avant l'envoi | commande montrée en fabrication : 0 partout ; promis : Knox, Kruse, DovEggs ; SMS d'Alpha Gold ; « Process » générique de Diamony · `P13`, `O14` | US, IL, EU, AU | promis (FAQ), sans outil | message daté par étape (photo, référence `JR-`), vidéo finale avant l'expédition, retard annoncé le jour même ; page privée en P2 (L) | S | atelier (points 32-33) |
| 12 · P1 | Prix garanti pendant une durée | Lyght (2 semaines) ; Alpha Gold ; NANEA · `O5` | US, IL, EU | absent ; 7 jours proposés | date du cours et « prix garanti N jours » sur chaque devis | S | atelier (point 35) |
| 13 · P1 | Pierre exacte prouvée : numéro, inscription laser, vidéo | Louisa, numéro gravé au microscope, au-delà de 1 ct, prix ambigu ; numéro de certificat 0/4 (`IL2`) ; Richters, Watsons, numéro sur la fiche · `P12`, `O13` | US, IL, EU, AU | promis (FAQ), sans emplacement ; certificat dès 0,50 ct seulement | vidéo et inscription avant et après sertissage, numéro sur devis et facture, pour toute pierre, sans supplément ; sous 0,50 ct, mesures et photo ; bloc « votre pierre » en P2 | S à M | atelier (points 23-25) |
| 14 · P1 | Garantie écrite, contenu listé, sans visite obligatoire | Diamony 12 mois, griffes contrôlées à vie ; DAZZ, IDC à vie ; 15/16 à vie (`AU`) · `O11` | US, IL, EU, AU | absent ; 1 an proposé | durée, couverture, exclusions, examen sur photos | S | atelier (point 37), avocat |
| 15 · P1 | Accord écrit avant tout débit ; remboursement si non conforme | Diamony, 500 ₪ à la validation 3D ; IDC 20 % ; acompte 9/16 (`AU`) · `O8` | US, IL, EU, AU | absent, par décision : paiement intégral, fabrication aussitôt | garder le paiement intégral, le demander après l'accord écrit sur la pierre filmée et le modèle ; remboursement écrit | S | propriétaire, atelier |
| 16 · P1 | Retour et annulation écrits, sur-mesure dit | 5/6 (`IL`) ; Alpha Gold, 4 mois aux olim ; Diamony, Daskalo ; 15/16 (`AU`) · `O10` | US, IL, EU, AU | absent : réponse d'attente | publier avant tout paiement, mention dans le configurateur | S après l'avis | avocat, propriétaire |
| 17 · P1 | Pages d'entrée ouvertes aux moteurs | Lavi, page par budget ; Marilisi, guides · `P18` | IL, EU | prêt en attente : `noindex` | jour J : lever `noindex`, accueil, plan du site, redirections permanentes | S | propriétaire (date) |
| 18 · P1 | Estimation « de X à Y ₪ » avant le prix ferme | Diamony « à partir de » ; Reyes, Geraci ; Rosenberg, Guzema ; Anny's · `P2`, `O2` | US, IL, EU, AU | absent ; le moteur sait produire une fourchette | « prix confirmé dans le devis », sur une règle provisoire validée par l'atelier, jamais sans elle | S | atelier |
| 19 · P1 | Prix décomposé en postes | NANEA, 7 lignes dont la marge (`EU5`) ; métal et façon : 0 aux États-Unis, en Israël, en Australie · `P3`, `O3` | US (pierre), IL, EU | prêt, non branché ; la FAQ annonce trois parties, sans le bénéfice | dépliant de 4 à 5 lignes sous le prix ; accorder la FAQ | S après le rang 20 | atelier, propriétaire (marge affichée ou non) |
| 20 · P1 | Prix TTC en ₪ qui suit chaque option, écart sur le bouton | 12/12 nationaux ; 10/14 en Israël (I), dont 4 qui suivent une option ; 13/16 (`AU`) ; DAZZ, 2 650 ₪ contre 21 200 ₪ sur le bouton · `P1`, `O1`, `O4` | US, IL, EU, AU | « Sur devis » ; moteur bloqué sans bénéfice, taux, platine, pierres | « TVA incluse » écrit ; total de la bague, jamais la monture seule ; écart 18 k, platine, naturel sur le bouton | M | atelier (point 36 ; bénéfice, taux, platine, grille) |
| 21 · P1 | Hébreu natif, guides compris | hébreu 5/6 (`IL`), 2/4 (`IL2`) · `P15` | IL | partiel : traduction de l'IA non relue ; `/he/guides` en 404 | relecture native ; trois guides en hébreu : synthétique, taille, kiddouchin | M | propriétaire (relecteur) |
| 22 · P1 | Alliance de kiddouchin : règles, poids, prix, lien pour le rabbin | Haejin (règles et prix, sans poids) ; Lavi, 2,2 g pour 1 210 ₪ (sans règles) ; Ziv-Or, photo au rabbin · `P25`, `O23` | US, IL, EU | partiel : guide fr et en ; ni modèle, ni page, ni hébreu | page en hébreu : garanties de l'atelier « à faire valider par votre rabbin », poids et prix au gramme, « envoyer à mon rabbin », date du mariage ; 3D dès le fichier | M | atelier (points 43-44, fichier, poids), propriétaire |
| 23 · P1 | Paiement en plusieurs fois, moyens locaux près du prix | Shiree Odiz 10 fois et Bit ; Daskalo 12 sans intérêt ; La Perla 24 ; 6/16 (`AU`) · `O9` | US, IL, EU, AU | absent : « seront indiqués ici » | Grow, 1 à 12 fois sous le prix ; Bit pour un acompte ou une alliance | L | propriétaire (compte prestataire) |
| 24 · P2 | Case « c'est une surprise », contact unique | Courbet « Masquer le prix » ; Holc ; Larsen · `P21` | EU, AU | absent | case dans le devis | S | aucun |
| 25 · P2 | Budget facultatif | Henry's ; Lavi ; Brilliant · `P22`, `O25` | US, IL, EU | absent (message libre) | champ facultatif dans le devis | S | aucun |
| 26 · P2 | Engagement écrit si la date glisse (express refusé) | Arnold & Co, 2 semaines contre +500 AUD ; Bellman's · `O7` | US, EU, AU | absent ; pas d'express, par décision | prévenir le jour même, écrire la contrepartie | S | propriétaire, atelier (point 33) |
| 27 · P2 | Maquette avant la fonte | Bellman's, imprimée gratuitement ; 5/13 (`USR`) ; aucun en Israël · `O15`, `P28` | US, EU, AU | absent ; résine prévue dans la procédure | photo de la résine dans le suivi ; essai à Ramat Gan sur demande | S | atelier (point 42) |
| 28 · P2 | Après-vente chiffré : contrôle, rhodiage | Diamony, griffes gratuites à vie ; IDC ; Arnold & Co · `O21` | US, IL, EU, AU | partiel, « À confirmer » | contrôle annuel gratuit ; prix du rhodiage | S | atelier (point 38) |
| 29 · P2 | Transformation : pesée, bilan matière, attestation | Little Treasury, 5 étapes ; Panos ; GH ; L'Émeraude seule en Israël · `P26`, `O24` | US, IL, EU, AU | fait, en brouillon ; ni poids ni mode de remise | protocole écrit : pesée filmée, bilan, restitution, attestation | S | atelier (point 45, questions 57-60) |
| 30 · P2 | Avis publics | Daskalo 250+ Google ; Diamony ≈ 26 ; Billig 579 · `O22` | US, IL, EU, AU | absent | fiche Google, avis après chaque livraison, jamais filtrés | S | propriétaire, atelier |
| 31 · P2 | Gravure dans le parcours, aperçu en hébreu | Shiree Odiz, 15 caractères ; Ardigold, 19 polices ; Andrejević, aperçu · `P20` | US, IL, EU, AU | absent du parcours | texte, alphabet, police, aperçu ; jamais par défaut sur l'alliance de kiddouchin | M | atelier (point 46), avocat |
| 32 · P2 | Pierres présélectionnées, avec la raison | Hitched « Our three picks » ; Lion, F VS fixé · `P27` | US, EU, AU | sans objet : une pierre | 2 ou 3 pierres filmées par configuration | M | atelier (grille) |
| 33 · P2 | Image qui suit forme et carat ; essayage sur la main | Angara ; Andrejević ; Blue Nile, Cullen (main) · `P23`, `P24` | US, IL (annoncé), EU, AU | une forme, un calibre, et c'est écrit | ne rien générer ; une forme ou un carat seulement avec un fichier ; photo portée (rang 9) avant toute AR (P3) | L | atelier (fichiers) |
| 34 · P3 | Russe pour les olim russophones | La Perla, Louisa, Moshe Skapa, IDC, IDT ; traductions fautives 4/4 (`ILru`) · `P16`, `O29` | IL | absent | pas avant le lancement ; d'abord un interlocuteur russophone sur WhatsApp | M à L | propriétaire, avocat (terme) |
| 35 · P3 | Reprise ou échange du diamant | Haejin, 70 % du synthétique ; IDC · `O26` | US, IL, EU | absent | rien promettre sans calcul | M | propriétaire, atelier |
| 36 · P3 | Export : droits et taxes compris | Metal Urges, DDP vers une vingtaine de pays dont la France · `O27` | US, IL, EU, AU | absent, hors lancement | France : droits acquittés, aucune sous-déclaration | L | propriétaire, avocat |
| fait | Configuration dans l'adresse, partage, référence | DAZZ, Diamony ; Schubach, Amidon · `P6`, `O18` | US, IL, EU, AU | fait (24/11) | garder ; pas d'« indice » au partenaire | — | aucun |

## 3. Par marché

**États-Unis** (216 sites)
- Prix partout : 12/12 nationaux (7 V, 5 Vc), recalcul à chaque option dans tous les groupes d'États ; garantie « à vie » 12/12 nationaux ; financement 8/13 (`USR`) · `O1`, `O11`, `O9`.
- 3D rare : 1/13 dans `USR` (Schubach) ; JewelerOS n'a montré sa 3D que de 0/6 à 3/10 selon le groupe, cause non tranchée ; anglais seul 13/13 · `P§3.1`, `P§3.2`, `P§3.5`.
- WhatsApp rare (0/13) ; maquette ou cire 5/13 ; seule page dédiée à l'alliance de kiddouchin : Haejin (V) · `P7`, `O15`, `O23`.
- Nos 14 jours : avantage relatif, au moins huit sites aussi courts (I) ; les « n/N » des groupes d'États incluent des [P1] : majorants · `P§3.9`, `O` en tête.

**Israël** (14 sites, marché du lancement)
- Prix visible 10/14, dont 4 qui suivent une option (I) ; métal et façon détaillés par aucun (V) : le prix expliqué y est libre (I) · `P1`, `O§1`.
- 3D en ligne 1/6 (L'Émeraude, modèle générique), 0/8 dans les compléments (V) ; contact humain : WhatsApp 12/14, rendez-vous ou visio 9/14 (I) · `P§3.1`, `P8`.
- Acompte : Diamony 500 ₪, IDC 20 % (V) ; preuve de la pierre : Louisa seule, au-delà de 1 ct ; délai sans avantage, 2 à 21 jours ouvrés selon le site (V) · `O8`, `O13`, `P§3.9`.
- « מעבדה » partout (V) ; russe chez 5 sites, fautif 4/4 (V) ; tailles européennes chez Lavi et Gispan, israélienne chez Alpha Gold (V) · `O§3`, `P16`, `O12`.

**Europe** (99 sites)
- Seul prix décomposé complet : NANEA (Arménie), 7 lignes ; estimations « préliminaires » chez Rosenberg, Ardigold, Guzema (V) · `P3`, `P2`.
- WhatsApp 10/14 (`EU1b`) ; financement 13/20 (`EU2`, `EU4`) ; retours qui citent l'article de loi, retour même gravé chez Lovely Rings et Rosenberg (V) · `P7`, `O9`, `O10`.
- À éviter : « cultivé » et « de laboratoire » en français (Courbet, Beldiamond) ; prix barré −50 % (Aquamarina) (V) · `O§4`.
- Délai sans avantage ; France : aucune offre d'alliance de kiddouchin ; Liechtenstein sans site pertinent (V) · `P§3.9`, `O23`, `P§5`.

**Australie** (30 sites)
- Prix qui suit au moins une option 13/16, garantie à vie 15/16, retours publiés 15/16 (V, hors VYOR [P1]) · `O§1`, `O11`, `O10`.
- Délai : avantage net, 0/16 à 14 jours en standard ; Arnold & Co vend 2 semaines contre +500 AUD (V) · `O§3`, `O7`.
- WhatsApp 0/12, anglais seul 12/12, retrait en boutique 7/12 (`AU2`, V) · `P7`, `P§3.5`, `O20`.
- Prix barrés fréquents (Arnold & Co −50 %, Watsons −43 %, Hoskings) ; image figée au changement de métal chez 3/12 (+1) (V) · `O§3`, `P§3.3`.

## 4. Nos avantages à défendre

- **La 3D est la pièce** (V) : modèle tiré de `Ring.3dm`, fichier et logiciel affichés ; aucune synthèse ne relève une 3D présentée comme fichier de fabrication ; les plus proches envoient une 3D pour validation (Diamony contre 500 ₪, IDT, Lavi). Réserve : retouche des griffes à dire (rang 7) · `P§3.1`.
- **Une 3D qui ne dépend de personne** (V) : repli sans WebGL testé ; échecs de JewelerOS et GemFind, cause non tranchée (S) · `P§3.2`.
- **L'image suit le choix ou dit qu'elle ne le suit pas** (V) : contradictions chez 3/4 (`IL2`), 4/6 (`IL`). Réserve : teintes non calibrées · `P§3.3`.
- **Prix expliqué et fabrication montrée** : 0 décomposition métal et façon hors NANEA, 0 fabrication montrée (V) ; avantage promis, pas tenu, qui dépend de l'atelier (I) · `P§3.6`, `O§3`.
- **Pierre filmée pour toute pierre, sans supplément** (promis, `O§3`) contre Louisa, au-delà de 1 ct seulement (V). Réserve : pas de certificat sous 0,50 ct.
- **Ni compte ni coordonnées pour voir, enregistrer, partager** (V) ; **trois langues dont l'hébreu** : aucun des 14 sites israéliens ne réunit hébreu, français et anglais (V ; hébreu non relu) · `P§3.4`, `P§3.5`.
- **Libellés et engagements propres** (V) : « synthétique » en français (en anglais « Lab-grown », comme les autres), ni promotion ni prix barré, chaque règle écrite une fois, provisoires marqués · `P§3.7`, `O§3`.
- **Bijou de famille en ligne, photos comprises** (V) : aucun en ligne dans `USR`, 0/12 en ligne (`AU2`) ; exception GH (Europe) · `P§3.8`. **14 jours** : net en Australie, relatif aux États-Unis, nul en Israël et en Europe · `P§3.9`.
- Ne sont plus des avantages : poids du métal affiché, 3D ou CAO soumise avant fabrication (13/13 dans `USR`), lien de configuration (V) · `O§3`, `P§3`.

## 5. À ne pas copier

- Image, libellé ou option qui contredit le choix ou ne change rien : Diamony « 14K לבן » avec l'or jaune choisi, Billig, UD (120 variantes au même prix) · `P§4`.
- Images générées par IA, 3D générique ou louée (Solomon, Bonnot, L'Émeraude, GemFind) : interdit par la promesse · `P§4`, `O§4`.
- Coordonnées exigées avant de voir ou de chiffrer (JewelerOS, Solomon ; quiz de Bellman's et Billig) · `P§4`.
- Urgence, faux stock, prix barré permanent (Solomon « Hurry! », Daskalo −30 à −40 %, Hoskings « peut-être sans vente ») · `P§4`, `O§4`.
- Prix de la monture présenté comme celui de la bague (6/13 dans `USR`) ; prix caché derrière WhatsApp ou selon le pays (La Perla, IDC) · `P§4`, `O§4`.
- Pierre « équivalente » de remplacement (Moni's, Kate & Kole) ; preuve de la pierre réservée ou vendue à part (Louisa) ; certificat maison (Lavi, Alpha Gold, Daskalo) · `O§4`.
- Garantie « à vie » soumise à visite ; retour vidé par les exclusions ou payé en avoir ; acompte non remboursable annoncé tard (Spicer Greene) · `O§4`.
- « Laboratoire » ou « cultivé » en français (Courbet, Beldiamond) : décret 2002-65 ; règles contradictoires, gabarits non remplis, version linguistique incomplète (Daskalo, Cardin, IDT, Louisa) · `P§4`, `O§4`.
- Gravure sur une alliance annoncée « sans gravure », « casher » sans rabbin (Haejin, `KID`) ; traceurs avant consentement (Lenox) ; sous-déclaration en douane · `P§4`, `O§4`.

## 6. Décisions attendues

**Du propriétaire**
- Saisir dans Vercel WhatsApp, téléphone, e-mail et SMTP (rang 4) ; ouvrir le compte de paiement (rang 23) ; faire les tests sur appareils réels (rang 2) ; fixer le jour du lancement (rang 17).
- Trouver un relecteur natif de l'hébreu (rang 21) et un rabbin relecteur pour la page de kiddouchin (rang 22) ; dire si la marge est une ligne du prix (rang 19) ; choisir quand demander le paiement intégral (rang 15).
- Envoyer le message du 24/11 (points 23 à 46), avec celui du 14/11 s'il est resté sans réponse (CLAUDE.md).

**De l'atelier** (message du 24/11)
- Bénéfice, taux de change, platine, grille des pierres, écarts par option (point 36) : débloquent les rangs 18 à 20 ; à défaut, une règle provisoire pour l'estimation.
- Pierre et certificat (23-25), ligne sous la 3D et retouche (26), cotes et largeur (27-28), photos de ring-001 (29), date (30-31), suivi et retard (32-33), mise à taille (34), prix garanti (35).
- Garantie (37), après-vente (38), livraison et retrait (39), être nommé (40), rendez-vous (41), maquette (42), kiddouchin (43-44, fichier, poids), transformation (45 ; questions 57-60), gravure (46), poinçon (question 62).

**De l'avocat** (`docs/juridique/DOSSIER_AVOCAT_IL.md`)
- Exception du sur-mesure au droit d'annulation, délai des olim (Alpha Gold donne 4 mois, V, `O10`), textes de la garantie et du retour (rangs 14 à 16).
- Poinçon (question 10), termes hébreu et anglais du synthétique (question 11), terme russe, mentions d'identification du vendeur, déclaration d'accessibilité (obligation supposée, S), gravure, traceurs si une mesure d'audience est ajoutée.

**Écarts entre décisions prises et attentes relevées** (signalés, non rediscutés)
- « Sur devis » face à 10/14 sites israéliens à prix affiché (I) ; paiement intégral face aux acomptes de Diamony et IDC (V) et à la peur de payer avant de voir (forums, I) · `P§4`, `O8`.
- 14 jours sans express face à l'express vendu en Australie (V) ; anneau d'environ 1,6 mm (I, `geometry.json`) contre 1,8 mm conseillés sur les forums (V, `Fo01`) · `P§4`.
- Pas d'argent alors que Y&R vend une alliance de kiddouchin en argent à 280 ₪ (V) ; alliance calculée à 1 811 à 1 991 ₪ TTC (I, taux supposé de 3,7, S) contre 1 210 ₪ chez Lavi (V) ; garantie d'un an proposée contre « à vie » chez DAZZ et IDC (V) · `P§4`, `O23`, `O11`.

## 7. Couverture et limites

- **Audité** (V par synthèse, total I) : 359 sites, États-Unis 216, Israël 14, Europe 99, Australie 30 ; 348 ou 349 peuvent porter un fait vérifié, selon que Sabghi est compté parmi les [P1] (I) ; 10 rapports de forum ; alliance de kiddouchin à part, 6 vendeurs américains vérifiés, sous la cible de 8 à 12 · `P§5`, `O§5`, `KID` §7.
- **Audits partiels pour la grande majorité** (V) : panier interdit, aucun paiement, chat, WhatsApp ni formulaire ouvert, Chromium sans carte graphique, iPhone émulé, une mesure de temps, soldes de fin novembre ; IDC lu depuis l'étranger, AR de Diamony non testé · `P§5`, `O§5`.
- **Bloqué** (V) : 5 vendeurs nationaux (Ritani, Brilliant Earth, Do Amore, With Clarity, Grown Brilliance, contenu Vc), environ 14 sites des États (I, 23 moins 9 réaudités dans `USR`), EverettBrookes (`AU`) ; illisibles : Danforth, Rasmussen (`US10`), Royalty (`IL`). Écartés en Israël : Baltinester, uDiamonds, Fuzailov, Divo (robots.txt), iLab, I.P. Diamonds, Ka Gold, Amberjack (défi ou 403), Kladshop (injoignable). Kiddouchin : Judaica WebStore, Israel-Catalog, Celinni, Mohedano, Michèle T, mariages.net · `P§5`, `O§5`.
- **Pas encore audité** : Eli Paz (« non audité » ou « illisible » selon la source, non tranché) et les candidats israéliens XLAB, Joolme, Levy's, Rozenbaum, Inbar, Danny Eliav, Berman ; recherche en hébreu et en russe faible ; référencement et vitesse sur appareil réel non mesurés ; blocages attribués au mandataire de la session encore (S) en `AU` et `US04` · `P§5`, `O§5`.
- **Écarts à robots.txt notés le 16/11** (V) : Hasolidit (forum, 4 requêtes par erreur, `Fo05` « Vérification ») ; Keyzar (écrans interdits, constats [P1]) ; panier d'Angara (affiché une fois) ; aussi un clic chez Clean Origin, une page de tri chez Beldiamond ; extraits de Grown Brilliance lus dans les résultats de recherche, jamais chargés · [comparaison produit du 16/11](2026-11-16_comparaison_produit.md) §5.
- **[P1] des synthèses, jamais comptés comme vérifiés** : rapports entiers d'Apex, Noe's, Royal Jewelers, Rumanoff's, Hamzare, Zlatara AS, DiamondJools, VYOR, USA Jewels, Alloy et Sabghi (conservé par décision du 24/11) ; constructeurs de Lenox (mesh3d) et de Spicer Greene ; Baltinester (`KID`) ; parties de Keyzar, Rare Carat, deBebians, Harry K, Aucoin Hart ; paniers de Doland, Debbie's, RHHJ, Met, Jewelbox. Aucun rang n'en dépend ; les décomptes de `US01` à `US10` restent des majorants · `P§5`, `O§5`.
- **Vérification** : environ 430 affirmations contrôlées côté produit (30 corrigées, 3 retirées) et 300 côté offre (27 corrigées, 1 retirée, 1 ajoutée) ; aucune priorité n'a changé. Restent incertains : vidéo de Louisa (gratuite ou payante), cause des échecs JewelerOS et GemFind, débit de Rare Carat (`O8`), conditions de Diamony, largeur de 1,6 mm · « Vérification » de `P` et `O`.
- **Forums** : nombres de fils, pas des mesures ; presque aucun fil ne parle d'un configurateur, du russe ni de la vitesse : attentes faibles ou inférées pour les rangs 2, 3, 17, 25 et le partage · `P§5`.

## 8. Rapports

- Comparaisons du 26/11 : [produit et expérience](2026-11-26_comparaison_produit.md) · [offre et confiance](2026-11-26_comparaison_offre.md) ; du 25/11 : [produit](2026-11-25_comparaison_produit.md) · [offre](2026-11-25_comparaison_offre.md) ; du 16/11 : [produit](2026-11-16_comparaison_produit.md) · [offre](2026-11-16_comparaison_offre.md). Exploration : [États-Unis](2026-11-15_etats-unis.md) · [Israël](2026-11-15_israel.md) · [Europe](2026-11-15_europe.md) · [Australie](2026-11-15_australie.md).
- Synthèses États-Unis : [nationaux 1](audit/us/SYNTHESE_us-nat-1.md) · [nationaux 2](audit/us/SYNTHESE_us-nat-2.md) · [01](audit/us/SYNTHESE_us-01.md) · [02](audit/us/SYNTHESE_us-02.md) · [03](audit/us/SYNTHESE_us-03.md) · [04](audit/us/SYNTHESE_us-04.md) · [05](audit/us/SYNTHESE_us-05.md) · [06](audit/us/SYNTHESE_us-06.md) · [07](audit/us/SYNTHESE_us-07.md) · [08](audit/us/SYNTHESE_us-08.md) · [09](audit/us/SYNTHESE_us-09.md) · [10](audit/us/SYNTHESE_us-10.md) · [reprise](audit/us/SYNTHESE_us-reprise.md).
- Synthèses Israël : [1](audit/il/SYNTHESE_il.md) · [2](audit/il/SYNTHESE_il-2.md) · [russophone](audit/il/SYNTHESE_il-ru.md) ; Europe : [1b](audit/eu/SYNTHESE_eu-1b.md) · [2](audit/eu/SYNTHESE_eu-2.md) · [3](audit/eu/SYNTHESE_eu-3.md) · [4](audit/eu/SYNTHESE_eu-4.md) · [5](audit/eu/SYNTHESE_eu-5.md) · [6](audit/eu/SYNTHESE_eu-6.md) · [6b](audit/eu/SYNTHESE_eu-6b.md) ; Australie : [1](audit/au/SYNTHESE_au.md) · [2](audit/au/SYNTHESE_au-2.md).
- Alliance de kiddouchin : [synthèse](kiddouchin/SYNTHESE.md) · [États-Unis](kiddouchin/2026-11-25_us.md) · [Israël](kiddouchin/2026-11-25_il.md) · [France](kiddouchin/2026-11-25_fr.md).
- Rapports par site et inventaires : [États-Unis](audit/us/) (dont [vendeurs nationaux](audit/us/vendeurs-nationaux/)) · [Israël](audit/il/) · [Europe](audit/eu/) (dont [France](audit/eu/france/), [Belgique](audit/eu/belgique/)) · [Australie](audit/au/).
- Forums : [dossier `forums/`](forums/), 10 rapports (01 à 04 États-Unis, 05 et 06 Israël, 07 France, 08 Europe hors France, 09 Australie, 10 sur-mesure).
