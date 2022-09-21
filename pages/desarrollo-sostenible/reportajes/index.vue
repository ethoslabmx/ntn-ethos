<template>
  <div class="app">
    <JumbotronEje title="DESARROLLO SOSTENIBLE" subtitle="REPORTAJES PERIODÍSTICOS" image="reportajes-thumb.jpg"/>
    <Micrositios eje="desarrollo-sostenible" categoria="reportajes" :micrositios="micrositios" />
    <ListadoPublicaciones :posts="posts" eje="desarrollo-sostenible" categoria="reportajes" />
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
  components: { JumbotronEje, Micrositios, ListadoPublicaciones },
  data(){
    return {
      loading: false,
      more:true,
    }
  },
  async asyncData({ $content }) {
    const micrositios = await $content("micrositios").where({eje:"desarrollo-sostenible",category:"reportajes"}).sortBy('date','desc').fetch();
    const posts = await $content("reportajes").where({category:"desarrollo-sostenible"}).without(['body']).sortBy('date','desc').limit(8).fetch();
    const total = await $content("reportajes").where({category:"desarrollo-sostenible"}).only([]).fetch();

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
      const newEvents = await this.$content("reportajes").where({category:"desarrollo-sostenible"}).without(['body']).sortBy('date','desc').skip(this.posts.length).limit(8).fetch();
      if(newEvents.length > 0){
        this.posts = this.posts.concat(newEvents);
        this.$store.commit('desarrollosostenible/setReportajes', this.posts);
      }

      if(this.posts.length == this.total.length){
        this.more = false;
      }

    }
  },
  beforeMount(){
    const cols = this.$store.state.desarrollosostenible.reportajes;
    if(cols.length > 0){
      this.posts= cols;
    }
  },
  mounted(){
    if(this.posts.length == this.total.length){
        this.more = false;
      }
  }
}
</script>
