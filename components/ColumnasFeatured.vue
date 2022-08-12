<script>
export default {
  data: () => ({
    columnas: []
  }),
  async fetch() {
    this.posts = await this.$content('columnas')
  },
}
</script>

<template>
  <div>
    <li v-for="col of columnas" :key="col.slug">
      <NuxtLink :to="col.slug">{{ col.title }}</NuxtLink>
    </li>
  </div>
</template>


