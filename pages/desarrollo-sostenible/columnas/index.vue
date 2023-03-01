<template>
  <div class="app">
   <JumbotronEje title="DESARROLLO SOSTENIBLE" subtitle="Columnas de opinión" image="writer.jpg"/>
    <ul class="border-b-16 border-primary">
      <ListadoPublicaciones :posts="columnas" eje="desarrollo-sostenible" categoria="columnas" />
      <li class="post last">
        <div class="container px-5 xl:px-28 py-10" v-if="more">
          <button class="ml-auto more-btn bold" @click="loadPosts">
            VER MÁS <span class="icon"></span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import JumbotronEje from "~/components/JumbotronEje.vue";
import ListadoPublicaciones from '~/components/ListadoPublicaciones.vue';
export default {
  components: { JumbotronEje, ListadoPublicaciones },

  async asyncData({ $content }) {
    const columnas = await $content("columnas").where({category:"desarrollo-sostenible"}).without(['body']).sortBy('date','desc').limit(8).fetch();
    const total = await $content("columnas").where({category:"desarrollo-sostenible"}).only([]).fetch();
    return {
      columnas,
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
    return{
      title: "Desarrollo Sostenible - Columnas de opinión | Ethos",
      meta: [
        {
          content: "Listado de Columnas de opinión del eje Desarrollo Sostenible",
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.ethos.org.mx/desarrollo-sostenible/columnas/'
        }
      ]
    }
  },
  methods:{
    loadPosts(){
      this.getNext();
    },

    async getNext(){
      const newCols = await this.$content("columnas").where({category:"desarrollo-sostenible"}).without(['body']).sortBy('date','desc').skip(this.columnas.length).limit(8).fetch();
      if(newCols.length > 0 ){
        this.columnas = this.columnas.concat(newCols);
        this.$store.commit('desarrollosostenible/setColumnas', this.columnas);
      }
      if(this.columnas.length == this.total.length){
        this.more = false;
      }
    }
  },
  beforeMount(){
    const cols = this.$store.state.desarrollosostenible.columnas;
    if(cols.length > 0){
      this.columnas = cols;
      if(this.columnas.length == this.total.length){
        this.more = false;
      }
    }

  },
  mounted(){
    if(this.columnas.length == this.total.length){
        this.more = false;
      }
  }
}
</script>
