<template>
   <div class="desayuno-item container-fluid p-4">
      <div class="desayuno-item__wrapper">
        <div class="desayuno-item__img-wrapper container-fluid">
            <img class="img-reponsive w-100" :alt="receta.id" :src="'/assets/recetas/' + receta.imagen">
         </div>
         <div class="desayuno-item__title-wrapper p-3">
            <h2 class="text-center desayuno-item__title">{{receta.nombre}}</h2>
         </div>
        <div class="desayuno-item__description-wrapper">
            <p class="text-center desayuno-item__description">{{receta.descripcion.cuerpo}}</p>
         </div>
         <div class="desayuno-item__ingredients-wrapper">
            <ul class="text-center desayuno-item__ingredients list-group list-group-flush">
                <li class="list-group-item bg-danger"><h3 class="text-center text-white">Ingredientes</h3></li>
                <li v-for="ingrediente in receta.Ingredientes" :key="ingrediente" class="list-group-item list-group-item-secondary">{{ingrediente}}</li>
            </ul>
         </div>

        <div class="desayuno-item__steps-wrapper mt-4">
            <li class="list-group-item bg-danger"><h3 class="text-center text-white">Pasos a Seguir</h3></li>
            <ul class="text-center desayuno-item__steps list-group list-group-numbered">
                <li v-for="ingrediente in receta.pasos" :key="ingrediente" class="list-group-item list-group-item-ligth">{{ingrediente}}</li>
            </ul>
         </div>

      </div>
   </div>
</template>

<script>
import JSONData from "@/db/db.json";
export default {
  computed: {
    receta() {
      return JSONData.recetas.desayuno.recetas.find(receta => receta.nombre === this.$route.params.nombre)
    },
  },
};
</script>
