<template>
  <div class="app">
    <JumbotronEje title="Finanzas públicas" subtitle="Noticias" image="finanzas-publicas-thumb.png"/>
    <div class="bg-white border-b-16 border-primary">
      <li v-for="col of columnas" :key="col.slug" class="post">
        <div
          class="py-10  flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

          <div class="right md:p-7 p-5  xl:w-1/3  4xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="col.img" alt="" class="w-80 h-auto mb-3 shadow-xl object-cover" />
              <NuxtLink :to="'noticias/' + col.slug">
                <button class="bg-gray-dark font py-2 px-7 rounded-md my-3 text-white">Leer</button>
              </NuxtLink>
            </div>


          </div>
          <div class="left md:p-7 p-5   xl:w-2/3  4xl:w-3/4 w-full flex flex-col justify-between">

            <div class="header content-start">

              <NuxtLink :to="'noticias/' + col.slug" class="title xl:text-xl text-sm mb-6 block">{{ col.title }}
              </NuxtLink>

            </div>

            <div class="content content-center mb-10">
              <p>{{ col.extracto}}</p>
            </div>
            <div class="footer content-end">
                <p>{{col.autor}}</p>
                <p class="font-bold uppercase">{{new Date(col.date).toLocaleDateString()}}</p>
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
    const columnas = await $content("noticias").where({ category: "finanzas-publicas" }).without(['body']).sortBy('date','desc').limit(8).fetch();

    return {
      columnas,
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
      const newPosts = await this.$content("noticias").where({category:"finanzas-publicas"}).without(['body']).sortBy('date','desc').skip(this.columnas.length).limit(8).fetch();
      if(newPosts.length == 8){
        this.columnas = this.columnas.concat(newPosts);
      }  else if(newPosts.length > 0 && newPosts.length < 8){
        this.columnas = this.columnas.concat(newPosts);
        this.more = false;
      } else  {
        this.more = false;
      }
    }
  }
}
</script>
