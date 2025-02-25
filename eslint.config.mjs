import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import prettier from 'eslint-plugin-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

/** @type {import("eslint").Linter.Config} */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettier.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-no-comment-textnodes': 'off',
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn'
    }
  }
]

export default eslintConfig
