<template>
  <div class="app home">
    <JumbotronIndex :notas="notas" />
    <div class="separador_header container mx-auto py-6 md:p-6 my-6 md:my-14">
      <h2 class="big-title xl:text-xl text-md text-right pr-3 tracking-widest">EJES DE INVESTIGACIÓN</h2>
      <hr>
    </div>
    <div class="ejes container mx-auto">
      <div class="eje bg-white md:flex-row-reverse flex-col">

        <div class="img md:w-1/2"> <img src="../assets/images/anticorrupcion-thumb.jpg" alt=""></div>

        <div class="content md:w-1/2 p-8 self-center">

          <h2 class="title xl:text-2xl text-lg">Anticorrupción</h2>
          <p>Buscamos contribuir al buen funcionamiento del Sistema Nacional Anticorrupción y de los Sistemas Estatales Anticorrupción, empoderar a la sociedad civil e involucrar a diversos actores, para que funjan como contrapesos reales de la corrupción.</p>
            <NuxtLink class="ml-auto more-btn mt-4" to="/anticorrupcion/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>

        </div>

      </div>
      <div class="eje bg-white md:flex-row flex-col">

        <div class="img md:w-1/2"><img src="../assets/images/finanzas-publicas-thumb.jpg" alt=""></div>

        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Finanzas Públicas</h2>
          <p>Promovemos finanzas públicas sanas, a través de un sistema fiscal con un diseño adecuado, un nivel de ingreso óptimo y un ejercicio del gasto eficiente y transparente, tanto a nivel federal como subnacional.</p>
            <NuxtLink class="ml-auto more-btn mt-4" to="/finanzas-publicas/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>

        </div>


      </div>
      <div class="eje bg-white md:flex-row-reverse flex-col">
        <div class="img md:w-1/2"><img src="../assets/images/desarollo-sostenible-thumb.jpg" alt=""></div>

        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Desarrollo Sostenible</h2>
          <p>Las cambiantes dinámicas sociales, económicas y ambientales nos obligan a analizar los procesos de desarrollo desde una perspectiva de crisis. Por ello, buscamos impulsar modelos de desarrollo con enfoques de justicia, sostenibilidad y resiliencia.</p>
            <NuxtLink class="ml-auto more-btn mt-4" to="/desarrollo-sostenible/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>
        </div>


      </div>
      <!--      
      <div class="eje bg-white md:flex-row flex-col">
        <div class="img md:w-1/2"><img src="../assets/images/ciudades-del-futuro-thumb.jpg" alt=""></div>
        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Ciudades del futuro</h2>
          <p>Generamos estrategias y proyectos que promuevan el desarrollo sostenible de servicios públicos e infraestructura urbanos que aprovechen recursos renovables, implementen medidas de eficiencia energética y fortalezcan las capacidades institucionales en materia ambiental.</p>
            <NuxtLink class="ml-auto mt-4 more-btn" to="/ciudades-del-futuro/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>
        </div>


      </div>
      -->

      <div class="eje bg-white md:flex-row flex-col">
        <div class="img md:w-1/2"><img src="../assets/images/inclusion-thumb.jpg" alt=""></div>
        <div class="content md:w-1/2 p-8 self-center">
          <h2 class="title xl:text-2xl text-lg">Inclusión</h2>
          <p>Analizamos y proponemos soluciones a los desafíos estructurales del desarrollo social, incluyendo iniciativas de igualdad de género y que aseguren los derechos de poblaciones en situación de vulnerabilidad.</p>
            <NuxtLink class="ml-auto mt-4 more-btn" to="/inclusion/publicaciones">ENTRAR <span class="icon"></span></NuxtLink>
        </div>


      </div>
    </div>
    <div class="columnas 2xl:pr-20">
      <div class="separador_header container mx-auto p-6 my-6 md:my-14">
        <h2 class="big-title xl:text-xl text-md text-right pr-3 tracking-widest">Columnas de opinion</h2>
        <hr>
      </div>
      <li v-for="post of columnas" :key="post.slug" class="eje">
        <div class="container mx-0 ml-auto  flex 10 justify-between items-center lg:flex-row-reverse flex-col">

          <div class="lg:w-1/2 3xl:w-1/3 lg:ml-10 self-center tag-container">
            <img :src="post.img+'-/resize/350x/'" alt="" class="w-auto object-cover col-img">
             <div class="tag">{{nombreEje(post.category)}}</div>
          </div>

          <div class="content lg:w-1/2  3xl:w-2/3 mt-6 lg:mt-0">
            <NuxtLink :to="post.category +'/columnas/'+post.slug" class="xl:text-lg title">{{ post.title }}</NuxtLink>
            <p class="text-gray-dark">{{ post.extracto }}</p>
          </div>

        </div>
      </li>
    </div>
    <div class="more py-10 text-right">
      <div class="container">
        <button class="ml-auto more-btn" v-if="more" @click="loadPosts">VER MÁS <span class="icon"></span></button>
      </div>
    </div>
    <div class="twitter bg-white md:py-20 py-10">
      <div class="container mx-auto">
        <div class="flex justify-between align-middle flex-wrap md:flex-nowrap">
          <div class="separador_header self-start lg:w-2/3 tracking-widest">
            <h2 class="big-title xl:text-xl text-md text-right pr-3">ETHOS EN TWITTER</h2>
            <hr>
          </div>
          <div class="lg:ml-6  block  widget-twitter mt-6 lg:mt-0 mx-auto">
            <a class="twitter-timeline" data-lang="es" data-width="300" data-height="450" data-theme="light" href="https://twitter.com/EthosInnovacion?ref_src=twsrc%5Etfw">Tweets by EthosInnovacion</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import JumbotronIndex from '~/components/JumbotronIndex.vue';


export default {
  components: { JumbotronIndex },
  async asyncData({ $content }) {
    const columnas = await $content("columnas").sortBy('date','desc').limit(3).fetch();
    const notas = await $content("cintillo").sortBy('date','desc').fetch().catch((error) => console.log(error.data));
    return {
      columnas,
      notas
    };
  },
  data(){
    return {
      loading: false,
      total: 0,
      more:true,
    }
  },
  head(){
    return {
      title: 'Ethos Innovación en Políticas Públicas',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Somos un think tank que genera recomendaciones innovadoras y acciones concretas de política pública con el objeto de atender algunos de los principales retos para el desarrollo de México.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Ethos Innovación en Políticas Públicas'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Somos un think tank que genera recomendaciones innovadoras y acciones concretas de política pública con el objeto de atender algunos de los principales retos para el desarrollo de México.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://ethosinnovacion.com/og-image.jpg'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://ethosinnovacion.com/'
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Ethos Innovación en Políticas Públicas'
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Somos un think tank que genera recomendaciones innovadoras y acciones concretas de política pública con el objeto de atender algunos de los principales retos para el desarrollo de México.'
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://ethosinnovacion.com/og-image.jpg'
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        },
      ]
    }
  },

  mounted(){
    this.setupObserver();
  },
  methods:{
    loadPosts(){
      this.getNext();
    },
    setupObserver(){
      let options = {
        root: null,
        rootMargin: "20px 0px",
        threshold: 0.8,
      };

      let observer = new IntersectionObserver(this.intersectionCallback, options);
      document.querySelectorAll("h2.title").forEach((el) => {
        observer.observe(el);
      });
    },
    intersectionCallback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //console.log(entry.target);
          entry.target.classList.add("tracking-in-expand");
        } else {
          //obs.unobserve(entry.target);
        }
      });
    },
    async getNext(){
      const newCols = await this.$content("columnas").sortBy('date','desc').skip(this.columnas.length).limit(8).fetch();
      if(newCols.length < 8){
        this.more = false;
      }
      this.columnas = this.columnas.concat(newCols);
    },
    nombreEje(eje){
      let nombre = '';
      switch(eje){
         case "anticorrupcion":
           nombre = "Anticorrupción";
           break;
          /*
        case "ciudades-del-futuro":
          nombre = "Ciudades del Futuro";
          break;*/
        case "inclusion":
          nombre = "Inclusión";
          break;
        case "finanzas-publicas":
          nombre = "Finanzas Públicas";
          break;
        case "desarrollo-sostenible":
          nombre = "Desarrollo Sostenible";
          break;
        case "think-tanks":
          nombre = "Think Tanks";
          break;
        case "rumbo-democratico":
          nombre = "Rumbo Democrático";
          break;
      }
      return nombre;
    }
  }
}
</script>
<style lang="scss" scoped>
.widget-twitter{

  width:300px;

  .twitter-timeline{
    border-radius:12px;
    overflow: hidden;
    box-shadow: -1px 4px 6px 1px rgba(0 ,0 ,0 , .35);
    --tw-drop-shadow: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));
  }
}


h2.title{
  color: #5b5b5b;
}

li.eje{
  padding: 40px 20px;



  // decidi hacer una caja para que el tag se ubique bien en el bottom junto con la imagen,
  // veras tanto el right de tag por el padding de container y eje.
  //

  .tag{
    right: calc(-1rem - 20px);
  }

  @media (min-width: 580px) {
    .tag{
      right: calc(-2rem - 20px);
    }
  }
  @media (min-width: 800px) {
        padding: 30px;

    .tag{
      right: calc(-3rem - 30px);
    }
  }
  @media (min-width: 1040px) {
    .tag{
      right: calc(-5rem - 40px);
    }
  }
    @media (min-width: 1100px) {
    .tag{
      right: calc(-6rem - 40px);
    }
  }
    @media (min-width: 1200px) {
    padding: 40px;

  }
}

.col-img{
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media screen and (min-width: 800px) {
    height: 200px;
  }

}

.columnas {
  a{
    letter-spacing: 5px;
  }
  p{
    font-family: Lato, sans-serif;
    font-weight: 500;
  }
}


.reveal-text,
.reveal-text::after {
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-duration: 800ms;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
}

.reveal-text {
  --animation-delay: 1s
  --animation-duration: var(--duration, 800ms);
  --animation-iterations: var(--iterations, 1);
  position: relative;
  animation-name: clip-text;
  white-space: nowrap;
  color:#5b5b5b;
  cursor: default;

  &::after {
    content: "";
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #5b5b5b;
    transform: scaleX(0);
    transform-origin: 0 50%;
    pointer-events: none;
    animation-name: text-revealer;
  }

}


@keyframes clip-text {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);

  }
}


@keyframes text-revealer {

  0%, 50% {
    transform-origin: 0 50%;
  }

  60%, 100% {
    transform-origin: 100% 50%;
  }


  60% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(0);
  }
}



</style>
