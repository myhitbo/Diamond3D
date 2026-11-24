# Audit : Jstudio (Джей студио), atelier de joaillerie, Minsk

- **Site** : Jstudio, ООО « Джей студио » (УНП 691741907) · **Adresse** : https://jstudio.by/ · **Page de départ** : https://jstudio.by/raschet-stoimosti-izgotovleniya-yuvelirnyh-izdelij-v-minske/
- **Date** : 15/11/2026 · **Appareils** : Chromium ordinateur (1366×900) et affichage iPhone 13 · **Statut : partiel** (pas de prix affiché, pas de panier fonctionnel, formulaires non envoyés par règle).
- Légende : **[V]** vérifié (page lue ou contrôle actionné) · **[I]** inféré · **[S]** supposé. `robots.cjs` : AUTORISÉ pour toutes les pages ouvertes ; robots.txt interdit les adresses avec `?` et les recherches `?s=` (jamais ouvertes).

## Parcours

| Étape | Options vues [V] |
|---|---|
| 1. Type de bijou | Кольцо, Цепочка, Браслет, Серьги, Подвеска, Крестик, Аксессуары, Другое (8 boutons radio) |
| 2. Bague : vue | Обручальное, Помолвочное, Повседневное, Печатка или перстень |
| 3. Matière | Золото, Серебро, Комбинированный (pas de platine proposé ; la FAQ dit que le platine n'est fabriqué ni proposé) |
| 4. Taille | 15 à 22 par demi-taille (15, 15,5 … 22) + « Нужна помощь в определении » |
| 5. Largeur | до 4 мм, от 4 до 7 мм, от 7 до 10 мм, 10-12 мм и более |
| 6. Pierres | Драгоценные, Полудрагоценные, Нет |
| 7. Gravure | Ручная, Лазерная, Нет |
| 8. Options de commande | 3D моделирование, Определение размера, Изготовление по образцу, Дополнительное покрытие, Гравировка на изделии, Подбор камней, Закрепка камней, Нужна консультация |
| 9. Envoi | Texte libre, téléversement d'esquisse ou photo, contact par Позвонить / Viber / Telegram, téléphone ou pseudo, prénom, bouton « Рассчитать » (non actionné) |

Le calculateur ne renvoie **ni prix ni image** : il annonce « une estimation dans les 15 minutes » (texte de la page) [V].

## Contrôles vérifiés

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| Кольцо … Другое (8) | radio | Chacun affiche son propre jeu d'options (44 cases visibles pour Кольцо, 33 Цепочка, 22 Браслет, 25 Серьги, 22 Подвеска, 23 Крестик, 24 Аксессуары, 20 Другое) | aucun | OK [V] (bureau et iPhone identiques) |
| Обручальное / Помолвочное / Повседневное / Печатка | radio | Sélection ; aucun changement visible du reste du formulaire | aucun | OK [V] |
| Золото / Серебро / Комбинированный | radio | Sélection | aucun | OK [V] |
| Tailles 15 à 22 | radio | Sélection | aucun | OK [V] |
| Largeur (4) · Pierres (3) · Gravure (3) | radio | Sélection | aucun | OK [V] |
| 8 options de commande | case | Cochables, sans effet visible | aucun | OK [V] |
| Téléversement esquisse / photo | fichier | Présent ; non utilisé (donnée client) | aucun | Non testé : règle « aucun envoi » |
| Позвонить / Viber / Telegram | radio | Choix du canal de réponse | aucun | OK [V] |
| Téléphone, nom | champ | Non remplis | aucun | Non testé : donnée personnelle |
| Рассчитать | envoi | Non actionné | aucun | Non testé : formulaire |
| Barre de recherche (`phrase`) | champ | Non utilisée (robots.txt interdit `?s=`) | aucun | Non testé |
| Fiche « Ниста » : Добавить в список желаний | lien | Clic : aucun message, URL inchangée, aucun panneau détecté | aucun | Sans effet visible [V] |
| Fiche : Ваше имя, Номер телефона, case de consentement, « Отправить заявку » | formulaire | Non remplis ni envoyés | aucun | Non testé |
| Fiche : « Подробнее » (produits similaires) | lien | Mène vers d'autres fiches (`/product/koltso-fidelis/`, `/koltso-miandra/`, …) | aucun | OK [V] |
| Menu : Ремонт, Изготовление, Каталог (`/shop/`), Наши работы, О нас, Отзывы, Контакты | liens | Liens relevés dans le menu ; `/shop/` (catalogue) autorisé par robots.txt mais non ouvert ; la fiche « Ниста » du catalogue n'a aucun prix | aucun | Non ouverts (sauf fiche) |
| Pagination du blog `/katalog/page/2…13/` | liens | Mène aux actualités (blog), pas au catalogue | — | OK [V] |
| Viber / Telegram / WhatsApp (en-tête) | liens | Non ouverts ; renvoient vers des messageries | aucun | Non testé : pas de conversation |
| Panier `/cart/` | page | Page 200 sans contenu de panier (le site n'a pas de vente en ligne) | aucun | Vérifié [V] |

## Options disponibles

- **Types** : bague (fiançailles, alliance, quotidienne, chevalière), chaîne, bracelet, boucles, pendentif, croix, accessoires, autre.
- **Métaux** : or (jaune, rouge, blanc, citron, dit la FAQ), argent, combiné. Or ≥ 500 ‰, argent ≥ 925 ‰ ; le métal est **apporté par le client** [V, page « помолвочных колец » : « Металл используется только клиента »].
- **Pierres** : les pierres précieuses sont **fournies par le client** (achat à la Banque nationale conseillé) ; les fianites peuvent être fournis par l'atelier [V, FAQ et page fiançailles].
- **Services** : modèle 3D, mesure de taille, fabrication sur modèle, revêtement (rhodiage, émail, noircissement), gravure manuelle ou laser, choix et sertissage de pierres, consultation [V].
- **Fabrication de bagues** de la taille 10 à 25-30 [V, page fiançailles].

## Prix, délais, retours, garanties

- **Prix** : aucun prix pour le sur-mesure ; « le poids et le coût sont calculés individuellement » (fiche « Ниста ») [V]. Surcoût de **30 %** pour l'or de couleur (jaune citron, rouge, blanc), et consommation de métal presque doublée en or 585 [V, page fiançailles]. Commande urgente : +30 à 50 % [V, FAQ].
- **Délai** : 3 à 6 semaines en moyenne [V, FAQ].
- **Commande** : se présenter en atelier avec le métal et un acompte ; design validé et contrat signé sur place [V, FAQ].
- **Modèle 3D** : réalisé après la commande et validé avec le client avant fabrication [V, FAQ].
- **Garantie** : 6 mois sur la fabrication, 1 mois sur la réparation [V, FAQ].
- **Livraison** : « les articles ne sont pas livrés » [V, FAQ].
- **Retours** : non indiqués (page retours absente) [V].
- **Paiement** : espèces, carte (y compris internationales), virement pour entreprises, QR « Оплати », cartes de paiement échelonné (Halva, Карта покупок, 2 mois), Apple Pay et Google Pay, ERIP ; bons cadeaux 20, 50, 100, 200 BYN [V, `/oplata/`].
- **Devise** : BYN seulement. **Langues** : russe ; liens vers versions anglaise et chinoise [V].
- **Temps d'apparition** : formulaire du calculateur 3,9 s (ordinateur) et 7,5 s (iPhone) ; page fiche en 8,1 s (ordinateur) et 5,9 s (iPhone) jusqu'à `DOMContentLoaded` [V, mesures Chromium, dépendent du réseau de l'agent].

## Confiance et service

- 3 ateliers à Minsk avec adresses et horaires publiés, licence n° 0220/17-01205 pour métaux et pierres précieuses, coordonnées bancaires dans le pied de page [V].
- Avis : note 5/5 (« 38 voix » sur la page paiement, « 4 voix » sur l'accueil) ; 371 avis, note 4,9 sur la fiche relax.by [V, extrait de recherche].
- Preuves de fabrication : rubrique « Наши работы » (1 234 photos annoncées sur relax.by) ; vidéos non vues [I].
- Conseil par téléphone, Viber, Telegram, WhatsApp, chat en ligne annoncé [V : liens présents ; non ouverts].

## Points forts à retenir pour JR Diamond

1. **Modèle 3D validé avant fabrication** : l'atelier le promet dans sa FAQ ; c'est le même argument de confiance que le fichier de fabrication de JR Diamond (preuve : FAQ, `chasto-zadavaemye-voprosy`).
2. **Devis en ligne en quelques clics** : la structure type → métal → taille → largeur → pierres → gravure → options tient sur une page (preuve : page du calculateur).
3. **Aide à la taille de doigt** au sein du formulaire (« Нужна помощь в определении ») et mesure de taille proposée comme option (preuve : calculateur).
4. **Transparence sur le surcoût de l'or de couleur (+30 %) et les pertes de métal** (page fiançailles) : bon modèle d'explication du prix.
5. **Moyens de paiement complets** (ERIP, QR, Apple Pay, échelonné) cités dans le pied de page de chaque page.

## Défauts observés

- Aucun prix, aucun visuel ni aperçu 3D côté client ; l'estimation n'arrive que par téléphone (15 minutes annoncées, non vérifié).
- Métal **et pierres** apportés par le client : l'offre est un atelier de façon, pas une vente de bague complète.
- Pas de livraison, pas de politique de retour, pas de panier (`/cart/` vide).
- Le bouton « liste de souhaits » ne montre aucun retour.
- Pas de platine à la fabrication ; pas de diamants cultivés ni de certificats GIA/IGI mentionnés [V].
- Pages lentes (4 à 8 s) et données des 3 ateliers affichées en haut de chaque page.

## Limites de l'audit

- Formulaires jamais envoyés ; l'estimation promise n'a donc pas été vue.
- Aucune conversation de chat ou de messagerie ouverte.
- Pages « Наши работы », « О нас », « Контакты », « Отзывы » non lues.
- Mesures de temps prises sur un seul passage, depuis un proxy d'agent.

## Sources

Pages ouvertes en Chromium le 15/11/2026 : https://jstudio.by/ · https://jstudio.by/raschet-stoimosti-izgotovleniya-yuvelirnyh-izdelij-v-minske/ · https://jstudio.by/izgotovlenie-yuvelirnih-izdelii-minsk/ · https://jstudio.by/product/koltso-dlya-pomolvki-nista/ · https://jstudio.by/chasto-zadavaemye-voprosy/ · https://jstudio.by/oplata/ · https://jstudio.by/cart/ · https://jstudio.by/katalog/ · https://jstudio.by/robots.txt.
Extraits de recherche (non ouverts) : https://jstudio.by/izgotovlenie-yuvelirnih-izdelii-minsk/izgotovlenie-pomolvochnyh-kolets-v-minske · https://jstudio.relax.by/.
Captures : `/tmp/claude-0/-home-user-Diamond3D/57de8dfc-6345-5431-aee3-02f728d49ba4/scratchpad/audit/eu/jstudio/` (hors dépôt).
