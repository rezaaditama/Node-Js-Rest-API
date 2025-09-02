import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    ignores: [
      '**/node_modules/*',
      '**/dist/*',
      '**/build/*',
      '**/public/*',
      '**/tsconfig.json',
      '**/package.json',
      '**/package-lock.json',
      '**/eslint.config.mjs',
    ],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...globals.node, ...globals.es2021 },
      parser: tseslint.parser,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      //Typescript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
]);

// import js from '@eslint/js';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';
// import { defineConfig } from 'eslint/config';

// export default defineConfig([
//   {
//     ignores: ['**/dist/*', '**/node_modules/*', '**/public/*', 'eslint.config.mjs', '**/tsconfig.json'],
//   },
//   {
//     files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
//     plugins: { '@typescript-eslint': tseslint.plugin, js },
//     extends: ['js/recommended', ...tseslint.configs.recommended],
//     languageOptions: {
//       parser: tseslint.parser,
//       parserOptions: { project: ['./tsconfig.json'] },
//       sourceType: 'module',
//       globals: globals.node,
//     },
//     rules: {
//       '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
//       '@typescript-eslint/strict-boolean-expressions': 'off',
//       'no-return-assign': 'off',
//       '@typescript-eslint/restrict-template-expressions': 'off',
//       '@typescript-eslint/explicit-function-return-type': 'off',
//       'array-callback-return': 'off',
//     },
//   },
// ]);
