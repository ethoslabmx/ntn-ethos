<template>
  <div class="busqueda">
    <div class="filtros">
      <div class="buscador">
        <input type="text" placeholder="Buscador" v-model="busqueda" @keyup.enter="buscar">
      </div>
      <div class="busqueda-ejes">
        <ul>
          <li>Anticorrupción y transparencia</li>
          <li>Finanzas Públicas</li>
          <li>Inclusión</li>
          <li>Desarrollo Sostenible</li>
          <li>Ciudades del Futuro</li>
        </ul>
      </div>
      <div class="busqueda-categorias">
        <ul>
          <li>Publicaciones</li>
          <li>Reportajes Periodísticos</li>
          <li>Columnas de Opinión</li>
          <li>Noticias</li>
          <li>Eventos</li>
          <li>Videos</li>
        </ul>
      </div>
    </div>
    <div class="resultados">
      <ul>
        <li v-for="r in resultados" :key="r.slug">
          <h3>{{r.title}}</h3>
          <img :src="r.img" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      busqueda: '',
      resultados: []
    }
  },
  methods: {
    async buscar(e) {
      e.preventDefault();
      const publicaciones = await this.$content('publicaciones').search(this.busqueda).fetch().catch((err) => {
        console.error({ statusCode: 404, message: 'Page not found' });
      })
      const columnas = await this.$content('columnas').search(this.busqueda).fetch().catch((err) => {
        console.error({ statusCode: 404, message: 'Page not found' });
      })
      const eventos = await this.$content('eventos').search(this.busqueda).fetch().catch((err) => {
        console.error({ statusCode: 404, message: 'Page not found' });
      })
      this.resultados = publicaciones.concat(columnas).concat(eventos);
    }
  }

}
</script>
<style lang="sass">

</style>
