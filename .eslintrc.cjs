module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true
  },
  extends: ['typescript', 'typescript/react', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true
    }, {
      usePrettierrc: true
    }],
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'max-lines': ['error', 350],
    'no-console': ['error', {
      allow: ['warn', 'error', 'info']
    }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/no-array-index-key': 'off',
    'react/self-closing-comp': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-useless-escape': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/jsx-no-target-blank': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error', {
      ignoreDeclarationMerge: true
    }],
  },
  overrides: [{
    files: ['**/*.tsx'],
    rules: {
      'max-lines': ['error', 700]
    }
  }, {
    files: ['**/*.{js|cjs}'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }, {
    files: ['**/*.types.ts'],
    rules: {
      'max-lines': 'off'
    }
  }]
};