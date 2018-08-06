import todoList from '@/components/todolist/index.vue';
import shopCar from '@/components/shopcar/index.vue';
import zhoukoayi from '@/components/zhoukao/index.vue';
let routes = [
    {
        path: '/todolist',
        component: todoList
    },
    {
        path:'/shopcar',
        component:shopCar
    },
    {
        path:'/zhoukao',
        component:zhoukoayi
    }
]
export default routes;