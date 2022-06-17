<template>
  <div class="form__wrapper container-fluid p-4">
    <form>
    <legend class="text-center">Rellena el Formulario y Nuestro Equipo se pondra en contacto contigo a la brevedad</legend>
    <div class="mb-3 mt-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control bg-light"
          id="nombre"
          placeholder="Ingresa tu Nombre"
          name="nombre"
          required
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="apellido" class="form-label">Apellido</label>
        <input
          type="text"
          class="form-control bg-light"
          id="apellido"
          placeholder="Ingresa tu apellido"
          name="apellido"
          required
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="telefono" class="form-label">Telefono</label>
        <input
          type="tel"
          class="form-control bg-light"
          id="telefono"
          placeholder="Ingresa tu Numero de Telefono"
          name="Telefono"
          required
          minlength="10"
          maxlength="10"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">Correo</label>
        <input
          type="email"
          class="form-control bg-light"
          id="email"
          placeholder="Ingresa tu correo"
          name="email"
          required
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea name="mensaje" id="mensaje" cols="30" rows="10" class="form-control bg-light"></textarea>
      </div>
      <div class="text-center w-100">
        <input type="submit" class="btn btn-success btn-lg btn-block" value="Contactanos">
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>