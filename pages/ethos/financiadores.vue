<template>
  <div
    class="app jumbotron-confianza  border-b-16 border-primary relative flex flex-col items-top justify-center min-h-screen  sm:items-center sm:pt-0  bg-gradient-to-b from-cyan to-cyanlight">
      <div class="container pr-0 2xl:py-24 py-16">
            <div class="mr-auto hero pl-10 pb-10">
      <h1 class="2xl:text-5xl text-2xl font text-white">¿QUIÉNES
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
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 70%;

    @media screen and (min-width: 700px) {
      font-size: 3rem;
      letter-spacing: 12px;
      line-height: 3.5rem;
      text-align: right;
      max-width: 500px;}

 @media screen and (min-width: 1200px) {
    font-size: 4rem;
      max-width: 500px;
      line-height: 4.5rem;
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
    width: 100vw;
    overflow-x: auto;
    margin-left:auto;
    scrollbar-color: #6969dd #e0e0e0;
    scrollbar-width: thin;

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
