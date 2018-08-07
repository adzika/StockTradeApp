<template>
  <div class="stock-cards">
    <div class="card">
      <div class="card-body">
        <p>BMW (Price: {})</p>
        <form>
          <textarea class="form-control" rows="1">
            Quantity
          </textarea>
        </form>
        <button>Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StockCards.vue"
    }
</script>

<style scoped>

</style>
