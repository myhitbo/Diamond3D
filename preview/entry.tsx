import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Configurator from '@/components/configurator/Configurator';
import { DICTIONARIES } from '@/i18n/dictionaries';
import { LOCALES, type Locale } from '@/lib/configurator/schema';
import { MODELS } from '@/models';
import '@/app/globals.css';

import glbBytes from './dist/ring-001.glb';

// Préversion claude.ai : les fichiers .glb n'y sont pas servis. Le modèle est intégré à la page
// et la requête du chargeur 3D est servie depuis la mémoire, sans aucun accès réseau.
const GLB_URL = 'embedded/ring-001.glb';
MODELS['ring-001'].asset.glb = GLB_URL;
const nativeFetch = window.fetch.bind(window);
window.fetch = (input, init) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
  if (url.endsWith(GLB_URL)) {
    return Promise.resolve(new Response(glbBytes, { status: 200, headers: { 'Content-Type': 'model/gltf-binary' } }));
  }
  return nativeFetch(input, init);
};

const readLocale = (): Locale => (location.hash === '#en' ? 'en' : 'fr');

function App() {
  const [locale, setLocale] = useState<Locale>(readLocale);
  useEffect(() => {
    const on = () => setLocale(readLocale());
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  const t = DICTIONARIES[locale];
  return (
    <>
      <header className="site-header">
        <p className="topbar">{t.brandTagline}</p>
        <div className="header-row">
          {/* Pas de menu dans la préversion (page unique) : cellule vide pour garder le nom au centre. */}
          <span />
          <span className="wordmark">JR Diamond</span>
          <nav className="lang" aria-label="Langue / Language">
            {LOCALES.map((l) => (
              <a key={l} href={`#${l}`} hrefLang={l} aria-current={l === locale ? 'page' : undefined}>
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <Configurator key={locale} modelId="ring-001" locale={locale} quoteEnabled={false} />
      </main>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
