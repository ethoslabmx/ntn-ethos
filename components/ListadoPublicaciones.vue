<!-- Please remove this file from your project -->
<template>
  <div>
    <li v-for="post of posts" :key="post.slug" class="post md:py-10 py-10">
      <div
        class="flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

        <div class="right md:py-7 py-5 md:w-1/3  3xl:w-1/4 w-full flex flex-col justify-between text-right">
          <div class="img md:ml-auto content-start my-6">
            <img :src="post.img+'-/resize/350x/'" loading="lazy" alt="" class="w-auto h-30 md:h-50 mb-2 shadow-xl" />

          </div>

          <div class="ml-auto p-5 md:p-0 hidden md:block">

            <NuxtLink :to="categoria+'/'+post.slug" class="title xl:text-xl text-sm mb-6 block">
              <button class="bg-gray-dark font py-2 px-3 rounded-md my-3 text-white">Leer</button>
            </NuxtLink>

          </div>

        </div>
        <div class="left md:p-7 p-5 md:w-2/3  3xl:w-3/4 w-full flex flex-col justify-between">

          <div class="header content-start">

            <NuxtLink :to="categoria+'/'+post.slug" class="title xl:text-xl text-sm mb-6 block ">{{ post.title }}</NuxtLink>

          </div>

          <div class="content content-center mb-10">
            <p>{{ post.extracto }}</p>
          </div>

          <div class="footer content-end" v-if="showAutor">
            <p>{{post.autor}}</p>
            <p class="font-bold uppercase">{{new Date(post.date).toLocaleDateString()}}</p>
          </div>
        </div>

      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "Posts",
  props: {
    eje: {
      type: String,
      default: "anticorrupcion",
    },
    categoria: {
      type: String,
      default: "publicaciones",
    },
    posts:{
      type: Array,
      default: () => []
    }
  },
  computed: {
    showAutor() {
      return this.categoria != "eventos";
    },
  },

};
</script>

<style lang="scss" scoped>

li{
  list-style: none;
}
</style>
