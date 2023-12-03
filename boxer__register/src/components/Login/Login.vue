<template>
  <div>
    <form @submit.prevent="loginBoxer" class="col-md-6 offset-md-3 mt-5">
      <h2 class="mb-4">Boxer Login</h2>

      <div class="form-group">
        <label for="loginEmail">Email:</label>
        <input
          type="email"
          id="loginEmail"
          v-model="loginEmail"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="loginPassword">Password:</label>
        <input
          type="password"
          id="loginPassword"
          v-model="loginPassword"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },
  methods: {
    loginBoxer() {
      // Perform your login logic here
      // You can access the login form data here (this.loginEmail, this.loginPassword)
    },
  },
};
</script>
