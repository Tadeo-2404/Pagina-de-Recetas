import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home-Page.vue';
import JSONData from '@/db/db.json';

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
    component: () => import('@/views/ViewsTemplate.vue'),
    beforeEnter(to) {
      const ArregloRecetas = [];
      JSONData.recetas.map(tipo => {
         tipo.recetas.map(receta => ArregloRecetas.push(receta))
      });

      const receta = ArregloRecetas.find(receta => receta.nombre === to.params.nombre);
      if(receta == undefined) {
        return {
          name: "NotFound"
        }
      }
    },
  },
  {
    path: '/recetas/:grupo/:nombre',
    name: 'receta.grupo',
    component: () => import('@/views/RecetaShow.vue'),
    beforeEnter(to) {
      const ArregloRecetas = [];
      JSONData.recetas.map(tipo => {
         tipo.recetas.map(receta => ArregloRecetas.push(receta))
      });

      const receta = ArregloRecetas.find(receta => receta.nombre === to.params.nombre);
      if(receta == undefined) {
        return {
          name: "NotFound"
        }
      }
    },
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
