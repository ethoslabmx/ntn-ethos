export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ethos Innovación en Políticas Públicas',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Somos un think tank que genera recomendaciones innovadoras y acciones concretas de política pública con el objeto de atender algunos de los principales retos para el desarrollo de México.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css','node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/youtube.client.js',{src:'~/plugins/pdfviewer.client.js',ssr: false, mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  target: 'static',


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    'vue-social-sharing/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    // Options
  },

  router: {
    middleware: ['menu-class','adjustScroll']
  },
  generate: { fallback: '404.html' },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: true,
    download: true,
    overwriting: false,
    families: {
      Roboto: true,
      Lato: true,
      Saira: true,
      'Saira Condensed': true,
    }
  },
  googleAnalytics: {
    id: 'UA-79280404-1'
  }
}
