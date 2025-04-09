<template>
  <div class="bg-white">
    <OrderBanner />
    <PopularCategories :categories="popularCategories" />
    <DailyBestSells
      title="Daily Best Sells"
      banner="/assets/images/DailyBestSellsBanner.png"
      :items="dailyBestSells"
    />
    <SpecialDishes :dishes="specialDishes" />
    <DealsOfTheDay :deals="dealsData" />
    <WhyChooseUs />
    <SubscribeBanner />
    <KeyAdvantages />
  </div>
</template>

<script setup>
import OrderBanner from "~/components/OrderBanner.vue";
import PopularCategories from "~/components/PopularCategories.vue";
import DailyBestSells from "~/components/DailyBestSells.vue";
import SpecialDishes from "~/components/SpecialDishes.vue";
import DealsOfTheDay from "~/components/DealsOfTheDay.vue";
import WhyChooseUs from "~/components/WhyChooseUs.vue";
import SubscribeBanner from "@/components/SubscribeBanner.vue";
import KeyAdvantages from "@/components/KeyAdvantages.vue";

import dealsData from "~/data/dealsOfTheDay.js";
import specialDishes from "@/data/specialDishes.js";
import popularCategories from "~/data/popularCategories.js";
import { dailyBestSells } from "~/data/dailyBestSells.js";
</script>
