import type { MaybeRefOrGetter } from 'vue'
import apiClient from './client'

export const userEndpoints = {
  get: (location: MaybeRefOrGetter<string>) =>
    apiClient.get(`/${location}?key=${import.meta.env.VITE_API_KEY}`),
}
