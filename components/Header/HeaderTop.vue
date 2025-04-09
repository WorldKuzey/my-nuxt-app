<template>
  <div class="w-full border-b border-gray-200 relative">
    <div class="flex items-center h-[55px] justify-between px-4 lg:px-[12%]">
      <!-- Sol Kısım: Toggle Her Zaman Görünsün -->
      <div class="flex items-center">
        <button
          class="w-[35px] h-[35px] flex items-center justify-center"
          @click="toggleMobileMenu"
        >
          <img
            src="~/assets/icons/HeaderIcons/category-toggle.svg"
            alt="Category Toggle"
          />
        </button>
      </div>

      <!-- Orta Menü: Sadece sm ve üstü -->
      <nav class="hidden sm:flex items-center space-x-3 lg:space-x-[50px]">
        <button class="text-black text-sm font-poppins font-medium">
          Home
        </button>
        <div class="relative" v-for="(item, index) in menuItems" :key="index">
          <button
            class="text-black text-sm font-poppins font-medium flex items-center space-x-1"
          >
            <span>{{ item }}</span>
            <img
              src="~/assets/icons/HeaderIcons/chevron-down.svg"
              class="w-[8px] h-[5px]"
              alt="Chevron"
            />
          </button>
        </div>
      </nav>

      <!-- Sağ Kısım: Telefon Bilgisi -->
      <div
        class="hidden sm:flex items-center text-black text-[15px] font-segoe font-normal"
      >
        <img
          src="~/assets/icons/HeaderIcons/phone-icon.svg"
          alt="Phone Icon"
          class="w-[18px] h-[18px] mr-1"
        />
        <span>+123 ( 456 ) ( 7890 )</span>
      </div>
    </div>

    <!-- Dropdown Menü: Hamburger Tarzı, Her Boyutta -->
    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="absolute left-0 top-[55px] w-full bg-white border-t border-gray-200 z-50"
      >
        <div class="flex flex-col px-4 py-3 gap-3">
          <button class="text-black text-sm font-poppins font-medium text-left">
            Home
          </button>
          <button
            v-for="(item, index) in menuItems"
            :key="index"
            class="text-black text-sm font-poppins font-medium text-left flex items-center gap-1"
          >
            <span>{{ item }}</span>
            <img
              src="~/assets/icons/HeaderIcons/chevron-down.svg"
              class="w-[8px] h-[5px]"
              alt="Chevron"
            />
          </button>
          <div
            class="flex items-center text-black text-[15px] font-segoe font-normal mt-2"
          >
            <img
              src="~/assets/icons/HeaderIcons/phone-icon.svg"
              alt="Phone Icon"
              class="w-[18px] h-[18px] mr-1"
            />
            <span>+123 ( 456 ) ( 7890 )</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
const menuItems = ["Category", "Products", "Pages", "Blog", "Elements"];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Transition efekti */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
