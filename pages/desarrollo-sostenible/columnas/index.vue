<template>
  <div class="app">
   <JumbotronEje title="DESARROLLO SOSTENIBLE" subtitle="Columnas de opinión" image="writer.jpg"/>
    <ul class="border-b-16 border-primary">
      <li v-for="col of columnas" :key="col.slug" class="post md:py-20 py-10">
        <div
          class="flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">
          <div class="right md:p-7 p-5 md:w-1/3  4xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="col.img" alt="" class="w-80 h-auto mb-3 shadow-xl object-cover" />
            </div>
          </div>
          <div class="left  md:p-7 p-5 md:w-2/3  4xl:w-3/4 w-full flex flex-col justify-between">
            <div class="content-start">
              <NuxtLink :to="'columnas/'+col.slug" class="title xl:text-xl text-sm mb-6 block">{{ col.title }}</NuxtLink>
            </div>
              <div class="content-center mb-10">
                <p>{{col.extracto}}</p>
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
  </div>
</template>

<script>
import JumbotronEje from '~/components/JumbotronEje.vue';

export default {
    components: { JumbotronEje },

  async asyncData({ $content }) {
    const columnas = await $content("columnas").where({category:"desarrollo-sostenible"}).sortBy('date','desc').fetch();

    return {
      columnas,
    };
  },
  methods:{
    loadPosts(){
      this.getNext();
    },
    async getNext(){
      const newEvents = await this.$content("columnas").where({category:"desarrollo-sostenible"}).sortBy('date','desc').skip(this.columnas.length).limit(8).fetch();
      this.columnas = this.columnas.concat(newEvents);
    }
  }
}
</script>
