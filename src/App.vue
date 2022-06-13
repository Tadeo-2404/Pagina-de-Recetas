<template>
   <Nav-bar/>
   <router-view />
</template>

<script>
import NavBar from './components/Nav-bar.vue'

export default {
  components: {NavBar },

}
</script>

<style lang="scss">
   @import './scss/app';
</style>