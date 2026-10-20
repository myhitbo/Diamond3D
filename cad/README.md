# Fichiers CAO

- `originals/` : fichiers de fabrication **originaux**, en lecture seule (`chmod 444`). Jamais modifiés, jamais versionnés.
- `intermediate/` : sorties brutes du pipeline (GLB non optimisés, témoins de mesure). Régénérables, non versionnées.

Les modèles web optimisés sont dans `public/models/`, les métadonnées dans `src/models/<id>/`.
Empreintes attendues : voir `pipeline/recipes/<id>.json`.
