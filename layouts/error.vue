<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">No encontramos la página</h1>
    <h1 v-else>Ocurrió un error</h1>
    <NuxtLink to="/">INICIO</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>
