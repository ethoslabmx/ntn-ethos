<template>
<div class="menubar flex items-center justify-between">
    <div class="brand mr-2 p-3">
       <a href="//ethos.org.mx" target="_blank"> <img src="../assets/images/logo-dark.png" alt="logo ethos" class="logo" /></a>
    </div>
    <div class="nav flex items-center justify-end">
      <ul class="navbar flex items-center justify-between">
        <li><a href="">INICIO</a></li>
        <li><a href="">ETHOS</a></li>
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
  components:{},
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: []         // all of the tabs
    }
  },
}
</script>
<style lang="scss">
.menubar{
  // position: relative;
  &:after{
    content: "";
    position: absolute;
    bottom: 5px;
    width: 100%;
    height: 2px;
    background-color: #F28F78;
  }
  }
</style>
