<template>
     <div>
        <ul class="order_lists" v-for='(item,ind) in item.list'>
                    <li class="list_chk">
                          <Checkbox type="square" :medical="ind" :hospital="index" :checked="item.checked" ></Checkbox>
                         
                    </li>
                    <li class="list_con">
                        <div class="list_img"><a href="javascript:;"><img :src='item.src' /></a></div>
                        <div class="list_text"><a href="javascript:;">{{item.title}}</a></div>
                    </li>
                    <li class="list_info">
                        <p>{{item.rule}}</p>
                        <p>{{item.size}}</p>
                    </li>
                    <li class="list_price">
                        <p class="price">￥{{item.price}}</p>
                    </li>
                    <li class="list_amount">
                        <div class="amount_box">
                            <a @click="min({ind,index})" href="javascript:;" class="reduce reSty">-</a>
                            <span>{{item.count}}</span>
                            <a @click="max({ind,index})" href="javascript:;" class="plus">+</a>
                        </div>
                    </li>
                    <li class="list_sum">
                        <p class="sum_price">￥{{item.prices}}</p>
                    </li>
                    <li class="list_op">
                        <p class="del" @click='del({index,ind})'><a href="javascript:;" class="delBtn">移除商品</a></p>
                    </li>
        </ul>
     </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapMutations,mapState,mapActions} = createNamespacedHelpers('shopcar');
import Checkbox from './checkbox'
    export default {
    data(){
        return {

        }
    },
    components:{
         Checkbox
    },
    computed:{
        ...mapState(['list'])
    },
    props:['item','index'],
    methods:{
        ...mapActions(['max','min','del'])
    }
}
</script>
<style></style>