<template>
  <div class="app">
    <JumbotronEje title="Finanzas Públicas" subtitle="Eventos" image="eventos-jumbo.jpg"/>

    <div class="bg-white border-b-16 border-primary">
      <ListadoPublicaciones  :posts="eventos" eje="finanzas-publicas" categoria="eventos" />
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

  components: { JumbotronEje, ListadoPublicaciones },

  async asyncData({ $content }) {
    const eventos = await $content("eventos").where({category:"finanzas-publicas"}).without(['body']).sortBy('date','desc').limit(8).fetch();
    const total = await $content("eventos").where({category:"finanzas-publicas"}).only([]).fetch();
    return {
      eventos,
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
      const newPosts = await this.$content("eventos").where({category:"finanzas-publicas"}).without(['body']).sortBy('date','desc').skip(this.eventos.length).limit(8).fetch();
      if(newPosts.length > 0){
        this.eventos = this.eventos.concat(newPosts);
        this.$store.commit('finanzaspublicas/setEventos', this.eventos);
      }

      if(this.eventos.length == this.total.length){
        this.more = false;
      }
    }
  },
  beforeMount(){
    const cols = this.$store.state.finanzaspublicas.eventos;
    if(cols.length > 0){
      this.eventos = cols;
    }
  },
  mounted(){
    if(this.eventos.length == this.total.length){
      this.more = false;
    }
  }
}
</script>
