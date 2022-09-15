<template>
  <div class="border-b-16 border-primary app">
    <JumbotronEje title="Finanzas públicas" subtitle="Publicaciones" image="finanzas-publicas-thumb.png"/>
    <Micrositios eje="finanzas-publicas" categoria="publicaciones" :micrositios="micrositios" />
    <ListadoPublicaciones :posts="posts" eje="finanzas-publicas" categoria="publicaciones" />
    <li class="post last">
      <div class="container px-5 xl:px-28 py-10" v-if="more">
        <button class="ml-auto more-btn bold" @click="loadPosts">VER MÁS <span class="icon"></span></button>
      </div>
    </li>
  </div>
</template>

<script>
import JumbotronEje from '~/components/JumbotronEje.vue';
import Micrositios from '~/components/Micrositios.vue';
import ListadoPublicaciones from '~/components/ListadoPublicaciones.vue';

export default {
  components: { JumbotronEje, Micrositios, ListadoPublicaciones, ListadoPublicaciones },
  data(){
    return {
      loading: false,
      more:true,
    }
  },
  async asyncData({ $content }) {
    const micrositios = await $content("micrositios").where({eje:"finanzas-publicas",category:"publicaciones"}).sortBy('date','desc').fetch();

    const posts = await $content("publicaciones").where({category:"finanzas-publicas"}).without(['body']).sortBy('date','desc').limit(8).fetch();
    const total = await $content("publicaciones").where({category:"finanzas-publicas"}).only([]).fetch();
    return {
      posts,
      total,
      micrositios
    };
  },
  methods:{
    loadPosts(){
      this.getNext();
    },

    async getNext(){
      const newPosts = await this.$content("publicaciones").where({category:"finanzas-publicas"}).without(['body']).sortBy('date','desc').skip(this.posts.length).limit(8).fetch();
      if(newPosts.length > 0 ){
        this.posts = this.posts.concat(newPosts);
        this.$store.commit('finanzaspublicas/setPublicaciones', this.posts);
      }

      if(this.posts.length == this.total.length){
        this.more = false;
      }

    }
  },
  beforeMount(){
    const p = this.$store.state.finanzaspublicas.publicaciones;
    if(p.length > 0){
      this.posts= p;
      if(p.length == this.total.length){
        this.more = false;
      }
    }
  },
  mounted(){
    if(this.posts.length == this.total.length){
      this.more = false;
    }
  }
}
</script>
