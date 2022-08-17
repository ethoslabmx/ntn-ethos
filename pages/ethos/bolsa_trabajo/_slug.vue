<template>
  <div class="app">
     <div class="bg-white border-b-16 border-primary">
      <div class="container py-20">
        <div class="vacantes mb-6">
          <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">{{post.puesto}}</h2>
          <nuxt-content :document="post" />
        </div>

      <div class="bg-gray-dark h-px w-full my-20"></div>
      <div class="vacantes mb-6">
          <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">VACANTES</h2>
          <div>
            <li v-for="v in vacantes" :key="v.puesto">
              <NuxtLink :to="'bolsa_trabajo/' + v.slug">
                <p>{{ v.puesto }}</p>
              </NuxtLink>
            </li>
          </div>
        </div>
        <div class="bg-gray-dark h-px w-full my-20"></div>
      <div class="internships mb-6">
          <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">PROGRAMA DE INTERNSHIP</h2>
          <div>
            <li v-for="v in internships" :key="v.puesto">
              <NuxtLink :to="'bolsa_trabajo/' + v.slug">
                <p>{{ v.puesto }}</p>
              </NuxtLink>
            </li>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    const vacantes = await $content("bolsatrabajo").where({ category: 'vacantes' }).limit(3).fetch();
    const internships = await $content("bolsatrabajo").where({ category: 'internships' }).limit(3).fetch();
    console.log(params)
    try {
      post = await $content("bolsatrabajo", params.slug).fetch();

      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
      vacantes,
      internships
    };
  },
};
</script>
