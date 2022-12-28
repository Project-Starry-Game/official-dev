import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/incubation",
      name: "Incubation",
      component: HomePage,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

export default router;
