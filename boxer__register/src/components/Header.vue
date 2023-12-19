<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/logout" class="nav-link">Logout</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add-boxer" class="nav-link">Add Boxer</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list-of-boxers" class="nav-link">List of Boxers</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <!-- Additional router links -->
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">Signup</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
        <span class="navbar-text">
          <!-- Additional text or components can be added here if needed -->
        </span>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'HeaderView'
  }
  </script>
  
  <style lang="scss">
  /* Your styles here */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  .logo {
    width: 150px;
  }
  
  nav {
    padding: 30px;
  
    a {
      font-weight: bold;
      color: #2c3e50;
  
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  </style>
  