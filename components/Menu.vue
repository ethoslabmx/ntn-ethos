<template>
    <div class="menubar flex items-center justify-between saira font-semibold tracking-wider flex-nowrap">
      <div class="brand mr-2 p-3 xl:w-1/6">
        <a href="/"> <img src="../assets/images/logo-dark.png" alt="logo ethos" class="logo object-contain" /></a>
      </div>
      <div class="flex items-center w-auto xl:w-auto ml-auto">
        <div class="nav items-center justify-end  hidden xl:flex">
        <ul class="navbar  items-center justify-between flex">
          <li class="mr-1"><a href="/">INICIO</a></li>
          <li class="dropdown inline-block relative ml-3">
            <a class="  inline-flex items-center">
              <span class="mr-1">ETHOS</span>
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul class="dropdown-menu absolute hidden text-gray-700  bg-white shadow-xl p-0 m-0">
              <li class="">
                <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                  to="/ethos/quienessomos">¿QUIÉNES SOMOS?</NuxtLink>
              </li>
              <li class="">
                <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                  to="/ethos/equipo">
                  EQUIPO</NuxtLink>
              </li>
              <li class="">
                <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                  to="/ethos/financiadores">FINANCIADORES</NuxtLink>
              </li>
              <li class="">
                <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                  to="/ethos/bolsa_trabajo">TRABAJA EN ETHOS</NuxtLink>
              </li>
              <li class="">
                <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                  to="/ethos/documentos-institucionales">DOCUMENTOS <br> INSTITUCIONALES</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="dropdown inline-block relative ml-3">
            <a class="  inline-flex items-center">
              <span class="mr-1">EJES DE INVESTIGACIÓN</span>
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul class="dropdown-menu absolute hidden text-gray-dark  bg-white shadow-xl p-0 m-0">
              <li class="dropdown-child inline-block relative w-full">
                <a
                  class="justify-between  inline-flex items-center py-3 px-6 w-full block bg-gray-200 hover:bg-primary hover:text-white">
                  <span class="mr-1">ANTICORRUPCIÓN</span>
                  <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </a>
                <ul class="dropdown-child-menu absolute hidden text-gray-700  bg-white shadow-xl p-0 m-0">
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/anticorrupcion/publicaciones">PUBLICACIONES</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/anticorrupcion/reportajes">
                      REPORTAJES PERÍODISTCOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/anticorrupcion/columnas">
                      COLUMNAS DE OPINIÓN</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/anticorrupcion/noticias">NOTICIAS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/anticorrupcion/eventos">EVENTOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/anticorrupcion/videos">VIDEOS</NuxtLink>
                  </li>
                </ul>
              </li>


              <li class="dropdown-child inline-block relative w-full">
                <a
                  class="justify-between  inline-flex items-center py-3 px-6 w-full block bg-gray-200 hover:bg-primary hover:text-white">
                  <span class="mr-1">FINANZAS PÚBLICAS</span>
                  <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </a>
                <ul class="dropdown-child-menu absolute hidden text-gray-700  bg-white shadow-xl p-0 m-0">
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/finanzas-publicas/publicaciones">PUBLICACIONES</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/finanzas-publicas/reportajes">
                      REPORTAJES PERÍODISTCOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/finanzas-publicas/columnas">
                      COLUMNAS DE OPINIÓN</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/finanzas-publicas/noticias">NOTICIAS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/finanzas-publicas/eventos">EVENTOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/finanzas-publicas/videos">VIDEOS</NuxtLink>
                  </li>
                </ul>
              </li>

              <li class="dropdown-child inline-block relative w-full">
                <a
                  class="justify-between  inline-flex items-center py-3 px-6 w-full block bg-gray-200 hover:bg-primary hover:text-white">
                  <span class="mr-1">DESARROLLO SOSTENIBLE</span>
                  <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </a>
                <ul class="dropdown-child-menu absolute hidden text-gray-700  bg-white shadow-xl p-0 m-0">
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/desarrollo-sostenible/publicaciones">PUBLICACIONES</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/desarrollo-sostenible/reportajes">
                      REPORTAJES PERÍODISTCOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/desarrollo-sostenible/columnas">
                      COLUMNAS DE OPINIÓN</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/desarrollo-sostenible/noticias">NOTICIAS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/desarrollo-sostenible/eventos">EVENTOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/desarrollo-sostenible/videos">VIDEOS</NuxtLink>
                  </li>
                </ul>
              </li>

              <li class="dropdown-child inline-block relative w-full">
                <a
                  class="justify-between  inline-flex items-center py-3 px-6 w-full block bg-gray-200 hover:bg-primary hover:text-white">
                  <span class="mr-1">CIUDADES DEL FUTURO</span>
                  <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </a>
                <ul class="dropdown-child-menu absolute hidden text-gray-700  bg-white shadow-xl p-0 m-0">
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/ciudades-del-futuro/publicaciones">PUBLICACIONES</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/ciudades-del-futuro/reportajes">
                      REPORTAJES PERÍODISTCOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/ciudades-del-futuro/columnas">
                      COLUMNAS DE OPINIÓN</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/ciudades-del-futuro/noticias">NOTICIAS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/ciudades-del-futuro/eventos">EVENTOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/ciudades-del-futuro/videos">VIDEOS</NuxtLink>
                  </li>
                </ul>
              </li>

              <li class="dropdown-child inline-block relative w-full">
                <a
                  class="  inline-flex items-center py-3 px-6 w-full justify-between block bg-gray-200 hover:bg-primary hover:text-white">
                  <span class="mr-1">INCLUSIÓN</span>
                  <svg class="fill-current h-4 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </a>
                <ul class="dropdown-child-menu absolute hidden text-gray-700  bg-white shadow-xl p-0 m-0">
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/inclusion/publicaciones">PUBLICACIONES</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/inclusion/reportajes">
                      REPORTAJES PERÍODISTCOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class="bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/inclusion/columnas">
                      COLUMNAS DE OPINIÓN</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/inclusion/noticias">NOTICIAS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/inclusion/eventos">EVENTOS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/inclusion/videos">VIDEOS</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="dropdown inline-block relative ml-3">
            <a class="  inline-flex items-center w-full">
              <span class="mr-1">UNIVERSO THINK TANKS</span>
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </a>
            <ul class="dropdown-menu absolute hidden text-gray-700  bg-white shadow-xl p-0 m-0 w-full">
              <li class="">
                <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                  to="/think-tanks/columnas">COLUMNAS</NuxtLink>
              </li>
              <li class="">
                <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                  to="/think-tanks/noticias">NOTICIAS</NuxtLink>
              </li>
              <li class="">
                <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                  to="/think-tanks/eventos">EVENTOS</NuxtLink>
              </li>

            </ul>
          </li>
          <li>
            <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
              to="/historias-de-exito">
              HISTORIAS DE ÉXITO</NuxtLink>
          </li>
        </ul>
      </div>
        <div class="flex items-center mx-6 xl:mx-0  flex-nowrap justify-end">
          <div class="search w-6 h-6 mx-6"><img src="../assets/images/lupa.png" alt="logo ethos" class="object-cover w-full h-full" /></div>
          <div class="movile-menu xl:hidden" id="menu-container">
          <label class="block w-6 h-auto relative">
            <!-- <img src="../assets/images/bars.png" alt="logo ethos" class="bars px-6" /> -->
            <input type="checkbox" id="menu-check" @click="addActive" />
            <span class="menu"> <span class="hamburger"></span> </span>
            <ul class="">
              <li class="text-primary"><a href="#/">INICIO</a></li>
              <li><a href="#/herramienta">ETHOS</a></li>
              <li><a href="#/encuestas">EJES DE INVESTIGACIÓN</a></li>
              <li><a href="#/reportajes">UNIVERSO THINKS TANKS</a></li>
              <li><a href="#/reportajes">HISTORIAS DE ÉXITO</a></li>
            </ul>
          </label>
        </div>
        </div>
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
  methods: {
    hasChange() {
      window.addEventListener("hashchange", () => {
        currentPath.value = window.location.hash;
        let menu = document.getElementById("menu-check");
        menu.checked = false;
        document.getElementById("menu-container").classList.remove("active");
      });
    },
    addActive() {
      let menu = document.getElementById("menu-check");
      if (!menu.checked) {
        document.getElementById("menu-container").classList.remove("active");
      } else {
        document.getElementById("menu-container").classList.add("active");
      }
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

  ul.dropdown-menu {
    min-width: 220px;

    li {
      letter-spacing: 2px;
    }


  }

  &:after {
    content: "";
    position: absolute;
    bottom: 5px;
    width: 100%;
    height: 2px;
    background-color: #F28F78;
  }

  li {

    font-weight: 600;
    color: #5B5B5B;
  }


}

.movile-menu {
  position: relative;
  z-index: 1;
  height: auto;
  width: 40px;
  /* display: flex; */
  /* align-items: center; */
  /* translate: none; */
   transition: 0.5s ease-in-out;
  transform: translate(0rem, -2rem);
  // background: red;
  &.active {
    z-index: 200;
    transform: translate(0rem, 0rem);

  }

  @media screen and (min-width: 1040px) {
    display: none;
  }

  label {


    .menu {
      position: absolute;
      right: 2rem;
      top: 2rem;
      width: auto;
      height: 40px;
      background-color: transparent;
      border-radius: 50% 50% 50% 50%;
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      box-shadow: 0 0 0 0 #88817f, 0 0 0 0 #88817f;
      cursor: pointer;
    }
  }

  label .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: #636254;
    display: block;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  label .hamburger:after,
  label .hamburger:before {
    -webkit-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #636254;
  }

  label .hamburger:before {
    top: -10px;
  }

  label .hamburger:after {
    bottom: -10px;
  }

  label input {
    display: none;
  }

  label input:checked {
    background-color: #88817f;

    // Por historias de exito

    z-index: 0;
    height: 100vh;
    width: 100vw;
    display: block;
    position: relative;
  }

  label input:checked+.menu {
    box-shadow: 0 0 0 100vw #88817f, 0 0 0 150vh #88817f;
    border-radius: 0;
    background-color: #d7ccaa;
  }

  label input:checked+.menu .hamburger {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  label input:checked+.menu .hamburger:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    bottom: 0;
  }

  label input:checked+.menu .hamburger:before {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    top: 0;
  }

  label input:checked+.menu+ul {
    opacity: 1;
  }

  label ul {
    position: absolute;
    top: 50vh;
    left: calc(-50vw - 2rem);
	 -webkit-transform: translate(0%, -50%);
    transform: translate(0%, -50%);
    opacity: 0;
    -webkit-transition: 0.25s 0s ease-in-out;
    transition: 0.25s 0s ease-in-out;
    margin: 0;
    padding: 0;
  }

  label a {
    margin-bottom: 1em;
    display: block;
    // color: #F28F78;
    color:#fff;
    text-decoration: none;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 300;
  }
}
</style>
