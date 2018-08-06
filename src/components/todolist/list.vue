<template>
    <div class='list'>
        <h2>正在进行<span>{{todolist.todolist.length}}</span></h2>
        <ul>    
            <Item v-for='(item,key) in todolist.todolist' :key='key' :text='item.text' :index='key' local='todolist' />
        </ul>
        <h2>已经完成<span>{{todolist.donelist.length}}</span></h2>
        <ol>
           
            <Item v-for='(item,key) in todolist.donelist' :key='key' :text='item.text' :index='key' local='donelist' />
        </ol>
    </div>
</template>
<script>
import Item from './item.vue'
import {mapState} from 'vuex';
    export default {
        data(){
            return {

            }
        },
        computed:{
            ...mapState(['todolist'])
        },
        components:{
            Item
        }
    }
</script>
<style>
    *{
        margin:0;
        padding:0;
        list-style:none;
    }
    .list ul,.list ol{
        padding-left:5%;
        padding-right:5%;
        margin-top:10px;
    }
    
</style>