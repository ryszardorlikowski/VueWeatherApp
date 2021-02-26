<template>
  <div class="my-3">
    <h5 class="font-weight-bold  text-warning">Forecast:</h5>
    <div v-if="!isFetching" class="d-flex justify-content-around text-dark">
      <div v-for="day in forecastWeatherData" :key="day.date" class="col-3 p-2">
        <div class="bg-light p-2">
          <img :src="day.condition.icon" class="w-75" alt="">
          <div class="small">{{ day.condition.text }}</div>
          <div class="font-weight-bold">{{ day.date }}</div>
          <div class="small">
            Min temp: <span class="font-weight-bold">{{ parseInt(day.min_temp) }}°C </span>
          </div>
          <div class="small">
            Max temp: <span class="font-weight-bold">{{ parseInt(day.max_temp) }}°C </span>
          </div>
          <div class="small">
            Avg temp: <span class="font-weight-bold">{{ parseInt(day.max_temp) }}°C </span>
          </div>
          <div class="small">
            Max wind: <span class="font-weight-bold">{{ parseFloat(day.max_wind_kph) }}km/h </span>
          </div>
          <div class="small">
            Sunrise: <span class="font-weight-bold">{{ day.astro.sunrise }}</span>
          </div>
          <div class="small">
            Moonset: <span class="font-weight-bold">{{ day.astro.moonset }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import weatherApiService from "@/services/weather.api.service";

export default {
  name: "Forecast",
  props: ['location',],
  data() {
    return {
      forecastWeatherData: [],
      isFetching: true,
    }
  },
  methods: {
    getForecastWeather() {
      this.isFetching = true;
      weatherApiService.getForecastWeather(`${this.location.lat}, ${this.location.lon}`)
          .then(({data}) => {
            this.forecastWeatherData = data;
            this.isFetching = false;
          })
          .catch(error => {
            console.log(error);
            this.isFetching = false;
          })


    }
  },
  mounted() {
    this.getForecastWeather();
  }
}
</script>

<style scoped>

</style>