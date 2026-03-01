<script setup lang="ts">
import { useWeather, useWeatherIcon, useWeatherWeak } from '@/composables/queries/useWeather';
import WeatherListItem from '../ui/WeatherListItem.vue';
import { computed, onMounted, ref } from 'vue';
import WeatherIcon from '../ui/WeatherIcon.vue';
import { WeatherVariants } from '@/types/weather';

const location = ref<string>('')
const geoError = ref<string | null>(null);
onMounted(() => {
  if (!navigator.geolocation) {
    geoError.value = 'Геолокация не поддерживается браузером';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      location.value = `${position.coords.latitude},${position.coords.longitude}`;
    },
    (error) => {
      geoError.value = error.message;
    },
    { enableHighAccuracy: true, timeout: 5000 }
  );
});
  const { data: dataDay } = useWeather(() => location.value);
  const { data: dataIcon } = useWeatherIcon(() => location.value);
  const { data: dataWeek } = useWeatherWeak(() => location.value);

const weatherIconType = computed<WeatherVariants | undefined>(() => {
  if (!dataIcon.value) return undefined;
  return dataIcon.value as WeatherVariants;
});

const headerDate = new Date();

const formattedDate = headerDate.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const subHeaderDate = new Date();

const subHeaderFormattedDate = subHeaderDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
});

</script>

<template>
  <div class="wrapper">

      <div class="leftSide">
        <div class="headingBlock">
          <div class="mainHead">Moscow Weather</div>
          <div class="secondaryHead">Russia Moscow</div>
          <div class="weatherHeadBlock">
            <div class="weatherBlock">
              <div class="weatherIcon">
                <WeatherIcon :weather="weatherIconType"/>
              </div>
              <div class="temperature">
                {{dataDay}} °C
              </div>
            </div>
            <div class="weatherdescription">
              {{weatherIconType}}
            </div>
          </div>
        </div>
      </div>
      <div class="rightSide">
        <div class="dateHead">
            <div class="mainHead">{{subHeaderFormattedDate}}</div>
          <div class="secondaryHead">{{formattedDate}}</div>
          <div class="dateWeatherBlock">
              <WeatherListItem  
              v-for="dataOneDay in dataWeek" 
              :key="dataOneDay" 
              :temp="dataOneDay.temp" 
              :icon="dataOneDay.icon" 
              :day="dataOneDay.datetime"/>
          </div>
        </div>
      </div>
  </div>

</template>

<style scoped>
.wrapper{
  background-color: #101014;
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas: "leftSide rightSide";
  grid-template-columns: 1fr 3fr;
}
.leftSide{
  grid-area: 'leftSide';
}
.rightSide{
  grid-area: 'rightSide';
}
.headingBlock, .dateHead{
  padding: 20px;
}
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
.weatherHeadBlock{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
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
