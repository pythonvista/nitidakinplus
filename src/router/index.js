import {
  createRouter,
  createWebHistory,
} from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes = [
  {
    alias: '/home',
    path:'/',
    component: HomeView,
    children:[
      {
        path: '',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '@/components/index.vue')
      }
    ]
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
