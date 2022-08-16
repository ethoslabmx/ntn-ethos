<template>
  <div class="border-b-16 border-primary app">
    <JumbotronOpinionTanks/>
    <div>
          <ul>
      <li v-for="col of columnas" :key="col.slug" class="post md:py-20 py-10">
        <div
          class="flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">
          <div class="right md:p-7 p-5 md:w-1/3  4xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="col.img" alt="" class="w-80 h-auto mb-3 shadow-xl object-cover" />
            </div>
          </div>
          <div class="left  md:p-7 p-5 md:w-2/3  4xl:w-3/4 w-full flex flex-col justify-between">
            <div class="content-start">
              <NuxtLink :to="'columnas/'+col.slug" class="title xl:text-xl text-sm mb-6 block">{{ col.title }}</NuxtLink>
            </div>
              <div class="content-center mb-10">
                <p>{{col.body.children[1]}}</p>
              </div>
            </div>
          </div>
        </li>
        <li class="post last">
          <div class="container px-5 xl:px-28 py-10">
            <button class="ml-auto more-btn bold">VER MÁS <span class="icon"></span></button>
          </div>
        </li>
    </ul>
    <!-- <li v-for="col of columnas" :key="col.slug">
        <NuxtLink :to="'columnas/'+col.slug">{{ col.title }}</NuxtLink>
        <img :src="col.img" alt="">
        <p>{{col.body.children[1]}}</p>
      </li> -->
    </div>
  </div>
</template>

<script>
import JumbotronOpinionTanks from '~/components/JumbotronOpinionTanks.vue';

export default {
  components: { JumbotronOpinionTanks },

  async asyncData({ $content }) {
    const columnas = await $content("columnas").where({category:"think-tanks"}).fetch();

    return {
      columnas,
    };
  },
}
</script>
