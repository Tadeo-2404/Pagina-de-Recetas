<template>
  <Hero-section/>
  <Recetas-destacadas-section/>
</template>

<script>
import HeroSection from '@/components/TheHero.vue';
import RecetasDestacadasSection from '@/components/TheDestacados.vue';
import JSONData from '@/db/db.json';
export default {
    components: {HeroSection, RecetasDestacadasSection},
    data() {
        return {
            recetas: JSONData.recetas.postres,
        }
    }
}
</script>