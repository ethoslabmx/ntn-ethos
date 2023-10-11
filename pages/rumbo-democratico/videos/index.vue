<template>
  <div class="app">
    <JumbotronEje title="RUMBO DEMOCRÁTICO" subtitle="Videos" image="videos-jumbo.jpg"/>

  <div class="bg-white border-b-16 border-primary">
              <li v-for="post of posts" :key="post.slug" class="post">
        <div
          class="py-10 flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

          <div class="right md:p-7 p-5  xl:w-1/3  3xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <lite-youtube
                :videoid="post.video.slice(post.video.indexOf('v=')+2)"
                :playlabel="post.title"
                params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
                class="w-72 h-52 mb-3 shadow-xl object-cover"
              />
            </div>


          </div>
          <div class="left md:p-7 p-5   xl:w-2/3  3xl:w-3/4 w-full flex flex-col justify-between">

            <div class="header content-start">


              <h2 class="title xl:text-xl text-sm mb-6 block">
                 <NuxtLink :to="'videos/'+post.slug">  {{ post.title }}</NuxtLink>
              </h2>

            </div>

            <div class="content content-center mb-10">
              <p>{{ post.extracto }}</p>
            </div>


          </div>

        </div>
      </li>
      <li class="post last">
          <div class="container px-5 xl:px-28 py-10" v-if="more">
            <button class="ml-auto more-btn bold" @click="loadPosts">VER MÁS <span class="icon"></span></button>
          </div>
        </li>
    </div>
  </div>
</template>

<script>
import JumbotronEje from '~/components/JumbotronEje.vue';

export default {
  components: { JumbotronEje },

  async asyncData({ $content }) {
    const posts = await $content("videos").where({category:"rumbo-democratico"}).sortBy('date','desc').limit(6).fetch();
    const total = await $content("videos").where({category:"rumbo-democratico"}).only([]).fetch();
    return {
      posts,
      total
    };
  },
  data(){
    return {
      more: true,
    };
  },
  head() {
    return{
      title: 'Videos | Rumbo Democrático',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Videos | Rumbo Democrátic'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Videos | Rumbo Democrátic'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Videos | Rumbo Democrátic'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://ethos.org.mx/rumbo-democratico/videos'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://ethos.org.mx/rumbo-democratico/videos-jumbo.jpg'
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: 'https://ethos.org.mx/rumbo-democratico/videos-jumbo.jpg'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Ilustración Videos Ethos'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Videos | Rumbo Democrátic'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Videos | Rumbo Democrátic'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://ethos.org.mx/rumbo-democratico/videos-jumbo.jpg'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://ethos.org.mx/rumbo-democratico/videos-jumbo.jpg'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Videos | Rumbo Democrático'
        }
      ]
    }
  },
   methods:{
    loadPosts(){
      this.getNext();
    },
    async getNext(){
      const newPosts = await this.$content("videos").where({category:"rumbo-democratico"}).sortBy('date','desc').skip(this.posts.length).limit(6).fetch();
      if( newPosts.length > 0){
        this.posts = this.posts.concat(newPosts);
        this.$store.commit('rumbodemocratico/setVideos', this.posts);
      }
      if(this.posts.length == this.total.length){
        this.more = false;
      }
    }
  },
  beforeMount(){
    const cols = this.$store.state.rumbodemocratico.videos;
    if(cols.length > 0){
      this.posts = cols;
    }
  },
  mounted(){
    if(this.posts.length == this.total.length){
        this.more = false;
      }
  }
}
</script>
