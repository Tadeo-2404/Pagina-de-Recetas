<template>
  <Hero-section @generarHTML="generarHTMLBusqueda"/>
  <The-busquda v-if="valor" :valor="valor"/>
  <The-secciones/>
  <Recetas-destacadas-section/>
  <The-footer/>
</template>

<script>
import HeroSection from '@/components/TheHero.vue';
import RecetasDestacadasSection from '@/components/TheDestacados.vue';
import JSONData from '@/db/db.json';
import TheSecciones from '@/components/TheSecciones.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheBusquda from '@/components/TheBusquda.vue';
export default {
    components: {HeroSection, RecetasDestacadasSection, TheSecciones, TheFooter, TheBusquda},
    data() {
        return {
            recetas: JSONData.recetas.postres,
            busqueda: false,
            valor: undefined
        }
    },
    methods: {
        generarHTMLBusqueda(valor, busqueda) {
            this.busqueda = valor;
            this.valor = busqueda
        }
    }
}
</script>