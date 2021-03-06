import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/routes'
import store from './store/store'
import axios from 'axios'
import VueTheMask from 'vue-the-mask'

Vue.config.productionTip = false

const token = localStorage.getItem('user-token')

if (token) {
    axios.defaults.headers.common['Authorization'] = token
}

Vue.use(VueTheMask)

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')