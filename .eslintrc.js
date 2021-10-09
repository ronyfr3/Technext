module.exports = {
  extends: "airbnb-base",
  env: {
    browser: true,
  },
  rules: {
    quotes: [
      "error",
      "double",
      {avoidEscape: true, allowTemplateLiterals: true},
    ],
    'camelcase': 'off',
     "linebreak-style": 0,
     "no-unused-vars": "error",
     "no-console": "error",
     "object-shorthand":"off",
     "func-names":"off",
     "class-methods-use-this":"off",
     "arrow-body-style": 0,
     "no-param-reassign": [2, { "props": false }],
     "no-confusing-arrow": ["error", {"allowParens": true}],
     "eol-last": 0,
     "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  },
};
