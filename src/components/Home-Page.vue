<template>
  <Hero-section/>
  <Recetas-destacadas-section/>
</template>

<script>
import HeroSection from '../components/Hero-Section.vue';
import RecetasDestacadasSection from './Recetas-Destacadas-Section.vue';
export default {
    name: "Home-Page",
    components: {HeroSection, RecetasDestacadasSection}
}
</script>

<style>

</style>