# Règles de tarification

**État : aucune règle définie.** Le configurateur affiche « Sur devis ». Le schéma (`pricing.mode`) n'accepte aucune autre valeur tant que l'atelier n'a pas fourni de règles réelles.

## Données disponibles

- Volume de métal par bague, mesuré sur le fichier CAO : `src/models/<id>/geometry.json`.
- Estimation de poids affichée = volume × densité nominale publiée (`src/config/metals.ts`), hors pertes de fonte et de finition. **Ce n'est pas un poids de facturation.**
- Carats estimés à partir du volume des pierres modélisées. **Ce n'est pas le poids réel des pierres.**

## À définir avec l'atelier

Source et fréquence du cours des métaux ; densités des alliages du fondeur ; pertes de fonte ; façon (heures ou forfait par modèle) ; sertissage par pierre ; grilles de prix des pierres (forme, poids, couleur, pureté, certificat, naturel ou laboratoire) ; marge ; taxes ; arrondis ; durée de validité d'un prix ; distinction entre prix indicatif, prix calculé et prix confirmé.
