<template>
  <div class="busqueda bg-white xl:p-20 p-5">
    <div class="flex items-start flex-wrap xl:flex-nowrap">
      <div class="filtros xl:w-1/3 md:w-1/2 w-full">
        <div class="buscador mb-10 ">
          <input type="text" placeholder="Buscador" v-model="busqueda" @keyup.enter="buscar"
            class="hover:border-gray  focus:border-primary-light">
          <button @click="buscar"></button>
        </div>
        <div class="busqueda-ejes mb-10">
          <h2 class="title">EJES</h2>
          <ul class="title">
            <li> <input type="checkbox" id="cbox1" value="first_checkbox"> <label>Anticorrupción y transparencia</label></li>
            <li><input type="checkbox" id="cbox1" value="first_checkbox"> <label>Finanzas Públicas</label></li>
            <li><input type="checkbox" id="cbox1" value="first_checkbox"> <label>Inclusión</label></li>
            <li><input type="checkbox" id="cbox1" value="first_checkbox"> <label>Desarrollo Sostenible</label></li>
            <li><input type="checkbox" id="cbox1" value="first_checkbox"> <label>Ciudades del Futuro</label></li>
          </ul>
        </div>
        <div class="busqueda-categorias">
          <h2 class="title">CATEGORÍAS</h2>
          <ul class="title">
            <li>Publicaciones</li>
            <li>Reportajes Periodísticos</li>
            <li>Columnas de Opinión</li>
            <li>Noticias</li>
            <li>Eventos</li>
            <li>Videos</li>
          </ul>
        </div>
      </div>
      <div class="resultados xl:w-2/3 md:w-1/2 w-full md:mt-10">
        <ul>
          <li v-for="r in resultados" :key="r.slug" class="post xl:flex-row-reverse xl:flex-nowrap flex-wrap">
            <div class="xl:w-1/3 lg:w-full w-full lg:ml-10"><img :src="r.img" alt="" class="shadow-xl" /></div>
            <div class="content xl:w-2/3  lg:w-full  w-full">
              <h3 class="xl:text-lg text-md">{{ r.title }}</h3>
            </div>
          </li>
        </ul>
      </div>
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
<style lang="scss">
$black: #1F1F1F;

.busqueda{
  input[type="checkbox"]{
    display:inline-block;
  }
}

input[type="text"] {
  border: 1px solid $black;
  padding: .5rem 1rem;
  border-radius: .25rem;
  text-transform: uppercase;
  height: 40px;
  width: 100%;

  @media (min-width: 1200px) {
    width: auto;

  }

}

.busqueda {

  .buscador {
    display: flex;
    align-items: center;

    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button {
      background-color: $black;
      width: 40px;
      height: 40px;
      border-radius: .25rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

  }

  ul {
    margin: 1.5rem 0;
    padding: 0 2rem;

    li {
      padding-left: 1rem;
      margin-bottom: .5rem;
      text-transform: none;
      letter-spacing: 0.055em;
      font-weight: 400;
      font-family: Roboto, Helvetica, Arial, sans-serif;

      h3 {
        text-transform: uppercase;
      }

      &.post {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        padding: 1rem 0;
        border-bottom: 1px solid #828282;

        .content {
          text-align: right;
          padding: 1rem;
        }

        img {
          width: auto;
          height: 150px;
          object-fit: contain;
          margin: auto;
          display: block;

        }


      }
    }

    @media (min-width: 1200px) {

      li.post {
        img {
          object-fit: cover;
          height: 135px;
        }
      }


    }
  }

  .resultados {
    ul {
      margin: 0;
      padding: 0 ;
      @media (min-width: 1200px) {

      padding: 0 2rem;


    }
    }
  }
}
</style>
