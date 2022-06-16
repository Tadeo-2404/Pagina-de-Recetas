<template>
  <Hero-section/>
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
export default {
    components: {HeroSection, RecetasDestacadasSection, TheSecciones, TheFooter},
    data() {
        return {
            recetas: JSONData.recetas.postres,
        }
    }
}
</script>