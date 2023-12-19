<template>
  <div>
    <form @submit.prevent="registerUser" class="col-md-6 offset-md-3 mt-5">
      <h2 class="mb-4">User Signup</h2>
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          v-model="firstName"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          v-model="lastName"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          class="form-control"
          required
        />
      </div>

      <button v-on:click="registerUser" type="submit" class="btn btn-primary">
        SignUp
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserSignupForm",
  data() {
    return {
      // Basic Information
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async registerUser() {
      const result = await axios.post("http://localhost:3000/users", {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      });

      console.log(result);
      if (result.status == 201) {
        alert("User Registration Successful! Please Log In to Continue");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        // Redirect to the home page or another appropriate route
        this.$router.push({ name: "home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      // If the user is already registered, redirect to the home page
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped></style>
