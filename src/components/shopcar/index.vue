<template>
        <section class="cartMain">
        <div class="cartMain_hd">
            <ul class="order_lists cartTop">
                <li class="list_chk">
                    <!--所有商品全选-->
                    <input @click='allchecked' type="checkbox" id="all" class="whole_check">
                    全选
                </li>
                <li class="list_con">商品信息</li>
                <li class="list_info">商品参数</li>
                <li class="list_price">单价</li>
                <li class="list_amount">数量</li>
                <li class="list_sum">金额</li>
                <li class="list_op">操作</li>
            </ul>
           
            <shopList />
             <Footer />
        </div>
        </section>
</template>
<script>
import shopList from './shoplist'
import Footer from './footer'
import Checkbox from './checkbox'
import {createNamespacedHelpers} from 'vuex'
const {mapMutations,mapState,mapActions} = createNamespacedHelpers('shopcar');
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['list','flag'])
    },
    components:{
        shopList,
         Footer,
        Checkbox
    },
    methods:{
        ...mapActions(['allchecked'])
    }
}
</script>
<style>

</style>