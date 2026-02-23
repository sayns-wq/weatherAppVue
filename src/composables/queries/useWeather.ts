import { useQuery } from '@tanstack/vue-query'
import { userEndpoints } from '../../api/endpoints'

export function useWeather(location: string) {
  return useQuery({
    queryKey: import.meta.env.API_URL,
    queryFn: () => userEndpoints.get(location).then((res) => res.data.currentConditions.temp),
    enabled: !!location,
  })
}
export function useWeatherWeek(location: string) {
  return useQuery({
    queryKey: import.meta.env.API_URL,
    queryFn: () => userEndpoints.get(location).then((res) => res.data.days[0]),
    enabled: !!location,
  })
}
