<template>
  <div>
    <SearchBox @locations-list="updateLocationList"/>
    <div class="container">
      <CarouselWeather :locations-list="locationsList"/>
    </div>
  </div>
</template>

<script>
import CarouselWeather from "@/components/CarouselWeather";
import SearchBox from "@/components/SearchBox";
import {mapGetters} from "vuex";

export default {
  name: "Home",
  components: {SearchBox, CarouselWeather},
  data() {
    return {
      showUserLocation: false,
      locationsList: [],
    }
  },
  methods: {
    updateLocationList(value) {
      this.locationsList = value;
    },
  },
  computed: {
    ...mapGetters('users', ['isLoggedIn', 'getUserLocations'])
  },
  mounted() {
    if (this.isLoggedIn) {
      this.locationsList = this.getUserLocations;
    }
  }
}
</script>

<style scoped>

</style>