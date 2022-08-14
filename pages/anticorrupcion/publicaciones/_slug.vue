<template>
  <div>
    <h1>{{post.title}}</h1>
    <div class="col">
      <p>Fecha de publicación: {{post.date}}</p>
      <p>Por: {{post.autor}} <span v-if="post.medio">Para: <a :href="post.link">{{post.medio}}</a></span></p>
      <nuxt-content :document="post" />
    </div>
    <div class="col">
      <img :src="post.img" alt="">
      <div class="btn">Descargar</div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    console.log(params)
    try {
      post = await $content("publicaciones", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>
