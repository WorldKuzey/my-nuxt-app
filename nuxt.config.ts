// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // static site generation için yeterli
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  vite: {
    server: {
      fs: {
        allow: ["..", "./node_modules/swiper"], // Swiper erişimine izin ver
      },
    },
  },

  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],

  app: {
    baseURL: "/my-nuxt-app/", // 👉 örnek: '/my-nuxt-app/' veya '/' eğer ana sayfa ise
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
        },
      ],
    },
  },
});
