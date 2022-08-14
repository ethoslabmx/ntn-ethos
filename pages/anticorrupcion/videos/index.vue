<template>
  <div>
    <h1>Videos</h1>
  <div>
      <li v-for="evento of eventos" :key="evento.slug">
          <h2><a :href="evento.video">{{ evento.title }}</a></h2>
          <p>{{evento.body.children[1].children[0].value}}</p>
          <lite-youtube
            :videoid="evento.video.slice(evento.video.indexOf('v=')+2)"
            :playlabel="evento.title"
            params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
          />
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
