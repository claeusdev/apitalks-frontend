<template>
  <div class=" container">
    <div class="homepage">
      <div class="starbucks">
        <div class="starbucks-logo">

        </div>
      </div>
      <div class="cta">
        <div class="cta__text">
          <h1>Find your favorite starbucks store around the world</h1>
          <router-link to="/home" tag="button" class="button green">
            Get Started
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      currentUser: firebase.auth().currentUser,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
