// 注意这里的后面的（）不要忘记写
const state = () => ({
  app: []
})

const mutations = {
  add(store, text) {
    return store.app.push(text)
  }
}

const action = {
  add({commit, text}) {
    commit('add', text)
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  action
}
