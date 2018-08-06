import axios from 'axios';
let state = {
    list:[],
    sum:0,
    number:0,
    flag:true
}
let getters = {

}
let mutations ={
    updatelist(state,action){
        state.list = action
    },
    max(state,action){
        state.list[action.index].list[action.ind].count++;
        let monery= state.list[action.index].list[action.ind].count
        state.list[action.index].list[action.ind].prices= state.list[action.index].list[action.ind].price*monery
    },
    min(state,action){
        if(state.list[action.index].list[action.ind].count === 0){
            return;
        }
        state.list[action.index].list[action.ind].count--;
        let monery= state.list[action.index].list[action.ind].count
        state.list[action.index].list[action.ind].prices= state.list[action.index].list[action.ind].price*monery
    },
    del(state, action) {
        state.list[action.index].list.splice(state.list[action.index].list[action.ind], 1)
    },
    sum(state,action){
        let sum = 0;
        let number = 0;
        state.list.map((val)=>{
            val.list.map((v)=>{
                // sum += v.price*v.count
                if(v.checked){
                    sum += v.price*v.count
                    number += v.count
                }
            })
        })
        state.sum = sum;
        state.number = number
    },
    
    toggleChecked(state, action) {//但选全选
        let arr = [...state.list]
        if (action.medical !== undefined) {
            arr.map((item, index) => {
                if (index === action.hospital) {
                    item.list.map((v, i) => {
                        if (i === action.medical) {
                            v.checked = !v.checked
                            return v
                        }
                        return v
                    })
                    let all = item.list.some((a) => {
                        return a.checked == false
                    })
                    item.checkAll = !all
                    return item
                }
                return item
            })
        } else {
            arr.map((item, index) => {
                if (index === action.hospital) {
                    item.checkAll = !item.checkAll
                    item.list.map((v, i) => {
                        return v.checked = item.checkAll
                    })
                    return item
                }
                return item
            })
        }
    },
    allchecked(state,action){
        if(state.flag===true){
            state.list.map((item,ind)=>{
                    item.checkAll === true
            })
        }
    }
}
let actions = {
    getList({commit,state},action){
        axios.get('/list').then((res)=>{
            commit('updatelist',res.data)
        })
    },
    max({commit},action){
        commit('max',action);
        commit('sum')
    },
    min({commit},action){
        commit('min',action);
        commit('sum')
    },
    del({commit},action){
        commit('del', action);
    },
    toggleChecked({ commit }, action) {
        commit('toggleChecked', action);
        commit('sum')
    },
    allchecked({commit},action){
        commit('allchecked', action);
        commit('sum')
    }
}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}