import apiClient from './client'

export const userEndpoints = {
  get: (location: string) => apiClient.get(`/${location}?key=${import.meta.env.VITE_API_KEY}`),
}
