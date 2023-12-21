<!-- Header.vue -->

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <router-link to="/boxerlist" class="navbar-brand">List of Boxers</router-link>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="navbar-brand" href="#">Hidden brand</a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="#">Hidden brand</a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="#">Hidden brand</a>
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
  



  