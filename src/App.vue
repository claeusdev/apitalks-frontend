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
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Abril Fatface', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  
}

</style>
