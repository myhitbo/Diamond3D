/**
 * Guides in English: a translation of `fr.ts`, with the same facts, the same sources and the same order (checked by the tests).
 *
 * Writing rules: those at the top of `fr.ts`, plus:
 * - British spelling (colour, jewellery, centre), "karat" for gold and "carat" for gemstones, as elsewhere on the English site;
 * - "lab-grown", as the English configurator says; the French word « synthétique » appears only where French law is explained;
 * - sources in another language are flagged "(in French)" or "(in Hebrew)".
 */

import { configuratorPath } from '@/lib/routes';
import { SIZE_RANGE, ringSizeRow, type Guide, type GuideLink } from './types';

const CONFIGURATOR: GuideLink = { label: 'Configure a ring', href: configuratorPath('en') };
const FAQ_LINK: GuideLink = { label: 'Read the FAQ', href: '/en/faq' };
const G_SYNTH: GuideLink = { label: 'Guide: lab-grown or natural', href: '/en/guides/lab-grown-or-natural-diamond' };
const G_FORMES: GuideLink = { label: 'Guide: diamond shapes', href: '/en/guides/diamond-shapes' };
const G_4C: GuideLink = { label: 'Guide: the 4Cs of diamonds', href: '/en/guides/the-4cs-of-diamonds' };
const G_OR: GuideLink = { label: 'Guide: 14 or 18 karat gold', href: '/en/guides/14k-or-18k-gold' };
const G_TAILLE: GuideLink = { label: 'Guide: finding your ring size', href: '/en/guides/ring-size' };

export const GUIDES_EN: Guide[] = [
  {
    id: 'synthetique',
    slug: 'lab-grown-or-natural-diamond',
    title: 'Lab-grown or natural diamond: how to choose',
    description: 'The same material, two origins. What really differs between a lab-grown and a natural diamond: rarity, price, resale and the certificate.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'meme-materiau',
        title: 'The same material',
        paragraphs: [
          'A lab-grown diamond is diamond: crystallised carbon, with the same hardness and the same brilliance as a stone mined from the ground. It is not an imitation. An imitation, such as glass or cubic zirconia, looks like diamond without being diamond.',
          'There are two methods. The first, known as HPHT, recreates the high pressure and high temperature in which diamond forms underground. The second, known as CVD, deposits carbon from a gas, layer by layer, onto a diamond seed. The first gem-quality lab-grown diamonds came from the HPHT method. Today, most of those received by the GIA laboratory are grown by CVD.',
        ],
      },
      {
        id: 'ce-qui-change',
        title: 'What really differs',
        list: [
          'Origin. A natural diamond formed underground over millions of years. A lab-grown diamond is produced in a few weeks.',
          'Rarity and price. A natural diamond is rare, and that is what sets its price. For the same budget, lab-grown gets you a noticeably larger stone.',
          'Resale. A natural diamond resells better. A lab-grown diamond resells poorly: it can be produced without limit, and its price is falling.',
          'The certificate. With us: GIA for a natural diamond and IGI for a lab-grown diamond, from 0.50 carat.',
        ],
      },
      {
        id: 'distinguer',
        title: 'Can you tell them apart?',
        paragraphs: [
          'Not with the naked eye, nor with a loupe. Only an equipped laboratory can. That is why the certificate matters: it states in black and white where the stone comes from.',
          'On a lab-grown diamond it has graded, GIA laser-inscribes the report number and the words “laboratory-grown” on the girdle, the edge of the stone. You can check that number on the laboratory’s website.',
        ],
      },
      {
        id: 'le-mot',
        title: 'What we call it',
        paragraphs: [
          'In English we say “lab-grown”, the term the laboratories use: GIA speaks of laboratory-grown diamonds, and IGI issues a Laboratory Grown Diamond Report. In French, the word is not a matter of style: a French decree of 14 January 2002 on the gemstone trade requires « synthétique » (synthetic) for a man-made stone with the same properties as the natural one, and the French consumer protection authority lists « diamant de culture » (cultured diamond) among the practices it notes during its inspections.',
          'French professionals asked to be allowed to write « diamant créé en laboratoire » (laboratory-created diamond). After a consultation, the French administration announced that the decree would not be changed. That is why the French pages of this site use the legal term, « synthétique », and explain what it means.',
        ],
      },
      {
        id: 'conseil',
        title: 'Our advice',
        paragraphs: [
          'Choose a lab-grown diamond to wear it: you get a larger stone for the same budget. Do not buy it as an investment.',
          'Choose a natural diamond if rarity matters to you, or if you are thinking of passing it on or reselling it.',
          'In our configurator, both look exactly the same. Only the certificate and the price change.',
        ],
      },
    ],
    sources: [
      { label: 'GIA, simulants, moissanite and lab-grown diamonds (same structure, same properties)', url: 'https://4cs.gia.edu/en-us/simulants-moissanite-and-lab-grown-diamonds/' },
      { label: 'GIA, natural vs laboratory-grown diamonds', url: 'https://my.gia.edu/gia-news-research/difference-between-natural-laboratory-grown-diamonds' },
      { label: 'GIA, latest research on laboratory-grown diamonds (HPHT, CVD)', url: 'https://www.gia.edu/gia-news-research/gems-gemology-summary-latest-research-lab-grown-diamonds' },
      { label: 'GIA, what are synthetic diamonds (laser inscription)', url: 'https://4cs.gia.edu/en-us/blog/what-are-synthetic-diamonds/' },
      { label: 'IGI, Laboratory Grown Diamond Report', url: 'https://www.igi.org/lab-grown-diamond-report' },
      { label: 'DGCCRF, the French consumer protection authority, on jewellery set with stones (decree 2002-65, in French)', url: 'https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/qualite-et-conformite-des-bijoux-comportant-des-pierres' },
      { label: 'French National Assembly, written question no. 5268 on decree 2002-65 (in French)', url: 'https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE5268.pdf' },
    ],
    next: [CONFIGURATOR, G_4C, G_FORMES, FAQ_LINK],
  },
  {
    id: 'formes',
    slug: 'diamond-shapes',
    title: 'Diamond shapes: round, oval, pear, marquise',
    description: 'Shape and cut are not the same thing. What to look at on a round stone, and on elongated shapes: the length-to-width ratio, the “bow-tie”, the points.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'forme-et-taille',
        title: 'Shape and cut: two different things',
        paragraphs: [
          'The shape is the outline of the stone seen from above: round, oval, pear, marquise. The cut is the way its facets are arranged. A “round brilliant” is therefore a stone with a round outline, cut as a brilliant.',
        ],
      },
      {
        id: 'ronde',
        title: 'The round brilliant',
        paragraphs: [
          'It is the benchmark. It has 57 facets, or 58 when the point underneath is replaced by a tiny flat facet, the culet.',
          'It is also the only shape for which the GIA laboratory gives an overall cut grade, from “Excellent” to “Poor”. For other shapes, the report does not carry that grade: you have to look at the stone itself.',
        ],
      },
      {
        id: 'allongees',
        title: 'Oval, pear, marquise: the elongated shapes',
        paragraphs: ['Three things are worth checking on these shapes.'],
        list: [
          'The length-to-width ratio. Divide the length by the width. A classic marquise is about twice as long as it is wide (2 to 1). Those GIA receives most often fall between 1.6 and 2.2. There is no right number: it is a matter of taste, slimmer or fuller.',
          'The “bow-tie”. Many elongated stones show a dark area across the centre, shaped like a bow-tie. It cannot always be avoided. Look for a stone where it stays discreet.',
          'Symmetry and points. The two halves should mirror each other. The points of a pear or a marquise are the most exposed parts: the setting must protect them.',
        ],
      },
      {
        id: 'atelier',
        title: 'At JR Diamond',
        paragraphs: [
          'Our first model holds a marquise, set with prongs, two of which protect the points. To check all this on your stone, the workshop films it on a turntable before you choose it.',
          'Another shape, round, oval, pear, emerald or princess, can be requested in the quote. It needs a setting head designed for it, so the 3D preview stays the marquise until that model exists.',
        ],
      },
    ],
    sources: [
      { label: 'GIA, understanding diamond cut grades (shape, cut, cut grade)', url: 'https://4cs.gia.edu/en-us/blog/gia-diamond-grading-reports-understanding-diamond-cut-grades/' },
      { label: 'GIA, anatomy of a round brilliant (57 or 58 facets)', url: 'https://www.gia.edu/diamond-cut/diamond-cut-anatomy-round-brilliant' },
      { label: 'GIA, marquise diamond buying guide (length-to-width ratio)', url: 'https://4cs.gia.edu/en-us/blog/choose-marquise-diamond/' },
      { label: 'GIA, diamond shapes (bow-tie, symmetry, points)', url: 'https://4cs.gia.edu/en-us/blog/tag/diamond-shape/' },
    ],
    next: [CONFIGURATOR, G_4C, G_SYNTH, FAQ_LINK],
  },
  {
    id: 'kiddouchin',
    slug: 'kiddushin-wedding-ring',
    title: 'The kiddushin ring: why a plain band',
    description: 'Under the chuppah, custom calls for a simple ring, without stones, that belongs to the groom. What tradition says, what is debated, and what the workshop does.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'tradition',
        title: 'What tradition asks',
        paragraphs: [
          'Under the chuppah, the groom gives the bride a ring. She must be able to know the value of what she receives. The value of plain metal can be seen. That of a stone cannot be judged by eye.',
          'Custom therefore calls for a plain ring, without stones. It must belong to the groom at the moment he gives it.',
        ],
      },
      {
        id: 'gravure',
        title: 'And engraving?',
        paragraphs: [
          'Opinions differ. Some authorities extend the same caution to engravings, others are more lenient. We do not decide in your rabbi’s place: ask before you order.',
          'There is a simple solution: the workshop makes the plain band and, if you wish, engraves the inside after the ceremony.',
        ],
      },
      {
        id: 'atelier',
        title: 'What the workshop does',
        paragraphs: ['The workshop, at the Diamond Exchange in Ramat Gan, already makes kiddushin rings.'],
        list: [
          'Plain bands in 14 or 18 karat gold (yellow, white or rose) and in platinum. The workshop does not work with silver.',
          'Laser engraving, with some twenty fonts, in Hebrew as well as in French or English.',
          'The first resizing is free.',
        ],
        after: ['The 3D model will come to this site. In the meantime, write to us through the quote request in the configurator.'],
      },
    ],
    sources: [
      { label: 'Shulchan Aruch, Even HaEzer 31', url: 'https://www.sefaria.org/Shulchan_Arukh,_Even_HaEzer.31' },
      { label: 'Halakha of the Day, gold, silver and stones', url: 'https://halakhaoftheday.org/2012/06/18/jewish-wedding-gold-silver-and-stones/' },
      { label: 'My Jewish Learning, Jewish wedding rings', url: 'https://www.myjewishlearning.com/article/all-about-jewish-wedding-rings/' },
    ],
    next: [CONFIGURATOR, G_OR, G_TAILLE, FAQ_LINK],
  },
  {
    id: '4c',
    slug: 'the-4cs-of-diamonds',
    title: 'The 4Cs of diamonds: colour, clarity, cut, carat',
    description: 'The four criteria that describe a diamond, what each grade means, and why the certificate of a lab-grown diamond no longer reads the same way.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'origine',
        title: 'Four criteria, one common language',
        paragraphs: [
          'The “4Cs” are colour, clarity, cut and carat weight. GIA, the American laboratory, devised them, and in 1953 it created the grading system built on them. They are still the common language of laboratories and jewellers.',
          'No single criterion is enough. Two diamonds of the same weight can be worth very different prices if their colour, clarity or cut differ.',
        ],
      },
      {
        id: 'couleur',
        title: 'Colour: from D to Z',
        paragraphs: [
          'The scale runs from D, colourless, to Z, a light yellow, brown or grey tint. The laboratory compares the stone with master stones of known colour, under controlled lighting. The scale starts at D to avoid confusion with older systems.',
          'Beyond Z, or for another distinct colour such as pink or blue, we speak of a coloured diamond. It is graded differently. The workshop also works with these diamonds: ask for them in the quote.',
        ],
      },
      {
        id: 'purete',
        title: 'Clarity: what the loupe shows',
        paragraphs: [
          'Almost every diamond carries small marks: inclusions inside, blemishes on the surface. Clarity is graded under ten-times magnification, on eleven grades, from best to lowest:',
        ],
        list: [
          'FL (Flawless): no inclusions or blemishes visible under the loupe.',
          'IF (Internally Flawless): no inclusions, only tiny surface blemishes.',
          'VVS1 and VVS2 (Very, Very Slightly Included): very, very slight inclusions.',
          'VS1 and VS2 (Very Slightly Included): very slight inclusions.',
          'SI1 and SI2 (Slightly Included): slight inclusions.',
          'I1, I2 and I3 (Included): obvious inclusions.',
        ],
      },
      {
        id: 'taille',
        title: 'Cut: what makes it sparkle',
        paragraphs: [
          'Cut grades the way the facets return light: white brightness, flashes of colour called fire, and the sparkle when the stone moves. It depends on proportions, symmetry and polish. A well-cut stone looks livelier than a poorly cut stone of better colour.',
          'GIA gives an overall cut grade, from “Excellent” to “Poor”, only to round stones. For other shapes, it grades polish and symmetry. Our shapes guide explains what to look at on a marquise or a pear.',
        ],
      },
      {
        id: 'carat',
        title: 'Carat: a weight, not a size',
        paragraphs: [
          'The carat of gemstones is a unit of weight: 1 carat weighs 0.2 gram and is divided into 100 points. A 0.25 carat stone therefore weighs 25 points. It has nothing to do with the karat of gold, which measures the share of pure gold in an alloy.',
          'Some round weights, such as 1 carat, are much sought after. A 0.99 carat stone cannot be told apart by eye from a 1 carat stone, but its price can be markedly lower.',
        ],
      },
      {
        id: 'synthetique',
        title: 'Lab-grown diamonds: a different certificate',
        paragraphs: [
          'Since late 2025, GIA no longer gives lab-grown diamonds a colour letter or a clarity grade. In its view, more than 95% of those reaching the market fall within a narrow range of colour and clarity. It therefore classes them “Premium” or “Standard”, based on their colour, clarity and finish, and does not class those that fall below.',
          'IGI, for its part, still grades lab-grown diamonds on the D-to-Z scale, with a clarity grade and, for a round stone, a cut grade. This is the certificate the workshop provides with a lab-grown diamond.',
        ],
      },
      {
        id: 'atelier',
        title: 'At JR Diamond',
        list: [
          'From 0.50 carat, the stone comes with its certificate: GIA for a natural diamond, IGI for a lab-grown diamond.',
          'Below 0.50 carat, like the marquise of about 0.25 carat in our first model, a certificate is not automatic. The workshop films the stone so that you can see it before you choose it.',
          'The configurator shows the estimated weight of the stone. Colour and clarity are chosen with the workshop, in the quote.',
        ],
      },
    ],
    sources: [
      { label: 'GIA, press release of 2 June 2025 (4Cs, 1953, new terms for lab-grown diamonds)', url: 'https://www.gia.edu/gia-news-press/new-descriptive-terminology-for-laboratory-grown-diamonds' },
      { label: 'GIA, diamond color (D-to-Z scale, master stones, coloured diamonds)', url: 'https://4cs.gia.edu/en-us/diamond-color/' },
      { label: 'GIA, diamond clarity (11 grades, 10× loupe)', url: 'https://4cs.gia.edu/en-us/diamond-clarity/' },
      { label: 'GIA, diamond cut (brightness, fire, scintillation)', url: 'https://www.gia.edu/gia-about/4cs-cut' },
      { label: 'GIA, cut grade: 6 things to know (polish and symmetry, a good cut looks brighter)', url: 'https://4cs.gia.edu/en-us/blog/gia-diamond-cut-grade-six-things-to-know/' },
      { label: 'GIA, understanding diamond cut grades (overall grade for round stones only)', url: 'https://4cs.gia.edu/en-us/blog/gia-diamond-grading-reports-understanding-diamond-cut-grades/' },
      { label: 'GIA, carat weight (200 mg, 100 points, sought-after weights)', url: 'https://4cs.gia.edu/en-us/diamond-carat-weight/' },
      { label: 'GIA, laboratory-grown diamond assessment (Premium or Standard)', url: 'https://hongkong.gia.edu/gem-lab-service/laboratory-grown-diamond' },
      { label: 'IGI, Laboratory Grown Diamond Report (D to Z, clarity, cut)', url: 'https://www.igi.org/lab-grown-diamond-report' },
    ],
    next: [CONFIGURATOR, G_SYNTH, G_FORMES, FAQ_LINK],
  },
  {
    id: 'or',
    slug: '14k-or-18k-gold',
    title: '14 or 18 karat gold: which to choose',
    description: 'The karat of gold gives the share of pure gold in the alloy. What really changes between 14 and 18 karat: colour, weight, strength, and what French law says.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'carat-de-l-or',
        title: 'What “karat” means for gold',
        paragraphs: [
          'Pure gold is very soft. It is mixed with other metals, such as silver and copper: this is an alloy. The karat gives the share of pure gold, out of 24. 18 karat gold contains 75% gold, or 750 thousandths. 14 karat gold contains 58.5%, or 585 thousandths.',
          'This karat has nothing to do with the carat of diamonds, which is a weight.',
        ],
      },
      {
        id: 'loi',
        title: 'What French law says',
        paragraphs: [
          'In France, gold has five legal standards: 999, 916, 750, 585 and 375 thousandths. No tolerance is allowed below the standard: a piece sold as 750 thousandths contains at least that much. Any piece of at least 375 thousandths may be sold under the name « or » (gold). 14 karat is therefore gold in the legal sense, just like 18 karat.',
          'The standard is attested by a hallmark struck on the piece.',
        ],
      },
      {
        id: 'difference',
        title: 'What changes between 14 and 18 karat',
        list: [
          'Colour. Copper reddens the alloy, silver makes it paler. With more gold, an 18 karat yellow is usually a deeper yellow than a 14 karat.',
          'Weight. 18 karat gold is denser: according to one supplier’s data sheets, about 15.5 g/cm³ against 13.0 g/cm³ for a 14 karat yellow gold. The same ring therefore weighs nearly 20% more in 18 karat.',
          'Price. 18 karat costs more: it contains more gold per gram, and the same ring takes more grams.',
          'Strength. You often read that 14 karat is harder. Suppliers’ data sheets mostly show that hardness depends on the recipe of the alloy: from the same supplier, an annealed 18 karat yellow gold can be harder than a 14 karat yellow gold, and a nickel white gold is harder than both. Both suit a ring worn every day.',
        ],
      },
      {
        id: 'blanc-et-rose',
        title: 'White gold, rose gold',
        paragraphs: [
          'Rose gold owes its colour to copper. White gold is a pale alloy, often plated with rhodium for a bright white; that layer wears and can be redone.',
          'Some white golds contain nickel, others palladium and no nickel. The workshop’s white gold contains no nickel.',
        ],
      },
      {
        id: 'atelier',
        title: 'At JR Diamond',
        paragraphs: [
          'The workshop works with 14 and 18 karat gold, in yellow, white and rose, as well as platinum. It does not work with silver. Its rings are hallmarked 585 (14 karat) or 750 (18 karat). In the configurator, choose the colour, then the karat: the estimated metal weight changes with it.',
          'Our advice: take 18 karat if you want the richest yellow and the largest share of gold. Take 14 karat for a lighter, less expensive ring with the same look.',
        ],
      },
    ],
    sources: [
      { label: 'French Customs, concordance table of the code on taxes on goods and services (legal standards, the name « or », in French)', url: 'https://www.douane.gouv.fr/sites/default/files/2025-12/10/table%20de%20concordance%20partie%20l%C3%A9gislative%20d%C3%A9taill%C3%A9e.pdf' },
      { label: 'French National Assembly, written question no. 82959 (standard attested by the hallmark, in French)', url: 'https://www.assemblee-nationale.fr/dyn/13/questions/QANR5L13QE82959.pdf' },
      { label: 'Hoover & Strong, glossary (karat)', url: 'https://hooverandstrong.com/links/Glossary' },
      { label: 'Total Materia, gold and gold alloys (copper, silver and colour)', url: 'https://www.totalmateria.com/en-us/articles/gold-and-gold-alloys/' },
      { label: 'Cooksongold, 14 karat yellow gold “14ct AY” (density, hardness)', url: 'https://www.cooksongold.com/downloads/files/bullion/14ctAY_properties_sheet.pdf' },
      { label: 'Cooksongold, 18 karat yellow gold “18ct KK” (density, hardness)', url: 'https://www.cooksongold.com/downloads/files/bullion/18ctKK_properties_sheet.pdf' },
      { label: 'Cooksongold, 18 karat nickel white gold “18ct WNC”', url: 'https://www.cooksongold.com/downloads/files/bullion/18ctWNC_properties_sheet.pdf' },
      { label: 'Cooksongold, 14 karat nickel white gold, for rhodium plating “14ct NW”', url: 'https://www.cooksongold.com/downloads/files/bullion/14ctNW_properties_sheet.pdf' },
      { label: 'Cooksongold, 14 karat palladium white gold, nickel-free “14ct NF”', url: 'https://www.cooksongold.com/downloads/files/bullion/14ctNF_properties_sheet.pdf' },
      { label: 'GIA, carat weight (the carat of gemstones)', url: 'https://4cs.gia.edu/en-us/diamond-carat-weight/' },
    ],
    next: [CONFIGURATOR, G_4C, G_TAILLE, FAQ_LINK],
  },
  {
    id: 'taille',
    slug: 'ring-size',
    title: 'Ring size: getting it right',
    description: 'A ring size is a finger’s circumference in millimetres. How to measure it, the traps to avoid, and how European and US sizes compare.',
    verified: '2026-11-14',
    sections: [
      {
        id: 'le-chiffre',
        title: 'What the number means',
        paragraphs: [
          'In France and across Europe, the size of a ring is its inner circumference in millimetres: a size 52 ring measures 52 mm around, about 16.6 mm across. This is the rule of the international standard ISO 8653. These European sizes are also used in Israel, and they are our workshop’s system.',
          'The United States has its own scale; the table below converts between them. In Israel you may also come across a size 40 lower (12 for 52), for example in the Gindi Gold and B144 charts listed in the sources: if in doubt, say which system you mean, or give the millimetres.',
        ],
      },
      {
        id: 'mesurer',
        title: 'The surest method: a ring that already fits',
        list: [
          'Take a ring worn on the same finger of the same hand. The dominant hand is often slightly larger: for a right-handed person, the left ring finger is usually about half a size smaller than the right.',
          'Measure its inner diameter with a ruler, from inner edge to inner edge, or have a jeweller measure it. If the band is wide, measure at the middle.',
          'For a surprise proposal, discreetly borrow one of their rings long enough to measure it. You can also trace its inner outline on paper, or press it into a bar of soap to keep the imprint.',
        ],
      },
      {
        id: 'pieges',
        title: 'Traps to avoid',
        list: [
          'String or a strip of paper around the finger: string stretches, paper creases. The result is unreliable.',
          'Cold and heat: fingers shrink in the cold and swell in the heat. Measure at room temperature, preferably at the end of the day, and not right after exercise.',
          'The knuckle: the ring must pass over the joint, which is often wider than the base of the finger.',
          'A wide band: it fits more snugly. Allow a slightly larger size.',
          'Between two sizes, take the larger: it is easier to remove metal than to add it.',
        ],
      },
      {
        id: 'correspondances',
        title: 'Size conversion table',
        table: {
          caption: 'European sizes, inner diameter and US equivalent',
          head: ['Europe (circumference, mm)', 'Diameter (mm)', 'US (approx.)'],
          rows: SIZE_RANGE.map((c) => {
            const r = ringSizeRow(c, 'en');
            return [r.eu, r.diameterMm, r.us];
          }),
        },
        after: [
          'US sizes are calculated and rounded to the nearest quarter. Jewellers’ charts differ by a quarter, sometimes by half a size. If in doubt, give us the millimetres.',
        ],
      },
      {
        id: 'atelier',
        title: 'At JR Diamond',
        paragraphs: [
          'Our first model is drawn in European size 51½, an inner diameter of 16.4 mm. The workshop makes it in your size; the 3D preview stays at the drawn size.',
          'Give your European size in the quote request (52, for example), or its US equivalent (6), or “not sure”. The first resizing is free.',
          'A band set with stones all the way round is hard to resize: for that one, measure with particular care.',
        ],
      },
    ],
    sources: [
      { label: 'ISO 8653:2016, ring sizes (preview of the standard)', url: 'https://standards.iteh.ai/catalog/standards/iso/799f4661-1465-4f4f-a23d-1a9ad8567517/iso-8653-2016' },
      { label: 'Wikipedia, ring size (countries using the ISO standard, US scale)', url: 'https://en.wikipedia.org/wiki/Ring_size' },
      { label: 'Gindi Gold, Israeli, European and US size chart', url: 'https://gindigold.com/en/ring-and-bracelet-size-guide/' },
      { label: 'B144, ring size guide (Israeli sizes, tips, in Hebrew)', url: 'https://www.b144.co.il/Magazine/%D7%AA%D7%9B%D7%A9%D7%99%D7%98%D7%99%D7%9D/%D7%9E%D7%93%D7%A8%D7%99%D7%9A-%D7%9E%D7%99%D7%93%D7%95%D7%AA-%D7%98%D7%91%D7%A2%D7%95%D7%AA/' },
      { label: 'GIA, ring size guide (hand, string, knuckle, temperature, wide bands, rings that are hard to resize)', url: 'https://4cs.gia.edu/en-us/blog/how-to-determine-ring-size-tips-and-ring-size-chart/' },
    ],
    next: [CONFIGURATOR, G_OR, FAQ_LINK],
  },
];
