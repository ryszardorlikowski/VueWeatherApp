<template>
  <div class="container">
    <div class="card w-50 mx-auto mt-5">
      <div class="card-body p-5">
        <form>
          <p class="h4 py-4">Sign in</p>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <div class="text-center py-4 mt-3">
            <button class="btn btn-success" type="submit">Sign in</button>
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
  name: 'SignIn',
  components: {},
}
</script>
<style scoped>

</style>