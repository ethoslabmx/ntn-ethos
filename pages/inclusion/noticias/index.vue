<template>
  <div class="app">
   <JumbotronEje title="Inclusión" subtitle="Noticias" image="noticias-thumb.jpg"/>
    <div class="bg-white border-b-16 border-primary">
      <ListadoPublicaciones  :posts="noticias" eje="inclusion" categoria="noticias" />
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
import ListadoPublicaciones from '~/components/ListadoPublicaciones.vue';

export default {
  components: { JumbotronEje, ListadoPublicaciones},

  async asyncData({ $content }) {
    const noticias = await $content("noticias").where({ category: "inclusion" }).without(['body']).sortBy('date','desc').limit(8).fetch();
    const total = await $content("noticias").where({ category: "inclusion" }).only([]).fetch();
    return {
      noticias,
      total
    };
  },
  data(){
    return {
      loading: false,
      more:true,
    }
  },
  methods:{
    loadPosts(){
      this.getNext();
    },
    async getNext(){
      const newPosts = await this.$content("noticias").where({category:"inclusion"}).without(['body']).sortBy('date','desc').skip(this.noticias.length).limit(8).fetch();
      if(newPosts.length > 0 ){
        this.noticias = this.noticias.concat(newPosts);
        this.$store.commit('inclusion/setNoticias', this.noticias);
      }

      if(this.noticias.length >= this.total){
        this.more = false;
      }
    }
  },
  beforeMount(){
    const cols = this.$store.state.inclusion.noticias;
    if(cols.length > 0){
      this.noticias = cols;
    }
  },
  mounted(){
    if(this.noticias.length >= this.total.length){
      this.more = false;
    }
  }
}
</script>
