<template>
  <div class="container-fluid receta-destacada">
    <div class="container-fluid receta-destacada__wrapper">
      <h2 class="text-center">Recetas Destacadas</h2>
      <div class="row recetas-destacadas__items grid">
        <div class="receta-destacada__container container-fluid row col">
          <div class="receta-destacada__img-wrapper">
              <img class="receta-destacada__img img-responsive w-100" src="../../public/assets/recetas/desayunos/desayuno-1.webp">
           </div>
           <div class="receta-destacada__title-wrapper">
              <h2 class="receta-destacada__title">Lentejas</h2>
           </div>
            <div class="receta-destacada__description-wrapper">
              <p class="receta-destacada__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis atque assumenda similique vitae incidunt iusto, eius omnis rerum nobis.</p>
           </div>
           <button class="btn btn-danger">Ver Receta</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import datos from '../db/db.json'
export default {
  name: "Recetas-Destacadas-Section",
  data: function () {

    const {recetas: {postres, ensaladas, mariscos, desayunos}} = datos;

    console.table(postres)
    console.table(ensaladas)
    console.table(mariscos)
    console.table(desayunos)

    return {
      datos
    }
  },
};
</script>

<style>
</style>