<!-- Login.vue -->
<template>
  <div>
    <h1></h1>
    <LoginForm />
  </div>
</template>

<script>
// eslint-disable-next-line
  import LoginForm from "@/components/Login/Login.vue";
export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>
