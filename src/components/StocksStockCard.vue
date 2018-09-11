<template>
    <div class="col-sm-6 col-md-4">
      <div class="card">
        <div class="card-header">
          <p>{{ item.name }} (Price: {{ item.price }})</p>
        </div>
        <div class="card-body">

          <input
            type="number"
            v-model.number="quantity"
            placeholder="Quantity">

          <button
            class="btn btn-success"
            @click="buy"
            :disabled="quantity <= 0 || !Number.isInteger(quantity)"
            >Buy</button>

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
        if (this.quantity > 0) {
          if (this.$store.state.funds >= this.item.price * this.quantity) {
            console.log(this.quantity, this.item.name);
            this.$store.dispatch('buy', {
              name: this.item.name,
              cost: this.item.price * this.quantity,
              quantity: this.quantity
            });
          } else {
            alert("You don't have enough funds!");
          }
        }
      }
    },
    props: ['item'],
    name: "AvailableStockCard"
  }
</script>

<style scoped>
  .card {
    margin-bottom: 15px;
  }
</style>
