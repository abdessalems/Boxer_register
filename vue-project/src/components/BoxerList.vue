<template>
  <div>
    <div class="boxer-cards">
      <router-link v-for="boxer in boxers" :to="{ name: 'update', params: { id: boxer.id } }" :key="boxer.id"
        class="boxer-card">
        <img v-if="boxer.image_link" :src="boxer.image_link" class="boxer-image" alt="Boxer Image" />
        <div class="boxer-info">
          <h5 class="boxer-name">{{ boxer.first_name }} {{ boxer.last_name }}</h5>
          <div class="boxer-details">
            <p v-if="boxer.email"><strong>Email:</strong> {{ boxer.email }}</p>
            <p v-if="boxer.height"><strong>Height:</strong> {{ boxer.height }}</p>
            <p v-if="boxer.weight"><strong>Weight:</strong> {{ boxer.weight }}</p>
            <p v-if="boxer.fight_number"><strong>Fight Number:</strong> {{ boxer.fight_number }}</p>
            <p v-if="boxer.win"><strong>Wins:</strong> {{ boxer.win }}</p>
            <p v-if="boxer.losses"><strong>Losses:</strong> {{ boxer.losses }}</p>
            <p v-if="boxer.kos"><strong>KOs:</strong> {{ boxer.kos }}</p>
            <p v-if="boxer.gym_number"><strong>Gym Number:</strong> {{ boxer.gym_number }}</p>
            <p v-if="boxer.title"><strong>Title:</strong> {{ boxer.title }}</p>
            <p v-if="boxer.trainer_name"><strong>Trainer Name:</strong> {{ boxer.trainer_name }}</p>

          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const boxers = ref([]);

const fetchBoxers = async () => {
  try {
    const response = await fetch('/api/boxers');
    if (!response.ok) {
      throw new Error('Failed to fetch boxers');
    }

    const data = await response.json();
    boxers.value = data;
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(() => {
  fetchBoxers();
});
</script>
  
<style scoped></style>
  
<style scoped>
.boxer-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.boxer-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  position: relative;
  /* min-height: 400px; Remove this line */
}

.boxer-card:hover {
  transform: scale(1.05);
}

.boxer-image {
  height: auto;
  width: 100%;
  /* Ensure the image takes the full width of the card */
}

.boxer-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.boxer-name {
  margin: 0 0 10px;
  font-size: 1.2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.boxer-details {
  flex-grow: 1;
  /* Expand to fill available space */
}

.boxer-detail {
  margin: 5px 0;
}
</style>
