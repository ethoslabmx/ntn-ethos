<template>
  <div>
    <div class="post_content md:pt-10 pb-20 xl:py-24 bg-white">
      <div class="container flex xl:pr-0 xl:mr-0 xl:pl-15">
        <div class="w-full xl:w-3/4 p-5">
          <h1 class="2xl:text-xl text-lg title my-4 fill-text-animation">{{ post.title }}</h1>
          <p class="my-2">Fecha de publicación: {{ new Date(post.date).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
          <p class="my-2"> <a :href="post.link">Por: {{ post.autor }} <span v-if="post.medio">Para:{{ post.medio }}</span></a>
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
  data() {
    return {
      currentUrl:'https://www.ethos.org.mx/finanzas-publicas/noticias/'+this.$route.params.slug
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
          href: 'https://www.ethos.org.mx/finanzas-publicas/noticias/'+this.$route.params.slug
        }
      ]
    }
  }
};
</script>
