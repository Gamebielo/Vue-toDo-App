<template>
  <div class id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <!-- Router link funciona como a tag <a> to html -->
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
          <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logo VueJs">
        </section>
        <section class="navbar-section">
          <a href="https://github.com/gamebielo" class="btn btn-link">GitHub</a>
          <a href="https://www.instagram.com/gamebielo/" class="btn btn-link">Instagram</a>
        </section>
      </header>
      <router-view class="pt-2" /> <!-- Renderizando os componentes com o Router -->
    </div>
  </div>
</template>

<style scoped>
.img-logo {
  max-width: 100px;
}
</style>