# Encaisser en ligne : Israël d'abord, France ensuite

Étude du 14 novembre 2026. Recherche web ; chaque fait porte sa source et son niveau : **[V]** vérifié sur une source officielle ou du prestataire, **[S]** source secondaire, **[I]** inféré, **[?]** à confirmer. Les prix changent : les redemander par écrit avant de signer.

## En bref

1. **Stripe n'est pas une option** pour une entreprise israélienne : il n'opère pas en Israël [S]. Il faut un prestataire local.
2. **Prestataire recommandé pour démarrer : Grow (ex-Meshulam)**. C'est le seul qui publie ses prix et vend passerelle et acquisition en un seul contrat ; il couvre carte, paiement en 1 à 12 fois, Bit, Apple Pay et Google Pay, émet la facture, et son API se branche sur notre site Next.js. Demander en parallèle un devis à **PayPlus** et **Cardcom** pour comparer.
3. **Parcours recommandé : devis → prix confirmé par l'atelier → lien de paiement.** Pas de paiement direct au prix calculé tant que la pierre réelle et la taille ne sont pas confirmées.
4. **Bit ne suffira pas** : plafond par transaction de 5 000 ₪ chez la plupart des prestataires, en un seul paiement. Une bague dépasse souvent ce montant. Bit reste utile pour un acompte ou une alliance simple.
5. **Aucune donnée de carte ne passe par notre serveur** : page de paiement hébergée par le prestataire.

## 1. Pourquoi pas Stripe

- Stripe « n'opère pas en Israël » et ne peut pas verser sur un compte bancaire israélien [S : [Globes](https://en.globes.co.il/en/article-1001381078)].
- Le contournement connu passe par une société étrangère (par exemple britannique) [S : [Osome](https://osome.com/uk/blog/stripe-account-israel-osome-uk-incorp)]. Écarté : coût, comptabilité double, pas de paiement en plusieurs fois israélien ni de Bit.
- Une source affirme le contraire (doola.com) ; elle est isolée et commerciale. **[?]** À revérifier sur stripe.com/global le jour de la décision.
- Stripe redeviendra pertinent pour la **France** (voir §7).

## 2. Ce qu'un acheteur israélien attend

| Moyen | Attente | Conséquence pour nous |
|---|---|---|
| Carte + **tashloumim** (paiement en plusieurs fois) | Standard culturel : le client choisit le nombre de mensualités [S : [Hyp](https://developers.hyp.co.il/pay/common-use-cases/installments), [guide](https://easyappsecom.com/guides/selling-on-shopify-israel)] | Indispensable sur une bague à plusieurs milliers de ₪ |
| **Bit** | Très répandu | Plafonné, voir ci-dessous |
| Apple Pay, Google Pay | Proposés par les prestataires locaux | À activer |

**Deux sortes de paiement en plusieurs fois** [V : [Hyp](https://developers.hyp.co.il/pay/common-use-cases/installments), [Verifone](https://docs.verifone.com/online-payments/checkout/instalments/instalments-in-israel)] :

- **Paiements réguliers** (תשלומים רגילים) : montant divisé en mensualités égales, sans intérêt pour le client. Selon le contrat, le commerçant est payé au fil des mensualités ou d'avance contre une commission. **À faire préciser par le prestataire** : c'est notre trésorerie, puisque l'atelier fabrique dès la commande.
- **Crédit** (קרדיט) : au moins 3 mensualités, intérêts payés par le client à sa banque, le commerçant reçoit tout de suite la totalité.

**Bit, les limites** :

- Plafond par transaction : **5 000 ₪** chez Cardcom [V : [Cardcom](https://support.cardcom.solutions/hc/he/articles/21150398587282)] et PayMe (plus 20 000 ₪ par mois) [V : [PayMe](https://help.payme.io/hc/he/articles/360013964399)] ; **7 500 ₪** chez Gama [V : [Gama](https://www.gamaf.co.il/solutions/bit-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D/)]. Le plafond dépend donc du prestataire : **[?]** à demander à celui retenu.
- Un seul paiement, en shekels seulement, pas de mensualités [V : Cardcom, PayMe].
- Passe obligatoirement par un prestataire de paiement ; un compte Bit personnel est plafonné à 100 000 ₪ par an et ne donne ni bouton sur le site ni facture [S : [simple-web](https://www.simple-web.co.il/blog/bit-for-business)].

## 3. Prestataires

| | **Grow** (ex-Meshulam) | **PayPlus** | **Cardcom** | **Tranzila** |
|---|---|---|---|---|
| Prix publié | **Oui** | Non, sur devis | Non, sur devis | Non, sur devis |
| Contrat | Unique (acquisition incluse) | Passerelle + acquéreur | Passerelle, aussi acquéreur | Passerelle, aussi acquéreur |
| Mensualités | 1 à 12 | Oui | Oui | Oui |
| Bit | Oui | Oui (page séparée) | Oui, 1,6 %, max 5 000 ₪ | Oui, service séparé |
| Apple Pay / Google Pay | Oui / Oui | Oui / Oui | Oui / Oui | Apple Pay ; Google Pay [?] |
| Facture automatique | Oui | Module dédié | Module dédié | Application séparée |
| API pour site sur mesure | REST « Light », bac à sable | REST, bac à sable | REST v11 | CGI + API v2 |

Sources : [comparatif d'octobre 2026](https://danielmashkov.com/insights/israeli-payment-gateways-comparison) [S], [guides Shopify Israël](https://preneuriat.com/blog/shopify-payment-gateways-israel) [S], documentation [Grow](https://developers.grow.business/reference/create-payment-process-1) [V], [PayPlus](https://docs.payplus.co.il/reference/integration) [V], [Cardcom Bit](https://support.cardcom.solutions/hc/he/articles/21150398587282) [V].

**Prix de Grow : deux sources ne concordent pas** [?] :

- comparatif d'octobre 2026 : 29 à 69 ₪ par mois + 0,75 % à 1 % par transaction, hors TVA [S : [danielmashkov.com](https://danielmashkov.com/tools/payment-gateway-picker)] ;
- page d'aide Wix : 1,7 % + 1 ₪ sans abonnement, ou 59 ₪ par mois + 1,5 % [V pour Wix : [Wix](https://support.wix.com/en/article/connecting-grow-by-meshulam-as-a-payment-provider)]. Ce tarif peut être propre à Wix.

Ordre de grandeur général en 2026 pour une carte israélienne : 1,7 % à 2,5 % + 0,5 à 1,5 ₪ par transaction [S : [nisai.dev](https://nisai.dev/guides/stripe-israel-payments/)]. Les cartes étrangères coûtent plus cher (exemple : 3,65 % chez Allpay [S : [NOWPayments](https://nowpayments.io/blog/payment-gateway-israel)]).

**Exemple chiffré [I]** : bague à 8 000 ₪ TTC. À 1 % : 80 ₪. À 1,7 % + 1 ₪ : 137 ₪. À 2,5 % : 200 ₪. À comparer au bénéfice visé de 1 500 à 3 000 ₪ par bague : le coût du paiement est faible devant l'écart de prix entre prestataires, mais le **délai de versement** compte davantage (chez Grow, l'argent serait disponible le 1er du mois suivant [S : danielmashkov.com] **[?]**).

## 4. Parcours de vente

| | A. Devis puis lien de paiement (**recommandé**) | B. Paiement direct au prix calculé |
|---|---|---|
| Déroulé | Le client configure et demande un devis ; l'atelier confirme le prix (pierre réelle, taille, gravure) ; le client reçoit un lien et paie | Le client paie tout de suite le prix affiché |
| Risque de prix faux | Nul | Réel tant que la grille des pierres et les poids ne sont pas validés |
| Exception « sur mesure » au droit d'annulation | Plus facile à établir : devis accepté, caractéristiques écrites [I] | Moins nette |
| Friction | Un aller-retour (délai de réponse de l'atelier) | Aucune |
| Travail | Faible : le formulaire de devis existe | Élevé : panier, stock de pierres, remboursements |

Passer à B plus tard, modèle par modèle, quand le prix calculé aura été vérifié sur une vingtaine de configurations chiffrées à la main par l'atelier.

**Étapes du parcours A** :

1. Demande de devis (existe : `/api/devis`). À ajouter : enregistrement de la demande.
2. L'atelier ouvre la demande, saisit le prix final TTC et le nombre maximal de mensualités, clique « Envoyer le lien ».
3. Le client reçoit un e-mail ou un WhatsApp avec un lien vers **notre** page récapitulative (configuration, prix, conditions, case d'acceptation).
4. Au clic sur « Payer », notre serveur crée la page de paiement chez le prestataire et y redirige le client.
5. Le prestataire notifie notre serveur ; la commande passe à « payée » ; e-mails au client et à l'atelier ; facture émise par le prestataire.

## 5. Intégration technique (Grow, à adapter au prestataire retenu)

- **Création du paiement** : `POST /api/light/server/1.0/createPaymentProcess`, **uniquement depuis notre serveur** (les appels du navigateur sont bloqués), avec `pageCode` et `userId` propres au commerçant, fournis par Grow [V : [Grow](https://developers.grow.business/reference/create-payment-process-1)]. Bac à sable : `sandbox.meshulam.co.il`.
- **Lien à durée courte** : l'adresse de la page de paiement expire après une dizaine de minutes [S : [fiche d'intégration](https://skills.lc/skills-il/tax-and-finance/skills-il-tax-and-finance-grow-payment-gateway-skill-md)] **[?]**. D'où l'étape 4 : on ne met jamais ce lien dans un e-mail, on le crée au clic.
- **Notification** : Grow envoie un `POST` (formulaire, pas JSON) à notre `notifyUrl`, même si le client a quitté la page ; notre serveur doit répondre par l'appel `ApproveTransaction`. Sans confirmation, Grow réessaie à 10, 20 et 30 minutes [V : [Grow, réponse serveur](https://developers.grow.business/reference/server-response), [détail](https://developers.grow.business/reference/server-response-1)].
- **Ne jamais se fier à la redirection du navigateur** pour marquer une commande payée : seulement à la notification serveur, recoupée par une lecture de l'état de la transaction (`getPaymentProcessInfo`) [I, bonne pratique ; point d'accès cité par la fiche d'intégration].
- **Facture** : paramètre `invoiceNotifyUrl` pour recevoir la facture émise [V : [Grow](https://developers.grow.business/reference/invoice-server-response)].
- **Stockage des commandes** : Supabase (connecté, organisation Diamond3D), table `orders` avec statuts devis → confirmé → payé → en fabrication → expédié ; accès serveur seulement.
- **Secrets** : identifiants du prestataire dans les variables d'environnement Vercel, jamais dans le dépôt.
- **Tests** : bac à sable du prestataire ; tests navigateur avec le prestataire simulé, comme pour l'envoi des devis.

## 6. Obligations

- **Prix TTC** : TVA de 18 % (déjà retenue dans le projet). Affichage du prix total en shekels [I : pratique et droit de la consommation] **[?] avocat**.
- **Facture** : elle doit venir d'un logiciel enregistré auprès de l'administration fiscale, avec une numérotation continue, et ne se modifie jamais (on corrige par un avoir) [S : [dev.to](https://dev.to/billos_app_3d708b28bbceea/issuing-an-israeli-tax-invoice-from-code-allocation-numbers-a-registered-ledger-and-an-mcp-server-22da)]. Conséquence : **laisser le prestataire ou le logiciel de facturation de l'atelier émettre la facture**, ne pas la fabriquer nous-mêmes.
- **Numéro d'allocation** (מספר הקצאה) : depuis le 1er juin 2026, exigé pour une facture fiscale de 5 000 ₪ hors TVA ou plus, comme condition pour que le **client assujetti** déduise la TVA [S concordantes : [vatupdate](https://www.vatupdate.com/2025/12/10/israel-accelerates-ctc-invoice-allocation-number-rollout-lower-thresholds-effective-2026/), [lookuptax](https://lookuptax.com/tax-changes/israel/ctc-allocation-number-clearance-2026), [slate.co.il](https://www.slate.co.il/en/guides/mispar-hakzaa)]. Nos clients sont des particuliers : peu concernés [I]. À prévoir pour une vente à une entreprise ; les logiciels de facturation connectés le demandent automatiquement **[?] comptable de l'atelier**.
- **Annulation** : 14 jours pour une vente à distance, avec une exception pour les biens fabriqués spécialement pour le client (voir `docs/STRATEGIE.md`, §6). L'applicabilité à une bague configurée reste **à valider par un avocat israélien**.
- **Données de carte** : aucune chez nous (page hébergée par un prestataire certifié PCI DSS) [V pour PayPlus : [PayPlus](https://payplus.co.il/en)].

## 7. La France, plus tard

- Stripe accepte les entreprises de 46 pays, dont la France et la plupart des pays de l'Union européenne [V : [Stripe](https://stripe.com/en-gb-de/use-cases/global-businesses)] : utilisable seulement si la vente en France passe par une **entité européenne**.
- Sinon, encaisser en euros par le prestataire israélien (cartes étrangères, commission plus élevée, change).
- TVA d'importation de 20 %, droits de douane, transport assuré : voir `docs/STRATEGIE.md`. Décision à prendre avec un comptable ; hors du lancement israélien.

## 8. Recommandation et étapes

1. **Ouvrir un compte Grow** au nom de l'entreprise de l'atelier (numéro d'entreprise, compte bancaire, pièce d'identité du dirigeant : **[?]** liste exacte à demander) et obtenir les identifiants du bac à sable.
2. **Demander deux devis de comparaison** (PayPlus, Cardcom), en posant les mêmes questions.
3. **Développer le parcours A** en bac à sable : 4 à 6 jours (plan d'exécution, étape 7).
4. **Activer le paiement réel** après un paiement de test de faible montant et la validation juridique des conditions de vente.

## 9. Questions à poser

**Au prestataire** :

1. Prix complet par écrit : abonnement, commission carte israélienne, carte étrangère, Bit, remboursement, frais d'ouverture.
2. Délai de versement des fonds ; cas du paiement en plusieurs fois (versé d'avance ou au fil des mensualités, et à quel coût).
3. Plafond par transaction pour Bit et pour la carte ; nombre maximal de mensualités.
4. Durée de validité d'une page de paiement ; existence d'un lien de paiement durable.
5. Facture automatique : type de document, numéro d'allocation, envoi au client en hébreu, français, anglais.
6. Contestations de paiement : procédure, délais, pièces à fournir pour un bijou sur mesure livré.
7. Authentification 3-D Secure pour les montants élevés.

**À l'atelier** (déjà dans la relance du 13/11, points 8 et 16) : moyens de paiement voulus, qui vend et facture, numéro d'entreprise. À ajouter : la banque de l'entreprise, le logiciel de facturation actuel, le nom du comptable.

**À l'avocat** : conditions de vente et d'annulation pour un bijou configuré, mentions obligatoires sur la page de paiement, affichage du prix.
