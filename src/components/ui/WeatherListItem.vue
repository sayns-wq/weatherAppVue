<script setup lang="ts">
import { FarengateToCel } from '@/utils/FarengateToCel';
import IconSunny from '../icons/IconSunny.vue';
import { DDMMDateFormat } from '@/utils/DDMMDateFormat';
defineProps<{
  temp: number,
  day: Date
}>()

</script>

<template>
  <div class="dateWeatherItem">
    <div class="dateWeatherItem-day">{{DDMMDateFormat(day)}}</div>
    <IconSunny size="64"/>
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
