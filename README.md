# Lodash CommonJS + ES

[![Stars](https://img.shields.io/github/stars/ilyub/lodash-commonjs-es)](https://github.com/ilyub/lodash-commonjs-es)
[![Downloads](https://img.shields.io/npm/dm/lodash-commonjs-es)](https://www.npmjs.com/package/lodash-commonjs-es)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/lodash-commonjs-es)](https://snyk.io/advisor/npm-package/lodash-commonjs-es)
[![Dependencies](https://img.shields.io/librariesio/release/npm/lodash-commonjs-es)](https://libraries.io/npm/lodash-commonjs-es)

## Table of contents

- [Overview](#overview)
- [Installation](#installation)
- [HowTo: Distributing CommonJS + ES in one package](#howto)
- [Related packages](#related-packages)

## <a id="overview"></a>Overview

Combines lodash and lodash-es packages.

## <a id="installation"></a>Installation

```sh
npm install lodash-commonjs-es
```

## <a id="howto"></a>HowTo: Distributing CommonJS + ES in one package

Sample configuration to store CommonJS version in _dist_ folder and ES2015 version in _es_ folder:

```jsonc
// package.json
{
  "main": "dist/index.js",
  "module": "es/index.js",
  "scripts": {
    "build": "npm run build-commonjs && npm run build-es",
    "build-commonjs": "tsc --project tsconfig-commonjs.json",
    "build-es": "tsc --project tsconfig-es.json"
  },
  "dependencies": {
    "lodash-commonjs-es": "^1.0.0"
  }
}
```

```jsonc
// tsconfig-commonjs.json
{
  "compilerOptions": {
    "module": "CommonJS",
    "outDir": "dist"
  },
  "extends": "./tsconfig"
}
```

```jsonc
// tsconfig-es.json
{
  "compilerOptions": {
    "module": "ES2015",
    "outDir": "es"
  },
  "extends": "./tsconfig"
}
```

## <a id="related-packages"></a>Related packages

- [eslint-plugin-misc](https://www.npmjs.com/package/eslint-plugin-misc) &mdash; ESLint plugin.
- [quasar-extension](https://www.npmjs.com/package/quasar-extension) &mdash; Quasar extension.
- [real-fns](https://www.npmjs.com/package/real-fns) &mdash; A collection of utility functions.
- [real-classes](https://www.npmjs.com/package/real-classes) &mdash; A collection of utility classes.
- [real-facades](https://www.npmjs.com/package/real-facades) &mdash; Facades (each facade provides interface to pluggable implementation).
- [real-service-providers](https://www.npmjs.com/package/real-service-providers) &mdash; Facade implementations.
