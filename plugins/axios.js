
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('axios', axios.create({
    baseURL: 'http://localhost:3000/api'
  }))
})
