<template>
  <h1>{{receta.id}}</h1>
  <h2>{{receta.nombre}}</h2>
  <img :src="'/assets/recetas/' + receta.imagen">
  <p>{{receta.descripcion.cuerpo}}</p>
</template>

<script>
import JSONData from "@/db/db.json";
export default {
  computed: {
    receta() {
      return JSONData.recetas.desayuno.find(receta => receta.nombre === this.$route.params.nombre)
    },
  },
};
</script>
