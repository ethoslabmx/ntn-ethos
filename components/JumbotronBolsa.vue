<!-- Please remove this file from your project -->
<template>
<div>
    <div class="jumbotron-bolsa relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0  bg-gradient-to-b from-cyan to-cyanlight">
      <div class="container flex items-center flex-wrap-reverse justify-center pb-10 md:pt-10">
        <div class="hero lg:w-1/2 md:2/3">
          <h1 class="3xl:text-5xl md:text-4xl text-3xl big-title mb-6 text-white uppercase text-right">Bolsa de trabajo</h1>
          <p class="subtitle text-white mb-3">
            En Ethos estamos comprometidos con la diversidad en nuestro equipo de trabajo.
          </p>
          <p class="subtitle text-white mb-3">
            Creemos en la igualdad de oportunidades. ¡Únete a nuestro equipo!
          </p>
        </div>
        <div class="lg:w-1/2 md:1/3">
          <img src="../assets/images/aros-color.png" alt="" class="mx-auto aros aros-colors kenburns-top-aros">

        </div>
      </div>
  </div>
</div>
</template>
<style lang="scss">


.jumbotron-bolsa {
  min-height: calc(60vh - 100px);
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;

  p{
    margin-left: 20px;
    text-align: left;
  }


  @media (min-width:768px) {
    min-height: calc(90vh - 100px);

  }
  @media (min-width:1400px) {
    min-height: calc(70vh - 100px);

  }

  img.aros.aros-colors {
    width: 40%;
    height: auto;
    display: block;
    margin: 2rem auto;
    text-align: center;
    @media (min-width:800px) {
      width: 65%;
      margin: 0;
      margin-left: auto;

    }
  }
}
</style>
