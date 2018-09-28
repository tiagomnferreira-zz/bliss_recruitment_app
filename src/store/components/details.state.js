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
    },
    upvote(context, body) {
        body.choice.votes += 1;
        fetch(`https://private-anon-b78216cfd4-blissrecruitmentapi.apiary-mock.com/questions/${body.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...this.question,
                body
            })
        })
        .then(function(res){
            return res.json();
        })
        .then(function(res) {
            context.commit('FETCH_ONE',{
                ...state.question,
                body
            });
        })
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