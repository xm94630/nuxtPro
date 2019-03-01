import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import navbar from './modules/navbar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    city,
    navbar
  },
  actions: {

    // 这个我是从官网上拿下来的。这个是做什么用的呢：
    // 如果我想把请求过来的数据，不想让费一次请求机会，我如何再传递给客户端。
    // 这个时候，数据的同步状态是要同vuex，这个没有疑问。

    // nuxtServerInit({ commit }, { req }) {
    //   if (req.session.user) {
    //     commit('user', req.session.user)
    //   }
    // }
  }
})

export default store
