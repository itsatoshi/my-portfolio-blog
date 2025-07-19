import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'prettier'),
  ...compat.plugins('simple-import-sort'),
  {
    rules: {
      // Import sorting rules
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // Disable conflicting import rules
      'import/order': 'off',
      'sort-imports': 'off',
    },
  },
];

export default eslintConfig;
