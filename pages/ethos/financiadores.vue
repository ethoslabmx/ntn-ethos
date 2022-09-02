<template>
  <div
    class="app jumbotron-confianza  border-b-16 border-primary relative flex flex-col items-top justify-center min-h-screen  sm:items-center sm:pt-0  bg-gradient-to-b from-cyan to-cyanlight">
      <div class="container lg:pr-0 2xl:py-24 py-16 lg:ml-auto lg:mr-0">
            <div class="mr-auto hero pl-10 pb-10">
      <h1 class="3xl:text-7xl md:text-6xl text-3xl font text-white">¿QUIÉNES
        HAN CONFIADO
        EN NOSOTROS?
      </h1>
    </div>
    <div class="slider bg-white flex items-center space-between shadow-xl">
      <li v-for="f in financiadores" :key="f.nombre" class="lg:p-4 p-3">
        <a :href="f.link" class="">
          <img :src="f.logo" alt="">
        </a>
      </li>
    </div>
      </div>
  </div>

</template>

<script>

export default {

  async asyncData({ $content }) {
    const financiadores = await $content("financiadores").sortBy('date','desc').fetch();

    return {
      financiadores,
    };
  },
}
</script>
<style lang="scss">
.jumbotron-confianza {
  min-height: calc(40vh - 85px);
  z-index: 0;
  position: relative;


  h1{
    font-family: 'Saira Condensed', sans-serif;
    letter-spacing: 2px;
      text-align: right;

    // font-size: 2rem;
    // line-height: 2.5rem;
    max-width: 70%;

    @media screen and (min-width: 700px) {
      letter-spacing: 12px;
      max-width: 500px;
      }
  }

  .slider::-webkit-scrollbar {
    width: 4px;
    background-color: var(--bg-orange);
  }

  .slider::-webkit-scrollbar-track {
    background-color: var(--bg-blue-full);
    border-radius: 4px;
  }

  .slider::-webkit-scrollbar-thumb {
    background-color: var(--bg-orange);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 100px;
  }


  .slider {
    width: 100%;
    overflow-x: visible;
    scrollbar-color: #6969dd #e0e0e0;
    scrollbar-width: thin;
    flex-wrap: wrap;
    justify-content: center;

    li {

      &:first-child {
        margin-left: .5rem;
      }

      // &:not(:last-child){
      //   margin-right: .5rem;
      // }
      a {
        display: block;
        width: auto;
        height: 75px;

        img{
          object-fit: contain;
          height: 100%;
          width: 100%;
        }
      }

      a:hover{
        transform: scale(1.05);
      }
    }

    @media (min-width:800px) {
      width: 85%;
      margin-left: auto;

       li{
        a{
        max-width: 300px;
        height: auto;

          img{
          height: 120px;
          width: 280px;
        }
       }
       }

    }
  }


  @media (min-width:993px) {
    min-height: calc(80vh - 85px);



  }
}
</style>
