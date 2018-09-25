import Vue from 'vue';
import Vuex from 'vuex';
import loading from './components/loading.state';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        loading
    }
});