import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Directive from './directives/module'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(Directive);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
