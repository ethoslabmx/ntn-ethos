<template>
  <div class="columnas">
    <h1>Columnas de opinion</h1>
    <div>
      <li v-for="col of columnas" :key="col.slug">
          <NuxtLink :to="'columnas/'+col.slug">{{ col.title }}</NuxtLink>
          <img :src="col.img" alt="">
          <p>{{col.extracto}}</p>
        </li>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const columnas = await $content("columnas").where({category:"anticorrupcion"}).fetch();

    return {
      columnas,
    };
  },
}
</script>
