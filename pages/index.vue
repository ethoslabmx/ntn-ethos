<template>
  <div class="home">
  <JumbotronIndex />
  <div class="ejes">
    <div class="eje">
      <h2>Anticorrupción</h2>
      <p>Buscamos contribuir al buen funcionamiento del Sistema Nacional Anticorrupción y de los Sistemas Estatales Anticorrupción, empoderar a la sociedad civil e involucrar a diversos actores, como el sector privado, para que funjan como contrapesos reales de la corrupción. </p>
    </div>
    <div class="eje">
      <h2>Finanzas Públicas</h2>
      <p>Promovemos finanzas públicas sanas, a través de un sistema fiscal bien diseñado, un nivel de ingreso óptimo y un ejercicio del gasto eficiente y transparente, tanto a nivel federal como subnacional.</p>
    </div>
    <div class="eje">
      <h2>Desarrollo Sostenible</h2>
      <p>Entendemos que las crecientes alarmas sobre el cambio climático nos muestran que el futuro estará hecho de crisis. Buscamos repensar las narrativas de desarrollo desde una perspectiva de crisis incorporando los ejes de recuperación justa, sostenible y resiliente. </p>
    </div>
    <div class="eje">
      <h2>Ciudades del futuro</h2>
      <p>Generamos propuestas que permitan consolidar estrategias, programas públicos y proyectos que promuevan el desarrollo sostenible de servicios públicos e infraestructura, la cual aproveche recursos renovables de energía, implemente medidas de eficiencia energética y fortalezca las capacidades institucionales gubernamentales en materia energética y ambiental. </p>
    </div>
    <div class="eje">
      <h2>Inclusión</h2>
      <p>Participamos en el debate sobre el rumbo de la política social y buscamos entender las limitaciones del modelo económico y político actual. También promovemos agendas de inclusión de poblaciones marginadas y de equidad de género desde una perspectiva de derechos humanos. </p>
    </div>
  </div>
  <div class="columnas">
    <h1>Columnas de opinion</h1>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
      <img :src="post.img" alt="">
      <p>{{post.body.children[1].children[0].value}}</p>
    </li>
  </div>
  <div class="twitter">

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
