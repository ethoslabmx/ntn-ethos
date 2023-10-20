<!-- Please remove this file from your project -->
<template>

    <div id="stripped">
      <div class="cintillo" v-if="notas.length > 0">
        <div class=" nota nota-img" v-if="nota.img" :style="'background-image: url('+ nota.img +');'">
          
          <div class="actions">
            <a :href="nota.link">
              <div class="btn">Leer más</div>
            </a>
            <div class="arrows">
              <div class="right" @click="prev">
                <img src="../assets/images/arrow.png" alt="">
              </div>
              <div class="left" @click="next"> 
                <img src="../assets/images/arrow.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="nota" v-else>
          <h2>{{nota.title}}</h2>
          <p>{{nota.extracto}}</p>
          <div class="line"></div>
          <div class="actions">
            <a :href="nota.link">
              <div class="btn">Leer más</div>
            </a>
            <div class="arrows">
              <div class="right" @click="prev">
                <img src="../assets/images/arrow.png" alt="">
              </div>
              <div class="left" @click="next"> 
                <img src="../assets/images/arrow.png" alt="">
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="c-transition" id="banner">
        <img src="../assets/images/jumbotron-index.jpg" alt="">
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showOverlay:true,
      nota:{
        title:'',
        extracto:'',
        link:''
      },
      currentNote:0,
      
    };
  },
  computed:{
    notes(){
      return this.notas;
    }
  },
  props:['notas'],
  
  mounted() {
    //delay 1s to show the overlay then show animation
    let mainImg = new Image();
    let overlay = new Image();

    overlay.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/204808/ink-transition-sprite.png';
    mainImg.onload = () => {
      const banner = document.getElementById('banner');
      setTimeout(() => {
        this.showOverlay = false;
        banner.classList.add('is-active');
      }, 100);
    };
    mainImg.src = require("../assets/images/jumbotron-index.jpg");
    this.notes && this.notes.length > 0 ? this.nota = this.notes[0]: '';
  },

  methods:{
    prev(){
      if(this.currentNote > 0){
        this.currentNote--;
        this.nota = this.notes[this.currentNote];
      }
      
    },
    next(){
      if(this.currentNote < this.notes.length - 1){
        this.currentNote++;
        this.nota = this.notes[this.currentNote];
      }
      
    }
  }
};

</script>

<style lang="scss">

#stripped {
  margin: 0 auto;
  border-bottom: 2rem solid #f28f78;
  min-height: calc(100% * 0.72);
  width: 100%;
  position: relative;
}

.cintillo{
  position: relative;
  z-index: 10;
  color: #828282;
  width: 100%;
  animation: show-content 0.5s ease-out 2s forwards;
  padding: 10px 25px 10px 15px;
  opacity: 0;
  

  @media screen and (min-width:768px) {
    position: absolute;
    top: 0;
    left:10%;
    width: fit-content;
    width: 50%;
    
    &::before{
      content:'';
      position:absolute;
      top:0;
      left:-10px;
      background-color: rgba(255,255,255,0.5);
      width: 100%;
      height: 100%;
      z-index: -1;
      transform: skewX(-10deg);
    }

  }

  @media screen and (min-width:1200px) {
    width: 40%;
    min-height: 180px;
    .nota{
      min-height: 160px;
    }
  }

  .nota{
    height: 100%;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .line{
    border: 1px solid #f28f78;
    width: 40%;
    margin: 10px 0 10px 0;
  }

  h2{
    font-weight: bold;
    font-size:1rem;
  }

  p{
    font-weight: 300;
    font-size:0.9rem;
  }

  .actions{

    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    img{
      width: 25px;
      margin: 0 5px;
      cursor: pointer;
    }

    .left{
      transform: rotate(180deg);
    }
  }

  .nota-img{
    height: 100%;
    min-height: 180px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 0;
    margin: 0;
    

    .actions{
      position: absolute;
      bottom: 10px;
      left: 0px;
      background: rgba(255,255,255,0.5);
      width: 100%;
    }

    @media screen and (min-width:768px) {

      

    }

  }

  .arrows{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .btn{
    color:#f28f78;
  }
}

.c-transition{
  width: 100%;
  margin: 0;
  min-height: auto;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 1024px) {
    min-height: 80vh;
  }

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
    animation: remove-frame 1s ease-out 1.5s forwards;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity:0;
    object-position: center;
    transition: all 0.5s ease-in-out;
    @media screen and (min-width: 1024px) {
      transition-delay: 1s;
    }

    transition-delay: 1.2s;
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

@keyframes show-content{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
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
