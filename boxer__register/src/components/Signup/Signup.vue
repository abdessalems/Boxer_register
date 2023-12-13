<template>
  <div>
    <form @submit.prevent="registerBoxer" class="col-md-6 offset-md-3 mt-5">
      <h2 class="mb-4">Boxer Signup</h2>

      <!-- Basic Information -->
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

      <!-- Additional Information -->
      <div class="form-group">
        <label for="height">Height:</label>
        <input type="text" id="height" v-model="height" class="form-control" />
      </div>

      <div class="form-group">
        <label for="weight">Weight:</label>
        <input type="text" id="weight" v-model="weight" class="form-control" />
      </div>

      <!-- ... (Other additional form groups) ... -->

      <!-- Boxer Profile Information -->
      <div class="form-group">
        <label for="fightNumber">Fight Number:</label>
        <input
          type="text"
          id="fightNumber"
          v-model="fightNumber"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="win">Win:</label>
        <input type="text" id="win" v-model="win" class="form-control" />
      </div>

      <!-- ... (Other profile form groups) ... -->

      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import bcrypt from "bcryptjs";

export default {
  name: "SignupForm",
  data() {
    return {
      // Basic Information
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",

      // Additional Information
      height: null,
      weight: null,
      dateOfBirth: "",
      gender: "",
      nationality: "",

      // Boxer Profile Information
      fightNumber: null,
      win: null,
      lose: null,
      ko: null,
      gymNumber: null,
      title: "",
      photoLink: "",
      trainerName: "",

      termsAndConditions: false,
    };
  },
  methods: {
    async registerBoxer() {
      try {
        // Hash the password before sending it to the server
        const hashedPassword = await bcrypt.hash(this.password, 10);

        const boxerData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: hashedPassword,
          confirmPassword: this.confirmPassword,
          height: this.height,
          weight: this.weight,
          dateOfBirth: this.dateOfBirth,
          gender: this.gender,
          nationality: this.nationality,
          fightNumber: this.fightNumber,
          win: this.win,
          lose: this.lose,
          ko: this.ko,
          gymNumber: this.gymNumber,
          title: this.title,
          photoLink: this.photoLink,
          trainerName: this.trainerName,
          termsAndConditions: this.termsAndConditions,
        };

        const response = await axios.post("/api/boxers", boxerData);
        console.log("Boxer registered successfully:", response.data);
        // Handle success, e.g., redirect to a success page
      } catch (error) {
        console.error("Error registering boxer:", error);
        // Handle errors, e.g., show an error message to the user
      }
    },
  },
};
</script>
