<template>
    <li>
           <p>
                <input :checked='local' type='checkbox' @change='check'>
                <input @keydown='keyDown' v-model='vtext' v-show='isShow' type='text' />
                <p v-show='!isShow' @click='showInput'>{{text}}</p>
           </p>
           <span @click='del'>delete</span>
    </li>
</template>
<script>
import {mapMutations} from 'vuex';
    export default {
        data(){
            return {
                isShow:false,
                vtext:this.text,
            }
        },
        props:['text','index','local'],
        mouted(){
            console.log(this.local,this.text)
        },
        methods:{
            ...mapMutations('todolist',['editTodoList','editDoneList','delTodoList','delDoneList','todoDone','doneTodo']),
            showInput(){
                this.isShow = true;
            },
            keyDown(event){
                if(event.keyCode===13){
                    let str  = !this.local?'todolist/editTodoList':'todolist/editDoneList';
                    this.$store.commit(str,{index:this.index,text:this.vtext});
                    this.isShow = false;
                }
                
            },
            del(){
                let str  = !this.local?'delTodoList':'delDoneList';
                this[str]({index:this.index});
            },
            check(event){
                let {vtext,index} = this;
                let deal = event.target.checked;
                if(deal){
                    // this.$store.commit('todolist/todoDone',{index});
                    this.todoDone({index})
                }else{
                    //  this.$store.commit('todolist/doneTodo',{index});
                    this.doneTodo({index})
                }
            }
        }
    }
</script>
<style>
    .list ul li,.list ol li{
        height:50px;
        line-height:50px;
        display:flex;
        justify-content:space-between;
    }
    .list ul li p input,.list ol li p input{
       margin-right:10px;
    }
    .list ul li span,.list ol li span{
        background:#08bfae;
        color:#fff;
        height:30px;
        line-height:30px;
        border-radius:5px;
        margin-top:10px;
    }
</style>