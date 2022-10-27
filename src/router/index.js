import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/index.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


// {
//   path: "/tno",
//   name: "TNO",
//   component: () => import("../views/TNO.vue"),
//   children: [
//     {
//       path: "",
//       name: "TNO Home",
//       component: () => import("../views/TNO/Home.vue"),
//     },
//     {
//       path: "about",
//       name: "TNO About",
//       component: () => import("../views/TNO/About.vue"),
//     },
//     {
//       path: "contact",
//       name: "TNO Contact",
//       component: () => import("../views/TNO/Contact.vue"),
//     },
//     {
//       path: "games",
//       name: "TNO Games",
//       component: () => import("../views/TNO/Games.vue"),
//     },
//     {
//       path: "incubation",
//       name: "Incubation",
//       component: () => import("../views/TNO/Incubation.vue"),
//     },
//     {
//       path: "*",
//       component: Home,
//     },
//   ],
// },