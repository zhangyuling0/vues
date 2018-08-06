let state = {
        todolist:[],
        donelist:[],
}
let getters = {

}
let mutations ={
    // 向正在进行中添加数据
    addTodoList(state,action){
        state.todolist.push(action.todo);
    },
    // 删除正在进行中的数据0
    delTodoList(state,action){
        state.todolist.splice(action.index,1);
    },
    todoDone(state,action){
        state.donelist.push(state.todolist[action.index]);
        state.todolist.splice(action.index,1);
    },
    doneTodo(state,action){
        state.todolist.push(state.donelist[action.index]);
        state.donelist.splice(action.index,1);
    },
    // 删除已经完成中的数据
    delDoneList(state,action){
        state.donelist.splice(action.index,1);
    },
    // 修改数据
    editTodoList(state,action){
        state.todolist[action.index].text = action.text;
    },
    editDoneList(state,action){
        state.donelist[action.index].text = action.text;
    }
}
let actions = {

}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}