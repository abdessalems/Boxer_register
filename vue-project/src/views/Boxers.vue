<!-- Login.vue -->
<template>
    <div>
      <h1></h1>
      <BoxerList />
    </div>
  </template>
  
  <script>
  // eslint-disable-next-line
    import BoxerList from "@/components/Boxers/Boxers.vue";
  export default {
    name: "BoxerList",
    components: {
        BoxerList,
    },
  };
  </script>  