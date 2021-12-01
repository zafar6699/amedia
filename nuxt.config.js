export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    ssr: true,
    target: 'server',
    head: {
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=Inter:wght@500&display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
                integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p',
                crossorigin: 'anonymous',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/styles/style.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/slick.js', ssr: false },
        { src: '@/plugins/vuelidate.js', ssr: false },
        { src: '@/plugins/v-mask.js', ssr: false },
        { src: '@/plugins/loading.js', ssr: false },
        { src: '@/plugins/axios.js', ssr: false },
        { src: '@/plugins/clickOut.js', ssr: false },
        { src: '@/plugins/pagination.js', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/i18n',
        '@nuxt/image',
        '@nuxtjs/style-resources',
        '@nuxtjs/auth-next',
    ],
    auth: {
        redirect: {
            login: '/',
            logout: '/',
            callback: '/',
            home: '/',
        },
        strategies: {
            local: {
                user: {
                    property: 'data',
                    autoFetch: true,
                },
                endpoints: {
                    login: { url: '/auth/test/login', method: 'post' },
                    user: { url: '/auth/test/me', method: 'get' },
                    logout: false,
                },
            },
        },
    },
    buildModules: ['@nuxtjs/fontawesome'],
    fontawesome: {
        component: 'fa',
        icons: {
            solid: true,
            brands: true,
        },
    },
    styleResources: {
        scss: ['@/assets/styles/style.scss'],
    },
    i18n: {
        locales: [{
                code: 'uz',
                file: 'uz.js',
            },
            {
                code: 'ru',
                file: 'ru.js',
            },
        ],
        lazy: true,
        langDir: 'lang/',
        strategy: 'prefix_except_default',
        defaultLocale: 'uz',
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'https://cdn.amediatv.uz/api/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}