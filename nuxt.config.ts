import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    'vuetify/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(vuetify())
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
