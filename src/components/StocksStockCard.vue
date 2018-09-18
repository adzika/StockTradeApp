<template>

      <div class="card">
        <div class="card-header">
          <p>{{ item.name }} <small>(Price: {{ item.price }})</small></p>
        </div>
        <div class="card-body">

          <input
            type="number"
            v-model.number="quantity"
            placeholder="Quantity"
            :class="{danger: insufficientFunds}"
            class="quantity"
            >

          <button
            class="btn btn-success"
            @click="buy"
            :disabled="insufficientFunds || quantity <= 0"
            >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>

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
    computed: {
      funds() {
        return this.$store.getters.getFunds;
      },
      insufficientFunds() {
        return this.item.price * this.quantity > this.funds;
      }
    },
    methods: {
      buy() {
            this.$store.dispatch('buy', {
              name: this.item.name,
              cost: this.item.price * this.quantity,
              quantity: this.quantity
            });
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
  .danger {
    border: 1px solid red;
    outline-color: red;
  }
  .quantity {
    width: 70px;
  }
</style>
