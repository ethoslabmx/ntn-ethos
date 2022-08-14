<template>
  <div class="columnas">
    <h1>Columnas de opinion</h1>
    <div>
      <li v-for="col of columnas" :key="col.slug">
          <NuxtLink :to="'noticias/'+col.slug">{{ col.title }}</NuxtLink>
          <img :src="col.img" alt="">
          <p>{{col.body.children[1].children[0].value}}</p>
        </li>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const columnas = await $content("noticias").fetch();

    return {
      columnas,
    };
  },
}
</script>
