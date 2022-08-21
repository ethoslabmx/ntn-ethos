<template>
  <div>
    <div class="post_content pt-10 pb-20 xl:py-24  bg-white">
      <div class="container flex">
        <div class="w-full lg:w-3/4 p-5">
          <h1 class="2xl:text-xl text-lg title">{{ post.title }}</h1>
          <p class="my-6 font-bold"> {{ new Date(post.date).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })  }}</p>
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
          <div class="share content-end flex justify-end lg:items-center md:flex-wrap xl:flex-nowrap">

            <ShareNetwork
                network="LinkedIn"
                :url="currentUrl"
                :title="post.title"
                :description="post.extracto"
                :media="post.img"
                class="mr-3"
              >
                <img src="../../../assets/images/linkedin-gray.png" alt=""
                      class="h-7 w-7">
            </ShareNetwork>
            <ShareNetwork
                network="facebook"
                :url="currentUrl"
                :title="post.title"
                :description="post.extracto"
                :media="post.img"
                class="mr-3"
              >
                <img src="../../../assets/images/fbb-gray.png" alt="" class="h-7 w-7">
            </ShareNetwork>
            <ShareNetwork
                network="Twitter"
                :url="currentUrl"
                :title="post.title"
                :description="post.extracto"
                :media="post.img"
                class="mr-3"
              >
                <img src="../../../assets/images/twwt-gray.png" alt="" class="h-7 w-7">
            </ShareNetwork>
            <ShareNetwork
                network="Email"
                :url="currentUrl"
                :title="post.title"
                :description="post.extracto"
                :media="post.img"
                class="mr-3"
              >
                <img src="../../../assets/images/letter.png" alt="" class="h-6 w-9">
            </ShareNetwork>
            <ShareNetwork
                network="WhatsApp"
                :url="currentUrl"
                :title="post.title"
                :description="post.extracto"
                :media="post.img"
              >
                <img src="../../../assets/images/whatsapp.svg" alt="" class="h-8 w-8">
            </ShareNetwork>

          </div>
        </div>
      </div>
    </div>
    <div class="relacionadas bg-cyan py-20 text-white">
      <div class="container flex items-start flex-wrap xl:flex-nowrap">
        <div class="w-full xl:w-1/6"><h2 class="font md:text-lg text-sm mb-3 xl:mb-0">Artículos relacionadas</h2></div>
       <div class="w-full xl:w-5/6">
         <div class="relacionadas flex flex-wrap xl:flex-nowrap">
          <li v-for="p of articulos" :key="p.slug" class="px-8 w-full xl:w-1/3">
            <img :src="p.img" alt="" class="mb-3 h-auto w-full">
            <NuxtLink :to=" p.slug" class="my-3 md:text-lg text-sm block">{{ p.title }}</NuxtLink>
            <!--<p class="text-white mb-8 xl:mb-0">{{ col.extracto }}</p>-->
          </li>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed/dist/vue2-pdf-embed";
export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      currentUrl:'https://radiant-semifreddo-901f94.netlify.app/anticorrupcion/columnas/'+this.$route.params.slug,
      source:''
    }
  },
  async asyncData({ $content, params, error }) {

    let post, articulos;
    //console.log(params);
    try {

      articulos = await $content('reportajes').where({category:'inclusion'}).limit(3).fetch();
      post = await $content("reportajes", params.slug).fetch();

      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
      articulos
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
