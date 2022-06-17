<template>
  <div class="container-fluid p-4">
    <h2 class="text-center">Tu Busqueda: {{valor}}</h2>
    <div class="row g-0 container-fluid justify-content-center mt-4">
        <p class="text-center h3">Se han encontrado: {{arregloRecetas.length}} resultados</p>
        <div
          class="row col-lg-3 col-md-6 col-sm-12 container-fluid mt-4"
          v-for="receta in arregloRecetas"
          :key="receta.id">
          <div class="receta-destacada__img-wrapper">
            <img class="img-reponsive w-100 h-100" :alt="receta.id" :src="'/assets/recetas/' + receta.imagen">
          </div>

          <div class="container-fluid">
            <h2 class="text-center p-2">
              {{ receta.nombre }}
            </h2>
          </div>
          <div class="d-flex flex-column align-items-center">
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
export default {
  name: "TheBusqueda",
  props: {
    valor: String,
    arregloRecetas: Array
  },
  methods: {
    capturarArreglo() {
        return this.arregloRecetas
    }
  }
};
</script>