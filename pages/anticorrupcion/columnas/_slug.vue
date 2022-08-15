<template>
  <div class="post_content py-28 bg-white">

    <div class="container xl:px-0 flex ">
      <div class="w-full lg:w-3/4 p-5">
        <h1 class="2xl:text-xl text-lg title">{{ post.title }}</h1>
        <p class="my-6 font-bold">Fecha de publicación: {{ post.date }}</p>
        <p class="my-6">Por: {{ post.autor }} <span v-if="post.medio">Para: <a :href="post.link">{{ post.medio
        }}</a></span>
        </p>
      </div>
    </div>
    <div class="flex container xl:px-0">
      <div class="w-full lg:w-3/4 p-5">

        <nuxt-content :document="post" />

        <div class="share my-20 content-end flex justify-end lg:items-center md:flex-wrap xl:flex-nowrap">

          <small class="title mb-3 xl:mb-0">COMPARTIR</small>
          <ul class="flex items-center ml-3 flex-nowrap">
            <li class="mr-3"><a href=""><img src="../../../assets/images/linkedin-gray.png" alt="" class="h-5 w-5"></a>
            </li>
            <li class="mr-3"><a href=""><img src="../../../assets/images/fbb-gray.png" alt="" class="h-5 w-5"></a>
            </li>
            <li class="mr-3"><a href=""><img src="../../../assets/images/twwt-gray.png" alt="" class="v"></a></li>
            <li class=""><a href=""><img src="../../../assets/images/letter.png" alt="" class="h-5 w-5"></a></li>
          </ul>
        </div>
      </div>
      <div class="w-full lg:w-1/4 px-5">
        <img :src="post.img" alt="">
        <button class="btn ml-auto my-3 block underline">Descargar</button>
      </div>
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
