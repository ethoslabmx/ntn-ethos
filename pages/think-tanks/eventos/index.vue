<template>
  <div class="app">
    <JumbotronEje title="Think Tanks" subtitle="Eventos" image="eventos-jumbo.jpg"/>

    <div class="bg-white border-b-16 border-primary">
      <li v-for="evento of eventos" :key="evento.slug" class="post">
        <div
          class="py-10 flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

          <div class="right md:p-7 p-5  xl:w-1/3  4xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="evento.img" alt="" class="w-80 h-auto mb-3 shadow-xl object-cover" />
              <NuxtLink :to="'eventos/' + evento.slug">
                <button class="bg-gray-dark font py-2 px-7 rounded-md my-3 text-white">Leer</button>
              </NuxtLink>
            </div>


          </div>
          <div class="left md:p-7 p-5   xl:w-2/3  4xl:w-3/4 w-full flex flex-col justify-between">

            <div class="header content-start">

              <NuxtLink :to="'eventos/' + evento.slug" class="title xl:text-xl text-sm mb-6 block">{{ evento.title }}
              </NuxtLink>

            </div>

            <div class="content content-center mb-10">
              <p>{{ evento.extracto }}</p>
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
    const eventos = await $content("eventos").where({category:"think-tanks"}).without(['body']).sortBy('date','desc').limit(8).fetch();

    return {
      eventos,
    };
  },
  data(){
    return {
      loading: false,
      total: 0,
      more:true,
    }
  },
  methods:{
    loadPosts(){
      this.getNext();
    },
    async getNext(){
      const newPosts = await this.$content("eventos").where({category:"think-tanks"}).without(['body']).sortBy('date','desc').skip(this.eventos.length).limit(8).fetch();
      if(newPosts.length == 8){
        this.eventos = this.eventos.concat(newPosts);
      }  else if(newPosts.length > 0 && newPosts.length < 8){
        this.eventos = this.eventos.concat(newPosts);
        this.more = false;
      } else  {
        this.more = false;
      }
    }
  }
}
</script>
