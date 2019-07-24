import * as type from './mutaion-types';
import {
  getDate
} from '../function'


export default {
  [type.ADDEVENT](states, obj) {
    console.log(states)
    console.log(obj)
    states.count++
    obj.items.id = states.count
    states.event.unshift(obj.items)
  },



  [type.MOVECANCEL](state, id) {
    for (var i = 0; i < state.event.length; i++) {
      if (state.event[i].id == id.id) {
        state.event[i].type = 3
        var item = state.event[i]
        state.event.splice(i, 1)
      }
    }
    return state.event.unshift(item)
  },




  // 恢复至未完成

  [type.MOVETODO](state, id) {
    for (var i = 0; i < state.event.length; i++) {
      if (state.event[i].id == id.id) {
        state.event[i].type = 1
        var item = state.event[i]
        state.event.splice(i, 1)
      }
    }
    return state.event.unshift(item)
  },

  [type.MOVETODONE](state, id) {
    for (var i = 0; i < state.event.length; i++) {
      if (state.event[i].id == id.id) {
        let time = getDate()
        state.event[i].type = 2
        state.event[i].time = time
        var item = state.event[i]
        state.event.splice(i, 1)
      }
    }
    return state.event.unshift(item)
  }





}
