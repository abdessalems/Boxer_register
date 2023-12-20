import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Boxers from "../views/Boxers.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/listboxers",
      name: "Boxers",
      component: Boxers,
    },
  
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ]
})

export default router
