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
    path: '/recetas/desayunos',
    name: 'desayunos',
    component: () => import('@/views/Desayuno-Page.vue')
  },
  {
    path: '/recetas/postres',
    name: 'postres',
    component: () => import('@/views/Postres-Page.vue')
  },
  {
    path: '/recetas/mariscos',
    name: 'mariscos',
    component: () => import('@/views/Mariscos-Page.vue')
  },
  {
    path: '/recetas/ensaladas',
    name: 'ensaladas',
    component: () => import('@/views/Ensaladas-Page.vue')
  },
  {
    path: '/recetas/desayunos/:nombre',
    name: 'ensaladas',
    component: () => import('@/views/DesayunosShow.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
