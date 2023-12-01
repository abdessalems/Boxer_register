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

      <!-- Confirmation Password -->
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
        <label for="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          v-model="height"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          v-model="weight"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          v-model="dateOfBirth"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" v-model="gender" class="form-control" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div class="form-group">
        <label for="nationality">Nationality:</label>
        <input
          type="text"
          id="nationality"
          v-model="nationality"
          class="form-control"
          required
        />
      </div>

      <!-- Boxer Profile Information -->
      <div class="form-group">
        <label for="fightNumber">Fight Number:</label>
        <input
          type="number"
          id="fightNumber"
          v-model="fightNumber"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="win">Number of Wins:</label>
        <input
          type="number"
          id="win"
          v-model="win"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="lose">Number of Losses:</label>
        <input
          type="number"
          id="lose"
          v-model="lose"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="ko">Number of Knockouts:</label>
        <input
          type="number"
          id="ko"
          v-model="ko"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="gymNumber">Gym Number:</label>
        <input
          type="number"
          id="gymNumber"
          v-model="gymNumber"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          v-model="title"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="photoLink">Link to Photo:</label>
        <input
          type="text"
          id="photoLink"
          v-model="photoLink"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="trainerName">Trainer Name:</label>
        <input
          type="text"
          id="trainerName"
          v-model="trainerName"
          class="form-control"
          required
        />
      </div>

      <div class="form-group form-check">
        <input
          type="checkbox"
          id="termsAndConditions"
          v-model="termsAndConditions"
          class="form-check-input"
          required
        />
        <label class="form-check-label" for="termsAndConditions"
          >I agree to the terms and conditions</label
        >
      </div>

      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</template>

<script>
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
    registerBoxer() {},
  },
};
</script>
