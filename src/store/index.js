

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import other from './other';

const store = new Vuex.Store({
    modules:{
        other
    }
})


export default store