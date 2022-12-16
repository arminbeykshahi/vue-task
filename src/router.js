import { createRouter, createWebHistory } from "vue-router";

import HomeItem from './components/HomeItem.vue'
import DetailItem from './components/DetailItem.vue'

const routes = [
    
  { path: '/', component: HomeItem },
  { path: '/country/:name', name: 'country', component: DetailItem },
    
  ]


const router = createRouter({

     history : createWebHistory(),
     routes
})

export default router