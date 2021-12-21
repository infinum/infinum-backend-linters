# eslint-config-js

Shareable config for ESLint.

## Setup

Add `eslint` and `@infinumrails/eslint-config-js` to your (dev) dependencies:
```
yarn add --dev eslint @infinumrails/eslint-config-js
```

Add the following to `package.json`:
```json
{
  "scripts": {
    "lint-js": "eslint",
  },
  "eslintConfig": {
    "extends": "@infinumrails/eslint-config-js"
  }
}
```

Run `yarn lint-js [directory]` to lint JS code.<br />
Run `yarn lint-js --fix [directory]` to automatically fix found offenses. 
