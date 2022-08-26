<template>
  <div class="border-b-16 border-primary app">
    <JumbotronDoc />
    <div class="documentos bg-white">
      <div class="documento container py-20 flex flex-wrap 2xl:flex-nowrap items-center justify-between" v-for="d in documentos" :key="d.titulo">
        <div class="col self-start">
          <h2 class="lg:text-2xl text-lg title mb-6">{{d.titulo}}</h2>
          <p>{{d.autor}}</p>
        </div>
        <div class="col mt-6 2xl:mt-0 mx-auto 2xl:ml-auto 2xl:mr-0">
          <img :src="d.img" alt="" class="doc-cover">

          <a href="" @click="download(d.file)" class="block mx-auto bg-gray-dark py-2 px-7 rounded-md my-3 text-white">Descargar</a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JumbotronDoc from '~/components/JumbotronDoc.vue';

export default {

  components: { JumbotronDoc },

  async asyncData({ $content }) {
    const documentos= await $content("documentos").fetch();
    return {
      documentos
    };
  },
  methods:{
    download(url){
      console.log(url);
      window.open(url);
    }
  }
}
</script>

<style lang="scss">
.doc-cover {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: 50% 50%;
}
</style>
