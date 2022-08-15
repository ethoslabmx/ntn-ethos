<template>
  <div class="app">
    <div class="com">
      <div class="com__content">
        <section
          class="com__section com__section--text com__hero com__bg bg-gradient-to-b from-primary to-primarylight">
          <div class="container flex flex-col justify-start items-end px-0">
            <div class="md:w-1/3 heading">
              <h1 class="big-title">HISTORIAS DE ÉXITO</h1>
              <p class="">
                Nuestros casos de éxito con origen en la investigación que se enfoncan en casos específicos.
              </p>
            </div>
          </div>
        </section>
        <section
          class="com__section com__section--text com__section--text-img com__bg bg-gradient-to-b from-primary to-primarylight">
          <div class="text-center">
            <h1 class="animate">Escudo ciudadano</h1>
            <lite-youtube videoid="ke-NGxVe2tU" playlabel="Escudo Ciudadano"
              params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1" class="" />
          </div>

        </section>
        <section class="com__section com__section--text centered com__bg bg-gradient-to-b from-primary to-primarylight">
          <h1 class="animate scaleIn">Otra Historia</h1>
          <lite-youtube videoid="yaED_rElGgU" playlabel="Escudo Ciudadano"
            params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1" class="" />
        </section>
        <section class="com__section com__section--text com__bg bg-gradient-to-b from-primary to-primarylight">
          <h1 class="animate ">Otro Historia 3</h1>
          <lite-youtube videoid="l0dDjW70Vuk" playlabel="Escudo Ciudadano"
            params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1" class="" />
        </section>
      </div>
      <nav class="com__nav">
        <ul class="com__nav-list">
          <li class="com__nav-item bg-primary">
            <a class="com__nav-link" @click="activeSection(1)">
              <span class="animate scaleInLeft delay-2 big-title 4xl:text-xl text-sm text-white mb-3 text-right">Conoce a la
                AMEXCID</span>
              <span class="animate scaleInLeft delay-4 4xl:text-lg text-white text-right">Agencia Mexicana de Cooperación
                Internacional para el Desarrollo.</span>
            </a>
          </li>
          <li class="com__nav-item bg-yellow-3">
            <a class="com__nav-link" @click="activeSection(2)">
              <div class="com__section-half">
                <span class="animate scaleInLeft delay-3 big-title 4xl:text-xl text-sm  text-white mb-3 text-right">COOPERACiÓN PARA
                  TODOS</span>
                <span class="animate scaleInLeft delay-4 4xl:text-lg text-white text-right">Ayuda oficial al desarrollo en
                  México y LATAM.</span>
              </div>
              <div class="com__section-half">
                <span class="white-circle animate slideInRight delay-5"></span>
              </div>
            </a>
          </li>
          <li class="com__nav-item  bg-cyan">
            <a class="com__nav-link" @click="activeSection(3)">
              <span class="animate scaleIn delay-3 big-title 4xl:text-xl text-sm  text-white mb-3 text-right">CEPAL</span>
              <span class="animate scaleIn delay-5 4xl:text-lg text-white text-righ">El cambio climático y la biodiversidad
                en América Latina y el Caribe.</span>
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mounted } from 'vue';

export default {
  data() {
    return {
      section: null,
      activeSec: 0,
      link: null
    }
  },
  mounted() {
    this.section = document.querySelectorAll('.com__section');
    this.link = document.querySelectorAll('.com__nav-item');
    this.activeFirst();
  },
  methods: {
    activeSection(section) {
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
  overflow: hidden;
  height: calc(100vh - 85px);

  lite-youtube {
    width: 50vw;
    height: 50vh;
    margin: 0;

  }


  &__content {
    position: relative;
    flex: 8;
    color: #fff;
    padding: 10vh 10vw;
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
      background-size: 90%;
      background-repeat: no-repeat;
      background-position: top right;
      z-index: -1;
    }
  }

  &__section {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
        margin-bottom: 3vh;
        font-size: 48px;
        font-weight: 300;
        color: rgba(white, 0.9);
      }

      p {
        margin: 0;
        color: rgba(white, 0.9);
        max-width: 600px;
        font-size: 20px;
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
      position: absolute;
      align-items: flex-end;
      justify-content: flex-start;

      .heading {
        margin-top: 18vh;
        margin-right: 30vh;
        text-align: right;

        .animate {
          transform: translate3d(0%, 0, 0);

        }
      }



    }

  }

  &__nav {
    width: auto;
    position: absolute;
    z-index: 2;
    right: 0;
    flex: 2;
    height: 100%;
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
    width: 10vw;
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

    // &.active {
    // 	background: rgba(#20232A, 1);
    // }

    &:after{
      content: "";
      position: absolute;
      background-image: url(../../assets/images/arosblancos.png);
      background-size: 80px;
      background-repeat: no-repeat;
      background-position: center;
      height: 100%;
      width: 100%;
      top:0;
      bottom:0;
      margin: auto;
      z-index: 1;
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
  }

  &__nav-link {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;
    padding: 7%;
    position: relative;
    width: 20vw;
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

    // .com__section-half {
    // 	height: auto;

    // 	&:nth-child(2) {
    // 		align-items: center;
    // 	}
    // }
  }
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
