<template>
  <div class="border-b-16 border-primary app">
    <JumbotronDoc />
    <div class="documentos bg-white">
      <div class="documento container py-20 flex flex-wrap 2xl:flex-nowrap items-center justify-between" v-for="d in documentos" :key="d.titulo">
        <div class="col self-start">
          <h2 class="lg:text-2xl text-lg title mb-6">{{d.titulo}}</h2>
          <p>{{d.autor}}</p>
        </div>
        <div class="col mt-6 2xl:mt-0 mx-auto 2xl:ml-auto 2xl:mr-0">
          <img :src="d.img" alt="" class="doc-cover">

          <a href="" @click="download(d.file)" class="block mx-auto bg-gray-dark py-2 px-7 rounded-md my-3 text-white">Descargar</a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JumbotronDoc from '~/components/JumbotronDoc.vue';

export default {

  components: { JumbotronDoc },

  async asyncData({ $content }) {
    const documentos= await $content("documentos").fetch();
    return {
      documentos
    };
  },
  mounted(){
    this.setupObserver()

  },
  methods:{
    setupObserver(){
      let options = {
        root: document.querySelector('container'),
        rootMargin: "-120px 0px",
        threshold: 0.8,
      };

      let observer = new IntersectionObserver(this.intersectionCallback, options);
      document.querySelectorAll(".doc-cover").forEach((el) => {
        observer.observe(el);
      });
    },
    intersectionCallback(entries, obs) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //console.log(entry.target);
          entry.target.classList.add("slide-in-fwd-center");
        } else {
          //obs.unobserve(entry.target);
        }
      });
    },
    download(url){
      console.log(url);
      window.open(url);
    }
  }
}
</script>

<style lang="scss">


.slide-in-fwd-center {
	-webkit-animation: slide-in-fwd-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 500ms both;
	        animation: slide-in-fwd-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 500ms both;
}

@-webkit-keyframes slide-in-fwd-center {
  0% {
    -webkit-transform:  translateY(-300px);
            transform:  translateY(-300px);
    opacity: 0;
  }
  100% {
    -webkit-transform:  translateY(0);
            transform:  translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-fwd-center {
  0% {
    -webkit-transform:  translateY(-300px);
            transform:  translateY(-300px);
    opacity: 0;
  }
  100% {
    -webkit-transform:  translateY(0);
            transform:  translateY(0);
    opacity: 1;
  }
}


.doc-cover {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 0;
}
</style>
