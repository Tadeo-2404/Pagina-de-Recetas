<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark navbar__home shadow"
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
            <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Recetas</a>
            <ul class="dropdown-menu text-center">
              <li><router-link class="dropdown-item" to="/recetas/postres">Postres</router-link></li>
              <li><router-link class="dropdown-item" to="/recetas/mariscos">Mariscos</router-link></li>
              <li><router-link class="dropdown-item" to="/recetas/desayunos">Desayuno</router-link></li>
              <li><router-link class="dropdown-item" to="/recetas/ensaladas">Ensaladas</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  data: function () {
    return {};
  },
};
</script>

<style>
</style>