// 注意这里的后面的（）不要忘记写
const state = () => ({
  list: ['奥特曼', '小怪兽']
})

const mutations = {
  add(state, text) {
    state.list.push(text)
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
