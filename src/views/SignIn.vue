<template>
  <div class="container my-5">
    <div class="card shadow-longer bg-secondary mx-auto">
      <div class="card-body p-5">
        <form @submit.prevent="signIn(username, password)">
          <p class="h4 py-4">Sign in</p>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password">
          </div>
          <div class="text-center py-4 mt-3">
            <button class="btn btn-success" type="submit">Sign in</button>
          </div>
          <div class="text-light font-weight-bold  small">
            <ul class="list-unstyled">
              <li class="py-1" v-for="error in errors" :key="error.toString()"> {{ error.toString() }}</li>
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
import {SIGNIN} from '@/store/modules/users/actions.type'

export default {
  name: 'SignIn',
  data() {
    return {
      username: '',
      password: '',
      errors: ''
    }
  },
  methods: {
    signIn(username, password) {
      this.$store
          .dispatch(`users/${SIGNIN}`, {username, password})
          .then(() => {
            this.errors = '';
            this.$router.push({name: "panel"});
          })
          .catch(error => {
            this.errors = error.response.data;
          });
    }

  }


}
</script>
<style scoped>
.card {
  width: 100%;
  max-width: 500px;
}
</style>