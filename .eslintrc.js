module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-var': 0,
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    "no-multiple-empty-lines": 0,
    "prefer-template": 0,
  },
};
