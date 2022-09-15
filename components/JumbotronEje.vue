<!-- Please remove this file from your project -->
<template>
<div class="jumbotron-eje relative flex items-top justify-center bg-white sm:items-center sm:pt-0 border-t-3  border-b-3 border-black">
  <div class="5xl:px-0 5xl:container lg:pl-6 w-full flex items-center">
    <div class="hero w-full p-0   flex items-center flex-wrap flex-col lg:flex-nowrap lg:flex-row-reverse">
      <div class="h-image w-full 2xl:w-1/2 self-center flex items-center">
      <img :src="require(`../assets/images/${image}`)" alt="" class="h-full w-full object-cover object-left puff-in-top">
      </div>
      <div class="w-full 2xl:w-1/2 text-right pr-6 pb-6 2xl:pb-0">
        <h1 class="2xl:text-5xl text-lg big-title 2xl:mb-6 mb3 text-focus-in">{{title}}</h1>
      <p class="2xl:text-2xl text-sm  uppercase text-focus-in">{{subtitle}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'JumbotronEje',
  props: {
    title: {
      type: String,
      default: 'ANTICORRUPCIÓN'
    },
    subtitle: {
      type: String,
      default: 'Publicaciones'
    },
    image: {
      type: String,
      default: '../assets/images/anticorrupcion-thumb.png'
    }
  }
}
</script>
