import Vue from 'vue';
import App from './app';
import Axios from 'axios';

Vue.prototype.$http = Axios;
new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(App)
});
