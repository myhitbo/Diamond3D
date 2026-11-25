import { describe, expect, it } from 'vitest';
import { BUSINESS, VAT_NOTICE, businessText, vatStatus, type VatStatus } from '@/config/business';
import { FAQ, prixAnswer } from '@/content/faq';
import { LOCALES } from '@/lib/configurator/schema';

/** Tout le texte d'une réponse de la FAQ, dans les trois langues. */
const allText = (a: ReturnType<typeof prixAnswer>) => LOCALES.flatMap((l) => a[l]).join(' ');

describe('TVA : un seul réglage, `vatStatus` (src/config/business.ts)', () => {
  it('osek patour (exempt) : pas de TVA, ni dans la FAQ « prix » ni dans les pages légales', () => {
    const status: VatStatus = 'exempt';
    const a = prixAnswer(status);
    expect(a.fr.join(' ')).toContain('osek patour (עוסק פטור) : il ne facture pas de TVA');
    expect(a.en.join(' ')).toContain('VAT-exempt dealer (עוסק פטור)');
    expect(a.he.join(' ')).toContain('עוסק פטור');
    expect(allText(a)).not.toMatch(/TTC|TVA comprise|comprend la TVA|includes VAT|כולל מע״מ|18/);
    for (const l of LOCALES) expect(a[l].at(-1)).toContain(VAT_NOTICE[status][l]);
  });

  it('société (registered) : prix TVA comprise, 18 %, sans mention d’osek patour', () => {
    const status: VatStatus = 'registered';
    const a = prixAnswer(status);
    expect(a.fr.join(' ')).toContain('Le prix du devis comprend la TVA (18 %).');
    expect(a.en.join(' ')).toContain('The quoted price includes VAT (18%).');
    expect(a.he.join(' ')).toContain('כולל מע״מ (18%)');
    expect(allText(a)).not.toMatch(/osek|פטור|exempt/i);
    for (const l of LOCALES) expect(a[l].at(-1)).toContain(VAT_NOTICE[status][l]);
  });

  it('le réglage actuel pilote la FAQ et les pages légales', () => {
    expect(vatStatus).toBe('exempt'); // osek patour au 16/11/2026 ; à changer au passage en société
    const prix = FAQ.flatMap((c) => c.items).find((i) => i.id === 'prix')!;
    expect(prix.a).toEqual(prixAnswer(vatStatus));
    expect(BUSINESS.vatNotice).toEqual(VAT_NOTICE[vatStatus]);
    for (const l of LOCALES) expect(businessText('vatNotice', l)).toEqual({ text: VAT_NOTICE[vatStatus][l], missing: false });
  });
});
