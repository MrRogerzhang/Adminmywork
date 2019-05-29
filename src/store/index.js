import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import event from './event/index'


export default new Vuex.Store({
  modules: {
    event
  }
})
