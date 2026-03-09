export enum WeatherVariants {
  snow = 'snow',
  rain = 'rain',
  fog = 'fog',
  wind = 'wind',
  cloudy = 'cloudy',
  partly_cloudy_day = 'partly-cloudy-day',
  partly_cloudy_night = 'partly-cloudy-night',
  clear_day = 'clear-day',
  clear_night = 'clear-night',
}

export interface WeatherResponseDataDays {
  temp: number
  icon: WeatherVariants
  datetime: Date
  humidity: number
  windspeed: number
  pressure: number
  uvindex: number
}

export interface WeatherResponse {
  data: {
    days: WeatherResponseDataDays[]
    currentConditions: {
      temp: number
      icon: string
    }
  }
}
