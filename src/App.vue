<template>
   <Nav-bar/>
   <The-go-back-btn/>
   <div class="container__app">
   <router-view v-slot="{Component}">
      <transition name="scale" mode="out-in">
        <component :is="Component" :key="$router.path"/>
      </transition>
   </router-view>
   </div>
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