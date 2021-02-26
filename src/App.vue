<template>
  <div id="app" class="bg-dark text-white">
    <NavBar/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    NavBar
  },
  metaInfo: {
    title: 'WeatherApp'
  }
}
</script>

<style>
</style>
