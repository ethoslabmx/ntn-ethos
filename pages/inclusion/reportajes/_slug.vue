<template>
  <div>
    <div class="post_content py-28 bg-white">
      <div class="container flex">
        <div class="w-full lg:w-3/4 p-5">
          <h1 class="2xl:text-xl text-lg title">{{ post.title }}</h1>
          <p class="my-6 font-bold">Fecha de publicación: {{ new Date(post.date).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })  }}</p>
          <p class="my-6">
            Por: {{ post.autor }}
            <span v-if="post.medio"
              >Para: <a :href="post.link">{{ post.medio }}</a></span
            >
          </p>
        </div>
      </div>
      <div class="container flex flex-wrap lg:flex-nowrap">
        <div class="pdf-container" v-if="post.file">
          <vue-pdf-embed :source="post.file" />
        </div>
        <div class="w-full lg:w-3/4 p-5">
          <nuxt-content :document="post" />
          <button class="block ml-auto bg-gray-dark font py-2 px-7 rounded-md my-3 text-white">Descargar</button>
          <div
            class="share my-20 content-end flex justify-end lg:items-center md:flex-wrap xl:flex-nowrap"
          >
            <small class="title mb-3 xl:mb-0">COMPARTIR</small>
            <ul class="flex items-center ml-3 flex-nowrap">
              <li class="mr-3">
                <a href=""
                  ><img
                    src="../../../assets/images/linkedin-gray.png"
                    alt=""
                    class="h-5 w-5"
                /></a>
              </li>
              <li class="mr-3">
                <a href=""
                  ><img
                    src="../../../assets/images/fbb-gray.png"
                    alt=""
                    class="h-5 w-5"
                /></a>
              </li>
              <li class="mr-3">
                <a href=""
                  ><img
                    src="../../../assets/images/twwt-gray.png"
                    alt=""
                    class="v"
                /></a>
              </li>
              <li class="">
                <a href=""
                  ><img
                    src="../../../assets/images/letter.png"
                    alt=""
                    class="h-5 w-5"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="relacionadas">
      <h2>Artículos Relacionados</h2>
    </div>
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed/dist/vue2-pdf-embed";
export default {
  components: {
    VuePdfEmbed,
  },
  data(){
    return {
      source:''
    };
  },
  async asyncData({ $content, params, error }) {
    let post, columnas;
    console.log(params);
    try {
      columnas = await $content("columnas")
        .where({ category: "anticorrupcion" })
        .limit(3)
        .fetch();
      post = await $content("reportajes", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
      columnas,
    };
  },
};
</script>

<style lang="scss" scoped>
.pdf-container {
  width: 80%;
  margin: 20px auto;
  max-width: 700px;
  height: 70vh;
  overflow: auto;
}
</style>
