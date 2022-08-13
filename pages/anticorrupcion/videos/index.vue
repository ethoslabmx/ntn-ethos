<template>
  <div>
    <h1>Videos</h1>
  <div>
      <li v-for="evento of eventos" :key="evento.slug">
          <NuxtLink :to="evento.slug">{{ evento.title }}</NuxtLink>

          <p>{{evento.body.children[1].children[0].value}}</p>
        </li>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const eventos = await $content("videos").fetch();

    return {
      eventos,
    };
  },
}
</script>
