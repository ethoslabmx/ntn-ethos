<!-- Please remove this file from your project -->
<template>
  <div>
    <li v-for="post of micrositios" :key="post.slug" class="eje">
      <div class="container mx-0 ml-auto flex 10 justify-between items-center lg:flex-row-reverse flex-col" >
        <div class="lg:w-1/2 3xl:w-1/3 lg:ml-10 self-center tag-container">
          <img :src="post.img+'-/resize/350x/'" alt="" class="w-auto object-cover col-img" />
          <a :href="post.link" target="_blank">
            <div class="tag">Micrositio</div>
          </a>
        </div>

        <div class="content lg:w-1/2 3xl:w-2/3 mt-6 lg:mt-0">
          <a :href="post.link" target="_blank" class="xl:text-lg title">{{ post.title}}</a>
          <p class="text-gray-dark">{{ post.extracto }}</p>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "Micrositios",
  props: {
    eje: {
      type: String,
      default: "anticorrupcion",
    },
    categoria: {
      type: String,
      default: "publicaciones",
    },
    micrositios:{
      type: Array,
      default: () => []
    }
  },

};
</script>

<style lang="scss" scoped>

.eje{
  padding: 40px 20px;



  // decidi hacer una caja para que el tag se ubique bien en el bottom junto con la imagen,
  // veras tanto el right de tag por el padding de container y eje.
  //

  .tag{
    bottom: 30px;
    right: calc(-1rem - 20px);
  }

  @media (min-width: 580px) {
    .tag{
      right: calc(-2rem - 20px);

    }

    img{
      width: 100%;
      max-width: 450px;
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
</style>
