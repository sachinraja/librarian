module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  ignorePatterns: ['build', '.eslintrc.js', '*.config.js'],
  rules: {
    'no-console': 'off',
    // not compatible with commando types
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // does not always work correctly, only enable the ts version
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'all', endOfLine: 'auto' },
    ],
  },
};
