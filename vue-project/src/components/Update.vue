<template>
    <div class="container mt-5">
        <form @submit.prevent="updateBoxer" class="col-md-6 offset-md-3 p-4 bg-light rounded" :style="{ backgroundImage: `url(${boxerDetails ? boxerDetails.image_link : ''})` }">

        <h2 class="mb-4">Update Boxer</h2>
  
        <div class="mb-3">
          <label for="first_name" class="form-label">First Name:</label>
          <input type="text" id="first_name" v-model="firstName" class="form-control" required placeholder="Enter your first name" />
        </div>
  
        <div class="mb-3">
          <label for="last_name" class="form-label">Last Name:</label>
          <input type="text" id="last_name" v-model="lastName" class="form-control" required placeholder="Enter your last name" />
        </div>
  
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" v-model="email" class="form-control" required placeholder="Enter your email" />
        </div>

        <div class="mb-3">
            <label for="image_link" class="form-label">Image Link:</label>
            <input type="text" id="image_link" :value="boxerDetails ? boxerDetails.image_link : ''" @input="updateImageLink($event)" class="form-control" placeholder="Enter image link" />
          </div>
  
        <button type="submit" class="btn btn-primary">Update Boxer</button>
        <button @click="deleteBoxer" class="btn btn-danger">Delete Boxer</button>
      </form>
  
      <div class="mt-4" v-if="boxerDetails">
    </div>
      <div v-else>
        <p>Loading boxer details...</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const image_link = ref('');
let height = ref('');
let weight = ref('');
let fight_number = ref('');
let win = ref('');
let losses = ref('');
let kos = ref('');
let gym_number = ref('');
let title = ref('');
let trainer_name = ref('');

let boxerId = ref(4);
boxerId = ref(Number(route.params.id));
console.warn(ref(Number(route.params.id)));
const boxerDetails = ref(null);

const fetchBoxerDetails = async () => {
  try {
    const response = await fetch(`/api/boxers/${boxerId.value}`);
    if (!response.ok) {
      throw new Error('Failed to fetch boxer details');
    }

    const data = await response.json();
    firstName.value = data.first_name;
    lastName.value = data.last_name;
    email.value = data.email;
    image_link.value = data.image_link;
    height.value = data.height;
    weight.value = data.weight;
    fight_number.value = data.fight_number;
    win.value = data.win;
    losses.value = data.losses;
    kos.value = data.kos;
    gym_number.value = data.gym_number;
    title.value = data.title;
    trainer_name.value = data.trainer_name;

    boxerDetails.value = data;
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(() => {
  fetchBoxerDetails();
});

const updateBoxer = async () => {
  try {
    const updatedData = {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      image_link: image_link.value,
      height: height.value,
      weight: weight.value,
      fight_number: fight_number.value,
      win: win.value,
      losses: losses.value,
      kos: kos.value,
      gym_number: gym_number.value,
      title: title.value,
      trainer_name: trainer_name.value,
    };

    const response = await fetch(`/api/boxers/${boxerId.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Failed to update boxer');
    }

    console.log('Boxer updated successfully.');
    
    // Redirect after successful update
    router.push({ name: 'BoxerList' });

    // Show success message using alert
    window.alert('Boxer updated successfully.');
  } catch (error) {
    console.error(error.message);
  }
};

const deleteBoxer = async () => {
  try {
    const response = await fetch(`/api/boxers/${boxerId.value}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete boxer');
    }

    console.log('Boxer deleted successfully.');

    // Redirect after successful deletion
    router.push({ name: 'BoxerList' });

    // Show success message using alert
    window.alert('Boxer deleted successfully.');
  } catch (error) {
    console.error(error.message);
  }
};

const updateImageLink = (event) => {
  image_link.value = event.target.value;
};
</script>

  
  

