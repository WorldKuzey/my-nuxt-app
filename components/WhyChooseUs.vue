<template>
  <section class="w-full flex justify-center py-10 sm:py-16 lg:py-[200px]">
    <div
      class="max-w-[1280px] w-full px-4 flex flex-col lg:flex-row items-center lg:items-start gap-10"
    >
      <!-- Sol Görsel -->
      <div class="w-full lg:w-auto flex justify-center">
        <img
          src="/images/WhyPeopleChooseUs/WhyPeopleChooseUs.jpg"
          alt="Why People Choose Us"
          class="w-[578px] max-w-[578px] h-auto lg:h-[526px] rounded-[20px] object-cover"
        />
      </div>

      <!-- Sağ Kartlar -->
      <div class="mt-10 lg:mt-[70px] w-full">
        <h2
          class="text-[32px] sm:text-[40px] lg:text-[50px] font-nunito font-bold text-[#2D2D2D] mt-[-80px] sm:mb-10 text-center lg:text-left"
        >
          Why People Choose us?
        </h2>

        <div class="flex flex-col gap-6 items-center pylg:items-start">
          <div
            v-for="item in items"
            :key="item.id"
            class="w-full sm:w-[90%] md:w-[80%] lg:w-[635px] h-auto bg-white rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.075)] px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <!-- İkon Alanı -->
            <div class="relative w-[90px] h-[90px] shrink-0">
              <!-- Gradyan ve Blur Arka Plan -->
              <div
                class="absolute w-[90px] h-[90px] rounded-full bg-[#00000013] blur-[4px] z-0"
              ></div>

              <!-- Beyaz Daire ve İkon -->
              <div
                class="relative w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center z-10"
              >
                <img
                  :src="item.icon"
                  :alt="item.title"
                  class="w-[40px] h-[40px]"
                />
              </div>
            </div>

            <!-- Yazı Alanı -->
            <div class="text-center sm:text-left">
              <h3
                class="font-nunito font-semibold text-[22px] sm:text-[26px] md:text-[28px] lg:text-[31px] text-[#000000] leading-snug"
              >
                {{ item.title }}
              </h3>
              <p
                class="font-nunito font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#404040] leading-snug mt-1"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    id: 1,
    icon: "/images/WhyPeopleChooseUs/motor.png",
    title: "Convenient and Reliable",
    description:
      "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
  },
  {
    id: 2,
    icon: "/images/WhyPeopleChooseUs/menu.png",
    title: "Variety of Options",
    description:
      "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
  },
  {
    id: 3,
    icon: "/images/WhyPeopleChooseUs/hamburger.png",
    title: "Eat Burger",
    description:
      "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.",
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700&display=swap");

.font-nunito {
  font-family: "Nunito", sans-serif;
}
</style>
