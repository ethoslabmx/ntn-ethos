<template>
  <div>
    <div class="post_content py-28 bg-white">
      <div class="container  flex ">
        <div class="w-full lg:w-3/4 p-5">
          <h1 class="2xl:text-xl text-lg title">{{ post.title }}</h1>
          <p class="my-6 font-bold"> {{ new Date(post.date).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })  }}</p>
          <p class="my-6">Por: {{ post.autor }} <br/><span v-if="post.medio">Para: <a :href="post.link">{{ post.medio
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
    <div class="relacionadas bg-cyan py-20 text-white">
      <div class="container flex items-start flex-wrap xl:flex-nowrap">
        <div class="w-full xl:w-1/6"><h2 class="font md:text-lg text-sm mb-3 xl:mb-0">Columnas relacionadas</h2></div>
       <div class="w-full xl:w-5/6">
         <div class="relacionadas flex flex-wrap xl:flex-nowrap">
          <li v-for="col of columnas" :key="col.slug" class="px-8 w-full xl:w-1/3">
            <img :src="col.img" alt="" class="mb-3 h-auto w-full">
            <NuxtLink :to=" col.slug" class="my-3 md:text-lg text-sm block">{{ col.title }}</NuxtLink>
            <!--<p class="text-white mb-8 xl:mb-0">{{ col.extracto }}</p>-->
          </li>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post, columnas;
    console.log(params)
    try {
      columnas = await $content("columnas")
        .where({ category: "anticorrupcion" })
        .limit(3)
        .fetch();
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
