# stylelint-config-scss

Shareable config for linting SCSS with Stylelint.

## Setup

Add `stylelint`, `postcss` and `@infinumrails/stylelint-config-scss` to your (dev) dependencies:
```
yarn add --dev stylelint postcss @infinumrails/stylelint-config-scss
```

Add the following to `package.json`:
```json
{
  "scripts": {
    "lint-css": "stylelint"
  },
  "stylelint": {
    "extends": "@infinumrails/stylelint-config-scss"
  }
}
```

Run `yarn lint-css [directory]` to lint (S)CSS code.<br />
Run `yarn lint-css --fix [directory]` to automatically fix found offenses.
