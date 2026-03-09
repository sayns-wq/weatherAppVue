<script setup lang="ts">
import ChartTemplate from '@/components/ui/ChartTemplate.vue';
import { useWeatherWeak } from '@/composables/queries/useWeather';
import type { WeatherResponseDataDays } from '@/types/weather';
import { computed } from 'vue';


const props = defineProps<{
  location: string,
}>()
  const { data } = useWeatherWeak(() => props.location);
  const categories = computed(()=>{
    return data.value?.map((item: WeatherResponseDataDays) => {
      const date = new Date(item.datetime);
      return date.toLocaleDateString('ru-RU', { 
        day: 'numeric', 
        month: 'short' 
      });
    }) || []
  })
  const title = 'Скорость ветра'
const series =  computed(() => [{ 
  name: 'Скорость ветра',
  data: data.value?.map((item) => item.windspeed) || []
}]);
</script>

<template>
  <ChartTemplate :location="location" :categories :title :series/>
</template>

<style scoped>
.chartBackground{
  background-color: #ffffff68;
  border-radius: 30px;
}
</style>
