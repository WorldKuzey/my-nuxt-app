<template>
  <div class="relative w-full min-h-screen overflow-hidden">
    <!-- Arka plan görseli -->
    <img
      src="@/assets/images/OrderBanner/Background.png"
      alt="Order Banner Background"
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    />

    <!-- Design Element 1 -->
    <img
      src="@/assets/images/OrderBanner/Design-Element-1.png"
      alt="Design Element 1"
      class="absolute z-5 object-contain"
      :class="[
        'w-[14vw] max-w-[203px] h-auto',
        'left-[4vw] top-[12vh]',
        'md:w-[16vw] md:left-[2vw] md:top-[7vh]',
        'sm:w-[20vw] sm:left-[2vw] sm:top-[9vh]',
      ]"
    />

    <!-- Design Element 2 -->
    <img
      src="@/assets/images/OrderBanner/Design-Element-2.png"
      alt="Design Element 2"
      class="absolute z-5 object-contain"
      :class="[
        'w-[13vw] max-w-[197px] h-auto',
        'right-[4vw] top-[70vh]',
        'md:w-[15vw] md:right-[9vw] md:top-[43vh]',
        'sm:w-[19vw] sm:right-[2vw] sm:top-[68vh]',
      ]"
    />

    <!-- Bg-Image-Here -->
    <img
      src="@/assets/images/OrderBanner/Bg-Image-Here.png"
      alt="Bg Image Here"
      class="absolute z-5 object-contain w-[90vw] max-w-[1550px] h-auto left-0 top-[-2vh]"
    />

    <!-- Heading Text -->
    <img
      src="@/assets/images/OrderBanner/Heading-Text.png"
      alt="Heading Text"
      class="absolute z-20 object-contain w-[50vw] max-w-[900px] h-auto left-[10vw] top-[10vh] md:w-[55vw] md:top-[-2vh] sm:w-[60vw] sm:top-[6vh]"
    />

    <!-- Glow -->
    <img
      src="@/assets/images/OrderBanner/Glow.png"
      alt="Glow"
      class="absolute top-0 left-0 w-full h-full object-cover z-10"
    />

    <!-- İçerik alanı -->
    <div
      class="relative z-40 px-6 md:px-10 pt-[75vh] max-w-[1440px] mx-auto flex justify-center"
    >
      <!-- Özel Buton -->
      <button
        class="flex items-center ml-[-300px] rounded-full overflow-hidden shadow-md"
        style="height: 60px; width: 250px"
      >
        <!-- Sol ikon -->
        <div
          class="flex items-center justify-center h-full w-[60px] bg-[#756247]"
        >
          <img
            src="@/assets/images/OrderBanner/right-arrow.png"
            alt="Right Arrow"
            class="h-6 w-6 object-contain"
          />
        </div>

        <!-- Yazı -->
        <div
          class="flex-1 h-full flex items-center justify-center bg-[#dac98c]"
        >
          <span class="text-[#78664b] text-[28px] font-bold">Order Now</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
// Gerekli bir setup scripti yok
</script>

<style scoped>
html,
body {
  overflow-x: hidden;
}
</style>
