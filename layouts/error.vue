<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404">No encontramos la página</h1>
    <h1 v-else>Ocurrió un error</h1>
    <h2>Ir al
      <NuxtLink to="/">INICIO</NuxtLink>
    </h2>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>
<style lang="scss" scoped>
.error-container {
  text-align: center;
  margin-top: 100px;

  h1{
    font-size: 50px;
    margin-bottom: 20px;
  }
}
</style>
