import Vue from 'vue'
import App from './App.vue'
import axios from './http/axios.js'
import {store} from './store/store.js'
import router from './router/config.js'
import reset from '../static/css/reset.css'
import appCss from '../static/css/app.css'
import '../static/css/font-awesome.min.css'
import '../static/css/animate.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import message from './plugins/message'
Vue.use(message)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
