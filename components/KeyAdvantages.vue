<template>
  <div class="w-full py-10 px-4 flex justify-center">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-[1600px] w-full justify-items-center"
    >
      <div
        v-for="(item, index) in advantages"
        :key="index"
        class="w-full max-w-[311px] h-auto min-h-[107px] bg-[#F4F6FA] rounded-[12px] flex items-center gap-4 px-4 py-3"
      >
        <!-- Sol Görsel -->
        <img
          :src="item.icon"
          :alt="item.title"
          class="w-[50px] h-[50px] object-contain sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px]"
        />

        <!-- Yazı Alanı -->
        <div class="flex flex-col justify-center">
          <h3
            class="font-quicksand font-semibold text-[16px] sm:text-[17px] md:text-[18px] text-[#242424] leading-tight"
          >
            {{ item.title }}
          </h3>
          <p
            class="font-lato font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#ADADAD] mt-1 leading-snug"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const advantages = [
  {
    icon: "/images/KeyAdvantages/icon-1.png",
    title: "Best prices & offers",
    description: "Orders $50 or more",
  },
  {
    icon: "/images/KeyAdvantages/icon-2.png",
    title: "Free delivery",
    description: "24/7 amazing services",
  },
  {
    icon: "/images/KeyAdvantages/icon-3.png",
    title: "Great daily deal",
    description: "When you sign up",
  },
  {
    icon: "/images/KeyAdvantages/icon-4.png",
    title: "Wide assortment",
    description: "Mega Discounts",
  },
  {
    icon: "/images/KeyAdvantages/icon-5.png",
    title: "Easy returns",
    description: "Within 30 days",
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap");

.font-quicksand {
  font-family: "Quicksand", sans-serif;
}

.font-lato {
  font-family: "Lato", sans-serif;
}
</style>
