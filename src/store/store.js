import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export const store = new Vuex.Store({
  state: {
    ownedStocks: [{
      'name': 'BMW',
      'price': 110,
      'quantity': 10
    }],
    stocksForBuying: [{
      'name': 'Lime Tree Software',
      'price': 100,
    },
      {
        'name': 'Facebook',
        'price': 50,
      },
      {
        'name': 'Ifrit Software',
        'price': 200,
      },
      {
        'name': 'Blob Design',
        'price': 150,
      }]
  },
  mutations: {
    endDay: state => {
      let updatedStocks = [...state.stocksForBuying];
      for (let item of updatedStocks) {
        const priceChange = item.price * getRandomArbitrary(-11, 11) * 0.01;
        item.price += Math.round(priceChange);
      }
    },
    buy: state => {

    }
  },
  getters: {
    getAvailableStocks: state => {
      return state.stocksForBuying
    }
  },
  actions: {
    endDay: ({ commit }) => {
      commit('endDay');
    },
  }
});
