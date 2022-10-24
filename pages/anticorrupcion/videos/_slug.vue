<template>
  <div>
    <div class="post_content xl:py-28 bg-white">
      <div class="container xl:px-0 flex ">
        <div class="w-full lg:w-3/4 p-5 mx-auto">
          <h1 class="2xl:text-xl text-lg title my-10 fill-text-animation">{{ vid.title }}</h1>
        <lite-youtube
          :videoid="vid.video.slice(vid.video.indexOf('v=')+2)"
          :playlabel="vid.title"
          params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
          class="video shadow-xl object-cover"
        />
        <div class="w-full xl:w-3/4 p-5">

          <nuxt-content :document="vid" />
          <div class="share content-end flex justify-end lg:items-center md:flex-wrap xl:flex-nowrap">

            <ShareNetwork
                network="LinkedIn"
                :url="currentUrl"
                :title="vid.title"
                :description="vid.extracto"
                :media="vid.img"
                class="mr-3"
              >
                <img src="../../../assets/images/linkedin-gray.png" alt=""
                      class="h-7 w-7">
            </ShareNetwork>
            <ShareNetwork
                network="facebook"
                :url="currentUrl"
                :title="vid.title"
                :description="vid.extracto"
                :media="vid.img"
                class="mr-3"
              >
                <img src="../../../assets/images/fbb-gray.png" alt="" class="h-7 w-7">
            </ShareNetwork>
            <ShareNetwork
                network="Twitter"
                :url="currentUrl"
                :title="vid.title"
                :description="vid.extracto"
                :media="vid.img"
                class="mr-3"
              >
                <img src="../../../assets/images/twwt-gray.png" alt="" class="h-7 w-7">
            </ShareNetwork>
            <ShareNetwork
                network="Email"
                :url="currentUrl"
                :title="vid.title"
                :description="vid.extracto"
                :media="vid.img"
                class="mr-3"
              >
                <img src="../../../assets/images/letter.png" alt="" class="h-6 w-9">
            </ShareNetwork>
            <ShareNetwork
                network="WhatsApp"
                :url="currentUrl"
                :title="vid.title"
                :description="vid.extracto"
                :media="vid.img"
              >
                <img src="../../../assets/images/whatsapp.svg" alt="" class="h-8 w-8">
            </ShareNetwork>

          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let vid;
    //console.log(params)
    try {
      vid = await $content("videos", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      vid,
    };
  },
  data() {
    return {
      currentUrl:'https://www.ethos.org.mx/anticorrupcion/videos/'+this.$route.params.slug
    }
  },
  head() {
    return {
      title: this.vid.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.vid.extracto,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.vid.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.vid.extracto,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.vid.img,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.currentUrl,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.vid.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.vid.extracto,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.vid.img,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: this.currentUrl,
        },
      ],
    };
  },
};
</script>
