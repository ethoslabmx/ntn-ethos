<template>
  <div class="home">
  <JumbotronIndex />
  <div class="ejes">
    <div class="eje">
      <h2>Anticorrupción</h2>
    </div>
    <div class="eje">
      <h2>Finanzas Públicas</h2>
    </div>
    <div class="eje">
      <h2>Desarrollo Sostenible</h2>
    </div>
    <div class="eje">
      <h2>Ciudades del futuro</h2>
    </div>
    <div class="eje">
      <h2>Inclusión</h2>
    </div>
  </div>
  <div class="columnas">
    <h1>Columnas de opinion</h1>
    <ColumnasFeatured />
  </div>
  <div class="twitter">

  </div>
  </div>
</template>

<script>
import JumbotronIndex from '~/components/JumbotronIndex.vue';
import ColumnasFeatured from '~/components/ColumnasFeatured.vue';
export default { components: { JumbotronIndex, ColumnasFeatured } }
</script>
