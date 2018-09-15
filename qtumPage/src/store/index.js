import Vue from 'vue'
import Vuex from 'vuex'
import usuario from './modules/usuario'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {usuario},
    getters
})
export default store