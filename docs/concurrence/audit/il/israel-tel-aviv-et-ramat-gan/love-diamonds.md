# Audit : Love Diamonds (Ramat Gan) : **bloqué par le robots.txt, non audité**

| | |
|---|---|
| Site | Love Diamonds, Jabotinsky 1 (tour Yahalom), Ramat Gan (inventaire, V) |
| Date | 16/11/2026 |
| Statut | **non audité**. Le robots.txt du site (lu le 16/11, seule page ouverte) **nomme `ClaudeBot` avec `Disallow: /`**, ainsi qu'`anthropic-ai` et `Claude-Web`. Aucune page du site n'a été ouverte, ni avec curl ni avec le navigateur |
| robots.txt | `User-agent: *` : `Allow: /` avec « Content-Signal: search=yes, ai-train=no, use=reference » ; puis `Disallow: /` pour `ClaudeBot`, `anthropic-ai`, `Claude-Web`, `GPTBot`, `CCBot`, `Google-Extended`, `Amazonbot`, `Bytespider` et une vingtaine d'autres robots (V) |

Marques : **V** vérifié · **I** inféré · **S** supposé.

## Ce qui reste connu

- L'inventaire du 15/11 relevait, avant ce contrôle, un bouton « Design Your Forever » dont le lien (`/product-category/loose-diamonds/?lang=he&builder=ring&shape=cushion`) répondait **404**, et un site sous Cloudflare sans défi (V : `INVENTAIRE.md`). Ces constats datent d'avant la lecture du robots.txt d'aujourd'hui et **n'ont pas été revérifiés**.
- Le robots.txt a pu changer entre le 15/11 et le 16/11, ou ne pas avoir été lu avant la visite de l'accueil le 15/11 (I). Aucune conclusion n'est tirée.

## Limites

- Aucun parcours, aucun prix, aucune option relevés. Le site reste à regarder à la main par une personne, hors de cette étude automatisée.

## Sources

- https://lovediamonds.com/robots.txt (seule adresse ouverte le 16/11)
- Inventaire : `INVENTAIRE.md`
