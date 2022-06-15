<template>
  <div class="container-fluid receta-destacada">
    <div class="container-fluid receta-destacada__wrapper p-2">
      <h2 class="text-center">Recetas Destacadas</h2>
      <div class="row recetas-destacadas__items container-fluid justify-content-center mt-4">
        <div
          class="receta-destacada__container row col-lg-3 col-md-6 col-sm-12 container-fluid"
          v-for="receta in destacados"
          :key="receta.id">
          <div class="receta-destacada__img-wrapper">
            <img class="img-reponsive w-100 h-100" :alt="receta.id" :src="'/assets/recetas/' + receta.imagen">
          </div>

          <div class="receta-destacada__title-wrapper">
            <h2 class="receta-destacada__title text-center p-2">
              {{ receta.nombre }}
            </h2>
          </div>
          <div class="receta-destacada__description-wrapper d-flex flex-column align-items-center">
            <p class="receta-destacada__description text-center">
              {{ receta.descripcion.cuerpo }}
            </p>
          </div>
          <router-link class="btn btn-danger" :to="'/recetas/' + receta.grupo + '/' + receta.nombre">Ver Receta</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datos from "../db/db.json";
export default {
  name: "Recetas-Destacadas-Section",
  data: function () {

    const {
      recetas: { postres, ensaladas, mariscos, desayuno },
    } = datos;
  
    const destacados = [postres[0], ensaladas[0], mariscos[0], desayuno[0]];

    return {
      datos,
      destacados, 
    };
  },
};
</script>

<style>
</style>