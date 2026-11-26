# Présentation de l'étude de concurrence (PDF)

Un PDF de 45 pages au format A5 debout (une page par écran de téléphone ; les tableaux et les fiches y demandent un zoom), pour partager l'étude avec des collègues, mis en page comme un catalogue de haute joaillerie (demande du propriétaire du 26/11). Il compare JR Diamond aux joailliers en ligne de **trois marchés : États-Unis, France, Israël** (245 des 371 sites de l'étude ; demande du propriétaire du 26/11). L'Europe hors France et l'Australie n'y figurent pas : elles restent dans `../SYNTHESE.md` et dans `../audit/`.

Après la couverture, l'essentiel en une page et la méthode, quatre parties, chacune ouverte par une page noire qui porte un rendu 3D de la bague :

1. **I · La synthèse** (12 pages) : le tableau de bord « JR Diamond face aux trois marchés », huit constats avec captures commentées, les forums, l'alliance de kiddouchin.
2. **II · Site par site** (13 pages) : pour Israël (21 sites), la France (8) et les vendeurs nationaux américains (12), une page de marché, un tableau de dix critères et une fiche par site. Un site sans capture est décrit comme les autres ; la raison de l'absence d'image est écrite à sa place.
3. **III · Ce que nous en faisons** (5 pages) : nos avantages, ce qu'il ne faut pas copier, ce que l'étude a déjà changé sur le site, qui fait quoi, les limites.
4. **Annexe** (7 pages) : les 204 joailliers des 50 États américains, un par un. Puis la page des sources.

Le PDF est balisé (lecteurs d'écran), porte un signet par page et des liens internes.

## Ce qui est dans le dépôt, ce qui n'y est pas

| Fichier | Rôle | Dans le dépôt |
|---|---|---|
| `etude.html` | texte des pages rédigées à la main (synthèse, pages de marché, conclusions) | oui |
| `extraire.py` | tire des synthèses d'audit la liste des sites des trois marchés → `donnees/sites.json` | oui |
| `donnees/sites.json` | 246 lignes : Israël 21, France 9 (dont 1 bloqué), États-Unis 216 ; statut, visuel, prix relevé, rapport, site bloqué, site qui demande une identification | oui |
| `pages_sites.py` | tableaux, fiches et annexe (`.fragments/`) ; contient les dix critères et la phrase « à retenir » de chaque site | oui |
| `style.css` | mise en page (identité du site : noir, ivoire, or ; Bodoni Moda et Jost) ; voir « Mise en page » plus bas | oui |
| `build.mjs` | assemble, numérote, met l'annexe en colonnes, contrôle les débordements, imprime le PDF avec Chromium (Playwright) | oui |
| `signets.py` | pose les signets (un par page) et les métadonnées du PDF ; demande `pypdf` | oui |
| `images.json`, `crop.py` | liste des images (site, pays, adresse, date, fichier d'origine, recadrage) et recadrage vers `img/` | oui |
| `img/`, `fonts/`, `dist/`, `.fragments/` | captures recadrées, polices téléchargées, PDF et aperçus, pages fabriquées | **non** (`.gitignore`) |
| `droits.txt` | mention de droits imprimée sur chaque page : une ligne, « © année Nom du titulaire » | **non** (`.gitignore`) : le nom du titulaire n'est pas écrit dans le dépôt public |

Le dépôt est public : **les captures des sites concurrents et le PDF n'y sont pas versionnés**. Le PDF se partage de la main à la main ; les captures d'origine restent dans le dossier de travail de la session qui les a prises (`audit/`, `fresh/`, `own/`).

## Refaire le PDF

```sh
# 1. Données : seulement si une synthèse d'audit a changé
python3 docs/concurrence/presentation/extraire.py

# 2. Images : à partir d'un dossier qui contient audit/, fresh/ et own/ (voir images.json)
python3 docs/concurrence/presentation/crop.py <dossier_des_captures>

# 3. Mention de droits : une ligne dans droits.txt, à demander au propriétaire (le fichier n'est pas dans le dépôt)
printf '© 2026 Nom du titulaire\n' > docs/concurrence/presentation/droits.txt

# 4. PDF (--apercus : une image par page dans dist/pages/ ; --garder : garde la page assemblée pour une relecture du texte)
CHROMIUM_PATH=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome \
  node docs/concurrence/presentation/build.mjs --apercus
```

- Sortie : `dist/JR-Diamond_Etude-de-concurrence_2026-11.pdf`.
- `build.mjs` lance `pages_sites.py`, qui vérifie que les totaux des tableaux recoupent la synthèse (Israël : 16, 7, 2, 1, 16 + 1, 10, 10, 16, 14, 8 ; France : 7, 5 + 1, 0, 2, 5, 7, 6 + 2, 8, 4 + 1, 6 ; « + n » : cases à nuancer) et s'arrête sinon.
- Dans `etude.html` : `<!--@inclure nom-->` insère `.fragments/nom.html` ; `data-ancre="x"` nomme une page ; `{{page:x}}` et `href="#@x"` y renvoient, avec le bon numéro.
- Le script doit dire « mention de droits : sur 45 pages » : sans `droits.txt`, le PDF sort sans mention.
- Le script doit finir par « aucune page ne dépasse ». Relire ensuite les aperçus page par page : le contrôle automatique ne voit ni un repère mal placé sur une capture, ni un texte qui en recouvre un autre.
- Poids attendu : 7 Mo environ. S'il double, voir « Mise en page », dernier point.

## Mise en page

- **Thème par page** : chaque page règle ses couleurs par des variables (`--bg`, `--fg`, `--soft`, `--rule`, `--accent`, `--hair`, `--fill`, `--track`) ; `.page` est ivoire, `.page.cream` crème, `.page.dark` noire. Un composant n'écrit jamais une couleur en dur : il lit ces variables.
- **Typographie** : titres, chiffres et numéros en Bodoni Moda (l'italique doré porte le mot important du titre) ; texte en Jost ; surtitres et étiquettes en petites capitales espacées.
- **Ornements** : filet et losange en tête de page ; double filet `.cadre` sur la couverture et les ouvertures ; cartouche `.chez` (double filet, étiquette posée sur le bord) pour ce qui nous concerne ; citations de forums sur fond noir ; `.orn.fin` clôt une liste de fiches ou un chapitre.
- **Logo** : celui de l'atelier, tel que le site le montre (`public/images/logo-jr-atelier.webp`, lu dans le dépôt), sur la couverture et sur la dernière page. Les captures de notre propre site ont été refaites le 26/11 après son arrivée dans l'en-tête.
- **Pages d'ouverture** (`.opener`) : un rendu 3D, un numéro, un titre, une ligne. Le fond de ces pages et de la couverture est le noir pur `#000`, et les rendus sont aplatis sur `#000000` dans `images.json` : sur un noir différent, le rectangle de l'image se voit.
- **Mention de droits** (demande du propriétaire du 26/11) : sur chaque page, posée par `build.mjs` après la mise en pages ; au milieu du pied de page, en or, et, sur les pages à cadre (couverture, ouvertures), en étiquette sur le double filet du bas. La dernière page dit que les captures d'écran restent la propriété des sites cités.
- **États et repères** : losange plein, losange à demi rempli, tiret (`.pt`) ; pastilles « Fait », « À faire », « Atelier », « Propriétaire », « Avocat » avec leur mot. Ces formes sont dessinées en CSS (les polices n'ont pas ces signes).
- **Piège de poids** : un dégradé CSS placé sous une rotation (`transform: rotate`), ou découpé par le texte (`background-clip: text`), fait pixelliser la page entière par Chromium à l'impression : le PDF passe de 7 à 17 Mo. Pour un losange ou un demi-losange, n'employer que des formes pleines (bordure épaisse, `box-shadow`). Un dégradé sans rotation (fondu d'une image vers le noir) ne coûte rien.

## Règles suivies

- **Chiffres** : ils viennent de `../SYNTHESE.md`, des deux comparaisons vérifiées du 26/11 et des synthèses d'audit (`../audit/il/`, `../audit/eu/france/`, `../audit/us/`). Le texte a été relu deux fois, affirmation par affirmation, contre ces sources ; toute correction de la synthèse se reporte ici, et inversement.
- **Conventions** : « sur 12 » = les 12 vendeurs nationaux américains (7 visités, 5 lus sans visite) ; « sur 8 » = France ; « sur 21 » = Israël (trois synthèses additionnées, relevé le plus récent quand un site a été vu deux fois).
- **Captures de sites tiers** : seulement des pages que `robots.txt` autorise (groupes « * » et agents Claude, domaine voisin compris), et seulement des sites dont ni `agents.md` ni `llms.txt` n'exigent une identification des agents (relevé du 26/11/2026, `../audit/AGENTS_MD_2026-11-26.md`). **Cookies : toujours refusés** (décision du propriétaire du 26/11) : par le bouton de refus, ou par le panneau de réglages puis son refus (Gemmyo, La Maison de l'Alliance), ou par un simple lien (Lavi). Sans refus proposé, aucun clic : l'image est cadrée hors du bandeau (Louisa, Blue Nile, Olive Ave), ou il n'y a pas de capture. Un refus que le site lie à l'acceptation de ses conditions d'utilisation n'est pas cliqué non plus (VRAI : pas de capture). `images.json` dit, image par image, ce qui a été cliqué (`note`). Les captures prises après une acceptation (par nous le 26/11, ou par les audits des 15 au 25/11 : DAZZ, Diamony, Louisa, VRAI, Clean Origin) ont été refaites le 26/11. Chaque capture porte le nom du site, son pays et sa date.
- **Repères sur les captures** (`.mark`) : positions en pourcentage de l'image recadrée ; une pastille numérotée renvoie à la légende, aucune étiquette ne recouvre le contenu.
- **Forums** : citations de 25 mots au plus, sans pseudonyme, deux par marché.
- **Graphiques et tableaux** : une seule teinte ; valeurs écrites à l'encre du texte ; un état n'est jamais porté par la couleur seule (disque plein, demi-disque, tiret ; pastilles « Fait », « À faire », « Atelier » avec leur mot).
- **Images de la bague** : rendus 3D du modèle de l'atelier (`public/images/rendus/`), légendés « pas une photo ».
