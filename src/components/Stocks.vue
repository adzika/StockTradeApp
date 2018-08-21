<template>
    <div class="row">
    <app-available-stock-card v-for="item in $store.state.stocksForBuying" :item="item"></app-available-stock-card>
    </div>
</template>

<script>
  import AvailableStockCard from '../components/AvailableStockCard';

    export default {
      name: "Stocks",
      components: {
          'app-available-stock-card': AvailableStockCard
      }
    }
</script>

<style scoped>
  .row {
    max-width: 100%;
  }

</style>
