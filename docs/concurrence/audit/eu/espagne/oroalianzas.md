# Audit : OroAlianzas (alliances de mariage, Espagne)

- **Site** : OroAlianzas, société Millán Tudela S.L. (CIF B85374585), C/ Juan Muñoz 28, Leganés (Madrid). Source : https://oroalianzas.es/terminos-y-condiciones/ (V).
- **Adresse de départ** : https://oroalianzas.es/configurador-alianzas-boda/
- **Date** : 15/11/2026 (date du lot). Contrôles faits le 24/11/2026.
- **Appareils** : Chromium ordinateur 1366 x 900 ; Chromium en affichage iPhone 13.
- **Statut** : **partiel**. Le configurateur est parcouru de bout en bout jusqu'au résumé (7 étapes). Le panier n'est pas ouvert : `/carrito/`, `/cart/` et `add-to-cart` sont interdits par robots.txt (V : https://oroalianzas.es/robots.txt, vérifié avec l'outil), donc « Ajouter au panier » n'a pas été actionné.
- Marques : V vérifié, I inféré, S supposé. Prix en euros TTC tels qu'affichés.

## Parcours

Le configurateur est un assistant en 7 étapes, avec flèches « ‹ › » et un menu « n de 7 ». Une seule étape est visible à la fois (V).

| Étape | Options |
|---|---|
| 1 Perfil | 21 profils en 2 familles (« Clásicas » : Clásica, Suave, Bisel, Pura, Plano ; « Elegance » : Línea, Lateral, Dúo, Dúo suave, Diagonal, Línea suave, Lateral suave, Diagonal suave, Escalón plano, Escalón curvo, Doble escalón, Doble lateral, Lateral plano, Lateral curvo, Central, Central plano) |
| 2 Metal | Titre : 9 k (375) ou 18 k (750). Couleurs de l'alliance : un, deux ou trois. Couleur de l'or : jaune, blanc, rose. Ligne ou canal central : Lisa, Línea fina, Canal cóncavo, Canal recto |
| 3 Medidas | Taille de chaque alliance (liste 6 à 36), largeur (1,8 à 6 mm), épaisseur (0,85 à 1,7 mm), profil de l'intérieur (Plano ou Confort), bouton « ¿Necesitas ayuda con la talla? » |
| 4 Acabado | Un, deux ou trois zones ; finitions : Brillo, Satinado, Diamantado, Lateral seda, Lateral fuerte |
| 5 Diamante | Par alliance : sans diamant ou avec diamants ; « Cambiar grosor » |
| 6 Grabado | Intérieur : Clásico (sans coût), Con tu letra, Compartido, Especial ; deux champs de texte ; symboles ♥ ∞ & · ★ ✝ et « Más símbolos » ; 9 polices (Romana, Sencilla, Palo seco, Cursiva, Manuscrita, Elegante, A mano, Redondeada, Máquina) |
| 7 Resumen | Une carte par alliance, bouton « Elegir tallas », « Ver condiciones », « Guardar este diseño en favoritos », « Compartir », « Añadir al carrito » |

Les deux alliances sont configurables séparément (onglets « Alianza 1 » / « Alianza 2 ») ou ensemble (interrupteur « Mismo diseño en ambas ») (V).

## Contrôles vérifiés

Prix : total de la paire affiché en bas du configurateur. Base : 9 k jaune, 4 mm, profil Clásica, tailles 8 et 14 = **542 €** (Alianza 1 : 255 €, Alianza 2 : 287 €) (V). Les clics ont été faits avec Chromium dont WebGL était désactivé, pour que l'interface réponde (voir « Limites ») ; l'effet sur l'image n'est donc pas observé sauf mention.

| Libellé | Type | Effet observé | Prix (paire) | État |
|---|---|---|---|---|
| Profil Clásica / Suave | carte | sélection du profil | 542 € / 542 € | OK |
| Profil Bisel | carte | idem | 580 € | OK |
| Profil Pura / Plano | carte | idem | 610 € / 610 € | OK |
| Línea / Lateral / Dúo | carte | idem | 580 € chacun | OK |
| Dúo suave | carte | idem | 551 € | OK |
| Diagonal | carte | idem | 644 € | OK |
| Línea suave / Lateral suave / Diagonal suave | carte | idem | 612 € chacun | OK |
| Escalón plano / Doble escalón | carte | idem | 576 € chacun | OK |
| Escalón curvo | carte | idem | 548 € | OK |
| Doble lateral / Central | carte | idem | 612 € chacun | OK |
| Lateral plano / Lateral curvo | carte | idem | 644 € chacun | OK |
| Central plano | carte | idem | 580 € | OK |
| 18 k | bouton | passe au titre 750 | 542 → **1 131 €** (+589 €) | OK |
| 9 k | bouton | retour | 1 131 → 542 € | OK |
| Amarillo / Blanco / Rosa | bouton | couleur de l'or | aucun changement | OK |
| Un color / Dos colores / Tres colores | bouton | nombre de couleurs | aucun changement | OK |
| Lisa / Línea fina / Canal cóncavo / Canal recto | bouton | ligne centrale | aucun changement | OK |
| Largeur (liste) 1,8 / 3 / 3,5 / 6 mm | liste | change la largeur | 268 / 407 / 474 / 746 € (à épaisseur et profil inchangés dans cette série) | OK |
| Épaisseur (liste) 0,85 / 1,15 / 1,7 mm | liste | change l'épaisseur | 346 / 468 / 692 € (largeur 3 mm) | OK |
| Taille de l'alliance 1 (liste) 14 / 26 | liste | change la taille | 496 € (14/14) ; 552 € (26/14) ; retour à 8 : 468 € | OK : le prix suit la taille, donc le poids |
| Boutons − et + (taille, largeur, épaisseur) | bouton | pas d'une valeur | non mesuré séparément | cliqués, sans erreur |
| Plano / Confort (intérieur) | bouton | « Plano » cliqué | 468 → 527 € | « Plano » OK ; « Confort » : clic non abouti en 10 s, non vérifié |
| Brillo, Satinado, Diamantado, Lateral seda, Lateral fuerte | bouton | finition | aucun changement | OK |
| Un acabado / Dos zonas / Tres zonas | bouton | zones de finition | aucun changement | OK |
| Con diamantes (alliance 1) | bouton | ajoute un diamant | 542 → **577 €** (+35 €) | OK |
| Sin diamante | bouton | retire | 542 € | OK |
| Grabado Clásico | bouton | « Interior sin coste » | 542 € | OK |
| Grabado Con tu letra | bouton | étiquette « +30 € » | 602 € (+60 € pour deux) | OK |
| Grabado Compartido | bouton | étiquette « +35 € » | 612 € (+70 €) | OK |
| Grabado Especial | bouton | étiquette « +45 € » | 632 € (+90 €) | OK |
| Symbole ♥ | bouton | insère le symbole | aucun changement | OK |
| Champs de texte du grabado | champ | non remplis (règle : aucune saisie) | — | non testé |
| Polices « Siempre … » (9) | bouton | choix de police | — | non testé (clic sur le libellé exact échoué) |
| Flèches ‹ › | bouton | étape précédente ou suivante | — | OK (7 étapes atteintes) |
| Menu « n de 7 · Étape ▾ » | bouton | menu des étapes | — | cliqué, contenu non relevé |
| Alianza 1 / Alianza 2, « × » | onglet / bouton | bascule de l'alliance éditée | — | cliqué, sans changement de prix visible |
| Mismo diseño en ambas | interrupteur | lie les deux alliances | — | cliqué, effet non mesuré |
| « ? » (3 boutons d'aide) | bouton | aide contextuelle | — | cliqués, contenu non relevé |
| Modo Pro | interrupteur | mode de vue | — | cliqué, sans erreur ; effet non mesuré |
| Girar | bouton | rotation | — | cliqué (rendu 3D désactivé) |
| − / + (zoom) | bouton | zoom | — | cliqués (rendu 3D désactivé) |
| Ver las alianzas en la mano | bouton | vue « sur la main » | — | **non testé** : clic non abouti (bandeau de cookies au-dessus) |
| Volver a la vista normal | bouton | retour | — | non testé, même raison |
| Elegir tallas | bouton | invite à choisir les tailles réelles | — | cliqué ; le résumé affiche « Talla 8 · sin elegir » et précise que la taille 8 est un exemple (V) |
| Ver condiciones | lien | ouvre un nouvel onglet vers `/envio/` | — | OK (V : adresse de l'onglet) |
| Compartir | bouton | fenêtre « Compartir diseño » : lien `https://oroalianzas.es/configurador-alianzas-boda/#27C2_…`, boutons WhatsApp et Copiar enlace | — | OK (V : capture) |
| Guardar este diseño en favoritos | bouton | — | — | non testé (fenêtre de partage ouverte au-dessus) |
| Reintentar (vue 3D) | bouton | relance la 3D | — | non testé (clic non abouti) |
| Añadir al carrito | bouton | — | — | **non actionné** : le panier est interdit par robots.txt |
| Bandeau de cookies : Aceptar todas / Rechazar todas / Configurar | bouton | — | — | « Rechazar todas » : clic non abouti en automatique ; les autres non cliqués |
| Menu : Alianzas, Alianzas 48h, Diseña tus alianzas, Blog, Ayuda, Mi pedido | lien | navigation | — | présents (V : liste des contrôles) ; non suivis sauf `/envio/`, `/terminos…/`, `/cambio-de-talla/` lus en curl |
| Compte, favoris, recherche, panier (icônes) | lien / bouton | — | — | présents ; pages interdites ou non suivies |

## Options disponibles

- **Profils** : 21 (liste complète ci-dessus). **Titres** : 9 k et 18 k (pas de platine dans le configurateur) (V).
- **Couleurs** : jaune, blanc, rose ; une à trois couleurs par alliance.
- **Largeur** : 1,8 ; 2 ; 2,5 ; 3 ; 3,5 ; 4 ; 4,5 ; 5 ; 5,5 ; 6 mm. **Épaisseur** : 0,85 ; 1 ; 1,15 ; 1,3 ; 1,5 ; 1,7 mm. **Tailles** : 6 à 36 (échelle espagnole).
- **Diamants** : « con / sin » par alliance ; nombre, taille, qualité et origine (naturel, synthétique) non proposés dans l'écran lu (V) ; certificat de diamant non mentionné.
- **Gravure** : 4 formules (intérieur sans coût ; +30, +35, +45 € par alliance), 9 polices, symboles.
- **Vues** : 3D à 360° glissable (« Arrastra para explorar en 360° »), zoom, rotation, mode Pro, alliances « en la mano » (existe, non testé).

## Prix, délais, retours, garanties

- **Prix** : affiché en direct, TTC, pour la paire et par alliance (V). Pas de décomposition matière / façon : le prix suit le profil, le titre, la largeur, l'épaisseur et la taille (V : mesures ci-dessus). Les couleurs d'or et les finitions n'ont pas fait varier le prix (V).
- **Délai** : « Entrega estimada El 9 de diciembre » affiché le 24/11 (V : capture). Fabrication à la commande « entre 10 et 15 jours ouvrés » (V : texte de la page du configurateur) ; 10 à 12 jours ouvrés sur `/envio/` ; stock : 2 jours ouvrés (V : https://oroalianzas.es/envio/).
- **Livraison** : gratuite, transporteur NACEX, 1 jour ouvré après gravure, SMS de suivi ; **Péninsule et Baléares seulement** (V : https://oroalianzas.es/envio/).
- **Retours** : rétractation de 14 jours naturels, **exception pour les biens personnalisés** : toutes les alliances sauf « Stock » ou « 48h » sont fabriquées sur commande et exclues (V : https://oroalianzas.es/terminos-y-condiciones/). Remboursement intégral en cas de défaut.
- **Garantie** : 24 mois « comme le prévoit la loi » (V : bandeau du pied de page, capture). Changement de taille gratuit si l'erreur est de deux tailles au plus (V : https://oroalianzas.es/cambio-de-talla/). Gravure extérieure : autre catégorie du catalogue.
- **Contraste** : poinçon de laboratoire officiel sur chaque pièce (V : texte du configurateur). Fabrication « espagnole » (V : bandeau).
- **Paiement** : « Pago 100 % seguro » ; moyens exacts non relevés (page non lue).

## Confiance et service

- Boutique à Leganés, retrait en magasin (V : menu), téléphone 91 694 23 15, e-mail, WhatsApp et chat (V : liens du pied de page), « Mi pedido » pour le suivi.
- Anneau de mesure gratuit envoyé à domicile, déduit de la commande, sans retour (V : https://oroalianzas.es/envio/).
- Avis clients : non relevés sur la page du configurateur.
- Preuves de fabrication : aucune photo ni vidéo d'atelier vue ; suivi de commande par « Mi pedido » (non ouvert).

## Points forts à retenir pour JR Diamond

1. **Prix en direct sur chaque option**, par alliance et pour la paire (preuve : 542 → 1 131 € au passage à 18 k ; 268 à 746 € selon la largeur).
2. **Prix visible qui suit la taille** : le choix de la taille de doigt change le prix (496 / 552 € mesurés), ce qui rend le poids tangible.
3. **Lien de partage** à l'ouverture de la fenêtre « Compartir diseño » (hash dans l'adresse, WhatsApp, copie du lien) : reprend l'action « configuration dans l'adresse » du prototype.
4. **Alliance lisse = produit 3D simple** : 21 profils pour une bande ; pertinent pour l'alliance de kiddouchin.
5. **Taille d'exemple signalée** : le résumé dit que la taille 8 est « de ejemplo » et force « Elegir tallas » avant le panier (V : capture du résumé).
6. **Repli sans 3D** : en cas d'échec de WebGL, le message « El resto del configurador funciona » garde le prix et les options utilisables (V, WebGL désactivé volontairement).
7. **Gravure chiffrée** : +30 / +35 / +45 € affichés sur chaque formule.
8. **Date de livraison estimée** affichée sous le configurateur.

## Défauts observés

- **Visuel 3D très lent à apparaître** dans notre mesure (rendu logiciel) : DOMContentLoaded 12,1 à 12,7 s, canevas visible vers 30 à 31,5 s en ordinateur ; 7,0 s et 26,0 s en iPhone (V). Ces temps ne sont pas ceux d'un vrai appareil (voir limites).
- Le prix ne bouge pas avec la couleur d'or ni avec les finitions (V) ; la cohérence avec le coût réel n'est pas expliquée.
- Aucune décomposition du prix (matière, façon).
- Le bandeau de cookies gêne les clics en automatique ; fenêtre de partage et bandeau empêchent des clics suivants (I : superpositions).
- Diamants : seulement « avec / sans » ; ni origine, ni qualité, ni certificat visibles (V).
- Livraison limitée à la Péninsule et aux Baléares (V).
- Pied de page daté « Copyright 2023 » (V) : signe de contenu ancien.

## Limites de l'audit

- Le rendu 3D n'a pas été exercé par les clics : WebGL a été désactivé pour que l'interface réponde ; le message de repli a été vu à ce moment. Les temps de 3D mesurés avec WebGL logiciel passent par un proxy et ne représentent pas un vrai appareil.
- Le prix par option a été mesuré à partir d'un état commun ; l'ordre des clics peut mêler largeur, épaisseur et taille (indiqué). Les valeurs 1 131 € ont été reproduites deux fois.
- Non testés : polices, saisie du texte de gravure, vue « sur la main », favoris, « Reintentar », « Mismo diseño en ambas » (effet), « Añadir al carrito » (interdit).
- Aucun panier : récapitulatif, frais, moyens de paiement du panier non vus.
- Un seul modèle de configurateur ; Alianza 2 non modifiée séparément.

## Sources

- https://oroalianzas.es/configurador-alianzas-boda/ (contrôles, captures, textes), 24/11/2026.
- https://oroalianzas.es/envio/ (V), https://oroalianzas.es/terminos-y-condiciones/ (V), https://oroalianzas.es/cambio-de-talla/ (V), https://oroalianzas.es/robots.txt (V).
