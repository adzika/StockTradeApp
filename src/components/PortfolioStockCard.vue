<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-header">
          <p>{{ item.name }} (Price: {{ getStockPrice(item.name) }} | Quantity: {{ item.quantity }})</p>
        </div>
        <div class="card-body">
          <input type="number" v-model.number="quantity" placeholder="Quantity">
          <button class="btn btn-danger" @click="sell">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

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
      ])
    },
    methods: {
      sell() {
        if (this.quantity > 0 && this.quantity <= this.item.quantity) {
          console.log(this.item.quantity);
          this.$store.dispatch('sell', {
            price: this.getStockPrice(this.item.name) * this.quantity,
            quantity: this.quantity,
            name: this.item.name
          })
        } else {
          alert("You don't have enough stocks!")
        }
      }
    }
  }
</script>

<style scoped>

</style>
