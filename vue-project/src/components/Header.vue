<!-- Header.vue -->

<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <router-link to="/boxerlist" class="navbar-brand">List of Boxers</router-link>
          <ul class="navbar-nav ml-auto">
            <!-- Use ml-auto to align items to the right -->
            <li class="nav-item">
              <a class="nav-link" href="#">Hidden Link 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hidden Link 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hidden Link 3</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-2">
            <!-- Add some space between the links and the logout button -->
            <li class="nav-item">
              <button @click="logout" class="btn btn-outline-secondary">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
    methods: {
      logout() {
        console.log("Logout clicked");
      },
    },
  };
  </script>
  