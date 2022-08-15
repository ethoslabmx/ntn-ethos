<!-- Please remove this file from your project -->
<template>
<div>
    <div class="jumbotron-opinion relative flex items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0 border-t-3  border-b-3 border-black">
      <div class="5xl:px-0 5xl:container pl-6 w-full flex items-center">
        <div class="hero w-full p-5 md:p-0   flex items-center">
         <div class="md:w-1/2 w-full text-right md:pr-5">
           <h1 class="lg:text-5xl text-lg big-title mb-6">ANTICORRUPCIÓN</h1>
          <p class="xl:text-2xl text-sm  uppercase">Columnas de opinión</p>
         </div>
         <div class="h-image w-full md:w-1/2 self-center flex items-center">
          <img src="../assets/images/writer.jpg" alt="" class="h-full w-full object-cover object-left ">
         </div>
        </div>
      </div>
  </div>
</div>
</template>
<style lang="scss">
.h-image,.jumbotron-opinion {
    min-height: calc(40vh - 85px);

  @media (min-width:993px) {
    min-height: calc(100vh - 85px);
  }
   @media (min-width:1400px) {
    min-height: calc(80vh - 85px);
  }
}


</style>
