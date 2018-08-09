<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'
  import MainScreen from './components/MainScreen'
  import Portfolio from './components/Portfolio'

  export default {
    components: {
      'app-header': Header,
      'app-main-screen': MainScreen,
      'app-portfolio': Portfolio
    }
  }

</script>

<style>

</style>
