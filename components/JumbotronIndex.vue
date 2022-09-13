<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="jumbotron-home"
    ></div>
    <div id="stripped">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1062">
        <polyline
          points="0,154 131,0 0,348 269,0 0,562 437,0
	0,766 565,14 0,1062 719,0 289,1162 843,0 543,1162 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,2 1299,1062 1500,830"
        />
      </svg>
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

    mainImg.addEventListener('load', (event) => {
      setTimeout(() => {
        this.showOverlay = false;
        const svg = document.querySelector('#stripped polyline');
      svg.classList.add('paint');
      }, 1000);
    });
    mainImg.src = require("../assets/images/jumbotron-index.jpg");

  },
};

</script>

<style lang="scss">
.jumbotron-home{
  position: absolute;
  top: 100px;
  left: 0;
  width: 100vw;
  min-height: calc(100vw * 0.51);
  background-color: #fff;
  z-index: -1;
}


#stripped {
  margin: 0 auto;
  background: #000;
  background-image: url(../assets/images/jumbotron-index.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-bottom: 2rem solid #f28f78;
  min-height: calc(100vw * 0.51);
  font-size: 0;
}

div#stripped svg {
  background: #f5f3f3;
  background-image: url(../assets/images/jumbotron-index-bw.png);
  background-size: cover;
  min-height: calc(100vw * 0.51);
  background-position: center center;
  background-repeat: no-repeat;
  mix-blend-mode: lighten;
}

div#stripped svg polyline {
  fill: none;
  stroke: #000;
  stroke-width: 300;
  stroke-dasharray: 20000;
  stroke-dashoffset: 20000;

}

.paint{
  animation: scribble 5.3s  ease-out forwards;
}

@keyframes scribble {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
