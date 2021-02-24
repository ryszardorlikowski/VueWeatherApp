<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
    {{ api }}
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'App',
  data() {
    return {
      api: process.env.VUE_APP_BASE_URL,
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
