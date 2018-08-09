<template>
  <div class="container">
    <app-stock-card></app-stock-card>
  </div>
</template>

<script>
  import StockCard from '../components/StockCard';

    export default {
        name: "Stocks",
      components: {
          'app-stock-card': StockCard
      }
    }
</script>

<style scoped>

</style>
