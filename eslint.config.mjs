import { fixupConfigRules } from '@eslint/compat'
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js'
import react from 'eslint-plugin-react/configs/recommended.js'
import globals from 'globals'
import ts from 'typescript-eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPrettier from 'eslint-plugin-prettier'
import reactCompiler from 'eslint-plugin-react-compiler'

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      prettier: eslintPrettier
    },
    rules: {
      'prettier/prettier': 'error',
      'max-lines': ['error', { max: 680, skipBlankLines: true, skipComments: true }]
    }
  },
  ...fixupConfigRules([
    {
      ...react,
      settings: {
        react: { version: 'detect' }
      }
    },
    reactJsx
  ]),
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-compiler': reactCompiler
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-compiler/react-compiler': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/no-unescaped-entities': 'off'
    }
  },
  { ignores: ['dist/'] },
  {
    // Dedicated import configuration
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }
    },
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            [
              // Packages `react` related packages come first.
              '^react',
              '@tanstack/react-router',
              'antd',
              '^@?\\w',
              '^(@|components)(/.*|$)',
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$'
            ],
            // Style imports.
            ['^.+\\.?(sc|sa|c|le)ss$']
          ]
        }
      ]
    },
    settings: {
      // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
      'import/parsers': { espree: ['.mjs', '.js'] },
      'import/resolver': { node: true }
    }
  }
]
