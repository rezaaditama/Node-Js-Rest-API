// import js from '@eslint/js';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';
// import json from '@eslint/json';
// import { defineConfig } from 'eslint/config';
// import importPlugin from 'eslint-plugin-import';
// import prettierPlugin from 'eslint-plugin-prettier';
// import prettierConfig from 'eslint-config-prettier';

// export default defineConfig([
//   {
//     files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
//     ignores: [
//       '**/node_modules/*',
//       '**/dist/*',
//       '**/build/*',
//       '**/public/*',
//       '**/tsconfig.json',
//       '**/package.json',
//       '**/package-lick.json',
//       '**/eslint.config.mjs',
//     ],
//     plugins: {
//       '@typescript-eslint': tseslint.plugin,
//       import: importPlugin,
//       prettier: prettierPlugin,
//     },
//     extends: [js.configs.recommended, ...tseslint.configs.recommended, ...tseslint.configs.stylistic, prettierConfig],
//     languageOptions: {
//       globals: { ...globals.node, ...globals.es2021 },
//       parser: tseslint.parser,
//       parserOptions: {
//         project: './tsconfig.json',
//         tsconfigRootDir: import.meta.dirname,
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//     },
//     settings: {
//       'import/resolver': {
//         typescript: {
//           project: './tsconfig.json',
//           alwaysTryTypes: true,
//         },
//         node: { extensions: ['.js', '.jsx', '.ts', '.tsx'], moduleDirectory: ['node_modules', 'src/'] },
//       },
//     },
//     rules: {
//       //Typescript
//       '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
//       '@typescript-eslint/explicit-function-return-type': 'off',

//       //Import Order
//       'import/order': [
//         'error',
//         {
//           groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
//           'newlines-between': 'always',
//         },
//       ],

//       //Prettier
//       'prettier/prettier': ['error', { endOfLine: 'auto' }],
//     },
//   },
//   {
//     files: ['**/*.json'],
//     plugins: { json },
//     languageOptions: { parser: json.parser },
//     extends: ['json/recommended'],
//     ignores: ['package.json', 'tsconfig.json'],
//   },
// ]);

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['**/dist/*', '**/node_modules/*', '**/public/*', 'eslint.config.mjs', '**/tsconfig.json'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { '@typescript-eslint': tseslint.plugin, js },
    extends: ['js/recommended', ...tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { project: ['./tsconfig.json'] },
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      'no-return-assign': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'array-callback-return': 'off',
    },
  },
]);
