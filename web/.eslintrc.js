module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
      'plugin:react/recommended',
      'airbnb',
      'prettier',
      'prettier/react'
    ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
      'react',
      '@typescript-eslint',
      'prettier'
    ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', ',jsx', '.ts', '.tsx'] },
    ],
    'import/prefer-default-export': 'off',
  },
};
