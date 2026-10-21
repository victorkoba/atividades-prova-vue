<script setup>
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.router-link-active {
  color: #42b883;
  font-weight: bold;
  text-decoration: underline;
  padding: 0.5rem;
}
</style>