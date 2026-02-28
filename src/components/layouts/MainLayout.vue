<script setup lang="ts">
import { useWeather, useWeatherIcon, useWeatherWeak } from '@/composables/queries/useWeather';
import WeatherListItem from '../ui/WeatherListItem.vue';
import { computed, ref } from 'vue';
import WeatherIcon from '../ui/WeatherIcon.vue';
import { WeatherVariants } from '@/types/weather';
const location = ref('55.6744%2C37.8550')
const { data: dataDay } = useWeather(location.value);
const { data: dataIcon } = useWeatherIcon(location.value);
const { data: dataWeek } = useWeatherWeak(location.value);

const weatherIconType = computed<WeatherVariants | undefined>(() => {
  if (!dataIcon.value) return undefined;
  return dataIcon.value as WeatherVariants;
});
</script>

<template>
  <div class="wrapper">

      <div class="leftSide">
        <div class="headingBlock">
          <div class="mainHead">Moskow Weather</div>
          <div class="secondaryHead">Russia Moskow</div>
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
              cloudy
            </div>
          </div>
        </div>
      </div>
      <div class="rightSide">
        <div class="dateHead">
            <div class="mainHead">May 2023</div>
          <div class="secondaryHead">Friday, May 19, 2023</div>
        </div>
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
  justify-content: space-between;
  align-items: center;
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
}
</style>
