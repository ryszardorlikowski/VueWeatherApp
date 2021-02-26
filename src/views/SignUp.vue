<template>
  <div class="container my-5">
    <div class="card mx-auto shadow-longer bg-secondary">
      <div class="card-body p-5">
        <form @submit.prevent="signUp(username, email, password)">
          <p class="h4 py-4">Sign up</p>
          <div class="form-group">
            <label for="username">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" class="form-control" id="email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" class="form-control" id="password">
          </div>
          <div class="form-group">
            <label for="password_2">Repeat password</label>
            <input v-model="repeatedPassword" type="password" class="form-control" id="password_2">
          </div>
          <div class="text-center py-4 mt-3">
            <button class="btn btn-success" :disabled="validForm" type="submit">Sign up</button>
          </div>
          <div class="text-light small">
            <ul class="list-unstyled">
              <li v-for="error in errors" :key="error.toString()"> {{ error.toString() }}</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
    <!-- Card -->
  </div>
  <!-- Container -->
</template>

<script>
import weatherApiService from "@/services/weather.api.service";

export default {
  name: "SignUp",
  data() {
    return {
      username: '',
      password: '',
      repeatedPassword: '',
      email: '',
      errors: ''
    }
  },
  methods: {
    signUp(username, email, password) {
      weatherApiService.signUp({username, email, password}).then(() => {
        this.errors = '';
        this.$router.push({name: "signin"});
      }).catch(error => {
        this.errors = error.response.data;
      });
    }

  },
  computed: {
    validForm() {
      return !(this.username && this.password && (this.password === this.repeatedPassword) && this.email)
    },
  }

}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 500px;
}
</style>