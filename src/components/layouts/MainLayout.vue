<script setup lang="ts">
import IconSunny from '../icons/IconSunny.vue';
import WeatherListItem from '../ui/WeatherListItem.vue';


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
                <IconSunny size="64"/>
              </div>
              <div class="temperature">
                14 C
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
          <WeatherListItem/>
          <WeatherListItem/>
          <WeatherListItem/>
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
