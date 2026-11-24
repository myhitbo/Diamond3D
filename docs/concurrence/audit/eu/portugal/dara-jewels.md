# Audit : Dara Jewels (Lisbonne, Parque das Nações, Azeitão, hôtel Marriott)

- **Site** : https://darajewels.com/ (WooCommerce, thème avec popups de rendez-vous).
- **Date** : 15/11/2026 (contrôles exécutés le 24/11/2026). **Appareils** : Chromium ordinateur 1366×900 ; iPhone 13 émulé.
- **Statut** : **complet pour un catalogue à options** (pas de configurateur : la 3D est un service sur demande). Chemin de panier atteint jusqu'au récapitulatif.
- Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé.
- Blocage : aucun (200 partout). robots.txt interdit seulement `?add-to-cart=` et les dossiers techniques : les boutons « Adicionar » de la liste, qui passent par ce paramètre [I], n'ont pas été cliqués. reCAPTCHA sur les formulaires.

## Parcours

| Étape | Options |
|---|---|
| 1. Catalogue https://darajewels.com/categoria-produto/aneis-de-noivado/ | 82 bagues de fiançailles (60 solitaires, 25 « mémoire », 3 design, 3 croisées, 1 perles, 7 pierres de couleur), tri (6 critères), filtres Matière, Couleur, Pierre, Carats, Marque, Prix [V] |
| 2. Fiche (ex. https://darajewels.com/product/anel-noivado-knott/) | Choix couleur, métal, taille ; prix recalculé ; ajout au panier [V] |
| 3. Services de la fiche | Marcar Visita, Marcar Videochamada, Solicitar + Info, Enviar sugestão, Partilhar [V] |
| 4. Panier https://darajewels.com/cart/ | Récapitulatif d'une ligne, quantité, bouton « Checkout » [V] |
| 5. Service « Design 3D » https://darajewels.com/design-3d/ | Texte, exemple Instagram, demande de devis par e-mail [V] |

## Contrôles vérifiés

### Page « Design 3D » (68 contrôles sur ordinateur, 94 sur iPhone, dont 8 du bandeau de cookies)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Icônes téléphone, WhatsApp, Instagram, Facebook, YouTube, e-mail | 6 liens | tel: 919351145, api.whatsapp.com (+351 914 683 107), réseaux, mailto: geral@darajewels.com | — | Liens conformes (non ouverts) [V] |
| CONTACTOS, SERVIÇOS, ASSISTÊNCIA, BLOG | menu | Contacts et boutiques, services, blog | — | Fonctionnent [V] |
| Compteurs panier et favoris, compte | liens | /cart/, /wishlist/, /my-account/ | — | Présents [V] |
| JÓIAS, ANÉIS DE NOIVADO, ALIANÇAS, DESIGN 3D, CATÁLOGOS, MARCAS | menu | Catégories ; Marcas ouvre un sous-menu | — | Fonctionnent [V] |
| « Consulte-nos solicitando um Orçamento » | lien | mailto: geral@darajewels.com | Devis | Fonctionne, sans formulaire [V] |
| Exemple Instagram (https://www.instagram.com/p/B4e7VxDHwyu/) | lien | Un travail 3D fait pour un client | — | Lien présent, non ouvert [V] |
| Pied de page : Pós-venda, Gravações, Design 3D, Guia de medidas, Packaging, Envios e entregas, Devoluções, Trocas e garantias, Lojas, Sobre | 10 liens | Pages de service lues (voir plus bas) | — | Fonctionnent, 9 lus [V] |
| Newsletter « Subscrever » | lien | Page d'inscription | — | Non remplie |
| Livro de Reclamações, Marcas de Contrastaria, Cotações | liens | Livre de réclamations officiel, poinçons, convertisseur de la Banque du Portugal | — | Présents [V] |
| Recherche (champ, bouton) | recherche | Recherche de produits | — | Non testée |
| Cookies : Saber mais, Rejeitar todos, Aceitar todos, 4 cases | bandeau | Gestion des cookies (iubenda) | — | Fonctionne [V] |
| Widget de chat jaune (en bas à droite) | bouton | Ouvre un chat | — | Visible ; non ouvert (règle) [V] |

### Catalogue des bagues de fiançailles (filtres)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Ordenação (6 critères : défaut, popularité, note, récent, prix croissant, décroissant) | liste | Réordonne | — | Présent, non actionné [V] |
| Catégorie de produit (21 entrées) | liste | Filtre par catégorie | — | Présent [V] |
| Matière : Ouro 14kts, 18kts, Platina 950 | liste | `?filter_material=ouro-18kts` : liste rechargée de 16 articles par page ; le compteur « 82 products » ne bouge pas | — | Fonctionne, compteur non mis à jour [V] |
| Couleur : Amarelo, Branco, Rosa | liste | `?filter_cor=branco` : compteur 64 | — | Fonctionne [V] |
| Pierres (10 : eau-marine, diamant, perle, saphir, topaze, **Diamante Lab Grow**, émeraude, rubis, tanzanite) | liste | `?filter_pedras=diamante-lab-grow` : **4 bagues** | — | Fonctionne [V] |
| Total de carats (47 valeurs de 0,04 à 2,43 ct, non triées) | liste | Choix « 0,50cts » : adresse inchangée, 82 articles | — | **Sans effet observé** [V] |
| Marque (Anna Maria Cammilli, Dara Jewels, Gerstner, Lecarre, Ruesch, Yana Nesper, Recarlo) | liste | Choix « Dara Jewels » : adresse inchangée, 82 articles | — | **Sans effet observé** [V] |
| Prix min et max, bouton Filtrer | 2 champs + bouton | Curseur « 420 € à 9 550 € » affiché | — | Non actionné |
| Pagination (6 pages), « Adicionar » sur chaque carte | liens | 16 bagues par page | — | « Adicionar » non cliqué (paramètre interdit) |

### Fiche « Anel Noivado Knott » (réf. 60/90110)

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Cor (Amarelo, Branco, Rosa) | liste | Met à jour le prix seulement quand couleur, métal et taille sont choisis | voir tableau | Fonctionne ; **l'image ne change pas** (reste le visuel rose) [V] |
| Material (Ouro 14kts, 18kts, Platina 950) | liste | Idem ; **platine refusé avec jaune et rose** (délai de 30 s, option inactive) | voir tableau | Fonctionne [V] |
| Medidas (08 à 18, 11 tailles) | liste | Obligatoire pour afficher le prix et activer le bouton | pas de variation | Fonctionne [V] |
| Qtd | champ | Quantité (1) | — | Présent |
| Adicionar | bouton | Ajoute au panier et mène à /cart/ en 6,9 s | — | Fonctionne [V] |
| Marcar Visita | bouton | Ouvre un formulaire de rendez-vous en boutique (lien `#`) | — | Non rempli [V] |
| Marcar Videochamada | lien | https://lp.darajewels.com/marcacaovideochamada | — | Non ouvert [V] |
| Solicitar + Info | bouton | Formulaire d'information (lien `#`) | — | Non rempli |
| Enviar sugestão | lien | Formulaire de suggestion (lien `#`) | — | Non rempli |
| Partilhar | bouton | Boutons de partage | — | Présent [V] |
| Onglets : Informação adicional (poids 1,9 g), Descrição, Tabela de medidas, Catálogo | 4 onglets | Texte ; « Não há catálogos disponíveis » | — | Fonctionnent [V] |

Prix de la fiche Knott, taille 12, selon la combinaison [V] :

| Couleur | Or 14 k | Or 18 k | Platine 950 |
|---|---|---|---|
| Jaune | 1 898 € | 2 148 € | refusé |
| Blanc | 1 976 € | 2 216 € | 2 220 € |
| Rose | 1 976 € | 2 134 € | refusé |

Fourchette annoncée avant choix : 1 859 à 2 220 € [V]. La tarification n'est donc pas linéaire (rose 18 k moins cher que blanc 18 k).

Modes de vue : une photo studio ; pas de vidéo, 360°, 3D, essayage ni zoom détecté (`video`, `canvas`, `model-viewer` : 0) [V].

### Panier https://darajewels.com/cart/

Une ligne : Anel Noivado Knott, Cor Branco, Matériau Or 18 kts, Mesure 12, quantité 1, **2 216,00 €**, croix de suppression, bouton « 2 216,00 € | Checkout ». Aucun frais de livraison, délai ni moyen de paiement affiché au panier ; sous-total absent [V]. Le tunnel de paiement n'a pas été ouvert.

## Options disponibles

- **Métaux** : or 14 k, or 18 k, platine 950 ; or jaune, blanc, rose [V].
- **Pierres (filtre)** : diamant, **diamant « Lab Grow »**, saphir, émeraude, rubis, eau-marine, perle, topaze, tanzanite [V].
- **Tailles** : 08 à 18 sur la fiche Knott [V] ; guide de mesure avec tableau [V].
- **Gravure** : laser, micro-texte, empreinte digitale, calligraphie interne ou externe, relief, patine noire, lettres en couleur, police Word au choix ; prix selon la pièce [V : /gravacoes/].
- **Marques revendues** : Anna Maria Cammilli, Gerstner, Lecarre, Ruesch, Yana Nesper, Recarlo ; collection propre « Recarlo » [V].
- **Sur mesure** : toute pièce du site peut être transformée (couleur, poids, largeur, serti, pierres), service Design 3D, devis par e-mail [V].

## Prix, délais, retours, garanties

- **Prix** : euros TTC, avec séparateur en point ; de 420 à 9 550 € sur les bagues. Fiche Knott : « Valor com 10 % de desconto incluído », « valor aproximado, pode flutuar de acordo com a cotação do ouro » [V]. Aucune décomposition or, façon, pierre.
- **Délai** : « Disponível sob encomenda (mas temos o modelo em mostruário). Timing de entrega até 20 dias » (Knott). Livraison au Portugal continental en 1 à 2 jours ouvrés pour les pièces en stock ; hors stock, 4 semaines au plus, annoncées par la boutique. Îles, Espagne et autres pays : « option indisponible de momento » [V : /envios-e-entregas/].
- **Livraison** : gratuite sauf mention contraire ; transporteur avec signature ; l'expéditeur affiché est un nom de personne [V].
- **Paiement** : Visa, Mastercard ou virement ; autres moyens sur demande [V]. Aucun MB Way, PayPal ni paiement échelonné cité.
- **Retours** : 14 jours légaux (décret-loi 24/2014), frais de retour à la charge du client, remboursement sous 14 jours (4 jours ouvrés en règle). **Articles personnalisés exclus** ; recommandation de préférer l'échange [V : /devoluções/].
- **Échange** : 14 jours (page garanties) ou 15 jours (page après-vente) : incohérence ; pièces sur commande ou déjà personnalisées exclues [V].
- **Garantie** : légale de 2 ans sur les défauts de fabrication ; frais de transport à la charge du client [V : /trocas-e-garantias/].
- **Certificats** : carats, couleur et pureté décrits (« 19 diamants de 0,24 ct, couleur GH, pureté SI ») ; aucun certificat GIA ou IGI cité sur la fiche lue [V].
- **Libellé du synthétique** : « Diamante Lab Grow » dans le filtre ; terme abrégé que la traduction portugaise du guide CIBJO déconseille [V pour le libellé, I pour le jugement].

## Confiance et service

- Boutiques physiques (Parque das Nações, Azeitão, hôtel Marriott), « Wedding Awards 2026 » de casamentos.pt pour la boutique du Parque das Nações, recommandé par Zankyou [V].
- Après-vente : retouche de taille offerte pour une bague offerte, nettoyage offert du solitaire avant le mariage et des alliances au premier anniversaire [V : /pos-venda/].
- Avis : témoignages (Mafalda J., Nádia S., Silvia, Miriam D.) sur l'accueil ; aucune note chiffrée [V : accueil].
- Contact : téléphone, WhatsApp, e-mail, visio ; permanence téléphonique du lundi au samedi (10 h à 13 h 30, 15 h à 19 h 30) [V].
- Preuves de fabrication : un seul exemple 3D sur Instagram ; aucun suivi de commande ni photo d'atelier [V].
- Mentions légales : Livro de Reclamações et lien vers les poinçons de la Contrastaria [V].

## Points forts à retenir pour JR Diamond

1. **Prix affichés par variante avant l'ajout au panier**, avec le calcul qui change à chaque métal et couleur (de 1 898 à 2 220 €, Knott) [V]. Notre écart principal reste le prix « Sur devis ».
2. **Filtre « pierres » qui sépare le diamant de laboratoire du diamant naturel** (4 bagues) [V].
3. **Après-vente chiffrable** : retouche de taille offerte, nettoyage avant le mariage et au premier anniversaire [V]. Proche de notre première mise à taille offerte.
4. **Pages de service complètes et visibles** : livraison, retours, échange, garantie, gravure, tailles [V].
5. **Fiche qui prévient du risque de l'or** (« valeur approximative, peut fluctuer ») [V]. Correspond à notre idée de prix expliqué.
6. **Service Design 3D en une phrase** : « voir à l'avance un résultat plus fidèle » [V], sans outil en ligne : un espace libre pour JR Diamond.

## Défauts observés

- Le changement de couleur ne change pas l'image : la fiche Knott montre toujours la bague rose [V].
- Le prix n'apparaît qu'après avoir choisi la taille ; avant, fourchette large [V].
- Combinaison platine avec jaune ou rose refusée sans message, juste une option inactive après 30 s d'attente [V].
- Filtres Carats et Marque sans effet observé ; compteur « 82 products » qui ne se met pas à jour avec le filtre Matière [V].
- Liste des carats non triée (0,22 après 2,28) [V].
- Page « Design 3D » : aucun outil, un lien Instagram de 2019 et un e-mail [V].
- Bandeau de cookies, widget de chat et boutons de rendez-vous sur la même fiche : écran chargé sur iPhone (94 contrôles sur la page Design 3D) [V].
- Politiques contradictoires (échange 14 ou 15 jours) ; livraison hors Portugal continental « indisponible » [V].
- Prix ambigu : « Valor com 10 % de desconto incluído » sans prix d'origine [V].
- Un seul visuel studio repéré sur la fiche, ni vidéo ni 360° [V] ; le nombre exact d'images de la galerie n'a pas été relevé.

## Limites de l'audit

- Seule la fiche Knott a été parcourue en détail (couleur, métal, taille, panier). Les 81 autres bagues et les 75 alliances n'ont pas été ouvertes une à une ; les alliances n'ont pas été testées.
- Les boutons « Adicionar » de la liste n'ont pas été cliqués (paramètre `?add-to-cart=` interdit).
- Les formulaires des popups, le chat, la newsletter, la recherche et le tunnel de paiement n'ont pas été utilisés (règle de lecture seule).
- Les filtres Carats et Marque ont été essayés une fois ; l'absence d'effet est observée, non expliquée.
- Mesures de chargement (fiche Knott, réseau de l'agent, sans cache) : page prête (DOM) en 6,8 à 8,5 s ; visuel principal (LCP) à 2,07 s sur ordinateur et 2,19 s sur iPhone ; ces durées varient d'une visite à l'autre (DOM de la liste à 3,4 s) [V].
- Portugal seulement : pas de test depuis une autre adresse ni de livraison à l'étranger (indisponible selon la page).

## Sources

- https://darajewels.com/ · /design-3d/ · /categoria-produto/aneis-de-noivado/ · /categoria-produto/aliancas-de-casamento/ · /product/anel-noivado-knott/ · /cart/
- https://darajewels.com/envios-e-entregas/ · /devolucoes/ · /trocas-e-garantias/ · /gravacoes/ · /guia-de-medidas/ · /pos-venda/ · /processamento-de-encomendas/
- https://darajewels.com/robots.txt
