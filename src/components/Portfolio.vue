<template>
  <div>
    <app-stock-card v-for="item in $store.state.ownedStocks" :item="item"></app-stock-card>
  </div>
</template>

<script>
  import StockCard from '../components/StockCard.vue'

  export default {
    components: {
      'app-stock-card': StockCard
    }
  }
</script>

<style>

</style>
