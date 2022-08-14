<template>
  <div>
    <h1>Publicaciones</h1>
  <div>
      <li v-for="evento of eventos" :key="evento.slug">
          <NuxtLink :to="'publicaciones/'+evento.slug">{{ evento.title }}</NuxtLink>
          <img :src="evento.img" alt="">
          <p>{{evento.body.children[1].children[0].value}}</p>
        </li>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const eventos = await $content("publicaciones").fetch();

    return {
      eventos,
    };
  },
}
</script>
