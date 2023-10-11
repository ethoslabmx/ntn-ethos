<template>
  <div class="border-b-16 border-primary app">
    <JumbotronEje title="Think Tanks" subtitle="Publicaciones" image="desarollo-sostenible-thumb.png"/>

    <ListadoPublicaciones :posts="posts" eje="think-tanks" categoria="publicaciones" />
    <li class="post last">
      <div class="container px-5 xl:px-28 py-10" v-if="more">
        <button class="ml-auto more-btn bold" @click="loadPosts">VER MÁS <span class="icon"></span></button>
      </div>
    </li>
  </div>
</template>

<script>
import JumbotronEje from '~/components/JumbotronEje.vue';

import ListadoPublicaciones from '~/components/ListadoPublicaciones.vue';

export default {
  components: { JumbotronEje,  ListadoPublicaciones, ListadoPublicaciones },
  data(){
    return {
      loading: false,
      total: 0,
      more:true,
    }
  },
  head() {
    return {
      title: 'Think Tanks - Publicaciones',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Publicaciones de Think Tanks'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.ethos.org.mx/think-tanks/publicaciones' }
      ]
    };
  },
  async asyncData({ $content }) {


    const posts = await $content("publicaciones").where({category:"think-tanks"}).without(['body']).sortBy('date','desc').limit(8).fetch();
    const total = await $content("publicaciones").where({category:"think-tanks"}).only([]).fetch();
    return {
      posts,

      total
    };
  },
  methods:{
    loadPosts(){
      this.getNext();
    },

    async getNext(){
      const newPosts = await this.$content("publicaciones").where({category:"think-tanks"}).without(['body']).sortBy('date','desc').skip(this.posts.length).limit(8).fetch();
      if(newPosts.length > 0 ){
        this.posts = this.posts.concat(newPosts);
        this.$store.commit('thinktanks/setPublicaciones', this.posts);
      }

      if(this.posts.length == this.total.length){
        this.more = false;
      }

    }
  },
  beforeMount(){
    const p = this.$store.state.thinktanks.publicaciones;
    if(p.length > 0){
      this.posts= p;
    }
  },
  mounted(){
    if(this.posts.length == this.total.length){
        this.more = false;
      }
  }
}
</script>
