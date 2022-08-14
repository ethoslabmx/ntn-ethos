<template>
  <div class="menubar flex items-center justify-between">
    <div class="brand mr-2 p-3">
      <a href="//ethos.org.mx" target="_blank"> <img src="../assets/images/logo-dark.png" alt="logo ethos"
          class="logo" /></a>
    </div>
    <div class="nav hidden xl:flex items-center justify-end ">
      <ul class="navbar flex items-center justify-between">
        <li><a href="/">INICIO</a></li>
        <li class="dropdown inline-block relative">
          <a class="font-semibold rounded inline-flex items-center">
            <span class="mr-1">ETHOS</span>
            <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </a>
          <ul class="dropdown-menu absolute hidden text-gray-700  bg-white shadow drop-shadow-sm p-0 m-0">
            <li class="">
              <NuxtLink class="rounded-t bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ethos/quienessomos">¿QUIÉNES SOMOS?</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class="rounded-t bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ethos/equipo">EQUIPO</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class="rounded-t bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ethos/financiadores">FINANCIADORES</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class="rounded-t bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ethos/bolsadetrabajo">TRABAJA EN ETHOS</NuxtLink>
            </li>
            <li class="">
              <NuxtLink class="rounded-t bg-gray-200 hover:bg-primary py-3 px-6 block whitespace-no-wrap"
                to="/ethos/documentos-institucionales">DOCUMENTOS <br> INSTITUCIONALES</NuxtLink>
            </li>
          </ul>
        </li>
        <li><a href="">EJES DE INVESTIGACIÓN</a></li>
        <li><a href="">UNIVERSO THINK TANKS</a></li>
        <li><a href="">HISTORIAS DE ÉXITO</a></li>
      </ul>
      <div class="search px-6">
        <img src="../assets/images/lupa.png" alt="logo ethos" class="search-img" />
      </div>
      <img src="../assets/images/bars.png" alt="logo ethos" class="bars px-6" />
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
