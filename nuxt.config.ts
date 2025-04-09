// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      fs: {
        allow: ["..", "./node_modules/swiper"], // Swiper erişimine izin ver
      },
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
        },
      ],
    },
  },

  //css: ["@/assets/css/tailwind.css"],
});
