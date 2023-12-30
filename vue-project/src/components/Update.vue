<!-- UpdateBoxer.vue -->
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
          <label for="height" class="form-label">Height:</label>
          <input type="text" id="height" v-model="height" class="form-control" required placeholder="Enter your height" />
        </div>
  
        <div class="mb-3">
          <label for="weight" class="form-label">Weight:</label>
          <input type="text" id="weight" v-model="weight" class="form-control" required placeholder="Enter your weight" />
        </div>
  
        <div class="mb-3">
          <label for="fight_number" class="form-label">Fight Number:</label>
          <input type="text" id="fight_number" v-model="fightNumber" class="form-control" required placeholder="Enter your fight number" />
        </div>
  
        <div class="mb-3">
          <label for="win" class="form-label">Wins:</label>
          <input type="text" id="win" v-model="win" class="form-control" required placeholder="Enter number of wins" />
        </div>
  
        <div class="mb-3">
          <label for="losses" class="form-label">Losses:</label>
          <input type="text" id="losses" v-model="losses" class="form-control" required placeholder="Enter number of losses" />
        </div>
  
        <div class="mb-3">
          <label for="kos" class="form-label">Knockouts (KOs):</label>
          <input type="text" id="kos" v-model="kos" class="form-control" required placeholder="Enter number of knockouts" />
        </div>
  
        <div class="mb-3">
          <label for="gym_number" class="form-label">Gym Number:</label>
          <input type="text" id="gym_number" v-model="gymNumber" class="form-control" required placeholder="Enter your gym number" />
        </div>
  
        <div class="mb-3">
          <label for="title" class="form-label">Title:</label>
          <input type="text" id="title" v-model="title" class="form-control" required placeholder="Enter your title" />
        </div>
  
        <div class="mb-3">
          <label for="image_link" class="form-label">Image Link:</label>
          <input type="text" id="image_link" :value="boxerDetails ? boxerDetails.image_link : ''" @input="updateImageLink($event)" class="form-control" required placeholder="Enter image link" />
        </div>
  
        <div class="mb-3">
          <label for="trainer_name" class="form-label">Trainer Name:</label>
          <input type="text" id="trainer_name" v-model="trainerName" class="form-control" required placeholder="Enter your trainer name" />
        </div>
  
        <button type="submit" class="btn btn-primary">Update Boxer</button>
        <button @click="deleteBoxer" class="btn btn-danger">Delete Boxer</button>
      </form>
  
      <div class="mt-4" v-if="boxerDetails">
        <!-- Display additional boxer details if needed -->
      </div>
      <div v-else>
        <p>Loading boxer details...</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const height = ref('');
  const weight = ref('');
  const fightNumber = ref('');
  const win = ref('');
  const losses = ref('');
  const kos = ref('');
  const gymNumber = ref('');
  const title = ref('');
  const imageLink = ref('');
  const trainerName = ref('');
  
  let boxerId = ref(4); // Assuming a default value for the boxerId
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
      height.value = data.height;
      weight.value = data.weight;
      fightNumber.value = data.fight_number;
      win.value = data.win;
      losses.value = data.losses;
      kos.value = data.kos;
      gymNumber.value = data.gym_number;
      title.value = data.title;
      imageLink.value = data.image_link;
      trainerName.value = data.trainer_name;
  
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
        height: height.value,
        weight: weight.value,
        fight_number: fightNumber.value,
        win: win.value,
        losses: losses.value,
        kos: kos.value,
        gym_number: gymNumber.value,
        title: title.value,
        image_link: imageLink.value,
        trainer_name: trainerName.value,
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
    imageLink.value = event.target.value;
  };
  </script>
  