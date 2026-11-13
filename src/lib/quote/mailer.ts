// Module serveur uniquement : importé par la route `/api/devis`, jamais par un composant client.
import nodemailer from 'nodemailer';

export type Attachment = { filename: string; content: Buffer; contentType: string };
export type QuoteMail = { subject: string; text: string; replyTo: { name: string; address: string }; attachments: Attachment[] };

/**
 * Envoi par SMTP (tout fournisseur : messagerie de l'atelier, Gmail, OVH, Brevo, Resend…).
 * Variables : voir `.env.example`. `QUOTE_DRY_RUN=1` n'envoie rien et écrit l'e-mail dans le journal.
 */
export function mailerStatus(env: Record<string, string | undefined> = process.env): 'dry-run' | 'smtp' | 'unconfigured' {
  if (env.QUOTE_DRY_RUN === '1') return 'dry-run';
  return env.SMTP_HOST && env.QUOTE_TO && env.QUOTE_FROM ? 'smtp' : 'unconfigured';
}

export async function sendQuoteMail(mail: QuoteMail, env: Record<string, string | undefined> = process.env): Promise<void> {
  const status = mailerStatus(env);
  if (status === 'dry-run') {
    console.info(
      `[devis] envoi simulé\nObjet : ${mail.subject}\nRépondre à : ${mail.replyTo.address}\n${mail.text}\n` +
        `Pièces jointes : ${mail.attachments.map((a) => `${a.filename} (${a.content.length} o)`).join(', ') || 'aucune'}`,
    );
    return;
  }
  if (status === 'unconfigured') throw new Error('Envoi des devis non configuré (SMTP_HOST, QUOTE_FROM, QUOTE_TO).');
  const port = Number(env.SMTP_PORT || 587);
  const transport = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port,
    secure: env.SMTP_SECURE ? env.SMTP_SECURE === '1' : port === 465,
    auth: env.SMTP_USER ? { user: env.SMTP_USER, pass: env.SMTP_PASS } : undefined,
  });
  await transport.sendMail({
    from: env.QUOTE_FROM,
    to: env.QUOTE_TO,
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    attachments: mail.attachments,
  });
}
