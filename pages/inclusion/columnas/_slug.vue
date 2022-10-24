<template>
  <div>
    <div class="post_content md:pt-10 pb-20 xl:py-24 bg-white">
      <div class="container flex xl:pr-0 xl:mr-0 xl:pl-15">
        <div class="w-full xl:w-3/4 p-5">
          <h1 class="2xl:text-xl text-lg title my-4 fill-text-animation">{{ post.title }}</h1>
          <p class="my-2"> {{ new Date(post.date).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
          <p class="my-2">Por: {{ post.autor }} <span v-if="post.medio">Para: <a :href="post.link">{{ post.medio
          }}</a></span>
          </p>
        </div>
      </div>
      <div class="flex container flex-wrap xl:flex-nowrap xl:flex-row-reverse xl:pr-0 xl:mr-0 xl:pl-15">
        <div class="w-full xl:w-1/3 px-5 xl:pr-0">
          <img :src="post.img" alt="" class="shadow-xl object-cover">
        </div>
        <div class="w-full xl:w-2/3 p-5 mx-auto">
          <nuxt-content :document="post" />
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
    <div class="relacionadas bg-cyan py-12 md:py-20 text-white">
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
        .where({ category: "inclusion" })
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
  data() {
    return {
      currentUrl:'https://www.ethos.org.mx/inclusion/columnas/'+this.$route.params.slug
    }
  },
  head() {
    return{
      title: this.post.title,
      meta: [
        {
          content: this.post.extracto
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.ethos.org.mx/inclusion/columnas/'+this.$route.params.slug
        }
      ]
    }
  }
};
</script>
