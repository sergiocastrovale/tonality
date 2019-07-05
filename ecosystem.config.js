module.exports = {
  apps : [{
      name      : 'tonality',
      exec_mode : 'cluster',
      instances : 'max',
      script    : './node_modules/nuxt/bin/nuxt.js'
  }]
};