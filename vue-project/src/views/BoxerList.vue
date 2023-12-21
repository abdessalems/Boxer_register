<template>
  <div>
    <h1> liste of boxers</h1>
    <BoxerList />
  </div>
</template>

<script>
import BoxerList from "@/components/BoxerList.vue";

export default {
  name: "BoxerListView",
  components: {
    BoxerList,
  },
};
</script>

<style scoped>
/* Add any scoped styles for this component */
</style>
