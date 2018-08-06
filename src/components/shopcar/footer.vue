<template>
<div class="bar-wrapper">
            <div class="bar-right">
                <div class="piece">已选商品<strong class="piece_num">{{number}}</strong>件</div>
                <div class="totalMoney">共计: <strong class="total_text">{{sum}}</strong></div>
                <div class="calBtn"><a href="javascript:;">结算</a></div>
            </div>
    </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapMutations,mapState,mapActions} = createNamespacedHelpers('shopcar');
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['sum','number'])
    }
}
</script>
<style></style>