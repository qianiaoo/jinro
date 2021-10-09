import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Setting from "../views/Setting";
import JinroNormal from "../views/JinroNormal";
import Rooms from "@/views/Rooms";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/jinronormal',
    name: 'JinroNormal',
    component: JinroNormal
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
