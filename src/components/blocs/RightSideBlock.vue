<script setup lang="ts">
import {  useWeatherWeak } from '@/composables/queries/useWeather';
import WeatherListItem from '../ui/WeatherListItem.vue';

const props = defineProps<{
  location: string,
}>()
  const { data: dataWeek } = useWeatherWeak(() => props.location);


const headerDate = new Date();

const formattedDate = headerDate.toLocaleDateString('ru-RU', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});


const subHeaderFormattedDate = headerDate.toLocaleDateString('ru-RU', {
  year: 'numeric',
  month: 'long',
});

</script>

<template>
    <div class="dateHead">
        <div class="mainHead">{{subHeaderFormattedDate}}</div>
      <div class="secondaryHead">{{formattedDate}}</div>
      <div class="dateWeatherBlock">
          <WeatherListItem 
          v-for="dataOneDay in dataWeek" 
          :key="dataOneDay.temp" 
          :temp="dataOneDay.temp" 
          :icon="dataOneDay.icon" 
          :day="dataOneDay.datetime"/>
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
.dateWeatherBlock{
  display: flex;
  gap: 15px;
  padding: 10px 0;
}
</style>
