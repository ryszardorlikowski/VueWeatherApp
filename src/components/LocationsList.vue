<template>
  <div>
    <ul class="list-unstyled m-0 p-0">
      <li class="my-2 d-flex justify-content-between bg-secondary rounded font-weight-bold align-items-center"
          v-for="loc in locations"
          :key="loc.lat+loc.lon+loc.name"
      >
        <div class="info p-3 text-left" @click="showLocationOnMap(loc)">
          <div>{{ loc.name }}</div>
          <div class="small">{{ loc.country }} <span v-if="loc.region">loc.region</span></div>
        </div>
        <div v-if="isLoggedIn" class="action-button mx-4">
          <button @click="addUserLocation(loc)" class="btn btn-success border-0 rounded-0">watch</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {ADD_USER_LOCATION} from "@/store/modules/users/actions.type";

export default {
  name: "LocationsList",
  props: ['locations',],
  data() {
    return {}
  },
  methods: {
    showLocationOnMap(loc) {
      this.$emit('clicked-list-item', [loc.lat, loc.lon])
    },
    addUserLocation(loc) {
      this.$store
          .dispatch(`users/${ADD_USER_LOCATION}`, loc)
          .then(() => {
            alert(`Location was added`);
          })
          .catch(error => {
            if (error.response.status === 409){
              alert('You already watch this location');
            }
          });
    }

  },
  computed: {
    ...mapGetters('users', ['isLoggedIn',])
  }
}
</script>

<style scoped>
.info {
  width: 100%;
  cursor: pointer;
}
</style>