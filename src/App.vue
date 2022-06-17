<template>
   <Nav-bar/>
   <The-go-back-btn/>
   <router-view/>
</template>

<script>
import TheGoBackBtn from './components/TheGoBackBtn.vue'
import NavBar from './components/TheNavbar.vue'

export default {
  components: {NavBar, TheGoBackBtn },
}
</script>

<style lang="scss">
   @import './scss/app';
</style>