<template>
  <div class="post bg-white">
    <JumbotronEje title="ANTICORRUPCIÓN" subtitle="" image="anticorrupcion-thumb.png"/>
    <div class="columnas 2xl:pr-20">
      <div class="separador_header container mx-auto p-6 my-6 md:my-14">
        <h2 class="big-title xl:text-xl text-md text-right pr-3 tracking-widest">PUBLICACIONES</h2>
        <hr>
      </div>
    </div>
    <li v-for="pub of publicaciones" :key="pub.slug" class="post md:py-20 py-10">
      <div
        class="flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

        <div class="right md:py-7 py-5 md:w-1/3  3xl:w-1/4 w-full flex md:flex-col justify-between text-right">
          <div class="img md:ml-auto content-start my-6">
            <img :src="pub.img" alt="" class="w-auto h-50 mb-2 shadow-xl" />

          </div>

          <div class="ml-auto p-5 md:p-0">

            <NuxtLink :to="'/anticorrupcion/publicaciones/'+pub.slug" class="title xl:text-xl text-sm mb-6 block">
              <button class="bg-gray-dark font py-2 px-3 rounded-md my-3 text-white">Leer</button>
            </NuxtLink>

          </div>

        </div>
        <div class="left md:p-7 p-5 md:w-2/3  3xl:w-3/4 w-full flex flex-col justify-between">

          <div class="header content-start">

            <NuxtLink :to="'/anticorrupcion/publicaciones/'+pub.slug" class="title xl:text-xl text-sm mb-6 block">{{ pub.title }}</NuxtLink>

          </div>

          <div class="content content-center mb-10">
            <p>{{ pub.extracto }}</p>
          </div>

          <div class="footer content-end">
            <p>{{autores(pub)}}</p>
            <p class="font-bold uppercase">{{new Date(pub.date).toLocaleDateString()}}</p>
          </div>
        </div>

      </div>
    </li>
    <li class="post last">
      <div class="container px-5 xl:px-28 py-10" >
        <NuxtLink :to="'/anticorrupcion/publicaciones'" class="ml-auto more-btn bold">VER MÁS <span class="icon"></span></NuxtLink>
      </div>
    </li>
    <div class="columnas 2xl:pr-20">
      <div class="separador_header container mx-auto p-6 my-6 md:my-14">
        <h2 class="big-title xl:text-xl text-md text-right pr-3 tracking-widest">Reportajes Periodísticos</h2>
        <hr>
      </div>
    </div>

    <div class="columnas 2xl:pr-20">
      <div class="separador_header container mx-auto p-6 my-6 md:my-14">
        <h2 class="big-title xl:text-xl text-md text-right pr-3 tracking-widest">Columnas de opinion</h2>
        <hr>
      </div>
    </div>
    <ul class="">
      <li v-for="col of columnas" :key="col.slug" class="post md:py-20 py-10">
        <div
          class="flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">
          <div class="right md:p-7 p-5 md:w-1/3  4xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="col.img" alt="" class="w-80 h-auto mb-3 shadow-xl object-cover" />
            </div>
            <div class="ml-auto p-5 md:p-0">

              <NuxtLink :to="'/anticorrupcion/columnas/'+col.slug" class="title xl:text-xl text-sm mb-6 block">
                <button class="bg-gray-dark font py-2 px-3 rounded-md my-3 text-white">Leer</button>
              </NuxtLink>
            </div>
          </div>
          <div class="left  md:p-7 p-5 md:w-2/3  4xl:w-3/4 w-full flex flex-col justify-between">
            <div class="content-start">
              <NuxtLink :to="'/anticorrupcion/columnas/'+col.slug" class="title xl:text-xl text-sm mb-6 block">{{ col.title }}</NuxtLink>
            </div>
              <div class="content-center mb-10">
                <p>{{col.extracto}}</p>
              </div>
              <div class="footer content-end">
                <p>{{col.autor}}</p>
                <p class="font-bold uppercase">{{new Date(col.date).toLocaleDateString()}}</p>
              </div>
            </div>
          </div>
        </li>
        <li class="post last">
      <div class="container px-5 xl:px-28 py-10" >
        <NuxtLink :to="'/anticorrupcion/columnas'" class="ml-auto more-btn bold">VER MÁS <span class="icon"></span></NuxtLink>
      </div>
    </li>
    </ul>
     <div class="columnas 2xl:pr-20">
      <div class="separador_header container mx-auto p-6 my-6 md:my-14">
        <h2 class="big-title xl:text-xl text-md text-right pr-3 tracking-widest">Noticias</h2>
        <hr>
      </div>
    </div>
     <div class="columnas 2xl:pr-20">
      <div class="separador_header container mx-auto p-6 my-6 md:my-14">
        <h2 class="big-title xl:text-xl text-md text-right pr-3 tracking-widest">Eventos</h2>
        <hr>
      </div>
    </div>
    <div class="border-b-16 border-primary"></div>
  </div>

</template>

<script>
import JumbotronEje from '~/components/JumbotronEje.vue';

export default {
  components: { JumbotronEje },
  data(){
    return {
      loading: false,
      total: 0,
      more:true,
    }
  },
  async asyncData({ $content }) {
    const columnas = await $content("columnas").where({category:"anticorrupcion"}).without(['body']).sortBy('date','desc').limit(3).fetch();
    const publicaciones = await $content("publicaciones").where({category:"anticorrupcion"}).without(['body']).sortBy('date','desc').limit(3).fetch();

    return {
      columnas,
      publicaciones,
    };
  },
   methods:{
    loadPosts(){
      this.getNext();
    },
    autores(pub){
      return pub.autores ? pub.autores.flatMap(a=>a.autor).join(', ') : pub.autor ? pub.autor : '';
    },
    async getNext(){
      const newEvents = await this.$content("columnas").where({category:"anticorrupcion"}).sortBy('date','desc').skip(this.eventos.length).limit(8).fetch();
      if(newEvents.length < 8){
        this.more = false;
      }
      this.eventos = this.eventos.concat(newEvents);
    }
  }
}
</script>
