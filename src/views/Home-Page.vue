<template>
  <div class="home-page">
    <Hero-section
      @generarHTML="generarHTMLBusqueda"
      @actualizarArreglo="actualizarArreglo"
    />
    <The-busquda v-if="valor" :valor="valor" :arregloRecetas="arregloRecetas" />
    <The-secciones />
    <Recetas-destacadas-section />
    <The-footer />
  </div>
</template>

<script>
import HeroSection from "@/components/TheHero.vue";
import RecetasDestacadasSection from "@/components/TheDestacados.vue";
import TheSecciones from "@/components/TheSecciones.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheBusquda from "@/components/TheBusquda.vue";
export default {
  components: {
    HeroSection,
    RecetasDestacadasSection,
    TheSecciones,
    TheFooter,
    TheBusquda,
  },
  data() {
    return {
      busqueda: false,
      valor: undefined,
      arregloRecetas: null,
    };
  },
  methods: {
    generarHTMLBusqueda(valor, busqueda) {
      this.busqueda = valor;
      this.valor = busqueda;
    },
    actualizarArreglo(arreglo) {
      this.arregloRecetas = [];
      this.arregloRecetas = arreglo;
    },
  },
};
</script>