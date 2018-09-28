<template>
  <div id="app">

    <offline>
      <div slot="online">
        <div v-if="loading">
          <Loading/>
        </div>
        <div v-else>
          <Navbar/>
          <Body />
        </div>
      </div>
      <div slot="offline">
        <b-jumbotron class="jumbo" header="No network connection detected!" lead="It looks like you have no connection to the internet" >
          <p>Please establish a connection and try again.</p>
          <b-btn variant="primary" href="#">Retry</b-btn>
        </b-jumbotron>
      </div>
    </offline>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from './components/Navbar.vue';
import Body from './components/Body.vue'
import Loading from './components/Loading.vue';
import offline from 'v-offline';

export default {
  components: {
    Navbar,
    Body,
    Loading,
    offline
  },
  computed: mapState('loading',[
      'loading'
  ]),
}
</script>

<style>
  .jumbo {
    margin-top:25%
  }
</style>
