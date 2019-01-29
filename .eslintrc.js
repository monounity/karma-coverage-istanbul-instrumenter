module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {

        "complexity": ["error", 10],

        // syntax
        "curly": ["error"],
        "dot-notation": ["error"],
        "eqeqeq": ["error"],
        "no-alert": ["error"],
        "no-cond-assign": ["error", "always"],
        "no-var": ["error"],
        "no-whitespace-before-property": "error",
        "no-unused-expressions": ["error"],

        // style
        "arrow-spacing": "error",
        "brace-style": ["error", "stroustrup"],
        "comma-spacing": ["error"],
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "key-spacing": ["error"],
        "keyword-spacing": ["error", { "overrides": { "if": { "after": false }, "for": { "after": false }, "while": { "after": false }}}],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
        "no-multi-spaces": ["error"],
        "no-trailing-spaces": ["error"],
        "object-curly-spacing": ["error", "always"],
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "semi": ["error", "always"],
        "semi-spacing": ["error"],
        "space-before-blocks": "error",
        "space-infix-ops": "error",
        "space-in-parens": ["error", "never"]
    },
    "globals": {
        "describe": true,
        "fdescribe": true,
        "expect": true,
        "it": true,
        "fit": true,
        "jasmine": true
    }
}
