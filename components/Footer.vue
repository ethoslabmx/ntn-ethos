<template>
  <div class="footer">
    <div class="header"><h1>CONTACTO</h1>
    <div class="right">
      <hr class="bg-white">
      <div class="mail"><a href="">info@ethos.org.mx</a></div>

    </div>

    </div>
    <div class="content">
      <div class="flex text-white py-10">
        <div class="mr-auto pr-6">
          Somos un think tank que transforma investigaciones
          y experiencias en recomendaciones claras y acciones
          concretas de política pública que atienden algunos de
          los principales retos para el desarrollo de México.
        </div>
        <div class="ml-auto">
          Ethos Innovación en Políticas Públicas
          Montes Urales 424, Lomas Virreyes
          Miguel Hidalgo, 11000 CDMX
        </div>
      </div>
        <div class="flex text-white pt-10 pb-3">
        <div class="mr-auto pr-6">
        AVISO DE PRIVACIDAD |  ETHOS 2022
        </div>
        <div class="ml-auto">
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
</template>

<style lang="scss">
 hr.bg-white{
  background-color: #fff;
  height: 2px;
  }
.footer{
  background-color: #5B5B5B;
  padding: 3rem;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  .header {
    display: flex;
    align-items: center;

    h1{
      font-size: 2rem;
      color:#fff;

    }

    .right{
      width: 75%;
      margin-left: auto;
      display: flex;
      flex-direction: column;

      .mail {
        display: block;

          margin-left: auto;
          margin-top: 1rem;
        a{
              color:#fff;
              font-size: 1.5rem;

      }
      }

    }
  }
}
</style>
