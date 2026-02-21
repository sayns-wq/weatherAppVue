<script setup lang="ts">
import IconSunny from '../icons/IconSunny.vue';


</script>

<template>
  <div class="dateWeatherItem">
    <div class="dateWeatherItem-day">San</div>
    <IconSunny size="64"/>
    <div class="dateWeatherItem-weather">14 C</div>
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
