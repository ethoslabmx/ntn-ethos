<template>
  <div>
    <JumbotronEquipo />
    <div class="bg-white py-20 border-b-16 border-primary">
      <section class="container mx-auto md:px-4 xl:px-0">
        <div class="flex flex-wrap lg:flex-nowrap">

          <div class="w-full lg:w-1/2">
            <ul class="list">
              <li v-for="puesto in puestos" :key="puesto">{{ puesto }}</li>
            </ul>
          </div>
          <div class="w-full  h-0.5  my-7   lg:w-0.5 lg:h-screen lg:mx-5 bg-gray-dark "></div>
          <div class="w-full lg:w-1/2 px-10">
            <div class="avatar">
              <img src="../../assets/images/person.png" alt="" class="w-96 h-auto mx-auto"/>
            </div>
            <p class="title mt-6 text-right">{{ personal[0].nombre }}</p>
            <p class="title mb-6 text-right">{{ personal[0].puesto }}</p>
            <p class="desc">
              {{ personal[0].semblanza }}
            </p>
            <div class="h-0.5 w-full my-5 bg-gray-dark "></div>
            <div class="contacto mt-6 flex flex-col ">
              <div class="mail title xl:text-sm text-xs">{{ personal[0].email }}</div>
              <a class="ml-auto block mt-3"><img src="../../assets/images/twwt-orange.png" alt="" class="w-30 h-auto"></a>
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

  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
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
}
</script>
<style lang="scss">
.avatar{
  background-image: url(../../assets/images/aros-back.png);
    background-size: contain;
    height: 18rem;
    width: 17rem;
    position: relative;
    background-repeat: no-repeat;
    margin: auto;
    background-position: center;
  img{
    width: 100%;
    position: absolute;
    top: -1rem;
    object-fit: cover;
    height: 100%;
  }
}
.list li {
  font-size: 20px;
  margin-bottom: 1rem;

  @media(min-width: 768px) {
    font-size: 22px;
    margin-bottom: 1.5rem;

  }
}
</style>
