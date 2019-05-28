export default {
  addevent: ({
    commit
  }, param) => commit('ADDNEW', {
    item: param
  })
}
