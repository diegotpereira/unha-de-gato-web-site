import Vue from 'vue'
import App from './App.vue'
import router from './router';
import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false

require('./assets/main.scss');

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')