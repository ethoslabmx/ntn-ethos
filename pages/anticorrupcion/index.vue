<template>
  <div>
    <h1>Anticorrupción</h1>
    <section></section>
    <section></section>
    <section>

      <h1>Columnas de opinion</h1>
      <li v-for="col of columnas" :key="col.slug">
        <NuxtLink :to="col.slug">{{ col.title }}</NuxtLink>
        <img :src="col.img" alt="">
        <p>{{col.body.children[1].children[0].value}}</p>
      </li>

    </section>
    <section></section>
    <section></section>
  </div>
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
