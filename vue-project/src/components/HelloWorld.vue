<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from 'vue';

const msg = ref("Hello from HomeView!");

</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <HelloWorld />
  </div>
</template>
