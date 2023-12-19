<template>
  <nav>
    <img class="logo" src="@/assets/logo.png" alt="Logo" />
  </nav>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
.logo {
  width: 200px;
  margin-bottom: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
