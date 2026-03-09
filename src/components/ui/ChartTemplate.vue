<script setup lang="ts">
import type { ApexOptions } from 'apexcharts';
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';


const props = defineProps<{
  location: string,
  categories: Array<string>
  title: string
  series: Array<Object>
}>()
const chartOptions = computed<ApexOptions>(() => ({
  chart: { 
    type: 'line',
    toolbar: { show: false },
    animations: { enabled: true },
    zoom: { enabled: false }
  },
  xaxis: { 
    categories: props.categories
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  title: {
    text: props.title,
    align: 'center'
  },
  colors: ['#008FFB'],
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: '#ffffff4b'
  },
  markers: {
    size: 4,
    colors: ['#008FFB'],
    strokeColors: '#fff',
    strokeWidth: 2
  }
}));
</script>

<template>
  <div class="chartBackground">
    <VueApexCharts   
      :options="chartOptions" 
      :series="props.series"
      type="line"
      width="100%" 
      height="300px" />
  </div>
</template>

<style scoped>
.chartBackground{
  background-color: #ffffff68;
  border-radius: 30px;
  max-width: 800px;
  min-width: 500px;
  width: 90%;
}
</style>
