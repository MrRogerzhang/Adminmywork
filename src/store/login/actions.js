 export default {
   LoginByUsername({
     commit
   }, userInfo) {
     const username = userInfo.username.trim()
     return new Promise((resolve, reject) => {
       LoginByUsername(username, userInfo).then(response => {
         const data = response.data
         Cookies.set('Token', response.data.token)
         commit('SET_TOKEN', data.token)
         resolve()
       }).catch(err => {
         reject(err)
       })
     })
   }
 }
