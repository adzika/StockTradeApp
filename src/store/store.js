import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    listOfStocks: [{
      'name': 'BMW',
      'price': 110,
      'quantity': 10
    }]
  },
});
