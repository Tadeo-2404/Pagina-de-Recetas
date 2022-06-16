<template>
   <div class="recetaShow-item container-fluid p-4">
      <div class="recetaShow-item__wrapper">
        <div class="recetaShow-item__img-wrapper container-fluid">
            <img class="img-reponsive w-100" :alt="receta.id" :src="'/assets/recetas/' + receta.imagen">
         </div>
         <div class="recetaShow-item__title-wrapper p-3">
            <h2 class="text-center recetaShow-item__title">{{receta.nombre}}</h2>
         </div>
        <div class="recetaShow-item__description-wrapper">
            <p class="text-center recetaShow-item__description">{{receta.descripcion.cuerpo}}</p>
         </div>
         <div class="recetaShow-item__ingredients-wrapper">
            <ul class="text-center recetaShow-item__ingredients list-group list-group-flush">
                <li class="list-group-item bg-danger"><h3 class="text-center text-white">Ingredientes</h3></li>
                <li v-for="ingrediente in receta.Ingredientes" :key="ingrediente" class="list-group-item list-group-item-secondary">{{ingrediente}}</li>
            </ul>
         </div>

        <div class="recetaShow-item__steps-wrapper mt-4">
            <li class="list-group-item bg-danger"><h3 class="text-center text-white">Pasos a Seguir</h3></li>
            <ul class="text-center recetaShow-item__steps list-group list-group-numbered">
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
      const ArregloRecetas = [];
      JSONData.recetas.map(tipo => {
         tipo.recetas.map(receta => ArregloRecetas.push(receta))
      });

      const receta = ArregloRecetas.find(receta => receta.nombre === this.$route.params.nombre);
      return receta;
    },
  },
};
</script>
