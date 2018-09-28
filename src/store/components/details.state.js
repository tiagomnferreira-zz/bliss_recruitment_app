const state = {
    question: {},
    sent: false
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
    },
    share(context, data) {
        fetch(`https://private-anon-b78216cfd4-blissrecruitmentapi.apiary-mock.com/share?destination_email=${data.email}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data.question)
        })
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            context.commit('EMAIL_SENT')
        })     
    }
};

const mutations = {
    FETCH_ONE(state, question) {
        state.question = question;
    },
    EMAIL_SENT(state) {
        state.sent = true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};