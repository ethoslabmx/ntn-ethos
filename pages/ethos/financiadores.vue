<template>
  <div
    class="app jumbotron-confianza border-b-16 border-primary py-24 relative flex flex-col items-top justify-center min-h-screen  sm:items-center sm:pt-0  bg-gradient-to-b from-cyan to-cyanlight">
    <div class="lg:mr-auto lg:w-1/2 hero md:pl-10 lg:py0 py-10">
      <h1 class="lg:text-5xl text-lg font text-white">¿QUIÉNES
        HAN CONFIADO
        EN NOSOTROS?
      </h1>
    </div>
    <div class="slider bg-white flex items-center space-between shadow-xl">
      <li v-for="f in financiadores" :key="f.nombre" class="p-6">
        <a :href="f.link" class="">
          <img :src="f.logo" alt="">
        </a>
      </li>
    </div>
  </div>

</template>

<script>

export default {

  async asyncData({ $content }) {
    const financiadores = await $content("financiadores").fetch();

    return {
      financiadores,
    };
  },
}
</script>
<style lang="scss">
.jumbotron-confianza {
  min-height: calc(40vh - 85px);
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;

  .slider {
    width: 100vw;
    overflow-x: auto;
    margin-left:auto;

    li {

      &:first-child {
        margin-left: .5rem;
      }

      // &:not(:last-child){
      //   margin-right: .5rem;
      // }
      a {
        display: block;
        width: 300px;
        height: auto;
        display: block;

        img{
          object-fit: cover;
          width:100%;
          height: 100%;

        }
      }
    }

    @media (min-width:993px) {
      width: 60vw;
    }
  }


  @media (min-width:993px) {
    min-height: calc(80vh - 85px);



  }
}
</style>
