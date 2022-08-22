<!-- Please remove this file from your project -->
<template>
  <div>
    <div
      class="jumbotron-equipo relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0  bg-gradient-to-b from-primary to-primarylight">
      <div class="container flex items-center">
        <div class="hero w-full p-5 md:p-0  text-center lg:mr-auto lg:w-1/2 text-white text-right">
          <h1 class="3xl:text-5xl md:text-4xl text-3xl big-title mb-6 text-white">EQUIPO</h1>
          <p class="subtitle text-white">Contamos con un equipo multidisciplinario e internacional de economistas,
            abogados, politólogos, comunicadores y diseñadores, con experiencia variada en el gobierno y la política, la
            academia y el sector social, motivados para producir investigaciones y propuestas integrales e innovadoras.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.jumbotron-equipo {
  min-height: calc(45vh - 100px);
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    margin: auto;
    height: 100%;
    width: auto;



  }

  @media (min-width:700px) {
    min-height: calc(65vh - 100px);

  }

}
</style>
