<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header">
          <p>{{ item.name }} (Price: {{ getStockPrice(item.name) }} | Quantity: {{ item.quantity }})</p>
        </div>
        <div class="card-body">
          <input type="text" placeholder="Quantity">
          <button class="btn btn-danger" disabled>Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    props: ['item'],
    name: "StockCard",
    computed: {
      ...mapGetters([
        'getStockPrice'
      ])
    }
  }
</script>

<style scoped>

</style>
