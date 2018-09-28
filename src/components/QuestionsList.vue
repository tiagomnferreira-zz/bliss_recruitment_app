<template>
    <div>
        <div>
            <label for="inputLive">Search:</label>
            <b-input-group>
                <b-form-input
                    v-model.lazy="query"
                    type="text"
                    placeholder="Search for something"
                    @change="onChange"
                ></b-form-input>
                <b-input-group-append>
                    <b-btn variant="info" v-on:click="dismiss">Dismiss</b-btn>
                </b-input-group-append>
            </b-input-group>
            <b-form-text id="inputLiveHelp">
                Press Enter to search
            </b-form-text>
        </div>
        <br/>
        <b-card-group deck>
            <b-card header="<b>Questions list</b>">
                <b-list-group v-for="question in questions">
                    <b-list-group-item class="d-flex justify-content-between align-items-center" id="question" :to="'/questions/'+question.id">
                        {{question.question }}
                        <img :src="question.thumb_url"/>
                    </b-list-group-item>
                </b-list-group>
            </b-card>
        </b-card-group>
        <template>
            <b-button class="btn-results" v-on:click="fetchMore" :size="button.size" :variant="button.variant">
                {{
                    message
                }}
            </b-button>
        </template>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "QuestionsList",
    data() {
        return {
            query: '',
            button: { variant: 'primary', size: 'lg' }
        }
    },
    methods: {
        ...mapActions('questions',[
            'fetchAll',
            'search',
            'fetchMore'
        ]),
        onChange() {
            if(this.query === '') this.fetchAll();
            this.search(this.query);
        },
        dismiss() {
            this.query = "";
            this.fetchAll();
        }
    },
    computed: mapState('questions',[
        'questions',
        'message'
    ]),
    beforeMount() {
        this.fetchAll();
    }
}
    
</script>

<style>
    .btn-results{
        margin-top: 5%;
        width: 100%;
    }
    img {
        width: 10%;
        height: 10%;
        float: right;
    }
</style>