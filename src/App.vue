<template>
  <div id="app">
    <Navbar v-if="currentUser"></Navbar>
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {Navbar},
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style lang="scss">
  @import './assets/scss/app.scss';

</style>
