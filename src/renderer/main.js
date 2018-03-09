import Vue from 'vue'
import electronSettings from 'electron-settings'
import jQuery from 'jquery'
import VeeValidate from 'vee-validate'

import App from './App'
import router from './router'
import store from './store'
import axios from './others/axios'
import i18n from './localization/i18n'
import helpers from './others/helpers'

window.$ = jQuery
window.jQuery = jQuery
require('./assets/semantic/dist/semantic')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.prototype.$helpers = helpers
Vue.prototype.$settings = electronSettings
Vue.config.productionTip = false

Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
