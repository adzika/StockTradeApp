import MainScreen from './components/MainScreen.vue'
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';

export const routes = [
  { path: '', component: MainScreen },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks },
];
