<template>
  <div>
    <h1>{{post.title}}</h1>
    <img :src="post.img" alt="">
    <p>Fecha de publicación: {{post.date}}</p>
    <p>Por: {{post.autor}} <span v-if="post.medio">Para: <a :href="post.link">{{post.medio}}</a></span></p>
    <nuxt-content :document="post" />
    <div class="relacionadas">
      <h2>Columnas relacionadas</h2>
      <div class="relacionadas">
        <li v-for="col of columnas" :key="col.slug">
            <NuxtLink :to="'columnas/'+col.slug">{{ col.title }}</NuxtLink>
            <img :src="col.img" alt="">
            <p>{{col.body.children[1].children[0].value}}</p>
          </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post,columnas;
    console.log(params)
    try {
      columnas = await $content("columnas").where({category:"anticorrupcion"}).limit(3).fetch();
      post = await $content("columnas", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
      columnas
    };
  },
};
</script>
