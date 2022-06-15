<template>
  <div class="container-fluid receta-destacada">
    <div class="container-fluid receta-destacada__wrapper p-2">
      <h2 class="text-center">Recetas Destacadas</h2>
      <div
        class="
          row
          recetas-destacadas__items
          container-fluid
          justify-content-center
          mt-4">

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