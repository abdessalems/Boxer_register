<template>
    <div>
      <h2>updateBoxer component</h2>
      <div class="boxer-cards">
        <div v-for="boxer in boxers" :key="boxer.id" class="boxer-card">
          <!-- Existing code for displaying boxer details -->
  
          <router-link :to="{ name: 'UpdateBoxer', params: { id: boxer.id } }">
            <button class="btn btn-primary">Update</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const boxers = ref([]);
  
  const fetchBoxers = async () => {
    // Existing code for fetching boxers
  };
  
  onMounted(() => {
    fetchBoxers();
  });
  </script>
  
  <style scoped>
  </style>
  