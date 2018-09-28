<template>
    <div>
        <b-card-group deck>
            <b-card :title="question.question"
            :sub-title="question.published_at">
                <b-table striped :items="question.choices">
                    <template slot="upvote" slot-scope="row">
                        <b-button size="sm" class="mr-2">
                            Teste
                        </b-button>
                    </template>
                </b-table>
                <br/>
                <div>
                    <b-card :img-src="question.image_url"
                            img-alt="Card image"
                            img-bottom>
                        <p class="card-text">
                            Image attached
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
    methods: {
        ...mapActions('details',[
            'fetchOne'
        ])
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

</style>
