// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  sourcemap: {
    client: false,
    server: false,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'esnext',
      },
    },
    nodeTsConfig: {
      compilerOptions: {
        module: 'esnext',
      },
    },
  },
  modules: ['@nuxt/icon'],
  runtimeConfig: {
    gmailUser: process.env.GMAIL_USER || '',
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD || '',
  },
  css: [
    'devicon/devicon.min.css',
    '~/assets/css/variables.css',
    '~/assets/css/main.css',
    '~/assets/css/responsive.css',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Gunawan Dzakwan Sholeh — Fullstack Developer',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@600;700;800&display=swap',
        },
      ],
    },
  },
})
