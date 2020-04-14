const error = "error";
const warning = "warning";
const off = "off";

module.exports = {
  extends: [
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    "prefer-const": error
  }
};
