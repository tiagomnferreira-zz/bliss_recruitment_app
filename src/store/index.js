import Vue from 'vue';
import Vuex from 'vuex';
import loading from './components/loading.state';
import questions from './components/questions.state'
import details from './components/details.state'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        loading,
        questions,
        details
    }
});