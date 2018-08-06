import Vue from 'vue';
import Vuex,{Store} from 'vuex';
import modules from './modules';
import {state,getters,mutations,actions} from './root'
Vue.use(Vuex);
const store = new Store({
    state,
    getters,
    mutations,
    actions,
    strict:true,
    modules
});
window.store = store;
export default store;