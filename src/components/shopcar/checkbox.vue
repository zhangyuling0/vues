<template>
    <div class='input'>
       <div :class="checked?'checkbox checked':'checkbox'" :type="type" @click="toggleChecked({hospital,medical})"></div>
    </div>
</template>
<script>
    import {createNamespacedHelpers} from 'vuex'
    const {mapMutations,mapState,mapActions} = createNamespacedHelpers('shopcar');
    export default {
        name: 'vue',
        data() {
            return {

            }
        },
        props: {
            type: {
                type: String
            },
            checked: {
                type: Boolean,
                isRequired: true
            },
            medical: {
                type: Number
            },
            hospital: {
                type: Number
            }
        },
        methods: {
            ...mapActions(["toggleChecked"])
        }
    }
</script>
<style scoped>
    .checkbox {
        position: relative;
        width: 20px;
        height: 20px;
        border: 1px solid #ccc;
    }

    .checkbox[type="circle"] {
        border-radius: 100%;
    }

    .checkbox[type="circle"]:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 100%;

        left: 50%;
        top: 50%;
        margin: -4px 0 0 -4px;
    }

    .checked[type="circle"]:after {
        background: skyblue;
    }

    .checkbox[type="square"]:after {
        content: "";
        position: absolute;
        width: 14px;
        height: 8px;
        left: 2px;
        top: 3px;
        border: 1px solid transparent;
        transform: rotate(-45deg);
    }

    .checked[type="square"]:after {
        border-left-color: skyblue;
        border-bottom-color: skyblue;
    }
</style>