
<template>
  <div class="app">
    <JumbotronEje title="CIUDADES DEL FUTURO" subtitle="REPORTAJES PERIODÍSTICOS" image="reportajes-thumb.jpg"/>
    <Micrositios eje="ciudades-del-futuro" categoria="reportajes" :micrositios="micrositios" />
    <ListadoPublicaciones :posts="posts" eje="ciudades-del-futuro" categoria="reportajes" />
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
  components: { JumbotronEje, Micrositios, ListadoPublicaciones},
  data(){
    return {
      loading: false,
      more:true,
    }
  },
  head() {
    return {
      title: 'Ciudades del futuro - Reportajes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Reportajes de Ciudades del futuro'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.ethos.org.mx/ciudades-del-futuro/reportajes' }
      ]
    };
  },
  async asyncData({ $content }) {
    const micrositios = await $content("micrositios").where({eje:"ciudades-del-futuro",category:"reportajes"}).sortBy('date','desc').fetch();
    const posts = await $content("reportajes").where({category:"ciudades-del-futuro"}).without(['body']).sortBy('date','desc').limit(8).fetch();
    const total = await $content("reportajes").where({category:"ciudades-del-futuro"}).only([]).fetch();
    return {
      posts,
      micrositios,
      total
    };
  },
  methods:{
    loadPosts(){
      this.getNext();
    },
    async getNext(){
      const newEvents = await this.$content("reportajes").where({category:"ciudades-del-futuro"}).without(['body']).sortBy('date','desc').skip(this.posts.length).limit(8).fetch();
      if(newEvents.length < 8){
        this.posts = this.posts.concat(newEvents);
        this.$store.commit('ciudadesdelfuturo/setReportajes', this.posts);
      }

      if(this.posts.length == this.total.length){
        this.more = false;
      }

    }
  },
  beforeMount(){
    const cols = this.$store.state.ciudadesdelfuturo.reportajes;
    if(cols.length > 0){
      this.posts = cols;
    }
  },
  mounted(){
    if(this.posts.length == this.total.length){
        this.more = false;
      }
  }
}
</script>
