<template>
  <div class="border-b-16 border-primary app">
    <JumbotronDoc />
    <div class="documentos bg-white">
      <div class="documento container py-20 flex items-center justify-between" v-for="d in documentos" :key="d.titulo">
        <div class="col self-start">
          <h2 class="lg:text-2xl text-lg title mb-6">{{d.titulo}}</h2>
          <p>{{d.autor}}</p>
        </div>
        <div class="col">
          <img :src="d.img" alt="" class="">

          <a href="d.link" class="bg-gray-dark font py-2 px-3 rounded-md my-3 text-white">Descargar</a>
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
}
</script>
