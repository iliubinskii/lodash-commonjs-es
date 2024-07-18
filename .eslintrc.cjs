/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  ignorePatterns: ["!.*", "/dist/**", "/es/**", "/node_modules/**"],
  env: {
    es2022: true
  },
  extends: "./.eslintrc.base.cjs",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2022,
    project: "tsconfig.json",
    sourceType: "module"
  },
  rules: {
    "@cspell/spellchecker": [
      "warn",
      {
        cspell: {
          words:
            // @sorted
            ["escompat", "sonarjs"]
        }
      }
    ],
    "import/no-namespace": "off"
  }
};

module.exports = config;
