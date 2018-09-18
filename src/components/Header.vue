<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light" style="background-color: #e3f2fd;">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link to="/" tag="nav" class="navbar-brand" active-class="active" exact>Stock Trader</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio" active-class="active">Portfolio</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/stocks" active-class="active">Stocks</router-link>
          </li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a class="nav-link" @click="endDay">End Day</a>
          </li>

            <li class="nav-item dropdown">
              <a
                :class="{open: isDropdownOpen}"
                @click="isDropdownOpen = !isDropdownOpen"
                class="nav-link dropdown-toggle"
                href="#" id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Save & Load
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
              </div>
            </li>

          <li class="nav-item">
            <strong class="navbar-text navbar right">Funds: {{ funds | currency }}</strong>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "Header",
    data() {
      return {
        isDropdownOpen: false
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        const data = {
          funds: this.$store.getters.getFunds,
          ownedStocks: this.$store.getters.getPortfolio,
          stocksForBuying: this.$store.getters.getAvailableStocks
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    },
    computed: {
      funds() {
        return this.$store.getters.getFunds;
      }
    }
  }
</script>

<style scoped>

</style>
