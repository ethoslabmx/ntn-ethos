<!-- Please remove this file from your project -->
<template>
  <div>
    <div
      class="jumbotron-equipo relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0  bg-gradient-to-b from-primary to-primarylight">
      <div class="container p-0 flex items-center">
        <div class="hero w-full p-5 md:p-0  text-center md:mr-auto md:w-1/2 text-white lg:text-right">
          <h1 class="lg:text-5xl text-lg big-title mb-6">EQUIPO</h1>
          <p class="xl:text-2xl text-sm text-white">Contamos con un equipo multidisciplinario e internacional de economistas,
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
  min-height: calc(50vh - 85px);
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



  @media (min-width:993px) {
    min-height: calc(100vh - 85px);



  }

  @media (min-width:1400px) {
    min-height: calc(80vh - 85px)
  }
}
</style>
