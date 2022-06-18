import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home-Page.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('@/views/Contacto-Page.vue')
  },
  {
    path: '/recetas/:tipo',
    name: 'recetas',
    component: () => import('@/views/ViewsTemplate.vue')
  },
  {
    path: '/recetas/:grupo/:nombre',
    name: 'receta.grupo',
    component: () => import('@/views/RecetaShow.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
