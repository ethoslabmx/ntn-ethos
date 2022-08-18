<template>
  <div>
    <JumbotronEquipo />
    <div class="equipo py-20 border-b-16 border-primary app">
      <section class="container  mx-auto">
        <div class="flex flex-wrap lg:flex-nowrap">

          <div class="w-full lg:w-1/2">
            <ul class="list puestos">
              <li >
                <div @click="p1 = !p1">DIRECCIÓN GENERAL</div>
                <ul class="nombres" v-if="p1">
                  <li v-for="e in dg" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
              <li >
                <div @click="p2 = !p2">DIRECCIÓN DE DESARROLLO INSTITUCIONAL</div>
                <ul class="nombres" v-if="p2">
                  <li v-for="e in di" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
              <li >
                <div @click="p3 = !p3">FINANZAS PÚBLICAS Y ANTICORRUPCIÓN</div>
                <ul class="nombres" v-if="p3">
                  <li v-for="e in fp" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
              <li >
                <div @click="p4 = !p4">INCLUSIÓN Y DESARROLLO SOSTENIBLE</div>
                <ul class="nombres" v-if="p4">
                  <li v-for="e in id" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
              <li >
                <div @click="p5 = !p5">CIUDADES DEL FUTURO</div>
                <ul class="nombres" v-if="p5">
                  <li v-for="e in cf" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
              <li >
                <div @click="p6 = !p6">COMUNICACIÓN Y PRENSA</div>
                <ul class="nombres" v-if="p6">
                  <li v-for="e in cp" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
              <li >
                <div @click="p7 = !p7">ADMINISTRACIÓN Y RECURSOS HUMANOS</div>
                <ul class="nombres" v-if="p7">
                  <li v-for="e in ar" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
              <li >
                <div @click="p8 = !p8">PROGRAMA DE INTERNSHIP</div>
                <ul class="nombres" v-if="p8">
                  <li v-for="e in pi" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
              <li >
                <div @click="p9 = !p9">ASAMBLEA DE ASOCIADOS</div>
                <ul class="nombres" v-if="p9">
                  <li v-for="e in aa" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
              <li >
                <div @click="p10 = !p10">CONSEJO DIRECTIVO</div>
                <ul class="nombres" v-if="p10">
                  <li v-for="e in cd" :key="e.nombre" @click="selectEmployee(e.nombre)">{{e.nombre}}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="w-full  h-0.5  my-7   lg:w-0.5 lg:h-screen lg:mx-5 bg-gray-dark "></div>
          <div class="w-full lg:w-1/2 px-10">
            <div class="avatar">
              <img :src="seleccionado.img" alt="" class="w-96 h-auto mx-auto"/>
            </div>
            <p class="title mt-6 text-right">{{ seleccionado.nombre}}</p>
            <p class="title mb-6 text-right">{{ seleccionado.puesto }}</p>
            <p class="desc">
              {{ seleccionado.semblanza }}
            </p>
            <div class="h-0.5 w-full my-5 bg-gray-dark "></div>
            <div class="contacto mt-6 flex flex-col ">
              <div class="mail title xl:text-sm text-xs">
                <a :href="'mailto:'+seleccionado.email"> {{ seleccionado.email }}</a></div>
              <a v-show="seleccionado.twitter" :href="'//twitter.com/'+seleccionado.twitter" target="_blank" class="ml-auto block mt-3"><img src="../../assets/images/twwt-orange.png" alt="" class="w-30 h-auto"></a>
            </div>
          </div>

        </div>
      </section>
    </div>

  </div>
</template>

<script>
import JumbotronEquipo from '~/components/JumbotronEquipo.vue';

export default {
  components: { JumbotronEquipo },
  async asyncData({ $content }) {
    const personal = await $content("personal").fetch();
    const dg = await $content("personal").where({area:'dirección general'}).only('nombre').fetch();
    const di = await $content("personal").where({area:'dirección de desarrollo institucional'}).only('nombre').fetch();
    const fp = await $content("personal").where({area:'finanzas públicas y anticorrupción'}).only('nombre').fetch();
    const id = await $content("personal").where({area:'inclusión y desarrollo sostenible'}).only('nombre').fetch();
    const cf = await $content("personal").where({area:'ciudades del futuro'}).only('nombre').fetch();
    const cp = await $content("personal").where({area:'comunicación y prensa'}).only('nombre').fetch();
    const ar = await $content("personal").where({area:'administración y recursos humanos'}).only('nombre').fetch();
    const pi = await $content("personal").where({area:'programa de internship'}).only('nombre').fetch();
    const aa = await $content("personal").where({area:'asamblea de asociados'}).only('nombre').fetch();
    const cd = await $content("personal").where({area:'consejo directivo'}).only('nombre').fetch();
    return {
      personal,
      dg,di,fp,id,cf,cp,ar,pi,aa,cd
    };
  },
  mounted(){
    this.selectEmployee(this.dg[0].nombre);
  },


  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      seleccionado:{
        nombre:"",
        puesto:"",
        semblanza:"",
        email:"",
        twitter:"",
        img:""
      },
      p1:false,
      p2:false,
      p3:false,
      p4:false,
      p5:false,
      p6:false,
      p7:false,
      p8:false,
      p9:false,
      p10:false,
      puestos: ["DIRECCIÓN GENERAL", "DIRECCIÓN DE DESARROLLO INSTITUCIONAL", "FINANZAS PÚBLICAS Y ANTICORRUPCIÓN", "INCLUSIÓN Y DESARROLLO SOSTENIBLE", "CIUDADES DEL FUTURO", "COMUNICACIÓN Y PRENSA", "ADMINISTRACIÓN Y RECURSOS HUMANOS", "PROGRAMA DE INTERNSHIP", "ASAMBLEA DE ASOCIADOS", "CONSEJO DIRECTIVO"],         // all of the tabs
      personal: [
        { nombre: "Liliana Alvarado", puesto: "DIRECTORA GENERAL", semblanza: "Maestra en Políticas Públicas y Administración (LSE) y licenciada en Relaciones Internacionales por el ITAM. Colaboró en la SHCP, donde adquirió una amplia experiencia en materia fiscal. Asimismo, trabajó en FUNDAR en el área de presupuestos públicos, en transparencia presupuestaria y rendición de cuentas. Durante los últimos años ha recibido diversas capacitaciones en la Universidad de Harvard en temas tributarios, en la International Anti-Corruption Academy de Austria en anticorrupción, en economía del comportamiento en el CIDE, entre otras. En Ethos tiene una larga trayectoria y actualmente se desempeña como Directora General, en donde ha coordinado diversos proyectos en materia de transparencia y rendición de cuentas, anticorrupción, gasto y política fiscal. Adicionalmente, es comentarista para Grupo Fórmula en el noticiero de Eduardo Ruiz Healy y columnista invitada en el periódico El Economista.", email: "liliana.alvarado@ethos.org.mx", twitter: "" },
        { nombre: "", puesto: "", semblanza: "", email: "", twitter: "" },
        { nombre: "", puesto: "", semblanza: "", email: "", twitter: "" },
        { nombre: "", puesto: "", semblanza: "", email: "", twitter: "" },
        { nombre: "", puesto: "", semblanza: "", email: "", twitter: "" },
        { nombre: "", puesto: "", semblanza: "", email: "", twitter: "" },
        { nombre: "", puesto: "", semblanza: "", email: "", twitter: "" },
        { nombre: "", puesto: "", semblanza: "", email: "", twitter: "" },
        { nombre: "", puesto: "", semblanza: "", email: "", twitter: "" },
        { nombre: "", puesto: "", semblanza: "", email: "", twitter: "" }
      ]
    }
  },

  methods: {
    showPersonal(){

    },
    selectEmployee(nombre) {
      this.personal.filter(function(item) {

        if (item.nombre.toLowerCase() == nombre.toLowerCase()) {
          //console.log(item.img);
          this.$set(this.seleccionado,'nombre',item.nombre);
          this.$set(this.seleccionado,'puesto',item.puesto);
          this.$set(this.seleccionado,'semblanza',item.semblanza);
          this.$set(this.seleccionado,'email',item.email);
          this.$set(this.seleccionado,'twitter',item.twitter);
          this.$set(this.seleccionado,'img',item.foto);
        }
      }.bind(this));
    }
  }
}
</script>
<style lang="scss">
.avatar{

    height: 18rem;
    width: 19rem;
    position: relative;
    background-repeat: no-repeat;
    margin: auto;
    background-position: center;
  img{
    width: 100%;
    position: absolute;
    top: 1rem;
    object-fit: cover;
    height: 100%;
  }
}

.equipo{
  background-color: #fff;
}

.nombres{
  color:#4294AE;
  font-family: 'Saira', sans-serif;
  font-weight: 700;
  text-align: right;

    li{
      font-size: 1rem !important;
      margin:5px 0!important;
    }
}

.list{
  margin-top: 2rem;
  margin-right: 2rem;
}

.list li {
  font-size: 20px;
  margin-bottom: 1rem;
  cursor: pointer;
  text-align: right;


  @media(min-width: 768px) {
    font-size: 22px;
    margin-bottom: 1.5rem;

  }
}
</style>
