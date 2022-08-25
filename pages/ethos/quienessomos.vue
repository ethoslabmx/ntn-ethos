<template>
  <div class="app quienes">
    <JumbotronQuienes />

    <div class="bg-white border-b-20 border-primary">
      <div class="container pt-10 pb-20 xl:py-24 flex justify-start flex-col">
        <section class="lg:w-2/3 w-full">
          <div class="2xl:mb-20 mb-10">
            <h2 class="2xl:text-5xl text-2xl  title mb-6">EQUIPO</h2>
            <p>Contamos con un equipo multidisciplinario e internacional con experiencia variada en el gobierno, la academia y el sector social, motivados para realizar investigaciones e iniciativas integrales.</p>
          </div>
          <div class="2xl:mb-20 mb-10">

            <h2 class="2xl:text-5xl text-2xl  title mb-6">CONSEJO ASESOR</h2>
            <p>El Consejo Asesor de Ethos está compuesto por distinguidas figuras de la academia, el sector social y el sector privado, que contribuyen con la definición de los lineamientos estratégicos de nuestra organización.</p>

          </div>

        </section>
        <div class="line w-full bg-gray h-px 2xl:mb-20 mb-10"></div>

        <section  class="lg:w-2/3 w-full">
          <div class="2xl:mb-20 mb-10">
            <h2 class="2xl:text-5xl text-2xl title mb-6">NUESTROS VALORES</h2>
            <p>En Ethos nos regimos con los siguientes valores:</p>
          </div>
          <div class="2xl:mb-20 mb-10">
            <h3 class="md:text-lg text-md  mb-6">INNOVACIÓN</h3>
            <p>Combinamos metodologías, diseños y tecnologías diversas para ofrecer alternativas que permitan hacer
              frente
              a los nuevos retos y realidades. Estamos en una búsqueda constante por aportar nuevas ideas que
              contribuyan
              a renovar, modernizar y mejorar las políticas que implementan los distintos órdenes de gobierno. </p>
          </div>
          <div class="2xl:mb-20 mb-10">
            <h3 class="md:text-lg text-md  mb-6">OBJETIVIDAD</h3>
            <p>Ofrecemos una perspectiva clara, imparcial y despolitizada sobre los problemas que afectan a México y el
              mundo. Ello, con el fin de contribuir a la discusión de la agenda pública mediante datos e información
              certera que además contribuya a que la sociedad pueda formar su propio criterio en torno a las diferentes
              problemáticas que afectan al país.</p>
          </div>
          <div class="2xl:mb-20 mb-10">
            <h3 class="md:text-lg text-md  mb-6">Responsabilidad</h3>
            <p>Actuamos conscientes de la importancia de nuestro quehacer y estamos atentos al impacto de nuestra voz,
              pues sabemos que esta labor nos permite influir en la ciudadanía, sociedad civil organizada, y en los
              sectores público y privado.</p>
          </div>
          <div class="2xl:mb-20 mb-10">
            <h3 class="md:text-lg text-md  mb-6">Cooperación</h3>
            <p>Buscamos la transformación de nuestra realidad, colaborando y tejiendo alianzas con otras organizaciones
              de
              sociedad civil, sector público, privado, organismos internacionales y universidades que son afines a
              nuestros proyectos e iniciativas. La incidencia se facilita cuando trabajamos de manera conjunta. </p>
          </div>
          <div class="2xl:mb-20 mb-10">
            <h3 class="md:text-lg text-md  mb-6">Independencia</h3>
            <p>Nuestro quehacer es valioso porque, entre otras cuestiones, se encuentra desligado de intereses y agendas
              externas. No nos guía el compromiso con algún actor o sector en particular. Ello nos permite realizar
              nuestro trabajo libremente.</p>
          </div>
          <!--
          <div class="2xl:mb-20 mb-10">
            <h3 class="md:text-lg text-md  mb-6">Modelo de Gobierno Responsable</h3>
            <p>El modelo guía nuestras acciones, al recoger un conjunto de parámetros que configuran una gestión
              gubernamental encaminada estrictamente a lograr el bienestar de la población y el desarrollo del país,
              dejando de lado motivaciones clientelares o políticas. Dicho concepto conlleva la ejecución de acciones
              que
              sean realmente convenientes para la sociedad, al estar compuesto por medidas basadas en criterios
              técnicos,
              con un alto grado de sensibilidad social.</p>
          </div>
          -->




        </section>

        <div class="line w-full bg-gray h-px 2xl:mb-20 mb-10"></div>

        <section  class="lg:w-2/3 w-full">
          <div class="2xl:mb-20 mb-10">
            <h2 class="2xl:text-5xl text-2xl  title mb-6">PERSPECTIVA DE GÉNERO</h2>
            <p>En Ethos tenemos un compromiso firme con la igualdad y con la diversidad. Buscamos que todas las personas
              que colaboran con nosotros tengan las mismas oportunidades de crecimiento y desarrollo laboral. Para
              nosotros la innovación es central en el debate y desarrollo de las ideas, por eso hemos decidido que en
              nuestros espacios de reflexión y análisis siempre participen hombres y mujeres y manifestamos que no vamos
              a
              participar en aquellos foros que no cuenten con al menos una mujer como ponente. Además, nos hemos
              comprometido también con la aplicación de la transversalidad de la perspectiva de género en nuestras
              investigaciones.</p>
          </div>



          <div class="2xl:mb-20 mb-10">

            <h2 class="2xl:text-5xl text-2xl  title mb-6">TRATA DE PERSONAS</h2>
            <p>La trata de personas es una de las peores formas de explotación. Por ello, somos una organización
              proactiva
              que se suma al combate y prevención de ese delito. Impulsamos una cultura laboral y social incluyente,
              orientada a la prevención de los factores que propician el crecimiento de la trata de personas.</p>
          </div>

        </section>
      </div>
    </div>
  </div>
</template>

<script>
import JumbotronQuienes from '~/components/JumbotronQuienes.vue';

export default {
  components: { JumbotronQuienes },


}
</script>


<style lang="scss">
.quienes{
  h2.title{
    font-weight: 400;
  }

  h3{
    letter-spacing: 7px;
  }
}
</style>
