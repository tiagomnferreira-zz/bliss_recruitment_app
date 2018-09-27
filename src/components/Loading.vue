<template>
    <div class="center">
        <div v-if="statusOk">
            <Stretch/>
        </div>
        <div v-else>
            <template>
                <b-button v-on:click="getHealthStatus" :size="button.size" :variant="button.variant">
                    Retry
                </b-button>
            </template>
        </div>
    </div>
</template>

<script>
import {Stretch} from 'vue-loading-spinner'
import { mapActions } from 'vuex';
export default {
    name: 'Loading',
    components: {
        Stretch
    },
    data() {
        return {
            statusOk: true,
            button: { variant: 'danger', size: 'lg' }
        };
    },
    methods: {
        ...mapActions('loading',[
            'toggle'
        ]),
        getHealthStatus() {
            const vm = this;
            vm.statusOk = true;
            fetch('https://private-anon-70e34e25d8-blissrecruitmentapi.apiary-mock.com/health')
            .then(function (res) {
                return res.json();
            })
            .then(function (resJson) {
                if(resJson.status === 'OK') vm.toggle();
                else if(resJson.status === 'NOT OK') vm.statusOk = false;
            });
        }
    },
    created(){
        this.getHealthStatus()
    }
}
</script>

<style>
    .center {
        margin-left: 50%;
        margin-right: 50%;
        margin-top: 25%;
    }
</style>
