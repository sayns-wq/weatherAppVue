<script setup lang="ts">
import ChartHumidity from './WeatherCharts/ChartHumidity.vue';
import ChartPressure from './WeatherCharts/ChartPressure.vue';
import ChartTemperature from './WeatherCharts/ChartTemperature.vue';
import ChartUvIndex from './WeatherCharts/ChartUvIndex.vue';
import ChartWindSpeed from './WeatherCharts/ChartWindSpeed.vue';

const props = defineProps<{
  location: string,
}>()

</script>

<template>
  <div class="chartWrapper">
    <div class="chartItem">
      <ChartTemperature :location="props.location"/>
    </div>
    <div class="chartItem">
      <ChartHumidity :location="props.location"/>
    </div>
    <div class="chartItem">
      <ChartWindSpeed :location="props.location"/>
    </div>
    <div class="chartItem">
      <ChartPressure :location="props.location"/>
    </div>
    <div class="chartItem">
      <ChartUvIndex :location="props.location"/>
    </div>
  </div>
</template>

<style scoped>
.chartWrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  box-sizing: border-box;
  padding: 0;
  justify-content: center;
  padding: 0 10px;
}
</style>
