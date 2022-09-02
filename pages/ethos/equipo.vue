<template>
  <div>
    <JumbotronEquipo />
    <div class="equipo py-10 md:py-20 border-b-16 border-primary app">
      <section class="container">
        <div class="flex flex-wrap md:flex-nowrap md:flex-row-reverse" id="personal">

          <div class="w-full xl:w-1/2 md:2/3 flex items-start border-b-2 md:border-l-2 md:border-b-0 border-gray-dark" >
            <div class="content md:px-5 pb-10 md:pb-0 w-full fade-in-right"  id="avatar-container" v-if="seleccionado.nombre">
               <div class="avatar" v-if="seleccionado.img">
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
          <div class="w-full xl:w-1/2 md:1/3">
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
                <div @click="p8 = !p8">PROGRAMA DE PASANTÍAS</div>
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


        </div>
      </section>
    </div>

  </div>
</template>

<script>
import JumbotronEquipo from '~/components/JumbotronEquipo.vue';

export default {
  components: { JumbotronEquipo },
  transition: 'slide-bottom',
  async asyncData({ $content }) {
    const personal = await $content("personal").fetch();
    const dg = await $content("personal").where({area:'dirección general'}).only('nombre').sortBy('pos').fetch();
    const di = await $content("personal").where({area:'dirección de desarrollo institucional'}).only('nombre').sortBy('pos').fetch();
    const fp = await $content("personal").where({area:'finanzas públicas y anticorrupción'}).only('nombre').sortBy('pos').fetch();
    const id = await $content("personal").where({area:'inclusión y desarrollo sostenible'}).only('nombre').sortBy('pos').fetch();
    const cf = await $content("personal").where({area:'ciudades del futuro'}).only('nombre').sortBy('pos').fetch();
    const cp = await $content("personal").where({area:'comunicación y prensa'}).only('nombre').sortBy('pos').fetch();
    const ar = await $content("personal").where({area:'administración y recursos humanos'}).only('nombre').sortBy('pos').fetch();
    const pi = await $content("personal").where({area:'programa de internship'}).only('nombre').sortBy('pos').fetch();
    const aa = await $content("personal").where({area:'asamblea de asociados'}).only('nombre').sortBy('pos').fetch();
    const cd = await $content("personal").where({area:'consejo directivo'}).only('nombre').sortBy('pos').fetch();
    return {
      personal,
      dg,di,fp,id,cf,cp,ar,pi,aa,cd
    };
  },
  mounted(){
    //this.selectEmployee(this.dg[0].nombre);
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
      if(this.seleccionado.nombre != ''){
          console.log(this.seleccionado.nombre)
          document.querySelector('#avatar-container').classList.remove('fade-in-right');
        }
      this.personal.filter(function(item) {


        if (item.nombre.toLowerCase() == nombre.toLowerCase()) {
          //console.log(item.img);

          this.$set(this.seleccionado,'nombre',item.nombre);
          this.$set(this.seleccionado,'img',item.foto);
          this.$set(this.seleccionado,'puesto',item.puesto);
          this.$set(this.seleccionado,'semblanza',item.semblanza);
          this.$set(this.seleccionado,'email',item.email);
          this.$set(this.seleccionado,'twitter',item.twitter);

          setTimeout(()=>{
            const avatarContainer = document.querySelector('#avatar-container');
            //console.log(avatarContainer)
            avatarContainer.classList.remove('fade-in-right');
            document.getElementById('personal').scrollIntoView();
            avatarContainer.classList.add('fade-in-right');
          },100)
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

#avatar-container{
  opacity: 0;
  transition: all 0.5s ease;
  &.fade-in-right{
    opacity: 1;
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



.list {
   margin-top: 1rem;
  margin-right: 0rem;
  li {
  font-size: 14px;
  margin-bottom: 1rem;
  cursor: pointer;
  text-align: right;
  transition: all 0.5s ease;

}
  @media(min-width:700px) {
  margin-right: 2rem;

  }
  @media(min-width: 1100px) {

 margin-top: 2rem;

    li{
      font-size: 22px;
    margin-bottom: 1.5rem;
    }

  }
}

@media (max-width:400px) {
  .mail.text-xs{
    font-size: 10px;
  }
}


.fade-in-right {
	-webkit-animation: fade-in-right 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-right 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(150px);
            transform: translateX(150px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-right {
  0% {
    -webkit-transform: translateX(150px);
            transform: translateX(150px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

</style>
