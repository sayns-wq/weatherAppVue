import { useQuery } from '@tanstack/vue-query'
import { userEndpoints } from '../../api/endpoints'
import { FarengateToCel } from '@/utils/FarengateToCel'

export function useWeather(location: string) {
  return useQuery({
    queryKey: ['weather', 'current', location],
    queryFn: () =>
      userEndpoints.get(location).then((res) => FarengateToCel(res.data.currentConditions.temp)),
    enabled: !!location,
  })
}
export function useWeatherWeak(location: string) {
  return useQuery({
    queryKey: ['weather', 'week', location],
    queryFn: () => userEndpoints.get(location).then((res) => res.data.days.slice(0, 7)),
    enabled: !!location,
  })
}
