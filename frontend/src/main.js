import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msgs'

Vue.config.productionTip = false

// Temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluaXN0cmFkb3IiLCJlbWFpbCI6ImFkbWluQHN0ZXAuY29tIiwiYWRtaW4iOjEsImlldCI6MTU5MDM0NjgwNiwiZXhwIjoxNTkwNjA2MDA2fQ.TGNHNUZa6rXUsci8XMCT5witpXNc8Uacv_MhnQZOmk4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')