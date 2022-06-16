import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home-Page.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('@/views/Nosotros-Page.vue')
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
    path: '/recetas/desayunos/:nombre',
    name: 'receta.grupo',
    component: () => import('@/views/DesayunosShow.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
