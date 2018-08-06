<template>
   <div>
     <h1>todo list demo</h1>
    <input v-model='val' @keydown='keyDown' class='inp' placeholder='input then hit enter' type='text' />
    <List />
   </div>
</template>

<script>
import List from './list.vue';
import {createNamespacedHelpers} from 'vuex'
const {mapMutations} = createNamespacedHelpers('todolist');
export default {
  name: 'App',
  components:{
    List
  },
  data(){
    return {
      val:''
    }
  },
  methods:{
    ...mapMutations({add:'addTodoList'}),
    keyDown(event){
        if(event.keyCode === 13){
          this.add({todo:{text:this.val}});
          this.val = '';
        }
    }
  }
}
</script>

<style>
html,body{
  width:100%;
    height:100%;
    background:#eee;
}
  #app{
    width:100%;
    height:100%;
    margin:0 auto;
    background:#eee;
  }
  #app h1{
    text-align:center;
  }
  .inp{
    width:90%;
    margin-left:5%;
    height:30px;
    border:0;
    border:1px solid #9bd6d0;
    padding-left:5px;
  }
</style>
