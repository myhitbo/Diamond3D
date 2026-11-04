import next from 'eslint-config-next';

const config = [
  { ignores: ['.next/**', 'node_modules/**', '.venv/**', 'cad/**', 'public/**', 'playwright-report/**', 'test-results/**', 'preview/dist/**'] },
  ...next,
];

export default config;
