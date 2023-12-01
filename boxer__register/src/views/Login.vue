<!-- Login.vue -->
<template>
  <div>
    <h1>Login Page</h1>
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/Login/Login.vue";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>
