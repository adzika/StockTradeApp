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
    setStocks (state, stocks) {
      state.stocksForBuying = stocks;
    },
    setPortfolio (state, portfolio) {
      state.funds = portfolio.funds;
      state.ownedStocks = portfolio.ownedStocks ? portfolio.ownedStocks : [];
    },
    randomizeStocks: state => {
      state.stocksForBuying.forEach(item => {
        item.price += Math.round(item.price * getRandomArbitrary(-11, 11) * 0.01);
      });
      //let updatedStocks = [...state.stocksForBuying];
      //for (let item of updatedStocks) {
        //const priceChange = item.price * getRandomArbitrary(-11, 11) * 0.01;
        //item.price += Math.round(priceChange);
      //}
    },
    buy: (state, {name, cost, quantity}) => {
      state.funds -= cost;
      let foundStock = state.ownedStocks.find((item) => {
        return item.name === name;
      });
      if (foundStock) {
        foundStock.quantity += quantity;
      } else {
        state.ownedStocks.push({
          'name': name,
          'quantity': quantity
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
    },
    getFunds: state => {
      return state.funds
    },
    getPortfolio: state => {
      return state.ownedStocks
    }

  },
  actions: {
    randomizeStocks: ({commit}) => {
      commit('randomizeStocks');
    },
    buy: ({commit}, payload) => {
      commit('buy', payload);
    },
    sell: ({commit}, payload) => {
      commit('sell', payload);
    },
    loadData: ({commit}) => {
      Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if(data) {
              const portfolio = {
                ownedStocks: data.ownedStocks,
                funds: data.funds
              };
              commit('setStocks', data.stocksForBuying);
              commit('setPortfolio', portfolio);
            }
        });
    }
  },
  plugins: [createPersistedState()]
});
