<template>
    <div>
        <div class="btn-group">
            <b-button size="lg" variant="primary" to="/questions">Back</b-button>
            <b-btn variant="success" size="lg" @click="modalShow = !modalShow">Share Screen</b-btn>
            <b-modal v-model="modalShow" title="Share this page's content" ok-title="Send" @ok="sendEmail">
                <b-form-input v-model="email" type="email" placeholder="Destination e-mail"></b-form-input>
            </b-modal>
        </div>
        <b-card-group deck>
            <b-card :title="question.question"
            :sub-title="question.published_at">
                <b-table striped :items="question.choices" :fields="fields">
                    <template slot="index" slot-scope="data">
                        {{data.index + 1}}
                    </template>
                    <template slot="upvote" slot-scope="data">
                        <b-button :disabled="!!disabled" @click="updateQuestion(question.id, question.choices[data.index])" variant="success" size="sm" class="mr-2">
                            Vote
                        </b-button>
                    </template>
                </b-table>
                <br/>
                <div>
                    <b-card :img-src="question.image_url"
                            img-alt="Card image"
                            img-bottom>
                        <p class="card-text">
                            Question image
                        </p>
                    </b-card>
                </div>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'QuestionDetail',
    props: [
        'id'
    ],
    data() {
        return {
            fields: [ 'index','choice', 'votes', 'upvote' ],
            disabled: false,
            email: '',
            modalShow: false
        }
    },
    methods: {
        ...mapActions('details',[
            'fetchOne',
            'upvote',
            'share'
        ]),
        updateQuestion(id, value){
            this.disabled = !this.disabled;
            const body = {
                id: this.id,
                choice: value
            }
            this.upvote(body);
        },
        sendEmail(){
            const data = {
                question : this.question,
                email: this.email
            }
            this.share(data);
        }
    },
    computed: mapState('details',[
        'question',
    ]),
    beforeMount() {
        this.fetchOne(this.id);
    }
}
</script>

<style>
    .btn-group {
        margin-bottom: 2%;
        display: inline;
    }
    
</style>
