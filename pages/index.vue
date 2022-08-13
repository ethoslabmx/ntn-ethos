<template>
  <div class="home">
    <JumbotronIndex />
    <div class="separador_header container mx-auto">
      <h2 class="title">EJES DE INVESTIGACIÓN</h2>
      <hr>
    </div>
      <div class="ejes container mx-auto">
        <div class="eje bg-white">
         <div class="content w-3/4">
           <h2 class="title">Anticorrupción</h2>
          <p>Buscamos contribuir al buen funcionamiento del Sistema Nacional Anticorrupción y de los Sistemas Estatales
            Anticorrupción, empoderar a la sociedad civil e involucrar a diversos actores, como el sector privado, para
            que funjan como contrapesos reales de la corrupción. </p>
         </div>
          <div class="img w-1/4"> <img src="../assets/images/anticorrupcion-thumb.png" alt=""></div>

        </div>
        <div class="eje bg-white">
          <div class="content w-3/4">
            <h2 class="title">Finanzas Públicas</h2>
          <p>Promovemos finanzas públicas sanas, a través de un sistema fiscal bien diseñado, un nivel de ingreso óptimo
            y un ejercicio del gasto eficiente y transparente, tanto a nivel federal como subnacional.</p>
          </div>
          <div class="img w-1/4"><img src="../assets/images/finanzas-publicas-thumb.png" alt=""></div>


        </div>
        <div class="eje bg-white">
         <div class="content w-3/4">
           <h2 class="title">Desarrollo Sostenible</h2>
          <p>Entendemos que las crecientes alarmas sobre el cambio climático nos muestran que el futuro estará hecho de
            crisis. Buscamos repensar las narrativas de desarrollo desde una perspectiva de crisis incorporando los ejes
            de recuperación justa, sostenible y resiliente. </p>
         </div>
          <div class="img w-1/4"><img src="../assets/images/desarollo-sostenible-thumb.png" alt=""></div>


        </div>
        <div class="eje bg-white">
          <div class="content w-3/4">
            <h2 class="title">Ciudades del futuro</h2>
          <p>Generamos propuestas que permitan consolidar estrategias, programas públicos y proyectos que promuevan el
            desarrollo sostenible de servicios públicos e infraestructura, la cual aproveche recursos renovables de
            energía, implemente medidas de eficiencia energética y fortalezca las capacidades institucionales
            gubernamentales en materia energética y ambiental. </p>
          </div>
          <div class="img w-1/4"><img src="../assets/images/ciudades-del-futuro-thumb.png" alt=""></div>


        </div>
        <div class="eje bg-white">
         <div class="content w-3/4">
           <h2 class="title">Inclusión</h2>
          <p>Participamos en el debate sobre el rumbo de la política social y buscamos entender las limitaciones del
            modelo económico y político actual. También promovemos agendas de inclusión de poblaciones marginadas y de
            equidad de género desde una perspectiva de derechos humanos. </p>
         </div>
          <div class="img w-1/4"><img src="../assets/images/inclusion-thumb.png" alt=""></div>


        </div>
      </div>
      <div class="columnas">
        <div class="separador_header container mx-auto">
          <h2 class="title">Columnas de opinion</h2>
          <hr>
        </div>
        <li v-for="post of posts" :key="post.slug" class="eje">
          <div class="container mx-auto flex p-10 justify-between items-center">
            <div class="content w-1/2">
              <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
            <p>{{ post.body.children[1].children[0].value }}</p>
            </div>
            <div class="w-1/2 ml-10 self-center"><img :src="post.img" alt="" class="w-full object-cover h-60"></div>


          </div>
        </li>
      </div>
      <div class="twitter">
        <div class="container mx-auto py-10">
            <div class="flex justify-between align-middle">
               <div class="separador_header p-0 w-full">
                <h2 class="title">ETHOS EN TWITTER</h2>
                <hr>
              </div>
              <img src="../assets/images/widget.png" alt="">
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
    const posts = await $content("columnas").fetch();

    return {
      posts,
    };
  },
}
</script>
