<template>
  <div class="app">
    <JumbotronEje title="Inclusión" subtitle="Columnas de opinión" image="writer.jpg"/>
    <ul class="border-b-16 border-primary">
      <li v-for="col of columnas" :key="col.slug" class="post md:py-20 py-10">
        <div
          class="flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">
          <div class="right md:p-7 p-5 md:w-1/3  4xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="col.img" alt="" class="w-80 h-auto mb-3 shadow-xl object-cover" />
            </div>
            <div class="ml-auto p-5 md:p-0">

              <NuxtLink :to="'columnas/'+col.slug" class="title xl:text-xl text-sm mb-6 block">
                <button class="bg-gray-dark font py-2 px-3 rounded-md my-3 text-white">Leer</button>
              </NuxtLink>

              <!--
              <div class="share content-end flex justify-end lg:items-center md:flex-wrap xl:flex-nowrap">

                <small class="title mb-3 xl:mb-0">COMPARTIR</small>
                <ul class="flex items-center ml-3 flex-nowrap">
                  <li class="mr-3"><a href=""><img src="../../../assets/images/linkedin-gray.png" alt=""
                        class="h-5 w-5"></a></li>
                  <li class="mr-3"><a href=""><img src="../../../assets/images/fbb-gray.png" alt="" class="h-5 w-5"></a>
                  </li>
                  <li class="mr-3"><a href=""><img src="../../../assets/images/twwt-gray.png" alt="" class="v"></a></li>
                  <li class=""><a href=""><img src="../../../assets/images/letter.png" alt="" class="h-5 w-5"></a></li>
                </ul>
              </div>
              -->
            </div>
          </div>
          <div class="left  md:p-7 p-5 md:w-2/3  4xl:w-3/4 w-full flex flex-col justify-between">
            <div class="content-start">
              <NuxtLink :to="'columnas/'+col.slug" class="title xl:text-xl text-sm mb-6 block">{{ col.title }}</NuxtLink>
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
          <div class="container px-5 xl:px-28 py-10" v-if="more">
            <button class="ml-auto more-btn bold" @click="loadPosts">VER MÁS <span class="icon"></span></button>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
import JumbotronEje from '~/components/JumbotronEje.vue';

export default {
    components: { JumbotronEje },

  async asyncData({ $content }) {
    const columnas = await $content("columnas").where({category:"inclusion"}).without(['body']).sortBy('date','desc').limit(8).fetch();

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
      const newCols = await this.$content("columnas").where({category:"inclusion"}).without(['body']).sortBy('date','desc').skip(this.columnas.length).limit(8).fetch();
      if(newCols.length == 8){
        this.columnas = this.columnas.concat(newCols);
        this.$store.commit('inclusion/setColumnas', this.columnas);
      }  else if(newCols.length > 0 && newCols.length < 8){
        this.columnas = this.columnas.concat(newCols);
        this.$store.commit('inclusion/setColumnas', this.columnas);
        this.more = false;
      } else  {
        this.more = false;
      }
    }
  },
  mounted(){
    const cols = this.$store.state.inclusion.columnas;
    if(cols.length > 0){
      this.columnas = cols;
    }
    
  }
}
</script>
