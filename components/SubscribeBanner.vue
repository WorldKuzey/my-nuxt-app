<template>
  <div class="w-full flex justify-center items-center py-10 px-4">
    <div
      class="relative w-full max-w-[1609px] min-h-[400px] bg-[#0F0F0F] rounded-[20px] flex flex-col lg:flex-row items-center justify-between overflow-hidden px-6 sm:px-10 md:px-14 lg:px-16 gap-8"
    >
      <!-- Glow Efekti -->
      <img
        src="/assets/images/SubscribeBanner/glow.png"
        alt="Glow"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />

      <!-- Sol Yazı + Form Alanı -->
      <div class="w-full max-w-[600px] z-10 text-center lg:text-left">
        <h2
          class="font-quicksand text-white text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-snug"
        >
          Stay home & get your daily <br class="hidden sm:block" />
          needs from our shop
        </h2>
        <p class="font-lato text-[#B1AC9C] text-[16px] sm:text-[18px] mt-4">
          Start You'r Daily Shopping with
          <span class="text-[#3cbc7c] font-semibold">Nest Mart</span>
        </p>

        <!-- Form Alanı -->
        <div
          class="relative flex items-center bg-white rounded-full w-full max-w-[460px] h-[55px] sm:h-[65px] mt-6 mx-auto lg:mx-0"
        >
          <!-- Sol İkon + Input -->
          <div class="flex items-center pl-5 w-full pr-[110px]">
            <img
              src="/assets/images/paper-plane.png"
              alt="Paper Plane"
              class="w-4 h-4 mr-3"
            />

            <input
              type="email"
              placeholder="Your email address"
              class="outline-none w-full text-sm text-gray-600 placeholder:text-gray-400"
            />
          </div>

          <!-- Buton -->
          <button
            class="absolute w-[120px] sm:w-[140px] md:w-[150px] right-[10px] sm:right-[20px] bg-[#f86e54] hover:bg-[#e13328] text-white text-sm font-semibold h-[40px] sm:h-[48px] md:h-full rounded-full"
          >
            Subscribe
          </button>
        </div>
      </div>

      <!-- Sağ Görsel -->
      <div
        class="z-10 w-full max-w-[400px] lg:max-w-[634px] flex justify-center lg:justify-end"
      >
        <img
          src="/assets/images/SubscribeBanner/subscribeBanner.png"
          alt="Subscribe Banner"
          class="w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");

.font-quicksand {
  font-family: "Quicksand", sans-serif;
}
.font-lato {
  font-family: "Lato", sans-serif;
}
</style>
