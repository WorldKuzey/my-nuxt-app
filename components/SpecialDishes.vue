<template>
  <section class="py-[50px] relative">
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <!-- Başlık ve yön butonları -->
      <div class="flex justify-between items-start mb-10 ml-2 md:ml-4 relative">
        <div>
          <p
            class="text-[#FF6868] font-inter font-bold text-[18px] uppercase mb-4 tracking-[0.175em]"
          >
            Special Dishes
          </p>
          <h2
            class="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-inter font-bold text-black leading-[1.2]"
          >
            Standout Dishes<br />From Our Menu
          </h2>
        </div>

        <!-- Yön butonları -->
        <div class="flex gap-4 absolute right-0 top-4">
          <button
            @click="swiper?.slidePrev()"
            class="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#EFEFEF] hover:bg-[#D3D3D3] flex items-center justify-center transition group"
          >
            <img
              src="/assets/icons/SpecialDishesIcons/left-arrow.svg"
              alt="Left"
              class="w-4 h-4 sm:w-5 sm:h-5 transition group-hover:invert group-hover:brightness-0"
            />
          </button>
          <button
            @click="swiper?.slideNext()"
            class="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#F53E32] hover:bg-[#EFEFEF] flex items-center justify-center transition group"
          >
            <img
              src="/assets/icons/SpecialDishesIcons/right-arrow.svg"
              alt="Right"
              class="w-4 h-4 sm:w-5 sm:h-5 transition group-hover:invert group-hover:brightness-0"
            />
          </button>
        </div>
      </div>

      <!-- Slider -->
      <div class="flex justify-center">
        <Swiper
          :slides-per-view="'auto'"
          :space-between="24"
          grabCursor
          class="px-6 md:px-12 lg:px-20 h-[540px]"
          @swiper="onSwiper"
        >
          <SwiperSlide
            v-for="dish in dishes"
            :key="dish.id"
            class="flex justify-center px-2 sm:px-4 lg:px-6 !w-[280px] sm:!w-[320px] md:!w-[380px] lg:!w-[446px]"
          >
            <div
              class="relative h-[500px] md:h-[523px] rounded-[20px] shadow-md p-6 flex flex-col text-left hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <!-- Custom blur arka plan -->
              <div
                class="absolute inset-0 rounded-[20px] z-0 bg-[#F4F4F4]"
                style="
                  opacity: 0.08;
                  filter: blur(49px);
                  transform: translate(2px, 9px);
                "
              ></div>

              <!-- Favori ikon -->
              <div
                class="absolute top-0 right-0 bg-[#F53E32] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center z-10"
                style="
                  border-top-right-radius: 14px;
                  border-bottom-left-radius: 42.5px;
                "
              >
                <img
                  :src="dish.isFavorite ? '/favorite.svg' : '/unfavorite.svg'"
                  alt="Favorite Icon"
                  class="w-5 h-5"
                />
              </div>

              <!-- Görsel -->
              <img
                :src="dish.image"
                :alt="dish.name"
                class="z-10 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[226px] lg:h-[226px] object-cover rounded-full shadow-lg mt-8 mx-auto"
              />

              <!-- Başlık -->
              <h3
                class="z-10 mt-6 text-[18px] sm:text-[20px] font-bold text-black font-inter ml-2"
              >
                {{ dish.name }}
              </h3>

              <!-- Açıklama -->
              <p
                class="z-10 mt-2 text-[#555555] font-inter text-[16px] sm:text-[18px] md:text-[20px] font-semibold ml-2"
              >
                {{ dish.description }}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

defineProps({
  dishes: {
    type: Array,
    required: true,
  },
});

import { ref } from "vue";
const swiper = ref(null);
const onSwiper = (s) => {
  swiper.value = s;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@700;600;500&display=swap");

.font-inter {
  font-family: "Inter", sans-serif;
}
</style>
