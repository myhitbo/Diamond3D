'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Locale } from '@/lib/configurator/schema';
import styles from './Configurator.module.css';

/**
 * Panneau de la page cachée /[langue]/diagnostic : mesure la 3D sur l'appareil réel
 * (processeur graphique, images par seconde en rotation, temps jusqu'à la première image)
 * et produit un rapport JSON à copier ou partager. Lit la sonde `window.__jr` (debugProbe.ts).
 */

const LABELS: Record<Locale, { title: string; intro: string; run: string; running: (s: number) => string; copy: string; copied: string; share: string; waiting: string }> = {
  fr: {
    title: 'Diagnostic de l’appareil',
    intro: 'Laissez le téléphone immobile pendant la mesure, puis copiez ou partagez le rapport.',
    run: 'Relancer la mesure',
    running: (s) => `Mesure en cours… ${s} s`,
    copy: 'Copier le rapport',
    copied: 'Rapport copié',
    share: 'Partager',
    waiting: 'Chargement du modèle 3D…',
  },
  en: {
    title: 'Device diagnostic',
    intro: 'Keep the phone still during the measurement, then copy or share the report.',
    run: 'Run again',
    running: (s) => `Measuring… ${s} s`,
    copy: 'Copy report',
    copied: 'Report copied',
    share: 'Share',
    waiting: 'Loading 3D model…',
  },
  he: {
    title: 'אבחון המכשיר',
    intro: 'השאירו את הטלפון ללא תנועה במהלך המדידה, ואז העתיקו או שתפו את הדוח.',
    run: 'מדידה חוזרת',
    running: (s) => `מודד… ${s} שניות`,
    copy: 'העתקת הדוח',
    copied: 'הדוח הועתק',
    share: 'שיתוף',
    waiting: 'טוען את המודל התלת־ממדי…',
  },
};

type Report = Record<string, unknown>;

/** Nom du processeur graphique, quand le navigateur le révèle (Safari et Firefox le masquent souvent). */
function gpuInfo() {
  try {
    const c = document.createElement('canvas');
    const gl = (c.getContext('webgl2') ?? c.getContext('webgl')) as WebGLRenderingContext | null;
    if (!gl) return { webgl: false };
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    return {
      webgl: true,
      webgl2: typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext,
      vendor: ext ? gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR),
      renderer: ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
      maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
    };
  } catch {
    return { webgl: false };
  }
}

function deviceInfo() {
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { effectiveType?: string; downlink?: number }; userAgentData?: { platform?: string; mobile?: boolean } };
  return {
    userAgent: nav.userAgent,
    platform: nav.userAgentData?.platform ?? nav.platform,
    mobile: nav.userAgentData?.mobile,
    cores: nav.hardwareConcurrency,
    memoryGb: nav.deviceMemory,
    connection: nav.connection ? { type: nav.connection.effectiveType, downlinkMbps: nav.connection.downlink } : undefined,
    screen: { width: screen.width, height: screen.height, dpr: window.devicePixelRatio },
    viewport: { width: window.innerWidth, height: window.innerHeight },
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
}

function modelDownload() {
  const entry = performance.getEntriesByType('resource').find((e) => e.name.endsWith('.glb')) as PerformanceResourceTiming | undefined;
  return entry ? { ms: Math.round(entry.duration), transferKb: Math.round(entry.transferSize / 1024) } : undefined;
}

function percentile(sorted: number[], p: number) {
  return sorted.length ? Math.round(sorted[Math.min(sorted.length - 1, Math.floor(p * sorted.length))] * 10) / 10 : null;
}

/** Fait tourner la caméra pendant `seconds` et mesure les rendus effectifs (la scène ne se redessine qu'à la demande). */
function measureRotation(seconds: number, onTick: (left: number) => void): Promise<Report> {
  return new Promise((resolve) => {
    const jr = window.__jr!;
    const qualityBefore = jr.quality;
    const startRenders = jr.renders;
    const intervals: number[] = [];
    let lastRenders = jr.renders;
    let lastFrameAt = performance.now();
    const start = lastFrameAt;
    let prev = start;
    const step = (now: number) => {
      jr.orbit(((now - prev) / 1000) * 36); // 36 °/s : un tour en 10 s
      prev = now;
      if (jr.renders !== lastRenders) {
        intervals.push(now - lastFrameAt);
        lastFrameAt = now;
        lastRenders = jr.renders;
      }
      const elapsed = (now - start) / 1000;
      onTick(Math.max(0, Math.ceil(seconds - elapsed)));
      if (elapsed < seconds) {
        requestAnimationFrame(step);
        return;
      }
      const sorted = intervals.slice(1).sort((a, b) => a - b);
      resolve({
        seconds,
        frames: jr.renders - startRenders,
        fps: Math.round(((jr.renders - startRenders) / elapsed) * 10) / 10,
        frameMs: { p50: percentile(sorted, 0.5), p95: percentile(sorted, 0.95), max: sorted.length ? Math.round(sorted[sorted.length - 1]) : null },
        qualityBefore,
        qualityAfter: jr.quality,
      });
    };
    requestAnimationFrame(step);
  });
}

export default function DiagnosticPanel({ locale }: { locale: Locale }) {
  const t = LABELS[locale];
  const [report, setReport] = useState<Report | null>(null);
  const [left, setLeft] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const started = useRef(false);

  const run = useCallback(async () => {
    const jr = window.__jr;
    if (!jr?.ready) return;
    setCopied(false);
    const seconds = Number(new URLSearchParams(window.location.search).get('secondes')) || 10;
    const rotation = await measureRotation(seconds, setLeft);
    setLeft(null);
    setReport({
      date: new Date().toISOString(),
      page: window.location.pathname,
      device: deviceInfo(),
      gpu: gpuInfo(),
      model: { download: modelDownload(), firstFrameMs: jr.firstFrameMs, render: jr.info() },
      rotation,
    });
  }, []);

  // Lance la mesure dès que le modèle est affiché (la sonde passe `ready` à vrai).
  useEffect(() => {
    const id = window.setInterval(() => {
      if (started.current || !window.__jr?.ready) return;
      started.current = true;
      window.clearInterval(id);
      void run();
    }, 200);
    return () => window.clearInterval(id);
  }, [run]);

  const text = report ? JSON.stringify(report, null, 2) : '';
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  const share = () => void navigator.share?.({ title: 'JR Diamond · diagnostic', text }).catch(() => undefined);

  return (
    <section className={styles.diagnostic} aria-labelledby="diag-title" data-testid="diagnostic">
      <h2 id="diag-title" className={styles.fieldTitle}>
        {t.title}
      </h2>
      <p className={styles.note}>{t.intro}</p>
      <p role="status" aria-live="polite" className={styles.value}>
        {left !== null ? t.running(left) : !report ? t.waiting : ''}
      </p>
      {report && (
        <>
          <div className={styles.diagnosticActions}>
            <button type="button" className={styles.primary} onClick={copy}>
              {copied ? t.copied : t.copy}
            </button>
            {typeof navigator !== 'undefined' && 'share' in navigator && (
              <button type="button" className={styles.textButton} onClick={share}>
                {t.share}
              </button>
            )}
            <button type="button" className={styles.textButton} onClick={() => void run()}>
              {t.run}
            </button>
          </div>
          <pre className={styles.diagnosticReport} dir="ltr" data-testid="diagnostic-report">
            {text}
          </pre>
        </>
      )}
    </section>
  );
}
