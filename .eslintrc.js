module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    'no-console': 'off',
    'curly': [2, 'all'],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      }
    }]
  }
}
