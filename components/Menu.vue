<template>
  <div class="menubar">
    <div class="container md:px-4">
      <div class="flex items-center justify-between saira font-semibold tracking-wider flex-nowrap">
        <div class="brand mr-2 py-3 xl:w-1/6">
          <a href="/"> <img src="../assets/images/logo-dark.png" alt="logo ethos" class="logo object-contain" /></a>
        </div>
        <div class="flex items-center w-auto xl:w-auto ml-auto py-3">
          <div class="nav items-center justify-end  hidden xl:flex">
            <ul class="navbar  items-center justify-between flex">

              <li class="mr-1"> <NuxtLink to="/">INICIO</NuxtLink></li>

              <li class="dropdown inline-block relative ml-3">
                <a class="  inline-flex items-center">
                  <span class="mr-1">ETHOS</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </a>
                <ul class="dropdown-menu absolute hidden text-gray-700  bg-white shadow-xl p-0 m-0">
                  <li class="">
                    <NuxtLink  class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
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
                          REPORTAJES PERIODÍSTICOS</NuxtLink>
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
                          REPORTAJES PERIODÍSTICOS</NuxtLink>
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
                          REPORTAJES PERIODÍSTICOS</NuxtLink>
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
                          REPORTAJES PERIODÍSTICOS</NuxtLink>
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
                          REPORTAJES PERIODÍSTICOS</NuxtLink>
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
                  <span class="mr-1">RUMBO DEMOCRÁTICO</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </a>
                <ul class="dropdown-menu absolute hidden text-gray-700  bg-white shadow-xl p-0 m-0 w-full">
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/rumbo-democratico/publicaciones">PUBLICACIONES</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/rumbo-democratico/columnas">COLUMNAS</NuxtLink>
                  </li>
                  <li class="">
                    <NuxtLink class=" bg-gray-200 hover:bg-primary hover:text-white py-3 px-6 block whitespace-no-wrap"
                      to="/rumbo-democratico/videos">VIDEOS</NuxtLink>
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
                      to="/think-tanks/publicaciones">PUBLICACIONES</NuxtLink>
                  </li>
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
          <div class="flex items-center flex-nowrap justify-end">
            <div class="search mx-6">
              <NuxtLink to="/buscador">
              <img src="../assets/images/lupa.png" alt="logo ethos"
                class="object-cover w-full h-full" /></NuxtLink></div>

            <div class="menu xl:hidden" :class="[`${$store.state.menu.menuClass}`]">
              <button class="nav-tgl" type="button" aria-label="toggle menu" @click="addActive">
                <!-- this span just for the three dividers in the hamburger button--><span aria-hidden="true"></span>
              </button>
              <nav class="nav">
                <ul class="tabs">
                  <li> <NuxtLink to="/">INICIO</NuxtLink></li>
                  <li class="tab">
                    <!-- <a href="#/herramientas">ETHOS</a> -->
                    <input type="radio" id="chck1" name="rd">
                    <label class="tab-label" for="chck1">ETHOS</label>
                    <div class="tab-content">
                      <ul id="" class="">
                      <li class="">
                        <NuxtLink
                          to="/ethos/quienessomos">¿QUIÉNES SOMOS?</NuxtLink>
                      </li>
                      <li class="">
                        <NuxtLink
                          to="/ethos/equipo">
                          EQUIPO</NuxtLink>
                      </li>
                      <li class="">
                        <NuxtLink
                          to="/ethos/financiadores">FINANCIADORES</NuxtLink>
                      </li>
                      <li class="">
                        <NuxtLink
                          to="/ethos/bolsa_trabajo">TRABAJA EN ETHOS</NuxtLink>
                      </li>
                      <li class="">
                        <NuxtLink
                          to="/ethos/documentos-institucionales">DOCUMENTOS INSTITUCIONALES</NuxtLink>
                      </li>
                      </ul>
                    </div>
                  </li>
                  <li class="tab">
                    <!-- <a href="#/encuestas">EJES DE INVESTIGACIÓN</a> -->
                    <input type="radio" id="chck2" name="rd">
                    <label class="tab-label" for="chck2">EJES DE INVESTIGACIÓN</label>
                    <div class="tab-content tab-content_parent__children">

                      <ul class="tabs">
                        <li class="tab tab_child">
                          <input type="radio" id="anticorrupcion" name="rd2">
                          <label class="tab-label tab-label_child" for="anticorrupcion">ANTICORRUPCIÓN</label>

                          <div class="tab-content tab-content_child">
                            <ul id="" class="">
                              <li class="">
                                <NuxtLink
                                  to="/anticorrupcion/publicaciones">PUBLICACIONES</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/anticorrupcion/reportajes">
                                  REPORTAJES PERIODÍSTICOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/anticorrupcion/columnas">
                                  COLUMNAS DE OPINIÓN</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/anticorrupcion/noticias">NOTICIAS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/anticorrupcion/eventos">EVENTOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/anticorrupcion/videos">VIDEOS</NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="tab tab_child">
                          <input type="radio" id="finanzas" name="rd2">
                          <label class="tab-label tab-label_child" for="finanzas">Finanzas Públicas</label>

                          <div class="tab-content tab-content_child">
                            <ul id="" class="">
                              <li class="">
                                <NuxtLink
                                  to="/finanzas-publicas/publicaciones">PUBLICACIONES</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/finanzas-publicas/reportajes">
                                  REPORTAJES PERIODÍSTICOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/finanzas-publicas/columnas">
                                  COLUMNAS DE OPINIÓN</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/finanzas-publicas/noticias">NOTICIAS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/finanzas-publicas/eventos">EVENTOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/finanzas-publicas/videos">VIDEOS</NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="tab tab_child">
                          <input type="radio" id="desarrollo" name="rd2">
                          <label class="tab-label tab-label_child" for="desarrollo">Desarrollo sostenible</label>

                          <div class="tab-content tab-content_child">
                            <ul id="" class="">
                              <li class="">
                                <NuxtLink
                                  to="/desarrollo-sostenible/publicaciones">PUBLICACIONES</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/desarrollo-sostenible/reportajes">
                                  REPORTAJES PERIODÍSTICOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/desarrollo-sostenible/columnas">
                                  COLUMNAS DE OPINIÓN</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/desarrollo-sostenible/noticias">NOTICIAS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/desarrollo-sostenible/eventos">EVENTOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/desarrollo-sostenible/videos">VIDEOS</NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="tab tab_child">
                          <input type="radio" id="ciudades" name="rd2">
                          <label class="tab-label tab-label_child" for="ciudades">Ciudades del futuro</label>

                          <div class="tab-content tab-content_child">
                            <ul id="" class="">
                              <li class="">
                                <NuxtLink
                                  to="/ciudades-del-futuro/publicaciones">PUBLICACIONES</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/ciudades-del-futuro/reportajes">
                                  REPORTAJES PERIODÍSTICOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/ciudades-del-futuro/columnas">
                                  COLUMNAS DE OPINIÓN</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/ciudades-del-futuro/noticias">NOTICIAS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/ciudades-del-futuro/eventos">EVENTOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/ciudades-del-futuro/videos">VIDEOS</NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="tab tab_child">
                          <input type="radio" id="inclusion" name="rd2">
                          <label class="tab-label tab-label_child" for="inclusion">Inclusión</label>

                          <div class="tab-content tab-content_child">
                            <ul id="" class="">
                              <li class="">
                                <NuxtLink
                                  to="/inclusion/publicaciones">PUBLICACIONES</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/inclusion/reportajes">
                                  REPORTAJES PERIODÍSTICOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/inclusion/columnas">
                                  COLUMNAS DE OPINIÓN</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/inclusion/noticias">NOTICIAS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/inclusion/eventos">EVENTOS</NuxtLink>
                              </li>
                              <li class="">
                                <NuxtLink
                                  to="/inclusion/videos">VIDEOS</NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>

                    </div>
                  </li>
                  <li class="tab">
                    <!-- <a href="#/reportajes">UNIVERSO THINKS TANKS</a> -->

                    <input type="radio" id="chck3" name="rd">
                    <label class="tab-label" for="chck3"> RUMBO DEMOCRÁTICO </label>
                    <div class="tab-content">
                      <ul id="" class="">
                        <li class="">
                          <NuxtLink
                            to="/rumbo-democratico/publicaciones">PUBLICACIONES</NuxtLink>
                        </li>
                        <li class="">
                          <NuxtLink
                            to="/rumbo-democratico/columnas">COLUMNAS</NuxtLink>
                        </li>
                        <li class="">
                          <NuxtLink
                            to="/rumbo-democratico/videos">VIDEOS</NuxtLink>
                        </li>
                      </ul>
                    </div>

                  </li>
                  <li class="tab">
                    <!-- <a href="#/reportajes">UNIVERSO THINKS TANKS</a> -->

                    <input type="radio" id="chck3" name="rd">
                    <label class="tab-label" for="chck3"> UNIVERSO THINKS TANKS </label>
                    <div class="tab-content">
                      <ul id="" class="">
                        <li class="">
                          <NuxtLink
                            to="/think-tanks/publicaciones">PUBLICACIONES</NuxtLink>
                        </li>
                        <li class="">
                          <NuxtLink
                            to="/think-tanks/columnas">COLUMNAS</NuxtLink>
                        </li>
                        <li class="">
                          <NuxtLink
                            to="/think-tanks/noticias">NOTICIAS</NuxtLink>
                        </li>
                        <li class="">
                          <NuxtLink
                            to="/think-tanks/eventos">EVENTOS</NuxtLink>
                        </li>
                      </ul>
                    </div>

                  </li>
                  <li>
                    <!-- <a href="#/reportajes">HISTORIAS DE ÉXITO</a> -->
                    <NuxtLink
                    to="/historias-de-exito">
                    HISTORIAS DE ÉXITO</NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
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

    addActive() {
      let mclass = this.$store.state.menu.menuClass == 'active' ? 'inavtive' : 'active';
      this.$store.commit('menu/SetClass', mclass)
    },
    reset(e){
      let m = document.getElementsByClassName('dropdown-menu');
      console.log(m)
      for (let i = 0; i < m.length; i++) {
        console.log(m[i])
        m[i].style = "pointer-events: none;"
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
  .search{
    width: 35px;
    height: 35px;
  }
  ul.dropdown-menu {
    min-width: 220px;

    li {
      letter-spacing: 1px;
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
    font-size:0.65rem;
    font-weight: 600;
    color: #5B5B5B;
  }


}

$midnight: #636254;
$primaryText: #F28F78;

input[type="checkbox"],
input[type="radio"] {
  display: none;
}

.menu {

  .nav {

    ul,
    ul.tabs {
      display: none;
      visibility: hidden;
    }
  }

  .nav-tgl {
    display: inline-block;
    cursor: pointer;
    position: relative;
    z-index: 1;
    width: 35px;
    height: 35px;
    border: none;
    padding: 0;
    background: transparent;
    box-shadow: none;
    line-height: 35px;
    text-align: center;

    // making the dividers
    >span {
      // the second divider
      display: inline-block;
      position: relative;
      height: 2px;
      width: 34px;
      border-radius: 1px;
      background: $midnight;
      vertical-align: middle;

      // the first & the third dividers
      &:before,
      &:after {
        display: inline-block;
        position: absolute;
        content: "";
        height: 2px;
        border-radius: 1px;
        background: $midnight;
        // for the hover state
        transition: all 200ms;
      }

      &:before {
        top: -12px;
        width: 35px;
        left: 0;
      }

      &:after {
        top: 12px;
        width: 35px;
        left: 0;
      }
    }

    // ofcorse we should find a replacement for the focus state but it's not our topic
    &:focus {
      outline: none
    }

    // &:hover>span:after{
    //   left: 6px;
    //     width: 22px;
    // }
    // &:hover>span:before {
    //   left: 3px;
    //   width: 28px;

    // }
  }

  // for the nav background (styling the nav itself is not our topic)
  .nav:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100vw;
    height: 100%;
    background: darken($color: $midnight, $amount: .35%);
    transition: all 500ms ease-in-out;

    // that's all the pen about
    clip-path: circle(30px at calc(100% - 65px) 65px);
    // for AT
    visibility: hidden;
  }

  // when it gits activated
  &.active {
    nav.nav {
      position: absolute;
      height: fit-content;
      min-height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 85px;

      @media (min-width:700px) {
        height: 100vh;
        justify-content: center;

      }
    }

    .nav:before {
      visibility: visible;

      // that's all the pen about
      clip-path: circle(100%);
    }

    .nav-tgl>span {
      height: 0;

      &:after,
      &:before {
        top: 0px;
        left: 0;
        width: 34px;
        background: lighten($midnight, 45%);

      }

      &:after {
        transform: rotate(-45deg);
      }

      &:before {
        transform: rotate(45deg);
      }
    }

    ul.tabs {

      width: 100%;
      padding: 0;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      visibility: visible;
      li {

        a,
        label {
          color: $primaryText;
          text-decoration: none;
          font-size: 1.20rem;
          cursor: pointer;
          font-weight: 300;
          padding: .5rem 2rem;
          text-transform: uppercase;
        }
        a{
          display: block;
        }

      }

      @media (min-width:700px) {
        padding-top: 20vh;



      }
    }

    /* Accordion styles */

    .tab {
      width: 100%;
      color: $primaryText;
      overflow: hidden;


      &.tab_child {
        overflow: hidden;
        display: block;
        border: none;
        padding: 0;

        .tab-label {
          width: 100%;
        }
      }



      &-label {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        cursor: pointer;
        width: 100%;



        &::after {
          content: "\276F";
          width: 1em;
          height: 1em;
          text-align: center;
          transition: all .35s;
          margin-left: 1rem;


        }
      }

      &-content {
        color: $primaryText;
        background: transparent;
        transition: all 0.35s;
        width: 100%;
        transform: translate(0%, 0%);
        max-height: 0;
        padding: 0;



        &.tab-content_parent__children {
          overflow: hidden;
          height: 100vh;
          padding: 0rem 2rem;

          ul.tabs {
            overflow-y: auto;
            height: 100vh;
            display: block;
            visibility: visible;

            li {
              ul {
                overflow-y: visible;
                height: auto;
              }

            }
          }


        }

        &.tab-content_child {
          position: relative;
          top: 0;
          right: 0;
          width: 100%;
          opacity: 1;
          transform: translate(0%, 0%);
          height: auto;
          border-left: none;
          border-bottom: 1px solid rgba(255, 255, 255, .35);
        }

        ul {
          padding-top: 0;
          display: block;
          visibility: visible;

          li:not(:last-child) {
            padding: 0;
            border-bottom: 1px solid rgba(255, 255, 255, .35);
          }
        }
      }

      &-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        background: $midnight;
        cursor: pointer;

        &:hover {
          background: darken($midnight, 3%);
        }
      }

      @media(min-width: 700px) {
        display: flex;
        align-items: flex-start;
        overflow: visible;

        &-label {
          width: 50%;
        }

        &-content {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          opacity: 0;
          transform: translate(0%, -100%);
          height: 100%;
          border-left: 1px solid rgba(255, 255, 255, .5);

          ul {
            li {
              padding: 0;

            }
          }


        }
      }
    }

    // :checked
    input:checked {
      +.tab-label {
        background: darken($midnight, 5%);

        /* Icon */
        &:hover {
          background: darken($midnight, .5%);
        }

        &.tab-label_child {
          background: darken($midnight, 2%);

        }

        &::after {
          transform: rotate(90deg);
        }
      }

      ~.tab-content {

        max-height: 100vh;
        padding: 0;
        background: lighten($midnight, 5%);

        z-index: 1;

        &.tab-content_child {
          opacity: 1;
          transform: translate(0%, 0%);
          max-height: 100vh;
          padding: 0;
          background: lighten($midnight, 25%);

          ul li a{
            color: $midnight;
          }

        }

        &.tab-content_parent__children {
          padding: 0;
          height: fit-content;
          max-height: fit-content;

          ul.tabs {
            overflow-y: visible;
            height: auto;
            display: block;


          }
        }

        @media (min-width:700px) {
          opacity: 1;
          transform: translate(0%, 0%);
          max-height: 100%;
          padding: 0;
          background: lighten($midnight, 0%);


          &.tab-content_parent__children {

            ul.tabs {
              overflow-y: auto;
              height: calc(100vh - 84px);
              display: block;
            }
          }
        }



      }
    }

  }
}
</style>
