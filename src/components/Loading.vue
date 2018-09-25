<template>
    <div class="loader">
        <Stretch/>
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
    methods: {
        ...mapActions('loading',[
            'toggle'
        ]),
        getHealthStatus() {
            const vm = this;
            fetch('https://private-anon-70e34e25d8-blissrecruitmentapi.apiary-mock.com/health')
            .then(function (res) {
                return res.json();
            })
            .then(function (resJson) {
                if(resJson.status === 'OK') vm.toggle();
            });
        }
    },
    created(){
        this.getHealthStatus()
    }
}
</script>

<style>
    .loader {
        margin-left: 50%;
        margin-right: 50%;
        margin-top: 25%;
    }
</style>
