<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header">
          <p>BMW (Price: { price } | Quantity: { quantity })</p>
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
  export default {
    data() {

    },
    name: "StockCard.vue"
  }
</script>

<style scoped>

</style>
