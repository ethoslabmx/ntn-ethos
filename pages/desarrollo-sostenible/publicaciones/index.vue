<template>
  <div class="border-b-16 border-primary app">
    <JumbotronEje title="Desarrollo Sostenible" />
    <li v-for="evento of eventos" :key="evento.slug" class="post md:py-20 py-10">
      <div
        class="flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

        <div class="right md:p-7 p-5 md:w-1/3  4xl:w-1/4 w-full flex md:flex-col justify-between text-right">
          <div class="img md:ml-auto content-start my-6">
            <img :src="evento.img" alt="" class="w-80 h-auto mb-3 shadow-xl object-cover" />

          </div>

          <div class="ml-auto p-5 md:p-0">

            <button class="bg-gray-dark font py-2 px-3 rounded-md my-3 text-white">Leer</button>

            <div class="share content-end flex justify-end lg:items-center md:flex-wrap xl:flex-nowrap">

              <small class="title mb-3 xl:mb-0">COMPARTIR</small>
              <ul class="flex items-center ml-3 flex-nowrap">
                <li class="mr-3"><a href=""><img src="../../../assets/images/linkedin-gray.png" alt=""
                      class="h-5 w-5"></a></li>
                <li class="mr-3"><a href=""><img src="../../../assets/images/fbb-gray.png" alt="" class="h-5 w-5"></a>
                </li>
                <li class="mr-3"><a href=""><img src="../../../assets/images/twwt-gray.png" alt="" class="v"></a></li>
                <li class=""><a href=""><img src="../../../assets/images/letter.png" alt="" class="h-5 w-5"></a></li>
              </ul>
            </div>
          </div>

        </div>
        <div class="left md:p-7 p-5 md:w-2/3  4xl:w-3/4 w-full flex flex-col justify-between">

          <div class="header content-start">

            <NuxtLink :to="'publicaciones/'+evento.slug" class="title xl:text-xl text-sm mb-6 block">{{ evento.title }}</NuxtLink>

          </div>

          <div class="content content-center mb-10">
            <p>{{ evento.body.children[1].children[0].value }}</p>
          </div>

          <div class="footer content-end">
            <p>{{evento.autor}}</p>
            <p class="font-bold uppercase">{{new Date(evento.date).toLocaleDateString()}}</p>
          </div>
        </div>

      </div>
    </li>
    <li class="post last">
      <div class="container px-5 xl:px-28 py-10">
        <button class="ml-auto more-btn bold">VER MÁS <span class="icon"></span></button>
      </div>
    </li>
  </div>
</template>

<script>
import JumbotronEje from '~/components/JumbotronEje.vue';

export default {
  components: { JumbotronEje },

  async asyncData({ $content }) {
    const eventos = await $content("publicaciones").where({category:"desarrollo-sostenible"}).fetch();

    return {
      eventos,
    };
  },
}
</script>
