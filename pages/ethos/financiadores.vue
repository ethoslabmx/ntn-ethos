<template>
  <div>
    <h1>Financiadores</h1>
    <div class="slider">
      <li v-for="f in financiadores" :key="f.nombre">
        <a :href="f.link">
          <img :src="f.logo" alt="">
        </a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const financiadores = await $content("financiadores").fetch();

    return {
      financiadores,
    };
  },
}
</script>
