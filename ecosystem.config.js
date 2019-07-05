module.exports = {
  apps : [{
      name      : 'tonality',
      exec_mode : 'cluster',
      instances : 'max',
      script    : './node_modules/nuxt/bin/nuxt.js',
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
  }]
};