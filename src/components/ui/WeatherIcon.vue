<script setup lang="ts">

import type { Component } from 'vue';
import IconSunny from '../icons/IconSunny.vue';
import IconRainy from '../icons/IconRainy.vue';
import IconCloudy from '../icons/IconCloudy.vue';
import IconSnowy from '../icons/IconSnowy.vue';
import IconRainThunder from '../icons/IconRainThunder.vue';
import { WeatherVariants } from '@/types/weather';

defineProps<{
  weather?: WeatherVariants,
}>()
const weatherVariats: Record<WeatherVariants, Component> = {
  [WeatherVariants.snow]: IconSnowy,
  [WeatherVariants.rain]: IconRainy,
  [WeatherVariants.fog]: IconCloudy,
  [WeatherVariants.wind]: IconSunny,
  [WeatherVariants.cloudy]: IconRainThunder,
  [WeatherVariants.partly_cloudy_day]: IconCloudy,
  [WeatherVariants.partly_cloudy_night]: IconCloudy,
  [WeatherVariants.clear_day]: IconSunny,
  [WeatherVariants.clear_night]: IconSunny,
}
</script>

<template>
  <component v-if="weather" :is="weatherVariats[weather]" size="64"/>
</template>

<style scoped>
</style>
