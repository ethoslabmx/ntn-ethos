<template>
  <div class="app">
    <JumbotronEventos />
    <div class="bg-white border-b-16 border-primary">
      <li v-for="evento of eventos" :key="evento.slug" class="">
        <div
          class="py-10 flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

          <div class="right md:p-7 p-5  xl:w-1/3  3xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="evento.img" alt="" class="w-full h-full xl:w-72 xl:h-52 mb-3 shadow-xl object-cover" />

            </div>


          </div>
          <div class="left md:p-7 p-5   xl:w-2/3  3xl:w-3/4 w-full flex flex-col justify-between">

            <div class="header content-start">

              <NuxtLink :to="'eventos/' + evento.slug" class="title xl:text-xl text-sm mb-6 block">{{ evento.title }}
              </NuxtLink>

            </div>

            <div class="content content-center mb-10">
              <p>{{ evento.body.children[1].children[0].value }}</p>
            </div>


          </div>

        </div>
      </li>
      <!-- <li v-for="evento of eventos" :key="evento.slug">
          <NuxtLink :to="'eventos/'+evento.slug">{{ evento.title }}</NuxtLink>
          <img :src="evento.img" alt="">
          <p>{{evento.body.children[1].children[0].value}}</p>
        </li> -->
    </div>
  </div>
</template>

<script>
import JumbotronEventos from '~/components/JumbotronEventos.vue';

export default {

  components: { JumbotronEventos },

  async asyncData({ $content }) {
    const eventos = await $content("eventos").where({category:"anticorrupcion"}).fetch();

    return {
      eventos,
    };
  },
}
</script>
