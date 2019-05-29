export default {
  addevent: ({
    commit
  }, params) => commit('ADDNEW', {
    items: params
  })
}
