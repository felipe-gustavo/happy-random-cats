module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "eslint-config-prettier",
    "prettier",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import", "eslint-plugin-prettier"],
  rules: {
    // Disable no spreading parameters to react component
    "react/jsx-props-no-spreading": "off",
    // Prettier code style seetings
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    // React extensions
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    // Change console to warn
    "no-console": "warn",
    // Ignore extension on import ts and js files
    "import/extensions": [
      "error",
      "never",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        json: "always",
      },
    ],
    // Import requirements
    "import/order": [
      "error",
      {
        // Alphabetic import
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        // Group imports
        groups: [
          "builtin",
          "external",
          "index",
          "sibling",
          "parent",
          "internal",
        ],
        // Split imports on new lines
        "newlines-between": "always-and-inside-groups",
      },
    ],
    // Disable export default
    "import/prefer-default-export": ["off"],
    // Enable import from devDep
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    // Turn off rules to setup them on typescript
    "no-useless-constructor": "off",
    // Error on useless constructor
    "@typescript-eslint/no-useless-constructor": ["error"],
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.stories.*", "**/*.story.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
        "react/function-component-definition": [
          2,
          { namedComponents: ["function-declaration", "arrow-function"] },
        ],
      },
    },
  ],
};
