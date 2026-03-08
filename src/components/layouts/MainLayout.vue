<script setup lang="ts">
import {  onMounted, ref } from 'vue';
import LeftSideBlock from '../blocs/LeftSideBlock.vue';
import RightSideBlock from '../blocs/RightSideBlock.vue';

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

</script>

<template>
  <div class="wrapper">

      <div class="leftSide">
        <LeftSideBlock :location="location"/>
      </div>
      <div class="rightSide">
        <RightSideBlock :location="location"/>
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
  padding: 20px;

}
.rightSide{
  grid-area: 'rightSide';
  padding: 20px;
}

</style>
