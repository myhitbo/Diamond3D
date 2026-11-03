# Règles de tarification

**État au 3 novembre 2026 : structure connue, règles incomplètes.** Le configurateur affiche toujours « Sur devis ». Le schéma (`pricing.mode`) n'accepte aucune autre valeur tant que les points de la section « Manque » ne sont pas réglés.

Source des montants : synthèse de l'atelier du 3/11/2026 (`docs/REPONSES_ATELIER.md`). Tous les montants sont **indicatifs** et hors TVA.

## Structure du prix (communiquée par l'atelier)

```
prix HT = métal (poids × prix au gramme facturé, par titre)
        + pierre(s) (prix de la pierre selon nature, poids, qualité, certificat)
        + façon : maquette 3D + impression 3D + reprise de fonte et polissage (au gramme) + polissage final
        + sertissage (par pierre, selon la taille)
        + rhodiage (or blanc uniquement)
        + options (gravure, finition)
        × marge (variable selon la complexité)   ← à préciser
prix TTC = prix HT × (1 + TVA)
```

## Paramètres communiqués

| Paramètre | Valeur | Unité |
|---|---|---|
| Or 14 k, prix facturé au particulier | 370–380 | ILS/g |
| Or 14 k, coût d'achat | 270–280 (selon le cours) | ILS/g |
| Or 18 k, prix facturé au particulier | 470–480 | ILS/g |
| Or 18 k, prix facturé aux professionnels | 500–550 | ILS/g |
| Platine | **non communiqué** | — |
| Maquette 3D | 10 | USD |
| Impression 3D | 20–25 | USD |
| Reprise de fonte et polissage | 10 | USD/g |
| Polissage final | ≈ 5 | USD |
| Rhodiage (or blanc) | 20–25 selon le bijou | USD |
| Sertissage, pierre centrale ≤ 2 ct | ≈ 10 | USD |
| Sertissage, pierre centrale > 2 ct | 20–25 | USD |
| Sertissage, petites pierres / pavage | ≈ 1,50 | USD/pierre |
| Sertissage, rivière | 2–3 au maximum | USD/pierre |
| Diamant de laboratoire 1 ct (exemple) | ≈ 132 | USD |
| Certificat | dès 0,50 ct : GIA (naturel), IGI (laboratoire) | — |
| TVA Israël | 18 % (depuis le 1/1/2025) | — |
| Mise à taille | 1ʳᵉ offerte ; après 1 an, rétrécissement ≈ 100 ILS, agrandissement sur devis | — |

## Exemple de référence recalculé (or jaune 14 k, ≈ 2,5 g, diamant de laboratoire 1 ct)

| Poste | Montant |
|---|---|
| Métal : 2,5 g × 370–380 ILS | **925–950 ILS** |
| Diamant | 132 USD |
| Maquette 3D | 10 USD |
| Impression 3D | 20–25 USD |
| Reprise de fonte et polissage : 2,5 g × 10 USD | 25 USD |
| Sertissage pierre centrale | 10 USD |
| Polissage final | 5 USD |
| **Sous-total des postes en USD** | **202–207 USD** |

Le total en une seule devise n'est **pas** calculé ici : il dépend du taux USD/ILS et de la marge appliquée aux postes en USD, qui ne sont pas fixés.

## Manque, avant tout prix calculé

1. **Postes en USD : coût ou prix client ?** Le diamant à 132 USD ressemble à un prix d'achat. Quelle marge s'applique aux pierres et à la façon ?
2. **Double comptage possible** : les 370–380 ILS/g du métal incluent-ils déjà la fonte et le polissage (10 USD/g) ? L'atelier signale lui-même un risque de double comptage entre polissage final et rhodiage.
3. **Taux de change** USD → ILS (et EUR) : source et fréquence de mise à jour.
4. **Platine** : prix au gramme.
5. **Marge variable** : règle par catégorie (par exemple solitaire classique / bijou personnalisé / pièce complexe) ou décision au cas par cas ?
6. **Prix des pierres** : grille par forme, poids, couleur, pureté et origine, avec et sans certificat.
7. **Poids** : densités des alliages et taux de perte. À défaut, utiliser le poids mesuré sur la maquette, affiché « ≈ » avec ±5 % (unique exemple réel : 4,5 g estimés, 4,35 g fabriqués, −3,3 %).
8. **Arrondi** et **durée de validité** d'un prix.
9. **Vingt configurations de référence** chiffrées à la main pour tester le moteur.

## Affichage prévu

Avec une marge variable, le site affiche un **prix indicatif** (« à partir de … », fourchette), puis l'atelier le **confirme** dans le devis. Le prix devient « calculé » seulement pour les modèles simples dont la marge est fixée. Paiement : intégral à la commande sur le site, acompte de 50 % (30 % si le client hésite) pour les commandes passées directement à l'atelier.

## Données déjà disponibles dans le projet

- Volume de métal par bague, mesuré sur le fichier CAO : `src/models/<id>/geometry.json`.
- Estimation de poids affichée = volume × densité nominale publiée (`src/config/metals.ts`), hors pertes. **Ce n'est pas un poids de facturation.**
- Carats estimés à partir du volume des pierres modélisées. **Ce n'est pas le poids réel des pierres.**
