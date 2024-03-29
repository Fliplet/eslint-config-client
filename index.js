module.exports = {
  parserOptions: {
    ecmaVersion: 8 // ECMAScript 2017
  },
  globals: {
    _: true,
    Fliplet: true,
    Promise: true,
    Handlebars: true,
    moment: true,
    tinymce: true,
    T: true,
    TD: true,
    TN: true,
    Modernizr: true
  },
  env: {
    // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    browser: true, // browser global variables
    node: true, // Node.js global variables and Node.js-specific rules
    jquery: true, // jQuery global variables
    mocha: true, // Adds all Mocha global variables
    es2017: true // Adds all ECMAScript 2017 globals
  },
  parser: "@babel/eslint-parser",
  plugins: [
    "@stylistic/js"
  ],
  rules: {
    /**
     * Strict mode
     */
    strict: 0, // http://eslint.org/docs/rules/strict

    /**
     * Variables
     */
    "no-shadow": 0, // http://eslint.org/docs/rules/no-shadow
    "no-shadow-restricted-names": 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
    "no-unused-vars": [
      2,
      {
        // http://eslint.org/docs/rules/no-unused-vars
        vars: "local",
        args: "after-used"
      }
    ],

    /**
     * Possible errors
     */
    "comma-dangle": [2, "never"], // http://eslint.org/docs/rules/comma-dangle
    "no-cond-assign": [2, "always"], // http://eslint.org/docs/rules/no-cond-assign
    "no-console": 1, // http://eslint.org/docs/rules/no-console
    "no-debugger": 1, // http://eslint.org/docs/rules/no-debugger
    "no-alert": 1, // http://eslint.org/docs/rules/no-alert
    "no-constant-condition": 1, // http://eslint.org/docs/rules/no-constant-condition
    "no-dupe-keys": 2, // http://eslint.org/docs/rules/no-dupe-keys
    "no-duplicate-case": 2, // http://eslint.org/docs/rules/no-duplicate-case
    "no-empty": 2, // http://eslint.org/docs/rules/no-empty
    "no-empty-character-class": 2, // http://eslint.org/docs/rules/no-empty-character-class
    "no-ex-assign": 2, // http://eslint.org/docs/rules/no-ex-assign
    "no-extra-semi": 2, // http://eslint.org/docs/rules/no-extra-semi
    "no-func-assign": 2, // http://eslint.org/docs/rules/no-func-assign
    "no-inner-declarations": 2, // http://eslint.org/docs/rules/no-inner-declarations
    "no-invalid-regexp": 2, // http://eslint.org/docs/rules/no-invalid-regexp
    "no-irregular-whitespace": 2, // http://eslint.org/docs/rules/no-irregular-whitespace
    "no-negated-in-lhs": 2, // http://eslint.org/docs/rules/no-negated-in-lhs
    "no-new-require": 2, // http://eslint.org/docs/rules/no-new-require
    "no-obj-calls": 2, // http://eslint.org/docs/rules/no-obj-calls
    "no-path-concat": 2, // http://eslint.org/docs/rules/no-path-concat
    "no-regex-spaces": 2, // http://eslint.org/docs/rules/no-regex-spaces
    "no-sparse-arrays": 2, // http://eslint.org/docs/rules/no-sparse-arrays
    "no-unreachable": 2, // http://eslint.org/docs/rules/no-unreachable
    "use-isnan": 2, // http://eslint.org/docs/rules/use-isnan
    "valid-jsdoc": 2, // http://eslint.org/docs/rules/valid-jsdoc
    "valid-typeof": 2, // http://eslint.org/docs/rules/valid-typeof

    /**
     * Best practices
     */
    "consistent-return": 0, // http://eslint.org/docs/rules/consistent-return
    curly: [2, "multi-line"], // http://eslint.org/docs/rules/curly
    "default-case": 2, // http://eslint.org/docs/rules/default-case
    "dot-notation": [
      0,
      {
        // http://eslint.org/docs/rules/dot-notation
        allowKeywords: true
      }
    ],
    eqeqeq: 2, // http://eslint.org/docs/rules/eqeqeq
    "guard-for-in": 2, // http://eslint.org/docs/rules/guard-for-in
    "no-caller": 2, // http://eslint.org/docs/rules/no-caller
    "no-div-regex": 2, // http://eslint.org/docs/rules/no-div-regex
    "no-else-return": 2, // http://eslint.org/docs/rules/no-else-return
    "no-labels": 2, // http://eslint.org/docs/rules/no-labels
    "no-eq-null": 2, // http://eslint.org/docs/rules/no-eq-null
    "no-eval": 2, // http://eslint.org/docs/rules/no-eval
    "no-extend-native": 2, // http://eslint.org/docs/rules/no-extend-native
    "no-extra-bind": 2, // http://eslint.org/docs/rules/no-extra-bind
    "no-fallthrough": 2, // http://eslint.org/docs/rules/no-fallthrough
    "no-floating-decimal": 2, // http://eslint.org/docs/rules/no-floating-decimal
    "no-implied-eval": 2, // http://eslint.org/docs/rules/no-implied-eval
    "no-lone-blocks": 2, // http://eslint.org/docs/rules/no-lone-blocks
    "no-loop-func": 2, // http://eslint.org/docs/rules/no-loop-func
    "no-multi-str": 2, // http://eslint.org/docs/rules/no-multi-str
    "no-native-reassign": 2, // http://eslint.org/docs/rules/no-native-reassign
    "no-new-func": 2, // http://eslint.org/docs/rules/no-new-func
    "no-new-wrappers": 2, // http://eslint.org/docs/rules/no-new-wrappers
    "no-octal": 2, // http://eslint.org/docs/rules/no-octal
    "no-octal-escape": 2, // http://eslint.org/docs/rules/no-octal-escape
    "no-param-reassign": 0, // http://eslint.org/docs/rules/no-param-reassign
    "no-process-exit": 2, // http://eslint.org/docs/rules/no-process-exit
    "no-proto": 2, // http://eslint.org/docs/rules/no-proto
    "no-redeclare": 2, // http://eslint.org/docs/rules/no-redeclare
    "no-return-assign": 2, // http://eslint.org/docs/rules/no-return-assign
    "no-script-url": 2, // http://eslint.org/docs/rules/no-script-url
    "no-self-compare": 2, // http://eslint.org/docs/rules/no-self-compare
    "no-sequences": 2, // http://eslint.org/docs/rules/no-sequences
    "no-throw-literal": 2, // http://eslint.org/docs/rules/no-throw-literal
    "no-undef": 2, // http://eslint.org/docs/rules/no-undef
    "no-undef-init": 2, // http://eslint.org/docs/rules/no-undef-init
    "no-undefined": 0, // http://eslint.org/docs/rules/no-undefined
    "no-with": 2, // http://eslint.org/docs/rules/no-with
    "handle-callback-err": 1, // http://eslint.org/docs/rules/handle-callback-err
    radix: 2, // http://eslint.org/docs/rules/radix
    "wrap-iife": [2, "any"], // http://eslint.org/docs/rules/wrap-iife
    yoda: 2, // http://eslint.org/docs/rules/yoda,
    "no-prototype-builtins": 0, // https://eslint.org/docs/rules/no-prototype-builtins

    /**
     * Style
     */
    indent: [2, 2, {
      SwitchCase: 1,
      MemberExpression: 1
    }], // http://eslint.org/docs/rules/indent
    "brace-style": [
      2, // http://eslint.org/docs/rules/brace-style
      "1tbs",
      {
        allowSingleLine: true
      }
    ],
    quotes: [
      // http://eslint.org/docs/rules/quotes
      2,
      "single",
      "avoid-escape"
    ],
    camelcase: [
      2,
      {
        // http://eslint.org/docs/rules/camelcase
        properties: "never"
      }
    ],
    "@stylistic/js/comma-spacing": [
      2,
      {
        // https://eslint.style/rules/js/comma-spacing
        before: false,
        after: true
      }
    ],
    "comma-style": [2, "last"], // http://eslint.org/docs/rules/comma-style
    "eol-last": 2, // http://eslint.org/docs/rules/eol-last
    "func-names": 0, // http://eslint.org/docs/rules/func-names
    "key-spacing": [
      2,
      {
        // http://eslint.org/docs/rules/key-spacing
        beforeColon: false,
        afterColon: true
      }
    ],
    "new-cap": [
      0,
      {
        // http://eslint.org/docs/rules/new-cap
        newIsCap: true
      }
    ],
    "new-parens": 2, // http://eslint.org/docs/rules/new-parens
    "no-array-constructor": 2, // http://eslint.org/docs/rules/no-array-constructor
    "no-lonely-if": 1, // http://eslint.org/docs/rules/no-lonely-if
    "no-mixed-spaces-and-tabs": 1, // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-multiple-empty-lines": [
      2,
      {
        // http://eslint.org/docs/rules/no-multiple-empty-lines
        max: 2
      }
    ],
    "no-nested-ternary": 2, // http://eslint.org/docs/rules/no-nested-ternary
    "no-new-object": 2, // http://eslint.org/docs/rules/no-new-object
    "no-spaced-func": 2, // http://eslint.org/docs/rules/no-spaced-func
    "no-trailing-spaces": 2, // http://eslint.org/docs/rules/no-trailing-spaces
    "no-extra-parens": [2, "functions"], // http://eslint.org/docs/rules/no-extra-params
    "one-var": [2, "never"], // http://eslint.org/docs/rules/one-var
    "padded-blocks": [2, "never"], // http://eslint.org/docs/rules/padded-blocks
    semi: [2, "always"], // http://eslint.org/docs/rules/semi
    "semi-spacing": [
      2,
      {
        // http://eslint.org/docs/rules/semi-spacing
        before: false,
        after: true
      }
    ],
    "operator-linebreak": [2, "before"], // http://eslint.org/docs/rules/operator-linebreak
    "keyword-spacing": 2, // http://eslint.org/docs/rules/keyword-spacing
    "space-before-blocks": 2, // http://eslint.org/docs/rules/space-before-blocks
    "space-before-function-paren": [2, "never"], // http://eslint.org/docs/rules/space-before-function-paren
    "space-in-parens": [2, "never"], // http://eslint.org/docs/rules/space-in-parens
    "space-infix-ops": 2, // http://eslint.org/docs/rules/space-infix-ops
    "space-unary-ops": 2, // http://eslint.org/docs/rules/space-unary-ops
    "spaced-comment": [
      2,
      "always",
      {
        // http://eslint.org/docs/rules/spaced-comment
        exceptions: ["-", "+"],
        markers: ["=", "!"] // space here to support sprockets directives
      }
    ],

    "object-curly-spacing": ["error", "always"],

    // https://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": ["*"],
        "next": "return"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "block-like"
      },
      {
        "blankLine": "always",
        "prev": "block-like",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": ["const", "let", "var"],
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": ["block-like", "expression", "function", "import"],
        "next": ["const", "let", "var"]
      },
      {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"]
      }
    ]
  }
};
