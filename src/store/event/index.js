 import actions from './actions.js';
 import mutations from './mutations.js';
 import getters from './getters'
 import * as func from '../function';

 const state = func.local.get() || {
   event: [],
   count: 0
 }
console.log(state)

 export default {
   state,
   actions,
   mutations,
   getters

 }
