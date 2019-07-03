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
    "plugin:nuxt/recommended",
    "plugin:vue/essential"
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
