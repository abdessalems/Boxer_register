<!-- Navbar.vue -->
<template>
    <nav>
      <div class="logo-container">
        <img class="logo" src="@/assets/logo.png" alt="Logo" />
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/boxerlist" class="nav-link">Boxer List</router-link>
        <router-link to="/addboxer" class="nav-link">Add Boxer</router-link>

      </div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Center items vertically */
  }
  
  .logo-container {
    margin-right: 20px; /* Adjust spacing between logo and links */
  }
  
  .logo {
    width: 50px; /* Adjust logo size as needed */
  }
  
  .nav-links {
    display: flex;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    margin-right: 15px; /* Adjust margin between links */
  }
  
  .nav-link:last-child {
    margin-right: 0; 
  }
  
  /* Active link style */
  .nav-link.router-link-exact-active {
    color: #42b983; 
  }
  </style>
  