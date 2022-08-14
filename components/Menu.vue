<template>
  <div class="menubar flex items-center justify-between">
    <div class="brand mr-2 p-3">
      <a href="//ethos.org.mx" target="_blank"> <img src="../assets/images/logo-dark.png" alt="logo ethos"
          class="logo" /></a>
    </div>
    <div class="nav  items-center justify-end flex">
      <ul class="navbar  items-center justify-between hidden xl:flex">
        <li><a href="/">INICIO</a></li>
        <li class="dropdown inline-block relative">
          <a class=" rounded inline-flex items-center">
            <span class="mr-1">ETHOS</span>
            <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </a>
          <ul class="dropdown-menu absolute hidden text-gray-700  bg-white shadow drop-shadow-sm p-0 m-0">
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ethos/quienessomos">¿QUIÉNES SOMOS?</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap" to="/ethos/equipo">
                EQUIPO</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ethos/financiadores">FINANCIADORES</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ethos/bolsa_trabajo">TRABAJA EN ETHOS</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ethos/documentos-institucionales">DOCUMENTOS <br> INSTITUCIONALES</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="dropdown inline-block relative">
          <a class=" rounded inline-flex items-center">
            <span class="mr-1">EJES DE INVESTIGACIÓN</span>
            <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </a>
          <ul class="dropdown-menu absolute hidden text-gray-700  bg-white shadow drop-shadow-sm p-0 m-0">
            <li class="dropdown-child inline-block relative">
              <a class=" rounded inline-flex items-center py-3 px-6 w-full bg-gray-200 hover:bg-primary">
                <span class="mr-1">ANTICORRUPCIÓN</span>
                <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </a>
              <ul class="dropdown-child-menu absolute hidden text-gray-700  bg-white shadow drop-shadow-sm p-0 m-0">
                <li class="">
                  <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                    to="/anticorrupcion/publicaciones">PUBLICACIONES</NuxtLink>
                </li>
                <li class="">
                  <NuxtLink class="bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap" to="/anticorrupcion/columnas">
                    COLUMNAS DE OPINIÓN</NuxtLink>
                </li>
                <li class="">
                  <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                    to="/anticorrupcion/noticias">NOTICIAS</NuxtLink>
                </li>
                <li class="">
                  <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                    to="/anticorrupcion/eventos">EVENTOS</NuxtLink>
                </li>
                <li class="">
                  <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                    to="/anticorrupcion/videos">VIDEOS</NuxtLink>
                </li>
              </ul>
            </li>


            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/finanzas-publicas">FINANZAS PÚBLICAS</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/desarrollo-sostenible">DESARROLLO SOSTENIBLE</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ciudades-del-futuro">CIUDADES DEL FUTURO</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap" to="/inclusion">
                INCLUSIÓN</NuxtLink>
            </li>
          </ul>
        </li>

        <li class="dropdown inline-block relative">
          <a class=" rounded inline-flex items-center">
            <span class="mr-1">UNIVERSO THINK TANKS</span>
            <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </a>
          <ul class="dropdown-menu absolute hidden text-gray-700  bg-white shadow drop-shadow-sm p-0 m-0">
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/think-tanks/columnas">COLUMNAS</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/think-tanks/noticias">NOTICIAS</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/think-tanks/eventos">EVENTOS</NuxtLink>
            </li>

          </ul>
        </li>
        <li>
          <NuxtLink class=" bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap" to="/historias-de-exito">
            HISTORIAS DE ÉXITO</NuxtLink>
        </li>
      </ul>
      <div class="search px-6">
        <img src="../assets/images/lupa.png" alt="logo ethos" class="search-img" />
      </div>
      <img src="../assets/images/bars.png" alt="logo ethos" class="bars px-6 xl:hidden" />
    </div>

  </div>
</template>
<script>
export default {
  components: {},
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: []         // all of the tabs
    }
  },
}
</script>
<style lang="scss">
.menubar {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 5px;
    width: 100%;
    height: 2px;
    background-color: #F28F78;
  }
}
</style>
