import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // Prototype : la racine mène au configurateur du modèle pilote.
    return [{ source: '/', destination: '/fr/configurateur/ring-001', permanent: false }];
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
