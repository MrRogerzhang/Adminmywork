import * as type from './mutaion-types'

export default {
  [type.ADDNEW](states, obj) {
    console.log(states)
    console.log(obj)
  }
}
