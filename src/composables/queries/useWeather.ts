import { useQuery } from '@tanstack/vue-query'
import { toValue } from 'vue'
import { userEndpoints } from '../../api/endpoints'
import { FarengateToCel } from '@/utils/FarengateToCel'
import type { MaybeRefOrGetter } from 'vue'
import type { WeatherResponse } from '@/types/weather'

export function useWeather(location: MaybeRefOrGetter<string>) {
  return useQuery({
    queryKey: ['weather', 'current', location],
    queryFn: () =>
      userEndpoints
        .get(toValue(location))
        .then((res: WeatherResponse) => FarengateToCel(res.data.currentConditions.temp)),
    enabled: !!location,
  })
}
export function useWeatherIcon(location: MaybeRefOrGetter<string>) {
  return useQuery({
    queryKey: ['icon', 'current', location],
    queryFn: () =>
      userEndpoints
        .get(toValue(location))
        .then((res: WeatherResponse) => res.data.currentConditions.icon),
    enabled: !!location,
  })
}
export function useWeatherWeak(location: MaybeRefOrGetter<string>) {
  return useQuery({
    queryKey: ['weather', 'week', location],
    queryFn: () =>
      userEndpoints
        .get(toValue(location))
        .then((res: WeatherResponse) => res.data.days.slice(0, 7)),
    enabled: !!location,
  })
}

export function useDiagramData(location: MaybeRefOrGetter<string>) {
  return useQuery({
    queryKey: ['diagram', 'week', location],
    queryFn: () =>
      userEndpoints
        .get(toValue(location))
        .then((res: WeatherResponse) =>
          res.data.days.slice(0, 7).map((item) => FarengateToCel(item.temp)),
        ),
    enabled: !!location,
  })
}
