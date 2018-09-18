<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header">
          <p>{{ item.name }}
            <small>(Price: {{ getStockPrice(item.name) }} | Quantity: {{ item.quantity }})</small>
          </p>
        </div>
        <div class="card-body">
          <input
            type="number"
            v-model.number="quantity"
            placeholder="Quantity"
            :class="{danger: insufficientQuantity}"
          >
          <button
            class="btn btn-danger"
            @click="sell"
            :disabled="insufficientQuantity || quantity <=0"
          >{{ insufficientQuantity ? 'Not enough Stocks' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {
        quantity: 0
      }
    },
    props: ['item'],
    name: "StockCard",
    computed: {
      ...mapGetters([
        'getStockPrice'
      ]),
      insufficientQuantity() {
        return this.quantity > this.item.quantity;
      }
    },
    methods: {
      sell() {
        this.$store.dispatch('sell', {
          price: this.getStockPrice(this.item.name),
          quantity: this.quantity,
          name: this.item.name
        })
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
    outline-color: red;
  }
  .quantity {
    width: 70px;
  }
</style>
