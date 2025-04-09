<template>
  <section class="py-12">
    <!-- Sınırlayıcı container -->
    <div class="max-w-[1440px] mt-[100px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Başlıklar -->
      <div class="text-center mb-10">
        <h4
          class="text-[#F53E32] font-bold text-[18px] sm:text-[20px] font-['Inter'] tracking-[3.5px]"
        >
          CUSTOMER FAVORITES
        </h4>
        <h2
          class="text-black font-bold text-[32px] sm:text-[48px] md:text-[60px] font-['Inter'] mt-2"
        >
          Popular Categories
        </h2>
      </div>

      <!-- Kartlar -->
      <div
        class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-16 place-items-center"
      >
        <div
          v-for="category in categories"
          :key="category.id"
          class="relative flex items-center justify-center"
        >
          <!-- Dış gradyan ve drop shadow -->
          <div
            class="absolute w-[90vw] sm:w-[320px] md:w-[310px] lg:w-[310px] h-[90vw] sm:h-[320px] md:h-[310px] lg:h-[310px] rounded-[20px] z-0 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-[radial-gradient(circle,_rgba(248,248,248,0.1)_0%,_transparent_70%)]"
          ></div>

          <!-- Kart -->
          <div
            class="relative z-10 w-[90vw] sm:w-[263px] md:w-[263px] h-[90vw] sm:h-[263px] md:h-[263px] rounded-2xl flex flex-col items-center justify-center text-center p-4 border border-[rgba(246,246,246,0.5)] shadow-[0_4px_30px_rgba(0,0,0,0.05)] bg-white/30 backdrop-blur-[30px] bg-[linear-gradient(135deg,_rgba(246,246,246,0.1),_rgba(246,246,246,0.1))]"
          >
            <!-- Daire içinde görsel -->
            <div
              class="w-[100px] sm:w-[117px] h-[100px] sm:h-[117px] rounded-full bg-[#f5f2e5] flex items-center justify-center relative overflow-hidden mb-4"
            >
              <!-- Gradyan alt gölge -->
              <div
                class="absolute bottom-0 left-0 w-full h-[30%] z-0 bg-[linear-gradient(to_top,_rgba(157,156,148,0.17),_transparent)]"
              />
              <!-- Görsel -->
              <img
                :src="category.image"
                :alt="category.name"
                class="relative z-10 object-contain"
                :class="category.imageClass"
              />
            </div>

            <!-- Kategori İsmi -->
            <h3
              class="font-semibold text-[18px] sm:text-[24px] md:text-[26px] text-black font-['Inter']"
            >
              {{ category.name }}
            </h3>
            <p
              class="text-[14px] sm:text-[18px] md:text-[20px] font-medium text-gray-500 font-['Inter']"
            >
              ({{ category.itemCount }} items)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
});
</script>
