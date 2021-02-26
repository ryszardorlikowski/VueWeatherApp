<template>
  <div class="py-5 px-2 mb-5">
    <div class="d-flex h-100 justify-content-between align-items-start">
      <div>
        <button @click="movePrevious" :disabled="!(currentIndex>0)" class="btn btn-warning">Previous location</button>
      </div>
      <div v-if="!isFetching && locationsList.length" class="text-center p-3 w-100">
        <h5 class="font-weight-bold mb-3">{{ locationsList[currentIndex].name }}</h5>
        <div class="row align-items-center">
          <div class="col-md-4">
            <div>
              <img :src="currentWeatherData.condition.icon" class="w-25">
              <h5 class="font-weight-bold">{{ currentWeatherData.condition.text }}</h5>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <small>Temperature:</small> <span class="font-weight-bold">
              {{ parseInt(currentWeatherData.temp) }} °C </span>
            </div>
            <div>
              <small>Feels like:</small> <span class="font-weight-bold">
              {{ parseInt(currentWeatherData.temp_feels_like) }} °C </span>
            </div>
            <div>
              <small>Humidity:</small> <span class="font-weight-bold">
              {{ parseInt(currentWeatherData.humidity) }} % </span>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <small>Pressure:</small> <span class="font-weight-bold">
              {{ parseInt(currentWeatherData.pressure_mb) }} mb </span>
            </div>
            <div>
              <small>Wind:</small> <span class="font-weight-bold">
              {{ parseInt(currentWeatherData.wind_kph) }} km/h </span>
            </div>
            <div>
              <small>Wind dir:</small> <span class="font-weight-bold">{{ currentWeatherData.wind_dir }}</span>
            </div>
          </div>

        </div>
        <div class="mt-5">
          <button class="btn btn-success" @click="showForecastWeather=!showForecastWeather">
            {{ showForecastWeather ? 'Hide forecast' : 'Show forecast' }}
          </button>
          <Forecast :location="locationsList[currentIndex]" v-if="showForecastWeather"/>
        </div>
        <div class="mt-4">
          <button class="btn btn-success" @click="showHistoricalWeather=!showHistoricalWeather">
            {{ showHistoricalWeather ? 'Hide historical' : 'Show historical' }}
          </button>
          <Historical :location="locationsList[currentIndex]" v-if="showHistoricalWeather"/>
        </div>
      </div>
      <div v-else-if="!isFetching && !locationsList.length">
        no data
      </div>
      <div v-else>
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <button @click="moveNext" :disabled="!(currentIndex<locationsList.length-1)" class="btn btn-warning">Next
          location
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import weatherApiService from "@/services/weather.api.service";
import Forecast from "@/components/CarouselWeather/Forecast";
import Historical from "@/components/CarouselWeather/Historical";
import {mapGetters} from "vuex";

export default {
  name: "CarouselWeather",
  props: ['locationsList',],
  components: {Historical, Forecast},
  data() {
    return {
      currentIndex: 0,
      currentWeatherData: {},
      showForecastWeather: false,
      showHistoricalWeather: false,
      isFetching: false,
      locations: true,
    }
  },
  methods: {
    moveNext() {
      this.currentIndex++;
    },
    movePrevious() {
      this.currentIndex--;
    },
    getCurrentWeather() {
      this.isFetching = true;
      const loc = this.locationsList[this.currentIndex];
      if (loc) {
        weatherApiService.getCurrentWeather(`${loc.lat}, ${loc.lon}`)
            .then(({data}) => {
              this.currentWeatherData = data;
              this.isFetching = false;
            })
            .catch(error => {
              console.log(error);
              this.isFetching = false;
            });
      }
    },
  },
  watch: {
    locationsList() {
      if (this.locationsList.length) {
        this.currentIndex = 0;
        this.getCurrentWeather();
      }
    },
    currentIndex() {
      this.getCurrentWeather();
    }
  },
  computed: {
    ...mapGetters('users', ['isLoggedIn',])
  },
}
</script>

<style scoped>

</style>