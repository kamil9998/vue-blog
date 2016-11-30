import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';
import Login from './components/auth/Login.vue';
import SignUp from './components/auth/SignUp.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp }
];