<template>
  <div>
    <div class="row">
      <div class="map-container col-12">
        <Map :map-position="mapPosition" :map-zoom="mapZoom"
             @clicked-map-position="searchLocationByCoordinates"/>
      </div>
      <div class="search-box-wrapper">
        <div class="search-box" ref="searchBoxEl">
          <movable class="ml-auto" target="searchBoxEl">click and drag
          </movable>
          <label for="searchInput" class="d-block my-2 text-center">Search location:</label>
          <input @input="searchLocationByName" v-model="searchQuery" id="searchInput"
                 class="form-control border"/>
          <div>
            <div v-if="isFetching" class="text-center">
              <div class="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <LocationsList @clicked-list-item="showLocationOnMap" v-else :locations="locationsList"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocationsList from "@/components/LocationsList";
import Map from "@/components/Map";
import {latLng} from "leaflet";
import debounce from 'lodash.debounce'
import weatherApiService from "@/services/weather.api.service";

export default {
  name: "SearchBox",
  components: {LocationsList, Map},
  data() {
    return {
      locationsList: [],
      searchQuery: '',
      awaitingSearch: false,
      isFetching: false,
      mapPosition: latLng([50.8, 19.12]),
      mapZoom: 2,
    }
  },
  methods: {
    searchLocation(query, searchByName) {
      weatherApiService.searchLocation(query, searchByName).then(({data}) => {
        this.locationsList = data;
        this.$emit('locations-list', data)
        this.isFetching = false;
      }).catch(({error}) => {
        console.log(error)
        this.isFetching = false;
      });
    },
    searchLocationByName: debounce(function () {
      this.isFetching = true;
      this.searchLocation(this.searchQuery, true);
    }, 400),
    showLocationOnMap(value) {
      this.mapPosition = latLng(value);
      this.mapZoom = 10;
    },
    searchLocationByCoordinates(value) {
      this.isFetching = true;
      this.searchQuery = `${value.lat.toFixed(5)}, ${value.lng.toFixed(5)}`;
      const queryCoordinate = this.searchQuery;
      this.searchLocation(queryCoordinate, false);
    }
  },

}
</script>

<style scoped>
.map-container {
  min-height: 600px;
  height: 50vh;
  z-index: 1;
}

.search-box-wrapper {
  position: absolute;
  max-height: 600px;
  max-width: 50%;
  margin: 70px;
}

.search-box {
  z-index: 3;
  position: absolute;
  color: white;
  width: 600px;
  padding: 15px;
  border-radius: 10px;
  background: rgba(52, 58, 64, 0.93);
}

</style>