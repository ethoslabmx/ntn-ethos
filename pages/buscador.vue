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
            <li> <input type="checkbox" @change="checkEjes" id="cbox1" value="anticorrupcion"> <label>Anticorrupción y transparencia</label></li>
            <li><input type="checkbox" @change="checkEjes" id="cbox1" value="finanzas-publicas"> <label>Finanzas Públicas</label></li>
            <li><input type="checkbox" @change="checkEjes" id="cbox1" value="inclusion"> <label>Inclusión</label></li>
            <li><input type="checkbox" @change="checkEjes" id="cbox1" value="desarrollo-sostenible"> <label>Desarrollo Sostenible</label></li>
            <li><input type="checkbox" @change="checkEjes" id="cbox1" value="ciudades-del-futuro"> <label>Ciudades del Futuro</label></li>
          </ul>
        </div>
        <div class="busqueda-categorias">
          <h2 class="title">CATEGORÍAS</h2>
          <ul class="title">
            <li><input type="checkbox" id="cbox1" value="first_checkbox" v-model="categorias[0]"> <label>Publicaciones</label></li>
            <li><input type="checkbox" id="cbox1" value="first_checkbox" v-model="categorias[1]"> <label>Reportajes Periodísticos</label></li>
            <li><input type="checkbox" id="cbox1" value="first_checkbox" v-model="categorias[2]"> <label>Columnas de Opinión</label></li>
            <li><input type="checkbox" id="cbox1" value="first_checkbox" v-model="categorias[3]"> <label>Noticias</label></li>
            <li><input type="checkbox" id="cbox1" value="first_checkbox" v-model="categorias[4]"> <label>Eventos</label></li>
            <li><input type="checkbox" id="cbox1" value="first_checkbox" v-model="categorias[5]"> <label>Videos</label></li>
          </ul>
        </div>
      </div>
      <div class="resultados xl:w-2/3 md:w-1/2 w-full md:mt-10">
        <h3>Resultados: {{filteredResults.length}}</h3>
        <ul class="">
          <li v-for="r in filteredResults" :key="r.slug" class="post xl:flex-row-reverse xl:flex-nowrap flex-wrap">
            <div class="xl:w-1/3 lg:w-full w-full lg:ml-10 self-center tag-container">
              <img :src="r.img" alt="" class="w-auto object-cover col-img shadow-xl">

            </div>

            <div class="content xl:w-2/3  lg:w-full  w-full">
              <NuxtLink :to="r.url" class="title xl:text-xl text-sm mb-6 block">
                <h3 class="text-md">{{ r.title }}</h3>
                <p class="tag">{{r.tipo +' / '+nombreEje(r.category)}}</p>
              </NuxtLink>
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
      ejes:[],
      categorias:[],
      resultados: []
    }
  },
  head() {
    return {
      title: 'Buscador Ethos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Buscador'
        }
      ]
    }
  },
  computed:{
    filteredResults(){
      let r = this.resultados
      if(this.ejes.length > 0){
        //console.log(this.ejes);
        r = r.filter(r => this.ejes.includes(r.category))
      } else {
        r = this.resultados.sort((a,b) => a.category - b.category);
      }
      return r;
    },
    totalResultados(){
      return this.resultados.length;
    }
  },
  methods: {
    async buscar(e) {
      e.preventDefault();
      this.resultados.splice(0);
      if(this.categorias.length == 0 || this.categorias[0] == true){
        const publicaciones = await this.$content('publicaciones').search(this.busqueda).without(['body']).fetch().catch((err) => {
          console.error({ statusCode: 404, message: 'Page not found' });
        })
        publicaciones.forEach(p => {
          p.tipo = "Publicaciones";
          p.url = p.category + "/publicaciones/" + p.slug;
          this.resultados.push(p);
        })

      }

      if(this.categorias.length == 0 || this.categorias[1] == true){
        const reportajes = await this.$content('reportajes').search(this.busqueda).without(['body']).fetch().catch((err) => {
          console.error({ statusCode: 404, message: 'Page not found' });
        })
        reportajes.forEach(p => {
          p.tipo = "Reportajes Periodísticos";
          p.url = p.category + "/reportajes/" + p.slug;
          this.resultados.push(p);
        })
       }
       if(this.categorias.length == 0 || this.categorias[2] == true){
        const columnas = await this.$content('columnas').search(this.busqueda).without(['body']).fetch().catch((err) => {
          console.error({ statusCode: 404, message: 'Page not found' });
        })
        columnas.forEach(p => {
          p.tipo = "Columnas de Opinión";
          p.url = p.category + "/columnas/" + p.slug;
          this.resultados.push(p);
        })
       }
       if(this.categorias.length == 0 || this.categorias[3] == true){
        const noticias = await this.$content('noticias').search(this.busqueda).without(['body']).fetch().catch((err) => {
          console.error({ statusCode: 404, message: 'Page not found' });
        })
        noticias.forEach(p => {
          p.tipo = "Noticias";
          p.url = p.category + "/noticias/" + p.slug;
          this.resultados.push(p);
        })
       }
        if(this.categorias.length == 0 || this.categorias[4] == true){
          const eventos = await this.$content('eventos').search(this.busqueda).without(['body']).fetch().catch((err) => {
            console.error({ statusCode: 404, message: 'Page not found' });
          })
          eventos.forEach(p => {
            p.tipo = "Eventos";
            p.url = p.category + "/eventos/" + p.slug;
            this.resultados.push(p);
          })
        }
        if(this.categorias.length == 0 || this.categorias[5] == true){
          const videos = await this.$content('videos').search(this.busqueda).without(['body']).fetch().catch((err) => {
            console.error({ statusCode: 404, message: 'Page not found' });
          })
          videos.forEach(p => {
            p.tipo = "Videos";
            p.url = p.category + "/videos/" + p.slug;
            this.resultados.push(p);
          })
        }
       //console.log(this.resultados);
    },
    getLink(slug) {
      return {
        url: '/publicaciones/' + slug,
      }
    },
    checkEjes(e){
      if(e.target.checked){
        this.ejes.push(e.target.value);
      } else {
        this.ejes.splice(this.ejes.indexOf(e.target.value), 1);
      }
    },
    nombreEje(eje){
      let nombre = '';
      switch(eje){
         case "anticorrupcion":
           nombre = "Anticorrupción";
           break;
        case "ciudades-del-futuro":
          nombre = "Ciudades del Futuro";
          break;
        case "inclusion":
          nombre = "Inclusión";
          break;
        case "finanzas-publicas":
          nombre = "Finanzas Públicas";
          break;
        case "desarrollo-sostenible":
          nombre = "Desarrollo Sostenible";
          break;
        case "think-tanks":
          nombre = "Think Tanks";
          break;
      }
      return nombre;
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

  .col-img{
    width: 100%;
    height: 150px;
    object-fit: cover;

    @media screen and (min-width: 800px) {
      height: 200px;
    }

  }

  .tag{
    margin-top: 15px;
    font-size: 0.8rem;
    right: calc(-1rem - 20px);
  }

  @media (min-width: 580px) {
    .tag{
      right: calc(-2rem - 20px);
    }
  }
  @media (min-width: 800px) {
        padding: 30px;

    .tag{
      right: calc(-3rem - 30px);
    }
  }
  @media (min-width: 1040px) {
    .tag{
      right: calc(-5rem - 40px);
    }
  }
    @media (min-width: 1100px) {
    .tag{
      right: calc(-6rem - 40px);
    }
  }
    @media (min-width: 1200px) {
    padding: 40px;

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
