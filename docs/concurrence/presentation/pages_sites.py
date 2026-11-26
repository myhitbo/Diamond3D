#!/usr/bin/env python3
"""Fabrique les pages « site par site » du PDF (Israël, France, vendeurs nationaux américains, annexe des États).
Lit donnees/sites.json (tiré des synthèses par extraire.py) et les fiches rédigées ci-dessous ; écrit .fragments/*.html,
que build.mjs insère dans etude.html à la place des marques <!--@inclure nom-->.
Critères des tableaux (10 colonnes) : prix affiché, prix qui suit une option, monture et pierre séparées, 3D temps réel, WhatsApp,
rendez-vous / visio / rappel, paiement en plusieurs fois, retours écrits, garantie écrite, mise à taille offerte.
Codes : x = relevé sur le site ; o = à nuancer (lu sans visite, contradictoire ou relevé une fois sur deux) ; - = non relevé."""
import html, json, os, re

here = os.path.dirname(os.path.abspath(__file__))
SITES = json.load(open(os.path.join(here, 'donnees', 'sites.json'), encoding='utf-8'))
OUT = os.path.join(here, '.fragments')
os.makedirs(OUT, exist_ok=True)
FOLIO = '  <div class="folio"><span>JR Diamond · Étude de concurrence</span><span class="num"></span></div>\n'
CRITERES = ['Prix affiché', 'Prix qui suit une option', 'Monture et pierre séparées', '3D en temps réel', 'WhatsApp', 'Rendez-vous, visio ou rappel',
            'Paiement en plusieurs fois', 'Retours écrits', 'Garantie écrite', 'Mise à taille offerte']
JR = ('JR Diamond', 'Ramat Gan, Bourse', '---xx----x')

# ---------------------------------------------------------------- Israël : 21 sites
# (nom dans sites.json, nom affiché, lieu, critères, vignette ou None, raison de l'absence de capture, à retenir, prix repère)
ISRAEL = [
 ('Ramat Gan et la Bourse du diamant', [
  ('DAZZ', 'DAZZ', 'Bourse, bâtiment Maccabi', 'xx--xx-xxx', 'th_dazz', '',
   'Constructeur en 5 étapes ; le prix suit chaque clic. La commande part par WhatsApp avec le modèle, le carat, le prix et le lien. Défaut : la même image de 1 à 4 carats.',
   'solitaire rond 14 carats, TVA comprise : 2 650 ₪ en synthétique (1 ct), 21 200 ₪ en naturel'),
  ('Shiree Odiz', 'Shiree Odiz', 'Bourse, Shoham 5', 'xxx-xxxxxx', None, 'ident',
   'Vend une pierre précise : photo réelle, numéro de stock, certificat GIA. Monture et pierre séparées au panier ; 10 paiements ; 4,9 sur 5 pour 892 avis. Défaut : des retours qui se contredisent.',
   'monture 1 999 ₪ + ovale 1,01 ct GIA 8 400 ₪ = 10 399 ₪'),
  ('Joolme', 'Joolme', 'Ramat Gan, Bourse', 'xx--xxxxxx', None, 'ident',
   'Quatre étapes sur une seule adresse ; le prix suit couleur, pureté, poids, origine et or. Date de livraison estimée sur la fiche ; annulation chiffrée à chaque stade. Défaut : un diamant générique en image.',
   '« Albireo » en synthétique : 2 900 ₪ (0,25 ct) à 7 660 ₪ (3 ct) ; 95 300 ₪ en naturel à 3 ct'),
  ("Levy's Jewelry", "Levy's", 'Ramat Gan, Bourse', 'xx--x-xx-x', None, 'ident',
   'Curseur de poids à 7 crans ; date de livraison sur la fiche ; jusqu\'à 24 paiements. Défaut : 30 jours de retour sur la fiche, 48 heures dans la politique.',
   '« Santorini » ovale synthétique 14 carats : 3 000 ₪ (0,70 ct) à 10 700 ₪ (4 ct)'),
  ('B-Gem', 'B-Gem', 'Ramat Gan, Jabotinsky 3', 'x-x----xx-', 'th_bgem', '',
   'Prix en dollars, hors TVA ; 2 513 diamants filtrables jusqu\'à la fluorescence. « Setting price » et « Gemstone price » séparés. Défaut : la vue à 360° était en panne.',
   'monture 519 $ + diamant 0,60 ct 1 326 $ = 1 845 $ hors TVA'),
  ('Rozenbaum', 'Rozenbaum', 'Ramat Gan, Zisman Shalom 3', 'xx--x-xxxx', None, 'inconnu',
   'Panier en trois clics, livraison gratuite, 8 paiements. Défaut : 2 jours ouvrés pour un retour, aucun pour le synthétique.',
   '« Danielle » naturel, or blanc : 3 320 ₪ (0,30 ct) à 14 200 ₪ (1 ct)'),
  ('Daskalo Diamonds', 'Daskalo', 'Bourse, Tuval 23', 'x---xxxxxx', 'th_daskalo', '',
   'Catalogue à prix barrés ; 12 paiements sans intérêt ; rappel par un expert ; livraison offerte et retrait à la Bourse. Défaut : l\'image ne change pas avec la couleur de l\'or.',
   'naturel 1,35 ct : 13 900 ₪ barré, 10 700 ₪'),
  ('IDC – Israel Diamond Center', 'IDC', 'Bourse, bâtiment Maccabi', '----xx-xxx', 'gal_idc', '',
   'Site en russe, en hébreu et en anglais. Hors d\'Israël, le prix et l\'achat sont masqués. Acompte de 20 % en sur-mesure, garantie à vie, retrait le jour même.',
   'aucun prix lisible depuis l\'étranger'),
  ('IDT – Israel Diamond Trade', 'IDT', 'Ramat Gan, « tour du diamant »', '----xx--x-', 'th_idt', '',
   'En russe ; ni boutique ni panier : téléphone, WhatsApp, Telegram. Modèle 3D envoyé par e-mail avant la cire ; garantie à vie du sertissage.',
   'aucun prix de bijou ; dollars seulement'),
  ('Moshe Skapa', 'Moshe Skapa', 'Bourse, bureau 1141', '----xx----', None, 'injoignable',
   'En russe (BrillRings et isradiamond.ru) ; aucun prix de bague, « prix sur demande ». Rendez-vous à la Bourse ; micro-gravure de la pierre contrôlable au bureau.',
   'diamants nus en dollars : 868 $ (1,06 ct) à 619 064 $ (9,33 ct)'),
  ('La Perla Jewelry', 'La Perla', 'Ramat Gan, Harakon 9', 'x---o-x---', 'th_laperla', '',
   'En russe ; donne les 4 C de la pierre et l\'épaisseur de la tige (1,6 mm) ; 24 mensualités. Défauts : beaucoup de bagues sans prix ; 18 975 ₪ affichés, « 16 500 ₪ » dans le texte.',
   '1,00 ct naturel : 18 975 ₪'),
 ]),
 ('Tel-Aviv et le centre', [
  ('Diamony', 'Diamony', 'studio en ligne, sans adresse', 'x---xx-xx-', 'gal_diamony', '',
   'Synthétique et naturel côte à côte sur chaque carte. Tout sur une page : acompte de 500 ₪ à la validation de la 3D, garantie de 12 mois, griffes contrôlées à vie. Essayage en réalité augmentée annoncé, non testé.',
   '« Alma » 0,45 ct : dès 3 100 ₪ en synthétique, 6 200 ₪ en naturel'),
  ('XLAB Diamonds', 'XLAB', 'Petah Tikva, Netanya, Raanana', 'x---x-xxxx', 'th_xlab', '',
   'Synthétique seul ; 4,9 sur 5 pour 393 avis, avec réponses du propriétaire ; mise à taille à vie. Défauts : essayage annoncé sans bouton ; retour de 2 jours, rien au-dessus de 3 000 ₪.',
   'solitaire 14 carats, 0,50 à 3 ct : 3 500 à 8 900 ₪, moins 25 % en promotion'),
  ('Inbar Jewelry', 'Inbar', 'Tel-Aviv, Dizengoff 237', '----x-x---', None, 'antirobot',
   'Aucun prix de modèle, aucune option, aucun panier : tout passe par WhatsApp. 24 paiements ; certificat IGL.',
   '« dès 5 000 ₪ » pour une bague de fiançailles'),
  ('Louisa Jewelry', 'Louisa', 'Tel-Aviv, Shontsino 11', 'xx--xx-xx-', 'th_louisa', '',
   'En russe ; le prix suit le carat. Vidéo au microscope du numéro gravé sur la pierre, comparé au certificat. Vend deux alliances de kiddouchin (1 290 et 1 690 ₪).',
   '« Lotus » ovale synthétique : 5 490 / 5 990 / 6 490 ₪ pour 1,5 / 2 / 2,5 ct'),
 ]),
 ('Le reste du pays', [
  ('Alpha Gold', 'Alpha Gold', 'Haïfa', 'xx--x-xxx-', 'gal_alphagold', '',
   '152 bagues en synthétique ; suivi de fabrication par SMS ; légende « rendu, le produit réel peut différer ». Annulation acceptée même sur commande.',
   '« Rosalyn » synthétique 2 ct, 14 carats : 5 179 ₪ TVA comprise'),
  ('Lavi Jewellry', 'Lavi', 'Kiryat Gat, atelier à la Bourse', 'x---x-xxx-', 'th_lavi', '',
   'Sur-mesure avec modèle 3D gratuit avant fabrication, mais par WhatsApp, hors du site ; 12 paiements ; 109 avis Google. Défaut : « sans frais » sur la fiche, 5 % ou 100 ₪ dans la politique.',
   'fiche à 2 933 ₪ (4 190 ₪ barré), soit 12 × 245 ₪'),
  ("L'Émeraude Paris", "L'Émeraude", 'Netanya', '---xxx--x-', 'th_lemeraude', '',
   'La seule 3D en temps réel d\'Israël : un modèle générique, avec un bouton qui montre le maillage. Ni prix ni panier. Hébreu, français et anglais, mais le configurateur reste en français.',
   'aucun prix'),
  ('Danny Eliav', 'Danny Eliav', 'Jérusalem', 'x------x--', None, 'ident',
   'En anglais et en dollars ; 24 bagues. Une même fiche oppose le naturel au synthétique en deux phrases neutres.',
   'même solitaire platine : 18 000 $ en naturel, 3 000 $ en synthétique'),
  ('Jerusalem Jeweler', 'Jerusalem Jeweler', 'Jérusalem', 'x------x--', 'th_jj', '',
   'En anglais et en dollars ; livraison offerte dans le monde ; alliances à textes hébraïques. Défaut : « remboursement sans risque » au bandeau, « annulations non acceptées » dans la politique.',
   'solitaire 14 carats, 0,50 ct naturel : 3 795,88 $'),
  ('Berman Designers', 'Berman', 'moshav HaYogev', 'x------x--', None, 'ident',
   '29 bagues de créateur, or 18 carats seulement, fini mat ou brillant ; gravure sur demande.',
   'de 3 038 à 32 384 ₪'),
 ]),
]

# ---------------------------------------------------------------- France : 8 sites, 2 bloqués
FRANCE = [
 ('Gemmyo', 'Gemmyo', 'Paris, boutiques', 'xx--xxxxxx', 'th_gemmyo', '',
  'Le prix suit la qualité de la pierre, et l\'écart est écrit : + 600, + 1 800, + 3 000 €. Gravure à 30 €, baguier gratuit, rendez-vous vidéo de 30 minutes. Dit lui-même que ses visuels sont retouchés.',
  '« Lady » 0,7 ct, or blanc : 4 600 € ; platine 5 050 €'),
 ("La Maison de l'Alliance", "La Maison de l'Alliance", 'France', 'xx--xxxxxx', None, 'cookies',
  'Vend une pierre en stock avec son numéro GIA, livrée en 4 jours ; grille de 8 poids, 5 couleurs, 7 puretés. Défauts : une seule photo quelle que soit la pierre ; « moins 50 % sur tout ».',
  '« Manae » platine, naturel GIA : 1 129 € (0,30 ct) à 3 583 € (1 ct)'),
 ('MonDiamant', 'MonDiamant', 'Paris 9e', 'xx--x-xxxx', 'th_mondiamant', '',
  'Naturel certifié GIA seulement ; le lien de rendez-vous garde le modèle, le poids et la qualité. Sur-mesure avec rendu 3D : 200 €, 6 semaines. Garantie de 10 ans.',
  '« Dana » or blanc : 1 980 € (0,30 ct) à 29 150 € (2 ct)'),
 ('Laveran Paris', 'Laveran', 'Paris', 'xo--xxxxxx', None, 'ident',
  'Synthétique par défaut ; gravure offerte avec aperçu ; garantie et mise à taille à vie. Défauts : le même prix pour les quatre métaux ; moins 20 % affiché. Lu sans navigateur.',
  '33 prix, de 880 € (0,30 ct) à 7 456 € (5 ct)'),
 ('Courbet', 'Courbet', 'Paris', 'xx-x-xxx-x', 'th_courbet', '',
  'Synthétique seul ; une vraie 3D en temps réel (forme, carat, couleur, pureté), mais la société est en liquidation : le 26/11, le site annonce une « pause » de ses collections.',
  'halo pavé or blanc : 3 600 € (0,3 ct) à 6 500 € (1 ct)'),
 ("L'Alliancier", "L'Alliancier", 'France', 'xx-x--xxo-', 'th_alliancier', '',
  'Configurateur 3D d\'alliances, six onglets, gravure visible dans la 3D ; 4,9 sur 5 pour 295 avis. Défauts : 15 à 28 secondes avant la 3D ; garantie « à vie » ici, un an là.',
  'paire d\'alliances : 1 088 € par défaut, de 458 à 3 178 € selon le métal'),
 ('Bonnot Paris', 'Bonnot', 'Paris', '----xxxx--', 'th_bonnot', '',
  'Photographie la vraie pierre, puis montre une bague simulée par IA. Le prix de la bague n\'apparaît qu\'après le nom, l\'e-mail et le téléphone. 5 sur 5 pour 105 avis.',
  'prix de la pierre seule (exemple : 3 252 €) ; bague non chiffrée'),
 ("Histoire d'Or", "Histoire d'Or", 'chaîne nationale', 'x-----xx--', 'th_histoiredor', '',
  'Seul des huit à écrire « diamant synthétique ». Aucune configuration : un carrousel de photos, une taille présélectionnée. Retour de 60 jours. Défaut : 17 secondes sur iPhone.',
  'bague platine, 0,51 ct synthétique : 1 090 €'),
]
FRANCE_BLOQUES = 'Edenly (défi Cloudflare) et Celinni : bloqués, non visités, hors décompte.'

# ---------------------------------------------------------------- États-Unis : 12 vendeurs nationaux
USA = [
 ('Blue Nile', 'Blue Nile', 'en ligne, 23 salles', 'xxx-xxxxxx', 'th_bluenile', '',
  'Photo et rotation de la vraie pierre, rapport IGI dans la page ; vue à 360° de la bague ; date d\'expédition dès que la taille est choisie. Seul des douze avec WhatsApp. Défaut : moins 20 % « automatique ».',
  'monture 696 $ (14 carats) + synthétique 1,65 ct 1 237 $ = 1 933 $'),
 ('VRAI', 'VRAI', 'en ligne, 10 salles', 'xxx--xxxxx', 'th_vrai', '',
  'Synthétique de sa propre fonderie, certificat maison ; chaque pierre filmée. La 3D est réservée au sur-mesure. Gravure à 60 $, livraison payante.',
  'monture 1 265 $ + pierre 2,18 ct 3 270 $ = 4 535 $'),
 ('Keyzar', 'Keyzar', 'en ligne, 1 salle', 'xxo--xxxxx', 'th_keyzar', '',
  'La « vue à 360° » est une suite de 100 images ; essayage sur téléphone ; une version en dollars pour Israël. Étapes 2 et 3 non retenues : nos relevés y ont suivi des adresses interdites.',
  'monture « Kamellie » : 1 150 $ (14 carats), 1 450 $ (18), 1 750 $ (platine)'),
 ('Angara', 'Angara', 'en ligne', 'xxx---xxxx', 'gal_angara', '',
  'L\'image, recomposée par couches, suit la forme, le métal, les griffes et la taille de la pierre. 29 variétés de pierres de couleur ; gravure offerte avec aperçu ; paiement en 2 ou 3 fois.',
  'monture 655 $ + ovale synthétique 1 ct 871 $ = 1 526 $'),
 ('Clean Origin', 'Clean Origin', 'en ligne', 'xxo--xxxxx', 'th_cleanorigin', '',
  'Écrit l\'écart sur l\'option : « 18K White Gold + $251 », « Platinum + $315 ». Vidéo de la vraie pierre, liée au certificat ; retour de 60 jours. Constructeur interdit aux robots, non parcouru.',
  'monture « Stellamarquise » : 1 031 $ (1 375 $ barré)'),
 ('Rare Carat', 'Rare Carat', 'en ligne', 'xxxx--xxxx', 'th_rarecarat', '',
  'La seule 3D en temps réel des douze, en version d\'essai : la pierre, sur une monture d\'exemple. Essai sur une photo de sa main ; gravure offerte avec aperçu.',
  'monture 600 $ + synthétique 1,25 ct 805 $ = 1 405 $, livraison gratuite'),
 ('Frank Darling', 'Frank Darling', 'New York, 14 salles', 'xxx--xxxxx', 'gal_frankdarling', '',
  'Vue à 360° en 321 images par métal ; répliques à essayer chez soi ; croquis gratuits et modèle 3D en sur-mesure ; baguier envoyé. Reprend même le sur-mesure et le gravé.',
  '« Ripple » ovale, 14 carats : 2 560 $ ; au panier 3 896,24 $ avec la pierre'),
 ('Ritani', 'Ritani', 'en ligne', 'ooo---oooo', None, 'bloque',
  'Lu sans visite. Seul à décomposer le prix de la pierre : coût de gros, acheminement, marge. Suivi de fabrication en 7 étapes. Modèle numérique en sur-mesure : 150 $, déduits de l\'achat.',
  'synthétique 3,50 ct : 314,89 + 202,75 + 504,36 = 1 022 $'),
 ('Brilliant Earth', 'Brilliant Earth', 'en ligne, 44 salles', 'ooo--ooooo', None, 'bloque',
  'Lu sans visite. Vidéo de chaque pierre, taille réelle sur une main en trois teintes de peau, essayage sur photo ; visio de 50 minutes ; livre en Israël.',
  'monture dès 750 $ ; 18 carats : + 200 $'),
 ('Do Amore', 'Do Amore', 'en ligne', 'ooo--ooooo', None, 'bloque',
  'Lu sans visite. Le total est écrit sur le bouton ; pierres présélectionnées par monture ; retour de 60 jours ; visio de 30 minutes.',
  'monture « Asha » : 1 080 à 1 480 $ ; 4 640 $ avec 1 ct synthétique'),
 ('With Clarity', 'With Clarity', 'en ligne, 1 salle', 'ooo--ooooo', None, 'bloque',
  'Lu sans visite. Répliques à domicile (200 $ l\'une, rendus en carte cadeau) ; curseur de carats de 0 à 8 ; visio à deux caméras.',
  'montures de 558 à 4 110 $'),
 ('Grown Brilliance', 'Grown Brilliance', 'en ligne, 17 salles', 'ooo--ooooo', None, 'bloque',
  'Lu sans visite. Synthétique seul ; récapitulatif en deux lignes, monture et pierre ; sur-mesure avec rendu en 48 heures.',
  'monture 1 780 $ + pierre 1 830 $ = 3 610 $'),
]

# Rapports entiers écartés (le site interdit nommément nos agents dans robots.txt) ; Sabghi est conservé par décision du propriétaire.
ECARTES = {'Apex Jewelry Design', "Noe's Jewelry", 'Royal Jewelers', "Rumanoff's Fine Jewelry & Design", 'USA Jewels & Timepieces', 'Alloy Custom Jewelers', 'Sabghi Jewelers'}

RAISONS = {
 'ident': 'Pas de capture : ce site demande aux agents de s\'identifier.',
 'bloque': 'Pas de capture : site bloqué, non visité.',
 'cookies': 'Pas de capture : page floutée derrière un panneau de cookies sans refus.',
 'antirobot': 'Pas de capture : contrôle anti-robot le 26/11.',
 'injoignable': 'Pas de capture : site injoignable le 26/11.',
 'inconnu': 'Pas de capture : fichier pour agents illisible.',
}
MARK = {'x': ('oui', 'oui'), 'o': ('nuance', 'à nuancer'), '-': ('non', 'non')}


def pt(code):
    cls, label = MARK[code]
    return f'<i class="pt pt-{cls}" role="img" aria-label="{label}"></i>'


def e(text):
    return html.escape(text, quote=True)


def by_name(market):
    return {d['site']: d for d in SITES if d['marche'] == market}


def statut(d):
    s = d['statut'].lower()
    if s.startswith('bloqué'):
        return 'bloqué'
    return 'complet' if s.startswith('complet') else 'partiel'


def matrice(rows, with_groups=False):
    """rows : liste de (groupe ou None, [(affiché, lieu, critères, identification)])."""
    out = ['<table class="matrice">', '<thead><tr><th class="m-site">Site</th>']
    out += [f'<th class="m-c"><span>{e(c)}</span></th>' for c in CRITERES]
    out.append('</tr></thead><tbody>')
    totals = [0] * 10
    nuances = [0] * 10
    n = 0
    for group, sites in rows:
        if group:
            out.append(f'<tr class="m-groupe"><td colspan="11">{e(group)}</td></tr>')
        for shown, lieu, crit, ident in sites:
            n += 1
            cells = ''
            for k, c in enumerate(crit):
                totals[k] += c == 'x'
                nuances[k] += c == 'o'
                cells += f'<td>{pt(c)}</td>'
            star = '<sup>a</sup>' if ident else ''
            out.append(f'<tr><td class="m-site"><b>{e(shown)}</b>{star}</td>{cells}</tr>')
    tot = ''.join(f'<td>{t}{("<small> + " + str(m) + "</small>") if m else ""}</td>' for t, m in zip(totals, nuances))
    out.append(f'<tr class="m-total"><td class="m-site">Total sur {n}</td>{tot}</tr>')
    jr = ''.join(f'<td>{pt(c)}</td>' for c in JR[2])
    out.append(f'<tr class="m-jr"><td class="m-site"><b>JR Diamond</b></td>{jr}</tr>')
    out.append('</tbody></table>')
    return '\n'.join(out), totals, nuances


def fiche(d, shown, lieu, crit, thumb, why, note, prix):
    st = statut(d)
    if thumb:
        img = f'<div class="fiche-img frame flat"><img src="img/{thumb}.jpg" alt="Capture du site {e(shown)}."></div>'
    else:
        img = f'<div class="fiche-img sans-capture"><span>{e(RAISONS[why])}</span></div>'
    tag = {'complet': 'audit complet', 'partiel': 'audit partiel', 'bloqué': 'lu sans visite'}[st]
    return (f'<article class="fiche">{img}<div class="fiche-txt"><h3>{e(shown)} <span class="lieu">{e(lieu)}</span><span class="st st-{st[0]}">{tag}</span></h3>'
            f'<p class="note">{e(note)}</p><p class="prix"><b>Prix relevé</b> {e(prix)}</p></div></article>')


def page(kicker, title, body, cls='', signet=None, ancre=None):
    attrs = (f' data-signet="{e(signet)}"' if signet else '') + (f' data-ancre="{ancre}"' if ancre else '')
    return f'<section class="page {cls}"{attrs}>\n  <p class="kicker">{kicker}</p>\n  <h2>{title}</h2>\n{body}\n{FOLIO}</section>\n'


LEGENDE = ('<p class="tiny muted legende"><i class="pt pt-oui"></i> relevé sur le site · <i class="pt pt-nuance"></i> à nuancer : {nuance} · '
           '<i class="pt pt-non"></i> non relevé · total : relevés, puis à nuancer en petit{extra}</p>')


def israel():
    data = by_name('il')
    rows, cards = [], []
    for group, sites in ISRAEL:
        r = []
        for name, shown, lieu, crit, thumb, why, note, prix in sites:
            d = data[name]
            r.append((shown, lieu, crit, d['identification']))
            cards.append((group, fiche(d, shown, lieu, crit, thumb, why, note, prix)))
        rows.append((group, r))
    assert sum(len(s) for _, s in ISRAEL) == len(data) == 21
    table, totals, nuances = matrice(rows)
    assert totals == [16, 7, 2, 1, 16, 10, 10, 16, 14, 8] and nuances[4] == 1, (totals, nuances)
    pages = [page('Israël · site par site', '21 sites, <em>dix critères</em>',
                  '  <p class="viz-sub" style="margin-top:2.5mm">Onze des 21 sites sont à Ramat Gan, la plupart à la Bourse du diamant : nos voisins.</p>\n' + table +
                  LEGENDE.format(nuance='La Perla, WhatsApp relevé le 25/11 mais pas le 16/11', extra=' · <sup>a</sup> site qui demande aux agents de s\'identifier (voir les limites)') +
                  '\n  <p class="tiny muted">Totaux identiques à ceux de la synthèse de l\'étude. IDC masque ses prix hors d\'Israël : « prix affiché » est un minimum.</p>',
                  signet='Israël : 21 sites, dix critères', ancre='israel-tableau')]
    per = 6
    for k in range(0, len(cards), per):
        chunk = cards[k:k + per]
        body, last = '', None
        for group, card in chunk:
            if group != last:
                body += f'  <p class="fiche-groupe">{e(group)}</p>\n'
                last = group
            body += '  ' + card + '\n'
        n = k // per + 1
        if k + per >= len(cards):
            body += ('  <div class="chez"><span class="label">Non visités, hors décompte</span><p>Eli Paz et Royalty (accès refusé), Love Diamonds, Baltinester et uDiamonds (robots.txt), iLab ; '
                     'en russe : I.P. Diamonds, Ka Gold, Amberjack, Fuzailov, Divo, Kladshop. Douze sites que nous n\'avons ni ouverts ni contournés.</p></div>\n')
        pages.append(page(f'Israël · site par site · fiches {n} sur {(len(cards) + per - 1) // per}', 'Ce que fait <em>chacun</em>' if n == 1 else 'Ce que fait chacun <em>(suite)</em>', body,
                          cls='cream' if n % 2 else '', signet=f'Israël : fiches des sites ({n})'))
    open(os.path.join(OUT, 'israel.html'), 'w', encoding='utf-8').write('\n'.join(pages))
    return len(pages)


def france():
    data = by_name('fr')
    rows = [(None, [(shown, lieu, crit, data[name]['identification']) for name, shown, lieu, crit, *_ in FRANCE])]
    table, totals, nuances = matrice(rows)
    assert totals == [7, 5, 0, 2, 5, 5, 8, 8, 4, 5], totals
    cards = [fiche(data[name], shown, lieu, crit, thumb, why, note, prix) for name, shown, lieu, crit, thumb, why, note, prix in FRANCE]
    p1 = page('France · site par site', '8 sites, <em>dix critères</em>',
              table + LEGENDE.format(nuance='Laveran, prix par variante non actionné ; L\'Alliancier, garantie « à vie » ou d\'un an selon la page', extra=' · <sup>a</sup> demande aux agents de s\'identifier') +
              f'\n  <p class="tiny muted">{e(FRANCE_BLOQUES)} Aucun des huit ne propose l\'or 14 carats.</p>\n' +
              '\n'.join('  ' + c for c in cards[:2]), signet='France : 8 sites, dix critères', ancre='france-tableau')
    p2 = page('France · site par site · fiches', 'Ce que fait chacun <em>(suite)</em>', '\n'.join('  ' + c for c in cards[2:]), cls='cream', signet='France : fiches des sites')
    open(os.path.join(OUT, 'france.html'), 'w', encoding='utf-8').write(p1 + '\n' + p2)
    return 2


def usa():
    data = by_name('us')
    rows = [(None, [(shown, lieu, crit, data[name]['identification']) for name, shown, lieu, crit, *_ in USA])]
    table, totals, nuances = matrice(rows)
    assert [t + m for t, m in zip(totals, nuances)] == [12, 12, 12, 1, 1, 9, 12, 12, 12, 12], (totals, nuances)
    cards = [fiche(data[name], shown, lieu, crit, thumb, why, note, prix) for name, shown, lieu, crit, thumb, why, note, prix in USA]
    p1 = page('États-Unis · vendeurs nationaux', '12 vendeurs, <em>dix critères</em>',
              table + LEGENDE.format(nuance='lu sans visite (5 sites bloqués), ou total non vu (Keyzar, Clean Origin)', extra='') +
              '\n  <p class="tiny muted">Cinq des douze ont refusé notre navigateur : leurs colonnes viennent de textes du site lus dans des extraits de recherche, sans visite.</p>\n' +
              '\n'.join('  ' + c for c in cards[:2]), signet='États-Unis : 12 vendeurs nationaux', ancre='usa-tableau')
    rest = cards[2:]
    p2 = page('États-Unis · vendeurs nationaux · fiches 1 sur 2', 'Ce que fait chacun <em>(suite)</em>', '\n'.join('  ' + c for c in rest[:5]), cls='cream', signet='États-Unis : fiches des vendeurs nationaux (1)')
    p3 = page('États-Unis · vendeurs nationaux · fiches 2 sur 2', 'Ce que fait chacun <em>(fin)</em>', '\n'.join('  ' + c for c in rest[5:]), signet='États-Unis : fiches des vendeurs nationaux (2)')
    open(os.path.join(OUT, 'usa.html'), 'w', encoding='utf-8').write('\n'.join([p1, p2, p3]))
    return 3


def premier(text):
    """Première proposition d'une cellule de synthèse : jusqu'au premier point-virgule hors parenthèses et guillemets."""
    depth, out = 0, ''
    for ch in text:
        if ch in '(«':
            depth += 1
        elif ch in ')»':
            depth = max(0, depth - 1)
        elif ch == ';' and depth == 0:
            break
        out += ch
    marks = r'(?:V|I|S|Inv|Vc|P1|T|E)'
    out = re.sub(r'\s*\[' + marks + r'(?:\s*,\s*' + marks + r')*\]', '', out).strip()
    return out[0].upper() + out[1:] if out else '—'


def minuscule(text):
    """Après « Prix : », pas de majuscule sur un mot courant (Aucun, Monture…) ; un nom propre ou un sigle la garde."""
    first = text.split(' ')[0]
    return text[0].lower() + text[1:] if first[1:].islower() and first.lower() in {'aucun', 'aucune', 'monture', 'montures', 'en', 'bague', 'bagues', 'prix', 'catalogue', 'diamant',
                                                                                 'diamants', 'fourchette', 'sur', 'non', 'de', 'dès', 'solitaire', 'pierre', 'total', 'tarif', 'fiche'} else text


def annexe():
    """Une seule section, que build.mjs découpe en pages de deux colonnes d'après la hauteur réelle des blocs."""
    etats = {}
    for d in SITES:
        if d['marche'] == 'us' and d['territoire'] != 'Vendeurs nationaux':
            etats.setdefault(d['territoire'], []).append(d)
    total = sum(len(v) for v in etats.values())
    items = []
    for etat in sorted(etats, key=lambda s: s.lower()):
        n = len(etats[etat])
        items.append(f'<p class="a-etat">{e(etat)} <small>{n} site{"s" if n > 1 else ""}</small></p>')
        for d in sorted(etats[etat], key=lambda d: d['site'].lower()):
            star = '<sup>a</sup>' if d['identification'] else ''
            mark = '<sup>b</sup>' if d['site'] in ECARTES else ''
            cls = ' a-bloque' if d['bloque'] else ''
            vu = 'Site bloqué, non visité' if d['bloque'] else premier(d['visuel'])
            label = "Prix, d'après l'inventaire" if d['bloque'] else 'Prix'
            items.append(f'<p class="a-site{cls}"><b>{e(d["site"])}</b>{star}{mark} <span class="a-st">{statut(d)}</span><br>{e(vu)}. '
                         f'<span class="a-prix">{label} : {e(minuscule(premier(d["prix"])))}.</span></p>')
    intro = (f'  <p class="small a-intro">Les {total} joailliers relevés dans les 50 États, quatre par État le plus souvent. Pour chacun : ce qu\'on voit sur le site, puis le prix relevé, '
             'dans les mots des synthèses d\'audit. Aucun n\'est photographié ici. <sup>a</sup> Demande aux agents de s\'identifier. '
             '<sup>b</sup> Le site interdit nos agents : rapport écarté, ou conservé par décision.</p>\n')
    body = intro + '  <div class="a-flux">\n' + '\n'.join('    ' + i for i in items) + '\n  </div>'
    html_page = (f'<section class="page annexe-page" data-paginer data-ancre="annexe" data-signet="Annexe : les États américains">\n  <p class="kicker">États-Unis · annexe</p>\n'
                 f'  <h2>Annexe · les États américains</h2>\n{body}\n{FOLIO}</section>\n')
    open(os.path.join(OUT, 'annexe.html'), 'w', encoding='utf-8').write(html_page)
    return 1, total


if __name__ == '__main__':
    a, b, c = israel(), france(), usa()
    n, total = annexe()
    print(f'pages de sites : Israël {a}, France {b}, États-Unis {c} ; annexe : {total} joailliers des États, mis en pages à la construction')
