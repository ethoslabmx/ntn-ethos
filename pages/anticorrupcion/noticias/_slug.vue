<template>
  <div>
    <div class="post_content py-28 bg-white">
      <div class="container xl:px-0 flex ">
        <div class="w-full lg:w-3/4 p-5 mx-auto">

          <h1 class="2xl:text-xl text-lg title my-4">{{ post.title }}</h1>
          <img :src="post.img" alt="" class="shadow-xl"></img>
          <p class="my-2">Fecha de publicación: {{ new Date(post.date).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
          <p class="my-2">Por: {{ post.autor }} <span v-if="post.medio">Para: <a :href="post.link">{{ post.medio
          }}</a></span>
          </p>
        </div>
      </div>
      <div class="flex container xl:px-0 flex-wrap xl:flex-nowrap xl:flex-row-reverse">
        <div class="w-full xl:w-3/4 p-5 mx-auto">

          <nuxt-content :document="post" />

        </div>

      </div>
    </div>
    <!-- <h1>{{post.title}}</h1>
    <img :src="post.img" alt="">
    <p>Fecha de publicación: {{post.date}}</p>
    <p>Por: {{post.autor}} <span v-if="post.medio">Para: <a :href="post.link">{{post.medio}}</a></span></p>
    <nuxt-content :document="post" /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    console.log(params)
    try {
      post = await $content("noticias", params.slug).fetch();
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

<style lang="sass">

</style>
