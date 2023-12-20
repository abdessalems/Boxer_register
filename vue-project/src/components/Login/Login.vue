<template>
    <div>
      <form @submit.prevent="loginBoxer" class="col-md-6 offset-md-3 mt-5">
        <h2 class="mb-4">Boxer Login</h2>
  
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
  
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <router-link to="/signup">Signup</router-link>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "LoginForm",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async loginBoxer() {
        let res = await axios.get(
          `http://localhost:3000/boxers?email=${this.email}&password=${this.password}`
        );
        console.warn(res);
        if (res.status == 200 && res.data.length > 0) {
          alert("Registration Successful! Please Log In to Continue");
          localStorage.setItem("boxer-info", JSON.stringify(res.data[0]));
          this.$router.push({ name: "home" });
        }
      },
    },
    mounted() {
      let boxer = localStorage.getItem("boxer-info");
      if (boxer) {
        this.$router.push({ name: "home" });
      }
    },
  };
  </script>  