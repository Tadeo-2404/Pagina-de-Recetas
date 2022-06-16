<template>
  <div class="desayuno-item container-fluid p-4 mt-4">
    <h2>TEMPLATE DE VUE</h2>
    <h2>TEMPLATE DE VUE</h2>
    <h2>TEMPLATE DE VUE</h2>
    <h2>TEMPLATE DE VUE</h2>
    <h2>TEMPLATE DE VUE</h2>
    <h2>TEMPLATE DE VUE</h2>
  </div>
</template>

<script>
import JSONData from "@/db/db.json";
export default {
  name: "ViewsTemplate",
  data() {
    return JSONData.recetas.find(receta => receta.nombre === "postres")
  },
};
</script>
