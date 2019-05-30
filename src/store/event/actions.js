export default {

  // 新增事件
  addevent: ({
    commit
  }, param) => commit('ADDEVENT', {
    items: param
  }),

  // 取消事件
  moveCancel: ({
    commit
  }, param) => commit('MOVECANCEL', {
    id: param
  }),

  moveToDo: ({
    commit
  }, param) => {
    commit('MOVETODO', {
      id: param
    })
  },

  moveToDone: ({
    commit
  }, param) => {
    commit('MOVETODONE', {
      id: param
    })
  }
}
