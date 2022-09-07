module.exports = {
  extends: [
    "./node_modules/real-config/eslint",
    "./node_modules/real-config/eslint/special-locations",
    "./.eslintrc.overrides",
    "./.eslintrc.rule-overrides",
    "./.eslintrc.temp"
  ]
};
