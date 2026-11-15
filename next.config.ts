import type { NextConfig } from 'next';
import { translatedRouteRules } from './src/lib/routes';

const routes = translatedRouteRules();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // La racine mène à l'accueil français. Temporaire : la langue par défaut pourra changer au lancement en Israël.
      { source: '/', destination: '/fr', permanent: false },
      // Anciennes adresses françaises sous /en et /he : vers l'adresse traduite.
      ...routes.redirects,
    ];
  },
  async rewrites() {
    // Adresses traduites (/en/configurator/…) servies par les pages du dossier français.
    return routes.rewrites;
  },
  async headers() {
    return [
      {
        // Modèles 3D : nom versionné à chaque reconstruction, mise en cache longue possible plus tard.
        source: '/models/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }],
      },
    ];
  },
};

export default nextConfig;
