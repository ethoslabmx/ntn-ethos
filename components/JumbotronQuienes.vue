<!-- Please remove this file from your project -->
<template>
<div>
    <div class="jumbotron-quienes relative flex items-top justify-center bg-gray-100 sm:items-center sm:pt-0  bg-gradient-to-b from-cyan to-cyanlight">
      <div class="container flex items-center">
        <div class="hero mt-5 md:mr-auto md:w-1/2 sm:w-2/3">
          <h1 class="3xl:text-5xl md:text-4xl text-3xl big-title mb-6 text-white text-right">¿QUIÉNES SOMOS?</h1>
          <p class="subtitle text-white">Somos un <i>think tank</i> que transforma investigaciones y experiencias en recomendaciones claras y acciones concretas de política pública que atienden algunos de los principales retos para el desarrollo de México.</p>
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
    height: 33vw;
    z-index: 0;
    position: relative;
    .aros{
      top: -2rem;
      position: relative;
      width: 40vw;
    }
}
.jumbotron-quienes {
  padding-top: 30px;
  min-height: calc(45vh - 100px);
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;

   @media (min-width:700px) {
    min-height: calc(65vh - 100px);
  }

}
</style>
