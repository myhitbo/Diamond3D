import { NextResponse } from 'next/server';
import { getModel } from '@/models';
import { buildQuoteEmail, checkPhotos, fieldsFromForm, parseQuote, PHOTO_LIMITS, type QuoteError } from '@/lib/quote/request';
import { mailerStatus, sendQuoteMail } from '@/lib/quote/mailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Limitation simple, en mémoire, par adresse IP : suffisante contre les envois répétés
// d'un même navigateur, pas contre une attaque distribuée (instance unique, remise à zéro au redémarrage).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

const fail = (status: number, error: QuoteError | { code: string }) => NextResponse.json({ ok: false, error }, { status });

export async function POST(req: Request) {
  if (mailerStatus() === 'unconfigured') return fail(503, { code: 'unavailable' });

  const length = Number(req.headers.get('content-length') ?? 0);
  if (length > PHOTO_LIMITS.maxBytesTotal + 256 * 1024) return fail(413, { code: 'photos', reason: 'total' });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'local';
  if (mailerStatus() !== 'dry-run' && rateLimited(ip)) return fail(429, { code: 'rate_limited' });

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return fail(400, { code: 'invalid', fields: [] });
  }

  const parsed = parseQuote(fieldsFromForm(form), getModel);
  if (!parsed.ok) {
    // Robot (champ piège rempli) : réponse identique à un succès, rien n'est envoyé.
    if (parsed.error.code === 'invalid' && parsed.error.fields.includes('website')) return NextResponse.json({ ok: true });
    return fail(400, parsed.error);
  }

  const files = form.getAll('photos').filter((f): f is File => f instanceof File && f.size > 0);
  const photos = files.map((f) => ({ name: f.name.slice(0, 120), type: f.type, size: f.size }));
  const photoError = checkPhotos(photos);
  if (photoError) return fail(400, photoError);

  const { model, state, fields } = parsed;
  const site = process.env.SITE_URL || new URL(req.url).origin;
  const { subject, text } = buildQuoteEmail(model, state, fields, photos, site);
  try {
    await sendQuoteMail({
      subject,
      text,
      replyTo: { name: fields.name, address: fields.email },
      attachments: await Promise.all(
        files.map(async (f, i) => ({ filename: photos[i].name || `photo-${i + 1}`, content: Buffer.from(await f.arrayBuffer()), contentType: f.type })),
      ),
    });
  } catch (e) {
    console.error('[devis] échec de l’envoi', e);
    return fail(502, { code: 'send_failed' });
  }
  return NextResponse.json({ ok: true });
}
