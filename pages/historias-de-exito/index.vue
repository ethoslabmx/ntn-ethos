<template>
  <div class="app">
    <JumbotronEjeVue title="Historias de Éxito" subtitle=" " image="historias-de-exito-thumb.jpg" />
    <div class="com">
      <div class="nav-movil">
        <li class="" v-for="(historia,index) in historias" :key="index">
          <img src="../../assets/images/arosblancos.png" class="aros-movil" alt="">
          <a class="" @click="activeSection(index+1)">
            <span class="text-sm text-white mb-3 text-right">
                {{ historia.title }}
            </span>
          </a>
        </li>
        <!--
        <li class="bg-yellow-3">
          <img src="../../assets/images/arosblancos.png" class="aros-movil" alt=""></img>
          <a class="" @click="activeSection(1)">
          <div class="">
                <span class=" text-sm  text-white mb-3 text-right">COOPERACiÓN PARA
                  TODOS</span>
                <span class="text-white text-right">Ayuda oficial al desarrollo en
                  México y LATAM.</span>
              </div>
          </a>
        </li>
        <li class="bg-cyan" v-for="historia in historias" :key="historia.slug">
          <img src="../../assets/images/arosblancos.png" class="aros-movil" alt=""></img>
          <a class="bg-cyan" @click="activeSection(1)">
            <a class="" @click="activeSection(3)">
              <span class="text-sm  text-white mb-3 text-right">CEPAL</span>
              <span class=" text-white text-righ">El cambio climático y la biodiversidad
                en América Latina y el Caribe.</span>
            </a>
          </a>
        </li>
        -->
      </div>
      <div class="com__content">
        <section
          class="com__section com__section--text com__hero com__bg bg-gradient-to-b from-primary to-primarylight">
          <div class="container flex flex-col justify-start items-end px-0">
            <div class="3xl:w-1/3  md:w-2/3 w-full heading">
              <h1 class="big-title">HISTORIAS DE ÉXITO</h1>
              <p class="">
                Desde Ethos asumimos el compromiso de asegurar el impacto de nuestro trabajo en la sociedad y directamente en los actores con los que colaboramos. Aquí te compartimos algunas de esas historias de éxito.
              </p>
            </div>
          </div>
        </section>
        <section v-for="historia in historias" :key="historia.slug"
        class="com__section com__section--text centered com__bg bg-gradient-to-b from-primary to-primarylight">
          <h1 class="animate scaleIn">{{historia.title}}</h1>
          <lite-youtube :videoid="historia.video.slice(historia.video.indexOf('v=')+2)" :playlabel="historia.title"
              params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1" class="" />
          <p>{{historia.extracto}}</p>
        </section>
      </div>
      <nav class="com__nav">
        <ul class="com__nav-list">
          <li class="com__nav-item" v-for="(historia,index) in historias" :key="index">
            <a class="com__nav-link " @click="activeSection(index+1)">
              <span class="animate scaleInLeft delay-2 big-title 3xl:text-lg text-sm text-white mb-3 text-right">
                  {{ historia.title }}
                </span>
            </a>
          </li>

          <!--
          <li class="com__nav-item">
            <a class="com__nav-link" @click="activeSection(2)">
              <div class="com__section-half">
                <span class="animate scaleInLeft delay-3 4xl:text-xl text-sm  text-white mb-3 text-right">COOPERACiÓN PARA
                  TODOS</span>
                <span class="animate scaleInLeft delay-4 4xl:text-lg text-white text-right">Ayuda oficial al desarrollo en
                  México y LATAM.</span>
              </div>
              <div class="com__section-half">
                <span class="white-circle animate slideInRight delay-5"></span>
              </div>
            </a>
          </li>
          <li class="com__nav-item">
            <a class="com__nav-link" @click="activeSection(3)">
              <span class="animate scaleIn delay-3 big-title 4xl:text-xl text-sm  text-white mb-3 text-right">CEPAL</span>
              <span class="animate scaleIn delay-5 4xl:text-lg text-white text-righ">El cambio climático y la biodiversidad
                en América Latina y el Caribe.</span>
            </a>
          </li>
          -->
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { pipelinePrimaryTopicReference } from '@babel/types';
import { mounted } from 'vue';
import JumbotronEjeVue from '~/components/JumbotronEje.vue';
export default {
  components: {
    JumbotronEjeVue
  },
  data() {
    return {
      section: null,
      activeSec: 0,
      link: null
    }
  },
  async asyncData({ $content }) {
    const historias = await $content("historias").sortBy('date','desc').limit(8).fetch();

    return {
      historias
    };
  },
  mounted() {
    this.section = document.querySelectorAll('.com__section');
    this.link = document.querySelectorAll('.com__nav-item');
    this.activeFirst();
  },
  methods: {
    stopVids(){
      var frames = document.getElementsByTagName("iframe");
      if(frames){
        for (var i = 0; i < frames.length; i++) {
          frames[i].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      }


    },
    activeSection(section) {
      this.stopVids();
      this.section[this.activeSec].classList.remove('active');
      [].forEach.call(this.section[this.activeSec].children, function (child) {
        child.style.opacity = 0;
        child.style.transform = 'none';
      });
      this.section[section].classList.add('active');
      [].forEach.call(this.section[section].children, function (child) {
        child.style.opacity = 1;
        child.style.transform = 'none';
      });

      this.activeSec > 0 ? this.link[this.activeSec - 1].classList.remove('active') : null;
      this.link[section - 1].classList.add('active');
      this.activeSec = section;
    },
    activeFirst() {

      this.section[0].classList.add('active');
      [].forEach.call(this.section[0].children, function (child) {
        child.style.opacity = 1;
        child.style.transform = 'none';
      });
      this.activeSec = 0;
      //this.link[0].classList.add('active');

    }
  }
};
</script>

<style lang="scss" scoped>
.com {
  display: flex;
  align-items: stretch;
  height: auto;
  min-height: 80vh;
  flex-direction: column;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    overflow: hidden;
    height: calc(100vh - 85px);
    min-height: 800px;

  }



  lite-youtube {
    width: 70vw;
    margin: 0;

    @media (min-width: 700px) {
      width: 50vw;

    }

  }

  .nav-movil {
    @media screen and (min-width: 720px) {
      display: none;
    }

    li{
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      padding: 1rem;
      a{
        font-size: 1rem;
        font-weight: bold;
      }

      &:nth-child(n){
        background-color: var(--bg-pink);

      }
      &:nth-child(2n){
        background-color: #F4E08E;
        a span{color: #5B5B5B;}
      }
      &:nth-child(3n){
        background-color: #74B1B4;

      }

    }


  }

  .aros-movil{
    display: inline-block;
    margin: 0 10px;
    width: 25px;
  }


  &__content {
    position: relative;
    flex: 8;
    color: #fff;
    padding: 0;
    background: rgb(242, 143, 120);
    background: linear-gradient(180deg, rgba(242, 143, 120, 1) 25%, rgba(251, 188, 153, 1) 65%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f28f78", endColorstr="#fbbc99", GradientType=1);

  }

  &__bg {
    &:after {
      content: "";
      background-image: url(../../assets/images/aros-bg.png);
      position: absolute;
      height: 100%;
      width: 100%;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center -25%;
      mix-blend-mode: soft-light;
      z-index: -1;
      opacity: .35;
        @media (min-width: 1100px) {
          background-size: 90%;
          background-position: top right;
          opacity: .65;
    }
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 70vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
    opacity: 0;
    visibility: hidden;
    transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 0;

    &.active {
      opacity: 1;
      visibility: visible;
    }

    &-half {
      // flex: 1;
      height: auto;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
    }

    &--text {

      h1 {
        margin: 0 auto;
        margin-bottom: 3vh;
        font-size: 1.15rem;
        max-width: 800px;
        font-weight: bold;
        color: rgba(white, 1);
        @media(min-width: 700px){
          font-size: 1.5rem;
          font-weight: 300;
        }
        @media(min-width: 1100px){
          font-size: 2rem;
          color: rgba(white, 0.9);
        }
      }

      p {
        margin: 0;
        color: rgba(white, 1);
        font-size: 20px;
        @media(min-width: 1100px){
          color: rgba(white, 1);
          font-weight: 500;
        }
      }

      img {
        max-width: 250px;
        margin: 0 auto;
      }

      &.centered {
        text-align: center;
      }
    }



    &--text-img {
      display: flex;
      flex-flow: row wrap;
    }


    &.com__hero {


      position: relative;
      align-items: center;
      justify-content: center;
      padding: 0rem;

      .heading {

        margin:3rem 0;
        margin-right: auto;
        text-align: right;
        padding: 1rem;
        @media (min-width: 720px) {
          margin-left: auto;

        }
        @media (min-width: 1020px) {
          margin: 0;
          margin-right: 38vh;
          margin-left: 0;

        }

        .animate {
          transform: translate3d(0%, 0, 0);

        }
      }



    }

  }

  &__nav {
    width: auto;
    position: absolute;
    z-index: 0;
    right: 0;
    flex: 2;
    height: 100%;
    display:none;
    @media screen and (min-width: 760px) {
      display: flex;
    }
  }

  &__nav-list {
    margin: 0;
    padding: 0;
    list-style-type: none;

    display: flex;
    flex-flow: column wrap;
    height: 100vh;
    overflow: visible;
    justify-content: flex-start;
    align-items: flex-end;
  }

  &__nav-item {
    width: 12vw;
    cursor: pointer;
    position: relative;
    overflow: visible;
    height: 30%;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.35);
    // background: var(--bg-blue-full);
    transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);
    ;
    &:nth-child(n){
        background-color: #F28F78;

      }
      &:nth-child(2n){
        background-color: #F4E08E;
        a span{color: #5B5B5B;}

      }
      &:nth-child(3n){
        background-color: #74B1B4;

      }
    // &.active {
    // 	background: rgba(#20232A, 1);
    // }

    &:after{
      content: "";
      position: absolute;
      background-image: url(../../assets/images/arosblancos.png);
      background-size: 30px;
      background-repeat: no-repeat;
      background-position: center;
      height: 100%;
      width: 100%;
      top:0;
      bottom:0;
      margin: auto;
      z-index: 1;
      @media (min-width: 768px) {
        background-size: 60px;

      }
      @media (min-width: 1100px) {
        background-size: 80px;

      }
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      width: auto;
      // .com__nav-link {
      // 	transform: scaleX(1);
      // }
      &:after{
        content: none;
      }

      .com__nav-link {
        transform: scaleX(1);
      }

    }

    @media (min-width: 768px) {
      width:10vw;
    }

  }

  &__nav-link {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;
    padding: 7%;
    position: relative;
    width: 70vw;
    text-align: right;
    height: 100%;
    // left: calc(-280% + 90px);
    // background: rgba(#20232A, 0.75);
    transform: scaleX(0);
    transform-origin: right center;
    transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);

    &.flex-row {
      flex-flow: row wrap;
    }

    &.centered {
      align-items: center;
    }

      @media (min-width: 700px) {
            width: 50vw;


      }
      @media (min-width: 1200px) {
            width: 25vw;
      }
  }
}

.com__section--text p{
  width: 80%;
  margin: 25px auto;
  max-width: 700px;
}

/* animation classes */


@for $i from 1 through 5 {
  .delay-#{$i} {
    transition-delay: $i * .05s;
  }
}

.animate {
  transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);
}

.slideInLeft {
  transform: translate3d(-100%, 0, 0);

}

.slideInRight {
  transform: translate3d(100%, 0, 0);

}

.scaleIn {
  transform: scale(1);
}

.scaleInLeft {
  transform: scaleX(1);
  transform-origin: left center;
}
</style>
