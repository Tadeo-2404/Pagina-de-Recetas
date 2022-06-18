<template>
  <div class="container-fluid not-found-page p-4 d-flex justify-content-center flex-column align-items-center">
    <img src="/assets/error-404.webp" class="image-responsive">
    <div class="not-found__body text-center d-flex justify-content-center flex-column">
        <h2 class="text-center">Lo Sentimos!! No se ha encontrado la pagina</h2>
        <router-link to="/" class="btn btn-success btn-block">Regresar</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
