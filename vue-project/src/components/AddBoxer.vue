<template>
    <div class="container mt-5">
        <form @submit.prevent="addBoxer" class="col-md-6 offset-md-3 p-4 bg-light rounded">
            <h2 class="mb-4">Add Boxer</h2>

            <div class="mb-3">
                <label for="firstName" class="form-label">First Name:</label>
                <input type="text" id="firstName" v-model="firstName" class="form-control" required
                    placeholder="Enter first name" />
            </div>

            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name:</label>
                <input type="text" id="lastName" v-model="lastName" class="form-control" required
                    placeholder="Enter last name" />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" v-model="email" class="form-control" required placeholder="Enter email" />
            </div>

            <div class="mb-3">
                <label for="height" class="form-label">Height:</label>
                <input type="text" id="height" v-model="height" class="form-control" required placeholder="Enter height" />
            </div>

            <div class="mb-3">
                <label for="weight" class="form-label">Weight:</label>
                <input type="text" id="weight" v-model="weight" class="form-control" required placeholder="Enter weight" />
            </div>

            <div class="mb-3">
                <label for="fightNumber" class="form-label">Fight Number:</label>
                <input type="text" id="fightNumber" v-model="fightNumber" class="form-control" required
                    placeholder="Enter fight number" />
            </div>

            <div class="mb-3">
                <label for="win" class="form-label">Wins:</label>
                <input type="text" id="win" v-model="win" class="form-control" required
                    placeholder="Enter number of wins" />
            </div>

            <div class="mb-3">
                <label for="losses" class="form-label">Losses:</label>
                <input type="text" id="losses" v-model="losses" class="form-control" required
                    placeholder="Enter number of losses" />
            </div>

            <div class="mb-3">
                <label for="kos" class="form-label">Knockouts (KOs):</label>
                <input type="text" id="kos" v-model="kos" class="form-control" required
                    placeholder="Enter number of knockouts" />
            </div>

            <div class="mb-3">
                <label for="gymNumber" class="form-label">Gym Number:</label>
                <input type="text" id="gymNumber" v-model="gymNumber" class="form-control" required
                    placeholder="Enter gym number" />
            </div>

            <div class="mb-3">
                <label for="title" class="form-label">Title:</label>
                <input type="text" id="title" v-model="title" class="form-control" required placeholder="Enter title" />
            </div>

            <div class="mb-3">
                <label for="imageLink" class="form-label">Image Link:</label>
                <input type="text" id="imageLink" v-model="imageLink" class="form-control" required
                    placeholder="Enter image link" />
            </div>

            <div class="mb-3">
                <label for="trainerName" class="form-label">Trainer Name:</label>
                <input type="text" id="trainerName" v-model="trainerName" class="form-control" required
                    placeholder="Enter trainer name" />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" id="password" v-model="password" class="form-control" required
                    placeholder="Enter password" />
            </div>

            <button type="submit" class="btn btn-primary">Add Boxer</button>
        </form>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';



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
const password = ref('');

const addBoxer = async () => {
    const newBoxer = {
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
        password: password.value,
    };

    await fetch('/api/boxers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBoxer),
    });

    window.alert('Boxer added successfully.');
    router.push('/boxerlist');

};
</script>