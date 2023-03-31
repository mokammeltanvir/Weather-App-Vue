import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather',{
  state: () => ({
    api_key: 'e34cd1fd7713a83eebc99e20a261bb7d',
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    weather_icon: 'https://openweathermap.org/img/wn/',
    location_query: '',
    weather: {},
    
}),
  getters: {
  },
  actions: {
    async fetchWeather(e) {
      if(e.key == 'Enter'){
        const {data} = await axios.get(`${this.baseURL}weather?q=${this.location_query}&units=metric&appid=${this.api_key}`);
        this.weather = data;

      }
    }

  }
})
