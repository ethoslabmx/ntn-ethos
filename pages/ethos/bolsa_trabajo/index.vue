<template>
  <div class="app">
    <JumbotronBolsa />
    <div class="bg-white border-b-16 border-primary">
      <div class="container py-20">

        <div class="content flex items-start  flex-wrap">

          <div class="detalles 2xl:w-3/4 xl:w-2/3 w-full">
            <div class="mb-24">
              <h2 class="lg:text-3xl text-lg title mb-6 tracking-wide">CONSULTOR/A</h2>

              <p class="lg:text-2xl text-sm title mb-6 tracking-wide font-light">PARA POSICIONAR AL SECTOR
                PESQUERO EN LA AGENDA DE
                SISTEMAS ALIMENTARIOS.</p>
            </div>

            <div class="mb-10">
              <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">PERFIL ACADÉMICO</h2>

              <p>Carrera: Deseable que cuente con estudios de posgrado en áreas relacionadas a los sistemas
                alimentarios.
              </p>
              <p>Intereses: Políticas públicas con enfoque agro (agropecuarias, agroalimentarias y/o agroindustriales)
                y/o
                las políticas pesqueras de México.</p>
            </div>

            <div class="mb-10">
              <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">RESPONSABILIDADES</h2>

              <p>Mapeo de actores políticamente relevantes
                (¿Quienes mueven estas agendas?)
              </p>
              <p>Gestión de reuniones estratégicas con actores clave (del sector público) y el equipo de Ethos y EDF de
                México (4 a 5 reuniones, aproximadamente).
              </p>
              <p>Networking con actores claves.</p>
              <p>

                Formular recomendaciones puntuales junto con una hoja de ruta para guiar el posicionamiento político de
                la
                pesca en la agenda pública de sistemas alimentarios en México.
              </p>
              <p>
                Asesoría para el diseño del Foro Nacional sobre Pesca y Sistemas Alimentarios.</p>
            </div>
            <div class="mb-10">
              <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">REQUISITOS</h2>



              <p>Más de 15 años de experiencia en temas relacionados a las políticas agro (agropecuarias,
                agroalimentarias
                y/o
                agroindustriales) y/o las políticas pesqueras de México.
              </p>
              <p>
                Más de 10 años ocupando puestos de alto nivel relacionados con las políticas agro y/o pesqueras de
                México
                (sector público/organismos internacionales/sociedad civil).
              </p>
              <p>Conocimiento de las redes formales e informales que pautan los sistemas alimentarios en México y a
                nivel
                internacional.
              </p>
              <p>Conocimiento de la agenda agropecuaria y pesquera.</p>
              <p>Conocimiento de la legislación y normatividad que rige a los sistemas alimentarios en México.</p>
              <p>Excelente nivel de inglés hablado y escrito.</p>
            </div>

            <div class="mb-10">
              <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">OFRECEMOS</h2>

              <p>Ser parte de un equipo multidisciplinario, multicultural y dinámico.</p>
              <p>La duración de la consultoría es de aproximadamente 15 días (por negociar) distribuidos entre el 1 de
                mayo
                y
                el 31 de julio del 2022.</p>
            </div>

            <div class="mb-10">
              <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">CONDICIONES</h2>

              <p>
                Ethos ofrece sueldos competitivos, con el objetivo de contar con el personal más preparado y
                profesional.
              </p>
              <p>La cifra se determinará conforme las competencias de las y los candidatos.</p>
              <p> Lunes a viernes.</p>

            </div>
            <div class="mb-10">
              <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">ENVIAR CV Y CARTA DE EXPOSICIÓN DE MOTIVOS A:
              </h2>
              <p>
                Ana Paula Sandoval
                ana.sandoval@ethos.org.mx</p>
              <p>*Favor de colocar como asunto del correo:
                Vacante – Consultor Sistemas Alimentarios.</p>
            </div>
          </div>
          <div class="img 2xl:w-1/4 xl:w-1/3 w-full ">
            <img src="../../../assets/images/cv.png" alt="" class="w-auto h-52 mb-3 shadow-xl  mb-6 ml-auto" />
            <button class="block ml-auto bg-gray-dark font py-2 px-7 rounded-md my-3 text-white">Descargar</button>

          </div>
            <div class="bg-gray-dark h-px w-full my-20 2xl:w-3/4 xl:w-2/3 w-full"></div>

        </div>




        <div class="content flex flex-col">
          <div class="vacantes mb-6 2xl:w-3/4 xl:w-2/3 w-full">
          <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">VACANTES</h2>
          <div>
            <li v-for="v in vacantes" :key="v.puesto">
              <NuxtLink :to="'bolsa_trabajo/' + v.slug">
                <p>{{ v.puesto }}</p>
              </NuxtLink>
            </li>
          </div>
          <div class="bg-gray-dark h-px w-full my-20"></div>
        </div>

        <div class="internships mb-6 2xl:w-3/4 xl:w-2/3 w-full">
          <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">PROGRAMA DE INTERNSHIP</h2>
          <div>
            <li v-for="v in internships" :key="v.puesto">
              <NuxtLink :to="'bolsa_trabajo/' + v.slug">
                <p>{{ v.puesto }}</p>
              </NuxtLink>
            </li>
          </div>
        </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import JumbotronBolsa from '~/components/JumbotronBolsa.vue';

export default {
  components: { JumbotronBolsa },

  async asyncData({ $content }) {
    const vacantes = await $content("bolsatrabajo").where({ category: 'vacantes' }).fetch();
    const internships = await $content("bolsatrabajo").where({ category: 'internships' }).fetch();
    return {
      vacantes,
      internships
    };
  },
}
</script>
