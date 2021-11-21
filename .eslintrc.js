module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ["prettier"],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'global-require': 2,
    'no-underscore-dangle': 2,
    'no-await-in-loop': 2,
    'no-restricted-syntax': 2,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        tabWidth: 4,
        endOfLine: 'lf',
        arrowParens: 'always',
      },
    ],
  },
};
