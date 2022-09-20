<!-- Please remove this file from your project -->
<template>
<div>
    <div class="jumbotron-doc relative flex items-top justify-center min-h-screen  sm:items-center sm:pt-0  bg-gradient-to-b from-yellow-1 to-yellow-2">
      <div class="container flex items-center">
        <div class="hero md:mr-auto xl:w-1/2 md:w-2/3">
          <h1 class="3xl:text-5xl md:text-4xl sm:text-2xl text-lg big-title mb-6 text-white uppercase">DOCUMENTOS <br>INSTITUCIONALES</h1>
          <p class="subtitle text-white">Encuentra aquí nuestras políticas organizacionales.</p>
        </div>
      </div>
  </div>
</div>
</template>
<style lang="scss">


.jumbotron-doc {
  min-height: calc(40vh - 100px);
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;

  h1{
    text-align: right;

    @media (min-width:800px) {
    br{display: none;}
  }
  }


  @media (min-width:700px) {
    min-height: calc(65vh - 100px);
  }
}
</style>
