<template>
  <div class="border-b-16 border-primary">
    <JumbotronNoticiasTanks />
    <div class="bg-white">
      <li v-for="col of columnas" :key="col.slug" class="">
        <div
          class="py-10 border-b 4 border-gray-dark flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

          <div class="right md:p-7 p-5  xl:w-1/3  3xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="col.img" alt="" class="w-full h-full xl:w-72 xl:h-52 mb-3 shadow-xl object-cover" />

            </div>


          </div>
          <div class="left md:p-7 p-5   xl:w-2/3  3xl:w-3/4 w-full flex flex-col justify-between">

            <div class="header content-start">

              <NuxtLink :to="'columnas/' + col.slug" class="title xl:text-xl text-sm mb-6 block">{{ col.title }}
              </NuxtLink>

            </div>

            <div class="content content-center mb-10">
              <nuxt-content :document="{ body: col.excerpt }" />
            </div>


          </div>

        </div>
      </li>
      <!-- <li v-for="col of columnas" :key="col.slug">
          <NuxtLink :to="'columnas/'+col.slug">{{ col.title }}</NuxtLink>
          <img :src="col.img" alt="">
          <nuxt-content :document="{ body: col.excerpt }" />
        </li> -->
    </div>
  </div>
</template>

<script>
import JumbotronNoticiasTanks from '~/components/JumbotronNoticiasTanks.vue';

export default {
  components: { JumbotronNoticiasTanks },

  async asyncData({ $content }) {
    const columnas = await $content("noticias").where({ category: "think-tanks" }).fetch();

    return {
      columnas,
    };
  },
}
</script>
