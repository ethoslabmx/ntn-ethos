<!-- Please remove this file from your project -->
<template>
<div>
    <div class="jumbotron-quienes relative flex items-top justify-center bg-gray-100 sm:items-center sm:pt-0  bg-gradient-to-b from-cyan to-cyanlight">
      <div class="container flex items-center flex-wrap-reverse justify-center pb-10 md:pt-10">
        <div class="hero mt-5  lg:w-1/2 md:w-2/3">
          <h1 class="4xl:text-5xl  lg:text-3xl text-2xl big-title mb-6 text-white text-right">¿QUIÉNES SOMOS?</h1>
          <p class="4xl:text-xl text-lg text-right text-white font-normal">
            Somos un <span class="italic">think tank</span> que genera recomendaciones innovadoras y acciones concretas de política pública con el objeto de
            atender algunos de los principales retos para el desarrollo de México.
          </p>

        </div>
        <div class="lg:w-1/2 md:1/3">
          <img src="../assets/images/aros-color.png" alt="" class="mx-auto aros aros-colors kenburns-top-aros">

        </div>
      </div>
  </div>
  <!-- <div class="jumbotron-quienes_down bg-cyan">
    <img src="../assets/images/aros-color.png" alt="" class="mx-auto aros">
  </div> -->
</div>
</template>
<style lang="scss">

.jumbotron-quienes_down {
    height: 20vw;
    top: -2rem;
    margin-bottom: -2rem;
    z-index: 0;
    position: relative;
    .aros{
      top: -2rem;
      position: relative;
      width: 35vw;
    }
  @media (min-width:500px) {
        height: 15vw;
      .aros{
      width: 25vw;
    }
  }
  @media (min-width:1200px) {
      .aros{
      width: 18vw;
    }
  }
    @media (min-width:1400px) {
    height: 18vw;
    top: -3rem;
    margin-bottom: -3rem;
    .aros{
      top: -1rem;
      width: 20vw;
    }
    }
}
.jumbotron-quienes {
  padding: 2rem 0 5rem;
  min-height: calc(45vh - 100px);
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;


   @media (min-width:1400px) {
    min-height: calc(50vh - 100px);
  }

  .hero p{
    margin: 10px 0;
    line-height: 1.5rem;
    @media  screen and (min-width: 768px) {
      line-height: 2.2rem;
    }
  }
  img.aros.aros-colors {
    width: 50%;
    height: auto;
    display: block;
    margin: 2rem auto;
    text-align: center;
    @media (min-width:800px) {
      width: 70%;
      margin: 0;
      margin-left: auto;

  }
}
}
</style>
