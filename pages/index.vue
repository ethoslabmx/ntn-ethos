<template>
  <div class="app home">
    <JumbotronIndex />
    <div class="separador_header container mx-auto p-6 my-6 md:my-14">
      <h2 class="big-title xl:text-xl text-md text-right pr-3 tracking-widest">EJES DE INVESTIGACIÓN</h2>
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
            <NuxtLink class="ml-auto more-btn mt-4" to="/anticorrupcion/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>

        </div>

      </div>
      <div class="eje bg-white md:flex-row flex-col">

        <div class="img md:w-1/2"><img src="../assets/images/finanzas-publicas-thumb.png" alt=""></div>

        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Finanzas Públicas</h2>
          <p>Promovemos finanzas públicas sanas, a través de un sistema fiscal bien diseñado, un nivel de ingreso óptimo
            y un ejercicio del gasto eficiente y transparente, tanto a nivel federal como subnacional.</p>
            <NuxtLink class="ml-auto more-btn mt-4" to="/finanzas-publicas/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>

        </div>


      </div>
      <div class="eje bg-white md:flex-row-reverse flex-col">
        <div class="img md:w-1/2"><img src="../assets/images/desarollo-sostenible-thumb.png" alt=""></div>

        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Desarrollo Sostenible</h2>
          <p>Entendemos que las crecientes alarmas sobre el cambio climático nos muestran que el futuro estará hecho de
            crisis. Buscamos repensar las narrativas de desarrollo desde una perspectiva de crisis incorporando los ejes
            de recuperación justa, sostenible y resiliente. </p>
            <NuxtLink class="ml-auto more-btn mt-4" to="/desarrollo-sostenible/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>
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
            <NuxtLink class="ml-auto mt-4 more-btn" to="/ciudades-del-futuro/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>
        </div>


      </div>
      <div class="eje bg-white md:flex-row-reverse flex-col">
        <div class="img md:w-1/2"><img src="../assets/images/inclusion-thumb.png" alt=""></div>
        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Inclusión</h2>
          <p>Participamos en el debate sobre el rumbo de la política social y buscamos entender las limitaciones del
            modelo económico y político actual. También promovemos agendas de inclusión de poblaciones marginadas y de
            equidad de género desde una perspectiva de derechos humanos. </p>
            <NuxtLink class="ml-auto more-btn" to="/inclusion/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>
        </div>


      </div>
    </div>
    <div class="columnas 2xl:pr-20">
      <div class="separador_header container mx-auto p-6 my-6 md:my-14">
        <h2 class="big-title xl:text-xl text-md text-right pr-3 tracking-widest">Columnas de opinion</h2>
        <hr>
      </div>
      <li v-for="post of posts" :key="post.slug" class="eje">
        <div class="container mx-auto  flex 10 justify-between items-center lg:flex-row-reverse flex-col">

          <div class="lg:w-1/2 xl:w-1/3 lg:ml-10 self-center">
            <img :src="post.img" alt="" class="w-full object-cover col-img">
             <div class="tag">{{post.category.replace("-"," ").toUpperCase()}}</div>
          </div>

          <div class="content lg:w-1/2  xl:w-2/3 mt-6 lg:mt-0">
            <NuxtLink :to="post.category +'/columnas/'+post.slug" class="xl:text-lg title">{{ post.title }}</NuxtLink>
            <p class="text-gray-dark">{{ post.extracto }}</p>
          </div>

        </div>
      </li>
    </div>
    <div class="more py-10 text-right">
      <div class="container">
        <button class="ml-auto more-btn">VER MÁS <span class="icon"></span></button>
      </div>
    </div>
    <div class="twitter bg-white md:py-20 py-10">
      <div class="container mx-auto">
        <div class="flex justify-between align-middle flex-wrap md:flex-nowrap">
          <div class="separador_header self-start lg:w-2/3 tracking-widest">
            <h2 class="big-title xl:text-xl text-md text-right pr-3">ETHOS EN TWITTER</h2>
            <hr>
          </div>
          <div class="ml-6 drop-shadow-xl block shadow widget-twitter">
            <a class="twitter-timeline" data-lang="es" data-width="300" data-height="450" data-theme="light" href="https://twitter.com/ethoslabmx?ref_src=twsrc%5Etfw">Tweets by ethoslabmx</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
<style lang="scss">
.widget-twitter{width:300px}

li.eje{
  padding: 20px 20px 20px 30px;
  @media screen and (min-width: 768px) {
    padding: 30px 30px 30px 40px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px 40px 40px 60px;
  }

}

.col-img{
  width: 100%;
  height: 100px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 150px;
  }
  @media screen and (min-width: 1024px) {
    height: 200px;
  }
}

.columnas {
  a{
    letter-spacing: 5px;
  }
  p{
    font-family: Lato, sans-serif;
    font-weight: 500;
  }
}

</style>
