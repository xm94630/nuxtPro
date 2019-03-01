// 注意这里的后面的（）不要忘记写
const state = () => ({
  app: []
})

const mutations = {
  add(state, text) {
    state.app.push(text)
  }
}

const actions = {
  add({commit}, text) {
    commit('add', text)
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}
