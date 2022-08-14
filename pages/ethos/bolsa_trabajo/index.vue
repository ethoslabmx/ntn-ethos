<template>
  <div>
    <div class="hero">
      <h1>Bolsa de trabajo</h1>
      <p>En Ethos estamos comprometidos con la diversidad en nuestro equipo de trabajo. </p>
      <p>Creemos en la igualdad de oportunidades y de condiciones de empleo.</p>
      <p>¡Únete a nuestro equipo!</p>
    </div>
    <div class="vacantes">
      <h2>VACANTES</h2>
      <div>
        <li v-for="v in vacantes" :key="v.puesto">
           <NuxtLink :to="v.slug">
            <p>{{ v.puesto }}</p>
          </NuxtLink>
        </li>
      </div>
    </div>
    <div class="internships">
      <h2>PROGRAMA DE INTERNSHIP</h2>
      <div>
        <li v-for="v in internships" :key="v.puesto">
           <NuxtLink :to="v.slug">
            <p>{{ v.puesto }}</p>
          </NuxtLink>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
