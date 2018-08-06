<template>
            <div>
                <div class="cartBox" v-for='(item,index) in list'>
                    <div class="shop_info">
                        <div class="all_check">
                              <Checkbox type="circle" :hospital="index" :checked="item.checkAll"></Checkbox>
                        </div>
                        <div class="shop_name">
                            店铺：<a href="javascript:;">{{item.title}}</a>
                        </div>
                 </div>
            <div class="order_content">
                <Item :item='item' :index="index"/>
            </div>
           
        </div>
         
    </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapMutations,mapState,mapActions} = createNamespacedHelpers('shopcar');
import Item from './item'

import Checkbox from './checkbox'
export default {
    data(){
        return {

        }
    },
    components:{
          Item,
          Checkbox
    },
    computed:{
        ...mapState(['list'])
    },
     created() {
      this.getList()
    },
    methods:{
        ...mapActions(['getList'])
    }
}
</script>
<style>

</style>