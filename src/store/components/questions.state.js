const state = {
    questions: [],
    offset: 0,
    limit: 10,
    message: 'Show More'
};

const getters = {

};

const actions = {
    fetchAll(context) {
        fetch(`https://private-anon-b78216cfd4-blissrecruitmentapi.apiary-mock.com/questions?limit=${state.limit}&offset=0`)
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            context.commit('FETCH_ALL', res);
        });
    },
    fetchMore(context) {
        context.commit('INCREMENT_OFFSET');
        fetch(`https://private-anon-b78216cfd4-blissrecruitmentapi.apiary-mock.com/questions?limit=${state.limit}&offset=${state.offset}`)
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            if(JSON.stringify(state.questions) == JSON.stringify(res)) return context.commit('CHANGE_MESSAGE');

            const newArray = res.concat(state.questions);
            context.commit('ADD_MORE', newArray);
        });
    },
    search(context, query) {
        var result = '';
        for(var i = 0; i < state.questions.length; i++){
            for(var j = 0; j < state.questions[i].choices.length; j++){
                if(state.questions[i].question === query || state.questions[i].choices[j].choice === query) result = state.questions[i];
            }
        }
        context.commit('SEARCH', [result]);
    }
};

const mutations = {
    FETCH_ALL(state, questions) {
        state.questions = questions;
    },
    ADD_MORE(state,questions){
        state.questions = questions;
    },
    SEARCH(state,result){
        state.questions = result;
    },
    INCREMENT_OFFSET(state){
        state.offset += 10;
    },
    CHANGE_MESSAGE(state){
        state.message = 'No more results';
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};