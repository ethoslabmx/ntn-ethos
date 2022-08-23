<template>
  <div class="app">

    <JumbotronEje title="CIUDADES DEL FUTURO" subtitle="REPORTAJES PERIODÍSTICOS" image="ciudades-del-futuro-thumb.png"/>

  <div class="bg-white border-b-16 border-primary">
    <ul>
      <li v-for="evento of eventos" :key="evento.slug" class="post md:py-20 py-10">
        <div
          class="flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">
          <div class="right md:p-7 p-5 md:w-1/3  3xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="evento.img" alt="" class="w-auto h-52 mb-3 shadow-xl" />
            </div>
          </div>
          <div class="left  md:p-7 p-5 md:w-2/3  3xl:w-3/4 w-full flex flex-col justify-between">
            <div class="content-start">
              <NuxtLink :to="'reportajes/'+evento.slug" class="title xl:text-xl text-sm mb-6 block">{{ evento.title }}</NuxtLink>
            </div>
              <div class="content-center mb-10">
              <p>{{evento.body.children[1].children[0].value}}</p>
              </div>
            </div>
          </div>
        </li>
        <li class="post last">
          <div class="container px-5 xl:px-28 py-10">
            <button class="ml-auto more-btn bold" @click="loadPosts">VER MÁS <span class="icon"></span></button>
          </div>
        </li>
    </ul>
      <!-- <li v-for="evento of eventos" :key="evento.slug">
          <NuxtLink :to="'reportajes/'+evento.slug">{{ evento.title }}</NuxtLink>
          <img :src="evento.img" alt="">
          <p>{{evento.body.children[1].children[0].value}}</p>
        </li> -->
    </div>
  </div>
</template>

<script>
import JumbotronEje from '~/components/JumbotronEje.vue';

export default {
  components: { JumbotronEje },

  async asyncData({ $content }) {
    const eventos = await $content("reportajes").where({category:"ciudades-del-futuro"}).sortBy('date','desc').limit(8).fetch();

    return {
      eventos,
    };
  },
  methods:{
    loadPosts(){
      this.getNext();
    },
    async getNext(){
      const newEvents = await this.$content("reportajes").where({category:"ciudades-del-futuro"}).sortBy('date','desc').skip(this.eventos.length).limit(8).fetch();
      this.eventos = this.eventos.concat(newEvents);
    }
  }
}
</script>
