<template>
  <div id="app">

    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else>
      <HomePage/>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HomePage from './components/HomePage.vue';
import Loading from './components/Loading.vue';

export default {
  components: {
    HomePage,
    Loading
  },
  computed: mapState('loading',[
      'loading'
  ]),
}
</script>

<style>

</style>
