<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header">
          <p>{{ item.name }} (Price: {{ item.price }} | Quantity: {{ item.quantity }})</p>
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
    props: ['item'],
    name: "StockCard"
  }
</script>

<style scoped>

</style>
