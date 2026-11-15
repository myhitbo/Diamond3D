# Fichiers CAO

- `originals/` : fichiers de fabrication de l'atelier (Rhino `.3dm`, STL). Versionnés dans ce dépôt, **public depuis le 15/11/2026**. Ils restent modifiables : le pipeline les lit sans jamais les réécrire.
- `intermediate/` : sorties brutes du pipeline (GLB non optimisés, témoins de mesure). Régénérables, non versionnées.

Les modèles web optimisés sont dans `public/models/`, les métadonnées dans `src/models/<id>/`.
L'empreinte SHA-256 de la version convertie est enregistrée dans `pipeline/recipes/<id>.json` et `src/models/<id>/geometry.json`.
Si un fichier est retravaillé, le pipeline le signale, convertit la nouvelle version, et il reste à mettre à jour l'empreinte dans la recette.

Attention : le dépôt étant public (décision du propriétaire, 15/11/2026), ces fichiers de fabrication sont lisibles et téléchargeables par tous.
