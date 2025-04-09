<template>
  <section class="py-10 lg:py-20 relative">
    <div class="container mx-auto px-4">
      <!-- Başlık ve All Deals -->
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4"
      >
        <h2
          class="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#253D4E] font-quicksand"
        >
          Deals Of The Day
        </h2>
        <div
          class="flex items-center gap-1 cursor-pointer hover:underline text-[13px] sm:text-[14px] md:text-[16px] text-[#7E7E7E] font-lato"
        >
          <span>All Deals</span>
          <img
            src="/assets/icons/DealsoftheDay/right-vector.svg"
            alt="Right Arrow"
            class="w-[6px] h-[12px]"
          />
        </div>
      </div>

      <!-- Kartlar -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-items-center"
      >
        <div
          v-for="deal in deals"
          :key="deal.id"
          class="relative w-full max-w-[378px] h-[335px] rounded-[12px] transition-transform hover:scale-[1.015] duration-300"
        >
          <!-- Ürün Görseli -->
          <img
            :src="deal.image"
            :alt="deal.name"
            class="w-full h-full object-cover rounded-[12px]"
          />

          <!-- Üstteki Kart -->
          <div
            class="absolute top-[72%] left-1/2 -translate-x-1/2 w-[90%] max-w-[325px] h-[192px] bg-white rounded-[12px] shadow-md p-4 flex flex-col justify-between z-10"
          >
            <!-- Ürün Adı -->
            <h3
              class="text-[#253D4E] text-[14px] sm:text-[15px] md:text-[16px] font-bold font-quicksand leading-snug"
            >
              {{ deal.name }}
            </h3>

            <!-- Brand -->
            <p
              class="text-[12px] sm:text-[13px] md:text-[14px] font-lato text-[#B6B6B6]"
            >
              By <span class="text-[#3BB77E] font-lato">{{ deal.brand }}</span>
            </p>

            <!-- Rating -->
            <p
              class="text-[12px] sm:text-[13px] md:text-[14px] text-[#6F6E6E] font-lato"
            >
              ⭐ {{ deal.rating.toFixed(1) }}
            </p>

            <!-- Fiyatlar ve Buton -->
            <div class="flex justify-between items-center mt-2">
              <div class="flex gap-2 items-center">
                <span
                  class="text-[#3BB77E] text-[15px] sm:text-[16px] md:text-[18px] font-bold font-quicksand"
                >
                  ${{ deal.price }}
                </span>
                <span
                  class="line-through text-[#ADADAD] text-[12px] sm:text-[13px] md:text-[14px] font-bold font-quicksand"
                >
                  ${{ deal.oldPrice }}
                </span>
              </div>

              <button
                class="w-[72px] sm:w-[80px] md:w-[85px] h-[32px] sm:h-[34px] md:h-[36px] bg-[#F53E32] rounded-[4px] flex items-center justify-center gap-1 px-2"
              >
                <img
                  src="/assets/icons/white-cart.svg"
                  alt="Cart"
                  class="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px]"
                />
                <span
                  class="text-white text-[13px] sm:text-[14px] font-bold font-lato"
                >
                  Add
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  deals: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Quicksand:wght@700&display=swap");

.font-quicksand {
  font-family: "Quicksand", sans-serif;
}
.font-lato {
  font-family: "Lato", sans-serif;
}
</style>
