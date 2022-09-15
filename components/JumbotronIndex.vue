<!-- Please remove this file from your project -->
<template>
  <div>
    <div id="stripped">
      <div class="c-transition" id="banner">
        <img src="../assets/images/jumbotron-index.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showOverlay:true,
    };
  },
  mounted() {
    //delay 1s to show the overlay then show animation
    let mainImg = new Image();
    let overlay = new Image();
    mainImg.onload = () => {
      const banner = document.getElementById('banner');
      banner.classList.add('is-active');
    };
    overlay.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/204808/ink-transition-sprite.png';
    mainImg.src = require("../assets/images/jumbotron-index.jpg");
  },
};

</script>

<style lang="scss">

#stripped {
  margin: 0 auto;
  border-bottom: 2rem solid #f28f78;
  min-height: calc(100% * 0.72);
  width: 100%;




}
.c-transition{
  width: 100%;
  margin: 0;
  overflow: hidden;
  position: relative;
  &::before {
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/204808/ink-photo-frame.png');
    background-size: 105% 105%;
    background-position: 50% 50%;
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
  &::after {
    //animation: ink-transition 1.5s steps(39) 0.5s forwards;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/204808/ink-transition-sprite.png');
    background-size: 100% 100%;
    content: '';
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-1.25%);
    width: 4000%;
    opacity: 1;
  }

  &.is-active::after {
    animation: ink-transition 5s steps(39) 0.3s forwards;
  }

  &.is-active::before {
    animation: remove-frame 1s ease-out 2s forwards;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity:0;
    object-position: center;
    transition: all 0.5s ease-in-out;
    transition-delay: 0.3s;
  }

  &.is-active > img {
    opacity: 1;
  }
}


@keyframes remove-frame{
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0.1;
  }
}

@keyframes ink-transition {
  0% {
    transform: translateX(-1.25%);
  }

  99% {
    transform: translateX(-98.75%);
    opacity: 1;
  }

  100% {
    transform: translateX(-98.75%);
    opacity: 0;
  }
}
</style>
