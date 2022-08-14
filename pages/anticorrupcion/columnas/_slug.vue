<template>
  <article>
    <header></header>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const columnas = await $content("columnas").fetch();

    return {
      columnas,
    };
  },
}
</script>
