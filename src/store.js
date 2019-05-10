import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 初始化状态
    count: 0,
    someLists: []

  },
  mutations: {
    // 处理状态
    increment(state, payload) {
      state.count += payload.step || 1;
    }

  },
  actions: {
    // 提交改变后的状态
    increment(context, param) {
      context.state.count += param.step;
      context.commit('increment', context.state.count) //提交改变后的state.count值
    },
    incrementStep({
      state,
      commit,
      rootState
    }) {
      if (rootState.count < 100) {
        store.dispatch('increment', { //调用increment()方法
          step: 10
        })
      }
    }
  },
  getters: {
    //处理列表项
    someLists: state => param => {
      return state.someLists.filter(() => param.done)
    }
  }
})
