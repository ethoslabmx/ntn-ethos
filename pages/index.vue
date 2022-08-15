<template>
  <div class="app home">
    <JumbotronIndex />
    <div class="separador_header container mx-auto p-6 my-6 md:my-14">
      <h2 class="title xl:text-xl text-md text-right pr-3">EJES DE INVESTIGACIÓN</h2>
      <hr>
    </div>
    <div class="ejes container mx-auto">
      <div class="eje bg-white md:flex-row-reverse flex-col">

        <div class="img md:w-1/2"> <img src="../assets/images/anticorrupcion-thumb.png" alt=""></div>

        <div class="content md:w-1/2 p-8 self-center">

          <h2 class="title xl:text-2xl text-lg">Anticorrupción</h2>
          <p>Buscamos contribuir al buen funcionamiento del Sistema Nacional Anticorrupción y de los Sistemas Estatales
            Anticorrupción, empoderar a la sociedad civil e involucrar a diversos actores, como el sector privado, para
            que funjan como contrapesos reales de la corrupción. </p>
          <button class="ml-auto more-btn">ENTRAR <span class="icon"></span></button>
        </div>

      </div>
      <div class="eje bg-white md:flex-row flex-col">

        <div class="img md:w-1/2"><img src="../assets/images/finanzas-publicas-thumb.png" alt=""></div>

        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Finanzas Públicas</h2>
          <p>Promovemos finanzas públicas sanas, a través de un sistema fiscal bien diseñado, un nivel de ingreso óptimo
            y un ejercicio del gasto eficiente y transparente, tanto a nivel federal como subnacional.</p>
          <button class="ml-auto more-btn">ENTRAR <span class="icon"></span></button>
        </div>


      </div>
      <div class="eje bg-white md:flex-row-reverse flex-col">
        <div class="img md:w-1/2"><img src="../assets/images/desarollo-sostenible-thumb.png" alt=""></div>

        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Desarrollo Sostenible</h2>
          <p>Entendemos que las crecientes alarmas sobre el cambio climático nos muestran que el futuro estará hecho de
            crisis. Buscamos repensar las narrativas de desarrollo desde una perspectiva de crisis incorporando los ejes
            de recuperación justa, sostenible y resiliente. </p>
          <button class="ml-auto more-btn">ENTRAR <span class="icon"></span></button>
        </div>


      </div>
      <div class="eje bg-white md:flex-row flex-col">
        <div class="img md:w-1/2"><img src="../assets/images/ciudades-del-futuro-thumb.png" alt=""></div>
        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Ciudades del futuro</h2>
          <p>Generamos propuestas que permitan consolidar estrategias, programas públicos y proyectos que promuevan el
            desarrollo sostenible de servicios públicos e infraestructura, la cual aproveche recursos renovables de
            energía, implemente medidas de eficiencia energética y fortalezca las capacidades institucionales
            gubernamentales en materia energética y ambiental. </p>
          <button class="ml-auto more-btn">ENTRAR <span class="icon"></span></button>
        </div>


      </div>
      <div class="eje bg-white md:flex-row-reverse flex-col">
        <div class="img md:w-1/2"><img src="../assets/images/inclusion-thumb.png" alt=""></div>
        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Inclusión</h2>
          <p>Participamos en el debate sobre el rumbo de la política social y buscamos entender las limitaciones del
            modelo económico y político actual. También promovemos agendas de inclusión de poblaciones marginadas y de
            equidad de género desde una perspectiva de derechos humanos. </p>
          <button class="ml-auto more-btn">ENTRAR <span class="icon"></span></button>
        </div>


      </div>
    </div>
    <div class="columnas">
      <div class="separador_header container mx-auto p-6 my-6 md:my-14">
        <h2 class="title xl:text-xl text-md text-right pr-3">Columnas de opinion</h2>
        <hr>
      </div>
      <li v-for="post of posts" :key="post.slug" class="eje container mx-auto px-0">
        <div class=" flex p-10 4xl:px-40 justify-between items-center lg:flex-row-reverse flex-col">

          <div class="lg:w-1/2 xl:w-1/4 lg:ml-10 self-center">
            <img :src="post.img" alt="" class="w-full object-contain h-80">
             <div class="tag">{{post.category.replace("-"," ").toUpperCase()}}</div>
          </div>

          <div class="content lg:w-1/2  xl:w-3/4 mt-6 lg:mt-0">
            <NuxtLink :to="post.slug" class="xl:text-lg title">{{ post.title }}</NuxtLink>
            <p class="text-gray-dark">{{ post.extracto }}</p>
          </div>

        </div>
      </li>
    </div>
    <div class="twitter bg-white md:py-20 py-10">
      <div class="container mx-auto px-0">
        <div class="flex justify-between align-middle flex-wrap md:flex-nowrap">
          <div class="separador_header self-start w-full px-6 md:pl-0 md:pr-6 mb-6 md:mb-14">
            <h2 class="title xl:text-xl text-md text-right pr-3">ETHOS EN TWITTER</h2>
            <hr>
          </div>
          <div class="drop-shadow-xl block shadow mx-auto">
            <img src="../assets/images/widget.png" alt="" class=" md:ml-auto h-auto max-w-full md:w-96">

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import JumbotronIndex from '~/components/JumbotronIndex.vue';

export default {
  components: { JumbotronIndex },
  async asyncData({ $content }) {
    const posts = await $content("columnas").limit(3).fetch();

    return {
      posts,
    };
  },
}
</script>
