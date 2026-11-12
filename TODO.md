# À faire

## Bloquant avant la suite
- [ ] Test sur appareils réels avec la préversion privée (https://claude.ai/artifact/9DTFa5XeY4THn1gpKfmHjv) : iPhone (Safari), Android milieu de gamme, ordinateur avec GPU.
- [ ] Relancer la campagne de mesure complète (`scripts/perf/measure.mjs`), interrompue deux fois.
- [ ] Validation de l'atelier pour ring-001 : griffes longues volontaires ? forme en « 8 » au bout de l'alliance ? métaux proposés ? teintes conformes aux photos ?

## Modèles
- [ ] Recevoir 3 autres fichiers .3dm et les intégrer.
- [ ] Têtes de pierre supplémentaires pour ring-001 (même ancrage), et prise en charge par le pipeline de variantes issues de fichiers séparés.
- [ ] Version web « griffes coupées », si l'atelier confirme.
- [ ] Poids réels des pierres, à la place des carats estimés.
- [ ] Densités des alliages du fondeur.

## Site
- [x] Phase 4, version légère : formulaire de devis envoyé par e-mail (sans base de données).
- [ ] Devis : choisir le compte SMTP de l'atelier et renseigner les variables en production ; tester la réception réelle (Gmail, Outlook).
- [ ] Devis : mentions de confidentialité (RGPD) à rédiger et à lier depuis le formulaire.
- [ ] Devis : si le volume augmente, stockage des demandes (Supabase ou équivalent) et limitation anti-abus partagée entre instances.
- [ ] Adresses traduites (`/en/configurator/…`), hébreu RTL.
- [ ] Tests Safari et Firefox.
- [ ] Calibrer les teintes des métaux sur des photos authentiques.
