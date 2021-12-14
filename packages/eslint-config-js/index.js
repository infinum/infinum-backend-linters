module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  parser: '@babel/eslint-parser',
  env: {
    node: true,
    commonjs: true,
    jquery: true,
    browser: true,
    es6: true,
    es2017: true,
    es2020: true
  },
  rules: {
    semi: 'error',
    eqeqeq: ['error', 'smart']
  }
};
