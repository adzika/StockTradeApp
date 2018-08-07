<template>
  <div>
    <app-stock-card v-for="item in listOfStocks"></app-stock-card>
  </div>
</template>

<script>
  import StockCard from '../components/StockCard.vue'

  export default {
    props: ['listOfStocks'],
    components: {
      'app-stock-card': StockCard
    }
  }
</script>

<style>

</style>
