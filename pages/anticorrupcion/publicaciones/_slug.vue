<template>

  <div>
    <div class="post_content pt-10 pb-20 xl:py-24  bg-white">
      <div class="container  flex">
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
          <div class="galeria" v-if="post.galeria">

            <div class="galeria-item" v-for="(image, index) in post.galeria" :key="index">
              <img :src="image" alt="">
            </div>
          </div>
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
    <div class="relacionadas">
      <h2>Artículos Relacionados</h2>
    </div>
  </div>

</template>

<script>


export default {

  async asyncData({ $content, params, error }) {

    let post, columnas;
    //console.log(params);
    try {


      post = await $content("publicaciones", params.slug).fetch();
      console.log(post);
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
  data() {
    return {
      currentUrl:'https://radiant-semifreddo-901f94.netlify.app/anticorrupcion/columnas/'+this.$route.params.slug
    }
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
