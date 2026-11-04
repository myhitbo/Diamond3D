import { lazy, Suspense, type ComponentType } from 'react';
// Remplace next/dynamic hors de Next.js : même rôle (chargement différé du moteur 3D).
export default function dynamic<P extends object>(loader: () => Promise<{ default: ComponentType<P> }>) {
  const L = lazy(loader);
  return function Dynamic(props: P) {
    return (
      <Suspense fallback={null}>
        <L {...props} />
      </Suspense>
    );
  };
}
