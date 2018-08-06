<template>
    <div class='wrap'>
        <ul class='list'>
            <li @mouseleave='hoverLi' :class='[active]' v-for='(item,ind) in list'><img :src='item.img' /></li>
        </ul>
    </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapMutations,mapState,mapActions} = createNamespacedHelpers('zhoukao');
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['list'])
    },
    created() {
      this.getList()
    },
    methods:{
        ...mapActions(['getList']),
        hoverLi(){
           console.log(1)
        }
    }
}
</script>
<style>
html,body{
    width:100%;
    height:100%;
}
    *{
        margin:0;
        padding:0;
        list:none;
    }
    .list{
        display:flex;
        width:100%;
        position:fixed;
        bottom:0;
        left:0;
        margin:0 auto
    }
    .list li{
        width:20%;
    }
    .list li.active{
        transform:scale(1.5,1.5);
    }
</style>