<template>
  <div>
    <div class="navbar navbar-dark bg-secondary">
      <a class="navbar-brand" href="#">WeatherApp</a>
      <ul class="navbar-nav flex-row ml-auto">
        <li class="nav-item mx-3">
          <router-link
              :to="{name:'home'}"
              class="nav-link"
          >
            Home
          </router-link>
        </li>
        <li v-if="isLoggedIn" class="nav-item mx-3">
          <router-link
              :to="{name:'panel'}"
              class="nav-link"
          >
            Panel
          </router-link>
        </li>
        <li v-if="!isLoggedIn" class="nav-item mx-3">

          <router-link
              :to="{name:'signin'}"
              class="nav-link"
          >
            Sign In
          </router-link>
        </li>
        <li v-if="!isLoggedIn" class="nav-item mx-3">

          <router-link
              :to="{name:'signup'}"
              class="nav-link"
          >
            Sign Up
          </router-link>
        </li>
        <li v-if="isLoggedIn" class="nav-item mx-3">
          <a @click="logOut" class="nav-link" style="cursor: pointer;">Logout</a>
        </li>

        <li class="nav-item mx-3" v-if="isLoggedIn">
          <span class="nav-link font-weight-bold">Hi, {{ getUserName }}!</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {LOGOUT} from "@/store/modules/users/actions.type";


export default {
  name: "NavBar",
  methods: {
    logOut() {
      this.$store
          .dispatch(`users/${LOGOUT}`,)
          .then(() => {
            this.$router.push({name: "home"})
          });
    },

  },
  computed: {
    ...mapGetters('users', ['isLoggedIn', 'getUserName'])
  }
}
</script>

<style scoped>

</style>