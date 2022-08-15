<!-- Please remove this file from your project -->
<template>
<div>
    <div class="jumbotron-quienes relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0  bg-gradient-to-b from-cyan to-cyanlight">
      <div class="container p-0 flex items-center">
        <div class="hero md:mr-auto md:w-1/2 ">
          <h1 class="lg:text-5xl text-lg font mb-6 text-white">¿QUIÉNES SOMOS?</h1>
          <p class="xl:text-2xl text-sm text-white">Somos un think tank que transforma investigaciones y experiencias en recomendaciones claras y acciones concretas de política pública que atienden algunos de los principales retos para el desarrollo de México.</p>
        </div>
      </div>
  </div>
  <div class="jumbotron-quienes_down bg-cyan">
    <img src="../assets/images/aros.png" alt="" class="mx-auto aros">
  </div>
</div>
</template>
<style lang="scss">

.jumbotron-quienes_down {
    height: 500px;
    z-index: 1;
    position: relative;
    .aros{
      top: -4rem;
      position: relative;
    }
}
.jumbotron-quienes {
  min-height: calc(40vh - 85px);
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;


  @media (min-width:993px) {
    min-height: calc(80vh - 85px);



  }
}
</style>
