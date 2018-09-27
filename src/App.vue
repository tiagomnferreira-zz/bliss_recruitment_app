<template>
  <div id="app">

    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else>
      <Navbar/>
      <Body />
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from './components/Navbar.vue';
import Body from './components/Body.vue'
import Loading from './components/Loading.vue';

export default {
  components: {
    Navbar,
    Body,
    Loading
  },
  computed: mapState('loading',[
      'loading'
  ]),
}
</script>

<style>

</style>
