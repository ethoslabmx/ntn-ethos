<template>
  <footer class="footer">
    <div class="header"><h1>CONTACTO</h1>
    <div class="right">
      <hr class="bg-white">
      <div class="mail"><a href="">info@ethos.org.mx</a></div>
    </div>
    </div>
    <div class="content">

    </div>
  </footer>
</template>

<style lang="scss">
 hr.bg-white{
  background-color: #fff;
  height: 2px;
  }
.footer{
  background-color: #5B5B5B;
  padding: 3rem;

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
