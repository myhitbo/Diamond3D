#!/usr/bin/env python3
"""Tire des synthèses d'audit la liste des sites des trois marchés ciblés (Israël, France, États-Unis).
Lit le tableau « 1. Sites audités » de chaque synthèse et écrit donnees/sites.json. Aucune page web ouverte.
Usage : python3 docs/concurrence/presentation/extraire.py"""
import glob, json, os, re

here = os.path.dirname(os.path.abspath(__file__))
audit = os.path.normpath(os.path.join(here, '..', 'audit'))

# (marché, synthèse, priorité) : pour un site relevé deux fois, la synthèse de priorité la plus haute l'emporte (relevé le plus récent).
SOURCES = [('il', 'il/SYNTHESE_il.md', 1), ('il', 'il/SYNTHESE_il-2.md', 2), ('il', 'il/SYNTHESE_il-ru.md', 2), ('fr', 'eu/france/SYNTHESE_fr.md', 1),
           ('us', 'us/SYNTHESE_us-nat-1.md', 1), ('us', 'us/SYNTHESE_us-nat-2.md', 1), ('us', 'us/SYNTHESE_us-reprise.md', 2)]
SOURCES += [('us', os.path.relpath(f, audit), 1) for f in sorted(glob.glob(os.path.join(audit, 'us', 'SYNTHESE_us-[0-9]*.md')))]


def clean(cell):
    cell = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'\1', cell).replace('**', '').replace('`', '')
    return re.sub(r'\s+', ' ', cell).strip()


def identification():
    """Rapports des sites qui demandent aux agents de s'identifier (relevé du 26/11/2026)."""
    out = set()
    for line in open(os.path.join(audit, 'AGENTS_MD_2026-11-26.md'), encoding='utf-8'):
        m = re.match(r'^### .*', line)
        if m:
            market = {'Israël': 'il', 'Europe': 'eu', 'Australie': 'au', 'États-Unis': 'us'}[line[4:].split(' (')[0].strip()]
        m = re.match(r'^\| [^|]+ \| `[^`]+` \| `([^`]+)` \|', line)
        if m:
            out.add(os.path.normpath(os.path.join(market, m.group(1))))
    return out


def rows():
    for market, rel, prio in SOURCES:
        text = open(os.path.join(audit, rel), encoding='utf-8').read()
        section = re.search(r'^## 1\. .*?$(.*?)(?=^## 2\. )', text, re.S | re.M).group(1)
        header = None
        for line in section.split('\n'):
            if not line.startswith('|'):
                continue
            cells = [c.strip() for c in line.strip().strip('|').split('|')]
            if set(''.join(cells)) <= set('-: '):
                continue
            if header is None:
                header = cells
                continue
            raw = dict(zip(header, cells))
            link = re.search(r'\]\(([^)]+\.md)\)', line)
            name = clean(raw['Site'])
            m = re.match(r'^(.*?)\s*\((.*)\)\s*$', name)
            site, lieu = (m.group(1).strip(), m.group(2).strip()) if m else (name, '')
            for sep in (' : ', ', « '):  # « Moshe Skapa : BrillRings… », « Diamony (DiamoNY), « studio… »
                if sep in site and len(site) > 30:
                    site, rest = site.split(sep, 1)
                    lieu = (rest.strip(' «»') + (' ; ' + lieu if lieu else '')).strip()
            site = re.sub(r'\s*\(DiamoNY\)', '', site)
            visuel = next(v for k, v in raw.items() if k.startswith('Visuel'))
            prix = next(v for k, v in raw.items() if k.startswith('Prix'))
            report = os.path.normpath(os.path.join(os.path.dirname(rel), link.group(1))) if link else ''
            yield prio, {'marche': market, 'territoire': clean(raw.get('Territoire', 'France')), 'site': site, 'lieu': lieu, 'statut': clean(raw['Statut']),
                         'visuel': clean(visuel), 'prix': clean(prix), 'rapport': report, 'synthese': rel}


def key(d):
    k = re.sub(r'[^a-z0-9]', '', re.sub(r'\s*\(.*', '', d['site']).lower())
    return (d['marche'], k, d['territoire'] if k.startswith('hitched') else '')  # deux « Hitched » distincts, dans deux États


best = {}
for prio, d in rows():
    if key(d) not in best or prio > best[key(d)][0]:
        best[key(d)] = (prio, d)
ident = identification()
sites = [d for _, d in best.values()]
for d in sites:
    d['bloque'] = d['statut'].lower().startswith('bloqué')
    d['identification'] = d['rapport'] in ident
sites.sort(key=lambda d: (d['marche'], d['territoire'] != 'Vendeurs nationaux', d['territoire'], d['site'].lower()))
out = os.path.join(here, 'donnees', 'sites.json')
os.makedirs(os.path.dirname(out), exist_ok=True)
json.dump(sites, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
count = lambda m, f=lambda d: True: sum(1 for d in sites if d['marche'] == m and f(d))
for m in ('il', 'fr', 'us'):
    print(f"{m} : {count(m)} lignes, dont {count(m, lambda d: d['bloque'])} bloqués et {count(m, lambda d: d['identification'])} qui demandent une identification")
