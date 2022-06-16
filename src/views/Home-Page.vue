<template>
  <Hero-section/>
  <The-secciones/>
  <Recetas-destacadas-section/>
</template>

<script>
import HeroSection from '@/components/TheHero.vue';
import RecetasDestacadasSection from '@/components/TheDestacados.vue';
import JSONData from '@/db/db.json';
import TheSecciones from '@/components/TheSecciones.vue';
export default {
    components: {HeroSection, RecetasDestacadasSection, TheSecciones},
    data() {
        return {
            recetas: JSONData.recetas.postres,
        }
    }
}
</script>