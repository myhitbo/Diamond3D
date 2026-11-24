# Audit : Scott's Diamond Designs (Overland Park, Kansas)

- **Site** : Scott's Diamond Designs (boutique Shopify)
- **Adresse de départ** : https://www.scottsdiamonddesigns.com/pages/mountings
- **Date** : 15/11/2026
- **Appareils** : ordinateur (Chromium 1366x900) ; affichage iPhone 13 : seulement le temps de chargement du document, aucun contrôle relevé
- **Statut** : **partiel**, avec une interruption. La page de départ a été ouverte une fois et ses contrôles listés. Je voulais ensuite lire les pages de politique, la FAQ, la page de bagues de fiançailles et la page du panier (robots.txt les autorise, sauf `/cart/` avec barre finale et `/cart.js`). Le contrôle d'autorisation de la session a refusé la commande qui lançait cette lecture automatisée (motif : accès non autorisé). Je n'ai pas contourné ce refus et je n'ai plus rien ouvert sur ce site. Le fichier `agents.md` du site (copie locale prise le 15/11 lors du recensement) demande que les agents s'identifient comme tels, passent par les interfaces UCP/MCP de Shopify et ne fassent pas de remplissage scripté de pages de commande : c'est probablement ce que le refus protège [I].
- Légende : **[V]** vérifié (page ouverte ou contrôle listé, adresse indiquée) ; **[R]** relevé par le recenseur du 15/11 (`INVENTAIRE.md`, source V10/V11), non revérifié ; **[I]** inféré ; **[S]** supposé.

## Parcours

| Étape | Adresse | Options |
|---|---|---|
| Accueil des montures | `/pages/mountings` | texte « Explore thousands of options that can provide the perfect setting for any diamond or gemstone », bouton « Shop All », section « Jewelry Mountings » [V] |
| Constructeur / catalogue | iframe `https://scotts-frame-categoryembed.jewelershowcase.com/browse/mountings` (hauteur 2 500 px) | « Adjust the stone type, shape, and size as well as metal quality and color on more than 2,800 customizable designs » [R]. **Non exploré** : robots.txt du domaine `Disallow: /` |
| Autres pages du menu | `/pages/bridal`, `/pages/jewelry`, `/pages/diamonds-1`, `/pages/gemstones`, `/pages/metals`, `/pages/services` | non ouvertes |
| Constructeur d'alliance et diamants de laboratoire | pages « Stuller's Band Builder » et « Lab Diamonds » en iframe [R] | non explorés |
| Panier | `/cart` (lien « Cart 0 items ») | non ouvert |

## Contrôles vérifiés

Liste établie par controls.cjs sur https://www.scottsdiamonddesigns.com/pages/mountings, ordinateur : 50 contrôles visibles. Aucun n'a été actionné : seule la page de départ a été chargée.

| Libellé | Type | Effet observé | Prix | État |
|---|---|---|---|---|
| (913) 492-0011 (barre haute et pied de page) | lien `tel:` | non actionné | n/a | non testé |
| Facebook, Instagram | liens | vers les pages de la boutique ; non ouverts | n/a | non testés |
| Recherche (champ + bouton) | champ de recherche | non utilisé | n/a | non testé |
| BRIDAL, JEWELRY, MOUNTINGS, JEWELRY COMPONENTS, DIAMONDS, GEMSTONES, METALS | liens de menu | `/pages/bridal`, `/pages/jewelry`, `/pages/mountings`, `/pages/jewelry-components`, `/pages/diamonds-1`, `/pages/gemstones`, `/pages/metals` | n/a | non testés |
| DESIGNERS, SERVICES, ABOUT US, CONTACT US | liens de menu | `#` (déroulant), `/pages/services`, `/pages/about-us`, `/pages/contact-us` | n/a | non testés |
| Log in | lien | redirection vers l'authentification Shopify ; interdit pour les robots (`/account`) | n/a | non testé |
| Wish Lists | lien | `/pages/wish-list` | n/a | non testé |
| Cart (0 items) | lien | `/cart` | n/a | non testé |
| Fenêtre « Join our mailing list » | fenêtre au chargement, bouton Close, champ courriel, bouton SUBMIT | s'affiche au premier chargement sur la capture d'écran ; non rempli (règle) | n/a | non testée |
| Pied de page : Pendants & Necklaces, Bridal Sets, Bracelets & Bangles, Rings, Earrings | liens de collections | `/collections/jewelry-…` | n/a | non testés |
| Pied de page : Testimonials, FAQ's, Terms of Use, Privacy, Refund, Shipping, Contact, Store Location | liens | `/pages/testimonials`, `/pages/faqs`, `/policies/…`, `/pages/contact-us`, `/pages/store-location` | n/a | non testés |
| info@scottsdiamonddesigns.com | lien `mailto:` | non actionné | n/a | non testé |
| Abonnement à la liste (pied de page) | champ courriel + SUBMIT | non rempli | n/a | non testé |
| Menu d'accessibilité (bouton rond en bas à gauche) | bouton | présent ; non ouvert | n/a | non testé |
| Panneau latéral droit : historique, partage, haut de page | 3 icônes | présentes sur la capture ; non actionnées | n/a | non testées |
| Contrôles de l'iframe Stuller (métal, forme, taille, filtres, prix) | iframe | **non explorés** : robots.txt du domaine `Disallow: /` | n/a | bloqué |
| Modes photo, vidéo, 360°, 3D, sur la main, AR, zoom ; partager, enregistrer, comparer, guide des tailles, financement, rendez-vous, chat, WhatsApp, essayage | — | non relevés : aucune fiche ouverte | n/a | non testés |

## Options disponibles

- **Annoncées** [R] : type de pierre, forme, taille, qualité et couleur du métal, sur plus de 2 800 modèles personnalisables (iframe Stuller). Rien n'est vérifié dans l'iframe.
- **Vérifiées** [V] : catégories de menu (bridal, jewelry, mountings, jewelry components, diamonds, gemstones, metals, designers, services) ; collections du pied de page (pendentifs, ensembles de mariage, bracelets, bagues, boucles d'oreilles) ; listes de souhaits et compte.

## Prix, délais, retours, garanties

- **Prix** : aucun prix lu sur la page de départ. Exemple relevé par le recenseur : bague or 14 k à 700 $ [R]. Décomposition inconnue.
- **Délai, retours, garantie, livraison** : pages `/policies/refund-policy`, `/policies/shipping-policy` et `/pages/faqs` existent (liens du pied de page [V]) ; **leur contenu n'a pas été lu**. Aucun chiffre n'est donné ici.
- **Paiement** : boutique Shopify ; moyens non vus (panier non ouvert).
- **Devise, langue** : prix en dollars [R], site en anglais [V].

## Confiance et service

- Téléphone (913) 492-0011, courriel `info@scottsdiamonddesigns.com`, page « Store Location », page « Testimonials » (non lue) [V].
- Avis chiffrés, preuves de fabrication (photos ou vidéos d'atelier), suivi de commande : non relevés.
- Libellé du synthétique : page « Lab Diamonds » [R]. Certificats : non relevés.

## Points forts à retenir pour JR Diamond

1. **Le catalogue personnalisable est entièrement délégué à une iframe tierce** : le site ne maintient pas de configurateur propre (preuve : l'iframe Stuller de 2 500 px sur `/pages/mountings`, adresse ci-dessus). Pour JR Diamond, ce n'est pas un modèle à suivre : la 3D issue du fichier de fabrication est un avantage que ce site n'a pas [I].
2. **Boutique à prix affichés et panier ouvert à tous** (lien « Cart » sur chaque page [V]) : le prix en ligne reste la norme du marché local ; les prix lus par le recenseur sont publics [R].
3. Fenêtre d'inscription à une liste d'envoi dès la première visite : mécanique de capture de contacts à envisager avec le consentement requis [V].

## Défauts observés

- **Page de départ sans contenu natif** : tout le catalogue dépend d'une iframe d'un fournisseur ; le temps d'apparition du visuel principal n'a donc pas pu être mesuré honnêtement, seule la page hôte l'a été [V, I].
- Fenêtre d'inscription qui couvre le titre dès l'arrivée (capture ordinateur) [V].
- Pas de moteur de configuration visible hors de l'iframe, donc aucun prix de bague configurée relevé [I].

## Limites de l'audit

- **Audit très partiel** : une seule page chargée sur ordinateur, aucun contrôle actionné, aucune fiche produit, aucun panier, aucune politique lue, aucun relevé de contrôles en affichage iPhone.
- L'iframe Stuller a été chargée par le navigateur en même temps que la page hôte avant que je bloque ce domaine dans mes scripts ; je n'y ai fait aucun clic, aucune lecture de contenu, aucune requête supplémentaire.
- Mesure : `DOMContentLoaded` de la page hôte à **1 288 ms** (ordinateur) et **1 649 ms** (iPhone 13), via le proxy cloud, une seule mesure. Ce n'est pas le temps d'apparition du visuel (l'iframe n'a pas été mesurée).
- Le refus du contrôle d'autorisation a arrêté l'automatisation sur ce site. Pour compléter : une relecture manuelle d'un humain, ou une lecture par les interfaces prévues par le site (UCP/MCP de Shopify, décrites dans `agents.md`), si le propriétaire l'autorise.

## Sources

Lues ou ouvertes le 15/11/2026 : https://www.scottsdiamonddesigns.com/robots.txt ; https://www.scottsdiamonddesigns.com/agents.md (copie locale du recensement) ; https://www.scottsdiamonddesigns.com/pages/mountings (liste de contrôles, capture, adresse de l'iframe). Repris sans revérification : `docs/concurrence/audit/us/kansas/INVENTAIRE.md` (lignes Scott's, sources V10 et V11).
