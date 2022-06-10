<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark navbar__home shadow fixed-top"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto text-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Contacto</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/">Recetas</router-link>
            <ul class="dropdown-menu text-center">
              <li><router-link class="dropdown-item" to="/">Postres</router-link></li>
              <li><router-link class="dropdown-item" to="/">Mariscos</router-link></li>
              <li><router-link class="dropdown-item" to="/">Desayuno</router-link></li>
              <li><router-link class="dropdown-item" to="/">Comida</router-link></li>
              <li><router-link class="dropdown-item" to="/">Cena</router-link></li>
              <li><router-link class="dropdown-item" to="/">Ensaladas</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav-bar",
  data: function () {
    return {};
  },
};
</script>

<style>
</style>