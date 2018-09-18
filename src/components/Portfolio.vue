<template>
  <div>
    <app-stock-card v-for="item of $store.state.ownedStocks" :item="item"></app-stock-card>
  </div>
</template>

<script>
  import StockCard from './PortfolioStockCard.vue'

  export default {
    components: {
      'app-stock-card': StockCard
    }
  }
</script>
