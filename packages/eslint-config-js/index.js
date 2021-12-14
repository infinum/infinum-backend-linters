module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    node: true,
    commonjs: true,
    jquery: true,
    browser: true,
    es6: true,
    es2017: true,
    es2020: true
  },
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},
  rules: {
    semi: 'error',
    eqeqeq: ['error', 'smart']
  }
};
