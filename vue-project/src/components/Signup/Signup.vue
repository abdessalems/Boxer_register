<template>
  <div class="container mt-5">
    <form @submit.prevent="registerBoxer" class="col-md-6 offset-md-3 p-4 bg-light rounded">
      <h2 class="mb-4">Boxer Signup</h2>

      <div class="mb-3">
        <label for="first_name" class="form-label">First Name:</label>
        <input type="text" id="first_name" v-model="firstName" class="form-control" required
          placeholder="Enter your first name" />
      </div>

      <div class="mb-3">
        <label for="last_name" class="form-label">Last Name:</label>
        <input type="text" id="last_name" v-model="lastName" class="form-control" required
          placeholder="Enter your last name" />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required placeholder="Enter your email" />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input type="password" id="password" v-model="password" class="form-control" required
          placeholder="Enter your password" />
      </div>

      <button type="submit" class="btn btn-primary">SignUp</button>
    </form>
    <div class="mt-3 text-center">
      <router-link to="/login">Already have an account? Login here.</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

const registerBoxer = async () => {
  const userData = {
    first_name: firstName.value,
    last_name: lastName.value,
    email: email.value,
    password: password.value,
  };

  await fetch('api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  console.log('Registration request sent successfully.');
};
</script>
