<template>
  <div class="secciones container-fluid g-0 row">
    <router-link class="secciones__seccion col-lg-6 col-md-6 row g-0 justify-content-center align-items-center" to="recetas/desayunos">
        <h2 class="text-center">Desayunos</h2>
    </router-link>
    <router-link class="secciones__seccion col-lg-6 col-md-6 row g-0 justify-content-center align-items-center" to="recetas/ensaladas">
        <h2 class="text-center">Ensaladas</h2>
    </router-link>
    <router-link class="secciones__seccion col-lg-6 col-md-6 row g-0 justify-content-center align-items-center" to="recetas/mariscos">
        <h2 class="text-center">Mariscos</h2>
    </router-link>
    <router-link class="secciones__seccion col-lg-6 col-md-6 row g-0 justify-content-center align-items-center" to="recetas/postres">
        <h2 class="text-center">Postres</h2>
    </router-link>
  </div>
</template>

<script>
export default {
   name: "TheSecciones",
   data : function() {

   }
}
</script>

<style>

</style>