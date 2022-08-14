<template>
  <div class="footer">
    <div class="container mx-auto px-0">
      <div class="header">
        <h1>CONTACTO</h1>
        <div class="right">
          <hr class="bg-white">
          <div class="mail"><a href="">info@ethos.org.mx</a></div>

        </div>

      </div>
      <div class="content text-white">
        <div class="flex  py-10 flex-wrap">
          <div class="text-justify lg:text-left mr-auto lg:pr-6 lg:w-1/3">
            Somos un think tank que transforma investigaciones
            y experiencias en recomendaciones claras y acciones
            concretas de política pública que atienden algunos de
            los principales retos para el desarrollo de México.
          </div>
          <div class="text-justify lg:text-left  lg:text-right lg:ml-auto lg:w-1/3">
            Ethos Innovación en Políticas Públicas
            Montes Urales 424, Lomas Virreyes
            Miguel Hidalgo, 11000 CDMX
          </div>
        </div>
        <div class="flex pt-10 pb-3 flex-wrap">
          <div class="text-center lg:text-left mx-auto pr-6 lg:w-1/3 mb-6">
            AVISO DE PRIVACIDAD | ETHOS 2022
          </div>
          <div class="text-center mx-auto lg:text-right lg:ml-auto lg:w-1/3 mb-3">
            <ul class="flex ai-center">
              <li class="mr-6"><a href=""><img src="../assets/images/linkedin.png" alt=""></a></li>
              <li class="mr-6"><a href=""><img src="../assets/images/fbb.png" alt=""></a></li>
              <li class="mr-6"><a href=""><img src="../assets/images/insta.png" alt=""></a></li>
              <li class="mr-6"><a href=""><img src="../assets/images/twwt.png" alt=""></a></li>
              <li><a href=""><img src="../assets/images/youtube.png" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
hr.bg-white {
  background-color: #fff;
  height: 2px;
}

.footer {
  background-color: #5B5B5B;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  .header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    h1 {
      font-size: 2rem;
      color: #fff;

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

    @media (min-width:768px) {
      flex-wrap: wrap;

      .right {
        width: 75%;
        margin-left: auto;
        display: flex;
        flex-direction: column;


      }
    }
  }
  @media (min-width:993px) {
      height: 50vh;
  }
}
</style>
