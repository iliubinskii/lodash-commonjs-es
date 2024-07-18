# Lodash CommonJS + ES

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

Sample configuration to store CommonJS version in _dist_ folder and ES2020 version in _es_ folder:

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
    "module": "ES2020",
    "outDir": "es"
  }
}
```
