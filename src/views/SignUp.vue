<template>
  <div class="container">
    <div class="card mx-auto mt-5 shadow-longer border-0">
      <div class="card-body p-5">
        <form>
          <p class="h4 py-4">Sign up</p>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Username">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <div class="text-center py-4 mt-3">
            <button class="btn btn-success" type="submit">Sign up</button>
          </div>
          <div class="text-danger">
            Wrong data
          </div>
        </form>
      </div>
    </div>
    <!-- Card -->
  </div>
  <!-- Container -->
</template>

<script>
export default {
name: "SignUp"
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 500px;
}
</style>