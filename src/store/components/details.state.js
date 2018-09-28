const state = {
    question: {}
};

const getters = {

};

const actions = {
    fetchOne(context, id) {
        fetch(`https://private-anon-b78216cfd4-blissrecruitmentapi.apiary-mock.com/questions/${id}`)
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            context.commit('FETCH_ONE', res);
        });
    }
};

const mutations = {
    FETCH_ONE(state, question) {
        state.question = question;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};