<template>
  <div class="hero container-fluid d-flex flex-column justify-content-center align-items-center">
    <div class="hero__wrapper container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="row mb-3">
                <h2 class="text-center">Las Mejores recetas para empezar bien tu dia</h2>
          </div>
          <div class="row">
            <form class="d-flex">
               <input class="form-control me-2" type="text" placeholder="Buscar recetas">
               <button class="btn btn-success" type="button">Buscar</button>
            </form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   name: "Hero-Section",
}
</script>

<style>

</style>