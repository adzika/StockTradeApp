<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header">
          <p>{{ item.name }} (Price: {{ item.price }})</p>
        </div>
        <div class="card-body">
          <input type="number" v-model="quantity" placeholder="Quantity">
          <button class="btn btn-info" @click="buy">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        quantity: 0
      }
    },
    methods: {
      buy() {
        console.log(this.quantity, this.item.name);
      }
    },
    props: ['item'],
    name: "AvailableStockCard"
  }
</script>

<style scoped>

</style>
