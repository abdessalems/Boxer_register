import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import BoxerListView from '../views/BoxerList.vue';
import HeaderView from "../views/Header.vue";
import AddBoxer from "../views/AddBoxer.vue"; 
import UpdateBoxerPage from "../views/UpdateBoxer.vue"; 
import UpdateView from "../views/UpdateView.vue"; 



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/header",
      name: "header",
      component: HeaderView,
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
      path: "/update/:id",
      name: "update",
      component: UpdateView,
    },
    
    {
      path: "/boxerlist",
      name: "BoxerList",
      component: BoxerListView,
    },
    {
      path: "/addboxer",
      name: "AddBoxer",
      component: AddBoxer,
    },
  
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    
    {
      path: "/updateboxer/:id",
      name: "UpdateBoxerPage",
      component: UpdateBoxerPage,
    },
    
  ]
})

export default router
