# Lodash CommonJS + ES

[![Stars](https://img.shields.io/github/stars/iliubinskii/lodash-commonjs-es)](https://github.com/iliubinskii/lodash-commonjs-es)
[![Downloads](https://img.shields.io/npm/dm/lodash-commonjs-es)](https://www.npmjs.com/package/lodash-commonjs-es)
[![Dependencies](https://img.shields.io/librariesio/release/npm/lodash-commonjs-es)](https://libraries.io/npm/lodash-commonjs-es)

## Table of contents

- [Overview](#overview)
- [Installation](#installation)
- [HowTo: Distributing CommonJS + ES in one package](#howto)

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
  "extends": "./tsconfig",
  "compilerOptions": {
    "module": "CommonJS",
    "outDir": "dist"
  }
}
```

```jsonc
// tsconfig-es.json
{
  "extends": "./tsconfig",
  "compilerOptions": {
    "module": "ES2015",
    "outDir": "es"
  }
}
```
