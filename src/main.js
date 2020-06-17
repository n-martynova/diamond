import Vue from 'vue'
import App from './App.vue'
import { ModalPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(ModalPlugin)

new Vue({
    render: function (h) { return h(App) },
}).$mount('#app')
