# Réponses de l'atelier

Journal des réponses reçues, par date. Chaque réponse est recopiée telle quelle, puis interprétée. Une réponse ici prime sur les hypothèses des autres documents.

Légende : **[V]** vérifié · **[I]** inféré · **[?]** à confirmer.

---

## 22 octobre 2026 — Yonathan Cohen (WhatsApp, transmis par le propriétaire le 3 novembre)

### Message reçu

> Pierre :
> Diamant naturel
> Diamant laboratoire
> Diamant de couleur : noir, rose, bleu, tt les couleurs
> Pierre de couleur :
> Emeraude, saphire, rubis naturel (et en synthétique c'est du verre genre bcp moins cher)
> Métaux :
> Or 14/18 k (jaune, rose, blanc)
>
> Pour le platine j'ai jamais eu de demande, c'est rare en Israël, faut que je me renseigne.

Compléments du propriétaire : **le platine est finalement confirmé**. Bibliothèque de modèles : **CGTrader**, y compris sa partie gratuite. **dd-diamond.com** est un exemple de site avec de la 3D (rectification du 3 novembre), pas une bibliothèque.

### Ce qui est acquis

| Sujet | Réponse | Conséquence pour le projet |
|---|---|---|
| Diamants | Naturel **et** laboratoire | option « Origine » conservée (déjà dans le schéma, sans effet visuel) |
| Diamants de couleur | Noir, rose, bleu, « toutes les couleurs » | nouveau rendu de pierre teintée ; liste exacte des couleurs à fixer [?] |
| Pierres de couleur | Émeraude, saphir, rubis, naturels | trois matériaux de pierre dédiés (indice et teinte propres) |
| Pierres de couleur synthétiques | Proposées, beaucoup moins chères | voir point de vigilance 1 |
| Métaux | Or 14 k et 18 k, jaune, rose, blanc | 6 combinaisons titre × couleur ; densités différentes entre 14 k et 18 k |
| Platine | Oui (confirmé après coup) | 7ᵉ métal ; demande rare en Israël [I] : à proposer sans le mettre en avant |
| Griffes longues | Réponse déjà donnée selon le propriétaire, contenu non transmis | toujours à consigner ici [?] |

### Points de vigilance

1. **« Synthétique, c'est du verre » : la distinction compte, juridiquement et commercialement.**
   - Un rubis, un saphir ou une émeraude **synthétique** est le même minéral que la pierre naturelle (même composition, même structure cristalline), fabriqué en laboratoire. Une **imitation** (verre, par exemple) a seulement l'apparence de la pierre, avec une autre composition [V : définition GIA reprise par l'AGTA ; page GIA sur les imitations].
   - En France, le décret n° 2002-65 impose le mot **« synthétique »** pour ces pierres. Selon la DGCCRF, il interdit aussi « de culture » et « cultivé », ce qui exclut « diamant de laboratoire » dans un affichage commercial en français [V : DGCCRF, OQLF, réponse ministérielle ; texte Légifrance non relu].
   - Les règles israéliennes et américaines n'ont pas été vérifiées [?].
   - Décision : dans le configurateur, trois catégories distinctes, **naturelle / synthétique / imitation**, jamais confondues. Libellé français « diamant synthétique », avec un libellé adapté par pays (« lab-grown » en anglais, à vérifier pour chaque marché). L'atelier doit dire ce qu'il vend réellement : pierres synthétiques ou verre [?].
2. **Diamants de couleur** : les diamants noirs et beaucoup de diamants de couleur du commerce sont traités, ou synthétiques. L'origine (naturelle / traitée / synthétique) doit être indiquée par pierre [I ; à confirmer avec le certificat].
3. **Exemple DD Diamond** : voir ci-dessous.

### Exemple de site : dd-diamond.com (analysé le 3 novembre 2026)

Rectification du propriétaire : DD Diamond est un **exemple de site avec 3D**, pas une source de modèles. La bibliothèque de modèles est **CGTrader** (voir `CAHIER_DES_CHARGES.md`, PIP-7).

**Qui** [V] : boutique Shopify de DD.Diamond, fondée en 2015 par David Douieb (diplômé du GIA), bureaux à Anvers, en France et en Israël ; 333 produits dont 127 bagues ; bagues de 290 $ à 12 900 $ (médiane 1 700 $) ; métaux or 14/18 k jaune / blanc / rose et platine.

**Ce que fait réellement leur « 3D »** (fiche *Floating Pear Ring*, inspectée dans un navigateur) [V] :
- ce n'est **pas de la 3D** : c'est l'application Shopify **Magic 360** (Magic Toolbox), qui fait défiler **36 photos** (1280 × 1040) de la vraie bague prises sur un plateau tournant ; bouton « 360° », « Drag to spin », zoom, plein écran ;
- aucun moteur 3D, aucun fichier de modèle ;
- la rotation ne se fait que sur un axe horizontal ;
- le tour à 360° n'existe **qu'en or blanc** ; l'or jaune et l'or rose n'ont que des photos fixes. Changer de métal ne change pas le tour ;
- aucune configuration : pierre, carat et forme ne se choisissent pas visuellement ; « autres tailles de diamant sur demande » par e-mail ; bouton « Request a quote » ;
- page lourde : environ **11 Mo** téléchargés, pisteurs Facebook / Google / Klaviyo, contact WhatsApp.

**Ce qu'il faut en retenir** [I] :
- Le point fort est réel : ce sont des **photos du vrai bijou**, donc un réalisme total pour la pièce photographiée. Le client voit la vraie pierre. C'est ce que montrent aussi James Allen et Blue Nile avec leurs vidéos de diamants.
- Les limites sont celles de la photo : un shooting de 36 vues par bijou **et par métal**, aucune variante sans nouveau shooting, rotation sur un seul axe, poids important.
- Pour JR Diamond, la bonne réponse combine les deux : le **configurateur 3D** pour toutes les combinaisons (métal, pierre, forme), plus des **photos ou un tour à 360° de la pièce réelle** quand elle existe, affichés à côté du rendu (exigence CFG-10). On garde la preuve de la photo et la souplesse de la 3D.
- À reprendre de DD Diamond : bouton « Demander un devis » visible, contact WhatsApp (important en Israël), guide des tailles, page d'éducation sur les diamants, photos portées sur la main.

### Sources

- Définition synthétique / imitation : https://4cs.gia.edu/en-us/blog/what-are-synthetic-gemstones-3/ · https://www.gia.edu/gem-imitation · https://jckonline.com/?p=34528
- Réglementation française : https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/qualite-et-conformite-des-bijoux-comportant-des-pierres · https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26529621/diamant-synthetique · https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE5268.pdf
- DD Diamond (exemple) : https://www.dd-diamond.com/products/floating-pear-ring (inspection navigateur), https://www.dd-diamond.com/ · https://www.dd-diamond.com/pages/about · https://www.dd-diamond.com/pages/design-your-jewelry · catalogue public `https://www.dd-diamond.com/products.json`
