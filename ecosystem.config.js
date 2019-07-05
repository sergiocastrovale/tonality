module.exports = {
  apps : [{
      name      : 'tonality',
      exec_mode : 'cluster',
      instances : 'max',
      script    : './node_modules/nuxt/bin/nuxt.js',
      env: {
        "HOST": "0.0.0.0",
        "PORT": 80,
        "NODE_ENV": "production",
    }
  }]
};