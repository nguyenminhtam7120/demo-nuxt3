// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    // server side rendering mode
    ssr: true,

    // experimental features
    experimental: {
        reactivityTransform: false,
    },

    // auto import components
    components: true,

    // css
    css: ['~/assets/styles/main.scss'],

    // plugins
    plugins: [],

    // build
    build: {
        transpile: [],
    },

    // modules
    modules: [
        '@pinia/nuxt',
    ],

})
