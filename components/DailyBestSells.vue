<template>
  <section class="py-10">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Başlık -->
      <h2
        class="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#253D4E] font-quicksand mb-4"
      >
        {{ title }}
      </h2>

      <!-- Filtre Butonları -->
      <div class="flex justify-end mb-6">
        <div
          class="flex gap-6 font-quicksand font-semibold text-[14px] sm:text-[16px]"
        >
          <button class="text-[#3BB77E]">Featured</button>
          <button class="text-[#253D4E]">Popular</button>
          <button class="text-[#253D4E]">New Added</button>
        </div>
      </div>

      <!-- Banner ve Kartlar -->
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Banner -->
        <div
          class="relative w-full lg:max-w-[360px] aspect-[9/13] rounded-2xl overflow-hidden"
        >
          <img
            :src="bannerImage"
            alt="Daily Best Sells Banner"
            class="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div class="absolute inset-0 bg-[#E5DC89]/25 z-10"></div>
          <div
            class="absolute left-6 sm:left-10 top-10 sm:top-16 z-20 text-white font-quicksand leading-tight"
          >
            <div class="text-[28px] sm:text-[32px] lg:text-[40px]">
              Bring nature<br />
              into your<br />
              home
            </div>
          </div>
          <div class="absolute left-6 sm:left-10 bottom-20 z-20">
            <button
              class="flex items-center bg-[#F53E32] w-[103px] h-[32px] rounded-[4px] px-3 text-white text-[12px] font-quicksand font-bold"
            >
              Shop Now
              <img
                src="/assets/icons/DailyBestSellsIcons/vector2.svg"
                alt="Arrow Icon"
                class="ml-2 w-[7px] h-[6px]"
              />
            </button>
          </div>
        </div>

        <!-- Kartlar -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 w-full"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="relative w-full min-h-[480px] sm:min-h-[500px] bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
          >
            <!-- Sol Yön Tuşu -->
            <button
              v-if="index === 0"
              class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F2F3F4] flex items-center justify-center"
            >
              <img
                src="/assets/icons/DailyBestSellsIcons/gray-left-arrow.svg"
                alt="Left Arrow"
                class="w-[13px] h-[11px]"
              />
            </button>

            <!-- Sağ Yön Tuşu -->
            <button
              v-if="index === items.length - 1"
              class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F2F3F4] flex items-center justify-center"
            >
              <img
                src="/assets/icons/DailyBestSellsIcons/gray-right-arrow.svg"
                alt="Right Arrow"
                class="w-[13px] h-[11px]"
              />
            </button>

            <!-- Etiket -->
            <div
              class="absolute top-0 left-0 text-white text-[12px] font-lato font-normal px-3 py-1"
              :style="{
                backgroundColor: item.labelBg,
                borderTopLeftRadius: '15px',
                borderBottomRightRadius: '20px',
              }"
            >
              {{ item.label }}
            </div>

            <!-- Ürün Görseli -->
            <div class="flex justify-center mt-6">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-[180px] sm:w-[200px] md:w-[226px] h-auto object-contain"
              />
            </div>

            <!-- İçerik -->
            <div>
              <p class="text-[12px] font-lato text-[#ADADAD]">
                {{ item.brand }}
              </p>
              <h3
                class="text-[16px] font-bold font-quicksand text-[#253D4E] mt-1"
              >
                {{ item.title }}
              </h3>
              <p class="text-[14px] text-[#6F6E6E] font-lato mt-1">⭐</p>

              <!-- Fiyat -->
              <div class="flex items-center gap-2 mt-2">
                <span
                  class="text-[18px] font-bold font-quicksand text-[#3BB77E]"
                >
                  ${{ item.price }}
                </span>
                <span
                  class="text-[14px] font-bold font-quicksand text-[#ADADAD] line-through"
                >
                  ${{ item.oldPrice }}
                </span>
              </div>

              <!-- Satış miktarı -->
              <p class="text-[13px] font-lato text-[#253D4E] mt-1">
                Sold: {{ item.sold }}
              </p>

              <!-- Progress bar -->
              <div class="w-full bg-[#E9ECEF] rounded-full h-[5px] mt-2">
                <div
                  class="bg-[#F53E32] h-[5px] rounded-full"
                  :style="{ width: getSoldPercentage(item.sold) + '%' }"
                ></div>
              </div>

              <!-- Sepete Ekle -->
              <button
                class="w-full h-[47px] mt-4 bg-[#F53E32] text-white text-[14px] font-bold font-quicksand rounded-md flex items-center justify-center gap-2"
              >
                <img
                  src="/assets/icons/white-cart.svg"
                  alt="Cart Icon"
                  class="w-[14px] h-[14px]"
                />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bannerImage from "/images/DailyBestSells/DailyBestSellsBanner.png";

defineProps({
  title: String,
  items: Array,
});

function getSoldPercentage(sold) {
  const [current, total] = sold.split("/").map(Number);
  return Math.min(Math.round((current / total) * 100), 100);
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap");

.font-quicksand {
  font-family: "Quicksand", sans-serif;
}

.font-lato {
  font-family: "Lato", sans-serif;
}
</style>
