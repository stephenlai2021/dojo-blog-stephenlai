export default {
  target: 'static',

  head: {
    title: 'dojo_blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~assets/global.css'],

  plugins: [],

  components: true,
  
  buildModules: ['@nuxtjs/composition-api/module'],

  modules: ['@nuxtjs/pwa'],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
