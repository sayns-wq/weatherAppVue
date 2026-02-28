<script setup lang="ts">
import { FarengateToCel } from '@/utils/FarengateToCel';
import { DDMMDateFormat } from '@/utils/DDMMDateFormat';
import WeatherIcon from './WeatherIcon.vue';
import type { WeatherVariants } from '@/types/weather';
defineProps<{
  temp: number,
  day: Date,
  icon: WeatherVariants
}>()

</script>

<template>
  <div class="dateWeatherItem">
    <div class="dateWeatherItem-day">{{DDMMDateFormat(day)}}</div>
    <WeatherIcon :weather="icon"/>
    <div class="dateWeatherItem-weather">{{FarengateToCel(temp)}} °C</div>
  </div>
</template>

<style scoped>
.dateWeatherItem{
  background-color: #ffffff4b;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
}
</style>
