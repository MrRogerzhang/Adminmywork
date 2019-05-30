import * as type from './mutaion-types';

export default {
  [type.ADDEVENT](states, obj) {
    states.count++
    obj.items.id = states.count
    states.event.unshift(obj.items)
  },



  [type.MOVECANCEL](state, id) {
    // return state.event.filter((item, index) => {

    //   if (item.id == id.id) {
    //     item.type = 3
    //     // var item = item
    //     state.event.splice(index, 1)
    //   }
    //   return state.event.unshift(item)
    // })

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
  }







}
