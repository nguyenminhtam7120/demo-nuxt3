// https://nuxt.com/docs/api/configuration/nuxt-config

import webpack from 'webpack';

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

    builder: "webpack",
    webpack: {
        plugins: [
            new webpack.ProvidePlugin({
                // global modules
                _: "lodash",
                moment: "moment"
            })
        ],
        extractCSS: true,
        optimization: {
            splitChunks: {
                chunks: 'all',
                automaticNameDelimiter: '.',
                name: 'ChunkFile',
                maxSize: 500 * 1024
            }
        },
    },

    // build
    build: {
        transpile: [],
    },

    // modules
    modules: [
        '@pinia/nuxt',
    ],

})
