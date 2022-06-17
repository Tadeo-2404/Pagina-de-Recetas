<template>
  <div class="go-back container-fluid text-left fixed-bottom d-flex">
     <span @click="$router.back()"><i class="bi bi-arrow-left-circle-fill text-danger"></i></span>
  </div>
</template>

<script>
export default {
   name: "TheGoBackBtn"
}
</script>

<style>

</style>