module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
  },
  ignorePatterns: ['/lib/**/*'],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/no-unresolved': 0,
    'new-cap': 0,
    'space-before-function-paren': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    'camelcase': 0,
    'indent': 'off',
  },
};
