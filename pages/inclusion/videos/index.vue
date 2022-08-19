<template>
  <div class="app">
    <JumbotronEje title="INCLUSIÓN" subtitle="Videos" image="videos-jumbo.jpg"/>

  <div class="bg-white border-b-16 border-primary">
              <li v-for="evento of eventos" :key="evento.slug" class="post">
        <div
          class="py-10 flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

          <div class="right md:p-7 p-5  xl:w-1/3  3xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <lite-youtube
                :videoid="evento.video.slice(evento.video.indexOf('v=')+2)"
                :playlabel="evento.title"
                params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
                class="w-72 h-52 mb-3 shadow-xl object-cover"
              />
            </div>


          </div>
          <div class="left md:p-7 p-5   xl:w-2/3  3xl:w-3/4 w-full flex flex-col justify-between">

            <div class="header content-start">


             <h2 class="title xl:text-xl text-sm mb-6 block">
                 <NuxtLink :to="'videos/'+evento.slug">  {{ evento.title }}</NuxtLink>
              </h2>

            </div>

            <div class="content content-center mb-10">
              <p>{{  }}</p>
            </div>


          </div>

        </div>
      </li>
      <li class="post last">
          <div class="container px-5 xl:px-28 py-10">
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
    const eventos = await $content("videos").where({category:"inclusion"}).fetch();

    return {
      eventos,
    };
  },
  methods:{
    loadPosts(){
      this.getNext();
    },
    async getNext(){
      const newEvents = await this.$content("videos").where({category:"inclusion"}).skip(this.eventos.length).limit(6).fetch();
      console.log(newEvents);
      this.eventos = this.eventos.concat(newEvents);
    }
  }
}
</script>
