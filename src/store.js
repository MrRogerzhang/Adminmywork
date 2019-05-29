import Vue from 'vue';
import Vuex from 'vuex';
import * as func from './store/function';
Vue.use(Vuex);


// 定义初始变量
const state = func.local.get() || {
  event: [],
  count: 0
}
// getter相当于computed计算数据属性
const getters = {
  getToDo(state) {
    console.log(state)
    return state.event
  }
}

// 初始派发事件
const actions = {
  addevent(context, param) {
    context.commit('ADDEVENT', param)
  }
}

// actions commit 之后mutation
const mutations = {
  ADDEVENT(state, obj) {
    state.count++
    obj.id = state.count
    state.event.unshift(obj)
    console.log(state)
    console.log(obj)
  }
}


// 全都注册下
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions

});

export default store;
