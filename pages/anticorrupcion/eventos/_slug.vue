<template>
  <div>
    <div class="post_content py-28 bg-white">
      <div class="container  flex ">
        <div class="w-full lg:w-3/4 p-5">
          <h1 class="2xl:text-xl text-lg title">{{ post.title }}</h1>
          <p class="my-6 font-bold">Fecha de publicación: {{ post.date }}</p>
          <p class="my-6">Por: {{ post.autor }} <span v-if="post.medio">Para: <a :href="post.link">{{ post.medio
          }}</a></span>
          </p>
        </div>
      </div>
      <div class="flex container  flex-wrap xl:flex-nowrap xl:flex-row-reverse">
        <div class="w-full xl:w-1/4 px-5">
          <img :src="post.img" alt="" class="shadow-xl">
        </div>
        <div class="w-full xl:w-3/4 p-5">

          <nuxt-content :document="post" />

        </div>

      </div>
    </div>
    <!-- <h1>{{post.title}}</h1>
    <img :src="post.img" alt="">
    <p>Fecha de publicación: {{post.date}}</p>
    <p>Por: {{post.autor}} </p>
    <nuxt-content :document="post" /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    console.log(params)
    try {
      post = await $content("eventos", params.slug).fetch();
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
<style lang="scss">
.nuxt-content img{
  margin: 2rem 0;
}
</style>
