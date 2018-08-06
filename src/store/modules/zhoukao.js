import axios from 'axios';
let state = {
    list:[]
}
let getters = {

}
let mutations ={
    updatelist(state,action){
        state.list = action
    }
}
let actions = {
    getList({commit,state},action){
        axios.get('/imgdata').then((res)=>{
            commit('updatelist',res.data)
        })
    }
}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}