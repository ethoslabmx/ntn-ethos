<template>
  <div class="app">
    <JumbotronEje
      title="ANTICORRUPCIÓN"
      subtitle="Columnas de opinión"
      image="writer.jpg"
    />

    <ul class="border-b-16 border-primary">
      <ListadoPublicaciones :posts="columnas" eje="anticorrupcion" categoria="columnas" />
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

  data() {
    return {
      loading: false,
      total: 0,
      more: true,
    };
  },
  head() {
    return{
      title: "Anticorrupción - Columnas de opinión | Ethos",
      meta: [
        {
          content: "Listado de Columnas de opinión del eje Anticorrupción",
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.ethos.org.mx/anticorrupcion/columnas/'
        }
      ]
    }
  },

  async asyncData({ $content }) {
    const columnas = await $content("columnas").where({ category: "anticorrupcion" }).without(["body"]).sortBy("date", "desc").limit(8).fetch();

    const total = await $content("columnas").where({category:"anticorrupcion"}).only([]).fetch();
    return {
      columnas,
      total
    };
  },

  methods: {
    loadPosts() {
      this.getNext();
    },
    async getNext() {
      const newCols = await this.$content("columnas")
        .where({ category: "anticorrupcion" })
        .without(["body"])
        .sortBy("date", "desc")
        .skip(this.columnas.length)
        .limit(8)
        .fetch();

      if (newCols.length == 8) {
        this.columnas = this.columnas.concat(newCols);
        this.$store.commit("anticorrupcion/setColumnas", this.columnas);
      } else if (newCols.length > 0 && newCols.length < 8) {
        this.columnas = this.columnas.concat(newCols);
        this.$store.commit("anticorrupcion/setColumnas", this.columnas);
        this.more = false;
      }

      if (this.columnas.length == this.total.length) {
        this.more = false;
      }
    },
  },
  beforeMount() {
    const cols = this.$store.state.anticorrupcion.columnas;
    if (cols.length > 0) {
      this.columnas = cols;
    }
  },
  mounted(){
    if(this.columnas.length == this.total.length){
        this.more = false;
      }
  }
};
</script>
