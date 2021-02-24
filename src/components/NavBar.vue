<template>
  <div>
    <div class="navbar navbar-dark bg-dark">
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
        <li class="nav-item mx-3">

          <router-link
              :to="{name:'signin'}"
              class="nav-link"
          >
            Sign In
          </router-link>
        </li>
        <li class="nav-item mx-3">

          <router-link
              :to="{name:'signup'}"
              class="nav-link"
          >
            Sign Up
          </router-link>
        </li>
        <li class="nav-item mx-3">

          <router-link
              :to="{name:'panel'}"
              class="nav-link"
          >
            Panel
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>