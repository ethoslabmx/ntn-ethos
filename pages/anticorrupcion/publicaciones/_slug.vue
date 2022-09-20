<template>

  <div>
    <div class="post_content md:pt-10 pb-20 xl:py-24  bg-white">
      <img class="img-header" :src="post.img" alt="" v-if="!post.file">
      <div class="container  flex">

        <div class="w-full lg:w-3/4 p-5">

          <h1 class="2xl:text-xl text-lg title fill-text-animation">{{ post.title }}</h1>
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
        <div class="pdf-container" v-if="source">
          <vue-pdf-embed :source="source" @rendered="handleDocumentRender" />
        </div>
        <div class="w-full lg:w-3/4 p-5">
          <nuxt-content :document="post" />
          <div class="galeria" v-if="post.galeria">

            <div class="galeria-item" v-for="(image, index) in post.galeria" :key="index">
              <img :src="image" alt="">
            </div>
          </div>
          <button v-if="post.file" class="block ml-auto bg-gray-dark font py-2 px-7 rounded-md  my-3 text-white" @click="download(post.file)">Descargar</button>

          <div class="share content-end flex justify-end lg:items-center my-2 md:flex-wrap xl:flex-nowrap">

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
                <img src="../../../assets/images/twwt-gray.png" alt="" class="h-7 w-8">
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
    <div class="relacionadas bg-cyan py-12 md:py-20 text-white">
      <div class="container flex items-start flex-wrap xl:flex-nowrap">
        <div class="w-full xl:w-1/6"><h2 class="saira uppercase text-sm mb-3 xl:mb-0 text-white">Artículos relacionados</h2></div>
       <div class="w-full xl:w-5/6">
         <div class="relacionadas flex flex-wrap xl:flex-nowrap">
          <li v-for="p of publicaciones" :key="p.slug" class="px-8 w-full xl:w-1/3">
            <img :src="p.img" alt="" class="mb-3 h-auto w-full">
            <NuxtLink :to=" p.slug" class="my-3 block saira uppercase text-sm">{{ p.title }}</NuxtLink>
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
  scrollToTop: true,
  async asyncData({ $content, params, error }) {

    let post, publicaciones;
    //console.log(params);
    try {

      publicaciones = await $content('publicaciones').where({category:'anticorrupcion'}).limit(3).fetch();
      post = await $content("publicaciones", params.slug).fetch();

      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
      publicaciones
    };
  },
  computed: {
    currentUrl() {
      return 'https://radiant-semifreddo-901f94.netlify.app/anticorrupcion/publicaciones/'+this.$route.params.slug;
    },
    source() {
      return this.post.file;
    }
  },
  data() {
    return {
      isLoading:false,
      pageCount:0,
    }
  },
  mounted(){
    console.log(this.source);
  },
  methods:{
    download(file){
      window.open(file);
    },
    handleDocumentRender() {
      this.isLoading = false;

    },
  }
};
</script>

<style lang="scss" scoped>
.pdf-container {
  width: 80%;
  margin: 20px auto;
  max-width: 600px;
  height: 70vh;
  overflow: auto;
}


</style>
