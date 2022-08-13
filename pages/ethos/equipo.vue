<template>
  <div>
    <div class="hero">
      <h1>EQUIPO</h1>
      <p>Contamos con un equipo multidisciplinario e internacional de economistas, abogados, politólogos, comunicadores y diseñadores, con experiencia variada en el gobierno y la política, la academia y el sector social, motivados para producir investigaciones y propuestas integrales e innovadoras.</p>
    </div>
    <section>
      <div>
        <ul>
          <li v-for="puesto in puestos" :key="puesto">{{puesto}}</li>
        </ul>
      </div>
      <div>
        <img src="" alt="">
        <p>{{personal[0].nombre}}</p>
        <p>{{personal[0].puesto}}</p>
        <p class="desc">
          {{personal[0].semblanza}}
        </p>
        <div class="contacto">
          <div class="mail">{{personal[0].email}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      puestos: ["DIRECCIÓN GENERAL","DIRECCIÓN DE DESARROLLO INSTITUCIONAL","FINANZAS PÚBLICAS Y ANTICORRUPCIÓN","INCLUSIÓN Y DESARROLLO SOSTENIBLE","CIUDADES DEL FUTURO","COMUNICACIÓN Y PRENSA","ADMINISTRACIÓN Y RECURSOS HUMANOS","PROGRAMA DE INTERNSHIP","ASAMBLEA DE ASOCIADOS","CONSEJO DIRECTIVO"],         // all of the tabs
      personal:[
        {nombre:"Liliana Alvarado",puesto:"DIRECTORA GENERAL",semblanza:"Maestra en Políticas Públicas y Administración (LSE) y licenciada en Relaciones Internacionales por el ITAM. Colaboró en la SHCP, donde adquirió una amplia experiencia en materia fiscal. Asimismo, trabajó en FUNDAR en el área de presupuestos públicos, en transparencia presupuestaria y rendición de cuentas. Durante los últimos años ha recibido diversas capacitaciones en la Universidad de Harvard en temas tributarios, en la International Anti-Corruption Academy de Austria en anticorrupción, en economía del comportamiento en el CIDE, entre otras. En Ethos tiene una larga trayectoria y actualmente se desempeña como Directora General, en donde ha coordinado diversos proyectos en materia de transparencia y rendición de cuentas, anticorrupción, gasto y política fiscal. Adicionalmente, es comentarista para Grupo Fórmula en el noticiero de Eduardo Ruiz Healy y columnista invitada en el periódico El Economista.",email:"liliana.alvarado@ethos.org.mx",twitter:""},
        {nombre:"",puesto:"",semblanza:"",email:"",twitter:""},
        {nombre:"",puesto:"",semblanza:"",email:"",twitter:""},
        {nombre:"",puesto:"",semblanza:"",email:"",twitter:""},
        {nombre:"",puesto:"",semblanza:"",email:"",twitter:""},
        {nombre:"",puesto:"",semblanza:"",email:"",twitter:""},
        {nombre:"",puesto:"",semblanza:"",email:"",twitter:""},
        {nombre:"",puesto:"",semblanza:"",email:"",twitter:""},
        {nombre:"",puesto:"",semblanza:"",email:"",twitter:""},
        {nombre:"",puesto:"",semblanza:"",email:"",twitter:""}
      ]
    }
  },
}
</script>
