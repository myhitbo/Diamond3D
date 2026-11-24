import { describe, expect, it } from 'vitest';
import { ring001 } from '@/models/ring-001/definition';
import { defaultState } from '@/lib/configurator/logic';
import { configReference, hasConfigParams, shareUrl, stateFromParams, stateToParams, withConfig } from '@/lib/configurator/share';
import { buildQuoteEmail, parseQuote } from '@/lib/quote/request';
import { buildWhatsAppMessage } from '@/lib/quote/whatsapp';
import { getModel } from '@/models';

const s0 = defaultState(ring001);
const custom = { ...s0, composition: 'solitaire', metal: 'platinum-950' as const, diamondOrigin: 'lab-grown' as const };

describe('configuration dans l’adresse', () => {
  it('aller-retour sans perte', () => {
    expect(stateFromParams(ring001, stateToParams(custom))).toEqual(custom);
    expect(stateFromParams(ring001, stateToParams(s0))).toEqual(s0);
  });

  it('ignore une valeur inconnue sans perdre les autres', () => {
    const q = new URLSearchParams('c=solitaire&m=silver-925&o=lab-grown&s=center:inconnue,autre:x');
    expect(stateFromParams(ring001, q)).toEqual({ ...s0, composition: 'solitaire', diamondOrigin: 'lab-grown' });
  });

  it('reconnaît une adresse qui porte une configuration', () => {
    expect(hasConfigParams(new URLSearchParams('debug=1'))).toBe(false);
    expect(hasConfigParams(new URLSearchParams('m=platinum-950'))).toBe(true);
  });

  it('garde les paramètres techniques, remplace la configuration', () => {
    const href = withConfig('https://jr.example/fr/configurateur/ring-001?debug=1&m=yellow-gold-14k#x', custom);
    const u = new URL(href);
    expect(u.searchParams.get('debug')).toBe('1');
    expect(u.searchParams.get('m')).toBe('platinum-950');
    expect(u.searchParams.getAll('m')).toHaveLength(1);
  });

  it('adresse à partager : sans paramètres techniques', () => {
    const url = shareUrl('https://jr.example/', '/fr/configurateur/ring-001', custom);
    expect(url).toBe(`https://jr.example/fr/configurateur/ring-001?${stateToParams(custom)}`);
    expect(url).not.toContain('debug');
  });
});

describe('référence de configuration', () => {
  it('stable pour la même bague, différente pour une autre', () => {
    expect(configReference('ring-001', s0)).toMatch(/^JR-[0-9A-Z]{6}$/);
    expect(configReference('ring-001', { ...s0 })).toBe(configReference('ring-001', s0));
    expect(configReference('ring-001', custom)).not.toBe(configReference('ring-001', s0));
  });

  it('la même référence dans l’e-mail, le message WhatsApp, et un lien qui rouvre la bague', () => {
    const r = parseQuote(
      { modelId: 'ring-001', locale: 'fr', config: custom, name: 'Jeanne Martin', email: 'jeanne@example.com', consent: true, website: '' },
      getModel,
    );
    if (!r.ok) throw new Error('demande invalide');
    const ref = configReference('ring-001', custom);
    const { subject, text } = buildQuoteEmail(r.model, r.state, r.fields, [], 'https://jr.example/');
    expect(subject).toContain(ref);
    expect(text).toContain(ref);
    expect(text).toContain(`https://jr.example/fr/configurateur/ring-001?${stateToParams(custom)}`);
    expect(buildWhatsAppMessage(r.model, r.state, {})).toContain(`Référence : ${ref}`);
  });
});
