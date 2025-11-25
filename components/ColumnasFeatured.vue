<script>
export default {
  data: () => ({
    columnas: [],
    fetchError: null,
  }),
  async fetch() {
    try {
      this.columnas = await this.$content('columnas')
        .only(['title', 'slug'])
        .sortBy('date', 'desc')
        .limit(4)
        .fetch()
    } catch (error) {
      this.fetchError = 'No pudimos cargar las columnas destacadas.'
      if (process.dev) {
        // eslint-disable-next-line no-console
        console.error('ColumnasFeatured fetch error:', error)
      }
    }
  },
}
</script>

<template>
  <div>
    <p v-if="fetchError" class="text-sm text-red-600">{{ fetchError }}</p>
    <li v-else v-for="col of columnas" :key="col.slug">
      <NuxtLink :to="col.slug">{{ col.title }}</NuxtLink>
    </li>
  </div>
</template>


