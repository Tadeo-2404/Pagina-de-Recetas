<template>
  <div class="viewTemplate-item container-fluid">
     <h2 class="text-center">{{tipo.nombre}}</h2>
     <p class="text-center">{{tipo.descripcion}}</p>

     <div class="viewTemplate-item__wrapper row g-0 container-fluid justify-content-center mt-4">
        <div
          class="viewTemplate-item__receta row col-lg-3 col-md-6 col-sm-12 col-lg-6 container-fluid mt-4 mb-4"
          v-for="receta in tipo.recetas"
          :key="receta.id">
          <div class="container-fluid">
            <img class="img-reponsive w-100" :alt="receta.id" :src="'/assets/recetas/' + receta.imagen">
          </div>

          <div class="">
            <h2 class=" text-center p-2">
              {{ receta.nombre }}
            </h2>
          </div>
          <div class=" d-flex flex-column align-items-center">
            <p class="text-center">
              {{ receta.descripcion.cuerpo }}
            </p>
          </div>
          <div class="text-center">
            <router-link class="btn btn-danger" :to="'/recetas/' + receta.grupo + '/' + receta.nombre">Ver Receta</router-link>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import JSONData from "@/db/db.json";
export default {
  name: "ViewsTemplate",
  computed: {
    tipo() {
       const tipo = JSONData.recetas.find(receta => receta.nombre === this.$route.params.tipo)
       return tipo
    }
  }
};
</script>
