<script setup lang="ts">
import type { WeatherVariants } from '@/types/weather';
import { useWeather, useWeatherIcon } from '@/composables/queries/useWeather';
import { computed } from 'vue';
import WeatherIcon from '../ui/WeatherIcon.vue';

const props = defineProps<{
  location: string,
}>()
  const { data: dataDay } = useWeather(() => props.location);
  const { data: dataIcon } = useWeatherIcon(() =>  props.location);

const weatherIconType = computed<WeatherVariants | undefined>(() => {
  if (!dataIcon.value) return undefined;
  return dataIcon.value as WeatherVariants;
});

</script>

<template>
    <div class="mainHead">Погода в вашем городе</div>
      <div class="secondaryHead">Текущее место</div>
      <div class="weatherHeadBlock">
        <div class="weatherBlock">
          <div class="weatherIcon">
            <WeatherIcon :weather="weatherIconType"/>
          </div>
          <div class="temperature">
            {{dataDay}} °C
          </div>
        </div>

      </div>
</template>

<style scoped>
.mainHead{
  color: #fff;
  font-size: larger;
  font-weight: 600;
}
.secondaryHead{
  color: #ffffff96;
  font-size:  medium;
  font-weight: 400;
}
.weatherBlock{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.weatherHeadBlock{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
}
</style>
