module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",

    "no-console": "off",
    "no-debugger": "off",

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["off"],

    "no-empty-pattern": "off",
    "no-useless-catch": "off",

    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
        "error"
    ],
    "@typescript-eslint/no-explicit-any": "off",

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
        "error"
    ],
    "@typescript-eslint/no-non-null-assertion": "off",

    "max-len": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  },
}
