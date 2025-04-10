<template>
  <div>
    <HeaderTop />
    <HeaderBottom />

    <NuxtPage />

    <Footer />
  </div>
</template>

<script setup>
import HeaderTop from "~/components/Header/HeaderTop.vue";
import HeaderBottom from "~/components/Header/HeaderBottom.vue";

import Footer from "~/components/Footer.vue";
</script>
