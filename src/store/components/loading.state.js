const state = {
    loading: true,
};

const getters = {
};

const actions = {
    toggle(context) {
        context.commit('TOGGLE_LOADING');
    }
};

const mutations = {
    TOGGLE_LOADING(state) {
        state.loading = !state.loading;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};