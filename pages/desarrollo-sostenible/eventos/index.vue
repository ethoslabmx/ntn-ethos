<template>
  <div class="app">
    <JumbotronEje title="Desarrollo Sostenible" subtitle="Eventos" image="eventos-jumbo.jpg"/>

    <div class="bg-white border-b-16 border-primary">
      <ListadoPublicaciones  :posts="eventos" eje="desarrollo-sostenible" categoria="eventos" />
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


  async asyncData({ $content }) {
    const eventos = await $content("eventos").where({category:"desarrollo-sostenible"}).without(['body']).sortBy('date','desc').limit(8).fetch();
    const total = await $content("eventos").where({category:"desarrollo-sostenible"}).only([]).fetch();
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
  head() {
    return {
      title: 'Desarrollo Sostenible - Eventos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Eventos de Desarrollo Sostenible'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.ethos.org.mx/desarrollo-sostenible/eventos' }
      ]
    };
  },
  methods:{
    loadPosts(){
      this.getNext();
    },
    async getNext(){
      const newPosts = await this.$content("eventos").where({category:"desarrollo-sostenible"}).without(['body']).sortBy('date','desc').skip(this.eventos.length).limit(8).fetch();
      if(newPosts.length > 0 ){
        this.eventos = this.eventos.concat(newPosts);
        this.$store.commit('desarrollosostenible/setEventos', this.eventos);
      }

      if(this.eventos.length == this.total.length){
        this.more = false;
      }
    }
  },
  beforeMount(){
    const cols = this.$store.state.desarrollosostenible.eventos;
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
