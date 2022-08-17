<!-- Please remove this file from your project -->
<template>
  <div class="jumbotron relative flex items-top justify-center bg-gray-100 sm:items-center sm:pt-0">
  </div>
</template>
<style lang="scss">
.jumbotron {

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(../assets/images/jumbotron-index.png);
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 2rem solid #F28F78;
  min-height: calc(100vw * .5625);

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

  &:hover {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:after {
      content: "";
      position: absolute;
      background-color: rgba($color: #fff, $alpha: .65);

      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: url(../assets/images/jumbotronOverlay-index.png);
      background-size: auto 100px;
      background-position: center center;
      background-repeat: no-repeat;
      margin: auto;
      height: 100%;
      width: auto;
    }
  }
  @media (min-width:993px) {
   // min-height: calc(100vw * .5625);

    &:hover {
      &:after {
        background-size: auto 200px;

      }
    }

  }


}
</style>
