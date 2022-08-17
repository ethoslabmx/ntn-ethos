<template>
  <div>
    <div class="post_content py-28 bg-white">
      <div class="container xl:px-0 flex ">
        <div class="w-full lg:w-3/4 p-5 mx-auto">
          <h1 class="2xl:text-xl text-lg title my-10">{{ vid.title }}</h1>
        <lite-youtube
          :videoid="vid.video.slice(vid.video.indexOf('v=')+2)"
          :playlabel="vid.title"
          params="controls=0&start=0&modestbranding=2&rel=0&enablejsapi=1"
          class="video shadow-xl object-cover"
        />
        <div class="w-full xl:w-3/4 p-5">

          <nuxt-content :document="vid" />

        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let vid;
    //console.log(params)
    try {
      vid = await $content("videos", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      vid,
    };
  },
};
</script>
