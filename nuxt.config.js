export default {

  /*
   ** Headers of the page
   */
  head: {
    title: 'Puchy',
    titleTemplate: '%s - Home',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'hola',
      },
    ],

    script: [{
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-173964694-1',
      async: true
    }],

    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
      },

    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: 'black',height: '3px'},
  //loading: '~/components/loading.vue',
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~plugins/ga.js',
    mode: 'client'
  },
  {
    src: '~plugins/plugin.js',
  }
],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['bootstrap-vue/nuxt', {
      icons: true,
    }],
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};