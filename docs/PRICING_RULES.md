# Règles de tarification

**État au 4 novembre 2026 : structure connue, bénéfice à valider, taux de change et platine manquants.** Le configurateur affiche toujours « Sur devis ». Le schéma (`pricing.mode`) n'accepte aucune autre valeur tant que les points de la section « Manque » ne sont pas réglés.

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

## Bénéfice de la vente (4/11)

Les postes ci-dessus sont des **prix boutique** (tarifs de la Bourse). Le bénéfice s'ajoute :

```
bénéfice = fixe (par catégorie) + taux × matières (métal + pierres)    borné entre un minimum et un maximum
prix HT  = postes boutique + bénéfice
prix TTC = prix HT × 1,18
```

Donnée de l'atelier : 1 500 à 3 000 ₪ de bénéfice sur une bague de fiançailles en diamant synthétique. Le reste du tableau est une **proposition** à faire valider :

| Catégorie | Fixe | Part des matières | Minimum | Maximum |
|---|---|---|---|---|
| Bague de fiançailles | 1 500 ₪ | 25 % | 1 500 ₪ | 3 000 ₪ |
| Alliance | 600 ₪ | 25 % | 400 ₪ | 1 500 ₪ |
| Alliance de kiddouchin | 400 ₪ | 20 % | 300 ₪ | 800 ₪ |
| Autre bijou | 800 ₪ | 25 % | 500 ₪ | 3 000 ₪ |

Exemple de référence (2,5 g d'or 14 k, diamant synthétique 1 ct, taux de 3,7 ₪/$ pris pour l'illustration) [E] :
- matières ≈ 935 ₪ + 488 ₪ ≈ 1 425 ₪ ; bénéfice ≈ 1 500 + 25 % × 1 425 ≈ **1 860 ₪** ;
- postes boutique ≈ 935 ₪ + 205 $ × 3,7 ≈ 1 690 ₪ ;
- prix HT ≈ 3 550 ₪ ; **prix TTC ≈ 4 190 ₪**.

Question ouverte : avec un diamant **naturel** de 1 ct (plusieurs milliers de dollars), le plafond de 3 000 ₪ convient-il, ou faut-il une catégorie à part ?

## Manque, avant tout prix calculé

1. ~~Postes en USD : coût ou prix client ?~~ Prix boutique ; bénéfice à part (4/11).
2. ~~Double comptage~~ : métal et fabrication facturés séparément (4/11) [I]. Reste le doute signalé entre polissage final et rhodiage.
3. **Taux de change** USD → ILS : proposition, taux représentatif de la Banque d'Israël, mis à jour chaque jour ouvré.
4. **Platine** : prix au gramme, en cours auprès des fonderies.
5. **Bénéfice** : valider la formule et le tableau ci-dessus.
6. **Prix des pierres** : grille par forme, poids, couleur, pureté et origine, avec et sans certificat.
7. **Poids** : densités des alliages et taux de perte. À défaut, poids mesuré sur la maquette, affiché « ≈ » avec ±5 %.
8. **Arrondi** et **durée de validité** d'un prix.
9. **Vingt configurations de référence** chiffrées à la main pour tester le moteur.

## Affichage prévu

Avec une marge variable, le site affiche un **prix indicatif** (« à partir de … », fourchette), puis l'atelier le **confirme** dans le devis. Le prix devient « calculé » seulement pour les modèles simples dont la marge est fixée. Paiement : intégral à la commande sur le site, acompte de 50 % (30 % si le client hésite) pour les commandes passées directement à l'atelier.

## Moteur de prix (4/11, non branché sur le site)

- Code : `src/lib/pricing/engine.ts` ; paramètres de l'atelier : `src/config/pricing.ts` ; tests : `tests/unit/pricing.test.ts`.
- Sortie : prix indicatif en ₪, hors taxe et TTC (TVA 18 %), sous forme de fourchette, avec le détail par poste, et un prix « à partir de » (bas de fourchette TTC, arrondi à la dizaine inférieure).
- Tant qu'un paramètre manque, le moteur **refuse de calculer** et liste les manques. Avec les paramètres actuels, il répond : règle de bénéfice non validée, taux de change non choisi. S'y ajoutent, selon la configuration, le prix du platine et le prix des pierres.
- Hypothèses de structure à faire valider [S] :
  1. le bénéfice se calcule sur les matières (métal + pierres), pas sur la façon ;
  2. le poids est pris à ±5 %.
- L'exemple de référence ci-dessus est retrouvé exactement par les tests (métal 925–950 ₪, postes en USD 202–207 $).

## Données déjà disponibles dans le projet

- Volume de métal par bague, mesuré sur le fichier CAO : `src/models/<id>/geometry.json`.
- Estimation de poids affichée = volume × densité nominale publiée (`src/config/metals.ts`), hors pertes. **Ce n'est pas un poids de facturation.**
- Carats estimés à partir du volume des pierres modélisées. **Ce n'est pas le poids réel des pierres.**
