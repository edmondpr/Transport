// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: store
})
