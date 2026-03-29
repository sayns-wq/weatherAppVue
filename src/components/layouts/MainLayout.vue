<script setup lang="ts">
import {  onMounted, ref } from 'vue';
import LeftSideBlock from '../blocs/LeftSideBlock.vue';
import RightSideBlock from '../blocs/RightSideBlock.vue';
import WeatherBlock from '../blocs/WeatherBlock.vue';

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
      console.log(location.value)

    },
    (error) => {
      geoError.value = error.message;
      console.log(error)
    },
    { enableHighAccuracy: true, timeout: 5000 }
  );
});

</script>

<template>
  <div class="wrapper">

      <div class="leftSide">
        <LeftSideBlock :location="location"/>
      </div>
      <div class="rightSide">
        <RightSideBlock :location="location"/>
      </div>
      <div class="bottom">
        <WeatherBlock :location="location"/>
      </div>
  </div>

</template>

<style scoped>
.wrapper{
  background-color: #101014;
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas: 
  "leftSide rightSide"
  "bottomSide bottomSide"
  ;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
}
.leftSide{
  grid-area: leftSide;
  padding: 20px;

}
.rightSide{
  grid-area: rightSide;
  padding: 20px;
}

.bottom{
  grid-area: bottomSide;
  padding-top: 20px;
}
</style>
