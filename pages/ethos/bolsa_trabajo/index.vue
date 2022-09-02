<template>
  <div class="app bolsa">
    <JumbotronBolsa />
    <div class="bg-white border-b-16 border-primary">
      <div class="container py-20">

        <div class="content flex flex-col">
          <div class="vacantes mb-6 2xl:w-3/4 xl:w-2/3 w-full">
          <h2 class="lg:text-2xl text-lg title mb-6 tracking-wide">VACANTES</h2>
          <div>
            <li v-for="v in vacantes" :key="v.puesto">
              <NuxtLink :to="'bolsa_trabajo/' + v.slug">
                <p>{{ v.puesto }}</p>
              </NuxtLink>
            </li>
          </div>
          <div class="bg-gray-dark h-px w-full my-20"></div>
        </div>

        <div class="internships mb-6 2xl:w-3/4 xl:w-2/3 w-full">
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

  </div>
</template>

<script>
import JumbotronBolsa from '~/components/JumbotronBolsa.vue';

export default {
  components: { JumbotronBolsa },

  async asyncData({ $content }) {
    const vacantes = await $content("bolsatrabajo").where({ category: 'vacantes' }).fetch();
    const internships = await $content("bolsatrabajo").where({ category: 'internships' }).fetch();
    return {
      vacantes,
      internships
    };
  },
}
</script>


<style lang="scss" scoped>
.bolsa{
  a
  :hover{
    color: var(--text-orange)
  }
}
</style>
