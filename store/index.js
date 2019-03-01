import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import navbar from './modules/navbar '

Vue.use(Vuex)

const store = () => new Vuex({
  module: {
    city,
    navbar
  },
  action: {}
})

export default store
