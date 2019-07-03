
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/css/tailwind.css'
  ],
  plugins: [
  ],
  modules: [
    'nuxt-purgecss',
  ],
  purgeCSS: {

  },
  webfontloader: {
    google: {
      families: ['Lato:400,700']
    }
  },
  build: {
    extractCSS: true,
    babel: {
      plugins: [
      ]
    },
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false
        }
      }
    },
    extend(config, ctx) {
      // // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
