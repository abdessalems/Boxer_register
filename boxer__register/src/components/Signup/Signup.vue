/* eslint-disable prettier/prettier */

<template>
  <div>
    <form @submit.prevent="registerBoxer" class="col-md-6 offset-md-3 mt-5">
      <h2 class="mb-4">Boxer Signup</h2>
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

      <div class="form-group">
        <label for="losses">Losses:</label>
        <input type="text" id="losses" v-model="losses" class="form-control" />
      </div>

      <div class="form-group">
        <label for="kos">KOs:</label>
        <input type="text" id="kos" v-model="kos" class="form-control" />
      </div>

      <div class="form-group">
        <label for="gymNumber">Gym Number:</label>
        <input type="text" id="gymNumber" v-model="gymNumber" class="form-control" />
      </div>

      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="title" class="form-control" />
      </div>

      <div class="form-group">
        <label for="imageLink">Image Link:</label>
        <input type="text" id="imageLink" v-model="imageLink" class="form-control" />
      </div>

      <div class="form-group">
        <label for="trainerName">Trainer Name:</label>
        <input type="text" id="trainerName" v-model="trainerName" class="form-control" />
      </div>

      <!-- ... (Other profile form groups) ... -->
      <button v-on:click="registerBoxer" type="submit" class="btn btn-primary">
        SignUp
      </button>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line prettier/prettier
import axios from "axios";
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
        const result = await axios.post("http://localhost:3000/boxers", {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
          phone_number: this.phoneNumber,
          height: this.height,
          weight: this.weight,
          fightNumber: this.fightNumber,
          wins: this.wins,
          losses: this.losses,
          kos: this.kos,
          gym_number: this.gymNumber,
          boxing_title: this.title,
          image_link: this.imageLink,
          trainer_name: this.trainerName,
        });

        console.log(result); 
        if(result.status==201)
        {
          alert('Registration Successful! Please Log In to Continue');
          localStorage.setItem("boxer-info",JSON.stringify(result.data))
          this.$router.push({name:'home'});
        }
      
    },
  },
  mounted()
  {
    let boxer=localStorage.getItem("boxer-info");
    if (boxer)
    {
      this.$router.push({name:'home'});
    }
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
