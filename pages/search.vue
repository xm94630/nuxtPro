<template>
  <section class="">
    {{ name }}
    <ul>
      <li v-for="(one,idx) in list" :key="idx" >{{one}}</li>
    </ul>
  </section>
</template>
<script>
import axios from "axios"
export default {
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head() {
    return {
      title: `About Page (${this.name}-side)`
    }
  },
  data(){
    return {
      list:[]
    }
  },

  //这个是下发到浏览器再进行的数据读取
  async mounted(){
    let {status,data:{list}} = await axios.get('/city/list2')
    this.list = list
  },

  //这个是服务器端就完成渲染
  async asyncData(){
    let {status,data:{list}} = await axios.get('http://127.0.0.1:3000/city/list')
    return {list}
  },

  //fetch主要是操作vuex用的，下面的这个是官网的案例直接拿过的
  // fetch ({ store, params }) {
  //   return axios.get('http://my-api/stars')
  //   .then((res) => {
  //     store.commit('setStars', res.data)
  //   })
  // }
}
</script>

<style scoped>

</style>
