<template>
  <footer class="">
    <div class="container mx-auto px-0">
      <div class="header">
        <h1 class="big-title">CONTACTO</h1>
        <div class="right">
          <hr class="bg-white" />
          <div class="mail"><a href="mailto:info@ethos.org.mx">info@ethos.org.mx</a></div>
        </div>
      </div>
      <div class="content text-white">

        <div class="flex py-10 flex-wrap justify-between">
          <div class="text-justify   mr-auto  lg:w-80">
            Somos un <span class="italic">think tank</span> que genera recomendaciones innovadoras y acciones concretas de política pública con el objeto de
            atender algunos de los principales retos para el desarrollo de México.
          </div>
          <div
            class="text-justify  xl:ml-auto lg:w-52 mt-10 lg:mt-0"
          >
            <p class="text-white">Ethos Innovación en Políticas Públicas</p>
            <p class="text-white ">Monte Urales 424, Lomas
            Virreyes Miguel Hidalgo, 11000 CDMX</p>
          </div>
        </div>
        <div class="flex pt-10 pb-3 flex-wrap justify-between items-center">
          <div
            class="text-center sm:text-left pr-6 4xl:w-1/3 4xl:flex-nowrap flex items-center"
          >
            <NuxtLink class="block whitespace-no-wrap mr-3" to="/privacidad"
              >AVISO DE PRIVACIDAD</NuxtLink
            >
            |  <span class="ml-3">ETHOS 2022</span>
          </div>
          <div
            class="text-center mx-auto lg:text-right lg:mx-0 lg:ml-auto lg:w-1/3 mb-3 mt-6 4xl:mt-0"
          >
            <ul class="flex ai-center lg:justify-end">
              <li class="mr-6">
                <a href="https://mx.linkedin.com/company/fundaci-n-ethos"
                  ><img src="../assets/images/linkedin.png" alt=""
                /></a>
              </li>
              <li class="mr-6">
                <a href="https://www.facebook.com/ethoslaboratorio"
                  ><img src="../assets/images/fbb.png" alt=""
                /></a>
              </li>
              <li class="mr-6">
                <a href="https://www.instagram.com/ethoslabmx/"
                  ><img src="../assets/images/insta.png" alt=""
                /></a>
              </li>
              <li class="mr-6">
                <a href="https://twitter.com/ethoslabmx"
                  ><img src="../assets/images/twwt.png" alt=""
                /></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCnMvGlzchLKDs9-I9v9_2iw"
                  ><img src="../assets/images/youtube.png" alt=""
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
hr.bg-white {
  border: 0;
  background-color: #fff;
  height: 3px;

}

footer {
  background-color: #5b5b5b;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 5rem;
  }

  .mail{
    font-family: Robot, sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  .header {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    flex-wrap: wrap;


    h1 {
      font-size: 2rem;
      color: #fff;
      align-self: start;

      @media screen and (min-width: 768px) {
        margin-top: -30px;
      }

    }

    .right {
      width: 100%;
      display: flex;
      flex-direction: column;

      .mail {
        display: block;

        margin-left: auto;
        margin-top: 1rem;

        a {
          color: #fff;
          font-size: 1.5rem;
        }
      }
    }

    @media (min-width: 768px) {
      flex-wrap: wrap;
      margin-bottom: 100px;

      .right {
        width: 75%;
        margin-left: auto;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
