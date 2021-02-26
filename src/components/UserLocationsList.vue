<template>
  <div>
    <div v-if="!locations.length" class="border m-1 shadow-sm p-3">You don't have any locations</div>
    <ul class="list-unstyled">
      <li class="bg-secondary border my-2 d-flex justify-content-between align-items-center"
          v-for="location in locations"
          :key="location.id"
      >
        <div class="info p-3 text-left">
          <div>{{ location.name }}</div>
          <div class="small">{{ location.country }}</div>
        </div>
        <div class="action-button mx-4">
          <button @click="deleteLocation(location.id)" class="btn-sm btn-danger border-0 rounded-0">Delete</button>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>

import {DELETE_USER_LOCATION} from "@/store/modules/users/actions.type";

export default {
  name: "UserLocationsList",
  props: ['locations',],
  data() {
    return {}
  },
  methods: {
    deleteLocation(id) {
      this.$store
          .dispatch(`users/${DELETE_USER_LOCATION}`, id);
    }
  },

}
</script>

<style scoped>
</style>