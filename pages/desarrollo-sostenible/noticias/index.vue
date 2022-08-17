<template>
  <div class="app">
   <JumbotronEje title="DESARROLLO SOSTENIBLE" subtitle="Noticias" image="desarollo-sostenible-thumb.png"/>
    <div class="bg-white border-b-16 border-primary">
      <li v-for="col of columnas" :key="col.slug" class="post">
        <div
          class="py-10  flex container px-5 xl:px-28 items-center justify-between flex-wrap md:flex-nowrap md:flex-row-reverse">

          <div class="right md:p-7 p-5  xl:w-1/3  4xl:w-1/4 w-full flex md:flex-col justify-between text-right">
            <div class="img md:ml-auto content-start my-6">
              <img :src="col.img" alt="" class="w-80 h-auto mb-3 shadow-xl object-cover" />
              <NuxtLink :to="'noticias/' + col.slug">
              <button class="bg-gray-dark font py-2 px-7 rounded-md my-3 text-white">Leer</button>
              </NuxtLink>
            </div>


          </div>
          <div class="left md:p-7 p-5   xl:w-2/3  4xl:w-3/4 w-full flex flex-col justify-between">

            <div class="header content-start">

              <NuxtLink :to="'noticias/' + col.slug" class="title xl:text-xl text-sm mb-6 block">{{ col.title }}
              </NuxtLink>

            </div>

            <div class="content content-center mb-10">
              <p>{{ col.body.children[1].children[0].value }}</p>
            </div>


          </div>

        </div>
      </li>
      <!-- <li v-for="col of columnas" :key="col.slug">
          <NuxtLink :to="'noticias/'+col.slug">{{ col.title }}</NuxtLink>
          <img :src="col.img" alt="">
          <p>{{col.body.children[1].children[0].value}}</p>
        </li> -->
    </div>
  </div>
</template>

<script>
import JumbotronEje from '~/components/JumbotronEje.vue';

export default {
  components: { JumbotronEje },

  async asyncData({ $content }) {
    const columnas = await $content("noticias").where({category:"desarrollo-sostenible"}).fetch();

    return {
      columnas,
    };
  },
}
</script>
