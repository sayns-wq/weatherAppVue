<script setup lang="ts">
import ChartTemplate from '@/components/ui/ChartTemplate.vue';
import { useWeatherWeak } from '@/composables/queries/useWeather';
import type { WeatherResponseDataDays } from '@/types/weather';
import { FarengateToCel } from '@/utils/FarengateToCel';
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
  const title = 'Температура'
const series =  computed(() => [{ 
  name: 'Температура',
  data: data.value?.map((item) => FarengateToCel(item.temp)) || []
}]);
</script>

<template>
  <ChartTemplate :location="location" :categories :title :series/>
</template>

<style scoped>
</style>
