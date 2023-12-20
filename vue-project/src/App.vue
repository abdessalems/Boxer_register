<template>
  <div id="app">
    <nav class="logo-container">
      <img class="logo" src="@/assets/logo.png" alt="Logo" />
    </nav>
    <nav class="nav-links">
      <router-link to="/" class="nav-link">Home</router-link> |
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo-container {
  padding: 30px;
  margin-bottom: 20px;
}

.logo {
  width: 200px;
  margin-bottom: 10px;
}

.nav-links {
  padding: 10px;
}

.nav-link {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 5px;
}

.nav-link.router-link-exact-active {
  color: #42b983;
}
</style>
