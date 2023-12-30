<template>
  <div class="container mt-5">
    <div class="search-filter">
      <div class="mb-3">
        <input v-model="searchTerm" placeholder="Search Boxers" class="form-control search-input" />
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <router-link v-for="boxer in filteredBoxers" :to="{ name: 'update', params: { id: boxer.id } }" :key="boxer.id"
        class="col">
        <div class="card h-100">
          <img v-if="boxer.image_link" :src="boxer.image_link" class="card-img-top" alt="Boxer Image" />
          <div class="card-body">
            <h5 class="card-title">{{ boxer.first_name }} {{ boxer.last_name }}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Email:</strong> {{ boxer.email }}</li>
              <li class="list-group-item"><strong>Height:</strong> {{ boxer.height }}</li>
              <li class="list-group-item"><strong>Weight:</strong> {{ boxer.weight }}</li>
              <li class="list-group-item"><strong>Fight Number:</strong> {{ boxer.fight_number }}</li>
              <li class="list-group-item"><strong>Wins:</strong> {{ boxer.win }}</li>
              <li class="list-group-item"><strong>Losses:</strong> {{ boxer.losses }}</li>
              <li class="list-group-item"><strong>KOs:</strong> {{ boxer.kos }}</li>
              <li class="list-group-item"><strong>Gym Number:</strong> {{ boxer.gym_number }}</li>
              <li class="list-group-item"><strong>Title:</strong> {{ boxer.title }}</li>
              <li class="list-group-item"><strong>Trainer Name:</strong> {{ boxer.trainer_name }}</li>
            </ul>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const boxers = ref([]);
const searchTerm = ref('');
const filteredBoxers = ref([]);

const fetchBoxers = async () => {
  try {
    const response = await fetch('/api/boxers');
    if (!response.ok) {
      throw new Error('Failed to fetch boxers');
    }

    const data = await response.json();
    boxers.value = data.map((boxer) => ({
      ...boxer,
      win: Number(boxer.win),
      fight_number: Number(boxer.fight_number),
    }));
    // Initialize filteredBoxers with all boxers
    filteredBoxers.value = [...boxers.value];
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(() => {
  fetchBoxers();
});

// Watch for changes in the search term
watch(searchTerm, () => {
  filterBoxers();
});

// Computed property for filtering boxers
const filterBoxers = () => {
  filteredBoxers.value = boxers.value.filter((boxer) =>
    boxer.first_name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    boxer.last_name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
};

// Computed property for filtering by wins
const filterByWins = () => {
  filteredBoxers.value = boxers.value.filter((boxer) => boxer.win > 0);
};

// Computed property for filtering by number of fights
const filterByFights = () => {
  filteredBoxers.value = boxers.value.filter((boxer) => boxer.fight_number > 0);
};

// Clear filter and show all boxers
const clearFilter = () => {
  filteredBoxers.value = [...boxers.value];
};
</script>
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
  height: 100%;
  /* Set a fixed height for the cards */
}

.boxer-card:hover {
  transform: scale(1.05);
}

.boxer-image {
  height: 100%;
  /* Ensure the image takes the full height of the card */
  width: 100%;
  object-fit: cover;
  /* Maintain aspect ratio and cover the entire box */
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

/* Add the following styles for the missing part */
.boxer-details div {
  margin: 5px 0;
}
</style>

<style scoped>
  .search-filter {
    margin-bottom: 20px;
  }

  .search-input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
  }

  .filter-button {
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Add a transition for a smoother hover effect */
  }

  .filter-button:hover {
    background-color: #0056b3;
  }
</style>

