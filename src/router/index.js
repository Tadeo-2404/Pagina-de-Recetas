import { createRouter, createWebHashHistory } from 'vue-router';
import HeroSection from '../components/Hero-Section.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HeroSection
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
