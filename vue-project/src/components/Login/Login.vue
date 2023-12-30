<template>
  <div class="container mt-5">
    <form @submit.prevent="loginBoxer" class="col-md-6 offset-md-3 p-4 bg-light rounded">
      <h2 class="mb-4">Boxer Login</h2>

      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="form-control"
          required
          placeholder="Enter your email" 
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
          required
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <div class="mt-3 text-center">
      <router-link to="/signup">Don't have an account? Signup here.</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');

const router = useRouter();

const loginBoxer = async () => {
  try {
    const credentials = {
      email: email.value,
      password: password.value,
    };

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      console.log('Login successful');
      // Redirect to /boxerlist
      router.push('/boxerlist');
    } else {
      console.error('Login failed:', response.statusText);
      // Handle login failure, show an error message, etc.
    }
  } catch (error) {
    console.error('Error during login:', error);
    // Handle unexpected errors, show an error message, etc.
  }
};
</script>

