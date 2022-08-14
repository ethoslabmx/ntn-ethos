<template>
  <div>
    <div class="hero">
      <h1>Documentos Institucionales</h1>
      <p>Encuentra aquí nuestras políticas organizacionales.</p>
    </div>
    <div class="documentos">
      <div class="documento" v-for="d in documentos" :key="d.titulo">
        <div class="col">
          <h2>{{d.titulo}}</h2>
          <p>{{d.autor}}</p>
        </div>
        <div class="col">
          <img :src="d.img" alt="">
          <a href="d.link">Descargar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const documentos= await $content("documentos").fetch();
    return {
      documentos
    };
  },
}
</script>
