<template>
    <div>
        <b-button class="btn-back"  size="lg" variant="primary" to="/questions">Back</b-button>
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
            disabled: false
        }
    },
    methods: {
        ...mapActions('details',[
            'fetchOne',
            'upvote'
        ]),
        updateQuestion(id, value){
            this.disabled = !this.disabled;
            const body = {
                id: this.id,
                choice: value
            }
            this.upvote(body);
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
    .btn-back{
        margin-bottom: 2%;
    }
</style>
