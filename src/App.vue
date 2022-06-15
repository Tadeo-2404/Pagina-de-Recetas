<template>
   <Nav-bar/>
   <router-view/>
</template>

<script>
import NavBar from './components/TheNavbar.vue'

export default {
  components: {NavBar },
}
</script>

<style lang="scss">
   @import './scss/app';
</style>