const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description},
            { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel:'stylesheet',type:'text/css',href:"//cdn.bootcss.com/normalize/8.0.0/normalize.min.css"}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/element-ui'
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        vendor: ['external_library'],
        extend(config, ctx) {

        }
    },

    proxy: [
        ['/api', {target: 'http://yysblog.com'}]
    ],
    babel: {  //为 JS 和 Vue 文件设定自定义的 babel 配置。
        presets: ['es2015', 'stage-0']
    },
    cssSourceMap:true,
}
