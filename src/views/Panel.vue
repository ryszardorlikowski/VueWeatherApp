<template>
  <div class="container my-5">
    <h4 class="my-2">Your locations:</h4>
    <UserLocationsList :locations="getUserLocations"/>
    <h4 class="my-2">Add new location:</h4>
    <SearchBox/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import UserLocationsList from "@/components/UserLocationsList";
import SearchBox from "@/components/SearchBox";

export default {
  name: "Panel",
  components: {UserLocationsList, SearchBox},
  computed: {
    ...mapGetters('users', ['getUserLocations',])
  },
  watch: {
    getUserLocation() {
      this.locations = this.getUserLocation;
    }
  },
}
</script>

<style scoped>

</style>