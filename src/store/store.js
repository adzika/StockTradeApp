import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export const store = new Vuex.Store({
  state: {
    funds: 1000,
    ownedStocks: [{
      'name': 'Lime Tree Software',
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
    buy: (state, payload) => {
      state.funds -= payload.cost;
      let foundStock = state.ownedStocks.find((item) => {
        return item.name === payload.name;
      });
      if (foundStock) {
        foundStock.quantity += payload.quantity;
      } else {
        state.ownedStocks.push({
          'name': payload.name,
          'quantity': payload.quantity
        })
      }
    },
    sell: (state, payload) => {
      let foundStock = state.ownedStocks.find(item => item.name === payload.name);
      if (foundStock) {
        if (payload.quantity > 0 && payload.quantity <= foundStock.quantity) {
          foundStock.quantity -= payload.quantity;
        } else {
          state.ownedStocks.splice(state.ownedStocks.indexOf(foundStock), 1);
        }
        state.funds += payload.price * payload.quantity;
      }
    },
  },
  getters: {
    getAvailableStocks: state => {
      return state.stocksForBuying
    },
    getStockPrice: (state) => (name) => {
      return state.stocksForBuying.find((item) => {
        return item.name === name;
      }).price;
    }
  },
  actions: {
    endDay: ({commit}) => {
      commit('endDay');
    },
    buy: ({commit}, payload) => {
      commit('buy', payload);
    },
    sell: ({commit}, payload) => {
      commit('sell', payload);
    },
  },
  plugins: [createPersistedState()]
});
