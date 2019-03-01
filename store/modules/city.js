// 注意这里的后面的（）不要忘记写
const state = () => ({
  list: []
})

const mutations = {
  add(store, text) {
    return store.list.push(text)
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
