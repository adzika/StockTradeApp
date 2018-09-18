<template>
    <div class="stocksGrid">
      <app-stocks-stock-card v-for="item of $store.state.stocksForBuying" :item="item"></app-stocks-stock-card>
    </div>
</template>

<script>
  import StocksStockCard from './StocksStockCard';

    export default {
      name: "Stocks",
      components: {
          'app-stocks-stock-card': StocksStockCard
      },
    }
</script>

<style scoped>
  .stocksGrid {
    display: grid;
  }

</style>
